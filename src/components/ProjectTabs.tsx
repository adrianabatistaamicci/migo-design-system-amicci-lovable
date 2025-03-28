
import React from 'react';
import { TailwindTabs } from '@/components/ui/tabs';
import { Settings, Factory, PenTool, Rocket } from 'lucide-react';

const ProjectTabs = () => {
  return (
    <div className="w-full">
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
            secondaryText: "Prazo 05/07/2024",
            chipStatus: "Em breve",
            disabled: true
          }
        ]}
        variant="projectTabs"
        className="w-full"
      />
      
      {/* Content for the selected tab would go here */}
      <div className="p-4 border border-gray-200 rounded-md mt-4">
        <p className="text-sm">Conteúdo da aba selecionada</p>
      </div>
    </div>
  );
};

export default ProjectTabs;
