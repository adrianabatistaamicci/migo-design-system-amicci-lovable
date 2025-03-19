
import React, { useState } from 'react';
import ComponentCard from '@/components/ComponentCard';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const AccessibilityTab = () => {
  const [showWCAG, setShowWCAG] = useState(false);

  return (
    <ComponentCard title="Acessibilidade de Cores" description="Garantindo que nosso sistema de cores seja acessível a todos.">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-2">Contraste</h3>
          <p className="text-mui-text-secondary">
            Todas as combinações de cores de texto e fundo atendem aos requisitos de contraste WCAG 2.1 AA:
          </p>
          <ul className="list-disc list-inside mt-2 text-mui-text-secondary">
            <li>Texto normal: Contraste mínimo de 4.5:1</li>
            <li>Texto grande (18pt ou 14pt bold): Contraste mínimo de 3:1</li>
            <li>Componentes de interface e gráficos: Contraste mínimo de 3:1</li>
          </ul>
        </div>
        
        <div className="mt-4">
          <Button 
            variant="outline" 
            onClick={() => setShowWCAG(!showWCAG)}
            className="text-sm flex gap-2 items-center"
          >
            {showWCAG ? <EyeOff size={16} /> : <Eye size={16} />}
            {showWCAG ? 'Ocultar dados WCAG' : 'Mostrar dados WCAG'}
          </Button>
        </div>
        
        {showWCAG && (
          <div className="mt-6 border rounded-lg p-4">
            <h4 className="font-medium mb-3">Tabela de Contraste WCAG AA</h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Combinação</TableHead>
                  <TableHead>Proporção</TableHead>
                  <TableHead>Texto Normal</TableHead>
                  <TableHead>Texto Grande</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded mr-2 bg-primary-main"></div>
                      <span>Primary sobre Branco</span>
                    </div>
                  </TableCell>
                  <TableCell>4.6:1</TableCell>
                  <TableCell>Passa ✓</TableCell>
                  <TableCell>Passa ✓</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded mr-2 bg-white flex items-center justify-center">
                        <div className="w-4 h-4 bg-primary-main"></div>
                      </div>
                      <span>Branco sobre Primary</span>
                    </div>
                  </TableCell>
                  <TableCell>4.6:1</TableCell>
                  <TableCell>Passa ✓</TableCell>
                  <TableCell>Passa ✓</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded mr-2 bg-secondary-main"></div>
                      <span>Secondary sobre Branco</span>
                    </div>
                  </TableCell>
                  <TableCell>13.2:1</TableCell>
                  <TableCell>Passa ✓</TableCell>
                  <TableCell>Passa ✓</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded mr-2 bg-error-main"></div>
                      <span>Error sobre Branco</span>
                    </div>
                  </TableCell>
                  <TableCell>4.8:1</TableCell>
                  <TableCell>Passa ✓</TableCell>
                  <TableCell>Passa ✓</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded mr-2 bg-warning-main"></div>
                      <span>Warning sobre Preto</span>
                    </div>
                  </TableCell>
                  <TableCell>13.5:1</TableCell>
                  <TableCell>Passa ✓</TableCell>
                  <TableCell>Passa ✓</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        )}
        
        <div className="mt-4">
          <h3 className="text-lg font-medium mb-2">Não Dependa Apenas da Cor</h3>
          <p className="text-mui-text-secondary">
            Para garantir que as informações sejam acessíveis a pessoas com deficiência visual ou daltonismo, não usamos apenas cor para transmitir informações importantes:
          </p>
          <ul className="list-disc list-inside mt-2 text-mui-text-secondary">
            <li>Combinamos cores com ícones, textos e padrões</li>
            <li>Oferecemos alternativas textuais para informações baseadas em cores</li>
            <li>Mantemos contraste suficiente mesmo em visualizações monocromáticas</li>
          </ul>
        </div>
        
        <div className="mt-4">
          <h3 className="text-lg font-medium mb-2">Teste de Daltonismo</h3>
          <p className="text-mui-text-secondary">
            Nosso sistema de cores foi testado para os seguintes tipos de daltonismo:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
            <div className="border rounded-lg p-3">
              <h4 className="font-medium text-sm mb-2">Deuteranopia</h4>
              <p className="text-xs text-mui-text-secondary">Deficiência de percepção do verde</p>
            </div>
            <div className="border rounded-lg p-3">
              <h4 className="font-medium text-sm mb-2">Protanopia</h4>
              <p className="text-xs text-mui-text-secondary">Deficiência de percepção do vermelho</p>
            </div>
            <div className="border rounded-lg p-3">
              <h4 className="font-medium text-sm mb-2">Tritanopia</h4>
              <p className="text-xs text-mui-text-secondary">Deficiência de percepção do azul</p>
            </div>
            <div className="border rounded-lg p-3">
              <h4 className="font-medium text-sm mb-2">Acromatopsia</h4>
              <p className="text-xs text-mui-text-secondary">Ausência completa de percepção de cores</p>
            </div>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
};

export default AccessibilityTab;
