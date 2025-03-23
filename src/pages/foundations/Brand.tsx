import React, { useState } from 'react';
import { Separator } from "@/components/ui/separator";
import ComponentCard from '@/components/ComponentCard';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { TailwindTabs } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Sparkles, CircleUser, Wand2, Brain, Stars, Zap, Bot } from "lucide-react";
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

  const tertiaryColors = [
    {
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
    }
  ];

  const tertiaryPalette = [
    {
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
            <div className="bg-gradient-to-b from-tertiary-50 to-tertiary-100 pt-10 pb-16 px-8 rounded-xl shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-tertiary-200 rounded-full opacity-20 -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-tertiary-300 rounded-full opacity-20 -ml-16 -mb-16"></div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center mb-10 relative z-10">
                <div className="w-40 h-40 rounded-full bg-white shadow-lg p-2 flex-shrink-0">
                  <img src={Amy004} alt="Amy" className="w-full h-full object-cover rounded-full" />
                </div>
                <div className="text-center md:text-left">
                  <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
                    <h1 className="text-3xl font-bold text-tertiary-800">Amy</h1>
                    <Sparkles className="h-7 w-7 text-tertiary-500" />
                  </div>
                  <p className="text-tertiary-700 text-lg max-w-xl">
                    A inteligência artificial da Amicci que potencializa o planejamento, projeto e performance comercial da plataforma.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-md flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-tertiary-100 flex items-center justify-center mb-4">
                    <Brain className="h-6 w-6 text-tertiary-600" />
                  </div>
                  <h3 className="font-semibold text-lg text-tertiary-900 mb-2">Inteligente</h3>
                  <p className="text-tertiary-700 text-center">Processa dados complexos para oferecer insights valiosos em tempo real.</p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-md flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-tertiary-100 flex items-center justify-center mb-4">
                    <Wand2 className="h-6 w-6 text-tertiary-600" />
                  </div>
                  <h3 className="font-semibold text-lg text-tertiary-900 mb-2">Intuitiva</h3>
                  <p className="text-tertiary-700 text-center">Interface natural e conversacional que simplifica interações complexas.</p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-md flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-tertiary-100 flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-tertiary-600" />
                  </div>
                  <h3 className="font-semibold text-lg text-tertiary-900 mb-2">Ágil</h3>
                  <p className="text-tertiary-700 text-center">Respostas rápidas que aceleram a tomada de decisões e processos.</p>
                </div>
              </div>
            </div>
              
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="bg-tertiary-600 text-white py-4 px-6">
                  <h3 className="text-xl font-semibold">Paleta de Cores Amy</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-5 gap-2 mb-6">
                    {tertiaryColors.slice(0, 5).map(color => (
                      <div key={color.name} 
                          className="aspect-square rounded-md flex items-center justify-center"
                          style={{ backgroundColor: color.hex }}>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-5 gap-2 mb-6">
                    {tertiaryColors.slice(5, 10).map(color => (
                      <div key={color.name} 
                          className="aspect-square rounded-md flex items-center justify-center"
                          style={{ backgroundColor: color.hex }}>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="bg-tertiary-600 hover:bg-tertiary-700 text-white w-full"
                    onClick={() => document.getElementById('color-details')?.scrollIntoView({ behavior: 'smooth' })}>
                    Ver detalhes completos
                  </Button>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="bg-tertiary-600 text-white py-4 px-6">
                  <h3 className="text-xl font-semibold">Exemplos de Uso</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <Accordion type="single" collapsible className="border border-tertiary-200 rounded-lg">
                      <AccordionItem value="item-1" className="border-b-0">
                        <AccordionTrigger className="px-4 py-3 hover:no-underline">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8 border-2 border-tertiary-200">
                              <AvatarImage src={Amy004} alt="Amy" />
                            </Avatar>
                            <div className="flex items-center gap-2">
                              <span className="font-medium">Insight da Amy</span>
                              <Sparkles size={16} className="text-tertiary-500" />
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4">
                          <div className="ml-11">
                            <div className="bg-tertiary-50 text-tertiary-800 px-3 py-1 rounded-md text-sm inline-block mb-3">
                              Análise de desempenho
                            </div>
                            <p className="text-gray-700">Suas vendas aumentaram 18% na última semana. A campanha de marketing digital está gerando um ROI de 3.2x o investimento inicial.</p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    
                    <div className="flex items-center p-4 bg-tertiary-50 rounded-lg gap-3">
                      <div className="w-9 h-9 rounded-full bg-tertiary-100 flex items-center justify-center flex-shrink-0">
                        <Bot size={18} className="text-tertiary-600" />
                      </div>
                      <p className="text-sm text-tertiary-800">
                        <span className="font-medium">Amy:</span> Posso ajudar a analisar esses dados para você.
                      </p>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1 border-tertiary-200 text-tertiary-700 hover:bg-tertiary-50">
                        <Stars className="mr-2 h-4 w-4" /> Sugerir ações
                      </Button>
                      <Button className="flex-1 bg-tertiary-600 hover:bg-tertiary-700 text-white">
                        <Wand2 className="mr-2 h-4 w-4" /> Gerar análise
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 overflow-hidden">
                <img src={Amy001} alt="Amy, a IA da Amicci" className="w-40 h-auto object-contain mb-4" />
                <Button 
                  className="w-full border border-tertiary-200 bg-white text-tertiary-800 hover:bg-tertiary-50"
                  onClick={() => handleDownload('/src/pages/assets/Amy 001.png', 'amy-image-1.png')}>
                  Download PNG
                </Button>
              </div>
              <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 overflow-hidden">
                <img src={Amy002} alt="Amy, a IA da Amicci em outra pose" className="w-40 h-auto object-contain mb-4" />
                <Button 
                  className="w-full border border-tertiary-200 bg-white text-tertiary-800 hover:bg-tertiary-50"
                  onClick={() => handleDownload('/src/pages/assets/Amy 002.png', 'amy-image-2.png')}>
                  Download PNG
                </Button>
              </div>
              <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 overflow-hidden">
                <img src={Amy004} alt="Amy, avatar em formato de perfil" className="w-40 h-auto object-contain mb-4" />
                <Button 
                  className="w-full border border-tertiary-200 bg-white text-tertiary-800 hover:bg-tertiary-50"
                  onClick={() => handleDownload('/src/pages/assets/Amy 004.png', 'amy-avatar.png')}>
                  Download PNG
                </Button>
              </div>
            </div>
            
            <div id="color-details" className="p-8 bg-white rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-tertiary-800 mb-6">Detalhes da Paleta de Cores</h3>
              
              <div className="p-4 border border-tertiary-100 rounded-lg mb-6">
                <div className="space-y-6">
                  <div>
                    <h6 className="font-medium mb-3">Escala Completa</h6>
                    <div className="grid grid-cols-11 gap-1 w-full">
                      {tertiaryColors.map(color => (
                        <div key={color.name} className="flex flex-col items-center">
                          <div 
                            className={`h-16 w-full rounded-md flex items-center justify-center ${color.name.includes('50') || color.name.includes('100') || color.name.includes('200') ? 'text-tertiary-800' : 'text-white'}`} 
                            style={{ backgroundColor: color.hex }}
                          >
                            {color.name.split('-')[1]}
                          </div>
                          <span className="text-xs mt-1 truncate w-full text-center">{color.name}</span>
                          <span className="text-xs text-gray-500 truncate w-full text-center">{color.hex}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h6 className="font-medium mb-3">Variáveis de Aplicação</h6>
                    <div className="grid grid-cols-4 gap-4 w-full">
                      {tertiaryPalette.map(item => (
                        <div key={item.name} className="flex flex-col">
                          <div 
                            className={`h-16 w-full rounded-md flex items-center justify-center ${item.name === 'light' ? 'text-tertiary-800' : 'text-white'}`} 
                            style={{ backgroundColor: item.hex }}
                          >
                            {item.name}
                          </div>
                          <span className="text-xs mt-1 truncate w-full">tertiary-{item.name}</span>
                          <span className="text-xs text-gray-500 truncate w-full">{item.hex}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
