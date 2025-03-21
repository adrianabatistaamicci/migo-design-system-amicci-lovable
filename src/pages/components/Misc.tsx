
import React, { useEffect, useState } from 'react';
import ComponentCard from '@/components/ComponentCard';

// Dynamically import all components from the library-components directory
const importAll = (r: __WebpackModuleApi.RequireContext) => {
  return r.keys().reduce((acc: Record<string, React.ComponentType<any>>, key: string) => {
    const componentName = key.replace('./', '').replace('.tsx', '');
    acc[componentName] = r(key).default;
    return acc;
  }, {});
};

// This is a special webpack function that will import all files from a directory
// @ts-ignore
const libraryComponents = import.meta.glob('/src/components/library-components/*.tsx', { eager: true });

const MiscPage: React.FC = () => {
  const [components, setComponents] = useState<Record<string, React.ComponentType<any>>>({});

  useEffect(() => {
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

  return (
    <div className="animate-fade-in">
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 text-sm text-mui-primary font-medium mb-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-mui-primary/10 text-mui-primary">
            Misc Components
          </span>
        </div>
        
        <h1 className="text-4xl font-medium text-mui-text-primary mb-4">
          Library Components
        </h1>
        
        <div className="mt-8 grid grid-cols-1 gap-6">
          {Object.entries(components).map(([name, Component]) => (
            <ComponentCard
              key={name}
              title={name}
              description=""
            >
              <div className="p-4">
                <Component {...getDefaultProps(name)} />
              </div>
            </ComponentCard>
          ))}
        </div>
      </div>
    </div>
  );
};

// Helper function to provide default props for each component type
const getDefaultProps = (componentName: string): Record<string, any> => {
  switch (componentName) {
    case 'FoundationsHeader':
      return {
        title: "Example Title",
        description: "This is an example description to showcase the FoundationsHeader component."
      };
    // Add more cases as new components are added to the library-components folder
    default:
      return {};
  }
};

export default MiscPage;
