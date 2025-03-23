import React from 'react';
import HeaderLibrary from '@/components/library-components/HeaderLibrary';
import EmptyState from '@/components/library-components/EmptyState';

const StackedLayouts = () => {
  return (
    <div className="w-full animate-fade-in">
      <HeaderLibrary 
        title="Stacked Layouts"
        description="Em breve"
        type="components"
      />
      
      <EmptyState 
        title="Conteúdo em Desenvolvimento" 
        description="Os exemplos detalhados de Stacked Layouts estão sendo implementados. Volte em breve para visualizar os componentes." 
        icon="construction"
      />
    </div>
  );
};

export default StackedLayouts;

