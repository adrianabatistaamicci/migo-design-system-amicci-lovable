import React from 'react';
import ComponentCard from '@/components/ComponentCard';
import { Button } from '@/components/ui/button';

interface AccessibilityDemoProps {
  simulationType: string;
  handleSimulation: (type: string) => void;
}

const AccessibilityDemo: React.FC<AccessibilityDemoProps> = ({ simulationType, handleSimulation }) => {
  // Define filters for each type of color blindness
  const filters = {
    deuteranopia: "grayscale(0) sepia(0.8) hue-rotate(90deg)",
    protanopia: "grayscale(0) sepia(0.6) hue-rotate(320deg)",
    tritanopia: "grayscale(0) sepia(0.8) hue-rotate(180deg)",
    achromatopsia: "grayscale(1)"
  };

  // Apply the filter style to the elements
  const getFilterStyle = (type: string) => {
    if (simulationType === type) {
      return { filter: filters[type as keyof typeof filters] };
    }
    return {};
  };

  return (
    <ComponentCard
      title="Simulações de Acessibilidade Visual"
      description="Veja como suas cores aparecem para pessoas com diferentes tipos de daltonismo"
    >
      <div className="space-y-8">
        <div className="flex flex-wrap gap-3">
          <Button 
            onClick={() => handleSimulation('protanopia')}
            variant={simulationType === 'protanopia' ? 'default' : 'outline'}
            size="sm"
          >
            Protanopia
          </Button>
          <Button 
            onClick={() => handleSimulation('deuteranopia')}
            variant={simulationType === 'deuteranopia' ? 'default' : 'outline'}
            size="sm"
          >
            Deuteranopia
          </Button>
          <Button 
            onClick={() => handleSimulation('tritanopia')}
            variant={simulationType === 'tritanopia' ? 'default' : 'outline'}
            size="sm"
          >
            Tritanopia
          </Button>
          <Button 
            onClick={() => handleSimulation('achromatopsia')}
            variant={simulationType === 'achromatopsia' ? 'default' : 'outline'}
            size="sm"
          >
            Achromatopsia
          </Button>
          <Button 
            onClick={() => handleSimulation('normal')}
            variant={simulationType === 'normal' ? 'default' : 'outline'}
            size="sm"
          >
            Visão Normal
          </Button>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <h3 className="text-lg font-medium mb-3">Exemplos de UI</h3>
            <div 
              className={`p-6 border rounded-md ${
                simulationType === 'protanopia' ? 'filter-protanopia' : 
                simulationType === 'deuteranopia' ? 'filter-deuteranopia' : 
                simulationType === 'tritanopia' ? 'filter-tritanopia' : 
                simulationType === 'achromatopsia' ? 'filter-achromatopsia' : ''
              }`}
            >
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Button className="bg-primary-main hover:bg-primary-hover">Primário</Button>
                  <Button variant="destructive">Excluir</Button>
                  <Button variant="outline">Secundário</Button>
                </div>
                <div className="flex gap-2">
                  <span className="bg-success-main text-white px-3 py-1 rounded-full text-sm">Sucesso</span>
                  <span className="bg-error-main text-white px-3 py-1 rounded-full text-sm">Erro</span>
                  <span className="bg-warning-main text-warning-contrast px-3 py-1 rounded-full text-sm">Aviso</span>
                  <span className="bg-info-main text-white px-3 py-1 rounded-full text-sm">Info</span>
                </div>
                <div className="h-8 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-primary-main rounded-full" style={{ width: '65%' }}></div>
                </div>
                <div className="p-4 bg-error-light border border-error-outlinedBorder text-error-main rounded-md">
                  Mensagem de erro importante
                </div>
                <div className="p-4 bg-success-light border border-success-outlinedBorder text-success-main rounded-md">
                  Operação concluída com sucesso
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-medium mb-3">Paleta de Cores Básicas</h3>
            <div 
              className={`grid grid-cols-3 md:grid-cols-5 gap-3 ${
                simulationType === 'protanopia' ? 'filter-protanopia' : 
                simulationType === 'deuteranopia' ? 'filter-deuteranopia' : 
                simulationType === 'tritanopia' ? 'filter-tritanopia' : 
                simulationType === 'achromatopsia' ? 'filter-achromatopsia' : ''
              }`}
            >
              <div className="h-12 w-full bg-primary-main rounded"></div>
              <div className="h-12 w-full bg-secondary-main rounded"></div>
              <div className="h-12 w-full bg-error-main rounded"></div>
              <div className="h-12 w-full bg-warning-main rounded"></div>
              <div className="h-12 w-full bg-info-main rounded"></div>
              <div className="h-12 w-full bg-success-main rounded"></div>
              <div className="h-12 w-full bg-text-primary rounded"></div>
              <div className="h-12 w-full bg-text-secondary rounded"></div>
              <div className="h-12 w-full bg-background-paper rounded"></div>
              <div className="h-12 w-full bg-background-default rounded"></div>
            </div>
          </div>
        </div>
        
        <div className="text-sm text-gray-500 mt-3">
          <p>
            <strong>{simulationType === 'normal' ? 'Visão Normal' : 
                    simulationType === 'protanopia' ? 'Protanopia' : 
                    simulationType === 'deuteranopia' ? 'Deuteranopia' : 
                    simulationType === 'tritanopia' ? 'Tritanopia' : 
                    'Achromatopsia'}</strong>: 
            {simulationType === 'normal' 
              ? ' Como a maioria das pessoas enxerga as cores.'
              : simulationType === 'protanopia'
                ? ' Dificuldade em perceber cores vermelhas. Afeta aproximadamente 1% dos homens.'
                : simulationType === 'deuteranopia'
                  ? ' Dificuldade em perceber cores verdes. É o tipo mais comum de daltonismo.'
                  : simulationType === 'tritanopia'
                    ? ' Dificuldade em perceber cores azuis. Muito raro, afeta menos de 0.1% da população.'
                    : ' Ausência total de percepção de cores (visão em preto e branco). Extremamente raro.'
            }
          </p>
        </div>
      </div>
    </ComponentCard>
  );
};

export default AccessibilityDemo;
