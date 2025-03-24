
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

export interface TabItem {
  name: string;
  value: string;
}

interface TailwindTabsProps {
  tabs: TabItem[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  variant?: 'underline' | 'pills' | 'pillsGray' | 'pillsBrand' | 'fullWidth' | 'bar' | 'underlineBadges';
  className?: string;
}

export function TailwindTabs({
  tabs,
  defaultValue,
  onChange,
  variant = 'underline',
  className,
}: TailwindTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue || tabs[0]?.value);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    if (onChange) {
      onChange(value);
    }
  };

  // Render different tab styles based on the variant
  const renderTabs = () => {
    switch (variant) {
      case 'pills':
        return (
          <TabsList className="flex space-x-1 rounded-xl bg-gray-100/50 p-1">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                onClick={() => handleTabChange(tab.value)}
                className={cn(
                  "inline-flex w-auto items-center justify-center whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                  activeTab === tab.value
                    ? "bg-white text-secondary-foreground shadow-sm"
                    : "text-secondary-foreground/60 hover:text-secondary-foreground hover:bg-white/50"
                )}
              >
                {tab.name}
              </TabsTrigger>
            ))}
          </TabsList>
        );
      case 'pillsGray':
        return (
          <TabsList className="flex flex-wrap space-x-1 rounded-xl bg-gray-200/70 p-1">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                onClick={() => handleTabChange(tab.value)}
                className={cn(
                  "inline-flex w-auto items-center justify-center whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                  activeTab === tab.value
                    ? "bg-white text-gray-800 shadow-sm"
                    : "text-gray-600 hover:text-gray-800 hover:bg-white/50"
                )}
              >
                {tab.name}
              </TabsTrigger>
            ))}
          </TabsList>
        );
      case 'pillsBrand':
        return (
          <TabsList className="flex flex-wrap space-x-1 rounded-xl bg-blue-100/50 p-1">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                onClick={() => handleTabChange(tab.value)}
                className={cn(
                  "inline-flex w-auto items-center justify-center whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                  activeTab === tab.value
                    ? "bg-blue-500 text-white shadow-sm"
                    : "text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                )}
              >
                {tab.name}
              </TabsTrigger>
            ))}
          </TabsList>
        );
      case 'fullWidth':
        return (
          <TabsList className="grid w-full grid-cols-3 border-b border-gray-200">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                onClick={() => handleTabChange(tab.value)}
                className={cn(
                  "flex items-center justify-center py-2.5 text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50",
                  activeTab === tab.value
                    ? "border-b-2 border-primary text-primary"
                    : "text-gray-500 hover:text-gray-700"
                )}
              >
                {tab.name}
              </TabsTrigger>
            ))}
          </TabsList>
        );
      case 'bar':
        return (
          <TabsList className="flex flex-wrap border-b border-gray-200">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                onClick={() => handleTabChange(tab.value)}
                className={cn(
                  "inline-flex items-center justify-center whitespace-nowrap px-3 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                  activeTab === tab.value
                    ? "text-primary-main border-b-2 border-primary-main -mb-px"
                    : "text-gray-500 hover:text-gray-900"
                )}
              >
                {tab.name}
              </TabsTrigger>
            ))}
          </TabsList>
        );
      case 'underlineBadges':
        return (
          <TabsList className="flex flex-wrap border-b border-gray-200 w-full">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                onClick={() => handleTabChange(tab.value)}
                className={cn(
                  "inline-flex items-center justify-center whitespace-nowrap px-4 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative",
                  activeTab === tab.value
                    ? "text-primary border-b-2 border-primary -mb-px"
                    : "text-gray-500 hover:text-gray-900"
                )}
              >
                {tab.name}
                <Badge variant="secondary" className="ml-2 px-1.5 h-5 bg-gray-100 text-gray-600">
                  {tab.value === 'inbox' ? '5' : tab.value === 'spam' ? '12' : '3'}
                </Badge>
              </TabsTrigger>
            ))}
          </TabsList>
        );
      case 'underline':
      default:
        return (
          <TabsList className="inline-flex h-10 items-center justify-center rounded-md bg-transparent p-0 w-auto">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                onClick={() => handleTabChange(tab.value)}
                className={cn(
                  "inline-flex w-auto items-center justify-center whitespace-nowrap px-4 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-b-2 border-transparent",
                  activeTab === tab.value
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-500 hover:text-gray-900"
                )}
              >
                {tab.name}
              </TabsTrigger>
            ))}
          </TabsList>
        );
    }
  };

  return (
    <Tabs
      value={activeTab}
      className={cn("w-auto", className)}
      defaultValue={defaultValue || tabs[0]?.value}
    >
      {renderTabs()}
    </Tabs>
  );
}
