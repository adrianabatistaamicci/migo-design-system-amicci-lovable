
import React, { useState, useEffect } from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import Header from '@/components/library-components/Header';
import DocumentationSkeleton from '@/components/library-components/DocumentationSkeleton';

const Guidelines = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    return <DocumentationSkeleton />;
  }

  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Diretrizes"
        description="Boas práticas para acessibilidade, responsividade e experiência do usuário"
        type="foundations"
        hideChip={true}
      />
      
      <div className="mt-6">
        <EmptyState 
          title="Diretrizes em Desenvolvimento" 
          description="Estamos trabalhando nas diretrizes gerais do design system. Volte em breve para conferir as melhores práticas para criar interfaces consistentes e acessíveis."
          icon="book"
        />
      </div>
    </div>
  );
};

export default Guidelines;
