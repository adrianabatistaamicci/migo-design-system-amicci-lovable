
import React from 'react';
import Header from '@/components/library-components/Header';
import DocumentationSkeleton from '@/components/library-components/DocumentationSkeleton';
import { Card, CardContent } from '@/components/ui/card';

const TitleHeadings = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Title Headings"
        description="Componentes de títulos para diferentes hierarquias e contextos"
        type="components"
      />
      
      <DocumentationSkeleton>
        <p className="text-gray-600 mb-6">
          Os componentes de título são elementos fundamentais para estabelecer hierarquia visual e organizar o conteúdo de forma clara e acessível.
          Eles ajudam os usuários a compreender a estrutura da informação e a navegar pelo conteúdo com facilidade.
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                Esta seção está atualmente em desenvolvimento. Exemplos detalhados de implementação serão adicionados em breve.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-medium mt-8 mb-4">Níveis de Títulos</h2>
        
        <div className="space-y-6 mb-8">
          <div className="border p-4 rounded-md">
            <h1 className="text-3xl font-semibold mb-2">Título Nível 1</h1>
            <p className="text-sm text-gray-500">Usado para títulos principais de página ou seções muito importantes</p>
          </div>
          
          <div className="border p-4 rounded-md">
            <h2 className="text-2xl font-medium mb-2">Título Nível 2</h2>
            <p className="text-sm text-gray-500">Usado para subtítulos de seções principais</p>
          </div>
          
          <div className="border p-4 rounded-md">
            <h3 className="text-xl font-medium mb-2">Título Nível 3</h3>
            <p className="text-sm text-gray-500">Usado para subseções dentro de uma seção principal</p>
          </div>
          
          <div className="border p-4 rounded-md">
            <h4 className="text-lg font-medium mb-2">Título Nível 4</h4>
            <p className="text-sm text-gray-500">Usado para grupos de conteúdo menores</p>
          </div>
          
          <div className="border p-4 rounded-md">
            <h5 className="text-base font-medium mb-2">Título Nível 5</h5>
            <p className="text-sm text-gray-500">Usado para elementos específicos ou detalhes</p>
          </div>
        </div>
        
        <h2 className="text-xl font-medium mt-10 mb-4">Quando utilizar</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
          <li>Para estabelecer hierarquia visual clara</li>
          <li>Para dividir o conteúdo em seções compreensíveis</li>
          <li>Para melhorar a acessibilidade e navegação</li>
          <li>Para destacar informações importantes</li>
        </ul>
        
        <h2 className="text-xl font-medium mt-10 mb-4">Considerações de design</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Mantenha a consistência nos estilos de títulos em toda a aplicação</li>
          <li>Use a hierarquia corretamente - não pule níveis de título</li>
          <li>Considere o contraste e legibilidade para todos os usuários</li>
          <li>Adapte os tamanhos conforme a responsividade da tela</li>
          <li>Utilize espaçamento adequado para criar respiro visual entre seções</li>
        </ul>

        <Card className="mt-10">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-2">Próximos passos</h3>
            <p className="text-gray-600">
              Estamos trabalhando para adicionar exemplos mais detalhados de diferentes estilos e variações de títulos.
              Volte em breve para ver as atualizações.
            </p>
          </CardContent>
        </Card>
      </DocumentationSkeleton>
    </div>
  );
};

export default TitleHeadings;
