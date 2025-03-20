import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Chip } from '@/components/ui/chip';
import { Separator } from "@/components/ui/separator";
import { getMaterialIconUrl, ICON_SIZES, getIconSizeClass, shouldInvertIcon, formatIconName } from '@/utils/iconUtils';
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
const Icons = () => {
  return <div className="w-full animate-fade-in">
      <div className="flex items-center gap-2 text-sm text-mui-primary font-medium mb-2">
        <Chip variant="filled" color="primary" size="sm">Foundations</Chip>
      </div>
      <h1 className="text-3xl font-bold tracking-tight mb-4">Icons</h1>
      <p className="mb-8 text-gray-700">Usamos ícones Outlined da Material Design como biblioteca oficial</p>
      
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <div className="rounded-lg border p-6 mt-6">
            <h2 className="text-xl font-semibold mb-4">Material Design Icons</h2>
            <p className="mb-4">Os ícones do Material Design são o conjunto oficial de ícones do Google que são projetados de acordo com as diretrizes do Material Design.</p>
            
            <div className="flex flex-col md:flex-row gap-6 mt-6">
              <div className="flex-1 p-4 border flex flex-col items-center justify-center rounded">
                <img src={getMaterialIconUrl("account_circle")} alt="Account Icon" className="w-10 h-10 mb-2" />
                <h3 className="font-medium">Simples</h3>
                <p className="text-sm text-center text-muted-foreground">Design limpo e minimalista que funciona bem em tamanhos pequenos</p>
              </div>
              <div className="flex-1 p-4 border flex flex-col items-center justify-center rounded">
                <img src={getMaterialIconUrl("settings")} alt="Settings Icon" className="w-10 h-10 mb-2" />
                <h3 className="font-medium">Consistente</h3>
                <p className="text-sm text-center text-muted-foreground">Estilo uniforme em todos os ícones do sistema</p>
              </div>
              <div className="flex-1 p-4 border flex flex-col items-center justify-center rounded">
                <img src={getMaterialIconUrl("visibility")} alt="Visibility Icon" className="w-10 h-10 mb-2" />
                <h3 className="font-medium">Significativo</h3>
                <p className="text-sm text-center text-muted-foreground">Metáforas reconhecíveis que comunicam rapidamente o significado</p>
              </div>
            </div>
            
            <Alert className="mt-8 bg-primary/10 border-amicci-500 rounded">
              <AlertDescription className="flex flex-row justify-between items-center">
                <span className="text-lg font-medium">A biblioteca completa pode ser acessada no site oficial.</span>
                <Button variant="default" onClick={() => window.open("https://fonts.google.com/icons", "_blank", "noopener,noreferrer")}>
                  Explorar Ícones do Material
                </Button>
              </AlertDescription>
            </Alert>
            
            <Separator className="my-6" />

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Guia de Integração</h3>
              <p className="mb-4">Existem várias maneiras de integrar os ícones do Material Design em seu projeto:</p>
              
              <div className="space-y-6">
                <div className="rounded border p-4">
                  <h4 className="font-medium mb-2">1. Google Fonts (CDN)</h4>
                  <p className="text-sm mb-3">Adicione esta linha ao cabeçalho HTML:</p>
                  <div className="bg-muted p-3 rounded text-xs font-mono overflow-x-auto">
                    &lt;link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet"&gt;
                  </div>
                  <p className="text-sm mt-3">Então use os ícones com:</p>
                  <div className="bg-muted p-3 rounded text-xs font-mono overflow-x-auto">
                    &lt;span className="material-icons-outlined"&gt;home&lt;/span&gt;
                  </div>
                </div>
                
                <div className="rounded border p-4">
                  <h4 className="font-medium mb-2">2. Ícones SVG</h4>
                  <p className="text-sm mb-3">Use URLs SVG diretamente do Google Fonts:</p>
                  <div className="bg-muted p-3 rounded text-xs font-mono overflow-x-auto">
                    &lt;img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/home/v12/24px.svg" alt="Home"&gt;
                  </div>
                  <p className="text-sm mt-3">Você pode criar uma função utilitária para gerar essas URLs:</p>
                  <div className="bg-muted p-3 rounded text-xs font-mono overflow-x-auto">
                    {`const getMaterialIconUrl = (name, size = 24) => \`https://fonts.gstatic.com/s/i/materialiconsoutlined/\${name}/v12/\${size}px.svg\`;`}
                  </div>
                </div>
                
                <div className="rounded border p-4">
                  <h4 className="font-medium mb-2">3. Bibliotecas de Ícones</h4>
                  <p className="text-sm mb-3">Use um pacote como material-icons:</p>
                  <div className="bg-muted p-3 rounded text-xs font-mono overflow-x-auto">
                    npm install material-icons
                  </div>
                  <p className="text-sm mt-3">Depois importe em seu CSS/JS:</p>
                  <div className="bg-muted p-3 rounded text-xs font-mono overflow-x-auto">
                    import 'material-icons/iconfont/material-icons.css';
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-2">Recursos Oficiais</h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li><a href="https://fonts.google.com/icons" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Fonts Icons Library</a> - Navegue e baixe ícones do Material</li>
                <li><a href="https://m3.material.io/styles/icons/overview" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Material Design 3 Icons</a> - Diretrizes oficiais</li>
                <li><a href="https://github.com/google/material-design-icons" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Material Design Icons GitHub</a> - Repositório oficial</li>
              </ul>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="usage" className="space-y-6">
          <div className="rounded-lg border p-6 mt-6">
            <h2 className="text-xl font-semibold mb-4">How to Use Icons</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Icon Sizes</h3>
              <p className="mb-4">Material Design icons are typically used in these standard sizes:</p>
              
              <div className="grid grid-cols-4 gap-4 my-6">
                <div className="flex flex-col items-center">
                  <img src={getMaterialIconUrl("home", 24)} alt="Home Icon" className="w-6 h-6" />
                  <span className="text-sm mt-2">24px</span>
                </div>
                <div className="flex flex-col items-center">
                  <img src={getMaterialIconUrl("home", 24)} alt="Home Icon" className="w-8 h-8" />
                  <span className="text-sm mt-2">32px</span>
                </div>
                <div className="flex flex-col items-center">
                  <img src={getMaterialIconUrl("home", 24)} alt="Home Icon" className="w-10 h-10" />
                  <span className="text-sm mt-2">40px</span>
                </div>
                <div className="flex flex-col items-center">
                  <img src={getMaterialIconUrl("home", 24)} alt="Home Icon" className="w-12 h-12" />
                  <span className="text-sm mt-2">48px</span>
                </div>
              </div>
            </div>
            
            <Separator className="my-6" />
            
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Icon Colors</h3>
              <p className="mb-4">Icons should use colors that provide sufficient contrast with their background:</p>
              
              <div className="grid grid-cols-3 gap-4 my-6">
                <div className="flex flex-col items-center p-4 bg-white border rounded-md">
                  <img src={getMaterialIconUrl("info")} alt="Info Icon" className="w-8 h-8" />
                  <span className="text-sm mt-2">Primary</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white border rounded-md">
                  <img src={getMaterialIconUrl("info")} alt="Info Icon" className="w-8 h-8 opacity-60" />
                  <span className="text-sm mt-2">Secondary</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-primary text-white rounded-md">
                  <img src={getMaterialIconUrl("info")} alt="Info Icon" className="w-8 h-8 filter invert" />
                  <span className="text-sm mt-2">Inverted</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>;
};
export default Icons;