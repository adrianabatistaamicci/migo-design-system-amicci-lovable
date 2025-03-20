
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Chip } from '@/components/ui/chip';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

const ComponentPreview = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="flex flex-col">
    <div className="border border-border rounded-lg bg-white p-4 h-40 flex items-center justify-center">
      {children}
    </div>
    <div className="mt-2 text-center">
      <h3 className="text-sm font-medium text-foreground">{title}</h3>
      <p className="text-xs text-muted-foreground">Variant: Default</p>
    </div>
  </div>
);

const UIKit = () => {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">UI Kit</h1>
        <p className="text-muted-foreground text-lg mb-6">
          Uma visão geral dos principais componentes do nosso Design System
        </p>
      </div>
      
      {/* Inputs Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Inputs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <ComponentPreview title="Button">
            <Button className="w-full">Button</Button>
          </ComponentPreview>
          
          <ComponentPreview title="Input">
            <Input placeholder="Input" />
          </ComponentPreview>
          
          <ComponentPreview title="Text Input With Button">
            <div className="flex w-full gap-2">
              <Input placeholder="Input" className="flex-1" />
              <Button variant="default" className="bg-primary-main">Go</Button>
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Input (Filled)">
            <div className="w-full">
              <Input variant="filled" placeholder="Input" />
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Checkbox">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label htmlFor="terms" className="text-sm">Checkbox</label>
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Radio Button">
            <div className="flex items-center space-x-2">
              <div className="h-4 w-4 rounded-full border border-primary-main flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-primary-main"></div>
              </div>
              <label className="text-sm">Radio</label>
            </div>
          </ComponentPreview>
        </div>
      </section>
      
      {/* Forms Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Forms</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <ComponentPreview title="Input Group">
            <div className="space-y-4 w-full">
              <div className="space-y-2">
                <label className="text-sm">Label</label>
                <Input placeholder="Placeholder" />
              </div>
              <div className="space-y-2">
                <label className="text-sm">Label</label>
                <Input placeholder="Placeholder" />
              </div>
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Form">
            <div className="space-y-4 w-full">
              <div className="space-y-2">
                <label className="text-sm">Label</label>
                <Input placeholder="Placeholder" />
              </div>
              <div className="flex justify-end">
                <Button className="bg-primary-main">Submit</Button>
              </div>
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Search">
            <div className="w-full relative">
              <Input placeholder="Search..." />
              <Button className="absolute right-0 top-0 h-full bg-primary-main">
                Go
              </Button>
            </div>
          </ComponentPreview>
        </div>
      </section>
      
      {/* Data Display Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Data Display</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <ComponentPreview title="Card">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Content</p>
              </CardContent>
            </Card>
          </ComponentPreview>
          
          <ComponentPreview title="List">
            <div className="w-full space-y-2">
              <div className="p-2 border-b">Item 1</div>
              <div className="p-2 border-b">Item 2</div>
              <div className="p-2">Item 3</div>
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Avatar">
            <div className="flex gap-2">
              <Avatar>
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>B</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>C</AvatarFallback>
              </Avatar>
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Badge">
            <Badge>Badge</Badge>
          </ComponentPreview>
        </div>
      </section>
      
      {/* Navigation Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Navigation</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <ComponentPreview title="Link">
            <a href="#" className="text-primary-main hover:underline">Link</a>
          </ComponentPreview>
          
          <ComponentPreview title="Breadcrumb">
            <div className="flex items-center space-x-2 text-sm">
              <span>Home</span>
              <span>/</span>
              <span>Category</span>
              <span>/</span>
              <span className="font-medium">Page</span>
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Pagination">
            <div className="flex items-center space-x-1">
              <Button variant="outline" size="sm">«</Button>
              <Button variant="outline" size="sm">1</Button>
              <Button variant="default" size="sm" className="bg-primary-main">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">»</Button>
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Vertical Navigation">
            <div className="flex flex-col space-y-2 w-full">
              <div className="p-2 bg-primary-main text-white rounded">Home</div>
              <div className="p-2 border rounded">About</div>
              <div className="p-2 border rounded">Contact</div>
            </div>
          </ComponentPreview>
        </div>
      </section>
      
      {/* Feedback Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Feedback</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <ComponentPreview title="Alert">
            <div className="p-4 border-l-4 border-primary-main bg-primary-hover">
              <p className="text-sm">This is an alert</p>
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Dialog">
            <div className="p-4 border rounded-lg shadow-md">
              <div className="text-sm font-medium mb-2">Dialog Title</div>
              <p className="text-xs mb-4">Dialog content goes here</p>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" size="sm">Cancel</Button>
                <Button size="sm" className="bg-primary-main">OK</Button>
              </div>
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Tooltip">
            <div className="relative">
              <Button>Hover Me</Button>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-foreground text-white px-2 py-1 rounded text-xs">
                Tooltip
              </div>
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Progress">
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-primary-main w-3/4"></div>
            </div>
          </ComponentPreview>
        </div>
      </section>
      
      {/* Surface Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Surface</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <ComponentPreview title="Accordion">
            <div className="w-full">
              <div className="border rounded-t p-2 flex justify-between items-center">
                <span>Item 1</span>
                <span>+</span>
              </div>
              <div className="border-x border-b rounded-b p-2">
                Content
              </div>
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Tabs">
            <div className="w-full">
              <div className="flex border-b">
                <div className="px-4 py-2 border-b-2 border-primary-main">Tab 1</div>
                <div className="px-4 py-2">Tab 2</div>
                <div className="px-4 py-2">Tab 3</div>
              </div>
              <div className="p-2">Tab 1 content</div>
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Divider">
            <div className="w-full flex flex-col space-y-4">
              <div>Content above</div>
              <Separator />
              <div>Content below</div>
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Drawer/Sidebar">
            <div className="flex h-32 border rounded">
              <div className="w-1/4 bg-primary-main"></div>
              <div className="flex-1 p-2">
                <p className="text-sm">Content</p>
              </div>
            </div>
          </ComponentPreview>
        </div>
      </section>
      
      {/* Utils & Misc Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Utils & Misc</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <ComponentPreview title="Toggle">
            <Switch />
          </ComponentPreview>
          
          <ComponentPreview title="Slider">
            <Slider defaultValue={[50]} max={100} className="w-full" />
          </ComponentPreview>
          
          <ComponentPreview title="Chip/Tag">
            <div className="flex gap-2">
              <Chip>Chip 1</Chip>
              <Chip variant="outlined">Chip 2</Chip>
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Popover">
            <div className="relative">
              <Button className="bg-primary-main">Click me</Button>
            </div>
          </ComponentPreview>
        </div>
      </section>
      
      {/* Skeleton Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Loading States</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <ComponentPreview title="Skeleton">
            <div className="space-y-2 w-full">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Shimmer">
            <div className="space-y-2 w-full">
              <Skeleton className="h-4 w-full animate-pulse" />
              <Skeleton className="h-4 w-3/4 animate-pulse" />
              <Skeleton className="h-4 w-1/2 animate-pulse" />
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Spinner">
            <div className="h-8 w-8 border-4 border-primary-main/30 border-t-primary-main rounded-full animate-spin"></div>
          </ComponentPreview>
          
          <ComponentPreview title="Progress Bar">
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-primary-main w-1/2 animate-pulse"></div>
            </div>
          </ComponentPreview>
        </div>
      </section>
      
      {/* Layout Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Layout</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <ComponentPreview title="Grid">
            <div className="grid grid-cols-2 gap-2 w-full h-full">
              <div className="bg-primary-hover border border-primary-main p-2"></div>
              <div className="bg-primary-hover border border-primary-main p-2"></div>
              <div className="bg-primary-hover border border-primary-main p-2"></div>
              <div className="bg-primary-hover border border-primary-main p-2"></div>
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Stack">
            <div className="flex flex-col space-y-2 w-full">
              <div className="bg-primary-hover border border-primary-main p-2"></div>
              <div className="bg-primary-hover border border-primary-main p-2"></div>
              <div className="bg-primary-hover border border-primary-main p-2"></div>
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Container">
            <div className="border border-primary-main border-dashed w-3/4 mx-auto h-16 flex items-center justify-center">
              <div className="text-sm">Container</div>
            </div>
          </ComponentPreview>
        </div>
      </section>
      
      {/* Data Entry Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Data Entry</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <ComponentPreview title="Select">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </ComponentPreview>
          
          <ComponentPreview title="File Upload">
            <div className="border-2 border-dashed border-primary-main p-4 rounded text-center">
              <p className="text-sm">Click or drag to upload</p>
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Date Picker">
            <div className="w-full">
              <Input type="date" />
            </div>
          </ComponentPreview>
        </div>
      </section>
    </div>
  );
};

export default UIKit;
