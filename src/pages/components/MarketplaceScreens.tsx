
import React from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import Header from '@/components/library-components/Header';

const MarketplaceScreens = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Marketplace Screens"
        description="Exemplos de interfaces para o marketplace da Amicci"
        type="components"
      />
      
      <EmptyState 
        title="Conteúdo em Desenvolvimento" 
        description="Os exemplos detalhados de Marketplace Screens estão sendo implementados. Volte em breve para visualizar os componentes." 
        icon="construction"
      />
    </div>
  );
};

export default MarketplaceScreens;
