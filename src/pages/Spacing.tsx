
import React, { useState } from 'react';
import { TailwindTabs } from "@/components/ui/tabs";
import ComponentCard from '@/components/ComponentCard';
import { tokenToPixels } from '@/utils/spacingUtils';
import Header from '@/components/library-components/Header';
import CodeBlock from '@/components/CodeBlock';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const Spacing = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const spacings = [
    'space-0', 'space-1', 'space-2', 'space-3', 'space-4', 'space-5', 'space-6', 'space-8',
    'space-10', 'space-12', 'space-16', 'space-20', 'space-24', 'space-32', 'space-40',
    'space-48', 'space-56', 'space-64'
  ];

  const directions: Array<'x' | 'y' | 't' | 'r' | 'b' | 'l' | ''> = ['', 'x', 'y', 't', 'r', 'b', 'l'];

  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Spacing" 
        description="Sistema de espaçamento padronizado para criar interfaces consistentes" 
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
              <ComponentCard title="Visão Geral do Sistema de Espaçamento" description="Explore os tokens de espaçamento disponíveis e suas representações em pixels.">
                <p className="text-mui-text-secondary mb-6">
                  Nosso sistema de espaçamento é baseado em uma escala consistente para garantir harmonia visual e usabilidade em toda a aplicação.
                </p>
                
                <div className="bg-gray-50 border rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-medium mb-3">Escala de 4px: Fundamento Técnico</h3>
                  <p className="mb-4">
                    Nosso design system utiliza uma escala baseada em múltiplos de 4 pixels por razões técnicas e visuais importantes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Precisão em displays:</strong> Alinha-se com a maioria das telas modernas, resultando em renderização mais nítida sem artefatos de antialiasing.</li>
                    <li><strong>Cálculos eficientes:</strong> Facilita divisões e multiplicações para desenvolvedores e designers, acelerando a implementação.</li>
                    <li><strong>Compatibilidade com grids:</strong> Trabalha harmoniosamente com sistemas de grid de 8px e 12px comuns em frameworks CSS.</li>
                    <li><strong>Escalabilidade:</strong> Adapta-se facilmente a diferentes densidades de pixel e fatores de escala em diferentes dispositivos.</li>
                    <li><strong>Consistência visual:</strong> Cria ritmo e proporção harmônica em toda a interface, melhorando a experiência do usuário.</li>
                  </ul>
                </div>
                
                <div className="grid grid-cols-1 gap-4 mt-6 mb-8">
                  {spacings.map(space => {
                    const pixelValue = tokenToPixels(space);
                    return (
                      <div key={space} className="flex items-center border rounded-lg p-4">
                        <div className="flex-shrink-0 w-48">
                          <span className="text-sm font-medium">{space}</span>
                        </div>
                        
                        <div className="flex-grow mx-4">
                          <div className="flex items-center">
                            <div className="bg-gray-200 h-4 rounded-full">
                              <div 
                                className="bg-primary-main h-4 rounded-full" 
                                style={{ width: `${Math.max(pixelValue * 2, 16)}px` }}
                              />
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex-shrink-0 w-16 text-right">
                          <span className="text-sm font-mono">{pixelValue}px</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <p className="text-sm text-gray-600 mt-4">
                  O sistema de espaçamento é projetado para criar uma escala visual harmônica, 
                  aumentando progressivamente de tamanho para fornecer ritmo e hierarquia em layouts.
                </p>
              </ComponentCard>
            </div>
          )}

          {activeTab === 'usage' && (
            <div className="space-y-6">
              <ComponentCard title="Aplicação Prática do Espaçamento" description="Exemplos de como usar os tokens de espaçamento em diferentes contextos.">
                <p className="text-mui-text-secondary mb-6">
                  Utilize os tokens de espaçamento para definir margens, preenchimentos e gaps entre elementos de forma consistente.
                </p>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-medium mb-3">Margens e Preenchimentos</h3>
                    <p className="text-mui-text-secondary mb-3">
                      Aplique margens e preenchimentos utilizando os tokens de espaçamento para controlar o layout dos elementos.
                    </p>
                    
                    <div className="space-y-4 mt-6">
                      {['space-4', 'space-8', 'space-12', 'space-16'].map(space => {
                        const pixelValue = tokenToPixels(space);
                        return (
                          <div key={space} className="border rounded-lg p-4">
                            <div className="flex items-center gap-4">
                              <div className="w-32 text-sm">{space} ({pixelValue}px)</div>
                              <div className="flex-grow">
                                <div className="bg-gray-100 rounded">
                                  <div 
                                    className="bg-primary-light border border-primary-main rounded w-full"
                                    style={{ padding: `${pixelValue}px` }}
                                  >
                                    <div className="bg-white border border-gray-300 rounded p-2 text-center text-sm">
                                      Conteúdo com padding {pixelValue}px
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-3">Gaps entre Elementos</h3>
                    <p className="text-mui-text-secondary mb-3">
                      Utilize a propriedade gap para definir o espaçamento entre elementos em layouts flexíveis ou de grid.
                    </p>
                    
                    {['space-2', 'space-4', 'space-8', 'space-16'].map(space => {
                      const pixelValue = tokenToPixels(space);
                      return (
                        <div key={space} className="border rounded-lg p-4 mb-4">
                          <div className="flex items-center mb-2">
                            <span className="text-sm font-medium">{space} ({pixelValue}px)</span>
                          </div>
                          <div 
                            className="flex bg-gray-50 p-4 rounded"
                            style={{ gap: `${pixelValue}px` }}
                          >
                            {[1, 2, 3, 4].map(item => (
                              <div 
                                key={item} 
                                className="bg-primary-light border border-primary-main rounded-md flex items-center justify-center w-12 h-12"
                              >
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </ComponentCard>
            </div>
          )}

          {activeTab === 'utilities' && (
            <div className="space-y-6">
              <ComponentCard title="Utilitários de Espaçamento" description="Explore as classes utilitárias para aplicar espaçamento de forma rápida e eficiente.">
                <p className="text-mui-text-secondary mb-6">
                  Nossas classes utilitárias de espaçamento permitem que você defina margens, preenchimentos e gaps de forma consistente em toda a aplicação.
                </p>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-medium mb-3">Classes de Espaçamento</h3>
                    <p className="text-mui-text-secondary mb-3">
                      As classes seguem o padrão <code>m[direção]-[tamanho]</code> para margens, <code>p[direção]-[tamanho]</code> para preenchimentos, 
                      e <code>gap-[tamanho]</code> para espaçamento entre elementos.
                    </p>
                    
                    <div className="overflow-x-auto mt-6">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-1/6">Token</TableHead>
                            <TableHead className="w-1/6">Valor (pixels)</TableHead>
                            <TableHead className="w-1/3">Classe Exemplo</TableHead>
                            <TableHead className="w-1/3">Visualização</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {spacings.map(space => {
                            const pixelValue = tokenToPixels(space);
                            const spaceValue = space.split('-')[1];
                            return (
                              <TableRow key={space}>
                                <TableCell>{space}</TableCell>
                                <TableCell>{pixelValue}px</TableCell>
                                <TableCell>
                                  <code className="text-xs bg-gray-100 px-1 py-0.5 rounded">p-{spaceValue}</code>, 
                                  <code className="text-xs bg-gray-100 px-1 py-0.5 rounded ml-1">m-{spaceValue}</code>, 
                                  <code className="text-xs bg-gray-100 px-1 py-0.5 rounded ml-1">gap-{spaceValue}</code>
                                </TableCell>
                                <TableCell>
                                  <div className="flex items-center">
                                    <div className="bg-gray-300 h-4 rounded-full flex-grow">
                                      <div 
                                        className="bg-primary-main h-4 rounded-full" 
                                        style={{ width: `${Math.max(pixelValue, 4)}px` }}
                                      />
                                    </div>
                                  </div>
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-3">Direções de Espaçamento</h3>
                    <p className="text-mui-text-secondary mb-3">
                      As classes de margin e padding podem ser aplicadas em direções específicas.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="text-sm font-medium mb-2">Direções de Espaçamento</h4>
                        <ul className="space-y-2 text-sm">
                          <li><code className="bg-gray-100 px-1 py-0.5 rounded">m-4</code> - Margin em todos os lados</li>
                          <li><code className="bg-gray-100 px-1 py-0.5 rounded">mx-4</code> - Margin horizontal (left + right)</li>
                          <li><code className="bg-gray-100 px-1 py-0.5 rounded">my-4</code> - Margin vertical (top + bottom)</li>
                          <li><code className="bg-gray-100 px-1 py-0.5 rounded">mt-4</code> - Margin top</li>
                          <li><code className="bg-gray-100 px-1 py-0.5 rounded">mr-4</code> - Margin right</li>
                          <li><code className="bg-gray-100 px-1 py-0.5 rounded">mb-4</code> - Margin bottom</li>
                          <li><code className="bg-gray-100 px-1 py-0.5 rounded">ml-4</code> - Margin left</li>
                        </ul>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <h4 className="text-sm font-medium mb-2">Exemplo de Uso</h4>
                        <CodeBlock 
                          language="jsx"
                          code={`<div className="mt-4 mb-8 px-6">
  {/* Margin top: 16px, Margin bottom: 32px, 
     Padding horizontal: 24px */}
  <p>Conteúdo com espaçamento</p>
</div>`}
                        />
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

export default Spacing;
