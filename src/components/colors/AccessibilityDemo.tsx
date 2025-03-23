
import React from 'react';
import { Eye, Info, Check, AlertCircle } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import ColorSwatch from './ColorSwatch';

interface AccessibilityDemoProps {
  simulationType: string;
  handleSimulation: (type: string) => void;
}

const AccessibilityDemo: React.FC<AccessibilityDemoProps> = ({ 
  simulationType, 
  handleSimulation 
}) => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-3">Contraste</h3>
        <p className="text-gray-600 mb-4">
          Todas as combinações de cores de texto e fundo atendem aos requisitos de contraste WCAG 2.1 AA:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="border p-4 rounded-lg space-y-2">
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-info-main" />
              <h4 className="font-medium">Texto normal</h4>
            </div>
            <p className="text-sm text-gray-600">Contraste mínimo de 4.5:1</p>
            <div className="p-3 bg-primary-main rounded">
              <p className="text-white text-sm">Exemplo de texto com contraste adequado</p>
            </div>
          </div>
          
          <div className="border p-4 rounded-lg space-y-2">
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-info-main" />
              <h4 className="font-medium">Texto grande (18pt ou 14pt bold)</h4>
            </div>
            <p className="text-sm text-gray-600">Contraste mínimo de 3:1</p>
            <div className="p-3 bg-amicci-300 rounded">
              <p className="text-gray-800 text-xl font-bold">Texto grande</p>
            </div>
          </div>
          
          <div className="border p-4 rounded-lg space-y-2">
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-info-main" />
              <h4 className="font-medium">Componentes de interface e gráficos</h4>
            </div>
            <p className="text-sm text-gray-600">Contraste mínimo de 3:1</p>
            <div className="p-3 rounded flex justify-center">
              <Button>Botão de exemplo</Button>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-3">Não Dependa Apenas da Cor</h3>
        <p className="text-gray-600 mb-4">
          Para garantir que as informações sejam acessíveis a pessoas com deficiência visual ou daltonismo, 
          não usamos apenas cor para transmitir informações importantes:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="border p-4 rounded-lg space-y-2">
            <div className="flex items-center gap-2 text-primary-main">
              <Check className="h-5 w-5" />
              <h4 className="font-medium">Combinação com elementos visuais</h4>
            </div>
            <p className="text-sm text-gray-600">Combinamos cores com ícones, textos e padrões</p>
            <div className="p-3 bg-gray-100 rounded flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-error-main" />
              <span className="text-error-main">Erro no formulário</span>
            </div>
          </div>
          
          <div className="border p-4 rounded-lg space-y-2">
            <div className="flex items-center gap-2 text-primary-main">
              <Check className="h-5 w-5" />
              <h4 className="font-medium">Alternativas textuais</h4>
            </div>
            <p className="text-sm text-gray-600">Oferecemos alternativas textuais para informações baseadas em cores</p>
            <div className="p-3 bg-gray-100 rounded">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-success-main"></div>
                <span>Status: Ativo</span>
              </div>
            </div>
          </div>
          
          <div className="border p-4 rounded-lg space-y-2">
            <div className="flex items-center gap-2 text-primary-main">
              <Check className="h-5 w-5" />
              <h4 className="font-medium">Contraste suficiente</h4>
            </div>
            <p className="text-sm text-gray-600">Mantemos contraste suficiente mesmo em visualizações monocromáticas</p>
            <div className="p-3 bg-gray-100 rounded flex gap-2">
              <Badge>Normal</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-3">Teste de Daltonismo</h3>
        <p className="text-gray-600 mb-4">
          Nosso sistema de cores foi testado para os seguintes tipos de daltonismo:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="border p-4 rounded-lg">
            <h4 className="font-medium mb-2">Deuteranopia</h4>
            <p className="text-sm text-gray-600 mb-3">Deficiência de percepção do verde</p>
            <div className="grid grid-cols-4 gap-2">
              <ColorSwatch color="bg-primary-main" className="h-14" simulationType={simulationType === 'deuteranopia' ? 'deuteranopia' : ''} />
              <ColorSwatch color="bg-secondary-main" className="h-14" simulationType={simulationType === 'deuteranopia' ? 'deuteranopia' : ''} />
              <ColorSwatch color="bg-error-main" className="h-14" simulationType={simulationType === 'deuteranopia' ? 'deuteranopia' : ''} />
              <ColorSwatch color="bg-success-main" className="h-14" simulationType={simulationType === 'deuteranopia' ? 'deuteranopia' : ''} />
            </div>
            <div className="flex justify-end mt-2">
              <Toggle 
                pressed={simulationType === 'deuteranopia'} 
                onPressedChange={() => handleSimulation('deuteranopia')} 
                aria-label="Simular Deuteranopia" 
                className="gap-2"
              >
                <Eye className="h-4 w-4" />
                <span className="text-xs">Simular Deuteranopia</span>
              </Toggle>
            </div>
          </div>
          
          <div className="border p-4 rounded-lg">
            <h4 className="font-medium mb-2">Protanopia</h4>
            <p className="text-sm text-gray-600 mb-3">Deficiência de percepção do vermelho</p>
            <div className="grid grid-cols-4 gap-2">
              <ColorSwatch color="bg-primary-main" className="h-14" simulationType={simulationType === 'protanopia' ? 'protanopia' : ''} />
              <ColorSwatch color="bg-secondary-main" className="h-14" simulationType={simulationType === 'protanopia' ? 'protanopia' : ''} />
              <ColorSwatch color="bg-error-main" className="h-14" simulationType={simulationType === 'protanopia' ? 'protanopia' : ''} />
              <ColorSwatch color="bg-success-main" className="h-14" simulationType={simulationType === 'protanopia' ? 'protanopia' : ''} />
            </div>
            <div className="flex justify-end mt-2">
              <Toggle 
                pressed={simulationType === 'protanopia'} 
                onPressedChange={() => handleSimulation('protanopia')} 
                aria-label="Simular Protanopia" 
                className="gap-2"
              >
                <Eye className="h-4 w-4" />
                <span className="text-xs">Simular Protanopia</span>
              </Toggle>
            </div>
          </div>
          
          <div className="border p-4 rounded-lg">
            <h4 className="font-medium mb-2">Tritanopia</h4>
            <p className="text-sm text-gray-600 mb-3">Deficiência de percepção do azul</p>
            <div className="grid grid-cols-4 gap-2">
              <ColorSwatch color="bg-primary-main" className="h-14" simulationType={simulationType === 'tritanopia' ? 'tritanopia' : ''} />
              <ColorSwatch color="bg-secondary-main" className="h-14" simulationType={simulationType === 'tritanopia' ? 'tritanopia' : ''} />
              <ColorSwatch color="bg-error-main" className="h-14" simulationType={simulationType === 'tritanopia' ? 'tritanopia' : ''} />
              <ColorSwatch color="bg-success-main" className="h-14" simulationType={simulationType === 'tritanopia' ? 'tritanopia' : ''} />
            </div>
            <div className="flex justify-end mt-2">
              <Toggle 
                pressed={simulationType === 'tritanopia'} 
                onPressedChange={() => handleSimulation('tritanopia')} 
                aria-label="Simular Tritanopia" 
                className="gap-2"
              >
                <Eye className="h-4 w-4" />
                <span className="text-xs">Simular Tritanopia</span>
              </Toggle>
            </div>
          </div>
          
          <div className="border p-4 rounded-lg">
            <h4 className="font-medium mb-2">Acromatopsia</h4>
            <p className="text-sm text-gray-600 mb-3">Ausência completa de percepção de cores</p>
            <div className="grid grid-cols-4 gap-2">
              <ColorSwatch color="bg-primary-main" className="h-14" simulationType={simulationType === 'achromatopsia' ? 'achromatopsia' : ''} />
              <ColorSwatch color="bg-secondary-main" className="h-14" simulationType={simulationType === 'achromatopsia' ? 'achromatopsia' : ''} />
              <ColorSwatch color="bg-error-main" className="h-14" simulationType={simulationType === 'achromatopsia' ? 'achromatopsia' : ''} />
              <ColorSwatch color="bg-success-main" className="h-14" simulationType={simulationType === 'achromatopsia' ? 'achromatopsia' : ''} />
            </div>
            <div className="flex justify-end mt-2">
              <Toggle 
                pressed={simulationType === 'achromatopsia'} 
                onPressedChange={() => handleSimulation('achromatopsia')} 
                aria-label="Simular Acromatopsia" 
                className="gap-2"
              >
                <Eye className="h-4 w-4" />
                <span className="text-xs">Simular Acromatopsia</span>
              </Toggle>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityDemo;
