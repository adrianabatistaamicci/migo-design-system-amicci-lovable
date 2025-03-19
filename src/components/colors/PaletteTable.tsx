
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import ColorSwatch from './ColorSwatch';

// Define interfaces for our data
interface PaletteVariant {
  name: string;
  colorClass: string;
  baseColor: string;
  textColor?: string;
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
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Paleta</TableHead>
          <TableHead>Variante</TableHead>
          <TableHead>Amostra</TableHead>
          <TableHead>Classe Tailwind</TableHead>
          <TableHead>Cor Base</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {palettes.map((palette) => (
          palette.variants.map((variant, variantIndex) => (
            <TableRow key={`${palette.name}-${variant.name}`}>
              {variantIndex === 0 && (
                <TableCell rowSpan={palette.variants.length} className="font-medium">
                  {palette.name}<br/>({palette.description})
                </TableCell>
              )}
              <TableCell>{variant.name}</TableCell>
              <TableCell>
                <ColorSwatch color={variant.colorClass} className={variant.textColor} />
              </TableCell>
              <TableCell><code>{variant.colorClass.startsWith('bg-') ? variant.colorClass : `bg-${variant.colorClass}`}</code></TableCell>
              <TableCell>{variant.baseColor}</TableCell>
            </TableRow>
          ))
        ))}
      </TableBody>
    </Table>
  );
};

export default PaletteTable;
