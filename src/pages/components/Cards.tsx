
import React from 'react';
import Header from '@/components/library-components/Header';
import DocumentationSkeleton from '@/components/library-components/DocumentationSkeleton';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Cards = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Cards"
        description="Componentes de cartão para exibir conteúdo em contêineres formatados"
        type="components"
      />
      
      <DocumentationSkeleton>
        <p className="text-gray-600 mb-6">
          Cards são contêineres de conteúdo versáteis que agrupam informações relacionadas de forma visualmente distinta. 
          Eles são fundamentais para organizar e apresentar diversos tipos de conteúdo de forma clara e acessível.
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
                Esta seção está em desenvolvimento com exemplos avançados. Por enquanto, são apresentados exemplos básicos.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-medium mt-8 mb-4">Exemplos de Cards</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Card Simples</CardTitle>
              <CardDescription>Um exemplo de card básico com título e descrição</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Este é um exemplo de conteúdo dentro de um card. Os cards são contêineres versáteis para mostrar informações relacionadas de forma organizada.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Card com Ações</CardTitle>
              <CardDescription>Um card com botões de ação no rodapé</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Este card inclui botões de ação no rodapé, permitindo ao usuário interagir com o conteúdo apresentado.</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancelar</Button>
              <Button>Salvar</Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Card Compacto</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Um exemplo de card com layout mais compacto.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Card Destacado</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Card com estilo visual diferenciado para destaque.</p>
            </CardContent>
          </Card>
          
          <Card className="border-dashed">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Card Tracejado</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Card com borda tracejada para usos específicos.</p>
            </CardContent>
          </Card>
        </div>
        
        <h2 className="text-xl font-medium mt-10 mb-4">Quando utilizar</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
          <li>Para agrupar informações relacionadas e criar hierarquia visual</li>
          <li>Em layouts de grade para exibir coleções de itens similares</li>
          <li>Para destacar seções importantes de conteúdo</li>
          <li>Em dashboards para separar diferentes conjuntos de dados ou métricas</li>
          <li>Em formulários para separar grupos lógicos de campos</li>
        </ul>
        
        <h2 className="text-xl font-medium mt-10 mb-4">Considerações de design</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Mantenha a consistência no uso de cards em toda a aplicação</li>
          <li>Use espaçamento interno adequado para melhorar a legibilidade</li>
          <li>Considere diferentes estados visuais para cards interativos (hover, active, etc.)</li>
          <li>Adapte os cards para diferentes tamanhos de tela</li>
          <li>Use sombras e elevação com moderação para criar hierarquia sem sobrecarregar visualmente</li>
        </ul>

        <Card className="mt-10">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-2">Próximos passos</h3>
            <p className="text-gray-600">
              Em breve serão adicionados exemplos mais avançados de cards, como cards interativos, 
              cards com mídia, estados de carregamento e variações de layout.
            </p>
          </CardContent>
        </Card>
      </DocumentationSkeleton>
    </div>
  );
};

export default Cards;
