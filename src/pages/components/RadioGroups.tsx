
import React, { useState } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import Header from '@/components/library-components/Header';
import CodeBlock from '@/components/CodeBlock';

const RadioGroupsPage = () => {
  const [selectedOption, setSelectedOption] = useState("option-one");
  const [selectedPayment, setSelectedPayment] = useState("card");
  const [selectedColor, setSelectedColor] = useState("red");
  const [selectedSize, setSelectedSize] = useState("m");
  
  return (
    <div className="w-full animate-slide-in">
      <div className="mb-12">
        <Header 
          title="Radio Group"
          description="Radio groups allow users to select a single option from a list of mutually exclusive options."
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
              <h3 className="text-lg font-medium mb-4">Basic Radio Group</h3>
              <div className="p-6">
                <RadioGroup 
                  value={selectedOption} 
                  onValueChange={setSelectedOption}
                  className="space-y-2"
                >
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
                </RadioGroup>
              </div>
            </div>
            <CodeBlock 
              code={`const [selectedOption, setSelectedOption] = useState("option-one");

<RadioGroup 
  value={selectedOption} 
  onValueChange={setSelectedOption}
  className="space-y-2"
>
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
              language="jsx"
              title="Implementation of Basic Radio Group"
            />
          </div>
          
          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-medium mb-4">Payment Method Selection</h3>
              <div className="p-6">
                <RadioGroup 
                  value={selectedPayment} 
                  onValueChange={setSelectedPayment}
                  className="space-y-4"
                >
                  <div className="flex items-start space-x-3">
                    <RadioGroupItem value="card" id="card" className="mt-1" />
                    <div>
                      <Label htmlFor="card" className="text-base font-medium">Card Payment</Label>
                      <p className="text-sm text-gray-500">Pay with your credit or debit card.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <RadioGroupItem value="paypal" id="paypal" className="mt-1" />
                    <div>
                      <Label htmlFor="paypal" className="text-base font-medium">PayPal</Label>
                      <p className="text-sm text-gray-500">Pay with your PayPal account.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <RadioGroupItem value="bank" id="bank" className="mt-1" />
                    <div>
                      <Label htmlFor="bank" className="text-base font-medium">Bank Transfer</Label>
                      <p className="text-sm text-gray-500">Pay directly from your bank account.</p>
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <CodeBlock 
              code={`const [selectedPayment, setSelectedPayment] = useState("card");

<RadioGroup 
  value={selectedPayment} 
  onValueChange={setSelectedPayment}
  className="space-y-4"
>
  <div className="flex items-start space-x-3">
    <RadioGroupItem value="card" id="card" className="mt-1" />
    <div>
      <Label htmlFor="card" className="text-base font-medium">Card Payment</Label>
      <p className="text-sm text-gray-500">Pay with your credit or debit card.</p>
    </div>
  </div>
  <div className="flex items-start space-x-3">
    <RadioGroupItem value="paypal" id="paypal" className="mt-1" />
    <div>
      <Label htmlFor="paypal" className="text-base font-medium">PayPal</Label>
      <p className="text-sm text-gray-500">Pay with your PayPal account.</p>
    </div>
  </div>
  <div className="flex items-start space-x-3">
    <RadioGroupItem value="bank" id="bank" className="mt-1" />
    <div>
      <Label htmlFor="bank" className="text-base font-medium">Bank Transfer</Label>
      <p className="text-sm text-gray-500">Pay directly from your bank account.</p>
    </div>
  </div>
</RadioGroup>`}
              language="jsx"
              title="Implementation of Payment Method Selection"
            />
          </div>
          
          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-medium mb-4">Color Selection</h3>
              <div className="p-6">
                <RadioGroup 
                  value={selectedColor} 
                  onValueChange={setSelectedColor}
                  className="flex flex-wrap gap-4"
                >
                  <div className="flex flex-col items-center gap-1">
                    <RadioGroupItem value="red" id="red" className="sr-only" />
                    <Label 
                      htmlFor="red" 
                      className={`h-8 w-8 rounded-full bg-red-500 cursor-pointer ring-offset-2 ${selectedColor === 'red' ? 'ring-2 ring-primary' : ''}`}
                    />
                    <span className="text-xs">Red</span>
                  </div>
                  
                  <div className="flex flex-col items-center gap-1">
                    <RadioGroupItem value="blue" id="blue" className="sr-only" />
                    <Label 
                      htmlFor="blue" 
                      className={`h-8 w-8 rounded-full bg-blue-500 cursor-pointer ring-offset-2 ${selectedColor === 'blue' ? 'ring-2 ring-primary' : ''}`}
                    />
                    <span className="text-xs">Blue</span>
                  </div>
                  
                  <div className="flex flex-col items-center gap-1">
                    <RadioGroupItem value="green" id="green" className="sr-only" />
                    <Label 
                      htmlFor="green" 
                      className={`h-8 w-8 rounded-full bg-green-500 cursor-pointer ring-offset-2 ${selectedColor === 'green' ? 'ring-2 ring-primary' : ''}`}
                    />
                    <span className="text-xs">Green</span>
                  </div>
                  
                  <div className="flex flex-col items-center gap-1">
                    <RadioGroupItem value="purple" id="purple" className="sr-only" />
                    <Label 
                      htmlFor="purple" 
                      className={`h-8 w-8 rounded-full bg-purple-500 cursor-pointer ring-offset-2 ${selectedColor === 'purple' ? 'ring-2 ring-primary' : ''}`}
                    />
                    <span className="text-xs">Purple</span>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <CodeBlock 
              code={`const [selectedColor, setSelectedColor] = useState("red");

<RadioGroup 
  value={selectedColor} 
  onValueChange={setSelectedColor}
  className="flex flex-wrap gap-4"
>
  <div className="flex flex-col items-center gap-1">
    <RadioGroupItem value="red" id="red" className="sr-only" />
    <Label 
      htmlFor="red" 
      className={\`h-8 w-8 rounded-full bg-red-500 cursor-pointer ring-offset-2 \${selectedColor === 'red' ? 'ring-2 ring-primary' : ''}\`}
    />
    <span className="text-xs">Red</span>
  </div>
  
  <div className="flex flex-col items-center gap-1">
    <RadioGroupItem value="blue" id="blue" className="sr-only" />
    <Label 
      htmlFor="blue" 
      className={\`h-8 w-8 rounded-full bg-blue-500 cursor-pointer ring-offset-2 \${selectedColor === 'blue' ? 'ring-2 ring-primary' : ''}\`}
    />
    <span className="text-xs">Blue</span>
  </div>
  
  <div className="flex flex-col items-center gap-1">
    <RadioGroupItem value="green" id="green" className="sr-only" />
    <Label 
      htmlFor="green" 
      className={\`h-8 w-8 rounded-full bg-green-500 cursor-pointer ring-offset-2 \${selectedColor === 'green' ? 'ring-2 ring-primary' : ''}\`}
    />
    <span className="text-xs">Green</span>
  </div>
  
  <div className="flex flex-col items-center gap-1">
    <RadioGroupItem value="purple" id="purple" className="sr-only" />
    <Label 
      htmlFor="purple" 
      className={\`h-8 w-8 rounded-full bg-purple-500 cursor-pointer ring-offset-2 \${selectedColor === 'purple' ? 'ring-2 ring-primary' : ''}\`}
    />
    <span className="text-xs">Purple</span>
  </div>
</RadioGroup>`}
              language="jsx"
              title="Implementation of Color Selection"
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
                  <TableCell className="font-mono text-mui-text-secondary">string</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">undefined</TableCell>
                  <TableCell className="text-mui-text-secondary">The controlled value of the radio item to check</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">defaultValue</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">string</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">undefined</TableCell>
                  <TableCell className="text-mui-text-secondary">The value of the radio item that should be checked by default</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">onValueChange</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">function</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">undefined</TableCell>
                  <TableCell className="text-mui-text-secondary">Callback fired when the value changes</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">disabled</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">boolean</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">false</TableCell>
                  <TableCell className="text-mui-text-secondary">When true, prevents the user from interacting with the radio items</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">name</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">string</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">undefined</TableCell>
                  <TableCell className="text-mui-text-secondary">The name of the radio group</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">required</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">boolean</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">false</TableCell>
                  <TableCell className="text-mui-text-secondary">When true, makes the radio group a required field</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioGroupsPage;
