
import React from 'react';
import EmptyState from '@/components/library-components/EmptyState';

const StackedLayouts = () => {
  return (
    <div className="container max-w-6xl py-8">
      <h1 className="text-3xl font-bold mb-6">Stacked Layouts</h1>
      <p className="text-gray-600 mb-8">
        Stacked layouts are a fundamental building pattern for applications, providing a clean sequential arrangement of content.
      </p>
      
      <EmptyState 
        title="Conteúdo em Desenvolvimento" 
        description="Os exemplos detalhados de Stacked Layouts estão sendo implementados. Volte em breve para visualizar os componentes." 
        icon="construction"
      />
    </div>
  );
};

export default StackedLayouts;
