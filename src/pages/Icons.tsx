
/**
 * @protected
 * ATENÇÃO: Este arquivo contém conteúdo finalizado e aprovado.
 * Não deve ser alterado diretamente pelo assistente AI.
 * Apenas atualizações de componentes devem ser refletidas.
 */

import React, { useState } from 'react';
import { TailwindTabs } from "@/components/ui/tabs";
import Header from '@/components/library-components/Header';
import {
  User,
  Eye,
  Package,
  AlertCircle
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
import CodeBlock from '@/components/CodeBlock';
import ComponentCard from '@/components/ComponentCard';

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
              <ComponentCard 
                title="Lucide Icons"
                description="Os ícones Lucide são um conjunto moderno e livre de ícones de código aberto projetados para interfaces digitais."
              >
                <div className="space-y-4">
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
                </div>
              </ComponentCard>
              
              <ComponentCard 
                title="Guia de Integração"
                description="Existem várias maneiras de integrar os ícones Lucide em seu projeto."
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2">1. Instalação via NPM</h3>
                    <p className="text-sm text-gray-600 mb-2">Instale o pacote lucide-react:</p>
                    <CodeBlock 
                      code="npm install lucide-react" 
                      language="bash"
                      title="Terminal"
                    />
                    <p className="text-sm text-gray-600 mb-2">Então importe e use os ícones:</p>
                    <CodeBlock 
                      code="import { Home } from 'lucide-react';\n<Home />" 
                      language="jsx"
                      title="React Component"
                    />
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">2. Customização</h3>
                    <p className="text-sm text-gray-600 mb-2">Os ícones Lucide são altamente customizáveis:</p>
                    <CodeBlock 
                      code='<Home size={24} color="blue" strokeWidth={2} />' 
                      language="jsx"
                      title="React Component"
                    />
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">3. Componente Genérico</h3>
                    <p className="text-sm text-gray-600 mb-2">Crie um componente de ícone genérico para uso dinâmico:</p>
                    <CodeBlock 
                      code={`import { icons } from 'lucide-react';\nconst Icon = ({ name, ...props }) => {\n  const LucideIcon = icons[name];\n  return <LucideIcon {...props} />;\n};`} 
                      language="jsx"
                      title="Icon.jsx"
                    />
                  </div>
                </div>
              </ComponentCard>
              
              <ComponentCard 
                title="Recursos Oficiais"
                description="Links úteis para a documentação oficial e recursos do Lucide Icons."
              >
                <ul className="list-disc pl-5 space-y-3 text-gray-600">
                  <li>Site Oficial Lucide - Navegue e busque ícones</li>
                  <li>GitHub Lucide - Repositório oficial</li>
                  <li>Documentação lucide-react - Guia completo de uso com React</li>
                </ul>
              </ComponentCard>
            </div>
          )}

          {activeTab === 'acessibilidade' && (
            <div className="space-y-6">
              <ComponentCard 
                title="Acessibilidade" 
                description="Garantir que os ícones sejam acessíveis para todos os usuários é fundamental para uma boa experiência de usuário."
              >
                <div className="space-y-8">
                  <div className="rounded-lg border p-6">
                    <h3 className="text-lg font-medium mb-3">Texto Alternativo</h3>
                    <p className="text-gray-600 mb-4">Sempre forneça texto alternativo para ícones para garantir que leitores de tela possam interpretar corretamente:</p>
                    
                    <CodeBlock 
                      code={`<img src="icon.svg" alt="Descrição clara da função do ícone">`} 
                      language="html"
                    />
                  </div>

                  <div className="rounded-lg border p-6">
                    <h3 className="text-lg font-medium mb-3">Contraste</h3>
                    <p className="text-gray-600 mb-4">Garanta que haja contraste suficiente entre o ícone e o fundo:</p>
                    
                    <div className="flex items-start space-x-6 mb-2">
                      <div className="flex flex-col items-center">
                        <div className="bg-green-100 p-4 rounded-md flex items-center justify-center mb-2">
                          <User className="text-green-700 h-6 w-6" />
                        </div>
                        <span className="text-sm text-green-700 font-medium">Bom contraste</span>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <div className="bg-gray-200 p-4 rounded-md flex items-center justify-center mb-2">
                          <User className="text-gray-400 h-6 w-6" />
                        </div>
                        <span className="text-sm text-red-500 font-medium">Contraste insuficiente</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-6">
                    <h3 className="text-lg font-medium mb-3">Nunca Use Apenas Ícones</h3>
                    <p className="text-gray-600 mb-4">Para ações importantes, não confie apenas em ícones. Adicione texto descritivo:</p>
                    
                    <div className="flex items-start space-x-6 mb-2">
                      <div className="flex flex-col items-center">
                        <Button 
                          variant="outline-secondary"
                          className="mb-2"
                          startIcon={<AlertCircle size={16} className="text-info-main" />}
                        >
                          Reportar problema
                        </Button>
                        <span className="text-sm text-green-700 font-medium">Preferível</span>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <Button 
                          variant="outline-secondary"
                          className="mb-2 w-10 p-0"
                          startIcon={<AlertCircle size={16} className="text-info-main" />}
                        />
                        <span className="text-sm text-red-500 font-medium">Apenas se o significado for óbvio</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-6">
                    <h3 className="text-lg font-medium mb-3">Tamanho Adequado</h3>
                    <p className="text-gray-600 mb-4">Ícones muito pequenos podem ser difíceis de identificar para usuários com deficiência visual:</p>
                    
                    <div className="flex items-start space-x-10 mb-2">
                      <div className="flex flex-col items-center">
                        <Package className="h-4 w-4 mb-2" />
                        <span className="text-sm text-red-500 font-medium">Muito pequeno</span>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <Package className="h-6 w-6 mb-2" />
                        <span className="text-sm text-green-700 font-medium">Tamanho mínimo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ComponentCard>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Icons;
