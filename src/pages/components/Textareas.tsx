
import React from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import HeaderLibrary from '@/components/library-components/HeaderLibrary';

const Textareas = () => {
  return (
    <div className="w-full animate-fade-in">
      <HeaderLibrary 
        title="Textareas"
        description="Em breve"
        type="components"
      />
      
      <EmptyState 
        title="Conteúdo em Desenvolvimento" 
        description="Os exemplos detalhados de Textareas estão sendo implementados. Volte em breve para visualizar os componentes." 
        icon="construction"
      />
    </div>
  );
};

export default Textareas;
