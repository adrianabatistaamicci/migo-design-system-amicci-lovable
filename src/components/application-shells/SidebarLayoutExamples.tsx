import React, { useState } from 'react';
import {
  Home,
  Users,
  ShoppingCart,
  BarChart,
  Settings,
  HelpCircle,
  LifeBuoy,
  Layout,
  List,
  Columns,
} from 'lucide-react';
import { SidebarLayout } from '@/components/application-shells/SidebarLayout';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

interface MenuItem {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  collapsed?: boolean;
  badge: React.ReactNode;
}

const menuItems: MenuItem[] = [
  {
    icon: <Home size={22} />,
    text: 'Dashboard',
    active: true,
    collapsed: false,
    badge: null
  },
  {
    icon: <Users size={22} />,
    text: 'Clientes',
    collapsed: false,
    badge: null
  },
  {
    icon: <ShoppingCart size={22} />,
    text: 'Produtos',
    collapsed: false,
    badge: null
  },
  {
    icon: <BarChart size={22} />,
    text: 'Relatórios',
    collapsed: false,
    badge: null
  },
  {
    icon: <Settings size={22} />,
    text: 'Configurações',
    collapsed: false,
    badge: null
  },
];

const secondaryItems: MenuItem[] = [
  {
    icon: <HelpCircle size={22} />,
    text: 'Ajuda',
    collapsed: false,
    badge: null
  },
  {
    icon: <LifeBuoy size={22} />,
    text: 'Suporte',
    collapsed: false,
    badge: null
  },
];

export const VerticalMenuDemo = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    {
      icon: <Home size={22} />,
      text: 'Dashboard',
      active: true,
      collapsed: isCollapsed,
      badge: null
    },
    {
      icon: <Users size={22} />,
      text: 'Clientes',
      collapsed: isCollapsed,
      badge: null
    },
    {
      icon: <ShoppingCart size={22} />,
      text: 'Produtos',
      collapsed: isCollapsed,
      badge: null
    },
    {
      icon: <BarChart size={22} />,
      text: 'Relatórios',
      collapsed: isCollapsed,
      badge: null
    },
    {
      icon: <Settings size={22} />,
      text: 'Configurações',
      collapsed: isCollapsed,
      badge: null
    },
  ];

  const secondaryItems = [
    {
      icon: <HelpCircle size={22} />,
      text: 'Ajuda',
      collapsed: isCollapsed,
      badge: null
    },
    {
      icon: <LifeBuoy size={22} />,
      text: 'Suporte',
      collapsed: isCollapsed,
      badge: null
    },
  ];

  return (
    <SidebarLayout
      variant="vertical"
      sidebarItems={menuItems}
      secondaryItems={secondaryItems}
      isCollapsed={isCollapsed}
      toggleCollapse={toggleCollapse}
    >
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Conteúdo Principal</h2>
        <p>Este é o conteúdo principal do seu layout com menu vertical.</p>
      </div>
    </SidebarLayout>
  );
};

export const StackedWithSidebarDemo = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    {
      icon: <Home size={22} />,
      text: 'Dashboard',
      active: true,
      collapsed: false,
      badge: null
    },
    {
      icon: <Users size={22} />,
      text: 'Clientes',
      collapsed: false,
      badge: null
    },
    {
      icon: <ShoppingCart size={22} />,
      text: 'Produtos',
      collapsed: false,
      badge: null
    },
    {
      icon: <BarChart size={22} />,
      text: 'Relatórios',
      collapsed: false,
      badge: null
    },
    {
      icon: <Settings size={22} />,
      text: 'Configurações',
      collapsed: false,
      badge: null
    },
  ];

  const secondaryItems = [
    {
      icon: <HelpCircle size={22} />,
      text: 'Ajuda',
      collapsed: false,
      badge: null
    },
    {
      icon: <LifeBuoy size={22} />,
      text: 'Suporte',
      collapsed: false,
      badge: null
    },
  ];

  return (
    <SidebarLayout
      variant="stacked"
      sidebarItems={menuItems}
      secondaryItems={secondaryItems}
      isCollapsed={isCollapsed}
      toggleCollapse={toggleCollapse}
      headerContent={
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-gray-500">john.doe@example.com</p>
          </div>
        </div>
      }
    >
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Conteúdo Principal</h2>
        <p>Este é o conteúdo principal do seu layout com menu stacked.</p>
      </div>
    </SidebarLayout>
  );
};

export const CollapsibleMenuDemo = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    {
      icon: <Home size={22} />,
      text: 'Dashboard',
      active: true,
      collapsed: isCollapsed,
      badge: null
    },
    {
      icon: <Users size={22} />,
      text: 'Clientes',
      collapsed: isCollapsed,
      badge: null
    },
    {
      icon: <ShoppingCart size={22} />,
      text: 'Produtos',
      collapsed: isCollapsed,
      badge: null
    },
    {
      icon: <BarChart size={22} />,
      text: 'Relatórios',
      collapsed: isCollapsed,
      badge: null
    },
    {
      icon: <Settings size={22} />,
      text: 'Configurações',
      collapsed: isCollapsed,
      badge: null
    },
  ];

  const secondaryItems = [
    {
      icon: <HelpCircle size={22} />,
      text: 'Ajuda',
      collapsed: isCollapsed,
      badge: null
    },
    {
      icon: <LifeBuoy size={22} />,
      text: 'Suporte',
      collapsed: isCollapsed,
      badge: null
    },
  ];

  return (
    <SidebarLayout
      variant="collapsible"
      sidebarItems={menuItems}
      secondaryItems={secondaryItems}
      isCollapsed={isCollapsed}
      toggleCollapse={toggleCollapse}
    >
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Conteúdo Principal</h2>
        <p>Este é o conteúdo principal do seu layout com menu colapsável.</p>
      </div>
    </SidebarLayout>
  );
};
