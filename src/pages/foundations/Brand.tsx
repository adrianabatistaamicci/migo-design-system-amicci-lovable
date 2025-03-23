import React, { useState } from 'react';
import { Separator } from "@/components/ui/separator";
import ComponentCard from '@/components/ComponentCard';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import Header from '@/components/library-components/Header';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import AmicciLogo from '@/pages/assets/Amicci-Logo_TurquesaClaro+Escuro.svg';
import AmicciLogoBrancoTurquesaEscuro from '@/pages/assets/Amicci-Branco+TurquesaEscuro.svg';
import AmicciLogoTurquesaBranco from '@/pages/assets/Amicci-Logo_TurquesaClaro+Branco.svg';
import AmicciLogoBranco from '@/pages/assets/Amicci-Logo_Branco.svg';
import AmicciSimbolo from '@/pages/assets/Amicci-Simbolo_Turquesa_Escuro.svg';
import AmicciTagDesignSystem from '@/pages/assets/amicci-logo-tag-design-system.svg';
import AmicciTagBlog from '@/pages/assets/amicci-logo-tag-blog.svg';
import AmicciTagEngenharia from '@/pages/assets/amicci-logo-tag-engenharia.svg';
import AmicciTagUpdates from '@/pages/assets/amicci-logo-tag-updates.svg';

const Brand = () => {
  const handleDownload = (url: string, filename: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Tertiary (Amy) color palette data
  const tertiaryColors = [
    { name: 'tertiary-50', hex: '#FDF5FA', className: 'bg-tertiary-light' },
    { name: 'tertiary-100', hex: '#F9E5F4', className: 'bg-tertiary-light' },
    { name: 'tertiary-200', hex: '#F2CAEB', className: 'bg-tertiary-light' },
    { name: 'tertiary-300', hex: '#E7A4DD', className: 'bg-tertiary-light' },
    { name: 'tertiary-400', hex: '#C963BA', className: 'bg-tertiary-light' },
    { name: 'tertiary-500', hex: '#9B247F', className: 'bg-tertiary-main' },
    { name: 'tertiary-600', hex: '#841E6C', className: 'bg-tertiary-dark' },
    { name: 'tertiary-700', hex: '#6D1959', className: 'bg-tertiary-dark' },
    { name: 'tertiary-800', hex: '#571447', className: 'bg-tertiary-dark' },
    { name: 'tertiary-900', hex: '#49123C', className: 'bg-tertiary-dark' },
    { name: 'tertiary-950', hex: '#3E0F32', className: 'bg-tertiary-dark' },
  ];

  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Brand" 
        description="Nossa identidade visual é o reflexo dos nossos valores e da nossa missão, transmitindo confiança e inovação." 
        type="foundations" 
      />

      <Tabs defaultValue="logo" className="mt-8">
        <TabsList className="mb-8">
          <TabsTrigger value="logo">Logo Amicci</TabsTrigger>
          <TabsTrigger value="variants">Variações</TabsTrigger>
          <TabsTrigger value="amy">Amy AI</TabsTrigger>
        </TabsList>
        
        <TabsContent value="logo" className="space-y-10">
          <ComponentCard title="Logo Amicci" description="Nossa marca representa nossa identidade e valores fundamentais." className="mb-6">
            <div className="space-y-10">
              <div className="space-y-6">
                <h3 className="text-xl font-medium">Versão Principal</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="border rounded-lg p-8 flex items-center justify-center bg-white">
                    <img src={AmicciLogo} alt="Amicci logo com diferentes versões" className="max-w-[250px] h-auto" />
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-medium">Logo principal</h4>
                    <p className="text-gray-600">O logo da Amicci está disponível em diferentes variações, combinando as cores turquesa e turquesa escuro em diferentes fundos.</p>
                    <div className="flex gap-2">
                      <Button variant="outline" onClick={() => handleDownload(AmicciLogo, 'amicci-logo-principal.svg')}>Download SVG</Button>
                      <Button variant="outline" onClick={() => handleDownload('/src/pages/assets/Amicci-Logo_TurquesaClaro+Escuro.png', 'amicci-logo-principal.png')}>Download PNG</Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-medium">Versão para fundo escuro</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="border rounded-lg p-8 flex flex-col items-center justify-center gap-8 bg-[#016071] py-[44px]">
                    <img src={AmicciLogoTurquesaBranco} alt="Amicci logo para fundo Amicci-500" className="max-w-[250px] h-auto" />
                    <img src={AmicciLogoBranco} alt="Amicci logo para fundo Amicci-500" className="max-w-[250px] h-auto" />
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-medium">Logo para fundo escuro</h4>
                    <p className="text-gray-600">Versão do logo Amicci adaptada para aplicações onde o fundo é escuro, mantendo a legibilidade e o impacto visual.</p>
                    <div className="flex gap-2">
                      <Button variant="outline" onClick={() => handleDownload(AmicciLogoTurquesaBranco, 'amicci-logo-fundo-escuro-turquesa-branco.svg')}>Download SVG</Button>
                      <Button variant="outline" onClick={() => handleDownload('/src/pages/assets/Amicci-Logo_TurquesaClaro+Branco.png', 'amicci-logo-fundo-escuro-turquesa-branco.png')}>Download PNG</Button>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" onClick={() => handleDownload(AmicciLogoBranco, 'amicci-logo-branco.svg')}>Download SVG</Button>
                      <Button variant="outline" onClick={() => handleDownload('/src/pages/assets/Amicci-Logo_Branco.png', 'amicci-logo-branco.png')}>Download PNG</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ComponentCard>
        </TabsContent>
        
        <TabsContent value="variants" className="space-y-10">
          <ComponentCard title="Variações do Logo" description="Diferentes aplicações da nossa marca para contextos específicos.">
            <div className="space-y-10">
              <div className="space-y-6">
                <h3 className="text-xl font-medium">Variações</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="border rounded-lg p-8 flex items-center justify-center bg-white">
                    <div className="flex flex-col items-start gap-4">
                      <img src={AmicciTagDesignSystem} alt="Amicci logo com tag design system" className="max-w-[300px] h-auto" />
                      <img src={AmicciTagBlog} alt="Amicci logo com tag blog" className="max-w-[300px] h-auto" />
                      <img src={AmicciTagEngenharia} alt="Amicci logo com tag engenharia" className="max-w-[300px] h-auto" />
                      <img src={AmicciTagUpdates} alt="Amicci logo com tag updates" className="max-w-[300px] h-auto" />
                    </div>
                  </div>
                  <div className="space-y-4 flex flex-col justify-center">
                    <h4 className="font-medium">Logo com tag</h4>
                    <p className="text-gray-600">Estas versões são utilizadas para identificar visualmente diferentes áreas e iniciativas da Amicci, mantendo a coesão e o reconhecimento da marca enquanto diferenciam cada contexto específico.</p>
                    <p className="text-gray-600">Aplicadas em blogs, documentação técnica, design systems e comunicados, estas variações permitem uma identificação imediata da área responsável pelo conteúdo.</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                  <div className="border rounded-lg p-8 flex items-center justify-center bg-white">
                    <img src={AmicciSimbolo} alt="Símbolo Amicci" className="max-w-[250px] h-[117px]" />
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-medium">Símbolo</h4>
                    <p className="text-gray-600">O símbolo da Amicci pode ser usado sozinho em contextos onde a marca já é conhecida ou em espaços muito restritos, como ícones de favicons.</p>
                    <div className="flex gap-2">
                      <Button variant="outline" onClick={() => handleDownload(AmicciSimbolo, 'amicci-simbolo.svg')}>Download SVG</Button>
                      <Button variant="outline" onClick={() => handleDownload('/src/pages/assets/Amicci-Simbolo_Turquesa_Escuro.png', 'amicci-simbolo.png')}>Download PNG</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ComponentCard>
        </TabsContent>
        
        <TabsContent value="amy" className="space-y-10">
          <ComponentCard title="Amy" description="A inteligência artificial da Amicci que ajuda os clientes no fluxo de planejamento, projeto e performance comercial da plataforma.">
            <div className="space-y-10">
              <div className="space-y-6">
                <h3 className="text-xl font-medium">A IA da Amicci</h3>
                
                {/* Tertiary Color Palette Section - Simplified Layout */}
                <div className="space-y-8 mt-6">
                  <h4 className="text-xl font-medium">Paleta de cores Tertiary (Amy)</h4>
                  <p className="text-gray-600">A Amy é representada pela paleta de cores tertiary, que consiste em tons de magenta/roxo que transmitem inovação e inteligência.</p>
                  
                  {/* Main Tertiary Color */}
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-3">Cor Principal</h5>
                    <div className="flex items-center gap-4">
                      <div className="h-20 w-20 rounded-md bg-tertiary-main flex items-center justify-center">
                        <span className="text-white font-medium">500</span>
                      </div>
                      <div>
                        <p className="font-medium">tertiary-500</p>
                        <p className="text-sm text-gray-500">#9B247F</p>
                        <p className="text-sm text-gray-500">var(--tertiary-main)</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* All Tertiary Colors */}
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-3">Escala Completa</h5>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                      {tertiaryColors.map((color) => (
                        <div key={color.name} className="flex flex-col items-center">
                          <div 
                            className={`h-16 w-16 rounded-md flex items-center justify-center ${color.name.includes('50') || color.name.includes('100') || color.name.includes('200') ? 'text-tertiary-800' : 'text-white'}`}
                            style={{ backgroundColor: color.hex }}
                          >
                            {color.name.split('-')[1]}
                          </div>
                          <span className="text-xs mt-1">{color.name}</span>
                          <span className="text-xs text-gray-500">{color.hex}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Usage Examples - Simplified */}
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-3">Uso em Componentes</h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <Button className="bg-tertiary-main hover:bg-tertiary-dark">Botão Tertiary</Button>
                        <p className="text-xs text-gray-500 mt-2">bg-tertiary-main</p>
                      </div>
                      <div>
                        <div className="p-3 bg-tertiary-light text-tertiary-main rounded-md border border-tertiary-main">
                          Box com fundo light
                        </div>
                        <p className="text-xs text-gray-500 mt-2">bg-tertiary-light / text-tertiary-main</p>
                      </div>
                      <div>
                        <div className="p-3 bg-tertiary-main text-white rounded-md">
                          Box com fundo main
                        </div>
                        <p className="text-xs text-gray-500 mt-2">bg-tertiary-main / text-white</p>
                      </div>
                    </div>
                  </div>

                  {/* Images - Simplified Layout */}
                  <h4 className="text-xl font-medium">Imagens da Amy</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center gap-2">
                      <img 
                        src="/lovable-uploads/79898233-8ca1-4e72-ac85-afcf73053fff.png" 
                        alt="Amy, a IA da Amicci" 
                        className="w-[150px] h-auto object-contain rounded-md" 
                      />
                      <Button variant="outline" onClick={() => handleDownload('/lovable-uploads/79898233-8ca1-4e72-ac85-afcf73053fff.png', 'amy-image-1.png')}>
                        Download PNG
                      </Button>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <img 
                        src="/lovable-uploads/097cfa6e-4055-443e-934b-320041b8deac.png" 
                        alt="Amy, a IA da Amicci em outra pose" 
                        className="w-[150px] h-auto object-contain rounded-md" 
                      />
                      <Button variant="outline" onClick={() => handleDownload('/lovable-uploads/097cfa6e-4055-443e-934b-320041b8deac.png', 'amy-image-2.png')}>
                        Download PNG
                      </Button>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <img 
                        src="/lovable-uploads/e778bf14-8d9d-424d-ab01-0ff69e892a9b.png" 
                        alt="Amy, avatar em formato de perfil" 
                        className="w-[150px] h-auto object-contain rounded-md" 
                      />
                      <Button variant="outline" onClick={() => handleDownload('/lovable-uploads/e778bf14-8d9d-424d-ab01-0ff69e892a9b.png', 'amy-avatar.png')}>
                        Download PNG
                      </Button>
                    </div>
                  </div>

                  {/* Colors and Icon - Single Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-4">Paleta de cores</h5>
                      <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="h-16 w-16 rounded-md bg-tertiary-main"></div>
                          <span className="text-xs mt-1">tertiary-500</span>
                          <span className="text-xs text-gray-500">#9B247F</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="h-16 w-16 rounded-md bg-tertiary-400"></div>
                          <span className="text-xs mt-1">tertiary-400</span>
                          <span className="text-xs text-gray-500">#C963BA</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="h-16 w-16 rounded-md bg-tertiary-300"></div>
                          <span className="text-xs mt-1">tertiary-300</span>
                          <span className="text-xs text-gray-500">#E7A4DD</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="h-16 w-16 rounded-md bg-tertiary-100"></div>
                          <span className="text-xs mt-1">tertiary-100</span>
                          <span className="text-xs text-gray-500">#F9E5F4</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-4">Ícone</h5>
                      <div className="flex gap-8 items-center">
                        <div className="flex flex-col items-center">
                          <Sparkles size={48} className="text-tertiary-main" />
                          <span className="text-xs mt-2">Ícone padrão</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="h-14 w-14 rounded-full bg-tertiary-main flex items-center justify-center">
                            <Sparkles size={24} className="text-white" />
                          </div>
                          <span className="text-xs mt-2">Ícone em círculo</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Accordion Insights Container */}
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-4">Container de Insights</h5>
                    <Accordion type="single" collapsible className="border border-tertiary-200 rounded-lg">
                      <AccordionItem value="item-1" className="border-b-0">
                        <AccordionTrigger className="px-4 py-4 hover:no-underline">
                          <div className="flex items-center gap-4">
                            <div className="flex-shrink-0">
                              <div className="w-10 h-10 rounded-full overflow-hidden">
                                <img 
                                  src="/lovable-uploads/e778bf14-8d9d-424d-ab01-0ff69e892a9b.png" 
                                  alt="Avatar da Amy" 
                                  className="w-full h-full object-cover" 
                                />
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium">Insight da Amy</span>
                              <Sparkles size={16} className="text-tertiary-main" />
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4">
                          <div className="ml-14">
                            <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-sm inline-block mb-3">
                              Novo insight gerado
                            </div>
                            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    
                    <div className="mt-8">
                      <img 
                        src="/lovable-uploads/1b008d0e-08f9-46a3-98cb-21860633fef4.png" 
                        alt="Exemplo completo do container de insights da Amy" 
                        className="w-full h-auto object-contain border rounded-lg" 
                      />
                    </div>
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

export default Brand;
