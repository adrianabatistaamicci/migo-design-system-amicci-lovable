
import React, { useState } from 'react';
import { TailwindTabs } from '@/components/ui/tabs';
import { Settings, Factory, PenTool, Rocket } from 'lucide-react';

const ProjectTabsExample = () => {
  const [activeTab, setActiveTab] = useState('specification');
  
  const renderTabContent = () => {
    switch(activeTab) {
      case 'specification':
        return (
          <div className="p-6">
            <h3 className="text-lg font-medium mb-3">Especificação do Projeto</h3>
            <p className="text-gray-600 mb-4">
              Detalhes sobre as especificações técnicas e requisitos do projeto.
            </p>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
              <p className="text-sm text-gray-500">Status: Concluído</p>
              <p className="text-sm text-gray-500">Data de conclusão: 01/05/2024</p>
            </div>
          </div>
        );
      case 'supplier':
        return (
          <div className="p-6">
            <h3 className="text-lg font-medium mb-3">Fornecedor</h3>
            <p className="text-gray-600 mb-4">
              Informações sobre o fornecedor selecionado e detalhes do contrato.
            </p>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
              <p className="text-sm text-gray-500">Status: Em andamento</p>
              <p className="text-sm text-gray-500">Prazo previsto: 03/05/2024</p>
            </div>
          </div>
        );
      case 'packaging':
        return (
          <div className="p-6">
            <h3 className="text-lg font-medium mb-3">Embalagem</h3>
            <p className="text-gray-600 mb-4">
              Detalhes sobre o design e especificações da embalagem.
            </p>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
              <p className="text-sm text-gray-500">Status: Não iniciado</p>
              <p className="text-sm text-gray-500">Início previsto: 04/05/2024</p>
            </div>
          </div>
        );
      case 'production':
        return (
          <div className="p-6">
            <h3 className="text-lg font-medium mb-3">Produção</h3>
            <p className="text-gray-600 mb-4">
              Cronograma e detalhes da etapa de produção.
            </p>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
              <p className="text-sm text-gray-500">Status: Em breve</p>
              <p className="text-sm text-gray-500">Início previsto: 10/05/2024</p>
            </div>
          </div>
        );
      default:
        return <div className="p-6">Selecione uma aba para ver detalhes</div>;
    }
  };

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-6">Exemplo de Tabs de Projeto</h2>
      
      <TailwindTabs 
        tabs={[{
          name: 'Especificação',
          value: 'specification',
          icon: <Settings className="h-5 w-5" />,
          secondaryText: "Prazo 03/05/2024",
          chipStatus: "Concluído"
        }, {
          name: 'Fornecedor',
          value: 'supplier',
          icon: <Factory className="h-5 w-5" />,
          secondaryText: "Prazo 03/05/2024",
          chipStatus: "Em andamento"
        }, {
          name: 'Embalagem',
          value: 'packaging',
          icon: <PenTool className="h-5 w-5" />,
          secondaryText: "Prazo 03/05/2024",
          chipStatus: "Não iniciado"
        }, {
          name: 'Produção',
          value: 'production',
          icon: <Rocket className="h-5 w-5" />,
          secondaryText: "Prazo 03/05/2024",
          chipStatus: "Em breve"
        }]} 
        variant="projectTabs"
        className="w-full" 
        defaultValue={activeTab}
        onChange={(value) => setActiveTab(value)}
      />
      
      <div className="mt-6 border border-gray-200 rounded-md bg-white">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default ProjectTabsExample;
