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
  return <div className="space-y-12">
      <div>
        <div className="flex items-center gap-2 text-sm text-mui-primary font-medium mb-2">
          <Chip variant="filled" color="primary" size="sm">Components</Chip>
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">UI Kit</h1>
        <p className="text-muted-foreground text-lg mb-6">Uma visão geral dos principais elementos do nosso Design System</p>
      </div>
      
      {/* Application Shells Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Application Shells</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ComponentPreview title="Stacked Layouts" imageSrc="/lovable-uploads/2164823d-9e27-4ff7-a19d-e5117a64f1f6.png" variantCount={3} />
          
          <ComponentPreview title="Sidebar Layouts" imageSrc="/lovable-uploads/03d9daef-5728-4f4a-add3-20b56bff88f4.png" variantCount={4} />
          
          <ComponentPreview title="Multi-Column Layouts" imageSrc="/lovable-uploads/570a05aa-c89b-4fc3-95fa-08883ec83a75.png" variantCount={2} />
        </div>
      </section>
      
      {/* Headings Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Headings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ComponentPreview title="Page Headings" imageSrc="/lovable-uploads/5ae2c9b9-8171-41af-a6c2-2002cc7425f5.png" variantCount={3} />
          
          <ComponentPreview title="Card Headings" imageSrc="/lovable-uploads/d8b561b7-e3ee-4619-98f4-431c051c5a6d.png" variantCount={2} />
          
          <ComponentPreview title="Section Headings" imageSrc="/lovable-uploads/ee14d06e-2261-45fd-8394-56f7401fe24b.png" variantCount={4} />
        </div>
      </section>
      
      {/* Data Display Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Data Display</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ComponentPreview title="Description Lists" imageSrc="/lovable-uploads/531327f2-86f6-49ac-b20e-a6208981c4f0.png" variantCount={3} />
          
          <ComponentPreview title="Stats" imageSrc="/lovable-uploads/5b3e17be-df5b-434e-a5ab-97c692b060c7.png" variantCount={5} />
          
          <ComponentPreview title="Calendars" imageSrc="/lovable-uploads/80519a18-7140-48e9-9f06-27c6678c8d23.png" variantCount={2} />
        </div>
      </section>
      
      {/* Lists Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Lists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ComponentPreview title="Stacked Lists" imageSrc="/lovable-uploads/967f6bf5-53fe-49b2-a0ea-7dfdefaa04b8.png" variantCount={6} />
          
          <ComponentPreview title="Tables" imageSrc="/lovable-uploads/6f212a1f-109f-4d5c-97b4-1ab91ac5a5da.png" variantCount={4} />
          
          <ComponentPreview title="Grid Lists" imageSrc="/lovable-uploads/66d34b06-0d7e-4f25-a32d-17565498c1e3.png" variantCount={3} />
          
          <ComponentPreview title="Feeds" imageSrc="/lovable-uploads/a8ac550a-539d-498e-a282-b116df5f70d3.png" variantCount={2} />
        </div>
      </section>
      
      {/* Forms Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Forms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ComponentPreview title="Form Layouts" imageSrc="/lovable-uploads/a04f9fe3-c673-4a54-b6e7-025f3e7ba3a6.png" variantCount={5} />
          
          <ComponentPreview title="Input Groups" imageSrc="/lovable-uploads/1fc9d88b-184d-4d31-8377-99acc696e2f0.png" variantCount={3} />
          
          <ComponentPreview title="Select Menus" imageSrc="/lovable-uploads/c217ea26-5cf8-47d4-92c7-75592787bb07.png" variantCount={4} />
          
          <ComponentPreview title="Sign-in and Registration" imageSrc="/lovable-uploads/d0c061d5-3344-4c6b-b76b-da463da793c5.png" variantCount={3} />
          
          <ComponentPreview title="Textareas" imageSrc="/lovable-uploads/dd4143dc-b862-421d-a3b5-bb3d22203360.png" variantCount={2} />
          
          <ComponentPreview title="Radio Groups" imageSrc="/lovable-uploads/2415b0da-f36f-47f9-9277-aecd156b8a46.png" variantCount={3} />
          
          <ComponentPreview title="Checkboxes" imageSrc="/lovable-uploads/274d4db9-0e2f-4185-b0fd-4ce83da8a193.png" variantCount={4} />
          
          <ComponentPreview title="Toggles" imageSrc="/lovable-uploads/13d757f0-0e61-47ea-9d35-3a80b79cda01.png" variantCount={3} />
          
          <ComponentPreview title="Action Panels" imageSrc="/lovable-uploads/82349cc0-ca46-4f0c-b941-d564dc88b753.png" variantCount={2} />
          
          <ComponentPreview title="Comboboxes" imageSrc="/lovable-uploads/4fff47f1-c6b9-402d-8bf4-4ab2df2d2ab8.png" variantCount={3} />
        </div>
      </section>
      
      {/* Feedback Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Feedback</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ComponentPreview title="Alerts" imageSrc="/lovable-uploads/d2e49c4c-1339-407d-8744-e7c8747bce34.png" variantCount={4} />
          
          <ComponentPreview title="Empty States" imageSrc="/lovable-uploads/dacdc4fe-2a1f-45c1-bd8d-4f62e1c70ac5.png" variantCount={3} />
        </div>
      </section>
      
      {/* Navigation Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Navigation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ComponentPreview title="Navbars" imageSrc="/lovable-uploads/ab401c97-3309-4d18-ae91-d6f9863337b0.png" variantCount={6} />
          
          <ComponentPreview title="Pagination" imageSrc="/lovable-uploads/d1418a09-7ea9-49dd-be4a-d772504a1c9c.png" variantCount={3} />
          
          <ComponentPreview title="Tabs" imageSrc="/lovable-uploads/8ba357b7-4c81-4fe1-a3ee-81c628bb9d57.png" variantCount={4} />
          
          <ComponentPreview title="Vertical Navigation" imageSrc="/lovable-uploads/85be3370-eb8a-441f-8fb2-35c870429048.png" variantCount={3} />
          
          <ComponentPreview title="Sidebar Navigation" imageSrc="/lovable-uploads/22c8fbc8-4037-4ab1-8410-7592e488e6aa.png" variantCount={4} />
          
          <ComponentPreview title="Breadcrumbs" imageSrc="/lovable-uploads/06c18f19-010a-475b-8aca-5f8919671e23.png" variantCount={2} />
          
          <ComponentPreview title="Progress Bars" imageSrc="/lovable-uploads/7b1986af-9535-4999-a791-96fb7456fccd.png" variantCount={3} />
          
          <ComponentPreview title="Command Palettes" imageSrc="/lovable-uploads/354482fc-f67c-45e5-a378-e6d835005c05.png" variantCount={2} />
        </div>
      </section>
      
      {/* Overlays Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Overlays</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ComponentPreview title="Modal Dialogs" imageSrc="/lovable-uploads/9edc0220-a8fc-4935-a6d0-d27cd6c6b49f.png" variantCount={4} />
          
          <ComponentPreview title="Drawers" imageSrc="/lovable-uploads/bbc1b531-583f-4092-9766-e9c04680183e.png" variantCount={3} />
          
          <ComponentPreview title="Notifications" imageSrc="/lovable-uploads/cdc177ff-a734-4717-aa15-df3407ecf64c.png" variantCount={5} />
        </div>
      </section>
      
      {/* Elements Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Elements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ComponentPreview title="Avatars" imageSrc="/lovable-uploads/f842772b-6892-47e1-9884-3e79bf5fe918.png" variantCount={3} />
          
          <ComponentPreview title="Badges" imageSrc="/lovable-uploads/a48fffca-50b5-41eb-867b-66f9081d2390.png" variantCount={6} />
          
          <ComponentPreview title="Dropdowns" imageSrc="/lovable-uploads/a8858b43-cf90-4c5e-be18-8f2fb45d2a5e.png" variantCount={4} />
          
          <ComponentPreview title="Buttons" imageSrc="/lovable-uploads/23e9f1e4-ec12-4198-a04d-ce6226702b03.png" variantCount={8} />
          
          <ComponentPreview title="Button Groups" imageSrc="/lovable-uploads/5ea80b3c-ada0-4735-a77b-c5d9ade72312.png" variantCount={3} />
        </div>
      </section>
      
      {/* Layout Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Layout</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ComponentPreview title="Containers" imageSrc="/lovable-uploads/f8b89c21-724c-4c22-a8f9-4c1f698665dd.png" variantCount={3} />
          
          <ComponentPreview title="Cards" imageSrc="/lovable-uploads/c8f6351d-67d3-4280-bdcb-a10989d0cc0a.png" variantCount={4} />
          
          <ComponentPreview title="List containers" imageSrc="/lovable-uploads/b3d7ab36-7698-45e9-a238-d7dac3d86a5d.png" variantCount={3} />
          
          <ComponentPreview title="Media Objects" imageSrc="/lovable-uploads/c35e9291-3626-4ddb-af93-d78cfe2009ed.png" variantCount={2} />
          
          <ComponentPreview title="Dividers" imageSrc="/lovable-uploads/c9489d33-ab7d-4112-aa7f-4e9db69d9733.png" variantCount={2} />
        </div>
      </section>
      
      {/* Page Examples Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Page Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ComponentPreview title="Home Screens" imageSrc="/lovable-uploads/8193019c-5cbc-4e3d-a119-72e97a79a59e.png" variantCount={2} />
          
          <ComponentPreview title="Detail Screens" imageSrc="/lovable-uploads/0dacb6bd-565c-42ca-ab1f-bf4a6d377240.png" variantCount={5} />
          
          <ComponentPreview title="Settings Screens" imageSrc="/lovable-uploads/67b83589-4c0e-4697-944f-de6e741e2a65.png" variantCount={3} />
        </div>
      </section>
    </div>;
};
export default UIKit;
