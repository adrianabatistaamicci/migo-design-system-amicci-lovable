
import React from 'react';
import { ArrowRight, Book, FileText, Layers, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  return <div className="space-y-16">
      <section className="w-full relative overflow-hidden rounded-xl">
        {/* Background image with overlay gradient */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/lovable-uploads/b0d059ca-0b13-480f-9c3f-91a36203dcec.png" 
            alt="Design fluid waves" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent mix-blend-overlay"></div>
        </div>
        
        {/* Hero content */}
        <div className="relative z-10 px-4 py-16 md:py-24 max-w-5xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg">
            <h2 className="text-4xl tracking-tight mb-4 text-text-primary font-medium md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary-dark to-primary-light">
              Migo, o Design System da Amicci
            </h2>
            <h6 className="text-lg mb-8 text-text-secondary">
              Um sistema de design Tailwind consistente para criar interfaces de usuário modernas e acessíveis com React.
            </h6>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="shadow-md hover:shadow-lg transition-shadow">
                <Link to="/components">Explorar Componentes<ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button variant="outline-default" size="lg" asChild className="shadow-sm hover:shadow-md transition-shadow">
                <Link to="/foundations/colors">Ver Fundamentos<ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
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
              <Link to="/components" className="text-primary-main hover:text-primary-dark inline-flex items-center">
                Acessar instalação
                <ArrowRight className="ml-1 h-4 w-4" />
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
                <ArrowRight className="ml-1 h-4 w-4" />
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
                <ArrowRight className="ml-1 h-4 w-4" />
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
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;
