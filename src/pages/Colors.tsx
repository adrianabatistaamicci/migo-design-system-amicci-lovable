import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ComponentCard from '@/components/ComponentCard';
import CodeBlock from '@/components/CodeBlock';
import { Separator } from '@/components/ui/separator';
import { Eye, EyeOff } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Colors = () => {
  const [showWCAG, setShowWCAG] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Sistema de Cores</h1>
        <p className="text-mui-text-secondary text-lg">
          Paleta de cores e tokens de design utilizados na aplicação.
        </p>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Visão geral</TabsTrigger>
          <TabsTrigger value="palettes">Palettes</TabsTrigger>
          <TabsTrigger value="baseColors">Base colors</TabsTrigger>
          <TabsTrigger value="usage">Uso</TabsTrigger>
          <TabsTrigger value="accessibility">Acessibilidade</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <ComponentCard title="Sistema de Cores" description="Nosso sistema de cores é construído com variáveis CSS para suportar temas e personalização.">
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">Tipos de Variações</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">Variações de Estado</h4>
                  <ul className="space-y-2">
                    <li><strong>main:</strong> Cor principal para elementos de destaque</li>
                    <li><strong>dark:</strong> Variação mais escura para contraste</li>
                    <li><strong>light:</strong> Variação mais clara para fundos e elementos sutis</li>
                    <li><strong>hover:</strong> Estado de hover para elementos interativos</li>
                    <li><strong>selected:</strong> Estado selecionado para elementos interativos</li>
                    <li><strong>focusVisible:</strong> Estado de foco visível para acessibilidade</li>
                    <li><strong>outlinedBorder:</strong> Cor para bordas e contornos</li>
                    <li><strong>contrast:</strong> Cor de texto sobre fundos primários</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">Variações de Texto</h4>
                  <ul className="space-y-2">
                    <li><strong>primary:</strong> Texto principal para conteúdo importante</li>
                    <li><strong>secondary:</strong> Texto secundário para descrições e detalhes</li>
                    <li><strong>disabled:</strong> Texto para elementos desabilitados</li>
                    <li><strong>hover:</strong> Estado de hover para texto interativo</li>
                    <li><strong>selected:</strong> Estado selecionado para texto interativo</li>
                    <li><strong>focus:</strong> Estado de foco para texto interativo</li>
                    <li><strong>focusVisible:</strong> Estado de foco visível para acessibilidade</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <p className="text-mui-text-secondary mb-4">
              O sistema é organizado em dois níveis principais:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">1. Cores Básicas</h3>
                <p className="text-mui-text-secondary">
                  Um conjunto completo de cores de 50 a 900 para:
                </p>
                <div className="flex flex-wrap gap-1 mt-2">
                  <Badge className="bg-amicci-500 text-white">base-color-amicci</Badge>
                  <Badge className="bg-amicciDark-500 text-white">base-color-amicciDark</Badge>
                  <Badge className="bg-blue-500 text-white">base-color-blue</Badge>
                  <Badge className="bg-magenta-500 text-white">base-color-magenta</Badge>
                  <Badge className="bg-green-500 text-white">base-color-green</Badge>
                  <Badge className="bg-gray-500 text-white">base-color-gray</Badge>
                  <Badge className="bg-orange-500 text-white">base-color-orange</Badge>
                  <Badge className="bg-red-500 text-white">base-color-red</Badge>
                  <Badge className="bg-yellow-500 text-black">base-color-yellow</Badge>
                  <Badge className="bg-white text-black border border-gray-200">base-color-common-white</Badge>
                </div>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">2. Paletas Compostas</h3>
                <p className="text-mui-text-secondary">
                  Paletas semânticas que utilizam as cores básicas como base:
                </p>
                <div className="flex flex-wrap gap-1 mt-2">
                  <Badge className="bg-primary-main text-primary-contrast">base-color-amicci</Badge>
                  <Badge className="bg-secondary-main text-secondary-contrast">base-color-amicciDark</Badge>
                  <Badge className="bg-tertiary-main text-tertiary-contrast">base-color-magenta</Badge>
                  <Badge className="bg-action-main text-action-contrast">base-color-gray</Badge>
                  <Badge className="bg-error-main text-error-contrast">base-color-red</Badge>
                  <Badge className="bg-warning-main text-black">base-color-yellow</Badge>
                  <Badge className="bg-info-main text-info-contrast">base-color-blue</Badge>
                  <Badge className="bg-success-main text-success-contrast">base-color-green</Badge>
                  <Badge className="bg-gray-900 text-white">base-color-gray</Badge>
                </div>
              </div>
            </div>
            
            <p className="text-mui-text-secondary mb-4">
              Cada paleta composta inclui variações para diferentes estados e usos:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
              <div className="p-2 border rounded bg-primary-main text-primary-contrast">main</div>
              <div className="p-2 border rounded bg-primary-dark text-primary-contrast">dark</div>
              <div className="p-2 border rounded bg-primary-light text-black">light</div>
              <div className="p-2 border rounded bg-primary-hover text-primary-contrast">hover</div>
              <div className="p-2 border rounded bg-primary-selected text-primary-contrast">selected</div>
              <div className="p-2 border rounded bg-primary-focusVisible text-black">focusVisible</div>
              <div className="p-2 border rounded bg-primary-outlinedBorder text-black">outlinedBorder</div>
              <div className="p-2 border rounded bg-primary-contrast text-primary-main">contrast</div>
            </div>
          </ComponentCard>
          
          <Separator />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ComponentCard title="Como Usar">
              <p className="text-mui-text-secondary">
                Acesse as cores usando as classes utilitárias do Tailwind baseadas na nomenclatura semântica:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-mui-text-secondary">
                <li><code className="bg-mui-sidebar px-1 rounded">bg-primary-main</code> - Cor primária principal</li>
                <li><code className="bg-mui-sidebar px-1 rounded">text-error-main</code> - Texto na cor de erro</li>
                <li><code className="bg-mui-sidebar px-1 rounded">border-warning-outlinedBorder</code> - Borda na cor de contorno de aviso</li>
                <li><code className="bg-mui-sidebar px-1 rounded">bg-amicci-500</code> - Cor básica amicci (500)</li>
                <li><code className="bg-mui-sidebar px-1 rounded">text-gray-900</code> - Texto principal</li>
              </ul>
            </ComponentCard>
            
            <ComponentCard title="Acessibilidade">
              <p className="text-mui-text-secondary">
                Nosso sistema de cores foi projetado com acessibilidade em mente:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-mui-text-secondary">
                <li>Os pares de cores atendem aos requisitos de contraste WCAG 2.1 AA</li>
                <li>Cada paleta inclui versões de contraste dedicadas</li>
                <li>As cores seguem uma hierarquia visual clara</li>
                <li>Estados de interação (hover, focus, selected) são visualmente distintos</li>
              </ul>
              <div className="mt-4">
                <Button 
                  variant="outline" 
                  onClick={() => setShowWCAG(!showWCAG)}
                  className="text-sm flex gap-2 items-center"
                >
                  {showWCAG ? <EyeOff size={16} /> : <Eye size={16} />}
                  {showWCAG ? 'Ocultar dados WCAG' : 'Mostrar dados WCAG'}
                </Button>
              </div>
            </ComponentCard>
          </div>
        </TabsContent>
        
        <TabsContent value="palettes">
          <ComponentCard title="Paletas Compostas">
            <p className="text-mui-text-secondary">
              As paletas compostas são construídas utilizando as cores básicas como base.
              Cada paleta inclui variações para diferentes estados e usos.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              <div className="space-y-2">
                <h4 className="font-medium">Primary (Amicci)</h4>
                <div className="p-2 border rounded bg-primary-main text-primary-contrast">main</div>
                <div className="p-2 border rounded bg-primary-dark text-primary-contrast">dark</div>
                <div className="p-2 border rounded bg-primary-light text-black">light</div>
                <div className="p-2 border rounded bg-primary-hover text-primary-contrast">hover</div>
                <div className="p-2 border rounded bg-primary-selected text-primary-contrast">selected</div>
                <div className="p-2 border rounded bg-primary-focusVisible text-black">focusVisible</div>
                <div className="p-2 border rounded bg-primary-outlinedBorder text-black">outlinedBorder</div>
                <div className="p-2 border rounded bg-primary-contrast text-primary-main">contrast</div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium">Secondary (AmicciDark)</h4>
                <div className="p-2 border rounded bg-secondary-main text-secondary-contrast">main</div>
                <div className="p-2 border rounded bg-secondary-dark text-secondary-contrast">dark</div>
                <div className="p-2 border rounded bg-secondary-light text-black">light</div>
                <div className="p-2 border rounded bg-secondary-main text-secondary-contrast">hover</div>
                <div className="p-2 border rounded bg-secondary-main text-secondary-contrast">selected</div>
                <div className="p-2 border rounded bg-secondary-main text-secondary-contrast">focusVisible</div>
                <div className="p-2 border rounded bg-secondary-main text-secondary-contrast">outlinedBorder</div>
                <div className="p-2 border rounded bg-secondary-contrast text-secondary-main">contrast</div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium">Tertiary (Magenta)</h4>
                <div className="p-2 border rounded bg-tertiary-main text-tertiary-contrast">main</div>
                <div className="p-2 border rounded bg-tertiary-dark text-tertiary-contrast">dark</div>
                <div className="p-2 border rounded bg-tertiary-light text-black">light</div>
                <div className="p-2 border rounded bg-tertiary-main text-tertiary-contrast">hover</div>
                <div className="p-2 border rounded bg-tertiary-main text-tertiary-contrast">selected</div>
                <div className="p-2 border rounded bg-tertiary-main text-tertiary-contrast">focusVisible</div>
                <div className="p-2 border rounded bg-tertiary-main text-tertiary-contrast">outlinedBorder</div>
                <div className="p-2 border rounded bg-tertiary-contrast text-tertiary-main">contrast</div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium">Action (Gray)</h4>
                <div className="p-2 border rounded bg-action-main text-action-contrast">main</div>
                <div className="p-2 border rounded bg-action-dark text-action-contrast">dark</div>
                <div className="p-2 border rounded bg-action-light text-black">light</div>
                <div className="p-2 border rounded bg-action-main text-action-contrast">hover</div>
                <div className="p-2 border rounded bg-action-main text-action-contrast">selected</div>
                <div className="p-2 border rounded bg-action-main text-action-contrast">focusVisible</div>
                <div className="p-2 border rounded bg-action-main text-action-contrast">outlinedBorder</div>
                <div className="p-2 border rounded bg-action-contrast text-action-main">contrast</div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium">Error (Red)</h4>
                <div className="p-2 border rounded bg-error-main text-error-contrast">main</div>
                <div className="p-2 border rounded bg-error-dark text-error-contrast">dark</div>
                <div className="p-2 border rounded bg-error-light text-black">light</div>
                <div className="p-2 border rounded bg-error-main text-error-contrast">hover</div>
                <div className="p-2 border rounded bg-error-main text-error-contrast">selected</div>
                <div className="p-2 border rounded bg-error-main text-error-contrast">focusVisible</div>
                <div className="p-2 border rounded bg-error-main text-error-contrast">outlinedBorder</div>
                <div className="p-2 border rounded bg-error-contrast text-error-main">contrast</div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium">Warning (Yellow)</h4>
                <div className="p-2 border rounded bg-warning-main text-black">main</div>
                <div className="p-2 border rounded bg-warning-dark text-black">dark</div>
                <div className="p-2 border rounded bg-warning-light text-black">light</div>
                <div className="p-2 border rounded bg-warning-main text-black">hover</div>
                <div className="p-2 border rounded bg-warning-main text-black">selected</div>
                <div className="p-2 border rounded bg-warning-main text-black">focusVisible</div>
                <div className="p-2 border rounded bg-warning-main text-black">outlinedBorder</div>
                <div className="p-2 border rounded bg-warning-contrast text-warning-main">contrast</div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium">Info (Blue)</h4>
                <div className="p-2 border rounded bg-info-main text-info-contrast">main</div>
                <div className="p-2 border rounded bg-info-dark text-info-contrast">dark</div>
                <div className="p-2 border rounded bg-info-light text-black">light</div>
                <div className="p-2 border rounded bg-info-main text-info-contrast">hover</div>
                <div className="p-2 border rounded bg-info-main text-info-contrast">selected</div>
                <div className="p-2 border rounded bg-info-main text-info-contrast">focusVisible</div>
                <div className="p-2 border rounded bg-info-main text-info-contrast">outlinedBorder</div>
                <div className="p-2 border rounded bg-info-contrast text-info-main">contrast</div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium">Success (Green)</h4>
                <div className="p-2 border rounded bg-success-main text-success-contrast">main</div>
                <div className="p-2 border rounded bg-success-dark text-success-contrast">dark</div>
                <div className="p-2 border rounded bg-success-light text-black">light</div>
                <div className="p-2 border rounded bg-success-main text-success-contrast">hover</div>
                <div className="p-2 border rounded bg-success-main text-success-contrast">selected</div>
                <div className="p-2 border rounded bg-success-main text-success-contrast">focusVisible</div>
                <div className="p-2 border rounded bg-success-main text-success-contrast">outlinedBorder</div>
                <div className="p-2 border rounded bg-success-contrast text-success-main">contrast</div>
              </div>
            </div>
          </ComponentCard>
        </TabsContent>

        <TabsContent value="baseColors">
          <ComponentCard title="Cores Base">
            <p className="text-mui-text-secondary">
              As cores base são um conjunto completo de cores de 50 a 900.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              <div className="space-y-2">
                <h4 className="font-medium">Amicci</h4>
                <div className="p-2 border rounded bg-amicci-50 text-gray-900">50</div>
                <div className="p-2 border rounded bg-amicci-100 text-gray-900">100</div>
                <div className="p-2 border rounded bg-amicci-200 text-gray-900">200</div>
                <div className="p-2 border rounded bg-amicci-300 text-gray-900">300</div>
                <div className="p-2 border rounded bg-amicci-400 text-gray-900">400</div>
                <div className="p-2 border rounded bg-amicci-500 text-white">500</div>
                <div className="p-2 border rounded bg-amicci-600 text-white">600</div>
                <div className="p-2 border rounded bg-amicci-700 text-white">700</div>
                <div className="p-2 border rounded bg-amicci-800 text-white">800</div>
                <div className="p-2 border rounded bg-amicci-900 text-white">900</div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">AmicciDark</h4>
                <div className="p-2 border rounded bg-amicciDark-50 text-gray-900">50</div>
                <div className="p-2 border rounded bg-amicciDark-100 text-gray-900">100</div>
                <div className="p-2 border rounded bg-amicciDark-200 text-gray-900">200</div>
                <div className="p-2 border rounded bg-amicciDark-300 text-gray-900">300</div>
                <div className="p-2 border rounded bg-amicciDark-400 text-white">400</div>
                <div className="p-2 border rounded bg-amicciDark-500 text-white">500</div>
                <div className="p-2 border rounded bg-amicciDark-600 text-white">600</div>
                <div className="p-2 border rounded bg-amicciDark-700 text-white">700</div>
                <div className="p-2 border rounded bg-amicciDark-800 text-white">800</div>
                <div className="p-2 border rounded bg-amicciDark-900 text-white">900</div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Blue</h4>
                <div className="p-2 border rounded bg-blue-50 text-gray-900">50</div>
                <div className="p-2 border rounded bg-blue-100 text-gray-900">100</div>
                <div className="p-2 border rounded bg-blue-200 text-gray-900">200</div>
                <div className="p-2 border rounded bg-blue-300 text-gray-900">300</div>
                <div className="p-2 border rounded bg-blue-400 text-white">400</div>
                <div className="p-2 border rounded bg-blue-500 text-white">500</div>
                <div className="p-2 border rounded bg-blue-600 text-white">600</div>
                <div className="p-2 border rounded bg-blue-700 text-white">700</div>
                <div className="p-2 border rounded bg-blue-800 text-white">800</div>
                <div className="p-2 border rounded bg-blue-900 text-white">900</div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Magenta</h4>
                <div className="p-2 border rounded bg-magenta-50 text-gray-900">50</div>
                <div className="p-2 border rounded bg-magenta-100 text-gray-900">100</div>
                <div className="p-2 border rounded bg-magenta-200 text-gray-900">200</div>
                <div className="p-2 border rounded bg-magenta-300 text-gray-900">300</div>
                <div className="p-2 border rounded bg-magenta-400 text-white">400</div>
                <div className="p-2 border rounded bg-magenta-500 text-white">500</div>
                <div className="p-2 border rounded bg-magenta-600 text-white">600</div>
                <div className="p-2 border rounded bg-magenta-700 text-white">700</div>
                <div className="p-2 border rounded bg-magenta-800 text-white">800</div>
                <div className="p-2 border rounded bg-magenta-900 text-white">900</div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Green</h4>
                <div className="p-2 border rounded bg-green-50 text-gray-900">50</div>
                <div className="p-2 border rounded bg-green-100 text-gray-900">100</div>
                <div className="p-2 border rounded bg-green-200 text-gray-900">200</div>
                <div className="p-2 border rounded bg-green-300 text-gray-900">300</div>
                <div className="p-2 border rounded bg-green-400 text-gray-900">400</div>
                <div className="p-2 border rounded bg-green-500 text-white">500</div>
                <div className="p-2 border rounded bg-green-600 text-white">600</div>
                <div className="p-2 border rounded bg-green-700 text-white">700</div>
                <div className="p-2 border rounded bg-green-800 text-white">800</div>
                <div className="p-2 border rounded bg-green-900 text-white">900</div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Gray</h4>
                <div className="p-2 border rounded bg-gray-50 text-gray-900">50</div>
                <div className="p-2 border rounded bg-gray-100 text-gray-900">100</div>
                <div className="p-2 border rounded bg-gray-200 text-gray-900">200</div>
                <div className="p-2 border rounded bg-gray-300 text-gray-900">300</div>
                <div className="p-2 border rounded bg-gray-400 text-gray-900">400</div>
                <div className="p-2 border rounded bg-gray-500 text-white">500</div>
                <div className="p-2 border rounded bg-gray-600 text-white">600</div>
                <div className="p-2 border rounded bg-gray-700 text-white">700</div>
                <div className="p-2 border rounded bg-gray-800 text-white">800</div>
                <div className="p-2 border rounded bg-gray-900 text-white">900</div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Orange</h4>
                <div className="p-2 border rounded bg-orange-50 text-gray-900">50</div>
                <div className="p-2 border rounded bg-orange-100 text-gray-900">100</div>
                <div className="p-2 border rounded bg-orange-200 text-gray-900">200</div>
                <div className="p-2 border rounded bg-orange-300 text-gray-900">300</div>
                <div className="p-2 border rounded bg-orange-400 text-gray-900">400</div>
                <div className="p-2 border rounded bg-orange-500 text-white">500</div>
                <div className="p-2 border rounded bg-orange-600 text-white">600</div>
                <div className="p-2 border rounded bg-orange-700 text-white">700</div>
                <div className="p-2 border rounded bg-orange-800 text-white">800</div>
                <div className="p-2 border rounded bg-orange-900 text-white">900</div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Red</h4>
                <div className="p-2 border rounded bg-red-50 text-gray-900">50</div>
                <div className="p-2 border rounded bg-red-100 text-gray-900">100</div>
                <div className="p-2 border rounded bg-red-200 text-gray-900">200</div>
                <div className="p-2 border rounded bg-red-300 text-gray-900">300</div>
                <div className="p-2 border rounded bg-red-400 text-white">400</div>
                <div className="p-2 border rounded bg-red-500 text-white">500</div>
                <div className="p-2 border rounded bg-red-600 text-white">600</div>
                <div className="p-2 border rounded bg-red-700 text-white">700</div>
                <div className="p-2 border rounded bg-red-800 text-white">800</div>
                <div className="p-2 border rounded bg-red-900 text-white">900</div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Yellow</h4>
                <div className="p-2 border rounded bg-yellow-50 text-gray-900">50</div>
                <div className="p-2 border rounded bg-yellow-100 text-gray-900">100</div>
                <div className="p-2 border rounded bg-yellow-200 text-gray-900">200</div>
                <div className="p-2 border rounded bg-yellow-300 text-gray-900">300</div>
                <div className="p-2 border rounded bg-yellow-400 text-gray-900">400</div>
                <div className="p-2 border rounded bg-yellow-500 text-gray-900">500</div>
                <div className="p-2 border rounded bg-yellow-600 text-gray-900">600</div>
                <div className="p-2 border rounded bg-yellow-700 text-gray-900">700</div>
                <div className="p-2 border rounded bg-yellow-800 text-gray-900">800</div>
                <div className="p-2 border rounded bg-yellow-900 text-gray-900">900</div>
              </div>
            </div>
          </ComponentCard>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Colors;
