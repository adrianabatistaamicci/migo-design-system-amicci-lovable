
import React from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import Header from '@/components/library-components/Header';

const Stepper = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Stepper"
        description="Componentes para indicar progresso em fluxos multi-etapas."
        type="components"
      />
      
      <EmptyState 
        title="Conteúdo em Desenvolvimento" 
        description="Os exemplos detalhados de Stepper estão sendo implementados. Volte em breve para visualizar os componentes." 
        icon="construction"
      />
    </div>
  );
};

export default Stepper;
