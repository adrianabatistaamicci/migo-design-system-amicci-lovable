import React from 'react';
import ComponentCard from '@/components/ComponentCard';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import ComponentsHeader from '@/components/library-components/ComponentsHeader';

const AvatarPage = () => {
  return (
    <div className="w-full animate-slide-in">
      <div className="mb-12">
        <ComponentsHeader 
          title="Avatar"
          description="The Avatar component is used to represent a user, and displays an image or initials."
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
          <ComponentCard 
            title="Basic Avatar" 
            description="A simple avatar component with an image."
            code={`<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
`}
          >
            <div className="flex items-center space-x-4 py-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Avatar Fallback" 
            description="An avatar with a fallback for when the image fails to load."
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
          >
            <div className="flex items-center space-x-4 py-4">
              <Avatar>
                <AvatarImage src="https://invalid-image.com" alt="@invalid" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>MK</AvatarFallback>
              </Avatar>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Avatar Shapes" 
            description="Avatars in different shape variants."
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
          >
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
          </ComponentCard>
          
          <ComponentCard 
            title="Avatar Sizes" 
            description="Avatars in different size variants."
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
          >
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
          </ComponentCard>
          
          <ComponentCard 
            title="Avatar Colors" 
            description="Avatars in different color variants."
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
          >
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
