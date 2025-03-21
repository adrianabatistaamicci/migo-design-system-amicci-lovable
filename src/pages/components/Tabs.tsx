import React from 'react';
import ComponentCard from '@/components/ComponentCard';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { Star, User, Mail, Settings, FileText, Home } from 'lucide-react';
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
          <ComponentCard title="Basic Tabs" description="A simple tabs component with multiple panels." code={`<Tabs defaultValue="account" className="w-full max-w-md">
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
</Tabs>`}>
            <div className="w-full ">
              <Tabs defaultValue="account" className="w-full">
                <TabsList className="w-full">
                  <TabsTrigger value="account" className="mx-auto">Account</TabsTrigger>
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
          
          <ComponentCard title="Multiple Tabs" description="Tabs with more than two options." code={`<Tabs defaultValue="tab1" className="w-full max-w-md">
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
</Tabs>`}>
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

          <ComponentCard title="Tabs with Icons" description="Tabs that include both icons and text." code={`<Tabs defaultValue="overview" className="w-full max-w-md">
  <TabsList className="w-full grid grid-cols-3">
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
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full grid grid-cols-3">
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

          <ComponentCard title="Tabs with Right Icons" description="Tabs with icons positioned to the right." code={`<Tabs defaultValue="user" className="w-full max-w-md">
  <TabsList className="w-full grid grid-cols-3">
    <TabsTrigger 
      value="user" 
      icon={<User className="h-4 w-4" />}
      iconPosition="right"
    >
      User
    </TabsTrigger>
    <TabsTrigger 
      value="mail" 
      icon={<Mail className="h-4 w-4" />}
      iconPosition="right"
    >
      Mail
    </TabsTrigger>
    <TabsTrigger 
      value="settings" 
      icon={<Settings className="h-4 w-4" />}
      iconPosition="right"
    >
      Settings
    </TabsTrigger>
  </TabsList>
  <TabsContent value="user" className="p-4 border rounded-b-md mt-1">
    <p className="text-sm">User settings content</p>
  </TabsContent>
  <TabsContent value="mail" className="p-4 border rounded-b-md mt-1">
    <p className="text-sm">Mail settings content</p>
  </TabsContent>
  <TabsContent value="settings" className="p-4 border rounded-b-md mt-1">
    <p className="text-sm">General settings content</p>
  </TabsContent>
</Tabs>`}>
            <div className="w-full max-w-md mx-auto py-6">
              <Tabs defaultValue="user" className="w-full">
                <TabsList className="w-full grid grid-cols-3">
                  <TabsTrigger value="user" icon={<User className="h-4 w-4" />} iconPosition="right">
                    User
                  </TabsTrigger>
                  <TabsTrigger value="mail" icon={<Mail className="h-4 w-4" />} iconPosition="right">
                    Mail
                  </TabsTrigger>
                  <TabsTrigger value="settings" icon={<Settings className="h-4 w-4" />} iconPosition="right">
                    Settings
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="user" className="p-4 border rounded-b-md mt-1">
                  <p className="text-sm">User settings content</p>
                </TabsContent>
                <TabsContent value="mail" className="p-4 border rounded-b-md mt-1">
                  <p className="text-sm">Mail settings content</p>
                </TabsContent>
                <TabsContent value="settings" className="p-4 border rounded-b-md mt-1">
                  <p className="text-sm">General settings content</p>
                </TabsContent>
              </Tabs>
            </div>
          </ComponentCard>
          
          <ComponentCard title="Vertical Tabs" description="Tabs displayed in a vertical orientation." code={`<div className="flex max-w-md">
  <Tabs defaultValue="tab1" orientation="vertical" className="w-full">
    <TabsList orientation="vertical" className="w-40">
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
</div>`}>
            <div className="flex max-w-md mx-auto py-6">
              <Tabs defaultValue="tab1" orientation="vertical" className="w-full">
                <div className="flex">
                  <TabsList orientation="vertical" className="w-40">
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
          
          <ComponentCard title="Scrollable Tabs" description="Tabs with horizontal scrolling for when there are many tab options." code={`<Tabs defaultValue="tab1" className="w-full max-w-md">
  <TabsList scrollable className="w-full" style={{ maxWidth: "400px" }}>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
    <TabsTrigger value="tab4">Tab 4</TabsTrigger>
    <TabsTrigger value="tab5">Tab 5</TabsTrigger>
    <TabsTrigger value="tab6">Tab 6</TabsTrigger>
    <TabsTrigger value="tab7">Tab 7</TabsTrigger>
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
  <TabsContent value="tab4" className="p-4 border rounded-b-md mt-1">
    <p className="text-sm">Content for tab 4</p>
  </TabsContent>
  <TabsContent value="tab5" className="p-4 border rounded-b-md mt-1">
    <p className="text-sm">Content for tab 5</p>
  </TabsContent>
  <TabsContent value="tab6" className="p-4 border rounded-b-md mt-1">
    <p className="text-sm">Content for tab 6</p>
  </TabsContent>
  <TabsContent value="tab7" className="p-4 border rounded-b-md mt-1">
    <p className="text-sm">Content for tab 7</p>
  </TabsContent>
</Tabs>`}>
            <div className="w-full max-w-md mx-auto py-6">
              <Tabs defaultValue="tab1" className="w-full">
                <TabsList scrollable className="w-full" style={{
                maxWidth: "400px"
              }}>
                  <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                  <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                  <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                  <TabsTrigger value="tab4">Tab 4</TabsTrigger>
                  <TabsTrigger value="tab5">Tab 5</TabsTrigger>
                  <TabsTrigger value="tab6">Tab 6</TabsTrigger>
                  <TabsTrigger value="tab7">Tab 7</TabsTrigger>
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
                <TabsContent value="tab4" className="p-4 border rounded-b-md mt-1">
                  <p className="text-sm">Content for tab 4</p>
                </TabsContent>
                <TabsContent value="tab5" className="p-4 border rounded-b-md mt-1">
                  <p className="text-sm">Content for tab 5</p>
                </TabsContent>
                <TabsContent value="tab6" className="p-4 border rounded-b-md mt-1">
                  <p className="text-sm">Content for tab 6</p>
                </TabsContent>
                <TabsContent value="tab7" className="p-4 border rounded-b-md mt-1">
                  <p className="text-sm">Content for tab 7</p>
                </TabsContent>
              </Tabs>
            </div>
          </ComponentCard>

          <ComponentCard title="Scrollable Vertical Tabs" description="Vertical tabs with scrolling for when there are many tab options." code={`<div className="flex max-w-md">
  <Tabs defaultValue="tab1" orientation="vertical" className="w-full">
    <TabsList orientation="vertical" scrollable className="w-40" style={{ maxHeight: "200px" }}>
      <TabsTrigger value="tab1" className="justify-start w-full">Tab 1</TabsTrigger>
      <TabsTrigger value="tab2" className="justify-start w-full">Tab 2</TabsTrigger>
      <TabsTrigger value="tab3" className="justify-start w-full">Tab 3</TabsTrigger>
      <TabsTrigger value="tab4" className="justify-start w-full">Tab 4</TabsTrigger>
      <TabsTrigger value="tab5" className="justify-start w-full">Tab 5</TabsTrigger>
      <TabsTrigger value="tab6" className="justify-start w-full">Tab 6</TabsTrigger>
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
      <TabsContent value="tab4" className="p-4 border rounded-md mt-0 h-full">
        <p className="text-sm">Content for tab 4</p>
      </TabsContent>
      <TabsContent value="tab5" className="p-4 border rounded-md mt-0 h-full">
        <p className="text-sm">Content for tab 5</p>
      </TabsContent>
      <TabsContent value="tab6" className="p-4 border rounded-md mt-0 h-full">
        <p className="text-sm">Content for tab 6</p>
      </TabsContent>
    </div>
  </Tabs>
</div>`}>
            <div className="flex max-w-md mx-auto py-6">
              <Tabs defaultValue="tab1" orientation="vertical" className="w-full">
                <div className="flex">
                  <TabsList orientation="vertical" scrollable className="w-40" style={{
                  maxHeight: "200px"
                }}>
                    <TabsTrigger value="tab1" className="justify-start w-full">Tab 1</TabsTrigger>
                    <TabsTrigger value="tab2" className="justify-start w-full">Tab 2</TabsTrigger>
                    <TabsTrigger value="tab3" className="justify-start w-full">Tab 3</TabsTrigger>
                    <TabsTrigger value="tab4" className="justify-start w-full">Tab 4</TabsTrigger>
                    <TabsTrigger value="tab5" className="justify-start w-full">Tab 5</TabsTrigger>
                    <TabsTrigger value="tab6" className="justify-start w-full">Tab 6</TabsTrigger>
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
                    <TabsContent value="tab4" className="p-4 border rounded-md mt-0 h-full">
                      <p className="text-sm">Content for tab 4</p>
                    </TabsContent>
                    <TabsContent value="tab5" className="p-4 border rounded-md mt-0 h-full">
                      <p className="text-sm">Content for tab 5</p>
                    </TabsContent>
                    <TabsContent value="tab6" className="p-4 border rounded-md mt-0 h-full">
                      <p className="text-sm">Content for tab 6</p>
                    </TabsContent>
                  </div>
                </div>
              </Tabs>
            </div>
          </ComponentCard>

          <ComponentCard title="Full Width Tabs" description="Tabs that expand to fill the entire width of their container." code={`<Tabs defaultValue="tab1" className="w-full max-w-md">
  <TabsList fullWidth className="w-full">
    <TabsTrigger value="tab1" className="flex-1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2" className="flex-1">Tab 2</TabsTrigger>
    <TabsTrigger value="tab3" className="flex-1">Tab 3</TabsTrigger>
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
</Tabs>`}>
            <div className="w-full max-w-md mx-auto py-6">
              <Tabs defaultValue="tab1" className="w-full">
                <TabsList fullWidth className="w-full">
                  <TabsTrigger value="tab1" className="flex-1">Tab 1</TabsTrigger>
                  <TabsTrigger value="tab2" className="flex-1">Tab 2</TabsTrigger>
                  <TabsTrigger value="tab3" className="flex-1">Tab 3</TabsTrigger>
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
          
          <ComponentCard title="Disabled Tabs" description="Tabs with disabled states." code={`<Tabs defaultValue="tab1" className="w-full max-w-md">
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
</Tabs>`}>
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

          <ComponentCard title="Tabs with Custom Active Color" description="Tabs with customized active indicator color." code={`<div className="space-y-8">
  <Tabs defaultValue="tab1" className="w-full max-w-md">
    <h3 className="text-sm font-medium mb-2">Primary Color (Default)</h3>
    <TabsList className="w-full grid grid-cols-3">
      <TabsTrigger value="tab1" activeColor="primary">Tab 1</TabsTrigger>
      <TabsTrigger value="tab2" activeColor="primary">Tab 2</TabsTrigger>
      <TabsTrigger value="tab3" activeColor="primary">Tab 3</TabsTrigger>
    </TabsList>
  </Tabs>
  
  <Tabs defaultValue="tab1" className="w-full max-w-md">
    <h3 className="text-sm font-medium mb-2">Secondary Color</h3>
    <TabsList className="w-full grid grid-cols-3">
      <TabsTrigger value="tab1" activeColor="secondary">Tab 1</TabsTrigger>
      <TabsTrigger value="tab2" activeColor="secondary">Tab 2</TabsTrigger>
      <TabsTrigger value="tab3" activeColor="secondary">Tab 3</TabsTrigger>
    </TabsList>
  </Tabs>
  
  <Tabs defaultValue="tab1" className="w-full max-w-md">
    <h3 className="text-sm font-medium mb-2">No Color</h3>
    <TabsList className="w-full grid grid-cols-3">
      <TabsTrigger value="tab1" activeColor="none">Tab 1</TabsTrigger>
      <TabsTrigger value="tab2" activeColor="none">Tab 2</TabsTrigger>
      <TabsTrigger value="tab3" activeColor="none">Tab 3</TabsTrigger>
    </TabsList>
  </Tabs>
</div>`}>
            <div className="w-full max-w-md mx-auto py-6">
              <div className="space-y-8">
                <Tabs defaultValue="tab1" className="w-full">
                  <h3 className="text-sm font-medium mb-2">Primary Color (Default)</h3>
                  <TabsList className="w-full grid grid-cols-3">
                    <TabsTrigger value="tab1" activeColor="primary">Tab 1</TabsTrigger>
                    <TabsTrigger value="tab2" activeColor="primary">Tab 2</TabsTrigger>
                    <TabsTrigger value="tab3" activeColor="primary">Tab 3</TabsTrigger>
                  </TabsList>
                </Tabs>
                
                <Tabs defaultValue="tab1" className="w-full">
                  <h3 className="text-sm font-medium mb-2">Secondary Color</h3>
                  <TabsList className="w-full grid grid-cols-3">
                    <TabsTrigger value="tab1" activeColor="secondary">Tab 1</TabsTrigger>
                    <TabsTrigger value="tab2" activeColor="secondary">Tab 2</TabsTrigger>
                    <TabsTrigger value="tab3" activeColor="secondary">Tab 3</TabsTrigger>
                  </TabsList>
                </Tabs>
                
                <Tabs defaultValue="tab1" className="w-full">
                  <h3 className="text-sm font-medium mb-2">No Color</h3>
                  <TabsList className="w-full grid grid-cols-3">
                    <TabsTrigger value="tab1" activeColor="none">Tab 1</TabsTrigger>
                    <TabsTrigger value="tab2" activeColor="none">Tab 2</TabsTrigger>
                    <TabsTrigger value="tab3" activeColor="none">Tab 3</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
          </ComponentCard>

          <ComponentCard title="Tabs with Icon Above Text" description="Tabs with icons positioned above the text." code={`<Tabs defaultValue="star" className="w-full max-w-md">
  <TabsList className="w-full grid grid-cols-3">
    <TabsTrigger 
      value="star" 
      icon={<Star className="h-4 w-4" />}
      iconPosition="up"
    >
      Favorites
    </TabsTrigger>
    <TabsTrigger 
      value="user" 
      icon={<User className="h-4 w-4" />}
      iconPosition="up"
    >
      Profile
    </TabsTrigger>
    <TabsTrigger 
      value="settings" 
      icon={<Settings className="h-4 w-4" />}
      iconPosition="up"
    >
      Settings
    </TabsTrigger>
  </TabsList>
  <TabsContent value="star" className="p-4 border rounded-b-md mt-1">
    <p className="text-sm">Favorites content</p>
  </TabsContent>
  <TabsContent value="user" className="p-4 border rounded-b-md mt-1">
    <p className="text-sm">Profile content</p>
  </TabsContent>
  <TabsContent value="settings" className="p-4 border rounded-b-md mt-1">
    <p className="text-sm">Settings content</p>
  </TabsContent>
</Tabs>`}>
            <div className="w-full max-w-md mx-auto py-6">
              <Tabs defaultValue="star" className="w-full">
                <TabsList className="w-full grid grid-cols-3">
                  <TabsTrigger value="star" icon={<Star className="h-4 w-4" />} iconPosition="up">
                    Favorites
                  </TabsTrigger>
                  <TabsTrigger value="user" icon={<User className="h-4 w-4" />} iconPosition="up">
                    Profile
                  </TabsTrigger>
                  <TabsTrigger value="settings" icon={<Settings className="h-4 w-4" />} iconPosition="up">
                    Settings
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="star" className="p-4 border rounded-b-md mt-1">
                  <p className="text-sm">Favorites content</p>
                </TabsContent>
                <TabsContent value="user" className="p-4 border rounded-b-md mt-1">
                  <p className="text-sm">Profile content</p>
                </TabsContent>
                <TabsContent value="settings" className="p-4 border rounded-b-md mt-1">
                  <p className="text-sm">Settings content</p>
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
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">orientation</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">"horizontal" | "vertical"</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">"horizontal"</TableCell>
                  <TableCell className="text-mui-text-secondary">The orientation of the tabs.</TableCell>
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
            TabsList Props
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
                  <TableCell className="font-mono text-mui-text-primary">orientation</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">"horizontal" | "vertical"</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">"horizontal"</TableCell>
                  <TableCell className="text-mui-text-secondary">The orientation of the tabs list.</TableCell>
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
                  <TableCell className="text-mui-text-secondary">Whether the tabs list should be scrollable.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">fullWidth</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">boolean</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">false</TableCell>
                  <TableCell className="text-mui-text-secondary">Whether the tabs list should take up the full width of their container.</TableCell>
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
                  <TableCell className="font-mono text-mui-text-primary">activeColor</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">"primary" | "secondary" | "none"</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">"primary"</TableCell>
                  <TableCell className="text-mui-text-secondary">The color of the active tab indicator.</TableCell>
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
    </div>;
};
export default TabsPage;