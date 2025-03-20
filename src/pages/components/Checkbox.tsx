import React, { useState } from 'react';
import ComponentCard from '@/components/ComponentCard';
import { Checkbox } from '@/components/ui/checkbox';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';

const CheckboxPage = () => {
  const [checked, setChecked] = useState(true);
  const [indeterminate, setIndeterminate] = useState(true);
  
  return (
    <div className="w-full animate-slide-in">
      <div className="mb-12">
        <div className="flex items-center gap-2 text-sm text-mui-primary font-medium mb-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-mui-primary/10 text-mui-primary">
            Component
          </span>
        </div>
        
        <h1 className="text-4xl font-medium text-mui-text-primary mb-4">
          Checkbox
        </h1>
        
        <p className="text-xl text-mui-text-secondary mb-8">
          Checkboxes allow users to select one or more items from a set and can be used to turn an option on or off.
        </p>
        
        <div className="mb-12">
          <h2 className="text-2xl font-medium text-mui-text-primary mb-6">
            Import
          </h2>
          
          <pre className="bg-mui-sidebar p-4 rounded-md overflow-x-auto text-sm">
            <code>import {'{ Checkbox }'} from "@/components/ui/checkbox";</code>
          </pre>
        </div>
        
        <div className="space-y-12">
          <ComponentCard 
            title="Basic Checkboxes" 
            description="Basic checkboxes with different states."
            code={`<Checkbox />
<Checkbox checked />
<Checkbox disabled />
<Checkbox checked disabled />`}
          >
            <div className="flex flex-wrap gap-4">
              <Checkbox />
              <Checkbox checked />
              <Checkbox disabled />
              <Checkbox checked disabled />
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Checkboxes with Labels" 
            description="Checkboxes with associated label text."
            code={`<Checkbox id="terms" label="Accept terms and conditions" />
<Checkbox
  label="Send me updates about this product"
  helperText="We'll only send important notifications"
/>`}
          >
            <div className="flex flex-col gap-4">
              <Checkbox id="terms" label="Accept terms and conditions" />
              <Checkbox
                label="Send me updates about this product"
                helperText="We'll only send important notifications"
              />
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Checkbox Colors" 
            description="Checkboxes in different colors."
            code={`<Checkbox checked color="primary" label="Primary" />
<Checkbox checked color="secondary" label="Secondary" />
<Checkbox checked color="error" label="Error" />
<Checkbox checked color="warning" label="Warning" />
<Checkbox checked color="info" label="Info" />
<Checkbox checked color="success" label="Success" />`}
          >
            <div className="flex flex-col gap-4">
              <Checkbox checked color="primary" label="Primary" />
              <Checkbox checked color="secondary" label="Secondary" />
              <Checkbox checked color="error" label="Error" />
              <Checkbox checked color="warning" label="Warning" />
              <Checkbox checked color="info" label="Info" />
              <Checkbox checked color="success" label="Success" />
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Checkbox Sizes" 
            description="Checkboxes in different sizes."
            code={`<Checkbox size="sm" label="Small" />
<Checkbox size="default" label="Default" />
<Checkbox size="lg" label="Large" />`}
          >
            <div className="flex flex-col gap-4">
              <Checkbox size="sm" label="Small" />
              <Checkbox size="default" label="Default" />
              <Checkbox size="lg" label="Large" />
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Indeterminate Checkbox" 
            description="Checkboxes can have an indeterminate state, commonly used for 'Select All' functionality."
            code={`// Controlled indeterminate state
const [indeterminate, setIndeterminate] = useState(true);

<Checkbox 
  indeterminate={indeterminate} 
  label="Select all"
  onClick={() => setIndeterminate(!indeterminate)} 
/>`}
          >
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
          </ComponentCard>
          
          <ComponentCard 
            title="Controlled Checkbox" 
            description="Example of a controlled checkbox component."
            code={`const [checked, setChecked] = useState(true);

<Checkbox 
  checked={checked}
  onCheckedChange={(checked) => setChecked(checked === true)}
  label={checked ? "Checked" : "Unchecked"}
/>`}
          >
            <div className="flex flex-col gap-4">
              <Checkbox 
                checked={checked}
                onCheckedChange={(checked) => setChecked(checked === true)}
                label={checked ? "Checked" : "Unchecked"}
              />
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
