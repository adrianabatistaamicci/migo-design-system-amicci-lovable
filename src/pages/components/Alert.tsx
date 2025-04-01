
import React from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import Header from '@/components/library-components/Header';

const Alert = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Alerts"
        description="Componentes para notificações e alertas importantes."
        type="components"
      />
      
      <EmptyState 
        title="Conteúdo em Desenvolvimento" 
        description="Os exemplos detalhados de Alerts estão sendo implementados. Volte em breve para visualizar os componentes." 
        icon="construction"
      />
    </div>
  );
};

export default Alert;
