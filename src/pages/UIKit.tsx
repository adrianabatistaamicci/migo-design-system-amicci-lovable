
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
          <ComponentPreview title="Stacked Layouts" imageSrc="/lovable-uploads/application-shells-1-stacked-layouts.png" variantCount={3} />
          
          <ComponentPreview title="Sidebar Layouts" imageSrc="/lovable-uploads/application-shells-2-sidebar-layouts.png" variantCount={4} />
          
          <ComponentPreview title="Multi-Column Layouts" imageSrc="/lovable-uploads/application-shells-3-multi-column-layouts.png" variantCount={2} />
          
          <ComponentPreview title="Detail Screens" imageSrc="/lovable-uploads/application-shells-4-detail-screens.png" variantCount={5} />
        </div>
      </section>
      
      {/* Headings Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Headings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ComponentPreview title="Page Headings" imageSrc="/lovable-uploads/headings-1-page-headings.png" variantCount={3} />
          
          <ComponentPreview title="Card Headings" imageSrc="/lovable-uploads/headings-2-card-headings.png" variantCount={2} />
          
          <ComponentPreview title="Section Headings" imageSrc="/lovable-uploads/headings-3-section-headings.png" variantCount={4} />
          
          <ComponentPreview title="Home Screens" imageSrc="/lovable-uploads/headings-4-home-screens.png" variantCount={2} />
        </div>
      </section>
      
      {/* Data Display Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Data Display</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ComponentPreview title="Description Lists" imageSrc="/lovable-uploads/data-display-1-description-lists.png" variantCount={3} />
          
          <ComponentPreview title="Stats" imageSrc="/lovable-uploads/data-display-2-stats.png" variantCount={5} />
          
          <ComponentPreview title="Calendars" imageSrc="/lovable-uploads/data-display-3-calendars.png" variantCount={2} />
          
          <ComponentPreview title="Settings Screens" imageSrc="/lovable-uploads/data-display-4-settings-screens.png" variantCount={3} />
        </div>
      </section>
      
      {/* Lists Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Lists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ComponentPreview title="Stacked Lists" imageSrc="/lovable-uploads/lists-1-stacked-lists.png" variantCount={6} />
          
          <ComponentPreview title="Tables" imageSrc="/lovable-uploads/lists-2-tables.png" variantCount={4} />
          
          <ComponentPreview title="Grid Lists" imageSrc="/lovable-uploads/lists-3-grid-lists.png" variantCount={3} />
          
          <ComponentPreview title="Feeds" imageSrc="/lovable-uploads/lists-4-feeds.png" variantCount={2} />
        </div>
      </section>
      
      {/* Forms Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Forms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ComponentPreview title="Form Layouts" imageSrc="/lovable-uploads/forms-1-form-layouts.png" variantCount={5} />
          
          <ComponentPreview title="Input Groups" imageSrc="/lovable-uploads/forms-2-input-groups.png" variantCount={3} />
          
          <ComponentPreview title="Select Menus" imageSrc="/lovable-uploads/forms-3-select-menus.png" variantCount={4} />
          
          <ComponentPreview title="Sign-in and Registration" imageSrc="/lovable-uploads/forms-4-sign-in-registration.png" variantCount={3} />
          
          <ComponentPreview title="Textareas" imageSrc="/lovable-uploads/forms-5-textareas.png" variantCount={2} />
          
          <ComponentPreview title="Radio Groups" imageSrc="/lovable-uploads/forms-6-radio-groups.png" variantCount={3} />
          
          <ComponentPreview title="Checkboxes" imageSrc="/lovable-uploads/forms-7-checkboxes.png" variantCount={4} />
          
          <ComponentPreview title="Toggles" imageSrc="/lovable-uploads/forms-8-toggles.png" variantCount={3} />
          
          <ComponentPreview title="Action Panels" imageSrc="/lovable-uploads/forms-9-action-panels.png" variantCount={2} />
          
          <ComponentPreview title="Comboboxes" imageSrc="/lovable-uploads/forms-10-comboboxes.png" variantCount={3} />
        </div>
      </section>
      
      {/* Feedback Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Feedback</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ComponentPreview title="Alerts" imageSrc="/lovable-uploads/feedback-1-alerts.png" variantCount={4} />
          
          <ComponentPreview title="Empty States" imageSrc="/lovable-uploads/feedback-2-empty-states.png" variantCount={3} />
          
          <ComponentPreview title="Notifications - Toast" imageSrc="/lovable-uploads/feedback-3-notifications-toast.png" variantCount={5} />
          
          <ComponentPreview title="Modal Dialogs" imageSrc="/lovable-uploads/feedback-4-modal-dialogs.png" variantCount={4} />
        </div>
      </section>
      
      {/* Navigation Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Navigation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ComponentPreview title="Navbars" imageSrc="/lovable-uploads/navigation-1-navbars.png" variantCount={6} />
          
          <ComponentPreview title="Pagination" imageSrc="/lovable-uploads/navigation-2-pagination.png" variantCount={3} />
          
          <ComponentPreview title="Tabs" imageSrc="/lovable-uploads/navigation-3-tabs.png" variantCount={4} />
          
          <ComponentPreview title="Vertical Navigation" imageSrc="/lovable-uploads/navigation-4-vertical-navigation.png" variantCount={3} />
          
          <ComponentPreview title="Sidebar Navigation" imageSrc="/lovable-uploads/navigation-5-sidebar-navigation.png" variantCount={4} />
          
          <ComponentPreview title="Breadcrumbs" imageSrc="/lovable-uploads/navigation-6-breadcrumbs.png" variantCount={2} />
          
          <ComponentPreview title="Progress Bars" imageSrc="/lovable-uploads/navigation-7-progress-bars.png" variantCount={3} />
          
          <ComponentPreview title="Command Palettes" imageSrc="/lovable-uploads/navigation-8-command-palettes.png" variantCount={2} />
        </div>
      </section>
      
      {/* Overlays Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Overlays</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ComponentPreview title="Modal Dialogs" imageSrc="/lovable-uploads/overlays-1-modal-dialogs.png" variantCount={4} />
          
          <ComponentPreview title="Drawers" imageSrc="/lovable-uploads/overlays-2-drawers.png" variantCount={3} />
          
          <ComponentPreview title="Notifications" imageSrc="/lovable-uploads/overlays-3-notifications.png" variantCount={5} />
          
          <ComponentPreview title="Command Palette Overlays" imageSrc="/lovable-uploads/overlays-4-command-palette-overlays.png" variantCount={2} />
        </div>
      </section>
      
      {/* Elements Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Elements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ComponentPreview title="Avatars" imageSrc="/lovable-uploads/elements-1-avatars.png" variantCount={3} />
          
          <ComponentPreview title="Badges" imageSrc="/lovable-uploads/elements-2-badges.png" variantCount={6} />
          
          <ComponentPreview title="Dropdowns" imageSrc="/lovable-uploads/elements-3-dropdowns.png" variantCount={4} />
          
          <ComponentPreview title="Buttons" imageSrc="/lovable-uploads/elements-4-buttons.png" variantCount={8} />
          
          <ComponentPreview title="Button Groups" imageSrc="/lovable-uploads/elements-5-button-groups.png" variantCount={3} />
          
          <ComponentPreview title="Step Indicators" imageSrc="/lovable-uploads/elements-6-step-indicators.png" variantCount={4} />
          
          <ComponentPreview title="Input Fields" imageSrc="/lovable-uploads/elements-7-input-fields.png" variantCount={5} />
        </div>
      </section>
    </div>;
};
export default UIKit;
