
import React, { useState } from 'react';
import { Eye, Info, Check, AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import ColorSwatch from './ColorSwatch';

interface AccessibilityDemoProps {
  simulationType: string;
  handleSimulation: (type: string) => void;
}

// Custom toggle switch component from the reference
const Toggle = ({
  enabled,
  onChange,
  className = "",
  size = "default"
}) => {
  const sizeClasses = {
    default: "w-11 h-6",
    sm: "w-9 h-5",
    lg: "w-14 h-7"
  };
  return <button type="button" className={`${enabled ? 'bg-primary-main' : 'bg-gray-200'} relative inline-flex flex-shrink-0 ${sizeClasses[size]} border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-main ${className}`} role="switch" aria-checked={enabled} onClick={() => onChange(!enabled)}>
      <span className="sr-only">Toggle</span>
      <span aria-hidden="true" className={`${enabled ? `translate-x-${size === 'sm' ? '4' : size === 'lg' ? '7' : '5'}` : 'translate-x-0'} pointer-events-none ${size === 'sm' ? 'h-4 w-4' : size === 'lg' ? 'h-6 w-6' : 'h-5 w-5'} rounded-full bg-white shadow ring-0 transition ease-in-out duration-200`} />
    </button>;
};

const AccessibilityDemo: React.FC<AccessibilityDemoProps> = ({ 
  simulationType, 
  handleSimulation 
}) => {
  // Individual toggle states for each simulation
  const [deuteranopiaEnabled, setDeuteranopiaEnabled] = useState(simulationType === 'deuteranopia');
  const [protanopiaEnabled, setProtanopiaEnabled] = useState(simulationType === 'protanopia');
  const [tritanopiaEnabled, setTritanopiaEnabled] = useState(simulationType === 'tritanopia');
  const [achromatopsiaEnabled, setAchromatopsiaEnabled] = useState(simulationType === 'achromatopsia');

  // Update the toggle states and call the parent handler
  const handleDeuteranopiaToggle = (enabled) => {
    setDeuteranopiaEnabled(enabled);
    if (enabled) {
      handleSimulation('deuteranopia');
    } else if (simulationType === 'deuteranopia') {
      handleSimulation('');
    }
  };

  const handleProtanopiaToggle = (enabled) => {
    setProtanopiaEnabled(enabled);
    if (enabled) {
      handleSimulation('protanopia');
    } else if (simulationType === 'protanopia') {
      handleSimulation('');
    }
  };

  const handleTritanopiaToggle = (enabled) => {
    setTritanopiaEnabled(enabled);
    if (enabled) {
      handleSimulation('tritanopia');
    } else if (simulationType === 'tritanopia') {
      handleSimulation('');
    }
  };

  const handleAchromatopsiaToggle = (enabled) => {
    setAchromatopsiaEnabled(enabled);
    if (enabled) {
      handleSimulation('achromatopsia');
    } else if (simulationType === 'achromatopsia') {
      handleSimulation('');
    }
  };

  // Update the toggle states when simulationType changes
  React.useEffect(() => {
    setDeuteranopiaEnabled(simulationType === 'deuteranopia');
    setProtanopiaEnabled(simulationType === 'protanopia');
    setTritanopiaEnabled(simulationType === 'tritanopia');
    setAchromatopsiaEnabled(simulationType === 'achromatopsia');
  }, [simulationType]);

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
          <div className="border p-4 rounded-lg relative">
            <div className="absolute top-4 right-4">
              <div className="flex items-center">
                <Toggle enabled={deuteranopiaEnabled} onChange={handleDeuteranopiaToggle} size="sm" />
                <span className="ml-3 text-sm font-medium text-gray-900">Simular</span>
              </div>
            </div>
            <h4 className="font-medium mb-2">Deuteranopia</h4>
            <p className="text-sm text-gray-600 mb-3">Deficiência de percepção do verde</p>
            <div className="grid grid-cols-4 gap-2">
              <ColorSwatch color="bg-primary-main" className="h-14" simulationType={deuteranopiaEnabled ? 'deuteranopia' : ''} />
              <ColorSwatch color="bg-secondary-main" className="h-14" simulationType={deuteranopiaEnabled ? 'deuteranopia' : ''} />
              <ColorSwatch color="bg-error-main" className="h-14" simulationType={deuteranopiaEnabled ? 'deuteranopia' : ''} />
              <ColorSwatch color="bg-success-main" className="h-14" simulationType={deuteranopiaEnabled ? 'deuteranopia' : ''} />
            </div>
          </div>
          
          <div className="border p-4 rounded-lg relative">
            <div className="absolute top-4 right-4">
              <div className="flex items-center">
                <Toggle enabled={protanopiaEnabled} onChange={handleProtanopiaToggle} size="sm" />
                <span className="ml-3 text-sm font-medium text-gray-900">Simular</span>
              </div>
            </div>
            <h4 className="font-medium mb-2">Protanopia</h4>
            <p className="text-sm text-gray-600 mb-3">Deficiência de percepção do vermelho</p>
            <div className="grid grid-cols-4 gap-2">
              <ColorSwatch color="bg-primary-main" className="h-14" simulationType={protanopiaEnabled ? 'protanopia' : ''} />
              <ColorSwatch color="bg-secondary-main" className="h-14" simulationType={protanopiaEnabled ? 'protanopia' : ''} />
              <ColorSwatch color="bg-error-main" className="h-14" simulationType={protanopiaEnabled ? 'protanopia' : ''} />
              <ColorSwatch color="bg-success-main" className="h-14" simulationType={protanopiaEnabled ? 'protanopia' : ''} />
            </div>
          </div>
          
          <div className="border p-4 rounded-lg relative">
            <div className="absolute top-4 right-4">
              <div className="flex items-center">
                <Toggle enabled={tritanopiaEnabled} onChange={handleTritanopiaToggle} size="sm" />
                <span className="ml-3 text-sm font-medium text-gray-900">Simular</span>
              </div>
            </div>
            <h4 className="font-medium mb-2">Tritanopia</h4>
            <p className="text-sm text-gray-600 mb-3">Deficiência de percepção do azul</p>
            <div className="grid grid-cols-4 gap-2">
              <ColorSwatch color="bg-primary-main" className="h-14" simulationType={tritanopiaEnabled ? 'tritanopia' : ''} />
              <ColorSwatch color="bg-secondary-main" className="h-14" simulationType={tritanopiaEnabled ? 'tritanopia' : ''} />
              <ColorSwatch color="bg-error-main" className="h-14" simulationType={tritanopiaEnabled ? 'tritanopia' : ''} />
              <ColorSwatch color="bg-success-main" className="h-14" simulationType={tritanopiaEnabled ? 'tritanopia' : ''} />
            </div>
          </div>
          
          <div className="border p-4 rounded-lg relative">
            <div className="absolute top-4 right-4">
              <div className="flex items-center">
                <Toggle enabled={achromatopsiaEnabled} onChange={handleAchromatopsiaToggle} size="sm" />
                <span className="ml-3 text-sm font-medium text-gray-900">Simular</span>
              </div>
            </div>
            <h4 className="font-medium mb-2">Acromatopsia</h4>
            <p className="text-sm text-gray-600 mb-3">Ausência completa de percepção de cores</p>
            <div className="grid grid-cols-4 gap-2">
              <ColorSwatch color="bg-primary-main" className="h-14" simulationType={achromatopsiaEnabled ? 'achromatopsia' : ''} />
              <ColorSwatch color="bg-secondary-main" className="h-14" simulationType={achromatopsiaEnabled ? 'achromatopsia' : ''} />
              <ColorSwatch color="bg-error-main" className="h-14" simulationType={achromatopsiaEnabled ? 'achromatopsia' : ''} />
              <ColorSwatch color="bg-success-main" className="h-14" simulationType={achromatopsiaEnabled ? 'achromatopsia' : ''} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityDemo;
