
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
import ComponentPreview from '@/components/ComponentPreview';

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
            imageSrc="/lovable-uploads/6494a6b7-7e2d-4923-ade4-f6b94ac36d33.png"
            variantCount={3}
          />
          
          <ComponentPreview 
            title="Sidebar Layouts" 
            imageSrc="/lovable-uploads/8a001d04-9595-42ef-92a8-0808f6d448c6.png"
            variantCount={4}
          />
          
          <ComponentPreview 
            title="Multi-Column Layouts" 
            imageSrc="/lovable-uploads/b35bd2e0-eef8-479a-9389-1a57c8f605ee.png"
            variantCount={2}
          />
          
          <ComponentPreview 
            title="Detail Screens" 
            imageSrc="/lovable-uploads/c23fa7cc-d0c5-4376-8c6a-406bb780b63c.png"
            variantCount={5}
          />
        </div>
      </section>
      
      {/* Headings Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Headings</h2>
        <div className="grid grid-cols-4 gap-8">
          <ComponentPreview 
            title="Page Headings" 
            imageSrc="/lovable-uploads/f8215c23-af61-4b4d-ac31-4d7b292725ff.png"
            variantCount={3}
          />
          
          <ComponentPreview 
            title="Card Headings" 
            imageSrc="/lovable-uploads/931a31e6-9d0a-41b1-93e5-1681294463ae.png"
            variantCount={2}
          />
          
          <ComponentPreview 
            title="Section Headings" 
            imageSrc="/lovable-uploads/213a7e3e-5d49-4a3d-b9f1-11acd582d0e2.png"
            variantCount={4}
          />
          
          <ComponentPreview 
            title="Home Screens" 
            imageSrc="/lovable-uploads/8520e209-31e4-4051-b983-a9081f769a0c.png"
            variantCount={2}
          />
        </div>
      </section>
      
      {/* Data Display Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Data Display</h2>
        <div className="grid grid-cols-4 gap-8">
          <ComponentPreview 
            title="Description Lists" 
            imageSrc="/lovable-uploads/5f649a1b-74e4-4407-895d-137aedc5e2d3.png"
            variantCount={3}
          />
          
          <ComponentPreview 
            title="Stats" 
            imageSrc="/lovable-uploads/6d64638a-45da-44dc-9873-6e7497f67e42.png"
            variantCount={5}
          />
          
          <ComponentPreview 
            title="Calendars" 
            imageSrc="/lovable-uploads/de0f3097-8fd3-465f-bba1-58311b4248a4.png"
            variantCount={2}
          />
          
          <ComponentPreview 
            title="Settings Screens" 
            imageSrc="/lovable-uploads/ad87ff5c-15b9-4d8f-8480-a9da36b9997f.png"
            variantCount={3}
          />
        </div>
      </section>
      
      {/* Lists Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Lists</h2>
        <div className="grid grid-cols-4 gap-8">
          <ComponentPreview 
            title="Stacked Lists" 
            imageSrc="/lovable-uploads/4646c199-564b-4a91-9317-f66836fb4d0b.png"
            variantCount={6}
          />
          
          <ComponentPreview 
            title="Tables" 
            imageSrc="/lovable-uploads/b3d7ab36-7698-45e9-a238-d7dac3d86a5d.png"
            variantCount={4}
          />
          
          <ComponentPreview 
            title="Grid Lists" 
            imageSrc="/lovable-uploads/9aecb85e-21cc-43c0-b9ad-ab2e23b1d32f.png"
            variantCount={3}
          />
          
          <ComponentPreview 
            title="Feeds" 
            imageSrc="/lovable-uploads/0ca6eec8-5eb3-44ed-86c0-d4454f6e8080.png"
            variantCount={2}
          />
        </div>
      </section>
      
      {/* Forms Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Forms</h2>
        <div className="grid grid-cols-4 gap-8">
          <ComponentPreview 
            title="Form Layouts" 
            imageSrc="/lovable-uploads/e48b1dc7-68ad-4930-ac24-fc7a5ddb6c23.png"
            variantCount={5}
          />
          
          <ComponentPreview 
            title="Input Groups" 
            imageSrc="/lovable-uploads/0fe02f94-549d-45c2-8a71-3b44d7138f0e.png"
            variantCount={3}
          />
          
          <ComponentPreview 
            title="Select Menus" 
            imageSrc="/lovable-uploads/059da7bc-1146-46d8-a59c-36baae9a36fd.png"
            variantCount={4}
          />
          
          <ComponentPreview 
            title="Sign-in and Registration" 
            imageSrc="/lovable-uploads/1486e65d-405a-43d8-b415-499da41ea20e.png"
            variantCount={3}
          />
          
          <ComponentPreview 
            title="Textareas" 
            imageSrc="/lovable-uploads/806652d9-9011-4af8-baf5-5d9532bca949.png"
            variantCount={2}
          />
          
          <ComponentPreview 
            title="Radio Groups" 
            imageSrc="/lovable-uploads/fd6e03f9-6003-4e1c-b934-cb450797ca3a.png"
            variantCount={3}
          />
          
          <ComponentPreview 
            title="Checkboxes" 
            imageSrc="/lovable-uploads/4ec3b02f-56e4-47d6-a2a6-83d55e09703d.png"
            variantCount={4}
          />
          
          <ComponentPreview 
            title="Toggles" 
            imageSrc="/lovable-uploads/b810a84e-21aa-43b2-aa2d-003fb13889de.png"
            variantCount={3}
          />
          
          <ComponentPreview 
            title="Action Panels" 
            imageSrc="/lovable-uploads/8a3de5e2-da12-46f2-8f0f-f901556b46c6.png"
            variantCount={2}
          />
          
          <ComponentPreview 
            title="Comboboxes" 
            imageSrc="/lovable-uploads/d7db558c-b561-4ffa-ba66-b6e737fcec01.png"
            variantCount={3}
          />
        </div>
      </section>
      
      {/* Feedback Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Feedback</h2>
        <div className="grid grid-cols-4 gap-8">
          <ComponentPreview 
            title="Alerts" 
            imageSrc="/lovable-uploads/b38417c4-f16e-4b51-a9d3-63f5dc0bc8ac.png"
            variantCount={4}
          />
          
          <ComponentPreview 
            title="Empty States" 
            imageSrc="/lovable-uploads/2fd33868-3566-4b02-addf-09a30801e7bf.png"
            variantCount={3}
          />
          
          <ComponentPreview 
            title="Notifications - Toast" 
            imageSrc="/lovable-uploads/490f68ce-f4ef-4cc2-829e-626a6402ac92.png"
            variantCount={5}
          />
          
          <ComponentPreview 
            title="Modal Dialogs" 
            imageSrc="/lovable-uploads/8202dffd-c350-4fee-9ca6-9f701cafd28e.png"
            variantCount={4}
          />
        </div>
      </section>
      
      {/* Navigation Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Navigation</h2>
        <div className="grid grid-cols-4 gap-8">
          <ComponentPreview 
            title="Navbars" 
            imageSrc="/lovable-uploads/be043cb1-dbc7-49a9-881b-2f66248a3fec.png"
            variantCount={6}
          />
          
          <ComponentPreview 
            title="Pagination" 
            imageSrc="/lovable-uploads/bf35c256-9bec-48f1-86dc-92ab2bd2e05d.png"
            variantCount={3}
          />
          
          <ComponentPreview 
            title="Tabs" 
            imageSrc="/lovable-uploads/c9489d33-ab7d-4112-aa7f-4e9db69d9733.png"
            variantCount={4}
          />
          
          <ComponentPreview 
            title="Vertical Navigation" 
            imageSrc="/lovable-uploads/99b2e671-2178-4488-a6c4-9bbdb78aa878.png"
            variantCount={3}
          />
          
          <ComponentPreview 
            title="Sidebar Navigation" 
            imageSrc="/lovable-uploads/2f29497e-3d49-4772-a29b-f56a557db4fe.png"
            variantCount={4}
          />
          
          <ComponentPreview 
            title="Breadcrumbs" 
            imageSrc="/lovable-uploads/64006699-910d-4cab-977d-47a66d906e76.png"
            variantCount={2}
          />
          
          <ComponentPreview 
            title="Progress Bars" 
            imageSrc="/lovable-uploads/5900fb36-0ec5-4a9b-8217-b02eb4ef3d28.png"
            variantCount={3}
          />
          
          <ComponentPreview 
            title="Command Palettes" 
            imageSrc="/lovable-uploads/e58f8e0c-0a70-4be9-842a-2949192ccd14.png"
            variantCount={2}
          />
        </div>
      </section>
      
      {/* Overlays Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Overlays</h2>
        <div className="grid grid-cols-4 gap-8">
          <ComponentPreview 
            title="Modal Dialogs" 
            imageSrc="/lovable-uploads/64faea4c-8d5a-48d3-8d5f-3bb33d8df74c.png"
            variantCount={4}
          />
          
          <ComponentPreview 
            title="Drawers" 
            imageSrc="/lovable-uploads/8b6d6310-d38a-459d-95d2-8972f0713bfe.png"
            variantCount={3}
          />
          
          <ComponentPreview 
            title="Notifications" 
            imageSrc="/lovable-uploads/7d5a8d18-1b7e-4b3f-9e1a-dc3a784c34c1.png"
            variantCount={5}
          />
          
          <ComponentPreview 
            title="Command Palette Overlays" 
            imageSrc="/lovable-uploads/8b792f0a-fe88-4671-928d-3b73139d5cf9.png"
            variantCount={2}
          />
        </div>
      </section>
      
      {/* Elements Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Elements</h2>
        <div className="grid grid-cols-4 gap-8">
          <ComponentPreview 
            title="Avatars" 
            imageSrc="/lovable-uploads/60b0bfb8-adbb-433d-b54a-5760d8c2c96d.png"
            variantCount={3}
          />
          
          <ComponentPreview 
            title="Badges" 
            imageSrc="/lovable-uploads/1cdd0630-26fe-4aca-a507-266597e435cf.png"
            variantCount={6}
          />
          
          <ComponentPreview 
            title="Dropdowns" 
            imageSrc="/lovable-uploads/a657fd1f-3dfd-44ac-bad0-5d07ccb9cb25.png"
            variantCount={4}
          />
          
          <ComponentPreview 
            title="Buttons" 
            imageSrc="/lovable-uploads/c8f6351d-67d3-4280-bdcb-a10989d0cc0a.png"
            variantCount={8}
          />
          
          <ComponentPreview 
            title="Button Groups" 
            imageSrc="/lovable-uploads/c4ec1b21-a387-45f1-a89b-d00b3b772485.png"
            variantCount={3}
          />
          
          <ComponentPreview 
            title="Step Indicators" 
            imageSrc="/lovable-uploads/c87bb6eb-1831-44e2-9a30-7cb37fa31f52.png"
            variantCount={4}
          />
          
          <ComponentPreview 
            title="Input Fields" 
            imageSrc="/lovable-uploads/b35554b2-f401-4f1b-99e4-296c306d4883.png"
            variantCount={5}
          />
        </div>
      </section>
    </div>
  );
};

export default UIKit;
