
import React, { useState } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Search from '@/components/Search';
import { usePageTransition } from '@/utils/transitionUtils';
import { cn } from '@/lib/utils';

const MainLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const { isTransitioning, showContent } = usePageTransition();

  // Close sidebar when route changes (mobile only)
  React.useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
        isSidebarOpen={sidebarOpen}
      />
      
      <div className="flex-1 flex">
        <Sidebar isOpen={sidebarOpen} />
        
        <div 
          className={cn(
            "flex-1 transition-all duration-300 ease-elastic",
            "md:ml-64" // Offset for sidebar on desktop
          )}
        >
          <main 
            className={cn(
              "transition-opacity duration-300 mx-auto px-4 w-full",
              "max-w-[1280px] py-8", // Standardized max-width and vertical padding
              isTransitioning ? "opacity-0" : "opacity-100",
              !showContent && "hidden"
            )}
          >
            <Outlet />
          </main>
        </div>
      </div>
      
      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 z-20"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      <Search isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
};

export default MainLayout;
