
import React from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import Header from '@/components/library-components/Header';
import { 
  Bell, 
  ShoppingCart,
  User,
  Settings,
  Mail,
  ChevronDown
} from 'lucide-react';
import ComponentCard from '@/components/ComponentCard';

const StackedLists = () => {
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
      
      <div className="mt-8 grid grid-cols-1 gap-8">
        <ComponentCard 
          title="Lista de notificações" 
          description="Uma lista de notificações empilhadas com ícones, títulos, descrições e timestamp."
          code={notificationsListExample}
          showCodeBlockInside={true}
          codeBlockTitle="Implementação da Lista de Notificações"
          codeBlockLanguage="tsx"
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
          showCodeBlockInside={true}
          codeBlockTitle="Implementação da Lista de Usuários"
          codeBlockLanguage="tsx"
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
          showCodeBlockInside={true}
          codeBlockTitle="Implementação da Lista de Configurações"
          codeBlockLanguage="tsx"
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
    </div>
  );
};

export default StackedLists;
