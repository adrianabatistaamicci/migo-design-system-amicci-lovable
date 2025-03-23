import React from 'react';
import HeaderLibrary from '@/components/library-components/HeaderLibrary';
import ComponentCard from '@/components/ComponentCard';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';

const Brand = () => {
  return (
    <div className="w-full animate-fade-in">
      <HeaderLibrary 
        title="Brand"
        description="Diretrizes de marca, incluindo logotipo, cores e tipografia."
        type="foundations"
      />
      
      <ComponentCard title="Logotipo" description="O logotipo da Amicci em suas variações.">
        <div>
          Logotipos aqui
        </div>
      </ComponentCard>
      
      <ComponentCard title="Cores" description="Paleta de cores da Amicci.">
        <div>
          Cores aqui
        </div>
      </ComponentCard>
      
      <ComponentCard title="Tipografia" description="Fontes utilizadas na Amicci.">
        <div>
          Tipografia aqui
        </div>
      </ComponentCard>
      
      <div className="mt-12">
        <h2 className="text-2xl font-medium text-mui-text-primary mb-6">
          API Reference
        </h2>
        
        <div className="border border-mui-border rounded-lg overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-mui-sidebar">
                <TableHead className="w-1/4">Prop</TableHead>
                <TableHead className="w-1/4">Type</TableHead>
                <TableHead className="w-1/4">Default</TableHead>
                <TableHead className="w-1/4">Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono text-mui-text-primary">Nenhuma</TableCell>
                <TableCell className="font-mono text-mui-text-secondary">Nenhuma</TableCell>
                <TableCell className="font-mono text-mui-text-secondary">Nenhuma</TableCell>
                <TableCell className="text-mui-text-secondary">Nenhuma</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Brand;
