
import React, { useState } from 'react';
import ComponentCard from '@/components/ComponentCard';
import { Button } from '@/components/ui/button';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { Mail, ArrowRight, Plus, X } from 'lucide-react';
import Header from '@/components/library-components/Header';
import { TailwindTabs } from '@/components/ui/tabs';
import CodeBlock from '@/components/CodeBlock';

const ButtonPage = () => {
  const [activeTab, setActiveTab] = useState('examples');
  
  // Colors for the variants tab
  const colors = [
    { name: 'info', hex: '#17a2b8' },
    { name: 'error', hex: '#dc3545' },
    { name: 'warning', hex: '#ffc107' },
    { name: 'primary', hex: '#0d6efd' },
    { name: 'success', hex: '#28a745' },
    { name: 'secondary', hex: '#6c757d' },
  ];
  
  return (
    <div className="w-full animate-slide-in">
      <div className="mb-12">
        <Header 
          title="Button"
          description="Buttons allow users to take actions, and make choices, with a single tap."
          type="components"
        />
        
        <TailwindTabs 
          defaultValue="examples" 
          className="mt-8"
          tabs={[
            { name: 'Exemplos', value: 'examples' },
            { name: 'Variantes', value: 'variants' },
            { name: 'API', value: 'api' },
            { name: 'Código', value: 'code' }
          ]}
          variant="pillsGray"
          onChange={value => setActiveTab(value)}
        />
        
        <div className="mt-6">
          {activeTab === 'code' && (
            <div className="mb-12">
              <h2 className="text-2xl font-medium text-mui-text-primary mb-6">
                Import
              </h2>
              
              <pre className="bg-mui-sidebar p-4 rounded-md overflow-x-auto text-sm">
                <code>import {'{ Button }'} from "@/components/ui/button";</code>
              </pre>
            </div>
          )}
          
          {activeTab === 'examples' && (
            <div className="space-y-8">
              <ComponentCard
                title="Button Variants"
                description="Different visual styles for buttons."
              >
                <div className="flex flex-wrap gap-4">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
              </ComponentCard>
              
              <ComponentCard
                title="Button Sizes"
                description="Different sizes for various contexts."
              >
                <div className="flex items-center flex-wrap gap-4">
                  <Button size="sm">Small</Button>
                  <Button>Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon"><Plus size={16} /></Button>
                </div>
              </ComponentCard>
              
              <ComponentCard
                title="Button States"
                description="Different interaction states."
              >
                <div className="flex flex-wrap gap-4">
                  <Button>Default</Button>
                  <Button disabled>Disabled</Button>
                  <Button className="opacity-50 cursor-not-allowed">Custom Disabled</Button>
                </div>
              </ComponentCard>
              
              <ComponentCard
                title="Button with Icon"
                description="Buttons with additional icon elements."
              >
                <div className="flex flex-wrap gap-4">
                  <Button>
                    <Mail className="mr-2 h-4 w-4" /> Login with Email
                  </Button>
                  <Button variant="outline">
                    <Plus className="mr-2 h-4 w-4" /> New Item
                  </Button>
                  <Button variant="secondary">
                    Next <Plus className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </ComponentCard>
            </div>
          )}
          
          {activeTab === 'variants' && (
            <div className="space-y-8">
              <ComponentCard
                title="Contained Buttons"
                description="Botões com preenchimento de cor para ações principais."
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {colors.map(color => (
                    <div key={`contained-${color.name}`} className="flex flex-col items-center space-y-2">
                      <div className="flex justify-center space-x-4">
                        <Button 
                          variant={color.name === 'secondary' ? 'secondary' : color.name === 'primary' ? 'default' : color.name}
                          className="w-28"
                        >
                          Lable
                        </Button>
                      </div>
                      <CodeBlock 
                        code={`<Button variant="${color.name === 'primary' ? 'default' : color.name}">
  Lable
</Button>`}
                        language="jsx"
                        className="w-full"
                      />
                    </div>
                  ))}
                </div>
              </ComponentCard>
              
              <ComponentCard
                title="Outlined Buttons"
                description="Botões com contorno para ações secundárias."
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {colors.map(color => (
                    <div key={`outlined-${color.name}`} className="flex flex-col items-center space-y-2">
                      <div className="flex justify-center space-x-4">
                        <Button 
                          variant={`outline-${color.name === 'primary' ? 'default' : color.name}`}
                          className="w-28"
                        >
                          Lable
                        </Button>
                      </div>
                      <CodeBlock 
                        code={`<Button variant="outline-${color.name === 'primary' ? 'default' : color.name}">
  Lable
</Button>`}
                        language="jsx"
                        className="w-full"
                      />
                    </div>
                  ))}
                </div>
              </ComponentCard>
              
              <ComponentCard
                title="Text Buttons"
                description="Botões sem fundo para ações terciárias ou menos proeminentes."
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {colors.map(color => (
                    <div key={`text-${color.name}`} className="flex flex-col items-center space-y-2">
                      <div className="flex justify-center space-x-4">
                        <Button 
                          variant={`text-${color.name === 'primary' ? 'default' : color.name}`}
                          className="w-28"
                        >
                          Lable
                        </Button>
                      </div>
                      <CodeBlock 
                        code={`<Button variant="text-${color.name === 'primary' ? 'default' : color.name}">
  Lable
</Button>`}
                        language="jsx"
                        className="w-full"
                      />
                    </div>
                  ))}
                </div>
              </ComponentCard>
              
              <ComponentCard
                title="Button Sizes"
                description="Os botões estão disponíveis em diferentes tamanhos para diferentes contextos."
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="flex justify-center space-x-4">
                      <Button size="lg" className="w-28">Lable</Button>
                    </div>
                    <CodeBlock 
                      code={`<Button size="lg">
  Lable
</Button>`}
                      language="jsx"
                      className="w-full"
                    />
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="flex justify-center space-x-4">
                      <Button className="w-28">Lable</Button>
                    </div>
                    <CodeBlock 
                      code={`<Button>
  Lable
</Button>`}
                      language="jsx"
                      className="w-full"
                    />
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="flex justify-center space-x-4">
                      <Button size="sm" className="w-28">Lable</Button>
                    </div>
                    <CodeBlock 
                      code={`<Button size="sm">
  Lable
</Button>`}
                      language="jsx"
                      className="w-full"
                    />
                  </div>
                </div>
              </ComponentCard>
            </div>
          )}
          
          {activeTab === 'api' && (
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
                    <TableCell className="font-mono text-mui-text-primary">variant</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">
                      "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
                    </TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">"default"</TableCell>
                    <TableCell className="text-mui-text-secondary">The visual style of the button</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-mui-text-primary">size</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">
                      "default" | "sm" | "lg" | "icon"
                    </TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">"default"</TableCell>
                    <TableCell className="text-mui-text-secondary">The size of the button</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-mui-text-primary">asChild</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">boolean</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">false</TableCell>
                    <TableCell className="text-mui-text-secondary">
                      When true, the component will render as its child
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-mui-text-primary">disabled</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">boolean</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">false</TableCell>
                    <TableCell className="text-mui-text-secondary">
                      When true, prevents user interaction
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ButtonPage;
