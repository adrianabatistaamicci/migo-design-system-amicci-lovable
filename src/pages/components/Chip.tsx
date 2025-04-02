
import React from 'react';
import Header from '@/components/library-components/Header';
import { Chip } from '@/components/ui/chip';
import { X } from 'lucide-react';
import ComponentCard from '@/components/ComponentCard';
import CodeBlock from '@/components/CodeBlock';

const ChipComponent = () => {
  // Código do componente Chip
  const basicChipsCode = `import { Chip } from "@/components/ui/chip"

// Chip básico
<Chip>Default</Chip>

// Chip com variante de cor
<Chip color="primary">Primary</Chip>
<Chip color="secondary">Secondary</Chip>
<Chip color="success">Success</Chip>
<Chip color="error">Error</Chip>
<Chip color="warning">Warning</Chip>
<Chip color="info">Info</Chip>`;

  const chipVariantsCode = `import { Chip } from "@/components/ui/chip"

// Variante Filled (padrão)
<Chip variant="filled" color="primary">Filled</Chip>

// Variante Outlined
<Chip variant="outlined" color="primary">Outlined</Chip>

// Variante Light
<Chip variant="light" color="primary">Light</Chip>`;

  const chipSizesCode = `import { Chip } from "@/components/ui/chip"

// Tamanho pequeno (sm)
<Chip size="sm">Small</Chip>

// Tamanho médio (md) - padrão
<Chip size="md">Medium</Chip>

// Tamanho grande (lg)
<Chip size="lg">Large</Chip>`;

  const deletableChipsCode = `import { Chip } from "@/components/ui/chip"
import { X } from "lucide-react"

// Chip deletável
<Chip 
  onDelete={() => console.log('Chip deleted')}
  deleteIcon={<X size={14} />}
>
  Deletable
</Chip>

// Chip deletável com cor
<Chip 
  color="primary"
  onDelete={() => console.log('Primary chip deleted')}
  deleteIcon={<X size={14} />}
>
  Primary
</Chip>`;

  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Chips"
        description="Chips são elementos compactos que representam uma entrada, atributo ou ação."
        type="components"
      />
      
      <div className="max-w-[1280px] mx-auto space-y-8 mt-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Chips Básicos</h2>
          <p className="text-gray-700 mb-6">
            Chips permitem que os usuários façam seleções, filtrem conteúdo ou acionem ações. Eles podem ser usados para exibir tags, contatos, ou opções de filtro em um formulário.
          </p>
          
          <ComponentCard 
            title="Chips com Diferentes Cores" 
            description="Variantes de cor do componente Chip"
            className="w-full mb-8"
            showCodeBlockInside={true}
            code={basicChipsCode}
            codeBlockTitle="Implementação de Chips Básicos"
            codeBlockLanguage="tsx"
          >
            <div className="flex flex-wrap justify-center items-center gap-3 p-10">
              <Chip>Default</Chip>
              <Chip color="primary">Primary</Chip>
              <Chip color="secondary">Secondary</Chip>
              <Chip color="success">Success</Chip>
              <Chip color="error">Error</Chip>
              <Chip color="warning">Warning</Chip>
              <Chip color="info">Info</Chip>
            </div>
          </ComponentCard>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Variantes de Chip</h2>
          <p className="text-gray-700 mb-6">
            Chips estão disponíveis em diferentes variantes para atender a diversos estilos de UI.
          </p>
          
          <ComponentCard 
            title="Variantes de Chip" 
            description="Diferentes estilos de apresentação para o componente Chip"
            className="w-full mb-8"
            showCodeBlockInside={true}
            code={chipVariantsCode}
            codeBlockTitle="Implementação de Variantes"
            codeBlockLanguage="tsx"
          >
            <div className="flex flex-wrap justify-center items-center gap-3 p-10">
              <Chip variant="filled" color="primary">Filled</Chip>
              <Chip variant="outlined" color="primary">Outlined</Chip>
              <Chip variant="light" color="primary">Light</Chip>
            </div>
          </ComponentCard>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Tamanhos de Chip</h2>
          <p className="text-gray-700 mb-6">
            Chips estão disponíveis em diferentes tamanhos para adequar-se a diversos contextos de UI.
          </p>
          
          <ComponentCard 
            title="Tamanhos de Chip" 
            description="Variações de tamanho para o componente Chip"
            className="w-full mb-8"
            showCodeBlockInside={true}
            code={chipSizesCode}
            codeBlockTitle="Implementação de Tamanhos"
            codeBlockLanguage="tsx"
          >
            <div className="flex flex-wrap justify-center items-center gap-3 p-10">
              <Chip size="sm">Small</Chip>
              <Chip size="md">Medium</Chip>
              <Chip size="lg">Large</Chip>
            </div>
          </ComponentCard>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Chips Deletáveis</h2>
          <p className="text-gray-700 mb-6">
            Chips podem incluir um ícone de exclusão para permitir que o usuário os remova.
          </p>
          
          <ComponentCard 
            title="Chips Deletáveis" 
            description="Chips com funcionalidade de exclusão"
            className="w-full mb-8"
            showCodeBlockInside={true}
            code={deletableChipsCode}
            codeBlockTitle="Implementação de Chips Deletáveis"
            codeBlockLanguage="tsx"
          >
            <div className="flex flex-wrap justify-center items-center gap-3 p-10">
              <Chip 
                onDelete={() => console.log('Chip deleted')}
                deleteIcon={<X size={14} />}
              >
                Deletable
              </Chip>
              <Chip 
                color="primary"
                onDelete={() => console.log('Primary chip deleted')}
                deleteIcon={<X size={14} />}
              >
                Primary
              </Chip>
              <Chip 
                color="secondary"
                onDelete={() => console.log('Secondary chip deleted')}
                deleteIcon={<X size={14} />}
              >
                Secondary
              </Chip>
              <Chip 
                color="error"
                onDelete={() => console.log('Error chip deleted')}
                deleteIcon={<X size={14} />}
              >
                Error
              </Chip>
            </div>
          </ComponentCard>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Melhores Práticas</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Use chips para exibir informações compactas e/ou interativas.</li>
            <li>Mantenha o texto dentro dos chips conciso e claro.</li>
            <li>Use cores de chips de forma consistente para representar categorias ou estados semelhantes.</li>
            <li>Inclua a funcionalidade de exclusão apenas quando o usuário puder remover o item.</li>
            <li>Considere o uso da variante 'outlined' para chips menos importantes visualmente.</li>
            <li>Alinhe chips horizontalmente em grupos quando relacionados a uma mesma categoria.</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Acessibilidade</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Certifique-se de que chips interativos têm estados de foco visíveis para navegação por teclado.</li>
            <li>Forneça textos alternativos adequados para ícones usados dentro dos chips.</li>
            <li>Garanta contraste suficiente entre o texto e o fundo do chip.</li>
            <li>Para chips deletáveis, adicione texto descritivo para leitores de tela (como aria-label="Remover [item]").</li>
            <li>Considere o uso do atributo <code>role</code> apropriado para chips interativos (geralmente "button").</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ChipComponent;
