import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Chip } from '@/components/ui/chip';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Copy, Check, Eye, EyeOff, AlertCircle, Info } from 'lucide-react';
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

const BaseColorsTable = ({
  baseColors
}) => {
  const copyToClipboard = text => {
    navigator.clipboard.writeText(text);
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

const PaletteTable = ({
  palettes
}) => {
  const copyToClipboard = text => {
    navigator.clipboard.writeText(text);
  };

  const renderCopyButton = text => <button onClick={() => copyToClipboard(text)} className="ml-2 text-gray-400 hover:text-gray-600 transition-colors">
      <Copy size={14} />
    </button>;

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

const baseColorsData = [{
  name: 'Amicci',
  weights: [{
    weight: '50',
    colorClass: 'bg-amicci-50',
    hexValue: '#F1FDFC'
  }, {
    weight: '100',
    colorClass: 'bg-amicci-100',
    hexValue: '#E3FAF9'
  }, {
    weight: '200',
    colorClass: 'bg-amicci-200',
    hexValue: '#C7F5F3'
  }, {
    weight: '300',
    colorClass: 'bg-amicci-300',
    hexValue: '#93EDEA'
  }, {
    weight: '400',
    colorClass: 'bg-amicci-400',
    hexValue: '#51DEDA'
  }, {
    weight: '500',
    colorClass: 'bg-amicci-500',
    hexValue: '#10C2C0'
  }, {
    weight: '600',
    colorClass: 'bg-amicci-600',
    hexValue: '#0EA3A1'
  }, {
    weight: '700',
    colorClass: 'bg-amicci-700',
    hexValue: '#0C8482'
  }, {
    weight: '800',
    colorClass: 'bg-amicci-800',
    hexValue: '#096665'
  }, {
    weight: '900',
    colorClass: 'bg-amicci-900',
    hexValue: '#074A47'
  }, {
    weight: '950',
    colorClass: 'bg-amicci-950',
    hexValue: '#062630'
  }]
}, {
  name: 'AmicciDark',
  weights: [{
    weight: '50',
    colorClass: 'bg-amicciDark-50',
    hexValue: '#E6F5F5'
  }, {
    weight: '100',
    colorClass: 'bg-amicciDark-100',
    hexValue: '#C7E8E9'
  }, {
    weight: '200',
    colorClass: 'bg-amicciDark-200',
    hexValue: '#A1D6D8'
  }, {
    weight: '300',
    colorClass: 'bg-amicciDark-300',
    hexValue: '#72BEC2'
  }, {
    weight: '400',
    colorClass: 'bg-amicciDark-400',
    hexValue: '#3A9CA1'
  }, {
    weight: '500',
    colorClass: 'bg-amicciDark-500',
    hexValue: '#14818A'
  }, {
    weight: '600',
    colorClass: 'bg-amicciDark-600',
    hexValue: '#0D646D'
  }, {
    weight: '700',
    colorClass: 'bg-amicciDark-700',
    hexValue: '#06454A'
  }, {
    weight: '800',
    colorClass: 'bg-amicciDark-800',
    hexValue: '#043A3E'
  }, {
    weight: '900',
    colorClass: 'bg-amicciDark-900',
    hexValue: '#033034'
  }, {
    weight: '950',
    colorClass: 'bg-amicciDark-950',
    hexValue: '#02282A'
  }]
}, {
  name: 'Blue',
  weights: [{
    weight: '50',
    colorClass: 'bg-blue-50',
    hexValue: '#EBF5FF'
  }, {
    weight: '100',
    colorClass: 'bg-blue-100',
    hexValue: '#D6E8FF'
  }, {
    weight: '200',
    colorClass: 'bg-blue-200',
    hexValue: '#ADC8FF'
  }, {
    weight: '300',
    colorClass: 'bg-blue-300',
    hexValue: '#84A9FF'
  }, {
    weight: '400',
    colorClass: 'bg-blue-400',
    hexValue: '#5A8CF8'
  }, {
    weight: '500',
    colorClass: 'bg-blue-500',
    hexValue: '#2970FF'
  }, {
    weight: '600',
    colorClass: 'bg-blue-600',
    hexValue: '#1F5AE8'
  }, {
    weight: '700',
    colorClass: 'bg-blue-700',
    hexValue: '#0057B2'
  }, {
    weight: '800',
    colorClass: 'bg-blue-800',
    hexValue: '#0C41A0'
  }, {
    weight: '900',
    colorClass: 'bg-blue-900',
    hexValue: '#093186'
  }, {
    weight: '950',
    colorClass: 'bg-blue-950',
    hexValue: '#072B7A'
  }]
}, {
  name: 'Magenta',
  weights: [{
    weight: '50',
    colorClass: 'bg-magenta-50',
    hexValue: '#FDF5FA'
  }, {
    weight: '100',
    colorClass: 'bg-magenta-100',
    hexValue: '#F9E5F4'
  }, {
    weight: '200',
    colorClass: 'bg-magenta-200',
    hexValue: '#F2CAEB'
  }, {
    weight: '300',
    colorClass: 'bg-magenta-300',
    hexValue: '#E7A4DD'
  }, {
    weight: '400',
    colorClass: 'bg-magenta-400',
    hexValue: '#C963BA'
  }, {
    weight: '500',
    colorClass: 'bg-magenta-500',
    hexValue: '#9B247F'
  }, {
    weight: '600',
    colorClass: 'bg-magenta-600',
    hexValue: '#841E6C'
  }, {
    weight: '700',
    colorClass: 'bg-magenta-700',
    hexValue: '#6D1959'
  }, {
    weight: '800',
    colorClass: 'bg-magenta-800',
    hexValue: '#571447'
  }, {
    weight: '900',
    colorClass: 'bg-magenta-900',
    hexValue: '#49123C'
  }, {
    weight: '950',
    colorClass: 'bg-magenta-950',
    hexValue: '#3E0F32'
  }]
}, {
  name: 'Green',
  weights: [{
    weight: '50',
    colorClass: 'bg-green-50',
    hexValue: '#ECFDF3'
  }, {
    weight: '100',
    colorClass: 'bg-green-100',
    hexValue: '#D1FADF'
  }, {
    weight: '200',
    colorClass: 'bg-green-200',
    hexValue: '#A6F4C5'
  }, {
    weight: '300',
    colorClass: 'bg-green-300',
    hexValue: '#6CE9A6'
  }, {
    weight: '400',
    colorClass: 'bg-green-400',
    hexValue: '#32D583'
  }, {
    weight: '500',
    colorClass: 'bg-green-500',
    hexValue: '#12B76A'
  }, {
    weight: '600',
    colorClass: 'bg-green-600',
    hexValue: '#039855'
  }, {
    weight: '700',
    colorClass: 'bg-green-700',
    hexValue: '#027A48'
  }, {
    weight: '800',
    colorClass: 'bg-green-800',
    hexValue: '#05603A'
  }, {
    weight: '900',
    colorClass: 'bg-green-900',
    hexValue: '#055735'
  }, {
    weight: '950',
    colorClass: 'bg-green-950',
    hexValue: '#054F31'
  }]
}, {
  name: 'Gray',
  weights: [{
    weight: '50',
    colorClass: 'bg-gray-50',
    hexValue: '#F9FBFB'
  }, {
    weight: '100',
    colorClass: 'bg-gray-100',
    hexValue: '#F3F6F5'
  }, {
    weight: '200',
    colorClass: 'bg-gray-200',
    hexValue: '#EAEFF0'
  }, {
    weight: '300',
    colorClass: 'bg-gray-300',
    hexValue: '#CED6D6'
  }, {
    weight: '400',
    colorClass: 'bg-gray-400',
    hexValue: '#AFB9BA'
  }, {
    weight: '500',
    colorClass: 'bg-gray-500',
    hexValue: '#808586'
  }, {
    weight: '600',
    colorClass: 'bg-gray-600',
    hexValue: '#656969'
  }, {
    weight: '700',
    colorClass: 'bg-gray-700',
    hexValue: '#4A4F4F'
  }, {
    weight: '800',
    colorClass: 'bg-gray-800',
    hexValue: '#313536'
  }, {
    weight: '900',
    colorClass: 'bg-gray-900',
    hexValue: '#292C2D'
  }, {
    weight: '950',
    colorClass: 'bg-gray-950',
    hexValue: '#212323'
  }]
}, {
  name: 'Red',
  weights: [{
    weight: '50',
    colorClass: 'bg-red-50',
    hexValue: '#FEF3F2'
  }, {
    weight: '100',
    colorClass: 'bg-red-100',
    hexValue: '#FEE4E2'
  }, {
    weight: '200',
    colorClass: 'bg-red-200',
    hexValue: '#FECDCA'
  }, {
    weight: '300',
    colorClass: 'bg-red-300',
    hexValue: '#FDA29B'
  }, {
    weight: '400',
    colorClass: 'bg-red-400',
    hexValue: '#F97066'
  }, {
    weight: '500',
    colorClass: 'bg-red-500',
    hexValue: '#F04438'
  }, {
    weight: '600',
    colorClass: 'bg-red-600',
    hexValue: '#D92D20'
  }, {
    weight: '700',
    colorClass: 'bg-red-700',
    hexValue: '#B42318'
  }, {
    weight: '800',
    colorClass: 'bg-red-800',
    hexValue: '#912018'
  }, {
    weight: '900',
    colorClass: 'bg-red-900',
    hexValue: '#862017'
  }, {
    weight: '950',
    colorClass: 'bg-red-950',
    hexValue: '#7A271A'
  }]
}, {
  name: 'Yellow',
  weights: [{
    weight: '50',
    colorClass: 'bg-yellow-50',
    hexValue: '#FFFDE7'
  }, {
    weight: '100',
    colorClass: 'bg-yellow-100',
    hexValue: '#FFF9C4'
  }, {
    weight: '200',
    colorClass: 'bg-yellow-200',
    hexValue: '#FFF59D'
  }, {
    weight: '300',
    colorClass: 'bg-yellow-300',
    hexValue: '#FFF176'
  }, {
    weight: '400',
    colorClass: 'bg-yellow-400',
    hexValue: '#FFEB3B'
  }, {
    weight: '500',
    colorClass: 'bg-yellow-500',
    hexValue: '#FFEB3B'
  }, {
    weight: '600',
    colorClass: 'bg-yellow-600',
    hexValue: '#FDD835'
  }, {
    weight: '700',
    colorClass: 'bg-yellow-700',
    hexValue: '#FBC02D'
  }, {
    weight: '800',
    colorClass: 'bg-yellow-800',
    hexValue: '#F9A825'
  }, {
    weight: '900',
    colorClass: 'bg-yellow-900',
    hexValue: '#F78F1E'
  }, {
    weight: '950',
    colorClass: 'bg-yellow-950',
    hexValue: '#F57F17'
  }]
}, {
  name: 'Orange',
  weights: [{
    weight: '50',
    colorClass: 'bg-orange-50',
    hexValue: '#FFFAEB'
  }, {
    weight: '100',
    colorClass: 'bg-orange-100',
    hexValue: '#FEF0C7'
  }, {
    weight: '200',
    colorClass: 'bg-orange-200',
    hexValue: '#FEDF89'
  }, {
    weight: '300',
    colorClass: 'bg-orange-300',
    hexValue: '#FEC84B'
  }, {
    weight: '400',
    colorClass: 'bg-orange-400',
    hexValue: '#FDB022'
  }, {
    weight: '500',
    colorClass: 'bg-orange-500',
    hexValue: '#F79009'
  }, {
    weight: '600',
    colorClass: 'bg-orange-600',
    hexValue: '#DC6803'
  }, {
    weight: '700',
    colorClass: 'bg-orange-700',
    hexValue: '#B54708'
  }, {
    weight: '800',
    colorClass: 'bg-orange-800',
    hexValue: '#93370D'
  }, {
    weight: '900',
    colorClass: 'bg-orange-900',
    hexValue: '#86320D'
  }, {
    weight: '950',
    colorClass: 'bg-orange-950',
    hexValue: '#7A2E0E'
  }]
}];

const paletteData = [{
  name: 'Text',
  description: 'Gray',
  variants: [{
    name: 'primary',
    colorClass: 'text-text-primary',
    baseColor: 'gray-900',
    textColor: 'text-white',
    hexValue: '#212323'
  }, {
    name: 'secondary',
    colorClass: 'text-text-secondary',
    baseColor: 'gray-500',
    textColor: 'text-white',
    hexValue: '#808586'
  }, {
    name: 'disabled',
    colorClass: 'text-text-disabled',
    baseColor: 'gray-400',
    textColor: 'text-white',
    hexValue: '#AFB9BA'
  }, {
    name: 'hover',
    colorClass: 'bg-gray-900/[0.04]',
    baseColor: 'gray-900',
    textColor: 'text-black',
    opacity: '4%',
    hexValue: '#2123230A'
  }, {
    name: 'selected',
    colorClass: 'bg-gray-900/[0.08]',
    baseColor: 'gray-900',
    textColor: 'text-black',
    opacity: '8%',
    hexValue: '#21232314'
  }, {
    name: 'focus',
    colorClass: 'bg-gray-900/[0.12]',
    baseColor: 'gray-900',
    textColor: 'text-black',
    opacity: '12%',
    hexValue: '#2123231F'
  }, {
    name: 'focusVisible',
    colorClass: 'bg-gray-900/[0.3]',
    baseColor: 'gray-900',
    textColor: 'text-black',
    opacity: '30%',
    hexValue: '#2123234D'
  }, {
    name: 'contrastText',
    colorClass: 'bg-white',
    baseColor: 'white',
    textColor: 'text-black',
    hexValue: '#FFFFFF'
  }]
}, {
  name: 'Primary',
  description: 'amicci',
  variants: [{
    name: 'main',
    colorClass: 'bg-primary-main',
    baseColor: 'amicci-500',
    textColor: 'text-primary-contrast',
    opacity: '100%',
    hexValue: '#10C2C0'
  }, {
    name: 'dark',
    colorClass: 'bg-primary-dark',
    baseColor: 'amicci-700',
    textColor: 'text-primary-contrast',
    opacity: '100%',
    hexValue: '#0C8482'
  }, {
    name: 'light',
    colorClass: 'bg-primary-light',
    baseColor: 'amicci-100',
    textColor: 'text-black',
    opacity: '100%',
    hexValue: '#E3FAF9'
  }, {
    name: 'contrast',
    colorClass: 'bg-primary-contrast',
    baseColor: 'common-white-main',
    textColor: 'text-primary-main',
    opacity: '100%',
    hexValue: '#FFFFFF'
  }, {
    name: 'hover',
    colorClass: 'bg-primary-hover',
    baseColor: 'amicci-500',
    textColor: 'text-primary-contrast',
    opacity: '4%',
    hexValue: '#10C2C00A'
  }, {
    name: 'selected',
    colorClass: 'bg-primary-selected',
    baseColor: 'amicci-500',
    textColor: 'text-primary-contrast',
    opacity: '8%',
    hexValue: '#10C2C014'
  }, {
    name: 'focus',
    colorClass: 'bg-primary-focus',
    baseColor: 'amicci-500',
    textColor: 'text-black',
    opacity: '12%',
    hexValue: '#10C2C01F'
  }, {
    name: 'focusVisible',
    colorClass: 'bg-primary-focusVisible',
    baseColor: 'amicci-500',
    textColor: 'text-black',
    opacity: '30%',
    hexValue: '#10C2C04D'
  }, {
    name: 'outlinedBorder',
    colorClass: 'bg-primary-outlinedBorder',
    baseColor: 'amicci-500',
    textColor: 'text-black',
    opacity: '50%',
    hexValue: '#10C2C080'
  }]
}, {
  name: 'Secondary',
  description: 'AmicciDark',
  variants: [{
    name: 'main',
    colorClass: 'bg-secondary-main',
    baseColor: 'amicciDark-500',
    textColor: 'text-secondary-contrast',
    opacity: '100%',
    hexValue: '#14818A'
  }, {
    name: 'dark',
    colorClass: 'bg-secondary-dark',
    baseColor: 'amicciDark-700',
    textColor: 'text-secondary-contrast',
    opacity: '100%',
    hexValue: '#06454A'
  }, {
    name: 'light',
    colorClass: 'bg-secondary-light',
    baseColor: 'amicciDark-100',
    textColor: 'text-black',
    opacity: '100%',
    hexValue: '#C7E8E9'
  }, {
    name: 'dark2',
    colorClass: 'bg-amicciDark-800',
    baseColor: 'amicciDark-800',
    textColor: 'text-white',
    opacity: '100%',
    hexValue: '#043A3E'
  }, {
    name: 'contrast',
    colorClass: 'bg-secondary-contrast',
    baseColor: 'common-white-main',
    textColor: 'text-secondary-main',
    opacity: '100%',
    hexValue: '#FFFFFF'
  }]
}];

const Colors = () => {
  return (
    <div className="container mx-auto py-12">
      <FoundationsHeader
        title="Sistema de Cores"
        description="Nosso sistema de cores é construído com variáveis CSS para suportar temas e personalização."
      />
      
      <Tabs defaultValue="overview" className="mt-6">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="base-colors">Cores Base</TabsTrigger>
          <TabsTrigger value="palettes">Paletas</TabsTrigger>
          <TabsTrigger value="usage">Uso</TabsTrigger>
          <TabsTrigger value="accessibility">Acessibilidade</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <div className="space-y-8">
            <ComponentCard title="Sistema de Cores" description="Nosso sistema de cores é construído com variáveis CSS para suportar temas e personalização.">
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
            
            <ComponentCard title="Como Usar" description="Utilize as cores através das classes do Tailwind e tokens CSS.">
              <p className="text-gray-600 mb-4">
                Acesse as cores usando as classes utilitárias do Tailwind baseadas na nomenclatura semântica:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-md border">
                  <code className="text-sm bg-amicci-50 p-1 rounded text-amicci-800">bg-primary-main</code>
                  <p className="text-sm mt-2 text-gray-600">Cor primária principal</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-md border">
                  <code className="text-sm bg-amicci-50 p-1 rounded text-amicci-800">text-error-main</code>
                  <p className="text-sm mt-2 text-gray-600">Texto na cor de erro</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-md border">
                  <code className="text-sm bg-amicci-50 p-1 rounded text-amicci-800">border-warning-outlinedBorder</code>
                  <p className="text-sm mt-2 text-gray-600">Borda na cor de contorno de aviso</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-md border">
                  <code className="text-sm bg-amicci-50 p-1 rounded text-amicci-800">bg-amicci-500</code>
                  <p className="text-sm mt-2 text-gray-600">Cor básica amicci (500)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-md border">
                  <code className="text-sm bg-amicci-50 p-1 rounded text-amicci-800">text-gray-900</code>
                  <p className="text-sm mt-2 text-gray-600">Texto principal</p>
                </div>
              </div>
            </ComponentCard>
          </div>
        </TabsContent>
        
        <TabsContent value="base-colors">
          <ComponentCard title="Cores Base" description="Conjunto de cores básicas que formam a fundação do sistema.">
            <p className="text-gray-600 mb-6">
              Estas cores básicas servem como alicerce para todo o sistema de design, fornecendo consistência visual em toda a aplicação.
            </p>
            <BaseColorsTable baseColors={baseColorsData} />
          </ComponentCard>
        </TabsContent>
        
        <TabsContent value="palettes">
          <ComponentCard title="Paletas" description="Paletas semânticas construídas a partir das cores base.">
            <p className="text-gray-600 mb-6">
              Nossas paletas semânticas atribuem significado e função às cores, facilitando o uso consistente em toda a interface.
            </p>
            <PaletteTable palettes={paletteData} />
          </ComponentCard>
        </TabsContent>
        
        <TabsContent value="usage">
          <ComponentCard title="Uso" description="Orientações para a aplicação correta das cores na interface.">
            <p className="text-gray-600 mb-6">
              Diretrizes de uso que asseguram consistência visual e funcional em toda a experiência do usuário.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Aplicação em Componentes</h3>
                <p className="text-gray-600 mb-4">
                  Nossas cores são aplicadas de acordo com as seguintes diretrizes para manter consistência visual em toda a plataforma.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div className="border p-4 rounded-lg">
                    <h4 className="font-medium mb-3">Botões</h4>
                    <div className="flex flex-col space-y-4">
                      <Button>Botão Primário</Button>
                      <Button variant="secondary">Botão Secundário</Button>
                      <Button variant="outline-default">Botão Outline</Button>
                      <Button variant="text-default">Botão Texto</Button>
                    </div>
                  </div>
                  
                  <div className="border p-4 rounded-lg">
                    <h4 className="font-medium mb-3">Badges</h4>
                    <div className="flex flex-wrap gap-3">
                      <Badge>Default</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="outline">Outline</Badge>
                      <Badge variant="destructive">Destructive</Badge>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Diretrizes de Contraste</h3>
                <p className="text-gray-600 mb-4">
                  Todas as cores foram testadas para garantir contraste adequado seguindo as diretrizes WCAG 2.1.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Combinações Recomendadas</h4>
                    <div className="space-y-2">
                      <div className="p-3 bg-primary-main rounded">
                        <p className="text-white">Texto em branco sobre fundo primário</p>
                      </div>
                      <div className="p-3 bg-white border border-primary-main rounded">
                        <p className="text-primary-main">Texto primário sobre fundo branco</p>
                      </div>
                      <div className="p-3 bg-secondary-dark rounded">
                        <p className="text-white">Texto em branco sobre fundo secundário escuro</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Combinações a Evitar</h4>
                    <div className="space-y-2">
                      <div className="p-3 bg-amicci-100 rounded">
                        <p className="text-amicci-200">❌ Contraste insuficiente: cores próximas</p>
                      </div>
                      <div className="p-3 bg-yellow-300 rounded">
                        <p className="text-white">❌ Combinação que pode dificultar a leitura</p>
                      </div>
                      <div className="p-3 bg-gray-200 rounded">
                        <p className="text-gray-400">❌ Texto muito claro em fundo claro</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ComponentCard>
        </TabsContent>
        
        <TabsContent value="accessibility">
          <ComponentCard title="Acessibilidade de Cores" description="Garantindo que nosso sistema de cores seja acessível a todos.">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Contraste</h3>
                <p className="text-gray-600 mb-4">
                  Todas as combinações de cores de texto e fundo atendem aos requisitos de contraste WCAG 2.1 AA:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div className="border p-4 rounded-lg space-y-2">
                    <div className="flex items-center gap-2">
                      <Info className="h-5 w-5 text-info-main" />
                      <h4 className="font-medium">Texto normal</h4>
                    </div>
                    <p className="text-sm text-gray-600">Contraste mínimo de 4.5:1</p>
                    <div className="p-3 bg-primary-main rounded">
                      <p className="text-white text-sm">Exemplo de texto com contraste adequado</p>
                    </div>
                  </div>
                  
                  <div className="border p-4 rounded-lg space-y-2">
                    <div className="flex items-center gap-2">
                      <Info className="h-5 w-5 text-info-main" />
                      <h4 className="font-medium">Texto grande (18pt ou 14pt bold)</h4>
                    </div>
                    <p className="text-sm text-gray-600">Contraste mínimo de 3:1</p>
                    <div className="p-3 bg-amicci-300 rounded">
                      <p className="text-gray-800 text-xl font-bold">Texto grande</p>
                    </div>
                  </div>
                  
                  <div className="border p-4 rounded-lg space-y-2">
                    <div className="flex items-center gap-2">
                      <Info className="h-5 w-5 text-info-main" />
                      <h4 className="font-medium">Componentes de interface e gráficos</h4>
                    </div>
                    <p className="text-sm text-gray-600">Contraste mínimo de 3:1</p>
                    <div className="p-3 rounded flex justify-center">
                      <Button>Botão de exemplo</Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Não Dependa Apenas da Cor</h3>
                <p className="text-gray-600 mb-4">
                  Para garantir que as informações sejam acessíveis a pessoas com deficiência visual ou daltonismo, 
                  não usamos apenas cor para transmitir informações importantes:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div className="border p-4 rounded-lg space-y-2">
                    <div className="flex items-center gap-2 text-primary-main">
                      <Check className="h-5 w-5" />
                      <h4 className="font-medium">Combinação com elementos visuais</h4>
                    </div>
                    <p className="text-sm text-gray-600">Combinamos cores com ícones, textos e padrões</p>
                    <div className="p-3 bg-gray-100 rounded flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-error-main" />
                      <span className="text-error-main">Erro no formulário</span>
                    </div>
                  </div>
                  
                  <div className="border p-4 rounded-lg space-y-2">
                    <div className="flex items-center gap-2 text-primary-main">
                      <Check className="h-5 w-5" />
                      <h4 className="font-medium">Alternativas textuais</h4>
                    </div>
                    <p className="text-sm text-gray-600">Oferecemos alternativas textuais para informações baseadas em cores</p>
                    <div className="p-3 bg-gray-100 rounded">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-success-main"></div>
                        <span>Status: Ativo</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border p-4 rounded-lg space-y-2">
                    <div className="flex items-center gap-2 text-primary-main">
                      <Check className="h-5 w-5" />
                      <h4 className="font-medium">Contraste suficiente</h4>
                    </div>
                    <p className="text-sm text-gray-600">Mantemos contraste suficiente mesmo em visualizações monocromáticas</p>
                    <div className="p-3 bg-gray-100 rounded flex gap-2">
                      <Badge>Normal</Badge>
                      <Badge variant="outline">Outline</Badge>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Teste de Daltonismo</h3>
                <p className="text-gray-600 mb-4">
                  Nosso sistema de cores foi testado para os seguintes tipos de daltonismo:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div className="border p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Deuteranopia</h4>
                    <p className="text-sm text-gray-600 mb-3">Deficiência de percepção do verde</p>
                    <div className="grid grid-cols-4 gap-2">
                      <ColorSwatch color="bg-primary-main" className="h-14" />
                      <ColorSwatch color="bg-secondary-main" className="h-14" />
                      <ColorSwatch color="bg-error-main" className="h-14" />
                      <ColorSwatch color="bg-success-main" className="h-14" />
                    </div>
                    <div className="flex justify-end mt-2">
                      <Button variant="secondary" startIcon={<Eye className="h-3 w-3" />}>
                        Simular Deuteranopia
                      </Button>
                    </div>
                  </div>
                  
                  <div className="border p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Protanopia</h4>
                    <p className="text-sm text-gray-600 mb-3">Deficiência de percepção do vermelho</p>
                    <div className="grid grid-cols-4 gap-2">
                      <ColorSwatch color="bg-primary-main" className="h-14" />
                      <ColorSwatch color="bg-secondary-main" className="h-14" />
                      <ColorSwatch color="bg-error-main" className="h-14" />
                      <ColorSwatch color="bg-success-main" className="h-14" />
                    </div>
                    <div className="flex justify-end mt-2">
                      <Button variant="secondary" startIcon={<Eye className="h-3 w-3" />}>
                        Simular Protanopia
                      </Button>
                    </div>
                  </div>
                  
                  <div className="border p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Tritanopia</h4>
                    <p className="text-sm text-gray-600 mb-3">Deficiência de percepção do azul</p>
                    <div className="grid grid-cols-4 gap-2">
                      <ColorSwatch color="bg-primary-main" className="h-14" />
                      <ColorSwatch color="bg-secondary-main" className="h-14" />
                      <ColorSwatch color="bg-error-main" className="h-14" />
                      <ColorSwatch color="bg-success-main" className="h-14" />
                    </div>
                    <div className="flex justify-end mt-2">
                      <Button variant="secondary" startIcon={<Eye className="h-3 w-3" />}>
                        Simular Tritanopia
                      </Button>
                    </div>
                  </div>
                  
                  <div className="border p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Acromatopsia</h4>
                    <p className="text-sm text-gray-600 mb-3">Ausência completa de percepção de cores</p>
                    <div className="grid grid-cols-4 gap-2">
                      <ColorSwatch color="bg-primary-main" className="h-14" />
                      <ColorSwatch color="bg-secondary-main" className="h-14" />
                      <ColorSwatch color="bg-error-main" className="h-14" />
                      <ColorSwatch color="bg-success-main" className="h-14" />
                    </div>
                    <div className="flex justify-end mt-2">
                      <Button variant="secondary" startIcon={<Eye className="h-3 w-3" />}>
                        Simular Acromatopsia
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Princípios Gerais</h3>
                <p className="text-gray-600 mb-4">
                  Nosso sistema de cores foi projetado com acessibilidade em mente:
                </p>
                
                <ul className="space-y-2 list-disc pl-5">
                  <li>Os pares de cores atendem aos requisitos de contraste WCAG 2.1 AA</li>
                  <li>Cada paleta inclui versões de contraste dedicadas</li>
                  <li>As cores seguem uma hierarquia visual clara</li>
                  <li>Estados de interação (hover, focus, selected) são visualmente distintos</li>
                </ul>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-primary-main p-6 rounded-lg text-center">
                    <p className="text-primary-contrast font-medium">Texto em Contraste</p>
                    <div className="mt-2 text-xs text-primary-contrast/80">WCAG AA: Aprovado</div>
                  </div>
                  <div className="bg-secondary-main p-6 rounded-lg text-center">
                    <p className="text-secondary-contrast font-medium">Texto em Contraste</p>
                    <div className="mt-2 text-xs text-secondary-contrast/80">WCAG AA: Aprovado</div>
                  </div>
                  <div className="bg-error-main p-6 rounded-lg text-center">
                    <p className="text-error-contrast font-medium">Texto em Contraste</p>
                    <div className="mt-2 text-xs text-error-contrast/80">WCAG AA: Aprovado</div>
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
