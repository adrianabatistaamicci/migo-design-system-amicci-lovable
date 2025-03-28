
/**
 * @protected
 * ATENÇÃO: Este arquivo contém conteúdo finalizado e aprovado.
 * Não deve ser alterado diretamente pelo assistente AI.
 * Apenas atualizações de componentes devem ser refletidas.
 */

import React from 'react';
import { Link } from '@/components/ui/link';
import Header from '@/components/library-components/Header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeBlock from '@/components/CodeBlock';

const LinkPage = () => {
  return (
    <div className="container max-w-[1280px] w-full py-10">
      <Header 
        title="Link" 
        description="Um componente de link para navegação entre páginas ou para recursos externos."
        type="components"
      />
      
      <Tabs defaultValue="overview" className="mt-8 w-full">
        <TabsList className="inline-flex w-auto rounded-lg bg-gray-100 p-1">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="usage">Uso</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6 mt-6 w-full">
          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-medium mb-4">Link Padrão</h3>
              <div className="flex flex-col space-y-4 items-start p-4">
                <Link href="/components">Acessar componentes</Link>
              </div>
            </div>
            <CodeBlock 
              code={`<Link href="/components">Acessar componentes</Link>`}
              language="tsx"
              title="Implementação do Link Padrão"
              showCode={false}
            />
          </div>
          
          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-medium mb-4">Link com Sublinhado</h3>
              <div className="flex flex-col space-y-4 items-start p-4">
                <Link href="/components" variant="underlined">Componentes sublinhado</Link>
              </div>
            </div>
            <CodeBlock 
              code={`<Link href="/components" variant="underlined">Componentes sublinhado</Link>`}
              language="tsx"
              title="Implementação do Link com Sublinhado"
              showCode={false}
            />
          </div>
          
          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-medium mb-4">Link Externo</h3>
              <div className="flex flex-col space-y-4 items-start p-4">
                <Link href="https://lovable.dev" external>Site Lovable</Link>
              </div>
            </div>
            <CodeBlock 
              code={`<Link href="https://lovable.dev" external>Site Lovable</Link>`}
              language="tsx"
              title="Implementação do Link Externo"
              showCode={false}
            />
          </div>
          
          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-medium mb-4">Tamanhos de Link</h3>
              <div className="flex flex-col space-y-4 items-start p-4">
                <Link href="/components" size="sm">Link pequeno</Link>
                <Link href="/components">Link padrão</Link>
                <Link href="/components" size="lg">Link grande</Link>
              </div>
            </div>
            <CodeBlock 
              code={`<Link href="/components" size="sm">Link pequeno</Link>
<Link href="/components">Link padrão</Link>
<Link href="/components" size="lg">Link grande</Link>`}
              language="tsx"
              title="Implementação de Links com Diferentes Tamanhos"
              showCode={false}
            />
          </div>
        </TabsContent>
        
        <TabsContent value="usage" className="space-y-6 mt-6 w-full">
          <div className="prose max-w-none w-full">
            <h2>Importação</h2>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto w-full">
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
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto w-full">
              <code>{`<Link href="/components">Acessar componentes</Link>`}</code>
            </pre>
            
            <h3>Link externo</h3>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto w-full">
              <code>{`<Link 
  href="https://example.com" 
  external 
  showExternalIcon={true}
>
  Visite Example.com
</Link>`}</code>
            </pre>
            
            <h3>Link com estilo personalizado</h3>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto w-full">
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
