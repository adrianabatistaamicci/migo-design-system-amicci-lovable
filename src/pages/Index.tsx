import React from 'react';
import { ArrowRight, Book, FileText, Layers, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
const Index = () => {
  return <div className="space-y-16">
      <section className="w-full">
        <div className="w-full">
          <h2 className="text-4xl tracking-tight mb-4 text-text-primary font-medium md:text-6xl">Migo, o Design System da Amicci</h2>
          <h6 className="text-lg mb-8 text-text-secondary">Um sistema de design Tailwind consistente para criar interfaces de usuário modernas e acessíveis com React.</h6>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              
            </Button>
            <Button variant="outline-default" size="lg" asChild>
              
            </Button>
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