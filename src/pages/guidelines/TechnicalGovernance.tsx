
/**
 * @protected
 * ATENÇÃO: Este arquivo contém conteúdo finalizado e aprovado.
 * Não deve ser alterado diretamente pelo assistente AI.
 * Apenas atualizações de componentes devem ser refletidas.
 */

import React, { useState } from 'react';
import { TailwindTabs } from "@/components/ui/tabs";
import Header from '@/components/library-components/Header';

const TechnicalGovernance = () => {
  const [activeTab, setActiveTab] = useState('visao-geral');
  
  return <div className="w-full animate-fade-in">
      <Header title="Governança Lovable" description="Processo de contribuição, manutenção e evolução dos componentes através da plataforma Lovable." type="foundations" hideChip={true} />

      <div className="">
        <div className="w-fit">
          <TailwindTabs defaultValue="visao-geral" tabs={[{
          name: 'Visão geral',
          value: 'visao-geral'
        }, {
          name: 'Projetos Lovable',
          value: 'projetos'
        }, {
          name: 'Ambiente de produção',
          value: 'ambiente-producao'
        }]} onChange={value => setActiveTab(value)} />
        </div>
        
        <div className="mt-8">
          {activeTab === 'visao-geral' && <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-semibold mb-6">Design System Core Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-5 rounded-md shadow-sm border border-gray-100">
                    <h3 className="font-medium text-lg">Adriana Batista</h3>
                    <p className="text-gray-600">Head UX</p>
                    <a href="mailto:adriana.batista@amicci.com.br" className="text-primary-main hover:underline">adriana.batista@amicci.com.br</a>
                  </div>
                  
                  <div className="bg-white p-5 rounded-md shadow-sm border border-gray-100">
                    <h3 className="font-medium text-lg">Gabriel Vale</h3>
                    <p className="text-gray-600">Tech Lead</p>
                    <a href="mailto:gabriel.vale@amicci.com.br" className="text-primary-main hover:underline">gabriel.vale@amicci.com.br</a>
                  </div>
                  
                  <div className="bg-white p-5 rounded-md shadow-sm border border-gray-100">
                    <h3 className="font-medium text-lg">Pedro Lopes</h3>
                    <p className="text-gray-600">Tech Lead</p>
                    <a href="mailto:pedro.lopes@amicci.com.br" className="text-primary-main hover:underline">pedro.lopes@amicci.com.br</a>
                  </div>
                  
                  <div className="bg-white p-5 rounded-md shadow-sm border border-gray-100">
                    <h3 className="font-medium text-lg">Guilherme Gradaschi</h3>
                    <p className="text-gray-600">Tech Lead</p>
                    <a href="mailto:guilherme.gradaschi@amicci.com.br" className="text-primary-main hover:underline">guilherme.gradaschi@amicci.com.br</a>
                  </div>
                  
                  <div className="bg-white p-5 rounded-md shadow-sm border border-gray-100">
                    <h3 className="font-medium text-lg">Victor Azevedo</h3>
                    <p className="text-gray-600">Tech Lead</p>
                    <a href="mailto:victor.azevedo@amicci.com.br" className="text-primary-main hover:underline">victor.azevedo@amicci.com.br</a>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary-50 p-6 rounded-lg border border-primary-100">
                <h2 className="text-2xl font-semibold mb-4">Filosofia de Inovação</h2>
                <p className="mb-4">
                  Estamos em um momento de transformação no desenvolvimento de software, onde ferramentas de IA estão mudando a forma como criamos interfaces e experiências digitais.
                </p>
                
                <p className="mb-4">Nossa abordagem para este momento de evolução:</p>
                
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>
                    <strong>Encoraje a experimentação:</strong> Incentivamos todos os colaboradores a explorarem as possibilidades do Lovable e outras ferramentas de IA.
                  </li>
                  <li>
                    <strong>Aprenda através da prática:</strong> Este é um momento de aprendizado coletivo - alguns experimentos terão sucesso, outros não, mas todos trazem valor.
                  </li>
                  <li>
                    <strong>Orientação em vez de restrição:</strong> A equipe de UX e o time de Design System atuam como facilitadores e orientadores, não como barreiras à inovação.
                  </li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-4">Diretrizes para Desenvolvimento</h3>
                
                <div className="bg-white p-5 rounded-md shadow-sm border border-gray-100 mb-4">
                  <h4 className="font-medium text-lg mb-2">Para experimentos e projetos de aprendizado:</h4>
                  <p>Sinta-se à vontade para explorar, experimentar e testar novas abordagens. Não se preocupe em seguir rigorosamente os padrões do Design System nesta fase.</p>
                </div>
                
                <div className="bg-amicci-50 p-5 rounded-md shadow-sm border border-amicci-300">
                  <h4 className="font-medium text-lg mb-2 text-primary-700">Para jornadas e produtos oficiais:</h4>
                  <p className="mb-3 text-primary-800">Qualquer pessoa pode contribuir com ideias, protótipos e experimentos, mas o código que vai para produção deve passar por um processo de revisão que inclui:</p>
                  <ul className="list-disc pl-6 space-y-2 text-primary-800">
                    <li>Revisão de UX para garantir consistência na experiência</li>
                    <li>Alinhamento com Produto para validar prioridades e requisitos</li>
                    <li>Revisão técnica da Engenharia para garantir qualidade e manutenibilidade</li>
                  </ul>
                </div>
              </div>
            </div>}
          
          {activeTab === 'projetos' && <div className="space-y-8">
              <div className="bg-primary-50 p-6 rounded-lg border border-primary-100">
                <h2 className="text-2xl font-semibold mb-6">Remixar este projeto</h2>
                <p className="mb-4">A maneira mais rápida de começar é criar um remix deste projeto do Migo Design System:</p>
                <ol className="list-decimal pl-6 space-y-3 mb-4">
                  <li>
                    <strong>Acesse a interface do projeto:</strong> Navegue até a interface principal do projeto no Lovable.
                  </li>
                  <li>
                    <strong>Clique no nome do projeto:</strong> No canto superior esquerdo da interface, clique no nome atual do projeto.
                  </li>
                  <li>
                    <strong>Selecione "Remix":</strong> No menu suspenso, clique na opção "Remix" para criar sua própria cópia do projeto.
                  </li>
                  <li>
                    <strong>Personalize:</strong> Após criar o remix, você terá sua própria versão do Migo Design System que pode modificar conforme necessário.
                  </li>
                </ol>
                <div className="bg-white p-4 rounded border border-gray-200">
                  <p className="text-sm text-gray-700"><strong>Vantagem:</strong> Ao remixar este projeto, você já terá uma base completa do design system configurada e pronta para uso, economizando tempo de desenvolvimento.</p>
                </div>
              </div>
            </div>}
          
          {activeTab === 'ambiente-producao' && <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-semibold mb-6">Ambiente de Produção</h2>
                <p className="mb-6">
                  A transição de protótipos e experimentos criados na Lovable para o ambiente de produção segue um processo estruturado para garantir qualidade e consistência.
                </p>
                
                <div className="bg-white p-6 rounded-lg border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4">Fluxo de Upstream</h3>
                  <p className="mb-4">
                    Entregamos em upstream o que foi desenvolvido na Lovable para que os desenvolvedores possam implementar em produção, fazendo um match com nosso ambiente:
                  </p>
                  
                  <ol className="list-decimal pl-6 space-y-3 mb-4">
                    <li>
                      <strong>Extração do código:</strong> O código gerado na Lovable é extraído e disponibilizado em um repositório designado.
                    </li>
                    <li>
                      <strong>Documentação:</strong> É fornecida documentação detalhando os componentes, interações e comportamentos implementados.
                    </li>
                    <li>
                      <strong>Handoff para desenvolvimento:</strong> O time de desenvolvimento recebe acesso ao código e documentação para implementação.
                    </li>
                  </ol>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-semibold mb-6">Responsabilidades do Time de Desenvolvimento</h2>
                <p className="mb-4">É responsabilidade do time de desenvolvimento:</p>
                
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <strong>Analisar o código entregue:</strong> Revisar completamente o código gerado pela Lovable.
                  </li>
                  <li>
                    <strong>Adaptação:</strong> Adaptar o código para que seja totalmente compatível com nossa plataforma de produção.
                  </li>
                  <li>
                    <strong>Otimização:</strong> Otimizar o código para performance e escalabilidade.
                  </li>
                  <li>
                    <strong>Integração:</strong> Integrar com sistemas e serviços existentes.
                  </li>
                  <li>
                    <strong>Testes:</strong> Implementar testes adequados para garantir a qualidade e robustez.
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-semibold mb-6">Processo de Revisão para Produção</h2>
                <p className="mb-4">
                  Para jornadas e produtos oficiais, o código que vai para produção deve passar por um processo estruturado de revisão:
                </p>
                
                <div className="bg-amicci-50 p-5 rounded-md border border-amicci-300 mb-4">
                  <h3 className="font-medium text-lg mb-2 text-gray-900">Revisão de UX</h3>
                  <p className="text-gray-900">
                    O time de UX avalia a implementação para garantir que a experiência do usuário seja consistente, acessível e alinhada com as diretrizes de design da empresa.
                  </p>
                </div>
                
                <div className="bg-amicci-50 p-5 rounded-md border border-amicci-300 mb-4">
                  <h3 className="font-medium text-lg mb-2 text-gray-900">Alinhamento com Produto</h3>
                  <p className="text-gray-900">
                    O time de Produto verifica se a implementação atende aos requisitos de negócio, prioridades estratégicas e expectativas dos usuários.
                  </p>
                </div>
                
                <div className="bg-amicci-50 p-5 rounded-md border border-amicci-300">
                  <h3 className="font-medium text-lg mb-2 text-gray-900">Revisão Técnica</h3>
                  <p className="text-gray-900">
                    O time de Engenharia realiza uma análise técnica rigorosa para garantir qualidade, segurança, performance e manutenibilidade do código.
                  </p>
                </div>
              </div>
            </div>}
        </div>
      </div>
    </div>;
};

export default TechnicalGovernance;
