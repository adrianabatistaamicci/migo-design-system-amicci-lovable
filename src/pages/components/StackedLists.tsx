
import React, { useState } from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import Header from '@/components/library-components/Header';
import { TailwindTabs } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { 
  List, 
  Users, 
  Bell, 
  ShoppingCart,
  User,
  Settings,
  Mail,
  Clock,
  Code,
  CheckCheck,
  CircleCheck,
  CircleAlert
} from 'lucide-react';
import { cn } from '@/lib/utils';
import CodeBlock from '@/components/CodeBlock';

const StackedLists = () => {
  const [activeTab, setActiveTab] = useState('overview');

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
        <div className="mt-8 space-y-10">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight mb-4">O que são Stacked Lists?</h2>
            <p className="text-gray-700 max-w-3xl">
              Stacked Lists (Listas Empilhadas) são um padrão de design de interface que organiza itens relacionados em uma lista vertical sequencial, onde cada item geralmente contém informações de texto, ícones e, opcionalmente, controles interativos. Esse padrão é ideal para apresentar conjuntos de dados como notificações, mensagens, configurações ou qualquer coleção de itens que compartilhem um formato consistente.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold tracking-tight mb-4">Características principais</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
              <div className="bg-white p-5 rounded-lg border border-gray-200">
                <h3 className="font-medium mb-2 flex items-center gap-2 text-gray-900">
                  <CircleCheck size={18} className="text-green-500" />
                  Layout vertical consistente
                </h3>
                <p className="text-gray-600 text-sm">
                  Itens são empilhados verticalmente, criando um fluxo natural para leitura e interação.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-gray-200">
                <h3 className="font-medium mb-2 flex items-center gap-2 text-gray-900">
                  <CircleCheck size={18} className="text-green-500" />
                  Formato repetitivo
                </h3>
                <p className="text-gray-600 text-sm">
                  Cada item segue um formato visual consistente, facilitando o escaneamento rápido da informação.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-gray-200">
                <h3 className="font-medium mb-2 flex items-center gap-2 text-gray-900">
                  <CircleCheck size={18} className="text-green-500" />
                  Hierarquia de informação
                </h3>
                <p className="text-gray-600 text-sm">
                  Informações primárias e secundárias são organizadas de forma hierárquica dentro de cada item.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-gray-200">
                <h3 className="font-medium mb-2 flex items-center gap-2 text-gray-900">
                  <CircleCheck size={18} className="text-green-500" />
                  Interatividade opcional
                </h3>
                <p className="text-gray-600 text-sm">
                  Itens podem incluir elementos interativos como botões, switches, ou ser inteiramente clicáveis.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold tracking-tight mb-4">Quando usar Stacked Lists</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
              <div className="bg-white p-5 rounded-lg border border-gray-200">
                <h3 className="font-medium mb-2 flex items-center gap-2 text-gray-900">
                  <CircleCheck size={18} className="text-green-500" />
                  Notificações e alertas
                </h3>
                <p className="text-gray-600 text-sm">
                  Para exibir histórico de notificações, alertas ou atualizações do sistema.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-gray-200">
                <h3 className="font-medium mb-2 flex items-center gap-2 text-gray-900">
                  <CircleCheck size={18} className="text-green-500" />
                  Configurações
                </h3>
                <p className="text-gray-600 text-sm">
                  Para organizar opções de configuração com descrições e controles.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-gray-200">
                <h3 className="font-medium mb-2 flex items-center gap-2 text-gray-900">
                  <CircleCheck size={18} className="text-green-500" />
                  Listas de usuários
                </h3>
                <p className="text-gray-600 text-sm">
                  Para exibir informações sobre usuários, membros de equipes ou contatos.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-gray-200">
                <h3 className="font-medium mb-2 flex items-center gap-2 text-gray-900">
                  <CircleCheck size={18} className="text-green-500" />
                  Feeds de atividades
                </h3>
                <p className="text-gray-600 text-sm">
                  Para mostrar históricos de atividades, eventos ou logs de sistema.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === 'examples' && (
        <div className="mt-8 space-y-12">
          <ListExample 
            title="Lista de Notificações" 
            component={<NotificationsList />} 
            code={notificationsListCode}
          />
          
          <ListExample 
            title="Lista de Configurações" 
            component={<SettingsList />} 
            code={settingsListCode}
          />
          
          <ListExample 
            title="Lista de Usuários" 
            component={<UsersList />} 
            code={usersListCode}
          />
        </div>
      )}
      
      {activeTab === 'usage' && (
        <div className="mt-8 space-y-10">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight mb-4">Diretrizes de Uso</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-medium mb-3 text-lg text-gray-900">Estrutura e Consistência</h3>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <CircleCheck size={18} className="text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">Mantenha um formato consistente para todos os itens na lista.</p>
                  </li>
                  <li className="flex gap-2">
                    <CircleCheck size={18} className="text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">Organize a informação em cada item com uma clara hierarquia visual.</p>
                  </li>
                  <li className="flex gap-2">
                    <CircleCheck size={18} className="text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">Use separadores (bordas ou espaçamento) para distinguir visualmente cada item.</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-medium mb-3 text-lg text-gray-900">Interatividade</h3>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <CircleCheck size={18} className="text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">Torne claro quais elementos são interativos através de estados hover e feedback visual.</p>
                  </li>
                  <li className="flex gap-2">
                    <CircleCheck size={18} className="text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">Considere tornar o item inteiro clicável para ações principais.</p>
                  </li>
                  <li className="flex gap-2">
                    <CircleCheck size={18} className="text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">Use ícones ou botões para ações adicionais, posicionados de forma consistente.</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-medium mb-3 text-lg text-gray-900">Acessibilidade</h3>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <CircleCheck size={18} className="text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">Garanta contraste suficiente entre texto e fundo.</p>
                  </li>
                  <li className="flex gap-2">
                    <CircleCheck size={18} className="text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">Inclua mensagens descritivas para leitores de tela nos elementos interativos.</p>
                  </li>
                  <li className="flex gap-2">
                    <CircleCheck size={18} className="text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">Mantenha áreas clicáveis adequadamente dimensionadas (mínimo recomendado: 44×44px).</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-medium mb-3 text-lg text-gray-900">Práticas a Evitar</h3>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <CircleAlert size={18} className="text-red-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">Evite misturar estruturas de layout diferentes dentro da mesma lista.</p>
                  </li>
                  <li className="flex gap-2">
                    <CircleAlert size={18} className="text-red-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">Não sobrecarregue cada item com informações excessivas ou ações demais.</p>
                  </li>
                  <li className="flex gap-2">
                    <CircleAlert size={18} className="text-red-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">Evite listas muito longas sem mecanismos de filtragem ou paginação.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Componente para os exemplos de listas
const ListExample = ({ 
  title, 
  component, 
  code 
}: { 
  title: string; 
  component: React.ReactNode; 
  code: string;
}) => {
  const [showCode, setShowCode] = useState(false);
  
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="p-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => setShowCode(!showCode)}
          className="gap-2"
        >
          {showCode ? <CheckCheck size={16} /> : <Code size={16} />}
          {showCode ? 'Esconder código' : 'Ver código'}
        </Button>
      </div>
      
      <div className="p-6">
        {component}
      </div>
      
      {showCode && (
        <div className="border-t border-gray-200">
          <CodeBlock code={code} language="jsx" />
        </div>
      )}
    </div>
  );
};

// Exemplo: Lista de Notificações
const NotificationsList = () => {
  const notifications = [
    { 
      id: 1, 
      icon: <Bell className="h-5 w-5 text-blue-500" />, 
      title: 'Nova oportunidade disponível', 
      description: 'Uma nova oportunidade foi publicada que corresponde ao seu perfil.',
      time: '5 min atrás',
      isNew: true
    },
    { 
      id: 2, 
      icon: <ShoppingCart className="h-5 w-5 text-green-500" />, 
      title: 'Pedido #12345 confirmado', 
      description: 'Seu pedido foi confirmado e está sendo processado.',
      time: '2 horas atrás',
      isNew: true
    },
    { 
      id: 3, 
      icon: <Mail className="h-5 w-5 text-purple-500" />, 
      title: 'Nova mensagem de Marketing', 
      description: 'Você recebeu uma nova mensagem do departamento de marketing.',
      time: '3 horas atrás',
      isNew: false
    },
    { 
      id: 4, 
      icon: <Users className="h-5 w-5 text-gray-500" />, 
      title: 'João Silva adicionou você a um projeto', 
      description: 'Você foi adicionado ao projeto "Redesign da Plataforma".',
      time: 'Ontem',
      isNew: false
    },
    { 
      id: 5, 
      icon: <Bell className="h-5 w-5 text-yellow-500" />, 
      title: 'Lembrete: Reunião de equipe', 
      description: 'A reunião de equipe começará em 30 minutos.',
      time: 'Ontem',
      isNew: false
    }
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="px-4 py-3 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
        <h3 className="font-medium text-gray-900">Notificações</h3>
        <span className="text-xs font-medium text-white bg-blue-500 rounded-full px-2 py-0.5">
          {notifications.filter(n => n.isNew).length} novas
        </span>
      </div>
      <ul className="divide-y divide-gray-200">
        {notifications.map((notification) => (
          <li key={notification.id} className={cn(
            "px-4 py-3 flex items-start gap-3 hover:bg-gray-50 transition-colors",
            notification.isNew && "bg-blue-50/40"
          )}>
            <div className="flex-shrink-0 mt-1">
              {notification.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start">
                <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                <span className="text-xs text-gray-500 whitespace-nowrap ml-2">{notification.time}</span>
              </div>
              <p className="text-xs text-gray-500 mt-0.5">{notification.description}</p>
            </div>
            {notification.isNew && (
              <div className="flex-shrink-0">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="px-4 py-2 bg-gray-50 border-t border-gray-200 text-center">
        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
          Ver todas notificações
        </button>
      </div>
    </div>
  );
};

// Exemplo: Lista de Configurações
const SettingsList = () => {
  const settings = [
    {
      id: 1,
      icon: <Bell className="h-5 w-5 text-gray-500" />,
      title: 'Notificações',
      description: 'Controle quais notificações você deseja receber',
      hasToggle: true,
      toggleEnabled: true
    },
    {
      id: 2,
      icon: <User className="h-5 w-5 text-gray-500" />,
      title: 'Perfil',
      description: 'Atualize suas informações pessoais e profissionais',
      hasToggle: false
    },
    {
      id: 3,
      icon: <Settings className="h-5 w-5 text-gray-500" />,
      title: 'Preferências de conta',
      description: 'Altere suas preferências de idioma e região',
      hasToggle: false
    },
    {
      id: 4,
      icon: <ShoppingCart className="h-5 w-5 text-gray-500" />,
      title: 'Compras e assinaturas',
      description: 'Gerencie seus pedidos e assinaturas atuais',
      hasToggle: false
    },
    {
      id: 5,
      icon: <Clock className="h-5 w-5 text-gray-500" />,
      title: 'Backup automático',
      description: 'Faça backup de seus dados automaticamente',
      hasToggle: true,
      toggleEnabled: false
    }
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
        <h3 className="font-medium text-gray-900">Configurações</h3>
      </div>
      <ul className="divide-y divide-gray-200">
        {settings.map((setting) => (
          <li key={setting.id} className="px-4 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors">
            <div className="flex-shrink-0">
              <div className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center">
                {setting.icon}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">{setting.title}</p>
              <p className="text-xs text-gray-500 mt-0.5">{setting.description}</p>
            </div>
            <div className="flex-shrink-0">
              {setting.hasToggle ? (
                <div className={cn(
                  "w-11 h-6 flex items-center rounded-full p-1 cursor-pointer",
                  setting.toggleEnabled ? "bg-blue-500" : "bg-gray-200"
                )}>
                  <div className={cn(
                    "bg-white h-4 w-4 rounded-full shadow-md transform transition-transform",
                    setting.toggleEnabled ? "translate-x-5" : "translate-x-0"
                  )}></div>
                </div>
              ) : (
                <ChevronDown size={18} className="text-gray-400" />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Exemplo: Lista de Usuários
const UsersList = () => {
  const users = [
    {
      id: 1,
      name: 'Amanda Oliveira',
      email: 'amanda.oliveira@empresa.com',
      role: 'Gerente de Produto',
      imageUrl: 'https://i.pravatar.cc/300?img=1',
      status: 'online'
    },
    {
      id: 2,
      name: 'Carlos Mendes',
      email: 'carlos.mendes@empresa.com',
      role: 'Desenvolvedor Frontend',
      imageUrl: 'https://i.pravatar.cc/300?img=2',
      status: 'offline'
    },
    {
      id: 3,
      name: 'Juliana Costa',
      email: 'juliana.costa@empresa.com',
      role: 'Designer UX/UI',
      imageUrl: 'https://i.pravatar.cc/300?img=3',
      status: 'online'
    },
    {
      id: 4,
      name: 'Rodrigo Almeida',
      email: 'rodrigo.almeida@empresa.com',
      role: 'Desenvolvedor Backend',
      imageUrl: 'https://i.pravatar.cc/300?img=4',
      status: 'away'
    },
    {
      id: 5,
      name: 'Fernanda Santos',
      email: 'fernanda.santos@empresa.com',
      role: 'Analista de Negócios',
      imageUrl: 'https://i.pravatar.cc/300?img=5',
      status: 'online'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'offline': return 'bg-gray-400';
      case 'away': return 'bg-yellow-500';
      default: return 'bg-gray-400';
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="px-4 py-3 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
        <h3 className="font-medium text-gray-900">Membros da Equipe</h3>
        <Button variant="default" size="sm" className="px-2 py-1 h-auto text-xs">
          + Adicionar
        </Button>
      </div>
      <ul className="divide-y divide-gray-200">
        {users.map((user) => (
          <li key={user.id} className="px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors">
            <div className="flex-shrink-0 relative">
              <img 
                src={user.imageUrl} 
                alt={user.name} 
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className={cn(
                "absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white",
                getStatusColor(user.status)
              )}></div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">{user.name}</p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <p className="text-xs text-gray-500 truncate">{user.email}</p>
                <div className="hidden sm:block text-gray-300 text-xs">•</div>
                <p className="text-xs text-gray-500">{user.role}</p>
              </div>
            </div>
            <div className="flex-shrink-0 flex gap-2">
              <Button variant="ghost" size="sm" className="p-1 h-auto rounded-full">
                <Mail size={16} className="text-gray-500" />
              </Button>
              <Button variant="ghost" size="sm" className="p-1 h-auto rounded-full">
                <User size={16} className="text-gray-500" />
              </Button>
            </div>
          </li>
        ))}
      </ul>
      <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
        <span className="text-sm text-gray-500">Mostrando 5 de 12 membros</span>
        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
          Ver todos
        </button>
      </div>
    </div>
  );
};

// Códigos para exibição
const notificationsListCode = `import React from 'react';
import { Bell, ShoppingCart, Mail, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

export const NotificationsList = () => {
  const notifications = [
    { 
      id: 1, 
      icon: <Bell className="h-5 w-5 text-blue-500" />, 
      title: 'Nova oportunidade disponível', 
      description: 'Uma nova oportunidade foi publicada que corresponde ao seu perfil.',
      time: '5 min atrás',
      isNew: true
    },
    { 
      id: 2, 
      icon: <ShoppingCart className="h-5 w-5 text-green-500" />, 
      title: 'Pedido #12345 confirmado', 
      description: 'Seu pedido foi confirmado e está sendo processado.',
      time: '2 horas atrás',
      isNew: true
    },
    // ... mais notificações
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="px-4 py-3 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
        <h3 className="font-medium text-gray-900">Notificações</h3>
        <span className="text-xs font-medium text-white bg-blue-500 rounded-full px-2 py-0.5">
          {notifications.filter(n => n.isNew).length} novas
        </span>
      </div>
      <ul className="divide-y divide-gray-200">
        {notifications.map((notification) => (
          <li key={notification.id} className={cn(
            "px-4 py-3 flex items-start gap-3 hover:bg-gray-50 transition-colors",
            notification.isNew && "bg-blue-50/40"
          )}>
            <div className="flex-shrink-0 mt-1">
              {notification.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start">
                <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                <span className="text-xs text-gray-500 whitespace-nowrap ml-2">{notification.time}</span>
              </div>
              <p className="text-xs text-gray-500 mt-0.5">{notification.description}</p>
            </div>
            {notification.isNew && (
              <div className="flex-shrink-0">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="px-4 py-2 bg-gray-50 border-t border-gray-200 text-center">
        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
          Ver todas notificações
        </button>
      </div>
    </div>
  );
};`;

const settingsListCode = `import React from 'react';
import { Bell, User, Settings, ShoppingCart, Clock, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export const SettingsList = () => {
  const settings = [
    {
      id: 1,
      icon: <Bell className="h-5 w-5 text-gray-500" />,
      title: 'Notificações',
      description: 'Controle quais notificações você deseja receber',
      hasToggle: true,
      toggleEnabled: true
    },
    {
      id: 2,
      icon: <User className="h-5 w-5 text-gray-500" />,
      title: 'Perfil',
      description: 'Atualize suas informações pessoais e profissionais',
      hasToggle: false
    },
    // ... mais configurações
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
        <h3 className="font-medium text-gray-900">Configurações</h3>
      </div>
      <ul className="divide-y divide-gray-200">
        {settings.map((setting) => (
          <li key={setting.id} className="px-4 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors">
            <div className="flex-shrink-0">
              <div className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center">
                {setting.icon}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">{setting.title}</p>
              <p className="text-xs text-gray-500 mt-0.5">{setting.description}</p>
            </div>
            <div className="flex-shrink-0">
              {setting.hasToggle ? (
                <div className={cn(
                  "w-11 h-6 flex items-center rounded-full p-1 cursor-pointer",
                  setting.toggleEnabled ? "bg-blue-500" : "bg-gray-200"
                )}>
                  <div className={cn(
                    "bg-white h-4 w-4 rounded-full shadow-md transform transition-transform",
                    setting.toggleEnabled ? "translate-x-5" : "translate-x-0"
                  )}></div>
                </div>
              ) : (
                <ChevronDown size={18} className="text-gray-400" />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};`;

const usersListCode = `import React from 'react';
import { Mail, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const UsersList = () => {
  const users = [
    {
      id: 1,
      name: 'Amanda Oliveira',
      email: 'amanda.oliveira@empresa.com',
      role: 'Gerente de Produto',
      imageUrl: 'https://i.pravatar.cc/300?img=1',
      status: 'online'
    },
    {
      id: 2,
      name: 'Carlos Mendes',
      email: 'carlos.mendes@empresa.com',
      role: 'Desenvolvedor Frontend',
      imageUrl: 'https://i.pravatar.cc/300?img=2',
      status: 'offline'
    },
    // ... mais usuários
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'offline': return 'bg-gray-400';
      case 'away': return 'bg-yellow-500';
      default: return 'bg-gray-400';
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="px-4 py-3 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
        <h3 className="font-medium text-gray-900">Membros da Equipe</h3>
        <Button variant="default" size="sm" className="px-2 py-1 h-auto text-xs">
          + Adicionar
        </Button>
      </div>
      <ul className="divide-y divide-gray-200">
        {users.map((user) => (
          <li key={user.id} className="px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors">
            <div className="flex-shrink-0 relative">
              <img 
                src={user.imageUrl} 
                alt={user.name} 
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className={cn(
                "absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white",
                getStatusColor(user.status)
              )}></div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">{user.name}</p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <p className="text-xs text-gray-500 truncate">{user.email}</p>
                <div className="hidden sm:block text-gray-300 text-xs">•</div>
                <p className="text-xs text-gray-500">{user.role}</p>
              </div>
            </div>
            <div className="flex-shrink-0 flex gap-2">
              <Button variant="ghost" size="sm" className="p-1 h-auto rounded-full">
                <Mail size={16} className="text-gray-500" />
              </Button>
              <Button variant="ghost" size="sm" className="p-1 h-auto rounded-full">
                <User size={16} className="text-gray-500" />
              </Button>
            </div>
          </li>
        ))}
      </ul>
      <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
        <span className="text-sm text-gray-500">Mostrando 5 de 12 membros</span>
        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
          Ver todos
        </button>
      </div>
    </div>
  );
};`;

export default StackedLists;
