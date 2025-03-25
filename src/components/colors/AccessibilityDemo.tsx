
import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Check, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import ComponentCard from '@/components/ComponentCard';
import { colorBlindnessFilters } from '@/utils/colorUtils';

export interface AccessibilityDemoProps {
  simulationType: string;
  handleSimulation: (type: string) => void;
}

const AccessibilityDemo: React.FC<AccessibilityDemoProps> = ({ 
  simulationType, 
  handleSimulation 
}) => {
  // Apply the filter style to the elements
  const getFilterStyle = (type: string) => {
    if (simulationType === type) {
      return { filter: colorBlindnessFilters[type as keyof typeof colorBlindnessFilters] };
    }
    return {};
  };

  return (
    <div className="space-y-8">
      <ComponentCard
        title="Acessibilidade de Cores"
        description="Garantindo que nosso sistema de cores seja acessível a todos"
      >
        <div className="space-y-8">
          {/* Contraste Section */}
          <section>
            <h3 className="text-xl font-medium mb-4">Contraste</h3>
            <p className="mb-6">Todas as combinações de cores de texto e fundo atendem aos requisitos de contraste WCAG 2.1 AA:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center bg-primary-light text-primary-main">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="font-medium">Texto normal</span>
                </div>
                <p className="text-sm text-text-primary">Contraste mínimo de 4.5:1</p>
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
                <p className="text-sm text-text-primary">Contraste mínimo de 3:1</p>
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
                <p className="text-sm text-text-primary">Contraste mínimo de 3:1</p>
                <Button variant="default" className="bg-primary-main hover:bg-primary-dark text-white">
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
                <div className="flex items-center gap-2 text-primary-main">
                  <Check className="w-5 h-5" />
                  <span className="font-medium">Combinação com elementos visuais</span>
                </div>
                <p className="text-sm text-text-primary">Combinamos cores com ícones, textos e padrões</p>
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
                <p className="text-sm text-text-primary">Oferecemos alternativas textuais para informações baseadas em cores</p>
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
                <p className="text-sm text-text-primary">Mantemos contraste suficiente mesmo em visualizações monocromáticas</p>
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
            <p className="mb-6">Nosso sistema de cores foi testado para os seguintes tipos de daltonismo:</p>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Deuteranopia */}
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h4 className="text-base font-medium text-text-primary">Deuteranopia</h4>
                      <p className="text-sm font-normal text-text-secondary">Deficiência de percepção do verde</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="ml-3 text-sm font-medium text-gray-900">Simular</span>
                      <Switch
                        id="deuteranopia-sim"
                        checked={simulationType === 'deuteranopia'}
                        onCheckedChange={() => handleSimulation('deuteranopia')}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-2" style={getFilterStyle('deuteranopia')}>
                    <div className="h-8 bg-primary-main rounded"></div>
                    <div className="h-8 bg-primary-dark rounded"></div>
                    <div className="h-8 bg-error-main rounded"></div>
                    <div className="h-8 bg-success-main rounded"></div>
                  </div>
                </div>
                
                {/* Protanopia */}
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h4 className="text-base font-medium text-text-primary">Protanopia</h4>
                      <p className="text-sm font-normal text-text-secondary">Deficiência de percepção do vermelho</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="ml-3 text-sm font-medium text-gray-900">Simular</span>
                      <Switch
                        id="protanopia-sim"
                        checked={simulationType === 'protanopia'}
                        onCheckedChange={() => handleSimulation('protanopia')}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-2" style={getFilterStyle('protanopia')}>
                    <div className="h-8 bg-primary-main rounded"></div>
                    <div className="h-8 bg-primary-dark rounded"></div>
                    <div className="h-8 bg-error-main rounded"></div>
                    <div className="h-8 bg-success-main rounded"></div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Tritanopia */}
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h4 className="text-base font-medium text-text-primary">Tritanopia</h4>
                      <p className="text-sm font-normal text-text-secondary">Deficiência de percepção do azul</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="ml-3 text-sm font-medium text-gray-900">Simular</span>
                      <Switch
                        id="tritanopia-sim"
                        checked={simulationType === 'tritanopia'}
                        onCheckedChange={() => handleSimulation('tritanopia')}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-2" style={getFilterStyle('tritanopia')}>
                    <div className="h-8 bg-primary-main rounded"></div>
                    <div className="h-8 bg-primary-dark rounded"></div>
                    <div className="h-8 bg-error-main rounded"></div>
                    <div className="h-8 bg-success-main rounded"></div>
                  </div>
                </div>
                
                {/* Achromatopsia */}
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h4 className="text-base font-medium text-text-primary">Acromatopsia</h4>
                      <p className="text-sm font-normal text-text-secondary">Ausência completa de percepção de cores</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="ml-3 text-sm font-medium text-gray-900">Simular</span>
                      <Switch
                        id="achromatopsia-sim"
                        checked={simulationType === 'achromatopsia'}
                        onCheckedChange={() => handleSimulation('achromatopsia')}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-2" style={getFilterStyle('achromatopsia')}>
                    <div className="h-8 bg-primary-main rounded"></div>
                    <div className="h-8 bg-primary-dark rounded"></div>
                    <div className="h-8 bg-error-main rounded"></div>
                    <div className="h-8 bg-success-main rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </ComponentCard>
    </div>
  );
};

export default AccessibilityDemo;
