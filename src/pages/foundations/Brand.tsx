import React, { useState } from 'react';
import { Separator } from "@/components/ui/separator";
import ComponentCard from '@/components/ComponentCard';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { TailwindTabs } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Sparkles, CircleUser, Download, Copy, FileImage } from "lucide-react";
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
import PaletteTable from '@/components/colors/PaletteTable';
import { toast } from 'sonner';

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

  const copyToClipboard = (text: string, message: string = "Copiado para a área de transferência!") => {
    navigator.clipboard.writeText(text);
    toast.success(message);
  };

  const exportToFigma = (elementId: string, filename: string) => {
    const element = document.getElementById(elementId);
    if (!element) {
      toast.error("Elemento não encontrado para exportação!");
      return;
    }

    if (element.tagName === 'svg') {
      const svgData = new XMLSerializer().serializeToString(element);
      copyToClipboard(svgData, "SVG copiado para a área de transferência! Cole diretamente no Figma.");
      return;
    }

    import('html2canvas').then(({ default: html2canvas }) => {
      html2canvas(element, {
        backgroundColor: null,
        scale: 2,
        logging: false,
      }).then(canvas => {
        try {
          const imgData = canvas.toDataURL('image/png');
          
          const link = document.createElement('a');
          link.href = imgData;
          link.download = `${filename}.png`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          
          toast.success("Imagem exportada com sucesso!");
        } catch (error) {
          console.error("Erro ao exportar:", error);
          toast.error("Falha ao exportar a imagem");
        }
      });
    }).catch(err => {
      console.error("Falha ao carregar html2canvas:", err);
      toast.error("Não foi possível carregar a ferramenta de exportação");
    });
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

  const amyPalette = [
    {
      name: "Amy - Paleta Terciária",
      description: "tertiary",
      variants: tertiaryColors.map(color => ({
        name: color.name.split('-')[1],
        colorClass: color.className,
        hexValue: color.hex,
        baseColor: "Tertiary",
        opacity: "100%",
        textColor: parseInt(color.name.split('-')[1]) > 300 ? 'white' : 'black'
      }))
    },
    {
      name: "Amy - Variáveis de Aplicação",
      description: "tertiary-vars",
      variants: tertiaryPalette.map(item => ({
        name: item.name,
        colorClass: item.color,
        hexValue: item.hex,
        baseColor: "Tertiary",
        opacity: item.hex.includes('rgba') ? item.hex.split(',')[3].replace(')', '') : "100%",
        textColor: ['light', 'hover', 'selected', 'focus'].includes(item.name) ? 'black' : 'white'
      }))
    }
  ];

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
        return <div className="space-y-10">
            <ComponentCard title="Amy" description="A inteligência artificial da Amicci que ajuda os clientes no fluxo de planejamento, projeto e performance comercial da plataforma.">
              <div className="space-y-8">
                <div className="rounded-lg overflow-hidden bg-gradient-to-r from-tertiary-900 via-tertiary-700 to-tertiary-600 text-white p-6 md:p-8" id="amy-hero">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="max-w-[160px] md:max-w-[200px] relative">
                      <img 
                        src={Amy001} 
                        alt="Amy, a IA da Amicci" 
                        className="w-full h-auto drop-shadow-lg" 
                        id="amy-portrait"
                      />
                      <Button 
                        size="sm" 
                        variant="secondary" 
                        className="absolute bottom-0 right-0 md:hidden"
                        onClick={() => exportToFigma('amy-portrait', 'amy-portrait')}
                      >
                        <Download size={14} className="mr-1" /> Exportar
                      </Button>
                    </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Sparkles size={20} className="text-tertiary-200" />
                          <h2 className="text-2xl font-bold">Amy</h2>
                        </div>
                        <p className="text-tertiary-100">
                          A Amy é a assistente de inteligência artificial da Amicci, projetada para auxiliar nossos clientes em todo o processo de planejamento, projeto e análise de performance comercial.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-3 mt-4">
                        <Button 
                          size="sm" 
                          variant="secondary"
                          onClick={() => exportToFigma('amy-hero', 'amy-hero-section')}
                        >
                          <Download size={14} className="mr-2" /> Exportar Hero para Figma
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="bg-tertiary-700/50 hover:bg-tertiary-700 text-white border-tertiary-300/30"
                          onClick={() => handleDownload(Amy001, 'amy-portrait.png')}
                        >
                          <FileImage size={14} className="mr-2" /> Baixar Imagem
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-6" id="amy-color-palette">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-medium">Paleta de cores Tertiary (Amy)</h3>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => exportToFigma('amy-color-palette', 'amy-color-palette')}
                    >
                      <Download size={14} className="mr-2" /> Exportar para Figma
                    </Button>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <PaletteTable palettes={amyPalette} />
                  </div>
                </div>
                
                <div id="amy-images">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-xl font-medium">Imagens da Amy</h4>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => exportToFigma('amy-images', 'amy-images-collection')}
                    >
                      <Download size={14} className="mr-2" /> Exportar para Figma
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center bg-white p-4 rounded-lg border shadow-sm">
                      <img src={Amy001} alt="Amy, a IA da Amicci" className="w-[150px] h-auto object-contain rounded-md mb-3" />
                      <p className="text-sm text-gray-600 mb-3">Amy 001 - Versão principal</p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" onClick={() => handleDownload('/src/pages/assets/Amy 001.png', 'amy-image-1.png')}>
                          <Download size={14} className="mr-1" /> PNG
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => copyToClipboard('Amy 001', 'Nome copiado')}>
                          <Copy size={14} className="mr-1" /> Nome
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-center bg-white p-4 rounded-lg border shadow-sm">
                      <img src={Amy002} alt="Amy, a IA da Amicci em outra pose" className="w-[150px] h-auto object-contain rounded-md mb-3" />
                      <p className="text-sm text-gray-600 mb-3">Amy 002 - Pose alternativa</p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" onClick={() => handleDownload('/src/pages/assets/Amy 002.png', 'amy-image-2.png')}>
                          <Download size={14} className="mr-1" /> PNG
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => copyToClipboard('Amy 002', 'Nome copiado')}>
                          <Copy size={14} className="mr-1" /> Nome
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-center bg-white p-4 rounded-lg border shadow-sm">
                      <img src={Amy004} alt="Amy, avatar em formato de perfil" className="w-[150px] h-auto object-contain rounded-md mb-3" />
                      <p className="text-sm text-gray-600 mb-3">Amy 004 - Avatar de perfil</p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" onClick={() => handleDownload('/src/pages/assets/Amy 004.png', 'amy-avatar.png')}>
                          <Download size={14} className="mr-1" /> PNG
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => copyToClipboard('Amy 004', 'Nome copiado')}>
                          <Copy size={14} className="mr-1" /> Nome
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 border rounded-lg space-y-4" id="amy-icons">
                  <div className="flex justify-between items-center">
                    <h5 className="font-medium">Ícones da Amy</h5>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => exportToFigma('amy-icons', 'amy-icons')}
                    >
                      <Download size={14} className="mr-2" /> Exportar para Figma
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                      <Sparkles size={48} className="text-tertiary-main mb-3" />
                      <span className="text-xs text-gray-600">Ícone padrão</span>
                      <Button size="sm" variant="ghost" className="mt-2" onClick={() => copyToClipboard('<Sparkles size={48} className="text-tertiary-main" />', 'Código copiado')}>
                        <Copy size={14} className="mr-1" /> Copiar
                      </Button>
                    </div>
                    
                    <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                      <div className="h-14 w-14 rounded-full bg-tertiary-light flex items-center justify-center mb-3">
                        <Sparkles size={24} className="text-tertiary-main" />
                      </div>
                      <span className="text-xs text-gray-600">Ícone com círculo</span>
                      <Button size="sm" variant="ghost" className="mt-2" onClick={() => copyToClipboard('<div className="h-14 w-14 rounded-full bg-tertiary-light flex items-center justify-center"><Sparkles size={24} className="text-tertiary-main" /></div>', 'Código copiado')}>
                        <Copy size={14} className="mr-1" /> Copiar
                      </Button>
                    </div>
                    
                    <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                      <img src={AmySvg} alt="Avatar da Amy" className="w-14 h-14 mb-3" />
                      <span className="text-xs text-gray-600">Amy SVG</span>
                      <Button size="sm" variant="ghost" className="mt-2" onClick={() => handleDownload('/src/pages/assets/amy.svg', 'amy.svg')}>
                        <Download size={14} className="mr-1" /> SVG
                      </Button>
                    </div>
                    
                    <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                      <Avatar className="w-14 h-14 mb-3">
                        <AvatarImage src={Amy004} alt="Amy" />
                        <AvatarFallback>AI</AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-gray-600">Avatar componente</span>
                      <Button size="sm" variant="ghost" className="mt-2" onClick={() => copyToClipboard('<Avatar><AvatarImage src="/path/to/amy.png" alt="Amy" /><AvatarFallback>AI</AvatarFallback></Avatar>', 'Código copiado')}>
                        <Copy size={14} className="mr-1" /> Copiar
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4" id="amy-components">
                  <div className="flex justify-between items-center">
                    <h5 className="font-medium">Componentes de UI da Amy</h5>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => exportToFigma('amy-components', 'amy-components')}
                    >
                      <Download size={14} className="mr-2" /> Exportar para Figma
                    </Button>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="border rounded-lg p-4">
                      <h6 className="text-sm font-medium mb-3">Container de Insight (Accordion)</h6>
                      <Accordion type="single" collapsible className="border border-tertiary-200 rounded-lg">
                        <AccordionItem value="item-1" className="border-b-0">
                          <AccordionTrigger className="px-4 py-4 hover:no-underline">
                            <div className="flex items-center gap-4">
                              <div className="flex-shrink-0">
                                <div className="w-10 h-10 rounded-full overflow-hidden">
                                  <img src={Amy004} alt="Avatar da Amy" className="w-full h-full object-cover" />
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
                      <Button size="sm" variant="ghost" className="mt-3" onClick={() => copyToClipboard('<Accordion type="single" collapsible className="border border-tertiary-200 rounded-lg">\n  <AccordionItem value="item-1" className="border-b-0">\n    <AccordionTrigger className="px-4 py-4 hover:no-underline">\n      <div className="flex items-center gap-4">\n        <div className="flex-shrink-0">\n          <div className="w-10 h-10 rounded-full overflow-hidden">\n            <img src="/path/to/amy.png" alt="Avatar da Amy" className="w-full h-full object-cover" />\n          </div>\n        </div>\n        <div className="flex items-center gap-2">\n          <span className="font-medium">Insight da Amy</span>\n          <Sparkles size={16} className="text-tertiary-main" />\n        </div>\n      </div>\n    </AccordionTrigger>\n    <AccordionContent className="px-4 pb-4">\n      <div className="ml-14">\n        <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-sm inline-block mb-3">\n          Novo insight gerado\n        </div>\n        <p className="text-gray-700">Conteúdo do insight...</p>\n      </div>\n    </AccordionContent>\n  </AccordionItem>\n</Accordion>', 'Código copiado')}>
                        <Copy size={14} className="mr-1" /> Copiar Código
                      </Button>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h6 className="text-sm font-medium mb-3">Pill com ícone da Amy</h6>
                      <div className="flex flex-wrap gap-3">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-tertiary-100 text-tertiary-800 rounded-full text-sm">
                          <Sparkles size={14} className="text-tertiary-main" />
                          <span>Gerado pela Amy</span>
                        </div>
                        
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-tertiary-700 text-white rounded-full text-sm">
                          <Sparkles size={14} className="text-tertiary-100" />
                          <span>Amy AI</span>
                        </div>
                        
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 border border-tertiary-200 text-tertiary-800 rounded-full text-sm">
                          <img src={AmySvg} alt="Amy icon" className="w-4 h-4" />
                          <span>Amy</span>
                        </div>
                      </div>
                      <Button size="sm" variant="ghost" className="mt-3" onClick={() => copyToClipboard('<div className="inline-flex items-center gap-1.5 px-3 py-1 bg-tertiary-100 text-tertiary-800 rounded-full text-sm">\n  <Sparkles size={14} className="text-tertiary-main" />\n  <span>Gerado pela Amy</span>\n</div>', 'Código copiado')}>
                        <Copy size={14} className="mr-1" /> Copiar Código
                      </Button>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h6 className="text-sm font-medium mb-3">Card de mensagem da Amy</h6>
                      <div className="p-4 border rounded-lg bg-white">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0">
                            <Avatar>
                              <AvatarImage src={Amy004} alt="Amy" />
                              <AvatarFallback>AI</AvatarFallback>
                            </Avatar>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium">Amy</span>
                              <div className="px-2 py-0.5 bg-tertiary-100 text-tertiary-800 rounded text-xs">Assistente IA</div>
                            </div>
                            <p className="text-gray-700">Aqui está uma sugestão baseada na análise dos seus dados. Considere ajustar sua estratégia para maximizar os resultados.</p>
                          </div>
                        </div>
                      </div>
                      <Button size="sm" variant="ghost" className="mt-3" onClick={() => copyToClipboard('<div className="p-4 border rounded-lg bg-white">\n  <div className="flex items-start gap-3">\n    <div className="flex-shrink-0">\n      <Avatar>\n        <AvatarImage src="/path/to/amy.png" alt="Amy" />\n        <AvatarFallback>AI</AvatarFallback>\n      </Avatar>\n    </div>\n    <div className="flex-1">\n      <div className="flex items-center gap-2 mb-1">\n        <span className="font-medium">Amy</span>\n        <div className="px-2 py-0.5 bg-tertiary-100 text-tertiary-800 rounded text-xs">Assistente IA</div>\n      </div>\n      <p className="text-gray-700">Mensagem da Amy...</p>\n    </div>\n  </div>\n</div>', 'Código copiado')}>
                        <Copy size={14} className="mr-1" /> Copiar Código
                      </Button>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h6 className="text-sm font-medium mb-3">Botão de ação da Amy</h6>
                      <div className="flex flex-wrap gap-3">
                        <Button variant="default" className="bg-tertiary-main hover:bg-tertiary-600">
                          <Sparkles className="mr-2 h-4 w-4" /> Gerar com Amy
                        </Button>
                        
                        <Button variant="outline" className="border-tertiary-200 text-tertiary-800 hover:bg-tertiary-50">
                          <Sparkles className="mr-2 h-4 w-4 text-tertiary-main" /> Perguntar para Amy
                        </Button>
                        
                        <IconButton variant="outline-default" size="sm" tooltip="Gerar com IA">
                          <Sparkles className="h-4 w-4" />
                        </IconButton>
                      </div>
                      <Button size="sm" variant="ghost" className="mt-3" onClick={() => copyToClipboard('<Button variant="default" className="bg-tertiary-main hover:bg-tertiary-600">\n  <Sparkles className="mr-2 h-4 w-4" /> Gerar com Amy\n</Button>', 'Código copiado')}>
                        <Copy size={14} className="mr-1" /> Copiar Código
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-5 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <Download size={16} /> Guia de Exportação para Figma
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-tertiary-main font-bold">1.</span>
                      <p>Use os botões de <strong>Exportar para Figma</strong> para baixar imagens PNG em alta resolução.</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-tertiary-main font-bold">2.</span>
                      <p>Para SVGs e código, use os botões <strong>Copiar Código</strong> e cole diretamente no Figma.</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-tertiary-main font-bold">3.</span>
                      <p>Para as cores, copie os valores hexadecimais e use-os nas propriedades de preenchimento no Figma.</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-tertiary-main font-bold">4.</span>
                      <p>Importe as imagens baixadas como recursos no Figma via "Import" ou arraste-as para o canvas.</p>
                    </li>
                  </ul>
                </div>
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
