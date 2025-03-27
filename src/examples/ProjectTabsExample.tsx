
import React, { useState } from 'react';
import { TailwindTabs } from '@/components/ui/tabs';
import { Settings, Factory, PenTool, Rocket } from 'lucide-react';

const ProjectTabsExample = () => {
  const [activeTab, setActiveTab] = useState('specification');

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'specification':
        return (
          <div className="bg-white p-6 rounded-md border border-gray-200 mt-6">
            <h2 className="text-xl font-medium mb-4">Especificação do Projeto</h2>
            <p className="text-gray-600 mb-3">
              Todas as especificações técnicas e requisitos do projeto estão completos.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Requisitos funcionais definidos</li>
              <li>Especificações técnicas documentadas</li>
              <li>Análise de viabilidade concluída</li>
              <li>Aprovação das partes interessadas obtida</li>
            </ul>
          </div>
        );
      case 'supplier':
        return (
          <div className="bg-white p-6 rounded-md border border-gray-200 mt-6">
            <h2 className="text-xl font-medium mb-4">Fornecedor</h2>
            <p className="text-gray-600 mb-3">
              Seleção e negociação com fornecedores em andamento.
            </p>
            <div className="bg-amber-50 p-4 rounded-md border border-amber-200 mb-4">
              <h3 className="text-sm font-medium text-amber-800">Pendências</h3>
              <ul className="list-disc pl-5 mt-2 text-amber-700 text-sm">
                <li>Finalizar negociação de preços</li>
                <li>Assinar contrato de fornecimento</li>
              </ul>
            </div>
            <div className="flex justify-end">
              <button className="bg-primary-main text-white px-4 py-2 rounded-md text-sm">
                Atualizar status
              </button>
            </div>
          </div>
        );
      case 'packaging':
        return (
          <div className="bg-white p-6 rounded-md border border-gray-200 mt-6">
            <h2 className="text-xl font-medium mb-4">Design de Embalagem</h2>
            <p className="text-gray-600 mb-3">
              O design da embalagem ainda não foi iniciado.
            </p>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
              <p className="text-gray-500 text-sm">
                Esta etapa começará após a finalização do fornecedor.
              </p>
            </div>
          </div>
        );
      case 'production':
        return (
          <div className="bg-white p-6 rounded-md border border-gray-200 mt-6">
            <h2 className="text-xl font-medium mb-4">Produção</h2>
            <p className="text-gray-600 mb-3">
              A fase de produção está programada para começar em breve.
            </p>
            <div className="flex items-center space-x-2 text-gray-500 text-sm">
              <span>Data de início prevista:</span>
              <span className="font-medium">07/06/2024</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Acompanhamento do Projeto</h1>
      
      <TailwindTabs 
        tabs={[
          { 
            name: 'Especificação',
            value: 'specification',
            icon: <Settings className="h-5 w-5" />,
            secondaryText: "Prazo 03/05/2024",
            chipStatus: "Concluído"
          },
          { 
            name: 'Fornecedor',
            value: 'supplier',
            icon: <Factory className="h-5 w-5" />,
            secondaryText: "Prazo 03/05/2024",
            chipStatus: "Em andamento"
          },
          { 
            name: 'Embalagem',
            value: 'packaging',
            icon: <PenTool className="h-5 w-5" />,
            secondaryText: "Prazo 03/05/2024",
            chipStatus: "Não iniciado"
          },
          { 
            name: 'Produção',
            value: 'production',
            icon: <Rocket className="h-5 w-5" />,
            secondaryText: "Prazo 03/05/2024",
            chipStatus: "Em breve"
          }
        ]} 
        variant="projectTabs"
        className="w-full"
        onChange={handleTabChange}
        defaultValue={activeTab}
      />
      
      {renderContent()}
    </div>
  );
};

export default ProjectTabsExample;
