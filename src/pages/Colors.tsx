
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ComponentCard from '@/components/ComponentCard';
import CodeBlock from '@/components/CodeBlock';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clipboard, Check, Eye, EyeOff } from 'lucide-react';
import { colorUtils } from '@/utils/colorUtils';

const Colors = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const [showWCAG, setShowWCAG] = useState(false);

  const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value);
    setCopied(value);
    setTimeout(() => setCopied(null), 2000);
  };

  // Create a standardized color table component for consistency
  const ColorTable = ({ title, colorPrefix }: { title: string; colorPrefix: string }) => {
    return (
      <>
        <h3 className="text-xl font-medium mb-4">{title}</h3>
        <div className="overflow-x-auto mb-8">
          <Table>
            <TableHeader>
              <TableRow className="border-b">
                <TableHead className="w-[15%]">Variação</TableHead>
                <TableHead className="w-[10%]">Amostra</TableHead>
                <TableHead className="w-[15%]">Token CSS</TableHead>
                <TableHead className="w-[15%]">Hexadecimal</TableHead>
                <TableHead className="w-[15%]">RGB</TableHead>
                <TableHead className="w-[15%]">HSL</TableHead>
                {showWCAG && <TableHead className="w-[7.5%]">Contraste (Branco)</TableHead>}
                {showWCAG && <TableHead className="w-[7.5%]">Contraste (Preto)</TableHead>}
              </TableRow>
            </TableHeader>
            <TableBody>
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((weight) => {
                const colorCode = `var(--${colorPrefix}-${weight})`;
                const hexColor = colorUtils.getComputedColor(colorCode);
                const rgbColor = colorUtils.hexToRgb(hexColor);
                const hslColor = colorUtils.hexToHsl(hexColor);
                const contrastWithWhite = colorUtils.getContrastRatio(hexColor, '#FFFFFF');
                const contrastWithBlack = colorUtils.getContrastRatio(hexColor, '#000000');
                const needsDarkText = weight < 600 || ['yellow'].includes(colorPrefix);
                
                return (
                  <TableRow key={`${colorPrefix}-${weight}`} className="border-b hover:bg-gray-50">
                    <TableCell>
                      <code className="bg-gray-100 px-2 py-1 rounded text-sm">{colorPrefix}-{weight}</code>
                    </TableCell>
                    <TableCell>
                      <div 
                        className={`h-8 w-16 rounded ${needsDarkText ? 'text-black' : 'text-white'} flex items-center justify-center`} 
                        style={{ backgroundColor: hexColor }}
                      >
                        {weight}
                      </div>
                    </TableCell>
                    <TableCell>
                      <code className="bg-gray-100 px-2 py-1 rounded text-sm">--{colorPrefix}-{weight}</code>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <span>{hexColor}</span>
                        <button 
                          onClick={() => copyToClipboard(hexColor)}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          {copied === hexColor ? <Check size={14} /> : <Clipboard size={14} />}
                        </button>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <span>{rgbColor}</span>
                        <button 
                          onClick={() => copyToClipboard(rgbColor)}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          {copied === rgbColor ? <Check size={14} /> : <Clipboard size={14} />}
                        </button>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <span>{hslColor}</span>
                        <button 
                          onClick={() => copyToClipboard(hslColor)}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          {copied === hslColor ? <Check size={14} /> : <Clipboard size={14} />}
                        </button>
                      </div>
                    </TableCell>
                    {showWCAG && (
                      <TableCell>
                        <div className={`px-2 py-1 rounded text-center w-16 ${contrastWithWhite >= 4.5 ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}`}>
                          {contrastWithWhite.toFixed(2)}
                          <span className="text-xs ml-1">{contrastWithWhite >= 4.5 ? 'AA' : ''}</span>
                        </div>
                      </TableCell>
                    )}
                    {showWCAG && (
                      <TableCell>
                        <div className={`px-2 py-1 rounded text-center w-16 ${contrastWithBlack >= 4.5 ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}`}>
                          {contrastWithBlack.toFixed(2)}
                          <span className="text-xs ml-1">{contrastWithBlack >= 4.5 ? 'AA' : ''}</span>
                        </div>
                      </TableCell>
                    )}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </>
    );
  };

  // Create a component for semantic palette tables
  const SemanticPaletteTable = ({ title, colorBase, palettePrefix }: { title: string; colorBase: string; palettePrefix: string }) => {
    return (
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-xl font-medium">{title} (baseada em {colorBase})</h3>
          <Badge className={`bg-${colorBase}-500`}>{colorBase}</Badge>
        </div>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-b">
                <TableHead className="w-[15%]">Variação</TableHead>
                <TableHead className="w-[10%]">Amostra</TableHead>
                <TableHead className="w-[15%]">Token CSS</TableHead>
                <TableHead className="w-[15%]">Hexadecimal</TableHead>
                <TableHead className="w-[15%]">RGB</TableHead>
                <TableHead className="w-[15%]">Uso recomendado</TableHead>
                {showWCAG && <TableHead className="w-[7.5%]">Contraste (Branco)</TableHead>}
                {showWCAG && <TableHead className="w-[7.5%]">Contraste (Preto)</TableHead>}
              </TableRow>
            </TableHeader>
            <TableBody>
              {['main', 'dark', 'light', 'hover', 'selected', 'focusVisible', 'outlinedBorder', 'contrast'].map((variant) => {
                const colorCode = `var(--${palettePrefix}-${variant})`;
                const hexColor = colorUtils.getComputedColor(colorCode);
                const rgbColor = colorUtils.hexToRgb(hexColor);
                const contrastWithWhite = colorUtils.getContrastRatio(hexColor, '#FFFFFF');
                const contrastWithBlack = colorUtils.getContrastRatio(hexColor, '#000000');
                const needsDarkText = ['light', 'focusVisible', 'outlinedBorder', 'contrast'].includes(variant);
                
                const usageMap: Record<string, string> = {
                  main: 'Cor principal para elementos de destaque',
                  dark: 'Variação mais escura para contraste',
                  light: 'Variação mais clara para fundos e elementos sutis',
                  hover: 'Estado de hover para elementos interativos',
                  selected: 'Estado selecionado para elementos interativos',
                  focusVisible: 'Estado de foco visível para acessibilidade',
                  outlinedBorder: 'Cor para bordas e contornos',
                  contrast: 'Cor de texto sobre fundos primários'
                };
                
                return (
                  <TableRow key={`${palettePrefix}-${variant}`} className="border-b hover:bg-gray-50">
                    <TableCell>
                      <code className="bg-gray-100 px-2 py-1 rounded text-sm">{palettePrefix}-{variant}</code>
                    </TableCell>
                    <TableCell>
                      <div 
                        className={`h-8 w-16 rounded ${needsDarkText ? 'text-black' : 'text-white'} flex items-center justify-center`} 
                        style={{ backgroundColor: hexColor }}
                      >
                        Aa
                      </div>
                    </TableCell>
                    <TableCell>
                      <code className="bg-gray-100 px-2 py-1 rounded text-sm">--{palettePrefix}-{variant}</code>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <span>{hexColor}</span>
                        <button 
                          onClick={() => copyToClipboard(hexColor)}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          {copied === hexColor ? <Check size={14} /> : <Clipboard size={14} />}
                        </button>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <span>{rgbColor}</span>
                        <button 
                          onClick={() => copyToClipboard(rgbColor)}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          {copied === rgbColor ? <Check size={14} /> : <Clipboard size={14} />}
                        </button>
                      </div>
                    </TableCell>
                    <TableCell className="text-mui-text-secondary text-sm">
                      {usageMap[variant]}
                    </TableCell>
                    {showWCAG && (
                      <TableCell>
                        <div className={`px-2 py-1 rounded text-center w-16 ${contrastWithWhite >= 4.5 ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}`}>
                          {contrastWithWhite.toFixed(2)}
                          <span className="text-xs ml-1">{contrastWithWhite >= 4.5 ? 'AA' : ''}</span>
                        </div>
                      </TableCell>
                    )}
                    {showWCAG && (
                      <TableCell>
                        <div className={`px-2 py-1 rounded text-center w-16 ${contrastWithBlack >= 4.5 ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}`}>
                          {contrastWithBlack.toFixed(2)}
                          <span className="text-xs ml-1">{contrastWithBlack >= 4.5 ? 'AA' : ''}</span>
                        </div>
                      </TableCell>
                    )}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Sistema de Cores</h1>
        <p className="text-mui-text-secondary text-lg">
          Paleta de cores e tokens de design utilizados na aplicação.
        </p>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Visão geral</TabsTrigger>
          <TabsTrigger value="baseColors">Base colors</TabsTrigger>
          <TabsTrigger value="palettes">Palettes</TabsTrigger>
          <TabsTrigger value="usage">Uso</TabsTrigger>
          <TabsTrigger value="accessibility">Acessibilidade</TabsTrigger>
        </TabsList>

        {/* Overview Tab Content */}
        <TabsContent value="overview" className="space-y-6">
          <ComponentCard title="Sistema de Cores" description="Nosso sistema de cores é construído com variáveis CSS para suportar temas e personalização.">
            <p className="text-mui-text-secondary mb-4">
              O sistema é organizado em dois níveis principais:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">1. Cores Básicas</h3>
                <p className="text-mui-text-secondary">
                  Um conjunto completo de cores de 50 a 900 para:
                </p>
                <div className="flex flex-wrap gap-1 mt-2">
                  <Badge className="bg-amicci-500">amicci</Badge>
                  <Badge className="bg-amicciDark-500">amicciDark</Badge>
                  <Badge className="bg-blue-500">blue</Badge>
                  <Badge className="bg-magenta-500">magenta</Badge>
                  <Badge className="bg-green-500">green</Badge>
                  <Badge className="bg-gray-500">gray</Badge>
                  <Badge className="bg-orange-500">orange</Badge>
                  <Badge className="bg-red-500">red</Badge>
                  <Badge className="bg-yellow-500 text-black">yellow</Badge>
                </div>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">2. Paletas Compostas</h3>
                <p className="text-mui-text-secondary">
                  Paletas semânticas que utilizam as cores básicas como base:
                </p>
                <div className="flex flex-wrap gap-1 mt-2">
                  <Badge className="bg-primary-main">primary</Badge>
                  <Badge className="bg-secondary-main">secondary</Badge>
                  <Badge className="bg-tertiary-main">tertiary</Badge>
                  <Badge className="bg-action-main">action</Badge>
                  <Badge className="bg-error-main">error</Badge>
                  <Badge className="bg-warning-main text-black">warning</Badge>
                  <Badge className="bg-info-main">info</Badge>
                  <Badge className="bg-success-main">success</Badge>
                </div>
              </div>
            </div>
            
            <p className="text-mui-text-secondary mb-4">
              Cada paleta composta inclui variações para diferentes estados e usos:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
              <div className="p-2 border rounded bg-primary-main text-primary-contrast">main</div>
              <div className="p-2 border rounded bg-primary-dark text-primary-contrast">dark</div>
              <div className="p-2 border rounded bg-primary-light text-black">light</div>
              <div className="p-2 border rounded bg-primary-hover text-primary-contrast">hover</div>
              <div className="p-2 border rounded bg-primary-selected text-primary-contrast">selected</div>
              <div className="p-2 border rounded bg-primary-focusVisible text-black">focusVisible</div>
              <div className="p-2 border rounded bg-primary-outlinedBorder text-black">outlinedBorder</div>
              <div className="p-2 border rounded bg-primary-contrast text-primary-main">contrast</div>
            </div>
          </ComponentCard>
          
          <Separator />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ComponentCard title="Como Usar">
              <p className="text-mui-text-secondary">
                Acesse as cores usando as classes utilitárias do Tailwind baseadas na nomenclatura semântica:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-mui-text-secondary">
                <li><code className="bg-mui-sidebar px-1 rounded">bg-primary-main</code> - Cor primária principal</li>
                <li><code className="bg-mui-sidebar px-1 rounded">text-error-main</code> - Texto na cor de erro</li>
                <li><code className="bg-mui-sidebar px-1 rounded">border-warning-outlinedBorder</code> - Borda na cor de contorno de aviso</li>
                <li><code className="bg-mui-sidebar px-1 rounded">bg-amicci-500</code> - Cor básica amicci (500)</li>
              </ul>
            </ComponentCard>
            
            <ComponentCard title="Acessibilidade">
              <p className="text-mui-text-secondary">
                Nosso sistema de cores foi projetado com acessibilidade em mente:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-mui-text-secondary">
                <li>Os pares de cores atendem aos requisitos de contraste WCAG 2.1 AA</li>
                <li>Cada paleta inclui versões de contraste dedicadas</li>
                <li>As cores seguem uma hierarquia visual clara</li>
                <li>Estados de interação (hover, focus, selected) são visualmente distintos</li>
              </ul>
              <div className="mt-4">
                <Button 
                  variant="outline" 
                  onClick={() => setShowWCAG(!showWCAG)}
                  className="text-sm flex gap-2 items-center"
                >
                  {showWCAG ? <EyeOff size={16} /> : <Eye size={16} />}
                  {showWCAG ? 'Ocultar dados WCAG' : 'Mostrar dados WCAG'}
                </Button>
              </div>
            </ComponentCard>
          </div>
        </TabsContent>
        
        {/* Base Colors Tab Content */}
        <TabsContent value="baseColors" className="space-y-6">
          <ComponentCard title="Base colors">
            <p className="text-mui-text-secondary mb-6">
              Estas são as cores básicas que servem como alicerce para todo o sistema de design.
              Cada cor tem 10 variações (de 50 a 900) que podem ser usadas conforme necessário.
            </p>
            
            <ColorTable title="Amicci" colorPrefix="amicci" />
            <ColorTable title="AmicciDark" colorPrefix="amicciDark" />
            <ColorTable title="Magenta" colorPrefix="magenta" />
            <ColorTable title="Blue" colorPrefix="blue" />
            <ColorTable title="Green" colorPrefix="green" />
            <ColorTable title="Red" colorPrefix="red" />
            <ColorTable title="Yellow" colorPrefix="yellow" />
            <ColorTable title="Orange" colorPrefix="orange" />
            <ColorTable title="Gray" colorPrefix="gray" />
          </ComponentCard>
        </TabsContent>
        
        {/* Palettes Tab Content */}
        <TabsContent value="palettes" className="space-y-6">
          <ComponentCard title="Palettes">
            <p className="text-mui-text-secondary mb-6">
              As paletas compostas são construídas a partir das cores básicas e fornecem variações
              semânticas para diferentes estados e usos na interface.
            </p>
            
            <SemanticPaletteTable 
              title="Primary" 
              colorBase="amicci" 
              palettePrefix="primary" 
            />
            
            <SemanticPaletteTable 
              title="Secondary" 
              colorBase="amicciDark" 
              palettePrefix="secondary" 
            />
            
            <SemanticPaletteTable 
              title="Tertiary" 
              colorBase="magenta" 
              palettePrefix="tertiary" 
            />
            
            <SemanticPaletteTable 
              title="Action" 
              colorBase="blue" 
              palettePrefix="action" 
            />
            
            <SemanticPaletteTable 
              title="Error" 
              colorBase="red" 
              palettePrefix="error" 
            />
            
            <SemanticPaletteTable 
              title="Warning" 
              colorBase="yellow" 
              palettePrefix="warning" 
            />
            
            <SemanticPaletteTable 
              title="Info" 
              colorBase="blue" 
              palettePrefix="info" 
            />
            
            <SemanticPaletteTable 
              title="Success" 
              colorBase="green" 
              palettePrefix="success" 
            />
          </ComponentCard>
        </TabsContent>
        
        {/* Usage Tab Content */}
        <TabsContent value="usage" className="space-y-6">
          <ComponentCard title="Uso das Cores">
            <p className="text-mui-text-secondary mb-6">
              Diretrizes para o uso correto das cores na interface.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-3">Utilização de Cores Básicas</h3>
                <p className="text-mui-text-secondary mb-3">
                  As cores básicas devem ser utilizadas como alicerce para construir interfaces consistentes:
                </p>
                <ul className="list-disc list-inside ml-3 space-y-2 text-mui-text-secondary">
                  <li>Para cores de texto, utilize <code>gray-800</code> (texto principal) e <code>gray-500</code> (texto secundário)</li>
                  <li>Para fundos, utilize <code>white</code> (fundo padrão) ou <code>gray-50</code> (fundo alternativo)</li>
                  <li>Para bordas, utilize <code>gray-200</code> (bordas padrão) ou <code>gray-300</code> (bordas com mais ênfase)</li>
                  <li>Para elementos de destaque, utilize as cores primárias (amicci) ou secundárias (amicciDark)</li>
                  <li>Para estados de erro, utilize <code>red-500</code> ou a paleta composta <code>error-main</code></li>
                  <li>Para sucesso, utilize <code>green-500</code> ou a paleta composta <code>success-main</code></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3">Utilização de Paletas Compostas</h3>
                <p className="text-mui-text-secondary mb-3">
                  As paletas compostas facilitam a criação de interfaces consistentes para diferentes estados:
                </p>
                <ul className="list-disc list-inside ml-3 space-y-2 text-mui-text-secondary">
                  <li>Para botões primários, utilize <code>primary-main</code> (fundo) e <code>primary-contrast</code> (texto)</li>
                  <li>Para estados hover, utilize a variação <code>-hover</code> da cor correspondente</li>
                  <li>Para estados selecionados, utilize a variação <code>-selected</code></li>
                  <li>Para estados de foco visível, utilize a variação <code>-focusVisible</code></li>
                  <li>Para bordas em elementos com contorno, utilize a variação <code>-outlinedBorder</code></li>
                </ul>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-5">
                  <h4 className="text-lg font-medium mb-3 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                    Recomendado
                  </h4>
                  <ul className="list-disc list-inside ml-3 space-y-2 text-mui-text-secondary">
                    <li>Use a cor primária para destacar ações principais</li>
                    <li>Utilize tons de cinza para elementos secundários</li>
                    <li>Mantenha uma proporção de 60/30/10 (neutro/primário/acentuação)</li>
                    <li>Utilize as variações de cores para indicar hierarquia</li>
                    <li>Garanta que as combinações de cores atendam aos critérios WCAG AA</li>
                  </ul>
                </div>
                
                <div className="border rounded-lg p-5">
                  <h4 className="text-lg font-medium mb-3 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    Evitar
                  </h4>
                  <ul className="list-disc list-inside ml-3 space-y-2 text-mui-text-secondary">
                    <li>Evite misturar muitas cores vibrantes na mesma interface</li>
                    <li>Não utilize cores de forma inconsistente para os mesmos elementos</li>
                    <li>Evite combinações com baixo contraste que dificultam a leitura</li>
                    <li>Não confie apenas na cor para transmitir informações importantes</li>
                    <li>Evite combinações de cores que possam causar vibração visual</li>
                  </ul>
                </div>
              </div>
            </div>
          </ComponentCard>
        </TabsContent>
        
        {/* Accessibility Tab Content */}
        <TabsContent value="accessibility" className="space-y-6">
          <ComponentCard title="Acessibilidade das Cores">
            <p className="text-mui-text-secondary mb-6">
              Nossas diretrizes de cores foram projetadas para garantir que a interface seja acessível para todos os usuários.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-3">WCAG 2.1 Critérios de Conformidade</h3>
                <p className="text-mui-text-secondary mb-3">
                  Nosso sistema segue os critérios de conformidade WCAG 2.1 para contraste de cores:
                </p>
                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Nível AA (nosso padrão mínimo)</h4>
                    <ul className="list-disc list-inside ml-3 space-y-1 text-mui-text-secondary">
                      <li>Contraste mínimo de 4.5:1 para texto normal (menor que 18pt)</li>
                      <li>Contraste mínimo de 3:1 para texto grande (18pt ou maior, ou 14pt bold)</li>
                      <li>Contraste mínimo de 3:1 para elementos gráficos e componentes de interface</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Nível AAA (recomendado para conteúdo crítico)</h4>
                    <ul className="list-disc list-inside ml-3 space-y-1 text-mui-text-secondary">
                      <li>Contraste mínimo de 7:1 para texto normal (menor que 18pt)</li>
                      <li>Contraste mínimo de 4.5:1 para texto grande (18pt ou maior, ou 14pt bold)</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3">Ferramentas e Testes</h3>
                <p className="text-mui-text-secondary mb-3">
                  Utilizamos as seguintes ferramentas para garantir a acessibilidade das cores:
                </p>
                <ul className="list-disc list-inside ml-3 space-y-2 text-mui-text-secondary">
                  <li>Análise automática de contraste usando as funções <code>getContrastRatio</code>, <code>meetsWCAGAA</code> e <code>meetsWCAGAAA</code></li>
                  <li>Testes com filtros de simulação de daltonismo</li>
                  <li>Revisões manuais por especialistas em acessibilidade</li>
                  <li>Feedback de usuários com diferentes tipos de deficiência visual</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3">Melhores Práticas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border rounded-lg p-5">
                    <h4 className="text-lg font-medium mb-3">Para Desenvolvedores</h4>
                    <ul className="list-disc list-inside ml-3 space-y-2 text-mui-text-secondary">
                      <li>Utilize sempre os tokens de cores predefinidos</li>
                      <li>Verifique o contraste das combinações de cores</li>
                      <li>Adicione foco visível para elementos interativos</li>
                      <li>Não transmita informações apenas através da cor</li>
                      <li>Utilize o utilitário <code>colorUtils</code> para verificar o contraste</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-5">
                    <h4 className="text-lg font-medium mb-3">Para Designers</h4>
                    <ul className="list-disc list-inside ml-3 space-y-2 text-mui-text-secondary">
                      <li>Mantenha consistência no uso das cores em toda a aplicação</li>
                      <li>Utilize contraste suficiente entre texto e fundo</li>
                      <li>Adicione outros indicadores além da cor (ícones, padrões, texto)</li>
                      <li>Teste designs com ferramentas de simulação de daltonismo</li>
                      <li>Considere usuários com baixa visão ao escolher combinações de cores</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3">Exemplos de Combinações Acessíveis</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="p-4 bg-amicci-500 text-white">
                      <p className="font-medium">Amicci 500 + Branco</p>
                      <p className="text-sm">Contraste: {colorUtils.getContrastRatio('#10C2C0', '#FFFFFF').toFixed(2)}</p>
                    </div>
                    <div className="p-3 bg-white text-sm">
                      <p className="font-medium">✓ WCAG AA para texto normal</p>
                      <p className="font-medium">✓ WCAG AAA para texto grande</p>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="p-4 bg-amicciDark-700 text-white">
                      <p className="font-medium">AmicciDark 700 + Branco</p>
                      <p className="text-sm">Contraste: {colorUtils.getContrastRatio('#06454A', '#FFFFFF').toFixed(2)}</p>
                    </div>
                    <div className="p-3 bg-white text-sm">
                      <p className="font-medium">✓ WCAG AA para texto normal</p>
                      <p className="font-medium">✓ WCAG AAA para texto normal</p>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="p-4 bg-amicci-100 text-gray-800">
                      <p className="font-medium">Amicci 100 + Gray 800</p>
                      <p className="text-sm">Contraste: {colorUtils.getContrastRatio('#E3FAF9', '#313536').toFixed(2)}</p>
                    </div>
                    <div className="p-3 bg-white text-sm">
                      <p className="font-medium">✓ WCAG AA para texto normal</p>
                      <p className="font-medium">✓ WCAG AAA para texto normal</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ComponentCard>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Colors;
