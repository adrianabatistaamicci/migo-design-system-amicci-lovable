
import React from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import Header from '@/components/library-components/Header';

const Table = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Tables"
        description="Componentes de tabela para exibição de dados estruturados."
        type="components"
      />
      
      <EmptyState 
        title="Conteúdo em Desenvolvimento" 
        description="Os exemplos detalhados de Tables estão sendo implementados. Volte em breve para visualizar os componentes." 
        icon="construction"
      />
    </div>
  );
};

export default Table;
