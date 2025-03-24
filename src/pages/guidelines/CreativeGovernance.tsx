import React from 'react';
import Header from '@/components/library-components/Header';
import { Separator } from '@/components/ui/separator';

const CreativeGovernance = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        description="Diretrizes para inovação e experimentação com ferramentas de IA"
        type="foundations"
        hideChip={true}
      />
      
      <div className="mt-6">
        <h2>Em breve</h2>
        <p>Mais conteúdo em breve</p>
      </div>
    </div>
  );
};

export default CreativeGovernance;
