
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Chip } from '@/components/ui/chip';
import { Separator } from "@/components/ui/separator";
import ComponentCard from '@/components/ComponentCard';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Brand = () => {
  return (
    <div className="w-full animate-fade-in">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-mui-primary font-medium mb-2">
          <Chip variant="filled" color="primary" size="sm">Foundations</Chip>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Brand</h1>
        <p className="text-mui-text-secondary max-w-3xl">Nossa identidade visual é o reflexo dos nossos valores e da nossa missão, transmitindo confiança e inovação.</p>
      </div>

      <Tabs defaultValue="logo" className="mt-8">
        <TabsList>
          <TabsTrigger value="logo">Logo</TabsTrigger>
          <TabsTrigger value="colors">Cores</TabsTrigger>
          <TabsTrigger value="typography">Tipografia</TabsTrigger>
          <TabsTrigger value="usage">Uso e Aplicações</TabsTrigger>
        </TabsList>
        
        <TabsContent value="logo" className="space-y-6">
          <ComponentCard 
            title="Logo Amicci" 
            description="Nossa marca representa nossa identidade e valores fundamentais."
          >
            <div className="space-y-10">
              <div className="space-y-6">
                <h3 className="text-xl font-medium">Versão Principal</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="border rounded-lg p-8 flex items-center justify-center bg-white">
                    <img 
                      src="/lovable-uploads/d68a9bd5-c878-4a9a-9ac3-3f633ff024cb.png" 
                      alt="Amicci logo com símbolo e texto" 
                      className="max-w-full h-auto max-h-40"
                    />
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-medium">Logo completo</h4>
                    <p className="text-gray-600">O logo completo da Amicci combina o símbolo com o wordmark, transmitindo nossa identidade de forma clara e reconhecível.</p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Download SVG</Button>
                      <Button size="sm" variant="outline">Download PNG</Button>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />
              
              <div className="space-y-6">
                <h3 className="text-xl font-medium">Variações</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="border rounded-lg p-8 flex items-center justify-center bg-white">
                    <img 
                      src="/lovable-uploads/db479e39-ff28-4a63-80fb-e4b05e08566b.png" 
                      alt="Amicci wordmark" 
                      className="max-w-full h-auto max-h-40"
                    />
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-medium">Wordmark</h4>
                    <p className="text-gray-600">A versão textual da nossa marca pode ser usada em contextos onde o símbolo não é necessário ou quando o espaço é limitado horizontalmente.</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="border rounded-lg p-8 flex items-center justify-center bg-white">
                    <img 
                      src="/lovable-uploads/18357a24-9b47-40ea-aa8c-a80feb0c5fd1.png" 
                      alt="Símbolo Amicci" 
                      className="max-w-full h-auto max-h-40"
                    />
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-medium">Símbolo</h4>
                    <p className="text-gray-600">O símbolo da Amicci pode ser usado sozinho em contextos onde a marca já é conhecida ou em espaços muito restritos, como ícones de aplicativo ou favicons.</p>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-6">
                <h3 className="text-xl font-medium">Área de Proteção</h3>
                <p className="text-gray-600">Para garantir que nosso logo tenha destaque adequado, mantenha sempre uma área de proteção ao redor dele. Esta área deve ser igual à altura da letra "a" do logotipo.</p>
                
                <div className="border rounded-lg p-8 flex items-center justify-center bg-gray-50">
                  <div className="relative inline-block border-2 border-dashed border-gray-300 p-12">
                    <img 
                      src="/lovable-uploads/d68a9bd5-c878-4a9a-9ac3-3f633ff024cb.png" 
                      alt="Amicci logo com área de proteção" 
                      className="max-w-full h-auto max-h-32"
                    />
                  </div>
                </div>
              </div>
            </div>
          </ComponentCard>
        </TabsContent>
        
        <TabsContent value="colors" className="space-y-6">
          <ComponentCard 
            title="Cores da Marca" 
            description="Nossas cores principais refletem os valores da marca e ajudam a criar uma identidade visual consistente."
          >
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-xl font-medium">Cores Primárias</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="rounded-lg overflow-hidden border">
                    <div className="h-32 bg-[#00B2B0]"></div>
                    <div className="p-4 space-y-2">
                      <h4 className="font-medium">Amicci Teal</h4>
                      <p className="text-sm text-gray-500">HEX: #00B2B0</p>
                      <p className="text-sm text-gray-500">RGB: 0, 178, 176</p>
                    </div>
                  </div>
                  <div className="rounded-lg overflow-hidden border">
                    <div className="h-32 bg-[#006771]"></div>
                    <div className="p-4 space-y-2">
                      <h4 className="font-medium">Amicci Petrol</h4>
                      <p className="text-sm text-gray-500">HEX: #006771</p>
                      <p className="text-sm text-gray-500">RGB: 0, 103, 113</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xl font-medium">Cores Secundárias</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="rounded-lg overflow-hidden border">
                    <div className="h-24 bg-[#F6F9FC]"></div>
                    <div className="p-3 space-y-1">
                      <h4 className="font-medium text-sm">Light Gray</h4>
                      <p className="text-xs text-gray-500">HEX: #F6F9FC</p>
                    </div>
                  </div>
                  <div className="rounded-lg overflow-hidden border">
                    <div className="h-24 bg-[#E8EEF4]"></div>
                    <div className="p-3 space-y-1">
                      <h4 className="font-medium text-sm">Gray</h4>
                      <p className="text-xs text-gray-500">HEX: #E8EEF4</p>
                    </div>
                  </div>
                  <div className="rounded-lg overflow-hidden border">
                    <div className="h-24 bg-[#004F5A]"></div>
                    <div className="p-3 space-y-1">
                      <h4 className="font-medium text-sm">Dark Teal</h4>
                      <p className="text-xs text-gray-500">HEX: #004F5A</p>
                    </div>
                  </div>
                  <div className="rounded-lg overflow-hidden border">
                    <div className="h-24 bg-[#39D0CB]"></div>
                    <div className="p-3 space-y-1">
                      <h4 className="font-medium text-sm">Light Teal</h4>
                      <p className="text-xs text-gray-500">HEX: #39D0CB</p>
                    </div>
                  </div>
                </div>
              </div>

              <Alert className="bg-gray-50 border-gray-200">
                <AlertDescription>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <span>Para obter o guia completo de cores em diferentes formatos, baixe nosso guia de marca.</span>
                    <Button variant="outline">Download Guia de Cores</Button>
                  </div>
                </AlertDescription>
              </Alert>
            </div>
          </ComponentCard>
        </TabsContent>
        
        <TabsContent value="typography" className="space-y-6">
          <ComponentCard 
            title="Tipografia" 
            description="Nossa tipografia foi escolhida para complementar a identidade visual da marca e garantir legibilidade em diferentes aplicações."
          >
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-xl font-medium">Fonte Principal</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="border rounded-lg p-6">
                    <h4 className="font-medium mb-4">Montserrat</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Light</p>
                        <p className="font-light text-xl">Amicci Typography</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Regular</p>
                        <p className="font-normal text-xl">Amicci Typography</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Medium</p>
                        <p className="font-medium text-xl">Amicci Typography</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">SemiBold</p>
                        <p className="font-semibold text-xl">Amicci Typography</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Bold</p>
                        <p className="font-bold text-xl">Amicci Typography</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p>Montserrat é nossa fonte principal, usada em todos os materiais de marca e interfaces digitais. Sua combinação de características geométricas e abertura adequada garantem excelente legibilidade em diferentes tamanhos.</p>
                    <p>Disponível no Google Fonts, é fácil de implementar em projetos digitais e oferece ampla compatibilidade.</p>
                    <Button variant="outline" className="mt-2" onClick={() => window.open("https://fonts.google.com/specimen/Montserrat", "_blank")}>
                      Obter Montserrat
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xl font-medium">Hierarquia Tipográfica</h3>
                <div className="space-y-6 border rounded-lg p-6">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Título Principal (H1)</p>
                    <h1 className="text-4xl font-bold">Amicci Design System</h1>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Subtítulo (H2)</p>
                    <h2 className="text-2xl font-semibold">Componentes e diretrizes</h2>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Título de Seção (H3)</p>
                    <h3 className="text-xl font-medium">Construindo interfaces consistentes</h3>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Corpo de Texto</p>
                    <p className="text-base">Nossa tipografia foi cuidadosamente selecionada para garantir legibilidade e consistência em todas as plataformas e dispositivos.</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Texto Pequeno</p>
                    <p className="text-sm">Informações adicionais e detalhes em tamanho reduzido para elementos secundários.</p>
                  </div>
                </div>
              </div>
            </div>
          </ComponentCard>
        </TabsContent>
        
        <TabsContent value="usage" className="space-y-6">
          <ComponentCard 
            title="Uso e Aplicações" 
            description="Diretrizes para aplicação correta da nossa marca em diferentes contextos."
          >
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-medium">O que fazer</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-center h-40 bg-white rounded border mb-4">
                        <img 
                          src="/lovable-uploads/d68a9bd5-c878-4a9a-9ac3-3f633ff024cb.png" 
                          alt="Logo com espaçamento adequado" 
                          className="h-20"
                        />
                      </div>
                      <h4 className="font-medium mb-2">Usar o espaçamento adequado</h4>
                      <p className="text-sm text-gray-600">Sempre mantenha a área de proteção ao redor do logo para garantir sua visibilidade.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-center h-40 bg-white rounded border mb-4">
                        <img 
                          src="/lovable-uploads/d68a9bd5-c878-4a9a-9ac3-3f633ff024cb.png" 
                          alt="Logo em tamanho mínimo" 
                          className="h-16"
                        />
                      </div>
                      <h4 className="font-medium mb-2">Respeitar o tamanho mínimo</h4>
                      <p className="text-sm text-gray-600">Para garantir a legibilidade, nunca utilize o logo em tamanhos menores que o recomendado.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-medium">O que não fazer</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-center h-40 bg-gray-100 rounded border mb-4 relative">
                        <img 
                          src="/lovable-uploads/d68a9bd5-c878-4a9a-9ac3-3f633ff024cb.png" 
                          alt="Logo distorcido" 
                          className="h-20 opacity-40"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-full h-0.5 bg-red-500 rotate-45"></div>
                        </div>
                      </div>
                      <h4 className="font-medium mb-2">Não distorça o logo</h4>
                      <p className="text-sm text-gray-600">Nunca estique, comprima ou distorça o logo de qualquer maneira.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-center h-40 bg-purple-600 rounded border mb-4 relative">
                        <img 
                          src="/lovable-uploads/d68a9bd5-c878-4a9a-9ac3-3f633ff024cb.png" 
                          alt="Logo com cores não aprovadas" 
                          className="h-20 opacity-40"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-full h-0.5 bg-red-500 rotate-45"></div>
                        </div>
                      </div>
                      <h4 className="font-medium mb-2">Não altere as cores</h4>
                      <p className="text-sm text-gray-600">Não utilize cores não aprovadas para o logo.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-center h-40 bg-gray-100 rounded border mb-4 relative">
                        <div className="bg-gradient-to-r from-yellow-400 to-pink-500 h-full w-full absolute opacity-30"></div>
                        <img 
                          src="/lovable-uploads/d68a9bd5-c878-4a9a-9ac3-3f633ff024cb.png" 
                          alt="Logo sobre fundo complexo" 
                          className="h-20 opacity-40 relative z-10"
                        />
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                          <div className="w-full h-0.5 bg-red-500 rotate-45"></div>
                        </div>
                      </div>
                      <h4 className="font-medium mb-2">Não use sobre fundos complexos</h4>
                      <p className="text-sm text-gray-600">Evite colocar o logo sobre imagens ou padrões que comprometam sua visibilidade.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <Alert className="bg-gray-50 border-gray-200">
                <AlertDescription>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <span>Para obter o manual completo de identidade visual, baixe nosso brand book.</span>
                    <Button variant="outline">Download Brand Book</Button>
                  </div>
                </AlertDescription>
              </Alert>
            </div>
          </ComponentCard>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Brand;
