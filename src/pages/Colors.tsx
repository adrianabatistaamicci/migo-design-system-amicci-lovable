
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

// ColorSwatch component
const ColorSwatch = ({
  color,
  className = "",
  onClick,
  textOverlay,
  weight,
  hexValue,
  copyValue
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

  return (
    <div 
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
    </div>
  );
};

// BaseColorsTable component
const BaseColorsTable = ({ baseColors }) => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  const renderCopyButton = (text) => (
    <button 
      onClick={() => copyToClipboard(text)} 
      className="ml-2 text-gray-400 hover:text-gray-600 transition-colors"
    >
      <Copy size={14} />
    </button>
  );

  return (
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
                      <ColorSwatch 
                        color={weight.colorClass} 
                        textOverlay={weight.weight} 
                        className="h-12"
                        onClick={handleCopy}
                        weight={weight.weight}
                        hexValue={hexValue}
                        copyValue={hexValue}
                      />
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
    </div>
  );
  
  function handleCopy(text) {
    navigator.clipboard.writeText(text);
  }
};

// PaletteTable component
const PaletteTable = ({ palettes }) => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  const renderCopyButton = (text) => (
    <button 
      onClick={() => copyToClipboard(text)}
      className="ml-2 text-gray-400 hover:text-gray-600 transition-colors"
    >
      <Copy size={14} />
    </button>
  );

  // Avalia o contraste WCAG
  const getWCAGStatus = (hexColor) => {
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

  return (
    <div className="space-y-8">
      {palettes.map((palette) => (
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
              {palette.variants.map((variant) => {
                const wcagInfo = variant.hexValue ? getWCAGStatus(variant.hexValue) : null;
                const handleCopy = () => copyToClipboard(variant.hexValue || '');
                
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
                        onClick={handleCopy}
                        weight=""
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
    </div>
  );
};

// Data for components
const baseColorsData = [
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
      { weight: '700', colorClass: 'bg-amicci-700', hexValue: '#0C8482' },
      { weight: '800', colorClass: 'bg-amicci-800', hexValue: '#096665' },
      { weight: '900', colorClass: 'bg-amicci-900', hexValue: '#074A47' },
      { weight: '950', colorClass: 'bg-amicci-950', hexValue: '#062630' }
    ]
  },
  {
    name: 'AmicciDark',
    weights: [
      { weight: '50', colorClass: 'bg-amicciDark-50', hexValue: '#E6F5F5' },
      { weight: '100', colorClass: 'bg-amicciDark-100', hexValue: '#C7E8E9' },
      { weight: '200', colorClass: 'bg-amicciDark-200', hexValue: '#A1D6D8' },
      { weight: '300', colorClass: 'bg-amicciDark-300', hexValue: '#72BEC2' },
      { weight: '400', colorClass: 'bg-amicciDark-400', hexValue: '#3A9CA1' },
      { weight: '500', colorClass: 'bg-amicciDark-500', hexValue: '#14818A' },
      { weight: '600', colorClass: 'bg-amicciDark-600', hexValue: '#0D646D' },
      { weight: '700', colorClass: 'bg-amicciDark-700', hexValue: '#06454A' },
      { weight: '800', colorClass: 'bg-amicciDark-800', hexValue: '#043A3E' },
      { weight: '900', colorClass: 'bg-amicciDark-900', hexValue: '#033034' },
      { weight: '950', colorClass: 'bg-amicciDark-950', hexValue: '#02282A' }
    ]
  },
  {
    name: 'Blue',
    weights: [
      { weight: '50', colorClass: 'bg-blue-50', hexValue: '#EBF5FF' },
      { weight: '100', colorClass: 'bg-blue-100', hexValue: '#D6E8FF' },
      { weight: '200', colorClass: 'bg-blue-200', hexValue: '#ADC8FF' },
      { weight: '300', colorClass: 'bg-blue-300', hexValue: '#84A9FF' },
      { weight: '400', colorClass: 'bg-blue-400', hexValue: '#5A8CF8' },
      { weight: '500', colorClass: 'bg-blue-500', hexValue: '#2970FF' },
      { weight: '600', colorClass: 'bg-blue-600', hexValue: '#1F5AE8' },
      { weight: '700', colorClass: 'bg-blue-700', hexValue: '#0057B2' },
      { weight: '800', colorClass: 'bg-blue-800', hexValue: '#0C41A0' },
      { weight: '900', colorClass: 'bg-blue-900', hexValue: '#093186' },
      { weight: '950', colorClass: 'bg-blue-950', hexValue: '#072B7A' }
    ]
  },
  {
    name: 'Magenta',
    weights: [
      { weight: '50', colorClass: 'bg-magenta-50', hexValue: '#FDF5FA' },
      { weight: '100', colorClass: 'bg-magenta-100', hexValue: '#F9E5F4' },
      { weight: '200', colorClass: 'bg-magenta-200', hexValue: '#F2CAEB' },
      { weight: '300', colorClass: 'bg-magenta-300', hexValue: '#E7A4DD' },
      { weight: '400', colorClass: 'bg-magenta-400', hexValue: '#C963BA' },
      { weight: '500', colorClass: 'bg-magenta-500', hexValue: '#9B247F' },
      { weight: '600', colorClass: 'bg-magenta-600', hexValue: '#841E6C' },
      { weight: '700', colorClass: 'bg-magenta-700', hexValue: '#6D1959' },
      { weight: '800', colorClass: 'bg-magenta-800', hexValue: '#571447' },
      { weight: '900', colorClass: 'bg-magenta-900', hexValue: '#49123C' },
      { weight: '950', colorClass: 'bg-magenta-950', hexValue: '#3E0F32' }
    ]
  },
  {
    name: 'Green',
    weights: [
      { weight: '50', colorClass: 'bg-green-50', hexValue: '#ECFDF3' },
      { weight: '100', colorClass: 'bg-green-100', hexValue: '#D1FADF' },
      { weight: '200', colorClass: 'bg-green-200', hexValue: '#A6F4C5' },
      { weight: '300', colorClass: 'bg-green-300', hexValue: '#6CE9A6' },
      { weight: '400', colorClass: 'bg-green-400', hexValue: '#32D583' },
      { weight: '500', colorClass: 'bg-green-500', hexValue: '#12B76A' },
      { weight: '600', colorClass: 'bg-green-600', hexValue: '#039855' },
      { weight: '700', colorClass: 'bg-green-700', hexValue: '#027A48' },
      { weight: '800', colorClass: 'bg-green-800', hexValue: '#05603A' },
      { weight: '900', colorClass: 'bg-green-900', hexValue: '#055735' },
      { weight: '950', colorClass: 'bg-green-950', hexValue: '#054F31' }
    ]
  },
  {
    name: 'Gray',
    weights: [
      { weight: '50', colorClass: 'bg-gray-50', hexValue: '#F9FBFB' },
      { weight: '100', colorClass: 'bg-gray-100', hexValue: '#F3F6F5' },
      { weight: '200', colorClass: 'bg-gray-200', hexValue: '#EAEFF0' },
      { weight: '300', colorClass: 'bg-gray-300', hexValue: '#CED6D6' },
      { weight: '400', colorClass: 'bg-gray-400', hexValue: '#AFB9BA' },
      { weight: '500', colorClass: 'bg-gray-500', hexValue: '#808586' },
      { weight: '600', colorClass: 'bg-gray-600', hexValue: '#656969' },
      { weight: '700', colorClass: 'bg-gray-700', hexValue: '#4A4F4F' },
      { weight: '800', colorClass: 'bg-gray-800', hexValue: '#313536' },
      { weight: '900', colorClass: 'bg-gray-900', hexValue: '#292C2D' },
      { weight: '950', colorClass: 'bg-gray-950', hexValue: '#212323' }
    ]
  },
  {
    name: 'Red',
    weights: [
      { weight: '50', colorClass: 'bg-red-50', hexValue: '#FEF3F2' },
      { weight: '100', colorClass: 'bg-red-100', hexValue: '#FEE4E2' },
      { weight: '200', colorClass: 'bg-red-200', hexValue: '#FECDCA' },
      { weight: '300', colorClass: 'bg-red-300', hexValue: '#FDA29B' },
      { weight: '400', colorClass: 'bg-red-400', hexValue: '#F97066' },
      { weight: '500', colorClass: 'bg-red-500', hexValue: '#F04438' },
      { weight: '600', colorClass: 'bg-red-600', hexValue: '#D92D20' },
      { weight: '700', colorClass: 'bg-red-700', hexValue: '#B42318' },
      { weight: '800', colorClass: 'bg-red-800', hexValue: '#912018' },
      { weight: '900', colorClass: 'bg-red-900', hexValue: '#862017' },
      { weight: '950', colorClass: 'bg-red-950', hexValue: '#7A271A' }
    ]
  },
  {
    name: 'Yellow',
    weights: [
      { weight: '50', colorClass: 'bg-yellow-50', hexValue: '#FFFDE7' },
      { weight: '100', colorClass: 'bg-yellow-100', hexValue: '#FFF9C4' },
      { weight: '200', colorClass: 'bg-yellow-200', hexValue: '#FFF59D' },
      { weight: '300', colorClass: 'bg-yellow-300', hexValue: '#FFF176' },
      { weight: '400', colorClass: 'bg-yellow-400', hexValue: '#FFEE58' },
      { weight: '500', colorClass: 'bg-yellow-500', hexValue: '#FFEB3B' },
      { weight: '600', colorClass: 'bg-yellow-600', hexValue: '#FDD835' },
      { weight: '700', colorClass: 'bg-yellow-700', hexValue: '#FBC02D' },
      { weight: '800', colorClass: 'bg-yellow-800', hexValue: '#F9A825' },
      { weight: '900', colorClass: 'bg-yellow-900', hexValue: '#F78F1E' },
      { weight: '950', colorClass: 'bg-yellow-950', hexValue: '#F57F17' }
    ]
  },
  {
    name: 'Orange',
    weights: [
      { weight: '50', colorClass: 'bg-orange-50', hexValue: '#FFFAEB' },
      { weight: '100', colorClass: 'bg-orange-100', hexValue: '#FEF0C7' },
      { weight: '200', colorClass: 'bg-orange-200', hexValue: '#FEDF89' },
      { weight: '300', colorClass: 'bg-orange-300', hexValue: '#FEC84B' },
      { weight: '400', colorClass: 'bg-orange-400', hexValue: '#FDB022' },
      { weight: '500', colorClass: 'bg-orange-500', hexValue: '#F79009' },
      { weight: '600', colorClass: 'bg-orange-600', hexValue: '#DC6803' },
      { weight: '700', colorClass: 'bg-orange-700', hexValue: '#B54708' },
      { weight: '800', colorClass: 'bg-orange-800', hexValue: '#93370D' },
      { weight: '900', colorClass: 'bg-orange-900', hexValue: '#86320D' },
      { weight: '950', colorClass: 'bg-orange-950', hexValue: '#7A2E0E' }
    ]
  }
];

const paletteData = [
  {
    name: 'Text',
    description: 'Gray',
    variants: [
      { name: 'primary', colorClass: 'text-text-primary', baseColor: 'gray-900', textColor: 'text-white', hexValue: '#212323' },
      { name: 'secondary', colorClass: 'text-text-secondary', baseColor: 'gray-500', textColor: 'text-white', hexValue: '#808586' },
      { name: 'disabled', colorClass: 'text-text-disabled', baseColor: 'gray-400', textColor: 'text-white', hexValue: '#AFB9BA' },
      { name: 'hover', colorClass: 'bg-gray-900/[0.04]', baseColor: 'gray-900', textColor: 'text-black', opacity: '4%', hexValue: '#2123230A' },
      { name: 'selected', colorClass: 'bg-gray-900/[0.08]', baseColor: 'gray-900', textColor: 'text-black', opacity: '8%', hexValue: '#21232314' },
      { name: 'focus', colorClass: 'bg-gray-900/[0.12]', baseColor: 'gray-900', textColor: 'text-black', opacity: '12%', hexValue: '#2123231F' },
      { name: 'focusVisible', colorClass: 'bg-gray-900/[0.3]', baseColor: 'gray-900', textColor: 'text-black', opacity: '30%', hexValue: '#2123234D' },
      { name: 'contrastText', colorClass: 'bg-white', baseColor: 'white', textColor: 'text-black', hexValue: '#FFFFFF' }
    ]
  },
  {
    name: 'Primary',
    description: 'amicci',
    variants: [
      { name: 'main', colorClass: 'bg-primary-main', baseColor: 'amicci-500', textColor: 'text-primary-contrast', opacity: '100%', hexValue: '#10C2C0' },
      { name: 'dark', colorClass: 'bg-primary-dark', baseColor: 'amicci-700', textColor: 'text-primary-contrast', opacity: '100%', hexValue: '#0C8482' },
      { name: 'light', colorClass: 'bg-primary-light', baseColor: 'amicci-100', textColor: 'text-black', opacity: '100%', hexValue: '#E3FAF9' },
      { name: 'contrast', colorClass: 'bg-primary-contrast', baseColor: 'common-white-main', textColor: 'text-primary-main', opacity: '100%', hexValue: '#FFFFFF' },
      { name: 'hover', colorClass: 'bg-primary-hover', baseColor: 'amicci-500', textColor: 'text-primary-contrast', opacity: '4%', hexValue: '#10C2C00A' },
      { name: 'selected', colorClass: 'bg-primary-selected', baseColor: 'amicci-500', textColor: 'text-primary-contrast', opacity: '8%', hexValue: '#10C2C014' },
      { name: 'focus', colorClass: 'bg-primary-focus', baseColor: 'amicci-500', textColor: 'text-black', opacity: '12%', hexValue: '#10C2C01F' },
      { name: 'focusVisible', colorClass: 'bg-primary-focusVisible', baseColor: 'amicci-500', textColor: 'text-black', opacity: '30%', hexValue: '#10C2C04D' },
      { name: 'outlinedBorder', colorClass: 'bg-primary-outlinedBorder', baseColor: 'amicci-500', textColor: 'text-black', opacity: '50%', hexValue: '#10C2C080' }
    ]
  },
  {
    name: 'Secondary',
    description: 'AmicciDark',
    variants: [
      { name: 'main', colorClass: 'bg-secondary-main', baseColor: 'amicciDark-500', textColor: 'text-secondary-contrast', opacity: '100%', hexValue: '#14818A' },
      { name: 'dark', colorClass: 'bg-secondary-dark', baseColor: 'amicciDark-700', textColor: 'text-secondary-contrast', opacity: '100%', hexValue: '#06454A' },
      { name: 'light', colorClass: 'bg-secondary-light', baseColor: 'amicciDark-100', textColor: 'text-black', opacity: '100%', hexValue: '#C7E8E9' },
      { name: 'dark2', colorClass: 'bg-amicciDark-800', baseColor: 'amicciDark-800', textColor: 'text-white', opacity: '100%', hexValue: '#043A3E' },
      { name: 'contrast', colorClass: 'bg-secondary-contrast', baseColor: 'common-white-main', textColor: 'text-secondary-main', opacity: '100%', hexValue: '#FFFFFF' },
      { name: 'hover', colorClass: 'bg-secondary-hover', baseColor: 'amicciDark-500', textColor: 'text-secondary-contrast', opacity: '4%', hexValue: '#14818A0A' },
      { name: 'selected', colorClass: 'bg-secondary-selected', baseColor: 'amicciDark-500', textColor: 'text-secondary-contrast', opacity: '8%', hexValue: '#14818A14' },
      { name: 'focus', colorClass: 'bg-secondary-focus', baseColor: 'amicciDark-500', textColor: 'text-black', opacity: '12%', hexValue: '#14818A1F' },
      { name: 'focusVisible', colorClass: 'bg-secondary-focusVisible', baseColor: 'amicciDark-500', textColor: 'text-black', opacity: '30%', hexValue: '#14818A4D' },
      { name: 'outlinedBorder', colorClass: 'bg-secondary-outlinedBorder', baseColor: 'amicciDark-500', textColor: 'text-black', opacity: '50%', hexValue: '#14818A80' }
    ]
  },
  {
    name: 'Tertiary',
    description: 'Magenta',
    variants: [
      { name: 'main', colorClass: 'bg-tertiary-main', baseColor: 'magenta-500', textColor: 'text-tertiary-contrast', hexValue: '#9B247F' },
      { name: 'dark', colorClass: 'bg-tertiary-dark', baseColor: 'magenta-700', textColor: 'text-tertiary-contrast', hexValue: '#6D1959' },
      { name: 'light', colorClass: 'bg-tertiary-light', baseColor: 'magenta-100', textColor: 'text-black', hexValue: '#F9E5F4' },
      { name: 'hover', colorClass: 'bg-tertiary-hover', baseColor: 'magenta-500', textColor: 'text-tertiary-contrast', opacity: '4%', hexValue: '#9B247F0A' },
      { name: 'selected', colorClass: 'bg-tertiary-selected', baseColor: 'magenta-500', textColor: 'text-tertiary-contrast', opacity: '8%', hexValue: '#9B247F14' },
      { name: 'focus', colorClass: 'bg-tertiary-focus', baseColor: 'magenta-500', textColor: 'text-black', opacity: '12%', hexValue: '#9B247F1F' },
      { name: 'focusVisible', colorClass: 'bg-tertiary-focusVisible', baseColor: 'magenta-500', textColor: 'text-black', opacity: '30%', hexValue: '#9B247F4D' },
      { name: 'outlinedBorder', colorClass: 'bg-tertiary-outlinedBorder', baseColor: 'magenta-500', textColor: 'text-black', opacity: '50%', hexValue: '#9B247F80' }
    ]
  },
  {
    name: 'Success',
    description: 'Green',
    variants: [
      { name: 'main', colorClass: 'bg-success-main', baseColor: 'green-500', textColor: 'text-success-contrast', opacity: '100%', hexValue: '#12B76A' },
      { name: 'dark', colorClass: 'bg-success-dark', baseColor: 'green-700', textColor: 'text-success-contrast', opacity: '100%', hexValue: '#027A48' },
      { name: 'light', colorClass: 'bg-success-light', baseColor: 'green-100', textColor: 'text-black', opacity: '100%', hexValue: '#D1FADF' },
      { name: 'contrast', colorClass: 'bg-success-contrast', baseColor: 'common-white-main', textColor: 'text-success-main', opacity: '100%', hexValue: '#FFFFFF' },
      { name: 'hover', colorClass: 'bg-success-hover', baseColor: 'green-500', textColor: 'text-success-contrast', opacity: '4%', hexValue: '#12B76A0A' },
      { name: 'selected', colorClass: 'bg-success-selected', baseColor: 'green-500', textColor: 'text-success-contrast', opacity: '8%', hexValue: '#12B76A14' },
      { name: 'focus', colorClass: 'bg-success-focus', baseColor: 'green-500', textColor: 'text-black', opacity: '12%', hexValue: '#12B76A1F' }
    ]
  },
  {
    name: 'Error',
    description: 'Red',
    variants: [
      { name: 'main', colorClass: 'bg-error-main', baseColor: 'red-500', textColor: 'text-error-contrast', opacity: '100%', hexValue: '#F04438' },
      { name: 'dark', colorClass: 'bg-error-dark', baseColor: 'red-700', textColor: 'text-error-contrast', opacity: '100%', hexValue: '#B42318' },
      { name: 'light', colorClass: 'bg-error-light', baseColor: 'red-100', textColor: 'text-black', opacity: '100%', hexValue: '#FEE4E2' },
      { name: 'contrast', colorClass: 'bg-error-contrast', baseColor: 'common-white-main', textColor: 'text-error-main', opacity: '100%', hexValue: '#FFFFFF' },
      { name: 'hover', colorClass: 'bg-error-hover', baseColor: 'red-500', textColor: 'text-error-contrast', opacity: '4%', hexValue: '#F044380A' },
      { name: 'selected', colorClass: 'bg-error-selected', baseColor: 'red-500', textColor: 'text-error-contrast', opacity: '8%', hexValue: '#F0443814' },
      { name: 'focus', colorClass: 'bg-error-focus', baseColor: 'red-500', textColor: 'text-black', opacity: '12%', hexValue: '#F044381F' }
    ]
  },
  {
    name: 'Warning',
    description: 'Orange',
    variants: [
      { name: 'main', colorClass: 'bg-warning-main', baseColor: 'orange-500', textColor: 'text-warning-contrast', opacity: '100%', hexValue: '#F79009' },
      { name: 'dark', colorClass: 'bg-warning-dark', baseColor: 'orange-700', textColor: 'text-warning-contrast', opacity: '100%', hexValue: '#B54708' },
      { name: 'light', colorClass: 'bg-warning-light', baseColor: 'orange-100', textColor: 'text-black', opacity: '100%', hexValue: '#FEF0C7' },
      { name: 'contrast', colorClass: 'bg-warning-contrast', baseColor: 'common-white-main', textColor: 'text-warning-main', opacity: '100%', hexValue: '#FFFFFF' },
      { name: 'hover', colorClass: 'bg-warning-hover', baseColor: 'orange-500', textColor: 'text-warning-contrast', opacity: '4%', hexValue: '#F790090A' },
      { name: 'selected', colorClass: 'bg-warning-selected', baseColor: 'orange-500', textColor: 'text-warning-contrast', opacity: '8%', hexValue: '#F7900914' },
      { name: 'focus', colorClass: 'bg-warning-focus', baseColor: 'orange-500', textColor: 'text-black', opacity: '12%', hexValue: '#F790091F' }
    ]
  },
  {
    name: 'Info',
    description: 'Blue',
    variants: [
      { name: 'main', colorClass: 'bg-info-main', baseColor: 'blue-500', textColor: 'text-info-contrast', opacity: '100%', hexValue: '#2970FF' },
      { name: 'dark', colorClass: 'bg-info-dark', baseColor: 'blue-700', textColor: 'text-info-contrast', opacity: '100%', hexValue: '#0057B2' },
      { name: 'light', colorClass: 'bg-info-light', baseColor: 'blue-100', textColor: 'text-black', opacity: '100%', hexValue: '#D6E8FF' },
      { name: 'contrast', colorClass: 'bg-info-contrast', baseColor: 'common-white-main', textColor: 'text-info-main', opacity: '100%', hexValue: '#FFFFFF' },
      { name: 'hover', colorClass: 'bg-info-hover', baseColor: 'blue-500', textColor: 'text-info-contrast', opacity: '4%', hexValue: '#2970FF0A' },
      { name: 'selected', colorClass: 'bg-info-selected', baseColor: 'blue-500', textColor: 'text-info-contrast', opacity: '8%', hexValue: '#2970FF14' },
      { name: 'focus', colorClass: 'bg-info-focus', baseColor: 'blue-500', textColor: 'text-black', opacity: '12%', hexValue: '#2970FF1F' }
    ]
  }
];

// Example component to show color usage
const ColorExample = () => {
  const [viewMode, setViewMode] = useState("light");
  
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Button 
          variant={viewMode === "light" ? "default" : "outline"} 
          onClick={() => setViewMode("light")}
          size="sm"
          className="gap-2"
        >
          <Eye size={16} /> Light Mode
        </Button>
        <Button 
          variant={viewMode === "dark" ? "default" : "outline"} 
          onClick={() => setViewMode("dark")}
          size="sm"
          className="gap-2"
        >
          <EyeOff size={16} /> Dark Mode
        </Button>
      </div>
      
      <div className={`rounded-lg p-6 ${viewMode === "dark" ? "bg-gray-900" : "bg-white"} border`}>
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className={`font-medium ${viewMode === "dark" ? "text-white" : "text-text-primary"}`}>Button Examples</h4>
            <div className="flex flex-wrap gap-2">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Error</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </div>
          
          <div className="space-y-2">
            <h4 className={`font-medium ${viewMode === "dark" ? "text-white" : "text-text-primary"}`}>Badge Examples</h4>
            <div className="flex flex-wrap gap-2">
              <Badge>Primary</Badge>
              <Badge variant="standard" color="secondary">Secondary</Badge>
              <Badge variant="standard" color="error">Error</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </div>
          
          <div className="space-y-2">
            <h4 className={`font-medium ${viewMode === "dark" ? "text-white" : "text-text-primary"}`}>Avatar Examples</h4>
            <div className="flex flex-wrap gap-2">
              <Avatar>
                <AvatarImage src="https://picsum.photos/id/64/128/128" alt="Avatar" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://picsum.photos/id/65/128/128" alt="Avatar" />
                <AvatarFallback>AN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://picsum.photos/id/66/128/128" alt="Avatar" />
                <AvatarFallback>TS</AvatarFallback>
              </Avatar>
            </div>
          </div>
          
          <div className="space-y-2">
            <h4 className={`font-medium ${viewMode === "dark" ? "text-white" : "text-text-primary"}`}>Chip Examples</h4>
            <div className="flex flex-wrap gap-2">
              <Chip>Basic</Chip>
              <Chip color="primary">Primary</Chip>
              <Chip color="secondary">Secondary</Chip>
              <Chip color="error">Error</Chip>
              <Chip color="warning">Warning</Chip>
              <Chip color="success">Success</Chip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Colors component
const Colors = () => {
  return (
    <div className="max-w-full pb-16">
      <div className="mb-2">
        <span className="bg-primary-main text-white text-xs font-medium px-3 py-1 rounded-full">Foundations</span>
      </div>
      <h1 className="text-3xl font-bold mb-2">Sistema de Cores</h1>
      <p className="text-gray-500 mb-6">Paleta de cores e tokens de design utilizados na aplicação (50-950).</p>
      
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-6 border-b border-gray-200 w-full">
          <TabsTrigger value="overview" className="px-4 py-2">Visão geral</TabsTrigger>
          <TabsTrigger value="palettes" className="px-4 py-2">Palettes</TabsTrigger>
          <TabsTrigger value="base" className="px-4 py-2">Base colors</TabsTrigger>
          <TabsTrigger value="usage" className="px-4 py-2">Uso</TabsTrigger>
          <TabsTrigger value="accessibility" className="px-4 py-2">Acessibilidade</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-8">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Sistema de Cores</h2>
            <p className="text-gray-600 mb-4">
              Nosso sistema de cores é construído com variáveis CSS para suportar temas e personalização.
            </p>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Tipos de Variações</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6 space-y-4">
                <h3 className="text-lg font-medium">Variações de Estado</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="font-medium text-sm w-32">main:</span>
                    <span className="text-sm">Cor principal para elementos de destaque</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-medium text-sm w-32">dark:</span>
                    <span className="text-sm">Variação mais escura para contraste</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-medium text-sm w-32">light:</span>
                    <span className="text-sm">Variação mais clara para fundos e elementos sutis</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-medium text-sm w-32">hover:</span>
                    <span className="text-sm">Estado de hover para elementos interativos</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-medium text-sm w-32">selected:</span>
                    <span className="text-sm">Estado selecionado para elementos interativos</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-medium text-sm w-32">focusVisible:</span>
                    <span className="text-sm">Estado de foco visível para acessibilidade</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-medium text-sm w-32">outlinedBorder:</span>
                    <span className="text-sm">Cor para bordas e contornos</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-medium text-sm w-32">contrast:</span>
                    <span className="text-sm">Cor de texto sobre fundos primários</span>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg p-6 space-y-4">
                <h3 className="text-lg font-medium">Variações de Texto</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="font-medium text-sm w-32">primary:</span>
                    <span className="text-sm">Texto principal para conteúdo importante</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-medium text-sm w-32">secondary:</span>
                    <span className="text-sm">Texto secundário para descrições e detalhes</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-medium text-sm w-32">disabled:</span>
                    <span className="text-sm">Texto para elementos desabilitados</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-medium text-sm w-32">hover:</span>
                    <span className="text-sm">Estado de hover para texto interativo</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-medium text-sm w-32">selected:</span>
                    <span className="text-sm">Estado selecionado para texto interativo</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-medium text-sm w-32">focus:</span>
                    <span className="text-sm">Estado de foco para texto interativo</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-medium text-sm w-32">focusVisible:</span>
                    <span className="text-sm">Estado de foco visível para acessibilidade</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">O sistema é organizado em dois níveis principais:</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6 space-y-4">
                <h3 className="text-lg font-medium">1. Cores Básicas</h3>
                <p className="text-sm text-gray-600 mb-3">Um conjunto completo de cores de 50 a 900 para:</p>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>base-color-amicci base-color-amicciDark base-color-blue base-color-magenta</p>
                  <p>base-color-green base-color-gray base-color-orange base-color-red</p>
                  <p>base-color-yellow base-color-common-white</p>
                </div>
              </div>
              
              <div className="border rounded-lg p-6 space-y-4">
                <h3 className="text-lg font-medium">2. Paletas Compostas</h3>
                <p className="text-sm text-gray-600 mb-3">Paletas semânticas que utilizam as cores básicas como base:</p>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>base-color-amicci base-color-amicciDark base-color-magenta base-color-gray</p>
                  <p>base-color-red base-color-yellow base-color-blue base-color-green</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Cada paleta composta inclui variações para diferentes estados e usos:</h2>
            
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              <div className="h-12 bg-primary-main rounded flex items-center justify-center">
                <span className="text-white text-sm">main</span>
              </div>
              <div className="h-12 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-white text-sm">dark</span>
              </div>
              <div className="h-12 bg-gray-100 rounded flex items-center justify-center">
                <span className="text-gray-800 text-sm">light</span>
              </div>
              <div className="h-12 bg-blue-50 rounded border border-blue-200 flex items-center justify-center">
                <span className="text-blue-800 text-sm">focusVisible</span>
              </div>
              <div className="h-12 bg-green-100 border border-green-300 rounded flex items-center justify-center">
                <span className="text-green-800 text-sm">outlinedBorder</span>
              </div>
              <div className="h-12 bg-gray-50 rounded flex items-center justify-center">
                <span className="text-gray-600 text-sm">contrast</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Como Usar</h2>
            
            <div className="border rounded-lg p-6 space-y-4">
              <p className="text-gray-600 mb-3">
                Acesse as cores usando as classes utilitárias do Tailwind baseadas na nomenclatura semântica:
              </p>
              
              <div className="space-y-2 font-mono text-sm">
                <div className="flex items-center gap-2">
                  <span className="bg-primary-main text-white px-2 py-1 rounded">bg-primary-main</span>
                  <span className="text-gray-500">- Cor primária principal</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-error-main px-2 py-1">text-error-main</span>
                  <span className="text-gray-500">- Texto na cor de erro</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="border border-warning-outlinedBorder px-2 py-1 rounded">border-warning-outlinedBorder</span>
                  <span className="text-gray-500">- Borda na cor de contorno de aviso</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-amicci-500 text-white px-2 py-1 rounded">bg-amicci-500</span>
                  <span className="text-gray-500">- Cor básica amicci (500)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-900 px-2 py-1">text-gray-900</span>
                  <span className="text-gray-500">- Texto principal</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Acessibilidade</h2>
            
            <div className="border rounded-lg p-6 space-y-4">
              <div className="space-y-2">
                <p className="text-gray-600">
                  Nosso sistema de cores foi projetado com acessibilidade em mente:
                </p>
                
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Os pares de cores atendem aos requisitos de contraste WCAG 2.1 AA</li>
                  <li>Cada paleta inclui versões de contraste dedicadas</li>
                  <li>As cores seguem uma hierarquia visual clara</li>
                  <li>Estados de interação (hover, focus, selected) são visualmente distintos</li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="palettes">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Paletas Semânticas</h2>
              <p className="text-gray-600 mb-4">
                Nossas paletas semânticas são derivadas das cores base e carregam significados específicos 
                que ajudam na comunicação visual do sistema.
              </p>
            </div>
            
            <PaletteTable palettes={paletteData} />
          </div>
        </TabsContent>
        
        <TabsContent value="base">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Cores Base</h2>
              <p className="text-gray-600 mb-4">
                Nossas cores base servem como fundação para todas as paletas semânticas, oferecendo variações 
                de intensidade para cada grupo de cor.
              </p>
            </div>
            
            <BaseColorsTable baseColors={baseColorsData} />
          </div>
        </TabsContent>
        
        <TabsContent value="usage">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Uso e Aplicação</h2>
              <p className="text-gray-600 mb-4">
                Orientações sobre como aplicar as cores de forma consistente em diferentes componentes e interfaces.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <ComponentCard title="Exemplos de Uso">
                <ColorExample />
              </ComponentCard>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Diretrizes de Aplicação</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Use a cor primária para elementos de ação principal e pontos de foco importantes.</li>
                  <li>A cor secundária deve ser usada para elementos complementares e ações alternativas.</li>
                  <li>As cores de feedback (sucesso, erro, alerta) devem ser usadas de forma consistente para transmitir o mesmo significado em toda a interface.</li>
                  <li>Mantenha contraste adequado entre texto e fundo para garantir legibilidade.</li>
                  <li>Use variações de intensidade para criar hierarquia visual dentro de um mesmo grupo de elementos.</li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="accessibility">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Acessibilidade de Cores</h2>
              <p className="text-gray-600 mb-4">
                Nossas cores são testadas para garantir adequado contraste e legibilidade seguindo 
                as diretrizes WCAG 2.1.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Diretrizes de Contraste</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li><span className="font-medium">WCAG AA:</span> Requer uma razão de contraste mínima de 4.5:1 para texto normal e 3:1 para texto grande.</li>
                  <li><span className="font-medium">WCAG AAA:</span> Requer uma razão de contraste mínima de 7:1 para texto normal e 4.5:1 para texto grande.</li>
                  <li>Certifique-se de que elementos interativos têm contraste suficiente com seu fundo.</li>
                  <li>Não use apenas cor para transmitir informações importantes - adicione ícones ou texto.</li>
                </ul>
              </div>
              
              <div className="border rounded-lg p-6 space-y-4">
                <h3 className="font-medium">Análise Visual de Contraste</h3>
                <p className="text-gray-600">
                  Use a tabela de paletas para verificar o contraste WCAG de cada cor em relação a fundos claros e escuros.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white p-4 rounded border space-y-2">
                    <p className="text-text-primary font-medium">Texto primário em fundo claro</p>
                    <p className="text-text-secondary">Texto secundário em fundo claro</p>
                    <Button>Botão primário</Button>
                  </div>
                  
                  <div className="bg-gray-900 p-4 rounded border space-y-2">
                    <p className="text-white font-medium">Texto primário em fundo escuro</p>
                    <p className="text-gray-300">Texto secundário em fundo escuro</p>
                    <Button>Botão primário</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Colors;
