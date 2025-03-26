
import React, { useState, useEffect } from 'react';
import Header from '@/components/library-components/Header';
import DocumentationSkeleton from '@/components/library-components/DocumentationSkeleton';
import { tokenToPixels } from '@/utils/spacingUtils';
import { Card } from '@/components/ui/card';
import CodeBlock from '@/components/CodeBlock';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const UXGuidelines = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    return <DocumentationSkeleton />;
  }
  
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Diretrizes de UX" 
        description="Boas práticas para experiência do usuário e design de interfaces" 
        type="foundations" 
        hideChip={true} 
      />
      
      <div className="space-y-8 mt-8">
        <Card className="p-6">
          <h2 className="text-2xl font-medium mb-4">Princípios de Design</h2>
          <p className="mb-4 text-gray-700">
            Nossos princípios de design guiam a criação de experiências consistentes e amigáveis.
            Eles servem como base para decisões de design e ajudam a alinhar nossas interfaces com os objetivos do negócio.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="border rounded-lg p-5">
              <h3 className="text-lg font-medium mb-2 text-primary-main">Clareza</h3>
              <p className="text-sm text-gray-700">
                Elimine ambiguidade. O design deve comunicar com clareza e facilitar a compreensão dos usuários.
              </p>
            </div>
            <div className="border rounded-lg p-5">
              <h3 className="text-lg font-medium mb-2 text-primary-main">Consistência</h3>
              <p className="text-sm text-gray-700">
                Padrões familiares e comportamentos previsíveis criam confiança e reduzem a carga cognitiva.
              </p>
            </div>
            <div className="border rounded-lg p-5">
              <h3 className="text-lg font-medium mb-2 text-primary-main">Eficiência</h3>
              <p className="text-sm text-gray-700">
                Respeite o tempo do usuário com fluxos otimizados e feedback apropriado.
              </p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <h2 className="text-2xl font-medium mb-4">Uso de Espaçamento</h2>
          <p className="mb-4 text-gray-700">
            O espaçamento consistente é fundamental para criar interfaces harmoniosas e legiveis. 
            Siga estas diretrizes para aplicar espaçamento de forma eficaz:
          </p>
          
          <div className="space-y-6 mt-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Hierarquia com Espaçamento</h3>
              <p className="text-sm text-gray-700 mb-4">
                Use espaçamentos maiores para separar seções distintas e espaçamentos menores para elementos relacionados.
                Isso cria hierarquia visual e ajuda usuários a perceberem agrupamentos lógicos.
              </p>
              
              <div className="border rounded-lg p-4 bg-gray-50">
                <div className="bg-white rounded border p-5 mb-8">
                  <h4 className="font-medium mb-2">Seção Principal</h4>
                  <div className="space-y-4">
                    <div className="bg-primary-light/20 p-3 rounded">Grupo de elementos relacionados</div>
                    <div className="bg-primary-light/20 p-3 rounded">Grupo de elementos relacionados</div>
                  </div>
                </div>
                
                <div className="bg-white rounded border p-5">
                  <h4 className="font-medium mb-2">Outra Seção</h4>
                  <div className="space-y-4">
                    <div className="bg-primary-light/20 p-3 rounded">Conteúdo da seção</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Espaçamento Recomendado</h3>
              <p className="text-sm text-gray-700 mb-4">
                Use estas recomendações como ponto de partida para diferentes elementos da interface:
              </p>
              
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Contexto</TableHead>
                    <TableHead>Espaçamento Recomendado</TableHead>
                    <TableHead>Valor (px)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Entre seções principais</TableCell>
                    <TableCell>space-16</TableCell>
                    <TableCell>{tokenToPixels('space-16')}px</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Entre componentes relacionados</TableCell>
                    <TableCell>space-8</TableCell>
                    <TableCell>{tokenToPixels('space-8')}px</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Entre elementos de um grupo</TableCell>
                    <TableCell>space-4</TableCell>
                    <TableCell>{tokenToPixels('space-4')}px</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Padding interno de cards</TableCell>
                    <TableCell>space-6</TableCell>
                    <TableCell>{tokenToPixels('space-6')}px</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Margin de botões em grupo</TableCell>
                    <TableCell>space-2</TableCell>
                    <TableCell>{tokenToPixels('space-2')}px</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Aplicação em Código</h3>
              <p className="text-sm text-gray-700 mb-4">
                Use as classes de utilitários do Tailwind para aplicar espaçamento de maneira consistente:
              </p>
              
              <CodeBlock 
                language="jsx"
                code={`<div className="space-y-16">
  {/* Seção com espaço vertical de 64px entre elas */}
  <section className="p-6">
    <h2 className="text-2xl font-medium mb-8">Título da Seção</h2>
    
    <div className="space-y-4">
      {/* Elementos com espaço de 16px entre eles */}
      <div className="p-4 border rounded">Elemento 1</div>
      <div className="p-4 border rounded">Elemento 2</div>
    </div>
  </section>
  
  <section className="p-6">
    <h2 className="text-2xl font-medium mb-8">Outra Seção</h2>
    
    <div className="space-y-4">
      {/* Mais conteúdo aqui */}
    </div>
  </section>
</div>`}
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default UXGuidelines;
