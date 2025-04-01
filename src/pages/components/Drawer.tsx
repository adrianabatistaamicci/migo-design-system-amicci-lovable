
import React from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import Header from '@/components/library-components/Header';

const Drawer = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Drawer"
        description="Componentes de painel deslizante para navegação e ações secundárias."
        type="components"
      />
      
      <EmptyState 
        title="Conteúdo em Desenvolvimento" 
        description="Os exemplos detalhados de Drawer estão sendo implementados. Volte em breve para visualizar os componentes." 
        icon="construction"
      />
    </div>
  );
};

export default Drawer;
