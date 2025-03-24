
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from "@/lib/utils";
type Tab = {
  name: string;
  value: string;
  badge?: string | number;
};
type TailwindTabsProps = {
  tabs?: Tab[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  variant?: 'underline' | 'pills' | 'pillsGray' | 'pillsBrand' | 'fullWidth' | 'bar' | 'underlineBadges';
  children?: React.ReactNode;
  className?: string;
};
export const TailwindTabs = ({
  tabs = [],
  defaultValue,
  onChange,
  variant = 'pillsGray',
  children,
  className
}: TailwindTabsProps) => {
  const [selected, setSelected] = useState(defaultValue || (tabs.length > 0 ? tabs[0]?.value : ''));
  const handleTabChange = (value: string) => {
    setSelected(value);
    onChange?.(value);
  };

  // Render different tab styles based on variant
  const renderTabs = () => {
    if (!tabs || tabs.length === 0) {
      return null;
    }
    switch (variant) {
      case 'underline':
        return <div className="border-b border-gray-200 inline-block">
            <nav className="-mb-px flex space-x-8">
              {tabs.map(tab => <button key={tab.value} onClick={() => handleTabChange(tab.value)} className={`whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium ${selected === tab.value ? 'border-amicci-500 text-amicci-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}`}>
                  {tab.name}
                  {tab.badge && <span className={`ml-2 rounded-full px-2.5 py-0.5 text-xs font-medium md:inline-block ${selected === tab.value ? 'bg-amicci-100 text-amicci-600' : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'}`}>
                      {tab.badge}
                    </span>}
                </button>)}
            </nav>
          </div>;
      case 'pills':
        return <nav className="flex space-x-4 inline-flex">
            {tabs.map(tab => <button key={tab.value} onClick={() => handleTabChange(tab.value)} className={`rounded-md px-3 py-2 text-sm font-medium ${selected === tab.value ? 'bg-gray-100 text-amicci-600' : 'text-gray-500 hover:text-gray-700'}`}>
                {tab.name}
                {tab.badge && <span className={`ml-2 rounded-full px-2.5 py-0.5 text-xs font-medium md:inline-block ${selected === tab.value ? 'bg-amicci-100 text-amicci-600' : 'bg-gray-100 text-gray-600'}`}>
                    {tab.badge}
                  </span>}
              </button>)}
          </nav>;
      case 'pillsGray':
        return <nav className="inline-flex rounded-lg bg-gray-100 p-1">
            {tabs.map(tab => <button key={tab.value} onClick={() => handleTabChange(tab.value)} className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors duration-200 ${selected === tab.value ? 'bg-white text-amicci-600 shadow-sm' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}>
                {tab.name}
                {tab.badge && <span className={`ml-2 rounded-full px-2.5 py-0.5 text-xs font-medium md:inline-block ${selected === tab.value ? 'bg-amicci-100 text-amicci-600' : 'bg-gray-100 text-gray-600'}`}>
                    {tab.badge}
                  </span>}
              </button>)}
          </nav>;
      case 'pillsBrand':
        return <nav className="inline-flex rounded-lg bg-amicci-50 p-1">
            {tabs.map(tab => <button key={tab.value} onClick={() => handleTabChange(tab.value)} className={`rounded-md px-3 py-1.5 text-sm font-medium ${selected === tab.value ? 'bg-amicci-500 text-white shadow' : 'text-amicci-600 hover:text-amicci-700'}`}>
                {tab.name}
                {tab.badge && <span className={`ml-2 rounded-full px-2.5 py-0.5 text-xs font-medium md:inline-block ${selected === tab.value ? 'bg-amicci-400 text-white' : 'bg-amicci-100 text-amicci-600'}`}>
                    {tab.badge}
                  </span>}
              </button>)}
          </nav>;
      case 'fullWidth':
        return <div>
            <nav className="flex border-b border-gray-200">
              {tabs.map(tab => <button key={tab.value} onClick={() => handleTabChange(tab.value)} className={`flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-center text-sm font-medium ${selected === tab.value ? 'border-amicci-500 text-amicci-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}`}>
                  {tab.name}
                  {tab.badge && <span className={`ml-2 rounded-full px-2.5 py-0.5 text-xs font-medium md:inline-block ${selected === tab.value ? 'bg-amicci-100 text-amicci-600' : 'bg-gray-100 text-gray-600'}`}>
                      {tab.badge}
                    </span>}
                </button>)}
            </nav>
          </div>;
      case 'bar':
        return <div>
            <div className="sm:hidden">
              <select className="block w-full rounded-md border-gray-300 focus:border-amicci-500 focus:ring-amicci-500" value={selected} onChange={e => handleTabChange(e.target.value)}>
                {tabs.map(tab => <option key={tab.value} value={tab.value}>
                    {tab.name} {tab.badge ? `(${tab.badge})` : ''}
                  </option>)}
              </select>
            </div>
            <div className="hidden sm:block">
              <div className="border-b border-gray-200 inline-block">
                <nav className="-mb-px flex space-x-8">
                  {tabs.map(tab => <button key={tab.value} onClick={() => handleTabChange(tab.value)} className={`whitespace-nowrap py-4 px-1 text-sm font-medium ${selected === tab.value ? 'border-b-2 border-amicci-500 text-amicci-600' : 'border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}`}>
                      {tab.name}
                      {tab.badge && <span className={`ml-2 rounded-full px-2.5 py-0.5 text-xs font-medium md:inline-block ${selected === tab.value ? 'bg-amicci-100 text-amicci-600' : 'bg-gray-100 text-gray-600'}`}>
                          {tab.badge}
                        </span>}
                    </button>)}
                </nav>
              </div>
            </div>
          </div>;
      case 'underlineBadges':
        return <div className="border-b border-gray-200 inline-block">
            <nav className="-mb-px flex space-x-8">
              {tabs.map(tab => <button key={tab.value} onClick={() => handleTabChange(tab.value)} className={`group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium ${selected === tab.value ? 'border-amicci-500 text-amicci-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}`}>
                  {tab.name}
                  <span className={`ml-2 rounded-full px-2.5 py-0.5 text-xs font-medium md:inline-block ${selected === tab.value ? 'bg-amicci-100 text-amicci-600' : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'}`}>
                    {tab.badge || (tab.value === 'inbox' ? '5' : tab.value === 'spam' ? '42' : '3')}
                  </span>
                </button>)}
            </nav>
          </div>;
      default:
        return null;
    }
  };
  return <div className={`inline-flex flex-col ${className || ''}`}>{renderTabs()}{children}</div>;
};

// Export TailwindTabs as Tabs for compatibility
export const Tabs = TabsPrimitive.Root;

// Export Radix UI Tabs Components
export const TabsRoot = TabsPrimitive.Root;
export const TabsList = React.forwardRef<React.ElementRef<typeof TabsPrimitive.List>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>>(({
  className,
  ...props
}, ref) => <TabsPrimitive.List ref={ref} className={cn("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", className)} {...props} />);
TabsList.displayName = TabsPrimitive.List.displayName;
export const TabsTrigger = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>>(({
  className,
  ...props
}, ref) => <TabsPrimitive.Trigger ref={ref} className={cn("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-amicci-600 data-[state=active]:shadow-sm", className)} {...props} />);
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
export const TabsContent = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Content>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>>(({
  className,
  ...props
}, ref) => <TabsPrimitive.Content ref={ref} className={cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className)} {...props} />);
TabsContent.displayName = TabsPrimitive.Content.displayName;

// For backwards compatibility with pages using the Radix UI Tabs component directly
export { TabsRoot as TabsRadix };

// Also export as primary Tabs component for new code
export { Tabs as TabsPrimitive };
export { TabsPrimitive as TabsRadixPrimitive };
