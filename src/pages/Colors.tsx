
import React, { useState } from 'react';
import { TailwindTabs } from "@/components/ui/tabs";
import ColorOverview from '@/components/colors/ColorOverview';
import ColorUsage from '@/components/colors/ColorUsage';
import AccessibilityDemo from '@/components/colors/AccessibilityDemo';
import Header from '@/components/library-components/Header';

const Colors = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [simulationType, setSimulationType] = useState('normal');

  const handleSimulation = (type: string) => {
    setSimulationType(type);
  };

  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Colors" 
        description="Sistema de cores e tokens utilizados na aplicação"
        type="foundations"
      />

      <div className="mt-8">
        <TailwindTabs 
          className=""
          defaultValue="overview" 
          tabs={[
            { name: 'Paletas', value: 'overview' },
            { name: 'Uso', value: 'usage' },
            { name: 'Acessibilidade', value: 'accessibility' }
          ]}
          variant="pillsGray"
          onChange={value => setActiveTab(value)}
        />
        
        <div className="mt-6 w-full">
          {activeTab === 'overview' && <ColorOverview />}
          {activeTab === 'usage' && <ColorUsage />}
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
