
import React, { useEffect } from 'react';
import Header from '@/components/library-components/Header';
import EmptyState from '@/components/library-components/EmptyState';
import { Separator } from '@/components/ui/separator';
import { TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Tabs } from '@/components/ui/tabs';
import CodeBlock from '@/components/CodeBlock';
import { usePageTitle } from '@/contexts/PageTitleContext';
import ComponentCard from '@/components/ComponentCard';

const TechnicalGovernance = () => {
  const { setPageTitle } = usePageTitle();
  
  // This component doesn't set its own title, it relies on the sidebar item title
  // which is set at the app level
  
  const coreTeam = [
    {
      name: 'Adriana Batista',
      role: 'Head UX',
      email: 'adriana.batista@amicci.com.br'
    },
    {
      name: 'Gabriel Vale',
      role: 'Tech Lead',
      email: 'gabriel.vale@amicci.com.br'
    },
    {
      name: 'Pedro Lopes',
      role: 'Tech Lead',
      email: 'pedro.lopes@amicci.com.br'
    },
    {
      name: 'Guilherme Gradaschi',
      role: 'Tech Lead',
      email: 'guilherme.gradaschi@amicci.com.br'
    }
  ];

  return (
    <div className="w-full animate-fade-in">
      <Header 
        description="Processo de contribuição, manutenção e evolução dos componentes"
        type="foundations"
        hideChip={true}
      />
      
      <Tabs defaultValue="overview" className="w-full">
        <div className="inline-block mb-6">
          <TabsList className="w-auto" variant="pillsGray">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="projects">Projetos na Lovable</TabsTrigger>
            <TabsTrigger value="production">Ambiente de Produção</TabsTrigger>
            <TabsTrigger value="usage">Utilização</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="overview" className="space-y-8">
          <ComponentCard 
            title="Design System Core Team" 
            className="mb-8"
          >
            <div className="grid md:grid-cols-2 gap-4">
              {coreTeam.map((member) => (
                <div key={member.name} className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-medium">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                  <p className="text-sm text-gray-500">
                    <a 
                      href={`mailto:${member.email}`} 
                      className="hover:underline text-blue-600"
                    >
                      {member.email}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Filosofia de Inovação" 
            className="mb-8"
          >
            <div className="prose prose-blue max-w-none">
              <p className="text-gray-800 mb-3">
                Estamos em um momento de transformação no desenvolvimento de software, onde ferramentas de IA estão mudando a forma como criamos interfaces e experiências digitais.
              </p>
              <p className="text-gray-800 mb-3">
                Nossa abordagem para este momento de evolução:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li className="text-gray-800">
                  <strong>Encoraje a experimentação:</strong> Incentivamos todos os colaboradores a explorarem as possibilidades do Lovable e outras ferramentas de IA.
                </li>
                <li className="text-gray-800">
                  <strong>Aprenda através da prática:</strong> Este é um momento de aprendizado coletivo - alguns experimentos terão sucesso, outros não, mas todos trazem valor.
                </li>
                <li className="text-gray-800">
                  <strong>Orientação em vez de restrição:</strong> A equipe de UX e o time de Design System atuam como facilitadores e orientadores, não como barreiras à inovação.
                </li>
              </ul>
              
              <h3 className="text-xl font-medium mb-3">Diretrizes para Desenvolvimento</h3>
              <div className="bg-white p-4 rounded-lg border border-gray-200 mb-4">
                <h4 className="font-medium mb-2">Para experimentos e projetos de aprendizado:</h4>
                <p className="text-gray-700 mb-2">
                  Sinta-se à vontade para explorar, experimentar e testar novas abordagens. Não se preocupe em seguir rigorosamente os padrões do Design System nesta fase.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-medium mb-2">Para jornadas e produtos oficiais:</h4>
                <p className="text-gray-700 mb-2">
                  Qualquer pessoa pode contribuir com ideias, protótipos e experimentos, mas o código que vai para produção deve passar por um processo de revisão que inclui:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li className="text-gray-700">Revisão de UX para garantir consistência na experiência</li>
                  <li className="text-gray-700">Alinhamento com Produto para validar prioridades e requisitos</li>
                  <li className="text-gray-700">Revisão técnica da Engenharia para garantir qualidade e manutenibilidade</li>
                </ul>
              </div>
            </div>
          </ComponentCard>
        </TabsContent>
        
        <TabsContent value="projects" className="space-y-8">
          <ComponentCard 
            title="Projetos na Lovable" 
            className="mb-8"
          >
            <div className="prose prose-green max-w-none">
              <p className="text-gray-800 mb-4">
                A Lovable é nossa plataforma oficial para prototipagem, experimentação e criação de interfaces usando AI. 
                Seguindo algumas práticas simples, podemos garantir um processo eficiente e eficaz.
              </p>
              
              <div className="bg-white rounded-lg p-5 border border-gray-200 mb-6">
                <h3 className="text-xl font-medium mb-3">Criando um Novo Projeto</h3>
                <ol className="list-decimal pl-6 space-y-3">
                  <li className="text-gray-800">
                    <strong>Acesse o repositório oficial:</strong> Comece visitando nosso repositório oficial do Design System no GitHub.
                  </li>
                  <li className="text-gray-800">
                    <strong>Selecione "Use this template":</strong> No repositório, clique no botão "Use this template" para criar um novo projeto baseado no nosso template.
                  </li>
                  <li className="text-gray-800">
                    <strong>Conecte com a Lovable:</strong> Na plataforma Lovable, selecione a opção "Import from GitHub" e conecte ao repositório recém-criado.
                  </li>
                  <li className="text-gray-800">
                    <strong>Configure o ambiente:</strong> A Lovable detectará automaticamente nosso setup, mas verifique se as configurações de Tailwind e componentes estão corretas.
                  </li>
                </ol>
              </div>
              
              <div className="bg-white rounded-lg p-5 border border-gray-200 mb-6">
                <h3 className="text-xl font-medium mb-3">Boas Práticas na Lovable</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li className="text-gray-800">
                    <strong>Use componentes existentes:</strong> Aproveite ao máximo os componentes pré-configurados do Design System para manter consistência.
                  </li>
                  <li className="text-gray-800">
                    <strong>Seja específico nas solicitações:</strong> Ao interagir com a AI, forneça detalhes claros sobre o comportamento, estilo e alinhamento com nossas diretrizes.
                  </li>
                  <li className="text-gray-800">
                    <strong>Revise regularmente:</strong> Periodicamente revise o código gerado para garantir que ele siga nossas convenções e padrões de qualidade.
                  </li>
                  <li className="text-gray-800">
                    <strong>Documente decisões:</strong> Mantenha anotações sobre decisões importantes de design e implementação para referência futura.
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-5 border border-gray-200">
                <h3 className="text-xl font-medium mb-3">Compartilhando e Iterando</h3>
                <p className="text-gray-800 mb-3">
                  A Lovable facilita o compartilhamento e iteração dos seus protótipos:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li className="text-gray-800">
                    <strong>Compartilhamento direto:</strong> Use o botão "Share" para gerar um link que pode ser enviado para stakeholders.
                  </li>
                  <li className="text-gray-800">
                    <strong>Feedback em tempo real:</strong> Colete feedback diretamente através de comentários na plataforma.
                  </li>
                  <li className="text-gray-800">
                    <strong>Versões e histórico:</strong> Use o sistema de versões para manter um histórico de alterações e poder retornar a versões anteriores.
                  </li>
                  <li className="text-gray-800">
                    <strong>Deployment:</strong> Use o recurso de deploy para criar rapidamente ambientes de homologação para validação.
                  </li>
                </ul>
              </div>
            </div>
          </ComponentCard>
        </TabsContent>
        
        <TabsContent value="production" className="space-y-8">
          <ComponentCard 
            title="Ambiente de Produção" 
            className="mb-8"
          >
            <div className="prose prose-indigo max-w-none">
              <p className="text-gray-800 mb-4">
                A transição de protótipos e experimentos criados na Lovable para o ambiente de produção 
                segue um processo estruturado para garantir qualidade e consistência.
              </p>
              
              <div className="bg-white rounded-lg p-5 border border-gray-200 mb-6">
                <h3 className="text-xl font-medium mb-3">Fluxo de Upstream</h3>
                <p className="text-gray-800 mb-3">
                  Entregamos em upstream o que foi desenvolvido na Lovable para que os desenvolvedores 
                  possam implementar em produção, fazendo um match com nosso ambiente:
                </p>
                <ol className="list-decimal pl-6 space-y-3">
                  <li className="text-gray-800">
                    <strong>Extração do código:</strong> O código gerado na Lovable é extraído e disponibilizado em um repositório designado.
                  </li>
                  <li className="text-gray-800">
                    <strong>Documentação:</strong> É fornecida documentação detalhando os componentes, interações e comportamentos implementados.
                  </li>
                  <li className="text-gray-800">
                    <strong>Handoff para desenvolvimento:</strong> O time de desenvolvimento recebe acesso ao código e documentação para implementação.
                  </li>
                </ol>
              </div>
              
              <div className="bg-white rounded-lg p-5 border border-gray-200 mb-6">
                <h3 className="text-xl font-medium mb-3">Responsabilidades do Time de Desenvolvimento</h3>
                <p className="text-gray-800 mb-3">
                  É responsabilidade do time de desenvolvimento:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li className="text-gray-800">
                    <strong>Analisar o código entregue:</strong> Revisar completamente o código gerado pela Lovable.
                  </li>
                  <li className="text-gray-800">
                    <strong>Adaptação:</strong> Adaptar o código para que seja totalmente compatível com nossa plataforma de produção.
                  </li>
                  <li className="text-gray-800">
                    <strong>Otimização:</strong> Otimizar o código para performance e escalabilidade.
                  </li>
                  <li className="text-gray-800">
                    <strong>Integração:</strong> Integrar com sistemas e serviços existentes.
                  </li>
                  <li className="text-gray-800">
                    <strong>Testes:</strong> Implementar testes adequados para garantir a qualidade e robustez.
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-5 border border-gray-200">
                <h3 className="text-xl font-medium mb-3">Processo de Revisão para Produção</h3>
                <p className="text-gray-800 mb-3">
                  Para jornadas e produtos oficiais, o código que vai para produção deve passar por um processo estruturado de revisão:
                </p>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-medium mb-2 text-green-800">Revisão de UX</h4>
                    <p className="text-gray-700">
                      O time de UX avalia a implementação para garantir que a experiência do usuário seja consistente, 
                      acessível e alinhada com as diretrizes de design da empresa.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-medium mb-2 text-blue-800">Alinhamento com Produto</h4>
                    <p className="text-gray-700">
                      O time de Produto verifica se a implementação atende aos requisitos de negócio, 
                      prioridades estratégicas e expectativas dos usuários.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <h4 className="font-medium mb-2 text-purple-800">Revisão Técnica</h4>
                    <p className="text-gray-700">
                      O time de Engenharia realiza uma análise técnica rigorosa para garantir qualidade, 
                      segurança, performance e manutenibilidade do código.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ComponentCard>
        </TabsContent>
        
        <TabsContent value="usage" className="space-y-8">
          <ComponentCard 
            title="Utilizando em Projetos Lovable" 
            className="mb-8"
          >
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-3">
                Siga estas etapas para integrar o Migo Design System em seus projetos Lovable:
              </p>
              
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm divide-y">
                <div className="p-4 bg-green-50">
                  <h4 className="font-medium text-lg mb-3">1. Componentes Protegidos</h4>
                  <p className="text-gray-700 mb-2">
                    Uma grande vantagem do Design System como pacote NPM é que os componentes importados <strong>não podem ser editados diretamente</strong> pelos usuários, o que garante:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-1">
                    <li className="text-gray-700">Consistência visual e funcional em todos os projetos</li>
                    <li className="text-gray-700">Proteção contra modificações acidentais</li>
                    <li className="text-gray-700">Centralização de atualizações e correções</li>
                  </ul>
                  <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                    <p className="text-sm text-gray-700">
                      <strong>Nota:</strong> Se precisar personalizar um componente, crie uma versão própria baseada no componente original. 
                      Não tente modificar os arquivos dentro de <code className="bg-gray-100 px-1.5 py-0.5 rounded font-mono text-sm">node_modules</code>.
                    </p>
                  </div>
                </div>
                
                <div className="p-4">
                  <h4 className="font-medium text-lg mb-3">2. Instalar o pacote NPM</h4>
                  <p className="text-gray-700 mb-2">
                    Adicione o pacote ao seu projeto Lovable utilizando o comando:
                  </p>
                  <CodeBlock 
                    code="npm install @amicci/migo-design-system" 
                    language="bash"
                    title="Terminal"
                  />
                </div>
                
                <div className="p-4">
                  <h4 className="font-medium text-lg mb-3">3. Configurar o Tailwind CSS</h4>
                  <p className="text-gray-700 mb-2">
                    Atualize o arquivo <code className="bg-gray-100 px-1.5 py-0.5 rounded font-mono text-sm">tailwind.config.js</code> para incluir os componentes do Design System:
                  </p>
                  <CodeBlock 
                    code={`module.exports = {
  content: [
    // ... configurações existentes
    "./node_modules/@amicci/migo-design-system/**/*.{js,ts,jsx,tsx}",
  ],
  // ... resto da configuração
}`} 
                    language="javascript"
                    title="tailwind.config.js"
                  />
                </div>
                
                <div className="p-4">
                  <h4 className="font-medium text-lg mb-3">4. Importar componentes</h4>
                  <p className="text-gray-700 mb-2">
                    Importe os componentes diretamente em seus arquivos React:
                  </p>
                  <CodeBlock 
                    code={`import { Button, Card, Input } from '@amicci/migo-design-system';

function MeuComponente() {
  return (
    <Card>
      <h2>Exemplo de uso</h2>
      <Input placeholder="Digite aqui" />
      <Button>Enviar</Button>
    </Card>
  );
}`} 
                    language="jsx"
                    title="MeuComponente.tsx"
                  />
                </div>
                
                <div className="p-4">
                  <h4 className="font-medium text-lg mb-3">5. Remixar projeto modelo (opcional)</h4>
                  <p className="text-gray-700 mb-2">
                    Para iniciar rapidamente com um template pré-configurado:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 ml-1">
                    <li className="text-gray-700">Abra o projeto na Lovable</li>
                    <li className="text-gray-700">Clique no nome do projeto no topo da interface</li>
                    <li className="text-gray-700">Selecione "Remix" para criar uma cópia do projeto</li>
                    <li className="text-gray-700">Personalize o projeto conforme necessário</li>
                  </ol>
                </div>
                
                <div className="p-4">
                  <h4 className="font-medium text-lg mb-3">6. Versão específica (recomendado)</h4>
                  <p className="text-gray-700 mb-2">
                    Para garantir consistência, instale uma versão específica:
                  </p>
                  <CodeBlock 
                    code="npm install @amicci/migo-design-system@0.1.0" 
                    language="bash"
                    title="Terminal" 
                  />
                  <p className="text-gray-700 mt-2 text-sm">
                    Consulte a seção de versionamento para entender a política de compatibilidade.
                  </p>
                </div>
              </div>
            </div>
          </ComponentCard>
          
          <Separator />
          
          <ComponentCard 
            title="Atualização do Pacote" 
            className="mb-8"
          >
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-3">
                O pacote NPM <code className="bg-gray-100 px-1.5 py-0.5 rounded font-mono text-sm">@amicci/migo-design-system</code> não 
                é atualizado automaticamente quando os componentes são modificados no projeto principal.
              </p>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium mb-2">Processo de atualização:</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Executar script <code className="bg-gray-100 px-1.5 py-0.5 rounded font-mono text-sm">copy-components.js</code> para copiar as versões atualizadas</li>
                  <li>Atualizar a versão no <code className="bg-gray-100 px-1.5 py-0.5 rounded font-mono text-sm">package.json</code> seguindo Semantic Versioning</li>
                  <li>Reconstruir o pacote com <code className="bg-gray-100 px-1.5 py-0.5 rounded font-mono text-sm">npm run build</code></li>
                  <li>Publicar a nova versão no registro NPM interno</li>
                </ol>
              </div>
            </div>
          </ComponentCard>
          
          <Separator />
          
          <ComponentCard 
            title="Versionamento" 
            className="mb-8"
          >
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-3">
                O Migo Design System segue a política de Semantic Versioning (SemVer) para manter
                uma evolução previsível e compatível.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Major (x.0.0)</h4>
                  <p className="text-gray-700 text-sm">
                    Mudanças incompatíveis com versões anteriores. Requer adaptações nos projetos que usam o design system.
                  </p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Minor (0.x.0)</h4>
                  <p className="text-gray-700 text-sm">
                    Adição de funcionalidades mantendo compatibilidade retroativa. Seguro para atualizar.
                  </p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Patch (0.0.x)</h4>
                  <p className="text-gray-700 text-sm">
                    Correções de bugs mantendo compatibilidade. Atualizações recomendadas e seguras.
                  </p>
                </div>
              </div>
            </div>
          </ComponentCard>
          
          <Separator />
          
          <ComponentCard 
            title="Padrões de Desenvolvimento" 
            className="mb-8"
          >
            <div className="prose max-w-none">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Requisitos Técnicos</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Componentes devem ser desenvolvidos em TypeScript</li>
                    <li>Props devem ser documentadas com JSDoc</li>
                    <li>Testes unitários são obrigatórios</li>
                    <li>Componentes devem seguir padrões de acessibilidade (WCAG 2.1 AA)</li>
                    <li>Todos os componentes devem ser totalmente responsivos</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Convenções de Código</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Seguir padrões de nomenclatura estabelecidos</li>
                    <li>Utilizar arquitetura de componentes definida</li>
                    <li>Favorecer composição sobre herança</li>
                    <li>Evitar dependências externas desnecessárias</li>
                    <li>Manter tamanho dos arquivos gerenciável (até 250 linhas)</li>
                  </ul>
                </div>
              </div>
            </div>
          </ComponentCard>
        </TabsContent>
      </Tabs>
      
      <EmptyState 
        title="Mais conteúdo em breve" 
        description="Estamos expandindo nossas diretrizes de governança técnica. Em breve adicionaremos mais informações sobre processo de contribuição, documentação e políticas de suporte."
        icon="construction"
      />
    </div>
  );
};

export default TechnicalGovernance;
