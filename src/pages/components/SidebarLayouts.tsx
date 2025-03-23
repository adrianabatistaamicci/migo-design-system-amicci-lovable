import React from 'react';
import { Sidebar, Home, Settings, Users, FileText, Mail, ChevronDown, ChevronRight, ChevronLeft, Menu, X } from 'lucide-react';
import Header from '@/components/library-components/Header';
import ComponentCard from '@/components/ComponentCard';
import CodeBlock from '@/components/CodeBlock';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const SidebarLayouts = () => {
  const sidebarCode = `// Basic Sidebar Component Example
import React from 'react';
import { Home, Mail, Settings, Users, ChevronRight } from 'lucide-react';

const SidebarExample = () => {
  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-medium">App Name</h2>
      </div>
      
      <nav className="mt-4">
        <ul className="space-y-1 px-2">
          <li>
            <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md bg-primary-hover text-primary-main">
              <Home size={18} className="mr-2" />
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
              <Mail size={18} className="mr-2" />
              Messages
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
              <Users size={18} className="mr-2" />
              Team
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-between px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
              <div className="flex items-center">
                <Settings size={18} className="mr-2" />
                Settings
              </div>
              <ChevronRight size={16} />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SidebarExample;`;

  const collapsibleSidebarCode = `// Collapsible Sidebar Component Example
import React, { useState } from 'react';
import { Home, Mail, Settings, Users, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';

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
          <h2 className={\`text-lg font-medium \${!isOpen && 'md:hidden'}\`}>App Name</h2>
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
              <a href="#" className={\`flex items-center px-3 py-2 text-sm rounded-md bg-primary-hover text-primary-main \${!isOpen && 'justify-center'}\`}>
                <Home size={18} className={isOpen ? 'mr-2' : ''} />
                {isOpen && <span>Dashboard</span>}
              </a>
            </li>
            <li>
              <a href="#" className={\`flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100 \${!isOpen && 'justify-center'}\`}>
                <Mail size={18} className={isOpen ? 'mr-2' : ''} />
                {isOpen && <span>Messages</span>}
              </a>
            </li>
            <li>
              <a href="#" className={\`flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100 \${!isOpen && 'justify-center'}\`}>
                <Users size={18} className={isOpen ? 'mr-2' : ''} />
                {isOpen && <span>Team</span>}
              </a>
            </li>
            <li>
              <a href="#" className={\`flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100 \${!isOpen && 'justify-center'}\`}>
                <Settings size={18} className={isOpen ? 'mr-2' : ''} />
                {isOpen && <span>Settings</span>}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};`;

  return <div className="w-full animate-fade-in">
      <Header title="Sidebar Layouts" description="Os layouts de barra lateral oferecem uma navegação vertical intuitiva que permite aos usuários transitarem facilmente entre diferentes seções da aplicação. Amplamente utilizados em dashboards, painéis administrativos e aplicações complexas, eles organizam o conteúdo de forma clara e acessível. Explore nossas opções para criar menus laterais responsivos com recursos avançados como ícones informativos, emblemas de notificação, submenus expansíveis e seções de rodapé personalizáveis." type="components" />
      
      <div className="max-w-[1280px] mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Basic Sidebar</h2>
          <ComponentCard title="Basic Sidebar" description="A standard sidebar with navigation links and icons." code={sidebarCode}>
            <AspectRatio ratio={4 / 3} className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
              <div className="flex h-full">
                <div className="w-64 h-full bg-white border-r border-gray-200">
                  <div className="p-4 border-b border-gray-200">
                    <h2 className="text-lg font-medium">App Name</h2>
                  </div>
                  
                  <nav className="mt-4">
                    <ul className="space-y-1 px-2">
                      <li>
                        <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md bg-primary-hover text-primary-main">
                          <Home size={18} className="mr-2" />
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
                          <Mail size={18} className="mr-2" />
                          Messages
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
                          <Users size={18} className="mr-2" />
                          Team
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center justify-between px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
                          <div className="flex items-center">
                            <Settings size={18} className="mr-2" />
                            Settings
                          </div>
                          <ChevronRight size={16} />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="flex-1 p-6 bg-gray-50">
                  <h1 className="text-xl font-semibold mb-4">Dashboard</h1>
                  <p className="text-gray-600">Main content would go here</p>
                </div>
              </div>
            </AspectRatio>
          </ComponentCard>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Collapsible Sidebar</h2>
          <p className="text-gray-700 mb-6">
            A collapsible sidebar can be expanded or collapsed to save screen space while still providing navigation.
          </p>
          <CodeBlock code={collapsibleSidebarCode} language="jsx" title="Collapsible Sidebar Example" />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Best Practices</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Organize navigation items in a logical order, with the most important items at the top.</li>
            <li>Use icons alongside text to enhance recognition and scannability.</li>
            <li>Highlight the current page or section to provide context.</li>
            <li>Consider responsive behavior - collapse or hide the sidebar on smaller screens.</li>
            <li>Group related navigation items together for better information architecture.</li>
            <li>Keep the sidebar fixed on scroll for constant access to navigation.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Accessibility</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Ensure all navigation items are keyboard accessible.</li>
            <li>Use proper ARIA roles for navigation elements (role="navigation").</li>
            <li>Add aria-current="page" to the currently active navigation item.</li>
            <li>Provide sufficient color contrast for text and icons.</li>
            <li>When using a collapsible sidebar, ensure toggle controls are accessible and properly labeled.</li>
          </ul>
        </section>
      </div>
    </div>;
};

export default SidebarLayouts;
