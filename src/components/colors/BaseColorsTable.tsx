
import React, { useState } from 'react';
import { colorUtils } from '@/utils/colorUtils';
import ComponentCard from '@/components/ComponentCard';

interface BaseColorsTableProps {
  baseColors: {
    [key: string]: {
      [key: string]: string;
    }
  }
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
      {Object.entries(baseColors).map(([colorKey, shades]) => (
        <ComponentCard 
          key={colorKey}
          title={colorKey.charAt(0).toUpperCase() + colorKey.slice(1)}
          description={`Escala completa de ${colorKey} para uso em toda a interface`}
        >
          <div className="flex justify-end mb-2">
            <button
              onClick={() => toggleColorValues(colorKey)}
              className="text-sm text-gray-500 hover:text-gray-700 underline"
            >
              {showColorValues[colorKey] ? 'Esconder valores' : 'Mostrar valores'}
            </button>
          </div>
          
          <div className="grid grid-cols-1 gap-2">
            {Object.entries(shades).map(([shade, colorValue]) => {
              // Check if color is light to determine text color
              const isLightColor = colorUtils.getLuminance(colorValue) > 0.55;
              const textColorClass = isLightColor ? 'text-gray-900' : 'text-white';
              
              return (
                <div 
                  key={shade}
                  className="rounded-md overflow-hidden"
                >
                  <div 
                    className={`p-4 flex justify-between items-center ${textColorClass}`}
                    style={{ backgroundColor: colorValue }}
                  >
                    <span className="font-medium">{shade}</span>
                    {showColorValues[colorKey] && (
                      <div className="text-sm">
                        <div>{colorValue}</div>
                        <div>{colorUtils.hexToRgb(colorValue)}</div>
                        <div>{colorUtils.hexToHsl(colorValue)}</div>
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
