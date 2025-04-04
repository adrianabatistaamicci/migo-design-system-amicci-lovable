/**
 * @protected
 * ATENÇÃO: Este arquivo contém conteúdo finalizado e aprovado.
 * Não deve ser alterado diretamente pelo assistente AI.
 * Apenas atualizações de componentes devem ser refletidas.
 */

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  ChevronRight,
  Package,
  Layers,
  Coffee,
  MousePointer,
  LayoutDashboard,
  MessageSquare,
  Bell,
  Palette,
  FileText
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Chip } from '@/components/ui/chip';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface SidebarItem {
  title: string;
  href?: string;
  icon?: React.ElementType;
  items?: SidebarItem[];
  badge?: {
    content?: React.ReactNode;
    color?: string;
    variant?: string;
  };
  isToggleOnly?: boolean;
  hideInProduction?: boolean;
}

interface SidebarProps {
  isOpen: boolean;
}

export const sidebarItems: SidebarItem[] = [
  {
    title: 'Introdução',
    items: [
      { title: 'Oi, Migo', href: '/' },
      { title: 'UI Kit', href: '/ui-kit' },
      { title: 'Diretrizes de UX', href: '/guidelines/ux-guidelines' },
      { title: 'Instalação', href: '/installation' },
    ]
  },
  {
    title: 'Foundations',
    icon: Layers,
    items: [
      { title: 'Tom e Voz', href: '/guidelines/tom-e-voz' },
      { title: 'Brand', href: '/foundations/brand' },
      { title: 'Colors', href: '/foundations/colors' },
      { title: 'Typography', href: '/foundations/typography' },
      { title: 'Spacing', href: '/foundations/spacing' },
      { title: 'Icons', href: '/foundations/icons' },
    ]
  },
  {
    title: 'Components',
    href: '/components',
    icon: Package,
    items: [
      {
        title: 'Application Shells',
        items: [
          { title: 'Stacked Layouts', href: '/components/stacked-layouts' },
          { title: 'Sidebar Layouts', href: '/components/sidebar-layouts' },
          { title: 'Multi-column Layouts', href: '/components/multi-column-layouts' },
        ]
      },
      {
        title: 'Headings',
        items: [
          { title: 'Page Headings', href: '/components/page-headings' },
          { title: 'Card Headings', href: '/components/card-headings' },
          { title: 'Section Headings', href: '/components/section-headings' },
        ]
      },
      {
        title: 'Elements',
        items: [
          { title: 'Avatars', href: '/components/avatar' },
          { title: 'Chips', href: '/components/chip' },
          { title: 'Badges', href: '/components/badge' },
          { title: 'Contextual Help', href: '/components/contextual-help' },
          { title: 'Dropdowns', href: '/components/dropdown' },
          { title: 'Buttons', href: '/components/buttons' },
          { title: 'Icon Button', href: '/components/icon-button' },
          { title: 'Button Groups', href: '/components/button-groups' },
          { title: 'Profile Button', href: '/components/profile-button' },
          { title: 'Link', href: '/components/link' },
          { title: 'Accordions', href: '/components/accordion' },
          { title: 'Tooltips', href: '/components/tooltips' },
        ]
      },
      {
        title: 'Data Display',
        items: [
          { title: 'Description Lists', href: '/components/description-lists' },
          { title: 'Stats', href: '/components/stats' },
          { title: 'Calendars', href: '/components/calendars' },
        ]
      },
      {
        title: 'Lists',
        items: [
          { title: 'Stacked Lists', href: '/components/stacked-lists' },
          { title: 'Tables', href: '/components/table' },
          { title: 'Grid Lists', href: '/components/grid-lists' },
          { title: 'Feeds', href: '/components/feeds' },
        ]
      },
      {
        title: 'Forms',
        items: [
          { title: 'Form Layouts', href: '/components/form-layouts' },
          { title: 'Sign-in and Registration', href: '/components/sign-in-registration' },
          { title: 'Input', href: '/components/input' },
          { title: 'Select', href: '/components/select' },
          { title: 'Textareas', href: '/components/textareas' },
          { title: 'Radio Groups', href: '/components/radio-group' },
          { title: 'Checkboxes', href: '/components/checkbox' },
          { title: 'Toggles', href: '/components/toggle' },
          { title: 'Sliders', href: '/components/slider' },
          { title: 'Action Panels', href: '/components/action-panels' },
        ]
      },
      {
        title: 'Feedback',
        items: [
          { title: 'Alerts & Toasts', href: '/components/alert' },
          { title: 'Empty States', href: '/components/empty-states' },
        ]
      },
      {
        title: 'Navigation',
        items: [
          { title: 'Navbar', href: '/components/navbar' },
          { title: 'Pagination', href: '/components/pagination' },
          { title: 'Tabs', href: '/components/tabs' },
          { title: 'Vertical Navigation', href: '/components/vertical-navigation' },
          { title: 'Sidebar Navigation', href: '/components/sidebar-navigation' },
          { title: 'Breadcrumbs', href: '/components/breadcrumb' },
          { title: 'Progress & Steppers', href: '/components/stepper' },
          { title: 'Command Bars', href: '/components/command-bars' },
        ]
      },
      {
        title: 'Overlays',
        items: [
          { title: 'Modal Dialogs', href: '/components/dialog' },
          { title: 'Drawers', href: '/components/drawer' },
          { title: 'Notification Toasts', href: '/components/snackbar' },
        ]
      },
      {
        title: 'Layout',
        items: [
          { title: 'Containers', href: '/components/containers' },
          { title: 'Cards', href: '/components/cards' },
          { title: 'List Containers', href: '/components/list-containers' },
          { title: 'Media Objects', href: '/components/media-objects' },
          { title: 'Dividers', href: '/components/dividers' },
          { title: 'Skeletons', href: '/components/skeleton' },
        ]
      },
      { title: 'Library', href: '/components/library' },
    ]
  },
  {
    title: 'Template',
    icon: Palette,
    items: [
      { title: 'Home Screens', href: '/components/home-screens' },
      { title: 'Detail Screens', href: '/components/detail-screens' },
      { title: 'Settings Screens', href: '/components/settings-screens' },
      { title: 'Projects Screens', href: '/components/projects-screens' },
      { title: 'Marketplace Screens', href: '/components/marketplace-screens' },
      { title: 'Error Screens', href: '/components/error-screens' },
    ]
  },
  {
    title: 'Resources',
    icon: Coffee,
    items: [
      { title: 'Figma Library', href: '/resources/figma-library' },
      { title: 'Handoff', href: '/resources/handoff' },
      { title: 'FAQ', href: '/resources/faq' },
    ]
  },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <aside className={cn(
      "fixed top-16 left-0 bottom-0 w-64 bg-white border-r border-gray-200 flex flex-col transition-transform duration-300 ease-elastic z-30",
      isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
    )}>
      <div className="flex-1 overflow-y-auto py-6 px-3">
        {sidebarItems.map((section, sectionIndex) => (
          <SidebarSection key={sectionIndex} item={section} />
        ))}
      </div>
    </aside>
  );
};

const SidebarSection: React.FC<{ item: SidebarItem, level?: number }> = ({ 
  item, 
  level = 0 
}) => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  
  const isActive = (href?: string, items?: SidebarItem[]): boolean => {
    if (href && location.pathname === href) return true;
    if (items) {
      return items.some(child => 
        isActive(child.href, child.items)
      );
    }
    return false;
  };
  
  const active = isActive(item.href, item.items);
  
  // Check if item should be hidden in production
  if (item.hideInProduction && process.env.NODE_ENV === 'production') {
    return null;
  }
  
  // Filter out hidden items in production
  const filteredItems = item.items?.filter(subItem => 
    !(subItem.hideInProduction && process.env.NODE_ENV === 'production')
  );
  
  if (level === 0) {
    return (
      <div className="mb-6">
        {item.title && (
          <div className="mb-2">
            <div className={cn(
              "flex items-center w-full py-2 px-3 rounded-md text-sm font-medium text-primary uppercase text-xs"
            )}>
              {item.icon && <item.icon size={20} className="text-primary mr-2" />}
              <span>{item.title}</span>
            </div>
            
            <div className="pl-3">
              {filteredItems && filteredItems.map((child, index) => (
                <SidebarSection key={index} item={child} level={level + 1} />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
  
  if (item.items && item.items.length > 0) {
    return (
      <div className="mb-2">
        {item.title && (
          <Collapsible open={expanded} onOpenChange={setExpanded}>
            <CollapsibleTrigger className={cn(
              "flex items-center justify-between w-full py-2 px-3 rounded-md text-sm",
              level === 0 ? "font-medium text-primary uppercase text-xs" : "text-foreground",
              active && !item.href ? "text-primary-main" : "",
              level === 1 ? "" : level > 1 ? `pl-${level + 1}` : "",
              "hover:bg-gray-100 cursor-pointer"
            )}>
              <div className="flex items-center gap-2">
                {item.icon && <item.icon size={20} className="text-primary-main" />}
                {item.href && !item.isToggleOnly ? (
                  <Link 
                    to={item.href} 
                    className={cn(
                      "w-full",
                      location.pathname === item.href ? "text-primary-main font-medium" : ""
                    )}
                    onClick={(e) => {
                    }}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <span>{item.title}</span>
                )}
                
                {item.title === 'Sidebar Layouts' && (
                  <Chip variant="default" color="primary" size="sm" className="ml-2">New</Chip>
                )}
              </div>
              
              {expanded ? <ChevronDown size={16} className="text-gray-400" /> : <ChevronRight size={16} className="text-gray-400" />}
            </CollapsibleTrigger>
            
            <CollapsibleContent className="mt-1">
              <div className={cn(
                level === 1 ? "ml-6" : level > 1 ? `ml-${level + 5}` : ""
              )}>
                {filteredItems && filteredItems.map((child, index) => (
                  <SidebarSection key={index} item={child} level={level + 1} />
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        )}

        {!item.title && (
          <div className="mt-1">
            {filteredItems && filteredItems.map((child, index) => (
              <SidebarSection key={index} item={child} level={level} />
            ))}
          </div>
        )}
      </div>
    );
  }
  
  return (
    <Link
      to={item.href || '#'}
      className={cn(
        "flex items-center justify-between py-2 px-3 text-sm rounded-md mb-1",
        location.pathname === item.href 
          ? "bg-primary-hover text-primary-main font-medium" 
          : "text-gray-700 hover:bg-gray-100",
        level === 1 ? "" : level > 1 ? `ml-${level - 1}` : "",
      )}
    >
      <div className="flex items-center">
        {item.icon && <item.icon size={20} className="mr-2 text-gray-500" />}
        <span>{item.title}</span>
      </div>
      
      {item.title === 'Settings' && (
        <div className="w-2 h-2 bg-primary-main rounded-full" />
      )}
    </Link>
  );
};

export default Sidebar;
