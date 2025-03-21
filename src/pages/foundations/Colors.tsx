import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Chip } from '@/components/ui/chip';
import { Separator } from "@/components/ui/separator";
import { ColorPalette } from "@/components/ui/color-palette";
import ComponentCard from '@/components/ComponentCard';

const Colors = () => {
  return (
    <div className="w-full animate-fade-in">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-mui-primary font-medium mb-2">
          <Chip variant="filled" color="primary" size="sm">Foundations</Chip>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Colors</h1>
        <p className="text-mui-text-secondary max-w-3xl">Nossa paleta de cores foi cuidadosamente selecionada para garantir harmonia e acessibilidade em toda a interface.</p>
      </div>

      <Tabs defaultValue="palette" className="mt-8">
        <TabsList>
          <TabsTrigger value="palette">Paleta</TabsTrigger>
          <TabsTrigger value="usage">Uso</TabsTrigger>
          <TabsTrigger value="accessibility">Acessibilidade</TabsTrigger>
        </TabsList>
        
        <TabsContent value="palette" className="space-y-6">
          <ComponentCard title="Paleta de Cores" description="Nossa paleta de cores é composta por cores primárias, secundárias e de apoio, cada uma com variações de tonalidade para diferentes usos.">
            <p className="text-mui-text-secondary mb-6">
              As cores primárias são usadas para elementos principais da interface, como botões e links. As cores secundárias são usadas para elementos de destaque e ações secundárias. As cores de apoio são usadas para fundos, bordas e outros elementos de suporte.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ColorPalette
                name="Primary"
                colors={{
                  'primary-lightest': '#EBF4FF',
                  'primary-lighter': '#B2D4FF',
                  'primary-light': '#79B5FF',
                  'primary-main': '#217AFF',
                  'primary-dark': '#0052CC',
                  'primary-darker': '#003A8F',
                  'primary-darkest': '#002352',
                  'primary-contrast': '#FFFFFF',
                }}
              />
              
              <ColorPalette
                name="Secondary"
                colors={{
                  'secondary-lightest': '#FFF0E5',
                  'secondary-lighter': '#FFD6B2',
                  'secondary-light': '#FFAC79',
                  'secondary-main': '#FF7733',
                  'secondary-dark': '#CC5200',
                  'secondary-darker': '#8F3A00',
                  'secondary-darkest': '#522300',
                  'secondary-contrast': '#FFFFFF',
                }}
              />
              
              <ColorPalette
                name="Success"
                colors={{
                  'success-lightest': '#E9FCD4',
                  'success-lighter': '#B7E79A',
                  'success-light': '#86D261',
                  'success-main': '#54BD27',
                  'success-dark': '#3A8F1A',
                  'success-darker': '#286B12',
                  'success-darkest': '#17480A',
                  'success-contrast': '#FFFFFF',
                }}
              />
              
              <ColorPalette
                name="Error"
                colors={{
                  'error-lightest': '#FFEDF1',
                  'error-lighter': '#FFC2D1',
                  'error-light': '#FF97B0',
                  'error-main': '#FF416B',
                  'error-dark': '#CC213F',
                  'error-darker': '#8F162B',
                  'error-darkest': '#520B17',
                  'error-contrast': '#FFFFFF',
                }}
              />
              
              <ColorPalette
                name="Warning"
                colors={{
                  'warning-lightest': '#FFF8DB',
                  'warning-lighter': '#FFEBB3',
                  'warning-light': '#FFDE8B',
                  'warning-main': '#FFC947',
                  'warning-dark': '#CC9F33',
                  'warning-darker': '#8F6F24',
                  'warning-darkest': '#524016',
                  'warning-contrast': '#000000',
                }}
              />
              
              <ColorPalette
                name="Info"
                colors={{
                  'info-lightest': '#E5F6FF',
                  'info-lighter': '#B2E5FF',
                  'info-light': '#79D4FF',
                  'info-main': '#33A6FF',
                  'info-dark': '#007ACC',
                  'info-darker': '#00528F',
                  'info-darkest': '#002952',
                  'info-contrast': '#FFFFFF',
                }}
              />
            </div>
          </ComponentCard>
        </TabsContent>
        
        <TabsContent value="usage">
          <div className="space-y-4 mt-6">
            <p>
              Use color tokens in your components to maintain consistency.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Text Colors</h3>
                <p className="text-sm text-muted-foreground">Use text color tokens for text elements.</p>
                <div className="mt-2 p-3 border rounded-md">
                  <p className="text-primary-main">This is primary text.</p>
                  <p className="text-secondary-main">This is secondary text.</p>
                  <p className="text-success-main">This is success text.</p>
                  <p className="text-error-main">This is error text.</p>
                  <p className="text-warning-main">This is warning text.</p>
                  <p className="text-info-main">This is info text.</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Background Colors</h3>
                <p className="text-sm text-muted-foreground">Use background color tokens for backgrounds.</p>
                <div className="mt-2 p-3 border rounded-md">
                  <div className="bg-primary-light p-2 rounded-md text-primary-dark">Primary Light</div>
                  <div className="bg-secondary-light p-2 rounded-md text-secondary-dark">Secondary Light</div>
                  <div className="bg-success-light p-2 rounded-md text-success-dark">Success Light</div>
                  <div className="bg-error-light p-2 rounded-md text-error-dark">Error Light</div>
                  <div className="bg-warning-light p-2 rounded-md text-warning-dark">Warning Light</div>
                  <div className="bg-info-light p-2 rounded-md text-info-dark">Info Light</div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="accessibility">
          <div className="space-y-4 mt-6">
            <p>
              Ensure sufficient contrast between text and background colors.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Contrast Examples</h3>
                <p className="text-sm text-muted-foreground">Examples of good and bad contrast.</p>
                <div className="mt-2 p-3 border rounded-md">
                  <div className="bg-primary-main text-primary-contrast p-2 rounded-md mb-2">Good Contrast</div>
                  <div className="bg-gray-400 text-gray-500 p-2 rounded-md">Bad Contrast</div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Tools</h3>
                <p className="text-sm text-muted-foreground">Use online tools to check color contrast.</p>
                <ul className="list-disc list-inside">
                  <li>
                    <a href="https://webaim.org/resources/contrastchecker/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      WebAIM Contrast Checker
                    </a>
                  </li>
                  <li>
                    <a href="https://contrastchecker.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Contrast Checker
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Colors;
