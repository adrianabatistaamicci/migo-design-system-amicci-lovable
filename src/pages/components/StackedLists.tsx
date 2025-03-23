
import React, { useState } from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import Header from '@/components/library-components/Header';
import { TailwindTabs } from '@/components/ui/tabs';
import { 
  List, 
  Users, 
  Bell, 
  ShoppingCart,
  User,
  Settings,
  Mail,
  Code,
  Copy,
  CheckCheck,
  ChevronRight,
  AlertCircle,
  Clock,
  CheckCircle
} from 'lucide-react';
import CodeBlock from '@/components/CodeBlock';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';

const StackedLists = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showCode, setShowCode] = useState(false);
  const [showNotificationListCode, setShowNotificationListCode] = useState(false);
  const [showSettingsListCode, setShowSettingsListCode] = useState(false);
  const [showUserListCode, setShowUserListCode] = useState(false);

  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Stacked Lists"
        description="Utilize listas empilhadas para exibir sequências de informações, como notificações, atividades ou configurações. Esse padrão proporciona uma apresentação clara e consistente para conjuntos de dados relacionados."
        type="foundations"
        className="mb-8"
      />
      
      <TailwindTabs 
        defaultValue="overview" 
        className="mt-8"
        tabs={[
          { name: 'Visão geral', value: 'overview' },
          { name: 'Exemplos', value: 'examples' },
          { name: 'Uso', value: 'usage' }
        ]}
        variant="pillsGray"
        onChange={(value) => setActiveTab(value)}
      />

      <div className="mt-8">
        <div className="rounded-lg border border-gray-200 overflow-hidden">
          {activeTab === 'overview' && (
            <div className="p-6">
              <div className="max-w-2xl">
                <h2 className="text-xl font-medium mb-4">O que são Stacked Lists?</h2>
                <p className="mb-4 text-gray-700">
                  Stacked Lists (Listas Empilhadas) são elementos de interface que organizam itens relacionados em uma sequência vertical com separadores consistentes, 
                  proporcionando uma visualização clara e organizada de dados como notificações, configurações ou usuários.
                </p>
                
                <h3 className="text-lg font-medium mb-2 mt-6">Quando usar</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Para exibir itens que compartilham a mesma estrutura</li>
                  <li>Quando precisar mostrar uma série de informações relacionadas</li>
                  <li>Para listas de notificações, atividades ou configurações</li>
                  <li>Para interfaces que exigem clareza e consistência na exibição de dados</li>
                </ul>

                <h3 className="text-lg font-medium mb-2 mt-6">Anatomia básica</h3>
                <div className="w-full border border-gray-200 rounded-lg p-4 bg-gray-50 mt-2">
                  <img 
                    src="https://placehold.co/600x200/e5e7eb/a3a3a3?text=Anatomia+de+Stacked+Lists" 
                    alt="Anatomia de Stacked Lists"
                    className="w-full rounded" 
                  />
                </div>
                
                <div className="flex items-center gap-3 mt-6">
                  <div className="h-8 w-8 rounded-full bg-primary-main flex items-center justify-center text-white">1</div>
                  <p className="text-gray-700"><strong>Contêiner:</strong> Envolve toda a lista, geralmente com bordas e cantos arredondados</p>
                </div>
                
                <div className="flex items-center gap-3 mt-3">
                  <div className="h-8 w-8 rounded-full bg-primary-main flex items-center justify-center text-white">2</div>
                  <p className="text-gray-700"><strong>Divisores:</strong> Separam visualmente cada item da lista para melhor legibilidade</p>
                </div>
                
                <div className="flex items-center gap-3 mt-3">
                  <div className="h-8 w-8 rounded-full bg-primary-main flex items-center justify-center text-white">3</div>
                  <p className="text-gray-700"><strong>Item:</strong> Cada entrada na lista, com estrutura consistente e espaçamento adequado</p>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'examples' && (
            <div className="p-6">
              <div className="space-y-10">
                {/* Notification List Example */}
                <div>
                  <h2 className="text-lg font-medium mb-4">Lista de Notificações</h2>
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="divide-y divide-gray-200">
                      <div className="p-4 flex">
                        <div className="flex-shrink-0 mr-4">
                          <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                            <AlertCircle className="h-5 w-5 text-red-600" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">
                            Atualização de sistema necessária
                          </p>
                          <p className="text-sm text-gray-500">
                            Uma nova versão do sistema está disponível. Atualize para aproveitar os novos recursos.
                          </p>
                          <div className="mt-2">
                            <span className="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700">
                              Importante
                            </span>
                          </div>
                        </div>
                        <div className="flex-shrink-0 self-center ml-4">
                          <span className="text-xs text-gray-500">5min atrás</span>
                        </div>
                      </div>
                      
                      <div className="p-4 flex">
                        <div className="flex-shrink-0 mr-4">
                          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <Users className="h-5 w-5 text-blue-600" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">
                            Nova solicitação de amizade
                          </p>
                          <p className="text-sm text-gray-500">
                            Carlos Mendes enviou uma solicitação de conexão para você.
                          </p>
                          <div className="mt-2 space-x-2">
                            <Button size="sm" variant="default">Aceitar</Button>
                            <Button size="sm" variant="outline-secondary">Recusar</Button>
                          </div>
                        </div>
                        <div className="flex-shrink-0 self-center ml-4">
                          <span className="text-xs text-gray-500">1h atrás</span>
                        </div>
                      </div>
                      
                      <div className="p-4 flex">
                        <div className="flex-shrink-0 mr-4">
                          <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">
                            Tarefa concluída
                          </p>
                          <p className="text-sm text-gray-500">
                            A tarefa "Finalizar relatório Q3" foi marcada como concluída.
                          </p>
                        </div>
                        <div className="flex-shrink-0 self-center ml-4">
                          <span className="text-xs text-gray-500">Ontem</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-2 border-t border-gray-200">
                    <button 
                      onClick={() => setShowNotificationListCode(!showNotificationListCode)}
                      className="w-full flex items-center justify-between px-4 py-2 bg-gray-50"
                    >
                      <div className="flex items-center space-x-2">
                        <Code size={16} className="text-gray-500" />
                        <span className="text-sm font-medium text-gray-700">
                          {showNotificationListCode ? "Hide code" : "Show code"}
                        </span>
                      </div>
                      <div>
                        <Copy size={16} className="text-gray-500" />
                      </div>
                    </button>
                  </div>
                  
                  {showNotificationListCode && (
                    <div className="border-t border-gray-200">
                      <CodeBlock 
                        code={`<div className="border border-gray-200 rounded-lg overflow-hidden">
  <div className="divide-y divide-gray-200">
    <div className="p-4 flex">
      <div className="flex-shrink-0 mr-4">
        <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
          <AlertCircle className="h-5 w-5 text-red-600" />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900">
          Atualização de sistema necessária
        </p>
        <p className="text-sm text-gray-500">
          Uma nova versão do sistema está disponível. Atualize para aproveitar os novos recursos.
        </p>
        <div className="mt-2">
          <span className="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700">
            Importante
          </span>
        </div>
      </div>
      <div className="flex-shrink-0 self-center ml-4">
        <span className="text-xs text-gray-500">5min atrás</span>
      </div>
    </div>
    
    {/* Additional notification items */}
  </div>
</div>`} 
                        language="jsx" 
                      />
                    </div>
                  )}
                </div>
                
                {/* Settings List Example */}
                <div>
                  <h2 className="text-lg font-medium mb-4">Lista de Configurações</h2>
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="divide-y divide-gray-200">
                      <div className="px-4 py-5 sm:p-6">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="text-base font-medium leading-6 text-gray-900">
                              Notificações por e-mail
                            </h3>
                            <div className="mt-1 max-w-xl text-sm text-gray-500">
                              <p>Receba atualizações sobre novidades e recursos do sistema.</p>
                            </div>
                          </div>
                          <div className="ml-5 flex-shrink-0">
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                          </div>
                        </div>
                      </div>
                      
                      <div className="px-4 py-5 sm:p-6">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="text-base font-medium leading-6 text-gray-900">
                              Autenticação de dois fatores
                            </h3>
                            <div className="mt-1 max-w-xl text-sm text-gray-500">
                              <p>Adicione uma camada extra de segurança à sua conta.</p>
                            </div>
                          </div>
                          <div className="ml-5 flex-shrink-0">
                            <Button variant="outline-secondary" size="sm">
                              Configurar
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="px-4 py-5 sm:p-6">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="text-base font-medium leading-6 text-gray-900">
                              Privacidade do perfil
                            </h3>
                            <div className="mt-1 max-w-xl text-sm text-gray-500">
                              <p>Defina quem pode ver seu perfil e informações de contato.</p>
                            </div>
                          </div>
                          <div className="ml-5 flex-shrink-0">
                            <ChevronRight className="h-5 w-5 text-gray-400" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-2 border-t border-gray-200">
                    <button 
                      onClick={() => setShowSettingsListCode(!showSettingsListCode)}
                      className="w-full flex items-center justify-between px-4 py-2 bg-gray-50"
                    >
                      <div className="flex items-center space-x-2">
                        <Code size={16} className="text-gray-500" />
                        <span className="text-sm font-medium text-gray-700">
                          {showSettingsListCode ? "Hide code" : "Show code"}
                        </span>
                      </div>
                      <div>
                        <Copy size={16} className="text-gray-500" />
                      </div>
                    </button>
                  </div>
                  
                  {showSettingsListCode && (
                    <div className="border-t border-gray-200">
                      <CodeBlock 
                        code={`<div className="border border-gray-200 rounded-lg overflow-hidden">
  <div className="divide-y divide-gray-200">
    <div className="px-4 py-5 sm:p-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-base font-medium leading-6 text-gray-900">
            Notificações por e-mail
          </h3>
          <div className="mt-1 max-w-xl text-sm text-gray-500">
            <p>Receba atualizações sobre novidades e recursos do sistema.</p>
          </div>
        </div>
        <div className="ml-5 flex-shrink-0">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" defaultChecked />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
    </div>
    
    {/* Additional settings items */}
  </div>
</div>`} 
                        language="jsx" 
                      />
                    </div>
                  )}
                </div>
                
                {/* User List Example */}
                <div>
                  <h2 className="text-lg font-medium mb-4">Lista de Usuários</h2>
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <ul role="list" className="divide-y divide-gray-200">
                      <li className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <Avatar className="h-10 w-10">
                                <div className="bg-blue-100 h-full w-full flex items-center justify-center rounded-full text-blue-600 font-medium">JD</div>
                              </Avatar>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                João Dias
                              </div>
                              <div className="text-sm text-gray-500">
                                joao.dias@exemplo.com
                              </div>
                            </div>
                          </div>
                          <div>
                            <Badge className="bg-green-100 text-green-700">
                              Admin
                            </Badge>
                          </div>
                        </div>
                      </li>
                      
                      <li className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <Avatar className="h-10 w-10">
                                <div className="bg-purple-100 h-full w-full flex items-center justify-center rounded-full text-purple-600 font-medium">MS</div>
                              </Avatar>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                Maria Silva
                              </div>
                              <div className="text-sm text-gray-500">
                                maria.silva@exemplo.com
                              </div>
                            </div>
                          </div>
                          <div>
                            <Badge className="bg-blue-100 text-blue-700">
                              Editor
                            </Badge>
                          </div>
                        </div>
                      </li>
                      
                      <li className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <Avatar className="h-10 w-10">
                                <div className="bg-amber-100 h-full w-full flex items-center justify-center rounded-full text-amber-600 font-medium">PL</div>
                              </Avatar>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                Pedro Lima
                              </div>
                              <div className="text-sm text-gray-500">
                                pedro.lima@exemplo.com
                              </div>
                            </div>
                          </div>
                          <div>
                            <Badge className="bg-gray-100 text-gray-700">
                              Visualizador
                            </Badge>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-2 border-t border-gray-200">
                    <button 
                      onClick={() => setShowUserListCode(!showUserListCode)}
                      className="w-full flex items-center justify-between px-4 py-2 bg-gray-50"
                    >
                      <div className="flex items-center space-x-2">
                        <Code size={16} className="text-gray-500" />
                        <span className="text-sm font-medium text-gray-700">
                          {showUserListCode ? "Hide code" : "Show code"}
                        </span>
                      </div>
                      <div>
                        <Copy size={16} className="text-gray-500" />
                      </div>
                    </button>
                  </div>
                  
                  {showUserListCode && (
                    <div className="border-t border-gray-200">
                      <CodeBlock 
                        code={`<div className="border border-gray-200 rounded-lg overflow-hidden">
  <ul role="list" className="divide-y divide-gray-200">
    <li className="px-4 py-4 sm:px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Avatar className="h-10 w-10">
              <div className="bg-blue-100 h-full w-full flex items-center justify-center rounded-full text-blue-600 font-medium">JD</div>
            </Avatar>
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              João Dias
            </div>
            <div className="text-sm text-gray-500">
              joao.dias@exemplo.com
            </div>
          </div>
        </div>
        <div>
          <Badge className="bg-green-100 text-green-700">
            Admin
          </Badge>
        </div>
      </div>
    </li>
    
    {/* Additional user items */}
  </ul>
</div>`} 
                        language="jsx" 
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'usage' && (
            <div className="p-6">
              <div className="max-w-2xl">
                <h2 className="text-xl font-medium mb-4">Diretrizes de Uso</h2>
                
                <h3 className="text-lg font-medium mb-2 mt-6">Boas práticas</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Mantenha uma estrutura consistente para todos os itens da lista</li>
                  <li>Use separadores (dividers) entre os itens para melhorar a legibilidade</li>
                  <li>Forneça feedback visual para itens interativos (hover, active states)</li>
                  <li>Inclua ações claras quando necessário (botões, ícones, etc.)</li>
                  <li>Use espaçamento adequado para melhorar a leitura e hierarquia</li>
                </ul>
                
                <h3 className="text-lg font-medium mb-2 mt-6">Acessibilidade</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Use a tag semântica apropriada (ul/li para listas)</li>
                  <li>Garanta contraste suficiente entre texto e fundo</li>
                  <li>Forneça estados de foco visíveis para elementos interativos</li>
                  <li>Inclua texto alternativo para ícones ou imagens</li>
                  <li>Verifique se a navegação por teclado funciona adequadamente</li>
                </ul>
                
                <h3 className="text-lg font-medium mb-2 mt-6">Responsividade</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Adapte o layout para diferentes tamanhos de tela</li>
                  <li>Considere ocultar informações menos importantes em telas menores</li>
                  <li>Ajuste o espaçamento conforme necessário para dispositivos móveis</li>
                </ul>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <AlertCircle className="h-5 w-5 text-blue-500" aria-hidden="true" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-blue-700">
                        As listas empilhadas são um padrão versátil que pode ser personalizado para atender a diferentes necessidades de design, mantendo a consistência visual.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-4 border rounded-lg overflow-hidden">
          <button 
            onClick={() => setShowCode(!showCode)}
            className="w-full flex items-center justify-between px-4 py-2 bg-gray-50 border-b border-gray-200"
          >
            <div className="flex items-center space-x-2">
              <Code size={16} className="text-gray-500" />
              <span className="text-sm font-medium text-gray-700">
                {showCode ? "Hide code" : "Show code"}
              </span>
            </div>
            <div>
              <Copy size={16} className="text-gray-500" />
            </div>
          </button>
          
          {showCode && (
            <div className="p-4 bg-gray-50">
              <CodeBlock 
                code={`
// Example of a stacked list component
import React from 'react';

const StackedList = ({ items }) => {
  return (
    <ul className="divide-y divide-gray-200 border border-gray-200 rounded-lg">
      {items.map((item, index) => (
        <li key={index} className="p-4 hover:bg-gray-50 flex justify-between items-center">
          <div>
            <h4 className="font-medium text-gray-900">{item.title}</h4>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>
          {item.action}
        </li>
      ))}
    </ul>
  );
};

export default StackedList;
`} 
                language="jsx" 
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StackedLists;

