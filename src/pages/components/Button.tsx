import React from 'react';
import ComponentCard from '@/components/ComponentCard';
import { Button } from '@/components/ui/button';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { Heart, ArrowRight, Save, Check } from 'lucide-react';
import HeaderLibrary from '@/components/library-components/HeaderLibrary';

const ButtonPage = () => {
  return (
    <div className="w-full animate-slide-in">
      <div className="mb-12">
        <HeaderLibrary 
          title="Button"
          description="Buttons are interactive elements that enable users to trigger actions."
          type="components"
        />
        
        <div className="mb-12">
          <h2 className="text-2xl font-medium text-mui-text-primary mb-6">
            Import
          </h2>
          
          <pre className="bg-mui-sidebar p-4 rounded-md overflow-x-auto text-sm">
            <code>import {'{ Button }'} from "@/components/ui/button";</code>
          </pre>
        </div>
        
        <div className="space-y-12">
          <ComponentCard 
            title="Contained Button Variants" 
            description="Buttons with a filled background."
            code={`<Button>Primary</Button>
<Button variant="error">Error</Button>`}
          >
            <div className="flex flex-wrap gap-4">
              <Button>Primary</Button>
              <Button variant="error">Error</Button>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Outlined Button Variants" 
            description="Buttons with an outline."
            code={`<Button variant="outline-secondary">Secondary</Button>
<Button variant="outline-error">Error</Button>`}
          >
            <div className="flex flex-wrap gap-4">
              <Button variant="outline-secondary">Secondary</Button>
              <Button variant="outline-error">Error</Button>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Text Button Variants" 
            description="Buttons without background or border."
            code={`<Button variant="text-secondary">Secondary</Button>
<Button variant="text-error">Error</Button>`}
          >
            <div className="flex flex-wrap gap-4">
              <Button variant="text-secondary">Secondary</Button>
              <Button variant="text-error">Error</Button>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Button Sizes" 
            description="Different button sizes."
            code={`<Button size="sm">Small</Button>
<Button>Default</Button>
<Button size="lg">Large</Button>`}
          >
            <div className="flex items-center flex-wrap gap-4">
              <Button size="sm">Small</Button>
              <Button>Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Button States" 
            description="Different button states."
            code={`<Button>Default</Button>
<Button disabled>Disabled</Button>
<Button isLoading>Loading</Button>`}
          >
            <div className="flex flex-wrap gap-4">
              <Button>Default</Button>
              <Button disabled>Disabled</Button>
              <Button isLoading>Loading</Button>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Buttons with Icons" 
            description="Buttons with start and end icons."
            code={`<Button startIcon={<Heart size={18} />}>Like</Button>
<Button endIcon={<ArrowRight size={18} />}>Next</Button>
<Button startIcon={<Save size={18} />} endIcon={<Check size={18} />}>Save</Button>`}
          >
            <div className="flex flex-wrap gap-4">
              <Button startIcon={<Heart size={18} />}>Like</Button>
              <Button endIcon={<ArrowRight size={18} />}>Next</Button>
              <Button startIcon={<Save size={18} />} endIcon={<Check size={18} />}>Save</Button>
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
                  <TableHead className="w-[15%]">Prop</TableHead>
                  <TableHead className="w-[45%]">Type</TableHead>
                  <TableHead className="w-[15%]">Default</TableHead>
                  <TableHead className="w-[25%]">Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">variant</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary break-words">"default" | "error" | "outline-secondary" | "outline-error" | "text-secondary" | "text-error"</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">"default"</TableCell>
                  <TableCell className="text-mui-text-secondary">Visual style of the button</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">size</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">"default" | "sm" | "lg" | "icon"</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">"default"</TableCell>
                  <TableCell className="text-mui-text-secondary">Size of the button</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">disabled</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">boolean</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">false</TableCell>
                  <TableCell className="text-mui-text-secondary">When true, prevents user interaction</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">isLoading</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">boolean</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">false</TableCell>
                  <TableCell className="text-mui-text-secondary">When true, shows a loading spinner</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">startIcon</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">ReactNode</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">undefined</TableCell>
                  <TableCell className="text-mui-text-secondary">Icon displayed before the button text</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">endIcon</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">ReactNode</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">undefined</TableCell>
                  <TableCell className="text-mui-text-secondary">Icon displayed after the button text</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonPage;
