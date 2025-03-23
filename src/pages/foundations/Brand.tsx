import React, { useState } from 'react';
import { TailwindTabs } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Header from '@/components/library-components/Header';
import ComponentCard from '@/components/ComponentCard';
import { ArrowDownToLine, FileDown, Download, Check } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

import {
  AmicciLogo,
  AmicciLogoVertical,
  AmicciLogoWhite,
  AmicciLogoVerticalWhite,
} from '@/components/icons/AmicciLogo';

const logoPaths = {
  default: '/lovable-uploads/6e955f92-9914-494c-b967-79e27940455d.svg',
  horizontal: '/lovable-uploads/6e955f92-9914-494c-b967-79e27940455d.svg',
  vertical: '/lovable-uploads/49117495-7191-4991-9559-83944679139f.svg',
  symbol: '/lovable-uploads/49117495-7191-4991-9559-83944679139f.svg',
};

const logoPathsWhite = {
  default: '/lovable-uploads/6e955f92-9914-494c-b967-79e27940455d.svg',
  horizontal: '/lovable-uploads/6e955f92-9914-494c-b967-79e27940455d.svg',
  vertical: '/lovable-uploads/49117495-7191-4991-9559-83944679139f.svg',
  symbol: '/lovable-uploads/49117495-7191-4991-9559-83944679139f.svg',
};

const tertiaryPalette = [
  { weight: '50', colorClass: 'bg-magenta-50', hexValue: '#FAE8F0' },
  { weight: '100', colorClass: 'bg-magenta-100', hexValue: '#F5C6DC' },
  { weight: '200', colorClass: 'bg-magenta-200', hexValue: '#EF9EC5' },
  { weight: '300', colorClass: 'bg-magenta-300', hexValue: '#E767A6' },
  { weight: '400', colorClass: 'bg-magenta-400', hexValue: '#E1368C' },
  { weight: '500', colorClass: 'bg-magenta-500', hexValue: '#D60270' },
  { weight: '600', colorClass: 'bg-magenta-600', hexValue: '#AB0256' },
  { weight: '700', colorClass: 'bg-magenta-700', hexValue: '#880144' },
  { weight: '800', colorClass: 'bg-magenta-800', hexValue: '#660133' },
  { weight: '900', colorClass: 'bg-magenta-900', hexValue: '#490124' }
];

const ColorSwatch = ({ color, hex, name }) => {
  return (
    <div className="flex gap-2 items-center mb-2">
      <div className={`w-10 h-10 rounded-md ${color}`}></div>
      <div>
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-gray-500">{hex}</p>
      </div>
    </div>
  );
};

const Brand = () => {
  const [activeTab, setActiveTab] = useState('amicci');
  const [downloadStatus, setDownloadStatus] = useState({});

  const handleDownload = (id) => {
    setDownloadStatus(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setDownloadStatus(prev => ({ ...prev, [id]: false }));
    }, 2000);
  };

  return (
    <div className="w-full animate-fade-in">
      <Header
        title="Marca"
        description="Diretrizes para uso dos elementos da marca e identidade visual"
        type="foundations"
      />

      <TailwindTabs
        defaultValue="amicci"
        className="mt-8"
        tabs={[
          { name: 'Amicci', value: 'amicci' },
          { name: 'Amy', value: 'amy' }
        ]}
        onChange={value => setActiveTab(value)}
      >
        {activeTab === 'amicci' && (
          <div className="space-y-8 mt-8">
            <ComponentCard
              title="Logo Amicci"
              description="O logo da Amicci é um reflexo de sua identidade digital moderna"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Logo Principal</h3>
                  <div className="bg-gray-100 w-full rounded-lg flex items-center justify-center py-12 mb-4">
                    <AmicciLogo className="h-20" />
                  </div>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      className="gap-2"
                      onClick={() => handleDownload('amicci-png')}
                    >
                      {downloadStatus['amicci-png'] ? (
                        <>
                          <Check className="h-4 w-4" /> Baixado
                        </>
                      ) : (
                        <>
                          <FileDown className="h-4 w-4" /> PNG
                        </>
                      )}
                    </Button>
                    <Button
                      variant="outline"
                      className="gap-2"
                      onClick={() => handleDownload('amicci-svg')}
                    >
                      {downloadStatus['amicci-svg'] ? (
                        <>
                          <Check className="h-4 w-4" /> Baixado
                        </>
                      ) : (
                        <>
                          <FileDown className="h-4 w-4" /> SVG
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Versão Vertical</h3>
                  <div className="bg-gray-100 w-full rounded-lg flex items-center justify-center py-12 mb-4">
                    <AmicciLogoVertical className="h-32" />
                  </div>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      className="gap-2"
                      onClick={() => handleDownload('amicci-vertical-png')}
                    >
                      {downloadStatus['amicci-vertical-png'] ? (
                        <>
                          <Check className="h-4 w-4" /> Baixado
                        </>
                      ) : (
                        <>
                          <FileDown className="h-4 w-4" /> PNG
                        </>
                      )}
                    </Button>
                    <Button
                      variant="outline"
                      className="gap-2"
                      onClick={() => handleDownload('amicci-vertical-svg')}
                    >
                      {downloadStatus['amicci-vertical-svg'] ? (
                        <>
                          <Check className="h-4 w-4" /> Baixado
                        </>
                      ) : (
                        <>
                          <FileDown className="h-4 w-4" /> SVG
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>

              <Separator className="my-8" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Logo Branco</h3>
                  <div className="bg-gray-800 w-full rounded-lg flex items-center justify-center py-12 mb-4">
                    <AmicciLogoWhite className="h-20" />
                  </div>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      className="gap-2"
                      onClick={() => handleDownload('amicci-white-png')}
                    >
                      {downloadStatus['amicci-white-png'] ? (
                        <>
                          <Check className="h-4 w-4" /> Baixado
                        </>
                      ) : (
                        <>
                          <FileDown className="h-4 w-4" /> PNG
                        </>
                      )}
                    </Button>
                    <Button
                      variant="outline"
                      className="gap-2"
                      onClick={() => handleDownload('amicci-white-svg')}
                    >
                      {downloadStatus['amicci-white-svg'] ? (
                        <>
                          <Check className="h-4 w-4" /> Baixado
                        </>
                      ) : (
                        <>
                          <FileDown className="h-4 w-4" /> SVG
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Logo Vertical Branco</h3>
                  <div className="bg-gray-800 w-full rounded-lg flex items-center justify-center py-12 mb-4">
                    <AmicciLogoVerticalWhite className="h-32" />
                  </div>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      className="gap-2"
                      onClick={() => handleDownload('amicci-vertical-white-png')}
                    >
                      {downloadStatus['amicci-vertical-white-png'] ? (
                        <>
                          <Check className="h-4 w-4" /> Baixado
                        </>
                      ) : (
                        <>
                          <FileDown className="h-4 w-4" /> PNG
                        </>
                      )}
                    </Button>
                    <Button
                      variant="outline"
                      className="gap-2"
                      onClick={() => handleDownload('amicci-vertical-white-svg')}
                    >
                      {downloadStatus['amicci-vertical-white-svg'] ? (
                        <>
                          <Check className="h-4 w-4" /> Baixado
                        </>
                      ) : (
                        <>
                          <FileDown className="h-4 w-4" /> SVG
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>

              <Separator className="my-8" />

              <div>
                <h3 className="text-xl font-semibold mb-4">Diretrizes de Uso</h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Espaçamento Mínimo</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600 mb-4">
                        Mantenha um espaço livre ao redor do logo Amicci equivalente a pelo menos 1x a altura da letra "A" no logo.
                        Este espaçamento garante que o logo tenha destaque adequado em qualquer aplicação.
                      </p>
                      <div className="bg-gray-100 p-4 rounded-md">
                        <img
                          src={logoPaths.default}
                          alt="Espaçamento do Logo Amicci"
                          className="max-h-20 mx-auto border border-dashed border-gray-400 p-6"
                        />
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Usos Incorretos</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600 mb-4">
                        Evite as seguintes aplicações incorretas do logo Amicci:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-600">
                        <li>Distorcer ou alterar as proporções</li>
                        <li>Alterar as cores oficiais</li>
                        <li>Adicionar efeitos como sombras ou contornos</li>
                        <li>Rotacionar ou inclinar</li>
                        <li>Usar sobre fundos que comprometam a legibilidade</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Aplicações em Fundos</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600 mb-4">
                        O logo Amicci pode ser aplicado sobre fundos claros ou escuros, escolhendo a versão
                        apropriada que garanta contraste e legibilidade.
                      </p>
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="bg-white p-6 rounded-md flex items-center justify-center">
                          <img
                            src={logoPaths.default}
                            alt="Logo em fundo claro"
                            className="h-12"
                          />
                        </div>
                        <div className="bg-gray-800 p-6 rounded-md flex items-center justify-center">
                          <img
                            src={logoPathsWhite.default}
                            alt="Logo em fundo escuro"
                            className="h-12 invert"
                          />
                        </div>
                        <div className="bg-amicci-500 p-6 rounded-md flex items-center justify-center">
                          <img
                            src={logoPathsWhite.default}
                            alt="Logo em fundo colorido"
                            className="h-12 invert"
                          />
                        </div>
                        <div className="bg-amicci-100 p-6 rounded-md flex items-center justify-center">
                          <img
                            src={logoPaths.default}
                            alt="Logo em fundo claro colorido"
                            className="h-12"
                          />
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </ComponentCard>
          </div>
        )}

        {activeTab === 'amy' && (
          <div className="space-y-8 mt-8">
            <ComponentCard
              title="Logo Amy"
              description="O logo da Amy é um reflexo de sua identidade digital moderna"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Logo Principal</h3>
                  <div className="bg-gray-100 w-full rounded-lg flex items-center justify-center py-12 mb-4">
                    <img 
                      src="/lovable-uploads/a524e964-803b-41f6-975c-e3969c2cc443.png" 
                      alt="Logo Amy" 
                      className="h-20"
                    />
                  </div>
                  <div className="flex gap-4">
                    <Button 
                      variant="outline" 
                      className="gap-2" 
                      onClick={() => handleDownload('amy-png')}
                    >
                      {downloadStatus['amy-png'] ? (
                        <><Check className="h-4 w-4" /> Baixado</>
                      ) : (
                        <><FileDown className="h-4 w-4" /> PNG</>
                      )}
                    </Button>
                    <Button 
                      variant="outline" 
                      className="gap-2" 
                      onClick={() => handleDownload('amy-svg')}
                    >
                      {downloadStatus['amy-svg'] ? (
                        <><Check className="h-4 w-4" /> Baixado</>
                      ) : (
                        <><FileDown className="h-4 w-4" /> SVG</>
                      )}
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Versão Secundária</h3>
                  <div className="bg-gray-800 w-full rounded-lg flex items-center justify-center py-12 mb-4">
                    <img 
                      src="/lovable-uploads/a524e964-803b-41f6-975c-e3969c2cc443.png" 
                      alt="Logo Amy Light" 
                      className="h-20 invert"
                    />
                  </div>
                  <div className="flex gap-4">
                    <Button 
                      variant="outline" 
                      className="gap-2" 
                      onClick={() => handleDownload('amy-light-png')}
                    >
                      {downloadStatus['amy-light-png'] ? (
                        <><Check className="h-4 w-4" /> Baixado</>
                      ) : (
                        <><FileDown className="h-4 w-4" /> PNG</>
                      )}
                    </Button>
                    <Button 
                      variant="outline" 
                      className="gap-2" 
                      onClick={() => handleDownload('amy-light-svg')}
                    >
                      {downloadStatus['amy-light-svg'] ? (
                        <><Check className="h-4 w-4" /> Baixado</>
                      ) : (
                        <><FileDown className="h-4 w-4" /> SVG</>
                      )}
                    </Button>
                  </div>
                </div>
              </div>

              <Separator className="my-8" />

              <div>
                <h3 className="text-xl font-semibold mb-4">Paleta de Cores - Tertiary (Magenta)</h3>
                <p className="text-gray-600 mb-6">
                  A paleta tertiary, baseada em tons de magenta, é a cor principal da marca Amy. Esta paleta traz energia, dinamismo e modernidade à identidade visual.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                  {tertiaryPalette.map(color => (
                    <div 
                      key={color.weight} 
                      className={`h-24 rounded-md ${color.colorClass} flex items-end p-2`}
                    >
                      <div className="text-xs font-mono bg-white bg-opacity-80 px-2 py-1 rounded">
                        {color.hexValue}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium mb-3">Variantes da Paleta Tertiary</h4>
                    <div className="space-y-3 bg-gray-50 p-4 rounded-md">
                      <ColorSwatch color="bg-tertiary-main" hex="#D60270" name="main (magenta-500)" />
                      <ColorSwatch color="bg-tertiary-light" hex="#F5C6DC" name="light (magenta-100)" />
                      <ColorSwatch color="bg-tertiary-dark" hex="#880144" name="dark (magenta-700)" />
                      <ColorSwatch color="bg-white border border-tertiary-outlinedBorder" hex="rgba(214, 2, 112, 0.5)" name="outlinedBorder" />
                      <ColorSwatch color="bg-tertiary-hover" hex="rgba(214, 2, 112, 0.04)" name="hover (4%)" />
                      <ColorSwatch color="bg-tertiary-selected" hex="rgba(214, 2, 112, 0.08)" name="selected (8%)" />
                      <ColorSwatch color="bg-tertiary-focus" hex="rgba(214, 2, 112, 0.12)" name="focus (12%)" />
                      <ColorSwatch color="bg-tertiary-focusVisible" hex="rgba(214, 2, 112, 0.30)" name="focusVisible (30%)" />
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Exemplos de Uso</h4>
                    <div className="space-y-4">
                      <div className="bg-tertiary-main text-white p-4 rounded-md">
                        Elemento principal com cor tertiary-main
                      </div>
                      <div className="bg-tertiary-light text-tertiary-dark p-4 rounded-md">
                        Fundo claro com texto em tertiary-dark
                      </div>
                      <div className="border border-tertiary-outlinedBorder p-4 rounded-md">
                        Elemento com borda tertiary-outlinedBorder
                      </div>
                      <div className="bg-white p-4 rounded-md">
                        <span className="text-tertiary-main font-medium">Texto em tertiary-main</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator className="my-8" />

              <div>
                <h3 className="text-xl font-semibold mb-4">Ícone e Símbolo</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-100 rounded-lg flex items-center justify-center p-8">
                    <div className="bg-tertiary-main h-24 w-24 rounded-full flex items-center justify-center">
                      <span className="text-white text-4xl font-bold">A</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Símbolo Amy</h4>
                    <p className="text-gray-600 mb-4">
                      O símbolo da Amy é representado pela letra "A" estilizada dentro de um círculo, 
                      utilizando a cor principal da marca (tertiary-main). Este elemento pode ser 
                      utilizado separadamente do logotipo em aplicações onde o espaço é limitado.
                    </p>
                    <div className="flex gap-4">
                      <Button 
                        variant="outline" 
                        className="gap-2" 
                        onClick={() => handleDownload('amy-symbol-png')}
                      >
                        {downloadStatus['amy-symbol-png'] ? (
                          <><Check className="h-4 w-4" /> Baixado</>
                        ) : (
                          <><FileDown className="h-4 w-4" /> PNG</>
                        )}
                      </Button>
                      <Button 
                        variant="outline" 
                        className="gap-2" 
                        onClick={() => handleDownload('amy-symbol-svg')}
                      >
                        {downloadStatus['amy-symbol-svg'] ? (
                          <><Check className="h-4 w-4" /> Baixado</>
                        ) : (
                          <><FileDown className="h-4 w-4" /> SVG</>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <Separator className="my-8" />

              <div>
                <h3 className="text-xl font-semibold mb-4">Diretrizes de Uso</h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Espaçamento Mínimo</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600 mb-4">
                        Mantenha um espaço livre ao redor do logo Amy equivalente a pelo menos 1x a altura da letra "A" no logo.
                        Este espaçamento garante que o logo tenha destaque adequado em qualquer aplicação.
                      </p>
                      <div className="bg-gray-100 p-4 rounded-md">
                        <img 
                          src="/lovable-uploads/a524e964-803b-41f6-975c-e3969c2cc443.png" 
                          alt="Espaçamento do Logo Amy" 
                          className="max-h-20 mx-auto border border-dashed border-gray-400 p-6"
                        />
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Usos Incorretos</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600 mb-4">
                        Evite as seguintes aplicações incorretas do logo Amy:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-600">
                        <li>Distorcer ou alterar as proporções</li>
                        <li>Alterar as cores oficiais</li>
                        <li>Adicionar efeitos como sombras ou contornos</li>
                        <li>Rotacionar ou inclinar</li>
                        <li>Usar sobre fundos que comprometam a legibilidade</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Aplicações em Fundos</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600 mb-4">
                        O logo Amy pode ser aplicado sobre fundos claros ou escuros, escolhendo a versão 
                        apropriada que garanta contraste e legibilidade.
                      </p>
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="bg-white p-6 rounded-md flex items-center justify-center">
                          <img 
                            src="/lovable-uploads/a524e964-803b-41f6-975c-e3969c2cc443.png" 
                            alt="Logo em fundo claro" 
                            className="h-12"
                          />
                        </div>
                        <div className="bg-gray-800 p-6 rounded-md flex items-center justify-center">
                          <img 
                            src="/lovable-uploads/a524e964-803b-41f6-975c-e3969c2cc443.png" 
                            alt="Logo em fundo escuro" 
                            className="h-12 invert"
                          />
                        </div>
                        <div className="bg-tertiary-main p-6 rounded-md flex items-center justify-center">
                          <img 
                            src="/lovable-uploads/a524e964-803b-41f6-975c-e3969c2cc443.png" 
                            alt="Logo em fundo colorido" 
                            className="h-12 invert"
                          />
                        </div>
                        <div className="bg-tertiary-light p-6 rounded-md flex items-center justify-center">
                          <img 
                            src="/lovable-uploads/a524e964-803b-41f6-975c-e3969c2cc443.png" 
                            alt="Logo em fundo claro colorido" 
                            className="h-12"
                          />
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </ComponentCard>
          </div>
        )}
      </TailwindTabs>
    </div>
  );
};

export default Brand;
