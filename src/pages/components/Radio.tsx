
import React, { useState } from 'react';
import Header from '@/components/library-components/Header';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import CodeBlock from '@/components/CodeBlock';

const RadioPage = () => {
  const [selectedOption, setSelectedOption] = useState("option-one");
  
  return (
    <div className="w-full animate-slide-in">
      <div className="mb-12">
        <Header 
          title="Radio"
          description="Radio buttons allow users to select a single option from a list of mutually exclusive options."
          type="components"
          className="mb-6"
        />
        
        <div className="mb-12">
          <h2 className="text-2xl font-medium text-mui-text-primary mb-6">
            Import
          </h2>
          
          <pre className="bg-mui-sidebar p-4 rounded-md overflow-x-auto text-sm">
            <code>import {'{ RadioGroup, RadioGroupItem }'} from "@/components/ui/radio-group";</code>
          </pre>
        </div>
        
        <div className="space-y-12">
          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-medium mb-4">Basic Radio Group</h2>
              <p className="text-gray-600 mb-6">Basic radio group with two options.</p>
              
              <div className="space-y-4 mb-6">
                <div className="max-w-sm">
                  <RadioGroup defaultValue="option-one">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-one" id="r1-option-one" />
                      <Label htmlFor="r1-option-one">Option One</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-two" id="r1-option-two" />
                      <Label htmlFor="r1-option-two">Option Two</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              
              <CodeBlock 
                code={`<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
</RadioGroup>`}
                language="tsx"
                title="Implementação do Radio Group Básico"
                showCode={false}
              />
            </div>
          </div>
          
          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-medium mb-4">Radio Group with Colors</h2>
              <p className="text-gray-600 mb-6">Radio buttons in different colors.</p>
              
              <div className="space-y-4 mb-6">
                <div className="max-w-sm">
                  <RadioGroup defaultValue="option-one">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-one" id="r2-option-one" className="text-primary-main border-primary-main" />
                      <Label htmlFor="r2-option-one">Primary</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-two" id="r2-option-two" className="text-secondary-main border-secondary-main" />
                      <Label htmlFor="r2-option-two">Secondary</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-three" id="r2-option-three" className="text-error-main border-error-main" />
                      <Label htmlFor="r2-option-three">Error</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              
              <CodeBlock 
                code={`<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" className="text-primary-main border-primary-main" />
    <Label htmlFor="option-one">Primary</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" className="text-secondary-main border-secondary-main" />
    <Label htmlFor="option-two">Secondary</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-three" id="option-three" className="text-error-main border-error-main" />
    <Label htmlFor="option-three">Error</Label>
  </div>
</RadioGroup>`}
                language="tsx"
                title="Implementação do Radio Group com Cores"
                showCode={false}
              />
            </div>
          </div>
          
          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-medium mb-4">Horizontal Radio Group</h2>
              <p className="text-gray-600 mb-6">Radio buttons arranged horizontally.</p>
              
              <div className="space-y-4 mb-6">
                <div className="max-w-sm">
                  <RadioGroup defaultValue="option-one" className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-one" id="r3-option-one" />
                      <Label htmlFor="r3-option-one">Option One</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-two" id="r3-option-two" />
                      <Label htmlFor="r3-option-two">Option Two</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-three" id="r3-option-three" />
                      <Label htmlFor="r3-option-three">Option Three</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              
              <CodeBlock 
                code={`<RadioGroup defaultValue="option-one" className="flex space-x-4">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-three" id="option-three" />
    <Label htmlFor="option-three">Option Three</Label>
  </div>
</RadioGroup>`}
                language="tsx"
                title="Implementação do Radio Group Horizontal"
                showCode={false}
              />
            </div>
          </div>

          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-medium mb-4">Disabled Radio Buttons</h2>
              <p className="text-gray-600 mb-6">Radio buttons that cannot be interacted with.</p>
              
              <div className="space-y-4 mb-6">
                <div className="max-w-sm">
                  <RadioGroup defaultValue="option-one">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-one" id="r4-option-one" />
                      <Label htmlFor="r4-option-one">Enabled Option</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-two" id="r4-option-two" disabled />
                      <Label htmlFor="r4-option-two" className="text-muted-foreground">Disabled Option</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              
              <CodeBlock 
                code={`<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Enabled Option</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" disabled />
    <Label htmlFor="option-two" className="text-muted-foreground">Disabled Option</Label>
  </div>
</RadioGroup>`}
                language="tsx"
                title="Implementação de Radio Buttons Desabilitados"
                showCode={false}
              />
            </div>
          </div>
          
          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-medium mb-4">Controlled Radio Group</h2>
              <p className="text-gray-600 mb-6">Radio group with controlled state.</p>
              
              <div className="space-y-4 mb-6">
                <div className="max-w-sm">
                  <RadioGroup value={selectedOption} onValueChange={setSelectedOption}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-one" id="r5-option-one" />
                      <Label htmlFor="r5-option-one">Option One</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-two" id="r5-option-two" />
                      <Label htmlFor="r5-option-two">Option Two</Label>
                    </div>
                  </RadioGroup>
                  
                  <p className="mt-4 text-sm text-mui-text-secondary">Selected value: {selectedOption}</p>
                </div>
              </div>
              
              <CodeBlock 
                code={`const [selectedOption, setSelectedOption] = useState("option-one");

<RadioGroup value={selectedOption} onValueChange={setSelectedOption}>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
</RadioGroup>

<p className="mt-4">Selected value: {selectedOption}</p>`}
                language="tsx"
                title="Implementação do Radio Group Controlado"
                showCode={false}
              />
            </div>
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
                  <TableCell className="font-mono text-mui-text-secondary">string</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">undefined</TableCell>
                  <TableCell className="text-mui-text-secondary">The controlled value of the radio item to check</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">defaultValue</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">string</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">undefined</TableCell>
                  <TableCell className="text-mui-text-secondary">The default value of the radio group</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">onValueChange</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">function</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">undefined</TableCell>
                  <TableCell className="text-mui-text-secondary">Callback when the value changes</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">disabled</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">boolean</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">false</TableCell>
                  <TableCell className="text-mui-text-secondary">When true, prevents the user from interacting with radio items</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">required</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">boolean</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">false</TableCell>
                  <TableCell className="text-mui-text-secondary">When true, indicates that the user must check a radio item before the form can be submitted</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioPage;
