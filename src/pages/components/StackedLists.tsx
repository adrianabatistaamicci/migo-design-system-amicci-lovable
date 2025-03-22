
import React from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import Header from '@/components/library-components/Header';
import { TailwindTabs } from '@/components/ui/tabs';

const StackedLists = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Stacked Lists"
        description="Utilize listas empilhadas para exibir sequências de informações, como notificações, atividades ou configurações. Esse padrão proporciona uma apresentação clara e consistente para conjuntos de dados relacionados."
        type="components"
      />
      
      <TailwindTabs 
        defaultValue="overview" 
        className="mt-8"
        tabs={[
          { name: 'Visão geral', value: 'overview' },
          { name: 'Exemplos', value: 'examples' },
          { name: 'Uso', value: 'usage' }
        ]}
        variant="pillsGray"
      />

      <div className="mt-8">
        <EmptyState 
          title="Conteúdo em Desenvolvimento" 
          description="Os exemplos detalhados de Stacked Lists estão sendo implementados. Volte em breve para visualizar os componentes." 
          icon="construction"
        />
      </div>
    </div>
  );
};

export default StackedLists;
