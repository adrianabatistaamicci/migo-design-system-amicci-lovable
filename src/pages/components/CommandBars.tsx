
import React from 'react';
import Header from '@/components/library-components/Header';
import ComponentCard from '@/components/ComponentCard';
import ComponentPreview from '@/components/ComponentPreview';
import { Button } from "@/components/ui/button";
import { Search, Filter, Plus, MoreVertical, SortAsc, Grid3X3, List } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu,
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { IconButton } from "@/components/ui/icon-button";

const CommandBars = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Command Bars"
        description="Barras de comando para ações, filtros e navegação em listas e tabelas."
        type="components"
      />
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ComponentPreview 
          title="Command Bar Básica" 
          variantCount={1}
          preview={
            <div className="w-[300px] p-3 border border-gray-200 rounded-lg bg-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button size="sm" className="h-8">
                    <Plus className="h-4 w-4 mr-1" />
                    Novo
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <IconButton icon={<Search className="h-4 w-4" />} variant="outline-secondary" size="sm" />
                  <IconButton icon={<Filter className="h-4 w-4" />} variant="outline-secondary" size="sm" />
                  <IconButton icon={<MoreVertical className="h-4 w-4" />} variant="outline-secondary" size="sm" />
                </div>
              </div>
            </div>
          }
        />

        <ComponentPreview 
          title="Command Bar com Busca" 
          variantCount={1}
          preview={
            <div className="w-[300px] p-3 border border-gray-200 rounded-lg bg-white">
              <div className="flex items-center justify-between gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <input 
                    type="text" 
                    placeholder="Buscar..." 
                    className="w-full pl-8 pr-3 py-1.5 text-sm border border-gray-200 rounded-md"
                  />
                </div>
                <Button size="sm" className="h-8">
                  <Plus className="h-4 w-4 mr-1" />
                  Novo
                </Button>
              </div>
            </div>
          }
        />

        <ComponentPreview 
          title="Command Bar com Filtros" 
          variantCount={1}
          preview={
            <div className="w-[300px] p-3 border border-gray-200 rounded-lg bg-white">
              <div className="flex items-center justify-between space-x-2">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="px-3 py-1 flex items-center gap-1">
                    Status: Ativo
                    <span className="text-xs ml-1">×</span>
                  </Badge>
                </div>
                <div className="flex items-center gap-1">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <IconButton icon={<SortAsc className="h-4 w-4" />} variant="outline-secondary" size="sm" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Mais recentes</DropdownMenuItem>
                      <DropdownMenuItem>Mais antigos</DropdownMenuItem>
                      <DropdownMenuItem>Nome (A-Z)</DropdownMenuItem>
                      <DropdownMenuItem>Nome (Z-A)</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Separator orientation="vertical" className="h-6" />
                  <IconButton icon={<Grid3X3 className="h-4 w-4" />} variant="outline-secondary" size="sm" />
                  <IconButton icon={<List className="h-4 w-4" />} variant="outline-secondary" size="sm" />
                </div>
              </div>
            </div>
          }
        />
      </div>

      <div className="mt-8">
        <ComponentCard 
          title="Exemplo de uso" 
          description="Barras de comando para diferentes contextos" 
          className="mt-8"
          code={`<div className="flex items-center justify-between p-4 border-b">
  {/* Lado esquerdo com título e ações principais */}
  <div className="flex items-center space-x-4">
    <h2 className="text-lg font-medium">Título da Página</h2>
    <Button>
      <Plus className="h-4 w-4 mr-2" />
      Novo Item
    </Button>
  </div>
  
  {/* Lado direito com busca e filtros */}
  <div className="flex items-center space-x-2">
    <div className="relative">
      <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
      <input 
        type="text" 
        placeholder="Buscar..." 
        className="pl-8 pr-3 py-1.5 text-sm border rounded-md"
      />
    </div>
    <IconButton icon={<Filter className="h-4 w-4" />} variant="outline-secondary" />
    <IconButton icon={<MoreVertical className="h-4 w-4" />} variant="outline-secondary" />
  </div>
</div>`}
        >
          <div className="space-y-6 p-4">
            <div className="border rounded-md">
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center space-x-4">
                  <h2 className="text-lg font-medium">Produtos</h2>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Novo Produto
                  </Button>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <input 
                      type="text" 
                      placeholder="Buscar produtos..." 
                      className="pl-8 pr-3 py-1.5 text-sm border rounded-md"
                    />
                  </div>
                  <IconButton icon={<Filter className="h-4 w-4" />} variant="outline-secondary" />
                  <IconButton icon={<MoreVertical className="h-4 w-4" />} variant="outline-secondary" />
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 min-h-[100px] flex items-center justify-center text-gray-400">
                Conteúdo da lista de produtos...
              </div>
            </div>
            
            <div className="border rounded-md">
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="px-3 py-1">
                      Categoria: Eletrônicos
                    </Badge>
                    <Badge variant="secondary" className="px-3 py-1">
                      Status: Em estoque
                    </Badge>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <SortAsc className="h-4 w-4" />
                        Ordenar
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Preço (menor-maior)</DropdownMenuItem>
                      <DropdownMenuItem>Preço (maior-menor)</DropdownMenuItem>
                      <DropdownMenuItem>Mais vendidos</DropdownMenuItem>
                      <DropdownMenuItem>Mais recentes</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  
                  <div className="flex items-center border rounded-md overflow-hidden">
                    <IconButton icon={<Grid3X3 className="h-4 w-4" />} variant="outline-secondary" size="sm" className="rounded-none border-r" />
                    <IconButton icon={<List className="h-4 w-4" />} variant="outline-secondary" size="sm" className="rounded-none bg-gray-50" />
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 min-h-[100px] flex items-center justify-center text-gray-400">
                Visualização em lista dos produtos...
              </div>
            </div>
          </div>
        </ComponentCard>
      </div>
    </div>
  );
};

export default CommandBars;
