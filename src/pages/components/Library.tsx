
import React from 'react';
import Header from '@/components/library-components/Header';
import CodeBlock from '@/components/CodeBlock';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Library = () => {
  const installCode = `npm install @amicci/migo-ds`;
  const importCode = `import { Button } from '@amicci/migo-ds';`;
  const usageCode = `import React from 'react';
import { Button } from '@amicci/migo-ds';

export default function MyComponent() {
  return (
    <div>
      <Button variant="default">Botão primário</Button>
      <Button variant="outline-secondary">Botão secundário</Button>
    </div>
  );
}`;

  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Biblioteca Migo"
        description="Instruções para instalação e uso da biblioteca Migo Design System"
        type="components"
      />
      
      <div className="max-w-[1280px] mx-auto">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-6">Instalação</h2>
          <p className="mb-6 text-gray-700">
            Para utilizar os componentes do Migo Design System em seu projeto, instale o pacote npm:
          </p>
          
          <CodeBlock 
            code={installCode} 
            language="bash" 
            title="Instalação via npm"
          />
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-6">Uso básico</h2>
          <p className="mb-6 text-gray-700">
            Após a instalação, você pode importar os componentes diretamente em seu código:
          </p>
          
          <CodeBlock 
            code={importCode} 
            language="tsx" 
            title="Exemplo de importação" 
          />
          
          <div className="mt-6">
            <p className="mb-4 text-gray-700">
              Aqui está um exemplo simples de como usar o componente Button:
            </p>
            
            <CodeBlock 
              code={usageCode} 
              language="tsx"
              title="Exemplo de uso" 
            />
          </div>
          
          <div className="mt-6 bg-white p-6 rounded-lg border border-gray-200">
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="preview">Visualização</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="py-4">
                <div className="flex flex-wrap gap-4">
                  <Button variant="default">Botão primário</Button>
                  <Button variant="outline-secondary">Botão secundário</Button>
                  <Button variant="text-default">Botão de texto</Button>
                  <Button variant="error">Botão de erro</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-6">Documentação</h2>
          <p className="mb-6 text-gray-700">
            Para mais informações sobre os componentes disponíveis, propriedades e exemplos, consulte a documentação completa do Migo Design System neste site.
          </p>
          <p className="text-gray-700">
            Cada componente inclui:
          </p>
          <ul className="list-disc pl-6 mt-2 mb-6 text-gray-700">
            <li>Exemplos de uso</li>
            <li>Propriedades disponíveis</li>
            <li>Variantes e temas</li>
            <li>Boas práticas e acessibilidade</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Library;
