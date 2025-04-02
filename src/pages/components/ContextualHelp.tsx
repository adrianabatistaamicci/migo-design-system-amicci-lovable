
import React from 'react';
import Header from '@/components/library-components/Header';
import { ContextualHelpAccordion } from '@/components/ui/contextual-help-accordion';
import ComponentCard from '@/components/ComponentCard';
import CodeBlock from '@/components/CodeBlock';

const ContextualHelpComponent = () => {
  // Código do componente ContextualHelp
  const basicContextualHelpCode = `import { ContextualHelpAccordion } from "@/components/ui/contextual-help-accordion"

<ContextualHelpAccordion
  title="Como criar um novo projeto?"
  content="Para criar um novo projeto, vá ao Dashboard e clique no botão '+ Novo Projeto'. 
    Preencha as informações necessárias e clique em 'Criar'."
  actionLabel="Ver mais na FAQ"
  actionUrl="/faq"
/>`;

  const customContentCode = `import { ContextualHelpAccordion } from "@/components/ui/contextual-help-accordion"

<ContextualHelpAccordion
  title="Dicas para usar filtros avançados"
  content={
    <div className="space-y-2">
      <p>Você pode combinar múltiplos filtros para refinar sua busca:</p>
      <ul className="list-disc pl-5">
        <li>Use aspas para buscar frases exatas</li>
        <li>Combine filtros com operadores AND/OR</li>
        <li>Use intervalos de datas com o formato YYYY-MM-DD</li>
      </ul>
    </div>
  }
  actionLabel="Ver tutorial completo"
  actionUrl="/tutorials/advanced-filters"
/>`;

  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Contextual Help"
        description="Componentes de ajuda contextual fornecem informações auxiliares quando o usuário precisa."
        type="components"
      />
      
      <div className="max-w-[1280px] mx-auto space-y-8 mt-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Ajuda Contextual Básica</h2>
          <p className="text-gray-700 mb-6">
            O componente de ajuda contextual fornece informações adicionais para ajudar os usuários a entender como usar um recurso ou funcionalidade. 
            Geralmente, apresenta-se em um formato expansível que não interfere no fluxo principal da interface.
          </p>
          
          <ComponentCard 
            title="Ajuda Contextual Básica" 
            description="Um componente de ajuda contextual simples com título, conteúdo e link de ação"
            className="w-full mb-8"
            showCodeBlockInside={true}
            code={basicContextualHelpCode}
            codeBlockTitle="Implementação de Ajuda Contextual"
            codeBlockLanguage="tsx"
          >
            <div className="p-6">
              <ContextualHelpAccordion
                title="Como criar um novo projeto?"
                content="Para criar um novo projeto, vá ao Dashboard e clique no botão '+ Novo Projeto'. Preencha as informações necessárias e clique em 'Criar'."
                actionLabel="Ver mais na FAQ"
                actionUrl="/faq"
              />
            </div>
          </ComponentCard>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Ajuda Contextual com Conteúdo Rico</h2>
          <p className="text-gray-700 mb-6">
            O componente de ajuda contextual pode conter conteúdo rico, como listas, links ou outros elementos para fornecer informações mais detalhadas.
          </p>
          
          <ComponentCard 
            title="Ajuda Contextual com Conteúdo Rico" 
            description="Usando elementos HTML complexos dentro do conteúdo de ajuda"
            className="w-full mb-8"
            showCodeBlockInside={true}
            code={customContentCode}
            codeBlockTitle="Implementação com Conteúdo Rico"
            codeBlockLanguage="tsx"
          >
            <div className="p-6">
              <ContextualHelpAccordion
                title="Dicas para usar filtros avançados"
                content={
                  <div className="space-y-2">
                    <p>Você pode combinar múltiplos filtros para refinar sua busca:</p>
                    <ul className="list-disc pl-5">
                      <li>Use aspas para buscar frases exatas</li>
                      <li>Combine filtros com operadores AND/OR</li>
                      <li>Use intervalos de datas com o formato YYYY-MM-DD</li>
                    </ul>
                  </div>
                }
                actionLabel="Ver tutorial completo"
                actionUrl="/tutorials/advanced-filters"
              />
            </div>
          </ComponentCard>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Casos de Uso</h2>
          <div className="bg-white rounded-lg border p-6 mb-8">
            <h3 className="text-lg font-medium mb-4">Formulários Complexos</h3>
            <div className="space-y-4">
              <p className="text-gray-700">
                Ajuda contextual é particularmente útil em formulários complexos para explicar campos específicos ou requisitos.
              </p>
              <div className="border rounded-lg p-4 bg-gray-50">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">ID de Integração API</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500" placeholder="Insira seu ID de integração" />
                </div>
                
                <ContextualHelpAccordion
                  title="Onde encontrar meu ID de Integração?"
                  content="O ID de Integração API pode ser encontrado nas configurações da sua conta, na seção 'Integrações'. 
                    Se você ainda não tem um ID, será necessário criar uma nova integração primeiro."
                  actionLabel="Ver documentação da API"
                  actionUrl="/docs/api"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Melhores Práticas</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Use ajuda contextual para informações secundárias que alguns usuários podem precisar, mas que não são essenciais para todos.</li>
            <li>Mantenha o conteúdo conciso e direto ao ponto - evite explicações excessivamente detalhadas.</li>
            <li>Posicione a ajuda contextual próxima ao elemento ou área a que ela se refere.</li>
            <li>Use ícones reconhecíveis (como um ponto de interrogação) para indicar a disponibilidade de ajuda.</li>
            <li>Forneça links para documentação mais detalhada quando o espaço for limitado.</li>
            <li>Mantenha a consistência na aparência e comportamento dos elementos de ajuda em toda a aplicação.</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Acessibilidade</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Garanta que os acordeões de ajuda contextual sejam acessíveis por teclado.</li>
            <li>Use atributos <code>aria-expanded</code> e <code>aria-controls</code> apropriadamente para comunicar o estado do acordeão.</li>
            <li>Mantenha um contraste de cor adequado para garantir legibilidade para usuários com deficiência visual.</li>
            <li>Considere usuários que podem estar usando leitores de tela - certifique-se de que o conteúdo expandido seja anunciado corretamente.</li>
            <li>Forneça textos alternativos para ícones que comunicam significado.</li>
            <li>Teste a navegação por teclado para garantir que os usuários possam acessar e interagir com a ajuda contextual sem usar um mouse.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ContextualHelpComponent;
