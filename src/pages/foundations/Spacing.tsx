import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tokenToPixels, pixelsToToken, getSpacingClass } from '@/utils/spacingUtils';
import { cn } from '@/lib/utils';
import { Chip } from '@/components/ui/chip';
import ComponentCard from '@/components/ComponentCard';

const SpacingPage = () => {
  return (
    <div className="w-full animate-fade-in">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-mui-primary font-medium mb-2">
          <Chip variant="filled" color="primary" size="sm">Foundations</Chip>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Spacing</h1>
        <p className="text-mui-text-secondary max-w-3xl" style={{ whiteSpace: 'nowrap', overflow: 'visible' }}>Nosso sistema de espaçamento fornece tamanhos consistentes que ajudam a criar ritmo visual e hierarquia.</p>
      </div>

      <Tabs defaultValue="scale" className="mt-8">
        <TabsList>
          <TabsTrigger value="scale">Escala</TabsTrigger>
          <TabsTrigger value="usage">Uso</TabsTrigger>
          <TabsTrigger value="examples">Exemplos</TabsTrigger>
        </TabsList>
        
        <TabsContent value="scale" className="space-y-6">
          <ComponentCard title="Sistema de Espaçamento" description="Nosso sistema de espaçamento é baseado em múltiplos de 4px para garantir consistência em toda a interface.">
            <p className="text-mui-text-secondary mb-6">
              Utilizamos uma escala de espaçamento consistente para criar ritmo visual e hierarquia em nossa interface. Todos os valores são múltiplos de 4px, o que facilita a criação de layouts harmoniosos e responsivos.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries({
                'space-0': 0,
                'space-1': 4,
                'space-2': 8,
                'space-3': 12,
                'space-4': 16,
                'space-5': 20,
                'space-6': 24,
                'space-8': 32,
                'space-10': 40,
                'space-12': 48,
                'space-16': 64,
                'space-20': 80,
                'space-24': 96,
                'space-32': 128,
                'space-40': 160,
                'space-48': 192,
                'space-56': 224,
                'space-64': 256,
              }).map(([token, pixelValue]) => (
                <div key={token} className="rounded-lg border p-4">
                  <h3 className="text-lg font-semibold">{token}</h3>
                  <p className="text-sm text-muted-foreground">{pixelValue}px</p>
                  <div className="mt-4 h-12 bg-primary-light rounded-md" style={{ width: '100%', height: pixelValue }} />
                </div>
              ))}
            </div>
          </ComponentCard>
        </TabsContent>
        
        <TabsContent value="usage">
          <div className="space-y-4 mt-6">
            <p>
              Use spacing tokens in your components to maintain consistency.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Margin</h3>
                <p className="text-sm text-muted-foreground">Add space around elements.</p>
                <div className="mt-2 p-3 border rounded-md">
                  <div className="bg-green-100 p-4">
                    <div className="bg-blue-100 m-4 p-4">Content with margin</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Padding</h3>
                <p className="text-sm text-muted-foreground">Add space within elements.</p>
                <div className="mt-2 p-3 border rounded-md">
                  <div className="bg-green-100 p-4">
                    <div className="bg-blue-100 p-4">Content with padding</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="examples">
          <div className="space-y-4 mt-6">
            <p>
              Here are some examples of how to use spacing tokens in your components:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Buttons</h3>
                <div className="flex gap-2">
                  <button className="bg-primary-main text-primary-contrast px-4 py-2 rounded-md">
                    Button 1
                  </button>
                  <button className="bg-secondary-main text-secondary-contrast px-8 py-4 rounded-md">
                    Button 2
                  </button>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Cards</h3>
                <div className="border rounded-md p-4">
                  <h4 className="text-md font-medium">Card Title</h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    Card description goes here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SpacingPage;
