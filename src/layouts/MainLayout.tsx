
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { Toaster } from "@/components/ui/toaster";
import { Outlet } from 'react-router-dom'
import { cn } from '@/lib/utils';
import { useMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';
import { Settings } from 'lucide-react';

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const isMobile = useMobile();
  
  // Check if user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    // Check login status
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);
  
  useEffect(() => {
    if (isMobile) {
      setCollapsed(true);
    }
  }, [isMobile]);

  return (
    <div className='h-full relative'>
      <div className="flex h-screen overflow-hidden">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

        <div className={cn(
          "flex flex-col flex-1 overflow-x-hidden bg-secondary/5",
          collapsed ? "ml-[80px]" : "ml-[280px]",
          isMobile && "ml-0"
        )}>
          <Header />
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
