
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EmptyState from '@/components/library-components/EmptyState';
import Header from '@/components/library-components/Header';
import DocumentationSkeleton from '@/components/library-components/DocumentationSkeleton';

const Guidelines = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleGoToGovernance = () => {
    navigate('/guidelines/technical-governance');
  };
  
  const handleGoToUXGuidelines = () => {
    navigate('/guidelines/ux-guidelines');
  };
  
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
      
      <div className="mt-6 mb-8">
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Recursos Disponíveis</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <button
              onClick={handleGoToGovernance}
              className="flex flex-col p-5 bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200 rounded-lg text-left"
            >
              <h3 className="text-lg font-medium mb-2">Governança Lovable</h3>
              <p className="text-gray-600">
                Processo de contribuição, manutenção e evolução dos componentes através da plataforma Lovable.
              </p>
            </button>
            
            <button
              onClick={handleGoToUXGuidelines}
              className="flex flex-col p-5 bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200 rounded-lg text-left"
            >
              <h3 className="text-lg font-medium mb-2">Diretrizes de UX</h3>
              <p className="text-gray-600">
                Boas práticas para experiência do usuário e design de interfaces consistentes.
              </p>
            </button>
            
            <div className="flex flex-col p-5 bg-gray-50 border border-gray-200 rounded-lg opacity-60">
              <h3 className="text-lg font-medium mb-2">Acessibilidade</h3>
              <p className="text-gray-600">
                Diretrizes de acessibilidade para garantir que nossas interfaces sejam utilizáveis por todos.
              </p>
              <div className="mt-auto pt-3">
                <span className="text-xs font-medium text-gray-500 bg-gray-200 px-2 py-1 rounded">Em breve</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <EmptyState 
        title="Diretrizes em Desenvolvimento" 
        description="Estamos trabalhando em mais diretrizes para o design system. Volte em breve para conferir as melhores práticas para criar interfaces consistentes e acessíveis."
        icon="book"
      />
    </div>
  );
};

export default Guidelines;
