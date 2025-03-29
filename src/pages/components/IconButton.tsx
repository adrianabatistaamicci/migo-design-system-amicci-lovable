
import React from 'react';
import Header from '@/components/library-components/Header';
import { Search, Plus, ChevronRight, ChevronLeft, Check, Edit, Trash, X } from 'lucide-react';
import CodeBlock from '@/components/CodeBlock';
import { IconButton } from '@/components/ui/icon-button';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import ComponentCard from '@/components/ComponentCard';
import { TailwindTabs } from '@/components/ui/tabs';

const IconButtonPage = () => {
  const [activeTab, setActiveTab] = React.useState('examples');

  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Icon Button"
        description="Botões que contêm apenas ícones, úteis para ações compactas na interface."
        type="components"
      />
      
      <TailwindTabs 
        defaultValue="examples" 
        className="mt-8" 
        tabs={[
          { name: 'Exemplos', value: 'examples' },
          { name: 'Variantes', value: 'variants' }
        ]} 
        variant="pillsGray" 
        onChange={value => setActiveTab(value)} 
      />

      <div className="mt-6">
        {activeTab === 'examples' && (
          <div className="space-y-8">
            <ComponentCard 
              title="Icon Buttons Básicos" 
              description="Botões de ícone com estilos simples."
              code={`<IconButton variant="text-secondary" icon={<Search />} />\n<IconButton variant="text-secondary" icon={<Plus />} />\n<IconButton variant="text-secondary" icon={<Edit />} />\n<IconButton variant="text-secondary" icon={<Trash />} />`}
            >
              <div className="flex gap-4 flex-wrap">
                <IconButton variant="text-secondary" icon={<Search />} />
                <IconButton variant="text-secondary" icon={<Plus />} />
                <IconButton variant="text-secondary" icon={<Edit />} />
                <IconButton variant="text-secondary" icon={<Trash />} />
              </div>
            </ComponentCard>
            
            <ComponentCard 
              title="Icon Buttons com Cores" 
              description="Botões de ícone com diferentes variantes de cores."
              code={`<IconButton icon={<Plus />} />\n<IconButton variant="success" icon={<Check />} />\n<IconButton variant="warning" icon={<Edit />} />\n<IconButton variant="error" icon={<Trash />} />`}
            >
              <div className="flex gap-4 flex-wrap">
                <IconButton icon={<Plus />} />
                <IconButton variant="success" icon={<Check />} />
                <IconButton variant="warning" icon={<Edit />} />
                <IconButton variant="error" icon={<Trash />} />
              </div>
            </ComponentCard>
            
            <ComponentCard 
              title="Icon Buttons com Bordas" 
              description="Botões de ícone com variantes outlined."
              code={`<IconButton variant="outline-secondary" icon={<ChevronLeft />} />\n<IconButton variant="outline-secondary" icon={<ChevronRight />} />\n<IconButton variant="outline-secondary" icon={<X />} />`}
            >
              <div className="flex gap-4 flex-wrap">
                <IconButton variant="outline-secondary" icon={<ChevronLeft />} />
                <IconButton variant="outline-secondary" icon={<ChevronRight />} />
                <IconButton variant="outline-secondary" icon={<X />} />
              </div>
            </ComponentCard>
            
            <ComponentCard 
              title="Icon Buttons em Tamanhos Diferentes" 
              description="Botões de ícone em diferentes tamanhos."
              code={`<IconButton variant="text-secondary" size="sm" icon={<Plus />} />\n<IconButton variant="text-secondary" icon={<Plus />} />\n<IconButton variant="text-secondary" size="lg" icon={<Plus />} />`}
            >
              <div className="flex gap-4 items-center flex-wrap">
                <IconButton variant="text-secondary" size="sm" icon={<Plus />} />
                <IconButton variant="text-secondary" icon={<Plus />} />
                <IconButton variant="text-secondary" size="lg" icon={<Plus />} />
              </div>
            </ComponentCard>
            
            <ComponentCard 
              title="Icon Buttons Desabilitados" 
              description="Botões de ícone em estado desabilitado."
              code={`<IconButton variant="text-secondary" disabled icon={<Plus />} />\n<IconButton variant="outline-secondary" disabled icon={<Edit />} />`}
            >
              <div className="flex gap-4 flex-wrap">
                <IconButton variant="text-secondary" disabled icon={<Plus />} />
                <IconButton variant="outline-secondary" disabled icon={<Edit />} />
              </div>
            </ComponentCard>
          </div>
        )}

        {activeTab === 'variants' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Default IconButton */}
              <ComponentCard 
                title="Default IconButton" 
                description="Botão de ícone com cor sólida para ações primárias."
                code={`<IconButton size="sm" icon={<Plus />} />\n<IconButton icon={<Plus />} />\n<IconButton size="lg" icon={<Plus />} />`}
              >
                <div className="flex justify-center items-center gap-2">
                  <IconButton size="sm" icon={<Plus />} />
                  <IconButton icon={<Plus />} />
                  <IconButton size="lg" icon={<Plus />} />
                </div>
              </ComponentCard>

              {/* Secondary IconButton */}
              <ComponentCard 
                title="Secondary IconButton" 
                description="Botão de ícone secundário."
                code={`<IconButton variant="secondary" size="sm" icon={<Plus />} />\n<IconButton variant="secondary" icon={<Plus />} />\n<IconButton variant="secondary" size="lg" icon={<Plus />} />`}
              >
                <div className="flex justify-center items-center gap-2">
                  <IconButton variant="secondary" size="sm" icon={<Plus />} />
                  <IconButton variant="secondary" icon={<Plus />} />
                  <IconButton variant="secondary" size="lg" icon={<Plus />} />
                </div>
              </ComponentCard>

              {/* Error IconButton */}
              <ComponentCard 
                title="Error IconButton" 
                description="Botão de ícone vermelho para ações críticas ou destrutivas."
                code={`<IconButton variant="error" size="sm" icon={<Trash />} />\n<IconButton variant="error" icon={<Trash />} />\n<IconButton variant="error" size="lg" icon={<Trash />} />`}
              >
                <div className="flex justify-center items-center gap-2">
                  <IconButton variant="error" size="sm" icon={<Trash />} />
                  <IconButton variant="error" icon={<Trash />} />
                  <IconButton variant="error" size="lg" icon={<Trash />} />
                </div>
              </ComponentCard>

              {/* Outline Default IconButton */}
              <ComponentCard 
                title="Outline Default IconButton" 
                description="Botão de ícone com contorno para ações primárias mais sutis."
                code={`<IconButton variant="outline-default" size="sm" icon={<Plus />} />\n<IconButton variant="outline-default" icon={<Plus />} />\n<IconButton variant="outline-default" size="lg" icon={<Plus />} />`}
              >
                <div className="flex justify-center items-center gap-2">
                  <IconButton variant="outline-default" size="sm" icon={<Plus />} />
                  <IconButton variant="outline-default" icon={<Plus />} />
                  <IconButton variant="outline-default" size="lg" icon={<Plus />} />
                </div>
              </ComponentCard>

              {/* Outline Secondary IconButton */}
              <ComponentCard 
                title="Outline Secondary IconButton" 
                description="Botão de ícone com contorno cinza para ações secundárias."
                code={`<IconButton variant="outline-secondary" size="sm" icon={<Plus />} />\n<IconButton variant="outline-secondary" icon={<Plus />} />\n<IconButton variant="outline-secondary" size="lg" icon={<Plus />} />`}
              >
                <div className="flex justify-center items-center gap-2">
                  <IconButton variant="outline-secondary" size="sm" icon={<Plus />} />
                  <IconButton variant="outline-secondary" icon={<Plus />} />
                  <IconButton variant="outline-secondary" size="lg" icon={<Plus />} />
                </div>
              </ComponentCard>

              {/* Text Default IconButton */}
              <ComponentCard 
                title="Text Default IconButton" 
                description="Botão de ícone de texto para ações sutis."
                code={`<IconButton variant="text-default" size="sm" icon={<Plus />} />\n<IconButton variant="text-default" icon={<Plus />} />\n<IconButton variant="text-default" size="lg" icon={<Plus />} />`}
              >
                <div className="flex justify-center items-center gap-2">
                  <IconButton variant="text-default" size="sm" icon={<Plus />} />
                  <IconButton variant="text-default" icon={<Plus />} />
                  <IconButton variant="text-default" size="lg" icon={<Plus />} />
                </div>
              </ComponentCard>
            </div>
            
            {/* API Reference Table */}
            <div className="mt-12">
              <h2 className="text-2xl font-medium text-mui-text-primary mb-6">
                API Reference
              </h2>
              
              <div className="border border-mui-border rounded-lg overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[180px]">Prop</TableHead>
                      <TableHead className="w-[250px]">Type</TableHead>
                      <TableHead className="w-[150px]">Default</TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">variant</TableCell>
                      <TableCell className="font-mono text-xs">
                        "default" | "secondary" | "error" | "warning" | "info" | "success" | "outline-default" | "outline-secondary" | "outline-error" | "outline-warning" | "outline-info" | "outline-success" | "text-default" | "text-secondary" | "text-error" | "text-warning" | "text-info" | "text-success"
                      </TableCell>
                      <TableCell>"default"</TableCell>
                      <TableCell>Controls the visual style of the button.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">size</TableCell>
                      <TableCell className="font-mono text-xs">"default" | "sm" | "lg"</TableCell>
                      <TableCell>"default"</TableCell>
                      <TableCell>Controls the size of the button.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">icon</TableCell>
                      <TableCell className="font-mono text-xs">ReactNode</TableCell>
                      <TableCell>required</TableCell>
                      <TableCell>The icon to display in the button.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">asChild</TableCell>
                      <TableCell className="font-mono text-xs">boolean</TableCell>
                      <TableCell>false</TableCell>
                      <TableCell>Whether to render as a child element instead of a button.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">isLoading</TableCell>
                      <TableCell className="font-mono text-xs">boolean</TableCell>
                      <TableCell>false</TableCell>
                      <TableCell>Controls whether the button shows a loading spinner.</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IconButtonPage;
