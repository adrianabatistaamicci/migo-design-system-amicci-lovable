
import React from 'react';
import { useParams } from 'react-router-dom';
import ComponentCard from '@/components/ComponentCard';
import CodeBlock from '@/components/CodeBlock';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import ComponentsHeader from '@/components/library-components/ComponentsHeader';
import { Heart, ArrowRight, Save, Check } from 'lucide-react';

const componentData = {
  buttons: {
    title: 'Button',
    description: 'Interactive elements that enable users to trigger actions.',
    api: [
      { prop: 'variant', type: '"default" | "secondary" | "error" | "outline-default" | "outline-secondary" | "outline-error" | "text-default" | "text-secondary" | "text-error"', default: '"default"', description: 'Visual style of the button' },
      { prop: 'size', type: '"default" | "sm" | "lg" | "icon"', default: '"default"', description: 'Size of the button' },
      { prop: 'state', type: '"default" | "hover" | "focus" | "disabled" | "loading"', default: '"default"', description: 'State of the button' },
      { prop: 'disabled', type: 'boolean', default: 'false', description: 'When true, prevents user interaction' },
      { prop: 'isLoading', type: 'boolean', default: 'false', description: 'When true, shows a loading spinner' },
      { prop: 'startIcon', type: 'ReactNode', default: 'undefined', description: 'Icon displayed before the button text' },
      { prop: 'endIcon', type: 'ReactNode', default: 'undefined', description: 'Icon displayed after the button text' },
    ],
    examples: [
      {
        title: 'Botão primário',
        description: 'Botões com aparência elevada no estilo Material UI.',
        component: (
          <div className="flex flex-wrap gap-4">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="error">Error</Button>
          </div>
        ),
        code: `<Button>Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="error">Error</Button>`
      },
      {
        title: 'Botão secundário',
        description: 'Botões com contorno para ações menos pronunciadas.',
        component: (
          <div className="flex flex-wrap gap-4">
            <Button variant="outline-default">Default</Button>
            <Button variant="outline-secondary">Secondary</Button>
            <Button variant="outline-error">Error</Button>
          </div>
        ),
        code: `<Button variant="outline-default">Default</Button>
<Button variant="outline-secondary">Secondary</Button>
<Button variant="outline-error">Error</Button>`
      },
      {
        title: 'Botão terciário',
        description: 'Botões sem fundo ou contorno para ações sutis.',
        component: (
          <div className="flex flex-wrap gap-4">
            <Button variant="text-default">Default</Button>
            <Button variant="text-secondary">Secondary</Button>
            <Button variant="text-error">Error</Button>
          </div>
        ),
        code: `<Button variant="text-default">Default</Button>
<Button variant="text-secondary">Secondary</Button>
<Button variant="text-error">Error</Button>`
      },
      {
        title: 'Button Sizes',
        description: 'Different button sizes for various contexts.',
        component: (
          <div className="flex items-center flex-wrap gap-4">
            <Button size="sm">Small</Button>
            <Button>Default</Button>
            <Button size="lg">Large</Button>
          </div>
        ),
        code: `<Button size="sm">Small</Button>
<Button>Default</Button>
<Button size="lg">Large</Button>`
      },
      {
        title: 'Button States',
        description: 'Different button states.',
        component: (
          <div className="flex flex-wrap gap-4">
            <Button>Default</Button>
            <Button disabled>Disabled</Button>
            <Button isLoading>Loading</Button>
          </div>
        ),
        code: `<Button>Default</Button>
<Button disabled>Disabled</Button>
<Button isLoading>Loading</Button>`
      },
      {
        title: 'Buttons with Icons',
        description: 'Buttons with start and end icons.',
        component: (
          <div className="flex flex-wrap gap-4">
            <Button startIcon={<Heart size={18} />}>Like</Button>
            <Button endIcon={<ArrowRight size={18} />}>Next</Button>
            <Button startIcon={<Save size={18} />} endIcon={<Check size={18} />}>Save</Button>
          </div>
        ),
        code: `<Button startIcon={<Heart size={18} />}>Like</Button>
<Button endIcon={<ArrowRight size={18} />}>Next</Button>
<Button startIcon={<Save size={18} />} endIcon={<Check size={18} />}>Save</Button>`
      },
    ]
  },
  input: {
    title: 'Input',
    description: 'Form control that allows users to enter text data.',
    api: [
      { prop: 'type', type: 'string', default: '"text"', description: 'Type of the input field' },
      { prop: 'disabled', type: 'boolean', default: 'false', description: 'When true, prevents user interaction' },
      { prop: 'placeholder', type: 'string', default: '""', description: 'Placeholder text' },
    ],
    examples: [
      {
        title: 'Basic Input',
        description: 'Standard text input field.',
        component: (
          <Input placeholder="Enter your name" className="max-w-sm" />
        ),
        code: `<Input placeholder="Enter your name" />`
      },
      {
        title: 'Input States',
        description: 'Different states of the input component.',
        component: (
          <div className="flex flex-col gap-4 max-w-sm">
            <Input placeholder="Default input" />
            <Input placeholder="Disabled input" disabled />
          </div>
        ),
        code: `<Input placeholder="Default input" />
<Input placeholder="Disabled input" disabled />`
      },
    ]
  },
  radiogroup: {
    title: 'Radio Group',
    description: 'A set of radio buttons where only one can be selected at a time.',
    api: [
      { prop: 'value', type: 'string', default: 'undefined', description: 'The selected value' },
      { prop: 'defaultValue', type: 'string', default: 'undefined', description: 'Default value (uncontrolled)' },
      { prop: 'onValueChange', type: 'function', default: 'undefined', description: 'Callback when value changes' },
    ],
    examples: [
      {
        title: 'Basic Radio Group',
        description: 'Standard radio button group.',
        component: (
          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Option One</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">Option Two</Label>
            </div>
          </RadioGroup>
        ),
        code: `<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
</RadioGroup>`
      },
    ]
  },
};

const ComponentDetail = () => {
  const { componentId } = useParams<{ componentId: string }>();
  
  const component = componentId ? componentData[componentId as keyof typeof componentData] : null;
  
  if (!component) {
    return (
      <div className="py-8 w-full">
        <h1 className="text-2xl font-medium text-mui-text-primary mb-4">
          Component Not Found
        </h1>
        <p className="text-mui-text-secondary">
          The component you're looking for doesn't exist or hasn't been documented yet.
        </p>
      </div>
    );
  }
  
  return (
    <div className="animate-slide-in w-full">
      <div className="w-full">
        <ComponentsHeader 
          title={component.title} 
          description={component.description} 
        />
        
        <div className="mb-12">
          <h2 className="text-2xl font-medium text-mui-text-primary mb-6">
            Import
          </h2>
          
          <CodeBlock 
            code={`import { ${component.title} } from "@/components/ui/${component.title.toLowerCase()}";`}
            language="jsx"
          />
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-medium text-mui-text-primary mb-6">
            Examples
          </h2>
          
          <div className="space-y-8">
            {component.examples.map((example, index) => (
              <ComponentCard
                key={index}
                title={example.title}
                description={example.description}
                code={example.code}
              >
                {example.component}
              </ComponentCard>
            ))}
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-medium text-mui-text-primary mb-6">
            API Reference
          </h2>
          
          <div className="border border-mui-border rounded-lg overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-mui-sidebar">
                  <TableHead className="w-[15%]">Prop</TableHead>
                  <TableHead className="w-[45%]">Type</TableHead>
                  <TableHead className="w-[15%]">Default</TableHead>
                  <TableHead className="w-[25%]">Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {component.api.map((prop, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-mono text-mui-text-primary">{prop.prop}</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary break-words">{prop.type}</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">{prop.default}</TableCell>
                    <TableCell className="text-mui-text-secondary">{prop.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentDetail;
