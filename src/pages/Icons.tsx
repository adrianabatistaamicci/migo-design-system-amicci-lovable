
import React, { useState } from 'react';
import { TailwindTabs } from "@/components/ui/tabs";
import Header from '@/components/library-components/Header';
import {
  User,
  Eye,
  Package,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { icons } from "@/data/icons";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Icons = () => {
  const [activeTab, setActiveTab] = useState('escala');
  const [searchTerm, setSearchTerm] = useState('');
  const [copied, setCopied] = useState<string | null>(null);

  const filteredIcons = icons.filter(icon =>
    icon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value);
    setCopied(value);
    toast({
      title: "Copiado!",
      description: "Ícone copiado para a área de transferência.",
    });
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Ícones" 
        description="Usamos ícones Lucide como biblioteca oficial"
        type="foundations"
      />

      <div className="mt-8">
        <TailwindTabs 
          defaultValue="escala"
          tabs={[
            { name: 'Escala', value: 'escala' },
            { name: 'Acessibilidade', value: 'acessibilidade' }
          ]}
          variant="pillsGray"
          onChange={value => setActiveTab(value)}
        />
        
        <div className="mt-6">
          {activeTab === 'escala' && (
            <div className="space-y-6">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-3">Lucide Icons</h2>
                <p className="mb-4 text-gray-600">Os ícones Lucide são um conjunto moderno e livre de ícones de código aberto projetados para interfaces digitais.</p>
                
                <p className="mb-6 text-gray-600">Os ícones Lucide são simples, modernos e amigáveis. Eles são fáceis de integrar em projetos React e oferecem alto grau de customização.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
                  <div className="flex flex-col items-center text-center">
                    <User className="h-12 w-12 mb-4 text-primary-main" />
                    <h3 className="font-medium mb-2">Simples</h3>
                    <p className="text-sm text-gray-600">Design limpo e minimalista que funciona bem em tamanhos pequenos</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <Package className="h-12 w-12 mb-4 text-primary-main" />
                    <h3 className="font-medium mb-2">Consistente</h3>
                    <p className="text-sm text-gray-600">Estilo uniforme em todos os ícones do sistema</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <Eye className="h-12 w-12 mb-4 text-primary-main" />
                    <h3 className="font-medium mb-2">Significativo</h3>
                    <p className="text-sm text-gray-600">Metáforas reconhecíveis que comunicam rapidamente o significado</p>
                  </div>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-md flex justify-between items-center mt-8">
                  <p className="text-sm">A biblioteca completa pode ser acessada no site oficial.</p>
                  <Button variant="default" className="bg-primary-main hover:bg-primary-dark">
                    Acessar Lucide Icons
                  </Button>
                </div>
              </Card>
              
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Guia de Integração</h2>
                <p className="mb-6 text-gray-600">Existem várias maneiras de integrar os ícones Lucide em seu projeto:</p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2">1. Instalação via NPM</h3>
                    <p className="text-sm text-gray-600 mb-2">Instale o pacote lucide-react:</p>
                    <div className="bg-slate-900 text-white p-3 rounded-md text-sm font-mono mb-4">
                      npm install lucide-react
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Então importe e use os ícones:</p>
                    <div className="bg-slate-900 text-white p-3 rounded-md text-sm font-mono">
                      import &#123; Home &#125; from 'lucide-react';<br />
                      &lt;Home /&gt;
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">2. Customização</h3>
                    <p className="text-sm text-gray-600 mb-2">Os ícones Lucide são altamente customizáveis:</p>
                    <div className="bg-slate-900 text-white p-3 rounded-md text-sm font-mono">
                      &lt;Home size=24 color="blue" strokeWidth=2 /&gt;
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">3. Componente Genérico</h3>
                    <p className="text-sm text-gray-600 mb-2">Crie um componente de ícone genérico para uso dinâmico:</p>
                    <div className="bg-slate-900 text-white p-3 rounded-md text-sm font-mono">
                      import &#123; icons &#125; from 'lucide-react';<br />
                      const Icon = (&#123; name, ...props &#125;) =&gt; &#123;<br />
                      &nbsp;&nbsp;const LucideIcon = icons[name];<br />
                      &nbsp;&nbsp;return &lt;LucideIcon &#123;...props&#125; /&gt;;<br />
                      &#125;;
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Recursos Oficiais</h2>
                <ul className="list-disc pl-5 space-y-3 text-gray-600">
                  <li>Site Oficial Lucide - Navegue e busque ícones</li>
                  <li>GitHub Lucide - Repositório oficial</li>
                  <li>Documentação lucide-react - Guia completo de uso com React</li>
                </ul>
              </Card>
            </div>
          )}

          {activeTab === 'acessibilidade' && (
            <div className="space-y-6">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Diretrizes de Acessibilidade para Ícones</h2>
                <p className="text-gray-600 mb-6">
                  Os ícones devem ser projetados e utilizados de forma a garantir a acessibilidade e a usabilidade para todos os usuários.
                  Siga estas diretrizes para criar ícones que sejam claros, concisos e fáceis de entender.
                </p>

                <Separator className="my-6" />

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-medium">Uso de aria-label</AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <p className="mb-2">Quando usar ícones sem texto, sempre forneça um aria-label descritivo para leitores de tela:</p>
                      <div className="bg-slate-900 text-white p-3 rounded-md text-sm font-mono">
                        &lt;Button aria-label="Buscar"&gt;<br />
                        &nbsp;&nbsp;&lt;Search className="h-4 w-4" /&gt;<br />
                        &lt;/Button&gt;
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg font-medium">Tamanho e contraste</AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <p>Garanta que seus ícones tenham:</p>
                      <ul className="list-disc pl-5 space-y-2 mt-2">
                        <li>Tamanho mínimo de 24x24 pixels para interação em dispositivos touchscreen</li>
                        <li>Contraste suficiente (mínimo 3:1) com o fundo</li>
                        <li>Consistência de espaçamento e tamanho em toda a interface</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg font-medium">Ícones com texto</AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <p className="mb-2">Para melhor acessibilidade, combine ícones com texto sempre que possível:</p>
                      <div className="bg-slate-900 text-white p-3 rounded-md text-sm font-mono">
                        &lt;Button&gt;<br />
                        &nbsp;&nbsp;&lt;Save className="h-4 w-4 mr-2" /&gt;<br />
                        &nbsp;&nbsp;Salvar<br />
                        &lt;/Button&gt;
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Icons;
