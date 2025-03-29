import React, { useState } from 'react';
import { Menu, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { isAuthenticated, logout } from '@/utils/authUtils';
import { LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Header = ({ toggleSidebar, isSidebarOpen }: HeaderProps) => {
  const [searchOpen, setSearchOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-30 bg-white border-b">
      <div className="flex h-16 items-center px-4 md:px-6">
        <button 
          onClick={toggleSidebar}
          className="mr-2 rounded-md p-2.5 text-gray-500 hover:bg-primary-hover md:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
        
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <img src="/lovable-uploads/47a3f494-ddfa-4646-ab96-41e21322fccb.png" alt="Migo Logo" className="h-8 w-auto" />
            <span className="font-medium text-lg hidden sm:inline-block">Migo Design System</span>
          </Link>
        </div>
        
        <div className="ml-auto flex items-center gap-2">
          {isAuthenticated() && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={logout}
              className="gap-1"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Sair</span>
            </Button>
          )}
          
          <Link to="/installation" target="_self">
            <Button size="sm" variant="default">
              Instalação
            </Button>
          </Link>
          
          <button
            onClick={() => setSearchOpen(true)}
            className="flex items-center gap-1 rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3"
          >
            <Search className="h-4 w-4" />
            <span className="hidden sm:inline">Pesquisar...</span>
            <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
              <span className="text-xs">⌘</span>K
            </kbd>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
