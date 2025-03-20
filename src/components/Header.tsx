
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search as SearchIcon, Github, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface HeaderProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, isSidebarOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-200 ease-elastic ${
        scrolled ? 'bg-white shadow-[0px_12px_16px_-4px_rgba(14,24,41,0.08),0px_4px_6px_-2px_rgba(14,24,41,0.03)]' : 'bg-white shadow-[0px_12px_16px_-4px_rgba(14,24,41,0.08),0px_4px_6px_-2px_rgba(14,24,41,0.03)]'
      }`}
    >
      <div className="w-full h-16 flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="md:hidden"
            aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
          
          <Link 
            to="/" 
            className="flex items-center gap-2 font-medium text-primary-dark"
          >
            <img 
              src="https://amicci.com.br/wp-content/uploads/2024/09/Amicci-Logo_Turquesa-EscuroTurquesa.svg" 
              alt="Amicci" 
              className="h-auto w-[120px]" 
            />
          </Link>
        </div>

        <div className={`
          absolute left-0 right-0 top-0 bottom-0 
          bg-white px-6 flex items-center justify-between
          transition-opacity duration-200
          ${searchActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}>
          <div className="w-full max-w-md mx-auto">
            <Input
              placeholder="Search documentation..." 
              className="w-full"
              autoFocus={searchActive}
            />
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setSearchActive(false)}
            className="ml-2"
          >
            <X size={20} />
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setSearchActive(true)}
            aria-label="Search"
          >
            <SearchIcon size={20} className="text-primary-dark" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="hidden sm:flex"
            aria-label="Toggle theme"
          >
            <Sun size={20} className="rotate-0 scale-100 transition-transform text-primary-dark" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            asChild
            className="hidden sm:flex"
            aria-label="GitHub repository"
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github size={20} className="text-primary-dark" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
