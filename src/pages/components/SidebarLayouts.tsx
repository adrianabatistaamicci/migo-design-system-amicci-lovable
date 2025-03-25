
import React, { useState } from 'react';
import { 
  Home, 
  Settings, 
  Users, 
  FileText, 
  Mail, 
  ChevronDown, 
  ChevronRight, 
  ChevronLeft, 
  Menu, 
  X, 
  Code, 
  Copy, 
  CheckCheck,
  Bell,
  CircleHelp,
  LayoutDashboard,
  Inbox,
  MessageSquare,
  Calendar,
  CreditCard,
  Store,
  Package
} from 'lucide-react';
import Header from '@/components/library-components/Header';
import ComponentCard from '@/components/ComponentCard';
import CodeBlock from '@/components/CodeBlock';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { Chip } from '@/components/ui/chip';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';

const SidebarLayouts = () => {
  const sidebarCode = `// Basic Sidebar Component Example
import React from 'react';
import { Home, Mail, Settings, Users, ChevronRight } from 'lucide-react';

const SidebarExample = () => {
  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <img src="/src/pages/assets/Amicci-Logo_TurquesaClaro+Escuro.svg" alt="Amicci" className="h-6" />
      </div>
      
      <nav className="mt-4">
        <ul className="space-y-1 px-2">
          <li>
            <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md bg-primary-hover text-primary-main font-medium">
              <Home size={18} className="mr-2 text-primary-main" />
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
              <Mail size={18} className="mr-2 text-gray-500" />
              Messages
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
              <Users size={18} className="mr-2 text-gray-500" />
              Team
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-between px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
              <div className="flex items-center">
                <Settings size={18} className="mr-2 text-gray-500" />
                Settings
              </div>
              <ChevronRight size={16} className="text-gray-400" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};`;

  const collapsibleSidebarCode = `// Collapsible Sidebar Component Example
import React, { useState } from 'react';
import { Home, Mail, Settings, Users, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Chip } from '@/components/ui/chip';

const CollapsibleSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  
  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white border border-gray-200 shadow-sm"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      
      <div className={\`
        fixed top-0 left-0 h-screen bg-white border-r border-gray-200 shadow-sm transition-all duration-300
        \${isOpen ? 'w-64' : 'w-20'} md:relative
      \`}>
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          {isOpen ? (
            <img src="/src/pages/assets/Amicci-Logo_TurquesaClaro+Escuro.svg" alt="Amicci" className="h-6" />
          ) : (
            <img src="/src/pages/assets/Amicci-Simbolo_Turquesa_Escuro.svg" alt="Amicci" className="h-6 mx-auto" />
          )}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="hidden md:block text-gray-500 hover:text-gray-700"
          >
            {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>
        
        <nav className="mt-4">
          <ul className="space-y-1 px-2">
            <li>
              <a href="#" className={\`flex items-center px-3 py-2 text-sm rounded-md bg-primary-hover text-primary-main font-medium \${!isOpen && 'justify-center'}\`}>
                <Home size={18} className={isOpen ? 'mr-2 text-primary-main' : 'text-primary-main'} />
                {isOpen && <span>Dashboard</span>}
              </a>
            </li>
            <li>
              <a href="#" className={\`flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100 \${!isOpen && 'justify-center'}\`}>
                <Mail size={18} className={isOpen ? 'mr-2 text-gray-500' : 'text-gray-500'} />
                {isOpen && <span>Messages</span>}
                {isOpen && (
                  <Chip variant="default" color="primary" size="sm" className="ml-2">New</Chip>
                )}
              </a>
            </li>
            <li>
              <a href="#" className={\`flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100 \${!isOpen && 'justify-center'}\`}>
                <Users size={18} className={isOpen ? 'mr-2 text-gray-500' : 'text-gray-500'} />
                {isOpen && <span>Team</span>}
              </a>
            </li>
            <li>
              <a href="#" className={\`flex items-center justify-between px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100 \${!isOpen && 'justify-center'}\`}>
                <div className="flex items-center">
                  <Settings size={18} className={isOpen ? 'mr-2 text-gray-500' : 'text-gray-500'} />
                  {isOpen && <span>Settings</span>}
                </div>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}`;

  const advancedSidebarCode = `// Advanced Sidebar with Groups, Submenus, and Badges
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  MessageSquare, 
  Users, 
  CreditCard, 
  Store, 
  Package, 
  Mail, 
  Calendar, 
  Settings, 
  Bell, 
  ChevronDown, 
  ChevronRight 
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Chip } from '@/components/ui/chip';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const AdvancedSidebar = () => {
  const [openMenus, setOpenMenus] = useState({
    analytics: true,
    messages: true,
    products: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  return (
    <div className="w-72 h-screen bg-white border-r border-gray-200 overflow-y-auto flex flex-col">
      <div className="p-4 border-b border-gray-200 flex items-center space-x-3">
        <img src="/src/pages/assets/Amicci-Logo_TurquesaClaro+Escuro.svg" alt="Amicci" className="h-6" />
        <Chip variant="default" color="primary">v1.2.0</Chip>
      </div>
      
      <div className="p-3">
        <div className="mb-2 px-3 py-2 bg-primary-hover rounded-md">
          <div className="flex items-center">
            <LayoutDashboard size={18} className="mr-2 text-primary-main" />
            <span className="text-sm font-medium text-primary-main">Dashboard</span>
          </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        {/* Group 1: Analytics */}
        <div className="px-3 py-2">
          <h3 className="text-xs uppercase font-semibold text-gray-500 mb-2 px-3">Analytics</h3>
          <Collapsible open={openMenus.analytics} onOpenChange={() => toggleMenu('analytics')}>
            <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 text-sm text-left rounded-md hover:bg-gray-100">
              <div className="flex items-center">
                <CreditCard size={18} className="mr-2 text-gray-500" />
                <span>Financial</span>
              </div>
              {openMenus.analytics ? <ChevronDown size={16} className="text-gray-400" /> : <ChevronRight size={16} className="text-gray-400" />}
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="ml-8 mt-1 space-y-1">
                <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
                  Overview
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
                  Transactions
                </a>
                <a href="#" className="flex items-center justify-between px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
                  <span>Reports</span>
                  <Chip variant="default" color="primary" size="sm">New</Chip>
                </a>
              </div>
            </CollapsibleContent>
          </Collapsible>
          
          <a href="#" className="flex items-center justify-between px-3 py-2 mt-1 text-sm rounded-md text-gray-700 hover:bg-gray-100">
            <div className="flex items-center">
              <Users size={18} className="mr-2 text-gray-500" />
              <span>User Activity</span>
            </div>
            <Badge className="bg-primary-main text-white px-1.5 rounded-full text-xs">8</Badge>
          </a>
        </div>
        
        {/* Group 2: Messages */}
        <div className="px-3 py-2 mt-4">
          <h3 className="text-xs uppercase font-semibold text-gray-500 mb-2 px-3">Communication</h3>
          <Collapsible open={openMenus.messages} onOpenChange={() => toggleMenu('messages')}>
            <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 text-sm text-left rounded-md hover:bg-gray-100">
              <div className="flex items-center">
                <MessageSquare size={18} className="mr-2 text-gray-500" />
                <span>Messages</span>
              </div>
              {openMenus.messages ? <ChevronDown size={16} className="text-gray-400" /> : <ChevronRight size={16} className="text-gray-400" />}
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="ml-8 mt-1 space-y-1">
                <a href="#" className="flex items-center justify-between px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
                  <span>Inbox</span>
                  <Badge className="bg-primary-main text-white px-1.5 rounded-full text-xs">14</Badge>
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
                  Sent
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
                  Trash
                </a>
              </div>
            </CollapsibleContent>
          </Collapsible>
          
          <a href="#" className="flex items-center px-3 py-2 mt-1 text-sm rounded-md text-gray-700 hover:bg-gray-100">
            <Mail size={18} className="mr-2 text-gray-500" />
            <span>Email</span>
          </a>
          
          <a href="#" className="flex items-center px-3 py-2 mt-1 text-sm rounded-md text-gray-700 hover:bg-gray-100">
            <Calendar size={18} className="mr-2 text-gray-500" />
            <span>Calendar</span>
          </a>
        </div>
        
        {/* Group 3: Products */}
        <div className="px-3 py-2 mt-4">
          <h3 className="text-xs uppercase font-semibold text-gray-500 mb-2 px-3">Inventory</h3>
          <Collapsible open={openMenus.products} onOpenChange={() => toggleMenu('products')}>
            <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 text-sm text-left rounded-md hover:bg-gray-100">
              <div className="flex items-center">
                <Store size={18} className="mr-2 text-gray-500" />
                <span>Products</span>
              </div>
              {openMenus.products ? <ChevronDown size={16} className="text-gray-400" /> : <ChevronRight size={16} className="text-gray-400" />}
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="ml-8 mt-1 space-y-1">
                <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
                  All Products
                </a>
                <a href="#" className="flex items-center justify-between px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
                  <span>Categories</span>
                  <div className="w-2 h-2 bg-primary-main rounded-full"></div>
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
                  Inventory
                </a>
              </div>
            </CollapsibleContent>
          </Collapsible>
          
          <a href="#" className="flex items-center px-3 py-2 mt-1 text-sm rounded-md text-gray-700 hover:bg-gray-100">
            <Package size={18} className="mr-2 text-gray-500" />
            <span>Orders</span>
          </a>
        </div>
      </div>
      
      {/* Footer Actions */}
      <div className="px-3 py-3 border-t border-gray-200 mt-auto bg-white">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
            <Settings size={18} className="mr-2 text-gray-500" />
            <span>Settings</span>
          </a>
          
          <a href="#" className="flex items-center justify-center w-8 h-8 rounded-md text-gray-700 hover:bg-gray-100 relative">
            <Bell size={18} className="text-gray-500" />
            <div className="w-2 h-2 bg-primary-main rounded-full absolute top-1.5 right-1.5"></div>
          </a>
        </div>
      </div>
    </div>
  );
};`;

  const [isCollapsibleSidebarOpen, setIsCollapsibleSidebarOpen] = useState(true);
  const [openMenus, setOpenMenus] = useState({
    analytics: true,
    messages: true,
    products: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  return (
    <div className="w-full animate-fade-in">
      <Header title="Sidebar Layouts" description="Barras laterais de navegação responsivas com recursos avançados como ícones, badges, submenus expansíveis e seções de rodapé" type="components" />
      
      <div className="mt-6 max-w-[1280px] mx-auto">
        <section className="space-y-3 mb-12">
          <div className="px-4">
            <h3 className="text-xl font-medium text-gray-900">Basic Sidebar</h3>
          </div>
          
          <div className="border rounded-lg overflow-hidden shadow-sm">
            <div className="bg-white w-full h-[500px] overflow-hidden">
              <div className="flex h-full">
                <div className="w-64 h-full bg-white border-r border-gray-200">
                  <div className="p-4 border-b border-gray-200">
                    <img src="/src/pages/assets/Amicci-Logo_TurquesaClaro+Escuro.svg" alt="Amicci" className="h-6" />
                  </div>
                  
                  <nav className="mt-4">
                    <ul className="space-y-1 px-2">
                      <li>
                        <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md bg-primary-hover text-primary-main font-medium">
                          <Home size={18} className="mr-2 text-primary-main" />
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
                          <Mail size={18} className="mr-2 text-gray-500" />
                          Messages
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
                          <Users size={18} className="mr-2 text-gray-500" />
                          Team
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center justify-between px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
                          <div className="flex items-center">
                            <Settings size={18} className="mr-2 text-gray-500" />
                            Settings
                          </div>
                          <ChevronRight size={16} className="text-gray-400" />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="flex-1 p-6 bg-white">
                  <h1 className="text-xl font-semibold mb-4">Dashboard</h1>
                  <p className="text-gray-600">Main content would go here</p>
                </div>
              </div>
            </div>
            
            <LayoutComponentFooter code={sidebarCode} />
          </div>
        </section>

        <section className="space-y-3 mb-12">
          <div className="px-4">
            <h3 className="text-xl font-medium text-gray-900">Collapsible Sidebar</h3>
          </div>
          
          <div className="border rounded-lg overflow-hidden shadow-sm">
            <div className="bg-white w-full h-[500px] overflow-hidden">
              <div className="flex h-full relative">
                <div className={`h-full bg-white border-r border-gray-200 shadow-sm transition-all duration-300 ${isCollapsibleSidebarOpen ? 'w-64' : 'w-20'}`}>
                  <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                    {isCollapsibleSidebarOpen ? (
                      <img src="/src/pages/assets/Amicci-Logo_TurquesaClaro+Escuro.svg" alt="Amicci" className="h-6" />
                    ) : (
                      <img src="/src/pages/assets/Amicci-Simbolo_Turquesa_Escuro.svg" alt="Amicci" className="h-6 mx-auto" />
                    )}
                    <button 
                      onClick={() => setIsCollapsibleSidebarOpen(!isCollapsibleSidebarOpen)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      {isCollapsibleSidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
                    </button>
                  </div>
                  
                  <nav className="mt-4">
                    <ul className="space-y-1 px-2">
                      <li>
                        <a href="#" className={`flex items-center px-3 py-2 text-sm rounded-md bg-primary-hover text-primary-main font-medium ${!isCollapsibleSidebarOpen && 'justify-center'}`}>
                          <Home size={18} className={isCollapsibleSidebarOpen ? 'mr-2 text-primary-main' : 'text-primary-main'} />
                          {isCollapsibleSidebarOpen && <span>Dashboard</span>}
                        </a>
                      </li>
                      <li>
                        <a href="#" className={`flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100 ${!isCollapsibleSidebarOpen && 'justify-center'}`}>
                          <Mail size={18} className={isCollapsibleSidebarOpen ? 'mr-2 text-gray-500' : 'text-gray-500'} />
                          {isCollapsibleSidebarOpen && <span>Messages</span>}
                          {isCollapsibleSidebarOpen && (
                            <Chip variant="default" color="primary" size="sm" className="ml-2">New</Chip>
                          )}
                        </a>
                      </li>
                      <li>
                        <a href="#" className={`flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100 ${!isCollapsibleSidebarOpen && 'justify-center'}`}>
                          <Users size={18} className={isCollapsibleSidebarOpen ? 'mr-2 text-gray-500' : 'text-gray-500'} />
                          {isCollapsibleSidebarOpen && <span>Team</span>}
                        </a>
                      </li>
                      <li>
                        <a href="#" className={`flex items-center justify-between px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100 ${!isCollapsibleSidebarOpen && 'justify-center'}`}>
                          <div className="flex items-center">
                            <Settings size={18} className={isCollapsibleSidebarOpen ? 'mr-2 text-gray-500' : 'text-gray-500'} />
                            {isCollapsibleSidebarOpen && <span>Settings</span>}
                          </div>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="flex-1 p-6 bg-white">
                  <h1 className="text-xl font-semibold mb-4">Dashboard</h1>
                  <p className="text-gray-600">Main content would go here</p>
                </div>
              </div>
            </div>
            
            <LayoutComponentFooter code={collapsibleSidebarCode} />
          </div>
        </section>

        <section className="space-y-3 mb-12">
          <div className="px-4">
            <h3 className="text-xl font-medium text-gray-900">Advanced Sidebar with Groups, Submenus, and Badges</h3>
          </div>
          
          <div className="border rounded-lg overflow-hidden shadow-sm">
            <div className="bg-white w-full h-[600px] overflow-hidden">
              <div className="flex h-full">
                <div className="w-72 h-full bg-white border-r border-gray-200 overflow-y-auto flex flex-col">
                  <div className="p-4 border-b border-gray-200 flex items-center space-x-3">
                    <img src="/src/pages/assets/Amicci-Logo_TurquesaClaro+Escuro.svg" alt="Amicci" className="h-6" />
                    <Chip variant="default" color="primary">v1.2.0</Chip>
                  </div>
                  
                  <div className="p-3">
                    <div className="mb-2 px-3 py-2 bg-primary-hover rounded-md">
                      <div className="flex items-center">
                        <LayoutDashboard size={18} className="mr-2 text-primary-main" />
                        <span className="text-sm font-medium text-primary-main">Dashboard</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto">
                    {/* Group 1: Analytics */}
                    <div className="px-3 py-2">
                      <h3 className="text-xs uppercase font-semibold text-gray-500 mb-2 px-3">Analytics</h3>
                      <Collapsible open={openMenus.analytics} onOpenChange={() => toggleMenu('analytics')}>
                        <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 text-sm text-left rounded-md hover:bg-gray-100">
                          <div className="flex items-center">
                            <CreditCard size={18} className="mr-2 text-gray-500" />
                            <span>Financial</span>
                          </div>
                          {openMenus.analytics ? <ChevronDown size={16} className="text-gray-400" /> : <ChevronRight size={16} className="text-gray-400" />}
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <div className="ml-8 mt-1 space-y-1">
                            <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
                              Overview
                            </a>
                            <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
                              Transactions
                            </a>
                            <a href="#" className="flex items-center justify-between px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
                              <span>Reports</span>
                              <Chip variant="default" color="primary" size="sm">New</Chip>
                            </a>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                      
                      <a href="#" className="flex items-center justify-between px-3 py-2 mt-1 text-sm rounded-md text-gray-700 hover:bg-gray-100">
                        <div className="flex items-center">
                          <Users size={18} className="mr-2 text-gray-500" />
                          <span>User Activity</span>
                        </div>
                        <Badge className="bg-primary-main text-white px-1.5 rounded-full text-xs">8</Badge>
                      </a>
                    </div>
                    
                    {/* Group 2: Messages */}
                    <div className="px-3 py-2 mt-4">
                      <h3 className="text-xs uppercase font-semibold text-gray-500 mb-2 px-3">Communication</h3>
                      <Collapsible open={openMenus.messages} onOpenChange={() => toggleMenu('messages')}>
                        <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 text-sm text-left rounded-md hover:bg-gray-100">
                          <div className="flex items-center">
                            <MessageSquare size={18} className="mr-2 text-gray-500" />
                            <span>Messages</span>
                          </div>
                          {openMenus.messages ? <ChevronDown size={16} className="text-gray-400" /> : <ChevronRight size={16} className="text-gray-400" />}
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <div className="ml-8 mt-1 space-y-1">
                            <a href="#" className="flex items-center justify-between px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
                              <span>Inbox</span>
                              <Badge className="bg-primary-main text-white px-1.5 rounded-full text-xs">14</Badge>
                            </a>
                            <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
                              Sent
                            </a>
                            <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
                              Trash
                            </a>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                      
                      <a href="#" className="flex items-center px-3 py-2 mt-1 text-sm rounded-md text-gray-700 hover:bg-gray-100">
                        <Mail size={18} className="mr-2 text-gray-500" />
                        <span>Email</span>
                      </a>
                      
                      <a href="#" className="flex items-center px-3 py-2 mt-1 text-sm rounded-md text-gray-700 hover:bg-gray-100">
                        <Calendar size={18} className="mr-2 text-gray-500" />
                        <span>Calendar</span>
                      </a>
                    </div>
                    
                    {/* Group 3: Products */}
                    <div className="px-3 py-2 mt-4">
                      <h3 className="text-xs uppercase font-semibold text-gray-500 mb-2 px-3">Inventory</h3>
                      <Collapsible open={openMenus.products} onOpenChange={() => toggleMenu('products')}>
                        <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 text-sm text-left rounded-md hover:bg-gray-100">
                          <div className="flex items-center">
                            <Store size={18} className="mr-2 text-gray-500" />
                            <span>Products</span>
                          </div>
                          {openMenus.products ? <ChevronDown size={16} className="text-gray-400" /> : <ChevronRight size={16} className="text-gray-400" />}
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <div className="ml-8 mt-1 space-y-1">
                            <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
                              All Products
                            </a>
                            <a href="#" className="flex items-center justify-between px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
                              <span>Categories</span>
                              <div className="w-2 h-2 bg-primary-main rounded-full"></div>
                            </a>
                            <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
                              Inventory
                            </a>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                      
                      <a href="#" className="flex items-center px-3 py-2 mt-1 text-sm rounded-md text-gray-700 hover:bg-gray-100">
                        <Package size={18} className="mr-2 text-gray-500" />
                        <span>Orders</span>
                      </a>
                    </div>
                  </div>
                  
                  {/* Footer Actions */}
                  <div className="px-3 py-3 border-t border-gray-200 mt-auto bg-white">
                    <div className="flex items-center justify-between">
                      <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
                        <Settings size={18} className="mr-2 text-gray-500" />
                        <span>Settings</span>
                      </a>
                      
                      <a href="#" className="flex items-center justify-center w-8 h-8 rounded-md text-gray-700 hover:bg-gray-100 relative">
                        <Bell size={18} className="text-gray-500" />
                        <div className="w-2 h-2 bg-primary-main rounded-full absolute top-1.5 right-1.5"></div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex-1 p-6 bg-white">
                  <h1 className="text-xl font-semibold mb-4">Dashboard</h1>
                  <p className="text-gray-600">Main content would go here</p>
                </div>
              </div>
            </div>
            
            <LayoutComponentFooter code={advancedSidebarCode} />
          </div>
        </section>
      </div>
    </div>
  );
};

const LayoutComponentFooter = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-3 flex justify-end items-center bg-gray-50 border-t border-gray-200">
      <div className="flex space-x-2">
        <Button
          variant="outline"
          size="sm"
          className="text-xs h-7"
          onClick={copyCode}
        >
          {copied ? <CheckCheck size={14} className="mr-1" /> : <Copy size={14} className="mr-1" />}
          {copied ? 'Copied' : 'Copy Code'}
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="text-xs h-7"
          onClick={() => {
            const w = window.open('about:blank');
            if (w) {
              w.document.write(`
                <!DOCTYPE html>
                <html>
                <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <script src="https://cdn.tailwindcss.com"></script>
                  <title>Layout Preview</title>
                </head>
                <body>
                  <div id="root"></div>
                  <script type="module">
                    import React from 'https://esm.sh/react@18.2.0';
                    import ReactDOM from 'https://esm.sh/react-dom@18.2.0';
                    import { LucideMenu, LucideX, LucideChevronLeft, LucideChevronRight, LucideHome, LucideMail, LucideUsers, LucideSettings } from 'https://esm.sh/lucide-react@0.244.0';
                    
                    // Simple components to make the example work
                    const Chip = ({ children, className }) => (
                      <span className={\`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-primary-500 text-white \${className || ''}\`}>
                        {children}
                      </span>
                    );
                    
                    ${code.replace(/import .+?;/g, '').replace(/export default .+?;/g, '')}
                    
                    ReactDOM.render(React.createElement(SidebarExample || CollapsibleSidebar || AdvancedSidebar), document.getElementById('root'));
                  </script>
                </body>
                </html>
              `);
            }
          }}
        >
          <Code size={14} className="mr-1" />
          View Full Screen
        </Button>
      </div>
    </div>
  );
};

export default SidebarLayouts;

