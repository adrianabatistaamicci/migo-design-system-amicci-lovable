
import React, { useState } from 'react';
import Header from '@/components/library-components/Header';
import ComponentCard from '@/components/ComponentCard';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
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
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CodeBlock from '@/components/CodeBlock';

const PaginationPage = () => {
  return (
    <div className="w-full animate-slide-in">
      <div className="mb-12">
        <div className="flex items-center gap-2 text-sm text-mui-primary font-medium mb-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-mui-primary/10 text-mui-primary">
            Component
          </span>
        </div>
        
        <h1 className="text-4xl font-medium text-mui-text-primary mb-4">
          Pagination
        </h1>
        
        <p className="text-xl text-mui-text-secondary mb-8">
          Interface de navegação para dividir conteúdo em páginas separadas.
        </p>
        
        <div className="mb-12">
          <h2 className="text-2xl font-medium text-mui-text-primary mb-6">
            Import
          </h2>
          
          <pre className="bg-mui-sidebar p-4 rounded-md overflow-x-auto text-sm">
            <code>
              import {'{ Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious }'} from "@/components/ui/pagination";
            </code>
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
          className="relative z-10 inline-flex items-center bg-amicci-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amicci-600"
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
                        className="relative z-10 inline-flex items-center bg-amicci-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amicci-600"
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
          className="relative z-10 inline-flex items-center bg-amicci-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amicci-600"
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
                        className="relative z-10 inline-flex items-center bg-amicci-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amicci-600"
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
            description="Uma variante de paginação incorporada em um rodapé de card usando os componentes do shadcn/ui."
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
        variant="outline"
        size="sm"
        className="h-8 w-8 p-0"
        disabled
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
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
                      variant="outline"
                      size="sm"
                      className="h-8 w-8 p-0"
                      disabled
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
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
          
          <div className="mt-12">
            <h2 className="text-2xl font-medium text-mui-text-primary mb-6">
              API Reference
            </h2>
            
            <div className="border rounded-md">
              <div className="px-4 py-3 border-b">
                <h4 className="font-medium">Componentes</h4>
              </div>
              <div className="divide-y">
                <div className="px-4 py-3">
                  <h5 className="font-medium mb-2">Pagination</h5>
                  <p className="text-sm text-gray-700">
                    Container raiz para todos os componentes de paginação.
                  </p>
                </div>
                <div className="px-4 py-3">
                  <h5 className="font-medium mb-2">PaginationContent</h5>
                  <p className="text-sm text-gray-700">
                    Container para os itens de paginação.
                  </p>
                </div>
                <div className="px-4 py-3">
                  <h5 className="font-medium mb-2">PaginationItem</h5>
                  <p className="text-sm text-gray-700">
                    Wrapper para cada item individual de paginação.
                  </p>
                </div>
                <div className="px-4 py-3">
                  <h5 className="font-medium mb-2">PaginationLink</h5>
                  <p className="text-sm text-gray-700">
                    O link para uma página específica.
                  </p>
                  <div className="mt-2">
                    <h6 className="text-xs font-medium mb-1">Props</h6>
                    <ul className="text-xs text-gray-700 space-y-1 list-disc list-inside">
                      <li><code>isActive?: boolean</code> - Define se este é o link da página atual</li>
                      <li><code>size?: 'default' | 'sm' | 'lg' | 'icon'</code> - Tamanho do link</li>
                    </ul>
                  </div>
                </div>
                <div className="px-4 py-3">
                  <h5 className="font-medium mb-2">PaginationPrevious</h5>
                  <p className="text-sm text-gray-700">
                    Link para a página anterior.
                  </p>
                </div>
                <div className="px-4 py-3">
                  <h5 className="font-medium mb-2">PaginationNext</h5>
                  <p className="text-sm text-gray-700">
                    Link para a próxima página.
                  </p>
                </div>
                <div className="px-4 py-3">
                  <h5 className="font-medium mb-2">PaginationEllipsis</h5>
                  <p className="text-sm text-gray-700">
                    Representa uma série de páginas omitidas.
                  </p>
                </div>
              </div>
            </div>
            
            <h3 className="text-lg font-medium text-gray-900 mt-8 mb-3">Exemplo de uso com React Router</h3>
            <CodeBlock
              code={`import { Link, useSearchParams } from 'react-router-dom';
import { 
  Pagination, 
  PaginationContent, 
  PaginationEllipsis, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";

const PaginationExample = () => {
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const totalPages = 10;
  
  // Função para gerar href com o parâmetro de página
  const getPageHref = (page: number) => {
    return \`?page=\${page}\`;
  };
  
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious 
            as={Link} 
            to={getPageHref(Math.max(1, currentPage - 1))} 
          />
        </PaginationItem>
        
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
          // Mostrar apenas páginas próximas à atual e primeira/última
          if (
            page === 1 ||
            page === totalPages ||
            (page >= currentPage - 1 && page <= currentPage + 1)
          ) {
            return (
              <PaginationItem key={page}>
                <PaginationLink 
                  as={Link} 
                  to={getPageHref(page)} 
                  isActive={page === currentPage}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            );
          }
          
          // Adicionar elipses apenas uma vez entre intervalos
          if (
            (page === 2 && currentPage > 3) ||
            (page === totalPages - 1 && currentPage < totalPages - 2)
          ) {
            return (
              <PaginationItem key={page}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }
          
          return null;
        })}
        
        <PaginationItem>
          <PaginationNext 
            as={Link} 
            to={getPageHref(Math.min(totalPages, currentPage + 1))} 
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};`}
              language="tsx"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginationPage;
