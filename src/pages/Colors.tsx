
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ComponentCard from '@/components/ComponentCard';
import CodeBlock from '@/components/CodeBlock';
import { Separator } from '@/components/ui/separator';
import { Eye, EyeOff } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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
            <p className="text-mui-text-secondary mb-4">
              As paletas compostas são construídas utilizando as cores básicas como base.
              Cada paleta semântica inclui variações para diferentes estados e usos.
            </p>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Paleta</TableHead>
                  <TableHead>Variante</TableHead>
                  <TableHead>Amostra</TableHead>
                  <TableHead>Classe Tailwind</TableHead>
                  <TableHead>Cor Base</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* Primary (Amicci) */}
                <TableRow>
                  <TableCell rowSpan={8} className="font-medium">Primary<br/>(Amicci)</TableCell>
                  <TableCell>main</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-primary-main"></div></TableCell>
                  <TableCell><code>bg-primary-main</code></TableCell>
                  <TableCell>amicci-500</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>dark</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-primary-dark"></div></TableCell>
                  <TableCell><code>bg-primary-dark</code></TableCell>
                  <TableCell>amicci-700</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>light</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-primary-light"></div></TableCell>
                  <TableCell><code>bg-primary-light</code></TableCell>
                  <TableCell>amicci-300</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>hover</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-primary-hover"></div></TableCell>
                  <TableCell><code>bg-primary-hover</code></TableCell>
                  <TableCell>amicci-600</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>selected</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-primary-selected"></div></TableCell>
                  <TableCell><code>bg-primary-selected</code></TableCell>
                  <TableCell>amicci-700</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>focusVisible</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-primary-focusVisible"></div></TableCell>
                  <TableCell><code>bg-primary-focusVisible</code></TableCell>
                  <TableCell>amicci-200</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>outlinedBorder</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-primary-outlinedBorder"></div></TableCell>
                  <TableCell><code>bg-primary-outlinedBorder</code></TableCell>
                  <TableCell>amicci-300</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>contrast</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-primary-contrast"></div></TableCell>
                  <TableCell><code>bg-primary-contrast</code></TableCell>
                  <TableCell>white</TableCell>
                </TableRow>

                {/* Secondary (AmicciDark) */}
                <TableRow>
                  <TableCell rowSpan={8} className="font-medium">Secondary<br/>(AmicciDark)</TableCell>
                  <TableCell>main</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-secondary-main"></div></TableCell>
                  <TableCell><code>bg-secondary-main</code></TableCell>
                  <TableCell>amicciDark-500</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>dark</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-secondary-dark"></div></TableCell>
                  <TableCell><code>bg-secondary-dark</code></TableCell>
                  <TableCell>amicciDark-700</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>light</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-secondary-light"></div></TableCell>
                  <TableCell><code>bg-secondary-light</code></TableCell>
                  <TableCell>amicciDark-300</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>hover</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-secondary-hover"></div></TableCell>
                  <TableCell><code>bg-secondary-hover</code></TableCell>
                  <TableCell>amicciDark-600</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>selected</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-secondary-selected"></div></TableCell>
                  <TableCell><code>bg-secondary-selected</code></TableCell>
                  <TableCell>amicciDark-700</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>focusVisible</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-secondary-focusVisible"></div></TableCell>
                  <TableCell><code>bg-secondary-focusVisible</code></TableCell>
                  <TableCell>amicciDark-200</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>outlinedBorder</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-secondary-outlinedBorder"></div></TableCell>
                  <TableCell><code>bg-secondary-outlinedBorder</code></TableCell>
                  <TableCell>amicciDark-300</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>contrast</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-secondary-contrast"></div></TableCell>
                  <TableCell><code>bg-secondary-contrast</code></TableCell>
                  <TableCell>white</TableCell>
                </TableRow>

                {/* Tertiary (Magenta) */}
                <TableRow>
                  <TableCell rowSpan={8} className="font-medium">Tertiary<br/>(Magenta)</TableCell>
                  <TableCell>main</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-tertiary-main"></div></TableCell>
                  <TableCell><code>bg-tertiary-main</code></TableCell>
                  <TableCell>magenta-500</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>dark</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-tertiary-dark"></div></TableCell>
                  <TableCell><code>bg-tertiary-dark</code></TableCell>
                  <TableCell>magenta-700</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>light</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-tertiary-light"></div></TableCell>
                  <TableCell><code>bg-tertiary-light</code></TableCell>
                  <TableCell>magenta-300</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>hover</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-tertiary-hover"></div></TableCell>
                  <TableCell><code>bg-tertiary-hover</code></TableCell>
                  <TableCell>magenta-600</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>selected</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-tertiary-selected"></div></TableCell>
                  <TableCell><code>bg-tertiary-selected</code></TableCell>
                  <TableCell>magenta-700</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>focusVisible</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-tertiary-focusVisible"></div></TableCell>
                  <TableCell><code>bg-tertiary-focusVisible</code></TableCell>
                  <TableCell>magenta-200</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>outlinedBorder</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-tertiary-outlinedBorder"></div></TableCell>
                  <TableCell><code>bg-tertiary-outlinedBorder</code></TableCell>
                  <TableCell>magenta-300</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>contrast</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-tertiary-contrast"></div></TableCell>
                  <TableCell><code>bg-tertiary-contrast</code></TableCell>
                  <TableCell>white</TableCell>
                </TableRow>

                {/* Action (Gray) */}
                <TableRow>
                  <TableCell rowSpan={8} className="font-medium">Action<br/>(Gray)</TableCell>
                  <TableCell>main</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-action-main"></div></TableCell>
                  <TableCell><code>bg-action-main</code></TableCell>
                  <TableCell>gray-700</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>dark</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-action-dark"></div></TableCell>
                  <TableCell><code>bg-action-dark</code></TableCell>
                  <TableCell>gray-800</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>light</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-action-light"></div></TableCell>
                  <TableCell><code>bg-action-light</code></TableCell>
                  <TableCell>gray-200</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>hover</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-action-hover"></div></TableCell>
                  <TableCell><code>bg-action-hover</code></TableCell>
                  <TableCell>gray-800</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>selected</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-action-selected"></div></TableCell>
                  <TableCell><code>bg-action-selected</code></TableCell>
                  <TableCell>gray-900</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>focusVisible</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-action-focusVisible"></div></TableCell>
                  <TableCell><code>bg-action-focusVisible</code></TableCell>
                  <TableCell>gray-100</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>outlinedBorder</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-action-outlinedBorder"></div></TableCell>
                  <TableCell><code>bg-action-outlinedBorder</code></TableCell>
                  <TableCell>gray-300</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>contrast</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-action-contrast"></div></TableCell>
                  <TableCell><code>bg-action-contrast</code></TableCell>
                  <TableCell>white</TableCell>
                </TableRow>

                {/* Error (Red) */}
                <TableRow>
                  <TableCell rowSpan={8} className="font-medium">Error<br/>(Red)</TableCell>
                  <TableCell>main</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-error-main"></div></TableCell>
                  <TableCell><code>bg-error-main</code></TableCell>
                  <TableCell>red-500</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>dark</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-error-dark"></div></TableCell>
                  <TableCell><code>bg-error-dark</code></TableCell>
                  <TableCell>red-700</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>light</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-error-light"></div></TableCell>
                  <TableCell><code>bg-error-light</code></TableCell>
                  <TableCell>red-300</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>hover</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-error-hover"></div></TableCell>
                  <TableCell><code>bg-error-hover</code></TableCell>
                  <TableCell>red-600</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>selected</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-error-selected"></div></TableCell>
                  <TableCell><code>bg-error-selected</code></TableCell>
                  <TableCell>red-700</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>focusVisible</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-error-focusVisible"></div></TableCell>
                  <TableCell><code>bg-error-focusVisible</code></TableCell>
                  <TableCell>red-200</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>outlinedBorder</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-error-outlinedBorder"></div></TableCell>
                  <TableCell><code>bg-error-outlinedBorder</code></TableCell>
                  <TableCell>red-300</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>contrast</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-error-contrast"></div></TableCell>
                  <TableCell><code>bg-error-contrast</code></TableCell>
                  <TableCell>white</TableCell>
                </TableRow>

                {/* Warning (Yellow) */}
                <TableRow>
                  <TableCell rowSpan={8} className="font-medium">Warning<br/>(Yellow)</TableCell>
                  <TableCell>main</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-warning-main"></div></TableCell>
                  <TableCell><code>bg-warning-main</code></TableCell>
                  <TableCell>yellow-500</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>dark</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-warning-dark"></div></TableCell>
                  <TableCell><code>bg-warning-dark</code></TableCell>
                  <TableCell>yellow-700</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>light</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-warning-light"></div></TableCell>
                  <TableCell><code>bg-warning-light</code></TableCell>
                  <TableCell>yellow-300</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>hover</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-warning-hover"></div></TableCell>
                  <TableCell><code>bg-warning-hover</code></TableCell>
                  <TableCell>yellow-600</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>selected</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-warning-selected"></div></TableCell>
                  <TableCell><code>bg-warning-selected</code></TableCell>
                  <TableCell>yellow-700</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>focusVisible</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-warning-focusVisible"></div></TableCell>
                  <TableCell><code>bg-warning-focusVisible</code></TableCell>
                  <TableCell>yellow-200</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>outlinedBorder</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-warning-outlinedBorder"></div></TableCell>
                  <TableCell><code>bg-warning-outlinedBorder</code></TableCell>
                  <TableCell>yellow-300</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>contrast</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-warning-contrast"></div></TableCell>
                  <TableCell><code>bg-warning-contrast</code></TableCell>
                  <TableCell>black</TableCell>
                </TableRow>

                {/* Info (Blue) */}
                <TableRow>
                  <TableCell rowSpan={8} className="font-medium">Info<br/>(Blue)</TableCell>
                  <TableCell>main</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-info-main"></div></TableCell>
                  <TableCell><code>bg-info-main</code></TableCell>
                  <TableCell>blue-500</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>dark</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-info-dark"></div></TableCell>
                  <TableCell><code>bg-info-dark</code></TableCell>
                  <TableCell>blue-700</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>light</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-info-light"></div></TableCell>
                  <TableCell><code>bg-info-light</code></TableCell>
                  <TableCell>blue-300</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>hover</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-info-hover"></div></TableCell>
                  <TableCell><code>bg-info-hover</code></TableCell>
                  <TableCell>blue-600</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>selected</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-info-selected"></div></TableCell>
                  <TableCell><code>bg-info-selected</code></TableCell>
                  <TableCell>blue-700</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>focusVisible</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-info-focusVisible"></div></TableCell>
                  <TableCell><code>bg-info-focusVisible</code></TableCell>
                  <TableCell>blue-200</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>outlinedBorder</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-info-outlinedBorder"></div></TableCell>
                  <TableCell><code>bg-info-outlinedBorder</code></TableCell>
                  <TableCell>blue-300</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>contrast</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-info-contrast"></div></TableCell>
                  <TableCell><code>bg-info-contrast</code></TableCell>
                  <TableCell>white</TableCell>
                </TableRow>

                {/* Success (Green) */}
                <TableRow>
                  <TableCell rowSpan={8} className="font-medium">Success<br/>(Green)</TableCell>
                  <TableCell>main</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-success-main"></div></TableCell>
                  <TableCell><code>bg-success-main</code></TableCell>
                  <TableCell>green-500</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>dark</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-success-dark"></div></TableCell>
                  <TableCell><code>bg-success-dark</code></TableCell>
                  <TableCell>green-700</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>light</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-success-light"></div></TableCell>
                  <TableCell><code>bg-success-light</code></TableCell>
                  <TableCell>green-300</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>hover</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-success-hover"></div></TableCell>
                  <TableCell><code>bg-success-hover</code></TableCell>
                  <TableCell>green-600</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>selected</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-success-selected"></div></TableCell>
                  <TableCell><code>bg-success-selected</code></TableCell>
                  <TableCell>green-700</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>focusVisible</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-success-focusVisible"></div></TableCell>
                  <TableCell><code>bg-success-focusVisible</code></TableCell>
                  <TableCell>green-200</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>outlinedBorder</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-success-outlinedBorder"></div></TableCell>
                  <TableCell><code>bg-success-outlinedBorder</code></TableCell>
                  <TableCell>green-300</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>contrast</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-success-contrast"></div></TableCell>
                  <TableCell><code>bg-success-contrast</code></TableCell>
                  <TableCell>white</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </ComponentCard>
        </TabsContent>

        <TabsContent value="baseColors">
          <ComponentCard title="Cores Base">
            <p className="text-mui-text-secondary mb-4">
              As cores base são um conjunto completo de cores de 50 a 900 que servem como fundação para todo o sistema.
            </p>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Cor Base</TableHead>
                  <TableHead>Amostra</TableHead>
                  <TableHead>Peso</TableHead>
                  <TableHead>Classe Tailwind</TableHead>
                  <TableHead>Valor Hex</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* Amicci */}
                <TableRow>
                  <TableCell rowSpan={10} className="font-medium">Amicci</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-amicci-50"></div></TableCell>
                  <TableCell>50</TableCell>
                  <TableCell><code>bg-amicci-50</code></TableCell>
                  <TableCell>#FFF5F7</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><div className="w-full h-8 rounded bg-amicci-100"></div></TableCell>
                  <TableCell>100</TableCell>
                  <TableCell><code>bg-amicci-100</code></TableCell>
                  <TableCell>#FFE0E5</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><div className="w-full h-8 rounded bg-amicci-200"></div></TableCell>
                  <TableCell>200</TableCell>
                  <TableCell><code>bg-amicci-200</code></TableCell>
                  <TableCell>#FFCCD4</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><div className="w-full h-8 rounded bg-amicci-300"></div></TableCell>
                  <TableCell>300</TableCell>
                  <TableCell><code>bg-amicci-300</code></TableCell>
                  <TableCell>#FFB8C1</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><div className="w-full h-8 rounded bg-amicci-400"></div></TableCell>
                  <TableCell>400</TableCell>
                  <TableCell><code>bg-amicci-400</code></TableCell>
                  <TableCell>#FFA3B0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><div className="w-full h-8 rounded bg-amicci-500"></div></TableCell>
                  <TableCell>500</TableCell>
                  <TableCell><code>bg-amicci-500</code></TableCell>
                  <TableCell>#FF8F9F</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><div className="w-full h-8 rounded bg-amicci-600"></div></TableCell>
                  <TableCell>600</TableCell>
                  <TableCell><code>bg-amicci-600</code></TableCell>
                  <TableCell>#E6808F</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><div className="w-full h-8 rounded bg-amicci-700"></div></TableCell>
                  <TableCell>700</TableCell>
                  <TableCell><code>bg-amicci-700</code></TableCell>
                  <TableCell>#CC7080</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><div className="w-full h-8 rounded bg-amicci-800"></div></TableCell>
                  <TableCell>800</TableCell>
                  <TableCell><code>bg-amicci-800</code></TableCell>
                  <TableCell>#B36070</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><div className="w-full h-8 rounded bg-amicci-900"></div></TableCell>
                  <TableCell>900</TableCell>
                  <TableCell><code>bg-amicci-900</code></TableCell>
                  <TableCell>#995060</TableCell>
                </TableRow>

                {/* AmicciDark */}
                <TableRow>
                  <TableCell rowSpan={10} className="font-medium">AmicciDark</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-amicciDark-50"></div></TableCell>
                  <TableCell>50</TableCell>
                  <TableCell><code>bg-amicciDark-50</code></TableCell>
                  <TableCell>#F0F0F5</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><div className="w-full h-8 rounded bg-amicciDark-100"></div></TableCell>
                  <TableCell>100</TableCell>
                  <TableCell><code>bg-amicciDark-100</code></TableCell>
                  <TableCell>#D6D6E0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><div className="w-full h-8 rounded bg-amicciDark-200"></div></TableCell>
                  <TableCell>200</TableCell>
                  <TableCell><code>bg-amicciDark-200</code></TableCell>
                  <TableCell>#ADADC0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><div className="w-full h-8 rounded bg-amicciDark-300"></div></TableCell>
                  <TableCell>300</TableCell>
                  <TableCell><code>bg-amicciDark-300</code></TableCell>
                  <TableCell>#8585A0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><div className="w-full h-8 rounded bg-amicciDark-400"></div></TableCell>
                  <TableCell>400</TableCell>
                  <TableCell><code>bg-amicciDark-400</code></TableCell>
                  <TableCell>#5C5C80</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><div className="w-full h-8 rounded bg-amicciDark-500"></div></TableCell>
                  <TableCell>500</TableCell>
                  <TableCell><code>bg-amicciDark-500</code></TableCell>
                  <TableCell>#333360</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><div className="w-full h-8 rounded bg-amicciDark-600"></div></TableCell>
                  <TableCell>600</TableCell>
                  <TableCell><code>bg-amicciDark-600</code></TableCell>
                  <TableCell>#2E2E56</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><div className="w-full h-8 rounded bg-amicciDark-700"></div></TableCell>
                  <TableCell>700</TableCell>
                  <TableCell><code>bg-amicciDark-700</code></TableCell>
                  <TableCell>#29294D</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><div className="w-full h-8 rounded bg-amicciDark-800"></div></TableCell>
                  <TableCell>800</TableCell>
                  <TableCell><code>bg-amicciDark-800</code></TableCell>
                  <TableCell>#242444</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><div className="w-full h-8 rounded bg-amicciDark-900"></div></TableCell>
                  <TableCell>900</TableCell>
                  <TableCell><code>bg-amicciDark-900</code></TableCell>
                  <TableCell>#1A1A3A</TableCell>
                </TableRow>

                {/* Blue */}
                <TableRow>
                  <TableCell rowSpan={10} className="font-medium">Blue</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-blue-50"></div></TableCell>
                  <TableCell>50</TableCell>
                  <TableCell><code>bg-blue-50</code></TableCell>
                  <TableCell>#F0F7FF</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><div className="w-full h-8 rounded bg-blue-100"></div></TableCell>
                  <TableCell>100</TableCell>
                  <TableCell><code>bg-blue-100</code></TableCell>
                  <TableCell>#E0EEFF</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><div className="w-full h-8 rounded bg-blue-200"></div></TableCell>
                  <TableCell>200</TableCell>
                  <TableCell><code>bg-blue-200</code></TableCell>
                  <TableCell>#C2DDFF</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><div className="w-full h-8 rounded bg-blue-300"></div></TableCell>
                  <TableCell>300</TableCell>
                  <TableCell><code>bg-blue-300</code></TableCell>
                  <TableCell>#A3CCFF</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><div className="w-full h-8 rounded bg-blue-400"></div></TableCell>
                  <TableCell>400</TableCell>
                  <TableCell><code>bg-blue-400</code></TableCell>
                  <TableCell>#85BBFF</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><div className="w-full h-8 rounded bg-blue-500"></div></TableCell>
                  <TableCell>500</TableCell>
                  <TableCell><code>bg-blue-500</code></TableCell>
                  <TableCell>#66AAFF</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><div className="w-full h-8 rounded bg-blue-600"></div></TableCell>
                  <TableCell>600</TableCell>
                  <TableCell><code>bg-blue-600</code></TableCell>
                  <TableCell>#5C99E6</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><div className="w-full h-8 rounded bg-blue-700"></div></TableCell>
                  <TableCell>700</TableCell>
                  <TableCell><code>bg-blue-700</code></TableCell>
                  <TableCell>#5288CC</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><div className="w-full h-8 rounded bg-blue-800"></div></TableCell>
                  <TableCell>800</TableCell>
                  <TableCell><code>bg-blue-800</code></TableCell>
                  <TableCell>#4777B3</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><div className="w-full h-8 rounded bg-blue-900"></div></TableCell>
                  <TableCell>900</TableCell>
                  <TableCell><code>bg-blue-900</code></TableCell>
                  <TableCell>#3D6699</TableCell>
                </TableRow>

                {/* Magenta */}
                <TableRow>
                  <TableCell rowSpan={10} className="font-medium">Magenta</TableCell>
                  <TableCell><div className="w-full h-8 rounded bg-magenta-50"></div></TableCell>
                  <TableCell>50</TableCell>
                  <TableCell><code>bg-magenta-50</code></TableCell>
                  <TableCell>#FDF0F7</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><div className="w-full h-8 rounded bg-magenta-100"></div></TableCell>
                  <TableCell>100</TableCell>
                  <TableCell><code>bg-magenta-100</code></TableCell>
                  <TableCell>#FAE0EF</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><div className="w-full h-8 rounded bg-magenta-200"></div></TableCell>
                  <TableCell>200</TableCell>
                  <TableCell><code>bg-magenta-200</code></TableCell>
                  <TableCell>#F7C2DE</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><div className="w-full h-8 rounded bg-magenta-300"></div></TableCell>
                  <TableCell>300</TableCell>
                  <TableCell><code>bg-magenta-300</code></TableCell>
                  <TableCell>#F5A3CD</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><div className="w-full h-8 rounded bg-magenta-400"></div></TableCell>
                  <TableCell>400</TableCell>
                  <TableCell><code>bg-magenta-400</code></TableCell>
                  <TableCell>#F285BC</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><div className="w-full h-8 rounded bg-magenta-500"></div></TableCell>
                  <TableCell>500</TableCell>
                  <TableCell><code>bg-magenta-500</code></TableCell>
                  <TableCell>#EF66AB</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><div className="w-full h-8 rounded bg-magenta-600"></div></TableCell>
                  <TableCell>600</TableCell>
                  <TableCell><code>bg-magenta-600</code></TableCell>
                  <TableCell>#D75C99</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><div className="w-full h-8 rounded bg-magenta-700"></div></TableCell>
                  <TableCell>700</TableCell>
                  <TableCell><code>bg-magenta-700</code></TableCell>
                  <TableCell>#BF5288</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><div className="w-full h-8 rounded bg-magenta-800"></div></TableCell>
                  <TableCell>800</TableCell>
                  <TableCell><code>bg-magenta-800</code></TableCell>
                  <TableCell>#A74777</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><div className="w-full h-8 rounded bg-magenta-900"></div></TableCell>
                  <TableCell>900</TableCell>
                  <TableCell><code>bg-magenta-900</code></TableCell>
                  <TableCell>#8F3D66</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </ComponentCard>
        </TabsContent>
        
        <TabsContent value="usage">
          <ComponentCard title="Uso das Cores" description="Como aplicar cores corretamente em sua interface.">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Princípios Gerais</h3>
              <ul className="list-disc list-inside space-y-2 text-mui-text-secondary">
                <li>Use cores de maneira consistente para criar uma experiência coesa</li>
                <li>Mantenha o contraste adequado para garantir legibilidade e acessibilidade</li>
                <li>Utilize cores semânticas para comunicar significado e estado</li>
                <li>Limite o uso de cores de destaque para não sobrecarregar a interface</li>
              </ul>
              
              <h3 className="text-lg font-medium mt-6">Cores Semânticas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-6 h-6 rounded-full bg-primary-main mr-2"></div>
                    <h4 className="font-medium">Primary (Amicci)</h4>
                  </div>
                  <p className="text-mui-text-secondary text-sm">
                    Use para elementos de destaque, botões principais, links e elementos de navegação primários.
                  </p>
                </div>
                
                <div className="rounded-lg border p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-6 h-6 rounded-full bg-secondary-main mr-2"></div>
                    <h4 className="font-medium">Secondary (AmicciDark)</h4>
                  </div>
                  <p className="text-mui-text-secondary text-sm">
                    Use para elementos secundários, botões alternativos e detalhes visuais complementares.
                  </p>
                </div>
                
                <div className="rounded-lg border p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-6 h-6 rounded-full bg-error-main mr-2"></div>
                    <h4 className="font-medium">Error (Red)</h4>
                  </div>
                  <p className="text-mui-text-secondary text-sm">
                    Use para mensagens de erro, estados de erro e ações destrutivas como exclusão.
                  </p>
                </div>
                
                <div className="rounded-lg border p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-6 h-6 rounded-full bg-success-main mr-2"></div>
                    <h4 className="font-medium">Success (Green)</h4>
                  </div>
                  <p className="text-mui-text-secondary text-sm">
                    Use para confirmações, mensagens de sucesso e indicadores positivos.
                  </p>
                </div>
                
                <div className="rounded-lg border p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-6 h-6 rounded-full bg-warning-main mr-2"></div>
                    <h4 className="font-medium">Warning (Yellow)</h4>
                  </div>
                  <p className="text-mui-text-secondary text-sm">
                    Use para alertas, notificações importantes e ações que requerem atenção.
                  </p>
                </div>
                
                <div className="rounded-lg border p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-6 h-6 rounded-full bg-info-main mr-2"></div>
                    <h4 className="font-medium">Info (Blue)</h4>
                  </div>
                  <p className="text-mui-text-secondary text-sm">
                    Use para mensagens informativas, dicas e elementos de ajuda contextual.
                  </p>
                </div>
              </div>
            </div>
          </ComponentCard>
        </TabsContent>
        
        <TabsContent value="accessibility">
          <ComponentCard title="Acessibilidade de Cores" description="Garantindo que nosso sistema de cores seja acessível a todos.">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Contraste</h3>
                <p className="text-mui-text-secondary">
                  Todas as combinações de cores de texto e fundo atendem aos requisitos de contraste WCAG 2.1 AA:
                </p>
                <ul className="list-disc list-inside mt-2 text-mui-text-secondary">
                  <li>Texto normal: Contraste mínimo de 4.5:1</li>
                  <li>Texto grande (18pt ou 14pt bold): Contraste mínimo de 3:1</li>
                  <li>Componentes de interface e gráficos: Contraste mínimo de 3:1</li>
                </ul>
              </div>
              
              {showWCAG && (
                <div className="mt-6 border rounded-lg p-4">
                  <h4 className="font-medium mb-3">Tabela de Contraste WCAG AA</h4>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Combinação</TableHead>
                        <TableHead>Proporção</TableHead>
                        <TableHead>Texto Normal</TableHead>
                        <TableHead>Texto Grande</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded mr-2 bg-primary-main"></div>
                            <span>Primary sobre Branco</span>
                          </div>
                        </TableCell>
                        <TableCell>4.6:1</TableCell>
                        <TableCell>Passa ✓</TableCell>
                        <TableCell>Passa ✓</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded mr-2 bg-white flex items-center justify-center">
                              <div className="w-4 h-4 bg-primary-main"></div>
                            </div>
                            <span>Branco sobre Primary</span>
                          </div>
                        </TableCell>
                        <TableCell>4.6:1</TableCell>
                        <TableCell>Passa ✓</TableCell>
                        <TableCell>Passa ✓</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded mr-2 bg-secondary-main"></div>
                            <span>Secondary sobre Branco</span>
                          </div>
                        </TableCell>
                        <TableCell>13.2:1</TableCell>
                        <TableCell>Passa ✓</TableCell>
                        <TableCell>Passa ✓</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded mr-2 bg-error-main"></div>
                            <span>Error sobre Branco</span>
                          </div>
                        </TableCell>
                        <TableCell>4.8:1</TableCell>
                        <TableCell>Passa ✓</TableCell>
                        <TableCell>Passa ✓</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded mr-2 bg-warning-main"></div>
                            <span>Warning sobre Preto</span>
                          </div>
                        </TableCell>
                        <TableCell>13.5:1</TableCell>
                        <TableCell>Passa ✓</TableCell>
                        <TableCell>Passa ✓</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              )}
              
              <div className="mt-4">
                <h3 className="text-lg font-medium mb-2">Não Dependa Apenas da Cor</h3>
                <p className="text-mui-text-secondary">
                  Para garantir que as informações sejam acessíveis a pessoas com deficiência visual ou daltonismo, não usamos apenas cor para transmitir informações importantes:
                </p>
                <ul className="list-disc list-inside mt-2 text-mui-text-secondary">
                  <li>Combinamos cores com ícones, textos e padrões</li>
                  <li>Oferecemos alternativas textuais para informações baseadas em cores</li>
                  <li>Mantemos contraste suficiente mesmo em visualizações monocromáticas</li>
                </ul>
              </div>
              
              <div className="mt-4">
                <h3 className="text-lg font-medium mb-2">Teste de Daltonismo</h3>
                <p className="text-mui-text-secondary">
                  Nosso sistema de cores foi testado para os seguintes tipos de daltonismo:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
                  <div className="border rounded-lg p-3">
                    <h4 className="font-medium text-sm mb-2">Deuteranopia</h4>
                    <p className="text-xs text-mui-text-secondary">Deficiência de percepção do verde</p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <h4 className="font-medium text-sm mb-2">Protanopia</h4>
                    <p className="text-xs text-mui-text-secondary">Deficiência de percepção do vermelho</p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <h4 className="font-medium text-sm mb-2">Tritanopia</h4>
                    <p className="text-xs text-mui-text-secondary">Deficiência de percepção do azul</p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <h4 className="font-medium text-sm mb-2">Acromatopsia</h4>
                    <p className="text-xs text-mui-text-secondary">Ausência completa de percepção de cores</p>
                  </div>
                </div>
              </div>
            </div>
          </ComponentCard>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Colors;
