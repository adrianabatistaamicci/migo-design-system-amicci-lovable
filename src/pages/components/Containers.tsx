
import React from 'react';
import EmptyState from '@/components/library-components/EmptyState';

const Containers = () => {

  
  return (
    <div className="w-full animate-fade-in">
      <FoundationsHeader 
        title="Containers"
        description="Em breve"
      />
      
      <EmptyState 
        title="Conteúdo em Desenvolvimento" 
        description="Os exemplos detalhados de Containers estão sendo implementados. Volte em breve para visualizar os componentes." 
        icon="construction"
      />
    </div>
  );
};

export default Containers;
