
import React from 'react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
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
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-1">Acessibilidade de Cores</h2>
        <p className="text-gray-600 mb-6">Garantindo que nosso sistema de cores seja acessível a todos.</p>
        
        <div className="space-y-8">
          {/* Contraste Section */}
          <section>
            <h3 className="text-xl font-medium mb-4">Contraste</h3>
            <p className="mb-6">Todas as combinações de cores de texto e fundo atendem aos requisitos de contraste WCAG 2.1 AA:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center bg-blue-50 text-blue-600">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="font-medium">Texto normal</span>
                </div>
                <p className="text-sm text-gray-600">Contraste mínimo de 4.5:1</p>
                <div className="bg-teal-500 text-white text-sm p-3 rounded">
                  Exemplo de texto com contraste adequado
                </div>
              </div>
              
              <div className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center bg-blue-50 text-blue-600">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="font-medium">Texto grande (18pt ou 14pt bold)</span>
                </div>
                <p className="text-sm text-gray-600">Contraste mínimo de 3:1</p>
                <div className="bg-teal-100 text-teal-800 text-lg p-3 rounded font-medium">
                  Texto grande
                </div>
              </div>
              
              <div className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center bg-blue-50 text-blue-600">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="font-medium">Componentes de interface e gráficos</span>
                </div>
                <p className="text-sm text-gray-600">Contraste mínimo de 3:1</p>
                <Button variant="default" className="bg-teal-500 hover:bg-teal-600 text-white">
                  Botão de exemplo
                </Button>
              </div>
            </div>
          </section>
          
          {/* Não Dependa Apenas da Cor */}
          <section>
            <h3 className="text-xl font-medium mb-4">Não Dependa Apenas da Cor</h3>
            <p className="mb-6">Para garantir que as informações sejam acessíveis a pessoas com deficiência visual ou daltonismo, não usamos apenas cor para transmitir informações importantes:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-2 text-green-600">
                  <Check className="w-5 h-5" />
                  <span className="font-medium">Combinação com elementos visuais</span>
                </div>
                <p className="text-sm text-gray-600">Combinamos cores com ícones, textos e padrões</p>
                <div className="flex items-center gap-2 text-red-500 mt-3">
                  <AlertCircle className="w-5 h-5" />
                  <span>Erro no formulário</span>
                </div>
              </div>
              
              <div className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-2 text-green-600">
                  <Check className="w-5 h-5" />
                  <span className="font-medium">Alternativas textuais</span>
                </div>
                <p className="text-sm text-gray-600">Oferecemos alternativas textuais para informações baseadas em cores</p>
                <div className="flex items-center gap-2 mt-3">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span>Status: Ativo</span>
                </div>
              </div>
              
              <div className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-2 text-green-600">
                  <Check className="w-5 h-5" />
                  <span className="font-medium">Contraste suficiente</span>
                </div>
                <p className="text-sm text-gray-600">Mantemos contraste suficiente mesmo em visualizações monocromáticas</p>
                <div className="flex gap-3 mt-3">
                  <span className="border border-gray-300 px-3 py-1 rounded text-sm">Normal</span>
                  <span className="border border-gray-900 px-3 py-1 rounded text-sm">Outline</span>
                </div>
              </div>
            </div>
          </section>
          
          {/* Teste de Daltonismo */}
          <section>
            <h3 className="text-xl font-medium mb-4">Teste de Daltonismo</h3>
            <p className="mb-6">Nosso sistema de cores foi testado para os seguintes tipos de daltonismo:</p>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Deuteranopia */}
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h4 className="font-medium">Deuteranopia</h4>
                      <p className="text-sm text-gray-600">Deficiência de percepção do verde</p>
                    </div>
                    <RadioGroup 
                      value={simulationType === 'deuteranopia' ? 'deuteranopia' : ''} 
                      onValueChange={() => handleSimulation('deuteranopia')}
                      className="flex items-center gap-2"
                    >
                      <Label htmlFor="deuteranopia-sim" className="text-sm text-gray-600">Simular</Label>
                      <RadioGroupItem value="deuteranopia" id="deuteranopia-sim" />
                    </RadioGroup>
                  </div>
                  <div className={`grid grid-cols-4 gap-2 ${simulationType === 'deuteranopia' ? 'filter-deuteranopia' : ''}`}>
                    <div className="h-8 bg-teal-500 rounded"></div>
                    <div className="h-8 bg-teal-800 rounded"></div>
                    <div className="h-8 bg-red-500 rounded"></div>
                    <div className="h-8 bg-green-500 rounded"></div>
                  </div>
                </div>
                
                {/* Protanopia */}
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h4 className="font-medium">Protanopia</h4>
                      <p className="text-sm text-gray-600">Deficiência de percepção do vermelho</p>
                    </div>
                    <RadioGroup 
                      value={simulationType === 'protanopia' ? 'protanopia' : ''} 
                      onValueChange={() => handleSimulation('protanopia')}
                      className="flex items-center gap-2"
                    >
                      <Label htmlFor="protanopia-sim" className="text-sm text-gray-600">Simular</Label>
                      <RadioGroupItem value="protanopia" id="protanopia-sim" />
                    </RadioGroup>
                  </div>
                  <div className={`grid grid-cols-4 gap-2 ${simulationType === 'protanopia' ? 'filter-protanopia' : ''}`}>
                    <div className="h-8 bg-teal-500 rounded"></div>
                    <div className="h-8 bg-teal-800 rounded"></div>
                    <div className="h-8 bg-red-500 rounded"></div>
                    <div className="h-8 bg-green-500 rounded"></div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Tritanopia */}
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h4 className="font-medium">Tritanopia</h4>
                      <p className="text-sm text-gray-600">Deficiência de percepção do azul</p>
                    </div>
                    <RadioGroup 
                      value={simulationType === 'tritanopia' ? 'tritanopia' : ''} 
                      onValueChange={() => handleSimulation('tritanopia')}
                      className="flex items-center gap-2"
                    >
                      <Label htmlFor="tritanopia-sim" className="text-sm text-gray-600">Simular</Label>
                      <RadioGroupItem value="tritanopia" id="tritanopia-sim" />
                    </RadioGroup>
                  </div>
                  <div className={`grid grid-cols-4 gap-2 ${simulationType === 'tritanopia' ? 'filter-tritanopia' : ''}`}>
                    <div className="h-8 bg-teal-500 rounded"></div>
                    <div className="h-8 bg-teal-800 rounded"></div>
                    <div className="h-8 bg-red-500 rounded"></div>
                    <div className="h-8 bg-green-500 rounded"></div>
                  </div>
                </div>
                
                {/* Achromatopsia */}
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h4 className="font-medium">Acromatopsia</h4>
                      <p className="text-sm text-gray-600">Ausência completa de percepção de cores</p>
                    </div>
                    <RadioGroup 
                      value={simulationType === 'achromatopsia' ? 'achromatopsia' : ''} 
                      onValueChange={() => handleSimulation('achromatopsia')}
                      className="flex items-center gap-2"
                    >
                      <Label htmlFor="achromatopsia-sim" className="text-sm text-gray-600">Simular</Label>
                      <RadioGroupItem value="achromatopsia" id="achromatopsia-sim" />
                    </RadioGroup>
                  </div>
                  <div className={`grid grid-cols-4 gap-2 ${simulationType === 'achromatopsia' ? 'filter-grayscale' : ''}`}>
                    <div className="h-8 bg-teal-500 rounded"></div>
                    <div className="h-8 bg-teal-800 rounded"></div>
                    <div className="h-8 bg-red-500 rounded"></div>
                    <div className="h-8 bg-green-500 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityDemo;
