
import React from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import Header from '@/components/library-components/Header';

const CommandBars = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Command Bars"
        description="Em breve"
        type="components"
      />
      
      <div className="mt-6">
        <EmptyState 
          title="Conteúdo em Desenvolvimento" 
          description="Os exemplos detalhados de Command Bars estão sendo implementados. Volte em breve para visualizar os componentes." 
          icon="construction"
        />
      </div>
    </div>
  );
};

export default CommandBars;
