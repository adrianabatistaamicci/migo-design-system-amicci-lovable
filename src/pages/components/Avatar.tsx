
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import Header from '@/components/library-components/Header';
import CodeBlock from '@/components/CodeBlock';

const AvatarPage = () => {
  return (
    <div className="w-full animate-slide-in">
      <div className="mb-12">
        <Header 
          title="Avatar"
          description="The Avatar component is used to represent a user, and displays an image or initials."
          type="components"
        />
        
        <div className="mb-12">
          <h2 className="text-2xl font-medium text-mui-text-primary mb-6">
            Import
          </h2>
          
          <pre className="bg-mui-sidebar p-4 rounded-md overflow-x-auto text-sm">
            <code>import {'{ Avatar, AvatarImage, AvatarFallback }'} from "@/components/ui/avatar";</code>
          </pre>
        </div>
        
        <div className="space-y-12">
          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-medium mb-4">Basic Avatar</h3>
              <div className="flex items-center space-x-4 py-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <CodeBlock 
              code={`<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
`}
              language="tsx"
              title="Implementation of Basic Avatar"
              showCode={false}
            />
          </div>
          
          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-medium mb-4">Avatar Fallback</h3>
              <div className="flex items-center space-x-4 py-4">
                <Avatar>
                  <AvatarImage src="https://invalid-image.com" alt="@invalid" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>MK</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <CodeBlock 
              code={`<div className="flex items-center space-x-4">
  <Avatar>
    <AvatarImage src="https://invalid-image.com" alt="@invalid" />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback>MK</AvatarFallback>
  </Avatar>
</div>
`}
              language="tsx"
              title="Implementation of Avatar Fallback"
              showCode={false}
            />
          </div>
          
          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-medium mb-4">Avatar Shapes</h3>
              <div className="flex items-center space-x-4 py-4">
                <Avatar variant="circular">
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar variant="rounded">
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar variant="square">
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <CodeBlock 
              code={`<div className="flex items-center space-x-4">
  <Avatar variant="circular">
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  <Avatar variant="rounded">
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  <Avatar variant="square">
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
</div>
`}
              language="tsx"
              title="Implementation of Avatar Shapes"
              showCode={false}
            />
          </div>
          
          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-medium mb-4">Avatar Sizes</h3>
              <div className="flex items-center space-x-4 py-4">
                <Avatar size="xs">
                  <AvatarFallback>XS</AvatarFallback>
                </Avatar>
                <Avatar size="sm">
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <Avatar size="md">
                  <AvatarFallback>MD</AvatarFallback>
                </Avatar>
                <Avatar size="lg">
                  <AvatarFallback>LG</AvatarFallback>
                </Avatar>
                <Avatar size="xl">
                  <AvatarFallback>XL</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <CodeBlock 
              code={`<div className="flex items-center space-x-4">
  <Avatar size="xs">
    <AvatarFallback>XS</AvatarFallback>
  </Avatar>
  <Avatar size="sm">
    <AvatarFallback>SM</AvatarFallback>
  </Avatar>
  <Avatar size="md">
    <AvatarFallback>MD</AvatarFallback>
  </Avatar>
  <Avatar size="lg">
    <AvatarFallback>LG</AvatarFallback>
  </Avatar>
  <Avatar size="xl">
    <AvatarFallback>XL</AvatarFallback>
  </Avatar>
</div>
`}
              language="tsx"
              title="Implementation of Avatar Sizes"
              showCode={false}
            />
          </div>
          
          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-medium mb-4">Avatar Colors</h3>
              <div className="flex items-center space-x-4 py-4">
                <Avatar color="primary">
                  <AvatarFallback>P</AvatarFallback>
                </Avatar>
                <Avatar color="secondary">
                  <AvatarFallback>S</AvatarFallback>
                </Avatar>
                <Avatar color="error">
                  <AvatarFallback>E</AvatarFallback>
                </Avatar>
                <Avatar color="info">
                  <AvatarFallback>I</AvatarFallback>
                </Avatar>
                <Avatar color="success">
                  <AvatarFallback>S</AvatarFallback>
                </Avatar>
                <Avatar color="warning">
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <CodeBlock 
              code={`<div className="flex items-center space-x-4">
  <Avatar color="primary">
    <AvatarFallback>P</AvatarFallback>
  </Avatar>
  <Avatar color="secondary">
    <AvatarFallback>S</AvatarFallback>
  </Avatar>
  <Avatar color="error">
    <AvatarFallback>E</AvatarFallback>
  </Avatar>
  <Avatar color="info">
    <AvatarFallback>I</AvatarFallback>
  </Avatar>
  <Avatar color="success">
    <AvatarFallback>S</AvatarFallback>
  </Avatar>
  <Avatar color="warning">
    <AvatarFallback>W</AvatarFallback>
  </Avatar>
</div>
`}
              language="tsx"
              title="Implementation of Avatar Colors"
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
                  <TableCell className="font-mono text-mui-text-primary">variant</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">"circular" | "rounded" | "square"</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">"circular"</TableCell>
                  <TableCell className="text-mui-text-secondary">The shape of the avatar</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">size</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">"xs" | "sm" | "md" | "lg" | "xl"</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">"md"</TableCell>
                  <TableCell className="text-mui-text-secondary">The size of the avatar</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">color</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">"primary" | "secondary" | "error" | "info" | "success" | "warning" | "default"</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">"default"</TableCell>
                  <TableCell className="text-mui-text-secondary">The color of the avatar</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarPage;
