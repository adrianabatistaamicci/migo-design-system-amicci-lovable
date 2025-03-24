
import React, { useState } from 'react';
import { TailwindTabs } from "@/components/ui/tabs";
import Header from '@/components/library-components/Header';
import ComponentCard from '@/components/ComponentCard';
import {
  User,
  Settings,
  Eye,
  Copy,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Icons = () => {
  const [activeTab, setActiveTab] = useState('scale');

  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Ícones" 
        description="Usamos ícones Lucide como biblioteca oficial"
        type="foundations"
      />

      <div className="mt-8">
        <TailwindTabs 
          defaultValue="scale"
          tabs={[
            { name: 'Escala', value: 'scale' },
            { name: 'Acessibilidade', value: 'accessibility' }
          ]}
          variant="pillsGray"
          onChange={value => setActiveTab(value)}
        />
        
        <div className="mt-6">
          {activeTab === 'scale' && (
            <div className="space-y-6">
              <ComponentCard title="Lucide Icons" description="Os ícones Lucide são um conjunto moderno e livre de ícones de código aberto projetados para interfaces digitais.">
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Os ícones Lucide são simples, modernos e amigáveis. Eles são fáceis de integrar em projetos React e oferecem alto grau de customização.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <Card className="flex flex-col items-center text-center p-6">
                      <CardContent className="pt-6">
                        <User className="h-10 w-10 mb-4" />
                        <h3 className="text-lg font-medium mb-2">Simples</h3>
                        <p className="text-gray-500 text-sm">
                          Design limpo e minimalista que funciona bem em tamanhos pequenos
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="flex flex-col items-center text-center p-6">
                      <CardContent className="pt-6">
                        <Settings className="h-10 w-10 mb-4" />
                        <h3 className="text-lg font-medium mb-2">Consistente</h3>
                        <p className="text-gray-500 text-sm">
                          Estilo uniforme em todos os ícones do sistema
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="flex flex-col items-center text-center p-6">
                      <CardContent className="pt-6">
                        <Eye className="h-10 w-10 mb-4" />
                        <h3 className="text-lg font-medium mb-2">Significativo</h3>
                        <p className="text-gray-500 text-sm">
                          Metáforas reconhecíveis que comunicam rapidamente o significado
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="bg-sky-50 border border-sky-100 rounded-lg p-4 flex items-center justify-between mt-6">
                    <p className="text-gray-600">A biblioteca completa pode ser acessada no site oficial.</p>
                    <Button 
                      variant="default" 
                      className="bg-teal-500 hover:bg-teal-600"
                      onClick={() => window.open('https://lucide.dev', '_blank')}
                    >
                      Acessar Lucide Icons
                    </Button>
                  </div>
                </div>
              </ComponentCard>

              <ComponentCard title="Guia de Integração" description="Existem várias maneiras de integrar os ícones Lucide em seu projeto:">
                <div className="space-y-6">
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-medium mb-2">1. Instalação via NPM</h3>
                    <pre className="bg-gray-50 p-3 rounded font-mono text-sm">npm install lucide-react</pre>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-medium mb-2">2. Importação e Uso</h3>
                    <pre className="bg-gray-50 p-3 rounded font-mono text-sm">
{`import { User, Settings } from 'lucide-react';

function MyComponent() {
  return (
    <div>
      <User size={24} />
      <Settings size={24} color="blue" />
    </div>
  );
}`}
                    </pre>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-medium mb-2">3. Personalização</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Tamanho</h4>
                        <div className="flex items-center space-x-4">
                          <User size={16} />
                          <User size={24} />
                          <User size={32} />
                          <User size={48} />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Cor</h4>
                        <div className="flex items-center space-x-4">
                          <User color="#000000" />
                          <User color="#0EA5E9" />
                          <User color="#10B981" />
                          <User color="#EF4444" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ComponentCard>
              
              <ComponentCard title="Recursos Oficiais" description="Links para recursos oficiais e documentação da biblioteca Lucide.">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Site Oficial Lucide - Navegue e busque ícones</li>
                  <li>GitHub Lucide - Repositório oficial</li>
                  <li>Documentação lucide-react - Guia completo de uso com React</li>
                </ul>
              </ComponentCard>
            </div>
          )}

          {activeTab === 'accessibility' && (
            <div className="space-y-6">
              <ComponentCard title="Acessibilidade" description="Garantir que os ícones sejam acessíveis para todos os usuários é fundamental para uma boa experiência de usuário.">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium">Texto Alternativo</h3>
                    <p className="text-gray-600">
                      Sempre forneça texto alternativo para ícones para garantir que leitores de tela possam interpretar corretamente:
                    </p>
                    
                    <pre className="bg-gray-50 p-3 rounded font-mono text-sm">
                      {'<img src="icon.svg" alt="Descrição clara da função do ícone">'}
                    </pre>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-xl font-medium">Contraste</h3>
                    <p className="text-gray-600">
                      Garanta que haja contraste suficiente entre o ícone e o fundo:
                    </p>

                    <div className="flex space-x-4">
                      <div className="text-center">
                        <div className="bg-green-100 p-4 rounded flex justify-center items-center">
                          <User className="text-green-700" />
                        </div>
                        <p className="text-sm mt-2 text-green-700">Bom contraste</p>
                      </div>
                      
                      <div className="text-center">
                        <div className="bg-gray-200 p-4 rounded flex justify-center items-center">
                          <User className="text-gray-300" />
                        </div>
                        <p className="text-sm mt-2 text-red-500">Contraste insuficiente</p>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-xl font-medium">Nunca Use Apenas Ícones</h3>
                    <p className="text-gray-600">
                      Para ações importantes, não confie apenas em ícones. Adicione texto descritivo:
                    </p>
                    
                    <div className="flex space-x-4">
                      <div className="text-center">
                        <Button className="flex items-center space-x-2 bg-green-500 hover:bg-green-600">
                          <CheckCircle2 size={16} />
                          <span>Salvar alterações</span>
                        </Button>
                        <p className="text-sm mt-2 text-green-700">Preferível</p>
                      </div>
                      
                      <div className="text-center">
                        <Button className="bg-gray-500 hover:bg-gray-600">
                          <CheckCircle2 size={16} />
                        </Button>
                        <p className="text-sm mt-2 text-red-500">Apenas se o significado for óbvio</p>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-xl font-medium">Tamanho Adequado</h3>
                    <p className="text-gray-600">
                      Ícones muito pequenos podem ser difíceis de identificar para usuários com deficiência visual:
                    </p>
                    
                    <div className="flex space-x-4">
                      <div className="text-center">
                        <Settings size={12} />
                        <p className="text-sm mt-2 text-red-500">Muito pequeno</p>
                      </div>
                      
                      <div className="text-center">
                        <Settings size={24} />
                        <p className="text-sm mt-2 text-green-700">Tamanho mínimo</p>
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
