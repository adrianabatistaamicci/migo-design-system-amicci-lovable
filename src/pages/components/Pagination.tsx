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
import CodeBlock from '@/components/CodeBlock';

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
          
          <pre className="bg-mui-sidebar p-4 rounded-md overflow-x-auto text-sm">
            <code>import {'{ Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious }'} from "@/components/ui/pagination";</code>
          </pre>
        </div>
        
        <div className="space-y-12">
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
            description="Uma variante de paginação incorpor
