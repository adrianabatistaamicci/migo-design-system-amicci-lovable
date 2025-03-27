
import React, { useState } from 'react';
import { Chip } from '@/components/ui/chip';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from "@/lib/utils";

type Tab = {
  name: string;
  value: string;
  badge?: string | number;
  icon?: React.ReactNode;
  chip?: string;
  secondaryText?: string;
  chipStatus?: 'Concluído' | 'Em andamento' | 'Não iniciado' | 'Em breve';
};

type TailwindTabsProps = {
  tabs?: Tab[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  variant?: 'underline' | 'pills' | 'pillsGray' | 'pillsBrand' | 'fullWidth' | 'bar' | 'underlineBadges' | 'projectTabs';
  children?: React.ReactNode;
  className?: string;
};

export const TailwindTabs = ({
  tabs = [],
  defaultValue,
  onChange,
  variant = 'pills',
  children,
  className
}: TailwindTabsProps) => {
  const [selected, setSelected] = useState(defaultValue || (tabs.length > 0 ? tabs[0]?.value : ''));

  const handleTabChange = (value: string) => {
    setSelected(value);
    onChange?.(value);
  };

  const renderChipForStatus = (status?: string) => {
    if (!status) return null;
    
    switch (status) {
      case 'Concluído':
        return (
          <Chip 
            variant="filledlight" 
            color="success" 
            size="sm"
          >
            {status}
          </Chip>
        );
      case 'Em andamento':
        return (
          <Chip 
            variant="filledlight" 
            color="warning" 
            size="sm"
          >
            {status}
          </Chip>
        );
      case 'Não iniciado':
        return (
          <Chip 
            variant="default" 
            size="sm"
          >
            {status}
          </Chip>
        );
      case 'Em breve':
        return (
          <Chip 
            disabled 
            size="sm"
          >
            {status}
          </Chip>
        );
      default:
        return null;
    }
  };

  const renderTabs = () => {
    if (!tabs || tabs.length === 0) {
      return null;
    }

    if (variant === 'projectTabs') {
      return <nav className="w-full grid grid-cols-4 gap-4">
          {tabs.map(tab => <button key={tab.value} onClick={() => handleTabChange(tab.value)} className={`rounded-md border p-6 transition-colors ${selected === tab.value ? 'bg-gray-50 border-gray-300 shadow-sm' : 'bg-white border-gray-200 hover:bg-gray-50'}`}>
              <div className="flex flex-col">
                <div className="flex items-center justify-between mb-1">
                  {tab.icon && <span className="mr-2">{tab.icon}</span>}
                  <span className={`font-medium text-right ml-auto ${selected === tab.value ? 'text-amicci-500' : 'text-gray-700'}`}>
                    {tab.name}
                  </span>
                </div>
                
                <div className="flex items-center justify-between mt-5">
                  {tab.secondaryText && <span className="text-xs text-gray-500">
                      {tab.secondaryText}
                    </span>}
                  
                  {tab.chipStatus ? 
                    <div className="ml-auto">
                      {renderChipForStatus(tab.chipStatus)}
                    </div>
                    : tab.chip && <Chip size="sm" variant={selected === tab.value ? "filled" : "default"} color={selected === tab.value ? "primary" : "default"} className="ml-auto">
                      {tab.chip}
                    </Chip>}
                </div>
              </div>
            </button>)}
        </nav>;
    }

    return null;
  };

  return <div className={`inline-flex flex-col ${className || ''}`}>{renderTabs()}{children}</div>;
};

export const Tabs = TabsPrimitive.Root;
export const TabsRoot = TabsPrimitive.Root;
export const TabsList = React.forwardRef<React.ElementRef<typeof TabsPrimitive.List>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>>(({
  className,
  ...props
}, ref) => <TabsPrimitive.List ref={ref} className={cn("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", className)} {...props} />);
TabsList.displayName = TabsPrimitive.List.displayName;
export const TabsTrigger = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>>(({
  className,
  ...props
}, ref) => <TabsPrimitive.Trigger ref={ref} className={cn("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm", className)} {...props} />);
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
export const TabsContent = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Content>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>>(({
  className,
  ...props
}, ref) => <TabsPrimitive.Content ref={ref} className={cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className)} {...props} />);
TabsContent.displayName = TabsPrimitive.Content.displayName;
export { TabsRoot as TabsRadix };
export { Tabs as TabsPrimitive };
export { TabsPrimitive as TabsRadixPrimitive };
