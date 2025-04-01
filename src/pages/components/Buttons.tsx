
import React from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import Header from '@/components/library-components/Header';

const Buttons = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Buttons"
        description="Componentes de botão para interações primárias e secundárias."
        type="components"
      />
      
      <EmptyState 
        title="Conteúdo em Desenvolvimento" 
        description="Os exemplos detalhados de Buttons estão sendo implementados. Volte em breve para visualizar os componentes." 
        icon="construction"
      />
    </div>
  );
};

export default Buttons;
