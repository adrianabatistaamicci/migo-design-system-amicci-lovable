import React from 'react';
import { Separator } from "@/components/ui/separator";
import ComponentCard from '@/components/ComponentCard';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import FoundationsHeader from '@/components/library-components/FoundationsHeader';
import AmicciLogo from '@/pages/assets/Amicci-Logo_TurquesaClaro+Escuro.svg';
import AmicciLogoBrancoTurquesaEscuro from '@/pages/assets/Amicci-Branco+TurquesaEscuro.svg';
import AmicciLogoTurquesaBranco from '@/pages/assets/Amicci-Logo_TurquesaClaro+Branco.svg';
import AmicciLogoBranco from '@/pages/assets/Amicci-Logo_Branco.svg';
import AmicciSimbolo from '@/pages/assets/Amicci-Simbolo_Turquesa_Escuro.svg';
import AmicciTagDesignSystem from '@/pages/assets/amicci-logo-tag-design-system.svg';

const Brand = () => {
  return <div className="w-full animate-fade-in">
      <FoundationsHeader title="Brand" description="Nossa identidade visual é o reflexo dos nossos valores e da nossa missão, transmitindo confiança e inovação." />

      <div className="mt-8">
        <ComponentCard title="Logo Amicci" description="Nossa marca representa nossa identidade e valores fundamentais.">
          <div className="space-y-10">
            <div className="space-y-6">
              <h3 className="text-xl font-medium">Versão Principal</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border rounded-lg p-8 flex items-center justify-center bg-white">
                  <img src={AmicciLogo} alt="Amicci logo com diferentes versões" className="max-w-[250px] h-auto" />
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">Logo completo</h4>
                  <p className="text-gray-600">O logo da Amicci está disponível em diferentes variações, combinando as cores turquesa e turquesa escuro em diferentes fundos.</p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">Download SVG</Button>
                    <Button size="sm" variant="outline">Download PNG</Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-medium">Versão para fundo escuro</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border rounded-lg p-8 flex flex-col items-center justify-center gap-8 bg-[#016071]">
                  <img src={AmicciLogoTurquesaBranco} alt="Amicci logo para fundo Amicci-500" className="max-w-[250px] h-auto" />
                  <img src={AmicciLogoBranco} alt="Amicci logo para fundo Amicci-500" className="max-w-[250px] h-auto" />
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">Logo para fundo escuro</h4>
                  <p className="text-gray-600">Versão do logo Amicci adaptada para aplicações onde o fundo é escuro, mantendo a legibilidade e o impacto visual.</p>
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
                  <img src={AmicciTagDesignSystem} alt="Amicci logo com tag design system" className="max-w-[250px] h-auto" />
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">Logo com tag</h4>
                  <p className="text-gray-600">A versão textual da nossa marca pode ser usada em contextos onde o símbolo não é necessário ou quando o espaço é limitado horizontalmente.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border rounded-lg p-8 flex items-center justify-center bg-white">
                  <img src={AmicciSimbolo} alt="Símbolo Amicci" className="max-w-[250px] h-[117px]" />
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">Símbolo</h4>
                  <p className="text-gray-600">O símbolo da Amicci pode ser usado sozinho em contextos onde a marca já é conhecida ou em espaços muito restritos, como ícones de aplicativo ou favicons.</p>
                </div>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-6">
              <h3 className="text-xl font-medium">Versões de Cor</h3>
              <p className="text-gray-600">O logo da Amicci está disponível em diferentes combinações de cores, adaptadas para diferentes necessidades e aplicações.</p>
              
              <div className="space-y-4">
                <h4 className="font-medium">Versão Branco + Turquesa Escuro</h4>
                <div className="border rounded-lg p-6 bg-[#00B2B0] flex justify-center">
                  <div className="max-w-md">
                    <img src={AmicciLogoBrancoTurquesaEscuro} alt="Amicci logo - versão branco + turquesa escuro" className="max-w-[250px] h-auto" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-medium">Versão Turquesa + Turquesa Escuro</h4>
                <div className="border rounded-lg p-6 bg-white flex justify-center">
                  <div className="max-w-md">
                    <img src={AmicciLogo} alt="Amicci logo - versão turquesa + turquesa escuro" className="max-w-[250px] h-auto" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-medium">Versão para aplicações com fundo Amicci-500</h4>
                <div className="border rounded-lg p-6 bg-[#016071] flex justify-center">
                  <div className="max-w-md">
                    <img src={AmicciLogoTurquesaBranco} alt="Amicci logo - versão para aplicações com fundo Amicci-500" className="max-w-[250px] h-auto" />
                  </div>
                </div>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-6">
              <h3 className="text-xl font-medium">Área de Proteção</h3>
              <p className="text-gray-600">Para garantir que nosso logo tenha destaque adequado, mantenha sempre uma área de proteção ao redor dele. Esta área deve ser igual à altura da letra "a" do logotipo.</p>
              
              <div className="border rounded-lg p-8 flex items-center justify-center bg-gray-50">
                <div className="relative inline-block border-2 border-dashed border-gray-300 p-12">
                  <img src={AmicciLogo} alt="Amicci logo com área de proteção" className="max-w-[250px] h-auto" />
                </div>
              </div>
            </div>
          </div>
        </ComponentCard>
      </div>
    </div>;
};
export default Brand;
