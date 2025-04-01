
import React from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import Header from '@/components/library-components/Header';

const ProgressSteppersPage = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Progress Steppers"
        description="Em breve"
        type="components"
      />
      
      <EmptyState 
        title="Conteúdo em Desenvolvimento" 
        description="Os exemplos detalhados de Progress Steppers estão sendo implementados. Volte em breve para visualizar os componentes." 
        icon="construction"
      />
    </div>
  );
};

export default ProgressSteppersPage;
