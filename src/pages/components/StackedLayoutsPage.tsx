
import React from 'react';
import Header from '@/components/library-components/Header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  LightBorderExample,
  DarkOverlapExample,
  MarketplaceExample,
  MarketplaceBuyerExample,
  InstitutionalExample
} from '@/components/application-shells/StackedLayoutExamples';
import { Card, CardContent } from '@/components/ui/card';
import DocumentationSkeleton from '@/components/library-components/DocumentationSkeleton';

const StackedLayoutsPage = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Stacked Layouts"
        description="Componentes de layout empilhado para diferentes tipos de interfaces de aplicação"
        type="components"
      />
      
      <DocumentationSkeleton>
        <p className="text-gray-600 mb-6">
          Os layouts empilhados são estruturas de interface que organizam o conteúdo em seções verticais, 
          geralmente com um cabeçalho fixo, uma área de navegação e conteúdo principal. São ideais para aplicativos 
          com fluxos de navegação hierárquicos claros.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-6">Exemplos de Layout</h2>
        
        <Tabs defaultValue="light-border" className="mb-10">
          <TabsList>
            <TabsTrigger value="light-border">Light Border</TabsTrigger>
            <TabsTrigger value="dark-overlap">Dark Overlap</TabsTrigger>
            <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
            <TabsTrigger value="marketplace-buyer">Marketplace Buyer</TabsTrigger>
            <TabsTrigger value="institutional">Institucional</TabsTrigger>
          </TabsList>
          
          <TabsContent value="light-border" className="mt-4">
            <Card>
              <CardContent className="p-0 overflow-hidden rounded-lg">
                <div className="border rounded-lg overflow-hidden">
                  <LightBorderExample />
                </div>
              </CardContent>
            </Card>
            <p className="text-sm text-gray-500 mt-4">
              Layout com bordas leves e navegação horizontal, ideal para aplicações corporativas e painéis administrativos.
            </p>
          </TabsContent>
          
          <TabsContent value="dark-overlap" className="mt-4">
            <Card>
              <CardContent className="p-0 overflow-hidden rounded-lg">
                <div className="border rounded-lg overflow-hidden">
                  <DarkOverlapExample />
                </div>
              </CardContent>
            </Card>
            <p className="text-sm text-gray-500 mt-4">
              Layout com cabeçalho escuro e conteúdo sobreposto, criando uma sensação de profundidade e modernidade.
            </p>
          </TabsContent>
          
          <TabsContent value="marketplace" className="mt-4">
            <Card>
              <CardContent className="p-0 overflow-hidden rounded-lg">
                <div className="border rounded-lg overflow-hidden">
                  <MarketplaceExample />
                </div>
              </CardContent>
            </Card>
            <p className="text-sm text-gray-500 mt-4">
              Layout otimizado para plataformas de marketplace, com foco em navegação intuitiva e apresentação de produtos.
            </p>
          </TabsContent>
          
          <TabsContent value="marketplace-buyer" className="mt-4">
            <Card>
              <CardContent className="p-0 overflow-hidden rounded-lg">
                <div className="border rounded-lg overflow-hidden">
                  <MarketplaceBuyerExample />
                </div>
              </CardContent>
            </Card>
            <p className="text-sm text-gray-500 mt-4">
              Versão do layout de marketplace adaptada para a perspectiva do comprador, com foco em filtros e categorias.
            </p>
          </TabsContent>
          
          <TabsContent value="institutional" className="mt-4">
            <Card>
              <CardContent className="p-0 overflow-hidden rounded-lg">
                <div className="border rounded-lg overflow-hidden">
                  <InstitutionalExample />
                </div>
              </CardContent>
            </Card>
            <p className="text-sm text-gray-500 mt-4">
              Layout para sites institucionais e landing pages, com ênfase em apresentação de marca e chamadas para ação.
            </p>
          </TabsContent>
        </Tabs>
        
        <h2 className="text-xl font-medium mt-10 mb-4">Quando utilizar</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
          <li>Aplicações administrativas e dashboards</li>
          <li>Interfaces que necessitam de navegação clara e hierárquica</li>
          <li>Quando o conteúdo principal precisa ser apresentado de forma organizada e sequencial</li>
          <li>Sites institucionais e de apresentação</li>
          <li>Plataformas de marketplace e e-commerce</li>
        </ul>
        
        <h2 className="text-xl font-medium mt-10 mb-4">Considerações de design</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Mantenha a consistência visual entre os diferentes níveis do layout</li>
          <li>Utilize o contraste adequadamente para diferenciar as áreas de navegação do conteúdo principal</li>
          <li>Considere a experiência em dispositivos móveis, garantindo que a navegação seja acessível</li>
          <li>Avalie a necessidade de fixar o cabeçalho para melhorar a usabilidade em páginas longas</li>
          <li>Utilize espaçamento adequado para criar hierarquia visual e melhorar a legibilidade</li>
        </ul>
      </DocumentationSkeleton>
    </div>
  );
};

export default StackedLayoutsPage;
