
import React, { useState } from 'react';
import Header from '@/components/library-components/Header';
import { TailwindTabs } from '@/components/ui/tabs';
import ComponentCard from '@/components/ComponentCard';
import { baseColorsData, paletteData } from '@/data/colorsData';

// Componentes separados
import ColorSwatch from '@/components/colors/ColorSwatch';
import BaseColorsTable from '@/components/colors/BaseColorsTable';
import PaletteTable from '@/components/colors/PaletteTable';
import ColorOverview from '@/components/colors/ColorOverview';
import AccessibilityDemo from '@/components/colors/AccessibilityDemo';

const Colors = () => {
  const [simulationType, setSimulationType] = useState('');
  const [activeTab, setActiveTab] = useState('overview');

  const handleSimulation = (type: string) => {
    if (simulationType === type) {
      setSimulationType('');
    } else {
      setSimulationType(type);
    }
  };

  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Sistema de Cores" 
        description="Nosso sistema de cores é construído com variáveis CSS para suportar temas e personalização." 
        type="foundations" 
      />
      
      <TailwindTabs 
        defaultValue="overview" 
        className="mt-8" 
        tabs={[
          { name: 'Visão geral', value: 'overview' },
          { name: 'Cores Base', value: 'base-colors' },
          { name: 'Paletas', value: 'palettes' },
          { name: 'Acessibilidade', value: 'accessibility' }
        ]} 
        onChange={value => setActiveTab(value)}
      >
        {activeTab === 'overview' && <ColorOverview />}
        
        {activeTab === 'base-colors' && (
          <ComponentCard 
            title="Cores Base" 
            description="Conjunto de cores básicas que formam a fundação do sistema."
          >
            <p className="text-gray-600 mb-6">
              Estas cores básicas servem como alicerce para todo o sistema de design, fornecendo consistência visual em toda a aplicação.
            </p>
            <BaseColorsTable baseColors={baseColorsData} />
          </ComponentCard>
        )}
        
        {activeTab === 'palettes' && (
          <ComponentCard 
            title="Paletas" 
            description="Paletas semânticas construídas a partir das cores base."
          >
            <p className="text-gray-600 mb-6">
              Nossas paletas semânticas atribuem significado e função às cores, facilitando o uso consistente em toda a interface.
            </p>
            <PaletteTable palettes={paletteData} />
          </ComponentCard>
        )}
        
        {activeTab === 'accessibility' && (
          <ComponentCard 
            title="Acessibilidade de Cores" 
            description="Garantindo que nosso sistema de cores seja acessível a todos."
          >
            <AccessibilityDemo 
              simulationType={simulationType} 
              handleSimulation={handleSimulation} 
            />
          </ComponentCard>
        )}
      </TailwindTabs>
    </div>
  );
};

export default Colors;
