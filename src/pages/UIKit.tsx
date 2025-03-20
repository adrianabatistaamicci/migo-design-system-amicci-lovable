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
import { AlertCircle, Check, ChevronRight, CircleAlert, Info, Minus, Plus, Search } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Calendar } from '@/components/ui/calendar';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Progress } from '@/components/ui/progress';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

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
      
      {/* Application Shells Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Application Shells</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <ComponentPreview title="Stacked Layouts">
            <div className="w-full space-y-4">
              <div className="bg-primary h-8 rounded-md"></div>
              <div className="bg-muted h-20 rounded-md"></div>
              <div className="bg-muted-foreground h-6 rounded-md"></div>
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Sidebar Layouts">
            <div className="w-full h-full flex gap-2">
              <div className="bg-primary w-1/4 h-full rounded-md"></div>
              <div className="bg-muted flex-1 h-full rounded-md"></div>
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Multi-Column Layouts">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <ComponentPreview title="Page Headings">
            <div className="w-full space-y-2">
              <h1 className="text-2xl font-bold">Page Title</h1>
              <p className="text-sm text-muted-foreground">Page description goes here</p>
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Card Headings">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Card content here</p>
              </CardContent>
            </Card>
          </ComponentPreview>
          
          <ComponentPreview title="Section Headings">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <ComponentPreview title="Description Lists">
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
          
          <ComponentPreview title="Stats">
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
          
          <ComponentPreview title="Calendars">
            <div className="w-full">
              <Calendar className="rounded-md border" />
            </div>
          </ComponentPreview>
        </div>
      </section>
      
      {/* Lists Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Lists</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <ComponentPreview title="Stacked Lists">
            <div className="w-full space-y-2">
              <div className="p-2 bg-muted rounded-md">List item 1</div>
              <div className="p-2 bg-muted rounded-md">List item 2</div>
              <div className="p-2 bg-muted rounded-md">List item 3</div>
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Tables">
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
          
          <ComponentPreview title="Grid Lists">
            <div className="grid grid-cols-2 gap-2 w-full">
              <div className="p-2 bg-muted rounded-md text-center">1</div>
              <div className="p-2 bg-muted rounded-md text-center">2</div>
              <div className="p-2 bg-muted rounded-md text-center">3</div>
              <div className="p-2 bg-muted rounded-md text-center">4</div>
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Feeds">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <ComponentPreview title="Form Layouts">
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
          
          <ComponentPreview title="Input Groups">
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
          
          <ComponentPreview title="Select Menus">
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
          
          <ComponentPreview title="Sign-in and Registration">
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
          
          <ComponentPreview title="Textareas">
            <div className="w-full space-y-2">
              <label className="text-sm font-medium">Message</label>
              <Textarea placeholder="Type your message here..." />
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Radio Groups">
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
          
          <ComponentPreview title="Checkboxes">
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
          
          <ComponentPreview title="Toggles">
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
          
          <ComponentPreview title="Action Panels">
            <div className="w-full p-3 border rounded-md space-y-3">
              <h4 className="text-sm font-medium">Save changes?</h4>
              <p className="text-xs text-muted-foreground">Your changes will be lost if you don't save them.</p>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" size="sm">Cancel</Button>
                <Button size="sm">Save</Button>
              </div>
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Comboboxes">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          <ComponentPreview title="Alerts">
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>This is an alert message.</AlertDescription>
            </Alert>
          </ComponentPreview>
          
          <ComponentPreview title="Empty States">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <ComponentPreview title="Navbars">
            <div className="w-full px-4 py-2 border rounded-md flex items-center justify-between">
              <div className="font-bold">Logo</div>
              <div className="flex space-x-4">
                <a href="#" className="text-sm">Home</a>
                <a href="#" className="text-sm">About</a>
                <a href="#" className="text-sm">Contact</a>
              </div>
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Pagination">
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
          
          <ComponentPreview title="Tabs">
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
          
          <ComponentPreview title="Vertical Navigation">
            <div className="w-full space-y-1">
              <div className="p-2 bg-primary/10 rounded-md text-primary">Home</div>
              <div className="p-2 hover:bg-muted rounded-md cursor-pointer">Products</div>
              <div className="p-2 hover:bg-muted rounded-md cursor-pointer">Services</div>
              <div className="p-2 hover:bg-muted rounded-md cursor-pointer">Contact</div>
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Sidebar Navigation">
            <div className="w-full border rounded-md p-3 space-y-3">
              <div className="font-bold text-sm border-b pb-2">Dashboard</div>
              <div className="space-y-1">
                <div className="p-2 text-xs bg-primary/10 rounded text-primary">Overview</div>
                <div className="p-2 text-xs hover:bg-muted rounded">Analytics</div>
                <div className="p-2 text-xs hover:bg-muted rounded">Reports</div>
              </div>
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Breadcrumbs">
            <div className="flex items-center space-x-1 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground">Home</a>
              <span className="text-muted-foreground">/</span>
              <a href="#" className="text-muted-foreground hover:text-foreground">Products</a>
              <span className="text-muted-foreground">/</span>
              <span className="font-medium">Categories</span>
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Progress Bars">
            <div className="w-full space-y-2">
              <div className="flex justify-between text-xs">
                <span>Progress</span>
                <span>40%</span>
              </div>
              <Progress value={40} className="h-2" />
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Command Palettes">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <ComponentPreview title="Modal Dialogs">
            <div className="w-full p-4 border rounded-md shadow-sm space-y-3">
              <div className="text-lg font-medium">Dialog Title</div>
              <p className="text-sm text-muted-foreground">This is a dialog content example.</p>
              <div className="flex justify-end space-x-2">
                <Button variant="outline">Cancel</Button>
                <Button>Confirm</Button>
              </div>
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Drawers">
            <div className="w-full h-full flex items-center justify-center">
              <div className="relative w-full h-full border rounded-md">
                <div className="absolute right-0 top-0 bottom-0 w-2/3 bg-background border-l p-3">
                  <div className="text-sm font-medium mb-2">Drawer Title</div>
                  <p className="text-xs text-muted-foreground">Drawer content goes here.</p>
                </div>
              </div>
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Notifications">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <ComponentPreview title="Avatars">
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
          
          <ComponentPreview title="Badges">
            <div className="flex space-x-2">
              <Badge>Default</Badge>
              <Badge variant="standard" color="secondary">Secondary</Badge>
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Dropdowns">
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
          
          <ComponentPreview title="Buttons">
            <div className="flex flex-col space-y-2 w-full">
              <Button variant="default">Default</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Button Groups">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <ComponentPreview title="Containers">
            <div className="w-full h-full p-4 border border-dashed rounded-md flex items-center justify-center">
              <span className="text-sm">Container</span>
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Cards">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Card content here</p>
              </CardContent>
            </Card>
          </ComponentPreview>
          
          <ComponentPreview title="List containers">
            <div className="w-full border rounded-md overflow-hidden">
              <div className="p-3 border-b font-medium text-sm">List Title</div>
              <div className="divide-y">
                <div className="p-3 text-sm">List Item 1</div>
                <div className="p-3 text-sm">List Item 2</div>
                <div className="p-3 text-sm">List Item 3</div>
              </div>
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Media Objects">
            <div className="flex space-x-3">
              <div className="h-12 w-12 bg-muted rounded-md flex-shrink-0"></div>
              <div>
                <h4 className="text-sm font-medium">Media Object Title</h4>
                <p className="text-xs text-muted-foreground">Media object description goes here.</p>
              </div>
            </div>
          </ComponentPreview>
          
          <ComponentPreview title="Dividers">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <ComponentPreview title="Home Screens">
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
          
          <ComponentPreview title="Detail Screens">
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
          
          <ComponentPreview title="Settings Screens">
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
