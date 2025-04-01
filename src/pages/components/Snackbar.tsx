
import React from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import Header from '@/components/library-components/Header';

const Snackbar = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Snackbar"
        description="Componentes de notificação temporária para feedback ao usuário."
        type="components"
      />
      
      <EmptyState 
        title="Conteúdo em Desenvolvimento" 
        description="Os exemplos detalhados de Snackbar estão sendo implementados. Volte em breve para visualizar os componentes." 
        icon="construction"
      />
    </div>
  );
};

export default Snackbar;
