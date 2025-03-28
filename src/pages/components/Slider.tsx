
/**
 * @protected
 * ATENÇÃO: Este arquivo contém conteúdo finalizado e aprovado.
 * Não deve ser alterado diretamente pelo assistente AI.
 * Apenas atualizações de componentes devem ser refletidas.
 */

import React, { useState } from 'react';
import CodeBlock from '@/components/CodeBlock';
import { Slider } from '@/components/ui/slider';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import Header from '@/components/library-components/Header';

const SliderPage = () => {
  const [value, setValue] = useState([50]);
  
  return (
    <div className="w-full animate-slide-in">
      <Header 
        title="Slider" 
        description="Slider allows users to make selections from a range of values."
        type="components"
      />
      
      <div className="mb-12">
        <div className="mb-12">
          <h2 className="text-2xl font-medium text-mui-text-primary mb-6">
            Import
          </h2>
          
          <pre className="bg-mui-sidebar p-4 rounded-md overflow-x-auto text-sm">
            <code>import {'{ Slider }'} from "@/components/ui/slider";</code>
          </pre>
        </div>
        
        <div className="space-y-12">
          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-medium mb-4">Basic Slider</h2>
              <div className="max-w-sm py-6">
                <Slider defaultValue={[50]} max={100} step={1} />
              </div>
            </div>
            <CodeBlock 
              code={`<Slider defaultValue={[50]} max={100} step={1} />`}
              language="tsx"
              title="Implementação do Slider Básico"
              showCode={false}
            />
          </div>
          
          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-medium mb-4">Slider with Custom Colors</h2>
              <div className="max-w-sm space-y-8 py-6">
                <Slider defaultValue={[30]} max={100} color="primary" />
                <Slider defaultValue={[40]} max={100} color="secondary" />
                <Slider defaultValue={[60]} max={100} color="error" />
                <Slider defaultValue={[70]} max={100} color="success" />
              </div>
            </div>
            <CodeBlock 
              code={`<div className="space-y-8">
  <Slider defaultValue={[30]} max={100} color="primary" />
  <Slider defaultValue={[40]} max={100} color="secondary" />
  <Slider defaultValue={[60]} max={100} color="error" />
  <Slider defaultValue={[70]} max={100} color="success" />
</div>`}
              language="tsx"
              title="Implementação de Sliders com Cores Personalizadas"
              showCode={false}
            />
          </div>
          
          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-medium mb-4">Slider with Marks</h2>
              <div className="max-w-sm py-10">
                <Slider 
                  defaultValue={[50]} 
                  max={100}
                  marks={[
                    { value: 0, label: '0%' },
                    { value: 25, label: '25%' },
                    { value: 50, label: '50%' },
                    { value: 75, label: '75%' },
                    { value: 100, label: '100%' }
                  ]}
                />
              </div>
            </div>
            <CodeBlock 
              code={`<Slider 
  defaultValue={[50]} 
  max={100}
  marks={[
    { value: 0, label: '0%' },
    { value: 25, label: '25%' },
    { value: 50, label: '50%' },
    { value: 75, label: '75%' },
    { value: 100, label: '100%' }
  ]}
/>`}
              language="tsx"
              title="Implementação de Slider com Marcadores"
              showCode={false}
            />
          </div>
          
          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-medium mb-4">Range Slider</h2>
              <div className="max-w-sm py-6">
                <Slider 
                  defaultValue={[25, 75]} 
                  max={100}
                />
              </div>
            </div>
            <CodeBlock 
              code={`<Slider 
  defaultValue={[25, 75]} 
  max={100}
/>`}
              language="tsx"
              title="Implementação de Range Slider"
              showCode={false}
            />
          </div>
          
          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-medium mb-4">Slider with Value Display</h2>
              <div className="max-w-sm py-6">
                <Slider 
                  value={value}
                  onValueChange={setValue}
                  max={100}
                  valueLabelDisplay="auto" 
                />
                
                <p className="mt-4 text-sm text-mui-text-secondary">Selected value: {value}</p>
              </div>
            </div>
            <CodeBlock 
              code={`const [value, setValue] = useState([50]);

<Slider 
  value={value}
  onValueChange={setValue}
  max={100}
  valueLabelDisplay="auto" 
/>

<p className="mt-4">Selected value: {value}</p>`}
              language="tsx"
              title="Implementação de Slider com Exibição de Valor"
              showCode={false}
            />
          </div>
          
          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-medium mb-4">Slider Sizes</h2>
              <div className="max-w-sm space-y-8 py-6">
                <Slider defaultValue={[50]} max={100} size="sm" />
                <Slider defaultValue={[50]} max={100} size="md" />
                <Slider defaultValue={[50]} max={100} size="lg" />
              </div>
            </div>
            <CodeBlock 
              code={`<div className="space-y-8">
  <Slider defaultValue={[50]} max={100} size="sm" />
  <Slider defaultValue={[50]} max={100} size="md" />
  <Slider defaultValue={[50]} max={100} size="lg" />
</div>`}
              language="tsx"
              title="Implementação de Sliders com Diferentes Tamanhos"
              showCode={false}
            />
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-medium text-mui-text-primary mb-6">
            API Reference
          </h2>
          
          <div className="border border-mui-border rounded-lg overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-mui-sidebar">
                  <TableHead className="w-1/4">Prop</TableHead>
                  <TableHead className="w-1/4">Type</TableHead>
                  <TableHead className="w-1/4">Default</TableHead>
                  <TableHead className="w-1/4">Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">value</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">number[]</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">undefined</TableCell>
                  <TableCell className="text-mui-text-secondary">The controlled value of the slider</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">defaultValue</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">number[]</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">[0]</TableCell>
                  <TableCell className="text-mui-text-secondary">The default value of the slider</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">min</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">number</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">0</TableCell>
                  <TableCell className="text-mui-text-secondary">The minimum value of the slider</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">max</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">number</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">100</TableCell>
                  <TableCell className="text-mui-text-secondary">The maximum value of the slider</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">step</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">number</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">1</TableCell>
                  <TableCell className="text-mui-text-secondary">The step increment value</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">color</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">"primary" | "secondary" | "error" | "info" | "success" | "warning"</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">"primary"</TableCell>
                  <TableCell className="text-mui-text-secondary">The color of the slider</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">marks</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">{"{ value: number; label?: string }[]"}</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">undefined</TableCell>
                  <TableCell className="text-mui-text-secondary">Marks to display on the slider track</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">valueLabelDisplay</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">"auto" | "on" | "off"</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">"off"</TableCell>
                  <TableCell className="text-mui-text-secondary">When to display the value label</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">size</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">"sm" | "md" | "lg"</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">"md"</TableCell>
                  <TableCell className="text-mui-text-secondary">The size of the slider</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderPage;
