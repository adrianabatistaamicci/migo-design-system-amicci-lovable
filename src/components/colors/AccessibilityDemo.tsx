
import React from 'react';
import { Toggle } from '@/components/ui/toggle';
import { Card, CardContent } from '@/components/ui/card';
import { baseColorsData } from '@/data/colorsData';

interface AccessibilityDemoProps {
  simulationType: string;
  handleSimulation: (type: string) => void;
}

const AccessibilityDemo = ({ simulationType, handleSimulation }: AccessibilityDemoProps) => {
  const getFilterClass = (type: string) => {
    switch (type) {
      case 'deuteranopia':
        return 'filter-deuteranopia';
      case 'protanopia':
        return 'filter-protanopia';
      case 'tritanopia':
        return 'filter-tritanopia';
      case 'achromatopsia':
        return 'filter-grayscale';
      default:
        return '';
    }
  };

  // Display the Amicci color palette for testing
  const amicciColors = baseColorsData[0].weights;

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-medium">Simuladores de Deficiência Visual</h2>
        <p className="text-gray-700">
          Use estes simuladores para testar como suas interfaces são vistas por pessoas com diferentes tipos de daltonismo.
          Isto ajuda a garantir que suas interfaces sejam acessíveis para todos os usuários.
        </p>
      </div>
      
      <div className="flex flex-wrap gap-3 mb-8">
        <Toggle 
          pressed={simulationType === 'deuteranopia'} 
          onPressedChange={() => handleSimulation('deuteranopia')}
        >
          Deuteranopia
        </Toggle>
        <Toggle 
          pressed={simulationType === 'protanopia'} 
          onPressedChange={() => handleSimulation('protanopia')}
        >
          Protanopia
        </Toggle>
        <Toggle 
          pressed={simulationType === 'tritanopia'} 
          onPressedChange={() => handleSimulation('tritanopia')}
        >
          Tritanopia
        </Toggle>
        <Toggle 
          pressed={simulationType === 'achromatopsia'} 
          onPressedChange={() => handleSimulation('achromatopsia')}
        >
          Achromatopsia
        </Toggle>
      </div>
      
      <Card className={getFilterClass(simulationType)}>
        <CardContent className="pt-6">
          <h3 className="text-lg font-medium mb-4">Visualização da Paleta com Filtro: {simulationType === 'normal' ? 'Sem filtro' : simulationType}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-6">
              <h4 className="font-medium">Cores Base</h4>
              <div className="flex flex-wrap gap-2">
                {amicciColors.map((color) => (
                  <div 
                    key={color.weight} 
                    className={`w-12 h-12 rounded-md ${color.colorClass}`} 
                    title={`${color.hexValue} (amicci-${color.weight})`}
                  />
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-medium">Exemplo de Interface</h4>
              <div className="p-4 border rounded-md bg-white">
                <div className="space-y-4">
                  <div className="w-full h-6 bg-amicci-500 rounded-md"></div>
                  <div className="w-2/3 h-4 bg-gray-300 rounded-md"></div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-amicci-600 text-white rounded-md text-sm">Primário</button>
                    <button className="px-4 py-2 bg-white border border-amicci-600 text-amicci-600 rounded-md text-sm">Secundário</button>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-4 h-4 rounded-full bg-green-500"></div>
                    <div className="w-4 h-4 rounded-full bg-red-500"></div>
                    <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                    <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-100">
        <h3 className="text-lg font-medium mb-2">Recomendações de Acessibilidade</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Use sempre um contraste adequado entre texto e fundo (mínimo 4.5:1 para texto padrão).</li>
          <li>Não use apenas cor para transmitir informações importantes - adicione texto, ícones ou padrões.</li>
          <li>Teste suas interfaces com ferramentas de verificação de contraste e simuladores de daltonismo.</li>
          <li>Siga as diretrizes WCAG 2.1 nível AA para garantir que sua interface seja acessível.</li>
        </ul>
      </div>
    </div>
  );
};

export default AccessibilityDemo;
