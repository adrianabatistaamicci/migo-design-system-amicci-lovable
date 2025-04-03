
import React, { useState } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Search from '@/components/Search';
import Footer from '@/components/library-components/Footer';
import { usePageTransition } from '@/utils/transitionUtils';
import { cn } from '@/lib/utils';
import { PageTitleProvider, usePageTitle } from '@/contexts/PageTitleContext';
import { sidebarItems } from '@/components/Sidebar';

const PageTitleUpdater = () => {
  const location = useLocation();
  const { setPageTitle } = usePageTitle();
  
  const findPageTitle = (items: any[], pathname: string): string | undefined => {
    for (const item of items) {
      if (item.href === pathname) {
        return item.title;
      }
      if (item.items) {
        const foundTitle = findPageTitle(item.items, pathname);
        if (foundTitle) return foundTitle;
      }
    }
    return undefined;
  };
  
  React.useEffect(() => {
    const title = findPageTitle(sidebarItems, location.pathname);
    if (title) {
      setPageTitle(title);
      document.title = `Migo Design System | ${title}`;
    }
  }, [location.pathname, setPageTitle]);
  
  return null;
};

const MainLayoutContent = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const { isTransitioning, showContent } = usePageTransition();

  React.useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <PageTitleUpdater />
      <Header 
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
        isSidebarOpen={sidebarOpen}
      />
      
      <div className="flex-1 flex flex-col">
        <div className="flex flex-1">
          <Sidebar isOpen={sidebarOpen} />
          
          <div 
            className={cn(
              "flex-1 transition-all duration-300 ease-elastic flex flex-col min-h-[calc(100vh-88px)]",
              "md:ml-64"
            )}
          >
            <main 
              className={cn(
                "transition-opacity duration-300 mx-auto px-6 w-full flex-1",
                "max-w-[1280px] py-8",
                isTransitioning ? "opacity-0" : "opacity-100",
                !showContent && "hidden"
              )}
            >
              <Outlet />
            </main>
            
            <Footer />
          </div>
        </div>
      </div>
      
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

const MainLayout: React.FC = () => {
  return (
    <PageTitleProvider>
      <MainLayoutContent />
    </PageTitleProvider>
  );
};

export default MainLayout;
