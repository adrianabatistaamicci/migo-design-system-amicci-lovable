import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Chip } from '@/components/ui/chip';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Copy, Check, Eye, EyeOff } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { colorUtils } from '@/utils/colorUtils';
import ComponentCard from '@/components/ComponentCard';
import FoundationsHeader from '@/components/library-components/FoundationsHeader';
import { TailwindTabs } from '@/components/ui/tailwind-tabs';

// ColorSwatch component
const ColorSwatch = ({
  color,
  className = "",
  onClick,
  textOverlay,
  weight,
  hexValue,
  copyValue
}: {
  color: string;
  className?: string;
  onClick?: () => void;
  textOverlay?: string;
  weight?: string;
  hexValue?: string;
  copyValue?: string;
}) => {
  const [copied, setCopied] = useState(false);

  // Determine text color based on background color luminance
  const getTextColor = () => {
    // If we have a hex value, use luminance calculation for determining contrast
    if (hexValue) {
      try {
        const luminance = colorUtils.getLuminance(hexValue);
        return luminance > 0.5 ? 'text-gray-800' : 'text-white';
      } catch (e) {
        // Fallback to heuristic based on color name
        return getLightDarkFromName();
      }
    }

    // If we don't have a hex value, use heuristic based on color name
    return getLightDarkFromName();
  };

  // Helper function to determine if a color is light based on its name
  const getLightDarkFromName = () => {
    const lightColors = ['white', 'light', '50', '100', '200', '300'];
    const isLightColorName = lightColors.some(lightColor => color.toLowerCase().includes(lightColor));
    return isLightColorName ? 'text-gray-800' : 'text-white';
  };
  const handleCopy = () => {
    const valueToCopy = copyValue || hexValue || color;
    navigator.clipboard.writeText(valueToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const textColor = getTextColor();

  // Determine the correct background style
  const getBackgroundStyle = () => {
    // If color starts with 'bg-', we're using a Tailwind class
    if (color.startsWith('bg-')) {
      return color;
    }

    // If color is a hex value and doesn't start with 'bg-', use inline style
    if (hexValue && !color.startsWith('bg-')) {
      return `bg-[${hexValue}]`;
    }

    // Fallback to the original class
    return color;
  };
  return <div className={`relative w-full rounded-md ${getBackgroundStyle()} ${className} flex items-center justify-center px-3 transition-all hover:shadow-md cursor-pointer group`} onClick={onClick || handleCopy} role="button" tabIndex={0} style={hexValue && !color.startsWith('bg-') ? {
    backgroundColor: hexValue
  } : undefined}>
      {textOverlay}
      {weight && <span className={`text-xs ${textColor} opacity-75 absolute left-2 top-1`}>{weight}</span>}
      
      <div className={`absolute right-2 top-2 transition-opacity ${copied ? 'opacity-100' : 'opacity-0 group-hover:opacity-70'}`}>
        {copied ? <Check className={`w-4 h-4 ${textColor}`} /> : <Copy className={`w-4 h-4 ${textColor}`} />}
      </div>
    </div>;
};

// BaseColorsTable component
const BaseColorsTable = ({
  baseColors
}) => {
  const copyToClipboard = text => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };
  const renderCopyButton = text => <button onClick={() => copyToClipboard(text)} className="ml-2 text-gray-400 hover:text-gray-600 transition-colors">
      <Copy size={14} />
    </button>;
  return <div className="space-y-8">
      {baseColors.map(baseColor => <div key={baseColor.name} className="space-y-2">
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
              {baseColor.weights.map(weight => {
            const hexValue = weight.hexValue;
            const rgbValue = colorUtils.hexToRgb(hexValue);
            const hslValue = colorUtils.hexToHsl(hexValue);
            return <TableRow key={`${baseColor.name}-${weight.weight}`}>
                    <TableCell className="font-mono bg-inherit">
                      {baseColor.name.toLowerCase()}-{weight.weight}
                    </TableCell>
                    <TableCell>
                      <ColorSwatch color={weight.colorClass} textOverlay={weight.weight} className="h-12" />
                    </TableCell>
                    <TableCell className="font-mono">
                      --{baseColor.name.toLowerCase()}-{weight.weight}
                      {renderCopyButton(`--${baseColor.name.toLowerCase()}-${weight.weight}`)}
                    </TableCell>
                    <TableCell className="font-mono">
                      {hexValue}
                      {renderCopyButton(hexValue)}
                    </TableCell>
                    <TableCell className="font-mono">
                      {rgbValue}
                      {renderCopyButton(rgbValue)}
                    </TableCell>
                    <TableCell className="font-mono">
                      {hslValue}
                      {renderCopyButton(hslValue)}
                    </TableCell>
                  </TableRow>;
          })}
            </TableBody>
          </Table>
        </div>)}
    </div>;
};

// PaletteTable component
const PaletteTable = ({
  palettes
}) => {
  const copyToClipboard = text => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };
  const renderCopyButton = text => <button onClick={() => copyToClipboard(text)} className="ml-2 text-gray-400 hover:text-gray-600 transition-colors">
      <Copy size={14} />
    </button>;

  // Avalia o contraste WCAG
  const getWCAGStatus = hexColor => {
    try {
      // Avaliamos o contraste com fundo branco
      const contrastWithWhite = colorUtils.getContrastRatio(hexColor, '#FFFFFF');
      const contrastWithBlack = colorUtils.getContrastRatio(hexColor, '#000000');

      // Escolha o melhor contraste
      const bestContrast = Math.max(contrastWithWhite, contrastWithBlack);
      const contrastColor = contrastWithWhite > contrastWithBlack ? 'branco' : 'preto';
      return {
        ratio: bestContrast.toFixed(1),
        passesAA: bestContrast >= 4.5,
        passesAAA: bestContrast >= 7,
        bestContrastWith: contrastColor
      };
    } catch (e) {
      return {
        ratio: 'N/A',
        passesAA: false,
        passesAAA: false,
        bestContrastWith: 'N/A'
      };
    }
  };
  return <div className="space-y-8">
      {palettes.map(palette => <div key={palette.name} className="space-y-4">
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-bold">{palette.name}</h3>
            <span className="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full">
              base-color-{palette.description.toLowerCase()}
            </span>
          </div>
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Variação</TableHead>
                <TableHead>Amostra</TableHead>
                <TableHead>Token CSS</TableHead>
                <TableHead>Base Color</TableHead>
                <TableHead>Opacidade</TableHead>
                <TableHead>Análise WCAG</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {palette.variants.map(variant => {
            const wcagInfo = variant.hexValue ? getWCAGStatus(variant.hexValue) : null;
            return <TableRow key={`${palette.name}-${variant.name}`}>
                    <TableCell className="font-mono">{`${palette.name.toLowerCase()}-${variant.name}`}</TableCell>
                    <TableCell>
                      <ColorSwatch color={variant.colorClass} hexValue={variant.hexValue} copyValue={variant.hexValue} textOverlay={variant.hexValue || '#F0F0F0'} className="h-12" />
                    </TableCell>
                    <TableCell className="font-mono">
                      <code>{`--${palette.name.toLowerCase()}-${variant.name}`}</code>
                      {renderCopyButton(`--${palette.name.toLowerCase()}-${variant.name}`)}
                    </TableCell>
                    <TableCell>{variant.baseColor}</TableCell>
                    <TableCell>{variant.opacity || '100%'}</TableCell>
                    {wcagInfo && <TableCell>
                        <div className="space-y-1 text-xs">
                          <div>
                            <span className="font-medium">Contraste:</span> {wcagInfo.ratio}:1 (com {wcagInfo.bestContrastWith})
                          </div>
                          <div className={`${wcagInfo.passesAA ? "text-success-main" : "text-error-main"} font-medium`}>
                            WCAG AA: {wcagInfo.passesAA ? '✓' : '✗'}
                          </div>
                          <div className={`${wcagInfo.passesAAA ? "text-success-main" : "text-error-main"} font-medium`}>
                            WCAG AAA: {wcagInfo.passesAAA ? '✓' : '✗'}
                          </div>
                        </div>
                      </TableCell>}
                  </TableRow>;
          })}
            </TableBody>
          </Table>
        </div>)}
    </div>;
};

// ColorsSwatches component
const ColorsSwatches = ({ baseColor }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {baseColor.weights.map(weight => (
        <div key={`${baseColor.name}-${weight.weight}`} className="space-y-2">
          <ColorSwatch 
            color={weight.colorClass} 
            hexValue={weight.hexValue}
            weight={weight.weight} 
            className="h-32" 
          />
          <div className="text-sm text-gray-500 font-mono px-1">{weight.hexValue}</div>
        </div>
      ))}
    </div>
  );
};

// Colors component
const Colors = () => {
  const [showHex, setShowHex] = useState(true);
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <FoundationsHeader 
        title="Cores"
        description="Nosso sistema de cores é meticulosamente projetado para dar suporte à comunicação, orientar os usuários através da interface e fornecer feedback. A paleta consiste em cores primárias, secundárias e neutras, cada uma com variações específicas de luminosidade."
        illustration="colors"
      />
      
      <TailwindTabs variant="pillsGray" defaultValue="palette">
        <TabsList className="mb-8">
          <TabsTrigger value="palette">Paleta de Cores</TabsTrigger>
          <TabsTrigger value="semantics">Cores Semânticas</TabsTrigger>
          <TabsTrigger value="tokens">Tokens de Cores</TabsTrigger>
        </TabsList>
        
        <TabsContent value="palette" className="space-y-10">
          <section>
            <h2 className="text-2xl font-bold mb-6">Cores Base</h2>
            <div className="grid gap-8">
              {baseColorsData.map(baseColor => (
                <div key={baseColor.name} className="space-y-4">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    {baseColor.name}
                    <Badge variant="outline" className="font-normal">
                      {baseColor.weights.length} variações
                    </Badge>
                  </h3>
                  <ColorsSwatches baseColor={baseColor} />
                </div>
              ))}
            </div>
          </section>
        </TabsContent>
        
        <TabsContent value="semantics" className="space-y-10">
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Cores Semânticas</h2>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setShowHex(!showHex)}
                className="flex items-center gap-2"
              >
                {showHex ? <EyeOff size={16} /> : <Eye size={16} />}
                {showHex ? 'Ocultar Hex' : 'Mostrar Hex'}
              </Button>
            </div>
            
            <div className="grid gap-8">
              {/* Primary */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Primary (Amicci)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <ColorSwatch 
                      color="bg-primary-main" 
                      textOverlay={showHex ? '#10C2C0' : 'Primary'} 
                      className="h-32" 
                    />
                    <div className="text-sm text-gray-500 px-1">Primary</div>
                  </div>
                  <div className="space-y-2">
                    <ColorSwatch 
                      color="bg-primary-light" 
                      textOverlay={showHex ? '#E3FAF9' : 'Primary Light'} 
                      className="h-32" 
                    />
                    <div className="text-sm text-gray-500 px-1">Primary Light</div>
                  </div>
                  <div className="space-y-2">
                    <ColorSwatch 
                      color="bg-primary-dark" 
                      textOverlay={showHex ? '#0C8482' : 'Primary Dark'} 
                      className="h-32" 
                    />
                    <div className="text-sm text-gray-500 px-1">Primary Dark</div>
                  </div>
                  <div className="space-y-2">
                    <ColorSwatch 
                      color="bg-primary-contrast" 
                      textOverlay={showHex ? '#FFFFFF' : 'Primary Contrast'} 
                      className="h-32" 
                    />
                    <div className="text-sm text-gray-500 px-1">Primary Contrast</div>
                  </div>
                </div>
              </div>
              
              {/* Secondary */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Secondary (AmicciDark)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <ColorSwatch 
                      color="bg-secondary-main" 
                      textOverlay={showHex ? '#14818A' : 'Secondary'} 
                      className="h-32" 
                    />
                    <div className="text-sm text-gray-500 px-1">Secondary</div>
                  </div>
                  <div className="space-y-2">
                    <ColorSwatch 
                      color="bg-secondary-light" 
                      textOverlay={showHex ? '#C7E8E9' : 'Secondary Light'} 
                      className="h-32" 
                    />
                    <div className="text-sm text-gray-500 px-1">Secondary Light</div>
                  </div>
                  <div className="space-y-2">
                    <ColorSwatch 
                      color="bg-secondary-dark" 
                      textOverlay={showHex ? '#06454A' : 'Secondary Dark'} 
                      className="h-32" 
                    />
                    <div className="text-sm text-gray-500 px-1">Secondary Dark</div>
                  </div>
                  <div className="space-y-2">
                    <ColorSwatch 
                      color="bg-secondary-contrast" 
                      textOverlay={showHex ? '#FFFFFF' : 'Secondary Contrast'} 
                      className="h-32" 
                    />
                    <div className="text-sm text-gray-500 px-1">Secondary Contrast</div>
                  </div>
                </div>
              </div>
              
              {/* Success */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Success</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <ColorSwatch 
                      color="bg-success-main" 
                      textOverlay={showHex ? '#12B76A' : 'Success'} 
                      className="h-32" 
                    />
                    <div className="text-sm text-gray-500 px-1">Success</div>
                  </div>
                  <div className="space-y-2">
                    <ColorSwatch 
                      color="bg-success-light" 
                      textOverlay={showHex ? '#D1FADF' : 'Success Light'} 
                      className="h-32" 
                    />
                    <div className="text-sm text-gray-500 px-1">Success Light</div>
                  </div>
                  <div className="space-y-2">
                    <ColorSwatch 
                      color="bg-success-dark" 
                      textOverlay={showHex ? '#027A48' : 'Success Dark'} 
                      className="h-32" 
                    />
                    <div className="text-sm text-gray-500 px-1">Success Dark</div>
                  </div>
                </div>
              </div>
              
              {/* Error */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Error</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <ColorSwatch 
                      color="bg-error-main" 
                      textOverlay={showHex ? '#F04438' : 'Error'} 
                      className="h-32" 
                    />
                    <div className="text-sm text-gray-500 px-1">Error</div>
                  </div>
                  <div className="space-y-2">
                    <ColorSwatch 
                      color="bg-error-light" 
                      textOverlay={showHex ? '#FEE4E2' : 'Error Light'} 
                      className="h-32" 
                    />
                    <div className="text-sm text-gray-500 px-1">Error Light</div>
                  </div>
                  <div className="space-y-2">
                    <ColorSwatch 
                      color="bg-error-dark" 
                      textOverlay={showHex ? '#B42318' : 'Error Dark'} 
                      className="h-32" 
                    />
                    <div className="text-sm text-gray-500 px-1">Error Dark</div>
                  </div>
                </div>
              </div>
              
              {/* Warning */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Warning</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <ColorSwatch 
                      color="bg-warning-main" 
                      textOverlay={showHex ? '#F79009' : 'Warning'} 
                      className="h-32" 
                    />
                    <div className="text-sm text-gray-500 px-1">Warning</div>
                  </div>
                  <div className="space-y-2">
                    <ColorSwatch 
                      color="bg-warning-light" 
                      textOverlay={showHex ? '#FEF0C7' : 'Warning Light'} 
                      className="h-32" 
                    />
                    <div className="text-sm text-gray-500 px-1">Warning Light</div>
                  </div>
                  <div className="space-y-2">
                    <ColorSwatch 
                      color="bg-warning-dark" 
                      textOverlay={showHex ? '#B54708' : 'Warning Dark'} 
                      className="h-32" 
                    />
                    <div className="text-sm text-gray-500 px-1">Warning Dark</div>
                  </div>
                </div>
              </div>
              
              {/* Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Info</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <ColorSwatch 
                      color="bg-info-main" 
                      textOverlay={showHex ? '#2970FF' : 'Info'} 
                      className="h-32" 
                    />
                    <div className="text-sm text-gray-500 px-1">Info</div>
                  </div>
                  <div className="space-y-2">
                    <ColorSwatch 
                      color="bg-info-light" 
                      textOverlay={showHex ? '#D6E8FF' : 'Info Light'} 
                      className="h-32" 
                    />
                    <div className="text-sm text-gray-500 px-1">Info Light</div>
                  </div>
                  <div className="space-y-2">
                    <ColorSwatch 
                      color="bg-info-dark" 
                      textOverlay={showHex ? '#0057B2' : 'Info Dark'} 
                      className="h-32" 
                    />
                    <div className="text-sm text-gray-500 px-1">Info Dark</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </TabsContent>
        
        <TabsContent value="tokens" className="space-y-10">
          <section>
            <h2 className="text-2xl font-bold mb-6">Tokens de Cores Base</h2>
            <BaseColorsTable baseColors={baseColorsData} />
          </section>
          
          <Separator className="my-10" />
          
          <section>
            <h2 className="text-2xl font-bold mb-6">Tokens de Cores Semânticas</h2>
            <PaletteTable palettes={paletteData} />
          </section>
        </TabsContent>
      </TailwindTabs>
    </div>
  );
};

export default Colors;

