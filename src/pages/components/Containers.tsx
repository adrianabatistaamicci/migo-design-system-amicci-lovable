
import React from 'react';
import Header from '@/components/library-components/Header';
import ComponentCard from '@/components/ComponentCard';
import ComponentPreview from '@/components/ComponentPreview';

const Containers = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Containers"
        description="Componentes para limitar e organizar conteúdo em layouts responsivos."
        type="components"
      />
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ComponentPreview 
          title="Container Básico" 
          variantCount={1}
          preview={
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-[280px] p-4 border border-dashed border-gray-300 rounded-md">
                <div className="h-6 bg-primary-light/50 rounded mb-2"></div>
                <div className="h-4 bg-gray-100 rounded mb-2"></div>
                <div className="h-4 bg-gray-100 rounded mb-2"></div>
                <div className="h-4 bg-gray-100 rounded"></div>
              </div>
            </div>
          }
        />

        <ComponentPreview 
          title="Container com Largura Máxima" 
          variantCount={1}
          preview={
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-[280px] p-4 border-4 border-primary-light rounded-md flex flex-col items-center justify-center">
                <div className="w-3/4 h-6 bg-primary-light/50 rounded mb-2"></div>
                <div className="w-5/6 h-4 bg-gray-100 rounded mb-2"></div>
                <div className="w-full h-4 bg-gray-100 rounded mb-2"></div>
                <div className="w-5/6 h-4 bg-gray-100 rounded"></div>
                <div className="text-xs text-center mt-2 text-primary-main font-mono">max-w-[1200px]</div>
              </div>
            </div>
          }
        />

        <ComponentPreview 
          title="Container Centralizado" 
          variantCount={1}
          preview={
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-[280px] h-[80px] bg-gray-100 rounded-md relative flex items-center justify-center">
                <div className="w-2/3 h-1/2 bg-primary-light/50 rounded-md flex items-center justify-center">
                  <div className="text-xs text-center text-primary-main font-mono">mx-auto</div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full border-2 border-dashed border-gray-300 rounded-md pointer-events-none"></div>
              </div>
            </div>
          }
        />
      </div>

      <div className="mt-8">
        <ComponentCard 
          title="Exemplo de uso" 
          description="Diferentes tipos de containers para organizar o conteúdo" 
          className="mt-8"
          code={`// Container básico
<div className="container">
  {/* Conteúdo do container */}
</div>

// Container com padding personalizado
<div className="container px-4 md:px-6 lg:px-8">
  {/* Conteúdo do container */}
</div>

// Container com largura máxima
<div className="container max-w-4xl mx-auto">
  {/* Conteúdo do container */}
</div>`}
        >
          <div className="space-y-8 p-4">
            <div className="border border-dashed border-gray-300 p-4 rounded-md">
              <div className="text-sm font-medium mb-2">Container Básico</div>
              <div className="container bg-gray-100 p-4 rounded-md">
                <div className="h-6 bg-primary-light/50 rounded mb-2"></div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-8 bg-gray-200 rounded"></div>
                  <div className="h-8 bg-gray-200 rounded"></div>
                  <div className="h-8 bg-gray-200 rounded"></div>
                </div>
              </div>
              <div className="text-xs text-muted-foreground mt-2">
                <code>className="container"</code> - Container padrão com largura responsiva
              </div>
            </div>

            <div className="border border-dashed border-gray-300 p-4 rounded-md">
              <div className="text-sm font-medium mb-2">Container com Padding Personalizado</div>
              <div className="container px-4 md:px-6 lg:px-8 bg-gray-100 rounded-md">
                <div className="h-6 bg-primary-light/50 rounded my-4"></div>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="h-12 bg-gray-200 rounded"></div>
                  <div className="h-12 bg-gray-200 rounded"></div>
                </div>
              </div>
              <div className="text-xs text-muted-foreground mt-2">
                <code>className="container px-4 md:px-6 lg:px-8"</code> - Padding responsivo
              </div>
            </div>

            <div className="border border-dashed border-gray-300 p-4 rounded-md">
              <div className="text-sm font-medium mb-2">Container com Largura Máxima</div>
              <div className="max-w-4xl mx-auto bg-gray-100 p-4 rounded-md">
                <div className="h-6 bg-primary-light/50 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
              </div>
              <div className="text-xs text-muted-foreground mt-2">
                <code>className="max-w-4xl mx-auto"</code> - Largura máxima de 896px centralizada
              </div>
            </div>
          </div>
        </ComponentCard>
      </div>
    </div>
  );
};

export default Containers;
