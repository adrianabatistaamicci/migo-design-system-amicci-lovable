
import React from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import Header from '@/components/library-components/Header';

const UXGuidelines = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Diretrizes de UX"
        description="Melhores práticas para design de experiência do usuário"
        type="foundations"
        hideChip={true}
      />
      
      <EmptyState 
        title="Diretrizes de UX em Desenvolvimento" 
        description="Estamos trabalhando nas melhores práticas de UX para o design system. Volte em breve para conferir nossas recomendações."
        icon="book"
      />
    </div>
  );
};

export default UXGuidelines;
