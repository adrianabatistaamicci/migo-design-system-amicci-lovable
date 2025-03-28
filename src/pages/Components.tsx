import React from 'react';
import { Link } from 'react-router-dom';
import ComponentCard from '@/components/ComponentCard';
import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Chip } from '@/components/ui/chip';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { TailwindTabs } from '@/components/ui/tabs';
import { Mail, Check, Heart, Plus, Edit } from 'lucide-react';
import Header from '@/components/library-components/Header';

const componentCategories = [
  {
    name: 'Inputs',
    components: [
      { name: 'Button', path: '/components/buttons' },
      { name: 'Icon Button', path: '/components/icon-button' },
      { name: 'Input', path: '/components/input' },
      { name: 'Checkbox', path: '/components/checkbox' },
      { name: 'Select', path: '/components/select' },
      { name: 'Slider', path: '/components/slider' },
      { name: 'Radio Group', path: '/components/radio-group' },
    ]
  },
  {
    name: 'Display',
    components: [
      { name: 'Card', path: '/components/cards' },
      { name: 'Avatar', path: '/components/avatar' },
      { name: 'Badge', path: '/components/badge' },
      { name: 'Chip', path: '/components/chip' },
      { name: 'Typography', path: '/components/typography' },
      { name: 'Divider', path: '/components/divider' },
    ]
  },
  {
    name: 'Navigation',
    components: [
      { name: 'Navigation Menu', path: '/components/navigation' },
      { name: 'Tabs', path: '/components/tabs' },
      { name: 'Breadcrumb', path: '/components/breadcrumb' },
      { name: 'Pagination', path: '/components/pagination' },
      { name: 'Stepper', path: '/components/stepper' },
    ]
  },
  {
    name: 'Feedback',
    components: [
      { name: 'Alert', path: '/components/alert' },
      { name: 'Progress', path: '/components/progress' },
      { name: 'Toast', path: '/components/toast' },
      { name: 'Skeleton', path: '/components/skeleton' },
    ]
  },
  {
    name: 'Data Display',
    components: [
      { name: 'Table', path: '/components/table' },
      { name: 'Date Picker', path: '/components/date-picker' },
      { name: 'Data Grid', path: '/components/data-grid' },
      { name: 'Charts', path: '/components/charts' },
    ]
  },
];

const Components = () => {
  return (
    <div className="animate-slide-in">
      <div className="max-w-3xl mb-12">
        <Header 
          title="Material UI Component Library"
          description="Explore our collection of Material Design inspired UI components designed for consistency and usability."
          type="components"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <ComponentCard 
            title="Button Component" 
            description="Material Design buttons with multiple variants and styles."
            code={`<Button>Primary</Button>
<Button variant="text-default">Text</Button>
<Button variant="outline-secondary">Outlined</Button>`}
          >
            <div className="flex flex-wrap gap-4">
              <Button>Primary</Button>
              <Button variant="text-default">Text</Button>
              <Button variant="outline-secondary">Outlined</Button>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Input Component" 
            description="Text fields with Material Design styling."
            code={`<Input placeholder="Default" className="mb-3" />
<Input placeholder="Filled" className="mb-3 bg-gray-100" />
<Input placeholder="Standard" />`}
          >
            <div className="flex flex-col gap-4">
              <Input placeholder="Default" className="mb-3" />
              <Input placeholder="Filled" className="mb-3 bg-gray-100" />
              <Input placeholder="Standard" />
            </div>
          </ComponentCard>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <ComponentCard 
            title="Checkbox Component" 
            description="Selection controls for multiple choices."
            code={`<Checkbox label="Default Checkbox" />
<Checkbox color="secondary" label="Secondary Color" />
<Checkbox indeterminate label="Indeterminate" />`}
          >
            <div className="flex flex-col gap-3">
              <Checkbox label="Default Checkbox" />
              <Checkbox color="secondary" label="Secondary Color" />
              <Checkbox indeterminate label="Indeterminate" />
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Badge Component" 
            description="Small counters and status indicators."
            code={`<Badge badgeContent={4}>
  <Mail className="h-6 w-6" />
</Badge>
<Badge badgeContent={99} max={99}>
  <Mail className="h-6 w-6" />
</Badge>
<Badge badgeContent={0} showZero>
  <Mail className="h-6 w-6" />
</Badge>`}
          >
            <div className="flex items-center gap-8 py-4">
              <Badge badgeContent={4}>
                <Mail className="h-6 w-6" />
              </Badge>
              <Badge badgeContent={99} max={99}>
                <Mail className="h-6 w-6" />
              </Badge>
              <Badge badgeContent={0} showZero>
                <Mail className="h-6 w-6" />
              </Badge>
            </div>
          </ComponentCard>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <ComponentCard 
            title="Avatar Component" 
            description="User profile pictures and identifiers."
            code={`<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="User" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
<Avatar color="primary">
  <AvatarFallback>MUI</AvatarFallback>
</Avatar>
<Avatar variant="rounded" color="secondary">
  <AvatarFallback>RD</AvatarFallback>
</Avatar>`}
          >
            <div className="flex items-center gap-4 py-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar color="primary">
                <AvatarFallback>MUI</AvatarFallback>
              </Avatar>
              <Avatar variant="rounded" color="secondary">
                <AvatarFallback>RD</AvatarFallback>
              </Avatar>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Chip Component" 
            description="Compact elements to represent inputs or attributes."
            code={`<Chip>Basic Chip</Chip>
<Chip variant="filled" color="primary">Primary</Chip>
<Chip variant="outlined" color="error" onDelete={() => {}}>Deletable</Chip>
<Chip icon={<Check className="h-3.5 w-3.5" />}>With Icon</Chip>`}
          >
            <div className="flex flex-wrap items-center gap-3 py-4">
              <Chip>Basic Chip</Chip>
              <Chip variant="filled" color="primary">Primary</Chip>
              <Chip variant="outlined" color="error" onDelete={() => {}}>Deletable</Chip>
              <Chip icon={<Check className="h-3.5 w-3.5" />}>With Icon</Chip>
            </div>
          </ComponentCard>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <ComponentCard 
            title="Icon Button Component" 
            description="Square buttons with icons for compact UI elements."
            code={`<IconButton icon={<Heart size={18} />} />
<IconButton icon={<Plus size={18} />} variant="success" />
<IconButton icon={<Edit size={18} />} variant="outline-default" />`}
          >
            <div className="flex items-center gap-4 py-4">
              <IconButton icon={<Heart size={18} />} />
              <IconButton icon={<Plus size={18} />} variant="success" />
              <IconButton icon={<Edit size={18} />} variant="outline-default" />
            </div>
          </ComponentCard>
        
          <ComponentCard 
            title="Slider Component" 
            description="Control for selecting values from a range."
            code={`<Slider defaultValue={[30]} max={100} />
<Slider 
  defaultValue={[50]} 
  color="secondary" 
  valueLabelDisplay="auto" 
  max={100} 
/>`}
          >
            <div className="flex flex-col gap-8 py-8">
              <Slider defaultValue={[30]} max={100} />
              <Slider 
                defaultValue={[50]} 
                color="secondary" 
                valueLabelDisplay="auto" 
                max={100} 
              />
            </div>
          </ComponentCard>
        </div>
        
        <div className="mb-16">
          <ComponentCard 
            title="Tabs Component" 
            description="Organize content into multiple tabs."
            code={`<TailwindTabs
  tabs={[
    { name: 'Account', value: 'account' },
    { name: 'Password', value: 'password' },
    { name: 'Notifications', value: 'notifications' },
  ]}
  variant="pillsGray"
/>`}
          >
            <div className="max-w-md mx-auto">
              <TailwindTabs
                tabs={[
                  { name: 'Account', value: 'account' },
                  { name: 'Password', value: 'password' },
                  { name: 'Notifications', value: 'notifications' },
                ]}
                variant="pillsGray"
              />
              <div className="p-4 border rounded-md mt-3">
                <p>Account settings content.</p>
              </div>
            </div>
          </ComponentCard>
        </div>
        
        <div className="mb-16">
          <ComponentCard 
            title="Card Component" 
            description="Flexible container for displaying grouped content."
            code={`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`}
          >
            <Card className="w-full max-w-md mx-auto">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <Button>Action</Button>
              </CardFooter>
            </Card>
          </ComponentCard>
        </div>
      </div>
      
      <div className="mb-16">
        <h2 className="text-2xl font-medium text-mui-text-primary mb-6">
          All Components
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6">
          {componentCategories.map((category) => (
            <div key={category.name}>
              <h3 className="text-lg font-medium text-mui-text-primary mb-3">
                {category.name}
              </h3>
              <ul className="space-y-2">
                {category.components.map((component) => (
                  <li key={component.name}>
                    <Link 
                      to={component.path} 
                      className="text-mui-text-secondary hover:text-mui-primary hover:underline"
                    >
                      {component.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Components;
