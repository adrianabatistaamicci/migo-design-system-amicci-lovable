
import React from 'react';
import Header from '@/components/library-components/Header';
import { Button } from '@/components/ui/button';
import { Plus, ChevronRight, ArrowRight } from 'lucide-react';
import CodeBlock from '@/components/CodeBlock';

const Buttons = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Buttons"
        description="Botões permitem que os usuários executem ações e tomem decisões com um único toque."
        type="components"
      />
      
      <div className="mt-6 space-y-8">
        <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-medium mb-4">Botões por variante</h2>
            
            <div className="space-y-4 mb-6">
              <h3 className="text-base font-medium">Botões Primários</h3>
              <div className="flex flex-wrap gap-4">
                <Button>Default</Button>
                <Button variant="outline-secondary">Outline</Button>
                <Button variant="text-default">Text</Button>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <h3 className="text-base font-medium">Botões de Status</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="success">Success</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="error">Error</Button>
                <Button variant="info">Info</Button>
              </div>
            </div>
            
            <CodeBlock 
              code={`// Botões Primários
<Button>Default</Button>
<Button variant="outline-secondary">Outline</Button>
<Button variant="text-default">Text</Button>

// Botões de Status
<Button variant="success">Success</Button>
<Button variant="warning">Warning</Button>
<Button variant="error">Error</Button>
<Button variant="info">Info</Button>`}
              language="tsx"
              title="Implementação de Botões por Variante"
              showCode={false}
            />
          </div>
        </div>
        
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
            
            <CodeBlock 
              code={`<Button size="sm">Small</Button>
<Button>Default</Button>
<Button size="lg">Large</Button>`}
              language="tsx"
              title="Implementação de Botões por Tamanho"
              showCode={false}
            />
          </div>
        </div>
        
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
            
            <CodeBlock 
              code={`<Button startIcon={<Plus />}>Add item</Button>
<Button endIcon={<ChevronRight />}>Next step</Button>
<Button startIcon={<Plus />} endIcon={<ArrowRight />}>Add and continue</Button>`}
              language="tsx"
              title="Implementação de Botões com Ícones"
              showCode={false}
            />
          </div>
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
            
            <CodeBlock 
              code={`<Button>Default</Button>
<Button disabled>Disabled</Button>
<Button isLoading>Loading</Button>`}
              language="tsx"
              title="Implementação de Estados do Botão"
              showCode={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
