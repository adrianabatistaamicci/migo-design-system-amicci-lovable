
import React, { useState } from 'react';
import { TailwindTabs } from "@/components/ui/tabs";
import Header from '@/components/library-components/Header';
import ComponentCard from '@/components/ComponentCard';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import ColorSwatch from '@/components/colors/ColorSwatch';

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
              
              <div className="space-y-8">
                {baseColors.map(baseColor => (
                  <div key={baseColor.name} className="space-y-2">
                    <h3 className="text-xl font-semibold">{baseColor.name}</h3>
                    <Table className="border rounded-lg overflow-hidden">
                      <TableHeader>
                        <TableRow>
                          <TableHead>Variação</TableHead>
                          <TableHead>Amostra</TableHead>
                          <TableHead>Token CSS</TableHead>
                          <TableHead>Hexadecimal</TableHead>
                          <TableHead>RGB</TableHead>
                          <TableHead>HSL</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {baseColor.weights.map(weight => (
                          <TableRow key={`${baseColor.name}-${weight.weight}`}>
                            <TableCell className="font-mono bg-inherit">
                              {baseColor.name.toLowerCase()}-{weight.weight}
                            </TableCell>
                            <TableCell>
                              <ColorSwatch color={weight.colorClass} textOverlay={weight.weight} className="h-12" />
                            </TableCell>
                            <TableCell className="font-mono">
                              --{baseColor.name.toLowerCase()}-{weight.weight}
                            </TableCell>
                            <TableCell className="font-mono">
                              {weight.hexValue}
                            </TableCell>
                            <TableCell className="font-mono">
                              rgb(...)
                            </TableCell>
                            <TableCell className="font-mono">
                              hsl(...)
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                ))}
              </div>
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
              
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Como Usar</h3>
                  <p className="text-gray-600">
                    Utilize as cores através das classes do Tailwind e tokens CSS:
                  </p>
                  
                  <p className="text-gray-600 mb-4">
                    Acesse as cores usando as classes utilitárias do Tailwind baseadas na nomenclatura semântica:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2 text-sm">bg-primary-main</h4>
                      <div className="bg-amicci-500 h-10 rounded-md"></div>
                      <p className="text-xs mt-2 text-gray-500">
                        Cor primária principal
                      </p>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2 text-sm">text-error-main</h4>
                      <div className="bg-gray-50 h-10 rounded-md flex items-center justify-center text-red-500 font-medium">
                        Texto na cor de erro
                      </div>
                      <p className="text-xs mt-2 text-gray-500">
                        Texto na cor de erro
                      </p>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2 text-sm">border-warning-outlinedBorder</h4>
                      <div className="border-2 border-amber-500 h-10 rounded-md"></div>
                      <p className="text-xs mt-2 text-gray-500">
                        Borda na cor de contorno de aviso
                      </p>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2 text-sm">bg-amicci-500</h4>
                      <div className="bg-amicci-500 h-10 rounded-md"></div>
                      <p className="text-xs mt-2 text-gray-500">
                        Cor básica amicci (500)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ComponentCard>
          )}

          {activeTab === 'accessibility' && (
            <ComponentCard 
              title="Acessibilidade de Cores" 
              description="Garantindo que nosso sistema de cores seja acessível a todos."
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-3">Contraste</h3>
                  <p className="text-gray-600 mb-4">
                    Todas as combinações de cores de texto e fundo atendem aos requisitos de contraste WCAG 2.1 AA:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2">Texto normal</h4>
                      <p className="text-gray-600 mb-2">Contraste mínimo de 4.5:1</p>
                      <div className="bg-amicci-600 p-3 rounded-md">
                        <p className="text-white">Exemplo de texto com contraste adequado</p>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2">Texto grande (18pt ou 14pt bold)</h4>
                      <p className="text-gray-600 mb-2">Contraste mínimo de 3:1</p>
                      <div className="bg-amicci-400 p-3 rounded-md">
                        <p className="text-white text-xl font-bold">Texto grande</p>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2">Componentes de interface e gráficos</h4>
                      <p className="text-gray-600 mb-2">Contraste mínimo de 3:1</p>
                      <div className="p-3 rounded-md">
                        <Button>Botão de exemplo</Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-xl font-medium mb-3">Não Dependa Apenas da Cor</h3>
                  <p className="text-gray-600 mb-4">
                    Para garantir que as informações sejam acessíveis a pessoas com deficiência visual ou daltonismo, não usamos apenas cor para transmitir informações importantes:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2">Combinação com elementos visuais</h4>
                      <p className="text-gray-600 mb-2">Combinamos cores com ícones, textos e padrões</p>
                      <div className="flex items-center space-x-2 text-red-500">
                        <XCircle />
                        <span>Erro no formulário</span>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2">Alternativas textuais</h4>
                      <p className="text-gray-600 mb-2">Oferecemos alternativas textuais para informações baseadas em cores</p>
                      <div className="flex items-center space-x-2 text-green-500">
                        <CheckCircle2 />
                        <span>Status: Ativo</span>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2">Contraste suficiente</h4>
                      <p className="text-gray-600 mb-2">Mantemos contraste suficiente mesmo em visualizações monocromáticas</p>
                      <div className="border border-gray-300 p-2 rounded">
                        <p className="font-medium">Normal Outline</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-xl font-medium mb-3">Teste de Daltonismo</h3>
                  <p className="text-gray-600 mb-4">
                    Nosso sistema de cores foi testado para os seguintes tipos de daltonismo:
                  </p>
                  
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
                            <div 
                              key={idx}
                              className={`${swatch.color} h-12 rounded-md`}
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
                            <div 
                              key={idx}
                              className={`${swatch.color} h-12 rounded-md`}
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
                            <div 
                              key={idx}
                              className={`${swatch.color} h-12 rounded-md`}
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
                            <div 
                              key={idx}
                              className={`${swatch.color} h-12 rounded-md`}
                            />
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
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
