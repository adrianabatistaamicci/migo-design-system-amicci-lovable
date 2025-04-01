
import React, { useEffect, useState } from 'react';
import ComponentCard from '@/components/ComponentCard';
import Header from '@/components/library-components/Header';
import EmptyState from '@/components/library-components/EmptyState';
import Footer from '@/components/library-components/Footer';
import { Separator } from '@/components/ui/separator';
import DocumentationSkeleton from '@/components/library-components/DocumentationSkeleton';
import ColorSwatch from '@/components/colors/ColorSwatch';
import CodeBlock from '@/components/CodeBlock';

// Define the type for the module records returned by import.meta.glob
type ModuleRecord = Record<string, {
  default: React.ComponentType<any>;
}>;

const LibraryPage: React.FC = () => {
  const [components, setComponents] = useState<Record<string, React.ComponentType<any>>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [fullscreenCode, setFullscreenCode] = useState<string | null>(null);
  
  useEffect(() => {
    // This is a special Vite function that will import all files from a directory
    const libraryComponents = import.meta.glob<{
      default: React.ComponentType<any>;
    }>('/src/components/library-components/*.tsx', {
      eager: true
    }) as ModuleRecord;

    // Convert the import.meta.glob result to our expected format
    const formattedComponents: Record<string, React.ComponentType<any>> = {};
    for (const path in libraryComponents) {
      const componentName = path.split('/').pop()?.replace('.tsx', '') || '';
      // Skip EmptyState component and Header component as we'll add them manually to prevent duplication
      // Also skip HeroSection and other components as requested by the user
      if (componentName && componentName !== 'EmptyState' && componentName !== 'Header' && componentName !== 'ComponentsHeader' && componentName !== 'FoundationsHeader' && componentName !== 'HeroSection' && componentName !== 'DocumentationSkeleton' && componentName !== 'Footer' && libraryComponents[path].default) {
        formattedComponents[componentName] = libraryComponents[path].default;
      }
    }
    setComponents(formattedComponents);

    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <DocumentationSkeleton />;
  }

  const handleOpenFullscreen = (code: string) => {
    setFullscreenCode(code);
  };

  const handleCloseFullscreen = () => {
    setFullscreenCode(null);
  };

  return (
    <div className="animate-fade-in w-full max-w-[1280px] mx-auto">
      <div className="w-full mb-6">
        <Header 
          title="Library Components" 
          description="Uma coleção de componentes de UI reutilizáveis projetados para o nossa documentação de design system." 
          type="components" 
        />
        
        <div className="mt-6 grid grid-cols-1 gap-6">
          {/* Header component card */}
          <ComponentCard 
            title="Header" 
            description="Cabeçalho usado para seções principais do design system." 
            className="w-full"
            showCodeBlockInside={true}
            code={`<Header 
  title="Título de exemplo" 
  description="Descrição de exemplo para demonstrar o componente Header." 
  type="components" 
/>`}
            codeBlockTitle="Implementação do Header"
            codeBlockLanguage="tsx"
          >
            <Header 
              title="Título de exemplo" 
              description="Descrição de exemplo para demonstrar o componente Header." 
              type="components" 
            />
          </ComponentCard>
          
          {/* EmptyState component card */}
          <ComponentCard 
            title="EmptyState" 
            description="Usado para indicar páginas ou seções que estão em desenvolvimento." 
            className="w-full"
            showCodeBlockInside={true}
            code={`<EmptyState 
  title="Conteúdo em Desenvolvimento" 
  description="Esta documentação está atualmente sendo desenvolvida." 
  icon="construction" 
/>`}
            codeBlockTitle="Implementação do EmptyState"
            codeBlockLanguage="tsx"
          >
            <EmptyState />
          </ComponentCard>
          
          {Object.entries(components).map(([name, Component]) => (
            <ComponentCard 
              key={name} 
              title={name} 
              description="" 
              className="w-full"
              showCodeBlockInside={true}
              code={`<${name} ${getCodeProps(name)} />`}
              codeBlockTitle={`Implementação do ${name}`}
              codeBlockLanguage="tsx"
            >
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-900">{name}</h3>
                <div className="-mx-4">
                  <Separator className="mt-2" />
                </div>
              </div>
              <Component {...getDefaultProps(name)} />
            </ComponentCard>
          ))}

          {/* Footer component card */}
          <ComponentCard 
            title="Footer" 
            description="Rodapé para exibir créditos e links de governança" 
            className="w-full"
            showCodeBlockInside={true}
            code={`<Footer 
  additionalText="© 2024 Amicci" 
  governanceUrl="/guidelines/technical-governance" 
/>`}
            codeBlockTitle="Implementação do Footer"
            codeBlockLanguage="tsx"
          >
            <Footer additionalText="© 2024 Amicci" />
          </ComponentCard>

          {/* Add ComponentCard component card */}
          <ComponentCard 
            title="ComponentCard" 
            description="Card para exibir exemplos de componentes com código" 
            className="w-full"
            showCodeBlockInside={true}
            code={`<ComponentCard 
  title="Example Component" 
  description="Description of the component"
  code={\`const Example = () => <div>Example</div>\`}
>
  <div>Component content goes here</div>
</ComponentCard>`}
            codeBlockTitle="Implementação do ComponentCard"
            codeBlockLanguage="tsx"
          >
            <p>Example content inside a ComponentCard</p>
          </ComponentCard>

          {/* Add ComponentCard with showCodeBlockInside variant */}
          <ComponentCard 
            title="ComponentCard com CodeBlock interno" 
            description="Variante do ComponentCard com CodeBlock embutido"
            className="w-full"
            showCodeBlockInside={true}
            code={`<ComponentCard 
  title="Exemplo com CodeBlock interno" 
  description="Este componente exibe o bloco de código dentro do card"
  showCodeBlockInside={true}
  code="const Example = () => <div>Internal code example</div>"
  codeBlockTitle="Código integrado"
  codeBlockLanguage="tsx"
>
  <div>Conteúdo com bloco de código integrado abaixo</div>
</ComponentCard>`}
            codeBlockTitle="Implementação do ComponentCard com CodeBlock interno"
            codeBlockLanguage="tsx"
          >
            <ComponentCard 
              title="Exemplo com CodeBlock interno" 
              description="Este componente exibe o bloco de código dentro do card" 
              showCodeBlockInside={true}
              code="const Example = () => <div>Internal code example</div>"
              codeBlockTitle="Código integrado"
              codeBlockLanguage="tsx"
            >
              <p>Conteúdo com bloco de código integrado abaixo</p>
            </ComponentCard>
          </ComponentCard>

          {/* ColorSwatch component card */}
          <ComponentCard 
            title="ColorSwatch" 
            description="Componente para exibir amostras de cores com opção de cópia" 
            className="w-full"
            showCodeBlockInside={true}
            code={`<ColorSwatch 
  color="bg-primary-main" 
  textOverlay="#10C2C0" 
  className="h-12" 
/>`}
            codeBlockTitle="Implementação do ColorSwatch"
            codeBlockLanguage="tsx"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Cor Primária</p>
                <ColorSwatch color="bg-primary-main" textOverlay="#10C2C0" className="h-12" />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Cor Secundária</p>
                <ColorSwatch color="bg-secondary-main" textOverlay="#14818A" className="h-12" />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Cor de Erro</p>
                <ColorSwatch color="bg-error-main" textOverlay="#F04438" className="h-12" />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Cor de Sucesso</p>
                <ColorSwatch color="bg-success-main" textOverlay="#12B76A" className="h-12" />
              </div>
            </div>
          </ComponentCard>

          {/* CodeBlock component card */}
          <ComponentCard 
            title="CodeBlock" 
            description="Componente para exibir blocos de código com formatação e função de cópia" 
            className="w-full"
            showCodeBlockInside={true}
            code={`<CodeBlock 
  code="import { Button } from '@/components/ui/button';" 
  language="tsx" 
  title="Exemplo de importação"
  showCode={true}
/>`}
            codeBlockTitle="Implementação do CodeBlock"
            codeBlockLanguage="tsx"
          >
            <CodeBlock 
              code="import { Button } from '@/components/ui/button';" 
              language="tsx" 
              title="Exemplo de importação"
              showCode={true}
            />
          </ComponentCard>

          {/* CodeBlock with fullscreen component card */}
          <ComponentCard 
            title="CodeBlock com Tela Cheia" 
            description="Componente para exibir blocos de código com opção de visualização em tela cheia" 
            className="w-full"
            showCodeBlockInside={true}
            code={`<CodeBlock 
  code="function Example() {\\n  return <div>Exemplo de código com opção de tela cheia</div>;\\n}" 
  language="tsx" 
  title="Exemplo com tela cheia"
  showCode={true}
  showFullscreen={true}
  onFullscreen={() => handleOpenFullscreen("function Example() {\\n  return <div>Exemplo de código com opção de tela cheia</div>;\\n}")}
/>`}
            codeBlockTitle="Implementação do CodeBlock com Tela Cheia"
            codeBlockLanguage="tsx"
          >
            <CodeBlock 
              code="function Example() {\n  return <div>Exemplo de código com opção de tela cheia</div>;\n}" 
              language="tsx" 
              title="Exemplo com tela cheia"
              showCode={true}
              showFullscreen={true}
              onFullscreen={() => handleOpenFullscreen("function Example() {\n  return <div>Exemplo de código com opção de tela cheia</div>;\n}")}
            />
          </ComponentCard>
        </div>
      </div>

      {fullscreenCode && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-6">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-medium">Visualização em Tela Cheia</h3>
              <button 
                onClick={handleCloseFullscreen}
                className="text-gray-500 hover:text-gray-700"
              >
                Fechar
              </button>
            </div>
            <div className="overflow-auto flex-1 p-4">
              <pre className="bg-gray-900 p-4 text-sm text-gray-50 rounded-md h-full overflow-auto">
                <code>{fullscreenCode}</code>
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Helper function to provide default props for each component type
const getDefaultProps = (componentName: string): Record<string, any> => {
  switch (componentName) {
    case 'Header':
      return {
        title: "Example Title",
        description: "This is an example description to showcase the Header component.",
        type: "components"
      };
    case 'EmptyState':
      return {
        title: "Conteúdo em Desenvolvimento",
        description: "Esta documentação está atualmente sendo desenvolvida. Volte em breve para atualizações.",
        icon: "construction"
      };
    default:
      return {};
  }
};

// Helper function to generate code props for display
const getCodeProps = (componentName: string): string => {
  switch (componentName) {
    case 'Header':
      return 'title="Example Title" description="Example description" type="components"';
    case 'EmptyState':
      return 'title="Conteúdo em Desenvolvimento" description="Esta documentação está em desenvolvimento"';
    default:
      return '';
  }
};

export default LibraryPage;
