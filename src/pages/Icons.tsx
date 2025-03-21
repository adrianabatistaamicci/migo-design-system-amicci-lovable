
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Chip } from '@/components/ui/chip';
import { Separator } from "@/components/ui/separator";
import { getMaterialIconUrl, ICON_SIZES, getIconSizeClass, shouldInvertIcon, formatIconName } from '@/utils/iconUtils';
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import ComponentCard from '@/components/ComponentCard';
import FoundationsHeader from '@/components/library-components/FoundationsHeader';

const Icons = () => {
  return (
    <div className="w-full animate-fade-in">
      <FoundationsHeader 
        title="Ícones"
        description="Usamos ícones Outlined da Material Design como biblioteca oficial"
      />
      
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="w-full justify-start h-auto p-0 bg-transparent border-b border-gray-300">
          <TabsTrigger value="overview" className="rounded-none data-[state=active]:shadow-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary px-4 py-3">
            Visão geral
          </TabsTrigger>
          <TabsTrigger value="styles" className="rounded-none data-[state=active]:shadow-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary px-4 py-3">
            Estilos
          </TabsTrigger>
          <TabsTrigger value="usage" className="rounded-none data-[state=active]:shadow-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary px-4 py-3">
            Uso
          </TabsTrigger>
          <TabsTrigger value="accessibility" className="rounded-none data-[state=active]:shadow-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary px-4 py-3">
            Acessibilidade
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <ComponentCard title="Material Design Icons" description="Os ícones do Material Design são o conjunto oficial de ícones do Google que são projetados de acordo com as diretrizes do Material Design.">
            <p className="text-mui-text-secondary mb-6">
              Os ícones do Material Design são simples, modernos e amigáveis. Eles seguem os princípios de design do Material e funcionam bem em diferentes tamanhos e contextos.
            </p>
            
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
            
            <Alert className="mt-8 border-amicci-400 rounded bg-amicci-100">
              <AlertDescription className="flex flex-row justify-between items-center">
                <span className="font-medium text-base">A biblioteca completa pode ser acessada no site oficial.</span>
                <Button variant="default" onClick={() => window.open("https://fonts.google.com/icons", "_blank", "noopener,noreferrer")}>Acessar Material Design Icons</Button>
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
          </ComponentCard>
        </TabsContent>
        
        <TabsContent value="styles" className="p-6 border rounded-lg mt-6">
          <h2 className="text-2xl font-semibold mb-4">Estilos de Ícones</h2>
          <p className="mb-4">Os ícones do Material Design estão disponíveis em diferentes estilos para atender às necessidades do seu projeto.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="border p-4 rounded-lg">
              <h3 className="font-medium mb-3">Outlined</h3>
              <div className="flex justify-center mb-3">
                <img src={getMaterialIconUrl("favorite_border")} alt="Outlined Heart" className="w-12 h-12" />
              </div>
              <p className="text-sm text-center">Estilo padrão com contornos limpos, adequado para a maioria das interfaces.</p>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h3 className="font-medium mb-3">Filled</h3>
              <div className="flex justify-center mb-3">
                <img src="https://fonts.gstatic.com/s/i/materialicons/favorite/v12/24px.svg" alt="Filled Heart" className="w-12 h-12" />
              </div>
              <p className="text-sm text-center">Ícones preenchidos que proporcionam maior ênfase visual.</p>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h3 className="font-medium mb-3">Round</h3>
              <div className="flex justify-center mb-3">
                <img src="https://fonts.gstatic.com/s/i/materialiconsround/favorite/v12/24px.svg" alt="Round Heart" className="w-12 h-12" />
              </div>
              <p className="text-sm text-center">Cantos arredondados para um visual mais suave e amigável.</p>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-medium mb-3">Pesos Visuais</h3>
            <p className="mb-4">Dependendo da importância e do contexto, os ícones podem ter diferentes pesos visuais:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="border p-4 rounded-lg">
                <h4 className="font-medium mb-2">Primário</h4>
                <div className="flex items-center space-x-4">
                  <img src={getMaterialIconUrl("home")} alt="Home Icon" className="w-8 h-8" />
                  <div>
                    <p className="text-sm">Usado para ações e elementos principais</p>
                    <p className="text-xs text-muted-foreground mt-1">Alta visibilidade, cor primária</p>
                  </div>
                </div>
              </div>
              
              <div className="border p-4 rounded-lg">
                <h4 className="font-medium mb-2">Secundário</h4>
                <div className="flex items-center space-x-4">
                  <img src={getMaterialIconUrl("info")} alt="Info Icon" className="w-8 h-8 opacity-60" />
                  <div>
                    <p className="text-sm">Usado para suporte e elementos auxiliares</p>
                    <p className="text-xs text-muted-foreground mt-1">Visibilidade média, cor secundária ou opacidade reduzida</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="usage" className="p-6 border rounded-lg mt-6">
          <h2 className="text-2xl font-semibold mb-4">Como Usar Ícones</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Tamanhos de Ícones</h3>
            <p className="mb-4">Os ícones do Material Design são normalmente usados nestes tamanhos padrão:</p>
            
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
            <h3 className="text-lg font-medium mb-2">Cores de Ícones</h3>
            <p className="mb-4">Os ícones devem usar cores que proporcionem contraste suficiente com o fundo:</p>
            
            <div className="grid grid-cols-3 gap-4 my-6">
              <div className="flex flex-col items-center p-4 bg-white border rounded-md">
                <img src={getMaterialIconUrl("info")} alt="Info Icon" className="w-8 h-8" />
                <span className="text-sm mt-2">Primário</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white border rounded-md">
                <img src={getMaterialIconUrl("info")} alt="Info Icon" className="w-8 h-8 opacity-60" />
                <span className="text-sm mt-2">Secundário</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-primary text-white rounded-md">
                <img src={getMaterialIconUrl("info")} alt="Info Icon" className="w-8 h-8 filter invert" />
                <span className="text-sm mt-2">Invertido</span>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="accessibility" className="p-6 border rounded-lg mt-6">
          <h2 className="text-2xl font-semibold mb-4">Acessibilidade</h2>
          <p className="mb-4">Garantir que os ícones sejam acessíveis para todos os usuários é fundamental para uma boa experiência de usuário.</p>

          <div className="space-y-6">
            <div className="border p-4 rounded-lg">
              <h3 className="font-medium mb-2">Texto Alternativo</h3>
              <p className="mb-3 text-sm">Sempre forneça texto alternativo para ícones para garantir que leitores de tela possam interpretar corretamente:</p>
              <div className="bg-muted p-3 rounded text-xs font-mono overflow-x-auto">
                &lt;img src="icon.svg" alt="Descrição clara da função do ícone"&gt;
              </div>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h3 className="font-medium mb-2">Contraste</h3>
              <p className="mb-3 text-sm">Garanta que haja contraste suficiente entre o ícone e o fundo:</p>
              <div className="flex space-x-4 mt-2">
                <div className="flex flex-col items-center">
                  <div className="bg-green-100 p-2 rounded mb-2 flex items-center justify-center">
                    <img src={getMaterialIconUrl("check_circle")} alt="Check Icon" className="w-6 h-6 text-green-700" />
                  </div>
                  <span className="text-xs text-green-700">Bom contraste</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-gray-300 p-2 rounded mb-2 flex items-center justify-center">
                    <img src={getMaterialIconUrl("check_circle")} alt="Check Icon" className="w-6 h-6 opacity-30" />
                  </div>
                  <span className="text-xs text-red-700">Contraste insuficiente</span>
                </div>
              </div>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h3 className="font-medium mb-2">Nunca Use Apenas Ícones</h3>
              <p className="mb-3 text-sm">Para ações importantes, não confie apenas em ícones. Adicione texto descritivo:</p>
              <div className="flex space-x-6 mt-3">
                <div className="flex flex-col items-center">
                  <button className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded">
                    <img src={getMaterialIconUrl("save")} alt="" className="w-5 h-5 filter invert" />
                    <span>Salvar</span>
                  </button>
                  <span className="text-xs text-green-700 mt-2">Preferível</span>
                </div>
                <div className="flex flex-col items-center">
                  <button className="bg-primary text-white p-2 rounded">
                    <img src={getMaterialIconUrl("save")} alt="Salvar" className="w-5 h-5 filter invert" />
                  </button>
                  <span className="text-xs text-red-700 mt-2">Apenas se o significado for óbvio</span>
                </div>
              </div>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h3 className="font-medium mb-2">Tamanho Adequado</h3>
              <p className="mb-3 text-sm">Ícones muito pequenos podem ser difíceis de identificar para usuários com deficiência visual:</p>
              <div className="flex space-x-6 items-center mt-3">
                <div className="flex flex-col items-center">
                  <img src={getMaterialIconUrl("settings")} alt="Settings" className="w-4 h-4" />
                  <span className="text-xs text-red-700 mt-2">Muito pequeno</span>
                </div>
                <div className="flex flex-col items-center">
                  <img src={getMaterialIconUrl("settings")} alt="Settings" className="w-6 h-6" />
                  <span className="text-xs text-green-700 mt-2">Tamanho mínimo</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Icons;
