
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

  const getTextColor = () => {
    if (hexValue) {
      try {
        const luminance = colorUtils.getLuminance(hexValue);
        return luminance > 0.5 ? 'text-gray-800' : 'text-white';
      } catch (e) {
        return getLightDarkFromName();
      }
    }
    return getLightDarkFromName();
  };

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

  const getBackgroundStyle = () => {
    if (color.startsWith('bg-')) {
      return color;
    }
    if (hexValue && !color.startsWith('bg-')) {
      return `bg-[${hexValue}]`;
    }
    return color;
  };

  return <div 
    className={`relative w-full rounded-md ${getBackgroundStyle()} ${className} flex items-center justify-center px-3 transition-all hover:shadow-md cursor-pointer group`} 
    onClick={onClick || handleCopy} 
    role="button" 
    tabIndex={0} 
    style={hexValue && !color.startsWith('bg-') ? { backgroundColor: hexValue } : undefined}
  >
    {textOverlay && <span className={`${textColor} font-medium`}>{textOverlay}</span>}
    {weight && <span className={`text-xs ${textColor} opacity-75 absolute left-2 top-1`}>{weight}</span>}
    <div className={`absolute right-2 top-2 transition-opacity ${copied ? 'opacity-100' : 'opacity-0 group-hover:opacity-70'}`}>
      {copied ? <Check className={`w-4 h-4 ${textColor}`} /> : <Copy className={`w-4 h-4 ${textColor}`} />}
    </div>
  </div>;
};

const BaseColorsTable = ({ baseColors }) => {
  const copyToClipboard = text => {
    navigator.clipboard.writeText(text);
  };

  const renderCopyButton = text => (
    <button onClick={() => copyToClipboard(text)} className="ml-2 text-gray-400 hover:text-gray-600 transition-colors">
      <Copy size={14} />
    </button>
  );

  return <div className="space-y-8">
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
            {baseColor.weights.map(weight => {
              const hexValue = weight.hexValue;
              const rgbValue = colorUtils.hexToRgb(hexValue);
              const hslValue = colorUtils.hexToHsl(hexValue);
              return (
                <TableRow key={`${baseColor.name}-${weight.weight}`}>
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
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    ))}
  </div>;
};

const PaletteTable = ({ palettes }) => {
  const copyToClipboard = text => {
    navigator.clipboard.writeText(text);
  };

  const renderCopyButton = text => (
    <button onClick={() => copyToClipboard(text)} className="ml-2 text-gray-400 hover:text-gray-600 transition-colors">
      <Copy size={14} />
    </button>
  );

  const getWCAGStatus = hexColor => {
    try {
      const contrastWithWhite = colorUtils.getContrastRatio(hexColor, '#FFFFFF');
      const contrastWithBlack = colorUtils.getContrastRatio(hexColor, '#000000');
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
    {palettes.map(palette => (
      <div key={palette.name} className="space-y-4">
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
              return (
                <TableRow key={`${palette.name}-${variant.name}`}>
                  <TableCell className="font-mono">{`${palette.name.toLowerCase()}-${variant.name}`}</TableCell>
                  <TableCell>
                    <ColorSwatch 
                      color={variant.colorClass} 
                      hexValue={variant.hexValue} 
                      copyValue={variant.hexValue} 
                      textOverlay={variant.hexValue || '#F0F0F0'} 
                      className="h-12" 
                    />
                  </TableCell>
                  <TableCell className="font-mono">
                    <code>{`--${palette.name.toLowerCase()}-${variant.name}`}</code>
                    {renderCopyButton(`--${palette.name.toLowerCase()}-${variant.name}`)}
                  </TableCell>
                  <TableCell>{variant.baseColor}</TableCell>
                  <TableCell>{variant.opacity || '100%'}</TableCell>
                  {wcagInfo && (
                    <TableCell>
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
                    </TableCell>
                  )}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    ))}
  </div>;
};

const Colors = () => {
  const [logoTheme, setLogoTheme] = useState<'light' | 'dark' | 'color'>('light');
  
  const baseColors = [
    {
      name: "Gray",
      weights: [
        { weight: "50", hexValue: "#F9FAFB", colorClass: "bg-gray-50" },
        { weight: "100", hexValue: "#F3F4F6", colorClass: "bg-gray-100" },
        { weight: "200", hexValue: "#E5E7EB", colorClass: "bg-gray-200" },
        { weight: "300", hexValue: "#D1D5DB", colorClass: "bg-gray-300" },
        { weight: "400", hexValue: "#9CA3AF", colorClass: "bg-gray-400" },
        { weight: "500", hexValue: "#6B7280", colorClass: "bg-gray-500" },
        { weight: "600", hexValue: "#4B5563", colorClass: "bg-gray-600" },
        { weight: "700", hexValue: "#374151", colorClass: "bg-gray-700" },
        { weight: "800", hexValue: "#1F2937", colorClass: "bg-gray-800" },
        { weight: "900", hexValue: "#111827", colorClass: "bg-gray-900" },
        { weight: "950", hexValue: "#030712", colorClass: "bg-gray-950" },
      ]
    },
    {
      name: "Primary",
      weights: [
        { weight: "50", hexValue: "#E9F8F8", colorClass: "bg-primary-50" },
        { weight: "100", hexValue: "#D2F2F2", colorClass: "bg-primary-100" },
        { weight: "200", hexValue: "#A5E5E5", colorClass: "bg-primary-200" },
        { weight: "300", hexValue: "#79D8D8", colorClass: "bg-primary-300" },
        { weight: "400", hexValue: "#4CCCCC", colorClass: "bg-primary-400" },
        { weight: "500", hexValue: "#1FBFBF", colorClass: "bg-primary-500" },
        { weight: "600", hexValue: "#0FC2C0", colorClass: "bg-primary-main" },
        { weight: "700", hexValue: "#0A9999", colorClass: "bg-primary-700" },
        { weight: "800", hexValue: "#077373", colorClass: "bg-primary-800" },
        { weight: "900", hexValue: "#044C4C", colorClass: "bg-primary-900" },
        { weight: "950", hexValue: "#022626", colorClass: "bg-primary-950" },
      ],
    },
    {
      name: "Secondary",
      weights: [
        { weight: "50", hexValue: "#E6EEF2", colorClass: "bg-secondary-50" },
        { weight: "100", hexValue: "#CCDDE6", colorClass: "bg-secondary-100" },
        { weight: "200", hexValue: "#99BBCC", colorClass: "bg-secondary-200" },
        { weight: "300", hexValue: "#6699B3", colorClass: "bg-secondary-300" },
        { weight: "400", hexValue: "#337799", colorClass: "bg-secondary-400" },
        { weight: "500", hexValue: "#005580", colorClass: "bg-secondary-500" },
        { weight: "600", hexValue: "#016071", colorClass: "bg-secondary-main" },
        { weight: "700", hexValue: "#00445A", colorClass: "bg-secondary-700" },
        { weight: "800", hexValue: "#003344", colorClass: "bg-secondary-800" },
        { weight: "900", hexValue: "#00222D", colorClass: "bg-secondary-900" },
        { weight: "950", hexValue: "#001117", colorClass: "bg-secondary-950" },
      ],
    },
  ];

  const palettes = [
    {
      name: "Success",
      description: "positive",
      variants: [
        { name: "light", colorClass: "bg-success-light", hexValue: "#E3F8E8", baseColor: "Green 100", opacity: "100%" },
        { name: "main", colorClass: "bg-success-main", hexValue: "#0E9F6E", baseColor: "Green 600", opacity: "100%" },
        { name: "dark", colorClass: "bg-success-dark", hexValue: "#046C4E", baseColor: "Green 700", opacity: "100%" },
      ]
    },
    {
      name: "Warning",
      description: "cautionary",
      variants: [
        { name: "light", colorClass: "bg-warning-light", hexValue: "#FDF6B2", baseColor: "Yellow 100", opacity: "100%" },
        { name: "main", colorClass: "bg-warning-main", hexValue: "#FFB800", baseColor: "Yellow 600", opacity: "100%" },
        { name: "dark", colorClass: "bg-warning-dark", hexValue: "#D97706", baseColor: "Yellow 700", opacity: "100%" },
      ]
    },
    {
      name: "Error",
      description: "negative",
      variants: [
        { name: "light", colorClass: "bg-error-light", hexValue: "#FBEFEF", baseColor: "Red 100", opacity: "100%" },
        { name: "main", colorClass: "bg-error-main", hexValue: "#B91C1C", baseColor: "Red 600", opacity: "100%" },
        { name: "dark", colorClass: "bg-error-dark", hexValue: "#7F1D1D", baseColor: "Red 700", opacity: "100%" },
      ]
    },
    {
      name: "Info",
      description: "informational",
      variants: [
        { name: "light", colorClass: "bg-info-light", hexValue: "#DBEAFE", baseColor: "Blue 100", opacity: "100%" },
        { name: "main", colorClass: "bg-info-main", hexValue: "#2563EB", baseColor: "Blue 600", opacity: "100%" },
        { name: "dark", colorClass: "bg-info-dark", hexValue: "#1E40AF", baseColor: "Blue 700", opacity: "100%" },
      ]
    },
  ];

  return (
    <div className="container mx-auto">
      <FoundationsHeader
        title="Cores"
        description="Padronização de cores para uso na interface do usuário e identidade visual da Amicci"
      />

      <Tabs defaultValue="paletas" className="w-full">
        <TabsList className="w-full border-b border-gray-200 mb-6">
          <TabsTrigger value="paletas">Paletas</TabsTrigger>
          <TabsTrigger value="cores-base">Cores Base</TabsTrigger>
          <TabsTrigger value="logos">Logotipos</TabsTrigger>
        </TabsList>
        
        <TabsContent value="paletas" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {palettes.map((palette) => (
              <div key={palette.name} className="space-y-2">
                <h3 className="text-lg font-semibold">{palette.name}</h3>
                <div className="grid grid-cols-3 gap-2 h-20">
                  {palette.variants.map((variant) => (
                    <ColorSwatch 
                      key={variant.name} 
                      color={variant.colorClass} 
                      hexValue={variant.hexValue} 
                      textOverlay={variant.name} 
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <Separator className="my-8" />
          
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Detalhes das paletas</h2>
            <PaletteTable palettes={palettes} />
          </div>
        </TabsContent>
        
        <TabsContent value="cores-base" className="space-y-6">
          <div className="grid grid-cols-1 gap-8">
            {baseColors.map((color) => (
              <div key={color.name}>
                <h3 className="text-xl font-semibold mb-4">{color.name}</h3>
                <div className="grid grid-cols-11 gap-1 h-12">
                  {color.weights.map((weight) => (
                    <ColorSwatch 
                      key={weight.weight} 
                      color={weight.colorClass} 
                      hexValue={weight.hexValue} 
                      weight={weight.weight} 
                      className="rounded-md" 
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <Separator className="my-8" />
          
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Detalhes das cores base</h2>
            <BaseColorsTable baseColors={baseColors} />
          </div>
        </TabsContent>
        
        <TabsContent value="logos" className="space-y-6">
          <div className="flex flex-wrap gap-4 mb-6">
            <Button 
              variant={logoTheme === "light" ? "default" : "outline"} 
              onClick={() => setLogoTheme("light")}
            >
              Light
            </Button>
            <Button 
              variant={logoTheme === "dark" ? "default" : "outline"} 
              onClick={() => setLogoTheme("dark")}
            >
              Dark
            </Button>
            <Button 
              variant={logoTheme === "color" ? "default" : "outline"} 
              onClick={() => setLogoTheme("color")}
            >
              Color
            </Button>
          </div>
          
          <div className={`bg-${logoTheme === "dark" ? "gray-900" : "white"} p-8 rounded-lg transition-colors`}>
            <div className="w-full max-w-md mx-auto">
              {logoTheme === "light" && (
                <img 
                  src="/src/pages/assets/Amicci-Logo_Turquesa Claro+Branco.svg" 
                  alt="Amicci Logo Light" 
                  className="w-full" 
                />
              )}
              
              {logoTheme === "dark" && (
                <img 
                  src="/src/pages/assets/Amicci-Logo_Turquesa Escuro+Branco.svg" 
                  alt="Amicci Logo Dark" 
                  className="w-full" 
                />
              )}
              
              {logoTheme === "color" && (
                <img 
                  src="/src/pages/assets/Amicci-Logo_Turquesa+Turquesa Escuro.svg" 
                  alt="Amicci Logo Color" 
                  className="w-full" 
                />
              )}
            </div>
          </div>
          
          <div className="mt-8 space-y-4">
            <h3 className="text-xl font-semibold">Download</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="flex items-center gap-2">
                <Copy size={16} />
                Logo Light (SVG)
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Copy size={16} />
                Logo Dark (SVG)
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Copy size={16} />
                Logo Color (SVG)
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Colors;
