
import React, { useState } from 'react';
import Header from '@/components/library-components/Header';
import { TailwindTabs } from '@/components/ui/tabs';

const TechnicalGovernance = () => {
  const [activeTab, setActiveTab] = useState('definitions');
  
  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };
  
  const tabs = [
    { name: 'Definições', value: 'definitions' },
    { name: 'Processos', value: 'processes' },
    { name: 'Versionamento', value: 'versioning' },
    { name: 'Guias de Estilo', value: 'style-guides' }
  ];

  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Governança Técnica"
        description="Princípios e processos para manter a qualidade e consistência do código."
        type="guidelines"
      />
      
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <TailwindTabs 
          tabs={tabs} 
          defaultValue="definitions" 
          variant="pillsGray" 
          onChange={handleTabChange}
          className="mb-6 w-auto inline-flex" 
        />
        
        <div className="mt-6">
          {activeTab === 'definitions' && (
            <div>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Definições e Princípios</h2>
              <p className="text-gray-700 mb-4">
                A governança técnica refere-se ao conjunto de práticas, processos e políticas estabelecidos para garantir que o desenvolvimento, manutenção e evolução dos sistemas de software sejam realizados de forma consistente, eficiente e alinhada com os objetivos estratégicos da organização.
              </p>
              
              <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">Princípios Fundamentais</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Qualidade:</strong> Manter altos padrões de qualidade em todo o código.</li>
                <li><strong>Consistência:</strong> Garantir que padrões e convenções sejam seguidos de forma consistente.</li>
                <li><strong>Colaboração:</strong> Facilitar a colaboração eficiente entre equipes e desenvolvedores.</li>
                <li><strong>Evolução Contínua:</strong> Permitir que o sistema evolua de forma controlada ao longo do tempo.</li>
                <li><strong>Transparência:</strong> Garantir que decisões técnicas sejam claras e rastreáveis.</li>
              </ul>
            </div>
          )}
          
          {activeTab === 'processes' && (
            <div>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Processos de Governança</h2>
              <p className="text-gray-700 mb-4">
                Processos bem definidos são essenciais para manter a integridade e qualidade do código ao longo do tempo. Eles fornecem estrutura e consistência ao desenvolvimento de software.
              </p>
              
              <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">Processos Chave</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Code Reviews:</strong> Revisões de código obrigatórias antes da integração.</li>
                <li><strong>Testes Automatizados:</strong> Manutenção de suítes de testes abrangentes.</li>
                <li><strong>Integração Contínua:</strong> Verificação automática de qualidade de código.</li>
                <li><strong>Deployment Contínuo:</strong> Processos automatizados para entrega de software.</li>
                <li><strong>Gerenciamento de Dependências:</strong> Controle rigoroso de bibliotecas e frameworks.</li>
              </ul>
            </div>
          )}
          
          {activeTab === 'versioning' && (
            <div>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Estratégia de Versionamento</h2>
              <p className="text-gray-700 mb-4">
                O controle de versão é fundamental para gerenciar as mudanças no código-fonte ao longo do tempo. Usamos o Versionamento Semântico (SemVer) para tornar claro o impacto das mudanças.
              </p>
              
              <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">Formato de Versão</h3>
              <p className="text-gray-700 mb-4">
                Seguimos o formato MAJOR.MINOR.PATCH:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>MAJOR:</strong> Mudanças incompatíveis com versões anteriores</li>
                <li><strong>MINOR:</strong> Adições de funcionalidades compatíveis com versões anteriores</li>
                <li><strong>PATCH:</strong> Correções de bugs compatíveis com versões anteriores</li>
              </ul>
              
              <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">Branches e Fluxo de Trabalho</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>main:</strong> Branch principal, sempre em estado deployable</li>
                <li><strong>develop:</strong> Branch de integração para novas funcionalidades</li>
                <li><strong>feature/*:</strong> Branches para desenvolvimento de novas funcionalidades</li>
                <li><strong>release/*:</strong> Branches para preparação de releases</li>
                <li><strong>hotfix/*:</strong> Branches para correções urgentes em produção</li>
              </ul>
            </div>
          )}
          
          {activeTab === 'style-guides' && (
            <div>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Guias de Estilo</h2>
              <p className="text-gray-700 mb-4">
                Guias de estilo garantem consistência visual e de código em todo o sistema, facilitando a manutenção e colaboração.
              </p>
              
              <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">Guias por Tecnologia</h3>
              
              <h4 className="text-lg font-medium text-gray-900 mt-4 mb-2">Typescript/JavaScript</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Usamos ESLint com a configuração AirBnB modificada</li>
                <li>Preferimos funções de seta (arrow functions) para componentes React</li>
                <li>Usamos tipos explícitos ao invés de "any"</li>
                <li>Preferimos interfaces sobre tipos, exceto para unions e intersections</li>
              </ul>
              
              <h4 className="text-lg font-medium text-gray-900 mt-4 mb-2">CSS/Tailwind</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Seguimos uma arquitetura baseada em componentes</li>
                <li>Usamos variáveis CSS para cores, espaçamentos e tipografia</li>
                <li>Preferimos classes de utilidade do Tailwind para estilização</li>
                <li>Evitamos estilos inline exceto quando necessário</li>
              </ul>
              
              <h4 className="text-lg font-medium text-gray-900 mt-4 mb-2">Nomenclatura</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>camelCase para variáveis, funções e métodos</li>
                <li>PascalCase para componentes React e classes</li>
                <li>UPPER_SNAKE_CASE para constantes</li>
                <li>kebab-case para IDs e classes em HTML</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TechnicalGovernance;
