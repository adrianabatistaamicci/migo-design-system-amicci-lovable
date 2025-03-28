
import React from 'react';
import Header from '@/components/library-components/Header';
import CodeBlock from '@/components/CodeBlock';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';
import { Chip } from '@/components/ui/chip';

const Chips = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Chips"
        description="Etiquetas compactas para exibir informações e ações."
        type="components"
      />
      
      <div className="mt-6 space-y-8">
        <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-medium mb-4">Chips básicos</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex gap-2">
                <Badge variant="outline" className="flex gap-2 items-center px-3 py-1">
                  Basic chip
                </Badge>
                <Badge variant="outline" className="flex gap-2 items-center px-3 py-1">
                  <span className="h-2 w-2 rounded-full bg-sky-500"></span>
                  With dot
                </Badge>
                <Badge variant="outline" className="flex gap-2 items-center px-3 py-1">
                  With icon
                  <X className="h-3.5 w-3.5 text-muted-foreground cursor-pointer" />
                </Badge>
              </div>
            </div>
          
            <CodeBlock 
              code={`<Badge variant="outline" className="flex gap-2 items-center px-3 py-1">
  Basic chip
</Badge>

<Badge variant="outline" className="flex gap-2 items-center px-3 py-1">
  <span className="h-2 w-2 rounded-full bg-sky-500"></span>
  With dot
</Badge>

<Badge variant="outline" className="flex gap-2 items-center px-3 py-1">
  With icon
  <X className="h-3.5 w-3.5 text-muted-foreground cursor-pointer" />
</Badge>`}
              language="tsx"
              title="Implementação de Chips Básicos"
              showCode={false}
            />
          </div>
        </div>
        
        <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-medium mb-4">Chips coloridos</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex gap-2 flex-wrap">
                <Badge className="bg-primary-main text-white">Primary</Badge>
                <Badge className="bg-secondary-main text-white">Secondary</Badge>
                <Badge className="bg-success-main text-white">Success</Badge>
                <Badge className="bg-warning-main text-black">Warning</Badge>
                <Badge className="bg-error-main text-white">Error</Badge>
                <Badge className="bg-info-main text-white">Info</Badge>
              </div>
            </div>
          
            <CodeBlock 
              code={`<Badge className="bg-primary-main text-white">Primary</Badge>
<Badge className="bg-secondary-main text-white">Secondary</Badge>
<Badge className="bg-success-main text-white">Success</Badge>
<Badge className="bg-warning-main text-black">Warning</Badge>
<Badge className="bg-error-main text-white">Error</Badge>
<Badge className="bg-info-main text-white">Info</Badge>`}
              language="tsx"
              title="Implementação de Chips Coloridos"
              showCode={false}
            />
          </div>
        </div>
        
        <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-medium mb-4">Chips com ação de remoção</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex gap-2">
                <Badge variant="outline" className="flex gap-2 items-center px-3 py-1.5">
                  Frontend
                  <X className="h-3.5 w-3.5 text-muted-foreground cursor-pointer hover:text-foreground" />
                </Badge>
                <Badge variant="outline" className="flex gap-2 items-center px-3 py-1.5">
                  React
                  <X className="h-3.5 w-3.5 text-muted-foreground cursor-pointer hover:text-foreground" />
                </Badge>
                <Badge variant="outline" className="flex gap-2 items-center px-3 py-1.5">
                  TypeScript
                  <X className="h-3.5 w-3.5 text-muted-foreground cursor-pointer hover:text-foreground" />
                </Badge>
              </div>
            </div>
          
            <CodeBlock 
              code={`<Badge variant="outline" className="flex gap-2 items-center px-3 py-1.5">
  Frontend
  <X className="h-3.5 w-3.5 text-muted-foreground cursor-pointer hover:text-foreground" />
</Badge>

<Badge variant="outline" className="flex gap-2 items-center px-3 py-1.5">
  React
  <X className="h-3.5 w-3.5 text-muted-foreground cursor-pointer hover:text-foreground" />
</Badge>

<Badge variant="outline" className="flex gap-2 items-center px-3 py-1.5">
  TypeScript
  <X className="h-3.5 w-3.5 text-muted-foreground cursor-pointer hover:text-foreground" />
</Badge>`}
              language="tsx"
              title="Implementação de Chips com Ação de Remoção"
              showCode={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chips;
