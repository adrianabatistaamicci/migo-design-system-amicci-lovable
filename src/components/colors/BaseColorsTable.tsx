
import React from 'react';
import { Copy } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { colorUtils } from '@/utils/colorUtils';
import ColorSwatch from './ColorSwatch';
import ComponentCard from '@/components/ComponentCard';

interface Weight {
  weight: string;
  colorClass: string;
  hexValue: string;
}

interface BaseColor {
  name: string;
  weights: Weight[];
}

interface BaseColorsTableProps {
  baseColors: BaseColor[];
}

const BaseColorsTable: React.FC<BaseColorsTableProps> = ({ baseColors }) => {
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

  return (
    <div className="space-y-8">
      <ComponentCard 
        title="Cores Base" 
        description="Estas são as cores fundamentais do nosso sistema, a partir das quais construímos nossas paletas semânticas."
        className="overflow-hidden rounded-lg"
      >
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
                    const rgbValue = colorUtils.hexToRgb ? colorUtils.hexToRgb(hexValue) : '';
                    const hslValue = colorUtils.hexToHsl ? colorUtils.hexToHsl(hexValue) : '';
                    
                    return (
                      <TableRow key={`${baseColor.name}-${weight.weight}`}>
                        <TableCell className="font-mono bg-inherit">
                          {baseColor.name.toLowerCase()}-{weight.weight}
                        </TableCell>
                        <TableCell>
                          <ColorSwatch color={weight.colorClass} textOverlay={weight.weight} className="h-12 rounded-md" />
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
      </ComponentCard>
    </div>
  );
};

export default BaseColorsTable;
