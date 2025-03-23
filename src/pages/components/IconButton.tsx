
import React from 'react';
import HeaderLibrary from '@/components/library-components/HeaderLibrary';
import ComponentCard from '@/components/ComponentCard';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { IconButton } from '@/components/ui/icon-button';
import { Heart, Trash, Plus, Edit, Search, Settings, Mail, Check, Save, ArrowRight } from 'lucide-react';

const IconButtonPage = () => {
  return (
    <div className="animate-slide-in">
      <HeaderLibrary
        title="Icon Button"
        description="Square buttons with icons for compact UI elements."
        type="components"
      />

      <div className="space-y-12">
        {/* Basic Usage */}
        <section>
          <ComponentCard
            title="Basic Icon Buttons"
            description="Icon buttons in various variants."
            code={`<IconButton icon={<Heart size={18} />} />
<IconButton icon={<Trash size={18} />} variant="error" />
<IconButton icon={<Plus size={18} />} variant="success" />`}
          >
            <div className="flex gap-4">
              <IconButton icon={<Heart size={18} />} />
              <IconButton icon={<Trash size={18} />} variant="error" />
              <IconButton icon={<Plus size={18} />} variant="success" />
            </div>
          </ComponentCard>
        </section>

        {/* Outlined Variants */}
        <section>
          <ComponentCard
            title="Outlined Icon Buttons"
            description="Icon buttons with outlined style."
            code={`<IconButton icon={<Edit size={18} />} variant="outline-default" />
<IconButton icon={<Search size={18} />} variant="outline-secondary" />
<IconButton icon={<Settings size={18} />} variant="outline-error" />`}
          >
            <div className="flex gap-4">
              <IconButton icon={<Edit size={18} />} variant="outline-default" />
              <IconButton icon={<Search size={18} />} variant="outline-secondary" />
              <IconButton icon={<Settings size={18} />} variant="outline-error" />
            </div>
          </ComponentCard>
        </section>

        {/* Text Variants */}
        <section>
          <ComponentCard
            title="Text Icon Buttons"
            description="Icon buttons with text style (minimal background)."
            code={`<IconButton icon={<Mail size={18} />} variant="text-default" />
<IconButton icon={<Check size={18} />} variant="text-success" />
<IconButton icon={<Trash size={18} />} variant="text-error" />`}
          >
            <div className="flex gap-4">
              <IconButton icon={<Mail size={18} />} variant="text-default" />
              <IconButton icon={<Check size={18} />} variant="text-success" />
              <IconButton icon={<Trash size={18} />} variant="text-error" />
            </div>
          </ComponentCard>
        </section>

        {/* Sizes */}
        <section>
          <ComponentCard
            title="Button Sizes"
            description="Icon buttons in different sizes."
            code={`<IconButton icon={<Save size={14} />} size="sm" />
<IconButton icon={<Save size={18} />} />
<IconButton icon={<Save size={22} />} size="lg" />`}
          >
            <div className="flex items-center gap-4">
              <IconButton icon={<Save size={14} />} size="sm" />
              <IconButton icon={<Save size={18} />} />
              <IconButton icon={<Save size={22} />} size="lg" />
            </div>
          </ComponentCard>
        </section>

        {/* States */}
        <section>
          <ComponentCard
            title="Button States"
            description="Icon buttons in different states."
            code={`<IconButton icon={<ArrowRight size={18} />} />
<IconButton icon={<ArrowRight size={18} />} disabled />
<IconButton icon={<ArrowRight size={18} />} isLoading />`}
          >
            <div className="flex gap-4">
              <IconButton icon={<ArrowRight size={18} />} />
              <IconButton icon={<ArrowRight size={18} />} disabled />
              <IconButton icon={<ArrowRight size={18} />} isLoading />
            </div>
          </ComponentCard>
        </section>

        {/* API Reference */}
        <section>
          <h2 className="text-2xl font-medium text-mui-text-primary mb-6">
            API Reference
          </h2>
          
          <div className="border border-mui-border rounded-lg overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-mui-sidebar">
                  <TableHead className="w-[15%]">Prop</TableHead>
                  <TableHead className="w-[45%]">Type</TableHead>
                  <TableHead className="w-[15%]">Default</TableHead>
                  <TableHead className="w-[25%]">Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">variant</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary break-words">"default" | "secondary" | "error" | "warning" | "info" | "success" | "outline-default" | "outline-secondary" | "outline-error" | "outline-warning" | "outline-info" | "outline-success" | "text-default" | "text-secondary" | "text-error" | "text-warning" | "text-info" | "text-success"</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">"default"</TableCell>
                  <TableCell className="text-mui-text-secondary">Visual style of the button</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">size</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">"default" | "sm" | "lg"</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">"default"</TableCell>
                  <TableCell className="text-mui-text-secondary">Size of the button</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">icon</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">ReactNode</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">Required</TableCell>
                  <TableCell className="text-mui-text-secondary">Icon to display inside the button</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">disabled</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">boolean</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">false</TableCell>
                  <TableCell className="text-mui-text-secondary">When true, prevents user interaction</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-mui-text-primary">isLoading</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">boolean</TableCell>
                  <TableCell className="font-mono text-mui-text-secondary">false</TableCell>
                  <TableCell className="text-mui-text-secondary">When true, shows a loading spinner</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default IconButtonPage;
