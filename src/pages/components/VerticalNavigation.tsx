
import React from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import Header from '@/components/library-components/Header';

const VerticalNavigation = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Vertical Navigation"
        description="Em breve"
        type="components"
      />
      
      <EmptyState 
        title="Conteúdo em Desenvolvimento" 
        description="Os exemplos detalhados de Vertical Navigation estão sendo implementados. Volte em breve para visualizar os componentes." 
        icon="construction"
      />
    </div>
  );
};

export default VerticalNavigation;
