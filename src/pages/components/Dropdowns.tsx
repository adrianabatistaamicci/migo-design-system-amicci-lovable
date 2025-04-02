
import React, { useState } from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import Header from '@/components/library-components/Header';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import ComponentCard from '@/components/ComponentCard';
import CodeBlock from '@/components/CodeBlock';

const SimpleDropdownExample = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          Opções
          <ChevronDown size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white">
        <DropdownMenuLabel>Meu menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Perfil</DropdownMenuItem>
        <DropdownMenuItem>Faturamento</DropdownMenuItem>
        <DropdownMenuItem>Configurações</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-500">Sair</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const simpleDropdownCode = `import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const SimpleDropdownExample = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          Opções
          <ChevronDown size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white">
        <DropdownMenuLabel>Meu menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Perfil</DropdownMenuItem>
        <DropdownMenuItem>Faturamento</DropdownMenuItem>
        <DropdownMenuItem>Configurações</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-500">Sair</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};`;

const Dropdowns = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Dropdowns"
        description="Menus suspensos para exibir opções adicionais e ações relacionadas."
        type="components"
      />
      
      <div className="max-w-[1280px] mx-auto space-y-8 mt-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Dropdown básico</h2>
          <p className="text-gray-700 mb-6">
            Dropdowns são componentes interativos que revelam conteúdo adicional quando acionados. 
            Eles são úteis para agrupar ações relacionadas ou para exibir opções em um espaço compacto.
          </p>
          
          <ComponentCard 
            title="Dropdown simples" 
            description="Um dropdown básico com rótulo, separadores e itens de menu"
            className="w-full mb-8"
            showCodeBlockInside={true}
            code={simpleDropdownCode}
            codeBlockTitle="Implementação do Dropdown"
            codeBlockLanguage="tsx"
          >
            <div className="flex justify-center p-10">
              <SimpleDropdownExample />
            </div>
          </ComponentCard>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Melhores Práticas</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Mantenha os menus dropdown concisos, com opções claras e diretas.</li>
            <li>Use separadores para agrupar itens relacionados dentro do menu.</li>
            <li>Forneça feedback visual ao usuário sobre qual item está sendo focado ou selecionado.</li>
            <li>Certifique-se de que o botão de acionamento comunica claramente sua função (ícones como setas são úteis).</li>
            <li>Posicione o dropdown de forma que não obscureça conteúdo importante da interface.</li>
            <li>Em dispositivos móveis, considere aumentar o tamanho dos itens para facilitar o toque.</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Acessibilidade</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Garanta que os dropdowns sejam navegáveis por teclado (Tab, Enter, Espaço, teclas de seta).</li>
            <li>Use atributos ARIA apropriados, como <code>aria-haspopup</code> e <code>aria-expanded</code>.</li>
            <li>Assegure contraste suficiente entre o texto e o fundo para melhorar a legibilidade.</li>
            <li>Implemente suporte para leitores de tela, garantindo que todos os elementos são anunciados corretamente.</li>
            <li>Feche os dropdowns ao pressionar a tecla Escape ou ao clicar fora da área do menu.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Dropdowns;
