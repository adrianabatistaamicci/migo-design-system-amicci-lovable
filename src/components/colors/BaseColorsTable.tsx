
import React, { useState } from 'react';
import { colorUtils } from '@/utils/colorUtils';
import ComponentCard from '@/components/ComponentCard';
import { BaseColor } from '@/data/colorsData';

interface BaseColorsTableProps {
  baseColors: BaseColor[]
}

const BaseColorsTable: React.FC<BaseColorsTableProps> = ({ baseColors }) => {
  const [showColorValues, setShowColorValues] = useState<{[key: string]: boolean}>({});
  
  const toggleColorValues = (colorKey: string) => {
    setShowColorValues(prev => ({
      ...prev,
      [colorKey]: !prev[colorKey]
    }));
  };
  
  return (
    <div className="space-y-8">
      {baseColors.map((colorGroup) => (
        <ComponentCard 
          key={colorGroup.name}
          title={colorGroup.name.charAt(0).toUpperCase() + colorGroup.name.slice(1)}
          description={`Escala completa de ${colorGroup.name} para uso em toda a interface`}
        >
          <div className="flex justify-end mb-2">
            <button
              onClick={() => toggleColorValues(colorGroup.name)}
              className="text-sm text-gray-500 hover:text-gray-700 underline"
            >
              {showColorValues[colorGroup.name] ? 'Esconder valores' : 'Mostrar valores'}
            </button>
          </div>
          
          <div className="grid grid-cols-1 gap-2">
            {colorGroup.weights.map((colorItem) => {
              // Check if color is light to determine text color
              const isLightColor = colorUtils.getLuminance(colorItem.hexValue) > 0.55;
              const textColorClass = isLightColor ? 'text-gray-900' : 'text-white';
              
              return (
                <div 
                  key={colorItem.weight}
                  className="rounded-md overflow-hidden"
                >
                  <div 
                    className={`p-4 flex justify-between items-center ${textColorClass}`}
                    style={{ backgroundColor: colorItem.hexValue }}
                  >
                    <span className="font-medium">{colorItem.weight}</span>
                    {showColorValues[colorGroup.name] && (
                      <div className="text-sm">
                        <div>{colorItem.hexValue}</div>
                        <div>{colorUtils.hexToRgb(colorItem.hexValue)}</div>
                        <div>{colorUtils.hexToHsl(colorItem.hexValue)}</div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </ComponentCard>
      ))}
    </div>
  );
};

export default BaseColorsTable;
