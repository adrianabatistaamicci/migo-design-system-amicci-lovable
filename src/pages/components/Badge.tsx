
import React, { useState } from 'react';
import ComponentCard from '@/components/ComponentCard';
import { Badge } from '@/components/ui/badge';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { Mail, Bell, MessageSquare, User } from 'lucide-react';
import Header from '@/components/library-components/Header';

const BadgePage = () => {
  return (
    <div className="w-full animate-slide-in">
      <div className="mb-12">
        <Header 
          title="Badge"
          description="Badges are small status descriptors for UI elements that display counts, statuses, or notifications."
          type="components"
        />
        
        <div className="mb-12">
          <h2 className="text-2xl font-medium text-mui-text-primary mb-6">
            Import
          </h2>
          
          <pre className="bg-mui-sidebar p-4 rounded-md overflow-x-auto text-sm">
            <code>import {'{ Badge }'} from "@/components/ui/badge";</code>
          </pre>
        </div>
        
        <div className="space-y-12">
          <ComponentCard 
            title="Basic Badge" 
            description="A simple badge component that wraps an element."
            code={`<Badge badgeContent={4}>
  <Mail className="h-6 w-6" />
</Badge>`}
          >
            <div className="flex items-center justify-center p-6">
              <Badge badgeContent={4}>
                <Mail className="h-6 w-6" />
              </Badge>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Badge Colors" 
            description="Badges in different colors to represent different states or categories."
            code={`<div className="flex items-center gap-6">
  <Badge badgeContent={4} color="primary">
    <Mail className="h-6 w-6" />
  </Badge>
  <Badge badgeContent={4} color="secondary">
    <Bell className="h-6 w-6" />
  </Badge>
  <Badge badgeContent={4} color="error">
    <MessageSquare className="h-6 w-6" />
  </Badge>
  <Badge badgeContent={4} color="success">
    <User className="h-6 w-6" />
  </Badge>
</div>`}
          >
            <div className="flex items-center justify-center gap-6 p-6">
              <Badge badgeContent={4} color="primary">
                <Mail className="h-6 w-6" />
              </Badge>
              <Badge badgeContent={4} color="secondary">
                <Bell className="h-6 w-6" />
              </Badge>
              <Badge badgeContent={4} color="error">
                <MessageSquare className="h-6 w-6" />
              </Badge>
              <Badge badgeContent={4} color="success">
                <User className="h-6 w-6" />
              </Badge>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Dot Badges" 
            description="Minimal badges showing only a dot indicator for subtle notifications."
            code={`<div className="flex items-center gap-6">
  <Badge variant="dot" color="primary">
    <Mail className="h-6 w-6" />
  </Badge>
  <Badge variant="dot" color="secondary">
    <Bell className="h-6 w-6" />
  </Badge>
  <Badge variant="dot" color="error">
    <MessageSquare className="h-6 w-6" />
  </Badge>
</div>`}
          >
            <div className="flex items-center justify-center gap-6 p-6">
              <Badge variant="dot" color="primary">
                <Mail className="h-6 w-6" />
              </Badge>
              <Badge variant="dot" color="secondary">
                <Bell className="h-6 w-6" />
              </Badge>
              <Badge variant="dot" color="error">
                <MessageSquare className="h-6 w-6" />
              </Badge>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Maximum Value" 
            description="Badges that cap the displayed number with a maximum value."
            code={`<div className="flex items-center gap-6">
  <Badge badgeContent={99} max={99}>
    <Mail className="h-6 w-6" />
  </Badge>
  <Badge badgeContent={1000} max={999}>
    <Bell className="h-6 w-6" />
  </Badge>
</div>`}
          >
            <div className="flex items-center justify-center gap-6 p-6">
              <Badge badgeContent={99} max={99}>
                <Mail className="h-6 w-6" />
              </Badge>
              <Badge badgeContent={1000} max={999}>
                <Bell className="h-6 w-6" />
              </Badge>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Badge Visibility" 
            description="Control the visibility of badges with the invisible and showZero props."
            code={`<div className="flex items-center gap-6">
  <Badge badgeContent={0} showZero>
    <Mail className="h-6 w-6" />
  </Badge>
  <Badge badgeContent={0}>
    <Bell className="h-6 w-6" />
  </Badge>
  <Badge badgeContent={5} invisible>
    <MessageSquare className="h-6 w-6" />
  </Badge>
</div>`}
          >
            <div className="flex items-center justify-center gap-6 p-6">
              <Badge badgeContent={0} showZero>
                <Mail className="h-6 w-6" />
              </Badge>
              <Badge badgeContent={0}>
                <Bell className="h-6 w-6" />
              </Badge>
              <Badge badgeContent={5} invisible>
                <MessageSquare className="h-6 w-6" />
              </Badge>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Badge Positioning" 
            description="Customize the position of the badge relative to its child element."
            code={`<div className="flex items-center gap-6">
  <Badge 
    badgeContent={4} 
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
  >
    <Mail className="h-6 w-6" />
  </Badge>
  <Badge 
    badgeContent={4} 
    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  >
    <Bell className="h-6 w-6" />
  </Badge>
  <Badge 
    badgeContent={4} 
    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
  >
    <MessageSquare className="h-6 w-6" />
  </Badge>
  <Badge 
    badgeContent={4} 
    anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
  >
    <User className="h-6 w-6" />
  </Badge>
</div>`}
          >
            <div className="flex items-center justify-center gap-6 p-6">
              <Badge 
                badgeContent={4} 
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              >
                <Mail className="h-6 w-6" />
              </Badge>
              <Badge 
                badgeContent={4} 
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              >
                <Bell className="h-6 w-6" />
              </Badge>
              <Badge 
                badgeContent={4} 
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              >
                <MessageSquare className="h-6 w-6" />
              </Badge>
              <Badge 
                badgeContent={4} 
                anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
              >
                <User className="h-6 w-6" />
              </Badge>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Badge Sizes" 
            description="Badges in different sizes to match various UI element scales."
            code={`<div className="flex items-center gap-6">
  <Badge badgeContent={4} size="sm">
    <Mail className="h-4 w-4" />
  </Badge>
  <Badge badgeContent={4} size="default">
    <Bell className="h-6 w-6" />
  </Badge>
  <Badge badgeContent={4} size="lg">
    <MessageSquare className="h-8 w-8" />
  </Badge>
</div>`}
          >
            <div className="flex items-center justify-center gap-6 p-6">
              <Badge badgeContent={4} size="sm">
                <Mail className="h-4 w-4" />
              </Badge>
              <Badge badgeContent={4} size="default">
                <Bell className="h-6 w-6" />
              </Badge>
              <Badge badgeContent={4} size="lg">
                <MessageSquare className="h-8 w-8" />
              </Badge>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Standalone Badge" 
            description="A badge without any child elements, displayed on its own."
            code={`<div className="flex items-center gap-4">
  <Badge badgeContent={4} />
  <Badge badgeContent="New" color="secondary" />
  <Badge badgeContent="Online" color="success" />
</div>`}
          >
            <div className="flex items-center justify-center gap-4 p-6">
              <Badge badgeContent={4} />
              <Badge badgeContent="New" color="secondary" />
              <Badge badgeContent="Online" color="success" />
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
                  <TableHead className="w-1/4">Prop</TableHead>
                  <TableHead className="w-1/4">Type</TableHead>
                  <TableHead className="w-1/4">Default</TableHead>
                  <TableHead className="w-1/4">Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">badgeContent</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">React.ReactNode</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">undefined</TableCell>
                  <TableCell className="text-mui-text-secondary">The content displayed inside the badge</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">max</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">number</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">99</TableCell>
                  <TableCell className="text-mui-text-secondary">Max count to show</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">showZero</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">boolean</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">false</TableCell>
                  <TableCell className="text-mui-text-secondary">Controls whether zero should be displayed</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">invisible</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">boolean</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">false</TableCell>
                  <TableCell className="text-mui-text-secondary">Controls whether the badge is visible</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">overlap</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">"rectangular" | "circular"</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">"rectangular"</TableCell>
                  <TableCell className="text-mui-text-secondary">Defines how the badge should overlap its container</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">color</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">"default" | "primary" | "secondary" | "error" | "info" | "success" | "warning"</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">"primary"</TableCell>
                  <TableCell className="text-mui-text-secondary">The color of the badge</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">variant</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">"standard" | "dot"</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">"standard"</TableCell>
                  <TableCell className="text-mui-text-secondary">The variant of the badge</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">size</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">"default" | "sm" | "lg"</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">"default"</TableCell>
                  <TableCell className="text-mui-text-secondary">The size of the badge</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">anchorOrigin</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">{"{ vertical: 'top' | 'bottom', horizontal: 'left' | 'right' }"}</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">{"{ vertical: 'top', horizontal: 'right' }"}</TableCell>
                  <TableCell className="text-mui-text-secondary">The position of the badge</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgePage;
