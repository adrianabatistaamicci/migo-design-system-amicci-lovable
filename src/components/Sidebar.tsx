
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, Package, Layers, PenTool, Palette, Coffee, MousePointer } from 'lucide-react';
import { cn } from '@/lib/utils';
import { TailwindTabs } from '@/components/ui/tabs';

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
      { title: 'Brand', href: '/foundations/brand' },
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
        title: 'Elements',
        items: [
          { title: 'Avatars', href: '/components/avatar' },
          { title: 'Chips', href: '/components/chip' },
          { title: 'Badges', href: '/components/badge' },
          { title: 'Dropdowns', href: '/components/dropdown' },
          { title: 'Buttons', href: '/components/buttons' },
          { title: 'Button Groups', href: '/components/button-groups' },
          { title: 'Accordions', href: '/components/accordion' },
          { title: 'Tooltips', href: '/components/tooltips' },
        ]
      },
      {
        title: 'Layout',
        items: [
          { title: 'Containers', href: '/components/containers' },
          { title: 'Cards', href: '/components/cards' },
          { title: 'List Containers', href: '/components/list-containers' },
          { title: 'Media Objects', href: '/components/media-objects' },
          { title: 'Dividers', href: '/components/divider' },
          { title: 'Skeletons', href: '/components/skeleton' },
        ]
      },
      {
        title: 'Page Examples',
        items: [
          { title: 'Home Screens', href: '/components/home-screens' },
          { title: 'Detail Screens', href: '/components/detail-screens' },
          { title: 'Settings Screens', href: '/components/settings-screens' },
          { title: 'Projects Screens', href: '/components/projects-screens' },
          { title: 'Marketplace Screens', href: '/components/marketplace-screens' },
        ]
      },
      { title: 'Library', href: '/components/library' },
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
  // For top-level menu items that could use tabs
  const componentsTabItems = [
    { name: 'Basic', value: 'basic' },
    { name: 'Complex', value: 'complex' },
    { name: 'Layout', value: 'layout' }
  ];

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
