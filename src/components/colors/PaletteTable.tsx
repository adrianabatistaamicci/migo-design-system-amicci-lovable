
import React from 'react';
import { Copy } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import ColorSwatch from './ColorSwatch';
import ComponentCard from '@/components/ComponentCard';

interface Variant {
  name: string;
  colorClass: string;
  baseColor: string;
  textColor?: string;  // Make textColor optional
  hexValue: string;
  opacity?: string;
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

  return (
    <div className="space-y-10">
      {palettes.map((palette, index) => (
        <ComponentCard 
          key={palette.name} 
          title={palette.name} 
          description={palette.description}
          className="overflow-hidden rounded-lg"
        >
          <Table className="border rounded-lg overflow-hidden">
            <TableHeader>
              <TableRow>
                <TableHead>Variante</TableHead>
                <TableHead>Amostra</TableHead>
                <TableHead>Token CSS</TableHead>
                <TableHead>Cor Base</TableHead>
                <TableHead>Hexadecimal</TableHead>
                {palette.variants.some(v => v.opacity) && (
                  <TableHead>Opacidade</TableHead>
                )}
              </TableRow>
            </TableHeader>
            <TableBody>
              {palette.variants.map((variant) => (
                <TableRow key={`${palette.name}-${variant.name}`}>
                  <TableCell className="font-mono">
                    {variant.name}
                  </TableCell>
                  <TableCell>
                    <ColorSwatch 
                      color={variant.colorClass} 
                      hexValue={variant.hexValue} 
                      className="h-12 rounded-md" 
                    />
                  </TableCell>
                  <TableCell className="font-mono">
                    --{variant.name.toLowerCase().replace(/\./g, '-')}
                    {renderCopyButton(`--${variant.name.toLowerCase().replace(/\./g, '-')}`)}
                  </TableCell>
                  <TableCell className="font-mono">
                    {variant.baseColor}
                    {renderCopyButton(variant.baseColor)}
                  </TableCell>
                  <TableCell className="font-mono">
                    {variant.hexValue}
                    {renderCopyButton(variant.hexValue)}
                  </TableCell>
                  {palette.variants.some(v => v.opacity) && (
                    <TableCell className="font-mono">
                      {variant.opacity || '100%'}
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ComponentCard>
      ))}
    </div>
  );
};

export default PaletteTable;
