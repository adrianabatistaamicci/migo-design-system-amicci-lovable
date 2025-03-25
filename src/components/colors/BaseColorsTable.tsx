
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { BaseColor } from '@/data/colorsData';
import ComponentCard from '@/components/ComponentCard';

interface BaseColorsTableProps {
  baseColors: BaseColor[];
}

const BaseColorsTable: React.FC<BaseColorsTableProps> = ({ baseColors }) => {
  return (
    <div className="space-y-8">
      {baseColors.map((colorGroup) => (
        <ComponentCard 
          key={colorGroup.name}
          title={colorGroup.name}
          description="Variações de cores base do sistema"
          className="overflow-hidden"
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/3">Variação</TableHead>
                <TableHead className="w-2/3">Amostra</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {colorGroup.weights.map((color) => (
                <TableRow key={color.weight}>
                  <TableCell className="font-mono text-sm">{`${colorGroup.name.toLowerCase()}-${color.weight}`}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div 
                        className={`${color.colorClass} h-10 w-20 rounded-md border`}
                        title={color.hexValue}
                      ></div>
                      <span className="text-sm text-gray-600">{color.hexValue}</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ComponentCard>
      ))}
    </div>
  );
};

export default BaseColorsTable;
