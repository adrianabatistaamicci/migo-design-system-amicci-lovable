
import React from 'react';
import Header from '@/components/library-components/Header';
import { Search, Plus, ChevronRight, ChevronLeft, Check, Edit, Trash, X } from 'lucide-react';
import CodeBlock from '@/components/CodeBlock';

const IconButton = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Icon Button"
        description="Botões que contêm apenas ícones, úteis para ações compactas na interface."
        type="components"
      />
      
      <div className="mt-6 space-y-8">
        <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-medium mb-4">Icon Buttons Básicos</h2>
            
            <div className="flex gap-4 flex-wrap mb-6">
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Plus className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Edit className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Trash className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <CodeBlock 
            code={`<button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
  <Search className="h-5 w-5" />
</button>

<button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
  <Plus className="h-5 w-5" />
</button>

<button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
  <Edit className="h-5 w-5" />
</button>

<button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
  <Trash className="h-5 w-5" />
</button>`}
            language="tsx"
            title="Implementação de Icon Buttons Básicos"
            showCode={false}
          />
        </div>
        
        <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-medium mb-4">Icon Buttons com Cores</h2>
            
            <div className="flex gap-4 flex-wrap mb-6">
              <button className="p-2 rounded-full bg-primary-main text-white hover:bg-primary-dark transition-colors">
                <Plus className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-full bg-success-main text-white hover:bg-success-dark transition-colors">
                <Check className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-full bg-warning-main text-white hover:bg-warning-dark transition-colors">
                <Edit className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-full bg-error-main text-white hover:bg-error-dark transition-colors">
                <Trash className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <CodeBlock 
            code={`<button className="p-2 rounded-full bg-primary-main text-white hover:bg-primary-dark transition-colors">
  <Plus className="h-5 w-5" />
</button>

<button className="p-2 rounded-full bg-success-main text-white hover:bg-success-dark transition-colors">
  <Check className="h-5 w-5" />
</button>

<button className="p-2 rounded-full bg-warning-main text-white hover:bg-warning-dark transition-colors">
  <Edit className="h-5 w-5" />
</button>

<button className="p-2 rounded-full bg-error-main text-white hover:bg-error-dark transition-colors">
  <Trash className="h-5 w-5" />
</button>`}
            language="tsx"
            title="Implementação de Icon Buttons com Cores"
            showCode={false}
          />
        </div>
        
        <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-medium mb-4">Icon Buttons com Bordas</h2>
            
            <div className="flex gap-4 flex-wrap mb-6">
              <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
                <ChevronRight className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <CodeBlock 
            code={`<button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
  <ChevronLeft className="h-5 w-5" />
</button>

<button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
  <ChevronRight className="h-5 w-5" />
</button>

<button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
  <X className="h-5 w-5" />
</button>`}
            language="tsx"
            title="Implementação de Icon Buttons com Bordas"
            showCode={false}
          />
        </div>
        
        <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-medium mb-4">Icon Buttons em Tamanhos Diferentes</h2>
            
            <div className="flex gap-4 items-center flex-wrap mb-6">
              <button className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <Plus className="h-4 w-4" />
              </button>
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <Plus className="h-5 w-5" />
              </button>
              <button className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <Plus className="h-6 w-6" />
              </button>
            </div>
          </div>
          
          <CodeBlock 
            code={`<!-- Pequeno -->
<button className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
  <Plus className="h-4 w-4" />
</button>

<!-- Médio -->
<button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
  <Plus className="h-5 w-5" />
</button>

<!-- Grande -->
<button className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
  <Plus className="h-6 w-6" />
</button>`}
            language="html"
            title="Implementação de Icon Buttons em Tamanhos Diferentes"
            showCode={false}
          />
        </div>
        
        <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-medium mb-4">Icon Buttons Desabilitados</h2>
            
            <div className="flex gap-4 flex-wrap mb-6">
              <button className="p-2 rounded-full bg-gray-100 text-gray-400 cursor-not-allowed" disabled>
                <Plus className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-full border border-gray-200 text-gray-400 cursor-not-allowed" disabled>
                <Edit className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <CodeBlock 
            code={`<button className="p-2 rounded-full bg-gray-100 text-gray-400 cursor-not-allowed" disabled>
  <Plus className="h-5 w-5" />
</button>

<button className="p-2 rounded-full border border-gray-200 text-gray-400 cursor-not-allowed" disabled>
  <Edit className="h-5 w-5" />
</button>`}
            language="tsx"
            title="Implementação de Icon Buttons Desabilitados"
            showCode={false}
          />
        </div>
      </div>
    </div>
  );
};

export default IconButton;
