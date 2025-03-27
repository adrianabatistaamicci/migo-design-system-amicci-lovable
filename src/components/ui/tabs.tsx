
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
      return (
        <nav className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tabs.map(tab => (
            <button 
              key={tab.value} 
              onClick={() => handleTabChange(tab.value)} 
              className={cn(
                "rounded-md border p-6 transition-colors text-left",
                selected === tab.value 
                  ? "bg-gray-50 border-gray-300 shadow-sm" 
                  : "bg-white border-gray-200 hover:bg-gray-50"
              )}
            >
              <div className="flex flex-col">
                <div className="flex items-center justify-between mb-1">
                  {tab.icon && <span className="mr-2">{tab.icon}</span>}
                  <span className={cn(
                    "font-medium text-right ml-auto",
                    selected === tab.value ? "text-primary-main" : "text-gray-700"
                  )}>
                    {tab.name}
                  </span>
                </div>
                
                <div className="flex items-center justify-between mt-5">
                  {tab.secondaryText && (
                    <span className="text-xs text-gray-500">
                      {tab.secondaryText}
                    </span>
                  )}
                  
                  {tab.chipStatus ? (
                    <div className="ml-auto">
                      {renderChipForStatus(tab.chipStatus)}
                    </div>
                  ) : tab.chip && (
                    <Chip 
                      size="sm" 
                      variant={selected === tab.value ? "filled" : "default"} 
                      color={selected === tab.value ? "primary" : "default"} 
                      className="ml-auto"
                    >
                      {tab.chip}
                    </Chip>
                  )}
                </div>
              </div>
            </button>
          ))}
        </nav>
      );
    }

    return null;
  };

  return (
    <div className={cn("inline-flex flex-col w-full", className)}>
      {renderTabs()}
      {children}
    </div>
  );
};

export { TailwindTabs as Tabs };
