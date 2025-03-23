
import React, { useState } from 'react';
import { Sidebar, Home, Settings, Users, FileText, Mail, ChevronDown, ChevronRight, ChevronLeft, Menu, X, Code, Copy, CheckCheck } from 'lucide-react';
import Header from '@/components/library-components/Header';
import ComponentCard from '@/components/ComponentCard';
import CodeBlock from '@/components/CodeBlock';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
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
};`;

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
}`;

  const [isCollapsibleSidebarOpen, setIsCollapsibleSidebarOpen] = useState(true);

  return (
    <div className="w-full animate-fade-in">
      <Header title="Sidebar Layouts" description="Barras laterais de navegação responsivas com recursos avançados como ícones, badges, submenus expansíveis e seções de rodapé" type="components" />
      
      <div className="max-w-[1280px] mx-auto">
        <section className="space-y-3 mb-12">
          <div className="px-4">
            <h3 className="text-xl font-medium text-gray-900">Basic Sidebar</h3>
          </div>
          
          <div className="border rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-100 w-full h-[500px] overflow-hidden">
              <div className="flex h-full">
                <div className="w-64 h-full bg-white border-r border-gray-200">
                  <div className="p-4 border-b border-gray-200">
                    <img src="/src/pages/assets/Amicci-Logo_TurquesaClaro+Escuro.svg" alt="Amicci" className="h-6" />
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
            </div>
            
            <LayoutComponentFooter code={sidebarCode} />
          </div>
        </section>

        <section className="space-y-3 mb-12">
          <div className="px-4">
            <h3 className="text-xl font-medium text-gray-900">Collapsible Sidebar</h3>
          </div>
          
          <div className="border rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-100 w-full h-[500px] overflow-hidden">
              <div className="relative">
                <div className={`fixed top-0 left-0 h-screen bg-white border-r border-gray-200 shadow-sm transition-all duration-300 ${isCollapsibleSidebarOpen ? 'w-64' : 'w-20'} md:relative`}>
                  <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                    {isCollapsibleSidebarOpen ? (
                      <img src="/src/pages/assets/Amicci-Logo_TurquesaClaro+Escuro.svg" alt="Amicci" className="h-6" />
                    ) : (
                      <img src="/src/pages/assets/Amicci-Simbolo_Turquesa_Escuro.svg" alt="Amicci" className="h-6 mx-auto" />
                    )}
                    <button 
                      onClick={() => setIsCollapsibleSidebarOpen(!isCollapsibleSidebarOpen)}
                      className="hidden md:block text-gray-500 hover:text-gray-700"
                    >
                      {isCollapsibleSidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
                    </button>
                  </div>
                  
                  <nav className="mt-4">
                    <ul className="space-y-1 px-2">
                      <li>
                        <a href="#" className={`flex items-center px-3 py-2 text-sm rounded-md bg-primary-hover text-primary-main ${!isCollapsibleSidebarOpen && 'justify-center'}`}>
                          <Home size={18} className={isCollapsibleSidebarOpen ? 'mr-2' : ''} />
                          {isCollapsibleSidebarOpen && <span>Dashboard</span>}
                        </a>
                      </li>
                      <li>
                        <a href="#" className={`flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100 ${!isCollapsibleSidebarOpen && 'justify-center'}`}>
                          <Mail size={18} className={isCollapsibleSidebarOpen ? 'mr-2' : ''} />
                          {isCollapsibleSidebarOpen && <span>Messages</span>}
                        </a>
                      </li>
                      <li>
                        <a href="#" className={`flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100 ${!isCollapsibleSidebarOpen && 'justify-center'}`}>
                          <Users size={18} className={isCollapsibleSidebarOpen ? 'mr-2' : ''} />
                          {isCollapsibleSidebarOpen && <span>Team</span>}
                        </a>
                      </li>
                      <li>
                        <a href="#" className={`flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100 ${!isCollapsibleSidebarOpen && 'justify-center'}`}>
                          <Settings size={18} className={isCollapsibleSidebarOpen ? 'mr-2' : ''} />
                          {isCollapsibleSidebarOpen && <span>Settings</span>}
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className={`${isCollapsibleSidebarOpen ? 'ml-64' : 'ml-20'} p-6 transition-all duration-300`}>
                  <h1 className="text-xl font-semibold mb-4">Dashboard</h1>
                  <p className="text-gray-600">Main content would go here</p>
                </div>
              </div>
            </div>
            
            <LayoutComponentFooter code={collapsibleSidebarCode} />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Melhores Práticas</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Organize os itens de navegação em ordem lógica, com os itens mais importantes no topo.</li>
            <li>Use ícones junto com texto para melhorar o reconhecimento e a capacidade de escaneamento.</li>
            <li>Destaque a página ou seção atual para fornecer contexto.</li>
            <li>Considere o comportamento responsivo - recolha ou oculte a barra lateral em telas menores.</li>
            <li>Agrupe itens de navegação relacionados para uma melhor arquitetura de informação.</li>
            <li>Mantenha a barra lateral fixa durante a rolagem para acesso constante à navegação.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Acessibilidade</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Garanta que todos os itens de navegação sejam acessíveis por teclado.</li>
            <li>Use funções ARIA adequadas para elementos de navegação (role="navigation").</li>
            <li>Adicione aria-current="page" ao item de navegação atualmente ativo.</li>
            <li>Forneça contraste de cor suficiente para texto e ícones.</li>
            <li>Ao usar uma barra lateral recolhível, certifique-se de que os controles de alternância sejam acessíveis e adequadamente rotulados.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

const LayoutComponentFooter = ({ code }) => {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const copyToClipboard = () => {
    if (code) {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };
  
  return (
    <>
      <div className="border-t border-gray-200 px-4 py-3 flex justify-between items-center bg-gray-50">
        <Button variant="ghost" size="sm" onClick={() => setShowCode(!showCode)} className="flex items-center gap-1 text-sm">
          <Code size={16} />
          <span>{showCode ? 'Hide code' : 'Show code'}</span>
        </Button>
        
        <Button variant="ghost" size="sm" onClick={copyToClipboard} className="flex items-center gap-1 text-sm">
          {copied ? <>
              <CheckCheck size={16} />
              <span>Copied</span>
            </> : <>
              <Copy size={16} />
              <span>Copy</span>
            </>}
        </Button>
      </div>
      
      <div className={cn(
        "border-t bg-gray-50 overflow-x-auto transition-all duration-300 w-full",
        showCode ? "h-auto max-h-[400px] p-4" : "h-0 p-0 opacity-0"
      )}>
        {showCode && (
          <pre className="text-sm w-full">
            <code>{code}</code>
          </pre>
        )}
      </div>
    </>
  );
};

export default SidebarLayouts;
