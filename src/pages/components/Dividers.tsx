
import React from 'react';
import { Separator } from "@/components/ui/separator";
import Header from '@/components/library-components/Header';
import ComponentCard from '@/components/ComponentCard';
import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { ChevronRight, Plus, Settings, ArrowLeft, ArrowRight } from "lucide-react";

const Dividers = () => {
  return <div className="w-full animate-fade-in">
      <Header title="Dividers" description="Linhas divisórias para separar conteúdo relacionado." type="components" />
      
      <div className="w-full space-y-6">
        <section>
          <ComponentCard title="Horizontal Divider" code={`<div className="space-y-4">
  <div>Conteúdo acima do divisor</div>
  <Separator />
  <div>Conteúdo abaixo do divisor</div>
</div>`}>
            <div className="space-y-4 py-4">
              <div>Conteúdo acima do divisor</div>
              <Separator />
              <div>Conteúdo abaixo do divisor</div>
            </div>
          </ComponentCard>
        </section>
        
        <section>
          <ComponentCard title="Vertical Divider" code={`<div className="flex h-20 items-center">
  <div>Conteúdo à esquerda</div>
  <Separator orientation="vertical" className="mx-4 h-full" />
  <div>Conteúdo à direita</div>
</div>`}>
            <div className="flex h-20 items-center">
              <div>Conteúdo à esquerda</div>
              <Separator orientation="vertical" className="mx-4 h-full" />
              <div>Conteúdo à direita</div>
            </div>
          </ComponentCard>
        </section>
        
        <section>
          <ComponentCard title="Divider com rótulo" code={`<div className="relative flex items-center py-5">
  <div className="flex-grow border-t border-border"></div>
  <span className="flex-shrink mx-4 text-gray-500">Rótulo</span>
  <div className="flex-grow border-t border-border"></div>
</div>`}>
            <div className="relative flex items-center py-5">
              <div className="flex-grow border-t border-border"></div>
              <span className="flex-shrink mx-4 text-gray-500">Rótulo</span>
              <div className="flex-grow border-t border-border"></div>
            </div>
          </ComponentCard>
          
          <ComponentCard title="Divider com ícone" code={`<div className="relative flex items-center py-5">
  <div className="flex-grow border-t border-border"></div>
  <div className="flex-shrink mx-3 p-1 bg-white rounded-full border border-border">
    <ChevronRight size={16} className="text-gray-400" />
  </div>
  <div className="flex-grow border-t border-border"></div>
</div>`}>
            <div className="relative flex items-center py-5">
              <div className="flex-grow border-t border-border"></div>
              <div className="flex-shrink mx-3 p-1 bg-white rounded-full border border-border">
                <ChevronRight size={16} className="text-gray-400" />
              </div>
              <div className="flex-grow border-t border-border"></div>
            </div>
          </ComponentCard>
          
          <ComponentCard title="Divider com botão" code={`<div className="relative flex items-center py-5">
  <div className="flex-grow border-t border-border"></div>
  <Button size="sm" variant="outline-secondary" className="mx-4 flex-shrink-0">
    <Plus size={16} className="mr-1" />
    Adicionar
  </Button>
  <div className="flex-grow border-t border-border"></div>
</div>`}>
            <div className="relative flex items-center py-5">
              <div className="flex-grow border-t border-border"></div>
              <Button size="sm" variant="outline-secondary" className="mx-4 flex-shrink-0">
                <Plus size={16} className="mr-1" />
                Adicionar
              </Button>
              <div className="flex-grow border-t border-border"></div>
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
    </div>;
};
export default Dividers;
