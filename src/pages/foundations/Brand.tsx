import React, { useState } from 'react';
import { Separator } from "@/components/ui/separator";
import ComponentCard from '@/components/ComponentCard';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { TailwindTabs } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Sparkles, CircleUser, ChevronDown, RefreshCw, ThumbsUp, ThumbsDown } from "lucide-react";
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
import Amy001 from '@/pages/assets/Amy 001.png';
import Amy002 from '@/pages/assets/Amy 002.png';
import Amy004 from '@/pages/assets/Amy 004.png';
import AmySvg from '@/pages/assets/amy.svg';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IconButton } from "@/components/ui/icon-button";
import { Chip } from "@/components/ui/chip";

const Brand = () => {
  const [activeTab, setActiveTab] = useState('logo');
  
  const handleDownload = (url: string, filename: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const tertiaryColors = [{
    name: 'tertiary-50',
    hex: '#FDF5FA',
    className: 'bg-tertiary-light'
  }, {
    name: 'tertiary-100',
    hex: '#F9E5F4',
    className: 'bg-tertiary-light'
  }, {
    name: 'tertiary-200',
    hex: '#F2CAEB',
    className: 'bg-tertiary-light'
  }, {
    name: 'tertiary-300',
    hex: '#E7A4DD',
    className: 'bg-tertiary-light'
  }, {
    name: 'tertiary-400',
    hex: '#C963BA',
    className: 'bg-tertiary-light'
  }, {
    name: 'tertiary-500',
    hex: '#9B247F',
    className: 'bg-tertiary-main'
  }, {
    name: 'tertiary-600',
    hex: '#841E6C',
    className: 'bg-tertiary-dark'
  }, {
    name: 'tertiary-700',
    hex: '#6D1959',
    className: 'bg-tertiary-dark'
  }, {
    name: 'tertiary-800',
    hex: '#571447',
    className: 'bg-tertiary-dark'
  }, {
    name: 'tertiary-900',
    hex: '#49123C',
    className: 'bg-tertiary-dark'
  }, {
    name: 'tertiary-950',
    hex: '#3E0F32',
    className: 'bg-tertiary-dark'
  }];

  const tertiaryPalette = [{
    name: 'main',
    color: 'bg-tertiary-main',
    hex: '#9B247F',
    tailwindClass: 'bg-tertiary-main'
  }, {
    name: 'light',
    color: 'bg-tertiary-light',
    hex: '#F9E5F4',
    tailwindClass: 'bg-tertiary-light'
  }, {
    name: 'dark',
    color: 'bg-tertiary-dark',
    hex: '#6D1959',
    tailwindClass: 'bg-tertiary-dark'
  }, {
    name: 'hover',
    color: 'bg-tertiary-hover',
    hex: 'rgba(155, 36, 127, 0.04)',
    tailwindClass: 'bg-tertiary-hover'
  }, {
    name: 'selected',
    color: 'bg-tertiary-selected',
    hex: 'rgba(155, 36, 127, 0.08)',
    tailwindClass: 'bg-tertiary-selected'
  }, {
    name: 'focus',
    color: 'bg-tertiary-focus',
    hex: 'rgba(155, 36, 127, 0.12)',
    tailwindClass: 'bg-tertiary-focus'
  }, {
    name: 'focusVisible',
    color: 'bg-tertiary-focusVisible',
    hex: 'rgba(155, 36, 127, 0.30)',
    tailwindClass: 'bg-tertiary-focusVisible'
  }, {
    name: 'outlinedBorder',
    color: 'bg-tertiary-outlinedBorder',
    hex: 'rgba(155, 36, 127, 0.50)',
    tailwindClass: 'bg-tertiary-outlinedBorder'
  }];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'logo':
        return <div className="space-y-10">
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
          </div>;
      case 'variants':
        return <div className="space-y-10">
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
          </div>;
      case 'amy':
        return <div className="space-y-8">
            <ComponentCard title="Amy" description="A inteligência artificial da Amicci que ajuda os clientes no fluxo de planejamento, projeto e performance comercial da plataforma." className="mb-6">
              <div className="space-y-6">
                <Card className="p-6 shadow-none border">
                  <h3 className="text-xl font-medium mb-3">Paleta terciária</h3>
                  <p className="text-gray-600 mb-6">
                    A Amy é representada pela paleta de cores tertiary, que consiste em tons de magenta/roxo que transmitem inovação e inteligência.
                  </p>
                  
                  <div className="grid grid-cols-8 gap-3">
                    {tertiaryPalette.map(item => <div key={item.name} className="flex flex-col items-center">
                        <div className={`h-16 w-full rounded-md ${item.name === 'light' ? 'text-tertiary-800' : 'text-white'}`} style={{
                      backgroundColor: item.hex
                    }}></div>
                        <span className="text-xs mt-2 text-center">tertiary-{item.name}</span>
                        <span className="text-xs text-gray-500 text-center">{item.hex}</span>
                      </div>)}
                  </div>
                </Card>

                <Card className="p-6 shadow-none border">
                  <h3 className="text-xl font-medium mb-3">Magenta color base</h3>
                  <div className="grid grid-cols-11 gap-3">
                    {tertiaryColors.map(color => <div key={color.name} className="flex flex-col items-center">
                        <div className={`h-16 w-full rounded-md ${color.name.includes('50') || color.name.includes('100') || color.name.includes('200') ? 'text-tertiary-800' : 'text-white'}`} style={{
                      backgroundColor: color.hex
                    }}></div>
                        <span className="text-xs mt-1">magenta-{color.name.split('-')[1]}</span>
                        <span className="text-xs text-gray-500">{color.hex}</span>
                      </div>)}
                  </div>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
                  <Card className="p-6 md:col-span-7 shadow-none border">
                    <h3 className="text-xl font-medium mb-4">Imagens da Amy</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="flex flex-col items-center gap-4">
                        <img src={Amy001} alt="Amy, a IA da Amicci" className="w-full h-auto object-contain rounded-md" />
                        <Button variant="outline" onClick={() => handleDownload('/src/pages/assets/Amy 001.png', 'amy-image-1.png')}>
                          Download PNG
                        </Button>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <img src={Amy002} alt="Amy, a IA da Amicci em outra pose" className="w-full h-auto object-contain rounded-md" />
                        <Button variant="outline" onClick={() => handleDownload('/src/pages/assets/Amy 002.png', 'amy-image-2.png')}>
                          Download PNG
                        </Button>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <img src={Amy004} alt="Amy, avatar em formato de perfil" className="w-full h-auto object-contain rounded-md" />
                        <Button variant="outline" onClick={() => handleDownload('/src/pages/assets/Amy 004.png', 'amy-avatar.png')}>
                          Download PNG
                        </Button>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 md:col-span-3 shadow-none border">
                    <h3 className="text-xl font-medium mb-4">Ícones</h3>
                    <div className="space-y-8">
                      <div className="flex flex-col items-center">
                        <Sparkles size={40} className="text-tertiary-main mb-2" />
                        <span className="text-sm">Ícone Amy</span>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <div className="h-14 w-14 rounded-full bg-tertiary-light flex items-center justify-center">
                          <Sparkles size={24} className="text-tertiary-main" />
                        </div>
                        <span className="text-sm mt-2">Ícone com círculo</span>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <Avatar className="w-14 h-14">
                          <AvatarImage src={AmySvg} alt="Avatar da Amy" />
                          <AvatarFallback>AM</AvatarFallback>
                        </Avatar>
                        <span className="text-sm mt-2">Avatar Amy</span>
                      </div>
                    </div>
                  </Card>
                </div>

                <Card className="p-6 shadow-none border">
                  <h3 className="text-xl font-medium mb-4">Box de insights</h3>
                  
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="insight-1" className="border-0">
                      <div className="bg-magenta-50">
                        <AccordionTrigger className="px-6 py-4 hover:no-underline">
                          <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-2">
                              <img src={AmySvg} alt="Avatar da Amy" className="w-9 h-9 rounded-full" />
                              <div className="inline-flex flex-col justify-start items-start">
                                <div className="text-text-primary text-sm font-medium font-['Roboto'] leading-snug tracking-tight">Insight da Amy</div>
                              </div>
                              <Sparkles size={20} className="text-tertiary-main" />
                            </div>
                            <div className="hidden data-[state=closed]:flex data-[state=open]:hidden items-center gap-2">
                              <p className="text-gray-700 text-sm line-clamp-1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...
                              </p>
                              <Chip size="sm">Novo insight gerado</Chip>
                            </div>
                            <Button variant="outline-secondary" size="sm" className="ml-auto mr-4 data-[state=closed]:hidden data-[state=open]:flex" startIcon={<RefreshCw size={16} />}>
                              Gerar novo insight
                            </Button>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <div className="flex items-center gap-3 mb-3">
                            <p className="text-gray-500 text-sm">
                              Insight gerado em 13/03/2024 às 13:45
                            </p>
                          </div>
                          <div>
                            <h4 className="font-medium text-base mb-2">Recomendações</h4>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
                              <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                              <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</li>
                            </ul>
                          </div>
                          
                          <Separator className="my-4" />
                          
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <p>Os insights da Amy são gerados por inteligência artificial e podem conter erros.</p>
                            <div className="flex items-center gap-2">
                              <span>Este insight foi útil?</span>
                              <div className="flex gap-2">
                                <Button variant="text-secondary" size="sm" className="flex items-center gap-1" startIcon={<ThumbsUp size={16} />}>
                                  Sim
                                </Button>
                                <Button variant="text-secondary" size="sm" className="flex items-center gap-1" startIcon={<ThumbsDown size={16} />}>
                                  Não
                                </Button>
                              </div>
                            </div>
                          </div>
                        </AccordionContent>
                      </div>
                    </AccordionItem>
                  </Accordion>
                </Card>
              </div>
            </ComponentCard>
          </div>;
      default:
        return null;
    }
  };

  return <div className="w-full animate-fade-in">
      <Header title="Brand" description="Nossa identidade visual é o reflexo dos nossos valores e da nossa missão, transmitindo confiança e inovação." type="foundations" />

      <div className="mt-8">
        <TailwindTabs tabs={[{
        name: 'Logo Amicci',
        value: 'logo'
      }, {
        name: 'Variações',
        value: 'variants'
      }, {
        name: 'Amy AI',
        value: 'amy'
      }]} defaultValue="logo" variant="pillsGray" onChange={value => setActiveTab(value)} />
        
        <div className="mt-6">
          {renderTabContent()}
        </div>
      </div>
    </div>;
};

export default Brand;
