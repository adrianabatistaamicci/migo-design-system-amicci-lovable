
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Check if user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    // Check login status
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:mr-8">
            <h1 className="text-4xl font-extrabold tracking-tight mb-4">Amicci Design System</h1>
            <p className="text-lg text-gray-600 mb-6">
              Uma biblioteca de componentes, padrões e práticas que ajudam a criar experiências de usuário consistentes para nossos produtos.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/ui-kit"
                className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Explorar Componentes
              </Link>
              <Link
                to="/guidelines"
                className="border border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Ver Guidelines
              </Link>
              
              {isLoggedIn ? (
                <Link
                  to="/admin/dashboard"
                  className="border border-gray-300 bg-gray-100 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                >
                  Acessar Painel Admin
                </Link>
              ) : (
                <Link
                  to="/admin/login"
                  className="border border-gray-300 bg-gray-100 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                >
                  Login Administrativo
                </Link>
              )}
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center shadow-lg">
              <div className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-2">Amicci Design System</h3>
                <p className="text-gray-600">Explore componentes, diretrizes e recursos para construir produtos de alta qualidade.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Componentes</h2>
            <p className="text-gray-600 mb-4">Biblioteca completa de componentes UI reutilizáveis para agilizar o desenvolvimento.</p>
            <Link to="/ui-kit" className="text-primary font-medium hover:underline">Ver componentes →</Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Fundamentos</h2>
            <p className="text-gray-600 mb-4">Cores, tipografia, espaçamento e outros elementos fundamentais do design system.</p>
            <Link to="/foundations/colors" className="text-primary font-medium hover:underline">Explorar fundamentos →</Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Recursos</h2>
            <p className="text-gray-600 mb-4">Ferramentas, guias e documentação para auxiliar no uso do design system.</p>
            <Link to="/resources/figma-library" className="text-primary font-medium hover:underline">Ver recursos →</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
