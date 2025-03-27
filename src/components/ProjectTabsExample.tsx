
import React from 'react';
import { TailwindTabs } from '@/components/ui/tabs';
import { Settings, Factory, PenTool, Rocket } from 'lucide-react';

const ProjectTabsExample = () => {
  return (
    <div className="w-full p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-6">Project Tabs Example</h2>
      
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
        onChange={(value) => console.log('Selected tab:', value)}
      />
      
      <div className="mt-6 p-4 border border-gray-200 rounded-md">
        <p className="text-gray-600">Selected tab content will appear here</p>
      </div>
    </div>
  );
};

export default ProjectTabsExample;
