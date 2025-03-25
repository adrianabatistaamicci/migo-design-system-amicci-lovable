
import React from 'react';
import { Copy } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { colorUtils } from '@/utils/colorUtils';
import ColorSwatch from './ColorSwatch';
import ComponentCard from '@/components/ComponentCard';

interface Variant {
  name: string;
  colorClass: string;
  hexValue?: string;
  baseColor: string;
  opacity?: string;
  textColor?: string;
}

interface Palette {
  name: string;
  description: string;
  variants: Variant[];
}

interface PaletteTableProps {
  palettes: Palette[];
}

const PaletteTable: React.FC<PaletteTableProps> = ({ palettes }) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const renderCopyButton = (text: string) => (
    <button 
      onClick={() => copyToClipboard(text)} 
      className="ml-2 text-gray-400 hover:text-gray-600 transition-colors"
    >
      <Copy size={14} />
    </button>
  );

  const getWCAGStatus = (hexColor: string) => {
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

  const formatColorValue = (value?: string): string => {
    if (!value) return '';
    
    if (value.startsWith('#')) return value;
    
    if (value.startsWith('rgba')) {
      const matches = value.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);
      if (matches) {
        const [_, r, g, b, a] = matches;
        if (a === '1') {
          return `#${parseInt(r).toString(16).padStart(2, '0')}${parseInt(g).toString(16).padStart(2, '0')}${parseInt(b).toString(16).padStart(2, '0')}`;
        }
        return `rgba(${r},${g},${b},${a})`;
      }
    }
    
    return value;
  };

  return (
    <div className="space-y-8">
      {palettes.map(palette => (
        <ComponentCard
          key={palette.name}
          title={palette.name}
          description={`Paleta de cor para ${palette.description}`}
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
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
                  const colorValue = formatColorValue(variant.hexValue);
                  const wcagInfo = variant.hexValue ? getWCAGStatus(variant.hexValue) : null;
                  
                  return (
                    <TableRow key={`${palette.name}-${variant.name}`}>
                      <TableCell className="font-mono">{`${palette.name.toLowerCase()}-${variant.name}`}</TableCell>
                      <TableCell>
                        <ColorSwatch 
                          color={variant.colorClass} 
                          hexValue={variant.hexValue} 
                          copyValue={colorValue} 
                          textOverlay={colorValue} 
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
        </ComponentCard>
      ))}
    </div>
  );
};

export default PaletteTable;
