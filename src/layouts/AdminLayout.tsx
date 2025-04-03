
import React, { useState } from 'react';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import { GridContainer } from '@/components/layout/Grid';
import { useToast } from '@/hooks/use-toast';
import { LogOut, Settings, Pencil, Layout, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AdminLayout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    
    toast({
      title: "Logout realizado",
      description: "Você foi desconectado com sucesso",
    });
    
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin header */}
      <header className="bg-white shadow">
        <div className="mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold text-gray-900">Painel Administrativo</h1>
            {user && <span className="text-sm text-gray-500">{user.email}</span>}
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={() => navigate('/')}>
              <Home className="mr-2 h-4 w-4" />
              Voltar ao site
            </Button>
            <Button variant="destructive" size="sm" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Sair
            </Button>
          </div>
        </div>
      </header>
      
      {/* Admin layout */}
      <div className="flex h-[calc(100vh-64px)]">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-md">
          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <Link to="/admin/dashboard" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                  <Layout className="w-5 h-5 mr-2" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/admin/edit-pages" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                  <Pencil className="w-5 h-5 mr-2" />
                  <span>Editar Páginas</span>
                </Link>
              </li>
              <li>
                <Link to="/admin/settings" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                  <Settings className="w-5 h-5 mr-2" />
                  <span>Configurações</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        
        {/* Main content */}
        <div className="flex-1 overflow-auto p-6">
          <GridContainer fullWidth>
            <Outlet />
          </GridContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
