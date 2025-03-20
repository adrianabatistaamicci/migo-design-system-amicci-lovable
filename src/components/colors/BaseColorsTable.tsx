
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import ColorSwatch from './ColorSwatch';
import { colorUtils } from '@/utils/colorUtils';
import { Copy } from 'lucide-react';

interface ColorWeight {
  weight: string;
  colorClass: string;
  hexValue: string;
}

interface BaseColor {
  name: string;
  weights: ColorWeight[];
}

interface BaseColorsTableProps {
  baseColors: BaseColor[];
}

const BaseColorsTable = ({ baseColors }: BaseColorsTableProps) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
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
      {baseColors.map((baseColor) => (
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
              {baseColor.weights.map((weight) => {
                const hexValue = weight.hexValue;
                const rgbValue = colorUtils.hexToRgb(hexValue);
                const hslValue = colorUtils.hexToHsl(hexValue);
                
                return (
                  <TableRow key={`${baseColor.name}-${weight.weight}`}>
                    <TableCell className="font-mono bg-gray-50">
                      {baseColor.name.toLowerCase()}-{weight.weight}
                    </TableCell>
                    <TableCell>
                      <ColorSwatch 
                        color={weight.colorClass} 
                        textOverlay={weight.weight}
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
};

export default BaseColorsTable;
