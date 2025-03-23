
import React from 'react';
import { Separator } from "@/components/ui/separator";
import Header from '@/components/library-components/Header';
import ComponentCard from '@/components/ComponentCard';
import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { Label } from "@/components/ui/label";
import { ChevronRight, Plus, Settings, ArrowLeft, ArrowRight } from "lucide-react";

const Dividers = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Dividers"
        description="Linhas divisórias para separar conteúdo relacionado."
        type="components"
      />
      
      <div className="w-full space-y-12">
        <section>
          <h2 className="text-xl font-semibold mb-6">Uso básico</h2>
          <p className="text-mui-text-secondary mb-6">
            Dividers são linhas horizontais ou verticais que separam conteúdo e ajudam na organização visual.
          </p>
          
          <ComponentCard 
            title="Horizontal Divider" 
            description="Uma linha horizontal simples que separa o conteúdo."
            code={`<div className="space-y-4">
  <div>Conteúdo acima do divisor</div>
  <Separator />
  <div>Conteúdo abaixo do divisor</div>
</div>`}
          >
            <div className="space-y-4 py-4">
              <div>Conteúdo acima do divisor</div>
              <Separator />
              <div>Conteúdo abaixo do divisor</div>
            </div>
          </ComponentCard>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-6">Orientação</h2>
          <p className="text-mui-text-secondary mb-6">
            Dividers podem ser orientados horizontalmente (padrão) ou verticalmente.
          </p>
          
          <ComponentCard 
            title="Vertical Divider" 
            description="Uma linha vertical que separa elementos lado a lado."
            code={`<div className="flex h-20 items-center">
  <div>Conteúdo à esquerda</div>
  <Separator orientation="vertical" className="mx-4 h-full" />
  <div>Conteúdo à direita</div>
</div>`}
          >
            <div className="flex h-20 items-center">
              <div>Conteúdo à esquerda</div>
              <Separator orientation="vertical" className="mx-4 h-full" />
              <div>Conteúdo à direita</div>
            </div>
          </ComponentCard>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-6">Divisores com rótulos e elementos</h2>
          <p className="text-mui-text-secondary mb-6">
            Divisores podem incluir texto, ícones ou outros elementos para criar separações semânticas.
          </p>
          
          <ComponentCard 
            title="Divider com rótulo" 
            description="Divisor com texto centralizado."
            code={`<div className="relative flex items-center py-5">
  <div className="flex-grow border-t border-border"></div>
  <span className="flex-shrink mx-4 text-gray-500">Rótulo</span>
  <div className="flex-grow border-t border-border"></div>
</div>`}
          >
            <div className="relative flex items-center py-5">
              <div className="flex-grow border-t border-border"></div>
              <span className="flex-shrink mx-4 text-gray-500">Rótulo</span>
              <div className="flex-grow border-t border-border"></div>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Divider com ícone" 
            description="Divisor com ícone centralizado."
            code={`<div className="relative flex items-center py-5">
  <div className="flex-grow border-t border-border"></div>
  <div className="flex-shrink mx-3 p-1 bg-white rounded-full border border-border">
    <ChevronRight size={16} className="text-gray-400" />
  </div>
  <div className="flex-grow border-t border-border"></div>
</div>`}
          >
            <div className="relative flex items-center py-5">
              <div className="flex-grow border-t border-border"></div>
              <div className="flex-shrink mx-3 p-1 bg-white rounded-full border border-border">
                <ChevronRight size={16} className="text-gray-400" />
              </div>
              <div className="flex-grow border-t border-border"></div>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Divider com rótulo à esquerda" 
            description="Divisor com texto alinhado à esquerda."
            code={`<div className="relative flex items-center py-5">
  <span className="pr-3 text-gray-500 font-medium">Categoria</span>
  <div className="flex-grow border-t border-border"></div>
</div>`}
          >
            <div className="relative flex items-center py-5">
              <span className="pr-3 text-gray-500 font-medium">Categoria</span>
              <div className="flex-grow border-t border-border"></div>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Divider com título" 
            description="Divisor com título enfatizado."
            code={`<div className="relative flex flex-col space-y-3 py-5">
  <h3 className="text-lg font-semibold">Seção de Conteúdo</h3>
  <Separator className="w-full" />
</div>`}
          >
            <div className="relative flex flex-col space-y-3 py-5">
              <h3 className="text-lg font-semibold">Seção de Conteúdo</h3>
              <Separator className="w-full" />
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Divider com título à esquerda" 
            description="Divisor com título alinhado à esquerda."
            code={`<div className="relative flex items-center py-5">
  <h3 className="pr-3 text-lg font-semibold">Seção</h3>
  <div className="flex-grow border-t border-border"></div>
</div>`}
          >
            <div className="relative flex items-center py-5">
              <h3 className="pr-3 text-lg font-semibold">Seção</h3>
              <div className="flex-grow border-t border-border"></div>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Divider com botão" 
            description="Divisor com botão centralizado."
            code={`<div className="relative flex items-center py-5">
  <div className="flex-grow border-t border-border"></div>
  <Button size="sm" variant="outline-secondary" className="mx-4 flex-shrink-0">
    <Plus size={16} className="mr-1" />
    Adicionar
  </Button>
  <div className="flex-grow border-t border-border"></div>
</div>`}
          >
            <div className="relative flex items-center py-5">
              <div className="flex-grow border-t border-border"></div>
              <Button size="sm" variant="outline-secondary" className="mx-4 flex-shrink-0">
                <Plus size={16} className="mr-1" />
                Adicionar
              </Button>
              <div className="flex-grow border-t border-border"></div>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Divider com título e botão" 
            description="Divisor com título e botão de ação."
            code={`<div className="relative flex items-center justify-between py-5">
  <h3 className="text-lg font-semibold">Conteúdo Recente</h3>
  <div className="flex items-center">
    <div className="w-16 border-t border-border mr-4"></div>
    <Button size="sm" variant="outline-default">
      Ver todos
    </Button>
  </div>
</div>`}
          >
            <div className="relative flex items-center justify-between py-5">
              <h3 className="text-lg font-semibold">Conteúdo Recente</h3>
              <div className="flex items-center">
                <div className="w-16 border-t border-border mr-4"></div>
                <Button size="sm" variant="outline-default">
                  Ver todos
                </Button>
              </div>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Divider com barra de ferramentas" 
            description="Divisor com conjunto de ações."
            code={`<div className="relative py-5 space-y-3">
  <div className="flex items-center justify-between">
    <h3 className="text-lg font-semibold">Navegação</h3>
    <div className="flex items-center space-x-2">
      <IconButton variant="text-default" size="sm" icon={<ArrowLeft size={16} />} />
      <IconButton variant="text-default" size="sm" icon={<ArrowRight size={16} />} />
      <IconButton variant="text-default" size="sm" icon={<Settings size={16} />} />
    </div>
  </div>
  <Separator className="w-full" />
</div>`}
          >
            <div className="relative py-5 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Navegação</h3>
                <div className="flex items-center space-x-2">
                  <IconButton variant="text-default" size="sm" icon={<ArrowLeft size={16} />} />
                  <IconButton variant="text-default" size="sm" icon={<ArrowRight size={16} />} />
                  <IconButton variant="text-default" size="sm" icon={<Settings size={16} />} />
                </div>
              </div>
              <Separator className="w-full" />
            </div>
          </ComponentCard>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-6">Personalização</h2>
          <p className="text-mui-text-secondary mb-6">
            Dividers podem ser personalizados para diferentes estilos, cores e espessuras.
          </p>
          
          <ComponentCard 
            title="Custom Divider Styles" 
            description="Dividers personalizados com diferentes cores e espessuras."
            code={`<div className="space-y-6">
  <div className="space-y-4">
    <div>Divisor padrão</div>
    <Separator />
  </div>
  
  <div className="space-y-4">
    <div>Divisor colorido</div>
    <Separator className="bg-primary" />
  </div>
  
  <div className="space-y-4">
    <div>Divisor espesso</div>
    <Separator className="h-[2px]" />
  </div>
  
  <div className="space-y-4">
    <div>Divisor pontilhado</div>
    <div className="h-[1px] w-full border-t border-dashed border-border" />
  </div>
</div>`}
          >
            <div className="space-y-6 py-4">
              <div className="space-y-4">
                <div>Divisor padrão</div>
                <Separator />
              </div>
              
              <div className="space-y-4">
                <div>Divisor colorido</div>
                <Separator className="bg-primary" />
              </div>
              
              <div className="space-y-4">
                <div>Divisor espesso</div>
                <Separator className="h-[2px]" />
              </div>
              
              <div className="space-y-4">
                <div>Divisor pontilhado</div>
                <div className="h-[1px] w-full border-t border-dashed border-border" />
              </div>
            </div>
          </ComponentCard>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-6">API Reference</h2>
          
          <div className="border border-mui-border rounded-lg overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-mui-sidebar">
                  <th className="px-4 py-2 text-left font-medium">Prop</th>
                  <th className="px-4 py-2 text-left font-medium">Type</th>
                  <th className="px-4 py-2 text-left font-medium">Default</th>
                  <th className="px-4 py-2 text-left font-medium">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-mui-border">
                <tr>
                  <td className="px-4 py-2 font-mono text-sm">orientation</td>
                  <td className="px-4 py-2 font-mono text-sm">"horizontal" | "vertical"</td>
                  <td className="px-4 py-2 font-mono text-sm">"horizontal"</td>
                  <td className="px-4 py-2 text-sm">Define a orientação do divisor.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-mono text-sm">decorative</td>
                  <td className="px-4 py-2 font-mono text-sm">boolean</td>
                  <td className="px-4 py-2 font-mono text-sm">true</td>
                  <td className="px-4 py-2 text-sm">
                    Quando true, indica que é puramente visual e pode ser ignorado por tecnologias assistivas.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-mono text-sm">className</td>
                  <td className="px-4 py-2 font-mono text-sm">string</td>
                  <td className="px-4 py-2 font-mono text-sm">undefined</td>
                  <td className="px-4 py-2 text-sm">Classes adicionais para personalizar o separador.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dividers;
