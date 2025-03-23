
import React, { useState } from 'react';
import ComponentCard from '@/components/ComponentCard';
import { Chip } from '@/components/ui/chip';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { X, Check, Info, AlertTriangle, Loader2, User, Mail, Heart, Star } from 'lucide-react';
import HeaderLibrary from '@/components/library-components/HeaderLibrary';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const ChipPage = () => {
  const [chips, setChips] = useState(['React', 'Angular', 'Vue', 'Svelte']);
  
  const handleDelete = (chipToDelete: string) => {
    setChips(chips.filter(chip => chip !== chipToDelete));
  };
  
  return (
    <div className="w-full animate-slide-in">
      <div className="mb-12">
        <HeaderLibrary 
          title="Chip"
          description="Chips are compact elements that represent an input, attribute, or action."
          type="components"
        />
        
        <div className="mb-12">
          <h2 className="text-2xl font-medium text-mui-text-primary mb-6">
            Import
          </h2>
          
          <pre className="bg-mui-sidebar p-4 rounded-md overflow-x-auto text-sm">
            <code>import {'{ Chip }'} from "@/components/ui/chip";</code>
          </pre>
        </div>
        
        <div className="space-y-12">
          <ComponentCard 
            title="Basic Chips" 
            description="Simple chips for displaying information."
            code={`<div className="flex flex-wrap gap-2">
  <Chip>Basic Chip</Chip>
  <Chip>React</Chip>
  <Chip>Angular</Chip>
  <Chip>Vue</Chip>
</div>`}
          >
            <div className="flex flex-wrap gap-2 p-6">
              <Chip>Basic Chip</Chip>
              <Chip>React</Chip>
              <Chip>Angular</Chip>
              <Chip>Vue</Chip>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Chip Variants" 
            description="Different variant styles for chips."
            code={`<div className="flex flex-wrap gap-2">
  <Chip variant="default">Default</Chip>
  <Chip variant="filled">Filled</Chip>
  <Chip variant="outlined">Outlined</Chip>
</div>`}
          >
            <div className="flex flex-wrap gap-2 p-6">
              <Chip variant="default">Default</Chip>
              <Chip variant="filled">Filled</Chip>
              <Chip variant="outlined">Outlined</Chip>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Chip Colors" 
            description="Chips with different color options."
            code={`<div className="space-y-4">
  <div className="flex flex-wrap gap-2">
    <Chip variant="filled" color="primary">Primary</Chip>
    <Chip variant="filled" color="secondary">Secondary</Chip>
    <Chip variant="filled" color="success">Success</Chip>
    <Chip variant="filled" color="error">Error</Chip>
    <Chip variant="filled" color="warning">Warning</Chip>
    <Chip variant="filled" color="info">Info</Chip>
  </div>
  
  <div className="flex flex-wrap gap-2">
    <Chip variant="outlined" color="primary">Primary</Chip>
    <Chip variant="outlined" color="secondary">Secondary</Chip>
    <Chip variant="outlined" color="success">Success</Chip>
    <Chip variant="outlined" color="error">Error</Chip>
    <Chip variant="outlined" color="warning">Warning</Chip>
    <Chip variant="outlined" color="info">Info</Chip>
  </div>
</div>`}
          >
            <div className="space-y-4 p-6">
              <div className="flex flex-wrap gap-2">
                <Chip variant="filled" color="primary">Primary</Chip>
                <Chip variant="filled" color="secondary">Secondary</Chip>
                <Chip variant="filled" color="success">Success</Chip>
                <Chip variant="filled" color="error">Error</Chip>
                <Chip variant="filled" color="warning">Warning</Chip>
                <Chip variant="filled" color="info">Info</Chip>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Chip variant="outlined" color="primary">Primary</Chip>
                <Chip variant="outlined" color="secondary">Secondary</Chip>
                <Chip variant="outlined" color="success">Success</Chip>
                <Chip variant="outlined" color="error">Error</Chip>
                <Chip variant="outlined" color="warning">Warning</Chip>
                <Chip variant="outlined" color="info">Info</Chip>
              </div>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Deletable Chips" 
            description="Chips with delete functionality."
            code={`const [chips, setChips] = useState(['React', 'Angular', 'Vue', 'Svelte']);
  
const handleDelete = (chipToDelete) => {
  setChips(chips.filter(chip => chip !== chipToDelete));
};

<div className="flex flex-wrap gap-2">
  {chips.map((chip) => (
    <Chip 
      key={chip} 
      onDelete={() => handleDelete(chip)}
    >
      {chip}
    </Chip>
  ))}
</div>

<button 
  className="mt-4 text-sm text-primary-main"
  onClick={() => setChips(['React', 'Angular', 'Vue', 'Svelte'])}
>
  Reset chips
</button>`}
          >
            <div className="p-6">
              <div className="flex flex-wrap gap-2">
                {chips.map((chip) => (
                  <Chip 
                    key={chip} 
                    onDelete={() => handleDelete(chip)}
                  >
                    {chip}
                  </Chip>
                ))}
              </div>
              
              <button 
                className="mt-4 text-sm text-primary-main"
                onClick={() => setChips(['React', 'Angular', 'Vue', 'Svelte'])}
              >
                Reset chips
              </button>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Chips with Icons" 
            description="Chips that include icons for additional visual information."
            code={`<div className="flex flex-wrap gap-2">
  <Chip icon={<Check className="h-3.5 w-3.5" />}&gt;Completed</Chip>
  <Chip icon={<User className="h-3.5 w-3.5" />}&gt;Profile</Chip>
  <Chip icon={<Mail className="h-3.5 w-3.5" />}&gt;Messages</Chip>
  <Chip icon={<Heart className="h-3.5 w-3.5" />}&gt;Favorites</Chip>
  <Chip icon={<Star className="h-3.5 w-3.5" />}&gt;Starred</Chip>
</div>`}
          >
            <div className="flex flex-wrap gap-2 p-6">
              <Chip icon={<Check className="h-3.5 w-3.5" />}>Completed</Chip>
              <Chip icon={<User className="h-3.5 w-3.5" />}>Profile</Chip>
              <Chip icon={<Mail className="h-3.5 w-3.5" />}>Messages</Chip>
              <Chip icon={<Heart className="h-3.5 w-3.5" />}>Favorites</Chip>
              <Chip icon={<Star className="h-3.5 w-3.5" />}>Starred</Chip>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Chips with Avatars" 
            description="Chips that include avatars for user representation."
            code={`<div className="flex flex-wrap gap-2">
  <Chip 
    avatar={
      <Avatar className="h-6 w-6">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    }
  >
    John Doe
  </Chip>
  
  <Chip 
    avatar={
      <Avatar className="h-6 w-6">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    }
    variant="filled"
    color="primary"
  >
    Jane Smith
  </Chip>
  
  <Chip 
    avatar={
      <Avatar className="h-6 w-6">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    }
    variant="outlined"
    color="secondary"
    onDelete={() => {}}
  >
    Alex Johnson
  </Chip>
</div>`}
          >
            <div className="flex flex-wrap gap-2 p-6">
              <Chip 
                avatar={
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                }
              >
                John Doe
              </Chip>
              
              <Chip 
                avatar={
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                }
                variant="filled"
                color="primary"
              >
                Jane Smith
              </Chip>
              
              <Chip 
                avatar={
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                }
                variant="outlined"
                color="secondary"
                onDelete={() => {}}
              >
                Alex Johnson
              </Chip>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Chip Sizes" 
            description="Chips in different sizes."
            code={`<div className="flex flex-wrap gap-2 items-center">
  <Chip size="sm">Small</Chip>
  <Chip size="default">Default</Chip>
  <Chip size="lg">Large</Chip>
</div>`}
          >
            <div className="flex flex-wrap gap-2 items-center p-6">
              <Chip size="sm">Small</Chip>
              <Chip size="default">Default</Chip>
              <Chip size="lg">Large</Chip>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Clickable Chips" 
            description="Chips that can be clicked to trigger an action."
            code={`<div className="flex flex-wrap gap-2">
  <Chip clickable onClick={() => alert('Chip clicked!')}>
    Click me
  </Chip>
  
  <Chip 
    clickable 
    variant="filled" 
    color="primary"
    onClick={() => alert('Primary chip clicked!')}
  >
    Click me too
  </Chip>
  
  <Chip 
    clickable 
    variant="outlined" 
    color="secondary"
    onClick={() => alert('Secondary chip clicked!')}
  >
    And me
  </Chip>
</div>`}
          >
            <div className="flex flex-wrap gap-2 p-6">
              <Chip clickable onClick={() => alert('Chip clicked!')}>
                Click me
              </Chip>
              
              <Chip 
                clickable 
                variant="filled" 
                color="primary"
                onClick={() => alert('Primary chip clicked!')}
              >
                Click me too
              </Chip>
              
              <Chip 
                clickable 
                variant="outlined" 
                color="secondary"
                onClick={() => alert('Secondary chip clicked!')}
              >
                And me
              </Chip>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Disabled Chips" 
            description="Chips in a disabled state."
            code={`<div className="flex flex-wrap gap-2">
  <Chip disabled>Disabled</Chip>
  <Chip disabled variant="filled" color="primary">Disabled</Chip>
  <Chip disabled variant="outlined" color="secondary">Disabled</Chip>
  <Chip disabled onDelete={() => {}}&gt;Disabled</Chip>
</div>`}
          >
            <div className="flex flex-wrap gap-2 p-6">
              <Chip disabled>Disabled</Chip>
              <Chip disabled variant="filled" color="primary">Disabled</Chip>
              <Chip disabled variant="outlined" color="secondary">Disabled</Chip>
              <Chip disabled onDelete={() => {}}>Disabled</Chip>
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
                  <TableCell className="font-mono text-mui-text-secondary">"default" | "filled" | "outlined"</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">"default"</TableCell>
                  <TableCell className="text-mui-text-secondary">The visual style of the chip.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">size</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">"default" | "sm" | "lg"</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">"default"</TableCell>
                  <TableCell className="text-mui-text-secondary">The size of the chip.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">color</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">"default" | "primary" | "secondary" | "success" | "error" | "info" | "warning"</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">"default"</TableCell>
                  <TableCell className="text-mui-text-secondary">The color of the chip.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">onDelete</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">() =&gt; void</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">undefined</TableCell>
                  <TableCell className="text-mui-text-secondary">Callback when the delete button is clicked.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">icon</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">React.ReactNode</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">undefined</TableCell>
                  <TableCell className="text-mui-text-secondary">Icon element displayed at the start of the chip.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">avatar</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">React.ReactNode</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">undefined</TableCell>
                  <TableCell className="text-mui-text-secondary">Avatar element displayed at the start of the chip.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">clickable</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">boolean</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">false</TableCell>
                  <TableCell className="text-mui-text-secondary">Whether the chip is clickable.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">disabled</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">boolean</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">false</TableCell>
                  <TableCell className="text-mui-text-secondary">Whether the chip is disabled.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChipPage;
