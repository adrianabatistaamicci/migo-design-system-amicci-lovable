
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
  ChevronDown
} from 'lucide-react';
import ComponentCard from '@/components/ComponentCard';

const StackedLists = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Example 1: Notifications List
  const notificationsListExample = `
<div className="divide-y divide-gray-200">
  <div className="py-4 flex items-start">
    <div className="flex-shrink-0 pt-0.5">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-50">
        <Bell className="h-5 w-5 text-primary-500" />
      </span>
    </div>
    <div className="ml-3 flex-1">
      <p className="text-sm font-medium text-gray-900">New feature available</p>
      <p className="mt-1 text-sm text-gray-500">The new analytics dashboard is now available to all users.</p>
      <div className="mt-2 text-sm text-gray-500">2 hours ago</div>
    </div>
    <div className="ml-4 flex flex-shrink-0">
      <button className="inline-flex text-gray-400 hover:text-gray-500">
        <span className="sr-only">Close</span>
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
  <div className="py-4 flex items-start">
    <div className="flex-shrink-0 pt-0.5">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-50">
        <ShoppingCart className="h-5 w-5 text-green-500" />
      </span>
    </div>
    <div className="ml-3 flex-1">
      <p className="text-sm font-medium text-gray-900">Order completed</p>
      <p className="mt-1 text-sm text-gray-500">Your order #2563 has been shipped and will arrive on Friday.</p>
      <div className="mt-2 text-sm text-gray-500">1 day ago</div>
    </div>
  </div>
</div>`;

  // Example 2: Users List
  const usersListExample = `
<div className="divide-y divide-gray-200">
  {[
    { id: 1, name: 'Jane Cooper', email: 'jane.cooper@example.com', role: 'Admin' },
    { id: 2, name: 'Cody Fisher', email: 'cody.fisher@example.com', role: 'Editor' },
    { id: 3, name: 'Esther Howard', email: 'esther.howard@example.com', role: 'Viewer' }
  ].map((person) => (
    <div key={person.id} className="py-4 flex items-center">
      <div className="flex-shrink-0">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-500 text-white">
          <User className="h-5 w-5" />
        </span>
      </div>
      <div className="ml-3 flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate">{person.name}</p>
        <p className="text-sm text-gray-500 truncate">{person.email}</p>
      </div>
      <div className="ml-4 flex-shrink-0">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          {person.role}
        </span>
      </div>
    </div>
  ))}
</div>`;

  // Example 3: Settings List
  const settingsListExample = `
<div className="divide-y divide-gray-200">
  <div className="py-4 flex justify-between items-center">
    <div className="flex items-center">
      <div className="flex-shrink-0">
        <Bell className="h-6 w-6 text-gray-400" />
      </div>
      <div className="ml-3">
        <p className="text-base font-medium text-gray-900">Notifications</p>
        <p className="text-sm text-gray-500">Control how you're notified about activity</p>
      </div>
    </div>
    <div>
      <ChevronDown className="h-5 w-5 text-gray-400" />
    </div>
  </div>
  <div className="py-4 flex justify-between items-center">
    <div className="flex items-center">
      <div className="flex-shrink-0">
        <Settings className="h-6 w-6 text-gray-400" />
      </div>
      <div className="ml-3">
        <p className="text-base font-medium text-gray-900">Account settings</p>
        <p className="text-sm text-gray-500">Manage your account information and preferences</p>
      </div>
    </div>
    <div>
      <ChevronDown className="h-5 w-5 text-gray-400" />
    </div>
  </div>
  <div className="py-4 flex justify-between items-center">
    <div className="flex items-center">
      <div className="flex-shrink-0">
        <Mail className="h-6 w-6 text-gray-400" />
      </div>
      <div className="ml-3">
        <p className="text-base font-medium text-gray-900">Email settings</p>
        <p className="text-sm text-gray-500">Manage the emails you receive and how often</p>
      </div>
    </div>
    <div>
      <ChevronDown className="h-5 w-5 text-gray-400" />
    </div>
  </div>
</div>`;

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

      {activeTab === 'overview' && (
        <div className="mt-8">
          <div className="prose prose-gray max-w-none">
            <p>Listas empilhadas são componentes de UI que exibem coleções de itens em formato de lista vertical, onde cada item é posicionado abaixo do anterior. São úteis para apresentar conjuntos de dados relacionados de forma ordenada e clara.</p>
            
            <h3>Características principais</h3>
            <ul>
              <li><strong>Estrutura consistente:</strong> Cada item na lista segue o mesmo padrão de layout, facilitando a leitura.</li>
              <li><strong>Divididos por separadores:</strong> Linhas ou espaçamentos claros separam cada item, melhorando a legibilidade.</li>
              <li><strong>Conteúdo flexível:</strong> Podem conter texto, ícones, imagens e outros elementos interativos.</li>
              <li><strong>Altamente adaptáveis:</strong> Funcionam bem em diferentes tamanhos de tela e dispositivos.</li>
            </ul>
            
            <h3>Casos de uso comuns</h3>
            <ul>
              <li>Listas de notificações</li>
              <li>Histórico de atividades</li>
              <li>Listagens de usuários</li>
              <li>Menus de configurações</li>
              <li>Resultados de pesquisa</li>
              <li>Listagens de produtos</li>
            </ul>
          </div>
        </div>
      )}
      
      {activeTab === 'examples' && (
        <div className="mt-8 grid grid-cols-1 gap-8">
          <ComponentCard 
            title="Lista de notificações" 
            description="Uma lista de notificações empilhadas com ícones, títulos, descrições e timestamp."
            code={notificationsListExample}
            className="w-full"
          >
            <div className="p-6 max-w-2xl mx-auto w-full">
              <div className="divide-y divide-gray-200">
                <div className="py-4 flex items-start">
                  <div className="flex-shrink-0 pt-0.5">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-50">
                      <Bell className="h-5 w-5 text-primary-500" />
                    </span>
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">Nova funcionalidade disponível</p>
                    <p className="mt-1 text-sm text-gray-500">O novo painel de análise agora está disponível para todos os usuários.</p>
                    <div className="mt-2 text-sm text-gray-500">2 horas atrás</div>
                  </div>
                  <div className="ml-4 flex flex-shrink-0">
                    <button className="inline-flex text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Fechar</span>
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="py-4 flex items-start">
                  <div className="flex-shrink-0 pt-0.5">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-50">
                      <ShoppingCart className="h-5 w-5 text-green-500" />
                    </span>
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">Pedido concluído</p>
                    <p className="mt-1 text-sm text-gray-500">Seu pedido #2563 foi enviado e chegará na sexta-feira.</p>
                    <div className="mt-2 text-sm text-gray-500">1 dia atrás</div>
                  </div>
                </div>
              </div>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Lista de usuários" 
            description="Uma lista de usuários com avatar, nome, email e papel/função."
            code={usersListExample}
            className="w-full"
          >
            <div className="p-6 max-w-2xl mx-auto w-full">
              <div className="divide-y divide-gray-200">
                {[
                  { id: 1, name: 'Jane Cooper', email: 'jane.cooper@example.com', role: 'Admin' },
                  { id: 2, name: 'Cody Fisher', email: 'cody.fisher@example.com', role: 'Editor' },
                  { id: 3, name: 'Esther Howard', email: 'esther.howard@example.com', role: 'Viewer' }
                ].map((person) => (
                  <div key={person.id} className="py-4 flex items-center">
                    <div className="flex-shrink-0">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-500 text-white">
                        <User className="h-5 w-5" />
                      </span>
                    </div>
                    <div className="ml-3 flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{person.name}</p>
                      <p className="text-sm text-gray-500 truncate">{person.email}</p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {person.role}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Lista de configurações" 
            description="Uma lista de opções de configurações com ícones e descrições."
            code={settingsListExample}
            className="w-full"
          >
            <div className="p-6 max-w-2xl mx-auto w-full">
              <div className="divide-y divide-gray-200">
                <div className="py-4 flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Bell className="h-6 w-6 text-gray-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium text-gray-900">Notificações</p>
                      <p className="text-sm text-gray-500">Controle como você é notificado sobre atividades</p>
                    </div>
                  </div>
                  <div>
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
                <div className="py-4 flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Settings className="h-6 w-6 text-gray-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium text-gray-900">Configurações da conta</p>
                      <p className="text-sm text-gray-500">Gerencie as informações e preferências da sua conta</p>
                    </div>
                  </div>
                  <div>
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
                <div className="py-4 flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Mail className="h-6 w-6 text-gray-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium text-gray-900">Configurações de email</p>
                      <p className="text-sm text-gray-500">Gerencie os emails que você recebe e com que frequência</p>
                    </div>
                  </div>
                  <div>
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </ComponentCard>
        </div>
      )}
      
      {activeTab === 'usage' && (
        <div className="mt-8">
          <div className="prose prose-gray max-w-none">
            <h3>Melhores práticas para listas empilhadas</h3>
            
            <h4>Consistência visual</h4>
            <p>Mantenha um padrão consistente de design em todos os itens da lista. Isso inclui espaçamento, alinhamento e tratamento visual dos elementos.</p>
            
            <h4>Hierarquia de informações</h4>
            <p>Organize o conteúdo de cada item com uma hierarquia clara. Coloque as informações mais importantes (como títulos) em destaque e use tipografia e cores para distinguir diferentes tipos de informação.</p>
            
            <h4>Separadores claros</h4>
            <p>Use linhas de divisão ou espaçamento adequado entre os itens para melhorar a legibilidade e a estrutura da lista.</p>
            
            <h4>Feedback interativo</h4>
            <p>Para listas interativas, forneça feedback visual claro (como estados de hover, focus e active) para indicar que os itens são clicáveis.</p>
            
            <h4>Responsividade</h4>
            <p>Certifique-se de que a lista se adapte bem a diferentes tamanhos de tela, especialmente em dispositivos móveis onde o espaço é limitado.</p>
            
            <h4>Espaçamento adequado</h4>
            <p>Use espaçamento suficiente dentro e entre os itens da lista para evitar uma aparência congestionada e melhorar a legibilidade.</p>
            
            <h3>Quando usar listas empilhadas</h3>
            <ul>
              <li>Para exibir coleções de itens relacionados de forma ordenada</li>
              <li>Quando cada item contém múltiplas informações que precisam ser agrupadas</li>
              <li>Para interfaces que requerem uma navegação clara e estruturada</li>
              <li>Quando é necessário apresentar informações detalhadas de forma consistente</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default StackedLists;
