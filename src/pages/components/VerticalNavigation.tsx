
import React from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import Header from '@/components/library-components/Header';
import { Menu, ChevronDown, ChevronRight, Home, Settings, Users, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import CodeBlock from '@/components/CodeBlock';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

// Example vertical navigation component with collapsible menus
const VerticalNavigationExample = () => {
  const [openMenus, setOpenMenus] = React.useState({
    dashboard: false,
    settings: true
  });

  const toggleMenu = (menu) => {
    setOpenMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  return (
    <div className="w-64 border rounded-md bg-white p-2">
      <nav className="space-y-1">
        <a 
          href="#" 
          className="flex items-center px-3 py-2 text-sm rounded-md bg-primary-hover text-primary-main font-medium"
        >
          <Home size={18} className="mr-2 text-primary-main" />
          <span>Home</span>
        </a>

        {/* Dashboard Menu - The entire item is clickable to toggle the submenu */}
        <div className="relative">
          <div 
            onClick={() => toggleMenu('dashboard')} 
            className="flex items-center justify-between w-full px-3 py-2 text-sm rounded-md hover:bg-gray-100 cursor-pointer"
          >
            <div className="flex items-center">
              <Menu size={18} className="mr-2 text-gray-500" />
              <span className="text-gray-700">Dashboard</span>
            </div>
            {openMenus.dashboard ? 
              <ChevronDown size={16} className="text-gray-400" /> : 
              <ChevronRight size={16} className="text-gray-400" />
            }
          </div>

          <div className={cn(
            "pl-8 mt-1 space-y-1",
            !openMenus.dashboard && "hidden"
          )}>
            <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
              Overview
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
              Analytics
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
              Reports
            </a>
          </div>
        </div>

        {/* Settings Menu - The entire item is clickable to toggle the submenu */}
        <div className="relative">
          <div 
            onClick={() => toggleMenu('settings')} 
            className="flex items-center justify-between w-full px-3 py-2 text-sm rounded-md hover:bg-gray-100 cursor-pointer"
          >
            <div className="flex items-center">
              <Settings size={18} className="mr-2 text-gray-500" />
              <span className="text-gray-700">Settings</span>
            </div>
            {openMenus.settings ? 
              <ChevronDown size={16} className="text-gray-400" /> : 
              <ChevronRight size={16} className="text-gray-400" />
            }
          </div>

          <div className={cn(
            "pl-8 mt-1 space-y-1",
            !openMenus.settings && "hidden"
          )}>
            <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
              Profile
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
              Account
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
              Security
            </a>
          </div>
        </div>

        {/* Regular menu items */}
        <a 
          href="#" 
          className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100"
        >
          <Users size={18} className="mr-2 text-gray-500" />
          <span>Team</span>
        </a>

        <a 
          href="#" 
          className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100"
        >
          <FileText size={18} className="mr-2 text-gray-500" />
          <span>Documents</span>
        </a>
      </nav>
    </div>
  );
};

// Code example for implementation
const verticalNavCode = `// Vertical Navigation with Collapsible Menus
import React, { useState } from 'react';
import { Menu, ChevronDown, ChevronRight, Home, Settings, Users, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

const VerticalNavigation = () => {
  const [openMenus, setOpenMenus] = useState({
    dashboard: false,
    settings: true
  });

  const toggleMenu = (menu) => {
    setOpenMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  return (
    <div className="w-64 border rounded-md bg-white p-2">
      <nav className="space-y-1">
        <a 
          href="#" 
          className="flex items-center px-3 py-2 text-sm rounded-md bg-primary-hover text-primary-main font-medium"
        >
          <Home size={18} className="mr-2 text-primary-main" />
          <span>Home</span>
        </a>

        {/* Dashboard Menu - The entire item is clickable */}
        <div className="relative">
          <div 
            onClick={() => toggleMenu('dashboard')} 
            className="flex items-center justify-between w-full px-3 py-2 text-sm rounded-md hover:bg-gray-100 cursor-pointer"
          >
            <div className="flex items-center">
              <Menu size={18} className="mr-2 text-gray-500" />
              <span className="text-gray-700">Dashboard</span>
            </div>
            {openMenus.dashboard ? 
              <ChevronDown size={16} className="text-gray-400" /> : 
              <ChevronRight size={16} className="text-gray-400" />
            }
          </div>

          <div className={\`pl-8 mt-1 space-y-1 \${!openMenus.dashboard && "hidden"}\`}>
            <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
              Overview
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
              Analytics
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
              Reports
            </a>
          </div>
        </div>

        {/* Some parent items might only serve as category headers */}
        <div className="relative">
          <div 
            onClick={() => toggleMenu('settings')} 
            className="flex items-center justify-between w-full px-3 py-2 text-sm rounded-md hover:bg-gray-100 cursor-pointer"
          >
            <div className="flex items-center">
              <Settings size={18} className="mr-2 text-gray-500" />
              <span className="text-gray-700">Settings</span>
            </div>
            {openMenus.settings ? 
              <ChevronDown size={16} className="text-gray-400" /> : 
              <ChevronRight size={16} className="text-gray-400" />
            }
          </div>

          <div className={\`pl-8 mt-1 space-y-1 \${!openMenus.settings && "hidden"}\`}>
            <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
              Profile
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
              Account
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
              Security
            </a>
          </div>
        </div>

        <a 
          href="#" 
          className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100"
        >
          <Users size={18} className="mr-2 text-gray-500" />
          <span>Team</span>
        </a>

        <a 
          href="#" 
          className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100"
        >
          <FileText size={18} className="mr-2 text-gray-500" />
          <span>Documents</span>
        </a>
      </nav>
    </div>
  );
};`;

const VerticalNavigation = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Vertical Navigation"
        description="Componentes de navegação vertical para menus laterais e painéis de navegação"
        type="components"
        className="mb-6"
      />
      
      <div className="max-w-[1280px] mx-auto">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-6">Navegação Vertical com Submenus</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              A navegação vertical com submenus expansíveis é ideal para estruturar hierarquias complexas de conteúdo,
              mantendo a interface limpa e organizada.
            </p>
            
            <div className="border rounded-lg overflow-hidden shadow-sm">
              <div className="p-6 bg-white flex justify-center">
                <VerticalNavigationExample />
              </div>
              
              <div className="border-t">
                <CodeBlock code={verticalNavCode} language="tsx" />
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-6">Melhores Práticas</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Destaque visualmente o item ativo para orientar o usuário.</li>
            <li>Mantenha uma hierarquia clara com indentação para submenus.</li>
            <li>Use ícones consistentes para melhorar a escaneabilidade.</li>
            <li>Limite a profundidade dos submenus a no máximo 3 níveis.</li>
            <li>Torne toda a área do item clicável, não apenas o texto ou o ícone.</li>
            <li>Forneça feedback visual ao passar o mouse sobre os itens.</li>
            <li>Considere adicionar animações sutis para transições de submenus.</li>
          </ul>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-6">Acessibilidade</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Certifique-se de que todos os itens são acessíveis via teclado.</li>
            <li>Use atributos <code>aria-expanded</code> para indicar o estado de submenus.</li>
            <li>Mantenha um contraste adequado para todos os elementos.</li>
            <li>Forneça texto alternativo para ícones quando não houver texto visível.</li>
            <li>Adicione <code>aria-current="page"</code> ao item que representa a página atual.</li>
            <li>Implemente navegação por teclas de seta para menus aninhados.</li>
          </ul>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-6">Variações</h2>
          <p className="mb-4 text-gray-700">
            Para ver mais exemplos de navegação vertical, incluindo menus em cascata, navegação com acordeão, 
            e menus com badges, consulte a página <a href="/components/sidebar-navigation" className="text-primary-main hover:underline">Sidebar Navigation</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default VerticalNavigation;
