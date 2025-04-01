
import React from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import Header from '@/components/library-components/Header';

const Dialog = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Dialog"
        description="Componentes de diálogo modal para interações focadas."
        type="components"
      />
      
      <EmptyState 
        title="Conteúdo em Desenvolvimento" 
        description="Os exemplos detalhados de Dialog estão sendo implementados. Volte em breve para visualizar os componentes." 
        icon="construction"
      />
    </div>
  );
};

export default Dialog;
