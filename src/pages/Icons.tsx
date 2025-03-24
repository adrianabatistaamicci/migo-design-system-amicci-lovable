
import React, { useState, useEffect } from 'react';
import { Separator } from "@/components/ui/separator";
import { Chip } from '@/components/ui/chip';
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import ComponentCard from '@/components/ComponentCard';
import Header from '@/components/library-components/Header';
import { TailwindTabs } from "@/components/ui/tabs";
import { Home, Settings, Eye, User } from "lucide-react";
import DocumentationSkeleton from '@/components/library-components/DocumentationSkeleton';

const Icons = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    return <DocumentationSkeleton />;
  }
  
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Ícones"
        description="Usamos ícones Lucide como biblioteca oficial"
        type="foundations"
      />
      
      <TailwindTabs 
        defaultValue="overview" 
        className="mt-8"
        tabs={[
          { name: 'Escala', value: 'overview' },
          { name: 'Acessibilidade', value: 'accessibility' }
        ]}
        variant="pillsGray"
        onChange={(value) => setActiveTab(value)}
      />
      
      {activeTab === 'overview' && (
        <ComponentCard title="Lucide Icons" description="Os ícones Lucide são um conjunto moderno e leve de ícones de código aberto projetados para interfaces digitais.">
          <p className="text-mui-text-secondary mb-6">
            Os ícones Lucide são simples, modernos e amigáveis. Eles são fáceis de integrar em projetos React e oferecem alto grau de customização.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 mt-6">
            <div className="flex-1 p-4 border flex flex-col items-center justify-center rounded">
              <User className="w-10 h-10 mb-2" />
              <h3 className="font-medium">Simples</h3>
              <p className="text-sm text-center text-muted-foreground">Design limpo e minimalista que funciona bem em tamanhos pequenos</p>
            </div>
            <div className="flex-1 p-4 border flex flex-col items-center justify-center rounded">
              <Settings className="w-10 h-10 mb-2" />
              <h3 className="font-medium">Consistente</h3>
              <p className="text-sm text-center text-muted-foreground">Estilo uniforme em todos os ícones do sistema</p>
            </div>
            <div className="flex-1 p-4 border flex flex-col items-center justify-center rounded">
              <Eye className="w-10 h-10 mb-2" />
              <h3 className="font-medium">Significativo</h3>
              <p className="text-sm text-center text-muted-foreground">Metáforas reconhecíveis que comunicam rapidamente o significado</p>
            </div>
          </div>
          
          <Alert className="mt-8 border-amicci-400 rounded bg-amicci-100">
            <AlertDescription className="flex flex-row justify-between items-center">
              <span className="font-medium text-base">A biblioteca completa pode ser acessada no site oficial.</span>
              <Button variant="default" onClick={() => window.open("https://lucide.dev/icons/", "_blank", "noopener,noreferrer")}>Acessar Lucide Icons</Button>
            </AlertDescription>
          </Alert>
          
          <Separator className="my-6" />

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Guia de Integração</h3>
            <p className="mb-4">Existem várias maneiras de integrar os ícones Lucide em seu projeto:</p>
            
            <div className="space-y-6">
              <div className="rounded border p-4">
                <h4 className="font-medium mb-2">1. Instalação via NPM</h4>
                <p className="text-sm mb-3">Instale o pacote lucide-react:</p>
                <div className="bg-muted p-3 rounded text-xs font-mono overflow-x-auto">
                  npm install lucide-react
                </div>
                <p className="text-sm mt-3">Então importe e use os ícones:</p>
                <div className="bg-muted p-3 rounded text-xs font-mono overflow-x-auto">
                  import {'{ Home }'} from 'lucide-react';<br/>
                  &lt;Home /&gt;
                </div>
              </div>
              
              <div className="rounded border p-4">
                <h4 className="font-medium mb-2">2. Customização</h4>
                <p className="text-sm mb-3">Os ícones Lucide são altamente customizáveis:</p>
                <div className="bg-muted p-3 rounded text-xs font-mono overflow-x-auto">
                  &lt;Home size={24} color="blue" strokeWidth={2} /&gt;
                </div>
                <p className="text-sm mt-3">Você pode passar qualquer propriedade SVG para personalizar ainda mais:</p>
                <div className="bg-muted p-3 rounded text-xs font-mono overflow-x-auto">
                  &lt;Home className="text-primary hover:text-secondary" /&gt;
                </div>
              </div>
              
              <div className="rounded border p-4">
                <h4 className="font-medium mb-2">3. Componente Genérico</h4>
                <p className="text-sm mb-3">Crie um componente de ícone genérico para uso dinâmico:</p>
                <div className="bg-muted p-3 rounded text-xs font-mono overflow-x-auto">
                  {`import { icons } from 'lucide-react';\n\nconst Icon = ({ name, ...props }) => {\n  const LucideIcon = icons[name];\n  return <LucideIcon {...props} />;\n};\n\n// Uso: <Icon name="Home" size={24} />`}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-medium mb-2">Recursos Oficiais</h3>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li><a href="https://lucide.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Site Oficial Lucide</a> - Navegue e busque ícones</li>
              <li><a href="https://github.com/lucide-icons/lucide" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub Lucide</a> - Repositório oficial</li>
              <li><a href="https://lucide.dev/docs/lucide-react" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Documentação lucide-react</a> - Guia completo de uso com React</li>
            </ul>
          </div>
        </ComponentCard>
      )}
        
      {activeTab === 'accessibility' && (
        <div className="p-6 border rounded-lg mt-6">
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
                    <User className="w-6 h-6 text-green-700" />
                  </div>
                  <span className="text-xs text-green-700">Bom contraste</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-gray-300 p-2 rounded mb-2 flex items-center justify-center">
                    <User className="w-6 h-6 opacity-30" />
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
                    <Home className="w-5 h-5" />
                    <span>Início</span>
                  </button>
                  <span className="text-xs text-green-700 mt-2">Preferível</span>
                </div>
                <div className="flex flex-col items-center">
                  <button className="bg-primary text-white p-2 rounded">
                    <Home className="w-5 h-5" />
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
                  <Settings className="w-4 h-4" />
                  <span className="text-xs text-red-700 mt-2">Muito pequeno</span>
                </div>
                <div className="flex flex-col items-center">
                  <Settings className="w-6 h-6" />
                  <span className="text-xs text-green-700 mt-2">Tamanho mínimo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Icons;
