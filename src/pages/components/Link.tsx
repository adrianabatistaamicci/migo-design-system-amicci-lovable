
import React from 'react';
import { Link } from '@/components/ui/link';
import Header from '@/components/library-components/Header';
import ComponentCard from '@/components/ComponentCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LinkPage = () => {
  return (
    <div className="container max-w-4xl py-10">
      <Header 
        title="Link" 
        description="Um componente de link para navegação entre páginas ou para recursos externos."
        type="components"
      />
      
      <Tabs defaultValue="overview" className="mt-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="usage">Uso</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6 mt-6">
          <ComponentCard 
            title="Link Padrão" 
            description="Link de texto padrão com cor primary-dark (Amicci-700)"
            code={`<Link href="/components">Acessar componentes</Link>`}
          >
            <div className="flex flex-col space-y-4 items-start p-4">
              <Link href="/components">Acessar componentes</Link>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Link com Sublinhado" 
            description="Variante de link com sublinhado para destaque visual"
            code={`<Link href="/components" variant="underlined">Componentes sublinhado</Link>`}
          >
            <div className="flex flex-col space-y-4 items-start p-4">
              <Link href="/components" variant="underlined">Componentes sublinhado</Link>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Link Externo" 
            description="Link para recursos externos com ícone indicativo"
            code={`<Link href="https://lovable.dev" external>Site Lovable</Link>`}
          >
            <div className="flex flex-col space-y-4 items-start p-4">
              <Link href="https://lovable.dev" external>Site Lovable</Link>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Tamanhos de Link" 
            description="Links com diferentes tamanhos"
            code={`<Link href="/components" size="sm">Link pequeno</Link>
<Link href="/components">Link padrão</Link>
<Link href="/components" size="lg">Link grande</Link>`}
          >
            <div className="flex flex-col space-y-4 items-start p-4">
              <Link href="/components" size="sm">Link pequeno</Link>
              <Link href="/components">Link padrão</Link>
              <Link href="/components" size="lg">Link grande</Link>
            </div>
          </ComponentCard>
        </TabsContent>
        
        <TabsContent value="usage" className="space-y-6 mt-6">
          <div className="prose max-w-none">
            <h2>Importação</h2>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <code>{`import { Link } from '@/components/ui/link';`}</code>
            </pre>
            
            <h2 className="mt-8">Propriedades</h2>
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Propriedade</th>
                  <th className="text-left py-2">Tipo</th>
                  <th className="text-left py-2">Padrão</th>
                  <th className="text-left py-2">Descrição</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 font-medium">href</td>
                  <td className="py-2">string</td>
                  <td className="py-2">-</td>
                  <td className="py-2">URL para navegação</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">variant</td>
                  <td className="py-2">'default' | 'underlined'</td>
                  <td className="py-2">'default'</td>
                  <td className="py-2">Estilo visual do link</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">size</td>
                  <td className="py-2">'default' | 'sm' | 'lg'</td>
                  <td className="py-2">'default'</td>
                  <td className="py-2">Tamanho do texto do link</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">external</td>
                  <td className="py-2">boolean</td>
                  <td className="py-2">false</td>
                  <td className="py-2">Se verdadeiro, renderiza como tag <code>{"<a>"}</code> com target="_blank"</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">showExternalIcon</td>
                  <td className="py-2">boolean</td>
                  <td className="py-2">true</td>
                  <td className="py-2">Exibe ícone para links externos</td>
                </tr>
              </tbody>
            </table>
            
            <h2 className="mt-8">Exemplos</h2>
            
            <h3>Link interno</h3>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <code>{`<Link href="/components">Acessar componentes</Link>`}</code>
            </pre>
            
            <h3>Link externo</h3>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <code>{`<Link 
  href="https://example.com" 
  external 
  showExternalIcon={true}
>
  Visite Example.com
</Link>`}</code>
            </pre>
            
            <h3>Link com estilo personalizado</h3>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <code>{`<Link 
  href="/guidelines" 
  variant="underlined" 
  className="text-secondary-main hover:text-secondary-dark"
>
  Diretrizes de Design
</Link>`}</code>
            </pre>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LinkPage;
