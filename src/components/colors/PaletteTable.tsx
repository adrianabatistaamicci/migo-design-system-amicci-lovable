
import React, { useState } from 'react';
import { colorUtils } from '@/utils/colorUtils';
import ComponentCard from '@/components/ComponentCard';

interface PaletteTableProps {
  palettes: {
    [key: string]: {
      [key: string]: string;
    }
  }
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
      {Object.entries(palettes).map(([paletteKey, palette]) => (
        <ComponentCard 
          key={paletteKey}
          title={paletteKey.charAt(0).toUpperCase() + paletteKey.slice(1)}
          description={`Paleta ${paletteKey} para uso em componentes de ${paletteKey}`}
        >
          <div className="flex justify-end mb-2">
            <button
              onClick={() => toggleColorValues(paletteKey)}
              className="text-sm text-gray-500 hover:text-gray-700 underline"
            >
              {showColorValues[paletteKey] ? 'Esconder valores' : 'Mostrar valores'}
            </button>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {Object.entries(palette).map(([variantKey, colorValue]) => {
              // Check if color is light to determine text color
              const isLightColor = colorUtils.getLuminance(colorValue) > 0.55;
              const textColorClass = isLightColor ? 'text-gray-900' : 'text-white';
              
              return (
                <div 
                  key={variantKey}
                  className="rounded-md overflow-hidden"
                >
                  <div 
                    className={`p-4 flex justify-between items-center ${textColorClass}`}
                    style={{ backgroundColor: colorValue }}
                  >
                    <span className="font-medium">{variantKey}</span>
                    {showColorValues[paletteKey] && (
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

export default PaletteTable;
