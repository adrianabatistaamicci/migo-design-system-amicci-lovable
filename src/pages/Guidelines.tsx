
import React from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import Header from '@/components/library-components/Header';

const Guidelines = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Diretrizes"
        description="Boas práticas para acessibilidade, responsividade e experiência do usuário"
        type="foundations"
        hideChip={true}
      />
      
      <EmptyState 
        title="Diretrizes em Desenvolvimento" 
        description="Estamos trabalhando nas diretrizes do design system. Volte em breve para conferir as melhores práticas para criar interfaces consistentes e acessíveis."
        icon="book"
      />
    </div>
  );
};

export default Guidelines;
