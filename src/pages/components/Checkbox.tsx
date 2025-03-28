
import React, { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import Header from '@/components/library-components/Header';
import CodeBlock from '@/components/CodeBlock';

const CheckboxPage = () => {
  const [checked, setChecked] = useState(true);
  const [indeterminate, setIndeterminate] = useState(true);
  
  return (
    <div className="w-full animate-slide-in">
      <div className="mb-12">
        <Header 
          title="Checkbox"
          description="Checkboxes allow users to select one or more items from a set and can be used to turn an option on or off."
          type="components"
          className="mb-6"
        />
        
        <div className="mb-12">
          <h2 className="text-2xl font-medium text-mui-text-primary mb-6">
            Import
          </h2>
          
          <pre className="bg-mui-sidebar p-4 rounded-md overflow-x-auto text-sm">
            <code>import {'{ Checkbox }'} from "@/components/ui/checkbox";</code>
          </pre>
        </div>
        
        <div className="space-y-12">
          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-medium mb-4">Basic Checkboxes</h3>
              <div className="flex flex-wrap gap-4">
                <Checkbox />
                <Checkbox checked />
                <Checkbox disabled />
                <Checkbox checked disabled />
              </div>
            </div>
            <CodeBlock 
              code={`<Checkbox />
<Checkbox checked />
<Checkbox disabled />
<Checkbox checked disabled />`}
              language="tsx"
              title="Implementation of Basic Checkboxes"
              showCode={false}
            />
          </div>
          
          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-medium mb-4">Checkboxes with Labels</h3>
              <div className="flex flex-col gap-4">
                <Checkbox id="terms" label="Accept terms and conditions" />
                <Checkbox
                  label="Send me updates about this product"
                  helperText="We'll only send important notifications"
                />
              </div>
            </div>
            <CodeBlock 
              code={`<Checkbox id="terms" label="Accept terms and conditions" />
<Checkbox
  label="Send me updates about this product"
  helperText="We'll only send important notifications"
/>`}
              language="tsx"
              title="Implementation of Checkboxes with Labels"
              showCode={false}
            />
          </div>
          
          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-medium mb-4">Checkbox Colors</h3>
              <div className="flex flex-col gap-4">
                <Checkbox checked color="primary" label="Primary" />
                <Checkbox checked color="secondary" label="Secondary" />
                <Checkbox checked color="error" label="Error" />
                <Checkbox checked color="warning" label="Warning" />
                <Checkbox checked color="info" label="Info" />
                <Checkbox checked color="success" label="Success" />
              </div>
            </div>
            <CodeBlock 
              code={`<Checkbox checked color="primary" label="Primary" />
<Checkbox checked color="secondary" label="Secondary" />
<Checkbox checked color="error" label="Error" />
<Checkbox checked color="warning" label="Warning" />
<Checkbox checked color="info" label="Info" />
<Checkbox checked color="success" label="Success" />`}
              language="tsx"
              title="Implementation of Checkbox Colors"
              showCode={false}
            />
          </div>
          
          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-medium mb-4">Checkbox Sizes</h3>
              <div className="flex flex-col gap-4">
                <Checkbox size="sm" label="Small" />
                <Checkbox size="default" label="Default" />
                <Checkbox size="lg" label="Large" />
              </div>
            </div>
            <CodeBlock 
              code={`<Checkbox size="sm" label="Small" />
<Checkbox size="default" label="Default" />
<Checkbox size="lg" label="Large" />`}
              language="tsx"
              title="Implementation of Checkbox Sizes"
              showCode={false}
            />
          </div>
          
          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-medium mb-4">Indeterminate Checkbox</h3>
              <div className="flex flex-col gap-4">
                <Checkbox 
                  indeterminate={indeterminate} 
                  label="Select all"
                  onClick={() => setIndeterminate(!indeterminate)} 
                />
                <div className="pl-6 space-y-2">
                  <Checkbox label="Option 1" />
                  <Checkbox label="Option 2" />
                  <Checkbox label="Option 3" />
                </div>
              </div>
            </div>
            <CodeBlock 
              code={`// Controlled indeterminate state
const [indeterminate, setIndeterminate] = useState(true);

<Checkbox 
  indeterminate={indeterminate} 
  label="Select all"
  onClick={() => setIndeterminate(!indeterminate)} 
/>`}
              language="tsx"
              title="Implementation of Indeterminate Checkbox"
              showCode={false}
            />
          </div>
          
          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-medium mb-4">Controlled Checkbox</h3>
              <div className="flex flex-col gap-4">
                <Checkbox 
                  checked={checked}
                  onCheckedChange={(checked) => setChecked(checked === true)}
                  label={checked ? "Checked" : "Unchecked"}
                />
              </div>
            </div>
            <CodeBlock 
              code={`const [checked, setChecked] = useState(true);

<Checkbox 
  checked={checked}
  onCheckedChange={(checked) => setChecked(checked === true)}
  label={checked ? "Checked" : "Unchecked"}
/>`}
              language="tsx"
              title="Implementation of Controlled Checkbox"
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
                  <TableCell className="font-mono text-mui-text-primary">label</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">string</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">undefined</TableCell>
                  <TableCell className="text-mui-text-secondary">Label text for the checkbox</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">helperText</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">string</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">undefined</TableCell>
                  <TableCell className="text-mui-text-secondary">Helper text displayed below the checkbox</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">indeterminate</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">boolean</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">false</TableCell>
                  <TableCell className="text-mui-text-secondary">If true, the component appears indeterminate</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">color</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">"primary" | "secondary" | "success" | "error" | "warning" | "info"</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">"primary"</TableCell>
                  <TableCell className="text-mui-text-secondary">The color of the component</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">size</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">"sm" | "default" | "lg"</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">"default"</TableCell>
                  <TableCell className="text-mui-text-secondary">The size of the component</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">checked</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">boolean</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">undefined</TableCell>
                  <TableCell className="text-mui-text-secondary">If true, the component is checked</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">onCheckedChange</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">function</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">undefined</TableCell>
                  <TableCell className="text-mui-text-secondary">Callback when the checked state changes</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckboxPage;
