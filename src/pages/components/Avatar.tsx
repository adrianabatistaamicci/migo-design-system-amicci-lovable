
import React from 'react';
import Header from '@/components/library-components/Header';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import ComponentCard from '@/components/ComponentCard';
import CodeBlock from '@/components/CodeBlock';

const AvatarComponent = () => {
  // Código do componente Avatar
  const basicAvatarCode = `import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

// Avatar com imagem
<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

// Avatar com fallback (quando a imagem não carrega)
<Avatar>
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`;

  const sizeVariantsCode = `import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

// Extra Small (xs)
<Avatar size="xs">
  <AvatarFallback>XS</AvatarFallback>
</Avatar>

// Small (sm)
<Avatar size="sm">
  <AvatarFallback>SM</AvatarFallback>
</Avatar>

// Medium (md) - padrão
<Avatar size="md">
  <AvatarFallback>MD</AvatarFallback>
</Avatar>

// Large (lg)
<Avatar size="lg">
  <AvatarFallback>LG</AvatarFallback>
</Avatar>

// Extra Large (xl)
<Avatar size="xl">
  <AvatarFallback>XL</AvatarFallback>
</Avatar>`;

  const shapeVariantsCode = `import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

// Circular (padrão)
<Avatar variant="circular">
  <AvatarFallback>C</AvatarFallback>
</Avatar>

// Rounded
<Avatar variant="rounded">
  <AvatarFallback>R</AvatarFallback>
</Avatar>

// Square
<Avatar variant="square">
  <AvatarFallback>S</AvatarFallback>
</Avatar>`;

  const colorVariantsCode = `import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

// Default
<Avatar color="default">
  <AvatarFallback>DE</AvatarFallback>
</Avatar>

// Primary
<Avatar color="primary">
  <AvatarFallback>PR</AvatarFallback>
</Avatar>

// Secondary
<Avatar color="secondary">
  <AvatarFallback>SE</AvatarFallback>
</Avatar>

// Success
<Avatar color="success">
  <AvatarFallback>SU</AvatarFallback>
</Avatar>

// Error
<Avatar color="error">
  <AvatarFallback>ER</AvatarFallback>
</Avatar>

// Warning
<Avatar color="warning">
  <AvatarFallback>WA</AvatarFallback>
</Avatar>

// Info
<Avatar color="info">
  <AvatarFallback>IN</AvatarFallback>
</Avatar>`;

  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Avatars"
        description="Avatares são representações visuais de usuários ou entidades."
        type="components"
      />
      
      <div className="max-w-[1280px] mx-auto space-y-8 mt-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Avatar Básico</h2>
          <p className="text-gray-700 mb-6">
            Avatares podem exibir uma imagem do usuário ou iniciais como fallback quando nenhuma imagem está disponível.
          </p>
          
          <ComponentCard 
            title="Avatar com Imagem e Fallback" 
            description="O componente Avatar com suporte para imagens e conteúdo de fallback"
            className="w-full mb-8"
            showCodeBlockInside={true}
            code={basicAvatarCode}
            codeBlockTitle="Implementação do Avatar"
            codeBlockLanguage="tsx"
          >
            <div className="flex justify-center items-center gap-8 p-10">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              
              <Avatar>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </ComponentCard>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Variações de Tamanho</h2>
          <p className="text-gray-700 mb-6">
            Avatares estão disponíveis em diferentes tamanhos para atender a diversos contextos de UI.
          </p>
          
          <ComponentCard 
            title="Tamanhos de Avatar" 
            description="Variantes de tamanho do componente Avatar"
            className="w-full mb-8"
            showCodeBlockInside={true}
            code={sizeVariantsCode}
            codeBlockTitle="Implementação de Tamanhos"
            codeBlockLanguage="tsx"
          >
            <div className="flex justify-center items-end gap-4 p-10">
              <Avatar size="xs">
                <AvatarFallback>XS</AvatarFallback>
              </Avatar>
              
              <Avatar size="sm">
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              
              <Avatar size="md">
                <AvatarFallback>MD</AvatarFallback>
              </Avatar>
              
              <Avatar size="lg">
                <AvatarFallback>LG</AvatarFallback>
              </Avatar>
              
              <Avatar size="xl">
                <AvatarFallback>XL</AvatarFallback>
              </Avatar>
            </div>
          </ComponentCard>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Variações de Forma</h2>
          <p className="text-gray-700 mb-6">
            Avatares podem ter diferentes formas para se adequar ao estilo da sua interface.
          </p>
          
          <ComponentCard 
            title="Formas de Avatar" 
            description="Variantes de forma do componente Avatar"
            className="w-full mb-8"
            showCodeBlockInside={true}
            code={shapeVariantsCode}
            codeBlockTitle="Implementação de Formas"
            codeBlockLanguage="tsx"
          >
            <div className="flex justify-center items-center gap-8 p-10">
              <Avatar variant="circular">
                <AvatarFallback>C</AvatarFallback>
              </Avatar>
              
              <Avatar variant="rounded">
                <AvatarFallback>R</AvatarFallback>
              </Avatar>
              
              <Avatar variant="square">
                <AvatarFallback>S</AvatarFallback>
              </Avatar>
            </div>
          </ComponentCard>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Variações de Cor</h2>
          <p className="text-gray-700 mb-6">
            Avatares podem usar diferentes cores de fundo para representar estados ou categorias.
          </p>
          
          <ComponentCard 
            title="Cores de Avatar" 
            description="Variantes de cor do componente Avatar"
            className="w-full mb-8"
            showCodeBlockInside={true}
            code={colorVariantsCode}
            codeBlockTitle="Implementação de Cores"
            codeBlockLanguage="tsx"
          >
            <div className="flex justify-center items-center flex-wrap gap-4 p-10">
              <Avatar color="default">
                <AvatarFallback>DE</AvatarFallback>
              </Avatar>
              
              <Avatar color="primary">
                <AvatarFallback>PR</AvatarFallback>
              </Avatar>
              
              <Avatar color="secondary">
                <AvatarFallback>SE</AvatarFallback>
              </Avatar>
              
              <Avatar color="success">
                <AvatarFallback>SU</AvatarFallback>
              </Avatar>
              
              <Avatar color="error">
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
              
              <Avatar color="warning">
                <AvatarFallback>WA</AvatarFallback>
              </Avatar>
              
              <Avatar color="info">
                <AvatarFallback>IN</AvatarFallback>
              </Avatar>
            </div>
          </ComponentCard>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Melhores Práticas</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Use avatares de tamanho apropriado para o contexto - maiores para perfis detalhados, menores para listas ou comentários.</li>
            <li>Sempre forneça um fallback significativo (como iniciais) quando a imagem do avatar não puder ser carregada.</li>
            <li>Mantenha a consistência no uso de formas de avatar em toda a aplicação.</li>
            <li>Considere o contraste ao usar avatares coloridos para garantir legibilidade.</li>
            <li>Use avatares com cores diferentes apenas quando houver um significado semântico associado às cores.</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Acessibilidade</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Sempre inclua um atributo <code>alt</code> descritivo nas imagens do avatar.</li>
            <li>Garanta contraste suficiente entre o texto fallback e o fundo do avatar.</li>
            <li>Considere a implementação de <code>aria-label</code> quando o avatar representa um usuário ou entidade.</li>
            <li>Mantenha tamanhos de fonte adequados nas iniciais fallback para garantir a legibilidade.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AvatarComponent;
