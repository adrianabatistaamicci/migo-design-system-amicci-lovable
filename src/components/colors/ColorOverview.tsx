
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import ComponentCard from '@/components/ComponentCard';
import { baseColorsData } from '@/data/colorsData';

const ColorOverview = () => {
  // Display the first color from baseColorsData (Amicci)
  const firstColor = baseColorsData[0];
  
  return (
    <div className="space-y-8">
      <p className="text-gray-700 mb-6">
        Nosso sistema de cores é projetado para ser flexível e consistente em todas as interfaces. 
        Baseamos nossa paleta em tons que representam nossa marca e valores.
      </p>
      
      <ComponentCard
        title="Visão Geral de Cores"
        description="Nosso sistema de cores é baseado em paletas principais com variações de tons para diferentes usos de interface."
        className="mb-8"
      >
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium mb-3">{firstColor.name}</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/2">Variação</TableHead>
                  <TableHead className="w-1/2">Amostra</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {firstColor.weights.slice(0, 5).map((weight) => (
                  <TableRow key={weight.weight}>
                    <TableCell className="font-mono">{`amicci-${weight.weight}`}</TableCell>
                    <TableCell>
                      <div 
                        className={`h-12 w-full rounded-md ${weight.colorClass}`} 
                        title={weight.hexValue}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <div className="pt-4">
            <p className="text-sm text-gray-600">
              Esta é uma visualização parcial da nossa paleta principal. Veja a seção "Cores Base" 
              para uma visão completa de todas as cores e variações disponíveis.
            </p>
          </div>
        </div>
      </ComponentCard>
      
      <div className="space-y-6">
        <h2 className="text-2xl font-medium">Uso de Cores</h2>
        <p>
          Nossas cores são agrupadas em categorias que facilitam a implementação consistente em toda a interface:
        </p>
        
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Cores Base:</strong> Nossa paleta fundamental, incluindo cores primárias e neutras.</li>
          <li><strong>Paletas Semânticas:</strong> Cores com significados específicos, como sucesso, erro, alerta, etc.</li>
          <li><strong>Acessibilidade:</strong> Diretrizes para garantir contraste adequado e legibilidade.</li>
        </ul>
      </div>
    </div>
  );
};

export default ColorOverview;
