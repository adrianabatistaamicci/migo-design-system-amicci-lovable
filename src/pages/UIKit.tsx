import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Chip } from '@/components/ui/chip';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AlertCircle, Check, ChevronRight, CircleAlert, Info, Minus, Plus } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Calendar } from '@/components/ui/calendar';
import { Textarea } from '@/components/ui/textarea';

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
        <div className="flex items-center gap-2 text-sm text-mui-primary font-medium mb-2">
          <Chip variant="filled" color="primary" size="sm">Components</Chip>
        </div>
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
          
          <ComponentPreview title="Text Area">
            <Textarea placeholder="Text Area" />
          </ComponentPreview>
          
          <ComponentPreview title="Input Suffix">
            <div className="w-full relative">
              <Input placeholder="Input Suffix" />
              <Button variant="default" className="absolute right-0 top-0 h-full">Go</Button>
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
        <h2 className="text-xl font-semibold mb-6">Form Controls</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <ComponentPreview title="Multiple Inputs">
            <div className="space-y-4 w-full">
              <Input placeholder="Label" />
              <Input placeholder="Label" />
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Form">
            <div className="space-y-4 w-full">
              <div className="space-y-2">
                <label className="text-sm">Label</label>
                <Input placeholder="Placeholder" />
              </div>
              <div className="flex justify-end">
                <Button>Submit</Button>
              </div>
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Search">
            <div className="w-full relative">
              <Input placeholder="Search..." />
              <Button className="absolute right-0 top-0 h-full">
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
          
          <ComponentPreview title="Badge">
            <div className="flex gap-2">
              <Badge>Badge</Badge>
              <Badge color="secondary">Badge</Badge>
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Chip">
            <div className="flex gap-2">
              <Chip variant="filled">Chip</Chip>
            </div>
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
          
          <ComponentPreview title="Tabs">
            <div className="w-full">
              <Tabs defaultValue="tab1" className="w-full">
                <TabsList>
                  <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                  <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Pagination">
            <div className="flex items-center space-x-1">
              <Button variant="outline" size="sm">&laquo;</Button>
              <Button variant="outline" size="sm">1</Button>
              <Button variant="default" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">&raquo;</Button>
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Menu">
            <div className="flex flex-col space-y-1 w-full">
              <div className="p-2 bg-primary text-white rounded">Home</div>
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
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>This is an alert</AlertDescription>
            </Alert>
          </ComponentPreview>
          
          <ComponentPreview title="Dialog">
            <div className="p-4 border rounded-lg shadow-md">
              <div className="text-sm font-medium mb-2">Dialog Title</div>
              <p className="text-xs mb-4">Dialog content goes here</p>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" size="sm">Cancel</Button>
                <Button size="sm">OK</Button>
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
          
          <ComponentPreview title="Toast">
            <div className="bg-white shadow-md rounded-lg p-4 flex items-start gap-3 border border-border">
              <Info className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Toast Title</p>
                <p className="text-xs text-muted-foreground">Toast message here</p>
              </div>
            </div>
          </ComponentPreview>
        </div>
      </section>
      
      {/* Surface Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Surface</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <ComponentPreview title="Accordion">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Item 1</AccordionTrigger>
                <AccordionContent>Content</AccordionContent>
              </AccordionItem>
            </Accordion>
          </ComponentPreview>
          
          <ComponentPreview title="Table">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Item 1</TableCell>
                  <TableCell>123</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </ComponentPreview>
          
          <ComponentPreview title="Divider">
            <div className="w-full flex flex-col space-y-4">
              <div>Content above</div>
              <Separator />
              <div>Content below</div>
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
          
          <ComponentPreview title="Date Picker">
            <div className="w-full">
              <Calendar mode="single" className="w-full max-w-sm mx-auto" />
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Skeleton">
            <div className="space-y-2 w-full">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Select">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
              </SelectContent>
            </Select>
          </ComponentPreview>
        </div>
      </section>
      
      {/* Loading States Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Loading States</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <ComponentPreview title="Shimmer">
            <div className="space-y-2 w-full">
              <Skeleton className="h-4 w-full animate-pulse" />
              <Skeleton className="h-4 w-3/4 animate-pulse" />
              <Skeleton className="h-4 w-1/2 animate-pulse" />
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Spinner">
            <div className="h-8 w-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
          </ComponentPreview>
          
          <ComponentPreview title="Progress">
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-1/2"></div>
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Icons">
            <div className="flex flex-wrap gap-2">
              <CircleAlert className="h-6 w-6" />
              <Info className="h-6 w-6" />
              <Check className="h-6 w-6" />
              <ChevronRight className="h-6 w-6" />
            </div>
          </ComponentPreview>
        </div>
      </section>
      
      {/* Layout Components */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Layout</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <ComponentPreview title="Grid">
            <div className="grid grid-cols-2 gap-2 w-full h-full">
              <div className="bg-muted border border-border p-2"></div>
              <div className="bg-muted border border-border p-2"></div>
              <div className="bg-muted border border-border p-2"></div>
              <div className="bg-muted border border-border p-2"></div>
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Stack">
            <div className="flex flex-col space-y-2 w-full">
              <div className="bg-muted border border-border p-2"></div>
              <div className="bg-muted border border-border p-2"></div>
              <div className="bg-muted border border-border p-2"></div>
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Flex Container">
            <div className="flex justify-between w-full">
              <div className="bg-muted border border-border p-2 w-1/4"></div>
              <div className="bg-muted border border-border p-2 w-1/4"></div>
              <div className="bg-muted border border-border p-2 w-1/4"></div>
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Container">
            <div className="border border-border border-dashed w-3/4 mx-auto h-16 flex items-center justify-center">
              <div className="text-sm">Container</div>
            </div>
          </ComponentPreview>
        </div>
      </section>
      
      {/* Additional Components */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Additional Components</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <ComponentPreview title="Number Stepper">
            <div className="flex items-center border rounded-md">
              <Button variant="ghost" size="sm"><Minus className="h-4 w-4" /></Button>
              <div className="w-12 text-center">10</div>
              <Button variant="ghost" size="sm"><Plus className="h-4 w-4" /></Button>
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Slider">
            <Slider defaultValue={[50]} max={100} step={1} className="w-full" />
          </ComponentPreview>
          
          <ComponentPreview title="File Upload">
            <div className="border-2 border-dashed border-border p-4 rounded text-center">
              <p className="text-sm">Click or drop files</p>
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Rating">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <div key={star} className="text-primary text-xl">★</div>
              ))}
            </div>
          </ComponentPreview>
        </div>
      </section>
    </div>
  );
};

export default UIKit;
