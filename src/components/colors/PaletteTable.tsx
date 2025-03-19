
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import ColorSwatch from './ColorSwatch';

// Define interfaces for our data
interface PaletteVariant {
  name: string;
  colorClass: string;
  baseColor: string;
  textColor?: string;
  cssToken?: string;
  opacity?: string;
  usage?: string;
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
                <TableHead>Uso recomendado</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {palette.variants.map((variant) => (
                <TableRow key={`${palette.name}-${variant.name}`}>
                  <TableCell className="font-mono">{`${palette.name.toLowerCase()}-${variant.name}`}</TableCell>
                  <TableCell>
                    <ColorSwatch 
                      color={variant.colorClass} 
                      textOverlay={variant.name === 'main' || variant.name === 'dark' || variant.name === 'light' ? 'Aa' : undefined}
                    />
                  </TableCell>
                  <TableCell><code>{`--${palette.name.toLowerCase()}-${variant.name}`}</code></TableCell>
                  <TableCell>{variant.baseColor}</TableCell>
                  <TableCell>{variant.opacity || '100%'}</TableCell>
                  <TableCell>{variant.usage || ''}</TableCell>
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
