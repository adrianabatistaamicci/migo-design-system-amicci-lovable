
import React, { useState } from 'react';
import ComponentCard from '@/components/ComponentCard';
import { Slider } from '@/components/ui/slider';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';

const SliderPage = () => {
  const [value, setValue] = useState([50]);
  
  return (
    <div className="w-full animate-slide-in">
      <div className="mb-12">
        <div className="flex items-center gap-2 text-sm text-mui-primary font-medium mb-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-mui-primary/10 text-mui-primary">
            Component
          </span>
        </div>
        
        <h1 className="text-4xl font-medium text-mui-text-primary mb-4">
          Slider
        </h1>
        
        <p className="text-xl text-mui-text-secondary mb-8">
          Slider allows users to make selections from a range of values.
        </p>
        
        <div className="mb-12">
          <h2 className="text-2xl font-medium text-mui-text-primary mb-6">
            Import
          </h2>
          
          <pre className="bg-mui-sidebar p-4 rounded-md overflow-x-auto text-sm">
            <code>import {'{ Slider }'} from "@/components/ui/slider";</code>
          </pre>
        </div>
        
        <div className="space-y-12">
          <ComponentCard 
            title="Basic Slider" 
            description="A simple slider component."
            code={`<Slider defaultValue={[50]} max={100} step={1} />
`}
          >
            <div className="max-w-sm py-6">
              <Slider defaultValue={[50]} max={100} step={1} />
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Slider with Custom Colors" 
            description="Slider components with different color variants."
            code={`<div className="space-y-8">
  <Slider defaultValue={[30]} max={100} color="primary" />
  <Slider defaultValue={[40]} max={100} color="secondary" />
  <Slider defaultValue={[60]} max={100} color="error" />
  <Slider defaultValue={[70]} max={100} color="success" />
</div>`}
          >
            <div className="max-w-sm space-y-8 py-6">
              <Slider defaultValue={[30]} max={100} color="primary" />
              <Slider defaultValue={[40]} max={100} color="secondary" />
              <Slider defaultValue={[60]} max={100} color="error" />
              <Slider defaultValue={[70]} max={100} color="success" />
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Slider with Marks" 
            description="A slider with marks to indicate specific values."
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
/>
`}
          >
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
          </ComponentCard>
          
          <ComponentCard 
            title="Range Slider" 
            description="A slider that allows selecting a range between two values."
            code={`<Slider 
  defaultValue={[25, 75]} 
  max={100}
/>
`}
          >
            <div className="max-w-sm py-6">
              <Slider 
                defaultValue={[25, 75]} 
                max={100}
              />
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Slider with Value Display" 
            description="A slider that displays its current value."
            code={`const [value, setValue] = useState([50]);

<Slider 
  value={value}
  onValueChange={setValue}
  max={100}
  valueLabelDisplay="auto" 
/>

<p className="mt-4">Selected value: {value}</p>
`}
          >
            <div className="max-w-sm py-6">
              <Slider 
                value={value}
                onValueChange={setValue}
                max={100}
                valueLabelDisplay="auto" 
              />
              
              <p className="mt-4 text-sm text-mui-text-secondary">Selected value: {value}</p>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Slider Sizes" 
            description="Sliders in different sizes."
            code={`<div className="space-y-8">
  <Slider defaultValue={[50]} max={100} size="sm" />
  <Slider defaultValue={[50]} max={100} size="md" />
  <Slider defaultValue={[50]} max={100} size="lg" />
</div>
`}
          >
            <div className="max-w-sm space-y-8 py-6">
              <Slider defaultValue={[50]} max={100} size="sm" />
              <Slider defaultValue={[50]} max={100} size="md" />
              <Slider defaultValue={[50]} max={100} size="lg" />
            </div>
          </ComponentCard>
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
                  <TableCell className="font-mono text-mui-text-secondary">{ value: number; label?: string }[]</TableCell>
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
