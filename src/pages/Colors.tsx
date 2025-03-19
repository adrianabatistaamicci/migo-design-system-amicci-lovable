import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ComponentCard from '@/components/ComponentCard';
import CodeBlock from '@/components/CodeBlock';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
const Colors = () => {
  return <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Sistema de Cores</h1>
        <p className="text-mui-text-secondary text-lg">
          Paleta de cores e tokens de design utilizados na aplicação.
        </p>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="baseColors">Cores básicas</TabsTrigger>
          <TabsTrigger value="palettes">Paletas Compostas</TabsTrigger>
          <TabsTrigger value="usage">Uso</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <ComponentCard title="Sistema de Cores" description="Nosso sistema de cores é construído com variáveis CSS para suportar temas e personalização.">
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
                  <Badge className="bg-amicci-500">amicci</Badge>
                  <Badge className="bg-amicciDark-500">amicciDark</Badge>
                  <Badge className="bg-amber-500 text-black">amber</Badge>
                  <Badge className="bg-blue-500">blue</Badge>
                  <Badge className="bg-magenta-500">magenta</Badge>
                  <Badge className="bg-green-500">green</Badge>
                  <Badge className="bg-gray-500">gray</Badge>
                  <Badge className="bg-orange-500">orange</Badge>
                  <Badge className="bg-red-500">red</Badge>
                  <Badge className="bg-yellow-500 text-black">yellow</Badge>
                </div>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">2. Paletas Compostas</h3>
                <p className="text-mui-text-secondary">
                  Paletas semânticas que utilizam as cores básicas como base:
                </p>
                <div className="flex flex-wrap gap-1 mt-2">
                  <Badge className="bg-primary-main">primary</Badge>
                  <Badge className="bg-secondary-main">secondary</Badge>
                  <Badge className="bg-tertiary-main">tertiary</Badge>
                  <Badge className="bg-action-main">action</Badge>
                  <Badge className="bg-error-main">error</Badge>
                  <Badge className="bg-warning-main text-black">warning</Badge>
                  <Badge className="bg-info-main">info</Badge>
                  <Badge className="bg-success-main">success</Badge>
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
            </ComponentCard>
          </div>
        </TabsContent>
        
        <TabsContent value="baseColors" className="space-y-6">
          <ComponentCard title="Cores Básicas">
            <p className="text-mui-text-secondary mb-6">
              Estas são as cores básicas que servem como alicerce para todo o sistema de design.
              Cada cor tem 10 variações (de 50 a 900) que podem ser usadas conforme necessário.
            </p>
            
            {/* Amicci Colors */}
            <h3 className="text-xl font-medium mb-4">Amicci</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((weight, index) => <div key={`amicci-${weight}`} className="flex flex-col">
                  <div className={`h-16 rounded-t-md ${weight >= 600 ? 'text-white' : 'text-black'} flex items-end p-2`} style={{
                backgroundColor: `var(--amicci-${weight}, #000)`
              }}>
                    {weight}
                  </div>
                  <div className="p-2 border border-t-0 rounded-b-md text-sm">
                    <code className="text-xs">bg-amicci-{weight}</code>
                  </div>
                </div>)}
            </div>
            
            {/* AmicciDark Colors */}
            <h3 className="text-xl font-medium mb-4">AmicciDark</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((weight, index) => <div key={`amicciDark-${weight}`} className="flex flex-col">
                  <div className={`h-16 rounded-t-md ${weight >= 600 ? 'text-white' : 'text-black'} flex items-end p-2`} style={{
                backgroundColor: `var(--amicciDark-${weight}, #000)`
              }}>
                    {weight}
                  </div>
                  <div className="p-2 border border-t-0 rounded-b-md text-sm">
                    <code className="text-xs">bg-amicciDark-{weight}</code>
                  </div>
                </div>)}
            </div>
            
            {/* Magenta Colors */}
            <h3 className="text-xl font-medium mb-4">Magenta</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((weight, index) => <div key={`magenta-${weight}`} className="flex flex-col">
                  <div className={`h-16 rounded-t-md ${weight >= 400 ? 'text-white' : 'text-black'} flex items-end p-2 bg-magenta-${weight}`}>
                    {weight}
                  </div>
                  <div className="p-2 border border-t-0 rounded-b-md text-sm">
                    <code className="text-xs">bg-magenta-{weight}</code>
                  </div>
                </div>)}
            </div>
            
            {/* Blue Colors */}
            <h3 className="text-xl font-medium mb-4">Blue</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((weight, index) => <div key={`blue-${weight}`} className="flex flex-col">
                  <div className={`h-16 rounded-t-md ${weight >= 400 ? 'text-white' : 'text-black'} flex items-end p-2 bg-blue-${weight}`}>
                    {weight}
                  </div>
                  <div className="p-2 border border-t-0 rounded-b-md text-sm">
                    <code className="text-xs">bg-blue-{weight}</code>
                  </div>
                </div>)}
            </div>
            
            {/* Green Colors */}
            <h3 className="text-xl font-medium mb-4">Green</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((weight, index) => <div key={`green-${weight}`} className="flex flex-col">
                  <div className={`h-16 rounded-t-md ${weight >= 600 ? 'text-white' : 'text-black'} flex items-end p-2 bg-green-${weight}`}>
                    {weight}
                  </div>
                  <div className="p-2 border border-t-0 rounded-b-md text-sm">
                    <code className="text-xs">bg-green-{weight}</code>
                  </div>
                </div>)}
            </div>
            
            {/* Red Colors */}
            <h3 className="text-xl font-medium mb-4">Red</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((weight, index) => <div key={`red-${weight}`} className="flex flex-col">
                  <div className={`h-16 rounded-t-md ${weight >= 300 ? 'text-white' : 'text-black'} flex items-end p-2 bg-red-${weight}`}>
                    {weight}
                  </div>
                  <div className="p-2 border border-t-0 rounded-b-md text-sm">
                    <code className="text-xs">bg-red-{weight}</code>
                  </div>
                </div>)}
            </div>
            
            {/* Yellow Colors */}
            <h3 className="text-xl font-medium mb-4">Yellow</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((weight, index) => <div key={`yellow-${weight}`} className="flex flex-col">
                  <div className="h-16 rounded-t-md text-black flex items-end p-2 bg-yellow-${weight}">
                    {weight}
                  </div>
                  <div className="p-2 border border-t-0 rounded-b-md text-sm">
                    <code className="text-xs">bg-yellow-{weight}</code>
                  </div>
                </div>)}
            </div>
            
            {/* Amber Colors */}
            <h3 className="text-xl font-medium mb-4">Amber</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((weight, index) => <div key={`amber-${weight}`} className="flex flex-col">
                  <div className={`h-16 rounded-t-md ${weight >= 800 ? 'text-white' : 'text-black'} flex items-end p-2 bg-amber-${weight}`}>
                    {weight}
                  </div>
                  <div className="p-2 border border-t-0 rounded-b-md text-sm">
                    <code className="text-xs">bg-amber-{weight}</code>
                  </div>
                </div>)}
            </div>
            
            {/* Orange Colors */}
            <h3 className="text-xl font-medium mb-4">Orange</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((weight, index) => <div key={`orange-${weight}`} className="flex flex-col">
                  <div className={`h-16 rounded-t-md ${weight >= 500 ? 'text-white' : 'text-black'} flex items-end p-2 bg-orange-${weight}`}>
                    {weight}
                  </div>
                  <div className="p-2 border border-t-0 rounded-b-md text-sm">
                    <code className="text-xs">bg-orange-{weight}</code>
                  </div>
                </div>)}
            </div>
            
            {/* Gray Colors */}
            <h3 className="text-xl font-medium mb-4">Gray</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((weight, index) => <div key={`gray-${weight}`} className="flex flex-col">
                  <div className={`h-16 rounded-t-md ${weight >= 600 ? 'text-white' : 'text-black'} flex items-end p-2 bg-gray-${weight}`}>
                    {weight}
                  </div>
                  <div className="p-2 border border-t-0 rounded-b-md text-sm">
                    <code className="text-xs">bg-gray-{weight}</code>
                  </div>
                </div>)}
            </div>
          </ComponentCard>
        </TabsContent>
        
        <TabsContent value="palettes" className="space-y-6">
          <ComponentCard title="Paletas Compostas">
            <p className="text-mui-text-secondary mb-6">
              As paletas compostas são construídas a partir das cores básicas e fornecem variações
              semânticas para diferentes estados e usos na interface.
            </p>
            
            {/* Primary Palette */}
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-xl font-medium">Primary (baseada em Amicci)</h3>
                <Badge className="bg-amicci-500">amicci</Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex flex-col">
                  <div className="h-20 bg-primary-main rounded-t-md text-primary-contrast flex items-center justify-center">
                    Main
                  </div>
                  <div className="p-3 border border-t-0 rounded-b-md">
                    <code className="text-xs">bg-primary-main</code>
                    <p className="text-xs text-mui-text-secondary mt-1">
                      Cor principal para botões e elementos de destaque
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <div className="h-20 bg-primary-dark rounded-t-md text-primary-contrast flex items-center justify-center">
                    Dark
                  </div>
                  <div className="p-3 border border-t-0 rounded-b-md">
                    <code className="text-xs">bg-primary-dark</code>
                    <p className="text-xs text-mui-text-secondary mt-1">
                      Versão mais escura para contraste e ênfase
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <div className="h-20 bg-primary-light rounded-t-md text-black flex items-center justify-center">
                    Light
                  </div>
                  <div className="p-3 border border-t-0 rounded-b-md">
                    <code className="text-xs">bg-primary-light</code>
                    <p className="text-xs text-mui-text-secondary mt-1">
                      Versão mais clara para fundos e elementos sutis
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <div className="h-20 bg-primary-contrast rounded-t-md text-primary-main flex items-center justify-center">
                    Contrast
                  </div>
                  <div className="p-3 border border-t-0 rounded-b-md">
                    <code className="text-xs">bg-primary-contrast</code>
                    <p className="text-xs text-mui-text-secondary mt-1">
                      Cor de texto sobre fundos primários
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                <div className="flex flex-col">
                  <div className="h-20 bg-primary-hover rounded-t-md text-primary-contrast flex items-center justify-center">
                    Hover
                  </div>
                  <div className="p-3 border border-t-0 rounded-b-md">
                    <code className="text-xs">bg-primary-hover</code>
                    <p className="text-xs text-mui-text-secondary mt-1">
                      Estado hover para elementos interativos
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <div className="h-20 bg-primary-selected rounded-t-md text-primary-contrast flex items-center justify-center">
                    Selected
                  </div>
                  <div className="p-3 border border-t-0 rounded-b-md">
                    <code className="text-xs">bg-primary-selected</code>
                    <p className="text-xs text-mui-text-secondary mt-1">
                      Estado selecionado para elementos interativos
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <div className="h-20 bg-primary-focusVisible rounded-t-md text-black flex items-center justify-center">
                    Focus Visible
                  </div>
                  <div className="p-3 border border-t-0 rounded-b-md">
                    <code className="text-xs">bg-primary-focusVisible</code>
                    <p className="text-xs text-mui-text-secondary mt-1">
                      Estado de foco visível para acessibilidade
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <div className="h-20 bg-primary-outlinedBorder rounded-t-md text-black flex items-center justify-center">
                    Outlined Border
                  </div>
                  <div className="p-3 border border-t-0 rounded-b-md">
                    <code className="text-xs">bg-primary-outlinedBorder</code>
                    <p className="text-xs text-mui-text-secondary mt-1">
                      Cor para bordas e contornos
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Secondary Palette */}
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-xl font-medium">Secondary (baseada em AmicciDark)</h3>
                <Badge className="bg-amicciDark-500">amicciDark</Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex flex-col">
                  <div className="h-20 bg-secondary-main rounded-t-md text-secondary-contrast flex items-center justify-center">
                    Main
                  </div>
                  <div className="p-3 border border-t-0 rounded-b-md">
                    <code className="text-xs">bg-secondary-main</code>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <div className="h-20 bg-secondary-dark rounded-t-md text-secondary-contrast flex items-center justify-center">
                    Dark
                  </div>
                  <div className="p-3 border border-t-0 rounded-b-md">
                    <code className="text-xs">bg-secondary-dark</code>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <div className="h-20 bg-secondary-light rounded-t-md text-black flex items-center justify-center">
                    Light
                  </div>
                  <div className="p-3 border border-t-0 rounded-b-md">
                    <code className="text-xs">bg-secondary-light</code>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <div className="h-20 bg-secondary-contrast rounded-t-md text-secondary-main flex items-center justify-center">
                    Contrast
                  </div>
                  <div className="p-3 border border-t-0 rounded-b-md">
                    <code className="text-xs">bg-secondary-contrast</code>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Error Palette */}
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-xl font-medium">Error (baseada em Red)</h3>
                <Badge className="bg-red-500">red</Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex flex-col">
                  <div className="h-20 bg-error-main rounded-t-md text-error-contrast flex items-center justify-center">
                    Main
                  </div>
                  <div className="p-3 border border-t-0 rounded-b-md">
                    <code className="text-xs">bg-error-main</code>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <div className="h-20 bg-error-dark rounded-t-md text-error-contrast flex items-center justify-center">
                    Dark
                  </div>
                  <div className="p-3 border border-t-0 rounded-b-md">
                    <code className="text-xs">bg-error-dark</code>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <div className="h-20 bg-error-light rounded-t-md text-black flex items-center justify-center">
                    Light
                  </div>
                  <div className="p-3 border border-t-0 rounded-b-md">
                    <code className="text-xs">bg-error-light</code>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <div className="h-20 bg-error-hover rounded-t-md text-error-contrast flex items-center justify-center">
                    Hover
                  </div>
                  <div className="p-3 border border-t-0 rounded-b-md">
                    <code className="text-xs">bg-error-hover</code>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Outras paletas resumidas */}
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-4">Outras Paletas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 border rounded-md">
                  <div className="flex gap-2 items-center mb-2">
                    <div className="w-6 h-6 rounded-full bg-tertiary-main"></div>
                    <h4 className="font-medium">Tertiary</h4>
                  </div>
                  <p className="text-xs text-mui-text-secondary">Baseada em Magenta</p>
                  <code className="text-xs block mt-2">bg-tertiary-main</code>
                </div>
                
                <div className="p-4 border rounded-md">
                  <div className="flex gap-2 items-center mb-2">
                    <div className="w-6 h-6 rounded-full bg-warning-main"></div>
                    <h4 className="font-medium">Warning</h4>
                  </div>
                  <p className="text-xs text-mui-text-secondary">Baseada em Yellow</p>
                  <code className="text-xs block mt-2">bg-warning-main</code>
                </div>
                
                <div className="p-4 border rounded-md">
                  <div className="flex gap-2 items-center mb-2">
                    <div className="w-6 h-6 rounded-full bg-info-main"></div>
                    <h4 className="font-medium">Info</h4>
                  </div>
                  <p className="text-xs text-mui-text-secondary">Baseada em Blue</p>
                  <code className="text-xs block mt-2">bg-info-main</code>
                </div>
                
                <div className="p-4 border rounded-md">
                  <div className="flex gap-2 items-center mb-2">
                    <div className="w-6 h-6 rounded-full bg-success-main"></div>
                    <h4 className="font-medium">Success</h4>
                  </div>
                  <p className="text-xs text-mui-text-secondary">Baseada em Green</p>
                  <code className="text-xs block mt-2">bg-success-main</code>
                </div>
              </div>
            </div>
          </ComponentCard>
        </TabsContent>
        
        <TabsContent value="usage" className="space-y-6">
          <ComponentCard title="Diretrizes de Uso de Cores">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Uso Semântico de Cores</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Paleta</TableHead>
                    <TableHead>Uso</TableHead>
                    <TableHead>Exemplo</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Primary</TableCell>
                    <TableCell>Botões principais, elementos de destaque, links</TableCell>
                    <TableCell><span className="px-4 py-1 bg-primary-main text-primary-contrast rounded">Botão</span></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Secondary</TableCell>
                    <TableCell>Botões secundários, elementos complementares</TableCell>
                    <TableCell><span className="px-4 py-1 bg-secondary-main text-secondary-contrast rounded">Secundário</span></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Tertiary</TableCell>
                    <TableCell>Elementos de destaque alternativo, ênfase</TableCell>
                    <TableCell><span className="px-4 py-1 bg-tertiary-main text-tertiary-contrast rounded">Destaque</span></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Error</TableCell>
                    <TableCell>Erros, alertas críticos, botões de exclusão</TableCell>
                    <TableCell><span className="px-4 py-1 bg-error-main text-error-contrast rounded">Erro</span></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Warning</TableCell>
                    <TableCell>Avisos, alertas não críticos</TableCell>
                    <TableCell><span className="px-4 py-1 bg-warning-main text-warning-contrast rounded">Aviso</span></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Info</TableCell>
                    <TableCell>Informações, notificações, dicas</TableCell>
                    <TableCell><span className="px-4 py-1 bg-info-main text-info-contrast rounded">Info</span></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Success</TableCell>
                    <TableCell>Confirmações, ações bem-sucedidas</TableCell>
                    <TableCell><span className="px-4 py-1 bg-success-main text-success-contrast rounded">Sucesso</span></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Action</TableCell>
                    <TableCell>Interfaces neutras, ações secundárias</TableCell>
                    <TableCell><span className="px-4 py-1 bg-action-main text-action-contrast rounded">Ação</span></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <div className="space-y-4 mt-8">
              <h3 className="text-lg font-medium">Estados de Interação</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-mui-text-secondary mb-3">
                    Cada paleta inclui variações específicas para estados de interação, garantindo consistência:
                  </p>
                  <ul className="space-y-2 list-disc list-inside text-mui-text-secondary">
                    <li><strong>main</strong>: Estado padrão do componente</li>
                    <li><strong>hover</strong>: Quando o cursor passa sobre o elemento</li>
                    <li><strong>selected</strong>: Quando o elemento está selecionado</li>
                    <li><strong>focusVisible</strong>: Quando o elemento recebe foco via teclado</li>
                  </ul>
                </div>
                <div>
                  <p className="text-mui-text-secondary mb-3">
                    Outras variações de cores têm propósitos específicos:
                  </p>
                  <ul className="space-y-2 list-disc list-inside text-mui-text-secondary">
                    <li><strong>light</strong>: Versões mais claras para backgrounds</li>
                    <li><strong>dark</strong>: Versões mais escuras para contraste</li>
                    <li><strong>contrast</strong>: Cor de texto que garante legibilidade</li>
                    <li><strong>outlinedBorder</strong>: Para bordas e contornos</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 mt-8">
              <h3 className="text-lg font-medium">Exemplo de Código</h3>
              <CodeBlock language="html" title="Exemplo de uso em componentes" code={`<!-- Botão primário -->
<button class="bg-primary-main hover:bg-primary-hover text-primary-contrast px-4 py-2 rounded">
  Botão Primário
</button>

<!-- Alerta de erro -->
<div class="bg-error-light border border-error-main text-error-dark px-4 py-3 rounded">
  <strong>Erro!</strong> Algo deu errado.
</div>

<!-- Badge de sucesso -->
<span class="bg-success-main text-success-contrast px-2 py-1 rounded-full text-xs">
  Concluído
</span>`} />
            </div>
          </ComponentCard>
        </TabsContent>
      </Tabs>
    </div>;
};
export default Colors;