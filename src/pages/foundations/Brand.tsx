
import React, { useState } from 'react';
import { Separator } from "@/components/ui/separator";
import ComponentCard from '@/components/ComponentCard';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import Header from '@/components/library-components/Header';
import { TabsList, TabsTrigger, Tabs, TabsContent } from '@/components/ui/tabs';
import { Sparkles } from 'lucide-react';
import AmicciLogo from '@/pages/assets/Amicci-Logo_TurquesaClaro+Escuro.svg';
import AmicciLogoBrancoTurquesaEscuro from '@/pages/assets/Amicci-Branco+TurquesaEscuro.svg';
import AmicciLogoTurquesaBranco from '@/pages/assets/Amicci-Logo_TurquesaClaro+Branco.svg';
import AmicciLogoBranco from '@/pages/assets/Amicci-Logo_Branco.svg';
import AmicciSimbolo from '@/pages/assets/Amicci-Simbolo_Turquesa_Escuro.svg';
import AmicciTagDesignSystem from '@/pages/assets/amicci-logo-tag-design-system.svg';
import AmicciTagBlog from '@/pages/assets/amicci-logo-tag-blog.svg';
import AmicciTagEngenharia from '@/pages/assets/amicci-logo-tag-engenharia.svg';
import AmicciTagUpdates from '@/pages/assets/amicci-logo-tag-updates.svg';
import AmyImage1 from '/lovable-uploads/c8cc46ad-4bce-4d77-bfb0-ca3798c18858.png';
import AmyImage2 from '/lovable-uploads/5f210948-996f-4c35-87e8-62b66efc2b26.png';
import AmyImage3 from '/lovable-uploads/2b8f1371-7675-4681-95d7-8801d4d61313.png';
import AmyContainer from '/lovable-uploads/90def0cd-2efa-49a5-9e17-5b2987e075f7.png';
import AmyIcon from '/lovable-uploads/0d77c0fc-6bba-409c-88da-24ff6bef7060.png';

const Brand = () => {
  const [activeTab, setActiveTab] = useState("logo");
  
  const handleDownload = (url: string, filename: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Brand" 
        description="Nossa identidade visual é o reflexo dos nossos valores e da nossa missão, transmitindo confiança e inovação." 
        type="foundations" 
      />

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
        <TabsList className="mb-6">
          <TabsTrigger value="logo">Logo Amicci</TabsTrigger>
          <TabsTrigger value="variations">Variações do Logo</TabsTrigger>
          <TabsTrigger value="amy">Amy</TabsTrigger>
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

        <TabsContent value="variations" className="space-y-10">
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
          <ComponentCard title="Amy" description="Nossa inteligência artificial que ajuda os clientes no fluxo de planejamento, projeto e performance comercial da plataforma." className="mb-6">
            <div className="space-y-10">
              <div className="space-y-6">
                <h3 className="text-xl font-medium">Identidade Visual da Amy</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="border rounded-lg p-8 flex items-center justify-center bg-white">
                    <div className="grid grid-cols-3 gap-4">
                      <img src={AmyImage1} alt="Amy, inteligência artificial da Amicci" className="w-full h-auto rounded" />
                      <img src={AmyImage2} alt="Amy em contexto de uso" className="w-full h-auto rounded" />
                      <img src={AmyImage3} alt="Amy interagindo com usuários" className="w-full h-auto rounded" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-medium">Sobre a Amy</h4>
                    <p className="text-gray-600">A Amy é a inteligência artificial da Amicci, desenvolvida para auxiliar nossos clientes em diferentes etapas de sua jornada na plataforma, desde o planejamento inicial até a análise de performance comercial.</p>
                    <p className="text-gray-600">Sempre que a Amy aparece na plataforma, ela é acompanhada da cor magenta-500 e suas variações, criando uma identidade visual consistente e facilmente reconhecível.</p>
                    <div className="flex items-center gap-2 mt-4">
                      <div className="w-6 h-6 bg-magenta-500 rounded"></div>
                      <span className="text-sm font-medium">Magenta-500 (#9B247F)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-medium">Ícone e Componentes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="border rounded-lg p-8 flex flex-col items-center justify-center gap-8 bg-white">
                    <div className="flex items-center gap-8">
                      <div className="flex flex-col items-center">
                        <img src={AmyIcon} alt="Ícone da Amy" className="w-12 h-12" />
                        <span className="text-sm text-center mt-2">Ícone Sparkles</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Sparkles className="w-12 h-12 text-magenta-500" />
                        <span className="text-sm text-center mt-2">Ícone Sparkles</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-medium">Ícone da Amy</h4>
                    <p className="text-gray-600">O ícone de sparkles (auto_awesome) é utilizado para identificar recursos e interações relacionados à Amy na plataforma. Este ícone deve ser aplicado na cor magenta-500 para manter a consistência visual.</p>
                    <div className="flex gap-2">
                      <Button variant="outline" onClick={() => handleDownload(AmyIcon, 'amy-icon.png')}>Download PNG</Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-medium">Aplicação em Componentes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="border rounded-lg p-8 flex items-center justify-center bg-white">
                    <img src={AmyContainer} alt="Container da Amy" className="w-full h-auto rounded-lg shadow-md" />
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-medium">Componentes da Amy</h4>
                    <p className="text-gray-600">Os componentes relacionados à Amy seguem um padrão visual específico, utilizando bordas tracejadas na cor magenta e incluindo o ícone de sparkles para identificação imediata.</p>
                    <p className="text-gray-600">Este exemplo mostra um container de insights gerados pela Amy, com sua identidade visual característica e consistente.</p>
                    <div className="p-4 border border-dashed border-magenta-300 rounded-lg bg-magenta-50 mt-4">
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-magenta-500" />
                        <span className="text-magenta-700 font-medium">Insight da Amy</span>
                      </div>
                      <p className="text-sm text-magenta-700 mt-2">Os insights da Amy são gerados por inteligência artificial e ajudam na tomada de decisões.</p>
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
