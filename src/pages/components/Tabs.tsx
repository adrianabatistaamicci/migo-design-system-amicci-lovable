
import React from 'react';
import ComponentCard from '@/components/ComponentCard';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { TailwindTabs } from '@/components/ui/tailwind-tabs';

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
            <code>import {'{ TailwindTabs }'} from "@/components/ui/tailwind-tabs";</code>
          </pre>
        </div>
        
        <div className="space-y-12">
          <ComponentCard title="Tabs with Underline (Default)" description="The default tabs component with an underline indicator." code={`<TailwindTabs
  tabs={[
    { name: 'My Account', value: 'account' },
    { name: 'Company', value: 'company' },
    { name: 'Team Members', value: 'team' },
    { name: 'Billing', value: 'billing' }
  ]}
  variant="underline"
/>`}>
            <div className="w-full">
              <TailwindTabs
                tabs={[
                  { name: 'My Account', value: 'account' },
                  { name: 'Company', value: 'company' },
                  { name: 'Team Members', value: 'team' },
                  { name: 'Billing', value: 'billing' }
                ]}
                variant="underline"
              />
              <div className="p-4 border-x border-b border-gray-200 rounded-b-md mt-3">
                <h3 className="text-lg font-medium mb-2">Account Settings</h3>
                <p className="text-sm text-gray-500">
                  Manage your account settings and preferences.
                </p>
              </div>
            </div>
          </ComponentCard>

          <ComponentCard title="Tabs in Pills" description="Tabs displayed as clickable pills with subtle background change." code={`<TailwindTabs
  tabs={[
    { name: 'Dashboard', value: 'dashboard' },
    { name: 'Team', value: 'team' },
    { name: 'Projects', value: 'projects' },
    { name: 'Calendar', value: 'calendar' },
  ]}
  variant="pills"
/>`}>
            <div className="w-full max-w-md mx-auto">
              <TailwindTabs
                tabs={[
                  { name: 'Dashboard', value: 'dashboard' },
                  { name: 'Team', value: 'team' },
                  { name: 'Projects', value: 'projects' },
                  { name: 'Calendar', value: 'calendar' },
                ]}
                variant="pills"
              />
              <div className="p-4 border border-gray-200 rounded-md mt-3">
                <p className="text-sm">Dashboard content</p>
              </div>
            </div>
          </ComponentCard>

          <ComponentCard title="Tabs in Pills on Gray" description="Tabs in a pill format on a gray background for better contrast." code={`<TailwindTabs
  tabs={[
    { name: 'Dashboard', value: 'dashboard' },
    { name: 'Team', value: 'team' },
    { name: 'Projects', value: 'projects' },
    { name: 'Calendar', value: 'calendar' },
  ]}
  variant="pillsGray"
/>`}>
            <div className="w-full max-w-md mx-auto">
              <TailwindTabs
                tabs={[
                  { name: 'Dashboard', value: 'dashboard' },
                  { name: 'Team', value: 'team' },
                  { name: 'Projects', value: 'projects' },
                  { name: 'Calendar', value: 'calendar' },
                ]}
                variant="pillsGray"
              />
              <div className="p-4 border border-gray-200 rounded-md mt-3">
                <p className="text-sm">Dashboard content</p>
              </div>
            </div>
          </ComponentCard>

          <ComponentCard title="Tabs in Pills with Brand Color" description="Tabs in a pill format with the brand color for the active tab." code={`<TailwindTabs
  tabs={[
    { name: 'Dashboard', value: 'dashboard' },
    { name: 'Team', value: 'team' },
    { name: 'Projects', value: 'projects' },
    { name: 'Calendar', value: 'calendar' },
  ]}
  variant="pillsBrand"
/>`}>
            <div className="w-full max-w-md mx-auto">
              <TailwindTabs
                tabs={[
                  { name: 'Dashboard', value: 'dashboard' },
                  { name: 'Team', value: 'team' },
                  { name: 'Projects', value: 'projects' },
                  { name: 'Calendar', value: 'calendar' },
                ]}
                variant="pillsBrand"
              />
              <div className="p-4 border border-gray-200 rounded-md mt-3">
                <p className="text-sm">Dashboard content</p>
              </div>
            </div>
          </ComponentCard>

          <ComponentCard title="Full-width Tabs with Underline" description="Tabs that expand to fill the entire width with an underline for the active tab." code={`<TailwindTabs
  tabs={[
    { name: 'Dashboard', value: 'dashboard' },
    { name: 'Team', value: 'team' },
    { name: 'Projects', value: 'projects' },
  ]}
  variant="fullWidth"
/>`}>
            <div className="w-full max-w-md mx-auto">
              <TailwindTabs
                tabs={[
                  { name: 'Dashboard', value: 'dashboard' },
                  { name: 'Team', value: 'team' },
                  { name: 'Projects', value: 'projects' },
                ]}
                variant="fullWidth"
              />
              <div className="p-4 border-x border-b border-gray-200 rounded-b-md">
                <p className="text-sm">Dashboard content</p>
              </div>
            </div>
          </ComponentCard>

          <ComponentCard title="Bar with Underline" description="A minimalist bar with an underline for the active tab." code={`<TailwindTabs
  tabs={[
    { name: 'Overview', value: 'overview' },
    { name: 'Features', value: 'features' },
    { name: 'Pricing', value: 'pricing' },
    { name: 'FAQs', value: 'faqs' },
  ]}
  variant="bar"
/>`}>
            <div className="w-full max-w-md mx-auto">
              <TailwindTabs
                tabs={[
                  { name: 'Overview', value: 'overview' },
                  { name: 'Features', value: 'features' },
                  { name: 'Pricing', value: 'pricing' },
                  { name: 'FAQs', value: 'faqs' },
                ]}
                variant="bar"
              />
              <div className="p-4 mt-4">
                <p className="text-sm">Overview content</p>
              </div>
            </div>
          </ComponentCard>

          <ComponentCard title="Tabs with Underline and Badges" description="Tabs with an underline and badges to display counters or status indicators." code={`<TailwindTabs
  tabs={[
    { name: 'Inbox', value: 'inbox' },
    { name: 'Spam', value: 'spam' },
    { name: 'Archived', value: 'archived' },
  ]}
  variant="underlineBadges"
/>`}>
            <div className="w-full max-w-md mx-auto">
              <TailwindTabs
                tabs={[
                  { name: 'Inbox', value: 'inbox' },
                  { name: 'Spam', value: 'spam' },
                  { name: 'Archived', value: 'archived' },
                ]}
                variant="underlineBadges"
              />
              <div className="p-4 border-x border-b border-gray-200 rounded-b-md">
                <p className="text-sm">Inbox content</p>
              </div>
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
                    <TableCell className="font-mono text-mui-text-primary">TailwindTabs</TableCell>
                    <TableCell className="text-mui-text-secondary">A simple tab component with multiple style variants</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <h3 className="text-xl font-medium text-mui-text-primary my-6">
              TailwindTabs Props
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
                    <TableCell className="font-mono text-mui-text-primary">tabs</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">Array&lt;{'{name: string, value: string}'}&gt;</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">required</TableCell>
                    <TableCell className="text-mui-text-secondary">Array of tab items with name and value properties</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-mui-text-primary">defaultValue</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">string</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">tabs[0].value</TableCell>
                    <TableCell className="text-mui-text-secondary">The default selected tab value</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-mui-text-primary">onChange</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">(value: string) =&gt; void</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">undefined</TableCell>
                    <TableCell className="text-mui-text-secondary">Callback function when tab selection changes</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-mui-text-primary">variant</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">"underline" | "pills" | "pillsGray" | "pillsBrand" | "fullWidth" | "bar" | "underlineBadges"</TableCell>
                    <TableCell className="font-mono text-mui-text-secondary">"underline"</TableCell>
                    <TableCell className="text-mui-text-secondary">Visual style variant of the tabs</TableCell>
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
