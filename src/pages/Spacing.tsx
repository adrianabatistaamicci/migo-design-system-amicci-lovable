
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import ComponentCard from '@/components/ComponentCard';

const SpacingPage = () => {
  return (
    <div className="w-full py-10 animate-fade-in">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Spacing</h1>
        <p className="text-mui-text-secondary max-w-3xl">
          O sistema de espaçamento é uma ferramenta que ajuda a criar layouts consistentes com espaços uniformes entre elementos. Ele usa valores predefinidos de espaçamento para manter a consistência visual em todo o design.
        </p>
      </div>

      <Tabs defaultValue="overview" className="mt-8">
        <TabsList>
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="usage">Uso</TabsTrigger>
          <TabsTrigger value="tokens">Tokens</TabsTrigger>
          <TabsTrigger value="customization">Customização</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6 mt-6">
          <ComponentCard
            title="Teoria"
            description="O espaçamento é fundamental para o equilíbrio e hierarquia"
          >
            <div className="p-6 bg-gray-50 rounded-lg space-y-4">
              <p>O sistema de espaçamento do design system utiliza uma escala que segue uma sequência previsível para criar um design harmonioso e consistente.</p>
              
              <div className="flex flex-col gap-4 mt-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary-main flex items-center justify-center text-white font-medium">4px</div>
                  <div className="flex-1">
                    <p className="font-medium">Unidade base (0.25rem)</p>
                    <p className="text-mui-text-secondary text-sm">A menor unidade de espaçamento no sistema</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary-main flex items-center justify-center text-white font-medium">8px</div>
                  <div className="flex-1">
                    <p className="font-medium">Unidade padrão (0.5rem)</p>
                    <p className="text-mui-text-secondary text-sm">Espaçamento padrão entre elementos relacionados</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary-main flex items-center justify-center text-white font-medium">Múltiplos</div>
                  <div className="flex-1">
                    <p className="font-medium">Escala progressiva</p>
                    <p className="text-mui-text-secondary text-sm">Os valores de espaçamento seguem múltiplos de 4px (4, 8, 12, 16, 24, 32, 48, 64, 96, 128, etc.)</p>
                  </div>
                </div>
              </div>
            </div>
          </ComponentCard>

          <ComponentCard
            title="Sistema de espaçamento"
            description="O espaçamento usa uma escala baseada em múltiplos de 4px"
          >
            <div className="p-6">
              <div className="flex flex-wrap gap-6">
                {[1, 2, 3, 4, 6, 8, 12, 16, 24, 32].map(value => (
                  <div key={value} className="flex flex-col items-center">
                    <div className={`bg-primary-main text-white flex items-center justify-center`} 
                      style={{ width: `${value * 4}px`, height: `${value * 4}px` }}>
                    </div>
                    <span className="text-xs mt-2">{value}</span>
                    <span className="text-xs text-mui-text-secondary">{value * 4}px</span>
                  </div>
                ))}
              </div>
            </div>
          </ComponentCard>
        </TabsContent>

        <TabsContent value="usage" className="space-y-6 mt-6">
          <ComponentCard
            title="Usando espaçamento no Tailwind"
            description="Utilize as classes utilitárias do Tailwind para aplicar espaçamento"
          >
            <div className="p-6 space-y-8">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Margin (m)</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="bg-gray-200 p-4 relative mb-6">
                    <div className="bg-primary-main text-white p-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Elemento</div>
                    <div className="absolute top-0 left-0 w-full h-full border-4 border-dashed border-orange-400 pointer-events-none"></div>
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-orange-500 font-mono text-sm">m-4 (1rem / 16px)</div>
                  </div>
                  <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-x-auto">
                    <code>{`<div className="m-4">Elemento com margin em todos os lados</div>`}</code>
                  </pre>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Padding (p)</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="bg-gray-200 relative mb-6">
                    <div className="bg-primary-main text-white p-2 m-6">Elemento</div>
                    <div className="absolute top-6 left-6 w-[calc(100%-48px)] h-[calc(100%-48px)] border-4 border-dashed border-purple-400 pointer-events-none"></div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-purple-500 font-mono text-sm">p-6 (1.5rem / 24px)</div>
                  </div>
                  <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-x-auto">
                    <code>{`<div className="p-6">Elemento com padding interno</div>`}</code>
                  </pre>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Gap</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex flex-wrap gap-4 mb-6">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="bg-primary-main text-white p-4">Item {i}</div>
                    ))}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-indigo-500 font-mono text-sm">gap-4 (1rem / 16px)</div>
                  </div>
                  <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-x-auto">
                    <code>{`<div className="flex gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </ComponentCard>

          <ComponentCard
            title="Direções de espaçamento"
            description="Applique espaçamento em direções específicas"
          >
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-4">Margin</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="font-mono w-16">m-4</span>
                    <span className="text-mui-text-secondary">Margin em todos os lados</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-mono w-16">mx-4</span>
                    <span className="text-mui-text-secondary">Margin horizontal (left + right)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-mono w-16">my-4</span>
                    <span className="text-mui-text-secondary">Margin vertical (top + bottom)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-mono w-16">mt-4</span>
                    <span className="text-mui-text-secondary">Margin top</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-mono w-16">mr-4</span>
                    <span className="text-mui-text-secondary">Margin right</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-mono w-16">mb-4</span>
                    <span className="text-mui-text-secondary">Margin bottom</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-mono w-16">ml-4</span>
                    <span className="text-mui-text-secondary">Margin left</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Padding</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="font-mono w-16">p-4</span>
                    <span className="text-mui-text-secondary">Padding em todos os lados</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-mono w-16">px-4</span>
                    <span className="text-mui-text-secondary">Padding horizontal (left + right)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-mono w-16">py-4</span>
                    <span className="text-mui-text-secondary">Padding vertical (top + bottom)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-mono w-16">pt-4</span>
                    <span className="text-mui-text-secondary">Padding top</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-mono w-16">pr-4</span>
                    <span className="text-mui-text-secondary">Padding right</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-mono w-16">pb-4</span>
                    <span className="text-mui-text-secondary">Padding bottom</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-mono w-16">pl-4</span>
                    <span className="text-mui-text-secondary">Padding left</span>
                  </div>
                </div>
              </div>
            </div>
          </ComponentCard>
        </TabsContent>

        <TabsContent value="tokens" className="space-y-6 mt-6">
          <ComponentCard
            title="Tokens de espaçamento"
            description="Tokens de design para espaçamento consistente na aplicação"
          >
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 p-3 text-left">Token</th>
                    <th className="border border-gray-200 p-3 text-left">Valor</th>
                    <th className="border border-gray-200 p-3 text-left">Pixels</th>
                    <th className="border border-gray-200 p-3 text-left">Visualização</th>
                    <th className="border border-gray-200 p-3 text-left">Uso recomendado</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'space-0', value: '0', pixels: '0px', usage: 'Sem espaçamento' },
                    { name: 'space-1', value: '0.25rem', pixels: '4px', usage: 'Espaçamento mínimo entre elementos' },
                    { name: 'space-2', value: '0.5rem', pixels: '8px', usage: 'Espaçamento padrão entre elementos relacionados' },
                    { name: 'space-3', value: '0.75rem', pixels: '12px', usage: 'Espaçamento entre elementos de um grupo' },
                    { name: 'space-4', value: '1rem', pixels: '16px', usage: 'Espaçamento entre grupos de elementos' },
                    { name: 'space-6', value: '1.5rem', pixels: '24px', usage: 'Espaçamento entre seções relacionadas' },
                    { name: 'space-8', value: '2rem', pixels: '32px', usage: 'Espaçamento entre seções principais' },
                    { name: 'space-12', value: '3rem', pixels: '48px', usage: 'Espaçamento entre blocos de conteúdo' },
                    { name: 'space-16', value: '4rem', pixels: '64px', usage: 'Espaçamento entre componentes principais' },
                    { name: 'space-24', value: '6rem', pixels: '96px', usage: 'Espaçamento entre seções de página' },
                    { name: 'space-32', value: '8rem', pixels: '128px', usage: 'Espaçamento grande entre blocos de conteúdo' },
                  ].map((space) => (
                    <tr key={space.name} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="border border-gray-200 p-3 font-mono">{space.name}</td>
                      <td className="border border-gray-200 p-3">{space.value}</td>
                      <td className="border border-gray-200 p-3">{space.pixels}</td>
                      <td className="border border-gray-200 p-3">
                        <div className="flex items-center">
                          <div className="h-8 bg-primary-main" style={{ width: space.pixels }}></div>
                        </div>
                      </td>
                      <td className="border border-gray-200 p-3 text-mui-text-secondary text-sm">{space.usage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ComponentCard>

          <ComponentCard
            title="Visualização de escala"
            description="Representação visual da escala de espaçamento"
          >
            <div className="p-6 space-y-6">
              <div className="flex flex-col space-y-8">
                {[
                  { name: 'space-2', size: '8px' },
                  { name: 'space-4', size: '16px' },
                  { name: 'space-6', size: '24px' },
                  { name: 'space-8', size: '32px' },
                  { name: 'space-12', size: '48px' },
                  { name: 'space-16', size: '64px' }
                ].map((space, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-24 text-sm font-mono">{space.name}</div>
                    <div className="flex items-center grow">
                      <div className="bg-primary-main h-10" style={{ width: space.size }}></div>
                      <div className="ml-4 text-sm text-mui-text-secondary">{space.size}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ComponentCard>
        </TabsContent>

        <TabsContent value="customization" className="space-y-6 mt-6">
          <ComponentCard
            title="Customização do sistema de espaçamento"
            description="Como estender ou modificar o sistema de espaçamento para seu projeto"
            code={`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      spacing: {
        // Adicionar ou substituir valores de espaçamento
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      }
    }
  }
}`}
          >
            <div className="p-6 space-y-4">
              <p>O sistema de espaçamento pode ser customizado no arquivo <code>tailwind.config.js</code>, permitindo adicionar novos valores ou modificar os existentes.</p>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Casos comuns de customização:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Adicionar valores maiores para layouts específicos</li>
                  <li>Adicionar valores fracionados para ajustes finos</li>
                  <li>Modificar a escala base para alinhar com outras guidelines de design</li>
                </ul>
              </div>
              
              <p className="mt-4">Para aplicações que requerem consistência absoluta, recomendamos definir valores personalizados como variáveis CSS e reutilizá-los:</p>
              
              <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-x-auto mt-2">
                <code>{`:root {
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;
  --spacing-3xl: 4rem;
}`}</code>
              </pre>
            </div>
          </ComponentCard>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SpacingPage;
