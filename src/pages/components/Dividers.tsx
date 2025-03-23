
import React from 'react';
import { Separator } from "@/components/ui/separator";
import Header from '@/components/library-components/Header';
import ComponentCard from '@/components/ComponentCard';

const Dividers = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Dividers"
        description="Linhas divisórias para separar conteúdo relacionado."
        type="components"
      />
      
      <div className="max-w-3xl space-y-12">
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
          <h2 className="text-xl font-semibold mb-6">Divider com conteúdo</h2>
          <p className="text-mui-text-secondary mb-6">
            Dividers podem incluir texto ou elementos para criar separações semânticas.
          </p>
          
          <ComponentCard 
            title="Divider with Content" 
            description="Divisor com texto centralizado."
            code={`<div className="relative flex items-center py-5">
  <div className="flex-grow border-t border-border"></div>
  <span className="flex-shrink mx-4 text-gray-400">ou continue com</span>
  <div className="flex-grow border-t border-border"></div>
</div>`}
          >
            <div className="relative flex items-center py-5">
              <div className="flex-grow border-t border-border"></div>
              <span className="flex-shrink mx-4 text-gray-400">ou continue com</span>
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
    </div>
  );
};

export default Dividers;
