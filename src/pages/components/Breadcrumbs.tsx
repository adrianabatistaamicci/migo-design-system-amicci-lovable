
import React, { useState } from 'react';
import Header from '@/components/library-components/Header';
import { TailwindTabs } from '@/components/ui/tabs';
import CodeBlock from '@/components/CodeBlock';
import { ChevronRight, Home, Folder, FileText, Circle, MoreHorizontal } from 'lucide-react';
import ComponentCard from '@/components/ComponentCard';

const Breadcrumbs = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const basicExample = `// Implementação básica com Tailwind CSS puro
<nav className="flex" aria-label="Breadcrumb">
  <ol className="flex flex-wrap items-center gap-1.5 text-sm text-gray-600">
    <li className="inline-flex items-center">
      <a href="#" className="hover:text-gray-900 transition-colors">
        Home
      </a>
    </li>
    <li role="presentation" aria-hidden="true" className="flex items-center">
      <ChevronRight className="h-3.5 w-3.5" />
    </li>
    <li className="inline-flex items-center">
      <a href="#" className="hover:text-gray-900 transition-colors">
        Components
      </a>
    </li>
    <li role="presentation" aria-hidden="true" className="flex items-center">
      <ChevronRight className="h-3.5 w-3.5" />
    </li>
    <li className="inline-flex items-center">
      <span role="link" aria-disabled="true" aria-current="page" className="font-normal text-gray-900">
        Breadcrumb
      </span>
    </li>
  </ol>
</nav>`;

  const withIconsExample = `// Implementação com ícones usando Tailwind CSS puro
import { Home, ChevronRight, Folder, FileText } from "lucide-react"

<nav className="flex" aria-label="Breadcrumb">
  <ol className="flex flex-wrap items-center gap-1.5 text-sm text-gray-600">
    <li className="inline-flex items-center gap-1.5">
      <a href="#" className="inline-flex items-center hover:text-gray-900 transition-colors">
        <Home className="h-4 w-4 mr-1" />
        Home
      </a>
    </li>
    <li role="presentation" aria-hidden="true" className="flex items-center">
      <ChevronRight className="h-3.5 w-3.5" />
    </li>
    <li className="inline-flex items-center gap-1.5">
      <a href="#" className="inline-flex items-center hover:text-gray-900 transition-colors">
        <Folder className="h-4 w-4 mr-1" />
        Components
      </a>
    </li>
    <li role="presentation" aria-hidden="true" className="flex items-center">
      <ChevronRight className="h-3.5 w-3.5" />
    </li>
    <li className="inline-flex items-center gap-1.5">
      <span role="link" aria-disabled="true" aria-current="page" className="inline-flex items-center font-normal text-gray-900">
        <FileText className="h-4 w-4 mr-1" />
        Breadcrumb
      </span>
    </li>
  </ol>
</nav>`;

  const collapsibleExample = `// Implementação com elipses (colapsável) usando Tailwind CSS puro
import { ChevronRight, MoreHorizontal } from "lucide-react"

<nav className="flex" aria-label="Breadcrumb">
  <ol className="flex flex-wrap items-center gap-1.5 text-sm text-gray-600">
    <li className="inline-flex items-center">
      <a href="#" className="hover:text-gray-900 transition-colors">
        Home
      </a>
    </li>
    <li role="presentation" aria-hidden="true" className="flex items-center">
      <ChevronRight className="h-3.5 w-3.5" />
    </li>
    <li className="inline-flex items-center">
      <span role="presentation" aria-hidden="true" className="flex h-9 w-9 items-center justify-center">
        <MoreHorizontal className="h-4 w-4" />
        <span className="sr-only">More</span>
      </span>
    </li>
    <li role="presentation" aria-hidden="true" className="flex items-center">
      <ChevronRight className="h-3.5 w-3.5" />
    </li>
    <li className="inline-flex items-center">
      <a href="#" className="hover:text-gray-900 transition-colors">
        Folder
      </a>
    </li>
    <li role="presentation" aria-hidden="true" className="flex items-center">
      <ChevronRight className="h-3.5 w-3.5" />
    </li>
    <li className="inline-flex items-center">
      <span role="link" aria-disabled="true" aria-current="page" className="font-normal text-gray-900">
        Breadcrumb
      </span>
    </li>
  </ol>
</nav>`;

  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Breadcrumbs"
        description="Uma trilha de navegação que ajuda os usuários a entenderem a hierarquia da página atual dentro do site."
        type="components"
      />
      
      <TailwindTabs
        defaultValue="overview"
        className="mt-6"
        tabs={[
          { name: 'Visão geral', value: 'overview' },
          { name: 'Exemplos', value: 'examples' }
        ]}
        variant="pillsGray"
        onChange={value => setActiveTab(value)}
      />
      
      <div className="mt-6">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-medium mb-4">Sobre Breadcrumbs</h2>
              <p className="text-gray-700">
                Breadcrumbs são elementos de navegação que mostram a hierarquia e o caminho atual do usuário dentro de um site ou aplicação.
                Eles ajudam os usuários a entenderem onde estão e permitem voltar facilmente a níveis anteriores da hierarquia.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-medium mb-4">Anatomia do Componente com Tailwind</h2>
              <p className="text-gray-700 mb-4">
                Uma implementação de breadcrumb com Tailwind CSS tipicamente contém:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">nav</code> - Elemento semântico para navegação</li>
                <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">ol</code> - Lista ordenada que contém os itens do breadcrumb</li>
                <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">li</code> - Itens de lista para cada segmento do caminho</li>
                <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">a</code> - Links para navegar para níveis anteriores</li>
                <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">span</code> - Elemento para a página atual (não clicável)</li>
                <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">ChevronRight</code> ou outro ícone - Separador visual entre itens</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-medium mb-4">Classes Tailwind Comuns</h2>
              <CodeBlock 
                code={`// Classes para o container principal
nav className="flex" aria-label="Breadcrumb"

// Classes para a lista
ol className="flex flex-wrap items-center gap-1.5 text-sm text-gray-600"

// Classes para itens de lista
li className="inline-flex items-center gap-1.5"

// Classes para links
a className="hover:text-gray-900 transition-colors"

// Classes para página atual
span className="font-normal text-gray-900"

// Classes para separadores
li role="presentation" aria-hidden="true" className="flex items-center"`} 
                language="typescript" 
                title="Classes Tailwind Comuns"
              />
            </div>
            
            <div>
              <h2 className="text-xl font-medium mb-4">Melhores Práticas</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Use breadcrumbs em sites ou aplicações com hierarquia de mais de dois níveis</li>
                <li>Coloque breadcrumbs próximo ao topo da página, geralmente abaixo do cabeçalho principal</li>
                <li>Ordene os itens do breadcrumb do menos específico (home) para o mais específico (página atual)</li>
                <li>Torne todos os itens clicáveis, exceto o item atual (último item)</li>
                <li>Use separadores consistentes entre os itens para melhor legibilidade</li>
                <li>Adicione atributos de acessibilidade (<code>aria-*</code>) para melhorar a experiência de leitores de tela</li>
                <li>Para caminhos muito profundos, considere implementar um formato colapsado com elipses</li>
              </ul>
            </div>
          </div>
        )}
        
        {activeTab === 'examples' && (
          <div className="space-y-10">
            <div>
              <h2 className="text-xl font-medium mb-4">Exemplo Básico</h2>
              <ComponentCard 
                title="Breadcrumb Básico" 
                description="Um breadcrumb simples com links e separadores"
                code={basicExample}
              >
                <nav className="flex" aria-label="Breadcrumb">
                  <ol className="flex flex-wrap items-center gap-1.5 text-sm text-gray-600">
                    <li className="inline-flex items-center">
                      <a href="#" className="hover:text-gray-900 transition-colors">
                        Home
                      </a>
                    </li>
                    <li role="presentation" aria-hidden="true" className="flex items-center">
                      <ChevronRight className="h-3.5 w-3.5" />
                    </li>
                    <li className="inline-flex items-center">
                      <a href="#" className="hover:text-gray-900 transition-colors">
                        Components
                      </a>
                    </li>
                    <li role="presentation" aria-hidden="true" className="flex items-center">
                      <ChevronRight className="h-3.5 w-3.5" />
                    </li>
                    <li className="inline-flex items-center">
                      <span role="link" aria-disabled="true" aria-current="page" className="font-normal text-gray-900">
                        Breadcrumb
                      </span>
                    </li>
                  </ol>
                </nav>
              </ComponentCard>
              <CodeBlock 
                code={basicExample} 
                language="tsx" 
                title="Exemplo Básico"
              />
            </div>
            
            <div>
              <h2 className="text-xl font-medium mb-4">Com Ícones</h2>
              <ComponentCard 
                title="Breadcrumb com Ícones" 
                description="Breadcrumb com ícones para cada item"
                code={withIconsExample}
              >
                <nav className="flex" aria-label="Breadcrumb">
                  <ol className="flex flex-wrap items-center gap-1.5 text-sm text-gray-600">
                    <li className="inline-flex items-center gap-1.5">
                      <a href="#" className="inline-flex items-center hover:text-gray-900 transition-colors">
                        <Home className="h-4 w-4 mr-1" />
                        Home
                      </a>
                    </li>
                    <li role="presentation" aria-hidden="true" className="flex items-center">
                      <ChevronRight className="h-3.5 w-3.5" />
                    </li>
                    <li className="inline-flex items-center gap-1.5">
                      <a href="#" className="inline-flex items-center hover:text-gray-900 transition-colors">
                        <Folder className="h-4 w-4 mr-1" />
                        Components
                      </a>
                    </li>
                    <li role="presentation" aria-hidden="true" className="flex items-center">
                      <ChevronRight className="h-3.5 w-3.5" />
                    </li>
                    <li className="inline-flex items-center gap-1.5">
                      <span role="link" aria-disabled="true" aria-current="page" className="inline-flex items-center font-normal text-gray-900">
                        <FileText className="h-4 w-4 mr-1" />
                        Breadcrumb
                      </span>
                    </li>
                  </ol>
                </nav>
              </ComponentCard>
              <CodeBlock 
                code={withIconsExample} 
                language="tsx" 
                title="Com Ícones"
              />
            </div>
            
            <div>
              <h2 className="text-xl font-medium mb-4">Com Elipses (Colapsado)</h2>
              <ComponentCard 
                title="Breadcrumb Colapsado" 
                description="Breadcrumb com elipses para caminhos longos"
                code={collapsibleExample}
              >
                <nav className="flex" aria-label="Breadcrumb">
                  <ol className="flex flex-wrap items-center gap-1.5 text-sm text-gray-600">
                    <li className="inline-flex items-center">
                      <a href="#" className="hover:text-gray-900 transition-colors">
                        Home
                      </a>
                    </li>
                    <li role="presentation" aria-hidden="true" className="flex items-center">
                      <ChevronRight className="h-3.5 w-3.5" />
                    </li>
                    <li className="inline-flex items-center">
                      <span role="presentation" aria-hidden="true" className="flex h-9 w-9 items-center justify-center">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">More</span>
                      </span>
                    </li>
                    <li role="presentation" aria-hidden="true" className="flex items-center">
                      <ChevronRight className="h-3.5 w-3.5" />
                    </li>
                    <li className="inline-flex items-center">
                      <a href="#" className="hover:text-gray-900 transition-colors">
                        Folder
                      </a>
                    </li>
                    <li role="presentation" aria-hidden="true" className="flex items-center">
                      <ChevronRight className="h-3.5 w-3.5" />
                    </li>
                    <li className="inline-flex items-center">
                      <span role="link" aria-disabled="true" aria-current="page" className="font-normal text-gray-900">
                        Breadcrumb
                      </span>
                    </li>
                  </ol>
                </nav>
              </ComponentCard>
              <CodeBlock 
                code={collapsibleExample} 
                language="tsx" 
                title="Com Elipses (Colapsado)"
              />
            </div>
            
            <div>
              <h2 className="text-xl font-medium mb-4">Customização</h2>
              <p className="text-gray-700 mb-4">
                Você pode customizar a aparência dos breadcrumbs usando diferentes classes do Tailwind:
              </p>
              <ComponentCard 
                title="Breadcrumb Customizado" 
                description="Versão personalizada com fundo cinza e ícones circulares"
                code={`// Breadcrumb customizado com classes Tailwind
<nav className="flex" aria-label="Breadcrumb">
  <ol className="flex flex-wrap items-center p-2 rounded-lg bg-gray-100">
    <li className="inline-flex items-center">
      <a href="#" className="text-blue-600 hover:text-blue-800 inline-flex items-center">
        <Circle className="h-3 w-3 mr-1" />
        Início
      </a>
    </li>
    <li role="presentation" aria-hidden="true" className="flex items-center text-gray-400">
      <ChevronRight className="h-3.5 w-3.5" />
    </li>
    <li className="inline-flex items-center">
      <a href="#" className="text-blue-600 hover:text-blue-800 inline-flex items-center">
        <Circle className="h-3 w-3 mr-1" />
        Componentes
      </a>
    </li>
    <li role="presentation" aria-hidden="true" className="flex items-center text-gray-400">
      <ChevronRight className="h-3.5 w-3.5" />
    </li>
    <li className="inline-flex items-center">
      <span role="link" aria-disabled="true" aria-current="page" className="font-bold">
        Breadcrumb
      </span>
    </li>
  </ol>
</nav>`}
              >
                <nav className="flex" aria-label="Breadcrumb">
                  <ol className="flex flex-wrap items-center p-2 rounded-lg bg-gray-100">
                    <li className="inline-flex items-center">
                      <a href="#" className="text-blue-600 hover:text-blue-800 inline-flex items-center">
                        <Circle className="h-3 w-3 mr-1" />
                        Início
                      </a>
                    </li>
                    <li role="presentation" aria-hidden="true" className="flex items-center text-gray-400">
                      <ChevronRight className="h-3.5 w-3.5" />
                    </li>
                    <li className="inline-flex items-center">
                      <a href="#" className="text-blue-600 hover:text-blue-800 inline-flex items-center">
                        <Circle className="h-3 w-3 mr-1" />
                        Componentes
                      </a>
                    </li>
                    <li role="presentation" aria-hidden="true" className="flex items-center text-gray-400">
                      <ChevronRight className="h-3.5 w-3.5" />
                    </li>
                    <li className="inline-flex items-center">
                      <span role="link" aria-disabled="true" aria-current="page" className="font-bold">
                        Breadcrumb
                      </span>
                    </li>
                  </ol>
                </nav>
              </ComponentCard>
              <CodeBlock 
                code={`// Breadcrumb customizado com classes Tailwind
<nav className="flex" aria-label="Breadcrumb">
  <ol className="flex flex-wrap items-center p-2 rounded-lg bg-gray-100">
    <li className="inline-flex items-center">
      <a href="#" className="text-blue-600 hover:text-blue-800 inline-flex items-center">
        <Circle className="h-3 w-3 mr-1" />
        Início
      </a>
    </li>
    <li role="presentation" aria-hidden="true" className="flex items-center text-gray-400">
      <ChevronRight className="h-3.5 w-3.5" />
    </li>
    <li className="inline-flex items-center">
      <a href="#" className="text-blue-600 hover:text-blue-800 inline-flex items-center">
        <Circle className="h-3 w-3 mr-1" />
        Componentes
      </a>
    </li>
    <li role="presentation" aria-hidden="true" className="flex items-center text-gray-400">
      <ChevronRight className="h-3.5 w-3.5" />
    </li>
    <li className="inline-flex items-center">
      <span role="link" aria-disabled="true" aria-current="page" className="font-bold">
        Breadcrumb
      </span>
    </li>
  </ol>
</nav>`} 
                language="tsx" 
                title="Customização com Tailwind"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Breadcrumbs;
