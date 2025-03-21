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

[Rest of the code continues in next message due to length limits...]
