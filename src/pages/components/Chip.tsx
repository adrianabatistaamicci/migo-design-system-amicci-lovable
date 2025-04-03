
import React from 'react';
import Header from '@/components/library-components/Header';
import { Chip } from '@/components/ui/chip';
import { X, Check, Plus, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import ComponentCard from '@/components/ComponentCard';
import CodeBlock from '@/components/CodeBlock';

const ChipComponent = () => {
  // Código do componente Chip
  const importCode = `import { Chip } from "@/components/ui/chip"`;

  const basicChipsCode = `import { Chip } from "@/components/ui/chip"

// Chip básico
<Chip>Default</Chip>`;

  const chipSizesCode = `import { Chip } from "@/components/ui/chip"

// Tamanho pequeno (sm)
<Chip size="sm">Small</Chip>

// Tamanho médio (default) - padrão
<Chip>Medium/Default</Chip>

// Tamanho grande (lg)
<Chip size="lg">Large</Chip>`;

  const chipColorsCode = `import { Chip } from "@/components/ui/chip"

// Cores disponíveis
<Chip color="primary">Primary</Chip>
<Chip color="secondary">Secondary</Chip>
<Chip color="success">Success</Chip>
<Chip color="error">Error</Chip>
<Chip color="warning">Warning</Chip>
<Chip color="info">Info</Chip>

// Variantes com cores
<Chip variant="filled" color="primary">Primary</Chip>
<Chip variant="outlined" color="primary">Primary</Chip>
<Chip variant="filledlight" color="primary">Primary</Chip>

// Cor padrão com diferentes variantes
<Chip variant="filled">Default</Chip>
<Chip variant="outlined">Default</Chip>
<Chip variant="filledlight">Default</Chip>`;

  const deletableChipsCode = `import { Chip } from "@/components/ui/chip"

// Chip deletável
<Chip onDelete={() => console.log('Chip deleted')}>
  Deletable
</Chip>

// Chip deletável com cor primária
<Chip 
  color="primary"
  onDelete={() => console.log('Primary chip deleted')}
>
  Primary
</Chip>`;

  const disabledChipsCode = `import { Chip } from "@/components/ui/chip"

// Chip desabilitado
<Chip disabled>
  Disabled
</Chip>

// Chip desabilitado com variante outlined
<Chip disabled variant="outlined">
  Disabled
</Chip>

// Chip desabilitado com onDelete
<Chip 
  disabled
  onDelete={() => console.log('Will not be called')}
>
  Disabled
</Chip>`;

  const clickableChipsCode = `import { Chip } from "@/components/ui/chip"

// Chip clicável
<Chip 
  clickable
  onClick={() => console.log('Chip clicked')}
>
  Clickable
</Chip>

// Chip clicável com variante outlined
<Chip 
  variant="outlined" 
  clickable
  onClick={() => console.log('Outlined chip clicked')}
>
  Outlined
</Chip>`;

  const chipWithIconsCode = `import { Chip } from "@/components/ui/chip"
import { Check, Plus, User } from "lucide-react"

// Chip com ícone
<Chip 
  icon={<Check className="h-4 w-4" />}
>
  With Icon
</Chip>

// Chip com ícone e deletável
<Chip 
  icon={<Plus className="h-4 w-4" />}
  onDelete={() => console.log('Chip deleted')}
>
  With Icon
</Chip>

// Chip com ícone colorido
<Chip 
  color="primary"
  icon={<User className="h-4 w-4" />}
>
  With Icon
</Chip>`;

  const chipWithAvatarCode = `import { Chip } from "@/components/ui/chip"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Chip com avatar
<Chip 
  avatar={
    <Avatar className="h-6 w-6">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  }
>
  John Doe
</Chip>

// Chip com avatar e deletável
<Chip 
  avatar={
    <Avatar className="h-6 w-6">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  }
  onDelete={() => console.log('Chip deleted')}
>
  John Doe
</Chip>`;

  const apiReferenceItems = [
    { prop: 'children', type: 'React.ReactNode', default: 'undefined', description: 'O conteúdo do Chip' },
    { prop: 'color', type: '"default" | "primary" | "secondary" | "success" | "error" | "info" | "warning"', default: '"default"', description: 'A cor principal do Chip' },
    { prop: 'variant', type: '"default" | "filled" | "filledlight" | "outlined"', default: '"default"', description: 'A variante visual do Chip' },
    { prop: 'size', type: '"default" | "sm" | "lg"', default: '"default"', description: 'O tamanho do Chip' },
    { prop: 'icon', type: 'React.ReactNode', default: 'undefined', description: 'Um ícone para exibir no início do Chip' },
    { prop: 'avatar', type: 'React.ReactNode', default: 'undefined', description: 'Um avatar para exibir no início do Chip' },
    { prop: 'onDelete', type: '() => void', default: 'undefined', description: 'Callback chamado quando o botão de exclusão é clicado' },
    { prop: 'clickable', type: 'boolean', default: 'false', description: 'Se o Chip deve ter estilo e comportamento clicável' },
    { prop: 'disabled', type: 'boolean', default: 'false', description: 'Se o Chip está desabilitado' }
  ];

  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Chips"
        description="Chips são elementos compactos que representam uma entrada, atributo ou ação."
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
          <h2 className="text-2xl font-semibold mb-4">Basic Chips</h2>
          <p className="text-gray-700 mb-6">
            Chips permitem que os usuários façam seleções, filtrem conteúdo ou acionem ações. Eles podem ser usados para exibir tags, contatos, ou opções de filtro em um formulário.
          </p>
          
          <ComponentCard 
            title="Basic Chips" 
            description="Chip básico padrão"
            className="w-full mb-8"
            showCodeBlockInside={true}
            code={basicChipsCode}
            codeBlockTitle="Implementação de Basic Chips"
            codeBlockLanguage="tsx"
          >
            <div className="flex flex-wrap justify-center items-center gap-3 p-10">
              <Chip>Default</Chip>
            </div>
          </ComponentCard>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Chip Variants</h2>
          <p className="text-gray-700 mb-6">
            Chips estão disponíveis em diferentes variantes para atender a diversos estilos de UI.
          </p>
          
          <ComponentCard 
            title="Chip Variants" 
            description="Diferentes estilos de apresentação para o componente Chip"
            className="w-full mb-8"
            showCodeBlockInside={true}
            code={`import { Chip } from "@/components/ui/chip"

// Variante Filled (padrão)
<Chip variant="filled">Filled</Chip>

// Variante Outlined
<Chip variant="outlined">Outlined</Chip>

// Variante FilledLight
<Chip variant="filledlight">Filled Light</Chip>`}
            codeBlockTitle="Implementação de Chip Variants"
            codeBlockLanguage="tsx"
          >
            <div className="flex flex-wrap justify-center items-center gap-3 p-10">
              <Chip variant="filled">Filled</Chip>
              <Chip variant="outlined">Outlined</Chip>
              <Chip variant="filledlight">Filled Light</Chip>
            </div>
          </ComponentCard>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Chip Colors</h2>
          <p className="text-gray-700 mb-6">
            Chips estão disponíveis em diferentes cores para representar diferentes significados e contextos.
          </p>
          
          <ComponentCard 
            title="Chip Colors" 
            description="Diferentes cores disponíveis para chips"
            className="w-full mb-8"
            showCodeBlockInside={true}
            code={chipColorsCode}
            codeBlockTitle="Implementação de Chip Colors"
            codeBlockLanguage="tsx"
          >
            <div className="flex flex-wrap justify-center items-center gap-3 p-10">
              <div className="flex flex-wrap gap-2 mb-4 w-full justify-center">
                <Chip color="primary">Primary</Chip>
                <Chip color="secondary">Secondary</Chip>
                <Chip color="success">Success</Chip>
                <Chip color="error">Error</Chip>
                <Chip color="warning">Warning</Chip>
                <Chip color="info">Info</Chip>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4 w-full justify-center">
                <Chip variant="filled" color="primary">Primary</Chip>
                <Chip variant="outlined" color="primary">Primary</Chip>
                <Chip variant="filledlight" color="primary">Primary</Chip>
              </div>
              
              <div className="flex flex-wrap gap-2 w-full justify-center">
                <Chip variant="filled">Default</Chip>
                <Chip variant="outlined">Default</Chip>
                <Chip variant="filledlight">Default</Chip>
              </div>
            </div>
          </ComponentCard>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Deletable Chips</h2>
          <p className="text-gray-700 mb-6">
            Chips podem incluir um ícone de exclusão para permitir que o usuário os remova.
          </p>
          
          <ComponentCard 
            title="Deletable Chips" 
            description="Chips com funcionalidade de exclusão"
            className="w-full mb-8"
            showCodeBlockInside={true}
            code={deletableChipsCode}
            codeBlockTitle="Implementação de Deletable Chips"
            codeBlockLanguage="tsx"
          >
            <div className="flex flex-wrap justify-center items-center gap-3 p-10">
              <Chip 
                onDelete={() => console.log('Chip deleted')}
              >
                Deletable
              </Chip>
              <Chip 
                color="primary"
                onDelete={() => console.log('Primary chip deleted')}
              >
                Primary
              </Chip>
            </div>
          </ComponentCard>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Clickable Chips</h2>
          <p className="text-gray-700 mb-6">
            Chips podem ser clicáveis, servindo como botões ou seletores.
          </p>
          
          <ComponentCard 
            title="Clickable Chips" 
            description="Chips com comportamento clicável"
            className="w-full mb-8"
            showCodeBlockInside={true}
            code={clickableChipsCode}
            codeBlockTitle="Implementação de Clickable Chips"
            codeBlockLanguage="tsx"
          >
            <div className="flex flex-wrap justify-center items-center gap-3 p-10">
              <Chip 
                clickable
                onClick={() => console.log('Chip clicked')}
              >
                Clickable
              </Chip>
              <Chip 
                variant="outlined" 
                clickable
                onClick={() => console.log('Outlined chip clicked')}
              >
                Outlined
              </Chip>
            </div>
          </ComponentCard>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Chips with Icons</h2>
          <p className="text-gray-700 mb-6">
            Chips podem incluir ícones para comunicar significado adicional.
          </p>
          
          <ComponentCard 
            title="Chips with Icons" 
            description="Chips com ícones incorporados"
            className="w-full mb-8"
            showCodeBlockInside={true}
            code={chipWithIconsCode}
            codeBlockTitle="Implementação de Chips with Icons"
            codeBlockLanguage="tsx"
          >
            <div className="flex flex-wrap justify-center items-center gap-3 p-10">
              <Chip 
                icon={<Check className="h-4 w-4" />}
              >
                With Icon
              </Chip>
              <Chip 
                icon={<Plus className="h-4 w-4" />}
                onDelete={() => console.log('Chip deleted')}
              >
                With Icon
              </Chip>
              <Chip 
                color="primary"
                icon={<User className="h-4 w-4" />}
              >
                With Icon
              </Chip>
            </div>
          </ComponentCard>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Chips with Avatars</h2>
          <p className="text-gray-700 mb-6">
            Chips podem incluir avatares, úteis para representar usuários.
          </p>
          
          <ComponentCard 
            title="Chips with Avatars" 
            description="Chips com avatares incorporados"
            className="w-full mb-8"
            showCodeBlockInside={true}
            code={chipWithAvatarCode}
            codeBlockTitle="Implementação de Chips with Avatars"
            codeBlockLanguage="tsx"
          >
            <div className="flex flex-wrap justify-center items-center gap-3 p-10">
              <Chip 
                avatar={
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                }
              >
                John Doe
              </Chip>
              <Chip 
                avatar={
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                }
                onDelete={() => console.log('Chip deleted')}
              >
                John Doe
              </Chip>
            </div>
          </ComponentCard>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Chip Sizes</h2>
          <p className="text-gray-700 mb-6">
            Chips estão disponíveis em diferentes tamanhos para adequar-se a diversos contextos de UI.
          </p>
          
          <ComponentCard 
            title="Chip Sizes" 
            description="Variações de tamanho para o componente Chip"
            className="w-full mb-8"
            showCodeBlockInside={true}
            code={chipSizesCode}
            codeBlockTitle="Implementação de Chip Sizes"
            codeBlockLanguage="tsx"
          >
            <div className="flex flex-wrap justify-center items-center gap-3 p-10">
              <Chip size="sm">Small</Chip>
              <Chip>Medium/Default</Chip>
              <Chip size="lg">Large</Chip>
            </div>
          </ComponentCard>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Disabled Chips</h2>
          <p className="text-gray-700 mb-6">
            Chips podem ser desabilitados para indicar opções não disponíveis.
          </p>
          
          <ComponentCard 
            title="Disabled Chips" 
            description="Chips em estado desabilitado"
            className="w-full mb-8"
            showCodeBlockInside={true}
            code={disabledChipsCode}
            codeBlockTitle="Implementação de Disabled Chips"
            codeBlockLanguage="tsx"
          >
            <div className="flex flex-wrap justify-center items-center gap-3 p-10">
              <Chip disabled>
                Disabled
              </Chip>
              <Chip disabled variant="outlined">
                Disabled
              </Chip>
              <Chip 
                disabled
                onDelete={() => console.log('Will not be called')}
              >
                Disabled
              </Chip>
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

export default ChipComponent;
