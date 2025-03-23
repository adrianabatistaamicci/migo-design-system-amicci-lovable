
import React from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import HeaderLibrary from '@/components/library-components/HeaderLibrary';

const MultiColumnLayouts = () => {
  return (
    <div className="w-full animate-fade-in">
      <HeaderLibrary 
        title="Multi-Column Layouts"
        description="Em breve"
        type="components"
      />
      
      <EmptyState 
        title="Conteúdo em Desenvolvimento" 
        description="Os exemplos detalhados de Multi-Column Layouts estão sendo implementados. Volte em breve para visualizar os componentes." 
        icon="construction"
      />
    </div>
  );
};

export default MultiColumnLayouts;
