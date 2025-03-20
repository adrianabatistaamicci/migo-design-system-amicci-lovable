
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Chip } from '@/components/ui/chip';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AlertCircle, Check, ChevronRight, CircleAlert, Info, Minus, Plus, Search, Home, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Calendar } from '@/components/ui/calendar';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Progress } from '@/components/ui/progress';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

const ComponentPreview = ({ title, children, imageSrc }: { title: string; children: React.ReactNode; imageSrc?: string }) => (
  <div className="flex flex-col">
    <div className="border border-border rounded-lg bg-white p-4 h-40 flex items-center justify-center overflow-hidden">
      {imageSrc ? (
        <img src={imageSrc} alt={title} className="max-w-full max-h-full object-contain" />
      ) : (
        children
      )}
    </div>
    <div className="mt-2 text-center">
      <h3 className="text-sm font-medium text-foreground">{title}</h3>
      <p className="text-xs text-muted-foreground">Variant: Default</p>
    </div>
  </div>
);

const UIKit = () => {
  return (
    <div className="space-y-12">
      <div>
        <div className="flex items-center gap-2 text-sm text-mui-primary font-medium mb-2">
          <Chip variant="filled" color="primary" size="sm">Components</Chip>
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">UI Kit</h1>
        <p className="text-muted-foreground text-lg mb-6">
          Uma visão geral dos principais componentes do nosso Design System
        </p>
      </div>
      
      {/* Application Shells Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Application Shells</h2>
        <div className="grid grid-cols-4 gap-8">
          <ComponentPreview 
            title="Stacked Layouts" 
            imageSrc="/lovable-uploads/f6aa1b2b-7324-42fb-88a6-eb2edcd3e418.png"
          />
          
          <ComponentPreview 
            title="Sidebar Layouts" 
            imageSrc="/lovable-uploads/336af692-23cf-4a8c-8757-162a4fd00375.png"
          />
          
          <ComponentPreview 
            title="Multi-Column Layouts" 
            imageSrc="/lovable-uploads/2a6fe280-07eb-4700-b96e-27c811b1229b.png"
          />
        </div>
      </section>
      
      {/* Headings Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Headings</h2>
        <div className="grid grid-cols-4 gap-8">
          <ComponentPreview 
            title="Page Headings" 
            imageSrc="/lovable-uploads/f2bce3ad-119e-4af8-90a1-747d0be6ddcb.png"
          />
          
          <ComponentPreview 
            title="Card Headings" 
            imageSrc="/lovable-uploads/28388e70-d12e-4364-bd71-eba6e0e50463.png"
          />
          
          <ComponentPreview 
            title="Section Headings" 
            imageSrc="/lovable-uploads/e73d2eaa-08d8-4c55-b2af-ad567c65d4c9.png"
          />
        </div>
      </section>
      
      {/* Data Display Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Data Display</h2>
        <div className="grid grid-cols-4 gap-8">
          <ComponentPreview 
            title="Description Lists" 
            imageSrc="/lovable-uploads/2b6d8e31-ad0e-4a2f-9740-f81d0d1614f7.png"
          />
          
          <ComponentPreview 
            title="Stats" 
            imageSrc="/lovable-uploads/63ff9463-6b61-42f7-8cbd-875aabcdfded.png"
          />
          
          <ComponentPreview 
            title="Calendars" 
            imageSrc="/lovable-uploads/f8656ab0-e07b-464f-b7ce-43531c3ff547.png"
          />
        </div>
      </section>
      
      {/* Lists Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Lists</h2>
        <div className="grid grid-cols-4 gap-8">
          <ComponentPreview 
            title="Stacked Lists" 
            imageSrc="/lovable-uploads/cce9335f-ea04-4b4a-a4f8-b6137f0eb721.png"
          />
          
          <ComponentPreview 
            title="Tables" 
            imageSrc="/lovable-uploads/f35315fb-e511-4371-a163-b95e77f580c8.png"
          />
          
          <ComponentPreview 
            title="Grid Lists" 
            imageSrc="/lovable-uploads/dc0dc3b4-3e0d-4471-8298-f0175662ddd4.png"
          />
          
          <ComponentPreview 
            title="Feeds" 
            imageSrc="/lovable-uploads/44f389d2-a889-4705-9313-ea8a9a3aa8ac.png"
          />
        </div>
      </section>
      
      {/* Forms Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Forms</h2>
        <div className="grid grid-cols-4 gap-8">
          <ComponentPreview 
            title="Form Layouts" 
            imageSrc="/lovable-uploads/e94f750f-1288-4b6b-9c20-a24f55cb6ab3.png"
          />
          
          <ComponentPreview 
            title="Input Groups" 
            imageSrc="/lovable-uploads/aa18e665-c276-4c3d-a3c6-a6e9ae300813.png"
          />
          
          <ComponentPreview 
            title="Select Menus" 
            imageSrc="/lovable-uploads/33d60e7d-b7a6-4c2c-bfe3-a20ca32e12b3.png"
          />
          
          <ComponentPreview 
            title="Sign-in and Registration" 
            imageSrc="/lovable-uploads/0117e8b0-c04c-4ebd-bfbe-bab6bfe8fd93.png"
          />
          
          <ComponentPreview 
            title="Textareas" 
            imageSrc="/lovable-uploads/0e8594f7-c522-4798-9abc-4b877d432f07.png"
          />
          
          <ComponentPreview 
            title="Radio Groups" 
            imageSrc="/lovable-uploads/abb4af30-a9e5-449c-91ae-d4b1ff4183f0.png"
          />
          
          <ComponentPreview 
            title="Checkboxes" 
            imageSrc="/lovable-uploads/675e671e-9952-4356-9f52-5e907cf57360.png"
          />
          
          <ComponentPreview 
            title="Toggles" 
            imageSrc="/lovable-uploads/1b74fc55-a30b-43ff-959e-686d6ae0a794.png"
          />
          
          <ComponentPreview 
            title="Action Panels" 
            imageSrc="/lovable-uploads/e3772c64-f653-47a8-83d2-008c41f8885b.png"
          />
          
          <ComponentPreview 
            title="Comboboxes" 
            imageSrc="/lovable-uploads/4e9b0c43-ea41-4676-9c2c-9deaf4695477.png"
          />
        </div>
      </section>
      
      {/* Feedback Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Feedback</h2>
        <div className="grid grid-cols-4 gap-8">
          <ComponentPreview 
            title="Alerts" 
            imageSrc="/lovable-uploads/e09d6f1e-de32-4e50-8e03-512be01774ef.png"
          />
          
          <ComponentPreview 
            title="Empty States" 
            imageSrc="/lovable-uploads/d12ac6c2-3852-4d6c-8fc9-bab883f641ce.png"
          />
        </div>
      </section>
      
      {/* Navigation Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Navigation</h2>
        <div className="grid grid-cols-4 gap-8">
          <ComponentPreview 
            title="Navbars" 
            imageSrc="/lovable-uploads/db3253c7-f917-437b-953b-669f1612759a.png"
          />
          
          <ComponentPreview 
            title="Pagination" 
            imageSrc="/lovable-uploads/67f0301e-ed87-4ba8-95f7-8c7aa0d1051b.png"
          />
          
          <ComponentPreview 
            title="Tabs" 
            imageSrc="/lovable-uploads/d03a11a1-9eb2-4d95-997e-0bbdd0b7b728.png"
          />
          
          <ComponentPreview 
            title="Vertical Navigation" 
            imageSrc="/lovable-uploads/36091514-7bee-4fd5-a802-9c4b68723030.png"
          />
          
          <ComponentPreview 
            title="Sidebar Navigation" 
            imageSrc="/lovable-uploads/5a74343d-166e-46d7-8b66-17ca3f00c7ca.png"
          />
          
          <ComponentPreview 
            title="Breadcrumbs" 
            imageSrc="/lovable-uploads/20c74145-b9ab-42dd-b315-01794ff130af.png"
          />
          
          <ComponentPreview 
            title="Progress Bars" 
            imageSrc="/lovable-uploads/402157d5-a145-4dc1-bf72-dd1c75989d01.png"
          />
          
          <ComponentPreview 
            title="Command Palettes" 
            imageSrc="/lovable-uploads/f2930016-563e-4c9f-9ae5-017e72e3b9a6.png"
          />
        </div>
      </section>
      
      {/* Overlays Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Overlays</h2>
        <div className="grid grid-cols-4 gap-8">
          <ComponentPreview 
            title="Modal Dialogs" 
            imageSrc="/lovable-uploads/f8021fa2-a704-4416-a404-772812df2ccc.png"
          />
          
          <ComponentPreview 
            title="Drawers" 
            imageSrc="/lovable-uploads/215d9018-6a6f-4f71-98e9-11222f699e71.png"
          />
          
          <ComponentPreview 
            title="Notifications" 
            imageSrc="/lovable-uploads/9122593d-1414-466a-8973-62005dc9ce8a.png"
          />
        </div>
      </section>
      
      {/* Elements Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Elements</h2>
        <div className="grid grid-cols-4 gap-8">
          <ComponentPreview 
            title="Avatars" 
            imageSrc="/lovable-uploads/aa6e96ca-2adf-4e2c-a5fa-2e7c5c4bb8f2.png"
          />
          
          <ComponentPreview 
            title="Badges" 
            imageSrc="/lovable-uploads/c35e9291-3626-4ddb-af93-d78cfe2009ed.png"
          />
          
          <ComponentPreview 
            title="Dropdowns" 
            imageSrc="/lovable-uploads/f584be26-3717-44fb-b15f-876d5aba156d.png"
          />
          
          <ComponentPreview 
            title="Buttons" 
            imageSrc="/lovable-uploads/caa4818d-d6ea-4955-b169-ba1550c8d046.png"
          />
          
          <ComponentPreview 
            title="Button Groups" 
            imageSrc="/lovable-uploads/77a7db39-32cb-4482-b43e-fb2e4bfe9261.png"
          />
        </div>
      </section>
      
      {/* Layout Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Layout</h2>
        <div className="grid grid-cols-4 gap-8">
          <ComponentPreview 
            title="Containers" 
            imageSrc="/lovable-uploads/a039a7f8-a787-4132-99e8-c748a899e91f.png"
          />
          
          <ComponentPreview 
            title="Cards" 
            imageSrc="/lovable-uploads/47a3f494-ddfa-4646-ab96-41e21322fccb.png"
          />
          
          <ComponentPreview 
            title="List containers" 
            imageSrc="/lovable-uploads/0fa6138b-8204-4b4d-bcb3-ddb6e6fb224f.png"
          />
          
          <ComponentPreview 
            title="Media Objects" 
            imageSrc="/lovable-uploads/b6cdb5a4-4b56-4ed1-bc7b-a6bd4eb097e0.png"
          />
          
          <ComponentPreview 
            title="Dividers" 
            imageSrc="/lovable-uploads/23aa6beb-9a06-465f-9682-36cfac592563.png"
          />
        </div>
      </section>
      
      {/* Page Examples Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Page Examples</h2>
        <div className="grid grid-cols-4 gap-8">
          <ComponentPreview 
            title="Home Screens" 
            imageSrc="/lovable-uploads/a51cb4d7-1566-4920-b3e8-bfcbea22d41b.png"
          />
          
          <ComponentPreview 
            title="Detail Screens" 
            imageSrc="/lovable-uploads/25514172-9036-498c-832b-51524261a218.png"
          />
          
          <ComponentPreview 
            title="Settings Screens" 
            imageSrc="/lovable-uploads/4957e8ff-4c9e-4d96-9a03-e0059c691a40.png"
          />
        </div>
      </section>
    </div>
  );
};

export default UIKit;
