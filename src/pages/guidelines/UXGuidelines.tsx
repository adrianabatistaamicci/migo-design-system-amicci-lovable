import React, { useState, useEffect } from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import Header from '@/components/library-components/Header';
import DocumentationSkeleton from '@/components/library-components/DocumentationSkeleton';
const UXGuidelines = () => {
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
  return <div className="w-full animate-fade-in6">
      <Header title="Diretrizes de UX" description="Boas práticas para experiência do usuário e design de interfaces" type="foundations" hideChip={true} />
      
      <EmptyState title="Diretrizes de UX em Desenvolvimento" description="Estamos trabalhando na documentação de diretrizes de UX para o design system. Volte em breve para conferir as melhores práticas para criar interfaces consistentes e intuitivas." icon="book" />
    </div>;
};
export default UXGuidelines;