
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
                    Next <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </ComponentCard>
            </div>
          )}
          
          {activeTab === 'variants' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Default Button */}
                <ComponentCard
                  title="Default Button"
                  description="Botão com cor sólida para ações primárias."
                  code={`<Button>Default</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>`}
                >
                  <div className="flex flex-col items-start gap-2">
                    <Button size="sm">Label</Button>
                    <Button>Label</Button>
                    <Button size="lg">Label</Button>
                  </div>
                </ComponentCard>

                {/* Error Button */}
                <ComponentCard
                  title="Error Button"
                  description="Botão vermelho para ações críticas ou destrutivas."
                  code={`<Button variant="error">Error</Button>
<Button variant="error" size="sm">Small</Button>
<Button variant="error" size="lg">Large</Button>`}
                >
                  <div className="flex flex-col items-start gap-2">
                    <Button variant="error" size="sm">Label</Button>
                    <Button variant="error">Label</Button>
                    <Button variant="error" size="lg">Label</Button>
                  </div>
                </ComponentCard>

                {/* Warning Button */}
                <ComponentCard
                  title="Warning Button"
                  description="Botão de alerta para ações que requerem atenção."
                  code={`<Button variant="warning">Warning</Button>
<Button variant="warning" size="sm">Small</Button>
<Button variant="warning" size="lg">Large</Button>`}
                >
                  <div className="flex flex-col items-start gap-2">
                    <Button variant="warning" className="bg-warning-main text-white hover:bg-warning-dark" size="sm">Label</Button>
                    <Button variant="warning" className="bg-warning-main text-white hover:bg-warning-dark">Label</Button>
                    <Button variant="warning" className="bg-warning-main text-white hover:bg-warning-dark" size="lg">Label</Button>
                  </div>
                </ComponentCard>

                {/* Info Button */}
                <ComponentCard
                  title="Info Button"
                  description="Botão informativo para ações neutras."
                  code={`<Button variant="info">Info</Button>
<Button variant="info" size="sm">Small</Button>
<Button variant="info" size="lg">Large</Button>`}
                >
                  <div className="flex flex-col items-start gap-2">
                    <Button variant="info" className="bg-info-main text-info-contrast hover:bg-info-dark" size="sm">Label</Button>
                    <Button variant="info" className="bg-info-main text-info-contrast hover:bg-info-dark">Label</Button>
                    <Button variant="info" className="bg-info-main text-info-contrast hover:bg-info-dark" size="lg">Label</Button>
                  </div>
                </ComponentCard>

                {/* Success Button */}
                <ComponentCard
                  title="Success Button"
                  description="Botão verde para ações de confirmação ou sucesso."
                  code={`<Button variant="success">Success</Button>
<Button variant="success" size="sm">Small</Button>
<Button variant="success" size="lg">Large</Button>`}
                >
                  <div className="flex flex-col items-start gap-2">
                    <Button variant="success" className="bg-success-main text-success-contrast hover:bg-success-dark" size="sm">Label</Button>
                    <Button variant="success" className="bg-success-main text-success-contrast hover:bg-success-dark">Label</Button>
                    <Button variant="success" className="bg-success-main text-success-contrast hover:bg-success-dark" size="lg">Label</Button>
                  </div>
                </ComponentCard>

                {/* Secondary Button */}
                <ComponentCard
                  title="Secondary Button"
                  description="Botão secundário para ações alternativas."
                  code={`<Button variant="secondary">Secondary</Button>
<Button variant="secondary" size="sm">Small</Button>
<Button variant="secondary" size="lg">Large</Button>`}
                >
                  <div className="flex flex-col items-start gap-2">
                    <Button variant="secondary" size="sm">Label</Button>
                    <Button variant="secondary">Label</Button>
                    <Button variant="secondary" size="lg">Label</Button>
                  </div>
                </ComponentCard>

                {/* Outline Default Button */}
                <ComponentCard
                  title="Outline Default Button"
                  description="Botão com contorno para ações secundárias."
                  code={`<Button variant="outline-default">Default</Button>
<Button variant="outline-default" size="sm">Small</Button>
<Button variant="outline-default" size="lg">Large</Button>`}
                >
                  <div className="flex flex-col items-start gap-2">
                    <Button variant="outline-default" size="sm">Label</Button>
                    <Button variant="outline-default">Label</Button>
                    <Button variant="outline-default" size="lg">Label</Button>
                  </div>
                </ComponentCard>

                {/* Outline Error Button */}
                <ComponentCard
                  title="Outline Error Button"
                  description="Botão com contorno vermelho para ações críticas mais sutis."
                  code={`<Button variant="outline-error">Error</Button>
<Button variant="outline-error" size="sm">Small</Button>
<Button variant="outline-error" size="lg">Large</Button>`}
                >
                  <div className="flex flex-col items-start gap-2">
                    <Button variant="outline-error" size="sm">Label</Button>
                    <Button variant="outline-error">Label</Button>
                    <Button variant="outline-error" size="lg">Label</Button>
                  </div>
                </ComponentCard>

                {/* Outline Warning Button */}
                <ComponentCard
                  title="Outline Warning Button"
                  description="Botão com contorno amarelo para alertas sutis."
                  code={`<Button variant="outline-warning">Warning</Button>
<Button variant="outline-warning" size="sm">Small</Button>
<Button variant="outline-warning" size="lg">Large</Button>`}
                >
                  <div className="flex flex-col items-start gap-2">
                    <Button variant="outline-warning" size="sm">Label</Button>
                    <Button variant="outline-warning">Label</Button>
                    <Button variant="outline-warning" size="lg">Label</Button>
                  </div>
                </ComponentCard>

                {/* Outline Info Button */}
                <ComponentCard
                  title="Outline Info Button"
                  description="Botão com contorno azul para ações informativas sutis."
                  code={`<Button variant="outline-info">Info</Button>
<Button variant="outline-info" size="sm">Small</Button>
<Button variant="outline-info" size="lg">Large</Button>`}
                >
                  <div className="flex flex-col items-start gap-2">
                    <Button variant="outline-info" size="sm">Label</Button>
                    <Button variant="outline-info">Label</Button>
                    <Button variant="outline-info" size="lg">Label</Button>
                  </div>
                </ComponentCard>

                {/* Outline Success Button */}
                <ComponentCard
                  title="Outline Success Button"
                  description="Botão com contorno verde para ações de sucesso sutis."
                  code={`<Button variant="outline-success">Success</Button>
<Button variant="outline-success" size="sm">Small</Button>
<Button variant="outline-success" size="lg">Large</Button>`}
                >
                  <div className="flex flex-col items-start gap-2">
                    <Button variant="outline-success" size="sm">Label</Button>
                    <Button variant="outline-success">Label</Button>
                    <Button variant="outline-success" size="lg">Label</Button>
                  </div>
                </ComponentCard>

                {/* Outline Secondary Button */}
                <ComponentCard
                  title="Outline Secondary Button"
                  description="Botão com contorno cinza para ações secundárias."
                  code={`<Button variant="outline-secondary">Secondary</Button>
<Button variant="outline-secondary" size="sm">Small</Button>
<Button variant="outline-secondary" size="lg">Large</Button>`}
                >
                  <div className="flex flex-col items-start gap-2">
                    <Button variant="outline-secondary" size="sm">Label</Button>
                    <Button variant="outline-secondary">Label</Button>
                    <Button variant="outline-secondary" size="lg">Label</Button>
                  </div>
                </ComponentCard>

                {/* Text Default Button */}
                <ComponentCard
                  title="Text Default Button"
                  description="Botão de texto sem fundo para ações sutis."
                  code={`<Button variant="text-default">Default</Button>
<Button variant="text-default" size="sm">Small</Button>
<Button variant="text-default" size="lg">Large</Button>`}
                >
                  <div className="flex flex-col items-start gap-2">
                    <Button variant="text-default" className="hover:bg-gray-50" size="sm">Label</Button>
                    <Button variant="text-default" className="hover:bg-gray-50">Label</Button>
                    <Button variant="text-default" className="hover:bg-gray-50" size="lg">Label</Button>
                  </div>
                </ComponentCard>

                {/* Text Error Button */}
                <ComponentCard
                  title="Text Error Button"
                  description="Botão de texto vermelho para ações críticas discretas."
                  code={`<Button variant="text-error">Error</Button>
<Button variant="text-error" size="sm">Small</Button>
<Button variant="text-error" size="lg">Large</Button>`}
                >
                  <div className="flex flex-col items-start gap-2">
                    <Button variant="text-error" className="hover:bg-gray-50" size="sm">Label</Button>
                    <Button variant="text-error" className="hover:bg-gray-50">Label</Button>
                    <Button variant="text-error" className="hover:bg-gray-50" size="lg">Label</Button>
                  </div>
                </ComponentCard>

                {/* Text Warning Button */}
                <ComponentCard
                  title="Text Warning Button"
                  description="Botão de texto amarelo para alertas discretos."
                  code={`<Button variant="text-warning">Warning</Button>
<Button variant="text-warning" size="sm">Small</Button>
<Button variant="text-warning" size="lg">Large</Button>`}
                >
                  <div className="flex flex-col items-start gap-2">
                    <Button variant="text-warning" className="hover:bg-gray-50" size="sm">Label</Button>
                    <Button variant="text-warning" className="hover:bg-gray-50">Label</Button>
                    <Button variant="text-warning" className="hover:bg-gray-50" size="lg">Label</Button>
                  </div>
                </ComponentCard>

                {/* Text Info Button */}
                <ComponentCard
                  title="Text Info Button"
                  description="Botão de texto azul para ações informativas discretas."
                  code={`<Button variant="text-info">Info</Button>
<Button variant="text-info" size="sm">Small</Button>
<Button variant="text-info" size="lg">Large</Button>`}
                >
                  <div className="flex flex-col items-start gap-2">
                    <Button variant="text-info" className="hover:bg-gray-50" size="sm">Label</Button>
                    <Button variant="text-info" className="hover:bg-gray-50">Label</Button>
                    <Button variant="text-info" className="hover:bg-gray-50" size="lg">Label</Button>
                  </div>
                </ComponentCard>

                {/* Text Success Button */}
                <ComponentCard
                  title="Text Success Button"
                  description="Botão de texto verde para ações de sucesso discretas."
                  code={`<Button variant="text-success">Success</Button>
<Button variant="text-success" size="sm">Small</Button>
<Button variant="text-success" size="lg">Large</Button>`}
                >
                  <div className="flex flex-col items-start gap-2">
                    <Button variant="text-success" className="hover:bg-gray-50" size="sm">Label</Button>
                    <Button variant="text-success" className="hover:bg-gray-50">Label</Button>
                    <Button variant="text-success" className="hover:bg-gray-50" size="lg">Label</Button>
                  </div>
                </ComponentCard>

                {/* Text Secondary Button */}
                <ComponentCard
                  title="Text Secondary Button"
                  description="Botão de texto cinza para ações secundárias discretas."
                  code={`<Button variant="text-secondary">Secondary</Button>
<Button variant="text-secondary" size="sm">Small</Button>
<Button variant="text-secondary" size="lg">Large</Button>`}
                >
                  <div className="flex flex-col items-start gap-2">
                    <Button variant="text-secondary" className="hover:bg-gray-50" size="sm">Label</Button>
                    <Button variant="text-secondary" className="hover:bg-gray-50">Label</Button>
                    <Button variant="text-secondary" className="hover:bg-gray-50" size="lg">Label</Button>
                  </div>
                </ComponentCard>
              </div>
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
