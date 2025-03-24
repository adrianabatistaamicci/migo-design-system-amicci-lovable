
import React, { useState } from 'react';
import { TailwindTabs } from "@/components/ui/tabs";
import ComponentCard from '@/components/ComponentCard';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";

export interface AccessibilityDemoProps {
  simulationType: string;
  handleSimulation: (type: string) => void;
}

const AccessibilityDemo: React.FC<AccessibilityDemoProps> = ({ 
  simulationType, 
  handleSimulation 
}) => {
  return (
    <div className="space-y-6">
      <ComponentCard 
        title="Acessibilidade de Cores" 
        description="Verifique como suas escolhas de cores afetam a acessibilidade para diferentes tipos de usuários."
      >
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium mb-3">Simuladores de Deficiência Visual</h3>
            <p className="text-mui-text-secondary mb-4">
              Use os simuladores abaixo para verificar como as pessoas com diferentes tipos de deficiência visual percebem suas escolhas de cores.
            </p>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <RadioGroup 
                  defaultValue={simulationType}
                  onValueChange={handleSimulation}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="normal" id="normal" />
                    <Label htmlFor="normal">Visão Normal</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="protanopia" id="protanopia" />
                    <Label htmlFor="protanopia">Protanopia (Vermelho-Verde)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="deuteranopia" id="deuteranopia" />
                    <Label htmlFor="deuteranopia">Deuteranopia (Verde-Vermelho)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="tritanopia" id="tritanopia" />
                    <Label htmlFor="tritanopia">Tritanopia (Azul-Amarelo)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="achromatopsia" id="achromatopsia" />
                    <Label htmlFor="achromatopsia">Acromatopsia (Sem Cor)</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div>
                <Card className={`w-full h-full min-h-[200px] overflow-hidden ${
                  simulationType === 'protanopia' ? 'filter-protanopia' :
                  simulationType === 'deuteranopia' ? 'filter-deuteranopia' :
                  simulationType === 'tritanopia' ? 'filter-tritanopia' :
                  simulationType === 'achromatopsia' ? 'filter-grayscale' : ''
                }`}>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex space-x-2">
                        <div className="w-8 h-8 rounded-full bg-red-500"></div>
                        <div className="w-8 h-8 rounded-full bg-green-500"></div>
                        <div className="w-8 h-8 rounded-full bg-blue-500"></div>
                        <div className="w-8 h-8 rounded-full bg-yellow-500"></div>
                      </div>
                      
                      <Separator />
                      
                      <div className="space-y-2">
                        <p className="text-green-700 bg-green-100 p-2 rounded">Texto em fundo verde claro</p>
                        <p className="text-blue-700 bg-blue-100 p-2 rounded">Texto em fundo azul claro</p>
                        <p className="text-white bg-purple-700 p-2 rounded">Texto branco em fundo roxo</p>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button variant="default">Primário</Button>
                        <Button variant="outline">Secundário</Button>
                        <Button variant="destructive">Alerta</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-xl font-medium mb-3">Diretrizes de Contraste</h3>
            <p className="text-mui-text-secondary mb-4">
              Certifique-se de que suas escolhas de cores atendam aos requisitos de contraste do WCAG para garantir a legibilidade.
            </p>
            
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Texto normal: relação de contraste mínima de 4.5:1</li>
              <li>Texto grande (18pt ou 14pt bold): relação de contraste mínima de 3:1</li>
              <li>Componentes de interface e gráficos: relação de contraste mínima de 3:1</li>
              <li>Texto ou componentes desativados: sem requisitos mínimos</li>
            </ul>
          </div>
        </div>
      </ComponentCard>
    </div>
  );
};

export default AccessibilityDemo;
