
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { PaletteItem } from '@/data/colorsData';
import ComponentCard from '@/components/ComponentCard';

interface PaletteTableProps {
  palettes: PaletteItem[];
}

const PaletteTable: React.FC<PaletteTableProps> = ({ palettes }) => {
  return (
    <div className="space-y-8">
      {palettes.map((palette) => (
        <ComponentCard 
          key={palette.name}
          title={`${palette.name} (${palette.description})`}
          description="Variantes semânticas da paleta"
          className="overflow-hidden"
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/3">Variante</TableHead>
                <TableHead className="w-1/3">Valor</TableHead>
                <TableHead className="w-1/3">Base</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {palette.variants.map((variant) => (
                <TableRow key={variant.name}>
                  <TableCell className="font-mono text-sm">{variant.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div 
                        className={`${variant.colorClass} h-8 w-16 rounded-md border`} 
                        title={variant.hexValue}
                      ></div>
                      <span className="text-sm text-gray-600">
                        {variant.hexValue}
                        {variant.opacity && ` (${variant.opacity})`}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-gray-600">{variant.baseColor}</TableCell>
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
