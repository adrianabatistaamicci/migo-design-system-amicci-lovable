
import React from 'react';
import ComponentCard from '@/components/ComponentCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Star, User, Mail, Settings, FileText, Home, Info, Check, X, Plus, Help } from 'lucide-react';

const TabsPage = () => {
  return <div className="w-full animate-slide-in">
      <div className="mb-12">
        <div className="flex items-center gap-2 text-sm text-mui-primary font-medium mb-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-mui-primary/10 text-mui-primary">
            Component
          </span>
        </div>
        
        <h1 className="text-4xl font-medium text-mui-text-primary mb-4">
          Tabs
        </h1>
        
        <p className="text-xl text-mui-text-secondary mb-8">
          Tabs organize content into multiple sections and allow users to navigate between them.
        </p>
        
        <div className="mb-12">
          <h2 className="text-2xl font-medium text-mui-text-primary mb-6">
            Import
          </h2>
          
          <pre className="bg-mui-sidebar p-4 rounded-md overflow-x-auto text-sm">
            <code>import {'{ Tabs, TabsList, TabsTrigger, TabsContent }'} from "@/components/ui/tabs";</code>
          </pre>
        </div>
        
        <div className="space-y-12">
          <ComponentCard title="Tabs with Underline (Default)" description="The default tabs component with an underline indicator." code={`<Tabs defaultValue="account" variant="underline" className="w-full max-w-md">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account" className="p-4 border rounded-b-md mt-1">
    <h3 className="text-lg font-medium mb-2">Account Settings</h3>
    <p className="text-sm text-gray-500">
      Manage your account settings and preferences.
    </p>
  </TabsContent>
  <TabsContent value="password" className="p-4 border rounded-b-md mt-1">
    <h3 className="text-lg font-medium mb-2">Password Settings</h3>
    <p className="text-sm text-gray-500">
      Change your password and secure your account.
    </p>
  </TabsContent>
</Tabs>`}>
            <div className="w-full ">
              <Tabs defaultValue="account" variant="underline" className="w-full">
                <TabsList>
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
                <TabsContent value="account" className="p-4 border rounded-b-md mt-1">
                  <h3 className="text-lg font-medium mb-2">Account Settings</h3>
                  <p className="text-sm text-gray-500">
                    Manage your account settings and preferences.
                  </p>
                </TabsContent>
                <TabsContent value="password" className="p-4 border rounded-b-md mt-1">
                  <h3 className="text-lg font-medium mb-2">Password Settings</h3>
                  <p className="text-sm text-gray-500">
                    Change your password and secure your account.
                  </p>
                </TabsContent>
              </Tabs>
            </div>
          </ComponentCard>

          <ComponentCard title="Tabs with Underline and Icons" description="Tabs with underline indicator and icons for visual enhancement." code={`<Tabs defaultValue="overview" variant="underline" className="w-full max-w-md">
  <TabsList>
    <TabsTrigger 
      value="overview" 
      icon={<Home className="h-4 w-4" />}
    >
      Overview
    </TabsTrigger>
    <TabsTrigger 
      value="analytics" 
      icon={<FileText className="h-4 w-4" />}
    >
      Analytics
    </TabsTrigger>
    <TabsTrigger 
      value="settings" 
      icon={<Settings className="h-4 w-4" />}
    >
      Settings
    </TabsTrigger>
  </TabsList>
  <TabsContent value="overview" className="p-4 border rounded-b-md mt-1">
    <p className="text-sm">Overview content</p>
  </TabsContent>
  <TabsContent value="analytics" className="p-4 border rounded-b-md mt-1">
    <p className="text-sm">Analytics content</p>
  </TabsContent>
  <TabsContent value="settings" className="p-4 border rounded-b-md mt-1">
    <p className="text-sm">Settings content</p>
  </TabsContent>
</Tabs>`}>
            <div className="w-full max-w-md mx-auto py-6">
              <Tabs defaultValue="overview" variant="underline" className="w-full">
                <TabsList>
                  <TabsTrigger value="overview" icon={<Home className="h-4 w-4" />}>
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value="analytics" icon={<FileText className="h-4 w-4" />}>
                    Analytics
                  </TabsTrigger>
                  <TabsTrigger value="settings" icon={<Settings className="h-4 w-4" />}>
                    Settings
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="p-4 border rounded-b-md mt-1">
                  <p className="text-sm">Overview content</p>
                </TabsContent>
                <TabsContent value="analytics" className="p-4 border rounded-b-md mt-1">
                  <p className="text-sm">Analytics content</p>
                </TabsContent>
                <TabsContent value="settings" className="p-4 border rounded-b-md mt-1">
                  <p className="text-sm">Settings content</p>
                </TabsContent>
              </Tabs>
            </div>
          </ComponentCard>

          <ComponentCard title="Tabs in Pills" description="Tabs displayed as clickable pills with subtle background change." code={`<Tabs defaultValue="tab1" variant="pills" className="w-full max-w-md">
  <TabsList>
    <TabsTrigger value="tab1">Dashboard</TabsTrigger>
    <TabsTrigger value="tab2">Team</TabsTrigger>
    <TabsTrigger value="tab3">Projects</TabsTrigger>
    <TabsTrigger value="tab4">Calendar</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1" className="p-4 border rounded-md mt-3">
    <p className="text-sm">Dashboard content</p>
  </TabsContent>
  <TabsContent value="tab2" className="p-4 border rounded-md mt-3">
    <p className="text-sm">Team content</p>
  </TabsContent>
  <TabsContent value="tab3" className="p-4 border rounded-md mt-3">
    <p className="text-sm">Projects content</p>
  </TabsContent>
  <TabsContent value="tab4" className="p-4 border rounded-md mt-3">
    <p className="text-sm">Calendar content</p>
  </TabsContent>
</Tabs>`}>
            <div className="w-full max-w-md mx-auto py-6">
              <Tabs defaultValue="tab1" variant="pills" className="w-full">
                <TabsList>
                  <TabsTrigger value="tab1">Dashboard</TabsTrigger>
                  <TabsTrigger value="tab2">Team</TabsTrigger>
                  <TabsTrigger value="tab3">Projects</TabsTrigger>
                  <TabsTrigger value="tab4">Calendar</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="p-4 border rounded-md mt-3">
                  <p className="text-sm">Dashboard content</p>
                </TabsContent>
                <TabsContent value="tab2" className="p-4 border rounded-md mt-3">
                  <p className="text-sm">Team content</p>
                </TabsContent>
                <TabsContent value="tab3" className="p-4 border rounded-md mt-3">
                  <p className="text-sm">Projects content</p>
                </TabsContent>
                <TabsContent value="tab4" className="p-4 border rounded-md mt-3">
                  <p className="text-sm">Calendar content</p>
                </TabsContent>
              </Tabs>
            </div>
          </ComponentCard>

          <ComponentCard title="Tabs in Pills on Gray" description="Tabs in a pill format on a gray background for better contrast." code={`<Tabs defaultValue="tab1" variant="pills-gray" className="w-full max-w-md">
  <TabsList>
    <TabsTrigger value="tab1">Dashboard</TabsTrigger>
    <TabsTrigger value="tab2">Team</TabsTrigger>
    <TabsTrigger value="tab3">Projects</TabsTrigger>
    <TabsTrigger value="tab4">Calendar</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1" className="p-4 border rounded-md mt-3">
    <p className="text-sm">Dashboard content</p>
  </TabsContent>
  <TabsContent value="tab2" className="p-4 border rounded-md mt-3">
    <p className="text-sm">Team content</p>
  </TabsContent>
  <TabsContent value="tab3" className="p-4 border rounded-md mt-3">
    <p className="text-sm">Projects content</p>
  </TabsContent>
  <TabsContent value="tab4" className="p-4 border rounded-md mt-3">
    <p className="text-sm">Calendar content</p>
  </TabsContent>
</Tabs>`}>
            <div className="w-full max-w-md mx-auto py-6">
              <Tabs defaultValue="tab1" variant="pills-gray" className="w-full">
                <TabsList>
                  <TabsTrigger value="tab1">Dashboard</TabsTrigger>
                  <TabsTrigger value="tab2">Team</TabsTrigger>
                  <TabsTrigger value="tab3">Projects</TabsTrigger>
                  <TabsTrigger value="tab4">Calendar</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="p-4 border rounded-md mt-3">
                  <p className="text-sm">Dashboard content</p>
                </TabsContent>
                <TabsContent value="tab2" className="p-4 border rounded-md mt-3">
                  <p className="text-sm">Team content</p>
                </TabsContent>
                <TabsContent value="tab3" className="p-4 border rounded-md mt-3">
                  <p className="text-sm">Projects content</p>
                </TabsContent>
                <TabsContent value="tab4" className="p-4 border rounded-md mt-3">
                  <p className="text-sm">Calendar content</p>
                </TabsContent>
              </Tabs>
            </div>
          </ComponentCard>

          <ComponentCard title="Tabs in Pills with Brand Color" description="Tabs in a pill format with the brand color for the active tab." code={`<Tabs defaultValue="tab1" variant="pills-brand" className="w-full max-w-md">
  <TabsList>
    <TabsTrigger value="tab1">Dashboard</TabsTrigger>
    <TabsTrigger value="tab2">Team</TabsTrigger>
    <TabsTrigger value="tab3">Projects</TabsTrigger>
    <TabsTrigger value="tab4">Calendar</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1" className="p-4 border rounded-md mt-3">
    <p className="text-sm">Dashboard content</p>
  </TabsContent>
  <TabsContent value="tab2" className="p-4 border rounded-md mt-3">
    <p className="text-sm">Team content</p>
  </TabsContent>
  <TabsContent value="tab3" className="p-4 border rounded-md mt-3">
    <p className="text-sm">Projects content</p>
  </TabsContent>
  <TabsContent value="tab4" className="p-4 border rounded-md mt-3">
    <p className="text-sm">Calendar content</p>
  </TabsContent>
</Tabs>`}>
            <div className="w-full max-w-md mx-auto py-6">
              <Tabs defaultValue="tab1" variant="pills-brand" className="w-full">
                <TabsList>
                  <TabsTrigger value="tab1">Dashboard</TabsTrigger>
                  <TabsTrigger value="tab2">Team</TabsTrigger>
                  <TabsTrigger value="tab3">Projects</TabsTrigger>
                  <TabsTrigger value="tab4">Calendar</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="p-4 border rounded-md mt-3">
                  <p className="text-sm">Dashboard content</p>
                </TabsContent>
                <TabsContent value="tab2" className="p-4 border rounded-md mt-3">
                  <p className="text-sm">Team content</p>
                </TabsContent>
                <TabsContent value="tab3" className="p-4 border rounded-md mt-3">
                  <p className="text-sm">Projects content</p>
                </TabsContent>
                <TabsContent value="tab4" className="p-4 border rounded-md mt-3">
                  <p className="text-sm">Calendar content</p>
                </TabsContent>
              </Tabs>
            </div>
          </ComponentCard>

          <ComponentCard title="Full-width Tabs with Underline" description="Tabs that expand to fill the entire width with an underline for the active tab." code={`<Tabs defaultValue="tab1" variant="fullWidth" className="w-full max-w-md">
  <TabsList className="w-full">
    <TabsTrigger value="tab1">Dashboard</TabsTrigger>
    <TabsTrigger value="tab2">Team</TabsTrigger>
    <TabsTrigger value="tab3">Projects</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1" className="p-4 border rounded-b-md mt-1">
    <p className="text-sm">Dashboard content</p>
  </TabsContent>
  <TabsContent value="tab2" className="p-4 border rounded-b-md mt-1">
    <p className="text-sm">Team content</p>
  </TabsContent>
  <TabsContent value="tab3" className="p-4 border rounded-b-md mt-1">
    <p className="text-sm">Projects content</p>
  </TabsContent>
</Tabs>`}>
            <div className="w-full max-w-md mx-auto py-6">
              <Tabs defaultValue="tab1" variant="fullWidth" className="w-full">
                <TabsList className="w-full">
                  <TabsTrigger value="tab1">Dashboard</TabsTrigger>
                  <TabsTrigger value="tab2">Team</TabsTrigger>
                  <TabsTrigger value="tab3">Projects</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="p-4 border rounded-b-md mt-1">
                  <p className="text-sm">Dashboard content</p>
                </TabsContent>
                <TabsContent value="tab2" className="p-4 border rounded-b-md mt-1">
                  <p className="text-sm">Team content</p>
                </TabsContent>
                <TabsContent value="tab3" className="p-4 border rounded-b-md mt-1">
                  <p className="text-sm">Projects content</p>
                </TabsContent>
              </Tabs>
            </div>
          </ComponentCard>

          <ComponentCard title="Bar with Underline" description="A minimalist bar with an underline for the active tab." code={`<Tabs defaultValue="tab1" variant="bar" className="w-full max-w-md">
  <TabsList>
    <TabsTrigger value="tab1">Overview</TabsTrigger>
    <TabsTrigger value="tab2">Features</TabsTrigger>
    <TabsTrigger value="tab3">Pricing</TabsTrigger>
    <TabsTrigger value="tab4">FAQs</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1" className="p-4 mt-4">
    <p className="text-sm">Overview content</p>
  </TabsContent>
  <TabsContent value="tab2" className="p-4 mt-4">
    <p className="text-sm">Features content</p>
  </TabsContent>
  <TabsContent value="tab3" className="p-4 mt-4">
    <p className="text-sm">Pricing content</p>
  </TabsContent>
  <TabsContent value="tab4" className="p-4 mt-4">
    <p className="text-sm">FAQs content</p>
  </TabsContent>
</Tabs>`}>
            <div className="w-full max-w-md mx-auto py-6">
              <Tabs defaultValue="tab1" variant="bar" className="w-full">
                <TabsList>
                  <TabsTrigger value="tab1">Overview</TabsTrigger>
                  <TabsTrigger value="tab2">Features</TabsTrigger>
                  <TabsTrigger value="tab3">Pricing</TabsTrigger>
                  <TabsTrigger value="tab4">FAQs</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="p-4 mt-4">
                  <p className="text-sm">Overview content</p>
                </TabsContent>
                <TabsContent value="tab2" className="p-4 mt-4">
                  <p className="text-sm">Features content</p>
                </TabsContent>
                <TabsContent value="tab3" className="p-4 mt-4">
                  <p className="text-sm">Pricing content</p>
                </TabsContent>
                <TabsContent value="tab4" className="p-4 mt-4">
                  <p className="text-sm">FAQs content</p>
                </TabsContent>
              </Tabs>
            </div>
          </ComponentCard>

          <ComponentCard title="Tabs with Underline and Badges" description="Tabs with an underline and badges to display counters or status indicators." code={`<Tabs defaultValue="tab1" variant="underline-badges" className="w-full max-w-md">
  <TabsList>
    <TabsTrigger 
      value="tab1" 
      badge={<Badge variant="secondary" className="ml-2">12</Badge>}
    >
      Inbox
    </TabsTrigger>
    <TabsTrigger 
      value="tab2" 
      badge={<Badge variant="secondary" className="ml-2">4</Badge>}
    >
      Spam
    </TabsTrigger>
    <TabsTrigger 
      value="tab3" 
      badge={<Badge variant="secondary" className="ml-2">2</Badge>}
    >
      Archived
    </TabsTrigger>
  </TabsList>
  <TabsContent value="tab1" className="p-4 border rounded-b-md mt-1">
    <p className="text-sm">Inbox content</p>
  </TabsContent>
  <TabsContent value="tab2" className="p-4 border rounded-b-md mt-1">
    <p className="text-sm">Spam content</p>
  </TabsContent>
  <TabsContent value="tab3" className="p-4 border rounded-b-md mt-1">
    <p className="text-sm">Archived content</p>
  </TabsContent>
</Tabs>`}>
            <div className="w-full max-w-md mx-auto py-6">
              <Tabs defaultValue="tab1" variant="underline-badges" className="w-full">
                <TabsList>
                  <TabsTrigger 
                    value="tab1" 
                    badge={<Badge variant="secondary" className="ml-2">12</Badge>}
                  >
                    Inbox
                  </TabsTrigger>
                  <TabsTrigger 
                    value="tab2" 
                    badge={<Badge variant="secondary" className="ml-2">4</Badge>}
                  >
                    Spam
                  </TabsTrigger>
                  <TabsTrigger 
                    value="tab3" 
                    badge={<Badge variant="secondary" className="ml-2">2</Badge>}
                  >
                    Archived
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="p-4 border rounded-b-md mt-1">
                  <p className="text-sm">Inbox content</p>
                </TabsContent>
                <TabsContent value="tab2" className="p-4 border rounded-b-md mt-1">
                  <p className="text-sm">Spam content</p>
                </TabsContent>
                <TabsContent value="tab3" className="p-4 border rounded-b-md mt-1">
                  <p className="text-sm">Archived content</p>
                </TabsContent>
              </Tabs>
            </div>
          </ComponentCard>
          
          <div className="mt-12">
            <h2 className="text-2xl font-medium text-mui-text-primary mb-6">
              API Reference
            </h2>
            
            <div className="border border-mui-border rounded-lg overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-mui-sidebar">
                    <TableHead className="w-1/4">Component</TableHead>
                    <TableHead className="w-3/4">Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-mono text-mui-text-primary">Tabs</TableCell>
                    <TableCell className="text-mui-text-secondary">Container component that manages the state of all tabs.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-mui-text-primary">TabsList</TableCell>
                    <TableCell className="text-mui-text-secondary">Contains the tab triggers.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-mui-text-primary">TabsTrigger</TableCell>
                    <TableCell className="text-mui-text-secondary">The button used to activate a tab panel.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-mui-text-primary">TabsContent</TableCell>
                    <TableCell className="text-mui-text-secondary">Contains the content associated with each tab.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <h3 className="text-xl font-medium text-mui-text-primary my-6">
              Tabs Props
            </h3>
            
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
                    <TableCell className="font-mono text-mui-text-primary">defaultValue</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">string</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">undefined</TableCell>
                    <TableCell className="text-mui-text-secondary">The default value of the tabs (uncontrolled).</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-mui-text-primary">value</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">string</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">undefined</TableCell>
                    <TableCell className="text-mui-text-secondary">The controlled value of the tabs.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-mui-text-primary">onValueChange</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">function</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">undefined</TableCell>
                    <TableCell className="text-mui-text-secondary">Callback when the tabs value changes.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-mui-text-primary">orientation</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">"horizontal" | "vertical"</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">"horizontal"</TableCell>
                    <TableCell className="text-mui-text-secondary">The orientation of the tabs.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-mui-text-primary">variant</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">"underline" | "pills" | "pills-gray" | "pills-brand" | "fullWidth" | "bar" | "underline-badges"</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">"underline"</TableCell>
                    <TableCell className="text-mui-text-secondary">The visual style variant of the tabs.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-mui-text-primary">smallScreen</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">boolean</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">false</TableCell>
                    <TableCell className="text-mui-text-secondary">Whether to use a compact layout for small screens.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-mui-text-primary">scrollable</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">boolean</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">false</TableCell>
                    <TableCell className="text-mui-text-secondary">Whether the tabs should be scrollable.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-mui-text-primary">fullWidth</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">boolean</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">false</TableCell>
                    <TableCell className="text-mui-text-secondary">Whether the tabs should take up the full width of their container.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-mui-text-primary">activeColor</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">"primary" | "secondary" | "none"</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">"primary"</TableCell>
                    <TableCell className="text-mui-text-secondary">The color of the active tab indicator.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <h3 className="text-xl font-medium text-mui-text-primary my-6">
              TabsTrigger Props
            </h3>
            
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
                    <TableCell className="font-mono text-mui-text-primary">value</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">string</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">required</TableCell>
                    <TableCell className="text-mui-text-secondary">The value of the tab. Must match the value of the corresponding TabsContent.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-mui-text-primary">disabled</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">boolean</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">false</TableCell>
                    <TableCell className="text-mui-text-secondary">Whether the tab is disabled.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-mui-text-primary">icon</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">ReactNode</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">undefined</TableCell>
                    <TableCell className="text-mui-text-secondary">An optional icon to display with the tab text.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-mui-text-primary">iconPosition</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">"left" | "right" | "up"</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">"left"</TableCell>
                    <TableCell className="text-mui-text-secondary">The position of the icon relative to the text.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-mui-text-primary">badge</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">ReactNode</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">undefined</TableCell>
                    <TableCell className="text-mui-text-secondary">An optional badge to display with the tab text.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-mui-text-primary">activeColor</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">"primary" | "secondary" | "none"</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">"primary"</TableCell>
                    <TableCell className="text-mui-text-secondary">The color of the active tab indicator.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>;
};

export default TabsPage;
