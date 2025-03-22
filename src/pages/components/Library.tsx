
import React, { useEffect, useState } from 'react';
import ComponentCard from '@/components/ComponentCard';
import Header from '@/components/library-components/Header';
import EmptyState from '@/components/library-components/EmptyState';

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
    <div className="animate-fade-in">
      <div className="max-w-3xl mb-12">
        <Header
          title="Library Components"
          description="A collection of reusable UI components designed for our design system."
          type="components"
        />
        
        <div className="mt-8 grid grid-cols-1 gap-6">
          {Object.entries(components).map(([name, Component]) => (
            <ComponentCard key={name} title={name} description="">
              <div className="p-4">
                <Component {...getDefaultProps(name)} />
              </div>
            </ComponentCard>
          ))}

          {/* Add EmptyState component card */}
          <ComponentCard 
            title="EmptyState" 
            description="Usado para indicar páginas ou seções que estão em desenvolvimento."
            code={`<EmptyState 
  title="Conteúdo em Desenvolvimento" 
  description="Esta documentação está atualmente sendo desenvolvida." 
  icon="construction" 
/>`}
          >
            <div className="p-4">
              <EmptyState />
            </div>
          </ComponentCard>
          
          {/* Add Header component card */}
          <ComponentCard 
            title="Header" 
            description="Cabeçalho usado para seções principais do design system."
            code={`<Header 
  title="Título de exemplo" 
  description="Descrição de exemplo para demonstrar o componente Header." 
  type="components" 
/>`}
          >
            <div className="p-4">
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
