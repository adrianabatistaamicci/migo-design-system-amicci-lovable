
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, Package, Layers, PenTool, Palette, Coffee } from 'lucide-react';
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
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/' },
      { title: 'Installation', href: '/installation' },
      { title: 'Usage', href: '/usage' },
    ]
  },
  {
    title: 'Components',
    href: '/components',
    icon: Package,
    items: [
      { title: 'Buttons', href: '/components/buttons' },
      { title: 'Cards', href: '/components/cards' },
      { title: 'Input', href: '/components/input' },
      { title: 'Navigation', href: '/components/navigation' },
      { title: 'Typography', href: '/components/typography' },
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
  
  // Check if this section or any child is active
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
  
  // If it's a section with children
  if (item.items && item.items.length > 0) {
    return (
      <div className="mb-2">
        {/* Section header */}
        <div className={cn(
          "flex items-center justify-between py-2 px-3 rounded-md text-sm font-medium",
          level === 0 ? "text-mui-text-secondary" : "text-mui-text-primary",
          active && !item.href ? "text-mui-primary" : "",
          level > 0 && "pl-8",
          item.href ? "hover:bg-mui-hover cursor-pointer" : ""
        )}>
          <div 
            className="flex items-center gap-2 w-full"
            onClick={() => item.href ? null : setExpanded(!expanded)}
          >
            {item.icon && <item.icon size={18} />}
            {item.href ? (
              <Link 
                to={item.href} 
                className={cn(
                  "w-full",
                  location.pathname === item.href ? "text-mui-primary font-medium" : ""
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
              className="text-mui-text-secondary hover:text-mui-text-primary p-1 rounded-md"
            >
              {expanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>
          )}
        </div>
        
        {/* Section children */}
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
  
  // If it's a leaf node (no children)
  return (
    <Link
      to={item.href || '#'}
      className={cn(
        "flex items-center py-2 px-3 text-sm rounded-md",
        location.pathname === item.href 
          ? "text-mui-primary bg-mui-hover font-medium" 
          : "text-mui-text-secondary hover:text-mui-text-primary hover:bg-mui-hover",
        level > 0 && "pl-8",
      )}
    >
      {item.icon && <item.icon size={18} className="mr-2" />}
      {item.title}
    </Link>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <aside className={cn(
      "fixed top-16 left-0 bottom-0 w-64 bg-mui-sidebar border-r border-mui-border overflow-y-auto transition-transform duration-300 ease-elastic z-30",
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
