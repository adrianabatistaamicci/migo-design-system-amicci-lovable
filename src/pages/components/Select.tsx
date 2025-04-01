
import React, { useState } from 'react';
import ComponentCard from '@/components/ComponentCard';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import Header from '@/components/library-components/Header';

const SelectPage = () => {
  const [value, setValue] = useState("apple");
  
  return (
    <div className="w-full animate-slide-in">
      <div className="mb-12">
        <Header 
          title="Select"
          description="Select displays a collapsible list of options and allows a user to select one of them."
          type="components"
        />
        
        <div className="mb-12">
          <h2 className="text-2xl font-medium text-mui-text-primary mb-6">
            Import
          </h2>
          
          <pre className="bg-mui-sidebar p-4 rounded-md overflow-x-auto text-sm">
            <code>import {'{Select, SelectContent, SelectItem, SelectTrigger, SelectValue}'} from "@/components/ui/select";</code>
          </pre>
        </div>
        
        <div className="space-y-12">
          <ComponentCard 
            title="Basic Select" 
            description="A simple select component with a few options."
            code={`<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="blueberry">Blueberry</SelectItem>
    <SelectItem value="grapes">Grapes</SelectItem>
    <SelectItem value="pineapple">Pineapple</SelectItem>
  </SelectContent>
</Select>`}
            showCodeBlockInside={true}
            codeBlockTitle="Basic Select Implementation"
            codeBlockLanguage="tsx"
          >
            <div className="max-w-sm">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Select with Label" 
            description="A select with an associated label."
            code={`<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="fruit">Favorite Fruit</Label>
  <Select>
    <SelectTrigger id="fruit">
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="blueberry">Blueberry</SelectItem>
    </SelectContent>
  </Select>
</div>`}
            showCodeBlockInside={true}
            codeBlockTitle="Select with Label Implementation"
            codeBlockLanguage="tsx"
          >
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="fruit">Favorite Fruit</Label>
              <Select>
                <SelectTrigger id="fruit">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Disabled Select" 
            description="A select component that cannot be interacted with."
            code={`<Select disabled>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="blueberry">Blueberry</SelectItem>
  </SelectContent>
</Select>`}
            showCodeBlockInside={true}
            codeBlockTitle="Disabled Select Implementation"
            codeBlockLanguage="tsx"
          >
            <div className="max-w-sm">
              <Select disabled>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Controlled Select" 
            description="A select with controlled state."
            code={`const [value, setValue] = useState("apple");

<Select value={value} onValueChange={setValue}>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="blueberry">Blueberry</SelectItem>
  </SelectContent>
</Select>

<p className="mt-4">Selected value: {value}</p>`}
            showCodeBlockInside={true}
            codeBlockTitle="Controlled Select Implementation"
            codeBlockLanguage="tsx"
          >
            <div className="max-w-sm">
              <Select value={value} onValueChange={setValue}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                </SelectContent>
              </Select>
              
              <p className="mt-4 text-sm text-mui-text-secondary">Selected value: {value}</p>
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
                  <TableCell className="font-mono text-mui-text-secondary">string</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">undefined</TableCell>
                  <TableCell className="text-mui-text-secondary">The controlled value of the select</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">defaultValue</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">string</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">undefined</TableCell>
                  <TableCell className="text-mui-text-secondary">The default value of the select</TableCell>
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
                  <TableCell className="text-mui-text-secondary">When true, prevents the user from interacting with the select</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">required</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">boolean</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">false</TableCell>
                  <TableCell className="text-mui-text-secondary">When true, indicates that the user must select a value before the form can be submitted</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectPage;
