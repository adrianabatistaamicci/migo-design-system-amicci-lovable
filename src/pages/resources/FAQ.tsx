
import React from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import Header from '@/components/library-components/Header';

const FAQ = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Perguntas Frequentes"
        description="Respostas para as dúvidas mais comuns sobre o Design System."
        type="components"
      />
      
      <EmptyState 
        title="Conteúdo em Desenvolvimento" 
        description="As perguntas frequentes estão sendo compiladas. Volte em breve para consultar as respostas." 
        icon="construction"
      />
    </div>
  );
};

export default FAQ;
