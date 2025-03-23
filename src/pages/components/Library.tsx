
import React, { useEffect, useState } from 'react';
import ComponentCard from '@/components/ComponentCard';
import Header from '@/components/library-components/Header';
import EmptyState from '@/components/library-components/EmptyState';
import { Separator } from '@/components/ui/separator';

// Define the type for the module records returned by import.meta.glob
type ModuleRecord = Record<string, {
  default: React.ComponentType<any>;
}>;

const LibraryPage: React.FC = () => {
  const [components, setComponents] = useState<Record<string, React.ComponentType<any>>>({});
  
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
      if (componentName && 
          componentName !== 'EmptyState' && 
          componentName !== 'Header' &&
          componentName !== 'ComponentsHeader' &&
          componentName !== 'FoundationsHeader' &&
          libraryComponents[path].default) {
        formattedComponents[componentName] = libraryComponents[path].default;
      }
    }
    setComponents(formattedComponents);
  }, []);
  
  return (
    <div className="animate-fade-in w-full max-w-[1280px] mx-auto">
      <div className="w-full mb-12">
        <Header
          title="Library Components"
          description="Uma coleção de componentes de UI reutilizáveis projetados para o nossa documentação de design system."
          type="components"
        />
        
        <div className="mt-8 grid grid-cols-1 gap-6">
          {Object.entries(components).map(([name, Component]) => (
            <div key={name} className="w-full">
              <ComponentCard 
                title={name} 
                description="" 
                className="w-full"
              >
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

          {/* Add EmptyState component card */}
          <div className="w-full">
            <ComponentCard 
              title="EmptyState" 
              description="Usado para indicar páginas ou seções que estão em desenvolvimento."
              code={`<EmptyState 
  title="Conteúdo em Desenvolvimento" 
  description="Esta documentação está atualmente sendo desenvolvida." 
  icon="construction" 
/>`}
              className="w-full"
            >
              <div className="p-4 w-full">
                <div className="mb-4">
                  <h3 className="text-lg font-medium text-gray-900">EmptyState</h3>
                  <div className="-mx-4">
                    <Separator className="mt-2" />
                  </div>
                </div>
                <EmptyState />
              </div>
            </ComponentCard>
          </div>
          
          {/* Add Header component card */}
          <div className="w-full">
            <ComponentCard 
              title="Header" 
              description="Cabeçalho usado para seções principais do design system."
              code={`<Header 
  title="Título de exemplo" 
  description="Descrição de exemplo para demonstrar o componente Header." 
  type="components" 
/>`}
              className="w-full"
            >
              <div className="p-4 w-full">
                <div className="mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Header</h3>
                  <div className="-mx-4">
                    <Separator className="mt-2" />
                  </div>
                </div>
                <Header 
                  title="Título de exemplo" 
                  description="Descrição de exemplo para demonstrar o componente Header."
                  type="components"
                />
              </div>
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
