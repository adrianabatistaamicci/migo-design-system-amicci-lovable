
import React from 'react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <p className="text-gray-600">Bem-vindo ao painel administrativo. Utilize o menu lateral para navegar entre as opções.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Páginas do Site</h3>
          <p className="text-gray-600">Total de páginas editáveis: 5</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Última Atualização</h3>
          <p className="text-gray-600">03/04/2025 às 14:32</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
