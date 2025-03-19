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

  // Explanation of variation types that will be displayed centrally
  const variationTypesExplanation = [
    { name: 'main', description: 'Cor principal para elementos de destaque' },
    { name: 'dark', description: 'Variação mais escura para contraste' },
    { name: 'light', description: 'Variação mais clara para fundos e elementos sutis' },
    { name: 'hover', description: 'Estado de hover para elementos interativos' },
    { name: 'selected', description: 'Estado selecionado para elementos interativos' },
    { name: 'focus', description: 'Estado de foco para elementos interativos' },
    { name: 'focusVisible', description: 'Estado de foco visível para acessibilidade' },
    { name: 'outlinedBorder', description: 'Cor para bordas e contornos' },
    { name: 'contrast', description: 'Cor de texto sobre fundos primários' }
  ];

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
                        className={`h-8 w-16 rounded ${needsDarkText ? 'text-black' : 'text-white'} flex items-center justify-center border border-gray-200`} 
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

  const SemanticPaletteTable = ({ title, colorBase, palettePrefix }: { title: string; colorBase: string; palettePrefix: string }) => {
    const primaryVariants = palettePrefix === 'primary' ? [
      { name: 'main', baseColor: 'amicci-500', opacity: '100%' },
      { name: 'dark', baseColor: 'amicci-700', opacity: '100%' },
      { name: 'light', baseColor: 'amicci-100', opacity: '100%' },
      { name: 'contrast', baseColor: 'common-white-main', opacity: '100%' },
      { name: 'hover', baseColor: 'amicci-500', opacity: '4%' },
      { name: 'selected', baseColor: 'amicci-500', opacity: '8%' },
      { name: 'focus', baseColor: 'amicci-500', opacity: '12%' },
      { name: 'focusVisible', baseColor: 'amicci-500', opacity: '30%' },
      { name: 'outlinedBorder', baseColor: 'amicci-500', opacity: '50%' },
    ] : null;
    
    const variantBaseColorMap: Record<string, string> = {
      main: `${colorBase}-500`,
      dark: `${colorBase}-700`,
      light: `${colorBase}-300`,
      hover: `${colorBase}-600`,
      selected: `${colorBase}-700`,
      focusVisible: `${colorBase}-200`,
      outlinedBorder: `${colorBase}-100`,
      contrast: 'common-white-main'
    };
    
    return (
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-xl font-medium">{title}</h3>
          <Badge className={`bg-${colorBase}-500 text-${
            ['yellow', 'amicci-100', 'amicci-200', 'amicci-300'].includes(`${colorBase}-500`) ? 'black' : 'white'
          }`}>
            {`base-color-${colorBase}`}
          </Badge>
        </div>
        
        <div className="overflow-x-auto">
          <Table compact>
            <TableHeader>
              <TableRow className="border-b">
                <TableHead className="w-[20%]">Variação</TableHead>
                <TableHead className="w-[15%]">Amostra</TableHead>
                <TableHead className="w-[25%]">Token CSS</TableHead>
                <TableHead className="w-[25%]">Base Color</TableHead>
                {palettePrefix === 'primary' && <TableHead className="w-[15%]">Opacidade</TableHead>}
                {showWCAG && <TableHead className="w-[12.5%]">Contr. (Branco)</TableHead>}
                {showWCAG && <TableHead className="w-[12.5%]">Contr. (Preto)</TableHead>}
              </TableRow>
            </TableHeader>
            <TableBody>
              {primaryVariants && palettePrefix === 'primary' ? (
                primaryVariants.map((variant) => {
                  const colorCode = `var(--${palettePrefix}-${variant.name})`;
                  const hexColor = colorUtils.getComputedColor(colorCode);
                  const contrastWithWhite = colorUtils.getContrastRatio(hexColor, '#FFFFFF');
                  const contrastWithBlack = colorUtils.getContrastRatio(hexColor, '#000000');
                  const needsDarkText = ['light', 'hover', 'selected', 'focus', 'focusVisible', 'outlinedBorder'].includes(variant.name);
                  
                  return (
                    <TableRow key={`${palettePrefix}-${variant.name}`} className="border-b hover:bg-gray-50">
                      <TableCell>
                        <code className="bg-gray-100 px-2 py-1 rounded text-sm">{palettePrefix}-{variant.name}</code>
                      </TableCell>
                      <TableCell>
                        <div 
                          className={`h-8 w-16 rounded ${needsDarkText ? 'text-black' : 'text-white'} flex items-center justify-center border border-gray-200`} 
                          style={{ backgroundColor: hexColor }}
                        >
                          Aa
                        </div>
                      </TableCell>
                      <TableCell>
                        <code className="bg-gray-100 px-2 py-1 rounded text-sm">--{palettePrefix}-{variant.name}</code>
                      </TableCell>
                      <TableCell>
                        <code className="bg-gray-100 px-2 py-1 rounded text-sm">{variant.baseColor}</code>
                      </TableCell>
                      <TableCell>
                        {variant.opacity}
                      </TableCell>
                      {showWCAG && (
                        <TableCell>
                          <div className={`px-2 py-1 rounded text-center w-full ${contrastWithWhite >= 4.5 ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}`}>
                            {contrastWithWhite.toFixed(2)}
                            <span className="text-xs ml-1">{contrastWithWhite >= 4.5 ? 'AA' : ''}</span>
                          </div>
                        </TableCell>
                      )}
                      {showWCAG && (
                        <TableCell>
                          <div className={`px-2 py-1 rounded text-center w-full ${contrastWithBlack >= 4.5 ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}`}>
                            {contrastWithBlack.toFixed(2)}
                            <span className="text-xs ml-1">{contrastWithBlack >= 4.5 ? 'AA' : ''}</span>
                          </div>
                        </TableCell>
                      )}
                    </TableRow>
                  );
                })
              ) : (
                ['main', 'dark', 'light', 'hover', 'selected', 'focusVisible', 'outlinedBorder', 'contrast'].map((variant) => {
                  const colorCode = `var(--${palettePrefix}-${variant})`;
                  const hexColor = colorUtils.getComputedColor(colorCode);
                  const baseColorToken = variantBaseColorMap[variant];
                  const contrastWithWhite = colorUtils.getContrastRatio(hexColor, '#FFFFFF');
                  const contrastWithBlack = colorUtils.getContrastRatio(hexColor, '#000000');
                  const needsDarkText = ['light', 'focusVisible', 'outlinedBorder', 'contrast'].includes(variant);
                  
                  return (
                    <TableRow key={`${palettePrefix}-${variant}`} className="border-b hover:bg-gray-50">
                      <TableCell>
                        <code className="bg-gray-100 px-2 py-1 rounded text-sm">{palettePrefix}-{variant}</code>
                      </TableCell>
                      <TableCell>
                        <div 
                          className={`h-8 w-16 rounded ${needsDarkText ? 'text-black' : 'text-white'} flex items-center justify-center border border-gray-200`} 
                          style={{ backgroundColor: hexColor }}
                        >
                          Aa
                        </div>
                      </TableCell>
                      <TableCell>
                        <code className="bg-gray-100 px-2 py-1 rounded text-sm">--{palettePrefix}-{variant}</code>
                      </TableCell>
                      <TableCell>
                        <code className="bg-gray-100 px-2 py-1 rounded text-sm">{baseColorToken}</code>
                      </TableCell>
                      {showWCAG && (
                        <TableCell>
                          <div className={`px-2 py-1 rounded text-center w-full ${contrastWithWhite >= 4.5 ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}`}>
                            {contrastWithWhite.toFixed(2)}
                            <span className="text-xs ml-1">{contrastWithWhite >= 4.5 ? 'AA' : ''}</span>
                          </div>
                        </TableCell>
                      )}
                      {showWCAG && (
                        <TableCell>
                          <div className={`px-2 py-1 rounded text-center w-full ${contrastWithBlack >= 4.5 ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}`}>
                            {contrastWithBlack.toFixed(2)}
                            <span className="text-xs ml-1">{contrastWithBlack >= 4.5 ? 'AA' : ''}</span>
                          </div>
                        </TableCell>
                      )}
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  };

  const TextPaletteTable = () => {
    const textVariants = [
      { name: 'primary', baseColor: 'gray-900', opacity: '100%' },
      { name: 'secondary', baseColor: 'gray-500', opacity: '100%' },
      { name: 'disabled', baseColor: 'gray-400', opacity: '100%' },
      { name: 'hover', baseColor: '212323', opacity: '4%' },
      { name: 'selected', baseColor: '212323', opacity: '8%' },
      { name: 'focus', baseColor: '212323', opacity: '12%' },
      { name: 'focusVisible', baseColor: '212323', opacity: '30%' },
    ];
    
    return (
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-xl font-medium">Text</h3>
          <Badge className="bg-gray-900 text-white">text-gray</Badge>
        </div>
        
        <div className="overflow-x-auto">
          <Table compact>
            <TableHeader>
              <TableRow className="border-b">
                <TableHead className="w-[20%]">Variação</TableHead>
                <TableHead className="w-[15%]">Amostra</TableHead>
                <TableHead className="w-[25%]">Token CSS</TableHead>
                <TableHead className="w-[25%]">Base Color</TableHead>
                <TableHead className="w-[15%]">Opacidade</TableHead>
                {showWCAG && <TableHead className="w-[12.5%]">Contr. (Branco)</TableHead>}
                {showWCAG && <TableHead className="w-[12.5%]">Contr. (Preto)</TableHead>}
              </TableRow>
            </TableHeader>
            <TableBody>
              {textVariants.map((variant) => {
                const isHexColor = !variant.baseColor.includes('-');
                let hexColor;
                
                if (isHexColor) {
                  const r = parseInt(variant.baseColor.substring(0, 2), 16);
                  const g = parseInt(variant.baseColor.substring(2, 4), 16);
                  const b = parseInt(variant.baseColor.substring(4, 6), 16);
                  const opacityValue = parseInt(variant.opacity) / 100;
                  hexColor = `rgba(${r}, ${g}, ${b}, ${opacityValue})`;
                } else {
                  hexColor = colorUtils.getComputedColor(`var(--${variant.baseColor})`);
                }
                
                const contrastWithWhite = colorUtils.getContrastRatio(hexColor, '#FFFFFF');
                const contrastWithBlack = colorUtils.getContrastRatio(hexColor, '#000000');
                const needsDarkText = variant.name === 'disabled' || ['hover', 'selected', 'focus', 'focusVisible'].includes(variant.name);
                
                return (
                  <TableRow key={`text-${variant.name}`} className="border-b hover:bg-gray-50">
                    <TableCell>
                      <code className="bg-gray-100 px-2 py-1 rounded text-sm">text-{variant.name}</code>
                    </TableCell>
                    <TableCell>
                      <div 
                        className={`h-8 w-16 rounded ${needsDarkText ? 'text-black' : 'text-white'} flex items-center justify-center border border-gray-200`} 
                        style={{ backgroundColor: hexColor }}
                      >
                        Aa
                      </div>
                    </TableCell>
                    <TableCell>
                      <code className="bg-gray-100 px-2 py-1 rounded text-sm">--text-{variant.name}</code>
                    </TableCell>
                    <TableCell>
                      <code className="bg-gray-100 px-2 py-1 rounded text-sm">{variant.baseColor}</code>
                    </TableCell>
                    <TableCell>
                      {variant.opacity}
                    </TableCell>
                    {showWCAG && (
                      <TableCell>
                        <div className={`px-2 py-1 rounded text-center w-full ${contrastWithWhite >= 4.5 ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}`}>
                          {contrastWithWhite.toFixed(2)}
                          <span className="text-xs ml-1">{contrastWithWhite >= 4.5 ? 'AA' : ''}</span>
                        </div>
                      </TableCell>
                    )}
                    {showWCAG && (
                      <TableCell>
                        <div className={`px-2 py-1 rounded text-center w-full ${contrastWithBlack >= 4.5 ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}`}>
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

  // Central explanation component for all variation types
  const VariationTypesExplanation = () => (
    <div className="bg-gray-50 p-4 rounded-lg mb-8 border border-gray-200">
      <h3 className="text-lg font-medium mb-3">Tipos de Variação de Cores</h3>
      <p className="text-mui-text-secondary mb-3">
        Cada paleta de cores inclui as seguintes variações para diferentes contextos e estados:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {variationTypesExplanation.map((item) => (
          <div key={item.name} className="flex items-start gap-2">
            <code className="bg-gray-100 px-2 py-1 rounded text-sm shrink-0 mt-0.5">{item.name}</code>
            <span className="text-sm text-mui-text-secondary">{item.description}</span>
          </div>
        ))}
      </div>
    </div>
  );

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
          <TabsTrigger value="palettes">Palettes</TabsTrigger>
          <TabsTrigger value="baseColors">Base colors</TabsTrigger>
          <TabsTrigger value="usage">Uso</TabsTrigger>
          <TabsTrigger value="accessibility">Acessibilidade</TabsTrigger>
        </TabsList>

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
                  <Badge className="bg-amicci-500 text-white">base-color-amicci</Badge>
                  <Badge className="bg-amicciDark-500 text-white">base-color-amicciDark</Badge>
                  <Badge className="bg-blue-500 text-white">base-color-blue</Badge>
                  <Badge className="bg-magenta-500 text-white">base-color-magenta</Badge>
                  <Badge className="bg-green-500 text-white">base-color-green</Badge>
                  <Badge className="bg-gray-500 text-white">base-color-gray</Badge>
                  <Badge className="bg-orange-500 text-white">base-color-orange</Badge>
                  <Badge className="bg-red-500 text-white">base-color-red</Badge>
                  <Badge className="bg-yellow-500 text-black">base-color-yellow</Badge>
                  <Badge className="bg-white text-black border border-gray-200">base-color-common-white</Badge>
                </div>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">2. Paletas Compostas</h3>
                <p className="text-mui-text-secondary">
                  Paletas semânticas que utilizam as cores básicas como base:
                </p>
                <div className="flex flex-wrap gap-1 mt-2">
                  <Badge className="bg-primary-main text-primary-contrast">base-color-amicci</Badge>
                  <Badge className="bg-secondary-main text-secondary-contrast">base-color-amicciDark</Badge>
                  <Badge className="bg-tertiary-main text-tertiary-contrast">base-color-magenta</Badge>
                  <Badge className="bg-action-main text-action-contrast">base-color-gray</Badge>
                  <Badge className="bg-error-main text-error-contrast">base-color-red</Badge>
                  <Badge className="bg-warning-main text-black">base-color-yellow</Badge>
                  <Badge className="bg-info-main text-info-contrast">base-color-blue</Badge>
                  <Badge className="bg-success-main text-success-contrast">base-color-green</Badge>
                  <Badge className="bg-gray-900 text-white">base-color-gray</Badge>
                </div>
              </div>
            </div>
            
            <VariationTypesExplanation />
            
            <p className="text-mui-text-secondary mb-4">
              Exemplos de variações em uma paleta composta:
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
                <li><code className="bg-mui-sidebar px-1 rounded">text-gray-900</code> - Texto principal</li>
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
        
        <TabsContent value="palettes" className="space-y-6">
          <ComponentCard title="Palettes">
            <p className="text-mui-text-secondary mb-6">
              As paletas compostas são construídas a partir das cores básicas e fornecem variações
              semânticas para diferentes estados e usos na interface.
            </p>
            
            <VariationTypesExplanation />
            
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
              colorBase="gray" 
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
            
            <TextPaletteTable />
          </ComponentCard>
        </TabsContent>
        
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
        
        <TabsContent value="usage" className="space-y-6">
          <ComponentCard title="Uso das Cores">
            <p className="text-mui-text-secondary mb-6">
              Diretrizes para o uso correto das cores na interface.
            </p>
            
            <VariationTypesExplanation />
            
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
