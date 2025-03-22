
import React from 'react';
import EmptyState from '@/components/library-components/EmptyState';

const Containers = () => {
  return (
    <div className="container max-w-6xl py-8">
      <h1 className="text-3xl font-bold mb-6">Containers</h1>
      <p className="text-gray-600 mb-8">
        Containers help organize content and provide consistent spacing and alignment throughout your interface.
      </p>
      
      <EmptyState 
        title="Conteúdo em Desenvolvimento" 
        description="Os exemplos detalhados de Containers estão sendo implementados. Volte em breve para visualizar os componentes." 
        icon="construction"
      />
    </div>
  );
};

export default Containers;
