
import React, { useState } from 'react';
import { Mail, Search, Eye, EyeOff } from 'lucide-react';
import ComponentCard from '@/components/ComponentCard';
import { Input } from '@/components/ui/input';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import Header from '@/components/library-components/Header';

const InputPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  
  return (
    <div className="w-full animate-slide-in">
      <div className="mb-12">
        <Header 
          title="Input"
          description="Input components allow users to enter text into a UI. They typically appear in forms and dialogs."
          type="components"
          className="mb-6"
        />
        
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
            title="Basic Input" 
            description="The default input with standard styling."
            code={`<Input placeholder="Default input" />`}
          >
            <div className="flex flex-col gap-4 max-w-sm">
              <Input placeholder="Default input" />
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Disabled Input" 
            description="Inputs can be disabled to prevent interaction."
            code={`<Input disabled value="Can't touch this" />`}
          >
            <div className="flex flex-col gap-4 max-w-sm">
              <Input disabled value="Can't touch this" />
            </div>
          </ComponentCard>

          <ComponentCard 
            title="Input with Label" 
            description="Wrapping input with a label for accessibility."
            code={`<div className="grid w-full max-w-sm items-center gap-1.5">
  <label htmlFor="email" className="text-sm font-medium">Email</label>
  <Input id="email" placeholder="Email" />
</div>`}
          >
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <Input id="email" placeholder="Email" />
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Input with Button" 
            description="Combining an input with a button for search functionality."
            code={`<div className="flex w-full max-w-sm items-center space-x-2">
  <Input type="email" placeholder="Search..." />
  <button type="submit" className="px-3 py-2 bg-primary rounded-md text-white">
    Search
  </button>
</div>`}
          >
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Search..." />
              <button type="submit" className="px-3 py-2 bg-primary rounded-md text-white">
                Search
              </button>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Input with Icon" 
            description="Adding icons to enhance the visual experience."
            code={`<div className="relative w-full max-w-sm">
  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
  <Input className="pl-10" placeholder="Email" />
</div>

<div className="relative w-full max-w-sm">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
  <Input className="pl-10" placeholder="Search..." />
</div>`}
          >
            <div className="flex flex-col gap-4 max-w-sm">
              <div className="relative w-full">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input className="pl-10" placeholder="Email" />
              </div>
              
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input className="pl-10" placeholder="Search..." />
              </div>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Password Input" 
            description="Toggle between showing and hiding the password."
            code={`const [showPassword, setShowPassword] = useState(false);
const [passwordValue, setPasswordValue] = useState("");

<div className="relative w-full max-w-sm">
  <Input 
    type={showPassword ? "text" : "password"}
    value={passwordValue}
    onChange={(e) => setPasswordValue(e.target.value)}
    placeholder="Password"
  />
  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer opacity-70 hover:opacity-100"
  >
    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
  </button>
</div>`}
          >
            <div className="relative w-full max-w-sm">
              <Input 
                type={showPassword ? "text" : "password"}
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer opacity-70 hover:opacity-100"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Input with Helper Text" 
            description="Adding helper text below the input for additional context."
            code={`<div className="grid w-full max-w-sm gap-1.5">
  <label htmlFor="email-with-helper" className="text-sm font-medium">Email</label>
  <Input id="email-with-helper" placeholder="Email" />
  <p className="text-sm text-gray-500">We'll never share your email with anyone else.</p>
</div>`}
          >
            <div className="grid w-full max-w-sm gap-1.5">
              <label htmlFor="email-with-helper" className="text-sm font-medium">Email</label>
              <Input id="email-with-helper" placeholder="Email" />
              <p className="text-sm text-gray-500">We'll never share your email with anyone else.</p>
            </div>
          </ComponentCard>

          <ComponentCard 
            title="Error State Input" 
            description="Inputs can indicate validation errors."
            code={`<div className="grid w-full max-w-sm gap-1.5">
  <label htmlFor="error-input" className="text-sm font-medium text-red-500">Email</label>
  <Input 
    id="error-input" 
    placeholder="Email" 
    className="border-red-500 focus-visible:ring-red-500" 
  />
  <p className="text-sm text-red-500">Please enter a valid email address.</p>
</div>`}
          >
            <div className="grid w-full max-w-sm gap-1.5">
              <label htmlFor="error-input" className="text-sm font-medium text-red-500">Email</label>
              <Input 
                id="error-input" 
                placeholder="Email" 
                className="border-red-500 focus-visible:ring-red-500" 
              />
              <p className="text-sm text-red-500">Please enter a valid email address.</p>
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
                  <TableCell className="font-mono text-mui-text-primary">type</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">string</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">"text"</TableCell>
                  <TableCell className="text-mui-text-secondary">The type of the input element</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">className</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">string</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">undefined</TableCell>
                  <TableCell className="text-mui-text-secondary">Custom CSS class names</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">disabled</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">boolean</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">false</TableCell>
                  <TableCell className="text-mui-text-secondary">Whether the input is disabled</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">placeholder</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">string</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">undefined</TableCell>
                  <TableCell className="text-mui-text-secondary">Placeholder text for the input</TableCell>
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
