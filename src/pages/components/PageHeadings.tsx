
/**
 * @protected
 * ATENÇÃO: Este arquivo contém conteúdo finalizado e aprovado.
 * Não deve ser alterado diretamente pelo assistente AI.
 * Apenas atualizações de componentes devem ser refletidas.
 */

import React, { useState } from 'react';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import Header from '@/components/library-components/Header';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import CodeBlock from '@/components/CodeBlock';

const PageHeadings = () => {
  const [showBackButton, setShowBackButton] = useState(true);

  const codeExample = `import React from 'react';
import { ArrowLeft, ChevronRight } from 'lucide-react';

const PageHeading = ({ title, showBackButton = true }) => {
  return (
    <div className="flex gap-3">
      {showBackButton && (
        <div className="h-14 w-14 bg-white rounded-lg shadow-sm flex items-center justify-center">
          <ArrowLeft className="h-6 w-6 text-gray-500" />
        </div>
      )}
      
      <div className="flex-1 bg-white rounded-lg shadow-sm">
        <div className="flex items-center p-4 h-14">
          <h1 className="text-2xl font-medium">{title}</h1>
          <div className="ml-auto flex items-center text-gray-500 text-sm">
            <span>Dashboard</span>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="font-medium text-gray-700">{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeading;`;

  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Page Headings"
        description="Componentes de título para organizar hierarquicamente o conteúdo da página"
        type="components"
        className="mb-6"
      />
      
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="h-8"></div>
          <Button 
            variant="outline" 
            onClick={() => setShowBackButton(!showBackButton)}
          >
            {showBackButton ? "Ocultar Botão Voltar" : "Mostrar Botão Voltar"}
          </Button>
        </div>

        <div className="rounded-lg border overflow-hidden">
          <div className="p-6">
            <div className="flex gap-3">
              {showBackButton && (
                <div className="h-14 w-14 bg-white rounded-lg shadow-sm flex items-center justify-center">
                  <ArrowLeft className="h-6 w-6 text-gray-500" />
                </div>
              )}
              
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
          
          <CodeBlock 
            code={codeExample}
            language="jsx"
            title="Implementação do Page Heading"
            showCopy={true}
            showCode={false}
          />
        </div>
      </div>
    </div>
  );
};

export default PageHeadings;
