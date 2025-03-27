
import React, { useState } from 'react';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import Header from '@/components/library-components/Header';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const TitleHeadings = () => {
  const [showBackButton, setShowBackButton] = useState(true);

  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Title Headings"
        description="Componentes de título para organizar hierarquicamente o conteúdo da página"
        type="components"
        className="mb-6"
      />
      
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Exemplos de Title Headings</h2>
          <Button 
            variant="outline" 
            onClick={() => setShowBackButton(!showBackButton)}
          >
            {showBackButton ? "Ocultar Botão Voltar" : "Mostrar Botão Voltar"}
          </Button>
        </div>

        <div className="rounded-lg border p-6 space-y-6">
          <h3 className="text-lg font-medium mb-4">Title Heading com Botão de Voltar</h3>
          
          <div className="flex gap-3">
            {/* Botão de voltar quadrado em um box separado */}
            {showBackButton && (
              <div className="h-14 w-14 bg-white rounded-lg shadow-sm flex items-center justify-center">
                <ArrowLeft className="h-6 w-6 text-gray-500" />
              </div>
            )}
            
            {/* Box com o título e breadcrumbs */}
            <div className="flex-1 bg-white rounded-lg shadow-sm">
              <div className="flex items-center p-4 h-14">
                <h1 className="text-2xl font-medium">Meus projetos</h1>
                <div className="ml-auto flex items-center text-gray-500 text-sm">
                  <span>Dashboard</span>
                  <ChevronRight className="h-4 w-4 mx-1" />
                  <span className="font-medium text-gray-700">Meus projetos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="rounded-lg border p-6">
          <h3 className="text-lg font-medium mb-4">Como utilizar</h3>
          <p className="text-gray-700 mb-4">
            Os Title Headings são componentes essenciais para definir a hierarquia visual de sua página. 
            Eles podem incluir elementos adicionais como botões de navegação, breadcrumbs e links de ação.
          </p>
          
          <h4 className="font-medium mt-4 mb-2">Características principais:</h4>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>Design limpo e minimalista que se adapta a diferentes contextos</li>
            <li>Botão de voltar opcional para melhorar a navegação</li>
            <li>Suporte para breadcrumbs para navegação hierárquica</li>
            <li>Altamente personalizável para diferentes necessidades de interface</li>
          </ul>
          
          <h4 className="font-medium mt-4 mb-2">Variações:</h4>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>Com ou sem breadcrumbs</li>
            <li>Com ou sem botão de voltar</li>
            <li>Estilo simples ou com sombra e cantos arredondados</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TitleHeadings;
