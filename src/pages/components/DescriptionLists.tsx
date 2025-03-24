
import React, { useState } from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import Header from '@/components/library-components/Header';
import { TailwindTabs } from '@/components/ui/tabs';

const DescriptionLists = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Description Lists"
        description="Em breve"
        type="components"
      />
      
      <TailwindTabs
        defaultValue="overview"
        className="mt-8"
        tabs={[
          { name: 'Visão geral', value: 'overview' },
          { name: 'Exemplos', value: 'examples' }
        ]}
        variant="pillsGray"
        onChange={value => setActiveTab(value)}
      />
      
      <div className="mt-6">
        <EmptyState 
          title="Conteúdo em Desenvolvimento" 
          description="Os exemplos detalhados de Description Lists estão sendo implementados. Volte em breve para visualizar os componentes." 
          icon="construction"
        />
      </div>
    </div>
  );
};

export default DescriptionLists;
