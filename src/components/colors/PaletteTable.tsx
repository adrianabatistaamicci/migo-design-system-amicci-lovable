
import React from 'react';
import { Copy } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { colorUtils } from '@/utils/colorUtils';
import ColorSwatch from './ColorSwatch';

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
                        textOverlay={variant.hexValue || ''} 
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

export default PaletteTable;
