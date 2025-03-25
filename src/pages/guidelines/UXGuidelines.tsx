
import React from 'react';
import Header from '@/components/library-components/Header';
import EmptyState from '@/components/library-components/EmptyState';

const UXGuidelines = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Diretrizes de UX"
        description="Práticas recomendadas para uma experiência de usuário consistente e intuitiva"
        type="foundations"
        hideChip={true}
      />
      
      <EmptyState 
        title="Diretrizes de UX em Desenvolvimento" 
        description="Estamos trabalhando na documentação de nossas melhores práticas de UX. Em breve, você encontrará diretrizes abrangentes sobre design de interação, fluxos de usuário e padrões de interface."
        icon="figma"
      />
    </div>
  );
};

export default UXGuidelines;
