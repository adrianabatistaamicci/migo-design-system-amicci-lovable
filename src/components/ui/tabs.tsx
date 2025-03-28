/**
 * @protected
 * ATENÇÃO: Este arquivo contém conteúdo finalizado e aprovado.
 * Não deve ser alterado diretamente pelo assistente AI.
 * Apenas atualizações de componentes devem ser refletidas.
 */

import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
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
  disabled?: boolean;
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

    switch (variant) {
      case 'underline':
        return <div className="border-b border-gray-200 inline-block">
            <nav className="-mb-px flex space-x-8">
              {tabs.map(tab => <button key={tab.value} 
                                  onClick={() => !tab.disabled && handleTabChange(tab.value)} 
                                  className={`whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium ${
                                    tab.disabled ? 'text-gray-300 cursor-not-allowed' : 
                                    selected === tab.value ? 'border-amicci-500 text-amicci-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                                  }`}>
                  {tab.name}
                  {tab.badge && <span className={`ml-2 rounded-full px-2.5 py-0.5 text-xs font-medium md:inline-block ${selected === tab.value ? 'bg-amicci-100 text-amicci-600' : 'bg-gray-100 text-gray-600'}`}>
                      {tab.badge}
                    </span>}
                </button>)}
            </nav>
          </div>;
      case 'pills':
        return <nav className="flex space-x-4 inline-flex p-1 bg-gray-100 rounded-lg">
            {tabs.map(tab => <button key={tab.value} 
                              onClick={() => !tab.disabled && handleTabChange(tab.value)}
                              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                                tab.disabled ? 'text-gray-300 cursor-not-allowed' : 
                                selected === tab.value ? 'bg-white text-amicci-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                              }`}>
                {tab.name}
                {tab.badge && <span className={`ml-2 rounded-full px-2.5 py-0.5 text-xs font-medium md:inline-block ${selected === tab.value ? 'bg-amicci-100 text-amicci-600' : 'bg-gray-100 text-gray-600'}`}>
                    {tab.badge}
                  </span>}
              </button>)}
          </nav>;
      case 'pillsGray':
        return <nav className="inline-flex rounded-lg p-1 space-x-1 bg-gray-100">
            {tabs.map(tab => <button key={tab.value} 
                              onClick={() => !tab.disabled && handleTabChange(tab.value)} 
                              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                                tab.disabled ? 'text-gray-300 cursor-not-allowed' : 
                                selected === tab.value ? 'bg-white text-gray-800 shadow-sm' : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                              }`}>
                {tab.name}
                {tab.badge && <span className={`ml-2 rounded-full px-2.5 py-0.5 text-xs font-medium md:inline-block ${selected === tab.value ? 'bg-gray-200 text-gray-800' : 'bg-gray-100 text-gray-600'}`}>
                    {tab.badge}
                  </span>}
              </button>)}
          </nav>;
      case 'pillsBrand':
        return <nav className="inline-flex rounded-lg bg-amicci-50 p-1">
            {tabs.map(tab => <button key={tab.value} 
                              onClick={() => !tab.disabled && handleTabChange(tab.value)} 
                              className={`rounded-md px-3 py-1.5 text-sm font-medium ${
                                tab.disabled ? 'text-amicci-300 cursor-not-allowed' : 
                                selected === tab.value ? 'bg-amicci-500 text-white shadow' : 'text-amicci-600 hover:text-amicci-700'
                              }`}>
                {tab.name}
                {tab.badge && <span className={`ml-2 rounded-full px-2.5 py-0.5 text-xs font-medium md:inline-block ${selected === tab.value ? 'bg-amicci-400 text-white' : 'bg-amicci-100 text-amicci-600'}`}>
                    {tab.badge}
                  </span>}
              </button>)}
          </nav>;
      case 'fullWidth':
        return <div>
            <nav className="flex border-b border-gray-200">
              {tabs.map(tab => <button key={tab.value} 
                                onClick={() => !tab.disabled && handleTabChange(tab.value)}
                                className={`flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-center text-sm font-medium ${
                                  tab.disabled ? 'text-gray-300 border-transparent cursor-not-allowed' : 
                                  selected === tab.value ? 'border-amicci-500 text-amicci-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                                }`}>
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
              <select className="block w-full rounded-md border-gray-300 focus:border-amicci-500 focus:ring-amicci-500" 
                     value={selected} 
                     onChange={e => handleTabChange(e.target.value)}>
                {tabs.map(tab => <option key={tab.value} value={tab.value} disabled={tab.disabled}>
                    {tab.name} {tab.badge ? `(${tab.badge})` : ''}
                  </option>)}
              </select>
            </div>
            <div className="hidden sm:block">
              <div className="border-b border-gray-200 inline-block">
                <nav className="-mb-px flex space-x-8">
                  {tabs.map(tab => <button key={tab.value} 
                                    onClick={() => !tab.disabled && handleTabChange(tab.value)} 
                                    className={`whitespace-nowrap py-4 px-1 text-sm font-medium ${
                                      tab.disabled ? 'text-gray-300 border-b-2 border-transparent cursor-not-allowed' : 
                                      selected === tab.value ? 'border-b-2 border-amicci-500 text-amicci-600' : 'border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                                    }`}>
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
              {tabs.map(tab => <button key={tab.value} 
                                onClick={() => !tab.disabled && handleTabChange(tab.value)} 
                                className={`group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium ${
                                  tab.disabled ? 'text-gray-300 border-transparent cursor-not-allowed' : 
                                  selected === tab.value ? 'border-amicci-500 text-amicci-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                                }`}>
                  {tab.name}
                  <span className={`ml-2 rounded-full px-2.5 py-0.5 text-xs font-medium md:inline-block ${
                    tab.disabled ? 'bg-gray-100 text-gray-300' :
                    selected === tab.value ? 'bg-amicci-100 text-amicci-600' : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                  }`}>
                    {tab.badge || (tab.value === 'inbox' ? '5' : tab.value === 'spam' ? '42' : '3')}
                  </span>
                </button>)}
            </nav>
          </div>;
      case 'projectTabs':
        return <nav className="w-full grid grid-cols-4 gap-4">
            {tabs.map(tab => <button key={tab.value} 
                               onClick={() => !tab.disabled && handleTabChange(tab.value)}
                               disabled={tab.disabled}
                               className={`rounded-md border p-6 transition-colors ${
                                  tab.disabled ? 'bg-gray-50 border-gray-200 opacity-60 cursor-not-allowed' : 
                                  selected === tab.value ? 'bg-gray-50 border-amicci-500 shadow-sm' : 'bg-white border-gray-200 hover:bg-gray-50'
                               }`}>
                <div className="flex flex-col">
                  <div className="flex items-center justify-between mb-1">
                    {tab.icon && <span className={`mr-2 ${tab.disabled ? 'text-gray-400' : ''}`}>{tab.icon}</span>}
                    <span className={`font-medium text-right ml-auto ${
                      tab.disabled ? 'text-gray-400' :
                      selected === tab.value ? 'text-amicci-500' : 'text-gray-700'
                    }`}>
                      {tab.name}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between mt-5">
                    {tab.secondaryText && <span className={`text-xs ${tab.disabled ? 'text-gray-400' : 'text-gray-500'}`}>
                        {tab.secondaryText}
                      </span>}
                    
                    {tab.chipStatus ? 
                      <div className="ml-auto">
                        {renderChipForStatus(tab.chipStatus)}
                      </div>
                      : tab.chip && <Chip size="sm" variant={selected === tab.value ? "filled" : "default"} color={selected === tab.value ? "primary" : "default"} className="ml-auto" disabled={tab.disabled}>
                        {tab.chip}
                      </Chip>}
                  </div>
                </div>
              </button>)}
        </nav>;
      default:
        return null;
    }
  };

  return <div className={`inline-flex flex-col ${className || ''}`}>{renderTabs()}{children}</div>;
};

export const Tabs = TabsPrimitive.Root;

export const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", className)}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-amicci-600 data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

export const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className)}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs as TabsRoot };
export { Tabs as TabsPrimitive };
export { TabsPrimitive as TabsRadixPrimitive };
