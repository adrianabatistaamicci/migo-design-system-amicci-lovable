
import React from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import Header from '@/components/library-components/Header';

const DescriptionLists = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Description Lists"
        description="Em breve"
        type="components"
      />
      
      <div className="mt-6">
        <EmptyState 
          title="Conteúdo em Desenvolvimento" 
          description="Os exemplos detalhados de Description Lists estão sendo implementados. Volte em breve para visualizar os componentes." 
          icon="construction"
        />
      </div>
    </div>
  );
};

export default DescriptionLists;
