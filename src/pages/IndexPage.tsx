
import React from 'react';

const IndexPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Bem-vindo ao Design System da Amicci</h1>
      <p className="text-xl text-gray-600 mb-8">
        Esta documentação contém todos os componentes, diretrizes e recursos necessários para criar interfaces 
        consistentes e de alta qualidade seguindo os padrões da Amicci.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Componentes</h2>
          <p className="text-gray-600 mb-4">
            Explore nossa biblioteca de componentes reutilizáveis projetados para funcionar perfeitamente juntos.
          </p>
          <a 
            href="/components" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            Ver componentes
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Diretrizes</h2>
          <p className="text-gray-600 mb-4">
            Conheça nossas diretrizes de design, princípios e melhores práticas para criar experiências consistentes.
          </p>
          <a 
            href="/guidelines/technical-governance" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            Ver diretrizes
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
