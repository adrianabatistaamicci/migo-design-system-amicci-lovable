
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
    <ContextualHelpAccordion
      title="Como participar de concorrências?"
      content={stepContent}
      actionLabel="Ver mais na FAQ"
      actionUrl="https://docs.example.com/concorrencias"
    />
  );
};`;

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
          defaultValue="visaogeral"
          tabs={[
            { name: 'Visão Geral', value: 'visaogeral' },
            { name: 'Acessibilidade', value: 'acessibilidade' },
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

                  <CodeBlock code={basicExample} language="tsx" title="Exemplo Básico" />
                </div>
              </ComponentCard>

              <ComponentCard 
                title="Exemplo com Conteúdo Personalizado"
                description="O componente permite utilizar diferentes formatos de conteúdo."
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

                  <CodeBlock code={customExample} language="tsx" title="Exemplo com Conteúdo Rico" />
                </div>
              </ComponentCard>

              <ComponentCard 
                title="Exemplo com Passos Numerados"
                description="Usando o componente para exibir um processo passo a passo."
              >
                <div className="space-y-6">
                  {/* Rendering the Steps Example */}
                  <div className="p-6 max-w-4xl mx-auto">
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
                  </div>

                  <CodeBlock code={stepsExample} language="tsx" title="Exemplo com Passos Numerados" />
                </div>
              </ComponentCard>

              <ComponentCard 
                title="Guia de Uso"
                description="Melhores práticas para utilizar ajuda contextual eficientemente."
              >
                <div className="space-y-4">
                  <h3 className="text-lg font-medium mb-2">Quando Usar</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Para explicar conceitos complexos ou termos técnicos</li>
                    <li>Para fornecer instruções passo a passo sobre como completar uma tarefa</li>
                    <li>Para esclarecer requisitos ou limitações de um campo ou função</li>
                    <li>Em telas com muitos elementos que podem não ser intuitivos para todos os usuários</li>
                    <li>Para fornecer links para documentação ou recursos adicionais</li>
                  </ul>

                  <h3 className="text-lg font-medium mt-6 mb-2">Quando Não Usar</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Para informações críticas que todos os usuários precisam ver</li>
                    <li>Para mensagens de erro ou avisos (use componentes de alerta ou toast)</li>
                    <li>Quando a interface já é clara e não necessita de explicações adicionais</li>
                    <li>Em excesso em uma única página, o que pode sobrecarregar o usuário</li>
                  </ul>
                </div>
              </ComponentCard>
            </div>
          )}

          {activeTab === 'acessibilidade' && (
            <div className="space-y-6">
              <ComponentCard 
                title="Acessibilidade" 
                description="Práticas de acessibilidade para o componente ContextualHelpAccordion."
              >
                <div className="space-y-6">
                  <h3 className="text-lg font-medium mb-3">Navegação por Teclado</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><code>Tab</code>: Navega até o componente de ajuda</li>
                    <li><code>Enter</code> ou <code>Space</code>: Expande ou colapsa o conteúdo de ajuda</li>
                    <li><code>Tab</code> (quando expandido): Navega para o link de ação, se disponível</li>
                  </ul>

                  <h3 className="text-lg font-medium mt-6 mb-3">Leitores de Tela</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>O componente utiliza HTML semântico para garantir compatibilidade com leitores de tela</li>
                    <li>Os estados expandido/colapsado são anunciados apropriadamente</li>
                    <li>O ícone de ajuda é puramente decorativo e não é anunciado para leitores de tela</li>
                    <li>Links externos são marcados apropriadamente para informar que abrem em nova janela</li>
                  </ul>

                  <h3 className="text-lg font-medium mt-6 mb-3">Boas Práticas</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Mantenha o título claro e conciso para fácil compreensão</li>
                    <li>Use linguagem simples no conteúdo para garantir que seja compreensível para todos os usuários</li>
                    <li>Evite depender apenas de cores para transmitir informações importantes</li>
                    <li>Verifique se os textos têm contraste suficiente com o fundo</li>
                    <li>Teste com usuários que utilizam tecnologias assistivas para garantir uma boa experiência</li>
                  </ul>
                </div>
              </ComponentCard>
            </div>
          )}

          {activeTab === 'api' && (
            <div className="space-y-6">
              <ComponentCard 
                title="API Reference" 
                description="Documentação da API do componente ContextualHelpAccordion."
              >
                <div className="space-y-6">
                  <CodeBlock code={apiReference} language="typescript" title="ContextualHelpAccordionProps" />
                  
                  <div className="mt-6">
                    <h3 className="text-lg font-medium mb-4">Props</h3>
                    
                    <div className="overflow-x-auto">
                      <table className="min-w-full border-collapse">
                        <thead>
                          <tr className="border-b border-gray-200 bg-gray-50">
                            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Propriedade</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Padrão</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descrição</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr>
                            <td className="py-4 px-4 text-sm font-medium">title</td>
                            <td className="py-4 px-4 text-sm text-gray-600">string</td>
                            <td className="py-4 px-4 text-sm text-gray-600">-</td>
                            <td className="py-4 px-4 text-sm text-gray-600">Título do componente de ajuda contextual.</td>
                          </tr>
                          <tr>
                            <td className="py-4 px-4 text-sm font-medium">content</td>
                            <td className="py-4 px-4 text-sm text-gray-600">React.ReactNode</td>
                            <td className="py-4 px-4 text-sm text-gray-600">-</td>
                            <td className="py-4 px-4 text-sm text-gray-600">Conteúdo do componente. Pode ser texto ou elementos JSX.</td>
                          </tr>
                          <tr>
                            <td className="py-4 px-4 text-sm font-medium">actionLabel</td>
                            <td className="py-4 px-4 text-sm text-gray-600">string</td>
                            <td className="py-4 px-4 text-sm text-gray-600">"Ver mais na FAQ"</td>
                            <td className="py-4 px-4 text-sm text-gray-600">Texto do link de ação (opcional).</td>
                          </tr>
                          <tr>
                            <td className="py-4 px-4 text-sm font-medium">actionUrl</td>
                            <td className="py-4 px-4 text-sm text-gray-600">string</td>
                            <td className="py-4 px-4 text-sm text-gray-600">"#"</td>
                            <td className="py-4 px-4 text-sm text-gray-600">URL do link de ação (opcional).</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-lg font-medium mb-4">Customização</h3>
                    <p className="text-gray-700 mb-4">
                      O componente ContextualHelpAccordion pode ser customizado através de props e classes CSS. 
                      As cores seguem o tema do Design System Migo, mas podem ser substituídas conforme necessário.
                    </p>
                    
                    <p className="text-gray-700">
                      Para necessidades de customização avançada, você pode estender o componente ou criar uma 
                      variação personalizada.
                    </p>
                  </div>
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
