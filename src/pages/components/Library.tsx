
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
          <div className="w-full">
            <ComponentCard 
              title="Header" 
              description="Cabeçalho usado para seções principais do design system." 
              className="w-full"
            >
              <div className="w-full">
                <Header 
                  title="Título de exemplo" 
                  description="Descrição de exemplo para demonstrar o componente Header." 
                  type="components" 
                />
              </div>
              <CodeBlock 
                code={`<Header 
  title="Título de exemplo" 
  description="Descrição de exemplo para demonstrar o componente Header." 
  type="components" 
/>`}
                language="tsx"
                showCode={true}
              />
            </ComponentCard>
          </div>
          
          {/* EmptyState component card */}
          <div className="w-full">
            <ComponentCard 
              title="EmptyState" 
              description="Usado para indicar páginas ou seções que estão em desenvolvimento." 
              className="w-full"
            >
              <div className="w-full">
                <EmptyState />
              </div>
              <CodeBlock 
                code={`<EmptyState 
  title="Conteúdo em Desenvolvimento" 
  description="Esta documentação está atualmente sendo desenvolvida." 
  icon="construction" 
/>`}
                language="tsx"
                showCode={true}
              />
            </ComponentCard>
          </div>
          
          {Object.entries(components).map(([name, Component]) => (
            <div key={name} className="w-full">
              <ComponentCard title={name} description="" className="w-full">
                <div className="p-4 w-full">
                  <div className="mb-4">
                    <h3 className="text-lg font-medium text-gray-900">{name}</h3>
                    <div className="-mx-4">
                      <Separator className="mt-2" />
                    </div>
                  </div>
                  <Component {...getDefaultProps(name)} />
                </div>
              </ComponentCard>
            </div>
          ))}

          {/* Footer component card - Mantendo apenas esta instância do Footer */}
          <div className="w-full">
            <ComponentCard 
              title="Footer" 
              description="Rodapé para exibir créditos e links de governança" 
              className="w-full"
            >
              <div className="p-4 w-full">
                <Footer additionalText="© 2024 Amicci" />
              </div>
              <CodeBlock 
                code={`<Footer 
  additionalText="© 2024 Amicci" 
  governanceUrl="/guidelines/technical-governance" 
/>`}
                language="tsx"
                showCode={true}
              />
            </ComponentCard>
          </div>

          {/* Add ComponentCard component card */}
          <div className="w-full">
            <ComponentCard 
              title="ComponentCard" 
              description="Card para exibir exemplos de componentes com código" 
              className="w-full"
            >
              <div className="p-4 w-full">
                <ComponentCard title="Example Card" description="This is an example of ComponentCard">
                  <div className="p-4 flex items-center justify-center text-center">
                    <p>Example content inside a ComponentCard</p>
                  </div>
                </ComponentCard>
              </div>
              <CodeBlock 
                code={`<ComponentCard 
  title="Example Component" 
  description="Description of the component"
  code={\`const Example = () => <div>Example</div>\`}
>
  <div>Component content goes here</div>
</ComponentCard>`}
                language="tsx"
                showCode={true}
              />
            </ComponentCard>
          </div>

          {/* ColorSwatch component card */}
          <div className="w-full">
            <ComponentCard 
              title="ColorSwatch" 
              description="Componente para exibir amostras de cores com opção de cópia" 
              className="w-full"
            >
              <div className="p-4 w-full">
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
              </div>
              <CodeBlock 
                code={`<ColorSwatch 
  color="bg-primary-main" 
  textOverlay="#10C2C0" 
  className="h-12" 
/>`}
                language="tsx"
                showCode={true}
              />
            </ComponentCard>
          </div>

          {/* CodeBlock component card */}
          <div className="w-full">
            <ComponentCard 
              title="CodeBlock" 
              description="Componente para exibir blocos de código com formatação e função de cópia" 
              className="w-full"
            >
              <div className="p-4 w-full">
                <CodeBlock 
                  code="import { Button } from '@/components/ui/button';" 
                  language="tsx" 
                  title="Exemplo de importação"
                  showCode={true}
                />
              </div>
              <CodeBlock 
                code={`<CodeBlock 
  code="import { Button } from '@/components/ui/button';" 
  language="tsx" 
  title="Exemplo de importação" 
  showCode={true}
/>`}
                language="tsx"
                showCode={true}
              />
            </ComponentCard>
          </div>
        </div>
      </div>
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

export default LibraryPage;
