
import React from 'react';
import { Check, AlertCircle, CircleInfo } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { colorBlindnessFilters } from '@/utils/colorUtils';
import ColorSwatch from '@/components/colors/ColorSwatch';
import { cn } from '@/lib/utils';

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
      <div className="space-y-3">
        <div className="border-b pb-3">
          <h2 className="text-xl font-medium">Acessibilidade de Cores</h2>
          <p className="text-gray-600 mt-1">Garantindo que nosso sistema de cores seja acessível a todos.</p>
        </div>
        
        {/* Contraste Section */}
        <section className="pt-4">
          <h3 className="text-lg font-medium mb-4">Contraste</h3>
          <p className="mb-6">Todas as combinações de cores de texto e fundo atendem aos requisitos de contraste WCAG 2.1 AA:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full flex items-center justify-center bg-blue-100 text-blue-600">
                  <CircleInfo className="w-4 h-4" />
                </div>
                <span className="font-medium">Texto normal</span>
              </div>
              <p className="text-sm text-gray-600">Contraste mínimo de 4.5:1</p>
              <div className="bg-primary-main text-white text-sm p-3 rounded">
                Exemplo de texto com contraste adequado
              </div>
            </div>
            
            <div className="border rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full flex items-center justify-center bg-blue-100 text-blue-600">
                  <CircleInfo className="w-4 h-4" />
                </div>
                <span className="font-medium">Texto grande (18pt ou 14pt bold)</span>
              </div>
              <p className="text-sm text-gray-600">Contraste mínimo de 3:1</p>
              <div className="bg-amicci-100 text-amicci-600 text-lg p-3 rounded font-medium">
                Texto grande
              </div>
            </div>
            
            <div className="border rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full flex items-center justify-center bg-blue-100 text-blue-600">
                  <CircleInfo className="w-4 h-4" />
                </div>
                <span className="font-medium">Componentes de interface e gráficos</span>
              </div>
              <p className="text-sm text-gray-600">Contraste mínimo de 3:1</p>
              <Button className="bg-primary-main hover:bg-primary-dark text-white">
                Botão de exemplo
              </Button>
            </div>
          </div>
        </section>
        
        {/* Não Dependa Apenas da Cor */}
        <section className="pt-6">
          <h3 className="text-lg font-medium mb-4">Não Dependa Apenas da Cor</h3>
          <p className="mb-6">Para garantir que as informações sejam acessíveis a pessoas com deficiência visual ou daltonismo, não usamos apenas cor para transmitir informações importantes:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-2 text-green-500">
                <Check className="w-5 h-5" />
                <span className="font-medium">Combinação com elementos visuais</span>
              </div>
              <p className="text-sm text-gray-600">Combinamos cores com ícones, textos e padrões</p>
              <div className="flex items-center gap-2 text-error-main mt-3">
                <AlertCircle className="w-5 h-5" />
                <span>Erro no formulário</span>
              </div>
            </div>
            
            <div className="border rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-2 text-green-500">
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
              <div className="flex items-center gap-2 text-green-500">
                <Check className="w-5 h-5" />
                <span className="font-medium">Contraste suficiente</span>
              </div>
              <p className="text-sm text-gray-600">Mantemos contraste suficiente mesmo em visualizações monocromáticas</p>
              <div className="flex gap-3 mt-3">
                <span className="px-3 py-1 border border-gray-400 rounded text-sm">Normal</span>
                <span className="px-3 py-1 border border-gray-400 rounded text-sm">Outline</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Teste de Daltonismo */}
        <section className="pt-6">
          <h3 className="text-lg font-medium mb-4">Teste de Daltonismo</h3>
          <p className="mb-6">Nosso sistema de cores foi testado para os seguintes tipos de daltonismo:</p>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Deuteranopia */}
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h4 className="font-medium text-base text-gray-900">Deuteranopia</h4>
                    <p className="text-sm text-gray-500">Deficiência de percepção do verde</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-900">Simular</span>
                    <Switch
                      checked={simulationType === 'deuteranopia'}
                      onCheckedChange={() => handleSimulation(simulationType === 'deuteranopia' ? 'normal' : 'deuteranopia')}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2" style={{
                  filter: simulationType === 'deuteranopia' ? colorBlindnessFilters.deuteranopia : ''
                }}>
                  <ColorSwatch color="bg-primary-main" className="h-12" disableCopy={true} />
                  <ColorSwatch color="bg-secondary-main" className="h-12" disableCopy={true} />
                  <ColorSwatch color="bg-error-main" className="h-12" disableCopy={true} />
                  <ColorSwatch color="bg-success-main" className="h-12" disableCopy={true} />
                </div>
              </div>
              
              {/* Protanopia */}
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h4 className="font-medium text-base text-gray-900">Protanopia</h4>
                    <p className="text-sm text-gray-500">Deficiência de percepção do vermelho</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-900">Simular</span>
                    <Switch
                      checked={simulationType === 'protanopia'}
                      onCheckedChange={() => handleSimulation(simulationType === 'protanopia' ? 'normal' : 'protanopia')}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2" style={{
                  filter: simulationType === 'protanopia' ? colorBlindnessFilters.protanopia : ''
                }}>
                  <ColorSwatch color="bg-primary-main" className="h-12" disableCopy={true} />
                  <ColorSwatch color="bg-secondary-main" className="h-12" disableCopy={true} />
                  <ColorSwatch color="bg-error-main" className="h-12" disableCopy={true} />
                  <ColorSwatch color="bg-success-main" className="h-12" disableCopy={true} />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Tritanopia */}
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h4 className="font-medium text-base text-gray-900">Tritanopia</h4>
                    <p className="text-sm text-gray-500">Deficiência de percepção do azul</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-900">Simular</span>
                    <Switch
                      checked={simulationType === 'tritanopia'}
                      onCheckedChange={() => handleSimulation(simulationType === 'tritanopia' ? 'normal' : 'tritanopia')}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2" style={{
                  filter: simulationType === 'tritanopia' ? colorBlindnessFilters.tritanopia : ''
                }}>
                  <ColorSwatch color="bg-primary-main" className="h-12" disableCopy={true} />
                  <ColorSwatch color="bg-secondary-main" className="h-12" disableCopy={true} />
                  <ColorSwatch color="bg-error-main" className="h-12" disableCopy={true} />
                  <ColorSwatch color="bg-success-main" className="h-12" disableCopy={true} />
                </div>
              </div>
              
              {/* Achromatopsia */}
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h4 className="font-medium text-base text-gray-900">Acromatopsia</h4>
                    <p className="text-sm text-gray-500">Ausência completa de percepção de cores</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-900">Simular</span>
                    <Switch
                      checked={simulationType === 'achromatopsia'}
                      onCheckedChange={() => handleSimulation(simulationType === 'achromatopsia' ? 'normal' : 'achromatopsia')}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2" style={{
                  filter: simulationType === 'achromatopsia' ? colorBlindnessFilters.achromatopsia : ''
                }}>
                  <ColorSwatch color="bg-primary-main" className="h-12" disableCopy={true} />
                  <ColorSwatch color="bg-secondary-main" className="h-12" disableCopy={true} />
                  <ColorSwatch color="bg-error-main" className="h-12" disableCopy={true} />
                  <ColorSwatch color="bg-success-main" className="h-12" disableCopy={true} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AccessibilityDemo;
