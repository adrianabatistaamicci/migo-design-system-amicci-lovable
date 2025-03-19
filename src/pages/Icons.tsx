
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";

// Material Design Icons component
const IconsGrid = ({ filteredIcons }: { filteredIcons: { name: string; path: string }[] }) => {
  const copyIconName = (iconName: string) => {
    navigator.clipboard.writeText(iconName);
    toast({
      title: "Icon name copied",
      description: `"${iconName}" has been copied to your clipboard.`,
    });
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
      {filteredIcons.map((icon) => (
        <Button
          key={icon.name}
          variant="outline"
          className="h-24 flex flex-col items-center justify-center gap-2 p-2 hover:bg-muted hover:border-primary"
          onClick={() => copyIconName(icon.name)}
        >
          <img src={icon.path} alt={icon.name} className="w-8 h-8" />
          <span className="text-xs text-center truncate w-full">{icon.name}</span>
        </Button>
      ))}
    </div>
  );
};

// Sample of Material Design icons (in a real implementation, you would have all icons)
const materialIcons = [
  { name: "account_circle", path: "https://fonts.gstatic.com/s/i/materialiconsoutlined/account_circle/v12/24px.svg" },
  { name: "add", path: "https://fonts.gstatic.com/s/i/materialiconsoutlined/add/v12/24px.svg" },
  { name: "check", path: "https://fonts.gstatic.com/s/i/materialiconsoutlined/check/v12/24px.svg" },
  { name: "close", path: "https://fonts.gstatic.com/s/i/materialiconsoutlined/close/v12/24px.svg" },
  { name: "delete", path: "https://fonts.gstatic.com/s/i/materialiconsoutlined/delete/v12/24px.svg" },
  { name: "edit", path: "https://fonts.gstatic.com/s/i/materialiconsoutlined/edit/v12/24px.svg" },
  { name: "favorite", path: "https://fonts.gstatic.com/s/i/materialiconsoutlined/favorite/v12/24px.svg" },
  { name: "home", path: "https://fonts.gstatic.com/s/i/materialiconsoutlined/home/v12/24px.svg" },
  { name: "info", path: "https://fonts.gstatic.com/s/i/materialiconsoutlined/info/v12/24px.svg" },
  { name: "menu", path: "https://fonts.gstatic.com/s/i/materialiconsoutlined/menu/v12/24px.svg" },
  { name: "more_vert", path: "https://fonts.gstatic.com/s/i/materialiconsoutlined/more_vert/v12/24px.svg" },
  { name: "notifications", path: "https://fonts.gstatic.com/s/i/materialiconsoutlined/notifications/v12/24px.svg" },
  { name: "person", path: "https://fonts.gstatic.com/s/i/materialiconsoutlined/person/v12/24px.svg" },
  { name: "search", path: "https://fonts.gstatic.com/s/i/materialiconsoutlined/search/v12/24px.svg" },
  { name: "settings", path: "https://fonts.gstatic.com/s/i/materialiconsoutlined/settings/v12/24px.svg" },
  { name: "star", path: "https://fonts.gstatic.com/s/i/materialiconsoutlined/star/v12/24px.svg" },
  { name: "visibility", path: "https://fonts.gstatic.com/s/i/materialiconsoutlined/visibility/v12/24px.svg" },
  { name: "warning", path: "https://fonts.gstatic.com/s/i/materialiconsoutlined/warning/v12/24px.svg" },
];

// More categories of icons
const uiIcons = materialIcons.filter(icon => 
  ["check", "close", "add", "edit", "delete", "menu", "more_vert"].includes(icon.name)
);

const navigationIcons = materialIcons.filter(icon => 
  ["home", "search", "settings", "account_circle"].includes(icon.name)
);

const statusIcons = materialIcons.filter(icon => 
  ["info", "warning", "favorite", "star", "visibility"].includes(icon.name)
);

const Icons = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredIcons = materialIcons.filter(icon => 
    icon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold tracking-tight mb-4">Icons</h1>
      <p className="text-muted-foreground mb-8">
        This design system uses Material Design outlined icons to maintain a consistent visual language throughout the application.
      </p>
      
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="library">Icon Library</TabsTrigger>
          <TabsTrigger value="integration">Integration</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <div className="rounded-lg border p-6 mt-6">
            <h2 className="text-xl font-semibold mb-4">Material Design Icons</h2>
            <p className="mb-4">Material Design icons are the official icon set from Google that are designed under the material design guidelines.</p>
            
            <div className="flex flex-col md:flex-row gap-6 mt-6">
              <div className="flex-1 p-4 border rounded-lg flex flex-col items-center justify-center">
                <img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/account_circle/v12/24px.svg" alt="Account Icon" className="w-10 h-10 mb-2" />
                <h3 className="font-medium">Simple</h3>
                <p className="text-sm text-center text-muted-foreground">Clean, minimalist design that works well at small sizes</p>
              </div>
              <div className="flex-1 p-4 border rounded-lg flex flex-col items-center justify-center">
                <img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/settings/v12/24px.svg" alt="Settings Icon" className="w-10 h-10 mb-2" />
                <h3 className="font-medium">Consistent</h3>
                <p className="text-sm text-center text-muted-foreground">Uniform style across all icons in the system</p>
              </div>
              <div className="flex-1 p-4 border rounded-lg flex flex-col items-center justify-center">
                <img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/visibility/v12/24px.svg" alt="Visibility Icon" className="w-10 h-10 mb-2" />
                <h3 className="font-medium">Meaningful</h3>
                <p className="text-sm text-center text-muted-foreground">Recognizable metaphors that quickly communicate meaning</p>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="usage" className="space-y-6">
          <div className="rounded-lg border p-6 mt-6">
            <h2 className="text-xl font-semibold mb-4">How to Use Icons</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Icon Sizes</h3>
              <p className="mb-4">Material Design icons are typically used in these standard sizes:</p>
              
              <div className="grid grid-cols-4 gap-4 my-6">
                <div className="flex flex-col items-center">
                  <img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/home/v12/24px.svg" alt="Home Icon" className="w-6 h-6" />
                  <span className="text-sm mt-2">24px</span>
                </div>
                <div className="flex flex-col items-center">
                  <img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/home/v12/24px.svg" alt="Home Icon" className="w-8 h-8" />
                  <span className="text-sm mt-2">32px</span>
                </div>
                <div className="flex flex-col items-center">
                  <img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/home/v12/24px.svg" alt="Home Icon" className="w-10 h-10" />
                  <span className="text-sm mt-2">40px</span>
                </div>
                <div className="flex flex-col items-center">
                  <img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/home/v12/24px.svg" alt="Home Icon" className="w-12 h-12" />
                  <span className="text-sm mt-2">48px</span>
                </div>
              </div>
            </div>
            
            <Separator className="my-6" />
            
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Icon Colors</h3>
              <p className="mb-4">Icons should use colors that provide sufficient contrast with their background:</p>
              
              <div className="grid grid-cols-3 gap-4 my-6">
                <div className="flex flex-col items-center p-4 bg-white border rounded-md">
                  <img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/info/v12/24px.svg" alt="Info Icon" className="w-8 h-8" />
                  <span className="text-sm mt-2">Primary</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white border rounded-md">
                  <img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/info/v12/24px.svg" alt="Info Icon" className="w-8 h-8 opacity-60" />
                  <span className="text-sm mt-2">Secondary</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-primary text-white rounded-md">
                  <img src="https://fonts.gstatic.com/s/i/materialicons/info/v12/24px.svg" alt="Info Icon" className="w-8 h-8 filter invert" />
                  <span className="text-sm mt-2">Inverted</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="library" className="space-y-6">
          <div className="rounded-lg border p-6 mt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
              <h2 className="text-xl font-semibold">Icon Library</h2>
              <div className="relative w-full md:w-64">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                <Input 
                  placeholder="Search icons..." 
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            
            {filteredIcons.length > 0 ? (
              <>
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="mb-4">
                    <TabsTrigger value="all">All Icons</TabsTrigger>
                    <TabsTrigger value="ui">UI Controls</TabsTrigger>
                    <TabsTrigger value="navigation">Navigation</TabsTrigger>
                    <TabsTrigger value="status">Status</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="all">
                    <IconsGrid filteredIcons={filteredIcons} />
                  </TabsContent>
                  
                  <TabsContent value="ui">
                    <IconsGrid filteredIcons={uiIcons.filter(icon => 
                      icon.name.toLowerCase().includes(searchQuery.toLowerCase())
                    )} />
                  </TabsContent>
                  
                  <TabsContent value="navigation">
                    <IconsGrid filteredIcons={navigationIcons.filter(icon => 
                      icon.name.toLowerCase().includes(searchQuery.toLowerCase())
                    )} />
                  </TabsContent>
                  
                  <TabsContent value="status">
                    <IconsGrid filteredIcons={statusIcons.filter(icon => 
                      icon.name.toLowerCase().includes(searchQuery.toLowerCase())
                    )} />
                  </TabsContent>
                </Tabs>
              </>
            ) : (
              <div className="text-center py-8">
                <p>No icons found matching "{searchQuery}"</p>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="integration" className="space-y-6">
          <div className="rounded-lg border p-6 mt-6">
            <h2 className="text-xl font-semibold mb-4">Integration Guide</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Using Material Icons</h3>
              <p className="mb-4">There are several ways to integrate Material Design icons into your project:</p>
              
              <div className="space-y-6">
                <div className="rounded border p-4">
                  <h4 className="font-medium mb-2">1. Google Fonts (CDN)</h4>
                  <p className="text-sm mb-3">Add this line to your HTML head:</p>
                  <div className="bg-muted p-3 rounded text-xs font-mono overflow-x-auto">
                    &lt;link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet"&gt;
                  </div>
                  <p className="text-sm mt-3">Then use icons with:</p>
                  <div className="bg-muted p-3 rounded text-xs font-mono overflow-x-auto">
                    &lt;span class="material-icons-outlined"&gt;home&lt;/span&gt;
                  </div>
                </div>
                
                <div className="rounded border p-4">
                  <h4 className="font-medium mb-2">2. SVG Icons</h4>
                  <p className="text-sm mb-3">Download SVG files from Material Icons and use them directly:</p>
                  <div className="bg-muted p-3 rounded text-xs font-mono overflow-x-auto">
                    &lt;img src="path/to/home_icon.svg" alt="Home"&gt;
                  </div>
                </div>
                
                <div className="rounded border p-4">
                  <h4 className="font-medium mb-2">3. Icon Libraries</h4>
                  <p className="text-sm mb-3">Use a package like material-icons:</p>
                  <div className="bg-muted p-3 rounded text-xs font-mono overflow-x-auto">
                    npm install material-icons
                  </div>
                  <p className="text-sm mt-3">Then import in your CSS/JS:</p>
                  <div className="bg-muted p-3 rounded text-xs font-mono overflow-x-auto">
                    import 'material-icons/iconfont/material-icons.css';
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Icons;
