
import React, { useState } from 'react';
import { TailwindTabs } from "@/components/ui/tabs";
import Header from '@/components/library-components/Header';

const TechnicalGovernance = () => {
  const [activeTab, setActiveTab] = useState('visao-geral');

  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Governança Lovable" 
        description="Processo de contribuição, manutenção e evolução dos componentes através da plataforma Lovable."
        type="foundations"
        hideChip={true}
      />

      <div className="mt-8">
        <div className="w-fit">
          <TailwindTabs 
            defaultValue="visao-geral" 
            tabs={[
              { name: 'Visão geral', value: 'visao-geral' },
              { name: 'Projetos Lovable', value: 'projetos' },
              { name: 'Ambiente de produção', value: 'ambiente-producao' }
            ]}
            onChange={value => setActiveTab(value)}
          />
        </div>
        
        <div className="mt-8">
          {activeTab === 'visao-geral' && (
            <div className="space-y-8">
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
            </div>
          )}
          
          {activeTab === 'projetos' && (
            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-semibold mb-6">Utilizando em Projetos Lovable</h2>
                <p className="mb-4">Siga estas etapas para integrar o Migo Design System em seus projetos Lovable:</p>
                
                <div className="space-y-8 mt-6">
                  <div className="bg-white p-5 rounded-md shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold mb-4">1. Componentes Protegidos</h3>
                    <p className="mb-4">Uma grande vantagem do Design System como pacote NPM é que os componentes importados <strong>não podem ser editados diretamente</strong> pelos usuários, o que garante:</p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li>Consistência visual e funcional em todos os projetos</li>
                      <li>Proteção contra modificações acidentais</li>
                      <li>Centralização de atualizações e correções</li>
                    </ul>
                    <div className="bg-gray-50 p-4 rounded border border-gray-200">
                      <p className="text-sm text-gray-700"><strong>Nota:</strong> Se precisar personalizar um componente, crie uma versão própria baseada no componente original. Não tente modificar os arquivos dentro do <code>node_modules</code>.</p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-5 rounded-md shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold mb-4">2. Instalar o pacote NPM</h3>
                    <p className="mb-4">Adicione o pacote ao seu projeto Lovable utilizando o comando:</p>
                    <div className="bg-gray-800 text-white p-4 rounded font-mono text-sm mb-2">
                      <pre>bash<br/>npm install @amicci/migo-design-system</pre>
                    </div>
                  </div>
                  
                  <div className="bg-white p-5 rounded-md shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold mb-4">3. Configurar o Tailwind CSS</h3>
                    <p className="mb-4">Atualize o arquivo <code>tailwind.config.js</code> para incluir os componentes do Design System:</p>
                    <div className="bg-gray-800 text-white p-4 rounded font-mono text-sm mb-2">
                      <pre>javascript<br/>// tailwind.config.js<br/>module.exports = {'{'}<br/>  content: [<br/>    // ... outros caminhos<br/>    "./node_modules/@amicci/migo-design-system/**/*.{'{'}'js,ts,jsx,tsx{'}'}"<br/>  ],<br/>  // ... resto da configuração<br/>{'}'}</pre>
                    </div>
                  </div>
                  
                  <div className="bg-white p-5 rounded-md shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold mb-4">4. Importar componentes</h3>
                    <p className="mb-4">Importe os componentes diretamente em seus arquivos React:</p>
                    <div className="bg-gray-800 text-white p-4 rounded font-mono text-sm mb-2">
                      <pre>tsx<br/>import {'{ Button, Card, TextField }'} from "@amicci/migo-design-system";<br/><br/>function MeuComponente() {'{'}<br/>  return (<br/>    {'<Card>'}<br/>      {'<TextField label="Nome" />'}<br/>      {'<Button variant="primary">Enviar</Button>'}<br/>    {'</Card>'}<br/>  );<br/>{'}'}</pre>
                    </div>
                  </div>
                  
                  <div className="bg-white p-5 rounded-md shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold mb-4">5. Remixar projeto modelo (opcional)</h3>
                    <p className="mb-4">Para iniciar rapidamente com um template pré-configurado:</p>
                    <ol className="list-decimal pl-6 space-y-2 mb-4">
                      <li>Abra o projeto na Lovable</li>
                      <li>Clique no nome do projeto no topo da interface</li>
                      <li>Selecione "Remix" para criar uma cópia do projeto</li>
                      <li>Personalize o projeto conforme necessário</li>
                    </ol>
                  </div>
                  
                  <div className="bg-white p-5 rounded-md shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold mb-4">6. Versão específica (recomendado)</h3>
                    <p className="mb-4">Para garantir consistência, instale uma versão específica:</p>
                    <div className="bg-gray-800 text-white p-4 rounded font-mono text-sm mb-2">
                      <pre>bash<br/>npm install @amicci/migo-design-system@1.2.3</pre>
                    </div>
                    <p className="mt-4 text-sm text-gray-700">Consulte a seção de versionamento para entender a política de compatibilidade.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-semibold mb-6">Atualização do Pacote</h2>
                <p className="mb-4">O pacote NPM <code>@amicci/migo-design-system</code> não é atualizado automaticamente quando os componentes são modificados no projeto principal.</p>
                
                <div className="bg-white p-5 rounded-md shadow-sm border border-gray-100 mt-4">
                  <h3 className="text-xl font-semibold mb-4">Processo de atualização:</h3>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Executar script <code>copy-components.js</code> para copiar as versões atualizadas</li>
                    <li>Atualizar a versão no <code>package.json</code> seguindo Semantic Versioning</li>
                    <li>Reconstruir o pacote com <code>npm run build</code></li>
                    <li>Publicar a nova versão no registro NPM interno</li>
                  </ol>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-semibold mb-6">Versionamento</h2>
                <p className="mb-4">O Migo Design System segue a política de Semantic Versioning (SemVer) para manter uma evolução previsível e compatível.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="bg-white p-5 rounded-md shadow-sm border border-gray-100">
                    <h3 className="font-medium text-lg mb-2">Major (x.0.0)</h3>
                    <p className="text-gray-600 mb-3">Mudanças incompatíveis com versões anteriores.</p>
                    <p className="text-gray-700 text-sm">Requer adaptações nos projetos que usam o design system.</p>
                  </div>
                  
                  <div className="bg-white p-5 rounded-md shadow-sm border border-gray-100">
                    <h3 className="font-medium text-lg mb-2">Minor (0.x.0)</h3>
                    <p className="text-gray-600 mb-3">Adição de funcionalidades mantendo compatibilidade.</p>
                    <p className="text-gray-700 text-sm">Seguro para atualizar.</p>
                  </div>
                  
                  <div className="bg-white p-5 rounded-md shadow-sm border border-gray-100">
                    <h3 className="font-medium text-lg mb-2">Patch (0.0.x)</h3>
                    <p className="text-gray-600 mb-3">Correções de bugs mantendo compatibilidade.</p>
                    <p className="text-gray-700 text-sm">Atualizações recomendadas e seguras.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-semibold mb-6">Padrões de Desenvolvimento</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-5 rounded-md shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold mb-4">Requisitos Técnicos</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Componentes devem ser desenvolvidos em TypeScript</li>
                      <li>Props devem ser documentadas com JSDoc</li>
                      <li>Testes unitários são obrigatórios</li>
                      <li>Componentes devem seguir padrões de acessibilidade (WCAG 2.1 AA)</li>
                      <li>Todos os componentes devem ser totalmente responsivos</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-5 rounded-md shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold mb-4">Convenções de Código</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Seguir padrões de nomenclatura estabelecidos</li>
                      <li>Utilizar arquitetura de componentes definida</li>
                      <li>Favorecer composição sobre herança</li>
                      <li>Evitar dependências externas desnecessárias</li>
                      <li>Manter tamanho dos arquivos gerenciável (até 250 linhas)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'ambiente-producao' && (
            <div className="space-y-8">
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
                
                <div className="bg-primary-light p-5 rounded-md border border-primary-main mb-4">
                  <h3 className="font-medium text-lg mb-2 text-primary-main">Revisão de UX</h3>
                  <p className="text-primary-main">
                    O time de UX avalia a implementação para garantir que a experiência do usuário seja consistente, acessível e alinhada com as diretrizes de design da empresa.
                  </p>
                </div>
                
                <div className="bg-primary-light p-5 rounded-md border border-primary-main mb-4">
                  <h3 className="font-medium text-lg mb-2 text-primary-main">Alinhamento com Produto</h3>
                  <p className="text-primary-main">
                    O time de Produto verifica se a implementação atende aos requisitos de negócio, prioridades estratégicas e expectativas dos usuários.
                  </p>
                </div>
                
                <div className="bg-primary-light p-5 rounded-md border border-primary-main">
                  <h3 className="font-medium text-lg mb-2 text-primary-main">Revisão Técnica</h3>
                  <p className="text-primary-main">
                    O time de Engenharia realiza uma análise técnica rigorosa para garantir qualidade, segurança, performance e manutenibilidade do código.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TechnicalGovernance;
