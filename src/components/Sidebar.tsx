import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, Package, Layers, PenTool, Palette, Coffee, MousePointer } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarItem {
  title: string;
  href?: string;
  icon?: React.ElementType;
  items?: SidebarItem[];
}

interface SidebarProps {
  isOpen: boolean;
}

const sidebarItems: SidebarItem[] = [
  {
    title: 'Introdução',
    items: [
      { title: 'Oi, Migo', href: '/' },
      { title: 'Instalação', href: '/installation' },
      { title: 'Guidelines', href: '/guidelines' },
      { title: 'UI Kit', href: '/ui-kit' },
      { title: 'Recursos', href: '/resources' },
    ]
  },
  {
    title: 'Foundations',
    icon: Layers,
    items: [
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
      { title: 'Button', href: '/components/buttons' },
      { title: 'Checkbox', href: '/components/checkbox' },
      { title: 'Input', href: '/components/input' },
      { title: 'Radio', href: '/components/radio-group' },
      { title: 'Select', href: '/components/select' },
      { title: 'Slider', href: '/components/slider' },
      { title: 'Switch', href: '/components/switch' },
      { title: 'Avatar', href: '/components/avatar' },
      { title: 'Badge', href: '/components/badge' },
      { title: 'Chip', href: '/components/chip' },
      { title: 'Divider', href: '/components/divider' },
      { title: 'Icons', href: '/components/icons' },
      { title: 'Table', href: '/components/table' },
      { title: 'Typography', href: '/components/typography' },
      { title: 'Alert', href: '/components/alert' },
      { title: 'Dialog', href: '/components/dialog' },
      { title: 'Progress', href: '/components/progress' },
      { title: 'Skeleton', href: '/components/skeleton' },
      { title: 'Snackbar', href: '/components/snackbar' },
      { title: 'Breadcrumbs', href: '/components/breadcrumb' },
      { title: 'Drawer', href: '/components/drawer' },
      { title: 'Menu', href: '/components/menu' },
      { title: 'Pagination', href: '/components/pagination' },
      { title: 'Stepper', href: '/components/stepper' },
      { title: 'Tabs', href: '/components/tabs' },
      { title: 'Accordion', href: '/components/accordion' },
      { title: 'App Bar', href: '/components/app-bar' },
      { title: 'Card', href: '/components/cards' },
      { title: 'Paper', href: '/components/paper' },
      { title: 'Click Away Listener', href: '/components/click-away-listener' },
      { title: 'CSS Baseline', href: '/components/css-baseline' },
      { title: 'Modal', href: '/components/modal' },
      { title: 'No SSR', href: '/components/no-ssr' },
      { title: 'Popover', href: '/components/popover' },
      { title: 'Popper', href: '/components/popper' },
      { title: 'Portal', href: '/components/portal' },
      { title: 'Textarea Autosize', href: '/components/textarea-autosize' },
      { title: 'Transitions', href: '/components/transitions' },
      { title: 'Data Grid', href: '/components/data-grid' },
      { title: 'Date & Time Pickers', href: '/components/date-picker' },
    ]
  },
  {
    title: 'Guidelines',
    icon: PenTool,
    items: [
      { title: 'Accessibility', href: '/guidelines/accessibility' },
      { title: 'Responsive Design', href: '/guidelines/responsive-design' },
    ]
  },
  {
    title: 'Customization',
    icon: Palette,
    items: [
      { title: 'Theming', href: '/customization/theming' },
      { title: 'Configuration', href: '/customization/configuration' },
    ]
  },
  {
    title: 'Resources',
    icon: Coffee,
    items: [
      { title: 'Figma Library', href: '/resources/figma-library' },
      { title: 'Storybook', href: '/resources/storybook' },
      { title: 'FAQ', href: '/resources/faq' },
    ]
  },
];

const SidebarSection: React.FC<{ item: SidebarItem, level?: number }> = ({ 
  item, 
  level = 0 
}) => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(true);
  
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
  
  if (item.items && item.items.length > 0) {
    return (
      <div className="mb-2">
        <div className={cn(
          "flex items-center justify-between py-2 px-3 rounded-md text-sm font-medium",
          level === 0 ? "text-primary" : "text-foreground",
          active && !item.href ? "text-primary-main" : "",
          level > 0 && "pl-8",
          item.href ? "hover:bg-gray-100 cursor-pointer" : ""
        )}>
          <div 
            className="flex items-center gap-2 w-full"
            onClick={() => item.href ? null : setExpanded(!expanded)}
          >
            {item.icon && <item.icon size={18} className="text-primary-main" />}
            {item.href ? (
              <Link 
                to={item.href} 
                className={cn(
                  "w-full",
                  location.pathname === item.href ? "text-primary-main font-medium" : ""
                )}
              >
                {item.title}
              </Link>
            ) : (
              <span>{item.title}</span>
            )}
          </div>
          
          {item.items && item.items.length > 0 && (
            <button 
              onClick={() => setExpanded(!expanded)}
              className="text-gray-500 hover:text-primary-main p-1 rounded-md"
            >
              {expanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>
          )}
        </div>
        
        {expanded && item.items && (
          <div className={cn("mt-1 transition-all duration-200", expanded ? "opacity-100" : "opacity-0 h-0 overflow-hidden")}>
            {item.items.map((child, index) => (
              <SidebarSection key={index} item={child} level={level + 1} />
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
        "flex items-center py-2 px-3 text-sm rounded-md",
        location.pathname === item.href 
          ? "text-primary-main bg-primary-hover font-medium" 
          : "text-primary hover:text-primary-main hover:bg-gray-100",
        level > 0 && "pl-8",
      )}
    >
      {item.icon && <item.icon size={18} className="mr-2 text-primary-main" />}
      {item.title}
    </Link>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <aside className={cn(
      "fixed top-16 left-0 bottom-0 w-64 bg-white border-r border-gray-200 overflow-y-auto transition-transform duration-300 ease-elastic z-30",
      isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
    )}>
      <div className="pt-6 pb-8 px-4">
        {sidebarItems.map((item, index) => (
          <SidebarSection key={index} item={item} />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
