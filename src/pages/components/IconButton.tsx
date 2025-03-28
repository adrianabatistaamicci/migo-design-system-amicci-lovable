
/**
 * @protected
 * ATENÇÃO: Este arquivo contém conteúdo finalizado e aprovado.
 * Não deve ser alterado diretamente pelo assistente AI.
 * Apenas atualizações de componentes devem ser refletidas.
 */

import React, { useState } from 'react';
import Header from '@/components/library-components/Header';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { IconButton } from '@/components/ui/icon-button';
import { Heart, Trash, Plus, Edit, Search, Settings, Mail, Check, Save, ArrowRight, X } from 'lucide-react';
import { TailwindTabs } from '@/components/ui/tabs';
import CodeBlock from '@/components/CodeBlock';

const IconButtonPage = () => {
  const [activeTab, setActiveTab] = useState('examples');
  
  return (
    <div className="animate-slide-in">
      <Header
        title="Icon Button"
        description="Square buttons with icons for compact UI elements."
        type="components"
      />

      <TailwindTabs defaultValue="examples" className="mt-8" tabs={[{
        name: 'Exemplos',
        value: 'examples'
      }, {
        name: 'Variantes',
        value: 'variants'
      }]} variant="pillsGray" onChange={value => setActiveTab(value)} />

      <div className="mt-6">
        {activeTab === 'examples' && <div className="space-y-8">
          {/* Basic Usage */}
          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-medium mb-4">Basic Icon Buttons</h3>
              <div className="flex gap-4">
                <IconButton icon={<Heart size={18} />} />
                <IconButton icon={<Trash size={18} />} variant="error" />
                <IconButton icon={<Plus size={18} />} variant="success" />
              </div>
            </div>
            <CodeBlock
              code={`<IconButton icon={<Heart size={18} />} />
<IconButton icon={<Trash size={18} />} variant="error" />
<IconButton icon={<Plus size={18} />} variant="success" />`}
              language="tsx"
              title="Implementation of Basic Icon Buttons"
              showCode={false}
            />
          </div>

          {/* Outlined Variants */}
          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-medium mb-4">Outlined Icon Buttons</h3>
              <div className="flex gap-4">
                <IconButton icon={<Edit size={18} />} variant="outline-default" />
                <IconButton icon={<Search size={18} />} variant="outline-secondary" />
                <IconButton icon={<Settings size={18} />} variant="outline-error" />
              </div>
            </div>
            <CodeBlock
              code={`<IconButton icon={<Edit size={18} />} variant="outline-default" />
<IconButton icon={<Search size={18} />} variant="outline-secondary" />
<IconButton icon={<Settings size={18} />} variant="outline-error" />`}
              language="tsx"
              title="Implementation of Outlined Icon Buttons"
              showCode={false}
            />
          </div>

          {/* Text Variants */}
          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-medium mb-4">Text Icon Buttons</h3>
              <div className="flex gap-4">
                <IconButton icon={<Mail size={18} />} variant="text-default" />
                <IconButton icon={<Check size={18} />} variant="text-success" />
                <IconButton icon={<Trash size={18} />} variant="text-error" />
              </div>
            </div>
            <CodeBlock
              code={`<IconButton icon={<Mail size={18} />} variant="text-default" />
<IconButton icon={<Check size={18} />} variant="text-success" />
<IconButton icon={<Trash size={18} />} variant="text-error" />`}
              language="tsx"
              title="Implementation of Text Icon Buttons"
              showCode={false}
            />
          </div>

          {/* Sizes */}
          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-medium mb-4">Button Sizes</h3>
              <div className="flex items-center gap-4">
                <IconButton icon={<Save size={14} />} size="sm" />
                <IconButton icon={<Save size={18} />} />
                <IconButton icon={<Save size={22} />} size="lg" />
              </div>
            </div>
            <CodeBlock
              code={`<IconButton icon={<Save size={14} />} size="sm" />
<IconButton icon={<Save size={18} />} />
<IconButton icon={<Save size={22} />} size="lg" />`}
              language="tsx"
              title="Implementation of Icon Button Sizes"
              showCode={false}
            />
          </div>

          {/* States */}
          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-medium mb-4">Button States</h3>
              <div className="flex gap-4">
                <IconButton icon={<ArrowRight size={18} />} />
                <IconButton icon={<ArrowRight size={18} />} disabled />
                <IconButton icon={<ArrowRight size={18} />} isLoading />
              </div>
            </div>
            <CodeBlock
              code={`<IconButton icon={<ArrowRight size={18} />} />
<IconButton icon={<ArrowRight size={18} />} disabled />
<IconButton icon={<ArrowRight size={18} />} isLoading />`}
              language="tsx"
              title="Implementation of Icon Button States"
              showCode={false}
            />
          </div>
        </div>}
        
        {activeTab === 'variants' && <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Default Icon Button */}
            <ComponentCard title="Default Icon Button" description="Botão de ícone com cor sólida para ações primárias." code={`<IconButton icon={<Plus size={14} />} size="sm" />
<IconButton icon={<Plus size={18} />} />
<IconButton icon={<Plus size={22} />} size="lg" />`}>
              <div className="flex justify-center items-center gap-2">
                <IconButton icon={<Plus size={14} />} size="sm" />
                <IconButton icon={<Plus size={18} />} />
                <IconButton icon={<Plus size={22} />} size="lg" />
              </div>
            </ComponentCard>

            {/* Error Icon Button */}
            <ComponentCard title="Error Icon Button" description="Botão de ícone vermelho para ações críticas ou destrutivas." code={`<IconButton icon={<Trash size={14} />} variant="error" size="sm" />
<IconButton icon={<Trash size={18} />} variant="error" />
<IconButton icon={<Trash size={22} />} variant="error" size="lg" />`}>
              <div className="flex justify-center items-center gap-2">
                <IconButton icon={<Trash size={14} />} variant="error" size="sm" />
                <IconButton icon={<Trash size={18} />} variant="error" />
                <IconButton icon={<Trash size={22} />} variant="error" size="lg" />
              </div>
            </ComponentCard>

            {/* Secondary Icon Button */}
            <ComponentCard title="Secondary Icon Button" description="Botão de ícone secundário para ações alternativas." code={`<IconButton icon={<Edit size={14} />} variant="secondary" size="sm" />
<IconButton icon={<Edit size={18} />} variant="secondary" />
<IconButton icon={<Edit size={22} />} variant="secondary" size="lg" />`}>
              <div className="flex justify-center items-center gap-2">
                <IconButton icon={<Edit size={14} />} variant="secondary" size="sm" />
                <IconButton icon={<Edit size={18} />} variant="secondary" />
                <IconButton icon={<Edit size={22} />} variant="secondary" size="lg" />
              </div>
            </ComponentCard>

            {/* Success Icon Button */}
            <ComponentCard title="Success Icon Button" description="Botão de ícone verde para ações de confirmação ou sucesso." code={`<IconButton icon={<Check size={14} />} variant="success" className="bg-success-main text-success-contrast hover:bg-success-dark" size="sm" />
<IconButton icon={<Check size={18} />} variant="success" className="bg-success-main text-success-contrast hover:bg-success-dark" />
<IconButton icon={<Check size={22} />} variant="success" className="bg-success-main text-success-contrast hover:bg-success-dark" size="lg" />`}>
              <div className="flex justify-center items-center gap-2">
                <IconButton icon={<Check size={14} />} variant="success" className="bg-success-main text-success-contrast hover:bg-success-dark" size="sm" />
                <IconButton icon={<Check size={18} />} variant="success" className="bg-success-main text-success-contrast hover:bg-success-dark" />
                <IconButton icon={<Check size={22} />} variant="success" className="bg-success-main text-success-contrast hover:bg-success-dark" size="lg" />
              </div>
            </ComponentCard>

            {/* Warning Icon Button */}
            <ComponentCard title="Warning Icon Button" description="Botão de ícone amarelo para ações de alerta." code={`<IconButton icon={<X size={14} />} variant="warning" className="bg-warning-main text-white hover:bg-warning-dark" size="sm" />
<IconButton icon={<X size={18} />} variant="warning" className="bg-warning-main text-white hover:bg-warning-dark" />
<IconButton icon={<X size={22} />} variant="warning" className="bg-warning-main text-white hover:bg-warning-dark" size="lg" />`}>
              <div className="flex justify-center items-center gap-2">
                <IconButton icon={<X size={14} />} variant="warning" className="bg-warning-main text-white hover:bg-warning-dark" size="sm" />
                <IconButton icon={<X size={18} />} variant="warning" className="bg-warning-main text-white hover:bg-warning-dark" />
                <IconButton icon={<X size={22} />} variant="warning" className="bg-warning-main text-white hover:bg-warning-dark" size="lg" />
              </div>
            </ComponentCard>

            {/* Info Icon Button */}
            <ComponentCard title="Info Icon Button" description="Botão de ícone azul para ações informativas." code={`<IconButton icon={<Mail size={14} />} variant="info" className="bg-info-main text-info-contrast hover:bg-info-dark" size="sm" />
<IconButton icon={<Mail size={18} />} variant="info" className="bg-info-main text-info-contrast hover:bg-info-dark" />
<IconButton icon={<Mail size={22} />} variant="info" className="bg-info-main text-info-contrast hover:bg-info-dark" size="lg" />`}>
              <div className="flex justify-center items-center gap-2">
                <IconButton icon={<Mail size={14} />} variant="info" className="bg-info-main text-info-contrast hover:bg-info-dark" size="sm" />
                <IconButton icon={<Mail size={18} />} variant="info" className="bg-info-main text-info-contrast hover:bg-info-dark" />
                <IconButton icon={<Mail size={22} />} variant="info" className="bg-info-main text-info-contrast hover:bg-info-dark" size="lg" />
              </div>
            </ComponentCard>

            {/* Outline Default Icon Button */}
            <ComponentCard title="Outline Default Icon Button" description="Botão de ícone com contorno azul para ações primárias sutis." code={`<IconButton icon={<Plus size={14} />} variant="outline-default" size="sm" />
<IconButton icon={<Plus size={18} />} variant="outline-default" />
<IconButton icon={<Plus size={22} />} variant="outline-default" size="lg" />`}>
              <div className="flex justify-center items-center gap-2">
                <IconButton icon={<Plus size={14} />} variant="outline-default" size="sm" />
                <IconButton icon={<Plus size={18} />} variant="outline-default" />
                <IconButton icon={<Plus size={22} />} variant="outline-default" size="lg" />
              </div>
            </ComponentCard>

            {/* Outline Secondary Icon Button */}
            <ComponentCard title="Outline Secondary Icon Button" description="Botão de ícone com contorno cinza para ações secundárias." code={`<IconButton icon={<Edit size={14} />} variant="outline-secondary" size="sm" />
<IconButton icon={<Edit size={18} />} variant="outline-secondary" />
<IconButton icon={<Edit size={22} />} variant="outline-secondary" size="lg" />`}>
              <div className="flex justify-center items-center gap-2">
                <IconButton icon={<Edit size={14} />} variant="outline-secondary" size="sm" />
                <IconButton icon={<Edit size={18} />} variant="outline-secondary" />
                <IconButton icon={<Edit size={22} />} variant="outline-secondary" size="lg" />
              </div>
            </ComponentCard>

            {/* Outline Error Icon Button */}
            <ComponentCard title="Outline Error Icon Button" description="Botão de ícone com contorno vermelho para ações críticas sutis." code={`<IconButton icon={<Trash size={14} />} variant="outline-error" size="sm" />
<IconButton icon={<Trash size={18} />} variant="outline-error" />
<IconButton icon={<Trash size={22} />} variant="outline-error" size="lg" />`}>
              <div className="flex justify-center items-center gap-2">
                <IconButton icon={<Trash size={14} />} variant="outline-error" size="sm" />
                <IconButton icon={<Trash size={18} />} variant="outline-error" />
                <IconButton icon={<Trash size={22} />} variant="outline-error" size="lg" />
              </div>
            </ComponentCard>

            {/* Text Default Icon Button */}
            <ComponentCard title="Text Default Icon Button" description="Botão de ícone de texto sem fundo para ações sutis." code={`<IconButton icon={<Plus size={14} />} variant="text-default" size="sm" />
<IconButton icon={<Plus size={18} />} variant="text-default" />
<IconButton icon={<Plus size={22} />} variant="text-default" size="lg" />`}>
              <div className="flex justify-center items-center gap-2">
                <IconButton icon={<Plus size={14} />} variant="text-default" size="sm" />
                <IconButton icon={<Plus size={18} />} variant="text-default" />
                <IconButton icon={<Plus size={22} />} variant="text-default" size="lg" />
              </div>
            </ComponentCard>

            {/* Text Secondary Icon Button */}
            <ComponentCard title="Text Secondary Icon Button" description="Botão de ícone de texto cinza para ações secundárias discretas." code={`<IconButton icon={<Edit size={14} />} variant="text-secondary" size="sm" />
<IconButton icon={<Edit size={18} />} variant="text-secondary" />
<IconButton icon={<Edit size={22} />} variant="text-secondary" size="lg" />`}>
              <div className="flex justify-center items-center gap-2">
                <IconButton icon={<Edit size={14} />} variant="text-secondary" size="sm" />
                <IconButton icon={<Edit size={18} />} variant="text-secondary" />
                <IconButton icon={<Edit size={22} />} variant="text-secondary" size="lg" />
              </div>
            </ComponentCard>

            {/* Text Error Icon Button */}
            <ComponentCard title="Text Error Icon Button" description="Botão de ícone de texto vermelho para ações críticas discretas." code={`<IconButton icon={<Trash size={14} />} variant="text-error" size="sm" />
<IconButton icon={<Trash size={18} />} variant="text-error" />
<IconButton icon={<Trash size={22} />} variant="text-error" size="lg" />`}>
              <div className="flex justify-center items-center gap-2">
                <IconButton icon={<Trash size={14} />} variant="text-error" size="sm" />
                <IconButton icon={<Trash size={18} />} variant="text-error" />
                <IconButton icon={<Trash size={22} />} variant="text-error" size="lg" />
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
                  <TableRow className="bg-mui-sidebar">
                    <TableHead className="w-[15%]">Prop</TableHead>
                    <TableHead className="w-[45%]">Type</TableHead>
                    <TableHead className="w-[15%]">Default</TableHead>
                    <TableHead className="w-[25%]">Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-mono text-mui-text-primary">variant</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary break-words">"default" | "secondary" | "error" | "warning" | "info" | "success" | "outline-default" | "outline-secondary" | "outline-error" | "outline-warning" | "outline-info" | "outline-success" | "text-default" | "text-secondary" | "text-error" | "text-warning" | "text-info" | "text-success"</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">"default"</TableCell>
                    <TableCell className="text-mui-text-secondary">Controls the visual style of the button</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-mui-text-primary">size</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">"default" | "sm" | "lg"</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">"default"</TableCell>
                    <TableCell className="text-mui-text-secondary">Controls the size of the button</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-mui-text-primary">icon</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">ReactNode</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">Required</TableCell>
                    <TableCell className="text-mui-text-secondary">Icon to display inside the button</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-mui-text-primary">asChild</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">boolean</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">false</TableCell>
                    <TableCell className="text-mui-text-secondary">Whether to render as a child element instead of a button</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-mui-text-primary">isLoading</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">boolean</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">false</TableCell>
                    <TableCell className="text-mui-text-secondary">When true, shows a loading spinner</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-mui-text-primary">disabled</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">boolean</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">false</TableCell>
                    <TableCell className="text-mui-text-secondary">When true, prevents user interaction</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>}
      </div>
    </div>
  );
};

export default IconButtonPage;
