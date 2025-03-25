
import React from 'react';
import { Check, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface AccessibilityDemoProps {
  simulationType: string;
  handleSimulation: (type: string) => void;
}

const AccessibilityDemo: React.FC<AccessibilityDemoProps> = ({
  simulationType,
  handleSimulation
}) => {
  // Custom toggle switch component as specified by the user
  const Toggle = ({ enabled, onChange }) => {
    return (
      <button 
        type="button" 
        className={`${enabled ? 'bg-primary-main' : 'bg-gray-200'} relative inline-flex flex-shrink-0 w-11 h-6 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-main`} 
        role="switch" 
        aria-checked={enabled} 
        onClick={() => onChange(!enabled)}
      >
        <span className="sr-only">Toggle</span>
        <span 
          aria-hidden="true" 
          className={`${enabled ? 'translate-x-5' : 'translate-x-0'} pointer-events-none h-5 w-5 rounded-full bg-white shadow ring-0 transition ease-in-out duration-200`} 
        />
      </button>
    );
  };
  
  return <div className="space-y-8">
      <div>
        <div className="space-y-8">
          {/* Contraste Section */}
          <section>
            <h3 className="text-xl font-medium mb-4">Contraste</h3>
            <p className="mb-6 text-secondary-main">Todas as combinações de cores de texto e fundo atendem aos requisitos de contraste WCAG 2.1 AA:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center bg-primary-light text-primary-main">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="font-medium">Texto normal</span>
                </div>
                <p className="text-sm text-secondary-main">Contraste mínimo de 4.5:1</p>
                <div className="bg-primary-main text-white text-sm p-3 rounded">
                  Exemplo de texto com contraste adequado
                </div>
              </div>
              
              <div className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center bg-primary-light text-primary-main">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="font-medium">Texto grande (18pt ou 14pt bold)</span>
                </div>
                <p className="text-sm text-secondary-main">Contraste mínimo de 3:1</p>
                <div className="bg-primary-light text-primary-dark text-lg p-3 rounded font-medium">
                  Texto grande
                </div>
              </div>
              
              <div className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center bg-primary-light text-primary-main">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="font-medium">Componentes de interface e gráficos</span>
                </div>
                <p className="text-sm text-secondary-main">Contraste mínimo de 3:1</p>
                <Button variant="default" className="bg-primary-main hover:bg-primary-dark text-white">
                  Botão de exemplo
                </Button>
              </div>
            </div>
          </section>
          
          {/* Não Dependa Apenas da Cor */}
          <section>
            <h3 className="text-xl font-medium mb-4">Não Dependa Apenas da Cor</h3>
            <p className="mb-6 text-secondary-main">Para garantir que as informações sejam acessíveis a pessoas com deficiência visual ou daltonismo, não usamos apenas cor para transmitir informações importantes:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-2 text-primary-main">
                  <Check className="w-5 h-5" />
                  <span className="font-medium">Combinação com elementos visuais</span>
                </div>
                <p className="text-sm text-secondary-main">Combinamos cores com ícones, textos e padrões</p>
                <div className="flex items-center gap-2 text-error-main mt-3">
                  <AlertCircle className="w-5 h-5" />
                  <span>Erro no formulário</span>
                </div>
              </div>
              
              <div className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-2 text-primary-main">
                  <Check className="w-5 h-5" />
                  <span className="font-medium">Alternativas textuais</span>
                </div>
                <p className="text-sm text-secondary-main">Oferecemos alternativas textuais para informações baseadas em cores</p>
                <div className="flex items-center gap-2 mt-3">
                  <div className="w-3 h-3 rounded-full bg-primary-main"></div>
                  <span>Status: Ativo</span>
                </div>
              </div>
              
              <div className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-2 text-primary-main">
                  <Check className="w-5 h-5" />
                  <span className="font-medium">Contraste suficiente</span>
                </div>
                <p className="text-sm text-secondary-main">Mantemos contraste suficiente mesmo em visualizações monocromáticas</p>
                <div className="flex gap-3 mt-3">
                  <span className="border border-primary-main px-3 py-1 rounded text-sm">Normal</span>
                  <span className="border border-primary-dark px-3 py-1 rounded text-sm">Outline</span>
                </div>
              </div>
            </div>
          </section>
          
          {/* Teste de Daltonismo */}
          <section>
            <h3 className="text-xl font-medium mb-4">Teste de Daltonismo</h3>
            <p className="mb-6 text-secondary-main">Nosso sistema de cores foi testado para os seguintes tipos de daltonismo:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Deuteranopia */}
              <div className="border rounded-lg p-4 overflow-hidden">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h4 className="font-medium">Deuteranopia</h4>
                    <p className="text-sm text-secondary-main">Deficiência de percepção do verde</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-secondary-main">Simular</span>
                    <Toggle 
                      enabled={simulationType === 'deuteranopia'} 
                      onChange={() => handleSimulation(simulationType === 'deuteranopia' ? 'normal' : 'deuteranopia')}
                    />
                  </div>
                </div>
                <div className={simulationType === 'deuteranopia' ? 'filter-deuteranopia' : ''}>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="h-12 bg-primary-main rounded"></div>
                    <div className="h-12 bg-primary-dark rounded"></div>
                    <div className="h-12 bg-error-main rounded"></div>
                    <div className="h-12 bg-success-main rounded"></div>
                  </div>
                </div>
              </div>
              
              {/* Protanopia */}
              <div className="border rounded-lg p-4 overflow-hidden">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h4 className="font-medium">Protanopia</h4>
                    <p className="text-sm text-secondary-main">Deficiência de percepção do vermelho</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-secondary-main">Simular</span>
                    <Toggle 
                      enabled={simulationType === 'protanopia'}
                      onChange={() => handleSimulation(simulationType === 'protanopia' ? 'normal' : 'protanopia')}
                    />
                  </div>
                </div>
                <div className={simulationType === 'protanopia' ? 'filter-protanopia' : ''}>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="h-12 bg-primary-main rounded"></div>
                    <div className="h-12 bg-primary-dark rounded"></div>
                    <div className="h-12 bg-error-main rounded"></div>
                    <div className="h-12 bg-success-main rounded"></div>
                  </div>
                </div>
              </div>
              
              {/* Tritanopia */}
              <div className="border rounded-lg p-4 overflow-hidden">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h4 className="font-medium">Tritanopia</h4>
                    <p className="text-sm text-secondary-main">Deficiência de percepção do azul</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-secondary-main">Simular</span>
                    <Toggle 
                      enabled={simulationType === 'tritanopia'}
                      onChange={() => handleSimulation(simulationType === 'tritanopia' ? 'normal' : 'tritanopia')}
                    />
                  </div>
                </div>
                <div className={simulationType === 'tritanopia' ? 'filter-tritanopia' : ''}>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="h-12 bg-primary-main rounded"></div>
                    <div className="h-12 bg-primary-dark rounded"></div>
                    <div className="h-12 bg-error-main rounded"></div>
                    <div className="h-12 bg-success-main rounded"></div>
                  </div>
                </div>
              </div>
              
              {/* Achromatopsia */}
              <div className="border rounded-lg p-4 overflow-hidden">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h4 className="font-medium">Acromatopsia</h4>
                    <p className="text-sm text-secondary-main">Ausência completa de percepção de cores</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-secondary-main">Simular</span>
                    <Toggle 
                      enabled={simulationType === 'achromatopsia'}
                      onChange={() => handleSimulation(simulationType === 'achromatopsia' ? 'normal' : 'achromatopsia')}
                    />
                  </div>
                </div>
                <div className={simulationType === 'achromatopsia' ? 'filter-grayscale' : ''}>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="h-12 bg-primary-main rounded"></div>
                    <div className="h-12 bg-primary-dark rounded"></div>
                    <div className="h-12 bg-error-main rounded"></div>
                    <div className="h-12 bg-success-main rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>;
};

export default AccessibilityDemo;
