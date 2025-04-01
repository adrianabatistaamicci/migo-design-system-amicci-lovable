
import React, { useState } from 'react';
import { TailwindTabs } from "@/components/ui/tabs";
import Header from '@/components/library-components/Header';
import CodeBlock from '@/components/CodeBlock';
import ComponentCard from '@/components/ComponentCard';
import ContextualHelpAccordion from '@/components/ui/contextual-help-accordion';
import { Link } from '@/components/ui/link';

const ContextualHelp = () => {
  const [activeTab, setActiveTab] = useState('visaogeral');

  const basicExample = `import ContextualHelpAccordion from '@/components/ui/contextual-help-accordion';

export const Example = () => {
  return (
    <ContextualHelpAccordion 
      title="Como utilizar este componente?" 
      content={
        <p className="text-text-secondary mb-4">
          Este é um componente de ajuda contextual que pode ser usado em qualquer parte da aplicação 
          para fornecer informações adicionais e orientações para os usuários.
        </p>
      }
      actionLabel="Aprender mais sobre ajuda contextual"
      actionUrl="https://documentation.example.com/contextual-help"
    />
  );
}`;

  const customExample = `import ContextualHelpAccordion from '@/components/ui/contextual-help-accordion';

export const CustomExample = () => {
  return (
    <ContextualHelpAccordion 
      title="O que são tokens de design?" 
      content={
        <div className="space-y-2">
          <p className="text-text-secondary">
            Tokens de design são variáveis que armazenam valores de design e substituem valores estáticos 
            de estilo como cores, espaçamento, tipografia, etc.
          </p>
          <ul className="list-disc pl-5 text-text-secondary">
            <li>Permitem consistência em toda a interface</li>
            <li>Facilitam atualizações de design em escala</li>
            <li>Melhoram a comunicação entre design e desenvolvimento</li>
          </ul>
        </div>
      }
      actionLabel="Ver guia de tokens de design"
      actionUrl="/foundations/design-tokens"
    />
  );
}`;

  const stepsExample = `import React from 'react';
import { ContextualHelpAccordion } from '@/components/ui/contextual-help-accordion';

export const HelpAccordionExample = () => {
  const stepContent = (
    <>
      <div className="self-stretch inline-flex justify-start items-start gap-4 mt-3">
        <div className="p-1 bg-blue-100 rounded-[100px] flex justify-start items-center gap-2.5">
          <div className="p-[3px] bg-info-main rounded-[100px] inline-flex flex-col justify-center items-center gap-2.5">
            <div className="w-4 h-4 flex items-center justify-center text-common-white-main text-base font-medium font-['Roboto'] leading-none">1</div>
          </div>
        </div>
        <div className="flex-1 inline-flex flex-col justify-start items-start">
          <div className="self-stretch justify-start text-text-primary text-base font-medium font-['Roboto'] leading-7 tracking-tight">Explore oportunidades disponíveis</div>
          <div className="self-stretch justify-start text-text-primary text-base font-normal font-['Roboto'] leading-normal tracking-tight">
            Navegue pelas concorrências em negociação ou descubra novas oportunidades na seção "Outras oportunidades disponíveis".
          </div>
        </div>
      </div>
      
      <div className="self-stretch inline-flex justify-start items-start gap-4 mt-6">
        <div className="p-1 bg-blue-100 rounded-[100px] flex justify-start items-center gap-2.5">
          <div className="p-[3px] bg-info-main rounded-[100px] inline-flex flex-col justify-center items-center gap-2.5">
            <div className="w-4 h-4 flex items-center justify-center text-common-white-main text-base font-medium font-['Roboto'] leading-none">2</div>
          </div>
        </div>
        <div className="flex-1 inline-flex flex-col justify-start items-start">
          <div className="self-stretch justify-start text-text-primary text-base font-medium font-['Roboto'] leading-7 tracking-tight">Analise os requisitos do projeto</div>
          <div className="self-stretch justify-start text-text-primary text-base font-normal font-['Roboto'] leading-normal tracking-tight">
            Verifique cuidadosamente todos os SKUs, quantidades e especificações técnicas antes de participar.
          </div>
        </div>
      </div>
      
      <div className="self-stretch inline-flex justify-start items-start gap-4 mt-6">
        <div className="p-1 bg-blue-100 rounded-[100px] flex justify-start items-center gap-2.5">
          <div className="p-[3px] bg-info-main rounded-[100px] inline-flex flex-col justify-center items-center gap-2.5">
            <div className="w-4 h-4 flex items-center justify-center text-common-white-main text-base font-medium font-['Roboto'] leading-none">3</div>
          </div>
        </div>
        <div className="flex-1 inline-flex flex-col justify-start items-start">
          <div className="self-stretch justify-start text-text-primary text-base font-medium font-['Roboto'] leading-7 tracking-tight">Envie sua proposta</div>
          <div className="self-stretch justify-start text-text-primary text-base font-normal font-['Roboto'] leading-normal tracking-tight">
            Clique em "Responder concorrência" para submeter sua cotação com preços, prazos e condições comerciais.
          </div>
        </div>
      </div>
      
      <div className="self-stretch inline-flex justify-start items-start gap-4 mt-6">
        <div className="p-1 bg-blue-100 rounded-[100px] flex justify-start items-center gap-2.5">
          <div className="p-[3px] bg-info-main rounded-[100px] inline-flex flex-col justify-center items-center gap-2.5">
            <div className="w-4 h-4 flex items-center justify-center text-common-white-main text-base font-medium font-['Roboto'] leading-none">4</div>
          </div>
        </div>
        <div className="flex-1 inline-flex flex-col justify-start items-start">
          <div className="self-stretch justify-start text-text-primary text-base font-medium font-['Roboto'] leading-7 tracking-tight">Acompanhe o status</div>
          <div className="self-stretch justify-start text-text-primary text-base font-normal font-['Roboto'] leading-normal tracking-tight">
            Monitore o andamento da negociação através do status da concorrência e as notificações recebidas.
          </div>
        </div>
      </div>
      
      <div className="self-stretch inline-flex justify-start items-start gap-4 mt-6 mb-3">
        <div className="p-1 bg-blue-100 rounded-[100px] flex justify-start items-center gap-2.5">
          <div className="p-[3px] bg-info-main rounded-[100px] inline-flex flex-col justify-center items-center gap-2.5">
            <div className="w-4 h-4 flex items-center justify-center text-common-white-main text-base font-medium font-['Roboto'] leading-none">5</div>
          </div>
        </div>
        <div className="flex-1 inline-flex flex-col justify-start items-start">
          <div className="self-stretch justify-start text-text-primary text-base font-medium font-['Roboto'] leading-7 tracking-tight">Projeto em andamento</div>
          <div className="self-stretch justify-start text-text-primary text-base font-normal font-['Roboto'] leading-normal tracking-tight">
            Se selecionado, a concorrência se tornará um projeto que poderá ser gerenciado através da seção "Meus projetos".
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <ContextualHelpAccordion
        title="Como participar de concorrências?"
        content={stepContent}
        actionLabel="Ver mais na FAQ"
        actionUrl="https://docs.example.com/concorrencias"
      />
    </div>
  );
}`;

  const apiReference = `interface ContextualHelpAccordionProps {
  title: string;         // O título do componente de ajuda
  content: React.ReactNode;  // O conteúdo da ajuda (pode ser texto ou JSX)
  actionLabel?: string;  // O texto do link de ação (opcional)
  actionUrl?: string;    // A URL do link de ação (opcional)
}`;

  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Contextual Help" 
        description="Componente de ajuda contextual para fornecer informações e orientações aos usuários"
        type="components"
      />

      <div className="mt-8">
        <TailwindTabs 
          tabs={[
            { name: 'Visão Geral', value: 'visaogeral' },
            { name: 'API', value: 'api' }
          ]}
          variant="pillsGray"
          onChange={value => setActiveTab(value)}
        />
        
        <div className="mt-6">
          {activeTab === 'visaogeral' && (
            <div className="space-y-6">
              <ComponentCard 
                title="Visão Geral"
                description="O componente ContextualHelpAccordion permite fornecer ajuda contextual em qualquer parte da aplicação."
              >
                <div className="space-y-6">
                  <p className="text-gray-700">
                    Ajuda contextual é uma forma eficiente de fornecer informações aos usuários diretamente no contexto 
                    em que eles estão, sem a necessidade de sair da página atual ou interromper seu fluxo de trabalho.
                  </p>

                  <p className="text-gray-700">
                    O ContextualHelpAccordion encapsula essas melhores práticas em um componente fácil de usar, com visual 
                    destacado e facilmente reconhecível através de bordas coloridas e ícone de ajuda.
                  </p>
                </div>
              </ComponentCard>

              <ComponentCard 
                title="Exemplo Básico"
                description="Implementação básica do componente ContextualHelpAccordion."
                code={basicExample}
                showCodeBlockInside={true}
                codeBlockTitle="Exemplo Básico"
                codeBlockLanguage="tsx"
              >
                <div className="space-y-6">
                  <ContextualHelpAccordion 
                    title="Como utilizar este componente?" 
                    content={
                      <p className="text-text-secondary mb-4">
                        Este é um componente de ajuda contextual que pode ser usado em qualquer parte da aplicação 
                        para fornecer informações adicionais e orientações para os usuários.
                      </p>
                    }
                    actionLabel="Aprender mais sobre ajuda contextual"
                    actionUrl="https://documentation.example.com/contextual-help"
                  />
                </div>
              </ComponentCard>

              <ComponentCard 
                title="Exemplo com Conteúdo Personalizado"
                description="O componente permite utilizar diferentes formatos de conteúdo."
                code={customExample}
                showCodeBlockInside={true}
                codeBlockTitle="Exemplo com Conteúdo Rico"
                codeBlockLanguage="tsx"
              >
                <div className="space-y-6">
                  <ContextualHelpAccordion 
                    title="O que são tokens de design?" 
                    content={
                      <div className="space-y-2">
                        <p className="text-text-secondary">
                          Tokens de design são variáveis que armazenam valores de design e substituem valores estáticos 
                          de estilo como cores, espaçamento, tipografia, etc.
                        </p>
                        <ul className="list-disc pl-5 text-text-secondary">
                          <li>Permitem consistência em toda a interface</li>
                          <li>Facilitam atualizações de design em escala</li>
                          <li>Melhoram a comunicação entre design e desenvolvimento</li>
                        </ul>
                      </div>
                    }
                    actionLabel="Ver guia de tokens de design"
                    actionUrl="/foundations/design-tokens"
                  />
                </div>
              </ComponentCard>

              <ComponentCard 
                title="Exemplo com Passos Numerados"
                description="Exemplo de ajuda contextual com passos numerados para guiar o usuário."
                showCodeBlockInside={true}
                code={stepsExample}
                codeBlockTitle="Exemplo com Passos Numerados"
                codeBlockLanguage="tsx"
              >
                <ContextualHelpAccordion
                  title="Como participar de concorrências?"
                  content={
                    <>
                      <div className="self-stretch inline-flex justify-start items-start gap-4 mt-3">
                        <div className="p-1 bg-blue-100 rounded-[100px] flex justify-start items-center gap-2.5">
                          <div className="p-[3px] bg-info-main rounded-[100px] inline-flex flex-col justify-center items-center gap-2.5">
                            <div className="w-4 h-4 flex items-center justify-center text-common-white-main text-base font-medium font-['Roboto'] leading-none">1</div>
                          </div>
                        </div>
                        <div className="flex-1 inline-flex flex-col justify-start items-start">
                          <div className="self-stretch justify-start text-text-primary text-base font-medium font-['Roboto'] leading-7 tracking-tight">Explore oportunidades disponíveis</div>
                          <div className="self-stretch justify-start text-text-primary text-base font-normal font-['Roboto'] leading-normal tracking-tight">
                            Navegue pelas concorrências em negociação ou descubra novas oportunidades na seção "Outras oportunidades disponíveis".
                          </div>
                        </div>
                      </div>
                      
                      <div className="self-stretch inline-flex justify-start items-start gap-4 mt-6">
                        <div className="p-1 bg-blue-100 rounded-[100px] flex justify-start items-center gap-2.5">
                          <div className="p-[3px] bg-info-main rounded-[100px] inline-flex flex-col justify-center items-center gap-2.5">
                            <div className="w-4 h-4 flex items-center justify-center text-common-white-main text-base font-medium font-['Roboto'] leading-none">2</div>
                          </div>
                        </div>
                        <div className="flex-1 inline-flex flex-col justify-start items-start">
                          <div className="self-stretch justify-start text-text-primary text-base font-medium font-['Roboto'] leading-7 tracking-tight">Analise os requisitos do projeto</div>
                          <div className="self-stretch justify-start text-text-primary text-base font-normal font-['Roboto'] leading-normal tracking-tight">
                            Verifique cuidadosamente todos os SKUs, quantidades e especificações técnicas antes de participar.
                          </div>
                        </div>
                      </div>
                      
                      <div className="self-stretch inline-flex justify-start items-start gap-4 mt-6">
                        <div className="p-1 bg-blue-100 rounded-[100px] flex justify-start items-center gap-2.5">
                          <div className="p-[3px] bg-info-main rounded-[100px] inline-flex flex-col justify-center items-center gap-2.5">
                            <div className="w-4 h-4 flex items-center justify-center text-common-white-main text-base font-medium font-['Roboto'] leading-none">3</div>
                          </div>
                        </div>
                        <div className="flex-1 inline-flex flex-col justify-start items-start">
                          <div className="self-stretch justify-start text-text-primary text-base font-medium font-['Roboto'] leading-7 tracking-tight">Envie sua proposta</div>
                          <div className="self-stretch justify-start text-text-primary text-base font-normal font-['Roboto'] leading-normal tracking-tight">
                            Clique em "Responder concorrência" para submeter sua cotação com preços, prazos e condições comerciais.
                          </div>
                        </div>
                      </div>
                      
                      <div className="self-stretch inline-flex justify-start items-start gap-4 mt-6">
                        <div className="p-1 bg-blue-100 rounded-[100px] flex justify-start items-center gap-2.5">
                          <div className="p-[3px] bg-info-main rounded-[100px] inline-flex flex-col justify-center items-center gap-2.5">
                            <div className="w-4 h-4 flex items-center justify-center text-common-white-main text-base font-medium font-['Roboto'] leading-none">4</div>
                          </div>
                        </div>
                        <div className="flex-1 inline-flex flex-col justify-start items-start">
                          <div className="self-stretch justify-start text-text-primary text-base font-medium font-['Roboto'] leading-7 tracking-tight">Acompanhe o status</div>
                          <div className="self-stretch justify-start text-text-primary text-base font-normal font-['Roboto'] leading-normal tracking-tight">
                            Monitore o andamento da negociação através do status da concorrência e as notificações recebidas.
                          </div>
                        </div>
                      </div>
                      
                      <div className="self-stretch inline-flex justify-start items-start gap-4 mt-6 mb-3">
                        <div className="p-1 bg-blue-100 rounded-[100px] flex justify-start items-center gap-2.5">
                          <div className="p-[3px] bg-info-main rounded-[100px] inline-flex flex-col justify-center items-center gap-2.5">
                            <div className="w-4 h-4 flex items-center justify-center text-common-white-main text-base font-medium font-['Roboto'] leading-none">5</div>
                          </div>
                        </div>
                        <div className="flex-1 inline-flex flex-col justify-start items-start">
                          <div className="self-stretch justify-start text-text-primary text-base font-medium font-['Roboto'] leading-7 tracking-tight">Projeto em andamento</div>
                          <div className="self-stretch justify-start text-text-primary text-base font-normal font-['Roboto'] leading-normal tracking-tight">
                            Se selecionado, a concorrência se tornará um projeto que poderá ser gerenciado através da seção "Meus projetos".
                          </div>
                        </div>
                      </div>
                    </>
                  }
                  actionLabel="Ver mais na FAQ"
                  actionUrl="https://docs.example.com/concorrencias"
                />
              </ComponentCard>
            </div>
          )}
          
          {activeTab === 'api' && (
            <div className="space-y-6">
              <ComponentCard 
                title="API Reference"
                description="Detalhes das propriedades do componente ContextualHelpAccordion."
                code={apiReference}
                showCodeBlockInside={true}
                codeBlockTitle="Interface TypeScript"
                codeBlockLanguage="typescript"
              >
                <div className="space-y-4">
                  <p className="text-gray-700">
                    O componente ContextualHelpAccordion aceita as seguintes propriedades:
                  </p>
                  
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 px-4">Propriedade</th>
                        <th className="text-left py-2 px-4">Tipo</th>
                        <th className="text-left py-2 px-4">Obrigatório</th>
                        <th className="text-left py-2 px-4">Descrição</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 px-4 font-medium">title</td>
                        <td className="py-2 px-4">string</td>
                        <td className="py-2 px-4">Sim</td>
                        <td className="py-2 px-4">O título da ajuda contextual</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-4 font-medium">content</td>
                        <td className="py-2 px-4">React.ReactNode</td>
                        <td className="py-2 px-4">Sim</td>
                        <td className="py-2 px-4">O conteúdo da ajuda, pode ser texto ou elementos JSX</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-4 font-medium">actionLabel</td>
                        <td className="py-2 px-4">string</td>
                        <td className="py-2 px-4">Não</td>
                        <td className="py-2 px-4">O texto do link de ação</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-4 font-medium">actionUrl</td>
                        <td className="py-2 px-4">string</td>
                        <td className="py-2 px-4">Não</td>
                        <td className="py-2 px-4">A URL do link de ação</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </ComponentCard>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContextualHelp;
