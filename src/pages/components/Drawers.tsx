
import React from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import Header from '@/components/library-components/Header';

const Drawers = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Drawers"
        description="Painéis deslizantes para exibir conteúdo adicional."
        type="components"
      />
      
      <EmptyState 
        title="Conteúdo em Desenvolvimento" 
        description="Os exemplos detalhados de Drawers estão sendo implementados. Volte em breve para visualizar os componentes." 
        icon="construction"
      />
    </div>
  );
};

export default Drawers;
