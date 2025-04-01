
import React, { useState } from 'react';
import { ChevronDown, Users, Home, Settings, Menu, X, ShoppingBag, FileText, CreditCard, BarChart2, PieChart, Layers, Star, Mail, HelpCircle, LogOut, Search, Bell } from 'lucide-react';
import { cn } from '@/lib/utils';

export const SidePanelExample = () => {
  const [collapsed, setCollapsed] = useState(false);
  
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={cn(
        "bg-white border-r border-gray-200 transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}>
        <div className="p-4 flex justify-between items-center border-b border-gray-200">
          <h2 className={cn(
            "font-semibold transition-opacity duration-200",
            collapsed ? "opacity-0 w-0" : "opacity-100"
          )}>
            Dashboard
          </h2>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1 rounded-md hover:bg-gray-100"
          >
            {collapsed ? <Menu size={20} /> : <X size={20} />}
          </button>
        </div>
        
        <nav className="p-2">
          <ul className="space-y-1">
            <li>
              <a href="#" className="flex items-center p-2 rounded-md text-gray-900 hover:bg-gray-100">
                <Home size={20} />
                <span className={cn(
                  "ml-3 transition-opacity duration-200",
                  collapsed ? "opacity-0 w-0" : "opacity-100"
                )}>
                  Home
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 rounded-md text-gray-900 hover:bg-gray-100">
                <Users size={20} />
                <span className={cn(
                  "ml-3 transition-opacity duration-200",
                  collapsed ? "opacity-0 w-0" : "opacity-100"
                )}>
                  Users
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 rounded-md text-gray-900 hover:bg-gray-100">
                <Settings size={20} />
                <span className={cn(
                  "ml-3 transition-opacity duration-200",
                  collapsed ? "opacity-0 w-0" : "opacity-100"
                )}>
                  Settings
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Main content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Welcome back</h1>
        <p className="text-gray-600">This is a simple sidebar layout example</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-2">Dashboard Card 1</h3>
            <p className="text-gray-500">Example content for the card</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-2">Dashboard Card 2</h3>
            <p className="text-gray-500">Example content for the card</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const NestedSideNavExample = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState('');
  
  const toggleSubmenu = (menu) => {
    if (collapsed) {
      setCollapsed(false);
      setOpenSubmenu(menu);
      return;
    }
    setOpenSubmenu(openSubmenu === menu ? '' : menu);
  };
  
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={cn(
        "bg-white border-r border-gray-200 transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}>
        <div className="p-4 flex justify-between items-center border-b border-gray-200">
          <h2 className={cn(
            "font-semibold transition-opacity duration-200",
            collapsed ? "opacity-0 w-0" : "opacity-100"
          )}>
            Admin Panel
          </h2>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1 rounded-md hover:bg-gray-100"
          >
            {collapsed ? <Menu size={20} /> : <X size={20} />}
          </button>
        </div>
        
        <nav className="p-2">
          <ul className="space-y-1">
            <li>
              <a href="#" className="flex items-center p-2 rounded-md text-gray-900 hover:bg-gray-100">
                <Home size={20} />
                <span className={cn(
                  "ml-3 transition-opacity duration-200",
                  collapsed ? "opacity-0 w-0" : "opacity-100"
                )}>
                  Dashboard
                </span>
              </a>
            </li>
            
            {/* Products submenu */}
            <li>
              <button 
                className="flex items-center justify-between w-full p-2 rounded-md text-gray-900 hover:bg-gray-100"
                onClick={() => toggleSubmenu('products')}
              >
                <div className="flex items-center">
                  <ShoppingBag size={20} />
                  <span className={cn(
                    "ml-3 transition-opacity duration-200",
                    collapsed ? "opacity-0 w-0" : "opacity-100"
                  )}>
                    Products
                  </span>
                </div>
                {!collapsed && (
                  <ChevronDown 
                    size={16} 
                    className={cn(
                      "transition-transform",
                      openSubmenu === 'products' ? "rotate-180" : ""
                    )} 
                  />
                )}
              </button>
              
              {openSubmenu === 'products' && !collapsed && (
                <ul className="pl-10 mt-1 space-y-1">
                  <li>
                    <a href="#" className="block p-2 rounded-md text-gray-600 hover:bg-gray-100">
                      All Products
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block p-2 rounded-md text-gray-600 hover:bg-gray-100">
                      Add New
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block p-2 rounded-md text-gray-600 hover:bg-gray-100">
                      Categories
                    </a>
                  </li>
                </ul>
              )}
            </li>
            
            {/* Orders submenu */}
            <li>
              <button 
                className="flex items-center justify-between w-full p-2 rounded-md text-gray-900 hover:bg-gray-100"
                onClick={() => toggleSubmenu('orders')}
              >
                <div className="flex items-center">
                  <CreditCard size={20} />
                  <span className={cn(
                    "ml-3 transition-opacity duration-200",
                    collapsed ? "opacity-0 w-0" : "opacity-100"
                  )}>
                    Orders
                  </span>
                </div>
                {!collapsed && (
                  <ChevronDown 
                    size={16} 
                    className={cn(
                      "transition-transform",
                      openSubmenu === 'orders' ? "rotate-180" : ""
                    )} 
                  />
                )}
              </button>
              
              {openSubmenu === 'orders' && !collapsed && (
                <ul className="pl-10 mt-1 space-y-1">
                  <li>
                    <a href="#" className="block p-2 rounded-md text-gray-600 hover:bg-gray-100">
                      All Orders
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block p-2 rounded-md text-gray-600 hover:bg-gray-100">
                      Pending
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block p-2 rounded-md text-gray-600 hover:bg-gray-100">
                      Completed
                    </a>
                  </li>
                </ul>
              )}
            </li>
            
            <li>
              <a href="#" className="flex items-center p-2 rounded-md text-gray-900 hover:bg-gray-100">
                <Users size={20} />
                <span className={cn(
                  "ml-3 transition-opacity duration-200",
                  collapsed ? "opacity-0 w-0" : "opacity-100"
                )}>
                  Customers
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 rounded-md text-gray-900 hover:bg-gray-100">
                <FileText size={20} />
                <span className={cn(
                  "ml-3 transition-opacity duration-200",
                  collapsed ? "opacity-0 w-0" : "opacity-100"
                )}>
                  Reports
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 rounded-md text-gray-900 hover:bg-gray-100">
                <Settings size={20} />
                <span className={cn(
                  "ml-3 transition-opacity duration-200",
                  collapsed ? "opacity-0 w-0" : "opacity-100"
                )}>
                  Settings
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Main content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <p className="text-gray-600">Sidebar with nested navigation example</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-2">Products</h3>
            <p className="text-gray-500">1,234 total products</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-2">Orders</h3>
            <p className="text-gray-500">56 pending orders</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-2">Customers</h3>
            <p className="text-gray-500">832 registered customers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SearchSidebarExample = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={cn(
        "bg-white border-r border-gray-200 transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}>
        <div className="p-4 flex justify-between items-center border-b border-gray-200">
          <h2 className={cn(
            "font-semibold transition-opacity duration-200",
            collapsed ? "opacity-0 w-0" : "opacity-100"
          )}>
            Platform
          </h2>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1 rounded-md hover:bg-gray-100"
          >
            {collapsed ? <Menu size={20} /> : <X size={20} />}
          </button>
        </div>
        
        {!collapsed && (
          <div className="p-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={16} className="text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        )}
        
        <nav className="p-2">
          <ul className="space-y-1">
            <li>
              <a href="#" className="flex items-center p-2 rounded-md text-gray-900 bg-gray-100">
                <Home size={20} />
                <span className={cn(
                  "ml-3 transition-opacity duration-200",
                  collapsed ? "opacity-0 w-0" : "opacity-100"
                )}>
                  Home
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 rounded-md text-gray-600 hover:bg-gray-100">
                <Users size={20} />
                <span className={cn(
                  "ml-3 transition-opacity duration-200",
                  collapsed ? "opacity-0 w-0" : "opacity-100"
                )}>
                  Team
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 rounded-md text-gray-600 hover:bg-gray-100">
                <Settings size={20} />
                <span className={cn(
                  "ml-3 transition-opacity duration-200",
                  collapsed ? "opacity-0 w-0" : "opacity-100"
                )}>
                  Settings
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Main content */}
      <div className="flex-1">
        {/* Top navbar */}
        <div className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          
          <div className="flex items-center space-x-4">
            <button className="p-1 rounded-full text-gray-500 hover:bg-gray-100">
              <Bell size={20} />
            </button>
            
            <div className="flex items-center">
              <img 
                src="https://randomuser.me/api/portraits/women/60.jpg" 
                alt="User avatar" 
                className="h-8 w-8 rounded-full"
              />
              <button className="flex items-center ml-2 text-gray-700 hover:text-gray-900">
                <span className="mr-1">Jane Doe</span>
                <ChevronDown size={16} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Page content */}
        <div className="p-8">
          <div className="md:flex md:justify-between md:items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Analytics Overview</h2>
              <p className="text-gray-600">View performance metrics for your team</p>
            </div>
            <div className="mt-4 md:mt-0">
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-md">
                Export Report
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-medium text-gray-500 mb-1">Total Users</h3>
              <p className="text-3xl font-bold">24,781</p>
              <span className="inline-flex items-center text-sm text-green-600 mt-2">
                +2.5% from last week
              </span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-medium text-gray-500 mb-1">Active Sessions</h3>
              <p className="text-3xl font-bold">1,342</p>
              <span className="inline-flex items-center text-sm text-green-600 mt-2">
                +3.1% from yesterday
              </span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-medium text-gray-500 mb-1">Average Session</h3>
              <p className="text-3xl font-bold">2m 56s</p>
              <span className="inline-flex items-center text-sm text-red-600 mt-2">
                -0.5% from last week
              </span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-medium text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex items-center py-2 border-b border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                    {String.fromCharCode(65 + i)}
                  </div>
                  <div>
                    <p className="font-medium">User Activity {i + 1}</p>
                    <p className="text-sm text-gray-500">
                      {i % 2 === 0 ? "Updated profile information" : "Completed onboarding"}
                    </p>
                  </div>
                  <span className="ml-auto text-sm text-gray-500">
                    {i + 1}h ago
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AdminLayoutExample = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile sidebar backdrop */}
      {mobileSidebarOpen && (
        <div 
          className="fixed inset-0 bg-gray-600 bg-opacity-75 z-20 lg:hidden"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar for mobile */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-30 w-64 bg-gray-900 transform transition-transform lg:hidden",
        mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex items-center justify-between h-16 px-4 bg-gray-800 text-white">
          <span className="font-semibold text-xl">AdminPanel</span>
          <button onClick={() => setMobileSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>
        
        <div className="px-2 py-4">
          <MobileSidebarContent />
        </div>
      </div>
      
      {/* Sidebar for desktop */}
      <div className={cn(
        "hidden lg:block bg-gray-900 text-white transition-all duration-300",
        collapsed ? "w-20" : "w-64"
      )}>
        <div className="flex items-center justify-between h-16 px-4 bg-gray-800">
          {!collapsed && (
            <span className="font-semibold text-xl">AdminPanel</span>
          )}
          {collapsed && (
            <span className="mx-auto font-bold text-2xl">A</span>
          )}
          <button onClick={() => setCollapsed(!collapsed)} className="text-gray-400 hover:text-white">
            {collapsed ? <Menu size={24} /> : <X size={24} />}
          </button>
        </div>
        
        <div className="px-2 py-4">
          <DesktopSidebarContent collapsed={collapsed} />
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top navbar */}
        <header className="bg-white shadow-sm z-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <button 
                  onClick={() => setMobileSidebarOpen(true)}
                  className="lg:hidden text-gray-500 focus:outline-none"
                >
                  <Menu size={24} />
                </button>
                <div className="lg:hidden ml-3 font-semibold text-lg">AdminPanel</div>
              </div>
              
              <div className="hidden md:block">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search size={16} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    placeholder="Search"
                  />
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="p-1 rounded-full text-gray-500 hover:bg-gray-100">
                  <Bell size={20} />
                </button>
                
                <div className="flex items-center">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="User avatar" 
                    className="h-8 w-8 rounded-full"
                  />
                  <button className="hidden md:flex items-center ml-2 text-gray-700 hover:text-gray-900">
                    <span className="mr-1">Admin User</span>
                    <ChevronDown size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        {/* Page content */}
        <main className="flex-1 overflow-y-auto bg-gray-100 p-4 sm:p-6 lg:p-8">
          <div className="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between mb-6">
            <h2 className="text-2xl font-bold leading-7 text-gray-900">Dashboard</h2>
            <div className="mt-3 flex sm:mt-0 sm:ml-4">
              <button className="bg-white px-4 py-2 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none mr-3">
                Export
              </button>
              <button className="bg-primary-500 px-4 py-2 rounded-md shadow-sm text-sm font-medium text-white hover:bg-primary-600 focus:outline-none">
                Create
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0 rounded-md bg-primary-500/10 p-3">
                    <BarChart2 className="h-6 w-6 text-primary-500" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Total Revenue</dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">$24,598</div>
                        <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                          +4.2%
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0 rounded-md bg-purple-500/10 p-3">
                    <Users className="h-6 w-6 text-purple-500" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Total Users</dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">3,274</div>
                        <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                          +6.8%
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0 rounded-md bg-yellow-500/10 p-3">
                    <Star className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Avg. Rating</dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">4.8/5</div>
                        <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                          +0.3
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0 rounded-md bg-red-500/10 p-3">
                    <Layers className="h-6 w-6 text-red-500" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Projects</dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">142</div>
                        <div className="ml-2 flex items-baseline text-sm font-semibold text-red-600">
                          -2.1%
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
            <div className="bg-white overflow-hidden shadow rounded-lg lg:col-span-2">
              <div className="p-5 border-b border-gray-200">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Revenue Overview</h3>
              </div>
              <div className="p-5">
                <div className="h-64 bg-gray-50 rounded flex items-center justify-center">
                  <p className="text-gray-400">Chart Placeholder</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5 border-b border-gray-200">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Recent Activities</h3>
              </div>
              <div className="p-5">
                <ul className="divide-y divide-gray-200">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <li key={i} className="py-3">
                      <div className="flex space-x-3">
                        <img className="h-8 w-8 rounded-full" src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${i + 20}.jpg`} alt="User" />
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <h3 className="text-sm font-medium">User {i + 1}</h3>
                            <p className="text-xs text-gray-500">{i + 1}h ago</p>
                          </div>
                          <p className="text-sm text-gray-500">
                            {i % 2 === 0 ? 'Updated their profile' : 'Completed a project'}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const DesktopSidebarContent = ({ collapsed }) => {
  return (
    <nav className="space-y-2">
      <SidebarLink icon={<Home />} text="Dashboard" active={true} collapsed={collapsed} />
      <SidebarLink icon={<BarChart2 />} text="Analytics" collapsed={collapsed} />
      <SidebarLink icon={<Users />} text="Customers" collapsed={collapsed} />
      <SidebarLink icon={<Layers />} text="Projects" collapsed={collapsed} />
      <SidebarLink icon={<Mail />} text="Messages" collapsed={collapsed} badge="3" />
      <SidebarLink icon={<Settings />} text="Settings" collapsed={collapsed} />
      
      {!collapsed && <div className="pt-4 mt-4 border-t border-gray-700">
        <SidebarLink icon={<HelpCircle />} text="Help Center" collapsed={collapsed} />
        <SidebarLink icon={<LogOut />} text="Log Out" collapsed={collapsed} />
      </div>}
    </nav>
  );
};

const MobileSidebarContent = () => {
  return (
    <nav className="space-y-2">
      <SidebarLink icon={<Home />} text="Dashboard" active={true} collapsed={false} />
      <SidebarLink icon={<BarChart2 />} text="Analytics" collapsed={false} />
      <SidebarLink icon={<Users />} text="Customers" collapsed={false} />
      <SidebarLink icon={<Layers />} text="Projects" collapsed={false} />
      <SidebarLink icon={<Mail />} text="Messages" collapsed={false} badge="3" />
      <SidebarLink icon={<Settings />} text="Settings" collapsed={false} />
      
      <div className="pt-4 mt-4 border-t border-gray-700">
        <SidebarLink icon={<HelpCircle />} text="Help Center" collapsed={false} />
        <SidebarLink icon={<LogOut />} text="Log Out" collapsed={false} />
      </div>
    </nav>
  );
};

const SidebarLink = ({ icon, text, active = false, collapsed = false, badge }) => {
  return (
    <a 
      href="#" 
      className={cn(
        "group flex items-center px-2 py-2 text-sm font-medium rounded-md",
        active 
          ? "bg-gray-800 text-white" 
          : "text-gray-300 hover:bg-gray-700 hover:text-white"
      )}
    >
      <div className={cn(
        "flex-shrink-0 h-6 w-6",
        collapsed ? "mx-auto" : "mr-3"
      )}>
        {icon}
      </div>
      {!collapsed && <span className="flex-1">{text}</span>}
      {!collapsed && badge && (
        <span className="bg-primary-500 text-white px-2 py-0.5 rounded-full text-xs">
          {badge}
        </span>
      )}
    </a>
  );
};
