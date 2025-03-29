
import React from 'react';
import Header from '@/components/library-components/Header';
import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { Plus, ChevronRight, ArrowRight, Copy, Trash, Pencil } from 'lucide-react';
import CodeBlock from '@/components/CodeBlock';
import ComponentCard from '@/components/ComponentCard';
import { Toggle } from '@/components/ui/toggle';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';

const Buttons = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Buttons"
        description="Botões permitem que os usuários executem ações e tomem decisões com um único toque."
        type="components"
      />
      
      <Tabs defaultValue="usage" className="mt-6">
        <TabsList className="mb-4">
          <TabsTrigger value="usage">Uso</TabsTrigger>
          <TabsTrigger value="variants">Variantes</TabsTrigger>
          <TabsTrigger value="icons">Ícones</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>
        
        <TabsContent value="usage" className="space-y-8">
          <ComponentCard 
            title="Botões por variante"
            className="w-full"
          >
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-base font-medium">Botões Primários</h3>
                <div className="flex flex-wrap gap-4">
                  <Button>Default</Button>
                  <Button variant="outline-secondary">Outline</Button>
                  <Button variant="text-default">Text</Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-base font-medium">Botões de Status</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="success">Success</Button>
                  <Button variant="warning">Warning</Button>
                  <Button variant="error">Error</Button>
                  <Button variant="info">Info</Button>
                </div>
              </div>
            </div>
          </ComponentCard>
          
          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-medium mb-4">Botões por tamanho</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-4 flex-wrap">
                  <Button size="sm">Small</Button>
                  <Button>Default</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>
            </div>
            
            <CodeBlock 
              code={`<Button size="sm">Small</Button>
<Button>Default</Button>
<Button size="lg">Large</Button>`}
              language="jsx"
              title="Implementação de Botões por Tamanho"
            />
          </div>
          
          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-medium mb-4">Estados do botão</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex flex-wrap gap-4">
                  <Button>Default</Button>
                  <Button disabled>Disabled</Button>
                  <Button isLoading>Loading</Button>
                </div>
              </div>
            </div>
            
            <CodeBlock 
              code={`<Button>Default</Button>
<Button disabled>Disabled</Button>
<Button isLoading>Loading</Button>`}
              language="jsx"
              title="Implementação de Estados do Botão"
            />
          </div>
        </TabsContent>
        
        <TabsContent value="variants" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Default Button */}
            <ComponentCard title="Default Button" description="Botão com cor sólida para ações primárias." code={`<Button size="sm">Label</Button>\n<Button>Label</Button>\n<Button size="lg">Label</Button>`}>
              <div className="flex justify-center items-center gap-2">
                <Button size="sm">Label</Button>
                <Button>Label</Button>
                <Button size="lg">Label</Button>
              </div>
            </ComponentCard>

            {/* Error Button */}
            <ComponentCard title="Error Button" description="Botão vermelho para ações críticas ou destrutivas." code={`<Button variant="error" size="sm">Label</Button>\n<Button variant="error">Label</Button>\n<Button variant="error" size="lg">Label</Button>`}>
              <div className="flex justify-center items-center gap-2">
                <Button variant="error" size="sm">Label</Button>
                <Button variant="error">Label</Button>
                <Button variant="error" size="lg">Label</Button>
              </div>
            </ComponentCard>

            {/* Warning Button */}
            <ComponentCard title="Warning Button" description="Botão de alerta para ações que requerem atenção." code={`<Button variant="warning" size="sm">Label</Button>\n<Button variant="warning">Label</Button>\n<Button variant="warning" size="lg">Label</Button>`}>
              <div className="flex justify-center items-center gap-2">
                <Button variant="warning" size="sm">Label</Button>
                <Button variant="warning">Label</Button>
                <Button variant="warning" size="lg">Label</Button>
              </div>
            </ComponentCard>

            {/* Info Button */}
            <ComponentCard title="Info Button" description="Botão informativo para ações neutras." code={`<Button variant="info" size="sm">Label</Button>\n<Button variant="info">Label</Button>\n<Button variant="info" size="lg">Label</Button>`}>
              <div className="flex justify-center items-center gap-2">
                <Button variant="info" size="sm">Label</Button>
                <Button variant="info">Label</Button>
                <Button variant="info" size="lg">Label</Button>
              </div>
            </ComponentCard>

            {/* Success Button */}
            <ComponentCard title="Success Button" description="Botão verde para ações de confirmação ou sucesso." code={`<Button variant="success" size="sm">Label</Button>\n<Button variant="success">Label</Button>\n<Button variant="success" size="lg">Label</Button>`}>
              <div className="flex justify-center items-center gap-2">
                <Button variant="success" size="sm">Label</Button>
                <Button variant="success">Label</Button>
                <Button variant="success" size="lg">Label</Button>
              </div>
            </ComponentCard>

            {/* Secondary Button */}
            <ComponentCard title="Secondary Button" description="Botão secundário para ações alternativas." code={`<Button variant="secondary" size="sm">Label</Button>\n<Button variant="secondary">Label</Button>\n<Button variant="secondary" size="lg">Label</Button>`}>
              <div className="flex justify-center items-center gap-2">
                <Button variant="secondary" size="sm">Label</Button>
                <Button variant="secondary">Label</Button>
                <Button variant="secondary" size="lg">Label</Button>
              </div>
            </ComponentCard>

            {/* Outline Error Button */}
            <ComponentCard title="Outline Error Button" description="Botão com contorno vermelho para ações críticas mais sutis." code={`<Button variant="outline-error" size="sm">Label</Button>\n<Button variant="outline-error">Label</Button>\n<Button variant="outline-error" size="lg">Label</Button>`}>
              <div className="flex justify-center items-center gap-2">
                <Button variant="outline-error" size="sm">Label</Button>
                <Button variant="outline-error">Label</Button>
                <Button variant="outline-error" size="lg">Label</Button>
              </div>
            </ComponentCard>

            {/* Outline Warning Button */}
            <ComponentCard title="Outline Warning Button" description="Botão com contorno amarelo para alertas sutis." code={`<Button variant="outline-warning" size="sm">Label</Button>\n<Button variant="outline-warning">Label</Button>\n<Button variant="outline-warning" size="lg">Label</Button>`}>
              <div className="flex justify-center items-center gap-2">
                <Button variant="outline-warning" size="sm">Label</Button>
                <Button variant="outline-warning">Label</Button>
                <Button variant="outline-warning" size="lg">Label</Button>
              </div>
            </ComponentCard>

            {/* Outline Info Button */}
            <ComponentCard title="Outline Info Button" description="Botão com contorno azul para ações informativas sutis." code={`<Button variant="outline-info" size="sm">Label</Button>\n<Button variant="outline-info">Label</Button>\n<Button variant="outline-info" size="lg">Label</Button>`}>
              <div className="flex justify-center items-center gap-2">
                <Button variant="outline-info" size="sm">Label</Button>
                <Button variant="outline-info">Label</Button>
                <Button variant="outline-info" size="lg">Label</Button>
              </div>
            </ComponentCard>

            {/* Outline Success Button */}
            <ComponentCard title="Outline Success Button" description="Botão com contorno verde para ações de sucesso sutis." code={`<Button variant="outline-success" size="sm">Label</Button>\n<Button variant="outline-success">Label</Button>\n<Button variant="outline-success" size="lg">Label</Button>`}>
              <div className="flex justify-center items-center gap-2">
                <Button variant="outline-success" size="sm">Label</Button>
                <Button variant="outline-success">Label</Button>
                <Button variant="outline-success" size="lg">Label</Button>
              </div>
            </ComponentCard>

            {/* Outline Secondary Button */}
            <ComponentCard title="Outline Secondary Button" description="Botão com contorno cinza para ações secundárias." code={`<Button variant="outline-secondary" size="sm">Label</Button>\n<Button variant="outline-secondary">Label</Button>\n<Button variant="outline-secondary" size="lg">Label</Button>`}>
              <div className="flex justify-center items-center gap-2">
                <Button variant="outline-secondary" size="sm">Label</Button>
                <Button variant="outline-secondary">Label</Button>
                <Button variant="outline-secondary" size="lg">Label</Button>
              </div>
            </ComponentCard>

            {/* Text Default Button */}
            <ComponentCard title="Text Default Button" description="Botão de texto sem fundo para ações sutis." code={`<Button variant="text-default" size="sm">Label</Button>\n<Button variant="text-default">Label</Button>\n<Button variant="text-default" size="lg">Label</Button>`}>
              <div className="flex justify-center items-center gap-2">
                <Button variant="text-default" size="sm">Label</Button>
                <Button variant="text-default">Label</Button>
                <Button variant="text-default" size="lg">Label</Button>
              </div>
            </ComponentCard>

            {/* Text Error Button */}
            <ComponentCard title="Text Error Button" description="Botão de texto vermelho para ações críticas discretas." code={`<Button variant="text-error" size="sm">Label</Button>\n<Button variant="text-error">Label</Button>\n<Button variant="text-error" size="lg">Label</Button>`}>
              <div className="flex justify-center items-center gap-2">
                <Button variant="text-error" size="sm">Label</Button>
                <Button variant="text-error">Label</Button>
                <Button variant="text-error" size="lg">Label</Button>
              </div>
            </ComponentCard>

            {/* Text Warning Button */}
            <ComponentCard title="Text Warning Button" description="Botão de texto amarelo para alertas discretos." code={`<Button variant="text-warning" size="sm">Label</Button>\n<Button variant="text-warning">Label</Button>\n<Button variant="text-warning" size="lg">Label</Button>`}>
              <div className="flex justify-center items-center gap-2">
                <Button variant="text-warning" size="sm">Label</Button>
                <Button variant="text-warning">Label</Button>
                <Button variant="text-warning" size="lg">Label</Button>
              </div>
            </ComponentCard>

            {/* Text Info Button */}
            <ComponentCard title="Text Info Button" description="Botão de texto azul para ações informativas discretas." code={`<Button variant="text-info" size="sm">Label</Button>\n<Button variant="text-info">Label</Button>\n<Button variant="text-info" size="lg">Label</Button>`}>
              <div className="flex justify-center items-center gap-2">
                <Button variant="text-info" size="sm">Label</Button>
                <Button variant="text-info">Label</Button>
                <Button variant="text-info" size="lg">Label</Button>
              </div>
            </ComponentCard>

            {/* Text Success Button */}
            <ComponentCard title="Text Success Button" description="Botão de texto verde para ações de sucesso discretas." code={`<Button variant="text-success" size="sm">Label</Button>\n<Button variant="text-success">Label</Button>\n<Button variant="text-success" size="lg">Label</Button>`}>
              <div className="flex justify-center items-center gap-2">
                <Button variant="text-success" size="sm">Label</Button>
                <Button variant="text-success">Label</Button>
                <Button variant="text-success" size="lg">Label</Button>
              </div>
            </ComponentCard>

            {/* Text Secondary Button */}
            <ComponentCard title="Text Secondary Button" description="Botão de texto cinza para ações secundárias discretas." code={`<Button variant="text-secondary" size="sm">Label</Button>\n<Button variant="text-secondary">Label</Button>\n<Button variant="text-secondary" size="lg">Label</Button>`}>
              <div className="flex justify-center items-center gap-2">
                <Button variant="text-secondary" size="sm">Label</Button>
                <Button variant="text-secondary">Label</Button>
                <Button variant="text-secondary" size="lg">Label</Button>
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
                      "default" | "secondary" | "error" | "warning" | "info" | "success" | "outline-secondary" | "outline-error" | "outline-warning" | "outline-info" | "outline-success" | "text-default" | "text-secondary" | "text-error" | "text-warning" | "text-info" | "text-success" | "destructive" | "outline" | "ghost" | "link"
                    </TableCell>
                    <TableCell>"default"</TableCell>
                    <TableCell>Controls the visual style of the button.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">size</TableCell>
                    <TableCell className="font-mono text-xs">"default" | "sm" | "lg" | "icon"</TableCell>
                    <TableCell>"default"</TableCell>
                    <TableCell>Controls the size of the button.</TableCell>
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
                  <TableRow>
                    <TableCell className="font-medium">startIcon</TableCell>
                    <TableCell className="font-mono text-xs">ReactNode</TableCell>
                    <TableCell>undefined</TableCell>
                    <TableCell>Icon to display at the start of the button.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">endIcon</TableCell>
                    <TableCell className="font-mono text-xs">ReactNode</TableCell>
                    <TableCell>undefined</TableCell>
                    <TableCell>Icon to display at the end of the button.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="icons" className="space-y-8">
          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-medium mb-4">Botões com ícones</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex flex-wrap gap-4">
                  <Button startIcon={<Plus />}>Add item</Button>
                  <Button endIcon={<ChevronRight />}>Next step</Button>
                  <Button startIcon={<Plus />} endIcon={<ArrowRight />}>Add and continue</Button>
                </div>
              </div>
            </div>
            
            <CodeBlock 
              code={`<Button startIcon={<Plus />}>Add item</Button>
<Button endIcon={<ChevronRight />}>Next step</Button>
<Button startIcon={<Plus />} endIcon={<ArrowRight />}>Add and continue</Button>`}
              language="jsx"
              title="Implementação de Botões com Ícones"
            />
          </div>
          
          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-medium mb-4">Icon Buttons</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex flex-wrap gap-4">
                  <IconButton icon={<Copy />} aria-label="Copy" />
                  <IconButton icon={<Trash />} variant="error" aria-label="Delete" />
                  <IconButton icon={<Pencil />} variant="outline-secondary" aria-label="Edit" />
                </div>
              </div>
            </div>
            
            <CodeBlock 
              code={`<IconButton icon={<Copy />} aria-label="Copy" />
<IconButton icon={<Trash />} variant="error" aria-label="Delete" />
<IconButton icon={<Pencil />} variant="outline-secondary" aria-label="Edit" />`}
              language="jsx"
              title="Implementação de Icon Buttons"
            />
          </div>
          
          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-medium mb-4">Toggle Buttons</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex flex-wrap gap-4">
                  <Toggle>Toggle</Toggle>
                  <Toggle variant="primary">Primary</Toggle>
                  <Toggle variant="outline">Outline</Toggle>
                </div>
              </div>
            </div>
            
            <CodeBlock 
              code={`<Toggle>Toggle</Toggle>
<Toggle variant="primary">Primary</Toggle>
<Toggle variant="outline">Outline</Toggle>`}
              language="jsx"
              title="Implementação de Toggle Buttons"
            />
          </div>
        </TabsContent>
        
        <TabsContent value="api" className="space-y-8">
          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-medium mb-4">API Reference</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Button Props</h3>
                  <div className="grid grid-cols-3 gap-4 mb-2">
                    <div className="font-medium">Prop</div>
                    <div className="font-medium">Type</div>
                    <div className="font-medium">Default</div>
                  </div>
                  <div className="space-y-2">
                    <div className="grid grid-cols-3 gap-4 border-t pt-2">
                      <div className="font-mono text-sm">variant</div>
                      <div className="text-sm">string</div>
                      <div className="text-sm">"default"</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 border-t pt-2">
                      <div className="font-mono text-sm">size</div>
                      <div className="text-sm">sm | default | lg</div>
                      <div className="text-sm">"default"</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 border-t pt-2">
                      <div className="font-mono text-sm">isLoading</div>
                      <div className="text-sm">boolean</div>
                      <div className="text-sm">false</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 border-t pt-2">
                      <div className="font-mono text-sm">startIcon</div>
                      <div className="text-sm">ReactNode</div>
                      <div className="text-sm">undefined</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 border-t pt-2">
                      <div className="font-mono text-sm">endIcon</div>
                      <div className="text-sm">ReactNode</div>
                      <div className="text-sm">undefined</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 border-t pt-2">
                      <div className="font-mono text-sm">asChild</div>
                      <div className="text-sm">boolean</div>
                      <div className="text-sm">false</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">IconButton Props</h3>
                  <div className="grid grid-cols-3 gap-4 mb-2">
                    <div className="font-medium">Prop</div>
                    <div className="font-medium">Type</div>
                    <div className="font-medium">Default</div>
                  </div>
                  <div className="space-y-2">
                    <div className="grid grid-cols-3 gap-4 border-t pt-2">
                      <div className="font-mono text-sm">variant</div>
                      <div className="text-sm">string</div>
                      <div className="text-sm">"default"</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 border-t pt-2">
                      <div className="font-mono text-sm">size</div>
                      <div className="text-sm">sm | default | lg</div>
                      <div className="text-sm">"default"</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 border-t pt-2">
                      <div className="font-mono text-sm">isLoading</div>
                      <div className="text-sm">boolean</div>
                      <div className="text-sm">false</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 border-t pt-2">
                      <div className="font-mono text-sm">icon</div>
                      <div className="text-sm">ReactNode</div>
                      <div className="text-sm">required</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 border-t pt-2">
                      <div className="font-mono text-sm">asChild</div>
                      <div className="text-sm">boolean</div>
                      <div className="text-sm">false</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Buttons;
