
import React from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import HeaderLibrary from '@/components/library-components/HeaderLibrary';

const Dividers = () => {
  return (
    <div className="w-full animate-fade-in">
      <HeaderLibrary 
        title="Dividers"
        description="Linhas divisórias para separar conteúdo relacionado."
        type="components"
      />
      
      <EmptyState 
        title="Conteúdo em Desenvolvimento" 
        description="Os exemplos detalhados de Dividers estão sendo implementados. Volte em breve para visualizar os componentes." 
        icon="construction"
      />
    </div>
  );
};

export default Dividers;
