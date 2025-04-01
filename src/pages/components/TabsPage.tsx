
import React from 'react';
import Header from '@/components/library-components/Header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

const TabsPage = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Tabs"
        description="Componentes de navegação com abas para organizar conteúdo relacionado"
        type="components"
      />
      
      <div className="mt-8">
        <p className="text-gray-600 mb-6">
          Tabs (abas) são componentes de navegação que permitem organizar e alternar entre diferentes seções de conteúdo relacionado 
          em um mesmo espaço, sem necessidade de navegar para outra página.
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                Esta seção está em desenvolvimento com exemplos avançados. Por enquanto, são apresentados exemplos básicos.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-medium mt-8 mb-4">Exemplos de Tabs</h2>
        
        <div className="space-y-8 mb-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-3">Tabs Padrão</h3>
              
              <Tabs defaultValue="account" className="w-full">
                <TabsList>
                  <TabsTrigger value="account">Conta</TabsTrigger>
                  <TabsTrigger value="password">Senha</TabsTrigger>
                  <TabsTrigger value="settings">Configurações</TabsTrigger>
                </TabsList>
                <TabsContent value="account" className="p-4 mt-2">
                  <h3 className="text-lg font-medium">Configurações de Conta</h3>
                  <p className="text-gray-600 mt-2">
                    Gerencie suas preferências de conta, informações pessoais e notificações.
                  </p>
                </TabsContent>
                <TabsContent value="password" className="p-4 mt-2">
                  <h3 className="text-lg font-medium">Alterar Senha</h3>
                  <p className="text-gray-600 mt-2">
                    Atualize sua senha e configure opções de segurança adicionais.
                  </p>
                </TabsContent>
                <TabsContent value="settings" className="p-4 mt-2">
                  <h3 className="text-lg font-medium">Configurações Gerais</h3>
                  <p className="text-gray-600 mt-2">
                    Ajuste suas preferências de sistema, tema e idioma.
                  </p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-3">Tabs com Conteúdo Complexo</h3>
              
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">Visão Geral</TabsTrigger>
                  <TabsTrigger value="analytics">Análises</TabsTrigger>
                  <TabsTrigger value="reports">Relatórios</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="p-4 mt-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border rounded p-4">
                      <h4 className="text-base font-medium">Resumo</h4>
                      <p className="text-sm text-gray-600 mt-2">
                        Visão consolidada das principais métricas e atividades.
                      </p>
                    </div>
                    <div className="border rounded p-4">
                      <h4 className="text-base font-medium">Status</h4>
                      <p className="text-sm text-gray-600 mt-2">
                        Informações sobre o estado atual do sistema.
                      </p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="analytics" className="p-4 mt-2">
                  <div className="border rounded p-4">
                    <h4 className="text-base font-medium">Análises Detalhadas</h4>
                    <p className="text-sm text-gray-600 mt-2">
                      Gráficos e análises detalhadas das métricas do sistema.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="reports" className="p-4 mt-2">
                  <div className="border rounded p-4">
                    <h4 className="text-base font-medium">Relatórios Disponíveis</h4>
                    <p className="text-sm text-gray-600 mt-2">
                      Lista de relatórios que podem ser gerados e exportados.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
        
        <h2 className="text-xl font-medium mt-10 mb-4">Quando utilizar</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
          <li>Para organizar conteúdo relacionado em um mesmo contexto</li>
          <li>Quando o usuário precisa alternar entre diferentes visualizações sem perder o contexto</li>
          <li>Para economizar espaço na interface, mostrando apenas uma seção de conteúdo por vez</li>
          <li>Em painéis de configuração com múltiplas categorias</li>
          <li>Em formulários longos divididos em seções lógicas</li>
        </ul>
        
        <h2 className="text-xl font-medium mt-10 mb-4">Considerações de design</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Use rótulos claros e concisos para cada aba</li>
          <li>Limite o número de abas para evitar sobrecarga cognitiva</li>
          <li>Mantenha o conteúdo de cada aba coeso e relacionado</li>
          <li>Forneça feedback visual claro sobre qual aba está ativa</li>
          <li>Considere o comportamento responsivo das abas em diferentes tamanhos de tela</li>
        </ul>

        <Card className="mt-10">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-2">Próximos passos</h3>
            <p className="text-gray-600">
              Em breve serão adicionados exemplos mais avançados de tabs, como abas com ícones, 
              variações de estilo e padrões de uso para casos específicos.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TabsPage;
