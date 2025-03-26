
import React, { useState } from 'react';
import Header from '@/components/library-components/Header';
import ComponentCard from '@/components/ComponentCard';
import { TailwindTabs } from '@/components/ui/tabs';
import { 
  Pagination, 
  PaginationContent, 
  PaginationEllipsis, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import CodeBlock from '@/components/CodeBlock';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PaginationPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Pagination"
        description="Interface de navegação para dividir conteúdo em páginas separadas."
        type="components"
      />
      
      <TailwindTabs
        defaultValue="overview"
        className="mt-6"
        tabs={[
          { name: 'Visão geral', value: 'overview' },
          { name: 'Exemplos', value: 'examples' },
          { name: 'API', value: 'api' }
        ]}
        variant="pillsGray"
        onChange={value => setActiveTab(value)}
      />
      
      <div className="mt-6">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <p className="text-gray-700">
              Componentes de paginação são usados para dividir grandes conjuntos de dados em partes menores e mais gerenciáveis, permitindo que os usuários naveguem entre páginas de conteúdo.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ComponentCard 
                title="Paginação Simples" 
                description="Estilo básico de paginação com botões de anterior/próximo e números de página."
                code={`<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`}
              >
                <div className="p-4 flex items-center justify-center">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" isActive>2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              </ComponentCard>

              <ComponentCard 
                title="Paginação Compacta" 
                description="Versão menor da paginação para espaços restritos."
                code={`<Pagination>
  <PaginationContent className="gap-0.5">
    <PaginationItem>
      <PaginationPrevious href="#" className="h-8 w-8 p-0" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" className="h-8 w-8 p-0">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive className="h-8 w-8 p-0">2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" className="h-8 w-8 p-0">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" className="h-8 w-8 p-0" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`}
              >
                <div className="p-4 flex items-center justify-center">
                  <Pagination>
                    <PaginationContent className="gap-0.5">
                      <PaginationItem>
                        <PaginationPrevious href="#" className="h-8 w-8 p-0" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" className="h-8 w-8 p-0">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" isActive className="h-8 w-8 p-0">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" className="h-8 w-8 p-0">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext href="#" className="h-8 w-8 p-0" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              </ComponentCard>
            </div>
          </div>
        )}
        
        {activeTab === 'examples' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Exemplos de variantes</h2>
            
            {/* Card footer with page buttons */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Card Footer com Botões de Página</h3>
              <p className="text-gray-700 mb-4">
                Uma variante de paginação incorporada em um rodapé de card, ideal para tabelas ou listas de dados.
              </p>
              
              <ComponentCard 
                title="Card Footer com Botões de Página"
                code={`<Card className="w-full">
  <CardContent className="p-6">
    <p>Conteúdo do card...</p>
  </CardContent>
  <CardFooter className="flex items-center justify-between border-t p-4">
    <div className="text-sm text-gray-500">
      Mostrando <strong>1</strong> a <strong>10</strong> de <strong>100</strong> resultados
    </div>
    <div className="flex items-center space-x-2">
      <Button
        variant="outline-secondary"
        size="sm"
        className="h-8 w-8 p-0"
        disabled
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline-secondary"
        size="sm"
        className="h-8 w-8 p-0"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  </CardFooter>
</Card>`}
              >
                <div className="w-full">
                  <Card className="w-full">
                    <CardContent className="p-6">
                      <p>Conteúdo do card...</p>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between border-t p-4">
                      <div className="text-sm text-gray-500">
                        Mostrando <strong>1</strong> a <strong>10</strong> de <strong>100</strong> resultados
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          className="h-8 w-8 p-0"
                          disabled
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              </ComponentCard>
            </div>
            
            {/* Centered page numbers */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Números de Página Centralizados</h3>
              <p className="text-gray-700 mb-4">
                Uma variante com números de página centralizados, ideal para interfaces limpas.
              </p>
              
              <ComponentCard 
                title="Números de Página Centralizados"
                code={`<div className="flex w-full items-center justify-center">
  <nav role="navigation" aria-label="pagination" className="flex w-auto justify-center">
    <ul className="flex flex-row items-center gap-1">
      <li>
        <a 
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border text-sm font-medium text-gray-500 shadow-sm transition-colors hover:border-gray-300 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          aria-label="Go to previous page"
        >
          <ChevronLeft className="h-4 w-4" />
        </a>
      </li>
      <li>
        <a 
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border text-sm font-medium text-gray-500 shadow-sm transition-colors hover:border-gray-300 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          1
        </a>
      </li>
      <li>
        <a 
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-primary-main bg-primary-main text-sm font-medium text-white shadow-sm transition-colors hover:border-primary-dark hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          aria-current="page"
        >
          2
        </a>
      </li>
      <li>
        <a 
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border text-sm font-medium text-gray-500 shadow-sm transition-colors hover:border-gray-300 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          3
        </a>
      </li>
      <li>
        <a 
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border text-sm font-medium text-gray-500 shadow-sm transition-colors hover:border-gray-300 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          aria-label="Go to next page"
        >
          <ChevronRight className="h-4 w-4" />
        </a>
      </li>
    </ul>
  </nav>
</div>`}
              >
                <div className="w-full">
                  <div className="flex w-full items-center justify-center">
                    <nav role="navigation" aria-label="pagination" className="flex w-auto justify-center">
                      <ul className="flex flex-row items-center gap-1">
                        <li>
                          <a 
                            className="inline-flex h-9 w-9 items-center justify-center rounded-md border text-sm font-medium text-gray-500 shadow-sm transition-colors hover:border-gray-300 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            aria-label="Go to previous page"
                          >
                            <ChevronLeft className="h-4 w-4" />
                          </a>
                        </li>
                        <li>
                          <a 
                            className="inline-flex h-9 w-9 items-center justify-center rounded-md border text-sm font-medium text-gray-500 shadow-sm transition-colors hover:border-gray-300 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                          >
                            1
                          </a>
                        </li>
                        <li>
                          <a 
                            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-primary-main bg-primary-main text-sm font-medium text-white shadow-sm transition-colors hover:border-primary-dark hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            aria-current="page"
                          >
                            2
                          </a>
                        </li>
                        <li>
                          <a 
                            className="inline-flex h-9 w-9 items-center justify-center rounded-md border text-sm font-medium text-gray-500 shadow-sm transition-colors hover:border-gray-300 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                          >
                            3
                          </a>
                        </li>
                        <li>
                          <a 
                            className="inline-flex h-9 w-9 items-center justify-center rounded-md border text-sm font-medium text-gray-500 shadow-sm transition-colors hover:border-gray-300 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            aria-label="Go to next page"
                          >
                            <ChevronRight className="h-4 w-4" />
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </ComponentCard>
            </div>
            
            {/* Simple card footer */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Rodapé de Card Simples</h3>
              <p className="text-gray-700 mb-4">
                Uma versão minimalista para rodapés de cards que economiza espaço.
              </p>
              
              <ComponentCard 
                title="Rodapé de Card Simples"
                code={`<Card className="w-full">
  <CardContent className="p-6">
    <p>Conteúdo do card...</p>
  </CardContent>
  <CardFooter className="flex justify-between border-t p-4">
    <Button
      variant="outline-secondary"
      size="sm"
      className="gap-1"
    >
      <ChevronLeft className="h-4 w-4" />
      Anterior
    </Button>
    <Button
      variant="outline-secondary"
      size="sm"
      className="gap-1"
    >
      Próximo
      <ChevronRight className="h-4 w-4" />
    </Button>
  </CardFooter>
</Card>`}
              >
                <div className="w-full">
                  <Card className="w-full">
                    <CardContent className="p-6">
                      <p>Conteúdo do card...</p>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t p-4">
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        className="gap-1"
                      >
                        <ChevronLeft className="h-4 w-4" />
                        Anterior
                      </Button>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        className="gap-1"
                      >
                        Próximo
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </ComponentCard>
            </div>
          </div>
        )}
        
        {activeTab === 'api' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">API</h2>
              <p className="text-gray-700 mb-6">Os componentes básicos para construir interfaces de paginação.</p>
              
              <div className="rounded-lg border border-gray-200 overflow-hidden mb-6">
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                  <h3 className="font-medium">Pagination</h3>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-700 mb-4">Componente de container principal para a paginação.</p>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Propriedade</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Padrão</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descrição</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">className</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Classes CSS adicionais para estilização.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg border border-gray-200 overflow-hidden mb-6">
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                  <h3 className="font-medium">PaginationContent</h3>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-700 mb-4">Contém os itens de paginação.</p>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Propriedade</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Padrão</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descrição</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">className</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Classes CSS adicionais para estilização.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg border border-gray-200 overflow-hidden mb-6">
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                  <h3 className="font-medium">PaginationLink</h3>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-700 mb-4">Linkagem para páginas específicas.</p>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Propriedade</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Padrão</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descrição</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">isActive</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Define se o link está ativo.</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">className</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Classes CSS adicionais para estilização.</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">size</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">"default" | "sm" | "lg" | "icon"</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">"icon"</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Tamanho do link.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg border border-gray-200 overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                  <h3 className="font-medium">Importação</h3>
                </div>
                <div className="p-4">
                  <CodeBlock
                    code={`import { 
  Pagination, 
  PaginationContent, 
  PaginationEllipsis, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination"`}
                    language="tsx"
                    title="Componentes de Paginação"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaginationPage;
