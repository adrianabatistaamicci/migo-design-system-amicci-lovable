
import React, { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import Header from '@/components/library-components/Header';
import CodeBlock from '@/components/CodeBlock';
import ComponentCard from '@/components/ComponentCard';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';

const CodeBlockPage = () => {
  const [expandedExample, setExpandedExample] = useState<string | null>(null);
  
  const handleFullscreen = (id: string) => {
    setExpandedExample(expandedExample === id ? null : id);
  };

  const basicExample = `const Button = () => {
  return <button className="px-4 py-2 bg-blue-500 text-white rounded">
    Click me
  </button>
}`;

  const reactExample = `import React from 'react';
import { Button } from '@/components/ui/button';

export function ExampleComponent() {
  const handleClick = () => {
    console.log('Button clicked!');
  };
  
  return (
    <div className="flex flex-col gap-4">
      <Button onClick={handleClick}>
        Click me
      </Button>
      <Button variant="outline-secondary">
        Secondary Button
      </Button>
    </div>
  );
}`;

  return (
    <div className="w-full animate-slide-in">
      <Header 
        title="CodeBlock" 
        description="Um componente versátil para exibir blocos de código com sintaxe destacada e funcionalidades interativas."
      />

      <div className="mt-8 space-y-12">
        {/* Overview section */}
        <section>
          <h2 className="text-2xl font-medium text-gray-900 mb-4">Visão Geral</h2>
          <p className="text-gray-600 mb-6">
            O componente CodeBlock é utilizado para exibir snippets de código em diferentes linguagens
            com funcionalidades como copiar para a área de transferência, expandir/recolher o código
            e exibição em tela cheia.
          </p>

          <ComponentCard
            title="Exemplo Básico"
            description="Um exemplo simples do CodeBlock com suas funcionalidades padrão."
            code={`<CodeBlock 
  code="const hello = 'world';" 
  language="javascript" 
  title="Exemplo JavaScript"
/>`}
          >
            <CodeBlock
              code="const hello = 'world';"
              language="javascript"
              title="Exemplo JavaScript"
            />
          </ComponentCard>
        </section>

        {/* Variants section */}
        <section>
          <h2 className="text-2xl font-medium text-gray-900 mb-4">Variantes</h2>
          <p className="text-gray-600 mb-6">
            O CodeBlock pode ser configurado com diferentes opções para atender a diversos casos de uso.
          </p>

          <div className="grid grid-cols-1 gap-8">
            <ComponentCard
              title="Com Título"
              description="CodeBlock com um título descritivo no cabeçalho."
              code={`<CodeBlock 
  code={basicExample} 
  language="jsx" 
  title="Componente Button"
/>`}
            >
              <CodeBlock
                code={basicExample}
                language="jsx"
                title="Componente Button"
              />
            </ComponentCard>

            <ComponentCard
              title="Sem Título"
              description="CodeBlock sem título, mostrando apenas o código."
              code={`<CodeBlock 
  code={basicExample} 
  language="jsx"
/>`}
            >
              <CodeBlock
                code={basicExample}
                language="jsx"
              />
            </ComponentCard>

            <ComponentCard
              title="Código Expandido"
              description="CodeBlock com código expandido por padrão."
              code={`<CodeBlock 
  code={basicExample} 
  language="jsx" 
  title="Código Expandido" 
  showCode={true}
/>`}
            >
              <CodeBlock
                code={basicExample}
                language="jsx"
                title="Código Expandido"
                showCode={true}
              />
            </ComponentCard>

            <ComponentCard
              title="Com Tela Cheia"
              description="CodeBlock com opção de visualização em tela cheia."
              code={`<CodeBlock 
  code={reactExample} 
  language="tsx" 
  title="Exemplo React" 
  showFullscreen={true} 
  onFullscreen={() => handleFullscreen('example1')}
/>`}
            >
              <CodeBlock
                code={reactExample}
                language="tsx"
                title="Exemplo React"
                showFullscreen={true}
                onFullscreen={() => handleFullscreen('example1')}
              />
            </ComponentCard>

            <ComponentCard
              title="Sem Opção de Copiar"
              description="CodeBlock sem o botão de copiar para a área de transferência."
              code={`<CodeBlock 
  code={basicExample} 
  language="jsx" 
  title="Sem Copiar" 
  showCopy={false}
/>`}
            >
              <CodeBlock
                code={basicExample}
                language="jsx"
                title="Sem Copiar"
                showCopy={false}
              />
            </ComponentCard>

            <ComponentCard
              title="Com Classes Customizadas"
              description="CodeBlock com classes CSS personalizadas aplicadas."
              code={`<CodeBlock 
  code={basicExample} 
  language="jsx" 
  title="Classes Customizadas" 
  className="border-2 border-primary-main shadow-lg"
/>`}
            >
              <CodeBlock
                code={basicExample}
                language="jsx"
                title="Classes Customizadas"
                className="border-2 border-primary-main shadow-lg"
              />
            </ComponentCard>
          </div>
        </section>

        {/* API Reference */}
        <section>
          <h2 className="text-2xl font-medium text-gray-900 mb-4">API Reference</h2>
          <p className="text-gray-600 mb-6">
            O componente CodeBlock aceita as seguintes propriedades:
          </p>

          <div className="border border-gray-200 rounded-lg overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="w-[20%]">Propriedade</TableHead>
                  <TableHead className="w-[15%]">Tipo</TableHead>
                  <TableHead className="w-[15%]">Padrão</TableHead>
                  <TableHead className="w-[50%]">Descrição</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-mono text-gray-800">code</TableCell>
                  <TableCell className="font-mono text-gray-600">string</TableCell>
                  <TableCell className="font-mono text-gray-600">-</TableCell>
                  <TableCell className="text-gray-700">O código a ser exibido no bloco de código.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-gray-800">language</TableCell>
                  <TableCell className="font-mono text-gray-600">string</TableCell>
                  <TableCell className="font-mono text-gray-600">"jsx"</TableCell>
                  <TableCell className="text-gray-700">A linguagem de programação do código para destaque de sintaxe adequado.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-gray-800">title</TableCell>
                  <TableCell className="font-mono text-gray-600">string</TableCell>
                  <TableCell className="font-mono text-gray-600">undefined</TableCell>
                  <TableCell className="text-gray-700">Título opcional para o bloco de código.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-gray-800">className</TableCell>
                  <TableCell className="font-mono text-gray-600">string</TableCell>
                  <TableCell className="font-mono text-gray-600">undefined</TableCell>
                  <TableCell className="text-gray-700">Classes CSS adicionais a serem aplicadas ao componente.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-gray-800">showCopy</TableCell>
                  <TableCell className="font-mono text-gray-600">boolean</TableCell>
                  <TableCell className="font-mono text-gray-600">true</TableCell>
                  <TableCell className="text-gray-700">Se deve mostrar o botão de copiar para a área de transferência.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-gray-800">showFullscreen</TableCell>
                  <TableCell className="font-mono text-gray-600">boolean</TableCell>
                  <TableCell className="font-mono text-gray-600">false</TableCell>
                  <TableCell className="text-gray-700">Se deve mostrar o botão de visualização em tela cheia.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-gray-800">onFullscreen</TableCell>
                  <TableCell className="font-mono text-gray-600">() => void</TableCell>
                  <TableCell className="font-mono text-gray-600">undefined</TableCell>
                  <TableCell className="text-gray-700">Função a ser chamada quando o botão de tela cheia é clicado.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-gray-800">showCode</TableCell>
                  <TableCell className="font-mono text-gray-600">boolean</TableCell>
                  <TableCell className="font-mono text-gray-600">false</TableCell>
                  <TableCell className="text-gray-700">Se o código deve ser expandido por padrão.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Usage section */}
        <section>
          <h2 className="text-2xl font-medium text-gray-900 mb-4">Como Usar</h2>
          <p className="text-gray-600 mb-6">
            Importe o componente CodeBlock e use-o para exibir códigos de exemplo em suas documentações:
          </p>

          <CodeBlock
            code={`import CodeBlock from '@/components/CodeBlock';

export function ExampleDocumentation() {
  return (
    <div className="space-y-8">
      <h1>Documentação do Componente</h1>
      
      <CodeBlock
        code={\`const MyComponent = () => {
  return <div>Hello World</div>
}\`}
        language="jsx"
        title="Componente Simples"
        showCode={true}
      />
      
      <p>Você pode usar o componente acima para exibir uma saudação simples.</p>
    </div>
  );
}`}
            language="tsx"
            title="Exemplo de Uso"
            showCode={true}
          />
        </section>

        {/* Best Practices */}
        <section>
          <h2 className="text-2xl font-medium text-gray-900 mb-4">Melhores Práticas</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">Formatação de Código</h3>
              <p className="text-gray-600">
                Assegure-se de que o código esteja bem formatado e indentado para melhorar a legibilidade.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">Linguagem Correta</h3>
              <p className="text-gray-600">
                Especifique sempre a linguagem correta para garantir o destaque de sintaxe adequado.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">Títulos Descritivos</h3>
              <p className="text-gray-600">
                Use títulos claros e descritivos para ajudar os usuários a entenderem o propósito do código.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">Estado Inicial</h3>
              <p className="text-gray-600">
                Para códigos extensos, mantenha o código recolhido por padrão (showCode={false}). Para trechos curtos ou 
                importantes, considere mostrá-los expandidos (showCode={true}).
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CodeBlockPage;
