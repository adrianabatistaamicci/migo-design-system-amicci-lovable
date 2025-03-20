
import React, { useState } from 'react';
import { Mail, Search, Eye, EyeOff } from 'lucide-react';
import ComponentCard from '@/components/ComponentCard';
import { Input } from '@/components/ui/input';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';

const InputPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  
  return (
    <div className="w-full animate-slide-in">
      <div className="mb-12">
        <div className="flex items-center gap-2 text-sm text-mui-primary font-medium mb-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-mui-primary/10 text-mui-primary">
            Component
          </span>
        </div>
        
        <h1 className="text-4xl font-medium text-mui-text-primary mb-4">
          Input
        </h1>
        
        <p className="text-xl text-mui-text-secondary mb-8">
          Input components allow users to enter text into a UI. They typically appear in forms and dialogs.
        </p>
        
        <div className="mb-12">
          <h2 className="text-2xl font-medium text-mui-text-primary mb-6">
            Import
          </h2>
          
          <pre className="bg-mui-sidebar p-4 rounded-md overflow-x-auto text-sm">
            <code>import {'{ Input }'} from "@/components/ui/input";</code>
          </pre>
        </div>
        
        <div className="space-y-12">
          <ComponentCard 
            title="Basic Input Variants" 
            description="Material UI offers three input variants: outlined, filled, and standard."
            code={`<Input variant="outlined" placeholder="Outlined input" />
<Input variant="filled" placeholder="Filled input" />
<Input variant="standard" placeholder="Standard input" />`}
          >
            <div className="flex flex-col gap-4 max-w-sm">
              <Input variant="outlined" placeholder="Outlined input" />
              <Input variant="filled" placeholder="Filled input" />
              <Input variant="standard" placeholder="Standard input" />
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Labeled Inputs" 
            description="Inputs with labels provide additional context."
            code={`<Input 
  label="Email Address" 
  placeholder="johndoe@example.com"
  helperText="We'll never share your email."
/>`}
          >
            <div className="flex flex-col gap-4 max-w-sm">
              <Input 
                label="Email Address" 
                placeholder="johndoe@example.com"
                helperText="We'll never share your email."
              />
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Error State" 
            description="Inputs can display an error state with error text."
            code={`<Input 
  label="Password" 
  type="password" 
  error={true}
  helperText="Password must be at least 8 characters."
/>`}
          >
            <div className="flex flex-col gap-4 max-w-sm">
              <Input 
                label="Password" 
                type="password" 
                error={true}
                helperText="Password must be at least 8 characters."
              />
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Input with Adornments" 
            description="Inputs can include icons or buttons at the start or end."
            code={`<Input
  startAdornment={<Mail className="h-4 w-4" />}
  label="Email"
  placeholder="johndoe@example.com"
/>

<Input
  label="Search"
  placeholder="Search..."
  startAdornment={<Search className="h-4 w-4" />}
/>

<Input
  label="Password"
  type={showPassword ? "text" : "password"}
  value={passwordValue}
  onChange={(e) => setPasswordValue(e.target.value)}
  endAdornment={
    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="cursor-pointer opacity-70 hover:opacity-100"
    >
      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
    </button>
  }
/>`}
          >
            <div className="flex flex-col gap-4 max-w-sm">
              <Input
                startAdornment={<Mail className="h-4 w-4" />}
                label="Email"
                placeholder="johndoe@example.com"
              />
              
              <Input
                label="Search"
                placeholder="Search..."
                startAdornment={<Search className="h-4 w-4" />}
              />
              
              <Input
                label="Password"
                type={showPassword ? "text" : "password"}
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                endAdornment={
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="cursor-pointer opacity-70 hover:opacity-100"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                }
              />
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Disabled Input" 
            description="Inputs can be disabled to prevent interaction."
            code={`<Input disabled label="Disabled Input" value="Can't touch this" />`}
          >
            <div className="flex flex-col gap-4 max-w-sm">
              <Input disabled label="Disabled Input" value="Can't touch this" />
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Full Width Input" 
            description="Inputs can expand to fill their container."
            code={`<Input fullWidth label="Full Width" placeholder="This input takes up the full width" />`}
          >
            <Input fullWidth label="Full Width" placeholder="This input takes up the full width" />
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
                  <TableCell className="text-mui-text-secondary">Label text for the input</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">helperText</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">string</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">undefined</TableCell>
                  <TableCell className="text-mui-text-secondary">Helper text displayed below the input</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">error</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">boolean</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">false</TableCell>
                  <TableCell className="text-mui-text-secondary">If true, the input will indicate an error state</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">variant</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">"outlined" | "filled" | "standard"</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">"outlined"</TableCell>
                  <TableCell className="text-mui-text-secondary">The variant to use</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">fullWidth</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">boolean</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">false</TableCell>
                  <TableCell className="text-mui-text-secondary">If true, the input will take up the full width of its container</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">startAdornment</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">ReactNode</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">undefined</TableCell>
                  <TableCell className="text-mui-text-secondary">Content displayed at the start of the input</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">endAdornment</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">ReactNode</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">undefined</TableCell>
                  <TableCell className="text-mui-text-secondary">Content displayed at the end of the input</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputPage;
