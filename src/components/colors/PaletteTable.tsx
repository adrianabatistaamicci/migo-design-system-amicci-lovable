
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import ColorSwatch from './ColorSwatch';
import { ClipboardCopy } from 'lucide-react';

// Define interfaces for our data
interface PaletteVariant {
  name: string;
  colorClass: string;
  baseColor: string;
  textColor?: string;
  cssToken?: string;
  opacity?: string;
  usage?: string;
  hexValue?: string;
}

interface ColorPalette {
  name: string;
  description: string;
  variants: PaletteVariant[];
}

interface PaletteTableProps {
  palettes: ColorPalette[];
}

const PaletteTable = ({ palettes }: PaletteTableProps) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  const renderCopyButton = (text: string) => (
    <button 
      onClick={() => copyToClipboard(text)}
      className="ml-2 text-gray-400 hover:text-gray-600 transition-colors"
    >
      <ClipboardCopy size={14} />
    </button>
  );

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
                <TableHead>Hexadecimal</TableHead>
                <TableHead>Opacidade</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {palette.variants.map((variant) => (
                <TableRow key={`${palette.name}-${variant.name}`}>
                  <TableCell className="font-mono">{`${palette.name.toLowerCase()}-${variant.name}`}</TableCell>
                  <TableCell>
                    <ColorSwatch 
                      color={variant.colorClass}
                    />
                  </TableCell>
                  <TableCell className="font-mono">
                    <code>{`--${palette.name.toLowerCase()}-${variant.name}`}</code>
                    {renderCopyButton(`--${palette.name.toLowerCase()}-${variant.name}`)}
                  </TableCell>
                  <TableCell>{variant.baseColor}</TableCell>
                  <TableCell className="font-mono">
                    {variant.hexValue || "#F0F0F0"}
                    {renderCopyButton(variant.hexValue || "#F0F0F0")}
                  </TableCell>
                  <TableCell>{variant.opacity || '100%'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ))}
    </div>
  );
};

export default PaletteTable;
