
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
import { AlertCircle, Check, ChevronRight, CircleAlert, Info, Minus, Plus, Search, Home, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Calendar } from '@/components/ui/calendar';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Progress } from '@/components/ui/progress';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

const ComponentPreview = ({ title, children, imageSrc }: { title: string; children: React.ReactNode; imageSrc?: string }) => (
  <div className="flex flex-col">
    <div className="border border-border rounded-lg bg-white p-4 h-40 flex items-center justify-center overflow-hidden">
      {imageSrc ? (
        <img src={imageSrc} alt={title} className="max-w-full max-h-full object-contain" />
      ) : (
        children
      )}
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
      
      {/* Application Shells Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Application Shells</h2>
        <div className="grid grid-cols-4 gap-8">
          <ComponentPreview 
            title="Stacked Layouts" 
            imageSrc="/lovable-uploads/f6aa1b2b-7324-42fb-88a6-eb2edcd3e418.png"
          >
            <div className="w-full space-y-4">
              <div className="bg-primary h-8 rounded-md"></div>
              <div className="bg-muted h-20 rounded-md"></div>
              <div className="bg-muted-foreground h-6 rounded-md"></div>
            </div>
          </ComponentPreview>
          
          <ComponentPreview 
            title="Sidebar Layouts" 
            imageSrc="/lovable-uploads/336af692-23cf-4a8c-8757-162a4fd00375.png"
          >
            <div className="w-full h-full flex gap-2">
              <div className="bg-primary w-1/4 h-full rounded-md"></div>
              <div className="bg-muted flex-1 h-full rounded-md"></div>
            </div>
          </ComponentPreview>
          
          <ComponentPreview 
            title="Multi-Column Layouts" 
            imageSrc="/lovable-uploads/2a6fe280-07eb-4700-b96e-27c811b1229b.png"
          >
            <div className="w-full h-full grid grid-cols-3 gap-2">
              <div className="bg-muted h-full rounded-md"></div>
              <div className="bg-primary h-full rounded-md"></div>
              <div className="bg-muted h-full rounded-md"></div>
            </div>
          </ComponentPreview>
        </div>
      </section>
      
      {/* Headings Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Headings</h2>
        <div className="grid grid-cols-4 gap-8">
          <ComponentPreview 
            title="Page Headings" 
            imageSrc="/lovable-uploads/f2bce3ad-119e-4af8-90a1-747d0be6ddcb.png"
          >
            <div className="w-full space-y-2">
              <h1 className="text-2xl font-bold">Page Title</h1>
              <p className="text-sm text-muted-foreground">Page description goes here</p>
            </div>
          </ComponentPreview>
          
          <ComponentPreview 
            title="Card Headings" 
            imageSrc="/lovable-uploads/28388e70-d12e-4364-bd71-eba6e0e50463.png"
          >
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Card content here</p>
              </CardContent>
            </Card>
          </ComponentPreview>
          
          <ComponentPreview 
            title="Section Headings" 
            imageSrc="/lovable-uploads/e73d2eaa-08d8-4c55-b2af-ad567c65d4c9.png"
          >
            <div className="w-full space-y-4">
              <div className="space-y-1">
                <h3 className="text-lg font-medium">Section Title</h3>
                <p className="text-sm text-muted-foreground">Section description</p>
              </div>
              <Separator />
            </div>
          </ComponentPreview>
        </div>
      </section>
      
      {/* Data Display Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Data Display</h2>
        <div className="grid grid-cols-4 gap-8">
          <ComponentPreview 
            title="Description Lists" 
            imageSrc="/lovable-uploads/2b6d8e31-ad0e-4a2f-9740-f81d0d1614f7.png"
          >
            <div className="w-full">
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="font-medium">Name</dt>
                  <dd className="text-muted-foreground">John Doe</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-medium">Email</dt>
                  <dd className="text-muted-foreground">john@example.com</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-medium">Role</dt>
                  <dd className="text-muted-foreground">Admin</dd>
                </div>
              </dl>
            </div>
          </ComponentPreview>
          
          <ComponentPreview 
            title="Stats" 
            imageSrc="/lovable-uploads/63ff9463-6b61-42f7-8cbd-875aabcdfded.png"
          >
            <div className="w-full">
              <div className="space-y-1">
                <p className="text-3xl font-bold">2,453</p>
                <p className="text-sm text-muted-foreground">Total Users</p>
                <div className="flex items-center text-xs text-green-500">
                  <ChevronRight className="h-3 w-3 rotate-90" />
                  <span>12% from last month</span>
                </div>
              </div>
            </div>
          </ComponentPreview>
          
          <ComponentPreview 
            title="Calendars" 
            imageSrc="/lovable-uploads/f8656ab0-e07b-464f-b7ce-43531c3ff547.png"
          >
            <div className="w-full">
              <Calendar className="rounded-md border" />
            </div>
          </ComponentPreview>
        </div>
      </section>
      
      {/* Lists Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Lists</h2>
        <div className="grid grid-cols-4 gap-8">
          <ComponentPreview 
            title="Stacked Lists" 
            imageSrc="/lovable-uploads/cce9335f-ea04-4b4a-a4f8-b6137f0eb721.png"
          >
            <div className="w-full space-y-2">
              <div className="p-2 bg-muted rounded-md">List item 1</div>
              <div className="p-2 bg-muted rounded-md">List item 2</div>
              <div className="p-2 bg-muted rounded-md">List item 3</div>
            </div>
          </ComponentPreview>
          
          <ComponentPreview 
            title="Tables" 
            imageSrc="/lovable-uploads/f35315fb-e511-4371-a163-b95e77f580c8.png"
          >
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
          
          <ComponentPreview 
            title="Grid Lists" 
            imageSrc="/lovable-uploads/dc0dc3b4-3e0d-4471-8298-f0175662ddd4.png"
          >
            <div className="grid grid-cols-2 gap-2 w-full">
              <div className="p-2 bg-muted rounded-md text-center">1</div>
              <div className="p-2 bg-muted rounded-md text-center">2</div>
              <div className="p-2 bg-muted rounded-md text-center">3</div>
              <div className="p-2 bg-muted rounded-md text-center">4</div>
            </div>
          </ComponentPreview>
          
          <ComponentPreview 
            title="Feeds" 
            imageSrc="/lovable-uploads/44f389d2-a889-4705-9313-ea8a9a3aa8ac.png"
          >
            <div className="w-full space-y-3">
              <div className="flex items-start gap-2">
                <div className="h-8 w-8 rounded-full bg-primary flex-shrink-0"></div>
                <div className="space-y-1">
                  <p className="text-xs font-medium">User posted a comment</p>
                  <p className="text-xs text-muted-foreground">5m ago</p>
                </div>
              </div>
              <Separator />
              <div className="flex items-start gap-2">
                <div className="h-8 w-8 rounded-full bg-primary flex-shrink-0"></div>
                <div className="space-y-1">
                  <p className="text-xs font-medium">User liked your post</p>
                  <p className="text-xs text-muted-foreground">15m ago</p>
                </div>
              </div>
            </div>
          </ComponentPreview>
        </div>
      </section>
      
      {/* Forms Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Forms</h2>
        <div className="grid grid-cols-4 gap-8">
          <ComponentPreview 
            title="Form Layouts" 
            imageSrc="/lovable-uploads/e94f750f-1288-4b6b-9c20-a24f55cb6ab3.png"
          >
            <div className="w-full space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="Enter your email" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Password</label>
                <Input type="password" placeholder="Enter your password" />
              </div>
              <Button className="w-full">Submit</Button>
            </div>
          </ComponentPreview>
          
          <ComponentPreview 
            title="Input Groups" 
            imageSrc="/lovable-uploads/aa18e665-c276-4c3d-a3c6-a6e9ae300813.png"
          >
            <div className="w-full space-y-4">
              <div className="flex">
                <Input placeholder="Search..." className="rounded-r-none" />
                <Button className="rounded-l-none">Search</Button>
              </div>
              <div className="flex items-center space-x-2">
                <Input placeholder="0" className="w-20 text-center" />
                <span>to</span>
                <Input placeholder="100" className="w-20 text-center" />
              </div>
            </div>
          </ComponentPreview>
          
          <ComponentPreview 
            title="Select Menus" 
            imageSrc="/lovable-uploads/33d60e7d-b7a6-4c2c-bfe3-a20ca32e12b3.png"
          >
            <div className="w-full space-y-2">
              <label className="text-sm font-medium">Select an option</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </ComponentPreview>
          
          <ComponentPreview 
            title="Sign-in and Registration" 
            imageSrc="/lovable-uploads/0117e8b0-c04c-4ebd-bfbe-bab6bfe8fd93.png"
          >
            <div className="w-full space-y-3">
              <div className="text-center space-y-1">
                <h3 className="text-lg font-medium">Sign in</h3>
                <p className="text-xs text-muted-foreground">Enter your credentials</p>
              </div>
              <Input placeholder="Email" />
              <Input type="password" placeholder="Password" />
              <Button className="w-full">Sign in</Button>
              <p className="text-xs text-center">No account? <a href="#" className="text-primary">Sign up</a></p>
            </div>
          </ComponentPreview>
          
          <ComponentPreview 
            title="Textareas" 
            imageSrc="/lovable-uploads/0e8594f7-c522-4798-9abc-4b877d432f07.png"
          >
            <div className="w-full space-y-2">
              <label className="text-sm font-medium">Message</label>
              <Textarea placeholder="Type your message here..." />
            </div>
          </ComponentPreview>
          
          <ComponentPreview 
            title="Radio Groups" 
            imageSrc="/lovable-uploads/abb4af30-a9e5-449c-91ae-d4b1ff4183f0.png"
          >
            <div className="w-full">
              <RadioGroup defaultValue="option1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option1" id="option1" />
                  <label htmlFor="option1" className="text-sm">Option 1</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option2" id="option2" />
                  <label htmlFor="option2" className="text-sm">Option 2</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option3" id="option3" />
                  <label htmlFor="option3" className="text-sm">Option 3</label>
                </div>
              </RadioGroup>
            </div>
          </ComponentPreview>
          
          <ComponentPreview 
            title="Checkboxes" 
            imageSrc="/lovable-uploads/675e671e-9952-4356-9f52-5e907cf57360.png"
          >
            <div className="w-full space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms1" />
                <label htmlFor="terms1" className="text-sm">Accept terms</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="newsletter1" />
                <label htmlFor="newsletter1" className="text-sm">Subscribe to newsletter</label>
              </div>
            </div>
          </ComponentPreview>
          
          <ComponentPreview 
            title="Toggles" 
            imageSrc="/lovable-uploads/1b74fc55-a30b-43ff-959e-686d6ae0a794.png"
          >
            <div className="w-full space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm">Notifications</label>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm">Dark Mode</label>
                <Switch />
              </div>
            </div>
          </ComponentPreview>
          
          <ComponentPreview 
            title="Action Panels" 
            imageSrc="/lovable-uploads/e3772c64-f653-47a8-83d2-008c41f8885b.png"
          >
            <div className="w-full p-3 border rounded-md space-y-3">
              <h4 className="text-sm font-medium">Save changes?</h4>
              <p className="text-xs text-muted-foreground">Your changes will be lost if you don't save them.</p>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" size="sm">Cancel</Button>
                <Button size="sm">Save</Button>
              </div>
            </div>
          </ComponentPreview>
          
          <ComponentPreview 
            title="Comboboxes" 
            imageSrc="/lovable-uploads/4e9b0c43-ea41-4676-9c2c-9deaf4695477.png"
          >
            <div className="w-full">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    Select an option <ChevronRight className="h-4 w-4 -rotate-90" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="space-y-1">
                    <Button variant="ghost" className="w-full justify-start">Option 1</Button>
                    <Button variant="ghost" className="w-full justify-start">Option 2</Button>
                    <Button variant="ghost" className="w-full justify-start">Option 3</Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </ComponentPreview>
        </div>
      </section>
      
      {/* Feedback Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Feedback</h2>
        <div className="grid grid-cols-4 gap-8">
          <ComponentPreview 
            title="Alerts" 
            imageSrc="/lovable-uploads/e09d6f1e-de32-4e50-8e03-512be01774ef.png"
          >
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>This is an alert message.</AlertDescription>
            </Alert>
          </ComponentPreview>
          
          <ComponentPreview 
            title="Empty States" 
            imageSrc="/lovable-uploads/d12ac6c2-3852-4d6c-8fc9-bab883f641ce.png"
          >
            <div className="w-full text-center space-y-2">
              <div className="mx-auto h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                <Info className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-sm font-medium">No results found</h3>
              <p className="text-xs text-muted-foreground">Try adjusting your search or filter to find what you're looking for.</p>
              <Button variant="outline" size="sm">Clear filters</Button>
            </div>
          </ComponentPreview>
        </div>
      </section>
      
      {/* Navigation Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Navigation</h2>
        <div className="grid grid-cols-4 gap-8">
          <ComponentPreview 
            title="Navbars" 
            imageSrc="/lovable-uploads/db3253c7-f917-437b-953b-669f1612759a.png"
          >
            <div className="w-full px-4 py-2 border rounded-md flex items-center justify-between">
              <div className="font-bold">Logo</div>
              <div className="flex space-x-4">
                <a href="#" className="text-sm">Home</a>
                <a href="#" className="text-sm">About</a>
                <a href="#" className="text-sm">Contact</a>
              </div>
            </div>
          </ComponentPreview>
          
          <ComponentPreview 
            title="Pagination" 
            imageSrc="/lovable-uploads/67f0301e-ed87-4ba8-95f7-8c7aa0d1051b.png"
          >
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </ComponentPreview>
          
          <ComponentPreview 
            title="Tabs" 
            imageSrc="/lovable-uploads/d03a11a1-9eb2-4d95-997e-0bbdd0b7b728.png"
          >
            <Tabs defaultValue="tab1" className="w-full">
              <TabsList className="w-full">
                <TabsTrigger value="tab1" className="flex-1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2" className="flex-1">Tab 2</TabsTrigger>
                <TabsTrigger value="tab3" className="flex-1">Tab 3</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">Tab 1 content</TabsContent>
              <TabsContent value="tab2">Tab 2 content</TabsContent>
              <TabsContent value="tab3">Tab 3 content</TabsContent>
            </Tabs>
          </ComponentPreview>
          
          <ComponentPreview 
            title="Vertical Navigation" 
            imageSrc="/lovable-uploads/36091514-7bee-4fd5-a802-9c4b68723030.png"
          >
            <div className="w-full space-y-1">
              <div className="p-2 bg-primary/10 rounded-md text-primary">Home</div>
              <div className="p-2 hover:bg-muted rounded-md cursor-pointer">Products</div>
              <div className="p-2 hover:bg-muted rounded-md cursor-pointer">Services</div>
              <div className="p-2 hover:bg-muted rounded-md cursor-pointer">Contact</div>
            </div>
          </ComponentPreview>
          
          <ComponentPreview 
            title="Sidebar Navigation" 
            imageSrc="/lovable-uploads/5a74343d-166e-46d7-8b66-17ca3f00c7ca.png"
          >
            <div className="w-full border rounded-md p-3 space-y-3">
              <div className="font-bold text-sm border-b pb-2">Dashboard</div>
              <div className="space-y-1">
                <div className="p-2 text-xs bg-primary/10 rounded text-primary">Overview</div>
                <div className="p-2 text-xs hover:bg-muted rounded">Analytics</div>
                <div className="p-2 text-xs hover:bg-muted rounded">Reports</div>
              </div>
            </div>
          </ComponentPreview>
          
          <ComponentPreview 
            title="Breadcrumbs" 
            imageSrc="/lovable-uploads/20c74145-b9ab-42dd-b315-01794ff130af.png"
          >
            <div className="flex items-center space-x-1 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground">Home</a>
              <span className="text-muted-foreground">/</span>
              <a href="#" className="text-muted-foreground hover:text-foreground">Products</a>
              <span className="text-muted-foreground">/</span>
              <span className="font-medium">Categories</span>
            </div>
          </ComponentPreview>
          
          <ComponentPreview 
            title="Progress Bars" 
            imageSrc="/lovable-uploads/402157d5-a145-4dc1-bf72-dd1c75989d01.png"
          >
            <div className="w-full space-y-2">
              <div className="flex justify-between text-xs">
                <span>Progress</span>
                <span>40%</span>
              </div>
              <Progress value={40} className="h-2" />
            </div>
          </ComponentPreview>
          
          <ComponentPreview 
            title="Command Palettes" 
            imageSrc="/lovable-uploads/f2930016-563e-4c9f-9ae5-017e72e3b9a6.png"
          >
            <div className="w-full border rounded-md p-3 shadow-sm">
              <div className="flex items-center space-x-2 border-b pb-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <input className="flex-1 bg-transparent border-none outline-none text-sm placeholder:text-muted-foreground" placeholder="Search..." />
                <kbd className="bg-muted px-1.5 text-xs rounded">⌘K</kbd>
              </div>
              <div className="pt-2 space-y-1">
                <div className="px-2 py-1 text-xs hover:bg-muted rounded-md cursor-pointer">Search result 1</div>
                <div className="px-2 py-1 text-xs hover:bg-muted rounded-md cursor-pointer">Search result 2</div>
              </div>
            </div>
          </ComponentPreview>
        </div>
      </section>
      
      {/* Overlays Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Overlays</h2>
        <div className="grid grid-cols-4 gap-8">
          <ComponentPreview 
            title="Modal Dialogs" 
            imageSrc="/lovable-uploads/f8021fa2-a704-4416-a404-772812df2ccc.png"
          >
            <div className="w-full p-4 border rounded-md shadow-sm space-y-3">
              <div className="text-lg font-medium">Dialog Title</div>
              <p className="text-sm text-muted-foreground">This is a dialog content example.</p>
              <div className="flex justify-end space-x-2">
                <Button variant="outline">Cancel</Button>
                <Button>Confirm</Button>
              </div>
            </div>
          </ComponentPreview>
          
          <ComponentPreview 
            title="Drawers" 
            imageSrc="/lovable-uploads/215d9018-6a6f-4f71-98e9-11222f699e71.png"
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="relative w-full h-full border rounded-md">
                <div className="absolute right-0 top-0 bottom-0 w-2/3 bg-background border-l p-3">
                  <div className="text-sm font-medium mb-2">Drawer Title</div>
                  <p className="text-xs text-muted-foreground">Drawer content goes here.</p>
                </div>
              </div>
            </div>
          </ComponentPreview>
          
          <ComponentPreview 
            title="Notifications" 
            imageSrc="/lovable-uploads/9122593d-1414-466a-8973-62005dc9ce8a.png"
          >
            <div className="w-full p-3 border rounded-md bg-background shadow-md space-y-2">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-2">
                  <Info className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Notification Title</span>
                </div>
                <button className="text-muted-foreground hover:text-foreground">×</button>
              </div>
              <p className="text-xs text-muted-foreground">This is a notification message example.</p>
            </div>
          </ComponentPreview>
        </div>
      </section>
      
      {/* Elements Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Elements</h2>
        <div className="grid grid-cols-4 gap-8">
          <ComponentPreview 
            title="Avatars" 
            imageSrc="/lovable-uploads/aa6e96ca-2adf-4e2c-a5fa-2e7c5c4bb8f2.png"
          >
            <div className="flex space-x-2">
              <Avatar>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>CK</AvatarFallback>
              </Avatar>
            </div>
          </ComponentPreview>
          
          <ComponentPreview 
            title="Badges" 
            imageSrc="/lovable-uploads/c35e9291-3626-4ddb-af93-d78cfe2009ed.png"
          >
            <div className="flex space-x-2">
              <Badge>Default</Badge>
              <Badge variant="standard" color="secondary">Secondary</Badge>
            </div>
          </ComponentPreview>
          
          <ComponentPreview 
            title="Dropdowns" 
            imageSrc="/lovable-uploads/f584be26-3717-44fb-b15f-876d5aba156d.png"
          >
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  Dropdown <ChevronRight className="h-4 w-4 -rotate-90 ml-2" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-40">
                <div className="space-y-1">
                  <Button variant="ghost" className="w-full justify-start text-sm">Option 1</Button>
                  <Button variant="ghost" className="w-full justify-start text-sm">Option 2</Button>
                  <Button variant="ghost" className="w-full justify-start text-sm">Option 3</Button>
                </div>
              </PopoverContent>
            </Popover>
          </ComponentPreview>
          
          <ComponentPreview 
            title="Buttons" 
            imageSrc="/lovable-uploads/caa4818d-d6ea-4955-b169-ba1550c8d046.png"
          >
            <div className="flex flex-col space-y-2 w-full">
              <Button variant="default">Default</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </ComponentPreview>
          
          <ComponentPreview 
            title="Button Groups" 
            imageSrc="/lovable-uploads/77a7db39-32cb-4482-b43e-fb2e4bfe9261.png"
          >
            <div className="flex border rounded-md overflow-hidden">
              <Button className="rounded-none border-r border-primary-foreground/20">Option 1</Button>
              <Button className="rounded-none border-r border-primary-foreground/20">Option 2</Button>
              <Button className="rounded-none">Option 3</Button>
            </div>
          </ComponentPreview>
        </div>
      </section>
      
      {/* Layout Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Layout</h2>
        <div className="grid grid-cols-4 gap-8">
          <ComponentPreview 
            title="Containers" 
            imageSrc="/lovable-uploads/a039a7f8-a787-4132-99e8-c748a899e91f.png"
          >
            <div className="w-full h-full p-4 border border-dashed rounded-md flex items-center justify-center">
              <span className="text-sm">Container</span>
            </div>
          </ComponentPreview>
          
          <ComponentPreview 
            title="Cards" 
            imageSrc="/lovable-uploads/47a3f494-ddfa-4646-ab96-41e21322fccb.png"
          >
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Card content here</p>
              </CardContent>
            </Card>
          </ComponentPreview>
          
          <ComponentPreview 
            title="List containers" 
            imageSrc="/lovable-uploads/0fa6138b-8204-4b4d-bcb3-ddb6e6fb224f.png"
          >
            <div className="w-full border rounded-md overflow-hidden">
              <div className="p-3 border-b font-medium text-sm">List Title</div>
              <div className="divide-y">
                <div className="p-3 text-sm">List Item 1</div>
                <div className="p-3 text-sm">List Item 2</div>
                <div className="p-3 text-sm">List Item 3</div>
              </div>
            </div>
          </ComponentPreview>
          
          <ComponentPreview 
            title="Media Objects" 
            imageSrc="/lovable-uploads/b6cdb5a4-4b56-4ed1-bc7b-a6bd4eb097e0.png"
          >
            <div className="flex space-x-3">
              <div className="h-12 w-12 bg-muted rounded-md flex-shrink-0"></div>
              <div>
                <h4 className="text-sm font-medium">Media Object Title</h4>
                <p className="text-xs text-muted-foreground">Media object description goes here.</p>
              </div>
            </div>
          </ComponentPreview>
          
          <ComponentPreview 
            title="Dividers" 
            imageSrc="/lovable-uploads/23aa6beb-9a06-465f-9682-36cfac592563.png"
          >
            <div className="w-full space-y-3">
              <div className="text-sm">Content above</div>
              <Separator />
              <div className="text-sm">Content below</div>
            </div>
          </ComponentPreview>
        </div>
      </section>
      
      {/* Page Examples Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Page Examples</h2>
        <div className="grid grid-cols-4 gap-8">
          <ComponentPreview 
            title="Home Screens" 
            imageSrc="/lovable-uploads/a51cb4d7-1566-4920-b3e8-bfcbea22d41b.png"
          >
            <div className="w-full space-y-3 text-left">
              <div className="h-4 bg-primary/20 rounded w-1/2"></div>
              <div className="h-6 bg-primary/30 rounded w-3/4"></div>
              <div className="grid grid-cols-2 gap-2">
                <div className="h-10 bg-muted rounded"></div>
                <div className="h-10 bg-muted rounded"></div>
              </div>
              <div className="h-20 bg-muted rounded"></div>
            </div>
          </ComponentPreview>
          
          <ComponentPreview 
            title="Detail Screens" 
            imageSrc="/lovable-uploads/25514172-9036-498c-832b-51524261a218.png"
          >
            <div className="w-full space-y-3 text-left">
              <div className="h-6 bg-primary/30 rounded w-3/4"></div>
              <div className="h-4 bg-muted rounded w-1/2"></div>
              <div className="h-20 bg-muted/50 rounded"></div>
              <div className="flex justify-between">
                <div className="h-8 w-16 bg-primary rounded"></div>
                <div className="h-8 w-16 bg-muted rounded"></div>
              </div>
            </div>
          </ComponentPreview>
          
          <ComponentPreview 
            title="Settings Screens" 
            imageSrc="/lovable-uploads/4957e8ff-4c9e-4d96-9a03-e0059c691a40.png"
          >
            <div className="w-full space-y-3 text-left">
              <div className="h-6 bg-primary/30 rounded w-1/2"></div>
              <div className="p-2 border rounded flex justify-between items-center">
                <div className="h-4 bg-muted rounded w-1/3"></div>
                <Switch />
              </div>
              <div className="p-2 border rounded flex justify-between items-center">
                <div className="h-4 bg-muted rounded w-1/3"></div>
                <Switch />
              </div>
              <div className="p-2 border rounded flex justify-between items-center">
                <div className="h-4 bg-muted rounded w-1/3"></div>
                <Switch />
              </div>
            </div>
          </ComponentPreview>
        </div>
      </section>
    </div>
  );
};

export default UIKit;

