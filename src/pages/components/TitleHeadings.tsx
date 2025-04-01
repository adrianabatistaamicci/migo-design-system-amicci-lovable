
import React from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import Header from '@/components/library-components/Header';

const TitleHeadings = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Title Headings"
        description="Em breve"
        type="components"
      />
      
      <EmptyState 
        title="Conteúdo em Desenvolvimento" 
        description="Os exemplos detalhados de Title Headings estão sendo implementados. Volte em breve para visualizar os componentes." 
        icon="construction"
      />
    </div>
  );
};

export default TitleHeadings;
