import React from 'react';
import { Book, FileText, Layers, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return <div className="space-y-16">
      {/* Hero section directly on the page */}
      <section className="w-full relative overflow-hidden rounded-xl">
        {/* Background image without overlay gradient */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/lovable-uploads/3f0e12b8-4897-4ca4-aaeb-656250de8c5c.png" 
            alt="Design fluid background" 
            className="w-full h-full object-cover object-center"
          />
          {/* Dark overlay removed */}
        </div>
        
        {/* Hero content */}
        <div className="relative z-10 px-4 py-24 md:py-32 max-w-5xl mx-auto text-center">
          <div className="p-8 rounded-xl bg-gray-950/80 backdrop-blur-sm">
            <h2 className="text-4xl tracking-tight mb-4 text-white font-medium md:text-6xl">
              Migo, o Design System da Amicci
            </h2>
            <h6 className="text-lg mb-6 text-white/90">
              Um sistema de design consistente para criar interfaces de usuário modernas e acessíveis.
            </h6>
            <p className="text-white/80 mb-4 max-w-3xl mx-auto">
              Migo é a essência da Amicci: um companheiro de confiança para seus projetos digitais. Como um aliado presente, ele trabalha nas entrelinhas do código e design, trazendo harmonia e claridade às suas interfaces, construindo pontes entre sua visão e a realidade.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full">
          <h5 className="text-xl tracking-tight mb-8 text-text-primary font-medium md:text-3xl">
            Recursos principais
          </h5>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-light/30 rounded-lg text-primary-main flex items-center justify-center mb-4">
                <Package size={24} />
              </div>
              <h6 className="text-base mb-2 text-text-primary font-medium">Instalação</h6>
              <p className="text-sm mb-4 text-text-secondary">
                Biblioteca de componentes reutilizáveis prontos para uso em seus projetos.
              </p>
              <Link to="/installation" className="text-primary-main hover:text-primary-dark inline-flex items-center">
                Acessar instalação
                <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-light/30 rounded-lg text-primary-main flex items-center justify-center mb-4">
                <Book size={24} />
              </div>
              <h6 className="text-base mb-2 text-text-primary font-medium">Diretrizes</h6>
              <p className="text-sm mb-4 text-text-secondary">
                Boas práticas para acessibilidade, responsividade e experiência do usuário.
              </p>
              <Link to="/guidelines/accessibility" className="text-primary-main hover:text-primary-dark inline-flex items-center">
                Ler diretrizes
                <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-light/30 rounded-lg text-primary-main flex items-center justify-center mb-4">
                <Layers size={24} />
              </div>
              <h6 className="text-base mb-2 text-text-primary font-medium">UI Kit</h6>
              <p className="text-sm mb-4 text-text-secondary">
                Cores, tipografia, espaçamento e outros elementos fundamentais do sistema.
              </p>
              <Link to="/foundations/colors" className="text-primary-main hover:text-primary-dark inline-flex items-center">
                Explorar kit
                <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-light/30 rounded-lg text-primary-main flex items-center justify-center mb-4">
                <FileText size={24} />
              </div>
              <h6 className="text-base mb-2 text-text-primary font-medium">Recursos</h6>
              <p className="text-sm mb-4 text-text-secondary">
                Bibliotecas de design, kits de UI e outros recursos complementares.
              </p>
              <Link to="/resources/figma-library" className="text-primary-main hover:text-primary-dark inline-flex items-center">
                Acessar recursos
                <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;
