
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ComponentCard from '@/components/ComponentCard';
import CodeBlock from '@/components/CodeBlock';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';
import { Copy, Check } from 'lucide-react';

const Typography = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value);
    setCopied(value);
    setTimeout(() => setCopied(null), 2000);
  };

  const typographyStyles = [
    {
      name: 'h1',
      description: 'Heading 1',
      className: 'text-8xl font-light leading-[112.03px] font-roboto text-text-primary',
      sample: 'Heading 1',
      styles: [
        { name: 'Color', value: 'text-text-primary' },
        { name: 'Size', value: 'text-8xl' },
        { name: 'Weight', value: 'font-light' },
        { name: 'Font', value: 'font-["Roboto"]' },
        { name: 'Line Height', value: 'leading-[112.03px]' },
      ]
    },
    {
      name: 'h2',
      description: 'Heading 2',
      className: 'text-6xl font-light leading-[72px] font-roboto text-text-primary',
      sample: 'Heading 2',
      styles: [
        { name: 'Color', value: 'text-text-primary' },
        { name: 'Size', value: 'text-6xl' },
        { name: 'Weight', value: 'font-light' },
        { name: 'Font', value: 'font-["Roboto"]' },
        { name: 'Line Height', value: 'leading-[72px]' },
      ]
    },
    {
      name: 'h3',
      description: 'Heading 3',
      className: 'text-5xl font-normal leading-[56.02px] font-roboto text-text-primary',
      sample: 'Heading 3',
      styles: [
        { name: 'Color', value: 'text-text-primary' },
        { name: 'Size', value: 'text-5xl' },
        { name: 'Weight', value: 'font-normal' },
        { name: 'Font', value: 'font-["Roboto"]' },
        { name: 'Line Height', value: 'leading-[56.02px]' },
      ]
    },
    {
      name: 'h4',
      description: 'Heading 4',
      className: 'text-4xl font-normal leading-10 tracking-tight font-roboto text-text-primary',
      sample: 'Heading 4',
      styles: [
        { name: 'Color', value: 'text-text-primary' },
        { name: 'Size', value: 'text-4xl' },
        { name: 'Weight', value: 'font-normal' },
        { name: 'Font', value: 'font-["Roboto"]' },
        { name: 'Line Height', value: 'leading-10' },
        { name: 'Tracking', value: 'tracking-tight' },
      ]
    },
    {
      name: 'h5',
      description: 'Heading 5',
      className: 'text-2xl font-normal leading-loose font-roboto text-text-primary',
      sample: 'Heading 5',
      styles: [
        { name: 'Color', value: 'text-text-primary' },
        { name: 'Size', value: 'text-2xl' },
        { name: 'Weight', value: 'font-normal' },
        { name: 'Font', value: 'font-["Roboto"]' },
        { name: 'Line Height', value: 'leading-loose' },
      ]
    },
    {
      name: 'h6',
      description: 'Heading 6',
      className: 'text-xl font-medium leading-loose tracking-tight font-roboto text-text-primary',
      sample: 'Heading 6',
      styles: [
        { name: 'Color', value: 'text-text-primary' },
        { name: 'Size', value: 'text-xl' },
        { name: 'Weight', value: 'font-medium' },
        { name: 'Font', value: 'font-["Roboto"]' },
        { name: 'Line Height', value: 'leading-loose' },
        { name: 'Tracking', value: 'tracking-tight' },
      ]
    },
    {
      name: 'subtitle1',
      description: 'Subtitle 1',
      className: 'text-base font-medium leading-7 tracking-tight font-roboto text-text-primary',
      sample: 'Subtitle 1',
      styles: [
        { name: 'Color', value: 'text-text-primary' },
        { name: 'Size', value: 'text-base' },
        { name: 'Weight', value: 'font-medium' },
        { name: 'Font', value: 'font-["Roboto"]' },
        { name: 'Line Height', value: 'leading-7' },
        { name: 'Tracking', value: 'tracking-tight' },
      ]
    },
    {
      name: 'subtitle2',
      description: 'Subtitle 2',
      className: 'text-sm font-medium leading-snug tracking-tight font-roboto text-text-primary',
      sample: 'Subtitle 2',
      styles: [
        { name: 'Color', value: 'text-text-primary' },
        { name: 'Size', value: 'text-sm' },
        { name: 'Weight', value: 'font-medium' },
        { name: 'Font', value: 'font-["Roboto"]' },
        { name: 'Line Height', value: 'leading-snug' },
        { name: 'Tracking', value: 'tracking-tight' },
      ]
    },
    {
      name: 'body1',
      description: 'Body 1',
      className: 'text-base font-normal leading-normal tracking-tight font-roboto text-text-primary',
      sample: 'Body 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      styles: [
        { name: 'Color', value: 'text-text-primary' },
        { name: 'Size', value: 'text-base' },
        { name: 'Weight', value: 'font-normal' },
        { name: 'Font', value: 'font-["Roboto"]' },
        { name: 'Line Height', value: 'leading-normal' },
        { name: 'Tracking', value: 'tracking-tight' },
      ]
    },
    {
      name: 'body2',
      description: 'Body 2',
      className: 'text-sm font-normal leading-tight tracking-tight font-roboto text-text-primary',
      sample: 'Body 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      styles: [
        { name: 'Color', value: 'text-text-primary' },
        { name: 'Size', value: 'text-sm' },
        { name: 'Weight', value: 'font-normal' },
        { name: 'Font', value: 'font-["Roboto"]' },
        { name: 'Line Height', value: 'leading-tight' },
        { name: 'Tracking', value: 'tracking-tight' },
      ]
    },
    {
      name: 'caption',
      description: 'Caption',
      className: 'text-xs font-normal leading-tight tracking-wide font-roboto text-text-primary',
      sample: 'Caption text',
      styles: [
        { name: 'Color', value: 'text-text-primary' },
        { name: 'Size', value: 'text-xs' },
        { name: 'Weight', value: 'font-normal' },
        { name: 'Font', value: 'font-["Roboto"]' },
        { name: 'Line Height', value: 'leading-tight' },
        { name: 'Tracking', value: 'tracking-wide' },
      ]
    },
    {
      name: 'overline',
      description: 'Overline',
      className: 'text-xs font-normal leading-loose tracking-wide uppercase font-roboto text-text-primary',
      sample: 'OVERLINE TEXT',
      styles: [
        { name: 'Color', value: 'text-text-primary' },
        { name: 'Size', value: 'text-xs' },
        { name: 'Weight', value: 'font-normal' },
        { name: 'Font', value: 'font-["Roboto"]' },
        { name: 'Line Height', value: 'leading-loose' },
        { name: 'Tracking', value: 'tracking-wide' },
        { name: 'Case', value: 'uppercase' },
      ]
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Sistema de Tipografia</h1>
        <p className="text-mui-text-secondary text-lg">
          Estilos de texto e tokens de tipografia utilizados na aplicação.
        </p>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Visão geral</TabsTrigger>
          <TabsTrigger value="styles">Estilos</TabsTrigger>
          <TabsTrigger value="usage">Uso</TabsTrigger>
          <TabsTrigger value="accessibility">Acessibilidade</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <ComponentCard title="Sistema de Tipografia" description="Nosso sistema de tipografia é baseado na fonte Roboto com variações cuidadosamente definidas.">
            <p className="text-mui-text-secondary mb-6">
              A tipografia é organizada em hierarquias claras para criar uma experiência de leitura consistente e agradável.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">1. Headings (h1-h6)</h3>
                <p className="text-mui-text-secondary mb-3">
                  Títulos e cabeçalhos para organizar o conteúdo:
                </p>
                <div className="space-y-3">
                  <div><span className="text-8xl font-light leading-none">H1</span></div>
                  <div><span className="text-6xl font-light leading-none">H2</span></div>
                  <div><span className="text-5xl font-normal leading-none">H3</span></div>
                  <div><span className="text-4xl font-normal leading-none">H4</span></div>
                  <div><span className="text-2xl font-normal leading-none">H5</span></div>
                  <div><span className="text-xl font-medium leading-none">H6</span></div>
                </div>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">2. Texto de corpo e auxiliares</h3>
                <p className="text-mui-text-secondary mb-3">
                  Estilos para parágrafos, legendas e decorações:
                </p>
                <div className="space-y-4">
                  <div>
                    <div className="text-base font-medium leading-none mb-1">Subtitle 1</div>
                    <div className="text-sm font-medium leading-none mb-2">Subtitle 2</div>
                  </div>
                  <div>
                    <div className="text-base font-normal leading-tight mb-1">Body 1</div>
                    <div className="text-sm font-normal leading-tight mb-3">Body 2</div>
                  </div>
                  <div>
                    <div className="text-xs font-normal leading-tight mb-1">Caption</div>
                    <div className="text-xs font-normal uppercase leading-tight tracking-wide">OVERLINE</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg p-4 mb-6">
              <h3 className="text-lg font-medium mb-2">Propriedades de texto</h3>
              <p className="text-mui-text-secondary mb-4">
                Cada estilo de texto é definido por um conjunto de propriedades:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="border rounded p-3">
                  <div className="text-sm font-medium mb-1">Tamanho (Size)</div>
                  <p className="text-mui-text-secondary text-sm">Varia de <code>text-xs</code> a <code>text-8xl</code></p>
                </div>
                
                <div className="border rounded p-3">
                  <div className="text-sm font-medium mb-1">Peso (Weight)</div>
                  <p className="text-mui-text-secondary text-sm">Incluindo <code>font-light</code>, <code>font-normal</code> e <code>font-medium</code></p>
                </div>
                
                <div className="border rounded p-3">
                  <div className="text-sm font-medium mb-1">Altura da linha</div>
                  <p className="text-mui-text-secondary text-sm">De <code>leading-tight</code> a <code>leading-loose</code> e valores personalizados</p>
                </div>
                
                <div className="border rounded p-3">
                  <div className="text-sm font-medium mb-1">Tracking</div>
                  <p className="text-mui-text-secondary text-sm">Incluindo <code>tracking-tight</code> e <code>tracking-wide</code></p>
                </div>
              </div>
            </div>
            
            <div className="font-mono text-sm p-4 bg-mui-sidebar rounded-lg">
              <p className="text-mui-text-secondary">Fonte primária: <strong>Roboto</strong> (300, 400, 500, 700)</p>
            </div>
          </ComponentCard>
          
          <Separator />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ComponentCard title="Como Usar">
              <p className="text-mui-text-secondary mb-3">
                Utilize as classes de tipografia em seus componentes:
              </p>
              <CodeBlock 
                title="Exemplo de uso" 
                language="jsx" 
                code={`<h1 className="text-8xl font-light leading-[112.03px] font-roboto">
  Título Principal
</h1>

<p className="text-base font-normal leading-normal tracking-tight">
  Este é um parágrafo com estilo body1, usado para textos
  longos e informativos no corpo da página.
</p>

<span className="text-xs font-normal leading-loose tracking-wide uppercase">
  TEXTO DE MARCAÇÃO SUPERIOR
</span>`}
              />
            </ComponentCard>
            
            <ComponentCard title="Consistência">
              <p className="text-mui-text-secondary mb-3">
                Benefícios de usar o sistema de tipografia:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-2 text-mui-text-secondary">
                <li>Hierarquia visual clara e coerente</li>
                <li>Legibilidade otimizada para diferentes tamanhos de tela</li>
                <li>Facilidade de manutenção com tokens padronizados</li>
                <li>Acessibilidade melhorada com relações de tamanho apropriadas</li>
                <li>Experiência de usuário consistente em toda a aplicação</li>
              </ul>
            </ComponentCard>
          </div>
        </TabsContent>
        
        <TabsContent value="styles" className="space-y-6">
          <ComponentCard title="Estilos de Tipografia">
            <div className="space-y-10 py-4">
              {typographyStyles.map((style) => (
                <div key={style.name} className="border-b pb-8 last:border-b-0">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-medium">{style.name}</h3>
                        <Badge variant="outline">{style.description}</Badge>
                      </div>
                      <p className="text-mui-text-secondary mt-1">
                        {style.description === "Heading 1" && "Título principal para páginas e seções de destaque"}
                        {style.description === "Heading 2" && "Segundo nível de títulos para seções importantes"}
                        {style.description === "Heading 3" && "Terceiro nível para subseções e conteúdo estruturado"}
                        {style.description === "Heading 4" && "Quarto nível para grupos de conteúdo"}
                        {style.description === "Heading 5" && "Quinto nível para títulos menores"}
                        {style.description === "Heading 6" && "Sexto nível para marcadores pequenos"}
                        {style.description === "Subtitle 1" && "Subtítulo principal para complementar headings"}
                        {style.description === "Subtitle 2" && "Subtítulo secundário para informações de suporte"}
                        {style.description === "Body 1" && "Texto principal para parágrafos e conteúdo"}
                        {style.description === "Body 2" && "Texto secundário para informações complementares"}
                        {style.description === "Caption" && "Texto de legenda para imagens e elementos auxiliares"}
                        {style.description === "Overline" && "Texto decorativo em maiúsculas usado acima de títulos"}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="relative flex items-center max-w-fit">
                        <code className="bg-mui-sidebar px-3 py-2 rounded text-sm pr-8">{style.className}</code>
                        <button 
                          onClick={() => copyToClipboard(style.className)}
                          className="absolute right-2 text-mui-text-secondary hover:text-mui-text-primary"
                        >
                          {copied === style.className ? <Check size={16} /> : <Copy size={16} />}
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6 p-4 border rounded-lg">
                    <div className={style.className}>
                      {style.sample}
                    </div>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <Table compact>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Propriedade</TableHead>
                          <TableHead>Valor</TableHead>
                          <TableHead>Descrição</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {style.styles.map((prop) => (
                          <TableRow key={`${style.name}-${prop.name}`}>
                            <TableCell className="font-medium">{prop.name}</TableCell>
                            <TableCell>
                              <code className="bg-mui-sidebar px-2 py-1 rounded text-xs">{prop.value}</code>
                            </TableCell>
                            <TableCell className="text-mui-text-secondary">
                              {prop.name === 'Color' && 'Cor do texto (utilizando tokens semânticos)'}
                              {prop.name === 'Size' && 'Tamanho do texto (escala Tailwind)'}
                              {prop.name === 'Weight' && 'Peso/espessura da fonte'}
                              {prop.name === 'Font' && 'Família tipográfica'}
                              {prop.name === 'Line Height' && 'Altura da linha (entrelinha)'}
                              {prop.name === 'Tracking' && 'Espaçamento entre caracteres'}
                              {prop.name === 'Case' && 'Transformação de maiúsculas/minúsculas'}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              ))}
            </div>
          </ComponentCard>
        </TabsContent>
        
        <TabsContent value="usage" className="space-y-6">
          <ComponentCard title="Guia de Uso da Tipografia">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-3">Hierarquia de Headings</h3>
                <p className="text-mui-text-secondary mb-3">
                  Uma estrutura clara de títulos ajuda os usuários a escanear e compreender o conteúdo:
                </p>
                <div className="border rounded-lg p-4 mb-4">
                  <div className="text-8xl font-light leading-[112.03px] mb-2">H1: Título Principal</div>
                  <div className="pl-4 border-l-2 border-mui-border">
                    <div className="text-6xl font-light leading-[72px] mb-2">H2: Seção Principal</div>
                    <div className="pl-4 border-l-2 border-mui-border">
                      <div className="text-5xl font-normal leading-[56.02px] mb-2">H3: Subseção</div>
                      <div className="pl-4 border-l-2 border-mui-border">
                        <div className="text-4xl font-normal leading-10 mb-2">H4: Grupo de Conteúdo</div>
                        <div className="pl-4 border-l-2 border-mui-border">
                          <div className="text-2xl font-normal leading-loose mb-2">H5: Título de Bloco</div>
                          <div className="pl-4 border-l-2 border-mui-border">
                            <div className="text-xl font-medium leading-loose">H6: Título Menor</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-mui-text-secondary mb-2">
                  <strong>Dica:</strong> Mantenha a hierarquia correta, não pule níveis de cabeçalho.
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3">Combinações Recomendadas</h3>
                <p className="text-mui-text-secondary mb-3">
                  Exemplos de combinações eficazes de estilos de texto:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-5">
                    <div className="text-xs font-normal uppercase tracking-wide text-primary-main mb-1">CATEGORIA</div>
                    <div className="text-4xl font-normal leading-10 mb-2">Título da Seção</div>
                    <div className="text-base font-medium leading-7 text-mui-text-secondary mb-2">Um subtítulo que explica a seção em mais detalhes.</div>
                    <div className="text-base font-normal leading-normal mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
                    </div>
                    <div className="text-xs font-normal leading-tight text-mui-text-secondary">Última atualização: 10 de junho, 2023</div>
                  </div>
                  
                  <div className="border rounded-lg p-5">
                    <div className="text-5xl font-normal leading-[56.02px] mb-2">Cards de Produto</div>
                    <div className="text-base font-normal leading-normal mb-4">
                      Um exemplo ideal para cards, listagens e interfaces compactas.
                    </div>
                    <div className="border rounded p-4 mb-2">
                      <div className="text-xl font-medium leading-loose mb-1">Nome do Produto</div>
                      <div className="text-sm font-normal leading-tight mb-2">
                        Descrição curta do produto mostrando suas principais características e benefícios.
                      </div>
                      <div className="text-base font-medium leading-7 text-primary-main">R$ 299,90</div>
                      <div className="text-xs font-normal leading-tight text-mui-text-secondary mt-2">4.5★ (123 avaliações)</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3">Responsividade</h3>
                <p className="text-mui-text-secondary mb-3">
                  Ajuste os estilos de texto para diferentes tamanhos de tela:
                </p>
                <CodeBlock 
                  title="Exemplo de tipografia responsiva" 
                  language="jsx" 
                  code={`<h1 className="text-4xl md:text-6xl lg:text-8xl font-light leading-tight md:leading-[112.03px]">
  Título Responsivo
</h1>

<p className="text-sm md:text-base font-normal leading-normal">
  Este texto se adapta ao tamanho da tela, ficando menor
  em dispositivos móveis e maior em telas mais amplas.
</p>`}
                />
              </div>
            </div>
          </ComponentCard>
        </TabsContent>
        
        <TabsContent value="accessibility" className="space-y-6">
          <ComponentCard title="Acessibilidade de Texto">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-3">Diretrizes de Acessibilidade</h3>
                <p className="text-mui-text-secondary mb-4">
                  Nosso sistema tipográfico foi projetado considerando as melhores práticas de acessibilidade:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-4">
                    <h4 className="text-lg font-medium mb-2">Tamanho e Legibilidade</h4>
                    <ul className="list-disc list-inside space-y-2 text-mui-text-secondary">
                      <li>Texto de corpo com tamanho mínimo de 16px (text-base)</li>
                      <li>Evite texto muito pequeno para informações importantes</li>
                      <li>Alturas de linha adequadas para melhorar a leitura</li>
                      <li>Espaçamento entre letras otimizado para cada tamanho</li>
                    </ul>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h4 className="text-lg font-medium mb-2">Contraste e Cor</h4>
                    <ul className="list-disc list-inside space-y-2 text-mui-text-secondary">
                      <li>Use tokens de cor com contraste adequado (WCAG AA)</li>
                      <li>Text-primary para conteúdo principal (contraste 7:1)</li>
                      <li>Text-secondary para conteúdo de suporte (contraste 4.5:1)</li>
                      <li>Evite depender apenas da cor para transmitir informação</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3">Hierarquia Semântica</h3>
                <p className="text-mui-text-secondary mb-4">
                  Use elementos HTML semânticos com os estilos apropriados:
                </p>
                <div className="border rounded-lg p-4 mb-4">
                  <CodeBlock 
                    title="HTML Semântico" 
                    language="jsx" 
                    code={`// Bom - Usa elementos semânticos
<h1 className="text-8xl font-light">Título Principal</h1>
<h2 className="text-6xl font-light">Subtítulo</h2>
<p className="text-base font-normal">Parágrafo de texto.</p>

// Evitar - Apenas estilização sem semântica
<div className="text-8xl font-light">Título Principal</div>
<div className="text-6xl font-light">Subtítulo</div>
<div className="text-base font-normal">Parágrafo de texto.</div>`}
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3">Exemplos de Casos Especiais</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-4">
                    <h4 className="text-lg font-medium mb-2">Links e Texto Interativo</h4>
                    <div className="p-3 bg-gray-50 rounded mb-3">
                      <div><a href="#" className="text-primary-main hover:underline">Link padrão com sublinhado no hover</a></div>
                      <div className="mt-2"><a href="#" className="text-primary-main underline">Link sempre sublinhado</a></div>
                      <div className="mt-2"><a href="#" className="text-primary-main font-medium hover:underline">Link com peso médio</a></div>
                    </div>
                    <p className="text-mui-text-secondary text-sm">
                      Links devem ser claramente distinguíveis do texto normal, usando cor, sublinhado ou outros indicadores visuais.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h4 className="text-lg font-medium mb-2">Texto de Formulário</h4>
                    <div className="p-3 bg-gray-50 rounded mb-3">
                      <div className="mb-2">
                        <label className="text-sm font-medium block mb-1">Rótulo do Campo</label>
                        <input type="text" className="border rounded px-3 py-2 w-full" placeholder="Placeholder" />
                      </div>
                      <div className="text-xs text-error-main mt-1">Mensagem de erro</div>
                      <div className="text-xs text-mui-text-secondary mt-2">Texto de ajuda e descrição</div>
                    </div>
                    <p className="text-mui-text-secondary text-sm">
                      Rótulos e mensagens de formulário devem ser claros, concisos e com contraste adequado.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ComponentCard>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Typography;
