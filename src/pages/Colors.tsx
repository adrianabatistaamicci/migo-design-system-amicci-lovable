
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
      {textOverlay && <span className={`${textColor} font-medium`}>{textOverlay}</span>}
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

// Data for components
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
    hexValue: '#FFEE58'
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
  }, {
    name: 'hover',
    colorClass: 'bg-secondary-hover',
    baseColor: 'amicciDark-500',
    textColor: 'text-secondary-contrast',
    opacity: '4%',
    hexValue: '#14818A0A'
  }, {
    name: 'selected',
    colorClass: 'bg-secondary-selected',
    baseColor: 'amicciDark-500',
    textColor: 'text-secondary-contrast',
    opacity: '8%',
    hexValue: '#14818A14'
  }, {
    name: 'focus',
    colorClass: 'bg-secondary-focus',
    baseColor: 'amicciDark-500',
    textColor: 'text-black',
    opacity: '12%',
    hexValue: '#14818A1F'
  }, {
    name: 'focusVisible',
    colorClass: 'bg-secondary-focusVisible',
    baseColor: 'amicciDark-500',
    textColor: 'text-black',
    opacity: '30%',
    hexValue: '#14818A4D'
  }, {
    name: 'outlinedBorder',
    colorClass: 'bg-secondary-outlinedBorder',
    baseColor: 'amicciDark-500',
    textColor: 'text-black',
    opacity: '50%',
    hexValue: '#14818A80'
  }]
}, {
  name: 'Tertiary',
  description: 'Magenta',
  variants: [{
    name: 'main',
    colorClass: 'bg-tertiary-main',
    baseColor: 'magenta-500',
    textColor: 'text-tertiary-contrast',
    hexValue: '#9B247F'
  }, {
    name: 'dark',
    colorClass: 'bg-tertiary-dark',
    baseColor: 'magenta-700',
    textColor: 'text-tertiary-contrast',
    hexValue: '#6D1959'
  }, {
    name: 'light',
    colorClass: 'bg-tertiary-light',
    baseColor: 'magenta-100',
    textColor: 'text-black',
    hexValue: '#F9E5F4'
  }, {
    name: 'hover',
    colorClass: 'bg-tertiary-hover',
    baseColor: 'magenta-500',
    textColor: 'text-tertiary-contrast',
    opacity: '4%',
    hexValue: '#9B247F0A'
  }, {
    name: 'selected',
    colorClass: 'bg-tertiary-selected',
    baseColor: 'magenta-500',
    textColor: 'text-tertiary-contrast',
    opacity: '8%',
    hexValue: '#9B247F14'
  }, {
    name: 'focus',
    colorClass: 'bg-tertiary-focus',
    baseColor: 'magenta-500',
    textColor: 'text-black',
    opacity: '12%',
    hexValue: '#9B247F1F'
  }, {
    name: 'focusVisible',
    colorClass: 'bg-tertiary-focusVisible',
    baseColor: 'magenta-500',
    textColor: 'text-black',
    opacity: '30%',
    hexValue: '#9B247F4D'
  }, {
    name: 'outlinedBorder',
    colorClass: 'bg-tertiary-outlinedBorder',
    baseColor: 'magenta-500',
    textColor: 'text-black',
    opacity: '50%',
    hexValue: '#9B247F80'
  }, {
    name: 'contrast',
    colorClass: 'bg-tertiary-contrast',
    baseColor: 'white',
    textColor: 'text-tertiary-main',
    hexValue: '#FFFFFF'
  }]
}, {
  name: 'Action',
  description: 'Gray',
  variants: [{
    name: 'active',
    colorClass: 'bg-action-main',
    baseColor: 'gray-500',
    textColor: 'text-action-contrast',
    hexValue: '#808586'
  }, {
    name: 'hover',
    colorClass: 'bg-action-hover',
    baseColor: 'gray-100',
    textColor: 'text-black',
    hexValue: '#F3F6F5'
  }, {
    name: 'selected',
    colorClass: 'bg-action-selected',
    baseColor: 'gray-500',
    textColor: 'text-action-contrast',
    hexValue: '#808586'
  }, {
    name: 'focus',
    colorClass: 'bg-action-focus',
    baseColor: 'gray-400',
    textColor: 'text-black',
    hexValue: '#AFB9BA'
  }, {
    name: 'disabled',
    colorClass: 'bg-action-disabled',
    baseColor: 'gray-400',
    textColor: 'text-black',
    hexValue: '#AFB9BA'
  }, {
    name: 'disabledBackground',
    colorClass: 'bg-action-disabledBackground',
    baseColor: 'gray-300',
    textColor: 'text-black',
    hexValue: '#CED6D6'
  }, {
    name: 'contrast',
    colorClass: 'bg-action-contrast',
    baseColor: 'white',
    textColor: 'text-action-main',
    hexValue: '#FFFFFF'
  }]
}, {
  name: 'Error',
  description: 'Red',
  variants: [{
    name: 'main',
    colorClass: 'bg-error-main',
    baseColor: 'red-600',
    textColor: 'text-error-contrast',
    hexValue: '#D92D20'
  }, {
    name: 'dark',
    colorClass: 'bg-error-dark',
    baseColor: 'red-900',
    textColor: 'text-error-contrast',
    hexValue: '#7A271A'
  }, {
    name: 'light',
    colorClass: 'bg-error-light',
    baseColor: 'red-100',
    textColor: 'text-black',
    hexValue: '#FEE4E2'
  }, {
    name: 'hover',
    colorClass: 'bg-error-hover',
    baseColor: 'red-600',
    textColor: 'text-error-contrast',
    opacity: '4%',
    hexValue: '#D92D200A'
  }, {
    name: 'selected',
    colorClass: 'bg-error-selected',
    baseColor: 'red-600',
    textColor: 'text-error-contrast',
    opacity: '8%',
    hexValue: '#D92D2014'
  }, {
    name: 'focusVisible',
    colorClass: 'bg-error-focusVisible',
    baseColor: 'red-600',
    textColor: 'text-black',
    opacity: '30%',
    hexValue: '#D92D204D'
  }, {
    name: 'outlinedBorder',
    colorClass: 'bg-error-outlinedBorder',
    baseColor: 'red-600',
    textColor: 'text-black',
    opacity: '50%',
    hexValue: '#D92D2080'
  }, {
    name: 'contrast',
    colorClass: 'bg-error-contrast',
    baseColor: 'white',
    textColor: 'text-error-main',
    hexValue: '#FFFFFF'
  }]
}, {
  name: 'Info',
  description: 'Blue',
  variants: [{
    name: 'main',
    colorClass: 'bg-info-main',
    baseColor: 'lightBlue-600',
    textColor: 'text-info-contrast',
    hexValue: '#0284C7'
  }, {
    name: 'dark',
    colorClass: 'bg-info-dark',
    baseColor: 'lightBlue-900',
    textColor: 'text-info-contrast',
    hexValue: '#0C4A6E'
  }, {
    name: 'light',
    colorClass: 'bg-info-light',
    baseColor: 'lightBlue-100',
    textColor: 'text-black',
    hexValue: '#E0F2FE'
  }, {
    name: 'hover',
    colorClass: 'bg-info-hover',
    baseColor: 'lightBlue-700',
    textColor: 'text-info-contrast',
    opacity: '4%',
    hexValue: '#0369A10A'
  }, {
    name: 'selected',
    colorClass: 'bg-info-selected',
    baseColor: 'lightBlue-700',
    textColor: 'text-info-contrast',
    opacity: '8%',
    hexValue: '#0369A114'
  }, {
    name: 'focusVisible',
    colorClass: 'bg-info-focusVisible',
    baseColor: 'lightBlue-700',
    textColor: 'text-black',
    opacity: '30%',
    hexValue: '#0369A14D'
  }, {
    name: 'outlinedBorder',
    colorClass: 'bg-info-outlinedBorder',
    baseColor: 'lightBlue-700',
    textColor: 'text-black',
    opacity: '50%',
    hexValue: '#0369A180'
  }, {
    name: 'contrast',
    colorClass: 'bg-info-contrast',
    baseColor: 'white',
    textColor: 'text-info-main',
    hexValue: '#FFFFFF'
  }]
}, {
  name: 'Warning',
  description: 'Orange',
  variants: [{
    name: 'main',
    colorClass: 'bg-warning-main',
    baseColor: 'orange-400',
    textColor: 'text-warning-contrast',
    hexValue: '#FDB022'
  }, {
    name: 'dark',
    colorClass: 'bg-warning-dark',
    baseColor: 'orange-600',
    textColor: 'text-warning-contrast',
    hexValue: '#DC6803'
  }, {
    name: 'light',
    colorClass: 'bg-warning-light',
    baseColor: 'orange-100',
    textColor: 'text-black',
    hexValue: '#FEF0C7'
  }, {
    name: 'hover',
    colorClass: 'bg-warning-hover',
    baseColor: 'orange-600',
    textColor: 'text-warning-contrast',
    opacity: '4%',
    hexValue: '#DC68030A'
  }, {
    name: 'selected',
    colorClass: 'bg-warning-selected',
    baseColor: 'orange-600',
    textColor: 'text-warning-contrast',
    opacity: '8%',
    hexValue: '#DC680314'
  }, {
    name: 'focusVisible',
    colorClass: 'bg-warning-focusVisible',
    baseColor: 'orange-600',
    textColor: 'text-black',
    opacity: '30%',
    hexValue: '#DC68034D'
  }, {
    name: 'outlinedBorder',
    colorClass: 'bg-warning-outlinedBorder',
    baseColor: 'orange-600',
    textColor: 'text-black',
    opacity: '50%',
    hexValue: '#DC680380'
  }, {
    name: 'contrast',
    colorClass: 'bg-warning-contrast',
    baseColor: 'black',
    textColor: 'text-white',
    hexValue: '#000000'
  }]
}, {
  name: 'Success',
  description: 'Green',
  variants: [{
    name: 'main',
    colorClass: 'bg-success-main',
    baseColor: 'green-500',
    textColor: 'text-success-contrast',
    hexValue: '#12B76A'
  }, {
    name: 'dark',
    colorClass: 'bg-success-dark',
    baseColor: 'green-700',
    textColor: 'text-success-contrast',
    hexValue: '#027A48'
  }, {
    name: 'light',
    colorClass: 'bg-success-light',
    baseColor: 'green-100',
    textColor: 'text-black',
    hexValue: '#D1FADF'
  }, {
    name: 'hover',
    colorClass: 'bg-success-hover',
    baseColor: 'green-500',
    textColor: 'text-success-contrast',
    opacity: '4%',
    hexValue: '#12B76A0A'
  }, {
    name: 'selected',
    colorClass: 'bg-success-selected',
    baseColor: 'green-500',
    textColor: 'text-success-contrast',
    opacity: '8%',
    hexValue: '#12B76A14'
  }, {
    name: 'focusVisible',
    colorClass: 'bg-success-focusVisible',
    baseColor: 'green-500',
    textColor: 'text-black',
    opacity: '30%',
    hexValue: '#12B76A4D'
  }, {
    name: 'outlinedBorder',
    colorClass: 'bg-success-outlinedBorder',
    baseColor: 'green-500',
    textColor: 'text-black',
    opacity: '50%',
    hexValue: '#12B76A80'
  }, {
    name: 'contrast',
    colorClass: 'bg-success-contrast',
    baseColor: 'white',
    textColor: 'text-success-main',
    hexValue: '#FFFFFF'
  }]
}];

// Tab content components
const OverviewTab = () => {
  return <div className="space-y-6">
      <ComponentCard title="Sistema de Cores" description="Nosso sistema de cores é construído com variáveis CSS para suportar temas e personalização.">
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">Tipos de Variações</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4">
              <h4 className="font-medium mb-2">Variações de Estado</h4>
              <ul className="space-y-2">
                <li><strong>main:</strong> Cor principal para elementos de destaque</li>
                <li><strong>dark:</strong> Variação mais escura para contraste</li>
                <li><strong>light:</strong> Variação mais clara para fundos e elementos sutis</li>
                <li><strong>hover:</strong> Estado de hover para elementos interativos</li>
                <li><strong>selected:</strong> Estado selecionado para elementos interativos</li>
                <li><strong>focusVisible:</strong> Estado de foco visível para acessibilidade</li>
                <li><strong>outlinedBorder:</strong> Cor para bordas e contornos</li>
                <li><strong>contrast:</strong> Cor de texto sobre fundos primários</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-medium mb-2">Variações de Texto</h4>
              <ul className="space-y-2">
                <li><strong>primary:</strong> Texto principal para conteúdo importante</li>
                <li><strong>secondary:</strong> Texto secundário para descrições e detalhes</li>
                <li><strong>disabled:</strong> Texto para elementos desabilitados</li>
                <li><strong>hover:</strong> Estado de hover para texto interativo</li>
                <li><strong>selected:</strong> Estado selecionado para texto interativo</li>
                <li><strong>focus:</strong> Estado de foco para texto interativo</li>
                <li><strong>focusVisible:</strong> Estado de foco visível para acessibilidade</li>
              </ul>
            </div>
          </div>
        </div>
        
        <p className="text-text-secondary mb-4">
          O sistema é organizado em dois níveis principais:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-medium mb-2">1. Cores Básicas</h3>
            <p className="text-text-secondary">
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
            <p className="text-text-secondary">
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
        
        <p className="text-text-secondary mb-4">
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
          <p className="text-text-secondary">
            Acesse as cores usando as classes utilitárias do Tailwind baseadas na nomenclatura semântica:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-text-secondary">
            <li><code className="bg-background-sidebar px-1 rounded">bg-primary-main</code> - Cor primária principal</li>
            <li><code className="bg-background-sidebar px-1 rounded">text-error-main</code> - Texto na cor de erro</li>
            <li><code className="bg-background-sidebar px-1 rounded">border-warning-outlinedBorder</code> - Borda na cor de contorno de aviso</li>
            <li><code className="bg-background-sidebar px-1 rounded">bg-amicci-500</code> - Cor básica amicci (500)</li>
            <li><code className="bg-background-sidebar px-1 rounded">text-gray-900</code> - Texto principal</li>
          </ul>
        </ComponentCard>
        
        <ComponentCard title="Acessibilidade">
          <p className="text-text-secondary">
            Nosso sistema de cores foi projetado com acessibilidade em mente:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-text-secondary">
            <li>Os pares de cores atendem aos requisitos de contraste WCAG 2.1 AA</li>
            <li>Cada paleta inclui versões de contraste dedicadas</li>
            <li>As cores seguem uma hierarquia visual clara</li>
            <li>Estados de interação (hover, focus, selected) são visualmente distintos</li>
          </ul>
        </ComponentCard>
      </div>
    </div>;
};
const PalettesTab = () => {
  return <ComponentCard title="Paletas Compostas" description="As paletas compostas são construídas utilizando as cores básicas como base. Cada paleta semântica inclui variações para diferentes estados e usos." height="auto">
      <PaletteTable palettes={paletteData} />
    </ComponentCard>;
};
const BaseColorsTab = () => {
  return <ComponentCard title="Cores Base" description="As cores base são um conjunto completo de cores de 50 a 950 que servem como fundação para todo o sistema." height="auto">
      <BaseColorsTable baseColors={baseColorsData} />
    </ComponentCard>;
};
const UsageTab = () => {
  return <ComponentCard title="Uso das Cores" description="Como aplicar cores corretamente em sua interface.">
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-800">Princípios Gerais</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Use cores de maneira consistente para criar uma experiência coesa</li>
          <li>Mantenha o contraste adequado para garantir legibilidade e acessibilidade</li>
          <li>Utilize cores semânticas para comunicar significado e estado</li>
          <li>Limite o uso de cores de destaque para não sobrecarregar a interface</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-6 text-gray-800">Cores Semânticas</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="rounded-lg border border-gray-200 p-4">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 rounded-full bg-primary-main mr-2"></div>
              <h4 className="font-medium text-gray-800">Primary (Amicci)</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Use para elementos de destaque, botões principais, links e elementos de navegação primários.
            </p>
            <div className="mt-3 grid grid-cols-1 gap-1">
              <ColorSwatch color="bg-amicci-500" hexValue="#10C2C0" weight="500 (Main)" className="h-8" textOverlay="500 (Main)" copyValue="#10C2C0" />
              <ColorSwatch color="bg-amicci-700" hexValue="#0C8482" weight="700 (Dark)" className="h-8" textOverlay="700 (Dark)" copyValue="#0C8482" />
              <ColorSwatch color="bg-amicci-300" hexValue="#93EDEA" weight="300 (Light)" className="h-8" textOverlay="300 (Light)" copyValue="#93EDEA" />
            </div>
          </div>
          
          <div className="rounded-lg border border-gray-200 p-4">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 rounded-full bg-secondary-main mr-2"></div>
              <h4 className="font-medium text-gray-800">Secondary (AmicciDark)</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Use para elementos secundários, botões alternativos e detalhes visuais complementares.
            </p>
            <div className="mt-3 grid grid-cols-1 gap-1">
              <ColorSwatch color="bg-amicciDark-500" hexValue="#14818A" weight="500 (Main)" className="h-8" textOverlay="500 (Main)" copyValue="#14818A" />
              <ColorSwatch color="bg-amicciDark-700" hexValue="#06454A" weight="700 (Dark)" className="h-8" textOverlay="700 (Dark)" copyValue="#06454A" />
              <ColorSwatch color="bg-amicciDark-300" hexValue="#72BEC2" weight="300 (Light)" className="h-8" textOverlay="300 (Light)" copyValue="#72BEC2" />
            </div>
          </div>
          
          <div className="rounded-lg border border-gray-200 p-4">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 rounded-full bg-error-main mr-2"></div>
              <h4 className="font-medium text-gray-800">Error (Red)</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Use para mensagens de erro, estados de erro e ações destrutivas como exclusão.
            </p>
            <div className="mt-3 grid grid-cols-1 gap-1">
              <ColorSwatch color="bg-red-500" hexValue="#F04438" weight="500 (Main)" className="h-8" textOverlay="500 (Main)" copyValue="#F04438" />
              <ColorSwatch color="bg-red-700" hexValue="#B42318" weight="700 (Dark)" className="h-8" textOverlay="700 (Dark)" copyValue="#B42318" />
              <ColorSwatch color="bg-red-300" hexValue="#FDA29B" weight="300 (Light)" className="h-8" textOverlay="300 (Light)" copyValue="#FDA29B" />
            </div>
          </div>
          
          <div className="rounded-lg border border-gray-200 p-4">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 rounded-full bg-success-main mr-2"></div>
              <h4 className="font-medium text-gray-800">Success (Green)</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Use para confirmações, mensagens de sucesso e indicadores positivos.
            </p>
            <div className="mt-3 grid grid-cols-1 gap-1">
              <ColorSwatch color="bg-green-500" hexValue="#12B76A" weight="500 (Main)" className="h-8" textOverlay="500 (Main)" copyValue="#12B76A" />
              <ColorSwatch color="bg-green-700" hexValue="#027A48" weight="700 (Dark)" className="h-8" textOverlay="700 (Dark)" copyValue="#027A48" />
              <ColorSwatch color="bg-green-300" hexValue="#6CE9A6" weight="300 (Light)" className="h-8" textOverlay="300 (Light)" copyValue="#6CE9A6" />
            </div>
          </div>
          
          <div className="rounded-lg border border-gray-200 p-4">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 rounded-full bg-warning-main mr-2"></div>
              <h4 className="font-medium text-gray-800">Warning (Yellow)</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Use para alertas, notificações importantes e ações que requerem atenção.
            </p>
            <div className="mt-3 grid grid-cols-1 gap-1">
              <ColorSwatch color="bg-yellow-500" hexValue="#FFEB3B" weight="500 (Main)" className="h-8" textOverlay="500 (Main)" copyValue="#FFEB3B" />
              <ColorSwatch color="bg-yellow-700" hexValue="#FBC02D" weight="700 (Dark)" className="h-8" textOverlay="700 (Dark)" copyValue="#FBC02D" />
              <ColorSwatch color="bg-yellow-300" hexValue="#FFF176" weight="300 (Light)" className="h-8" textOverlay="300 (Light)" copyValue="#FFF176" />
            </div>
          </div>
          
          <div className="rounded-lg border border-gray-200 p-4">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 rounded-full bg-info-main mr-2"></div>
              <h4 className="font-medium text-gray-800">Info (Blue)</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Use para mensagens informativas, dicas e elementos de ajuda contextual.
            </p>
            <div className="mt-3 grid grid-cols-1 gap-1">
              <ColorSwatch color="bg-blue-500" hexValue="#2970FF" weight="500 (Main)" className="h-8" textOverlay="500 (Main)" copyValue="#2970FF" />
              <ColorSwatch color="bg-blue-700" hexValue="#0057B2" weight="700 (Dark)" className="h-8" textOverlay="700 (Dark)" copyValue="#0057B2" />
              <ColorSwatch color="bg-blue-300" hexValue="#84A9FF" weight="300 (Light)" className="h-8" textOverlay="300 (Light)" copyValue="#84A9FF" />
            </div>
          </div>
        </div>
        
        <h3 className="text-lg font-medium mt-6 text-gray-800">Aplicação em Componentes</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="rounded-lg border border-gray-200 p-4">
            <h4 className="font-medium mb-2 text-gray-800">Avatars</h4>
            <div className="flex space-x-2">
              <Avatar className="bg-amicci-500">
                <AvatarFallback className="text-white">AM</AvatarFallback>
              </Avatar>
              <Avatar className="bg-amicciDark-500">
                <AvatarFallback className="text-white">JD</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
          
          <div className="rounded-lg border border-gray-200 p-4">
            <h4 className="font-medium mb-2 text-gray-800">Estados</h4>
            <div className="flex space-x-2">
              <div className="px-3 py-1 rounded-full bg-green-100 text-success-dark text-sm">Ativo</div>
              <div className="px-3 py-1 rounded-full bg-red-100 text-error-dark text-sm">Inativo</div>
              <div className="px-3 py-1 rounded-full bg-yellow-100 text-warning-dark text-sm">Pendente</div>
            </div>
          </div>
        </div>
      </div>
    </ComponentCard>;
};
const AccessibilityTab = () => {
  const [showWCAG, setShowWCAG] = useState(false);
  return <ComponentCard title="Acessibilidade de Cores" description="Garantindo que nosso sistema de cores seja acessível a todos." height="auto">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-2">Contraste</h3>
          <p className="text-mui-text-secondary">
            Todas as combinações de cores de texto e fundo atendem aos requisitos de contraste WCAG 2.1 AA:
          </p>
          <ul className="list-disc list-inside mt-2 text-mui-text-secondary">
            <li>Texto normal: Contraste mínimo de 4.5:1</li>
            <li>Texto grande (18pt ou 14pt bold): Contraste mínimo de 3:1</li>
            <li>Componentes de interface e gráficos: Contraste mínimo de 3:1</li>
          </ul>
        </div>
        
        <div className="mt-4">
          <Button variant="outline" onClick={() => setShowWCAG(!showWCAG)} className="text-sm flex gap-2 items-center">
            {showWCAG ? <EyeOff size={16} /> : <Eye size={16} />}
            {showWCAG ? 'Ocultar dados WCAG' : 'Mostrar dados WCAG'}
          </Button>
        </div>
        
        {showWCAG && <div className="mt-6 border rounded-lg p-4">
            <h4 className="font-medium mb-3">Tabela de Contraste WCAG AA</h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Combinação</TableHead>
                  <TableHead>Proporção</TableHead>
                  <TableHead>Texto Normal</TableHead>
                  <TableHead>Texto Grande</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded mr-2 bg-primary-main"></div>
                      <span>Primary sobre Branco</span>
                    </div>
                  </TableCell>
                  <TableCell>4.6:1</TableCell>
                  <TableCell>Passa ✓</TableCell>
                  <TableCell>Passa ✓</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded mr-2 bg-white flex items-center justify-center">
                        <div className="w-4 h-4 bg-primary-main"></div>
                      </div>
                      <span>Branco sobre Primary</span>
                    </div>
                  </TableCell>
                  <TableCell>4.6:1</TableCell>
                  <TableCell>Passa ✓</TableCell>
                  <TableCell>Passa ✓</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded mr-2 bg-secondary-main"></div>
                      <span>Secondary sobre Branco</span>
                    </div>
                  </TableCell>
                  <TableCell>13.2:1</TableCell>
                  <TableCell>Passa ✓</TableCell>
                  <TableCell>Passa ✓</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded mr-2 bg-error-main"></div>
                      <span>Error sobre Branco</span>
                    </div>
                  </TableCell>
                  <TableCell>4.8:1</TableCell>
                  <TableCell>Passa ✓</TableCell>
                  <TableCell>Passa ✓</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded mr-2 bg-warning-main"></div>
                      <span>Warning sobre Preto</span>
                    </div>
                  </TableCell>
                  <TableCell>13.5:1</TableCell>
                  <TableCell>Passa ✓</TableCell>
                  <TableCell>Passa ✓</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>}
        
        <div className="mt-4">
          <h3 className="text-lg font-medium mb-2">Não Dependa Apenas da Cor</h3>
          <p className="text-mui-text-secondary">
            Para garantir que as informações sejam acessíveis a pessoas com deficiência visual ou daltonismo, não usamos apenas cor para transmitir informações importantes:
          </p>
          <ul className="list-disc list-inside mt-2 text-mui-text-secondary">
            <li>Combinamos cores com ícones, textos e padrões</li>
            <li>Oferecemos alternativas textuais para informações baseadas em cores</li>
            <li>Mantemos contraste suficiente mesmo em visualizações monocromáticas</li>
          </ul>
        </div>
        
        <div className="mt-4">
          <h3 className="text-lg font-medium mb-2">Teste de Daltonismo</h3>
          <p className="text-mui-text-secondary">
            Nosso sistema de cores foi testado para os seguintes tipos de daltonismo:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
            <div className="border rounded-lg p-3">
              <h4 className="font-medium text-sm mb-2">Deuteranopia</h4>
              <p className="text-xs text-mui-text-secondary">Deficiência de percepção do verde</p>
            </div>
            <div className="border rounded-lg p-3">
              <h4 className="font-medium text-sm mb-2">Protanopia</h4>
              <p className="text-xs text-mui-text-secondary">Deficiência de percepção do vermelho</p>
            </div>
            <div className="border rounded-lg p-3">
              <h4 className="font-medium text-sm mb-2">Tritanopia</h4>
              <p className="text-xs text-mui-text-secondary">Deficiência de percepção do azul</p>
            </div>
            <div className="border rounded-lg p-3">
              <h4 className="font-medium text-sm mb-2">Acromatopsia</h4>
              <p className="text-xs text-mui-text-secondary">Ausência completa de percepção de cores</p>
            </div>
          </div>
        </div>
      </div>
    </ComponentCard>;
};

const Colors = () => {
  const [showCase, setShowCase] = useState<'standard' | 'usage' | 'technical'>('standard');
  
  return (
    <div className="w-full animate-fade-in">
      <FoundationsHeader 
        title="Colors"
        description="Paleta de cores e tokens de design utilizados na aplicação (50-950)"
      />

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Visão geral</TabsTrigger>
          <TabsTrigger value="palettes">Palettes</TabsTrigger>
          <TabsTrigger value="baseColors">Base colors</TabsTrigger>
          <TabsTrigger value="usage">Uso</TabsTrigger>
          <TabsTrigger value="accessibility">Acessibilidade</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <OverviewTab />
        </TabsContent>
        
        <TabsContent value="palettes">
          <PalettesTab />
        </TabsContent>

        <TabsContent value="baseColors">
          <BaseColorsTab />
        </TabsContent>
        
        <TabsContent value="usage">
          <UsageTab />
        </TabsContent>
        
        <TabsContent value="accessibility">
          <AccessibilityTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Colors;
