import React, { useEffect, useState } from 'react';
import ComponentCard from '@/components/ComponentCard';

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
      if (componentName && libraryComponents[path].default) {
        formattedComponents[componentName] = libraryComponents[path].default;
      }
    }
    setComponents(formattedComponents);
  }, []);
  return <div className="animate-fade-in">
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 text-sm text-mui-primary font-medium mb-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-mui-primary/10 text-mui-primary">Components</span>
        </div>
        
        <h1 className="text-4xl font-medium text-mui-text-primary mb-4">
          Library Components
        </h1>
        
        <div className="mt-8 grid grid-cols-1 gap-6">
          {Object.entries(components).map(([name, Component]) => <ComponentCard key={name} title={name} description="">
              <div className="p-4">
                <Component {...getDefaultProps(name)} />
              </div>
            </ComponentCard>)}
        </div>
      </div>
    </div>;
};

// Helper function to provide default props for each component type
const getDefaultProps = (componentName: string): Record<string, any> => {
  switch (componentName) {
    case 'FoundationsHeader':
      return {
        title: "Example Title",
        description: "This is an example description to showcase the FoundationsHeader component."
      };
    case 'ComponentsHeader':
      return {
        title: "Component Example",
        description: "This is an example description to showcase the ComponentsHeader component."
      };
    default:
      return {};
  }
};
export default LibraryPage;
