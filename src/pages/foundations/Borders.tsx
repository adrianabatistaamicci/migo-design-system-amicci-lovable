
import React, { useState } from 'react';
import { TailwindTabs } from "@/components/ui/tabs";
import ComponentCard from '@/components/ComponentCard';
import Header from '@/components/library-components/Header';
import CodeBlock from '@/components/CodeBlock';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Separator } from '@/components/ui/separator';

const Borders = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const borderRadii = [
    { name: 'rounded-none', value: '0px' },
    { name: 'rounded-sm', value: '0.125rem (2px)' },
    { name: 'rounded', value: '0.25rem (4px)' },
    { name: 'rounded-md', value: '0.375rem (6px)' },
    { name: 'rounded-lg', value: '0.5rem (8px)' },
    { name: 'rounded-xl', value: '0.75rem (12px)' },
    { name: 'rounded-2xl', value: '1rem (16px)' },
    { name: 'rounded-full', value: '9999px' }
  ];

  const borderWidths = [
    { name: 'border-0', value: '0px' },
    { name: 'border', value: '1px' },
    { name: 'border-2', value: '2px' },
    { name: 'border-4', value: '4px' },
    { name: 'border-8', value: '8px' }
  ];

  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Bordas" 
        description="Sistema de bordas para definir a aparência e espessura das bordas dos elementos."
        type="foundations"
      />

      <div className="space-y-8">
        <TailwindTabs 
          defaultValue="overview"
          tabs={[
            { name: 'Visão Geral', value: 'overview' },
            { name: 'Aplicação', value: 'usage' },
            { name: 'Utilitários', value: 'utilities' }
          ]}
          variant="pillsGray"
          onChange={value => setActiveTab(value)}
        />
        
        <div className="space-y-12">
          {activeTab === 'overview' && (
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-semibold text-mui-text-primary mb-4">Raio de Borda (Border Radius)</h2>
                <p className="text-mui-text-secondary mb-6">
                  O raio de borda é aplicado para suavizar as bordas dos elementos, proporcionando uma aparência mais moderna e amigável à interface.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
                  {borderRadii.map((radius) => (
                    <div key={radius.name} className="flex flex-col">
                      <div className={`${radius.name} border-2 border-primary-main bg-primary-light/20 h-24 w-full flex items-center justify-center mb-2`}>
                        <span className="font-mono text-sm text-mui-text-secondary">{radius.name}</span>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-sm font-medium">{radius.name}</span>
                        <span className="text-sm font-mono text-mui-text-secondary">{radius.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h2 className="text-2xl font-semibold text-mui-text-primary mb-4">Espessura de Borda (Border Width)</h2>
                <p className="text-mui-text-secondary mb-6">
                  A espessura da borda controla a intensidade com que os contornos se manifestam nos elementos.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
                  {borderWidths.map((width) => (
                    <div key={width.name} className="flex flex-col">
                      <div className={`rounded-lg ${width.name} border-secondary-main bg-secondary-light/20 h-24 w-full flex items-center justify-center mb-2`}>
                        <span className="font-mono text-sm text-mui-text-secondary">{width.name}</span>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-sm font-medium">{width.name}</span>
                        <span className="text-sm font-mono text-mui-text-secondary">{width.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h2 className="text-2xl font-semibold text-mui-text-primary mb-4">Estilos de Borda (Border Style)</h2>
                <p className="text-mui-text-secondary mb-6">
                  Os estilos de borda definem a aparência visual das linhas que contornam os elementos.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-6">
                  {[
                    { name: 'border-solid', desc: 'Linha sólida (padrão)' },
                    { name: 'border-dashed', desc: 'Linha tracejada' },
                    { name: 'border-dotted', desc: 'Linha pontilhada' }
                  ].map((style) => (
                    <div key={style.name} className="flex flex-col">
                      <div className={`rounded-lg border-2 ${style.name} border-tertiary-main bg-tertiary-light/20 h-24 w-full flex items-center justify-center mb-2`}>
                        <span className="font-mono text-sm text-mui-text-secondary">{style.name}</span>
                      </div>
                      <div className="mt-1">
                        <span className="text-sm font-medium">{style.name}</span>
                        <p className="text-sm text-mui-text-secondary">{style.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h2 className="text-2xl font-semibold text-mui-text-primary mb-4">Cores de Borda (Border Color)</h2>
                <p className="text-mui-text-secondary mb-6">
                  As cores das bordas devem ser escolhidas de acordo com seu significado e função.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
                  {[
                    { name: 'border-primary-main', color: 'primary-main', desc: 'Primária' },
                    { name: 'border-secondary-main', color: 'secondary-main', desc: 'Secundária' },
                    { name: 'border-tertiary-main', color: 'tertiary-main', desc: 'Terciária' },
                    { name: 'border-error-main', color: 'error-main', desc: 'Erro' },
                    { name: 'border-warning-main', color: 'warning-main', desc: 'Alerta' },
                    { name: 'border-success-main', color: 'success-main', desc: 'Sucesso' },
                    { name: 'border-info-main', color: 'info-main', desc: 'Informação' },
                    { name: 'border-gray-400', color: 'gray-400', desc: 'Cinza (neutro)' }
                  ].map((color) => (
                    <div key={color.name} className="flex flex-col">
                      <div className={`rounded-lg border-2 border-${color.color} h-24 w-full flex items-center justify-center mb-2`}>
                        <span className="font-mono text-sm text-mui-text-secondary">{color.name}</span>
                      </div>
                      <div className="mt-1">
                        <span className="text-sm font-medium">{color.desc}</span>
                        <p className="text-sm text-mui-text-secondary">{color.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'usage' && (
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-semibold text-mui-text-primary mb-4">Aplicação Específica de Border Radius</h2>
                <p className="text-mui-text-secondary mb-6">
                  O raio de borda pode ser aplicado em lados específicos para criar designs flexíveis.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
                  {[
                    { name: 'rounded-t-lg', desc: 'Borda superior', side: 't' },
                    { name: 'rounded-r-lg', desc: 'Borda direita', side: 'r' },
                    { name: 'rounded-b-lg', desc: 'Borda inferior', side: 'b' },
                    { name: 'rounded-l-lg', desc: 'Borda esquerda', side: 'l' },
                    { name: 'rounded-tl-lg', desc: 'Canto superior esquerdo', side: 'tl' },
                    { name: 'rounded-tr-lg', desc: 'Canto superior direito', side: 'tr' },
                    { name: 'rounded-bl-lg', desc: 'Canto inferior esquerdo', side: 'bl' },
                    { name: 'rounded-br-lg', desc: 'Canto inferior direito', side: 'br' }
                  ].map((radius) => (
                    <div key={radius.name} className="flex flex-col p-4 border rounded-lg">
                      <div className="flex gap-4 items-center">
                        <div className="w-5/12">
                          <span className="text-sm font-mono">{radius.name}</span>
                          <p className="text-sm text-mui-text-secondary mt-1">{radius.desc}</p>
                        </div>
                        <div className="w-7/12">
                          <div className={`bg-primary-light/20 border-2 border-primary-main ${radius.name} h-16 w-full`}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h2 className="text-2xl font-semibold text-mui-text-primary mb-4">Aplicação Específica de Border Width</h2>
                <p className="text-mui-text-secondary mb-6">
                  Controle a espessura de lados específicos da borda para criar efeitos visuais.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
                  {[
                    { name: 'border-t-2', desc: 'Borda superior' },
                    { name: 'border-r-2', desc: 'Borda direita' },
                    { name: 'border-b-2', desc: 'Borda inferior' },
                    { name: 'border-l-2', desc: 'Borda esquerda' }
                  ].map((width) => (
                    <div key={width.name} className="flex flex-col p-4 border rounded-lg">
                      <div className="flex gap-4 items-center">
                        <div className="w-5/12">
                          <span className="text-sm font-mono">{width.name}</span>
                          <p className="text-sm text-mui-text-secondary mt-1">{width.desc}</p>
                        </div>
                        <div className="w-7/12">
                          <div className={`bg-secondary-light/20 ${width.name} border-secondary-main rounded-lg h-16 w-full`}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h2 className="text-2xl font-semibold text-mui-text-primary mb-4">Exemplos de Aplicação</h2>
                <p className="text-mui-text-secondary mb-6">
                  Exemplos de como combinar diferentes propriedades de borda para criar elementos coesos.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="p-5 border-2 border-primary-main rounded-lg">
                    <h3 className="font-medium text-lg mb-2 pb-2 border-b border-primary-light">Card com borda primária</h3>
                    <p className="text-sm text-mui-text-secondary">
                      Um exemplo de card com borda completa, utilizando cores primárias.
                    </p>
                  </div>
                  
                  <div className="p-5 border-l-4 border-info-main bg-info-light/10 rounded-r-lg">
                    <h3 className="font-medium text-lg mb-2">Bloco de informação</h3>
                    <p className="text-sm text-mui-text-secondary">
                      Utilização de borda lateral para indicar um bloco de informação.
                    </p>
                  </div>
                  
                  <div className="p-5 border border-dashed border-warning-main rounded-md bg-warning-light/10">
                    <h3 className="font-medium text-lg mb-2">Alerta com borda tracejada</h3>
                    <p className="text-sm text-mui-text-secondary">
                      Borda tracejada para chamar atenção para um alerta ou aviso.
                    </p>
                  </div>
                  
                  <div className="p-5 border-t-0 border-r-2 border-b-2 border-l-2 border-success-main rounded-b-lg bg-success-light/10">
                    <h3 className="font-medium text-lg mb-2">Card sem borda superior</h3>
                    <p className="text-sm text-mui-text-secondary">
                      Exemplo de card sem borda superior, útil para conectar elementos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'utilities' && (
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-semibold text-mui-text-primary mb-4">Utilitários de Bordas no Tailwind</h2>
                <p className="text-mui-text-secondary mb-6">
                  O Tailwind CSS fornece um conjunto abrangente de classes utilitárias para aplicar bordas de maneira consistente.
                </p>
                
                <div className="mt-6 space-y-6">
                  <h3 className="text-xl font-medium mb-3">Referência de API</h3>
                  <Table className="border rounded-lg overflow-hidden">
                    <TableHeader>
                      <TableRow className="bg-mui-sidebar">
                        <TableHead className="w-1/4">Propriedade</TableHead>
                        <TableHead className="w-1/4">Prefixo de Classe</TableHead>
                        <TableHead className="w-2/4">Descrição</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-mono">border-radius</TableCell>
                        <TableCell className="font-mono">rounded-*</TableCell>
                        <TableCell>Define o raio dos cantos do elemento, criando cantos arredondados.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono">border-width</TableCell>
                        <TableCell className="font-mono">border-*</TableCell>
                        <TableCell>Define a espessura da borda ao redor do elemento.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono">border-style</TableCell>
                        <TableCell className="font-mono">border-solid, border-dashed, border-dotted</TableCell>
                        <TableCell>Define o estilo da linha da borda.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono">border-color</TableCell>
                        <TableCell className="font-mono">border-{"{color}"}</TableCell>
                        <TableCell>Define a cor da borda do elemento.</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h2 className="text-2xl font-semibold text-mui-text-primary mb-4">Boas Práticas de Uso</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="text-base font-medium text-mui-text-primary mb-2">Consistência</h4>
                    <p className="text-sm text-mui-text-secondary">
                      Mantenha a consistência no uso de bordas em toda a aplicação. Evite misturar muitos estilos diferentes sem propósito.
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="text-base font-medium text-mui-text-primary mb-2">Semântica</h4>
                    <p className="text-sm text-mui-text-secondary">
                      Use cores com significado. Por exemplo, bordas vermelhas para erros e bordas verdes para sucesso.
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="text-base font-medium text-mui-text-primary mb-2">Contraste</h4>
                    <p className="text-sm text-mui-text-secondary">
                      Assegure-se de que há contraste suficiente entre a borda e o fundo para garantir a visibilidade.
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="text-base font-medium text-mui-text-primary mb-2">Responsividade</h4>
                    <p className="text-sm text-mui-text-secondary">
                      Considere ajustar a espessura da borda em diferentes tamanhos de tela para manter a proporção visual.
                    </p>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h2 className="text-2xl font-semibold text-mui-text-primary mb-4">Exemplos de Código</h2>
                <p className="text-mui-text-secondary mb-6">
                  Exemplos práticos de implementação de bordas com Tailwind CSS.
                </p>
                
                <CodeBlock 
                  language="jsx"
                  code={`// Exemplo de componente com diferentes bordas
<div className="border-2 border-primary-main rounded-lg p-4">
  <h3 className="border-b border-primary-light pb-2">Título do Card</h3>
  <p className="mt-2">Conteúdo do card com borda primária.</p>
</div>

<div className="border border-dashed border-warning-main rounded-md p-4">
  <p>Alerta com borda tracejada.</p>
</div>

<div className="border-l-4 border-info-main pl-4">
  <p>Bloco de informação com borda à esquerda.</p>
</div>`}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Borders;
