
import React, { useState } from 'react';
import { colorUtils } from '@/utils/colorUtils';
import ComponentCard from '@/components/ComponentCard';
import { PaletteItem } from '@/data/colorsData';

interface PaletteTableProps {
  palettes: PaletteItem[]
}

const PaletteTable: React.FC<PaletteTableProps> = ({ palettes }) => {
  const [showColorValues, setShowColorValues] = useState<{[key: string]: boolean}>({});
  
  const toggleColorValues = (paletteKey: string) => {
    setShowColorValues(prev => ({
      ...prev,
      [paletteKey]: !prev[paletteKey]
    }));
  };
  
  return (
    <div className="space-y-8">
      {palettes.map((palette) => (
        <ComponentCard 
          key={palette.name}
          title={palette.name.charAt(0).toUpperCase() + palette.name.slice(1)}
          description={`Paleta ${palette.name} para uso em componentes de ${palette.description}`}
        >
          <div className="flex justify-end mb-2">
            <button
              onClick={() => toggleColorValues(palette.name)}
              className="text-sm text-gray-500 hover:text-gray-700 underline"
            >
              {showColorValues[palette.name] ? 'Esconder valores' : 'Mostrar valores'}
            </button>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {palette.variants.map((variant) => {
              // Check if color is light to determine text color
              const isLightColor = variant.hexValue ? colorUtils.getLuminance(variant.hexValue) > 0.55 : false;
              const textColorClass = variant.textColor || (isLightColor ? 'text-gray-900' : 'text-white');
              
              return (
                <div 
                  key={variant.name}
                  className="rounded-md overflow-hidden"
                >
                  <div 
                    className={`p-4 flex justify-between items-center ${textColorClass}`}
                    style={{ backgroundColor: variant.hexValue }}
                  >
                    <span className="font-medium">{variant.name}</span>
                    {showColorValues[palette.name] && variant.hexValue && (
                      <div className="text-sm">
                        <div>{variant.hexValue}</div>
                        <div>{colorUtils.hexToRgb(variant.hexValue)}</div>
                        <div>{colorUtils.hexToHsl(variant.hexValue)}</div>
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

export default PaletteTable;
