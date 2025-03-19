
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import ColorSwatch from './ColorSwatch';

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
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Cor Base</TableHead>
          <TableHead>Amostra</TableHead>
          <TableHead>Peso</TableHead>
          <TableHead>Classe Tailwind</TableHead>
          <TableHead>Valor Hex</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {baseColors.map((baseColor) => (
          baseColor.weights.map((weight, weightIndex) => (
            <TableRow key={`${baseColor.name}-${weight.weight}`}>
              {weightIndex === 0 && (
                <TableCell rowSpan={baseColor.weights.length} className="font-medium">
                  {baseColor.name}
                </TableCell>
              )}
              <TableCell>
                <ColorSwatch color={weight.colorClass} />
              </TableCell>
              <TableCell>{weight.weight}</TableCell>
              <TableCell><code>{weight.colorClass}</code></TableCell>
              <TableCell>{weight.hexValue}</TableCell>
            </TableRow>
          ))
        ))}
      </TableBody>
    </Table>
  );
};

export default BaseColorsTable;
