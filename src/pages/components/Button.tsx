
import React, { useState } from 'react';
import ComponentCard from '@/components/ComponentCard';
import { Button } from '@/components/ui/button';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { Mail, ArrowRight, Plus, X } from 'lucide-react';
import Header from '@/components/library-components/Header';
import { TailwindTabs } from '@/components/ui/tabs';
import CodeBlock from '@/components/CodeBlock';

const ButtonPage = () => {
  const [activeTab, setActiveTab] = useState('examples');
  
  return (
    <div className="w-full animate-slide-in">
      <div className="mb-12">
        <Header 
          title="Button"
          description="Buttons allow users to take actions, and make choices, with a single tap."
          type="components"
        />
        
        <TailwindTabs 
          defaultValue="examples" 
          className="mt-8"
          tabs={[
            { name: 'Exemplos', value: 'examples' },
            { name: 'Variantes', value: 'variants' },
            { name: 'API', value: 'api' },
            { name: 'Código', value: 'code' }
          ]}
          variant="pillsGray"
          onChange={value => setActiveTab(value)}
        />
        
        <div className="mt-6">
          {activeTab === 'code' && (
            <div className="mb-12">
              <h2 className="text-2xl font-medium text-mui-text-primary mb-6">
                Import
              </h2>
              
              <pre className="bg-mui-sidebar p-4 rounded-md overflow-x-auto text-sm">
                <code>import {'{ Button }'} from "@/components/ui/button";</code>
              </pre>
            </div>
          )}
          
          {activeTab === 'examples' && (
            <div className="space-y-8">
              <ComponentCard
                title="Button Variants"
                description="Different visual styles for buttons."
              >
                <div className="flex flex-wrap gap-4">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
              </ComponentCard>
              
              <ComponentCard
                title="Button Sizes"
                description="Different sizes for various contexts."
              >
                <div className="flex items-center flex-wrap gap-4">
                  <Button size="sm">Small</Button>
                  <Button>Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon"><Plus size={16} /></Button>
                </div>
              </ComponentCard>
              
              <ComponentCard
                title="Button States"
                description="Different interaction states."
              >
                <div className="flex flex-wrap gap-4">
                  <Button>Default</Button>
                  <Button disabled>Disabled</Button>
                  <Button className="opacity-50 cursor-not-allowed">Custom Disabled</Button>
                </div>
              </ComponentCard>
              
              <ComponentCard
                title="Button with Icon"
                description="Buttons with additional icon elements."
              >
                <div className="flex flex-wrap gap-4">
                  <Button>
                    <Mail className="mr-2 h-4 w-4" /> Login with Email
                  </Button>
                  <Button variant="outline">
                    <Plus className="mr-2 h-4 w-4" /> New Item
                  </Button>
                  <Button variant="secondary">
                    Next <Plus className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </ComponentCard>
            </div>
          )}
          
        {activeTab === 'variants' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contained Buttons */}
              <ComponentCard
                title="Contained Buttons"
                description="Botões com cores sólidas para ações primárias."
                code={`<Button>Default</Button>
<Button variant="error">Error</Button>
<Button variant="warning">Warning</Button>
<Button variant="info">Info</Button>
<Button variant="success">Success</Button>`}
              >
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <Button className="w-full" size="sm">Label</Button>
                    <Button className="w-full">Label</Button>
                    <Button className="w-full" size="lg">Label</Button>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Button variant="error" className="w-full" size="sm">Label</Button>
                    <Button variant="error" className="w-full">Label</Button>
                    <Button variant="error" className="w-full" size="lg">Label</Button>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Button variant="warning" className="w-full bg-warning-main text-white hover:bg-warning-dark" size="sm">Label</Button>
                    <Button variant="warning" className="w-full bg-warning-main text-white hover:bg-warning-dark">Label</Button>
                    <Button variant="warning" className="w-full bg-warning-main text-white hover:bg-warning-dark" size="lg">Label</Button>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Button variant="info" className="w-full bg-info-main text-info-contrast hover:bg-info-dark" size="sm">Label</Button>
                    <Button variant="info" className="w-full bg-info-main text-info-contrast hover:bg-info-dark">Label</Button>
                    <Button variant="info" className="w-full bg-info-main text-info-contrast hover:bg-info-dark" size="lg">Label</Button>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Button variant="success" className="w-full bg-success-main text-success-contrast hover:bg-success-dark" size="sm">Label</Button>
                    <Button variant="success" className="w-full bg-success-main text-success-contrast hover:bg-success-dark">Label</Button>
                    <Button variant="success" className="w-full bg-success-main text-success-contrast hover:bg-success-dark" size="lg">Label</Button>
                  </div>
                </div>
              </ComponentCard>

              {/* Outlined Buttons */}
              <ComponentCard
                title="Outline Buttons"
                description="Botões com contorno para ações secundárias."
                code={`<Button variant="outline-default">Default</Button>
<Button variant="outline-error">Error</Button>
<Button variant="outline-warning">Warning</Button>
<Button variant="outline-info">Info</Button>
<Button variant="outline-success">Success</Button>
<Button variant="outline-secondary">Secondary</Button>`}
              >
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <Button variant="outline-default" className="w-full" size="sm">Label</Button>
                    <Button variant="outline-default" className="w-full">Label</Button>
                    <Button variant="outline-default" className="w-full" size="lg">Label</Button>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Button variant="outline-error" className="w-full" size="sm">Label</Button>
                    <Button variant="outline-error" className="w-full">Label</Button>
                    <Button variant="outline-error" className="w-full" size="lg">Label</Button>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Button variant="outline-warning" className="w-full" size="sm">Label</Button>
                    <Button variant="outline-warning" className="w-full">Label</Button>
                    <Button variant="outline-warning" className="w-full" size="lg">Label</Button>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Button variant="outline-info" className="w-full" size="sm">Label</Button>
                    <Button variant="outline-info" className="w-full">Label</Button>
                    <Button variant="outline-info" className="w-full" size="lg">Label</Button>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Button variant="outline-success" className="w-full" size="sm">Label</Button>
                    <Button variant="outline-success" className="w-full">Label</Button>
                    <Button variant="outline-success" className="w-full" size="lg">Label</Button>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Button variant="outline-secondary" className="w-full" size="sm">Label</Button>
                    <Button variant="outline-secondary" className="w-full">Label</Button>
                    <Button variant="outline-secondary" className="w-full" size="lg">Label</Button>
                  </div>
                </div>
              </ComponentCard>

              {/* Text Buttons */}
              <ComponentCard
                title="Text Buttons"
                description="Botões sem fundo para ações sutis."
                code={`<Button variant="text-default">Default</Button>
<Button variant="text-error">Error</Button>
<Button variant="text-warning">Warning</Button>
<Button variant="text-info">Info</Button>
<Button variant="text-success">Success</Button>
<Button variant="text-secondary">Secondary</Button>`}
              >
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <Button variant="text-default" className="w-full hover:bg-gray-50" size="sm">Label</Button>
                    <Button variant="text-default" className="w-full hover:bg-gray-50">Label</Button>
                    <Button variant="text-default" className="w-full hover:bg-gray-50" size="lg">Label</Button>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Button variant="text-error" className="w-full hover:bg-gray-50" size="sm">Label</Button>
                    <Button variant="text-error" className="w-full hover:bg-gray-50">Label</Button>
                    <Button variant="text-error" className="w-full hover:bg-gray-50" size="lg">Label</Button>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Button variant="text-warning" className="w-full hover:bg-gray-50" size="sm">Label</Button>
                    <Button variant="text-warning" className="w-full hover:bg-gray-50">Label</Button>
                    <Button variant="text-warning" className="w-full hover:bg-gray-50" size="lg">Label</Button>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Button variant="text-info" className="w-full hover:bg-gray-50" size="sm">Label</Button>
                    <Button variant="text-info" className="w-full hover:bg-gray-50">Label</Button>
                    <Button variant="text-info" className="w-full hover:bg-gray-50" size="lg">Label</Button>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Button variant="text-success" className="w-full hover:bg-gray-50" size="sm">Label</Button>
                    <Button variant="text-success" className="w-full hover:bg-gray-50">Label</Button>
                    <Button variant="text-success" className="w-full hover:bg-gray-50" size="lg">Label</Button>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Button variant="text-secondary" className="w-full hover:bg-gray-50" size="sm">Label</Button>
                    <Button variant="text-secondary" className="w-full hover:bg-gray-50">Label</Button>
                    <Button variant="text-secondary" className="w-full hover:bg-gray-50" size="lg">Label</Button>
                  </div>
                </div>
              </ComponentCard>

              {/* Usage Guide */}
              <ComponentCard
                title="Button Usage Guide"
                description="Melhores práticas para usar diferentes variantes de botões."
              >
                <div className="space-y-4">
                  <div className="p-4 border rounded-md">
                    <h3 className="font-medium mb-2">Botões Contained</h3>
                    <p className="text-sm text-gray-600">Use para ações primárias que precisam de destaque. O fundo sólido chama atenção para as ações mais importantes em uma página.</p>
                  </div>
                  
                  <div className="p-4 border rounded-md">
                    <h3 className="font-medium mb-2">Botões Outline</h3>
                    <p className="text-sm text-gray-600">Use para ações secundárias. O estilo outline é menos proeminente que botões sólidos, mas ainda claramente visível.</p>
                  </div>
                  
                  <div className="p-4 border rounded-md">
                    <h3 className="font-medium mb-2">Botões Texto</h3>
                    <p className="text-sm text-gray-600">Use para ações de baixa ênfase, especialmente em contextos onde muitos botões são necessários, como caixas de diálogo ou cards.</p>
                  </div>
                </div>
              </ComponentCard>
            </div>
            
            <CodeBlock 
              code={`// Exemplo de importação e uso de diferentes variantes de botões
import { Button } from "@/components/ui/button";

// Botões contained
<Button>Default</Button>
<Button variant="error">Error</Button>
<Button variant="warning">Warning</Button>
<Button variant="info">Info</Button>
<Button variant="success">Success</Button>

// Botões outline
<Button variant="outline-default">Default</Button>
<Button variant="outline-error">Error</Button>
<Button variant="outline-warning">Warning</Button>
<Button variant="outline-info">Info</Button>
<Button variant="outline-success">Success</Button>

// Botões texto
<Button variant="text-default">Default</Button>
<Button variant="text-error">Error</Button>
<Button variant="text-warning">Warning</Button>
<Button variant="text-info">Info</Button>
<Button variant="text-success">Success</Button>

// Variantes de tamanho
<Button size="sm">Pequeno</Button>
<Button size="default">Padrão</Button>
<Button size="lg">Grande</Button>`}
              language="tsx"
              title="Uso de Variantes de Botão"
              className="mt-8"
            />
          </div>
        )}
        
        {activeTab === 'api' && (
          <div className="border border-mui-border rounded-lg overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[180px]">Prop</TableHead>
                  <TableHead className="w-[150px]">Type</TableHead>
                  <TableHead className="w-[150px]">Default</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">variant</TableCell>
                  <TableCell className="font-mono text-xs">
                    "default" | "secondary" | "error" | "warning" | "info" | "success" | "outline-default" | "outline-secondary" | "outline-error" | "outline-warning" | "outline-info" | "outline-success" | "text-default" | "text-secondary" | "text-error" | "text-warning" | "text-info" | "text-success" | "destructive" | "outline" | "ghost" | "link"
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
        )}
        </div>
      </div>
    </div>
  );
};

export default ButtonPage;
