
import React from 'react';
import { TailwindTabs } from '@/components/ui/tabs';
import Header from '@/components/library-components/Header';
import { RocketIcon, Code2Icon, ServerIcon, UsersIcon } from 'lucide-react';

const TechnicalGovernance = () => {
  const tabs = [
    { name: 'Visão Geral', value: 'overview' },
    { name: 'Projetos na Lovable', value: 'projects' },
    { name: 'Ambiente de Produção', value: 'production' },
    { name: 'Utilização', value: 'usage' }
  ];

  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Governança Técnica"
        description="Processos de contribuição, manutenção e evolução dos componentes"
        type="foundations"
      />
      
      <div className="mt-8">
        <TailwindTabs tabs={tabs} defaultValue="overview">
          
          {/* Visão Geral */}
          <div className="mt-6" id="overview">
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-primary-main text-white">
                  <RocketIcon size={20} />
                </div>
                <h2 className="text-2xl font-semibold">Filosofia de Inovação</h2>
              </div>
              <p className="mb-4 text-gray-700">
                Nossa abordagem de desenvolvimento é baseada em experimentação rápida e iteração contínua. 
                Acreditamos que as melhores ideias surgem da colaboração entre design, produto e engenharia.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="p-4 border border-gray-200 rounded-lg bg-white">
                  <h3 className="text-lg font-medium mb-2">Processo Colaborativo</h3>
                  <p className="text-gray-600">
                    Incentivamos a participação de todas as áreas na concepção e evolução dos componentes para garantir que atendam às necessidades reais dos usuários e desenvolvedores.
                  </p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg bg-white">
                  <h3 className="text-lg font-medium mb-2">Iteração Contínua</h3>
                  <p className="text-gray-600">
                    Os componentes do Design System evoluem constantemente baseados no feedback dos usuários e nas necessidades do negócio. Nada é considerado "finalizado" permanentemente.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Projetos na Lovable */}
          <div className="mt-6" id="projects">
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-gray-700 text-white">
                  <Code2Icon size={20} />
                </div>
                <h2 className="text-2xl font-semibold">Projetos na Lovable</h2>
              </div>
              
              <p className="mb-4 text-gray-700">
                A criação de protótipos e experimentos na plataforma Lovable é uma parte essencial do nosso processo de inovação, permitindo testar ideias rapidamente antes da implementação em produção.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="p-4 border border-gray-200 rounded-lg bg-white">
                  <h3 className="text-lg font-medium mb-2">Repositório Oficial</h3>
                  <p className="text-gray-600">
                    Todos os projetos devem ser criados a partir do repositório oficial do Design System na Lovable, garantindo acesso a todos os componentes atualizados e padronizados.
                  </p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg bg-white">
                  <h3 className="text-lg font-medium mb-2">Experimentação</h3>
                  <p className="text-gray-600">
                    A plataforma Lovable é o ambiente ideal para experimentar novos padrões de interface, testar variações de componentes e validar ideias sem afetar o código de produção.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Ambiente de Produção */}
          <div className="mt-6" id="production">
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-gray-700 text-white">
                  <ServerIcon size={20} />
                </div>
                <h2 className="text-2xl font-semibold">Ambiente de Produção</h2>
              </div>
              
              <p className="mb-4 text-gray-700">
                O processo de transição de um protótipo Lovable para o ambiente de produção segue um fluxo estruturado para garantir qualidade e consistência.
              </p>
              
              <div className="p-4 border border-gray-200 rounded-lg bg-white">
                <h3 className="text-lg font-medium mb-2">Processo Upstream</h3>
                <p className="text-gray-600">
                  Entregamos em upstream o que foi desenvolvido na Lovable para os times de desenvolvimento implementarem em produção. É responsabilidade deles analisar o código entregue e adaptá-lo para ser compatível com nossa plataforma de produção.
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-3">Processo de Revisão para Produção</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 border border-gray-200 rounded-lg bg-white">
                    <h4 className="font-medium mb-2">Revisão de UX</h4>
                    <p className="text-gray-600 text-sm">
                      Garantia de consistência na experiência do usuário e alinhamento com os princípios do Design System.
                    </p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg bg-white">
                    <h4 className="font-medium mb-2">Alinhamento com Produto</h4>
                    <p className="text-gray-600 text-sm">
                      Validação de prioridades e requisitos para garantir que a implementação atenda às necessidades do negócio.
                    </p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg bg-white">
                    <h4 className="font-medium mb-2">Revisão Técnica</h4>
                    <p className="text-gray-600 text-sm">
                      Análise pela Engenharia para garantir qualidade, performance e manutenibilidade do código.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Utilização */}
          <div className="mt-6" id="usage">
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-gray-700 text-white">
                  <UsersIcon size={20} />
                </div>
                <h2 className="text-2xl font-semibold">Utilização em Projetos Lovable</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="p-4 border border-gray-200 rounded-lg bg-white">
                  <h3 className="text-lg font-medium mb-2">Para designers</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Acesso à biblioteca Figma completa</li>
                    <li>Uso dos componentes padrão para prototipagem</li>
                    <li>Comunicação com os desenvolvedores via Lovable</li>
                    <li>Documentação de variações e casos de uso</li>
                  </ul>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg bg-white">
                  <h3 className="text-lg font-medium mb-2">Para desenvolvedores</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Implementação via biblioteca npm</li>
                    <li>Contribuição através de pull requests</li>
                    <li>Testes unitários para novos componentes</li>
                    <li>Documentação técnica e exemplos de uso</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
        </TailwindTabs>
      </div>
    </div>
  );
};

export default TechnicalGovernance;
