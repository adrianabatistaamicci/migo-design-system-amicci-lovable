
import React from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import Header from '@/components/library-components/Header';

const FigmaLibrary = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Biblioteca Figma"
        description="Acesso à biblioteca de componentes e recursos de design no Figma."
        type="components"
      />
      
      <EmptyState 
        title="Conteúdo em Desenvolvimento" 
        description="Os recursos da biblioteca Figma estão sendo organizados. Volte em breve para acessar os componentes." 
        icon="construction"
      />
    </div>
  );
};

export default FigmaLibrary;
