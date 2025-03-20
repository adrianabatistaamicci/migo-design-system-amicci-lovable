
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Chip } from '@/components/ui/chip';
import { Separator } from "@/components/ui/separator";
import { getMaterialIconUrl, ICON_SIZES, getIconSizeClass, shouldInvertIcon, formatIconName } from '@/utils/iconUtils';
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

const Icons = () => {
  const [activeTab, setActiveTab] = useState("visaogeral");

  return (
    <div className="w-full animate-fade-in">
      <div className="flex items-center gap-2 text-sm text-mui-primary font-medium mb-2">
        <Chip variant="filled" color="primary" size="sm">Foundations</Chip>
      </div>
      <h1 className="text-3xl font-bold tracking-tight mb-4">Icons</h1>
      <p className="mb-8 text-gray-700">Usamos ícones Outlined da Material Design como biblioteca oficial</p>
      
      <div className="border-b">
        <div className="flex space-x-8">
          <TabButton 
            active={activeTab === "visaogeral"} 
            onClick={() => setActiveTab("visaogeral")}
          >
            Visão geral
          </TabButton>
          <TabButton 
            active={activeTab === "estilos"} 
            onClick={() => setActiveTab("estilos")}
          >
            Estilos
          </TabButton>
          <TabButton 
            active={activeTab === "uso"} 
            onClick={() => setActiveTab("uso")}
          >
            Uso
          </TabButton>
          <TabButton 
            active={activeTab === "acessibilidade"} 
            onClick={() => setActiveTab("acessibilidade")}
          >
            Acessibilidade
          </TabButton>
        </div>
      </div>
      
      {activeTab === "visaogeral" && (
        <div className="space-y-6 mt-6">
          <div className="rounded-lg border p-6">
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
                <span className="text-lg font-medium">A biblioteca completa de ícones do Material Design pode ser acessada em:</span>
                <Button variant="default" onClick={() => window.open("https://fonts.google.com/icons", "_blank", "noopener,noreferrer")}>Explorar Ícones do Material</Button>
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
        </div>
      )}
      
      {activeTab === "uso" && (
        <div className="space-y-6 mt-6">
          <div className="rounded-lg border p-6">
            <h2 className="text-xl font-semibold mb-4">Como Usar Ícones</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Tamanhos de Ícones</h3>
              <p className="mb-4">Ícones do Material Design são normalmente usados nestes tamanhos padrão:</p>
              
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
              <p className="mb-4">Ícones devem usar cores que fornecem contraste suficiente com o fundo:</p>
              
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
          </div>
        </div>
      )}

      {activeTab === "estilos" && (
        <div className="space-y-6 mt-6">
          <div className="rounded-lg border p-6">
            <h2 className="text-xl font-semibold mb-4">Estilos de Ícones</h2>
            <p>O Material Design oferece diferentes estilos de ícones para uso em sua interface:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="border rounded-md p-6">
                <div className="flex items-center mb-4">
                  <img src={getMaterialIconUrl("home")} alt="Outlined Icon" className="w-8 h-8 mr-4" />
                  <h3 className="text-lg font-medium">Outlined (Recomendado)</h3>
                </div>
                <p className="text-sm text-gray-600">Os ícones outlined são nossa escolha padrão. Eles funcionam bem em diferentes cenários e tamanhos, oferecendo boa legibilidade.</p>
              </div>
              
              <div className="border rounded-md p-6">
                <div className="flex items-center mb-4">
                  <span className="material-icons" style={{fontFamily: 'Material Icons'}}>home</span>
                  <h3 className="text-lg font-medium ml-4">Filled</h3>
                </div>
                <p className="text-sm text-gray-600">Os ícones filled são mais densos visualmente e podem ser usados para aumentar a ênfase ou em áreas com mais espaço.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "acessibilidade" && (
        <div className="space-y-6 mt-6">
          <div className="rounded-lg border p-6">
            <h2 className="text-xl font-semibold mb-4">Acessibilidade de Ícones</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Boas Práticas</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Sempre forneça texto alternativo descritivo para ícones que transmitem significado</li>
                <li>Use ícones com tamanho mínimo de 24px para garantir boa visibilidade</li>
                <li>Mantenha contraste suficiente entre o ícone e o fundo (relação mínima de 3:1)</li>
                <li>Não confie apenas na cor para transmitir significado através de ícones</li>
                <li>Permita que ícones interativos sejam acessíveis via teclado</li>
              </ul>
            </div>
            
            <Separator className="my-6" />
            
            <div>
              <h3 className="text-lg font-medium mb-3">Exemplos de Implementação</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="border p-4 rounded-md">
                  <h4 className="font-medium text-green-600 mb-2">Correto ✓</h4>
                  <div className="bg-muted p-3 rounded text-xs font-mono overflow-x-auto">
                    &lt;button aria-label="Configurações"&gt;
                    <br />  &lt;img src="/icons/settings.svg" alt="" /&gt;
                    <br />&lt;/button&gt;
                  </div>
                  <p className="text-sm mt-2">O aria-label fornece contexto para leitores de tela.</p>
                </div>
                
                <div className="border p-4 rounded-md">
                  <h4 className="font-medium text-red-600 mb-2">Incorreto ✗</h4>
                  <div className="bg-muted p-3 rounded text-xs font-mono overflow-x-auto">
                    &lt;button&gt;
                    <br />  &lt;img src="/icons/settings.svg" /&gt;
                    <br />&lt;/button&gt;
                  </div>
                  <p className="text-sm mt-2">Sem texto alternativo ou aria-label, o botão não tem significado para leitores de tela.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const TabButton = ({ active, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`pb-2 font-medium text-sm transition-colors relative ${
        active 
          ? "text-foreground" 
          : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {children}
      {active && (
        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground" />
      )}
    </button>
  );
};

export default Icons;
