
import React, { useState } from 'react';
import { TailwindTabs } from "@/components/ui/tabs";
import Header from '@/components/library-components/Header';
import ComponentCard from '@/components/ComponentCard';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import ColorSwatch from '@/components/colors/ColorSwatch';
import { colorUtils } from '@/utils/colorUtils';
import BaseColorsTable from '@/components/colors/BaseColorsTable';
import PaletteTable from '@/components/colors/PaletteTable';

const Colors = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [simulationType, setSimulationType] = useState('normal');

  const baseColors = [
    {
      name: 'Amicci',
      weights: [
        { weight: '50', colorClass: 'bg-amicci-50', hexValue: '#F1FDFC' },
        { weight: '100', colorClass: 'bg-amicci-100', hexValue: '#E3FAF9' },
        { weight: '200', colorClass: 'bg-amicci-200', hexValue: '#C7F5F3' },
        { weight: '300', colorClass: 'bg-amicci-300', hexValue: '#93EDEA' },
        { weight: '400', colorClass: 'bg-amicci-400', hexValue: '#51DEDA' },
        { weight: '500', colorClass: 'bg-amicci-500', hexValue: '#10C2C0' },
        { weight: '600', colorClass: 'bg-amicci-600', hexValue: '#0EA3A1' },
        { weight: '700', colorClass: 'bg-amicci-700', hexValue: '#0C8584' },
        { weight: '800', colorClass: 'bg-amicci-800', hexValue: '#096A6A' },
        { weight: '900', colorClass: 'bg-amicci-900', hexValue: '#075757' },
      ]
    },
    {
      name: 'Gray',
      weights: [
        { weight: '50', colorClass: 'bg-gray-50', hexValue: '#F9FAFB' },
        { weight: '100', colorClass: 'bg-gray-100', hexValue: '#F3F4F6' },
        { weight: '200', colorClass: 'bg-gray-200', hexValue: '#E5E7EB' },
        { weight: '300', colorClass: 'bg-gray-300', hexValue: '#D1D5DB' },
        { weight: '400', colorClass: 'bg-gray-400', hexValue: '#9CA3AF' },
        { weight: '500', colorClass: 'bg-gray-500', hexValue: '#6B7280' },
        { weight: '600', colorClass: 'bg-gray-600', hexValue: '#4B5563' },
        { weight: '700', colorClass: 'bg-gray-700', hexValue: '#374151' },
        { weight: '800', colorClass: 'bg-gray-800', hexValue: '#1F2937' },
        { weight: '900', colorClass: 'bg-gray-900', hexValue: '#111827' },
      ]
    }
  ];

  const palettes = [
    {
      name: 'Text',
      description: 'gray',
      variants: [
        { name: 'primary', colorClass: 'bg-gray-900', hexValue: '#111827', baseColor: 'Gray-900', textColor: 'white' },
        { name: 'secondary', colorClass: 'bg-gray-500', hexValue: '#6B7280', baseColor: 'Gray-500', textColor: 'white' },
        { name: 'disabled', colorClass: 'bg-gray-400', hexValue: '#9CA3AF', baseColor: 'Gray-400', textColor: 'white' },
        { name: 'hover', colorClass: 'bg-gray-900', hexValue: '#111827', baseColor: 'Gray-900', opacity: '4%', textColor: 'white' },
        { name: 'selected', colorClass: 'bg-gray-900', hexValue: '#111827', baseColor: 'Gray-900', opacity: '8%', textColor: 'white' },
        { name: 'focus', colorClass: 'bg-gray-900', hexValue: '#111827', baseColor: 'Gray-900', opacity: '12%', textColor: 'white' },
        { name: 'focusVisible', colorClass: 'bg-gray-900', hexValue: '#111827', baseColor: 'Gray-900', opacity: '30%', textColor: 'white' },
      ]
    },
    {
      name: 'Primary',
      description: 'amicci',
      variants: [
        { name: 'main', colorClass: 'bg-amicci-500', hexValue: '#10C2C0', baseColor: 'Amicci-500', textColor: 'white' },
        { name: 'dark', colorClass: 'bg-amicci-700', hexValue: '#0C8584', baseColor: 'Amicci-700', textColor: 'white' },
        { name: 'light', colorClass: 'bg-amicci-100', hexValue: '#E3FAF9', baseColor: 'Amicci-100', textColor: 'black' },
        { name: 'hover', colorClass: 'bg-amicci-400', hexValue: '#51DEDA', baseColor: 'Amicci-400', textColor: 'white' },
        { name: 'selected', colorClass: 'bg-amicci-700', hexValue: '#0C8584', baseColor: 'Amicci-700', textColor: 'white' },
        { name: 'focusVisible', colorClass: 'bg-amicci-500', hexValue: '#10C2C0', baseColor: 'Amicci-500', opacity: '30%', textColor: 'white' },
        { name: 'outlinedBorder', colorClass: 'bg-amicci-500', hexValue: '#10C2C0', baseColor: 'Amicci-500', opacity: '50%', textColor: 'white' },
        { name: 'contrast', colorClass: 'bg-white', hexValue: '#FFFFFF', baseColor: 'White', textColor: 'black' },
      ]
    }
  ];

  const colorSwatches = [
    { color: 'bg-teal-400', label: 'teal-400' },
    { color: 'bg-teal-600', label: 'teal-600' },
    { color: 'bg-red-500', label: 'red-500' },
    { color: 'bg-green-500', label: 'green-500' }
  ];

  const handleSimulation = (type: string) => {
    setSimulationType(type);
  };

  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Sistema de Cores" 
        description="Nosso sistema de cores é construído com variáveis CSS para suportar temas e personalização."
        type="foundations"
      />

      <div className="mt-8">
        <TailwindTabs 
          defaultValue="overview" 
          tabs={[
            { name: 'Visão geral', value: 'overview' },
            { name: 'Cores Base', value: 'baseColors' },
            { name: 'Paletas', value: 'palettes' },
            { name: 'Acessibilidade', value: 'accessibility' }
          ]}
          variant="pillsGray"
          onChange={value => setActiveTab(value)}
        />
        
        <div className="mt-6">
          {activeTab === 'overview' && (
            <ComponentCard 
              title="Sistema de Cores" 
              description="Nosso sistema de cores é construído com variáveis CSS para suportar temas e personalização."
            >
              <p className="text-gray-600 mb-6">
                O sistema é organizado para proporcionar consistência visual e flexibilidade em toda a aplicação.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Tipos de Variações</h3>
                  
                  <div>
                    <h4 className="font-medium text-lg">Variações de Estado</h4>
                    <ul className="mt-2 space-y-2 list-disc pl-5">
                      <li><span className="font-mono text-sm">main</span>: Cor principal para elementos de destaque</li>
                      <li><span className="font-mono text-sm">dark</span>: Variação mais escura para contraste</li>
                      <li><span className="font-mono text-sm">light</span>: Variação mais clara para fundos e elementos sutis</li>
                      <li><span className="font-mono text-sm">hover</span>: Estado de hover para elementos interativos</li>
                      <li><span className="font-mono text-sm">selected</span>: Estado selecionado para elementos interativos</li>
                      <li><span className="font-mono text-sm">focusVisible</span>: Estado de foco visível para acessibilidade</li>
                      <li><span className="font-mono text-sm">outlinedBorder</span>: Cor para bordas e contornos</li>
                      <li><span className="font-mono text-sm">contrast</span>: Cor de texto sobre fundos primários</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-lg">Variações de Texto</h4>
                    <ul className="mt-2 space-y-2 list-disc pl-5">
                      <li><span className="font-mono text-sm">primary</span>: Texto principal para conteúdo importante</li>
                      <li><span className="font-mono text-sm">secondary</span>: Texto secundário para descrições e detalhes</li>
                      <li><span className="font-mono text-sm">disabled</span>: Texto para elementos desabilitados</li>
                      <li><span className="font-mono text-sm">hover</span>: Estado de hover para texto interativo</li>
                      <li><span className="font-mono text-sm">selected</span>: Estado selecionado para texto interativo</li>
                      <li><span className="font-mono text-sm">focus</span>: Estado de foco para texto interativo</li>
                      <li><span className="font-mono text-sm">focusVisible</span>: Estado de foco visível para acessibilidade</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold border-b pb-2">Organização do Sistema</h3>
                  <p className="text-gray-600 mt-2">O sistema é organizado em dois níveis principais:</p>
                  
                  <div className="mt-4">
                    <h4 className="font-medium text-lg">1. Cores Básicas</h4>
                    <p className="text-gray-600 mt-1 mb-2">Um conjunto completo de cores de 50 a 900 para:</p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-gray-100 p-3 rounded-md">
                        <code className="text-xs">base-color-amicci</code>
                      </div>
                      <div className="bg-gray-100 p-3 rounded-md">
                        <code className="text-xs">base-color-amicciDark</code>
                      </div>
                      <div className="bg-gray-100 p-3 rounded-md">
                        <code className="text-xs">base-color-blue</code>
                      </div>
                      <div className="bg-gray-100 p-3 rounded-md">
                        <code className="text-xs">base-color-magenta</code>
                      </div>
                      <div className="bg-gray-100 p-3 rounded-md">
                        <code className="text-xs">base-color-green</code>
                      </div>
                      <div className="bg-gray-100 p-3 rounded-md">
                        <code className="text-xs">base-color-gray</code>
                      </div>
                      <div className="bg-gray-100 p-3 rounded-md">
                        <code className="text-xs">base-color-orange</code>
                      </div>
                      <div className="bg-gray-100 p-3 rounded-md">
                        <code className="text-xs">base-color-red</code>
                      </div>
                      <div className="bg-gray-100 p-3 rounded-md">
                        <code className="text-xs">base-color-yellow</code>
                      </div>
                      <div className="bg-gray-100 p-3 rounded-md">
                        <code className="text-xs">base-color-common-white</code>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-medium text-lg">2. Paletas Compostas</h4>
                    <p className="text-gray-600 mt-1 mb-2">Paletas semânticas que utilizam as cores básicas como base:</p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-gray-100 p-3 rounded-md">
                        <code className="text-xs">primary</code>
                      </div>
                      <div className="bg-gray-100 p-3 rounded-md">
                        <code className="text-xs">secondary</code>
                      </div>
                      <div className="bg-gray-100 p-3 rounded-md">
                        <code className="text-xs">text</code>
                      </div>
                      <div className="bg-gray-100 p-3 rounded-md">
                        <code className="text-xs">error</code>
                      </div>
                      <div className="bg-gray-100 p-3 rounded-md">
                        <code className="text-xs">warning</code>
                      </div>
                      <div className="bg-gray-100 p-3 rounded-md">
                        <code className="text-xs">info</code>
                      </div>
                      <div className="bg-gray-100 p-3 rounded-md">
                        <code className="text-xs">success</code>
                      </div>
                      <div className="bg-gray-100 p-3 rounded-md">
                        <code className="text-xs">background</code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ComponentCard>
          )}

          {activeTab === 'baseColors' && (
            <ComponentCard 
              title="Cores Base" 
              description="Conjunto de cores básicas que formam a fundação do sistema."
            >
              <p className="text-gray-600 mb-6">
                Estas cores básicas servem como alicerce para todo o sistema de design, fornecendo consistência visual em toda a aplicação.
              </p>
              
              <BaseColorsTable baseColors={baseColors} />
            </ComponentCard>
          )}

          {activeTab === 'palettes' && (
            <ComponentCard 
              title="Paletas" 
              description="Paletas semânticas construídas a partir das cores base."
            >
              <p className="text-gray-600 mb-6">
                Nossas paletas semânticas atribuem significado e função às cores, facilitando o uso consistente em toda a interface.
              </p>
              
              <PaletteTable palettes={palettes} />
            </ComponentCard>
          )}

          {activeTab === 'accessibility' && (
            <ComponentCard 
              title="Teste de Daltonismo" 
              description="Nosso sistema de cores foi testado para os seguintes tipos de daltonismo:"
            >
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-medium">Deuteranopia</h3>
                        <div className="flex items-center">
                          <Label htmlFor="deuteranopia-sim" className="mr-2">Simular</Label>
                          <RadioGroup 
                            value={simulationType === 'deuteranopia' ? 'true' : 'false'}
                            onValueChange={(value) => value === 'true' ? handleSimulation('deuteranopia') : handleSimulation('normal')}
                            className="flex"
                          >
                            <RadioGroupItem value="true" id="deuteranopia-sim" />
                          </RadioGroup>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">Deficiência de percepção do verde</p>
                      
                      <div className={`grid grid-cols-4 gap-2 ${simulationType === 'deuteranopia' ? 'filter-deuteranopia' : ''}`}>
                        {colorSwatches.map((swatch, idx) => (
                          <ColorSwatch 
                            key={idx}
                            color={swatch.color} 
                            className="h-12"
                            simulationType={simulationType === 'deuteranopia' ? 'deuteranopia' : ''}
                          />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-medium">Protanopia</h3>
                        <div className="flex items-center">
                          <Label htmlFor="protanopia-sim" className="mr-2">Simular</Label>
                          <RadioGroup 
                            value={simulationType === 'protanopia' ? 'true' : 'false'}
                            onValueChange={(value) => value === 'true' ? handleSimulation('protanopia') : handleSimulation('normal')}
                            className="flex"
                          >
                            <RadioGroupItem value="true" id="protanopia-sim" />
                          </RadioGroup>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">Deficiência de percepção do vermelho</p>
                      
                      <div className={`grid grid-cols-4 gap-2 ${simulationType === 'protanopia' ? 'filter-protanopia' : ''}`}>
                        {colorSwatches.map((swatch, idx) => (
                          <ColorSwatch 
                            key={idx}
                            color={swatch.color} 
                            className="h-12"
                            simulationType={simulationType === 'protanopia' ? 'protanopia' : ''}
                          />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-medium">Tritanopia</h3>
                        <div className="flex items-center">
                          <Label htmlFor="tritanopia-sim" className="mr-2">Simular</Label>
                          <RadioGroup 
                            value={simulationType === 'tritanopia' ? 'true' : 'false'}
                            onValueChange={(value) => value === 'true' ? handleSimulation('tritanopia') : handleSimulation('normal')}
                            className="flex"
                          >
                            <RadioGroupItem value="true" id="tritanopia-sim" />
                          </RadioGroup>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">Deficiência de percepção do azul</p>
                      
                      <div className={`grid grid-cols-4 gap-2 ${simulationType === 'tritanopia' ? 'filter-tritanopia' : ''}`}>
                        {colorSwatches.map((swatch, idx) => (
                          <ColorSwatch 
                            key={idx}
                            color={swatch.color} 
                            className="h-12"
                            simulationType={simulationType === 'tritanopia' ? 'tritanopia' : ''}
                          />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-medium">Acromatopsia</h3>
                        <div className="flex items-center">
                          <Label htmlFor="achromatopsia-sim" className="mr-2">Simular</Label>
                          <RadioGroup 
                            value={simulationType === 'achromatopsia' ? 'true' : 'false'}
                            onValueChange={(value) => value === 'true' ? handleSimulation('achromatopsia') : handleSimulation('normal')}
                            className="flex"
                          >
                            <RadioGroupItem value="true" id="achromatopsia-sim" />
                          </RadioGroup>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">Ausência completa de percepção de cores</p>
                      
                      <div className={`grid grid-cols-4 gap-2 ${simulationType === 'achromatopsia' ? 'filter-grayscale' : ''}`}>
                        {colorSwatches.map((swatch, idx) => (
                          <ColorSwatch 
                            key={idx}
                            color={swatch.color} 
                            className="h-12"
                            simulationType={simulationType === 'achromatopsia' ? 'achromatopsia' : ''}
                          />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </ComponentCard>
          )}
        </div>
      </div>
    </div>
  );
};

export default Colors;
