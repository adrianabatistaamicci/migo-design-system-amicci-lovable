
import React from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import Header from '@/components/library-components/Header';

const RadioGroupComponent = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Radio Group"
        description="Componentes de seleção exclusiva para escolha entre múltiplas opções."
        type="components"
      />
      
      <EmptyState 
        title="Conteúdo em Desenvolvimento" 
        description="Os exemplos detalhados de Radio Group estão sendo implementados. Volte em breve para visualizar os componentes." 
        icon="construction"
      />
    </div>
  );
};

export default RadioGroupComponent;
