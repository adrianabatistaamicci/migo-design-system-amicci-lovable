
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

const UIKit = () => {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">UI Kit</h1>
        <p className="text-mui-text-secondary text-lg mb-6">
          Uma visão geral dos principais componentes do nosso Design System
        </p>
      </div>
      
      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Botões</h2>
          <div className="flex flex-wrap gap-4">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="text-default">Text</Button>
            <Button variant="outline-default">Outlined</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Inputs</h2>
          <div className="flex flex-col gap-4 max-w-md">
            <Input placeholder="Default input" />
            <Input variant="filled" placeholder="Filled input" />
            <Input variant="standard" placeholder="Standard input" />
            <Input variant="outlined" disabled placeholder="Disabled input" />
          </div>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Checkboxes</h2>
          <div className="flex flex-col gap-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="disabled" disabled />
              <label
                htmlFor="disabled"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Disabled checkbox
              </label>
            </div>
          </div>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>Choose what notifications you want to receive</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Email notifications</span>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Push notifications</span>
                    <Switch defaultChecked />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button>Save</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>Manage your account details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Jane Smith</p>
                    <p className="text-xs text-mui-text-secondary">jane.smith@example.com</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Chip>Admin</Chip>
                  <Chip variant="outlined" color="primary">Pro User</Chip>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Badges</h2>
          <div className="flex flex-wrap gap-4">
            <Badge>Default</Badge>
            <Badge color="primary">Primary</Badge>
            <Badge color="secondary">Secondary</Badge>
            <Badge color="success">Success</Badge>
            <Badge color="warning">Warning</Badge>
            <Badge color="error">Error</Badge>
            <Badge color="info">Info</Badge>
            <Badge variant="dot" color="error">Notifications</Badge>
          </div>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Tabs</h2>
          <Tabs defaultValue="account" className="w-full max-w-lg">
            <TabsList className="grid grid-cols-3">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="p-4 border rounded-lg mt-2">
              <p>Manage your account settings and preferences.</p>
            </TabsContent>
            <TabsContent value="password" className="p-4 border rounded-lg mt-2">
              <p>Change your password here.</p>
            </TabsContent>
            <TabsContent value="settings" className="p-4 border rounded-lg mt-2">
              <p>App settings and configurations.</p>
            </TabsContent>
          </Tabs>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Sliders</h2>
          <div className="space-y-6 max-w-md">
            <Slider defaultValue={[30]} max={100} />
            <Slider 
              defaultValue={[50]} 
              color="secondary" 
              valueLabelDisplay="auto" 
              max={100} 
            />
            <Slider 
              defaultValue={[25, 75]} 
              color="primary"
              marks={[
                { value: 0, label: '0°' },
                { value: 25, label: '25°' },
                { value: 50, label: '50°' },
                { value: 75, label: '75°' },
                { value: 100, label: '100°' }
              ]} 
              max={100}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default UIKit;
