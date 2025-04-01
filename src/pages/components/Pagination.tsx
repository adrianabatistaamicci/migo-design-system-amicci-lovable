
/**
 * @protected
 * ATENÇÃO: Este arquivo contém conteúdo finalizado e aprovado.
 * Não deve ser alterado diretamente pelo assistente AI.
 * Apenas atualizações de componentes devem ser refletidas.
 */

import React, { useState } from 'react';
import ComponentCard from '@/components/ComponentCard';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { cn } from '@/lib/utils';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import Header from '@/components/library-components/Header';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const PaginationPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState("10");
  
  return (
    <div className="w-full animate-slide-in">
      <div className="mb-12">
        <Header 
          title="Pagination"
          description="Pagination components allow users to navigate through pages of content."
          type="components"
          className="mb-6"
        />
        
        <div className="mb-12">
          <h2 className="text-2xl font-medium text-mui-text-primary mb-6">
            Import
          </h2>
          
          <ComponentCard
            title="Import statement"
            showCodeBlockInside={true}
            code={`import {'{ Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious }'} from "@/components/ui/pagination";`}
            codeBlockTitle="Importação dos componentes de paginação"
            codeBlockLanguage="tsx"
          >
            <p className="text-sm text-gray-700">Import os componentes de paginação para utilizá-los em seu projeto.</p>
          </ComponentCard>
        </div>
        
        <div className="space-y-12">
          <ComponentCard 
            title="Paginação Simples" 
            description="Estilo básico de paginação com botões de anterior/próximo e números de página."
            showCodeBlockInside={true}
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
            codeBlockTitle="Exemplo de Paginação Simples"
            codeBlockLanguage="tsx"
          >
            <div className="flex items-center justify-center p-6">
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
            showCodeBlockInside={true}
            code={`<Pagination>
  <PaginationContent className="gap-0.5">
    <PaginationItem>
      <PaginationLink href="#" className="h-8 w-8 p-0">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive className="h-8 w-8 p-0">2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" className="h-8 w-8 p-0">3</PaginationLink>
    </PaginationItem>
  </PaginationContent>
</Pagination>`}
            codeBlockTitle="Exemplo de Paginação Compacta"
            codeBlockLanguage="tsx"
          >
            <div className="flex items-center justify-center p-6">
              <Pagination>
                <PaginationContent className="gap-0.5">
                  <PaginationItem>
                    <PaginationLink href="#" className="h-8 w-8 p-0">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive className="h-8 w-8 p-0">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" className="h-8 w-8 p-0">3</PaginationLink>
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Paginação com Select de Itens por Página" 
            description="Paginação com seletor para controlar o número de itens exibidos por página."
            showCodeBlockInside={true}
            code={`<div className="flex flex-col sm:flex-row items-center justify-end w-full gap-4">
  <div className="flex items-center gap-2">
    <label htmlFor="linhas-por-pagina" className="text-sm text-gray-700">
      Linhas por página:
    </label>
    <Select defaultValue="20">
      <SelectTrigger id="linhas-por-pagina" className="w-[70px] h-9">
        <SelectValue placeholder="20" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="10">10</SelectItem>
        <SelectItem value="20">20</SelectItem>
        <SelectItem value="50">50</SelectItem>
        <SelectItem value="100">100</SelectItem>
      </SelectContent>
    </Select>
  </div>
  
  <div className="text-sm text-gray-700">
    1-5 of 13
  </div>
  
  <div className="flex items-center gap-2">
    <Button variant="outline" size="icon" className="h-10 w-10" disabled>
      <ChevronLeft className="h-4 w-4" />
    </Button>
    <Button variant="outline" size="icon" className="h-10 w-10">
      <ChevronRight className="h-4 w-4" />
    </Button>
  </div>
</div>`}
            codeBlockTitle="Exemplo de Paginação com Select"
            codeBlockLanguage="tsx"
          >
            <div className="flex items-center justify-center p-6 w-full">
              <div className="flex flex-col sm:flex-row items-center justify-end w-full gap-4">
                <div className="flex items-center gap-2">
                  <label htmlFor="linhas-por-pagina" className="text-sm text-gray-700">
                    Linhas por página:
                  </label>
                  <Select defaultValue="20">
                    <SelectTrigger id="linhas-por-pagina" className="w-[70px] h-9">
                      <SelectValue placeholder="20" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="20">20</SelectItem>
                      <SelectItem value="50">50</SelectItem>
                      <SelectItem value="100">100</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="text-sm text-gray-700">
                  1-5 of 13
                </div>
                
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" className="h-10 w-10" disabled>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-10 w-10">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Card Footer com Botões de Página" 
            description="Uma variante de paginação incorporada em um rodapé de card, ideal para tabelas ou listas de dados."
            showCodeBlockInside={true}
            code={`<div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
  <div className="flex flex-1 justify-between sm:hidden">
    <a
      href="#"
      className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
    >
      Anterior
    </a>
    <a
      href="#"
      className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
    >
      Próximo
    </a>
  </div>
  <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
    <div>
      <p className="text-sm text-gray-700">
        Mostrando <span className="font-medium">1</span> a <span className="font-medium">10</span> de{' '}
        <span className="font-medium">97</span> resultados
      </p>
    </div>
    <div>
      <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
        <a
          href="#"
          className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >
          <span className="sr-only">Anterior</span>
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </a>
        <a
          href="#"
          aria-current="page"
          className="relative z-10 inline-flex items-center bg-primary-main px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-main"
        >
          1
        </a>
        <a
          href="#"
          className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >
          2
        </a>
        <a
          href="#"
          className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
        >
          3
        </a>
        <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
          ...
        </span>
        <a
          href="#"
          className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
        >
          8
        </a>
        <a
          href="#"
          className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >
          9
        </a>
        <a
          href="#"
          className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >
          10
        </a>
        <a
          href="#"
          className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >
          <span className="sr-only">Próximo</span>
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </a>
      </nav>
    </div>
  </div>
</div>`}
            codeBlockTitle="Exemplo de Card Footer com Paginação"
            codeBlockLanguage="tsx"
          >
            <div className="w-full">
              <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                <div className="flex flex-1 justify-between sm:hidden">
                  <a
                    href="#"
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Anterior
                  </a>
                  <a
                    href="#"
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Próximo
                  </a>
                </div>
                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-gray-700">
                      Mostrando <span className="font-medium">1</span> a <span className="font-medium">10</span> de{' '}
                      <span className="font-medium">97</span> resultados
                    </p>
                  </div>
                  <div>
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                      <a
                        href="#"
                        className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                      >
                        <span className="sr-only">Anterior</span>
                        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                      </a>
                      <a
                        href="#"
                        aria-current="page"
                        className="relative z-10 inline-flex items-center bg-primary-main px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-main"
                      >
                        1
                      </a>
                      <a
                        href="#"
                        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                      >
                        2
                      </a>
                      <a
                        href="#"
                        className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                      >
                        3
                      </a>
                      <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                        ...
                      </span>
                      <a
                        href="#"
                        className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                      >
                        8
                      </a>
                      <a
                        href="#"
                        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                      >
                        9
                      </a>
                      <a
                        href="#"
                        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                      >
                        10
                      </a>
                      <a
                        href="#"
                        className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                      >
                        <span className="sr-only">Próximo</span>
                        <ChevronRight className="h-5 w-5" aria-hidden="true" />
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Números de Página Centralizados" 
            description="Uma variante com números de página centralizados, ideal para interfaces limpas."
            showCodeBlockInside={true}
            code={`<div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
  <div className="flex flex-1 justify-between sm:hidden">
    <a
      href="#"
      className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
    >
      Anterior
    </a>
    <a
      href="#"
      className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
    >
      Próximo
    </a>
  </div>
  <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
    <div>
      <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
        <a
          href="#"
          className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >
          <span className="sr-only">Anterior</span>
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </a>
        <a
          href="#"
          aria-current="page"
          className="relative z-10 inline-flex items-center bg-primary-main px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-main"
        >
          1
        </a>
        <a
          href="#"
          className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >
          2
        </a>
        <a
          href="#"
          className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
        >
          3
        </a>
        <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
          ...
        </span>
        <a
          href="#"
          className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
        >
          8
        </a>
        <a
          href="#"
          className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >
          9
        </a>
        <a
          href="#"
          className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >
          10
        </a>
        <a
          href="#"
          className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >
          <span className="sr-only">Próximo</span>
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </a>
      </nav>
    </div>
  </div>
</div>`}
            codeBlockTitle="Exemplo de Paginação Centralizada"
            codeBlockLanguage="tsx"
          >
            <div className="w-full">
              <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                <div className="flex flex-1 justify-between sm:hidden">
                  <a
                    href="#"
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Anterior
                  </a>
                  <a
                    href="#"
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Próximo
                  </a>
                </div>
                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
                  <div>
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                      <a
                        href="#"
                        className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                      >
                        <span className="sr-only">Anterior</span>
                        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                      </a>
                      <a
                        href="#"
                        aria-current="page"
                        className="relative z-10 inline-flex items-center bg-primary-main px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-main"
                      >
                        1
                      </a>
                      <a
                        href="#"
                        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                      >
                        2
                      </a>
                      <a
                        href="#"
                        className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                      >
                        3
                      </a>
                      <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                        ...
                      </span>
                      <a
                        href="#"
                        className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                      >
                        8
                      </a>
                      <a
                        href="#"
                        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                      >
                        9
                      </a>
                      <a
                        href="#"
                        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                      >
                        10
                      </a>
                      <a
                        href="#"
                        className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                      >
                        <span className="sr-only">Próximo</span>
                        <ChevronRight className="h-5 w-5" aria-hidden="true" />
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Rodapé de Card Simples" 
            description="Uma versão minimalista para rodapés de cards que economiza espaço."
            showCodeBlockInside={true}
            code={`<nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
  <div className="-mt-px flex w-0 flex-1">
    <a
      href="#"
      className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
    >
      <ChevronLeft className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
      Anterior
    </a>
  </div>
  <div className="hidden md:-mt-px md:flex">
    <a
      href="#"
      className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
    >
      1
    </a>
    <a
      href="#"
      className="inline-flex items-center border-t-2 border-amicci-500 px-4 pt-4 text-sm font-medium text-amicci-600"
      aria-current="page"
    >
      2
    </a>
    <a
      href="#"
      className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
    >
      3
    </a>
    <span className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500">
      ...
    </span>
    <a
      href="#"
      className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
    >
      8
    </a>
    <a
      href="#"
      className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
    >
      9
    </a>
    <a
      href="#"
      className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
    >
      10
    </a>
  </div>
  <div className="-mt-px flex w-0 flex-1 justify-end">
    <a
      href="#"
      className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
    >
      Próximo
      <ChevronRight className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
    </a>
  </div>
</nav>`}
            codeBlockTitle="Exemplo de Rodapé de Card com Paginação"
            codeBlockLanguage="tsx"
          >
            <div className="w-full">
              <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
                <div className="-mt-px flex w-0 flex-1">
                  <a
                    href="#"
                    className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    <ChevronLeft className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                    Anterior
                  </a>
                </div>
                <div className="hidden md:-mt-px md:flex">
                  <a
                    href="#"
                    className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center border-t-2 border-amicci-500 px-4 pt-4 text-sm font-medium text-amicci-600"
                    aria-current="page"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    3
                  </a>
                  <span className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500">
                    ...
                  </span>
                  <a
                    href="#"
                    className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    8
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    9
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    10
                  </a>
                </div>
                <div className="-mt-px flex w-0 flex-1 justify-end">
                  <a
                    href="#"
                    className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Próximo
                    <ChevronRight className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                  </a>
                </div>
              </nav>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Card Footer com Componentes shadcn/ui" 
            description="Uma variante de paginação incorporada em um card utilizando componentes shadcn/ui."
            showCodeBlockInside={true}
            code={`<Card>
  <CardContent className="p-6">
    <p>Conteúdo do card aqui...</p>
  </CardContent>
  <CardFooter className="flex justify-between border-t border-gray-200 px-6 py-4">
    <div className="flex space-x-2">
      <Button
        variant="outline"
        size="sm"
        className="h-8 px-2"
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        Anterior
      </Button>
      <Button 
        variant="outline"
        size="sm"
        className="h-8 px-2"
      >
        Próximo
        <ChevronRight className="h-4 w-4 ml-1" />
      </Button>
    </div>
  </CardFooter>
</Card>`}
            codeBlockTitle="Exemplo de Card Footer com shadcn/ui"
            codeBlockLanguage="tsx"
          >
            <Card>
              <CardContent className="p-6">
                <p>Conteúdo do card aqui...</p>
              </CardContent>
              <CardFooter className="flex justify-between border-t border-gray-200 px-6 py-4">
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 px-2"
                  >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Anterior
                  </Button>
                  <Button 
                    variant="outline"
                    size="sm"
                    className="h-8 px-2"
                  >
                    Próximo
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </ComponentCard>
          
          <div className="mt-10">
            <h2 className="text-2xl font-medium text-mui-text-primary mb-6">
              Uso com Componentes JavaScript
            </h2>
            
            <p className="mb-4">
              Para implementar paginação em componentes React interativos, utilize state para controlar a página atual:
            </p>
            
            <ComponentCard
              title="Exemplo Básico de Paginação com React"
              showCodeBlockInside={true}
              code={`import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PaginationExample = ({ totalItems, itemsPerPage = 10 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  const goToNextPage = () => {
    setCurrentPage((page) => Math.min(page + 1, totalPages));
  };
  
  const goToPreviousPage = () => {
    setCurrentPage((page) => Math.max(page - 1, 1));
  };
  
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  // Calcula os itens que devem ser exibidos na página atual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  
  return (
    <div className="mt-4">
      <div className="text-sm text-gray-700 mb-2">
        Mostrando {startIndex + 1} a {endIndex} de {totalItems} resultados
      </div>
      
      <div className="flex items-center space-x-2">
        <Button 
          variant="outline" 
          onClick={goToPreviousPage} 
          disabled={currentPage === 1}
          size="sm"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Anterior
        </Button>
        
        <div className="flex items-center space-x-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              size="sm"
              className="h-8 w-8 p-0"
              onClick={() => goToPage(page)}
            >
              {page}
            </Button>
          ))}
        </div>
        
        <Button 
          variant="outline" 
          onClick={goToNextPage} 
          disabled={currentPage === totalPages}
          size="sm"
        >
          Próximo
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
    </div>
  );
};

export default PaginationExample;`}
              codeBlockTitle="Implementação de Paginação com React"
              codeBlockLanguage="tsx"
            >
              <p className="mb-4">Este exemplo demonstra como criar uma paginação interativa utilizando React state e componentes do shadcn/ui.</p>
              <div className="p-4 border rounded-md">
                <div className="mb-2 text-sm text-gray-700">
                  Mostrando 1 a 10 de 35 resultados
                </div>
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                  >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Anterior
                  </Button>
                  <div className="flex items-center space-x-1">
                    <Button variant="default" size="sm" className="h-8 w-8 p-0">1</Button>
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0">2</Button>
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0">3</Button>
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0">4</Button>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                  >
                    Próximo
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            </ComponentCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginationPage;
