
import React from 'react';
import Header from '@/components/library-components/Header';
import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { Plus, ChevronRight, ArrowRight, Copy, Trash, Pencil } from 'lucide-react';
import CodeBlock from '@/components/CodeBlock';
import ComponentCard from '@/components/ComponentCard';
import { Toggle } from '@/components/ui/toggle';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
          <ComponentCard 
            title="Variantes de Botão"
            className="w-full"
          >
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-base font-medium">Variantes Básicas</h3>
                <div className="flex flex-wrap gap-4">
                  <Button>Default (Primary)</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline-secondary">Outline</Button>
                  <Button variant="text-default">Text</Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-base font-medium">Variantes de Status</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="success">Success</Button>
                  <Button variant="warning">Warning</Button>
                  <Button variant="error">Error</Button>
                  <Button variant="info">Info</Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-base font-medium">Variantes de Contorno</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline-secondary">Outline Default</Button>
                  <Button variant="outline-success">Outline Success</Button>
                  <Button variant="outline-warning">Outline Warning</Button>
                  <Button variant="outline-error">Outline Error</Button>
                  <Button variant="outline-info">Outline Info</Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-base font-medium">Variantes de Texto</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="text-default">Text Default</Button>
                  <Button variant="text-secondary">Text Secondary</Button>
                  <Button variant="text-success">Text Success</Button>
                  <Button variant="text-warning">Text Warning</Button>
                  <Button variant="text-error">Text Error</Button>
                  <Button variant="text-info">Text Info</Button>
                </div>
              </div>
            </div>
          </ComponentCard>
          
          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-medium mb-4">Uso de variantes</h2>
              
              <p className="text-gray-600 mb-4">
                As variantes de botão são usadas para comunicar diferentes níveis de importância ou tipos de ação.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium">Primary</p>
                  <p className="text-sm text-gray-600">Usado para ações principais e de maior destaque na interface.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium">Secondary</p>
                  <p className="text-sm text-gray-600">Usado para ações secundárias que complementam a ação principal.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium">Outline</p>
                  <p className="text-sm text-gray-600">Usado para ações de menor importância ou em conjunto com botões de destaque.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium">Text</p>
                  <p className="text-sm text-gray-600">Usado para ações terciárias ou em áreas com alta densidade de elementos.</p>
                </div>
              </div>
            </div>
            
            <CodeBlock 
              code={`<Button>Primary Action</Button>
<Button variant="secondary">Secondary Action</Button>
<Button variant="outline-secondary">Tertiary Action</Button>
<Button variant="text-default">Minimal Action</Button>`}
              language="jsx"
              title="Implementação de Variantes de Botão"
            />
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
