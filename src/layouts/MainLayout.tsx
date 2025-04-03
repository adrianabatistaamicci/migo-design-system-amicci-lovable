
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { Toaster } from "@/components/ui/toaster";
import { Outlet } from 'react-router-dom'
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';
import { Settings } from 'lucide-react';

export default function MainLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  
  // Check if user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    // Check login status
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);
  
  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [isMobile]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='h-full relative'>
      <div className="flex h-screen overflow-hidden">
        <Sidebar isOpen={isOpen} />

        <div className={cn(
          "flex flex-col flex-1 overflow-x-hidden bg-secondary/5",
          isOpen ? "ml-[280px]" : "ml-[80px]",
          isMobile && "ml-0"
        )}>
          <Header toggleSidebar={toggleSidebar} isSidebarOpen={isOpen} />
          <main className="flex-1 overflow-y-auto py-2">
            <Outlet />
          </main>
          
          {/* Admin link */}
          {isLoggedIn && (
            <div className="fixed bottom-4 right-4">
              <Link 
                to="/admin/dashboard" 
                className="flex items-center justify-center w-12 h-12 bg-primary rounded-full text-white shadow-lg hover:bg-primary/90 transition-colors"
              >
                <Settings className="w-6 h-6" />
              </Link>
            </div>
          )}
        </div>
      </div>
      <Toaster />
    </div>
  );
}
