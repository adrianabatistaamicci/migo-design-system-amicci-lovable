
import React from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import Header from '@/components/library-components/Header';

const Checkboxes = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Checkboxes"
        description="Componentes de seleção múltipla para escolha de várias opções simultaneamente."
        type="components"
      />
      
      <EmptyState 
        title="Conteúdo em Desenvolvimento" 
        description="Os exemplos detalhados de Checkboxes estão sendo implementados. Volte em breve para visualizar os componentes." 
        icon="construction"
      />
    </div>
  );
};

export default Checkboxes;
