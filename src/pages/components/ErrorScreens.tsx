
import React from 'react';
import Header from '@/components/library-components/Header';
import ComponentCard from '@/components/ComponentCard';
import CodeBlock from '@/components/CodeBlock';
import { GridContainer, GridRow, GridCol } from '@/components/layout/Grid';
import NotFound from '@/components/error/404'; 
import { ErrorDisplay } from '@/components/error/ErrorBoundary';
import { Button } from '@/components/ui/button';

const ErrorScreens = () => {
  const errorBoundaryCode = `import { ErrorBoundary } from "@/components/error/ErrorBoundary";

// Wrap your component or section that might error
<ErrorBoundary>
  <YourComponentThatMightError />
</ErrorBoundary>`;

  const notFoundCode = `import NotFound from "@/components/error/404";

// In your routing configuration
<Route path="*" element={<NotFound />} />`;

  // Mock error for ErrorDisplay demonstration
  const mockError = new Error("Exemplo de erro para demonstração");
  const mockReload = () => console.log("Reload clicked");

  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Error Screens"
        description="Telas de erro padronizadas para diferentes situações de falha na aplicação."
        type="components"
      />
      
      <GridContainer fullWidth className="space-y-8 mt-8">
        <section className="px-8">
          <h2 className="text-2xl font-semibold mb-4">Página de Erro 404</h2>
          <p className="text-gray-700 mb-6">
            A página de erro 404 é exibida quando o usuário tenta acessar uma rota que não existe na aplicação.
          </p>
          
          <div className="border border-gray-200 rounded-lg overflow-hidden mb-8">
            <div className="p-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
              <h3 className="text-lg font-medium">Erro 404</h3>
              <span className="text-sm text-gray-500">Página não encontrada</span>
            </div>
            <div className="p-6">
              <NotFound />
            </div>
          </div>
          
          <CodeBlock
            code={notFoundCode}
            language="tsx"
            title="Implementação de 404"
          />
        </section>
        
        <section className="mt-12 px-8">
          <h2 className="text-2xl font-semibold mb-4">ErrorBoundary</h2>
          <p className="text-gray-700 mb-6">
            O ErrorBoundary captura erros de JavaScript durante a renderização, em métodos do ciclo de vida e nos construtores de componentes filhos, exibindo uma interface de erro amigável.
          </p>
          
          <div className="border border-gray-200 rounded-lg overflow-hidden mb-8">
            <div className="p-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
              <h3 className="text-lg font-medium">Erro de Carregamento</h3>
              <span className="text-sm text-gray-500">Falha durante a renderização</span>
            </div>
            <div className="p-6">
              <ErrorDisplay error={mockError} onReload={mockReload} />
            </div>
          </div>
          
          <CodeBlock
            code={errorBoundaryCode}
            language="tsx"
            title="Implementação de ErrorBoundary"
          />
        </section>
        
        <section className="px-8">
          <h2 className="text-2xl font-semibold mb-4">Casos de Uso</h2>
          <GridRow>
            <GridCol span={6}>
              <div className="bg-white rounded-lg border p-6 h-full">
                <h3 className="text-lg font-medium mb-3">Página 404</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Rotas inválidas ou URLs digitadas incorretamente</li>
                  <li>Páginas removidas ou URLs que não existem mais</li>
                  <li>Links quebrados de fontes externas</li>
                </ul>
              </div>
            </GridCol>
            
            <GridCol span={6}>
              <div className="bg-white rounded-lg border p-6 h-full">
                <h3 className="text-lg font-medium mb-3">ErrorBoundary</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Erros durante o renderização de componentes</li>
                  <li>Falhas em chamadas de API ou processamento de dados</li>
                  <li>Proteção de seções críticas da aplicação</li>
                </ul>
              </div>
            </GridCol>
          </GridRow>
        </section>
        
        <section className="px-8">
          <h2 className="text-2xl font-semibold mb-4">Melhores Práticas</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Use ErrorBoundary para envolver componentes ou seções específicas da aplicação, não toda a aplicação de uma vez</li>
            <li>Forneça mensagens de erro claras e instruções para o usuário</li>
            <li>Ofereça opções para o usuário tentar novamente ou reportar o problema</li>
            <li>Registre erros em serviços de monitoramento para acompanhamento e resolução</li>
            <li>Teste diferentes cenários de erro para garantir que a experiência do usuário seja adequada</li>
          </ul>
        </section>
      </GridContainer>
    </div>
  );
};

export default ErrorScreens;
