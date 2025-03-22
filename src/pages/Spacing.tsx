
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { tokenToPixels, pixelsToToken, getSpacingClass } from '@/utils/spacingUtils';
import { cn } from '@/lib/utils';
import { Chip } from '@/components/ui/chip';
import ComponentCard from '@/components/ComponentCard';
import Header from '@/components/library-components/Header';
import CodeBlock from '@/components/CodeBlock';

const SpacingPage = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header title="Stacked Layouts" description="Nosso sistema de espaçamento fornece tamanhos consistentes que ajudam a criar ritmo visual e hierarquia."" type="components" />

      <Tabs defaultValue="scale" className="mt-8">
        <TabsList className="mb-4 bg-gray-100 p-1 rounded-lg">
          <TabsTrigger value="scale">Escala</TabsTrigger>
          <TabsTrigger value="usage">Uso</TabsTrigger>
          <TabsTrigger value="utilities">Utilitários</TabsTrigger>
          <TabsTrigger value="examples">Exemplos</TabsTrigger>
        </TabsList>
        
        <TabsContent value="scale" className="space-y-6">
          <ComponentCard title="Sistema de Espaçamento" description="Nosso sistema de espaçamento é baseado em múltiplos de 4px para garantir consistência em toda a interface.">
            <p className="text-mui-text-secondary mb-6">
              Utilizamos uma escala de espaçamento consistente para criar ritmo visual e hierarquia em nossa interface. Todos os valores são múltiplos de 4px, o que facilita a criação de layouts harmoniosos e responsivos.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries({
                'space-0': 0,
                'space-1': 4,
                'space-2': 8,
                'space-3': 12,
                'space-4': 16,
                'space-5': 20,
                'space-6': 24,
                'space-8': 32,
                'space-10': 40,
                'space-12': 48,
                'space-16': 64,
                'space-20': 80,
                'space-24': 96,
                'space-32': 128,
                'space-40': 160,
                'space-48': 192,
                'space-56': 224,
                'space-64': 256,
              }).map(([token, pixelValue]) => (
                <div key={token} className="rounded-lg border p-4">
                  <h3 className="text-lg font-semibold">{token}</h3>
                  <p className="text-sm text-muted-foreground">{pixelValue}px</p>
                  <div className="mt-4 h-12 bg-primary-light rounded-md" style={{ width: '100%', height: pixelValue }} />
                </div>
              ))}
            </div>
          </ComponentCard>
        </TabsContent>
        
        <TabsContent value="usage">
          <div className="space-y-4 mt-6">
            <p>
              Use spacing tokens in your components to maintain consistency.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Margin</h3>
                <p className="text-sm text-muted-foreground">Add space around elements.</p>
                <div className="mt-2 p-3 border rounded-md">
                  <div className="bg-green-100 p-4">
                    <div className="bg-blue-100 m-4 p-4">Content with margin</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Padding</h3>
                <p className="text-sm text-muted-foreground">Add space within elements.</p>
                <div className="mt-2 p-3 border rounded-md">
                  <div className="bg-green-100 p-4">
                    <div className="bg-blue-100 p-4">Content with padding</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="utilities" className="space-y-6">
          <ComponentCard title="Utilitários de Espaçamento" description="Nosso design system usa utilidades de margin e padding consistentes baseadas em nossa escala de espaçamento.">
            <div className="space-y-6">
              <h3 className="text-lg font-medium">Classes de Margin</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Use classes de margin para adicionar espaço ao redor de elementos. As classes seguem o padrão <code>m{'{direção}'}-{'{tamanho}'}</code>.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-md font-medium mb-2">Direções de Margin</h4>
                  <ul className="space-y-2 text-sm">
                    <li><code className="px-2 py-1 bg-gray-100 rounded">m-*</code> - Margin em todos os lados</li>
                    <li><code className="px-2 py-1 bg-gray-100 rounded">mt-*</code> - Margin top</li>
                    <li><code className="px-2 py-1 bg-gray-100 rounded">mr-*</code> - Margin right</li>
                    <li><code className="px-2 py-1 bg-gray-100 rounded">mb-*</code> - Margin bottom</li>
                    <li><code className="px-2 py-1 bg-gray-100 rounded">ml-*</code> - Margin left</li>
                    <li><code className="px-2 py-1 bg-gray-100 rounded">mx-*</code> - Margin horizontal (left e right)</li>
                    <li><code className="px-2 py-1 bg-gray-100 rounded">my-*</code> - Margin vertical (top e bottom)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-md font-medium mb-2">Exemplos</h4>
                  <div className="space-y-4">
                    <div className="border rounded p-4">
                      <div className="border-2 border-dashed border-primary-main p-2">
                        <div className="bg-primary-light mt-4 p-4 text-center">mt-4</div>
                      </div>
                    </div>
                    <div className="border rounded p-4">
                      <div className="border-2 border-dashed border-primary-main p-2">
                        <div className="bg-primary-light mb-8 p-4 text-center">mb-8</div>
                      </div>
                    </div>
                    <div className="border rounded p-4">
                      <div className="border-2 border-dashed border-primary-main p-2">
                        <div className="bg-primary-light mx-6 p-4 text-center">mx-6</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator className="my-8" />

              <h3 className="text-lg font-medium">Classes de Padding</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Use classes de padding para adicionar espaço dentro de elementos. As classes seguem o padrão <code>p{'{direção}'}-{'{tamanho}'}</code>.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-md font-medium mb-2">Direções de Padding</h4>
                  <ul className="space-y-2 text-sm">
                    <li><code className="px-2 py-1 bg-gray-100 rounded">p-*</code> - Padding em todos os lados</li>
                    <li><code className="px-2 py-1 bg-gray-100 rounded">pt-*</code> - Padding top</li>
                    <li><code className="px-2 py-1 bg-gray-100 rounded">pr-*</code> - Padding right</li>
                    <li><code className="px-2 py-1 bg-gray-100 rounded">pb-*</code> - Padding bottom</li>
                    <li><code className="px-2 py-1 bg-gray-100 rounded">pl-*</code> - Padding left</li>
                    <li><code className="px-2 py-1 bg-gray-100 rounded">px-*</code> - Padding horizontal (left e right)</li>
                    <li><code className="px-2 py-1 bg-gray-100 rounded">py-*</code> - Padding vertical (top e bottom)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-md font-medium mb-2">Exemplos</h4>
                  <div className="space-y-4">
                    <div className="border rounded">
                      <div className="bg-gray-100 pt-6 border-2 border-primary-main text-center">pt-6</div>
                    </div>
                    <div className="border rounded">
                      <div className="bg-gray-100 px-8 border-2 border-primary-main text-center">px-8</div>
                    </div>
                    <div className="border rounded">
                      <div className="bg-gray-100 p-4 border-2 border-primary-main text-center">p-4</div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator className="my-8" />

              <h3 className="text-lg font-medium">Utilitários de Gap</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Use classes de gap para espaçamento entre elementos em layouts grid ou flex.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-md font-medium mb-2">Tipos de Gap</h4>
                  <ul className="space-y-2 text-sm">
                    <li><code className="px-2 py-1 bg-gray-100 rounded">gap-*</code> - Gap em ambas direções</li>
                    <li><code className="px-2 py-1 bg-gray-100 rounded">gap-x-*</code> - Gap horizontal</li>
                    <li><code className="px-2 py-1 bg-gray-100 rounded">gap-y-*</code> - Gap vertical</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-md font-medium mb-2">Exemplo</h4>
                  <div className="border rounded p-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-primary-light p-4 text-center">1</div>
                      <div className="bg-primary-light p-4 text-center">2</div>
                      <div className="bg-primary-light p-4 text-center">3</div>
                      <div className="bg-primary-light p-4 text-center">4</div>
                      <div className="bg-primary-light p-4 text-center">5</div>
                      <div className="bg-primary-light p-4 text-center">6</div>
                    </div>
                    <p className="text-center mt-4 text-sm text-muted-foreground">gap-4</p>
                  </div>
                </div>
              </div>
            </div>
          </ComponentCard>

          <ComponentCard title="Usando Utilitários em Código" description="Como implementar os utilitários de espaçamento em seu código.">
            <div className="space-y-6">
              <h3 className="text-lg font-medium">Exemplos de Código</h3>
              <p className="text-muted-foreground mb-4">
                Veja como usar classes de espaçamento em componentes React com Tailwind CSS:
              </p>

              <CodeBlock 
                title="Button com padding"
                language="jsx"
                code={`function Button({ children }) {
  return (
    <button className="px-4 py-2 bg-primary-main text-white rounded">
      {children}
    </button>
  );
}`}
              />

              <CodeBlock 
                title="Card com margin e padding"
                language="jsx"
                code={`function Card({ title, content }) {
  return (
    <div className="m-4 p-6 rounded-lg border shadow-sm">
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground">{content}</p>
    </div>
  );
}`}
              />

              <CodeBlock 
                title="Usando a função utilitária getSpacingClass"
                language="jsx"
                code={`import { getSpacingClass } from '@/utils/spacingUtils';

function FlexContainer({ children, spacing = 4 }) {
  const gapClass = getSpacingClass('gap', spacing);
  
  return (
    <div className={\`flex flex-wrap \${gapClass}\`}>
      {children}
    </div>
  );
}`}
              />
            </div>
          </ComponentCard>
        </TabsContent>
        
        <TabsContent value="examples">
          <div className="space-y-4 mt-6">
            <p>
              Here are some examples of how to use spacing tokens in your components:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Buttons</h3>
                <div className="flex gap-2">
                  <button className="bg-primary-main text-primary-contrast px-4 py-2 rounded-md">
                    Button 1
                  </button>
                  <button className="bg-secondary-main text-secondary-contrast px-8 py-4 rounded-md">
                    Button 2
                  </button>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Cards</h3>
                <div className="border rounded-md p-4">
                  <h4 className="text-md font-medium">Card Title</h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    Card description goes here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SpacingPage;
