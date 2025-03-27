
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
          
          {/* Novo design baseado na imagem fornecida */}
          <div className="bg-white rounded-lg shadow-sm w-full">
            <div className="flex items-center p-4">
              <h1 className="text-2xl font-medium">Meus projetos</h1>
              <div className="ml-auto flex items-center text-gray-500 text-sm">
                <span>Dashboard</span>
                <ChevronRight className="h-4 w-4 mx-1" />
                <span className="font-medium text-gray-700">Meus projetos</span>
              </div>
            </div>
          </div>

          {/* Componente original com toggle de botão voltar */}
          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">Implementação Anterior</h3>
            <div className="w-full inline-flex justify-start items-start gap-2">
              {showBackButton && (
                <div className="h-14 px-4 py-3 bg-white rounded flex justify-start items-center gap-1">
                  <div className="w-6 h-6 relative">
                    <ArrowLeft className="text-gray-600" />
                  </div>
                </div>
              )}
              <div className="flex-1 h-14 bg-white rounded flex justify-start items-start gap-6 overflow-hidden">
                <div className="flex-1 self-stretch px-4 py-3 bg-white rounded flex justify-between items-center">
                  <div className="justify-start text-gray-900 text-2xl font-normal font-['Roboto'] leading-loose">Title</div>
                  <div data-collapsed="False" data-separator="Icon" className="flex justify-start items-center">
                    <div className="flex justify-start items-center gap-1">
                      <div data-size="Inherit" className="h-4 flex justify-start items-start">
                        <div className="w-4 self-stretch relative overflow-hidden">
                          <div className="w-3.5 h-3 left-[1.33px] top-[1.67px] absolute bg-gray-600" />
                        </div>
                      </div>
                      <div data-color="Inherit" data-state="Enabled" data-underline="On Hover" className="inline-flex flex-col justify-start items-start">
                        <div className="justify-start text-gray-500 text-xs font-normal font-['Roboto'] leading-tight tracking-wide">Link</div>
                      </div>
                    </div>
                    <div className="w-9 inline-flex flex-col justify-start items-center">
                      <div className="w-5 h-5 relative overflow-hidden">
                        <div className="w-1.5 h-2.5 left-[6.91px] top-[5px] absolute bg-gray-600" />
                      </div>
                    </div>
                    <div className="flex justify-start items-center gap-1">
                      <div data-size="Inherit" className="h-4 flex justify-start items-start">
                        <div className="w-4 self-stretch relative overflow-hidden">
                          <div className="w-3.5 h-3 left-[1.33px] top-[1.67px] absolute bg-gray-600" />
                        </div>
                      </div>
                      <div data-color="Inherit" data-state="Enabled" data-underline="On Hover" className="inline-flex flex-col justify-start items-start">
                        <div className="justify-start text-gray-500 text-xs font-normal font-['Roboto'] leading-tight tracking-wide">Link</div>
                      </div>
                    </div>
                    <div className="w-9 inline-flex flex-col justify-start items-center">
                      <div className="w-5 h-5 relative overflow-hidden">
                        <div className="w-1.5 h-2.5 left-[6.91px] top-[5px] absolute bg-gray-600" />
                      </div>
                    </div>
                    <div className="flex justify-start items-center gap-1">
                      <div data-size="Inherit" className="h-4 flex justify-start items-start">
                        <div className="w-4 self-stretch relative overflow-hidden">
                          <div className="w-3.5 h-3 left-[1.33px] top-[1.67px] absolute bg-gray-900" />
                        </div>
                      </div>
                      <div data-color="Inherit" data-state="Enabled" data-underline="On Hover" className="inline-flex flex-col justify-start items-start">
                        <div className="justify-start text-gray-900 text-xs font-medium font-['Roboto'] leading-tight tracking-tight">Link</div>
                      </div>
                    </div>
                  </div>
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
