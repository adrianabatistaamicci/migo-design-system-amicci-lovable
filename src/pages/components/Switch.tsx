
import React, { useState } from 'react';
import ComponentCard from '@/components/ComponentCard';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';

const SwitchPage = () => {
  const [checked, setChecked] = useState(false);
  
  return (
    <div className="w-full animate-slide-in">
      <div className="mb-12">
        <div className="flex items-center gap-2 text-sm text-mui-primary font-medium mb-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-mui-primary/10 text-mui-primary">
            Component
          </span>
        </div>
        
        <h1 className="text-4xl font-medium text-mui-text-primary mb-4">
          Switch
        </h1>
        
        <p className="text-xl text-mui-text-secondary mb-8">
          Switch is a control that allows users to toggle between checked and unchecked states.
        </p>
        
        <div className="mb-12">
          <h2 className="text-2xl font-medium text-mui-text-primary mb-6">
            Import
          </h2>
          
          <pre className="bg-mui-sidebar p-4 rounded-md overflow-x-auto text-sm">
            <code>import {'{ Switch }'} from "@/components/ui/switch";</code>
          </pre>
        </div>
        
        <div className="space-y-12">
          <ComponentCard 
            title="Basic Switch" 
            description="A simple switch component."
            code={`<Switch />
`}
          >
            <div className="flex items-center py-4">
              <Switch id="airplane-mode" />
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Switch with Label" 
            description="A switch with an associated label."
            code={`<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>
`}
          >
            <div className="flex items-center space-x-2 py-4">
              <Switch id="s2-airplane-mode" />
              <Label htmlFor="s2-airplane-mode">Airplane Mode</Label>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Disabled Switch" 
            description="A switch component that cannot be interacted with."
            code={`<div className="flex flex-col space-y-4">
  <div className="flex items-center space-x-2">
    <Switch id="disabled-unchecked" disabled />
    <Label htmlFor="disabled-unchecked" className="text-muted-foreground">Disabled Unchecked</Label>
  </div>
  <div className="flex items-center space-x-2">
    <Switch id="disabled-checked" defaultChecked disabled />
    <Label htmlFor="disabled-checked" className="text-muted-foreground">Disabled Checked</Label>
  </div>
</div>
`}
          >
            <div className="flex flex-col space-y-4 py-4">
              <div className="flex items-center space-x-2">
                <Switch id="s3-disabled-unchecked" disabled />
                <Label htmlFor="s3-disabled-unchecked" className="text-muted-foreground">Disabled Unchecked</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="s3-disabled-checked" defaultChecked disabled />
                <Label htmlFor="s3-disabled-checked" className="text-muted-foreground">Disabled Checked</Label>
              </div>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Controlled Switch" 
            description="A switch with controlled state."
            code={`const [checked, setChecked] = useState(false);

<div className="flex flex-col space-y-4">
  <div className="flex items-center space-x-2">
    <Switch 
      id="controlled-switch" 
      checked={checked}
      onCheckedChange={setChecked}
    />
    <Label htmlFor="controlled-switch">
      {checked ? "On" : "Off"}
    </Label>
  </div>
  <p>Switch is {checked ? "on" : "off"}</p>
</div>
`}
          >
            <div className="flex flex-col space-y-4 py-4">
              <div className="flex items-center space-x-2">
                <Switch 
                  id="s4-controlled-switch" 
                  checked={checked}
                  onCheckedChange={setChecked}
                />
                <Label htmlFor="s4-controlled-switch">
                  {checked ? "On" : "Off"}
                </Label>
              </div>
              <p className="text-sm text-mui-text-secondary">Switch is {checked ? "on" : "off"}</p>
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
                  <TableCell className="font-mono text-mui-text-primary">checked</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">boolean</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">undefined</TableCell>
                  <TableCell className="text-mui-text-secondary">The controlled checked state of the switch</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">defaultChecked</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">boolean</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">undefined</TableCell>
                  <TableCell className="text-mui-text-secondary">The default checked state when uncontrolled</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">onCheckedChange</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">function</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">undefined</TableCell>
                  <TableCell className="text-mui-text-secondary">Event handler called when the checked state changes</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">disabled</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">boolean</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">false</TableCell>
                  <TableCell className="text-mui-text-secondary">When true, prevents the user from interacting with the switch</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">required</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">boolean</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">false</TableCell>
                  <TableCell className="text-mui-text-secondary">When true, indicates that the user must check the switch before the form can be submitted</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchPage;
