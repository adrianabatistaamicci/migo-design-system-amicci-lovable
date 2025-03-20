import React from 'react';
import { ArrowRight, Book, FileText, Layers, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
const Index = () => {
  return <div className="space-y-16">
      <section className="max-w-7xl mx-auto px-0">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl tracking-tight mb-4 text-zinc-950 font-medium md:text-6xl">Migo, o Design System da Amicci</h2>
          <h6 className="text-lg mb-8 text-zinc-700">Um sistema de design Tailwind consistente para criar interfaces de usuário modernas e acessíveis com React.</h6>
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
          <h5 className="text-xl md:text-2xl font-semibold tracking-tight mb-8 text-zinc-950">
            Recursos principais
          </h5>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-light/30 rounded-lg text-primary-main flex items-center justify-center mb-4">
                <Package size={24} />
              </div>
              <h6 className="text-base font-semibold mb-2 text-zinc-950">Instalação</h6>
              <p className="text-sm mb-4 text-zinc-700">
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
              <h6 className="text-base font-semibold mb-2 text-zinc-950">Diretrizes</h6>
              <p className="text-sm mb-4 text-zinc-700">
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
              <h6 className="text-base font-semibold mb-2 text-zinc-950">UI Kit</h6>
              <p className="text-sm mb-4 text-zinc-700">
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
              <h6 className="text-base font-semibold mb-2 text-zinc-950">Recursos</h6>
              <p className="text-sm mb-4 text-zinc-700">
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
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-gray-800">Precisa de ajuda?</h2>
          <p className="text-lg text-gray-600 mb-8">Confira quem são os responsáveis pelo Migo e como entrar em contato.</p>
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