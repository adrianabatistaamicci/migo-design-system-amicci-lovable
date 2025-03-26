
import React, { useState } from 'react';
import { TailwindTabs } from "@/components/ui/tabs";
import ComponentCard from '@/components/ComponentCard';
import Header from '@/components/library-components/Header';
import CodeBlock from '@/components/CodeBlock';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const Borders = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const borderRadii = [
    { name: 'rounded-none', value: '0px' },
    { name: 'rounded-sm', value: '0.125rem (2px)' },
    { name: 'rounded', value: '0.25rem (4px)' },
    { name: 'rounded-md', value: '0.375rem (6px)' },
    { name: 'rounded-lg', value: '0.5rem (8px)' },
    { name: 'rounded-xl', value: '0.75rem (12px)' },
    { name: 'rounded-2xl', value: '1rem (16px)' },
    { name: 'rounded-full', value: '9999px' }
  ];

  const borderWidths = [
    { name: 'border-0', value: '0px' },
    { name: 'border', value: '1px' },
    { name: 'border-2', value: '2px' },
    { name: 'border-4', value: '4px' },
    { name: 'border-8', value: '8px' }
  ];

  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Bordas" 
        description="Sistema de bordas para definir a aparência e espessura das bordas dos elementos."
        type="foundations"
      />

      <div className="">
        <TailwindTabs 
          defaultValue="overview"
          tabs={[
            { name: 'Visão Geral', value: 'overview' },
            { name: 'Aplicação', value: 'usage' },
            { name: 'Utilitários', value: 'utilities' }
          ]}
          variant="pillsGray"
          onChange={value => setActiveTab(value)}
        />
        
        <div className="mt-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <ComponentCard title="Visão Geral do Sistema de Bordas" description="Explore os tipos de bordas disponíveis e suas características.">
                <p className="text-mui-text-secondary mb-6">
                  Nosso sistema de bordas é projetado para proporcionar consistência e harmonia visual em toda a aplicação.
                </p>
                
                <div className="bg-gray-50 border rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-medium mb-3">Princípios do Sistema de Bordas</h3>
                  <p className="mb-4">
                    O sistema de bordas segue princípios importantes para garantir consistência e acessibilidade:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Consistência visual:</strong> Utilizamos um conjunto padronizado de estilos de borda para criar familiaridade.</li>
                    <li><strong>Semântica:</strong> Cada tipo de borda comunica uma função ou estado específico da interface.</li>
                    <li><strong>Hierarquia visual:</strong> A espessura e o estilo das bordas ajudam a estabelecer hierarquia entre elementos.</li>
                    <li><strong>Acessibilidade:</strong> As bordas devem ter contraste suficiente para garantir visibilidade para todos os usuários.</li>
                    <li><strong>Escalabilidade:</strong> O sistema de bordas se adapta facilmente a diferentes densidades de pixel e fatores de escala.</li>
                  </ul>
                </div>
                
                <h3 className="text-xl font-medium mb-3">Raio de Borda (Border Radius)</h3>
                <p className="text-mui-text-secondary mb-4">
                  Use estas classes de borda para adicionar cantos arredondados aos elementos da interface.
                </p>
                
                <div className="grid grid-cols-1 gap-4 mt-6 mb-8">
                  {borderRadii.map(radius => (
                    <div key={radius.name} className="flex items-center border rounded-lg p-4">
                      <div className="flex-shrink-0 w-48">
                        <span className="text-sm font-medium">{radius.name}</span>
                      </div>
                      
                      <div className="flex-grow mx-4">
                        <div className="flex items-center">
                          <div className={`bg-primary-light h-12 w-full ${radius.name} border border-primary-main`}>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0 w-24 text-right">
                        <span className="text-sm font-mono">{radius.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-xl font-medium mb-3">Espessura de Borda (Border Width)</h3>
                <p className="text-mui-text-secondary mb-4">
                  Controle a espessura das bordas dos elementos com estas classes.
                </p>
                
                <div className="grid grid-cols-1 gap-4 mt-6">
                  {borderWidths.map(width => (
                    <div key={width.name} className="flex items-center border rounded-lg p-4">
                      <div className="flex-shrink-0 w-48">
                        <span className="text-sm font-medium">{width.name}</span>
                      </div>
                      
                      <div className="flex-grow mx-4">
                        <div className="flex items-center">
                          <div className={`bg-tertiary-light/20 h-12 w-full rounded-md ${width.name} border-tertiary-main`}>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0 w-24 text-right">
                        <span className="text-sm font-mono">{width.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <p className="text-sm text-gray-600 mt-4">
                  O sistema de bordas é projetado para criar uma escala visual harmônica, 
                  com variações de tamanho, raio e estilo para fornecer ritmo e hierarquia em layouts.
                </p>
              </ComponentCard>
            </div>
          )}

          {activeTab === 'usage' && (
            <div className="space-y-6">
              <ComponentCard title="Aplicação Prática das Bordas" description="Exemplos de como usar os diferentes tipos de bordas.">
                <p className="text-mui-text-secondary mb-6">
                  Utilize os diferentes estilos de borda para definir contornos, separações e agrupamentos de elementos de forma consistente.
                </p>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-medium mb-3">Aplicação Específica de Border Radius</h3>
                    <p className="text-mui-text-secondary mb-3">
                      Aplique border-radius em lados específicos para criar designs flexíveis.
                    </p>
                    
                    <div className="space-y-4 mt-6">
                      {[
                        { name: 'rounded-t-lg', desc: 'Borda superior', side: 't' },
                        { name: 'rounded-r-lg', desc: 'Borda direita', side: 'r' },
                        { name: 'rounded-b-lg', desc: 'Borda inferior', side: 'b' },
                        { name: 'rounded-l-lg', desc: 'Borda esquerda', side: 'l' }
                      ].map(radius => (
                        <div key={radius.name} className="border rounded-lg p-4">
                          <div className="flex items-center gap-4">
                            <div className="w-32 text-sm">{radius.name}</div>
                            <div className="flex-grow">
                              <div className="bg-gray-100 rounded p-4">
                                <div className={`bg-secondary-light border-2 border-secondary-main ${radius.name} w-full h-16 flex items-center justify-center`}>
                                  <span className="text-sm">{radius.desc}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-3">Estilos de Borda (Border Style)</h3>
                    <p className="text-mui-text-secondary mb-3">
                      Use estas classes para controlar o estilo visual das bordas.
                    </p>
                    
                    <div className="space-y-4 mt-6">
                      {[
                        { name: 'border-solid', desc: 'Linha sólida (padrão)' },
                        { name: 'border-dashed', desc: 'Linha tracejada' },
                        { name: 'border-dotted', desc: 'Linha pontilhada' }
                      ].map(style => (
                        <div key={style.name} className="border rounded-lg p-4">
                          <div className="flex items-center gap-4">
                            <div className="w-32 text-sm">{style.name}</div>
                            <div className="flex-grow">
                              <div className={`bg-success-light/20 h-16 w-full rounded-md border-2 ${style.name} border-success-main flex items-center justify-center`}>
                                <span className="text-sm">{style.desc}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-3">Aplicação Específica de Border Width</h3>
                    <p className="text-mui-text-secondary mb-3">
                      Controle a espessura de lados específicos da borda para criar efeitos visuais.
                    </p>
                    
                    <div className="space-y-4 mt-6">
                      {[
                        { name: 'border-t-4', desc: 'Borda superior' },
                        { name: 'border-r-4', desc: 'Borda direita' },
                        { name: 'border-b-4', desc: 'Borda inferior' },
                        { name: 'border-l-4', desc: 'Borda esquerda' }
                      ].map(width => (
                        <div key={width.name} className="border rounded-lg p-4">
                          <div className="flex items-center gap-4">
                            <div className="w-32 text-sm">{width.name}</div>
                            <div className="flex-grow">
                              <div className={`bg-info-light/20 h-16 w-full rounded-md ${width.name} border-info-main flex items-center justify-center`}>
                                <span className="text-sm">{width.desc}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ComponentCard>
              
              <ComponentCard title="Cores de Borda" description="Utilize as cores semânticas para bordas alinhadas com o tom da mensagem.">
                <p className="text-mui-text-secondary mb-4">
                  As cores das bordas devem ser escolhidas de acordo com seu significado e função.
                </p>
                
                <div className="space-y-4 mt-6">
                  {[
                    { name: 'border-primary-main', desc: 'Primária' },
                    { name: 'border-secondary-main', desc: 'Secundária' },
                    { name: 'border-tertiary-main', desc: 'Terciária' },
                    { name: 'border-error-main', desc: 'Erro' },
                    { name: 'border-warning-main', desc: 'Alerta' },
                    { name: 'border-success-main', desc: 'Sucesso' },
                    { name: 'border-info-main', desc: 'Informação' },
                    { name: 'border-gray-400', desc: 'Cinza (neutro)' }
                  ].map(color => (
                    <div key={color.name} className="border rounded-lg p-4">
                      <div className="flex items-center gap-4">
                        <div className="w-40 text-sm">{color.name}</div>
                        <div className="flex-grow">
                          <div className={`h-16 w-full rounded-md border-2 ${color.name} flex items-center justify-center`}>
                            <span className="text-sm">{color.desc}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ComponentCard>
            </div>
          )}

          {activeTab === 'utilities' && (
            <div className="space-y-6">
              <ComponentCard title="Utilitários de Bordas" description="Classes utilitárias para aplicar bordas de forma consistente.">
                <p className="text-mui-text-secondary mb-6">
                  Nossas classes utilitárias de bordas permitem que você defina bordas de forma rápida e consistente em toda a aplicação.
                </p>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-medium mb-3">Boas Práticas de Uso</h3>
                    <div className="space-y-4">
                      <div className="border border-gray-200 p-4 rounded-lg">
                        <h4 className="text-base font-medium text-mui-text-primary mb-2">Consistência</h4>
                        <p className="text-sm text-mui-text-secondary">
                          Mantenha a consistência no uso de bordas em toda a aplicação. Evite misturar muitos estilos diferentes sem propósito.
                        </p>
                      </div>
                      
                      <div className="border border-gray-200 p-4 rounded-lg">
                        <h4 className="text-base font-medium text-mui-text-primary mb-2">Semântica</h4>
                        <p className="text-sm text-mui-text-secondary">
                          Use cores com significado. Por exemplo, bordas vermelhas para erros e bordas verdes para sucesso.
                        </p>
                      </div>
                      
                      <div className="border border-gray-200 p-4 rounded-lg">
                        <h4 className="text-base font-medium text-mui-text-primary mb-2">Contraste</h4>
                        <p className="text-sm text-mui-text-secondary">
                          Assegure-se de que há contraste suficiente entre a borda e o fundo para garantir a visibilidade.
                        </p>
                      </div>
                      
                      <div className="border border-gray-200 p-4 rounded-lg">
                        <h4 className="text-base font-medium text-mui-text-primary mb-2">Responsividade</h4>
                        <p className="text-sm text-mui-text-secondary">
                          Considere ajustar a espessura da borda em diferentes tamanhos de tela para manter a proporção visual.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-3">Exemplos de Código</h3>
                    
                    <CodeBlock 
                      language="jsx"
                      code={`// Exemplo de componente com diferentes bordas
<div className="border-2 border-primary-main rounded-lg p-4">
  <h3 className="border-b border-primary-light pb-2">Título do Card</h3>
  <p className="mt-2">Conteúdo do card com borda primária.</p>
</div>

<div className="border border-dashed border-warning-main rounded-md p-4">
  <p>Alerta com borda tracejada.</p>
</div>

<div className="border-l-4 border-info-main pl-4">
  <p>Bloco de informação com borda à esquerda.</p>
</div>`}
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-3">Referência de API</h3>
                    
                    <Table className="border rounded-lg overflow-hidden">
                      <TableHeader>
                        <TableRow className="bg-mui-sidebar">
                          <TableHead className="w-1/4">Propriedade</TableHead>
                          <TableHead className="w-3/4">Descrição</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-mono">border-radius</TableCell>
                          <TableCell>Define o raio dos cantos do elemento, criando cantos arredondados.</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">border-width</TableCell>
                          <TableCell>Define a espessura da borda ao redor do elemento.</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">border-style</TableCell>
                          <TableCell>Define o estilo da linha da borda (sólida, tracejada, pontilhada).</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">border-color</TableCell>
                          <TableCell>Define a cor da borda do elemento.</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-3">Utilitários de Borda</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="text-sm font-medium mb-2">Utilitários de Border Radius</h4>
                        <ul className="space-y-2 text-sm">
                          {borderRadii.map(radius => (
                            <li key={radius.name}>
                              <code className="bg-gray-100 px-1 py-0.5 rounded">{radius.name}</code> - {radius.value}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <h4 className="text-sm font-medium mb-2">Utilitários de Border Width</h4>
                        <ul className="space-y-2 text-sm">
                          {borderWidths.map(width => (
                            <li key={width.name}>
                              <code className="bg-gray-100 px-1 py-0.5 rounded">{width.name}</code> - {width.value}
                            </li>
                          ))}
                          <li><code className="bg-gray-100 px-1 py-0.5 rounded">border-t-{'{width}'}</code> - Borda superior</li>
                          <li><code className="bg-gray-100 px-1 py-0.5 rounded">border-r-{'{width}'}</code> - Borda direita</li>
                          <li><code className="bg-gray-100 px-1 py-0.5 rounded">border-b-{'{width}'}</code> - Borda inferior</li>
                          <li><code className="bg-gray-100 px-1 py-0.5 rounded">border-l-{'{width}'}</code> - Borda esquerda</li>
                        </ul>
                      </div>
                    </div>
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

export default Borders;
