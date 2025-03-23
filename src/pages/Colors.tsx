
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
          { name: 'Cores Base', value: 'base-colors' },
          { name: 'Paletas', value: 'palettes' },
          { name: 'Uso', value: 'usage' },
          { name: 'Acessibilidade', value: 'accessibility' }
        ]}
        variant="pillsGray"
        onChange={value => setActiveTab(value)}
      >
        {activeTab === 'overview' && (
          <div className="space-y-6 mt-6">
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
            
            <ComponentCard
              title="Como Usar"
              description="Utilize as cores através das classes do Tailwind e tokens CSS."
            >
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
        )}
        
        {activeTab === 'base-colors' && (
          <ComponentCard
            title="Cores Base"
            description="Conjunto de cores básicas que formam a fundação do sistema."
          >
            <p className="text-gray-600 mb-6">
              Estas cores básicas servem como alicerce para todo o sistema de design, fornecendo consistência visual em toda a aplicação.
            </p>
            <BaseColorsTable baseColors={baseColorsData} />
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
            <PaletteTable palettes={paletteData} />
          </ComponentCard>
        )}
        
        {activeTab === 'usage' && (
          <ComponentCard
            title="Uso"
            description="Orientações para a aplicação correta das cores na interface."
          >
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
        )}
        
        {activeTab === 'accessibility' && (
          <ComponentCard
            title="Acessibilidade de Cores"
            description="Garantindo que nosso sistema de cores seja acessível a todos."
          >
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
                <h3 className="text-xl font-semibold mb-3">Teste de Daltonismo</h3>
                <p className="text-gray-600 mb-4">
                  Simulações de como nosso sistema de cores é percebido por pessoas com diferentes tipos de daltonismo:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium">Selecione um tipo de daltonismo para simular:</h4>
                    <div className="flex flex-wrap gap-3">
                      <ToggleGroup type="single" value={simulationType} onValueChange={setSimulationType}>
                        <ToggleGroupItem value="protanopia" aria-label="Protanopia">
                          <span className="px-2">Protanopia</span>
                        </ToggleGroupItem>
                        <ToggleGroupItem value="deuteranopia" aria-label="Deuteranopia">
                          <span className="px-2">Deuteranopia</span>
                        </ToggleGroupItem>
                        <ToggleGroupItem value="tritanopia" aria-label="Tritanopia">
                          <span className="px-2">Tritanopia</span>
                        </ToggleGroupItem>
                        <ToggleGroupItem value="achromatopsia" aria-label="Achromatopsia">
                          <span className="px-2">Achromatopsia</span>
                        </ToggleGroupItem>
                      </ToggleGroup>
                      
                      {simulationType && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => setSimulationType('')}
                          className="flex items-center gap-1"
                        >
                          <EyeOff className="h-4 w-4" />
                          Remover simulação
                        </Button>
                      )}
                    </div>
                  </div>

                  <div className="border p-4 rounded-lg space-y-3">
                    <h4 className="font-medium">Tipos de Daltonismo:</h4>
                    <ul className="space-y-2 list-disc pl-5 text-sm text-gray-700">
                      <li><strong>Protanopia:</strong> Dificuldade em perceber vermelho</li>
                      <li><strong>Deuteranopia:</strong> Dificuldade em perceber verde</li>
                      <li><strong>Tritanopia:</strong> Dificuldade em perceber azul</li>
                      <li><strong>Achromatopsia:</strong> Ausência total de percepção de cores</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 space-y-6">
                  <h4 className="font-medium">Visualização das cores com simulação de daltonismo:</h4>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {baseColorsData.slice(0, 2).map(baseColor => (
                      <div key={baseColor.name} className="space-y-2">
                        <h5 className="text-sm font-medium">{baseColor.name}</h5>
                        <div className="grid grid-cols-5 gap-1">
                          {baseColor.weights.filter((_, index) => index % 2 === 0).map(weight => (
                            <ColorSwatch
                              key={`${baseColor.name}-${weight.weight}`}
                              color={weight.colorClass}
                              hexValue={weight.hexValue}
                              weight={weight.weight}
                              className="h-12"
                              simulationType={simulationType}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                    
                    {paletteData.slice(0, 4).map(palette => (
                      <div key={palette.name} className="space-y-2">
                        <h5 className="text-sm font-medium">{palette.name}</h5>
                        <div className="grid grid-cols-3 gap-1">
                          {palette.variants.slice(0, 3).map(variant => (
                            <ColorSwatch
                              key={`${palette.name}-${variant.name}`}
                              color={variant.colorClass}
                              hexValue={variant.hexValue}
                              weight={variant.name}
                              className="h-12"
                              simulationType={simulationType}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
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
                      <h4 className="font-medium">Uso de padrões e texturas</h4>
                    </div>
                    <p className="text-sm text-gray-600">Utilizamos padrões diferentes para distinguir áreas</p>
                    <div className="p-3 bg-gray-100 rounded border-l-4 border-warning-main">
                      <p className="text-warning-dark">Aviso com borda e fundo diferenciado</p>
                    </div>
                  </div>
                  
                  <div className="border p-4 rounded-lg space-y-2">
                    <div className="flex items-center gap-2 text-primary-main">
                      <Check className="h-5 w-5" />
                      <h4 className="font-medium">Testado para daltonismo</h4>
                    </div>
                    <p className="text-sm text-gray-600">Nossas combinações são testadas para diferentes tipos de daltonismo</p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-12 bg-success-main rounded flex items-center justify-center">
                        <Check className="h-5 w-5 text-white" />
                      </div>
                      <div className="h-12 bg-error-main rounded flex items-center justify-center">
                        <AlertCircle className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ComponentCard>
        )}
      </TailwindTabs>
    </div>
  );
};

export default Colors;
