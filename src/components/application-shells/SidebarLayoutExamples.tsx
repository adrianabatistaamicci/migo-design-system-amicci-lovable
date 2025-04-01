
import React, { useState } from 'react';
import { Home, Users, Settings, Search, Bell, Menu, X, ChevronDown, User, LogOut, FileText, ShoppingCart, Mail, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import amicciLogo from '@/pages/assets/Amicci-Logo_TurquesaClaro+Escuro.svg';
import amicciLogoIcon from '@/pages/assets/Amicci-Simbolo_Turquesa_Escuro.svg';

export const BasicSidebarExample = () => {
  const [isOpen, setIsOpen] = useState(true);
  
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-white shadow-md transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}`}>
        <div className="p-4 flex justify-between items-center border-b">
          {isOpen ? (
            <span className="font-semibold text-lg">Aplicação</span>
          ) : (
            <span className="font-semibold text-lg mx-auto">A</span>
          )}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-1 rounded-full hover:bg-gray-100"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <nav className="p-2">
          <ul className="space-y-2">
            <li>
              <a 
                href="#" 
                className="flex items-center p-2 rounded-md text-gray-900 bg-gray-100 font-medium"
              >
                <Home className="h-5 w-5" />
                {isOpen && <span className="ml-3">Dashboard</span>}
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="flex items-center p-2 rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <Users className="h-5 w-5" />
                {isOpen && <span className="ml-3">Usuários</span>}
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="flex items-center p-2 rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <Settings className="h-5 w-5" />
                {isOpen && <span className="ml-3">Configurações</span>}
              </a>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
        <p className="mt-4 text-gray-600">Bem-vindo ao seu dashboard!</p>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-medium">Resumo</h2>
            <div className="mt-4 h-48 bg-gray-100 rounded flex items-center justify-center">
              Gráfico de visualização
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-medium">Atividade Recente</h2>
            <div className="mt-4 space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex p-2 border-b">
                  <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">Ação realizada #{item}</p>
                    <p className="text-xs text-gray-500">Há 5 minutos</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SidebarWithNestedNavigationExample = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [openMenus, setOpenMenus] = useState({
    products: false,
    settings: true
  });
  
  const toggleMenu = (menu: string) => {
    setOpenMenus(prev => ({
      ...prev,
      [menu]: !prev[menu as keyof typeof prev]
    }));
  };
  
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-white shadow-md transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'} overflow-y-auto`}>
        <div className="p-4 flex justify-between items-center border-b">
          {isOpen ? (
            <span className="font-semibold text-lg">Aplicação</span>
          ) : (
            <span className="font-semibold text-lg mx-auto">A</span>
          )}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-1 rounded-full hover:bg-gray-100"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <nav className="p-2">
          <ul className="space-y-1">
            <li>
              <a 
                href="#" 
                className="flex items-center p-2 rounded-md text-gray-900 bg-gray-100 font-medium"
              >
                <Home className="h-5 w-5" />
                {isOpen && <span className="ml-3">Dashboard</span>}
              </a>
            </li>
            
            {/* Nested Menu Example */}
            <li>
              <div className="relative">
                <div 
                  onClick={() => isOpen && toggleMenu('products')} 
                  className="flex items-center justify-between p-2 rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 cursor-pointer"
                >
                  <div className="flex items-center">
                    <ShoppingCart className="h-5 w-5" />
                    {isOpen && <span className="ml-3">Produtos</span>}
                  </div>
                  {isOpen && (
                    openMenus.products ? 
                      <ChevronDown size={16} className="text-gray-400" /> : 
                      <ChevronRight size={16} className="text-gray-400" />
                  )}
                </div>
                
                {isOpen && openMenus.products && (
                  <ul className="pl-10 pr-2 mt-1 space-y-1">
                    <li>
                      <a href="#" className="block p-2 rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                        Catálogo
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block p-2 rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                        Inventário
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block p-2 rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                        Categorias
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            
            <li>
              <a 
                href="#" 
                className="flex items-center p-2 rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <Users className="h-5 w-5" />
                {isOpen && <span className="ml-3">Usuários</span>}
              </a>
            </li>
            
            <li>
              <a 
                href="#" 
                className="flex items-center p-2 rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <Mail className="h-5 w-5" />
                {isOpen && <span className="ml-3">Mensagens</span>}
              </a>
            </li>
            
            <li>
              <a 
                href="#" 
                className="flex items-center p-2 rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <FileText className="h-5 w-5" />
                {isOpen && <span className="ml-3">Relatórios</span>}
              </a>
            </li>
            
            {/* Another Nested Menu */}
            <li>
              <div className="relative">
                <div 
                  onClick={() => isOpen && toggleMenu('settings')} 
                  className="flex items-center justify-between p-2 rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 cursor-pointer"
                >
                  <div className="flex items-center">
                    <Settings className="h-5 w-5" />
                    {isOpen && <span className="ml-3">Configurações</span>}
                  </div>
                  {isOpen && (
                    openMenus.settings ? 
                      <ChevronDown size={16} className="text-gray-400" /> : 
                      <ChevronRight size={16} className="text-gray-400" />
                  )}
                </div>
                
                {isOpen && openMenus.settings && (
                  <ul className="pl-10 pr-2 mt-1 space-y-1">
                    <li>
                      <a href="#" className="block p-2 rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                        Perfil
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block p-2 rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                        Preferências
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block p-2 rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                        Segurança
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-semibold text-gray-800">Navegação Aninhada</h1>
        <p className="mt-4 text-gray-600">Este exemplo mostra como implementar menus expansíveis com navegação multinível.</p>
        
        <div className="mt-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium">Recursos da Navegação Aninhada</h2>
          <ul className="mt-4 space-y-2 list-disc pl-5">
            <li>Menus colapsáveis para organizar itens relacionados</li>
            <li>Indicadores visuais para mostrar o estado do menu (aberto/fechado)</li>
            <li>Suporte para múltiplos níveis de navegação</li>
            <li>Design responsivo que se adapta quando a sidebar é recolhida</li>
            <li>Transições suaves para melhorar a experiência do usuário</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const SidebarWithSearchExample = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  
  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '#' },
    { icon: ShoppingCart, label: 'Produtos', href: '#' },
    { icon: Users, label: 'Clientes', href: '#' },
    { icon: FileText, label: 'Pedidos', href: '#' },
    { icon: Mail, label: 'Mensagens', href: '#' },
    { icon: Bell, label: 'Notificações', href: '#' },
    { icon: Settings, label: 'Configurações', href: '#' },
  ];
  
  const filteredItems = searchQuery 
    ? menuItems.filter(item => 
        item.label.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : menuItems;
  
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-white shadow-md transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}`}>
        <div className="p-4 flex justify-between items-center border-b">
          {isOpen ? (
            <span className="font-semibold text-lg">Aplicação</span>
          ) : (
            <span className="font-semibold text-lg mx-auto">A</span>
          )}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-1 rounded-full hover:bg-gray-100"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        {/* Search input */}
        {isOpen && (
          <div className="p-4 border-b">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                placeholder="Buscar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        )}
        
        <nav className="p-2">
          <ul className="space-y-1">
            {filteredItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href} 
                  className={`flex items-center p-2 rounded-md ${
                    index === 0 
                      ? 'text-gray-900 bg-gray-100 font-medium' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  {isOpen && <span className="ml-3">{item.label}</span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-semibold text-gray-800">Sidebar com Busca</h1>
        <p className="mt-4 text-gray-600">Este exemplo demonstra uma sidebar com funcionalidade de busca integrada.</p>
        
        <div className="mt-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium">Recursos da Busca</h2>
          <ul className="mt-4 space-y-2 list-disc pl-5">
            <li>Campo de busca integrado na sidebar</li>
            <li>Filtragem em tempo real dos itens do menu</li>
            <li>Design responsivo que se adapta quando a sidebar é recolhida</li>
            <li>Experiência de usuário melhorada com feedback visual</li>
          </ul>
        </div>
        
        <div className="mt-6 bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium">Resultados da Busca</h2>
          <div className="mt-4">
            {searchQuery ? (
              filteredItems.length > 0 ? (
                <div className="space-y-2">
                  <p>Mostrando {filteredItems.length} resultado(s) para "{searchQuery}":</p>
                  <ul className="mt-2 space-y-1 list-disc pl-5">
                    {filteredItems.map((item, index) => (
                      <li key={index}>{item.label}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p>Nenhum resultado encontrado para "{searchQuery}".</p>
              )
            ) : (
              <p>Digite algo no campo de busca para filtrar os itens do menu.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const AdminLayoutExample = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  
  return (
    <div className="h-screen flex flex-col">
      {/* Top Header */}
      <header className="bg-white border-b border-gray-200 z-10">
        <div className="flex items-center justify-between h-16 px-4">
          <div className="flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 md:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-semibold text-gray-900">Admin Panel</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                placeholder="Buscar..."
              />
            </div>
            
            <button className="p-1 rounded-full text-gray-500 hover:text-gray-600 relative">
              <Bell className="h-6 w-6" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
            </button>
            
            <div className="relative ml-3">
              <div>
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="h-5 w-5 text-gray-500" />
                  </div>
                  <span className="ml-2 text-gray-700">Administrador</span>
                  <ChevronDown className="ml-1 h-4 w-4 text-gray-500" />
                </button>
              </div>
              
              {userMenuOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Seu Perfil</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Configurações</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <div className="flex items-center">
                        <LogOut className="h-4 w-4 mr-2" />
                        <span>Sair</span>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className={`bg-white border-r border-gray-200 transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'} z-10`}>
          <nav className="mt-5 flex-1 px-2">
            <div className="space-y-1">
              <a href="#" className="group flex items-center px-2 py-2 text-base font-medium rounded-md bg-gray-100 text-gray-900">
                <Home className="mr-3 h-6 w-6 text-gray-500" />
                {isOpen && <span>Dashboard</span>}
              </a>
              
              <a href="#" className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                <Users className="mr-3 h-6 w-6 text-gray-500" />
                {isOpen && <span>Usuários</span>}
              </a>
              
              <a href="#" className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                <Settings className="mr-3 h-6 w-6 text-gray-500" />
                {isOpen && <span>Configurações</span>}
              </a>
            </div>
          </nav>
        </div>
        
        {/* Main Content */}
        <main className="flex-1 overflow-auto bg-gray-100">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-lg font-medium mb-4">Visão Geral</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="text-gray-500 text-sm">Total de Usuários</div>
                    <div className="text-2xl font-semibold mt-2">1,234</div>
                    <div className="text-green-500 text-sm mt-2">+12% este mês</div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="text-gray-500 text-sm">Receita</div>
                    <div className="text-2xl font-semibold mt-2">R$ 45.678</div>
                    <div className="text-green-500 text-sm mt-2">+8% este mês</div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="text-gray-500 text-sm">Novos Pedidos</div>
                    <div className="text-2xl font-semibold mt-2">267</div>
                    <div className="text-red-500 text-sm mt-2">-3% este mês</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h2 className="text-lg font-medium mb-4">Atividade Recente</h2>
                  <div className="space-y-4">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                          <User className="h-6 w-6 text-gray-500" />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">Usuário #{item} realizou uma ação</p>
                          <p className="text-sm text-gray-500">Há 5 minutos</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow">
                  <h2 className="text-lg font-medium mb-4">Tarefas Pendentes</h2>
                  <div className="space-y-2">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="flex items-center">
                        <input 
                          type="checkbox" 
                          className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="ml-2 text-gray-700">Tarefa #{item} a ser completada</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
