
import React, { useState } from 'react';
import { TailwindTabs } from "@/components/ui/tabs";
import ComponentCard from '@/components/ComponentCard';
import { tokenToPixels, pixelsToToken, getSpacingClass } from '@/utils/spacingUtils';
import Header from '@/components/library-components/Header';
import CodeBlock from '@/components/CodeBlock';

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
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {spacings.map(space => (
                    <div key={space} className="flex flex-col items-center border rounded-lg p-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center">
                        <span className="text-sm font-medium">{tokenToPixels(space)}px</span>
                      </div>
                      <span className="text-xs mt-2 text-gray-500">{space}</span>
                    </div>
                  ))}
                </div>
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {spacings.map(space => (
                        <div key={space} className="border rounded-lg p-4">
                          <div className={`bg-primary-light p-2 ${getSpacingClass('margin', space)}`}>
                            <div className="bg-secondary-light p-2">
                              <div className="bg-white p-2 text-center">
                                {space}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-3">Gaps entre Elementos</h3>
                    <p className="text-mui-text-secondary mb-3">
                      Utilize a propriedade gap para definir o espaçamento entre elementos em layouts flexíveis ou de grid.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {spacings.map(space => (
                        <div key={space} className="bg-gray-100 p-2 rounded-md">
                          <span className="text-sm">{space}</span>
                        </div>
                      ))}
                    </div>
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
                    <h3 className="text-xl font-medium mb-3">Classes de Margem e Preenchimento</h3>
                    <p className="text-mui-text-secondary mb-3">
                      As classes de margem e preenchimento seguem o padrão <code>m[direção]-[tamanho]</code> e <code>p[direção]-[tamanho]</code>, onde direção pode ser <code>t</code> (top), <code>r</code> (right), <code>b</code> (bottom), <code>l</code> (left), <code>x</code> (horizontal) ou <code>y</code> (vertical).
                    </p>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Token
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Valor (pixels)
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Classe
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {spacings.map(space => (
                            directions.map(direction => {
                              const className = getSpacingClass('margin', space, direction || undefined);
                              return (
                                <tr key={`${space}-${direction}`}>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    {space}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    {tokenToPixels(space)}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <code>{className}</code>
                                  </td>
                                </tr>
                              );
                            })
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-3">Classes de Gap</h3>
                    <p className="text-mui-text-secondary mb-3">
                      As classes de gap seguem o padrão <code>gap-[tamanho]</code>, onde tamanho é um dos tokens de espaçamento.
                    </p>
                    <CodeBlock 
                      language="jsx"
                      code={`<div className="flex gap-4">
  {/* Seus elementos aqui */}
</div>`}
                    />
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
