
import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Copy, Check } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";
import { 
  getMaterialIconUrl, 
  ICON_SIZES, 
  getIconSizeClass, 
  shouldInvertIcon,
  formatIconName,
  ICON_CATEGORIES,
  MATERIAL_ICONS
} from '@/utils/iconUtils';

const IconsGrid = ({ filteredIcons }: { filteredIcons: string[] }) => {
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  const copyIconName = (iconName: string) => {
    navigator.clipboard.writeText(iconName);
    setCopiedIcon(iconName);
    
    toast({
      title: "Icon name copied",
      description: `"${iconName}" has been copied to your clipboard.`,
    });
    
    setTimeout(() => {
      setCopiedIcon(null);
    }, 2000);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
      {filteredIcons.map((iconName) => (
        <Button
          key={iconName}
          variant="outline"
          className="h-24 flex flex-col items-center justify-center gap-2 p-2 hover:bg-muted hover:border-primary group relative"
          onClick={() => copyIconName(iconName)}
        >
          <img src={getMaterialIconUrl(iconName)} alt={iconName} className="w-8 h-8" />
          <span className="text-xs text-center truncate w-full">{formatIconName(iconName)}</span>
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            {copiedIcon === iconName ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Copy className="h-4 w-4 text-muted-foreground" />
            )}
          </div>
        </Button>
      ))}
      {filteredIcons.length === 0 && (
        <div className="col-span-full text-center py-8 text-muted-foreground">
          No icons found matching your search criteria.
        </div>
      )}
    </div>
  );
};

const Icons = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState<string>("all");
  const [filteredIcons, setFilteredIcons] = useState<string[]>(MATERIAL_ICONS);
  
  useEffect(() => {
    let filtered = [...MATERIAL_ICONS];
    
    if (searchQuery.trim()) {
      filtered = filtered.filter(icon => 
        icon.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (category !== "all") {
      filtered = filtered.filter(icon => {
        const categoryLower = category.toLowerCase();
        if (categoryLower === "navigation") {
          return icon.includes("arrow") || icon.includes("menu") || icon.includes("chevron") || icon.includes("expand");
        }
        if (categoryLower === "actions") {
          return icon.includes("add") || icon.includes("remove") || icon.includes("edit") || icon.includes("delete");
        }
        if (categoryLower === "alerts") {
          return icon.includes("warning") || icon.includes("error") || icon.includes("info") || icon.includes("notification");
        }
        if (categoryLower === "communication") {
          return icon.includes("email") || icon.includes("message") || icon.includes("chat") || icon.includes("phone");
        }
        if (categoryLower === "content") {
          return icon.includes("file") || icon.includes("folder") || icon.includes("save") || icon.includes("document");
        }
        return true;
      });
    }
    
    setFilteredIcons(filtered);
  }, [searchQuery, category]);

  return (
    <div className="w-full animate-fade-in">
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
                <img src={getMaterialIconUrl("account_circle")} alt="Account Icon" className="w-10 h-10 mb-2" />
                <h3 className="font-medium">Simple</h3>
                <p className="text-sm text-center text-muted-foreground">Clean, minimalist design that works well at small sizes</p>
              </div>
              <div className="flex-1 p-4 border rounded-lg flex flex-col items-center justify-center">
                <img src={getMaterialIconUrl("settings")} alt="Settings Icon" className="w-10 h-10 mb-2" />
                <h3 className="font-medium">Consistent</h3>
                <p className="text-sm text-center text-muted-foreground">Uniform style across all icons in the system</p>
              </div>
              <div className="flex-1 p-4 border rounded-lg flex flex-col items-center justify-center">
                <img src={getMaterialIconUrl("visibility")} alt="Visibility Icon" className="w-10 h-10 mb-2" />
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
                  <img src={getMaterialIconUrl("home", 24)} alt="Home Icon" className="w-6 h-6" />
                  <span className="text-sm mt-2">24px</span>
                </div>
                <div className="flex flex-col items-center">
                  <img src={getMaterialIconUrl("home", 24)} alt="Home Icon" className="w-8 h-8" />
                  <span className="text-sm mt-2">32px</span>
                </div>
                <div className="flex flex-col items-center">
                  <img src={getMaterialIconUrl("home", 24)} alt="Home Icon" className="w-10 h-10" />
                  <span className="text-sm mt-2">40px</span>
                </div>
                <div className="flex flex-col items-center">
                  <img src={getMaterialIconUrl("home", 24)} alt="Home Icon" className="w-12 h-12" />
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
                  <img src={getMaterialIconUrl("info")} alt="Info Icon" className="w-8 h-8" />
                  <span className="text-sm mt-2">Primary</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white border rounded-md">
                  <img src={getMaterialIconUrl("info")} alt="Info Icon" className="w-8 h-8 opacity-60" />
                  <span className="text-sm mt-2">Secondary</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-primary text-white rounded-md">
                  <img src={getMaterialIconUrl("info")} alt="Info Icon" className="w-8 h-8 filter invert" />
                  <span className="text-sm mt-2">Inverted</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="library" className="space-y-6">
          <div className="rounded-lg border p-6 mt-6">
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between items-center gap-4 mb-6">
              <h2 className="text-xl font-semibold">Material Design Icon Library</h2>
              <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                  <Input 
                    placeholder="Search icons..." 
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger className="w-full sm:w-40">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="navigation">Navigation</SelectItem>
                    <SelectItem value="actions">Actions</SelectItem>
                    <SelectItem value="alerts">Alerts</SelectItem>
                    <SelectItem value="communication">Communication</SelectItem>
                    <SelectItem value="content">Content</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">
                {filteredIcons.length} icons found
              </h3>
              
              <IconsGrid filteredIcons={filteredIcons} />
            </div>
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
                    &lt;span className="material-icons-outlined"&gt;home&lt;/span&gt;
                  </div>
                </div>
                
                <div className="rounded border p-4">
                  <h4 className="font-medium mb-2">2. SVG Icons</h4>
                  <p className="text-sm mb-3">Use SVG URLs directly from Google Fonts:</p>
                  <div className="bg-muted p-3 rounded text-xs font-mono overflow-x-auto">
                    &lt;img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/home/v12/24px.svg" alt="Home"&gt;
                  </div>
                  <p className="text-sm mt-3">You can create a utility function to generate these URLs:</p>
                  <div className="bg-muted p-3 rounded text-xs font-mono overflow-x-auto">
                    {`const getMaterialIconUrl = (name, size = 24) => \`https://fonts.gstatic.com/s/i/materialiconsoutlined/\${name}/v12/\${size}px.svg\`;`}
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
            
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-2">Official Resources</h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li><a href="https://fonts.google.com/icons" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Fonts Icons Library</a> - Browse and download Material icons</li>
                <li><a href="https://m3.material.io/styles/icons/overview" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Material Design 3 Icons</a> - Official guidelines</li>
                <li><a href="https://github.com/google/material-design-icons" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Material Design Icons GitHub</a> - Official repository</li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Icons;
