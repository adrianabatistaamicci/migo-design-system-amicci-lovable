
import React from 'react';
import Header from '@/components/library-components/Header';
import ComponentCard from '@/components/ComponentCard';
import { TailwindTabs } from "@/components/ui/tabs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ColorSwatch from '@/components/colors/ColorSwatch';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';

const Borders = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Bordas" 
        description="Sistema de bordas para definir a aparência e espessura das bordas dos elementos."
        type="foundations"
      />
      
      <div className="mt-8 space-y-12">
        <section>
          <h2 className="text-2xl font-medium text-mui-text-primary mb-4">Raio de Borda (Border Radius)</h2>
          <p className="text-mui-text-secondary mb-6">
            Use estas classes de borda para adicionar cantos arredondados aos elementos da interface.
          </p>
          
          <ComponentCard
            title="Border Radius"
            description="Exemplos de aplicação dos diferentes tamanhos de raio de borda."
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="space-y-2">
                <div className="h-16 w-full rounded-none border-2 border-primary-main flex items-center justify-center">
                  <span className="text-sm font-medium">rounded-none</span>
                </div>
                <p className="text-xs text-center text-mui-text-secondary">0px</p>
              </div>
              
              <div className="space-y-2">
                <div className="h-16 w-full rounded-sm border-2 border-primary-main flex items-center justify-center">
                  <span className="text-sm font-medium">rounded-sm</span>
                </div>
                <p className="text-xs text-center text-mui-text-secondary">0.125rem (2px)</p>
              </div>
              
              <div className="space-y-2">
                <div className="h-16 w-full rounded border-2 border-primary-main flex items-center justify-center">
                  <span className="text-sm font-medium">rounded</span>
                </div>
                <p className="text-xs text-center text-mui-text-secondary">0.25rem (4px)</p>
              </div>
              
              <div className="space-y-2">
                <div className="h-16 w-full rounded-md border-2 border-primary-main flex items-center justify-center">
                  <span className="text-sm font-medium">rounded-md</span>
                </div>
                <p className="text-xs text-center text-mui-text-secondary">0.375rem (6px)</p>
              </div>
              
              <div className="space-y-2">
                <div className="h-16 w-full rounded-lg border-2 border-primary-main flex items-center justify-center">
                  <span className="text-sm font-medium">rounded-lg</span>
                </div>
                <p className="text-xs text-center text-mui-text-secondary">0.5rem (8px)</p>
              </div>
              
              <div className="space-y-2">
                <div className="h-16 w-full rounded-xl border-2 border-primary-main flex items-center justify-center">
                  <span className="text-sm font-medium">rounded-xl</span>
                </div>
                <p className="text-xs text-center text-mui-text-secondary">0.75rem (12px)</p>
              </div>
              
              <div className="space-y-2">
                <div className="h-16 w-full rounded-2xl border-2 border-primary-main flex items-center justify-center">
                  <span className="text-sm font-medium">rounded-2xl</span>
                </div>
                <p className="text-xs text-center text-mui-text-secondary">1rem (16px)</p>
              </div>
              
              <div className="space-y-2">
                <div className="h-16 w-full rounded-full border-2 border-primary-main flex items-center justify-center">
                  <span className="text-sm font-medium">rounded-full</span>
                </div>
                <p className="text-xs text-center text-mui-text-secondary">9999px</p>
              </div>
            </div>
          </ComponentCard>
          
          <ComponentCard
            title="Aplicação Específica"
            description="Aplicação de border-radius em lados específicos do elemento."
            className="mt-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="h-16 w-full rounded-t-lg border-2 border-secondary-main flex items-center justify-center">
                  <span className="text-sm font-medium">rounded-t-lg</span>
                </div>
                <p className="text-xs text-center text-mui-text-secondary">Borda superior</p>
              </div>
              
              <div className="space-y-2">
                <div className="h-16 w-full rounded-r-lg border-2 border-secondary-main flex items-center justify-center">
                  <span className="text-sm font-medium">rounded-r-lg</span>
                </div>
                <p className="text-xs text-center text-mui-text-secondary">Borda direita</p>
              </div>
              
              <div className="space-y-2">
                <div className="h-16 w-full rounded-b-lg border-2 border-secondary-main flex items-center justify-center">
                  <span className="text-sm font-medium">rounded-b-lg</span>
                </div>
                <p className="text-xs text-center text-mui-text-secondary">Borda inferior</p>
              </div>
              
              <div className="space-y-2">
                <div className="h-16 w-full rounded-l-lg border-2 border-secondary-main flex items-center justify-center">
                  <span className="text-sm font-medium">rounded-l-lg</span>
                </div>
                <p className="text-xs text-center text-mui-text-secondary">Borda esquerda</p>
              </div>
              
              <div className="space-y-2">
                <div className="h-16 w-full rounded-tl-lg border-2 border-secondary-main flex items-center justify-center">
                  <span className="text-sm font-medium">rounded-tl-lg</span>
                </div>
                <p className="text-xs text-center text-mui-text-secondary">Canto superior esquerdo</p>
              </div>
              
              <div className="space-y-2">
                <div className="h-16 w-full rounded-br-lg border-2 border-secondary-main flex items-center justify-center">
                  <span className="text-sm font-medium">rounded-br-lg</span>
                </div>
                <p className="text-xs text-center text-mui-text-secondary">Canto inferior direito</p>
              </div>
            </div>
          </ComponentCard>
        </section>
        
        <section>
          <h2 className="text-2xl font-medium text-mui-text-primary mb-4">Espessura de Borda (Border Width)</h2>
          <p className="text-mui-text-secondary mb-6">
            Use estas classes para controlar a espessura das bordas nos elementos.
          </p>
          
          <ComponentCard
            title="Border Width"
            description="Exemplos de aplicação das diferentes espessuras de borda."
          >
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <div className="space-y-2">
                <div className="h-16 w-full border-0 border-tertiary-main rounded-md flex items-center justify-center bg-tertiary-light/20">
                  <span className="text-sm font-medium">border-0</span>
                </div>
                <p className="text-xs text-center text-mui-text-secondary">0px</p>
              </div>
              
              <div className="space-y-2">
                <div className="h-16 w-full border border-tertiary-main rounded-md flex items-center justify-center">
                  <span className="text-sm font-medium">border</span>
                </div>
                <p className="text-xs text-center text-mui-text-secondary">1px</p>
              </div>
              
              <div className="space-y-2">
                <div className="h-16 w-full border-2 border-tertiary-main rounded-md flex items-center justify-center">
                  <span className="text-sm font-medium">border-2</span>
                </div>
                <p className="text-xs text-center text-mui-text-secondary">2px</p>
              </div>
              
              <div className="space-y-2">
                <div className="h-16 w-full border-4 border-tertiary-main rounded-md flex items-center justify-center">
                  <span className="text-sm font-medium">border-4</span>
                </div>
                <p className="text-xs text-center text-mui-text-secondary">4px</p>
              </div>
              
              <div className="space-y-2">
                <div className="h-16 w-full border-8 border-tertiary-main rounded-md flex items-center justify-center">
                  <span className="text-sm font-medium">border-8</span>
                </div>
                <p className="text-xs text-center text-mui-text-secondary">8px</p>
              </div>
            </div>
          </ComponentCard>
          
          <ComponentCard
            title="Aplicação Específica de Espessura"
            description="Aplicação de border-width em lados específicos do elemento."
            className="mt-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="space-y-2">
                <div className="h-16 w-full border-t-4 border-info-main rounded-md flex items-center justify-center">
                  <span className="text-sm font-medium">border-t-4</span>
                </div>
                <p className="text-xs text-center text-mui-text-secondary">Borda superior</p>
              </div>
              
              <div className="space-y-2">
                <div className="h-16 w-full border-r-4 border-info-main rounded-md flex items-center justify-center">
                  <span className="text-sm font-medium">border-r-4</span>
                </div>
                <p className="text-xs text-center text-mui-text-secondary">Borda direita</p>
              </div>
              
              <div className="space-y-2">
                <div className="h-16 w-full border-b-4 border-info-main rounded-md flex items-center justify-center">
                  <span className="text-sm font-medium">border-b-4</span>
                </div>
                <p className="text-xs text-center text-mui-text-secondary">Borda inferior</p>
              </div>
              
              <div className="space-y-2">
                <div className="h-16 w-full border-l-4 border-info-main rounded-md flex items-center justify-center">
                  <span className="text-sm font-medium">border-l-4</span>
                </div>
                <p className="text-xs text-center text-mui-text-secondary">Borda esquerda</p>
              </div>
            </div>
          </ComponentCard>
        </section>
        
        <section>
          <h2 className="text-2xl font-medium text-mui-text-primary mb-4">Estilos de Borda (Border Style)</h2>
          <p className="text-mui-text-secondary mb-6">
            Use estas classes para controlar o estilo visual das bordas.
          </p>
          
          <ComponentCard
            title="Border Style"
            description="Exemplos de aplicação dos diferentes estilos de borda."
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="h-16 w-full border-2 border-solid border-success-main rounded-md flex items-center justify-center">
                  <span className="text-sm font-medium">border-solid</span>
                </div>
                <p className="text-xs text-center text-mui-text-secondary">Linha sólida (padrão)</p>
              </div>
              
              <div className="space-y-2">
                <div className="h-16 w-full border-2 border-dashed border-success-main rounded-md flex items-center justify-center">
                  <span className="text-sm font-medium">border-dashed</span>
                </div>
                <p className="text-xs text-center text-mui-text-secondary">Linha tracejada</p>
              </div>
              
              <div className="space-y-2">
                <div className="h-16 w-full border-2 border-dotted border-success-main rounded-md flex items-center justify-center">
                  <span className="text-sm font-medium">border-dotted</span>
                </div>
                <p className="text-xs text-center text-mui-text-secondary">Linha pontilhada</p>
              </div>
            </div>
          </ComponentCard>
        </section>
        
        <section>
          <h2 className="text-2xl font-medium text-mui-text-primary mb-4">Cores de Borda</h2>
          <p className="text-mui-text-secondary mb-6">
            Utilize as cores semânticas para bordas alinhadas com o tom da mensagem.
          </p>
          
          <ComponentCard
            title="Border Colors"
            description="Exemplos de aplicação das diferentes cores de borda."
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="space-y-2">
                <div className="h-16 w-full border-2 border-primary-main rounded-md flex items-center justify-center">
                  <span className="text-sm font-medium">border-primary-main</span>
                </div>
                <p className="text-xs text-center text-mui-text-secondary">Primária</p>
              </div>
              
              <div className="space-y-2">
                <div className="h-16 w-full border-2 border-secondary-main rounded-md flex items-center justify-center">
                  <span className="text-sm font-medium">border-secondary-main</span>
                </div>
                <p className="text-xs text-center text-mui-text-secondary">Secundária</p>
              </div>
              
              <div className="space-y-2">
                <div className="h-16 w-full border-2 border-tertiary-main rounded-md flex items-center justify-center">
                  <span className="text-sm font-medium">border-tertiary-main</span>
                </div>
                <p className="text-xs text-center text-mui-text-secondary">Terciária</p>
              </div>
              
              <div className="space-y-2">
                <div className="h-16 w-full border-2 border-error-main rounded-md flex items-center justify-center">
                  <span className="text-sm font-medium">border-error-main</span>
                </div>
                <p className="text-xs text-center text-mui-text-secondary">Erro</p>
              </div>
              
              <div className="space-y-2">
                <div className="h-16 w-full border-2 border-warning-main rounded-md flex items-center justify-center">
                  <span className="text-sm font-medium">border-warning-main</span>
                </div>
                <p className="text-xs text-center text-mui-text-secondary">Alerta</p>
              </div>
              
              <div className="space-y-2">
                <div className="h-16 w-full border-2 border-success-main rounded-md flex items-center justify-center">
                  <span className="text-sm font-medium">border-success-main</span>
                </div>
                <p className="text-xs text-center text-mui-text-secondary">Sucesso</p>
              </div>
              
              <div className="space-y-2">
                <div className="h-16 w-full border-2 border-info-main rounded-md flex items-center justify-center">
                  <span className="text-sm font-medium">border-info-main</span>
                </div>
                <p className="text-xs text-center text-mui-text-secondary">Informação</p>
              </div>
              
              <div className="space-y-2">
                <div className="h-16 w-full border-2 border-gray-400 rounded-md flex items-center justify-center">
                  <span className="text-sm font-medium">border-gray-400</span>
                </div>
                <p className="text-xs text-center text-mui-text-secondary">Cinza (neutro)</p>
              </div>
            </div>
          </ComponentCard>
        </section>
        
        <section>
          <h2 className="text-2xl font-medium text-mui-text-primary mb-4">Boas Práticas de Uso</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 p-4 rounded-lg">
              <h3 className="text-base font-medium text-mui-text-primary mb-2">Consistência</h3>
              <p className="text-sm text-mui-text-secondary">
                Mantenha a consistência no uso de bordas em toda a aplicação. Evite misturar muitos estilos diferentes sem propósito.
              </p>
            </div>
            
            <div className="border border-gray-200 p-4 rounded-lg">
              <h3 className="text-base font-medium text-mui-text-primary mb-2">Semântica</h3>
              <p className="text-sm text-mui-text-secondary">
                Use cores com significado. Por exemplo, bordas vermelhas para erros e bordas verdes para sucesso.
              </p>
            </div>
            
            <div className="border border-gray-200 p-4 rounded-lg">
              <h3 className="text-base font-medium text-mui-text-primary mb-2">Contraste</h3>
              <p className="text-sm text-mui-text-secondary">
                Assegure-se de que há contraste suficiente entre a borda e o fundo para garantir a visibilidade.
              </p>
            </div>
            
            <div className="border border-gray-200 p-4 rounded-lg">
              <h3 className="text-base font-medium text-mui-text-primary mb-2">Responsividade</h3>
              <p className="text-sm text-mui-text-secondary">
                Considere ajustar a espessura da borda em diferentes tamanhos de tela para manter a proporção visual.
              </p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-medium text-mui-text-primary mb-4">Exemplos de Código</h2>
          
          <div className="bg-mui-sidebar p-4 rounded-md mb-8">
            <pre className="text-sm overflow-auto">
              <code>{`// Exemplo de componente com diferentes bordas
<div className="border-2 border-primary-main rounded-lg p-4">
  <h3 className="border-b border-primary-light pb-2">Título do Card</h3>
  <p className="mt-2">Conteúdo do card com borda primária.</p>
</div>

<div className="border border-dashed border-warning-main rounded-md p-4">
  <p>Alerta com borda tracejada.</p>
</div>

<div className="border-l-4 border-info-main pl-4">
  <p>Bloco de informação com borda à esquerda.</p>
</div>`}</code>
            </pre>
          </div>
          
          <Table className="border rounded-lg overflow-hidden">
            <TableHeader>
              <TableRow className="bg-mui-sidebar">
                <TableHead className="w-1/4">Propriedade</TableHead>
                <TableHead className="w-3/4">Descrição</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono">border-radius</TableCell>
                <TableCell>Define o raio dos cantos do elemento, criando cantos arredondados.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">border-width</TableCell>
                <TableCell>Define a espessura da borda ao redor do elemento.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">border-style</TableCell>
                <TableCell>Define o estilo da linha da borda (sólida, tracejada, pontilhada).</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">border-color</TableCell>
                <TableCell>Define a cor da borda do elemento.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>
      </div>
    </div>
  );
};

export default Borders;
