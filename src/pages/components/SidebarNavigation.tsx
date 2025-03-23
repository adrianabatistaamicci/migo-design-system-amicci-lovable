import React, { useState } from 'react';
import { Home, Mail, Settings, Users, ChevronRight, ChevronLeft } from 'lucide-react';
import EmptyState from '@/components/library-components/EmptyState';
import Header from '@/components/library-components/Header';
import { Badge } from '@/components/ui/badge';
import { Chip } from '@/components/ui/chip';
import { cn } from '@/lib/utils';
import CodeBlock from '@/components/CodeBlock';

// Componente de exemplo básico de Sidebar inspirado na imagem de referência
const SidebarExample = () => {
  const [isOpen, setIsOpen] = useState(true);
  
  return (
    <div className="relative h-[400px] border rounded-lg overflow-hidden">
      <div className={cn(
        "h-full transition-all duration-300 ease-in-out bg-white border-r",
        isOpen ? "w-64" : "w-20"
      )}>
        {/* Cabeçalho da Sidebar */}
        <div className="flex items-center justify-between p-4 border-b">
          {isOpen ? (
            <img src="/src/pages/assets/Amicci-Logo_TurquesaClaro+Escuro.svg" alt="Amicci" className="h-6" />
          ) : (
            <img src="/src/pages/assets/Amicci-Simbolo_Turquesa_Escuro.svg" alt="Amicci" className="h-6 mx-auto" />
          )}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-500 hover:text-gray-700"
          >
            {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>

        {/* Links de navegação */}
        <nav className="p-2">
          <ul className="space-y-1">
            <li>
              <a 
                href="#" 
                className={cn(
                  "flex items-center py-2 px-3 rounded-md",
                  isOpen ? "" : "justify-center",
                  "text-primary-main font-semibold hover:bg-gray-100"
                )}
              >
                <Home size={20} className={isOpen ? "mr-3" : ""} />
                {isOpen && <span>Dashboard</span>}
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className={cn(
                  "flex items-center py-2 px-3 rounded-md",
                  isOpen ? "" : "justify-center",
                  "text-gray-700 hover:bg-gray-100"
                )}
              >
                <Mail size={20} className={isOpen ? "mr-3" : ""} />
                {isOpen && <span>Messages</span>}
                {isOpen && (
                  <Chip variant="default" color="primary" size="sm" className="ml-2">New</Chip>
                )}
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className={cn(
                  "flex items-center py-2 px-3 rounded-md",
                  isOpen ? "" : "justify-center",
                  "text-gray-700 hover:bg-gray-100"
                )}
              >
                <Users size={20} className={isOpen ? "mr-3" : ""} />
                {isOpen && <span>Team</span>}
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className={cn(
                  "flex items-center justify-between py-2 px-3 rounded-md",
                  isOpen ? "" : "justify-center",
                  "text-gray-700 hover:bg-gray-100"
                )}
              >
                <div className="flex items-center">
                  <Settings size={20} className={isOpen ? "mr-3" : ""} />
                  {isOpen && <span>Settings</span>}
                </div>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

// Exemplo de código para implementação da Sidebar
const sidebarCode = `import React, { useState } from 'react';
import { Home, Mail, Settings, Users, ChevronRight, ChevronLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Chip } from '@/components/ui/chip';
import { cn } from '@/lib/utils';

const SidebarExample = () => {
  const [isOpen, setIsOpen] = useState(true);
  
  return (
    <div className="relative h-full">
      <div className={\`
        h-full transition-all duration-300 ease-in-out bg-white border-r
        \${isOpen ? "w-64" : "w-20"}
      \`}>
        {/* Cabeçalho da Sidebar */}
        <div className="flex items-center justify-between p-4 border-b">
          {isOpen ? (
            <img src="/logo-full.svg" alt="Amicci" className="h-6" />
          ) : (
            <img src="/logo-icon.svg" alt="Amicci" className="h-6 mx-auto" />
          )}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-500 hover:text-gray-700"
          >
            {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>

        {/* Links de navegação */}
        <nav className="p-2">
          <ul className="space-y-1">
            <li>
              <a 
                href="#" 
                className={\`
                  flex items-center py-2 px-3 rounded-md
                  \${isOpen ? "" : "justify-center"}
                  text-primary-main font-semibold hover:bg-gray-100
                \`}
              >
                <Home size={20} className={isOpen ? "mr-3" : ""} />
                {isOpen && <span>Dashboard</span>}
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className={\`
                  flex items-center py-2 px-3 rounded-md
                  \${isOpen ? "" : "justify-center"}
                  text-gray-700 hover:bg-gray-100
                \`}
              >
                <Mail size={20} className={isOpen ? "mr-3" : ""} />
                {isOpen && <span>Messages</span>}
                {isOpen && (
                  <Chip variant="default" color="primary" size="sm" className="ml-2">New</Chip>
                )}
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className={\`
                  flex items-center py-2 px-3 rounded-md
                  \${isOpen ? "" : "justify-center"}
                  text-gray-700 hover:bg-gray-100
                \`}
              >
                <Users size={20} className={isOpen ? "mr-3" : ""} />
                {isOpen && <span>Team</span>}
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className={\`
                  flex items-center justify-between py-2 px-3 rounded-md
                  \${isOpen ? "" : "justify-center"}
                  text-gray-700 hover:bg-gray-100
                \`}
              >
                <div className="flex items-center">
                  <Settings size={20} className={isOpen ? "mr-3" : ""} />
                  {isOpen && <span>Settings</span>}
                </div>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};`;

const SidebarNavigation = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Sidebar Navigation"
        description="Componentes de navegação lateral para organizar e facilitar o acesso à diversas áreas de sua aplicação"
        type="components"
      />
      
      <div className="max-w-[1280px] mx-auto">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-6">Barra Lateral Básica</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              A barra lateral é um componente essencial para aplicações web modernas, 
              oferecendo uma navegação consistente e acessível.
            </p>
            
            <SidebarExample />
            
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-3">Implementação</h3>
              <CodeBlock code={sidebarCode} language="tsx" />
            </div>
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-6">Melhores Práticas</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Mantenha a navegação principal sempre visível, mesmo quando a barra lateral estiver recolhida.</li>
            <li>Use ícones consistentes e representativos para cada seção.</li>
            <li>Ofereça uma maneira clara de expandir e recolher a barra lateral.</li>
            <li>Em dispositivos móveis, considere ocultar a barra lateral por padrão.</li>
            <li>Destaque visualmente o item de navegação ativo para orientar o usuário.</li>
            <li>Agrupe itens relacionados para melhorar a organização.</li>
            <li>Use badges com moderação, apenas para informações realmente importantes.</li>
          </ul>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-6">Acessibilidade</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Certifique-se de que todos os elementos da barra lateral são acessíveis via teclado.</li>
            <li>Use atributos ARIA apropriados, como <code>aria-current="page"</code> para o item ativo.</li>
            <li>Forneça texto alternativo para ícones usando <code>aria-label</code> quando não houver texto visível.</li>
            <li>Mantenha um contraste adequado entre o texto e o fundo.</li>
            <li>Adicione <code>aria-expanded</code> para indicar o estado atual de menus expansíveis.</li>
            <li>Ofereça atalhos de teclado para mostrar/esconder a barra lateral.</li>
          </ul>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-6">Recursos Avançados</h2>
          <p className="mb-4 text-gray-700">
            Para exemplos mais avançados de barras laterais, incluindo grupos, submenus e outros recursos, 
            consulte a página <a href="/components/sidebar-layouts" className="text-primary-main hover:underline">Sidebar Layouts</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default SidebarNavigation;
