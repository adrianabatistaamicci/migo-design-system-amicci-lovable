
import React from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import Header from '@/components/library-components/Header';

const ListContainersPage = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="List Containers"
        description="Em breve"
        type="components"
      />
      
      <EmptyState 
        title="Conteúdo em Desenvolvimento" 
        description="Os exemplos detalhados de List Containers estão sendo implementados. Volte em breve para visualizar os componentes." 
        icon="construction"
      />
    </div>
  );
};

export default ListContainersPage;
