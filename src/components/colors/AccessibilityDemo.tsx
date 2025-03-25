import React from 'react';
import { Label } from "@/components/ui/label";
import { Check, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
export interface AccessibilityDemoProps {
  simulationType: string;
  handleSimulation: (type: string) => void;
}
const AccessibilityDemo: React.FC<AccessibilityDemoProps> = ({
  simulationType,
  handleSimulation
}) => {
  return <div className="space-y-8">
      <div>
        
        
        
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
                <p className="text-sm text-primary-main">Contraste mínimo de 4.5:1</p>
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
                <p className="text-sm text-primary-main">Contraste mínimo de 3:1</p>
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
                <p className="text-sm text-primary-main">Contraste mínimo de 3:1</p>
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
                <p className="text-sm text-primary-main">Combinamos cores com ícones, textos e padrões</p>
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
                <p className="text-sm text-primary-main">Oferecemos alternativas textuais para informações baseadas em cores</p>
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
                <p className="text-sm text-primary-main">Mantemos contraste suficiente mesmo em visualizações monocromáticas</p>
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
                      <h4 className="font-medium">Deuteranopia</h4>
                      <p className="text-sm text-primary-main">Deficiência de percepção do verde</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Label htmlFor="deuteranopia-sim" className="text-sm text-primary-main">Simular</Label>
                      <Toggle id="deuteranopia-sim" variant="primary" size="sm" pressed={simulationType === 'deuteranopia'} onPressedChange={() => handleSimulation(simulationType === 'deuteranopia' ? 'normal' : 'deuteranopia')} />
                    </div>
                  </div>
                  <div className={`grid grid-cols-4 gap-2 ${simulationType === 'deuteranopia' ? 'filter-deuteranopia' : ''}`}>
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
                      <h4 className="font-medium">Protanopia</h4>
                      <p className="text-sm text-primary-main">Deficiência de percepção do vermelho</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Label htmlFor="protanopia-sim" className="text-sm text-primary-main">Simular</Label>
                      <Toggle id="protanopia-sim" variant="primary" size="sm" pressed={simulationType === 'protanopia'} onPressedChange={() => handleSimulation(simulationType === 'protanopia' ? 'normal' : 'protanopia')} />
                    </div>
                  </div>
                  <div className={`grid grid-cols-4 gap-2 ${simulationType === 'protanopia' ? 'filter-protanopia' : ''}`}>
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
                      <h4 className="font-medium">Tritanopia</h4>
                      <p className="text-sm text-primary-main">Deficiência de percepção do azul</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Label htmlFor="tritanopia-sim" className="text-sm text-primary-main">Simular</Label>
                      <Toggle id="tritanopia-sim" variant="primary" size="sm" pressed={simulationType === 'tritanopia'} onPressedChange={() => handleSimulation(simulationType === 'tritanopia' ? 'normal' : 'tritanopia')} />
                    </div>
                  </div>
                  <div className={`grid grid-cols-4 gap-2 ${simulationType === 'tritanopia' ? 'filter-tritanopia' : ''}`}>
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
                      <h4 className="font-medium">Acromatopsia</h4>
                      <p className="text-sm text-primary-main">Ausência completa de percepção de cores</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Label htmlFor="achromatopsia-sim" className="text-sm text-primary-main">Simular</Label>
                      <Toggle id="achromatopsia-sim" variant="primary" size="sm" pressed={simulationType === 'achromatopsia'} onPressedChange={() => handleSimulation(simulationType === 'achromatopsia' ? 'normal' : 'achromatopsia')} />
                    </div>
                  </div>
                  <div className={`grid grid-cols-4 gap-2 ${simulationType === 'achromatopsia' ? 'filter-grayscale' : ''}`}>
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
      </div>
    </div>;
};
export default AccessibilityDemo;