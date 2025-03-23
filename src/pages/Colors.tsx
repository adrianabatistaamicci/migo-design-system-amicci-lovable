import React, { useState } from 'react';
import { Chip } from '@/components/ui/chip';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Copy, Check, Eye, EyeOff, AlertCircle, Info } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { colorUtils, colorBlindnessFilters } from '@/utils/colorUtils';
import ComponentCard from '@/components/ComponentCard';
import Header from '@/components/library-components/Header';
import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { TailwindTabs } from '@/components/ui/tabs';

const baseColorsData = [
  {
    name: 'Amicci',
    description: 'Cores primárias da marca',
    weights: [
      { weight: '50', colorClass: 'bg-amicci-50', hexValue: '#E7FCFA' },
      { weight: '100', colorClass: 'bg-amicci-100', hexValue: '#C5F9F5' },
      { weight: '200', colorClass: 'bg-amicci-200', hexValue: '#9FF4EE' },
      { weight: '300', colorClass: 'bg-amicci-300', hexValue: '#5DEAD5' },
      { weight: '400', colorClass: 'bg-amicci-400', hexValue: '#2ACDBB' },
      { weight: '500', colorClass: 'bg-amicci-500', hexValue: '#00A696' },
      { weight: '600', colorClass: 'bg-amicci-600', hexValue: '#007F74' },
      { weight: '700', colorClass: 'bg-amicci-700', hexValue: '#00655D' },
      { weight: '800', colorClass: 'bg-amicci-800', hexValue: '#004C47' },
      { weight: '900', colorClass: 'bg-amicci-900', hexValue: '#003330' }
    ]
  },
  {
    name: 'AmicciDark',
    description: 'Cores secundárias da marca',
    weights: [
      { weight: '50', colorClass: 'bg-amicciDark-50', hexValue: '#E4F3F7' },
      { weight: '100', colorClass: 'bg-amicciDark-100', hexValue: '#C0E3EB' },
      { weight: '200', colorClass: 'bg-amicciDark-200', hexValue: '#94D0DD' },
      { weight: '300', colorClass: 'bg-amicciDark-300', hexValue: '#59BACF' },
      { weight: '400', colorClass: 'bg-amicciDark-400', hexValue: '#28A4C4' },
      { weight: '500', colorClass: 'bg-amicciDark-500', hexValue: '#008FB7' },
      { weight: '600', colorClass: 'bg-amicciDark-600', hexValue: '#00718F' },
      { weight: '700', colorClass: 'bg-amicciDark-700', hexValue: '#005974' },
      { weight: '800', colorClass: 'bg-amicciDark-800', hexValue: '#004258' },
      { weight: '900', colorClass: 'bg-amicciDark-900', hexValue: '#002D3C' }
    ]
  },
  {
    name: 'Gray',
    description: 'Tons neutros',
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
      { weight: '900', colorClass: 'bg-gray-900', hexValue: '#111827' }
    ]
  },
  {
    name: 'Magenta',
    description: 'Tons de magenta',
    weights: [
      { weight: '50', colorClass: 'bg-magenta-50', hexValue: '#FAE8F0' },
      { weight: '100', colorClass: 'bg-magenta-100', hexValue: '#F5C6DC' },
      { weight: '200', colorClass: 'bg-magenta-200', hexValue: '#EF9EC5' },
      { weight: '300', colorClass: 'bg-magenta-300', hexValue: '#E767A6' },
      { weight: '400', colorClass: 'bg-magenta-400', hexValue: '#E1368C' },
      { weight: '500', colorClass: 'bg-magenta-500', hexValue: '#D60270' },
      { weight: '600', colorClass: 'bg-magenta-600', hexValue: '#AB0256' },
      { weight: '700', colorClass: 'bg-magenta-700', hexValue: '#880144' },
      { weight: '800', colorClass: 'bg-magenta-800', hexValue: '#660133' },
      { weight: '900', colorClass: 'bg-magenta-900', hexValue: '#490124' }
    ]
  }
];

const paletteData = [
  {
    name: 'primary',
    description: 'amicci',
    variants: [
      { name: 'main', colorClass: 'bg-primary-main', hexValue: '#00A696', baseColor: 'Amicci-500' },
      { name: 'light', colorClass: 'bg-primary-light', hexValue: '#C5F9F5', baseColor: 'Amicci-100' },
      { name: 'dark', colorClass: 'bg-primary-dark', hexValue: '#00655D', baseColor: 'Amicci-700' },
      { name: 'hover', colorClass: 'bg-primary-hover', hexValue: 'rgba(0, 166, 150, 0.04)', baseColor: 'Amicci-500', opacity: '4%' },
      { name: 'selected', colorClass: 'bg-primary-selected', hexValue: 'rgba(0, 166, 150, 0.08)', baseColor: 'Amicci-500', opacity: '8%' },
      { name: 'focus', colorClass: 'bg-primary-focus', hexValue: 'rgba(0, 166, 150, 0.12)', baseColor: 'Amicci-500', opacity: '12%' },
      { name: 'focusVisible', colorClass: 'bg-primary-focusVisible', hexValue: 'rgba(0, 166, 150, 0.30)', baseColor: 'Amicci-500', opacity: '30%' },
      { name: 'outlinedBorder', colorClass: 'bg-primary-outlinedBorder', hexValue: 'rgba(0, 166, 150, 0.50)', baseColor: 'Amicci-500', opacity: '50%' },
      { name: 'contrastText', colorClass: 'text-white', hexValue: '#FFFFFF', baseColor: 'White' }
    ]
  },
  {
    name: 'secondary',
    description: 'amicciDark',
    variants: [
      { name: 'main', colorClass: 'bg-secondary-main', hexValue: '#008FB7', baseColor: 'AmicciDark-500' },
      { name: 'light', colorClass: 'bg-secondary-light', hexValue: '#C0E3EB', baseColor: 'AmicciDark-100' },
      { name: 'dark', colorClass: 'bg-secondary-dark', hexValue: '#005974', baseColor: 'AmicciDark-700' },
      { name: 'dark2', colorClass: 'bg-secondary-dark2', hexValue: '#004258', baseColor: 'AmicciDark-800' },
      { name: 'hover', colorClass: 'bg-secondary-hover', hexValue: 'rgba(0, 143, 183, 0.04)', baseColor: 'AmicciDark-500', opacity: '4%' },
      { name: 'selected', colorClass: 'bg-secondary-selected', hexValue: 'rgba(0, 143, 183, 0.08)', baseColor: 'AmicciDark-500', opacity: '8%' },
      { name: 'focus', colorClass: 'bg-secondary-focus', hexValue: 'rgba(0, 143, 183, 0.12)', baseColor: 'AmicciDark-500', opacity: '12%' },
      { name: 'focusVisible', colorClass: 'bg-secondary-focusVisible', hexValue: 'rgba(0, 143, 183, 0.30)', baseColor: 'AmicciDark-500', opacity: '30%' },
      { name: 'outlinedBorder', colorClass: 'bg-secondary-outlinedBorder', hexValue: 'rgba(0, 143, 183, 0.50)', baseColor: 'AmicciDark-500', opacity: '50%' },
      { name: 'contrastText', colorClass: 'text-white', hexValue: '#FFFFFF', baseColor: 'White' }
    ]
  },
  {
    name: 'tertiary',
    description: 'magenta',
    variants: [
      { name: 'main', colorClass: 'bg-tertiary-main', hexValue: '#D60270', baseColor: 'Magenta-500' },
      { name: 'light', colorClass: 'bg-tertiary-light', hexValue: '#F5C6DC', baseColor: 'Magenta-100' },
      { name: 'dark', colorClass: 'bg-tertiary-dark', hexValue: '#880144', baseColor: 'Magenta-700' },
      { name: 'hover', colorClass: 'bg-tertiary-hover', hexValue: 'rgba(214, 2, 112, 0.04)', baseColor: 'Magenta-500', opacity: '4%' },
      { name: 'selected', colorClass: 'bg-tertiary-selected', hexValue: 'rgba(214, 2, 112, 0.08)', baseColor: 'Magenta-500', opacity: '8%' },
      { name: 'focus', colorClass: 'bg-tertiary-focus', hexValue: 'rgba(214, 2, 112, 0.12)', baseColor: 'Magenta-500', opacity: '12%' },
      { name: 'focusVisible', colorClass: 'bg-tertiary-focusVisible', hexValue: 'rgba(214, 2, 112, 0.30)', baseColor: 'Magenta-500', opacity: '30%' },
      { name: 'outlinedBorder', colorClass: 'bg-tertiary-outlinedBorder', hexValue: 'rgba(214, 2, 112, 0.50)', baseColor: 'Magenta-500', opacity: '50%' },
      { name: 'contrastText', colorClass: 'text-white', hexValue: '#FFFFFF', baseColor: 'White' }
    ]
  },
  {
    name: 'text',
    description: 'gray',
    variants: [
      { name: 'primary', colorClass: 'text-gray-900', hexValue: '#111827', baseColor: 'Gray-900' },
      { name: 'secondary', colorClass: 'text-gray-500', hexValue: '#6B7280', baseColor: 'Gray-500' },
      { name: 'disabled', colorClass: 'text-gray-400', hexValue: '#9CA3AF', baseColor: 'Gray-400' },
      { name: 'hover', colorClass: 'hover:bg-gray-50', hexValue: 'rgba(17, 24, 39, 0.04)', baseColor: 'Gray-900', opacity: '4%' },
      { name: 'selected', colorClass: 'bg-gray-100', hexValue: 'rgba(17, 24, 39, 0.08)', baseColor: 'Gray-900', opacity: '8%' },
      { name: 'focus', colorClass: 'focus:bg-gray-200', hexValue: 'rgba(17, 24, 39, 0.12)', baseColor: 'Gray-900', opacity: '12%' },
      { name: 'focusVisible', colorClass: 'focus-visible:ring-gray-300', hexValue: 'rgba(17, 24, 39, 0.30)', baseColor: 'Gray-900', opacity: '30%' },
      { name: 'contrastText', colorClass: 'text-white', hexValue: '#FFFFFF', baseColor: 'White' }
    ]
  },
  {
    name: 'error',
    description: 'red',
    variants: [
      { name: 'main', colorClass: 'bg-error-main', hexValue: '#DC2626', baseColor: 'Red-600' },
      { name: 'light', colorClass: 'bg-error-light', hexValue: '#FEE2E2', baseColor: 'Red-100' },
      { name: 'dark', colorClass: 'bg-error-dark', hexValue: '#7F1D1D', baseColor: 'Red-900' },
      { name: 'hover', colorClass: 'bg-error-hover', hexValue: 'rgba(220, 38, 38, 0.04)', baseColor: 'Red-600', opacity: '4%' },
      { name: 'selected', colorClass: 'bg-error-selected', hexValue: 'rgba(220, 38, 38, 0.08)', baseColor: 'Red-600', opacity: '8%' },
      { name: 'focusVisible', colorClass: 'bg-error-focusVisible', hexValue: 'rgba(220, 38, 38, 0.30)', baseColor: 'Red-600', opacity: '30%' },
      { name: 'outlinedBorder', colorClass: 'border-error-outlinedBorder', hexValue: 'rgba(220, 38, 38, 0.50)', baseColor: 'Red-600', opacity: '50%' },
      { name: 'contrastText', colorClass: 'text-white', hexValue: '#FFFFFF', baseColor: 'White' }
    ]
  },
  {
    name: 'success',
    description: 'green',
    variants: [
      { name: 'main', colorClass: 'bg-success-main', hexValue: '#10B981', baseColor: 'Green-500' },
      { name: 'light', colorClass: 'bg-success-light', hexValue: '#D1FAE5', baseColor: 'Green-100' },
      { name: 'dark', colorClass: 'bg-success-dark', hexValue: '#047857', baseColor: 'Green-700' },
      { name: 'hover', colorClass: 'bg-success-hover', hexValue: 'rgba(16, 185, 129, 0.04)', baseColor: 'Green-500', opacity: '4%' },
      { name: 'selected', colorClass: 'bg-success-selected', hexValue: 'rgba(16, 185, 129, 0.08)', baseColor: 'Green-500', opacity: '8%' },
      { name: 'focusVisible', colorClass: 'bg-success-focusVisible', hexValue: 'rgba(16, 185, 129, 0.30)', baseColor: 'Green-500', opacity: '30%' },
      { name: 'outlinedBorder', colorClass: 'border-success-outlinedBorder', hexValue: 'rgba(16, 185, 129, 0.50)', baseColor: 'Green-500', opacity: '50%' },
      { name: 'contrastText', colorClass: 'text-white', hexValue: '#FFFFFF', baseColor: 'White' }
    ]
  },
  {
    name: 'warning',
    description: 'orange',
    variants: [
      { name: 'main', colorClass: 'bg-warning-main', hexValue: '#F59E0B', baseColor: 'Orange-400' },
      { name: 'light', colorClass: 'bg-warning-light', hexValue: '#FEF3C7', baseColor: 'Orange-100' },
      { name: 'dark', colorClass: 'bg-warning-dark', hexValue: '#D97706', baseColor: 'Orange-600' },
      { name: 'hover', colorClass: 'bg-warning-hover', hexValue: 'rgba(217, 119, 6, 0.04)', baseColor: 'Orange-600', opacity: '4%' },
      { name: 'selected', colorClass: 'bg-warning-selected', hexValue: 'rgba(217, 119, 6, 0.08)', baseColor: 'Orange-600', opacity: '8%' },
      { name: 'focusVisible', colorClass: 'bg-warning-focusVisible', hexValue: 'rgba(217, 119, 6, 0.30)', baseColor: 'Orange-600', opacity: '30%' },
      { name: 'outlinedBorder', colorClass: 'border-warning-outlinedBorder', hexValue: 'rgba(217, 119, 6, 0.50)', baseColor: 'Orange-600', opacity: '50%' },
      { name: 'contrastText', colorClass: 'text-white', hexValue: '#FFFFFF', baseColor: 'White' }
    ]
  },
  {
    name: 'info',
    description: 'blue',
    variants: [
      { name: 'main', colorClass: 'bg-info-main', hexValue: '#0284C7', baseColor: 'LightBlue-600' },
      { name: 'light', colorClass: 'bg-info-light', hexValue: '#E0F2FE', baseColor: 'LightBlue-100' },
      { name: 'dark', colorClass: 'bg-info-dark', hexValue: '#0C4A6E', baseColor: 'LightBlue-900' },
      { name: 'hover', colorClass: 'bg-info-hover', hexValue: 'rgba(2, 132, 199, 0.04)', baseColor: 'LightBlue-700', opacity: '4%' },
      { name: 'selected', colorClass: 'bg-info-selected', hexValue: 'rgba(2, 132, 199, 0.08)', baseColor: 'LightBlue-700', opacity: '8%' },
      { name: 'focusVisible', colorClass: 'bg-info-focusVisible', hexValue: 'rgba(2, 132, 199, 0.30)', baseColor: 'LightBlue-700', opacity: '30%' },
      { name: 'outlinedBorder', colorClass: 'border-info-outlinedBorder', hexValue: 'rgba(2, 132, 199, 0.50)', baseColor: 'LightBlue-700', opacity: '50%' },
      { name: 'contrastText', colorClass: 'text-white', hexValue: '#FFFFFF', baseColor: 'White' }
    ]
  },
  {
    name: 'action',
    description: 'gray',
    variants: [
      { name: 'active', colorClass: 'bg-action-active', hexValue: '#6B7280', baseColor: 'Gray-500' },
      { name: 'hover', colorClass: 'bg-action-hover', hexValue: '#F3F4F6', baseColor: 'Gray-100' },
      { name: 'selected', colorClass: 'bg-action-selected', hexValue: '#6B7280', baseColor: 'Gray-500' },
      { name: 'focus', colorClass: 'bg-action-focus', hexValue: '#9CA3AF', baseColor: 'Gray-400' },
      { name: 'disabled', colorClass: 'bg-action-disabled', hexValue: '#9CA3AF', baseColor: 'Gray-400' },
      { name: 'disabledBackground', colorClass: 'bg-action-disabledBackground', hexValue: '#D1D5DB', baseColor: 'Gray-300' },
      { name: 'contrastText', colorClass: 'text-white', hexValue: '#FFFFFF', baseColor: 'White' }
    ]
  }
];

const ColorSwatch = ({
  color,
  className = "",
  onClick,
  textOverlay,
  weight,
  hexValue,
  copyValue,
  simulationType = ""
}: {
  color: string;
  className?: string;
  onClick?: () => void;
  textOverlay?: string;
  weight?: string;
  hexValue?: string;
  copyValue?: string;
  simulationType?: string;
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

  return (
    <div 
      className={`relative w-full rounded-md ${getBackgroundStyle()} ${className} flex items-center justify-center px-3 transition-all hover:shadow-md cursor-pointer group`}
      onClick={onClick || handleCopy}
      role="button"
      tabIndex={0}
      style={{
        ...(hexValue && !color.startsWith('bg-') ? {
          backgroundColor: hexValue
        } : {}),
        ...(simulationType && colorBlindnessFilters[simulationType] ? {
          filter: colorBlindnessFilters[simulationType]
        } : {})
      }}
    >
      {textOverlay}
      {weight && <span className={`text-xs ${textColor} opacity-75 absolute left-2 top-1`}>{weight}</span>}
      
      <div className={`absolute right-2 top-2 transition-opacity ${copied ? 'opacity-100' : 'opacity-0 group-hover:opacity-70'}`}>
        {copied ? <Check className={`w-4 h-4 ${textColor}`} /> : <Copy className={`w-4 h-4 ${textColor}`} />}
      </div>
    </div>
  );
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
    </div>
  );
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

  return (
    <div className="space-y-8">
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
    </div>
  );
};

const Colors = () => {
  const [simulationType, setSimulationType] = useState('');
  const [activeTab, setActiveTab] = useState('overview');

  const handleSimulation = (type: string) => {
    if (simulationType === type) {
      setSimulationType('');
    } else {
      setSimulationType(type);
    }
  };

  return (
    <div className="w-full animate-fade-in">
      <Header
        title="Sistema de Cores"
        description="Nosso sistema de cores é construído com variáveis CSS para suportar temas e personalização."
        type="foundations"
      />
      
      <TailwindTabs
        defaultValue="overview"
        className="mt-8"
        tabs={[
          { name: 'Visão geral', value: 'overview' },
          { name: 'Cores primárias', value: 'base-colors' },
          { name: 'Paleta semântica', value: 'semantics' },
          { name: 'Acessibilidade', value: 'accessibility' }
        ]}
        onValueChange={(value) => setActiveTab(value)}
      >
        {activeTab === 'overview' && (
          <div className="space-y-8 py-6">
            <div className="grid gap-6 md:grid-cols-2">
              <ComponentCard
                title="Cores primárias"
                description="Cores base do sistema que formam a fundação da paleta de cores"
                className="h-full"
              >
                <div className="grid grid-cols-10 gap-2 h-12">
                  {baseColorsData[0].weights.map((weight) => (
                    <ColorSwatch 
                      key={weight.weight} 
                      color={weight.colorClass}
                      weight={weight.weight}
                      hexValue={weight.hexValue}
                      simulationType={simulationType}
                    />
                  ))}
                </div>
                <div className="grid grid-cols-10 gap-2 h-12 mt-2">
                  {baseColorsData[1].weights.map((weight) => (
                    <ColorSwatch 
                      key={weight.weight} 
                      color={weight.colorClass}
                      weight={weight.weight}
                      hexValue={weight.hexValue}
                      simulationType={simulationType}
                    />
                  ))}
                </div>
              </ComponentCard>

              <ComponentCard
                title="Cores neutras"
                description="Escala de cinza usada para texto, bordas e superfícies"
                className="h-full"
              >
                <div className="grid grid-cols-10 gap-2 h-12">
                  {baseColorsData[2].weights.map((weight) => (
                    <ColorSwatch 
                      key={weight.weight} 
                      color={weight.colorClass}
                      weight={weight.weight}
                      hexValue={weight.hexValue}
                      simulationType={simulationType}
                    />
                  ))}
                </div>
              </ComponentCard>
            </div>

            <ComponentCard
              title="Paleta semântica"
              description="Cores com significados específicos para comunicação de status, feedback e interações"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {paletteData.slice(0, 3).map(palette => (
                  <div key={palette.name} className="space-y-2">
                    <h3 className="text-sm font-medium">{palette.name}</h3>
                    <div className="space-y-1">
                      {palette.variants.slice(0, 3).map(variant => (
                        <ColorSwatch
                          key={variant.name}
                          color={variant.colorClass}
                          textOverlay={variant.name}
                          hexValue={variant.hexValue}
                          className="h-10"
                          simulationType={simulationType}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </ComponentCard>

            <ComponentCard
              title="Cores de estado"
              description="Cores para comunicar feedbacks, alertas e status do sistema"
            >
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                {paletteData.slice(4, 8).map(palette => (
                  <div key={palette.name} className="space-y-2">
                    <h3 className="text-sm font-medium">{palette.name}</h3>
                    <div className="space-y-1">
                      {palette.variants.slice(0, 3).map(variant => (
                        <ColorSwatch
                          key={variant.name}
                          color={variant.colorClass}
                          textOverlay={variant.name}
                          hexValue={variant.hexValue}
                          className="h-10"
                          simulationType={simulationType}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </ComponentCard>
          </div>
        )}

        {activeTab === 'base-colors' && (
          <div className="space-y-12 py-6">
            <BaseColorsTable baseColors={baseColorsData} />
          </div>
        )}

        {activeTab === 'semantics' && (
          <div className="space-y-12 py-6">
            <PaletteTable palettes={paletteData} />
          </div>
        )}

        {activeTab === 'accessibility' && (
          <div className="space-y-8 py-6">
            <ComponentCard
              title="Simulação de daltonismo"
              description="Visualize como as pessoas com diferentes tipos de daltonismo veem as cores"
            >
              <div className="space-y-6">
                <div className="flex flex-col space-y-2">
                  <div className="text-sm font-medium mb-2">Selecione um tipo de daltonismo para simular:</div>
                  <ToggleGroup type="single" value={simulationType} onValueChange={setSimulationType} className="justify-start flex-wrap">
                    <ToggleGroupItem value="protanopia" aria-label="Protanopia" className="gap-2 data-[state=on]:bg-primary-main data-[state=on]:text-white">
                      <div className="w-3 h-3 rounded-full bg-red-500 filter opacity-50"></div>
                      Protanopia
                      <span className="text-xs text-gray-500">(perda de vermelho)</span>
                    </ToggleGroupItem>
                    <ToggleGroupItem value="deuteranopia" aria-label="Deuteranopia" className="gap-2 data-[state=on]:bg-primary-main data-[state=on]:text-white">
                      <div className="w-3 h-3 rounded-full bg-green-500 filter opacity-50"></div>
                      Deuteranopia
                      <span className="text-xs text-gray-500">(perda de verde)</span>
                    </ToggleGroupItem>
                    <ToggleGroupItem value="tritanopia" aria-label="Tritanopia" className="gap-2 data-[state=on]:bg-primary-main data-[state=on]:text-white">
                      <div className="w-3 h-3 rounded-full bg-blue-500 filter opacity-50"></div>
                      Tritanopia
                      <span className="text-xs text-gray-500">(perda de azul)</span>
                    </ToggleGroupItem>
                    <ToggleGroupItem value="achromatopsia" aria-label="Achromatopsia" className="gap-2 data-[state=on]:bg-primary-main data-[state=on]:text-white">
                      <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                      Achromatopsia
                      <span className="text-xs text-gray-500">(sem cores)</span>
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>

                {simulationType && (
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="gap-1.5">
                      <Eye className="w-3.5 h-3.5" />
                      Simulando: {simulationType}
                    </Badge>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => setSimulationType('')}
                      className="h-7 px-2 text-xs"
                    >
                      Remover simulação
                    </Button>
                  </div>
                )}

                <div className="border rounded-md p-4 bg-gray-50">
                  <div className="text-sm font-medium mb-4">Amostra de cores primárias com simulação:</div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-10 gap-2 h-12">
                      {baseColorsData[0].weights.map((weight) => (
                        <ColorSwatch 
                          key={weight.weight} 
                          color={weight.colorClass}
                          weight={weight.weight}
                          hexValue={weight.hexValue}
                          simulationType={simulationType}
                        />
                      ))}
                    </div>
                    <div className="grid grid-cols-10 gap-2 h-12">
                      {baseColorsData[1].weights.map((weight) => (
                        <ColorSwatch 
                          key={weight.weight} 
                          color={weight.colorClass}
                          weight={weight.weight}
                          hexValue={weight.hexValue}
                          simulationType={simulationType}
                        />
                      ))}
                    </div>
                    <div className="grid grid-cols-10 gap-2 h-12">
                      {baseColorsData[3].weights.map((weight) => (
                        <ColorSwatch 
                          key={weight.weight} 
                          color={weight.colorClass}
                          weight={weight.weight}
                          hexValue={weight.hexValue}
                          simulationType={simulationType}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border rounded-md p-4">
                  <div className="text-sm font-medium mb-4">Amostra de elementos da interface:</div>
                  <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex gap-2">
                        <Button variant="default">Botão primário</Button>
                        <Button variant="outline">Botão outline</Button>
                        <Button variant="secondary">Secundário</Button>
                      </div>
                      <div className="flex gap-2">
                        <Badge>Badge padrão</Badge>
                        <Badge variant="outline">Badge outline</Badge>
                        <Badge variant="secondary">Badge secundária</Badge>
                      </div>
                      <div className="p-4 border rounded-md bg-card">
                        <div className="text-lg font-semibold">Texto de título</div>
                        <div className="text-sm text-muted-foreground">
                          Este é um exemplo de texto secundário que tem contraste reduzido
                        </div>
                        <Separator className="my-2" />
                        <div className="flex justify-between">
                          <div className="text-xs">Detalhes</div>
                          <div className="text-xs font-medium">Valor</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 border rounded-md space-y-4">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarFallback>AM</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">Amicci Medical</div>
                          <div className="text-sm text-muted-foreground">amicci@example.com</div>
                        </div>
                      </div>
                      <Separator />
                      <div className="grid gap-2">
                        <div className="flex justify-between text-sm">
                          <span>Status:</span>
                          <Badge variant="outline" className="bg-success-light text-success-dark">Ativo</Badge>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Plano:</span>
                          <Badge variant="outline" className="bg-info-light text-info-dark">Premium</Badge>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Alerta:</span>
                          <Badge variant="outline" className="bg-warning-light text-warning-dark">Pendente</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ComponentCard>

            <ComponentCard
              title="Guias de acessibilidade WCAG"
              description="Certificações de contraste e recomendações para uso acessível das cores"
            >
              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 border rounded-md space-y-4">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-warning-main mt-0.5" />
                      <div>
                        <h4 className="font-medium">Níveis de contraste WCAG</h4>
                        <p className="text-sm text-muted-foreground">
                          WCAG define dois níveis de contraste: AA (mínimo) e AAA (aprimorado)
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                        <span>AA texto normal (4.5:1)</span>
                        <Badge variant="outline" className="bg-success-light text-success-dark">Recomendado</Badge>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                        <span>AA texto grande (3:1)</span>
                        <Badge variant="outline" className="bg-success-light text-success-dark">Mínimo</Badge>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                        <span>AAA texto normal (7:1)</span>
                        <Badge variant="outline" className="bg-info-light text-info-dark">Melhor prática</Badge>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                        <span>AAA texto grande (4.5:1)</span>
                        <Badge variant="outline" className="bg-info-light text-info-dark">Aprimorado</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-md space-y-4">
                    <div className="flex items-start gap-2">
                      <Info className="w-5 h-5 text-info-main mt-0.5" />
                      <div>
                        <h4 className="font-medium">Não use apenas cor para transmitir informação</h4>
                        <p className="text-sm text-muted-foreground">
                          Sempre combine cores com textos, ícones ou padrões para garantir a acessibilidade
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2 p-3 bg-error-light rounded text-sm">
                        <div className="w-3 h-3 rounded-full bg-error-main"></div>
                        <span className="text-error-dark font-medium">Erro</span>
                      </div>
                      <div className="flex items-center gap-2 p-3 bg-success-light rounded text-sm">
                        <div className="w-3 h-3 rounded-full bg-success-main"></div>
                        <span className="text-success-dark font-medium">Sucesso</span>
                      </div>
                      <div className="flex items-center gap-2 p-3 bg-warning-light rounded text-sm">
                        <div className="w-3 h-3 rounded-full bg-warning-main"></div>
                        <span className="text-warning-dark font-medium">Aviso</span>
                      </div>
                      <div className="flex items-center gap-2 p-3 bg-info-light rounded text-sm">
                        <div className="w-3 h-3 rounded-full bg-info-main"></div>
                        <span className="text-info-dark font-medium">Informação</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ComponentCard>
          </div>
        )}
      </TailwindTabs>
    </div>
  );
};

export default Colors;
