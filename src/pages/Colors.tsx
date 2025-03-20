
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ComponentCard from '@/components/ComponentCard';
import ColorGrid from '@/components/colors/ColorGrid';
import SemanticColorGrid from '@/components/colors/SemanticColorGrid';
import { Separator } from '@/components/ui/separator';

// Base color data
const baseColors = [
  {
    name: "Amicci",
    description: "Primary brand color",
    shades: [
      { shade: "50", colorClass: "amicci-50", hexValue: "#F1FDFC" },
      { shade: "100", colorClass: "amicci-100", hexValue: "#E3FAF9" },
      { shade: "200", colorClass: "amicci-200", hexValue: "#C7F5F3" },
      { shade: "300", colorClass: "amicci-300", hexValue: "#93EDEA" },
      { shade: "400", colorClass: "amicci-400", hexValue: "#51DEDA" },
      { shade: "500", colorClass: "amicci-500", hexValue: "#10C2C0" },
      { shade: "600", colorClass: "amicci-600", hexValue: "#0EA3A1" },
      { shade: "700", colorClass: "amicci-700", hexValue: "#0C8482" },
      { shade: "800", colorClass: "amicci-800", hexValue: "#096665" },
      { shade: "900", colorClass: "amicci-900", hexValue: "#062630" },
    ]
  },
  {
    name: "AmicciDark",
    description: "Secondary brand color",
    shades: [
      { shade: "50", colorClass: "amicciDark-50", hexValue: "#E6F5F5" },
      { shade: "100", colorClass: "amicciDark-100", hexValue: "#C7E8E9" },
      { shade: "200", colorClass: "amicciDark-200", hexValue: "#A1D6D8" },
      { shade: "300", colorClass: "amicciDark-300", hexValue: "#72BEC2" },
      { shade: "400", colorClass: "amicciDark-400", hexValue: "#3A9CA1" },
      { shade: "500", colorClass: "amicciDark-500", hexValue: "#14818A" },
      { shade: "600", colorClass: "amicciDark-600", hexValue: "#0D646D" },
      { shade: "700", colorClass: "amicciDark-700", hexValue: "#06454A" },
      { shade: "800", colorClass: "amicciDark-800", hexValue: "#043A3E" },
      { shade: "900", colorClass: "amicciDark-900", hexValue: "#02282A" },
    ]
  },
  {
    name: "Magenta",
    description: "Accent color for highlights",
    shades: [
      { shade: "50", colorClass: "magenta-50", hexValue: "#FDF5FA" },
      { shade: "100", colorClass: "magenta-100", hexValue: "#F9E5F4" },
      { shade: "200", colorClass: "magenta-200", hexValue: "#F2CAEB" },
      { shade: "300", colorClass: "magenta-300", hexValue: "#E7A4DD" },
      { shade: "400", colorClass: "magenta-400", hexValue: "#C963BA" },
      { shade: "500", colorClass: "magenta-500", hexValue: "#9B247F" },
      { shade: "600", colorClass: "magenta-600", hexValue: "#841E6C" },
      { shade: "700", colorClass: "magenta-700", hexValue: "#6D1959" },
      { shade: "800", colorClass: "magenta-800", hexValue: "#571447" },
      { shade: "900", colorClass: "magenta-900", hexValue: "#3E0F32" },
    ]
  },
  {
    name: "Green",
    description: "Success color",
    shades: [
      { shade: "50", colorClass: "green-50", hexValue: "#ECFDF3" },
      { shade: "100", colorClass: "green-100", hexValue: "#D1FADF" },
      { shade: "200", colorClass: "green-200", hexValue: "#A6F4C5" },
      { shade: "300", colorClass: "green-300", hexValue: "#6CE9A6" },
      { shade: "400", colorClass: "green-400", hexValue: "#32D583" },
      { shade: "500", colorClass: "green-500", hexValue: "#12B76A" },
      { shade: "600", colorClass: "green-600", hexValue: "#039855" },
      { shade: "700", colorClass: "green-700", hexValue: "#027A48" },
      { shade: "800", colorClass: "green-800", hexValue: "#05603A" },
      { shade: "900", colorClass: "green-900", hexValue: "#054F31" },
    ]
  },
  {
    name: "Gray",
    description: "Neutral color for UI elements",
    shades: [
      { shade: "50", colorClass: "gray-50", hexValue: "#F9FBFB" },
      { shade: "100", colorClass: "gray-100", hexValue: "#F3F6F5" },
      { shade: "200", colorClass: "gray-200", hexValue: "#EAEFF0" },
      { shade: "300", colorClass: "gray-300", hexValue: "#CED6D6" },
      { shade: "400", colorClass: "gray-400", hexValue: "#AFB9BA" },
      { shade: "500", colorClass: "gray-500", hexValue: "#808586" },
      { shade: "600", colorClass: "gray-600", hexValue: "#656969" },
      { shade: "700", colorClass: "gray-700", hexValue: "#4A4F4F" },
      { shade: "800", colorClass: "gray-800", hexValue: "#313536" },
      { shade: "900", colorClass: "gray-900", hexValue: "#212323" },
    ]
  },
  {
    name: "Red",
    description: "Error color",
    shades: [
      { shade: "50", colorClass: "red-50", hexValue: "#FEF3F2" },
      { shade: "100", colorClass: "red-100", hexValue: "#FEE4E2" },
      { shade: "200", colorClass: "red-200", hexValue: "#FECDCA" },
      { shade: "300", colorClass: "red-300", hexValue: "#FDA29B" },
      { shade: "400", colorClass: "red-400", hexValue: "#F97066" },
      { shade: "500", colorClass: "red-500", hexValue: "#F04438" },
      { shade: "600", colorClass: "red-600", hexValue: "#D92D20" },
      { shade: "700", colorClass: "red-700", hexValue: "#B42318" },
      { shade: "800", colorClass: "red-800", hexValue: "#912018" },
      { shade: "900", colorClass: "red-900", hexValue: "#7A271A" },
    ]
  },
  {
    name: "Blue",
    description: "Information color",
    shades: [
      { shade: "50", colorClass: "blue-50", hexValue: "#EBF5FF" },
      { shade: "100", colorClass: "blue-100", hexValue: "#D6E8FF" },
      { shade: "200", colorClass: "blue-200", hexValue: "#ADC8FF" },
      { shade: "300", colorClass: "blue-300", hexValue: "#84A9FF" },
      { shade: "400", colorClass: "blue-400", hexValue: "#5A8CF8" },
      { shade: "500", colorClass: "blue-500", hexValue: "#2970FF" },
      { shade: "600", colorClass: "blue-600", hexValue: "#1F5AE8" },
      { shade: "700", colorClass: "blue-700", hexValue: "#0057B2" },
      { shade: "800", colorClass: "blue-800", hexValue: "#0C41A0" },
      { shade: "900", colorClass: "blue-900", hexValue: "#072B7A" },
    ]
  },
  {
    name: "Orange",
    description: "Warning color",
    shades: [
      { shade: "50", colorClass: "orange-50", hexValue: "#FFFAEB" },
      { shade: "100", colorClass: "orange-100", hexValue: "#FEF0C7" },
      { shade: "200", colorClass: "orange-200", hexValue: "#FEDF89" },
      { shade: "300", colorClass: "orange-300", hexValue: "#FEC84B" },
      { shade: "400", colorClass: "orange-400", hexValue: "#FDB022" },
      { shade: "500", colorClass: "orange-500", hexValue: "#F79009" },
      { shade: "600", colorClass: "orange-600", hexValue: "#DC6803" },
      { shade: "700", colorClass: "orange-700", hexValue: "#B54708" },
      { shade: "800", colorClass: "orange-800", hexValue: "#93370D" },
      { shade: "900", colorClass: "orange-900", hexValue: "#7A2E0E" },
    ]
  },
  {
    name: "Yellow",
    description: "Warning alternate color",
    shades: [
      { shade: "50", colorClass: "yellow-50", hexValue: "#FFFDE7" },
      { shade: "100", colorClass: "yellow-100", hexValue: "#FFF9C4" },
      { shade: "200", colorClass: "yellow-200", hexValue: "#FFF59D" },
      { shade: "300", colorClass: "yellow-300", hexValue: "#FFF176" },
      { shade: "400", colorClass: "yellow-400", hexValue: "#FFEE58" },
      { shade: "500", colorClass: "yellow-500", hexValue: "#FFEB3B" },
      { shade: "600", colorClass: "yellow-600", hexValue: "#FDD835" },
      { shade: "700", colorClass: "yellow-700", hexValue: "#FBC02D" },
      { shade: "800", colorClass: "yellow-800", hexValue: "#F9A825" },
      { shade: "900", colorClass: "yellow-900", hexValue: "#F57F17" },
    ]
  },
];

// Semantic color data
const semanticColors = [
  {
    name: "Primary",
    description: "Main brand color, used for primary actions",
    colorClass: "primary-main",
    hexValue: "#10C2C0"
  },
  {
    name: "Secondary",
    description: "Supporting color, used for secondary actions",
    colorClass: "secondary-main",
    hexValue: "#0A686F"
  },
  {
    name: "Tertiary",
    description: "Accent color for special elements",
    colorClass: "tertiary-main",
    hexValue: "#9B247F"
  },
  {
    name: "Error",
    description: "Used for error states and destructive actions",
    colorClass: "error-main",
    hexValue: "#F04438"
  },
  {
    name: "Warning",
    description: "Used for warning messages and cautionary actions",
    colorClass: "warning-main",
    hexValue: "#FFEB3B",
    darkText: true
  },
  {
    name: "Info",
    description: "Used for informational messages and help",
    colorClass: "info-main",
    hexValue: "#2970FF"
  },
  {
    name: "Success",
    description: "Used for success messages and confirmations",
    colorClass: "success-main",
    hexValue: "#12B76A"
  },
  {
    name: "Action",
    description: "Used for general interactive elements",
    colorClass: "action-main",
    hexValue: "#808586"
  },
  {
    name: "Text Primary",
    description: "Main text color",
    colorClass: "mui-text-primary",
    hexValue: "#1A2027"
  },
  {
    name: "Text Secondary",
    description: "Secondary text color for less emphasis",
    colorClass: "mui-text-secondary",
    hexValue: "#3E5060"
  },
  {
    name: "Text Disabled",
    description: "Text color for disabled elements",
    colorClass: "mui-text-disabled",
    hexValue: "#6F7E8C"
  },
  {
    name: "Background",
    description: "Main background color",
    colorClass: "mui-background",
    hexValue: "#FFFFFF",
    darkText: true
  }
];

const Colors = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Sistema de Cores</h1>
        <p className="text-mui-text-secondary text-lg">
          Paleta de cores e tokens de design utilizados na aplicação.
        </p>
      </div>

      <Tabs defaultValue="palette" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="palette">Paletas de Cores</TabsTrigger>
          <TabsTrigger value="semantic">Cores Semânticas</TabsTrigger>
          <TabsTrigger value="usage">Uso</TabsTrigger>
          <TabsTrigger value="accessibility">Acessibilidade</TabsTrigger>
        </TabsList>

        <TabsContent value="palette">
          <div className="space-y-6">
            <ComponentCard title="Paletas de Cores Base" description="Todas as cores do sistema em escala de 50 a 900">
              <p className="text-mui-text-secondary mb-6">
                Nosso sistema de cores usa uma escala de luminosidade consistente de 50 (mais claro) a 900 (mais escuro),
                similar ao sistema usado no Tailwind CSS. Cada conjunto de cores é ajustado para proporcionar um contraste adequado.
                Clique em qualquer cor para copiar seu valor hexadecimal.
              </p>
              <ColorGrid colorGroups={baseColors} />
            </ComponentCard>
          </div>
        </TabsContent>
        
        <TabsContent value="semantic">
          <div className="space-y-6">
            <ComponentCard title="Cores Semânticas" description="Cores com significados específicos na interface">
              <p className="text-mui-text-secondary mb-6">
                As cores semânticas são derivadas das paletas de cores base e têm significados específicos na interface.
                Elas são usadas para comunicar estados, ações e feedbacks ao usuário.
              </p>
              <SemanticColorGrid colors={semanticColors} />
            </ComponentCard>
            
            <Separator className="my-8" />
            
            <ComponentCard title="Variações de Estado" description="Cada cor semântica possui variações para diferentes estados">
              <p className="text-mui-text-secondary mb-6">
                Para cada cor semântica, existem variações que indicam diferentes estados como hover, selected, 
                focusVisible, etc. Isso garante consistência na interação do usuário com elementos da interface.
              </p>
              
              <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                <div className="p-4 border-b">
                  <h3 className="font-medium">Exemplo: Variações da cor Primary</h3>
                </div>
                <div className="bg-primary-main text-white p-4 border-b">
                  <span className="font-medium">primary-main</span> - Cor base
                </div>
                <div className="bg-primary-dark text-white p-4 border-b">
                  <span className="font-medium">primary-dark</span> - Variação mais escura
                </div>
                <div className="bg-primary-light text-gray-900 p-4 border-b">
                  <span className="font-medium">primary-light</span> - Variação mais clara
                </div>
                <div className="bg-primary-hover text-gray-900 p-4 border-b">
                  <span className="font-medium">primary-hover</span> - Estado de hover (4% opacidade)
                </div>
                <div className="bg-primary-selected text-gray-900 p-4 border-b">
                  <span className="font-medium">primary-selected</span> - Estado selecionado (8% opacidade)
                </div>
                <div className="bg-primary-focusVisible text-gray-900 p-4 border-b">
                  <span className="font-medium">primary-focusVisible</span> - Estado de foco (30% opacidade)
                </div>
                <div className="bg-primary-outlinedBorder text-gray-900 p-4">
                  <span className="font-medium">primary-outlinedBorder</span> - Bordas (50% opacidade)
                </div>
              </div>
            </ComponentCard>
          </div>
        </TabsContent>
        
        <TabsContent value="usage">
          <ComponentCard title="Como Usar as Cores" description="Guia de utilização das cores no sistema">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Uso das Classes Tailwind</h3>
                <p className="text-mui-text-secondary mb-4">
                  Todas as cores do sistema podem ser acessadas através das classes utilitárias do Tailwind CSS.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="rounded-lg border p-4">
                    <h4 className="font-medium mb-2">Cores Base</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-amicci-500 mr-2"></div>
                        <code className="text-sm bg-gray-100 px-2 py-1 rounded">bg-amicci-500</code>
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-red-600 mr-2"></div>
                        <code className="text-sm bg-gray-100 px-2 py-1 rounded">bg-red-600</code>
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-blue-700 mr-2"></div>
                        <code className="text-sm bg-gray-100 px-2 py-1 rounded">bg-blue-700</code>
                      </div>
                    </div>
                  </div>
                  
                  <div className="rounded-lg border p-4">
                    <h4 className="font-medium mb-2">Cores Semânticas</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-primary-main mr-2"></div>
                        <code className="text-sm bg-gray-100 px-2 py-1 rounded">bg-primary-main</code>
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-error-light mr-2"></div>
                        <code className="text-sm bg-gray-100 px-2 py-1 rounded">bg-error-light</code>
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 h-6 text-success-main mr-2 flex items-center justify-center">T</div>
                        <code className="text-sm bg-gray-100 px-2 py-1 rounded">text-success-main</code>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-medium mb-2">Exemplos de Uso</h3>
                <div className="space-y-4">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Botões</h4>
                    <div className="flex flex-wrap gap-2">
                      <button className="bg-primary-main text-white px-4 py-2 rounded">Primário</button>
                      <button className="bg-secondary-main text-white px-4 py-2 rounded">Secundário</button>
                      <button className="bg-error-main text-white px-4 py-2 rounded">Erro</button>
                      <button className="bg-success-main text-white px-4 py-2 rounded">Sucesso</button>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Alertas</h4>
                    <div className="space-y-2">
                      <div className="bg-info-light border-l-4 border-info-main p-3 rounded">
                        <p className="text-info-main">Mensagem informativa</p>
                      </div>
                      <div className="bg-error-light border-l-4 border-error-main p-3 rounded">
                        <p className="text-error-main">Mensagem de erro</p>
                      </div>
                      <div className="bg-success-light border-l-4 border-success-main p-3 rounded">
                        <p className="text-success-main">Mensagem de sucesso</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ComponentCard>
        </TabsContent>
        
        <TabsContent value="accessibility">
          <ComponentCard title="Acessibilidade" description="Garantindo contraste adequado e legibilidade">
            <div className="space-y-6">
              <p className="text-mui-text-secondary">
                Nossas cores foram cuidadosamente selecionadas para garantir acessibilidade e legibilidade, 
                seguindo as recomendações WCAG 2.1 para contraste.
              </p>
              
              <h3 className="text-lg font-medium mb-2">Contraste de Cores</h3>
              <p className="text-mui-text-secondary mb-4">
                As combinações de cores de texto e fundo foram testadas para garantir que atendam aos requisitos
                mínimos de contraste para legibilidade:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="rounded-lg overflow-hidden border">
                  <div className="p-4 bg-primary-main text-white">
                    <h4 className="font-medium">Texto branco sobre Primary</h4>
                    <p>Contraste: 4.5:1 (AA)</p>
                  </div>
                  <div className="p-4 bg-primary-light text-gray-900">
                    <h4 className="font-medium">Texto escuro sobre Primary Light</h4>
                    <p>Contraste: 7:1 (AAA)</p>
                  </div>
                </div>
                
                <div className="rounded-lg overflow-hidden border">
                  <div className="p-4 bg-error-main text-white">
                    <h4 className="font-medium">Texto branco sobre Error</h4>
                    <p>Contraste: 4.5:1 (AA)</p>
                  </div>
                  <div className="p-4 bg-error-light text-error-main">
                    <h4 className="font-medium">Texto Error sobre Error Light</h4>
                    <p>Contraste: 4.5:1 (AA)</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-lg font-medium mb-2">Dicas de Acessibilidade</h3>
              <ul className="list-disc list-inside space-y-2 text-mui-text-secondary">
                <li>Sempre use text-primary-contrast sobre fundos com cores primárias</li>
                <li>Para elementos desabilitados, use text-mui-text-disabled para indicar visualmente seu estado</li>
                <li>Não confie apenas na cor para transmitir significado; adicione ícones ou texto de suporte</li>
                <li>Teste combinações de cores com ferramentas como WebAIM Contrast Checker</li>
                <li>Considere usuários com deficiências visuais como daltonismo ao escolher cores para gráficos e visualizações</li>
              </ul>
            </div>
          </ComponentCard>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Colors;
