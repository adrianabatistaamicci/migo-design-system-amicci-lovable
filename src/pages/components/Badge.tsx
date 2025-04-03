
import React, { useState } from 'react';
import Header from '@/components/library-components/Header';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Bell, ShoppingCart, Mail, Calendar, User } from 'lucide-react';
import ComponentCard from '@/components/ComponentCard';
import CodeBlock from '@/components/CodeBlock';

const BadgeComponent = () => {
  // Código do componente Badge
  const importCode = `import { Badge } from "@/components/ui/badge"`;

  const basicBadgeCode = `import { Badge } from "@/components/ui/badge"

// Badge padrão
<Badge badgeContent={4}>
  <span className="w-8 h-8 bg-gray-200 rounded-md"></span>
</Badge>`;

  const badgeColorsCode = `import { Badge } from "@/components/ui/badge"

// Badge com cor primária (padrão)
<Badge badgeContent={4} color="primary">
  <span className="w-8 h-8 bg-gray-200 rounded-md"></span>
</Badge>

// Badge com cor secundária
<Badge badgeContent={4} color="secondary">
  <span className="w-8 h-8 bg-gray-200 rounded-md"></span>
</Badge>

// Badge com cor de erro
<Badge badgeContent={4} color="error">
  <span className="w-8 h-8 bg-gray-200 rounded-md"></span>
</Badge>

// Badge com cor de sucesso
<Badge badgeContent={4} color="success">
  <span className="w-8 h-8 bg-gray-200 rounded-md"></span>
</Badge>`;

  const dotBadgesCode = `import { Badge } from "@/components/ui/badge"
import { Mail } from "lucide-react"

// Badge de ponto
<Badge variant="dot" color="primary">
  <Mail size={24} />
</Badge>

// Badge de ponto com cor de erro
<Badge variant="dot" color="error">
  <Mail size={24} />
</Badge>

// Badge de ponto com cor de sucesso
<Badge variant="dot" color="success">
  <Mail size={24} />
</Badge>`;

  const badgeMaxValueCode = `import { Badge } from "@/components/ui/badge"
import { Mail } from "lucide-react"

// Badge com valor máximo (padrão é 99)
<Badge badgeContent={100} color="primary">
  <Mail size={24} />
</Badge>

// Badge com valor máximo personalizado (500)
<Badge badgeContent={1000} max={500} color="primary">
  <Mail size={24} />
</Badge>`;

  const badgeVisibilityCode = `import { Badge } from "@/components/ui/badge"
import { Mail } from "lucide-react"

// Badge visível
<Badge badgeContent={4} color="primary">
  <Mail size={24} />
</Badge>

// Badge invisível
<Badge badgeContent={4} color="primary" invisible={true}>
  <Mail size={24} />
</Badge>

// Badge com zero (invisível por padrão)
<Badge badgeContent={0} color="primary">
  <Mail size={24} />
</Badge>`;

  const badgePositioningCode = `import { Badge } from "@/components/ui/badge"
import { Mail } from "lucide-react"

// Posicionamento padrão (topo direito)
<Badge badgeContent={4} color="primary">
  <Mail size={24} />
</Badge>

// Posicionamento topo esquerdo
<Badge 
  badgeContent={4} 
  color="primary"
  anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
>
  <Mail size={24} />
</Badge>

// Posicionamento inferior direito
<Badge 
  badgeContent={4} 
  color="primary"
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
>
  <Mail size={24} />
</Badge>

// Posicionamento inferior esquerdo
<Badge 
  badgeContent={4} 
  color="primary"
  anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
>
  <Mail size={24} />
</Badge>`;

  const badgeSizesCode = `import { Badge } from "@/components/ui/badge"
import { Mail } from "lucide-react"

// Tamanho pequeno
<Badge badgeContent={4} color="primary" size="sm">
  <Mail size={24} />
</Badge>

// Tamanho padrão
<Badge badgeContent={4} color="primary">
  <Mail size={24} />
</Badge>

// Tamanho grande
<Badge badgeContent={4} color="primary" size="lg">
  <Mail size={24} />
</Badge>`;

  const standaloneBadgeCode = `import { Badge } from "@/components/ui/badge"

// Badge standalone padrão
<Badge badgeContent={4} />

// Badge standalone com texto
<Badge badgeContent="Novo" />

// Badge standalone com cor
<Badge badgeContent={4} color="success" />`;

  const apiReferenceItems = [
    { prop: 'badgeContent', type: 'React.ReactNode', default: 'undefined', description: 'O conteúdo do Badge (texto ou número)' },
    { prop: 'max', type: 'number', default: '99', description: 'Valor máximo a exibir' },
    { prop: 'showZero', type: 'boolean', default: 'false', description: 'Controla se exibe zero quando badgeContent é zero' },
    { prop: 'invisible', type: 'boolean', default: 'false', description: 'Controla se o Badge é visível' },
    { prop: 'variant', type: '"standard" | "dot" | "secondary" | "outline" | "destructive"', default: '"standard"', description: 'Estilo visual do Badge' },
    { prop: 'color', type: '"default" | "primary" | "secondary" | "error" | "info" | "success" | "warning"', default: '"primary"', description: 'Cor principal do Badge' },
    { prop: 'size', type: '"default" | "sm" | "lg"', default: '"default"', description: 'Tamanho do Badge' },
    { prop: 'anchorOrigin', type: '{ vertical: "top" | "bottom", horizontal: "left" | "right" }', default: '{ vertical: "top", horizontal: "right" }', description: 'Posição do Badge' },
    { prop: 'overlap', type: '"rectangular" | "circular"', default: '"rectangular"', description: 'Para sobreposição em avatares circulares vs. elementos retangulares' }
  ];

  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Badges"
        description="Badges exibem notificações numéricas ou status que precisam de destaque."
        type="components"
      />
      
      <div className="max-w-[1280px] mx-auto space-y-8 mt-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Import</h2>
          <CodeBlock 
            code={importCode}
            language="tsx"
            className="mb-8"
          />
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Basic Badge</h2>
          
          <ComponentCard 
            title="Basic Badge" 
            description="Badge padrão com conteúdo numérico"
            className="w-full mb-8"
            showCodeBlockInside={true}
            code={basicBadgeCode}
            codeBlockTitle="Implementação do Basic Badge"
            codeBlockLanguage="tsx"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 p-10">
              <Badge badgeContent={4}>
                <span className="w-8 h-8 bg-gray-200 rounded-md"></span>
              </Badge>
            </div>
          </ComponentCard>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Badge Colors</h2>
          
          <ComponentCard 
            title="Badge Colors" 
            description="Variantes de cor do componente Badge"
            className="w-full mb-8"
            showCodeBlockInside={true}
            code={badgeColorsCode}
            codeBlockTitle="Implementação de Badge Colors"
            codeBlockLanguage="tsx"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 p-10">
              <Badge badgeContent={4} color="primary">
                <span className="w-8 h-8 bg-gray-200 rounded-md"></span>
              </Badge>
              
              <Badge badgeContent={4} color="secondary">
                <span className="w-8 h-8 bg-gray-200 rounded-md"></span>
              </Badge>
              
              <Badge badgeContent={4} color="error">
                <span className="w-8 h-8 bg-gray-200 rounded-md"></span>
              </Badge>
              
              <Badge badgeContent={4} color="success">
                <span className="w-8 h-8 bg-gray-200 rounded-md"></span>
              </Badge>
            </div>
          </ComponentCard>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Dot Badges</h2>
          
          <ComponentCard 
            title="Dot Badges" 
            description="Badges em formato de ponto sem conteúdo"
            className="w-full mb-8"
            showCodeBlockInside={true}
            code={dotBadgesCode}
            codeBlockTitle="Implementação de Dot Badges"
            codeBlockLanguage="tsx"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 p-10">
              <Badge variant="dot" color="primary">
                <Mail size={24} />
              </Badge>
              
              <Badge variant="dot" color="error">
                <Mail size={24} />
              </Badge>
              
              <Badge variant="dot" color="success">
                <Mail size={24} />
              </Badge>
            </div>
          </ComponentCard>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Maximum Value</h2>
          
          <ComponentCard 
            title="Maximum Value" 
            description="Limitando valores numéricos exibidos no badge"
            className="w-full mb-8"
            showCodeBlockInside={true}
            code={badgeMaxValueCode}
            codeBlockTitle="Implementação de Maximum Value Badges"
            codeBlockLanguage="tsx"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 p-10">
              <Badge badgeContent={100} color="primary">
                <Mail size={24} />
              </Badge>
              
              <Badge badgeContent={1000} max={500} color="primary">
                <Mail size={24} />
              </Badge>
            </div>
          </ComponentCard>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Badge Visibility</h2>
          
          <ComponentCard 
            title="Badge Visibility" 
            description="Controlando a visibilidade do badge"
            className="w-full mb-8"
            showCodeBlockInside={true}
            code={badgeVisibilityCode}
            codeBlockTitle="Implementação de Badge Visibility"
            codeBlockLanguage="tsx"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 p-10">
              <Badge badgeContent={4} color="primary">
                <Mail size={24} />
              </Badge>
              
              <Badge badgeContent={4} color="primary" invisible={true}>
                <Mail size={24} />
              </Badge>
              
              <Badge badgeContent={0} color="primary">
                <Mail size={24} />
              </Badge>
            </div>
          </ComponentCard>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Badge Positioning</h2>
          
          <ComponentCard 
            title="Badge Positioning" 
            description="Controle da posição do badge em relação ao elemento pai"
            className="w-full mb-8"
            showCodeBlockInside={true}
            code={badgePositioningCode}
            codeBlockTitle="Implementação de Badge Positioning"
            codeBlockLanguage="tsx"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 p-10">
              <Badge badgeContent={4} color="primary">
                <Mail size={24} />
              </Badge>
              
              <Badge 
                badgeContent={4} 
                color="primary"
                anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
              >
                <Mail size={24} />
              </Badge>
              
              <Badge 
                badgeContent={4} 
                color="primary"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              >
                <Mail size={24} />
              </Badge>
              
              <Badge 
                badgeContent={4} 
                color="primary"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              >
                <Mail size={24} />
              </Badge>
            </div>
          </ComponentCard>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Badge Sizes</h2>
          
          <ComponentCard 
            title="Badge Sizes" 
            description="Diferentes tamanhos disponíveis para badges"
            className="w-full mb-8"
            showCodeBlockInside={true}
            code={badgeSizesCode}
            codeBlockTitle="Implementação de Badge Sizes"
            codeBlockLanguage="tsx"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 p-10">
              <Badge badgeContent={4} color="primary" size="sm">
                <Mail size={24} />
              </Badge>
              
              <Badge badgeContent={4} color="primary">
                <Mail size={24} />
              </Badge>
              
              <Badge badgeContent={4} color="primary" size="lg">
                <Mail size={24} />
              </Badge>
            </div>
          </ComponentCard>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Standalone Badge</h2>
          
          <ComponentCard 
            title="Standalone Badge" 
            description="Badges sem elemento pai"
            className="w-full mb-8"
            showCodeBlockInside={true}
            code={standaloneBadgeCode}
            codeBlockTitle="Implementação de Standalone Badge"
            codeBlockLanguage="tsx"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 p-10">
              <Badge badgeContent={4} />
              <Badge badgeContent="Novo" />
              <Badge badgeContent={4} color="success" />
            </div>
          </ComponentCard>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">API Reference</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-200">Prop</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-200">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-200">Default</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-200">Description</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {apiReferenceItems.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border border-gray-200">{item.prop}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-gray-200"><code>{item.type}</code></td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-gray-200"><code>{item.default}</code></td>
                    <td className="px-6 py-4 text-sm text-gray-500 border border-gray-200">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BadgeComponent;
