import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ComponentCard from '@/components/ComponentCard';
import CodeBlock from '@/components/CodeBlock';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Colors = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Colors</h1>
        <p className="text-mui-text-secondary text-lg">
          The color palette and design tokens used throughout the application.
        </p>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="primary">Primary</TabsTrigger>
          <TabsTrigger value="semantic">Semantic</TabsTrigger>
          <TabsTrigger value="mui">MUI Specific</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <ComponentCard 
            title="Color System"
            description="Our color system is built on CSS variables to support theming and customization."
          >
            <p className="text-mui-text-secondary mb-4">
              All colors are defined as HSL values in CSS variables for easy manipulation of hue, saturation, and lightness.
              Our primary colors are also available as hex values for specific shades.
            </p>
            
            <CodeBlock
              language="css"
              title="CSS Variables (from :root)"
              code={`--background: 0 0% 100%;
--foreground: 222 47% 11%;
--card: 0 0% 100%;
--card-foreground: 222 47% 11%;
--popover: 0 0% 100%;
--popover-foreground: 222 47% 11%;
--primary: 180 85% 41%;
--primary-foreground: 180 40% 98%;
--secondary: 210 20% 96%;
--secondary-foreground: 215 25% 27%;
--muted: 210 20% 96%;
--muted-foreground: 215 16% 47%;
--accent: 210 20% 96%;
--accent-foreground: 215 25% 27%;
--destructive: 0 84% 60%;
--destructive-foreground: 210 40% 98%;
--border: 214 32% 91%;
--input: 214 32% 91%;
--ring: 180 85% 41%;
--radius: 8px;`}
            />
          </ComponentCard>
          
          <Separator />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ComponentCard title="How to Use">
              <p className="text-mui-text-secondary">
                Access colors using Tailwind utility classes based on the semantic naming:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-mui-text-secondary">
                <li><code className="bg-mui-sidebar px-1 rounded">bg-primary</code> - Background using primary color</li>
                <li><code className="bg-mui-sidebar px-1 rounded">bg-primary-500</code> - Background using primary-500 color</li>
                <li><code className="bg-mui-sidebar px-1 rounded">text-destructive</code> - Text in destructive color</li>
                <li><code className="bg-mui-sidebar px-1 rounded">border-border</code> - Border using border color</li>
              </ul>
            </ComponentCard>
            
            <ComponentCard title="Accessibility">
              <p className="text-mui-text-secondary">
                Our color system is designed with accessibility in mind:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-mui-text-secondary">
                <li>Color pairs meet WCAG 2.1 AA contrast requirements</li>
                <li>Primary and destructive elements have dedicated foreground colors</li>
                <li>Muted colors for less prominent content follow hierarchy principles</li>
              </ul>
            </ComponentCard>
          </div>
        </TabsContent>
        
        <TabsContent value="primary" className="space-y-6">
          <ComponentCard title="Primary Colors">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {/* Primary palette */}
                <div className="flex flex-col">
                  <div className="h-24 bg-primary-50 rounded-t-md border border-mui-border"></div>
                  <div className="p-3 border border-t-0 rounded-b-md">
                    <h3 className="font-medium">Primary 50</h3>
                    <p className="text-xs text-mui-text-secondary">
                      <code>bg-primary-50</code> | <code>#EDF9F8</code>
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <div className="h-24 bg-primary-100 rounded-t-md border border-mui-border"></div>
                  <div className="p-3 border border-t-0 rounded-b-md">
                    <h3 className="font-medium">Primary 100</h3>
                    <p className="text-xs text-mui-text-secondary">
                      <code>bg-primary-100</code> | <code>#D9F4F2</code>
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <div className="h-24 bg-primary-200 rounded-t-md"></div>
                  <div className="p-3 border border-t-0 rounded-b-md">
                    <h3 className="font-medium">Primary 200</h3>
                    <p className="text-xs text-mui-text-secondary">
                      <code>bg-primary-200</code> | <code>#ACE0DD</code>
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <div className="h-24 bg-primary-300 rounded-t-md"></div>
                  <div className="p-3 border border-t-0 rounded-b-md">
                    <h3 className="font-medium">Primary 300</h3>
                    <p className="text-xs text-mui-text-secondary">
                      <code>bg-primary-300</code> | <code>#6FE0DC</code>
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <div className="h-24 bg-primary-400 rounded-t-md"></div>
                  <div className="p-3 border border-t-0 rounded-b-md">
                    <h3 className="font-medium">Primary 400</h3>
                    <p className="text-xs text-mui-text-secondary">
                      <code>bg-primary-400</code> | <code>#37D4D1</code>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="flex flex-col">
                  <div className="h-24 bg-primary-500 rounded-t-md"></div>
                  <div className="p-3 border border-t-0 rounded-b-md">
                    <h3 className="font-medium">Primary 500</h3>
                    <p className="text-xs text-mui-text-secondary">
                      <code>bg-primary-500</code> | <code>#10C2C0</code>
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <div className="h-24 bg-primary-600 rounded-t-md text-white flex items-end p-2">
                    <span className="text-xs">Aa</span>
                  </div>
                  <div className="p-3 border border-t-0 rounded-b-md">
                    <h3 className="font-medium">Primary 600</h3>
                    <p className="text-xs text-mui-text-secondary">
                      <code>bg-primary-600</code> | <code>#199BA0</code>
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <div className="h-24 bg-primary-700 rounded-t-md text-white flex items-end p-2">
                    <span className="text-xs">Aa</span>
                  </div>
                  <div className="p-3 border border-t-0 rounded-b-md">
                    <h3 className="font-medium">Primary 700</h3>
                    <p className="text-xs text-mui-text-secondary">
                      <code>bg-primary-700</code> | <code>#127279</code>
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <div className="h-24 bg-primary-800 rounded-t-md text-white flex items-end p-2">
                    <span className="text-xs">Aa</span>
                  </div>
                  <div className="p-3 border border-t-0 rounded-b-md">
                    <h3 className="font-medium">Primary 800</h3>
                    <p className="text-xs text-mui-text-secondary">
                      <code>bg-primary-800</code> | <code>#285E70</code>
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <div className="h-24 bg-primary-900 rounded-t-md text-white flex items-end p-2">
                    <span className="text-xs">Aa</span>
                  </div>
                  <div className="p-3 border border-t-0 rounded-b-md">
                    <h3 className="font-medium">Primary 900</h3>
                    <p className="text-xs text-mui-text-secondary">
                      <code>bg-primary-900</code> | <code>#062630</code>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4">Primary HSL</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Primary */}
                <div className="flex flex-col">
                  <div className="h-24 bg-primary rounded-t-md text-white flex items-end p-2">
                    <span className="text-xs">Aa</span>
                  </div>
                  <div className="p-3 border border-t-0 rounded-b-md">
                    <h3 className="font-medium">Primary</h3>
                    <p className="text-xs text-mui-text-secondary">
                      <code>bg-primary</code> | <code>hsl(180 85% 41%)</code>
                    </p>
                  </div>
                </div>
                
                {/* Primary Foreground */}
                <div className="flex flex-col">
                  <div className="h-24 bg-primary-foreground rounded-t-md border border-mui-border"></div>
                  <div className="p-3 border border-t-0 rounded-b-md">
                    <h3 className="font-medium">Primary Foreground</h3>
                    <p className="text-xs text-mui-text-secondary">
                      <code>bg-primary-foreground</code> | <code>hsl(180 40% 98%)</code>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4">Other Primary Colors</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Secondary */}
                <div className="flex flex-col">
                  <div className="h-24 bg-secondary rounded-t-md"></div>
                  <div className="p-3 border border-t-0 rounded-b-md">
                    <h3 className="font-medium">Secondary</h3>
                    <p className="text-xs text-mui-text-secondary">
                      <code>bg-secondary</code> | <code>hsl(210 20% 96%)</code>
                    </p>
                  </div>
                </div>
                
                {/* Secondary Foreground */}
                <div className="flex flex-col">
                  <div className="h-24 bg-secondary-foreground rounded-t-md"></div>
                  <div className="p-3 border border-t-0 rounded-b-md">
                    <h3 className="font-medium">Secondary Foreground</h3>
                    <p className="text-xs text-mui-text-secondary">
                      <code>bg-secondary-foreground</code> | <code>hsl(215 25% 27%)</code>
                    </p>
                  </div>
                </div>
                
                {/* Accent */}
                <div className="flex flex-col">
                  <div className="h-24 bg-accent rounded-t-md"></div>
                  <div className="p-3 border border-t-0 rounded-b-md">
                    <h3 className="font-medium">Accent</h3>
                    <p className="text-xs text-mui-text-secondary">
                      <code>bg-accent</code> | <code>hsl(210 20% 96%)</code>
                    </p>
                  </div>
                </div>
                
                {/* Accent Foreground */}
                <div className="flex flex-col">
                  <div className="h-24 bg-accent-foreground rounded-t-md"></div>
                  <div className="p-3 border border-t-0 rounded-b-md">
                    <h3 className="font-medium">Accent Foreground</h3>
                    <p className="text-xs text-mui-text-secondary">
                      <code>bg-accent-foreground</code> | <code>hsl(215 25% 27%)</code>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ComponentCard>
        </TabsContent>
        
        <TabsContent value="semantic" className="space-y-6">
          <ComponentCard title="Semantic Colors">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Background */}
              <div className="flex flex-col">
                <div className="h-24 bg-background rounded-t-md border border-mui-border"></div>
                <div className="p-3 border border-t-0 rounded-b-md">
                  <h3 className="font-medium">Background</h3>
                  <p className="text-xs text-mui-text-secondary">
                    <code>bg-background</code> | <code>hsl(0 0% 100%)</code>
                  </p>
                </div>
              </div>
              
              {/* Foreground */}
              <div className="flex flex-col">
                <div className="h-24 bg-foreground rounded-t-md"></div>
                <div className="p-3 border border-t-0 rounded-b-md">
                  <h3 className="font-medium">Foreground</h3>
                  <p className="text-xs text-mui-text-secondary">
                    <code>bg-foreground</code> | <code>hsl(222 47% 11%)</code>
                  </p>
                </div>
              </div>
              
              {/* Card */}
              <div className="flex flex-col">
                <div className="h-24 bg-card rounded-t-md border border-mui-border"></div>
                <div className="p-3 border border-t-0 rounded-b-md">
                  <h3 className="font-medium">Card</h3>
                  <p className="text-xs text-mui-text-secondary">
                    <code>bg-card</code> | <code>hsl(0 0% 100%)</code>
                  </p>
                </div>
              </div>
              
              {/* Card Foreground */}
              <div className="flex flex-col">
                <div className="h-24 bg-card-foreground rounded-t-md"></div>
                <div className="p-3 border border-t-0 rounded-b-md">
                  <h3 className="font-medium">Card Foreground</h3>
                  <p className="text-xs text-mui-text-secondary">
                    <code>bg-card-foreground</code> | <code>hsl(222 47% 11%)</code>
                  </p>
                </div>
              </div>
              
              {/* Muted */}
              <div className="flex flex-col">
                <div className="h-24 bg-muted rounded-t-md"></div>
                <div className="p-3 border border-t-0 rounded-b-md">
                  <h3 className="font-medium">Muted</h3>
                  <p className="text-xs text-mui-text-secondary">
                    <code>bg-muted</code> | <code>hsl(210 20% 96%)</code>
                  </p>
                </div>
              </div>
              
              {/* Muted Foreground */}
              <div className="flex flex-col">
                <div className="h-24 bg-muted-foreground rounded-t-md"></div>
                <div className="p-3 border border-t-0 rounded-b-md">
                  <h3 className="font-medium">Muted Foreground</h3>
                  <p className="text-xs text-mui-text-secondary">
                    <code>bg-muted-foreground</code> | <code>hsl(215 16% 47%)</code>
                  </p>
                </div>
              </div>
              
              {/* Destructive */}
              <div className="flex flex-col">
                <div className="h-24 bg-destructive rounded-t-md"></div>
                <div className="p-3 border border-t-0 rounded-b-md">
                  <h3 className="font-medium">Destructive</h3>
                  <p className="text-xs text-mui-text-secondary">
                    <code>bg-destructive</code> | <code>hsl(0 84% 60%)</code>
                  </p>
                </div>
              </div>
              
              {/* Destructive Foreground */}
              <div className="flex flex-col">
                <div className="h-24 bg-destructive-foreground rounded-t-md"></div>
                <div className="p-3 border border-t-0 rounded-b-md">
                  <h3 className="font-medium">Destructive Foreground</h3>
                  <p className="text-xs text-mui-text-secondary">
                    <code>bg-destructive-foreground</code> | <code>hsl(210 40% 98%)</code>
                  </p>
                </div>
              </div>
              
              {/* Border */}
              <div className="flex flex-col">
                <div className="h-24 border-8 border-border bg-background rounded-t-md"></div>
                <div className="p-3 border border-t-0 rounded-b-md">
                  <h3 className="font-medium">Border</h3>
                  <p className="text-xs text-mui-text-secondary">
                    <code>border-border</code> | <code>hsl(214 32% 91%)</code>
                  </p>
                </div>
              </div>
            </div>
          </ComponentCard>
        </TabsContent>
        
        <TabsContent value="mui" className="space-y-6">
          <ComponentCard title="MUI Specific Colors">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* MUI Primary */}
              <div className="flex flex-col">
                <div className="h-24 bg-mui-primary rounded-t-md"></div>
                <div className="p-3 border border-t-0 rounded-b-md">
                  <h3 className="font-medium">MUI Primary</h3>
                  <p className="text-xs text-mui-text-secondary">
                    <code>bg-mui-primary</code> | <code>#007FFF</code>
                  </p>
                </div>
              </div>
              
              {/* MUI Background */}
              <div className="flex flex-col">
                <div className="h-24 bg-mui-background rounded-t-md border border-mui-border"></div>
                <div className="p-3 border border-t-0 rounded-b-md">
                  <h3 className="font-medium">MUI Background</h3>
                  <p className="text-xs text-mui-text-secondary">
                    <code>bg-mui-background</code> | <code>#FFFFFF</code>
                  </p>
                </div>
              </div>
              
              {/* MUI Paper */}
              <div className="flex flex-col">
                <div className="h-24 bg-mui-paper rounded-t-md border border-mui-border"></div>
                <div className="p-3 border border-t-0 rounded-b-md">
                  <h3 className="font-medium">MUI Paper</h3>
                  <p className="text-xs text-mui-text-secondary">
                    <code>bg-mui-paper</code> | <code>#FFFFFF</code>
                  </p>
                </div>
              </div>
              
              {/* MUI Border */}
              <div className="flex flex-col">
                <div className="h-24 border-8 border-mui-border bg-background rounded-t-md"></div>
                <div className="p-3 border border-t-0 rounded-b-md">
                  <h3 className="font-medium">MUI Border</h3>
                  <p className="text-xs text-mui-text-secondary">
                    <code>border-mui-border</code> | <code>#E0E0E0</code>
                  </p>
                </div>
              </div>
              
              {/* MUI Divider */}
              <div className="flex flex-col">
                <div className="h-24 border-8 border-mui-divider bg-background rounded-t-md"></div>
                <div className="p-3 border border-t-0 rounded-b-md">
                  <h3 className="font-medium">MUI Divider</h3>
                  <p className="text-xs text-mui-text-secondary">
                    <code>border-mui-divider</code> | <code>#E5E8EC</code>
                  </p>
                </div>
              </div>
              
              {/* MUI Sidebar */}
              <div className="flex flex-col">
                <div className="h-24 bg-mui-sidebar rounded-t-md"></div>
                <div className="p-3 border border-t-0 rounded-b-md">
                  <h3 className="font-medium">MUI Sidebar</h3>
                  <p className="text-xs text-mui-text-secondary">
                    <code>bg-mui-sidebar</code> | <code>#F3F6F9</code>
                  </p>
                </div>
              </div>
              
              {/* MUI Hover */}
              <div className="flex flex-col">
                <div className="h-24 bg-mui-hover rounded-t-md"></div>
                <div className="p-3 border border-t-0 rounded-b-md">
                  <h3 className="font-medium">MUI Hover</h3>
                  <p className="text-xs text-mui-text-secondary">
                    <code>bg-mui-hover</code> | <code>#F5F7FA</code>
                  </p>
                </div>
              </div>
              
              {/* MUI Text Primary */}
              <div className="flex flex-col">
                <div className="h-24 bg-mui-text-primary rounded-t-md"></div>
                <div className="p-3 border border-t-0 rounded-b-md">
                  <h3 className="font-medium">MUI Text Primary</h3>
                  <p className="text-xs text-mui-text-secondary">
                    <code>text-mui-text-primary</code> | <code>#1A2027</code>
                  </p>
                </div>
              </div>
              
              {/* MUI Text Secondary */}
              <div className="flex flex-col">
                <div className="h-24 bg-mui-text-secondary rounded-t-md"></div>
                <div className="p-3 border border-t-0 rounded-b-md">
                  <h3 className="font-medium">MUI Text Secondary</h3>
                  <p className="text-xs text-mui-text-secondary">
                    <code>text-mui-text-secondary</code> | <code>#3E5060</code>
                  </p>
                </div>
              </div>
            </div>
          </ComponentCard>
        </TabsContent>
        
        <TabsContent value="usage" className="space-y-6">
          <ComponentCard title="Color Usage Guidelines">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Semantic Color Usage</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Color</TableHead>
                    <TableHead>Usage</TableHead>
                    <TableHead>Example</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Primary</TableCell>
                    <TableCell>Buttons, active states, focus rings, links</TableCell>
                    <TableCell><span className="px-4 py-1 bg-primary text-primary-foreground rounded">Button</span></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Primary-500</TableCell>
                    <TableCell>Main brand color, primary elements</TableCell>
                    <TableCell><span className="px-4 py-1 bg-primary-500 text-white rounded">Primary</span></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Primary-700</TableCell>
                    <TableCell>Hover states, darker accents</TableCell>
                    <TableCell><span className="px-4 py-1 bg-primary-700 text-white rounded">Hover</span></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Primary-200</TableCell>
                    <TableCell>Subtle highlights, backgrounds</TableCell>
                    <TableCell><span className="px-4 py-1 bg-primary-200 rounded">Highlight</span></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Secondary</TableCell>
                    <TableCell>Secondary buttons, backgrounds</TableCell>
                    <TableCell><span className="px-4 py-1 bg-secondary text-secondary-foreground rounded">Secondary</span></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Accent</TableCell>
                    <TableCell>Highlight areas, tooltips</TableCell>
                    <TableCell><span className="px-4 py-1 bg-accent text-accent-foreground rounded">Accent</span></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Destructive</TableCell>
                    <TableCell>Error states, delete buttons</TableCell>
                    <TableCell><span className="px-4 py-1 bg-destructive text-destructive-foreground rounded">Delete</span></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Muted</TableCell>
                    <TableCell>Subdued UI elements, placeholders</TableCell>
                    <TableCell><span className="px-4 py-1 bg-muted text-muted-foreground rounded">Placeholder</span></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Border</TableCell>
                    <TableCell>Dividers, separators</TableCell>
                    <TableCell><span className="px-4 py-1 border border-border rounded">Bordered</span></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <div className="space-y-4 mt-8">
              <h3 className="text-lg font-medium">Color Tokens in Tailwind</h3>
              <CodeBlock
                language="typescript"
                title="Tailwind Config Example"
                code={`// Example from tailwind.config.ts
colors: {
  border: 'hsl(var(--border))',
  input: 'hsl(var(--input))',
  ring: 'hsl(var(--ring))',
  background: 'hsl(var(--background))',
  foreground: 'hsl(var(--foreground))',
  primary: {
    DEFAULT: 'hsl(var(--primary))',
    foreground: 'hsl(var(--primary-foreground))',
    50: '#EDF9F8',
    100: '#D9F4F2',
    200: '#ACE0DD',
    300: '#6FE0DC',
    400: '#37D4D1',
    500: '#10C2C0',
    600: '#199BA0',
    700: '#127279',
    800: '#285E70',
    900: '#062630',
  },
  // ... other color definitions
}`}
              />
            </div>
          </ComponentCard>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Colors;

