
import React, { useState, useEffect } from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import Header from '@/components/library-components/Header';
import DocumentationSkeleton from '@/components/library-components/DocumentationSkeleton';
import { TailwindTabs } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';

const Guidelines = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  
  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    return <DocumentationSkeleton />;
  }

  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Diretrizes"
        description="Boas práticas para acessibilidade, responsividade e experiência do usuário"
        type="foundations"
        hideChip={true}
      />
      
      <TailwindTabs
        defaultValue="overview"
        className="mt-8"
        tabs={[
          { name: 'Visão geral', value: 'overview' },
          { name: 'Acessibilidade', value: 'accessibility' },
          { name: 'Governança técnica', value: 'governance' }
        ]}
        variant="pillsGray"
        onChange={value => setActiveTab(value)}
      />
      
      <div className="mt-6">
        {activeTab === 'overview' && (
          <EmptyState 
            title="Diretrizes em Desenvolvimento" 
            description="Estamos trabalhando nas diretrizes gerais do design system. Volte em breve para conferir as melhores práticas para criar interfaces consistentes e acessíveis."
            icon="book"
          />
        )}
        
        {activeTab === 'accessibility' && (
          <EmptyState 
            title="Diretrizes de Acessibilidade em Desenvolvimento" 
            description="Estamos trabalhando nas diretrizes de acessibilidade. Volte em breve para conferir as melhores práticas para criar interfaces acessíveis."
            icon="accessibility"
          />
        )}
        
        {activeTab === 'governance' && (
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Governança Técnica</h2>
              <p className="text-gray-700">
                As diretrizes de governança técnica estabelecem o processo de contribuição, 
                manutenção e evolução dos componentes no Migo Design System.
              </p>
              
              <div className="mt-6 space-y-6">
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
        )}
      </div>
    </div>
  );
};

export default Guidelines;
