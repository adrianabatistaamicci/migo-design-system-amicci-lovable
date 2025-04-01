
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar isOpen={sidebarOpen} />
      
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'md:ml-64' : ''}`}>
        <main className="p-6 md:p-8 max-w-7xl mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
