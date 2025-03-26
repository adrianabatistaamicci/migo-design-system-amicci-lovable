
import React, { useState } from 'react';
import Header from '@/components/library-components/Header';
import { TailwindTabs } from '@/components/ui/tabs';
import CodeBlock from '@/components/CodeBlock';
import { 
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis
} from '@/components/ui/breadcrumb';
import { Home, ChevronRight, Circle, Folder, FileText } from 'lucide-react';

const Breadcrumbs = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const basicExample = `import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function BreadcrumbDemo() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}`;

  const withIconsExample = `import { Home, ChevronRight, Folder, FileText } from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function BreadcrumbWithIconsDemo() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">
            <Home className="h-4 w-4 mr-1" />
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight className="h-4 w-4" />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">
            <Folder className="h-4 w-4 mr-1" />
            Components
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight className="h-4 w-4" />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>
            <FileText className="h-4 w-4 mr-1" />
            Breadcrumb
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}`;

  const collapsibleExample = `import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis
} from "@/components/ui/breadcrumb"

export function BreadcrumbCollapsibleDemo() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/components/breadcrumb/folder">Folder</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}`;

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
              <h2 className="text-xl font-medium mb-4">Anatomia do Componente</h2>
              <p className="text-gray-700 mb-4">
                O componente Breadcrumb é composto por vários subcomponentes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">Breadcrumb</code> - Contêiner principal do componente</li>
                <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">BreadcrumbList</code> - Lista ordenada que contém os itens do breadcrumb</li>
                <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">BreadcrumbItem</code> - Item individual dentro da lista</li>
                <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">BreadcrumbLink</code> - Link para navegar para um nível específico</li>
                <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">BreadcrumbPage</code> - Representa a página atual (último item, não clicável)</li>
                <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">BreadcrumbSeparator</code> - Separador visual entre itens</li>
                <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">BreadcrumbEllipsis</code> - Indicador de itens colapsados/omitidos</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-medium mb-4">Importação</h2>
              <CodeBlock 
                code={`import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis
} from "@/components/ui/breadcrumb"`} 
                language="typescript" 
                title="Importação"
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
                <li>Para caminhos muito profundos, considere usar o componente BreadcrumbEllipsis para colapsar itens intermediários</li>
              </ul>
            </div>
          </div>
        )}
        
        {activeTab === 'examples' && (
          <div className="space-y-10">
            <div>
              <h2 className="text-xl font-medium mb-4">Exemplo Básico</h2>
              <div className="border rounded-lg p-6 bg-white">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">Components</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
              <CodeBlock 
                code={basicExample} 
                language="tsx" 
                title="Exemplo Básico"
              />
            </div>
            
            <div>
              <h2 className="text-xl font-medium mb-4">Com Ícones</h2>
              <div className="border rounded-lg p-6 bg-white">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">
                        <Home className="h-4 w-4 mr-1" />
                        Home
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                      <ChevronRight className="h-4 w-4" />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">
                        <Folder className="h-4 w-4 mr-1" />
                        Components
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                      <ChevronRight className="h-4 w-4" />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                      <BreadcrumbPage>
                        <FileText className="h-4 w-4 mr-1" />
                        Breadcrumb
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
              <CodeBlock 
                code={withIconsExample} 
                language="tsx" 
                title="Com Ícones"
              />
            </div>
            
            <div>
              <h2 className="text-xl font-medium mb-4">Com Elipses (Colapsado)</h2>
              <div className="border rounded-lg p-6 bg-white">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbEllipsis />
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">Folder</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
              <CodeBlock 
                code={collapsibleExample} 
                language="tsx" 
                title="Com Elipses (Colapsado)"
              />
            </div>
            
            <div>
              <h2 className="text-xl font-medium mb-4">Customização</h2>
              <p className="text-gray-700 mb-4">
                Você pode customizar a aparência dos breadcrumbs usando classes do Tailwind:
              </p>
              <div className="border rounded-lg p-6 bg-white">
                <Breadcrumb>
                  <BreadcrumbList className="bg-gray-100 p-2 rounded-lg">
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#" className="text-blue-600 hover:text-blue-800">
                        <Circle className="h-3 w-3 mr-1" />
                        Início
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="text-gray-400" />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#" className="text-blue-600 hover:text-blue-800">
                        <Circle className="h-3 w-3 mr-1" />
                        Componentes
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="text-gray-400" />
                    <BreadcrumbItem>
                      <BreadcrumbPage className="font-bold">Breadcrumb</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
              <CodeBlock 
                code={`<Breadcrumb>
  <BreadcrumbList className="bg-gray-100 p-2 rounded-lg">
    <BreadcrumbItem>
      <BreadcrumbLink href="#" className="text-blue-600 hover:text-blue-800">
        <Circle className="h-3 w-3 mr-1" />
        Início
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator className="text-gray-400" />
    <BreadcrumbItem>
      <BreadcrumbLink href="#" className="text-blue-600 hover:text-blue-800">
        <Circle className="h-3 w-3 mr-1" />
        Componentes
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator className="text-gray-400" />
    <BreadcrumbItem>
      <BreadcrumbPage className="font-bold">Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`} 
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
