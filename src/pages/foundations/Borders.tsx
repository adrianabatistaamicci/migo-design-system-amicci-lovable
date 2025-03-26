
import React, { useState } from 'react';
import { TailwindTabs } from "@/components/ui/tabs";
import ComponentCard from '@/components/ComponentCard';
import Header from '@/components/library-components/Header';
import CodeBlock from '@/components/CodeBlock';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const Borders = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Bordas" 
        description="Sistema de bordas para definir a aparência e espessura das bordas dos elementos."
        type="foundations"
      />

      <div className="mt-8">
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
                  </ul>
                </div>
                
                <h3 className="text-xl font-medium mb-3">Raio de Borda (Border Radius)</h3>
                <p className="text-mui-text-secondary mb-4">
                  Use estas classes de borda para adicionar cantos arredondados aos elementos da interface.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  <div className="space-y-2">
                    <div className="h-16 w-full rounded-none border-2 border-primary-main flex items-center justify-center">
                      <span className="text-sm font-medium">rounded-none</span>
                    </div>
                    <p className="text-xs text-center text-mui-text-secondary">0px</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="h-16 w-full rounded-sm border-2 border-primary-main flex items-center justify-center">
                      <span className="text-sm font-medium">rounded-sm</span>
                    </div>
                    <p className="text-xs text-center text-mui-text-secondary">0.125rem (2px)</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="h-16 w-full rounded border-2 border-primary-main flex items-center justify-center">
                      <span className="text-sm font-medium">rounded</span>
                    </div>
                    <p className="text-xs text-center text-mui-text-secondary">0.25rem (4px)</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="h-16 w-full rounded-md border-2 border-primary-main flex items-center justify-center">
                      <span className="text-sm font-medium">rounded-md</span>
                    </div>
                    <p className="text-xs text-center text-mui-text-secondary">0.375rem (6px)</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="h-16 w-full rounded-lg border-2 border-primary-main flex items-center justify-center">
                      <span className="text-sm font-medium">rounded-lg</span>
                    </div>
                    <p className="text-xs text-center text-mui-text-secondary">0.5rem (8px)</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="h-16 w-full rounded-xl border-2 border-primary-main flex items-center justify-center">
                      <span className="text-sm font-medium">rounded-xl</span>
                    </div>
                    <p className="text-xs text-center text-mui-text-secondary">0.75rem (12px)</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="h-16 w-full rounded-2xl border-2 border-primary-main flex items-center justify-center">
                      <span className="text-sm font-medium">rounded-2xl</span>
                    </div>
                    <p className="text-xs text-center text-mui-text-secondary">1rem (16px)</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="h-16 w-full rounded-full border-2 border-primary-main flex items-center justify-center">
                      <span className="text-sm font-medium">rounded-full</span>
                    </div>
                    <p className="text-xs text-center text-mui-text-secondary">9999px</p>
                  </div>
                </div>
                
                <h3 className="text-xl font-medium mb-3">Espessura de Borda (Border Width)</h3>
                <p className="text-mui-text-secondary mb-4">
                  Controle a espessura das bordas dos elementos com estas classes.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                  <div className="space-y-2">
                    <div className="h-16 w-full border-0 border-tertiary-main rounded-md flex items-center justify-center bg-tertiary-light/20">
                      <span className="text-sm font-medium">border-0</span>
                    </div>
                    <p className="text-xs text-center text-mui-text-secondary">0px</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="h-16 w-full border border-tertiary-main rounded-md flex items-center justify-center">
                      <span className="text-sm font-medium">border</span>
                    </div>
                    <p className="text-xs text-center text-mui-text-secondary">1px</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="h-16 w-full border-2 border-tertiary-main rounded-md flex items-center justify-center">
                      <span className="text-sm font-medium">border-2</span>
                    </div>
                    <p className="text-xs text-center text-mui-text-secondary">2px</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="h-16 w-full border-4 border-tertiary-main rounded-md flex items-center justify-center">
                      <span className="text-sm font-medium">border-4</span>
                    </div>
                    <p className="text-xs text-center text-mui-text-secondary">4px</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="h-16 w-full border-8 border-tertiary-main rounded-md flex items-center justify-center">
                      <span className="text-sm font-medium">border-8</span>
                    </div>
                    <p className="text-xs text-center text-mui-text-secondary">8px</p>
                  </div>
                </div>
              </ComponentCard>
            </div>
          )}

          {activeTab === 'usage' && (
            <div className="space-y-6">
              <ComponentCard title="Aplicação Prática das Bordas" description="Exemplos de como usar os diferentes tipos de bordas.">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-medium mb-3">Aplicação Específica de Border Radius</h3>
                    <p className="text-mui-text-secondary mb-4">
                      Aplique border-radius em lados específicos para criar designs flexíveis.
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6 mb-8">
                      <div className="space-y-2">
                        <div className="h-16 w-full rounded-t-lg border-2 border-secondary-main flex items-center justify-center">
                          <span className="text-sm font-medium">rounded-t-lg</span>
                        </div>
                        <p className="text-xs text-center text-mui-text-secondary">Borda superior</p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="h-16 w-full rounded-r-lg border-2 border-secondary-main flex items-center justify-center">
                          <span className="text-sm font-medium">rounded-r-lg</span>
                        </div>
                        <p className="text-xs text-center text-mui-text-secondary">Borda direita</p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="h-16 w-full rounded-b-lg border-2 border-secondary-main flex items-center justify-center">
                          <span className="text-sm font-medium">rounded-b-lg</span>
                        </div>
                        <p className="text-xs text-center text-mui-text-secondary">Borda inferior</p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="h-16 w-full rounded-l-lg border-2 border-secondary-main flex items-center justify-center">
                          <span className="text-sm font-medium">rounded-l-lg</span>
                        </div>
                        <p className="text-xs text-center text-mui-text-secondary">Borda esquerda</p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="h-16 w-full rounded-tl-lg border-2 border-secondary-main flex items-center justify-center">
                          <span className="text-sm font-medium">rounded-tl-lg</span>
                        </div>
                        <p className="text-xs text-center text-mui-text-secondary">Canto superior esquerdo</p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="h-16 w-full rounded-br-lg border-2 border-secondary-main flex items-center justify-center">
                          <span className="text-sm font-medium">rounded-br-lg</span>
                        </div>
                        <p className="text-xs text-center text-mui-text-secondary">Canto inferior direito</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-3">Estilos de Borda (Border Style)</h3>
                    <p className="text-mui-text-secondary mb-4">
                      Use estas classes para controlar o estilo visual das bordas.
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <div className="h-16 w-full border-2 border-solid border-success-main rounded-md flex items-center justify-center">
                          <span className="text-sm font-medium">border-solid</span>
                        </div>
                        <p className="text-xs text-center text-mui-text-secondary">Linha sólida (padrão)</p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="h-16 w-full border-2 border-dashed border-success-main rounded-md flex items-center justify-center">
                          <span className="text-sm font-medium">border-dashed</span>
                        </div>
                        <p className="text-xs text-center text-mui-text-secondary">Linha tracejada</p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="h-16 w-full border-2 border-dotted border-success-main rounded-md flex items-center justify-center">
                          <span className="text-sm font-medium">border-dotted</span>
                        </div>
                        <p className="text-xs text-center text-mui-text-secondary">Linha pontilhada</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-3">Aplicação Específica de Border Width</h3>
                    <p className="text-mui-text-secondary mb-4">
                      Controle a espessura de lados específicos da borda para criar efeitos visuais.
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="space-y-2">
                        <div className="h-16 w-full border-t-4 border-info-main rounded-md flex items-center justify-center">
                          <span className="text-sm font-medium">border-t-4</span>
                        </div>
                        <p className="text-xs text-center text-mui-text-secondary">Borda superior</p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="h-16 w-full border-r-4 border-info-main rounded-md flex items-center justify-center">
                          <span className="text-sm font-medium">border-r-4</span>
                        </div>
                        <p className="text-xs text-center text-mui-text-secondary">Borda direita</p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="h-16 w-full border-b-4 border-info-main rounded-md flex items-center justify-center">
                          <span className="text-sm font-medium">border-b-4</span>
                        </div>
                        <p className="text-xs text-center text-mui-text-secondary">Borda inferior</p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="h-16 w-full border-l-4 border-info-main rounded-md flex items-center justify-center">
                          <span className="text-sm font-medium">border-l-4</span>
                        </div>
                        <p className="text-xs text-center text-mui-text-secondary">Borda esquerda</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ComponentCard>
              
              <ComponentCard title="Cores de Borda" description="Utilize as cores semânticas para bordas alinhadas com o tom da mensagem.">
                <p className="text-mui-text-secondary mb-4">
                  As cores das bordas devem ser escolhidas de acordo com seu significado e função.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="space-y-2">
                    <div className="h-16 w-full border-2 border-primary-main rounded-md flex items-center justify-center">
                      <span className="text-sm font-medium">border-primary-main</span>
                    </div>
                    <p className="text-xs text-center text-mui-text-secondary">Primária</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="h-16 w-full border-2 border-secondary-main rounded-md flex items-center justify-center">
                      <span className="text-sm font-medium">border-secondary-main</span>
                    </div>
                    <p className="text-xs text-center text-mui-text-secondary">Secundária</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="h-16 w-full border-2 border-tertiary-main rounded-md flex items-center justify-center">
                      <span className="text-sm font-medium">border-tertiary-main</span>
                    </div>
                    <p className="text-xs text-center text-mui-text-secondary">Terciária</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="h-16 w-full border-2 border-error-main rounded-md flex items-center justify-center">
                      <span className="text-sm font-medium">border-error-main</span>
                    </div>
                    <p className="text-xs text-center text-mui-text-secondary">Erro</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="h-16 w-full border-2 border-warning-main rounded-md flex items-center justify-center">
                      <span className="text-sm font-medium">border-warning-main</span>
                    </div>
                    <p className="text-xs text-center text-mui-text-secondary">Alerta</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="h-16 w-full border-2 border-success-main rounded-md flex items-center justify-center">
                      <span className="text-sm font-medium">border-success-main</span>
                    </div>
                    <p className="text-xs text-center text-mui-text-secondary">Sucesso</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="h-16 w-full border-2 border-info-main rounded-md flex items-center justify-center">
                      <span className="text-sm font-medium">border-info-main</span>
                    </div>
                    <p className="text-xs text-center text-mui-text-secondary">Informação</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="h-16 w-full border-2 border-gray-400 rounded-md flex items-center justify-center">
                      <span className="text-sm font-medium">border-gray-400</span>
                    </div>
                    <p className="text-xs text-center text-mui-text-secondary">Cinza (neutro)</p>
                  </div>
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
                          <li><code className="bg-gray-100 px-1 py-0.5 rounded">rounded-none</code> - Sem arredondamento (0px)</li>
                          <li><code className="bg-gray-100 px-1 py-0.5 rounded">rounded-sm</code> - Arredondamento pequeno (2px)</li>
                          <li><code className="bg-gray-100 px-1 py-0.5 rounded">rounded</code> - Arredondamento padrão (4px)</li>
                          <li><code className="bg-gray-100 px-1 py-0.5 rounded">rounded-md</code> - Arredondamento médio (6px)</li>
                          <li><code className="bg-gray-100 px-1 py-0.5 rounded">rounded-lg</code> - Arredondamento grande (8px)</li>
                          <li><code className="bg-gray-100 px-1 py-0.5 rounded">rounded-xl</code> - Arredondamento extra grande (12px)</li>
                          <li><code className="bg-gray-100 px-1 py-0.5 rounded">rounded-2xl</code> - Arredondamento duplo extra grande (16px)</li>
                          <li><code className="bg-gray-100 px-1 py-0.5 rounded">rounded-full</code> - Arredondamento circular (9999px)</li>
                        </ul>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <h4 className="text-sm font-medium mb-2">Utilitários de Border Width</h4>
                        <ul className="space-y-2 text-sm">
                          <li><code className="bg-gray-100 px-1 py-0.5 rounded">border-0</code> - Sem borda (0px)</li>
                          <li><code className="bg-gray-100 px-1 py-0.5 rounded">border</code> - Borda padrão (1px)</li>
                          <li><code className="bg-gray-100 px-1 py-0.5 rounded">border-2</code> - Borda com 2px</li>
                          <li><code className="bg-gray-100 px-1 py-0.5 rounded">border-4</code> - Borda com 4px</li>
                          <li><code className="bg-gray-100 px-1 py-0.5 rounded">border-8</code> - Borda com 8px</li>
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
