
import React from 'react';
import ComponentCard from '@/components/ComponentCard';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';

const TabsPage = () => {
  return (
    <div className="w-full animate-slide-in">
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
          <ComponentCard 
            title="Basic Tabs" 
            description="A simple tabs component with multiple panels."
            code={`<Tabs defaultValue="account" className="w-full max-w-md">
  <TabsList className="w-full grid grid-cols-2">
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
</Tabs>`}
          >
            <div className="w-full max-w-md mx-auto py-6">
              <Tabs defaultValue="account" className="w-full">
                <TabsList className="w-full grid grid-cols-2">
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
          
          <ComponentCard 
            title="Multiple Tabs" 
            description="Tabs with more than two options."
            code={`<Tabs defaultValue="tab1" className="w-full max-w-md">
  <TabsList className="w-full grid grid-cols-3">
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1" className="p-4 border rounded-b-md mt-1">
    <p className="text-sm">Content for tab 1</p>
  </TabsContent>
  <TabsContent value="tab2" className="p-4 border rounded-b-md mt-1">
    <p className="text-sm">Content for tab 2</p>
  </TabsContent>
  <TabsContent value="tab3" className="p-4 border rounded-b-md mt-1">
    <p className="text-sm">Content for tab 3</p>
  </TabsContent>
</Tabs>`}
          >
            <div className="w-full max-w-md mx-auto py-6">
              <Tabs defaultValue="tab1" className="w-full">
                <TabsList className="w-full grid grid-cols-3">
                  <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                  <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                  <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="p-4 border rounded-b-md mt-1">
                  <p className="text-sm">Content for tab 1</p>
                </TabsContent>
                <TabsContent value="tab2" className="p-4 border rounded-b-md mt-1">
                  <p className="text-sm">Content for tab 2</p>
                </TabsContent>
                <TabsContent value="tab3" className="p-4 border rounded-b-md mt-1">
                  <p className="text-sm">Content for tab 3</p>
                </TabsContent>
              </Tabs>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Tabs with Icons" 
            description="Tabs that include both icons and text."
            code={`<Tabs defaultValue="overview" className="w-full max-w-md">
  <TabsList className="w-full grid grid-cols-3">
    <TabsTrigger value="overview" className="flex items-center gap-2">
      <span className="i-lucide-layout-dashboard h-4 w-4" />
      <span>Overview</span>
    </TabsTrigger>
    <TabsTrigger value="analytics" className="flex items-center gap-2">
      <span className="i-lucide-bar-chart h-4 w-4" />
      <span>Analytics</span>
    </TabsTrigger>
    <TabsTrigger value="reports" className="flex items-center gap-2">
      <span className="i-lucide-file-text h-4 w-4" />
      <span>Reports</span>
    </TabsTrigger>
  </TabsList>
  <TabsContent value="overview" className="p-4 border rounded-b-md mt-1">
    <p className="text-sm">Overview content</p>
  </TabsContent>
  <TabsContent value="analytics" className="p-4 border rounded-b-md mt-1">
    <p className="text-sm">Analytics content</p>
  </TabsContent>
  <TabsContent value="reports" className="p-4 border rounded-b-md mt-1">
    <p className="text-sm">Reports content</p>
  </TabsContent>
</Tabs>`}
          >
            <div className="w-full max-w-md mx-auto py-6">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full grid grid-cols-3">
                  <TabsTrigger value="overview" className="flex items-center gap-2">
                    <span className="i-lucide-layout-dashboard h-4 w-4" />
                    <span>Overview</span>
                  </TabsTrigger>
                  <TabsTrigger value="analytics" className="flex items-center gap-2">
                    <span className="i-lucide-bar-chart h-4 w-4" />
                    <span>Analytics</span>
                  </TabsTrigger>
                  <TabsTrigger value="reports" className="flex items-center gap-2">
                    <span className="i-lucide-file-text h-4 w-4" />
                    <span>Reports</span>
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="p-4 border rounded-b-md mt-1">
                  <p className="text-sm">Overview content</p>
                </TabsContent>
                <TabsContent value="analytics" className="p-4 border rounded-b-md mt-1">
                  <p className="text-sm">Analytics content</p>
                </TabsContent>
                <TabsContent value="reports" className="p-4 border rounded-b-md mt-1">
                  <p className="text-sm">Reports content</p>
                </TabsContent>
              </Tabs>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Vertical Tabs" 
            description="Tabs displayed in a vertical orientation."
            code={`<div className="flex max-w-md">
  <Tabs defaultValue="tab1" orientation="vertical" className="w-full">
    <TabsList className="w-40 flex-col h-auto">
      <TabsTrigger value="tab1" className="justify-start w-full">Tab 1</TabsTrigger>
      <TabsTrigger value="tab2" className="justify-start w-full">Tab 2</TabsTrigger>
      <TabsTrigger value="tab3" className="justify-start w-full">Tab 3</TabsTrigger>
    </TabsList>
    <div className="flex-1 pl-4">
      <TabsContent value="tab1" className="p-4 border rounded-md mt-0 h-full">
        <p className="text-sm">Content for tab 1</p>
      </TabsContent>
      <TabsContent value="tab2" className="p-4 border rounded-md mt-0 h-full">
        <p className="text-sm">Content for tab 2</p>
      </TabsContent>
      <TabsContent value="tab3" className="p-4 border rounded-md mt-0 h-full">
        <p className="text-sm">Content for tab 3</p>
      </TabsContent>
    </div>
  </Tabs>
</div>`}
          >
            <div className="flex max-w-md mx-auto py-6">
              <Tabs defaultValue="tab1" className="w-full">
                <div className="flex">
                  <TabsList className="w-40 flex-col h-auto">
                    <TabsTrigger value="tab1" className="justify-start w-full">Tab 1</TabsTrigger>
                    <TabsTrigger value="tab2" className="justify-start w-full">Tab 2</TabsTrigger>
                    <TabsTrigger value="tab3" className="justify-start w-full">Tab 3</TabsTrigger>
                  </TabsList>
                  <div className="flex-1 pl-4">
                    <TabsContent value="tab1" className="p-4 border rounded-md mt-0 h-full">
                      <p className="text-sm">Content for tab 1</p>
                    </TabsContent>
                    <TabsContent value="tab2" className="p-4 border rounded-md mt-0 h-full">
                      <p className="text-sm">Content for tab 2</p>
                    </TabsContent>
                    <TabsContent value="tab3" className="p-4 border rounded-md mt-0 h-full">
                      <p className="text-sm">Content for tab 3</p>
                    </TabsContent>
                  </div>
                </div>
              </Tabs>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Disabled Tabs" 
            description="Tabs with disabled states."
            code={`<Tabs defaultValue="tab1" className="w-full max-w-md">
  <TabsList className="w-full grid grid-cols-3">
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
    <TabsTrigger value="tab3" disabled>Tab 3</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1" className="p-4 border rounded-b-md mt-1">
    <p className="text-sm">Content for tab 1</p>
  </TabsContent>
  <TabsContent value="tab2" className="p-4 border rounded-b-md mt-1">
    <p className="text-sm">Content for tab 2</p>
  </TabsContent>
  <TabsContent value="tab3" className="p-4 border rounded-b-md mt-1">
    <p className="text-sm">Content for tab 3</p>
  </TabsContent>
</Tabs>`}
          >
            <div className="w-full max-w-md mx-auto py-6">
              <Tabs defaultValue="tab1" className="w-full">
                <TabsList className="w-full grid grid-cols-3">
                  <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                  <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                  <TabsTrigger value="tab3" disabled>Tab 3</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="p-4 border rounded-b-md mt-1">
                  <p className="text-sm">Content for tab 1</p>
                </TabsContent>
                <TabsContent value="tab2" className="p-4 border rounded-b-md mt-1">
                  <p className="text-sm">Content for tab 2</p>
                </TabsContent>
                <TabsContent value="tab3" className="p-4 border rounded-b-md mt-1">
                  <p className="text-sm">Content for tab 3</p>
                </TabsContent>
              </Tabs>
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
              </TableBody>
            </Table>
          </div>
          
          <h3 className="text-xl font-medium text-mui-text-primary my-6">
            TabsContent Props
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
                  <TableCell className="text-mui-text-secondary">The value of the content. Must match the value of the corresponding TabsTrigger.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">forceMount</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">boolean</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">false</TableCell>
                  <TableCell className="text-mui-text-secondary">Force the content to be rendered even if the tab is not active.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsPage;
