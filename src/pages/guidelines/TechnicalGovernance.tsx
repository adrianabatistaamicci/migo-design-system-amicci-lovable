
import React from 'react';
import Header from '@/components/library-components/Header';
import EmptyState from '@/components/library-components/EmptyState';
import { Separator } from '@/components/ui/separator';

const TechnicalGovernance = () => {
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
        title="Governança Técnica"
        description="Processo de contribuição, manutenção e evolução dos componentes"
        type="foundations"
        hideChip={true}
      />
      
      <div className="mb-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Design System Core Team</h2>
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
      </div>
      
      <div className="mt-6 space-y-8">
        <section>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium mb-3">Atualização do Pacote</h3>
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
            
            <Separator />
            
            <div>
              <h3 className="text-xl font-medium mb-3">Versionamento</h3>
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
            
            <Separator />
            
            <div>
              <h3 className="text-xl font-medium mb-3">Padrões de Desenvolvimento</h3>
              
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
            
            <EmptyState 
              title="Mais conteúdo em breve" 
              description="Estamos expandindo nossas diretrizes de governança técnica. Em breve adicionaremos mais informações sobre processo de contribuição, documentação e políticas de suporte."
              icon="construction"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default TechnicalGovernance;

