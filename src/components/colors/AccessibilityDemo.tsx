
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ComponentCard from '@/components/ComponentCard';
import { Card, CardContent } from '@/components/ui/card';

interface AccessibilityDemoProps {
  simulationType: string;
  handleSimulation: (type: string) => void;
}

const AccessibilityDemo: React.FC<AccessibilityDemoProps> = ({ 
  simulationType, 
  handleSimulation 
}) => {
  const getSimulationButtonClass = (type: string) => {
    return simulationType === type 
      ? "bg-primary-main text-white" 
      : "bg-gray-100 text-gray-700 hover:bg-gray-200";
  };

  return (
    <div className="space-y-8">
      <ComponentCard 
        title="Simulação de Daltonismo" 
        description="Veja como as cores do sistema são percebidas por pessoas com diferentes tipos de daltonismo."
        className="overflow-hidden rounded-lg"
      >
        <div className="flex flex-wrap gap-3 mb-6">
          <Button 
            onClick={() => handleSimulation('normal')} 
            className={`${getSimulationButtonClass('normal')} rounded-md`}
          >
            {simulationType === 'normal' && <Check className="w-4 h-4 mr-2" />}
            Visão Normal
          </Button>
          <Button 
            onClick={() => handleSimulation('deuteranopia')} 
            className={`${getSimulationButtonClass('deuteranopia')} rounded-md`}
          >
            {simulationType === 'deuteranopia' && <Check className="w-4 h-4 mr-2" />}
            Deuteranopia
          </Button>
          <Button 
            onClick={() => handleSimulation('protanopia')} 
            className={`${getSimulationButtonClass('protanopia')} rounded-md`}
          >
            {simulationType === 'protanopia' && <Check className="w-4 h-4 mr-2" />}
            Protanopia
          </Button>
          <Button 
            onClick={() => handleSimulation('tritanopia')} 
            className={`${getSimulationButtonClass('tritanopia')} rounded-md`}
          >
            {simulationType === 'tritanopia' && <Check className="w-4 h-4 mr-2" />}
            Tritanopia
          </Button>
          <Button 
            onClick={() => handleSimulation('grayscale')} 
            className={`${getSimulationButtonClass('grayscale')} rounded-md`}
          >
            {simulationType === 'grayscale' && <Check className="w-4 h-4 mr-2" />}
            Escala de Cinza
          </Button>
        </div>

        <div className={`filter-${simulationType}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="rounded-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="h-32 bg-amicci-500 flex items-center justify-center">
                  <span className="text-white font-medium">Amicci-500</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="rounded-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="h-32 bg-blue-600 flex items-center justify-center">
                  <span className="text-white font-medium">Blue-600</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="rounded-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="h-32 bg-magenta-600 flex items-center justify-center">
                  <span className="text-white font-medium">Magenta-600</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="rounded-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="h-32 bg-green-600 flex items-center justify-center">
                  <span className="text-white font-medium">Green-600</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="rounded-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="h-32 bg-error-main flex items-center justify-center">
                  <span className="text-white font-medium">Error-main</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="rounded-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="h-32 bg-warning-main flex items-center justify-center">
                  <span className="text-white font-medium">Warning-main</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </ComponentCard>
      
      <ComponentCard 
        title="Recursos de Acessibilidade" 
        description="Recomendações para garantir que as cores do design system sejam acessíveis a todos os usuários."
        className="overflow-hidden rounded-lg"
      >
        <ul className="list-disc pl-5 space-y-3">
          <li>Utilize sempre combinações de cores com contraste adequado, especialmente para texto e elementos interativos.</li>
          <li>Não utilize apenas cor para transmitir informações importantes - adicione ícones, textos ou padrões.</li>
          <li>Considere o daltonismo ao criar paletas de cores para gráficos, mapas e visualizações de dados.</li>
          <li>Verifique o contraste de cores usando ferramentas como o WCAG Color Contrast Checker.</li>
          <li>Para elementos interativos importantes, busque um contraste mínimo de 4.5:1 para atender ao nível AA das diretrizes WCAG.</li>
        </ul>
      </ComponentCard>
    </div>
  );
};

export default AccessibilityDemo;
