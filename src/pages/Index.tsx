
import React from 'react';
import { ArrowRight, Book, FileText, Layers, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
const Index = () => {
  return <div className="space-y-16">
      <section className="max-w-7xl mx-auto px-0">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-800">Migo, o Design System da Amicci</h1>
          <p className="text-xl text-gray-600 mb-8">Um sistema de design Tailwind consistente para criar interfaces de usuário modernas e acessíveis com React.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              
            </Button>
            <Button variant="outline-default" size="lg" asChild>
              
            </Button>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8 text-gray-800">
            Recursos principais
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-light/30 rounded-lg text-primary-main flex items-center justify-center mb-4">
                <Layers size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">UI Kit</h3>
              <p className="text-gray-600 mb-4">
                Cores, tipografia, espaçamento e outros elementos fundamentais do sistema.
              </p>
              <Link to="/foundations/colors" className="text-primary-main hover:text-primary-dark inline-flex items-center">
                Explorar fundações
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-light/30 rounded-lg text-primary-main flex items-center justify-center mb-4">
                <Package size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Instalação</h3>
              <p className="text-gray-600 mb-4">
                Biblioteca de componentes reutilizáveis prontos para uso em seus projetos.
              </p>
              <Link to="/components" className="text-primary-main hover:text-primary-dark inline-flex items-center">
                Ver componentes
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-light/30 rounded-lg text-primary-main flex items-center justify-center mb-4">
                <Book size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Diretrizes</h3>
              <p className="text-gray-600 mb-4">
                Boas práticas para acessibilidade, responsividade e experiência do usuário.
              </p>
              <Link to="/guidelines/accessibility" className="text-primary-main hover:text-primary-dark inline-flex items-center">
                Ler diretrizes
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-light/30 rounded-lg text-primary-main flex items-center justify-center mb-4">
                <FileText size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Recursos</h3>
              <p className="text-gray-600 mb-4">
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
      
      <section className="bg-gray-50 py-12 rounded-lg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-gray-800">
            Pronto para começar?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Explore nosso sistema de design e comece a criar interfaces consistentes e acessíveis.
          </p>
          <Button asChild size="lg">
            <Link to="/foundations/colors">
              Ver documentação
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>;
};
export default Index;
