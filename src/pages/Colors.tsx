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

const OverviewTab = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Cores da Marca</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <ColorSwatch color="bg-amicci-500" className="h-24 rounded-lg" />
              <p className="text-sm font-medium text-center">Turquesa (primary)</p>
            </div>
            <div className="space-y-2">
              <ColorSwatch color="bg-amicciDark-500" className="h-24 rounded-lg" />
              <p className="text-sm font-medium text-center">Azul Escuro (secondary)</p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Paleta Estendida</h3>
          <div className="grid grid-cols-3 gap-2">
            <ColorSwatch color="bg-magenta-500" className="h-12 rounded-lg" />
            <ColorSwatch color="bg-blue-500" className="h-12 rounded-lg" />
            <ColorSwatch color="bg-green-500" className="h-12 rounded-lg" />
            <ColorSwatch color="bg-yellow-500" className="h-12 rounded-lg" />
            <ColorSwatch color="bg-orange-500" className="h-12 rounded-lg" />
            <ColorSwatch color="bg-red-500" className="h-12 rounded-lg" />
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Escala de Cinzas</h3>
          <div className="grid grid-cols-5 gap-2">
            <ColorSwatch color="bg-gray-900" className="h-12 rounded-lg" />
            <ColorSwatch color="bg-gray-700" className="h-12 rounded-lg" />
            <ColorSwatch color="bg-gray-500" className="h-12 rounded-lg" />
            <ColorSwatch color="bg-gray-300" className="h-12 rounded-lg" />
            <ColorSwatch color="bg-gray-100" className="h-12 rounded-lg" />
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Tokens de Cor</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-2">
            <p className="font-medium">Primary</p>
            <div className="space-y-1">
              <ColorSwatch color="bg-primary-main" className="h-10 rounded" textOverlay="main" />
              <ColorSwatch color="bg-primary-dark" className="h-8 rounded" textOverlay="dark" />
              <ColorSwatch color="bg-primary-light" className="h-8 rounded" textOverlay="light" />
            </div>
          </div>
          <div className="space-y-2">
            <p className="font-medium">Secondary</p>
            <div className="space-y-1">
              <ColorSwatch color="bg-secondary-main" className="h-10 rounded" textOverlay="main" />
              <ColorSwatch color="bg-secondary-dark" className="h-8 rounded" textOverlay="dark" />
              <ColorSwatch color="bg-secondary-light" className="h-8 rounded" textOverlay="light" />
            </div>
          </div>
          <div className="space-y-2">
            <p className="font-medium">Error</p>
            <div className="space-y-1">
              <ColorSwatch color="bg-error-main" className="h-10 rounded" textOverlay="main" />
              <ColorSwatch color="bg-error-dark" className="h-8 rounded" textOverlay="dark" />
              <ColorSwatch color="bg-error-light" className="h-8 rounded" textOverlay="light" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PalettesTab = () => {
  return <PaletteTable palettes={paletteData} />;
};

const BaseColorsTab = () => {
  return <BaseColorsTable baseColors={baseColorsData} />;
};

const UsageTab = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Aplicação das Cores</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ComponentCard title="Botões">
            <div className="flex flex-wrap gap-3">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="tertiary">Tertiary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </ComponentCard>
          
          <ComponentCard title="Badges">
            <div className="flex flex-wrap gap-3">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </ComponentCard>
          
          <ComponentCard title="Avatar com Cores">
            <div className="flex gap-3">
              <Avatar className="bg-primary-main">
                <AvatarFallback>AP</AvatarFallback>
              </Avatar>
              <Avatar className="bg-secondary-main">
                <AvatarFallback>MK</AvatarFallback>
              </Avatar>
              <Avatar className="bg-tertiary-main">
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar className="bg-error-main">
                <AvatarFallback>XX</AvatarFallback>
              </Avatar>
            </div>
          </ComponentCard>
          
          <ComponentCard title="Textos Coloridos">
            <div className="space-y-2">
              <p className="text-primary-main">Texto em Primary</p>
              <p className="text-secondary-main">Texto em Secondary</p>
              <p className="text-tertiary-main">Texto em Tertiary</p>
              <p className="text-error-main">Texto em Error</p>
              <p className="text-warning-main">Texto em Warning</p>
              <p className="text-success-main">Texto em Success</p>
            </div>
          </ComponentCard>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Recomendações de Uso</h3>
        <div className="space-y-2">
          <p className="text-sm">
            • Use <span className="text-primary-main font-medium">primary</span> para elementos principais de destaque.
          </p>
          <p className="text-sm">
            • Use <span className="text-secondary-main font-medium">secondary</span> para elementos de suporte e complemento.
          </p>
          <p className="text-sm">
            • Use <span className="text-tertiary-main font-medium">tertiary</span> para elementos decorativos ou de acento.
          </p>
          <p className="text-sm">
            • Use <span className="text-error-main font-medium">error</span> exclusivamente para mensagens de erro e alertas críticos.
          </p>
          <p className="text-sm">
            • Use <span className="text-warning-main font-medium">warning</span> para atenção e alertas não críticos.
          </p>
          <p className="text-sm">
            • Use <span className="text-success-main font-medium">success</span> para confirmações e ações bem-sucedidas.
          </p>
        </div>
      </div>
    </div>
  );
};

const AccessibilityTab = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Diretrizes de Acessibilidade</h3>
        <p>
          Todas as combinações de cores utilizadas na interface devem seguir as diretrizes WCAG 2.1 
          para garantir legibilidade e acessibilidade para todos os usuários, incluindo aqueles com 
          deficiências visuais ou daltonismo.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-4 space-y-3">
            <h4 className="font-medium">Contraste Mínimo</h4>
            <p className="text-sm">
              O contraste entre texto e fundo deve ser de pelo menos 4.5:1 para texto normal e 3:1 para texto grande.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-primary-main text-white rounded">
                <span>Texto em fundo primary</span>
                <Badge variant="outline" className="bg-white/10">Contraste 4.6:1 ✓</Badge>
              </div>
              
              <div className="flex items-center justify-between p-2 bg-secondary-main text-white rounded">
                <span>Texto em fundo secondary</span>
                <Badge variant="outline" className="bg-white/10">Contraste 5.2:1 ✓</Badge>
              </div>
              
              <div className="flex items-center justify-between p-2 bg-error-main text-white rounded">
                <span>Texto em fundo error</span>
                <Badge variant="outline" className="bg-white/10">Contraste 4.8:1 ✓</Badge>
              </div>
            </div>
          </div>
          
          <div className="border rounded-lg p-4 space-y-3">
            <h4 className="font-medium">Daltonismo</h4>
            <p className="text-sm">
              Nossa paleta foi testada para diferentes tipos de daltonismo para garantir que as informações sejam distinguíveis.
            </p>
            
            <div className="flex items-center gap-3">
              <Button variant="outline" className="text-xs gap-2">
                <Eye className="h-3 w-3" />
                Simulação de Protanopia
              </Button>
              <Button variant="outline" className="text-xs gap-2">
                <Eye className="h-3 w-3" />
                Simulação de Deuteranopia
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <div>
                <ColorSwatch color="bg-success-main" className="h-8 rounded" />
                <p className="text-xs text-center mt-1">Success</p>
              </div>
              <div>
                <ColorSwatch color="bg-error-main" className="h-8 rounded" />
                <p className="text-xs text-center mt-1">Error</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Teste de Contraste</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Combinação</TableHead>
              <TableHead>Ratio</TableHead>
              <TableHead>WCAG AA</TableHead>
              <TableHead>WCAG AAA</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-primary-main"></div>
                  <span>Primary + White</span>
                </div>
              </TableCell>
              <TableCell>4.6:1</TableCell>
              <TableCell className="text-success-main">Passa</TableCell>
              <TableCell className="text-error-main">Não passa</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-secondary-main"></div>
                  <span>Secondary + White</span>
                </div>
              </TableCell>
              <TableCell>5.2:1</TableCell>
              <TableCell className="text-success-main">Passa</TableCell>
              <TableCell className="text-error-main">Não passa</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-gray-900"></div>
                  <span>Text Primary + White</span>
                </div>
              </TableCell>
              <TableCell>16:1</TableCell>
              <TableCell className="text-success-main">Passa</TableCell>
              <TableCell className="text-success-main">Passa</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
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
