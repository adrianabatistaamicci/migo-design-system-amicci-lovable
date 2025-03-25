
import React, { useState } from 'react';
import { TailwindTabs } from "@/components/ui/tabs";
import ColorOverview from '@/components/colors/ColorOverview';
import AccessibilityDemo from '@/components/colors/AccessibilityDemo';
import BaseColorsTable from '@/components/colors/BaseColorsTable';
import PaletteTable from '@/components/colors/PaletteTable';
import Header from '@/components/library-components/Header';
import { baseColorsData, paletteData } from '@/data/colorsData';

const Colors = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [simulationType, setSimulationType] = useState('normal');

  const handleSimulation = (type: string) => {
    setSimulationType(type === simulationType ? 'normal' : type);
  };

  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Sistema de Cores" 
        description="Nosso sistema de cores é construído com variáveis CSS para suportar temas e personalização."
        type="foundations"
      />

      <div className="mt-8">
        <TailwindTabs 
          className=""
          defaultValue="overview" 
          tabs={[
            { name: 'Visão geral', value: 'overview' },
            { name: 'Cores Base', value: 'base-colors' },
            { name: 'Paletas Semânticas', value: 'semantic-palettes' },
            { name: 'Acessibilidade', value: 'accessibility' }
          ]}
          variant="pillsGray"
          onChange={value => setActiveTab(value)}
        />
        
        <div className="mt-6 w-full">
          {activeTab === 'overview' && <ColorOverview />}
          {activeTab === 'base-colors' && <BaseColorsTable baseColors={baseColorsData} />}
          {activeTab === 'semantic-palettes' && <PaletteTable palettes={paletteData} />}
          {activeTab === 'accessibility' && (
            <AccessibilityDemo 
              simulationType={simulationType} 
              handleSimulation={handleSimulation} 
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Colors;
