
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type SidebarMenuItem = {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  collapsed?: boolean;
  badge?: React.ReactNode;
};

export interface SidebarLayoutProps {
  variant?: 'vertical' | 'stacked' | 'collapsible';
  sidebarItems: SidebarMenuItem[];
  secondaryItems?: SidebarMenuItem[];
  children: ReactNode;
  isCollapsed?: boolean;
  toggleCollapse?: () => void;
  headerContent?: ReactNode;
}

export const SidebarLayout: React.FC<SidebarLayoutProps> = ({
  variant = 'vertical',
  sidebarItems,
  secondaryItems,
  children,
  isCollapsed = false,
  toggleCollapse,
  headerContent
}) => {
  const renderMenuItem = (item: SidebarMenuItem) => (
    <div
      className={cn(
        'flex items-center p-2 rounded-md mb-1 cursor-pointer transition-colors',
        item.active
          ? 'bg-primary-hover text-primary-main font-medium'
          : 'text-gray-700 hover:bg-gray-100',
        item.collapsed && 'justify-center'
      )}
    >
      <div className={cn("flex items-center w-full", item.collapsed && "justify-center")}>
        {item.icon}
        {!item.collapsed && <span className="ml-3">{item.text}</span>}
      </div>
      {!item.collapsed && item.badge && <div className="ml-auto">{item.badge}</div>}
    </div>
  );

  return (
    <div className="flex h-full min-h-screen">
      {/* Sidebar */}
      <div
        className={cn(
          'border-r border-gray-200 bg-white flex flex-col transition-all duration-300',
          isCollapsed ? 'w-16' : 'w-64'
        )}
      >
        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          {!isCollapsed ? (
            <div className="text-xl font-semibold">Logo</div>
          ) : (
            <div className="w-full flex justify-center">
              <div className="w-8 h-8 bg-primary-main rounded-full flex items-center justify-center text-white font-bold">
                L
              </div>
            </div>
          )}
          
          {toggleCollapse && (
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleCollapse}
              className="p-1"
            >
              {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
            </Button>
          )}
        </div>

        {/* Main Menu Items */}
        <div className="flex-1 p-3 overflow-y-auto">
          <div className="space-y-1">
            {sidebarItems.map((item, index) => (
              <div key={index}>{renderMenuItem(item)}</div>
            ))}
          </div>
        </div>

        {/* Secondary Menu Items */}
        {secondaryItems && secondaryItems.length > 0 && (
          <div className="p-3 border-t border-gray-200">
            <div className="space-y-1">
              {secondaryItems.map((item, index) => (
                <div key={index}>{renderMenuItem(item)}</div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-50">
        {/* Header (for stacked variant) */}
        {headerContent && variant === 'stacked' && (
          <div className="h-16 border-b border-gray-200 bg-white px-4 flex items-center">
            {headerContent}
          </div>
        )}
        
        {/* Content Area */}
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};
