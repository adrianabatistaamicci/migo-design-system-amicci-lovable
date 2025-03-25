
import React from 'react';
import PaletteTable from './PaletteTable';
import { TailwindTabs } from '@/components/ui/tabs';
import { colorsData } from '@/data/colorsData';

const ColorPalettes: React.FC = () => {
  const primaryPalettes = colorsData.filter(palette => 
    ['Primary', 'Secondary', 'Neutral'].includes(palette.name)
  );
  
  const feedbackPalettes = colorsData.filter(palette => 
    ['Success', 'Info', 'Warning', 'Error'].includes(palette.name)
  );
  
  const semanticTabs = [
    { name: 'Base', value: 'base' },
    { name: 'Feedback', value: 'feedback' },
  ];

  return (
    <div>
      <TailwindTabs
        tabs={semanticTabs}
        defaultValue="base"
        variant="pillsGray"
        className="mb-6"
      >
        {semanticTabs.map(tab => (
          <div key={tab.value} className={tab.value === 'base' ? 'block' : 'hidden'}>
            <PaletteTable palettes={primaryPalettes} />
          </div>
        ))}
        
        {semanticTabs.map(tab => (
          <div key={tab.value} className={tab.value === 'feedback' ? 'block' : 'hidden'}>
            <PaletteTable palettes={feedbackPalettes} />
          </div>
        ))}
      </TailwindTabs>
    </div>
  );
};

export default ColorPalettes;
