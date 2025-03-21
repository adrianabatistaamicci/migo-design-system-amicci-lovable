
import React from 'react';
import { TabsContent } from "@/components/ui/tabs";
import { Separator } from '@/components/ui/separator';
import { 
  Heart, Share, Trash, Send, Settings, Download, Edit, Search, ArrowRight,
  User, Bell, Calendar, Home, Mail, Phone, Lock, Unlock, Check, X, Info, 
  AlertCircle, FileText, Image, Video, Music, ShoppingCart, CreditCard, 
  Gift, Map, MapPin, Star, Sun, Moon, Cloud, Droplet, Wind, Umbrella
} from 'lucide-react';
import FoundationsHeader from '@/components/library-components/FoundationsHeader';
import { TailwindTabs } from '@/components/ui/tailwind-tabs';

// Icon groups for rendering
const iconGroups = [
  {
    title: "Ações comuns",
    icons: [
      { name: "Heart", component: <Heart /> },
      { name: "Share", component: <Share /> },
      { name: "Trash", component: <Trash /> },
      { name: "Send", component: <Send /> },
      { name: "Settings", component: <Settings /> },
      { name: "Download", component: <Download /> },
      { name: "Edit", component: <Edit /> },
      { name: "Search", component: <Search /> },
      { name: "ArrowRight", component: <ArrowRight /> },
    ]
  },
  {
    title: "Interface e Navegação",
    icons: [
      { name: "User", component: <User /> },
      { name: "Bell", component: <Bell /> },
      { name: "Calendar", component: <Calendar /> },
      { name: "Home", component: <Home /> },
      { name: "Mail", component: <Mail /> },
      { name: "Phone", component: <Phone /> },
      { name: "Lock", component: <Lock /> },
      { name: "Unlock", component: <Unlock /> },
      { name: "Check", component: <Check /> },
      { name: "X", component: <X /> },
    ]
  },
  {
    title: "Conteúdo e Mídia",
    icons: [
      { name: "Info", component: <Info /> },
      { name: "AlertCircle", component: <AlertCircle /> },
      { name: "FileText", component: <FileText /> },
      { name: "Image", component: <Image /> },
      { name: "Video", component: <Video /> },
      { name: "Music", component: <Music /> },
      { name: "ShoppingCart", component: <ShoppingCart /> },
      { name: "CreditCard", component: <CreditCard /> },
    ]
  },
  {
    title: "Temas e Ambiente",
    icons: [
      { name: "Gift", component: <Gift /> },
      { name: "Map", component: <Map /> },
      { name: "MapPin", component: <MapPin /> },
      { name: "Star", component: <Star /> },
      { name: "Sun", component: <Sun /> },
      { name: "Moon", component: <Moon /> },
      { name: "Cloud", component: <Cloud /> },
      { name: "Droplet", component: <Droplet /> },
      { name: "Wind", component: <Wind /> },
      { name: "Umbrella", component: <Umbrella /> },
    ]
  }
];

// Sample code example for using icons
const iconCodeExamples = [
  {
    title: "Importação básica",
    code: `import { Heart, Share, Trash } from 'lucide-react';

function IconExample() {
  return (
    <div className="flex gap-2">
      <Heart />
      <Share />
      <Trash />
    </div>
  );
}`
  },
  {
    title: "Personalizando ícones",
    code: `import { Settings } from 'lucide-react';

function CustomizedIcon() {
  return (
    <Settings 
      size={24} 
      color="#10C2C0" 
      strokeWidth={1.5} 
      className="animate-spin-slow"
    />
  );
}`
  },
  {
    title: "Ícones em botões",
    code: `import { Download, ArrowRight } from 'lucide-react';

function IconButtons() {
  return (
    <>
      <button className="flex items-center gap-2 bg-primary-main text-white px-4 py-2 rounded">
        <Download size={16} /> Download
      </button>
      
      <button className="flex items-center gap-1 text-primary-main">
        Ver mais <ArrowRight size={14} />
      </button>
    </>
  );
}`
  }
];

// Helper component for rendering individual icons
const IconPreview = ({ name, icon }) => (
  <div className="flex flex-col items-center border rounded-md p-3 hover:border-primary-main hover:shadow-sm transition-all">
    <div className="h-10 flex items-center justify-center mb-2">
      {icon}
    </div>
    <p className="text-xs text-center text-gray-600">{name}</p>
  </div>
);

// Helper component for code examples
const CodeExample = ({ title, code }) => (
  <div className="border rounded-md overflow-hidden">
    <div className="bg-gray-100 px-3 py-2 border-b">
      <h4 className="text-sm font-medium">{title}</h4>
    </div>
    <pre className="bg-gray-50 p-3 overflow-x-auto text-xs">
      <code>{code}</code>
    </pre>
  </div>
);

const IconsPage = () => {
  // Define tabs for the TailwindTabs component
  const iconsTabs = [
    { name: 'Escala', value: 'scale' },
    { name: 'Estilos', value: 'styles' },
    { name: 'Uso', value: 'usage' },
    { name: 'Acessibilidade', value: 'accessibility' },
  ];

  return (
    <div className="w-full animate-fade-in">
      <FoundationsHeader 
        title="Ícones" 
        description="Usamos ícones Outlined da Material Design como biblioteca oficial"
      />
      
      <TailwindTabs 
        tabs={iconsTabs}
        variant="pillsGray"
        defaultValue="scale"
        className="w-full mb-6"
      >
        <TabsContent value="scale">
          <div className="space-y-8">
            <div className="rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4">Material Design Icons</h2>
              <p className="text-gray-600 mb-6">
                Nosso design system utiliza a biblioteca Lucide React, que fornece uma ampla variedade de ícones consistentes e acessíveis.
                Todos os ícones seguem o estilo outlined da Material Design, garantindo consistência visual em toda a aplicação.
              </p>
              
              <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
                <div className="space-y-2">
                  <div className="flex justify-center">
                    <div className="p-4 bg-gray-100 rounded-full">
                      <Settings size={48} className="text-primary-main" />
                    </div>
                  </div>
                  <p className="text-center text-sm font-medium">Tamanho Grande (48px)</p>
                  <p className="text-center text-xs text-gray-500">Para ícones de destaque</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-center">
                    <div className="p-3 bg-gray-100 rounded-full">
                      <Settings size={32} className="text-primary-main" />
                    </div>
                  </div>
                  <p className="text-center text-sm font-medium">Tamanho Médio (32px)</p>
                  <p className="text-center text-xs text-gray-500">Para navegação principal</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-center">
                    <div className="p-3 bg-gray-100 rounded-full">
                      <Settings size={24} className="text-primary-main" />
                    </div>
                  </div>
                  <p className="text-center text-sm font-medium">Tamanho Normal (24px)</p>
                  <p className="text-center text-xs text-gray-500">Para contextos regulares</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-center">
                    <div className="p-3 bg-gray-100 rounded-full">
                      <Settings size={16} className="text-primary-main" />
                    </div>
                  </div>
                  <p className="text-center text-sm font-medium">Tamanho Pequeno (16px)</p>
                  <p className="text-center text-xs text-gray-500">Para uso junto a texto</p>
                </div>
              </div>
            </div>
            
            {iconGroups.map((group, idx) => (
              <div key={idx} className="rounded-lg border p-6">
                <h3 className="text-lg font-medium mb-4">{group.title}</h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3">
                  {group.icons.map((icon, i) => (
                    <IconPreview key={i} name={icon.name} icon={icon.component} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="styles">
          <div className="space-y-8">
            <div className="rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4">Estilos de Ícones</h2>
              <p className="text-gray-600 mb-6">
                Nossos ícones seguem o estilo outlined, garantindo consistência e legibilidade em diferentes tamanhos.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-md border p-4">
                  <h3 className="text-md font-medium mb-3">Peso do traço (Stroke Width)</h3>
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4">
                      <Heart size={24} strokeWidth={1} />
                      <div>
                        <p className="text-sm font-medium">Leve (1px)</p>
                        <p className="text-xs text-gray-500">Para ícones grandes</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Heart size={24} strokeWidth={1.5} />
                      <div>
                        <p className="text-sm font-medium">Padrão (1.5px)</p>
                        <p className="text-xs text-gray-500">Para uso geral</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Heart size={24} strokeWidth={2} />
                      <div>
                        <p className="text-sm font-medium">Bold (2px)</p>
                        <p className="text-xs text-gray-500">Para ênfase</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-md border p-4">
                  <h3 className="text-md font-medium mb-3">Cores</h3>
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4">
                      <Heart size={24} className="text-gray-900" />
                      <div>
                        <p className="text-sm font-medium">Primária</p>
                        <p className="text-xs text-gray-500">Para ações principais</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Heart size={24} className="text-gray-500" />
                      <div>
                        <p className="text-sm font-medium">Secundária</p>
                        <p className="text-xs text-gray-500">Para ações secundárias</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Heart size={24} className="text-primary-main" />
                      <div>
                        <p className="text-sm font-medium">Destacada</p>
                        <p className="text-xs text-gray-500">Para ênfase especial</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-md border p-4">
                  <h3 className="text-md font-medium mb-3">Estados</h3>
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4">
                      <Heart size={24} />
                      <div>
                        <p className="text-sm font-medium">Padrão</p>
                        <p className="text-xs text-gray-500">Estado normal</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Heart size={24} className="text-primary-main fill-primary-light" />
                      <div>
                        <p className="text-sm font-medium">Ativo / Selecionado</p>
                        <p className="text-xs text-gray-500">Para estados ativos</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Heart size={24} className="text-gray-400" />
                      <div>
                        <p className="text-sm font-medium">Desativado</p>
                        <p className="text-xs text-gray-500">Para ações indisponíveis</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="usage">
          <div className="space-y-8">
            <div className="rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4">Como Usar Ícones</h2>
              <p className="text-gray-600 mb-6">
                Orientações para implementar ícones de forma consistente e eficaz em sua interface.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Implementação</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Os ícones são fornecidos pela biblioteca Lucide React e podem ser facilmente importados e utilizados em seus componentes.
                  </p>
                  
                  <div className="space-y-4">
                    {iconCodeExamples.map((example, idx) => (
                      <CodeExample key={idx} title={example.title} code={example.code} />
                    ))}
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-medium mb-3">Princípios de Uso</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-md font-medium mb-2">Recomendado</h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                        <li>Use ícones para complementar texto e melhorar o reconhecimento</li>
                        <li>Mantenha tamanhos consistentes dentro do mesmo contexto</li>
                        <li>Combine ícones do mesmo estilo visual</li>
                        <li>Garanta contraste suficiente com o fundo</li>
                        <li>Use tooltips para ícones sem texto</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-md font-medium mb-2">Evitar</h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                        <li>Sobrecarregar a interface com muitos ícones</li>
                        <li>Usar ícones ambíguos sem rótulos de texto</li>
                        <li>Misturar diferentes estilos de ícones</li>
                        <li>Criar ícones personalizados inconsistentes com a biblioteca</li>
                        <li>Usar ícones muito pequenos para serem reconhecíveis</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-medium mb-3">Exemplos de Aplicação</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="border rounded-md overflow-hidden">
                      <div className="bg-gray-100 px-3 py-2 border-b">
                        <h4 className="text-sm font-medium">Botões com ícones</h4>
                      </div>
                      <div className="p-4 flex flex-col space-y-3">
                        <button className="flex items-center gap-2 bg-primary-main text-white px-4 py-2 rounded">
                          <Download size={16} /> Download
                        </button>
                        <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded">
                          <Share size={16} /> Compartilhar
                        </button>
                        <button className="rounded-full p-2 bg-gray-100">
                          <Heart size={20} />
                        </button>
                      </div>
                    </div>
                    
                    <div className="border rounded-md overflow-hidden">
                      <div className="bg-gray-100 px-3 py-2 border-b">
                        <h4 className="text-sm font-medium">Navegação</h4>
                      </div>
                      <div className="p-4">
                        <div className="flex flex-col space-y-1 text-sm">
                          <a href="#" className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
                            <Home size={18} /> Início
                          </a>
                          <a href="#" className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
                            <User size={18} /> Perfil
                          </a>
                          <a href="#" className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
                            <Settings size={18} /> Configurações
                          </a>
                          <a href="#" className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
                            <Mail size={18} /> Mensagens
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border rounded-md overflow-hidden">
                      <div className="bg-gray-100 px-3 py-2 border-b">
                        <h4 className="text-sm font-medium">Formulários</h4>
                      </div>
                      <div className="p-4 flex flex-col space-y-3">
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Search size={16} className="text-gray-400" />
                          </div>
                          <input type="text" className="pl-10 border rounded w-full px-3 py-2" placeholder="Pesquisar..." />
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="p-2 rounded-full bg-gray-100">
                            <Lock size={16} className="text-gray-600" />
                          </div>
                          <div className="text-sm text-gray-600">
                            Seus dados estão seguros
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="accessibility">
          <div className="space-y-8">
            <div className="rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4">Acessibilidade para Ícones</h2>
              <p className="text-gray-600 mb-6">
                Garantir que ícones sejam acessíveis para todos os usuários, incluindo aqueles que utilizam tecnologias assistivas.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Melhores Práticas</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border rounded-md p-4">
                      <h4 className="text-md font-medium mb-2">Texto Alternativo</h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Forneça sempre alternativas textuais para ícones que transmitem significado.
                      </p>
                      <div className="bg-gray-50 p-3 rounded-md">
                        <code className="text-xs">
{`<button aria-label="Favoritar item">
  <Heart />
</button>`}
                        </code>
                      </div>
                    </div>
                    
                    <div className="border rounded-md p-4">
                      <h4 className="text-md font-medium mb-2">Ícones Decorativos</h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Para ícones puramente decorativos, esconda-os de tecnologias assistivas.
                      </p>
                      <div className="bg-gray-50 p-3 rounded-md">
                        <code className="text-xs">
{`<span className="flex gap-2">
  <Heart aria-hidden="true" />
  Favoritos
</span>`}
                        </code>
                      </div>
                    </div>
                    
                    <div className="border rounded-md p-4">
                      <h4 className="text-md font-medium mb-2">Tamanho Mínimo</h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Garanta que ícones clicáveis tenham uma área de toque adequada.
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="bg-gray-50 p-4 rounded-full">
                          <Heart size={24} />
                        </div>
                        <div className="text-sm">
                          <p>Área de toque mínima: 44x44px</p>
                          <p className="text-xs text-gray-500">Mesmo que o ícone seja menor</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border rounded-md p-4">
                      <h4 className="text-md font-medium mb-2">Contraste</h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Mantenha um contraste adequado entre o ícone e o fundo.
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gray-900 p-3 rounded-md flex items-center justify-center">
                          <Heart size={24} className="text-white" />
                        </div>
                        <div className="bg-gray-100 p-3 rounded-md flex items-center justify-center">
                          <Heart size={24} className="text-gray-900" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-medium mb-3">Exemplos de Implementação Acessível</h3>
                  <div className="space-y-4">
                    <CodeExample 
                      title="Botão de ícone com nome acessível"
                      code={`<button 
  className="p-2 rounded-full hover:bg-gray-100"
  aria-label="Favoritar item"
>
  <Heart size={20} />
</button>`}
                    />
                    
                    <CodeExample 
                      title="Botão com ícone e texto"
                      code={`<button className="flex items-center gap-2 px-4 py-2 rounded bg-primary-main text-white">
  <Download size={16} />
  <span>Download</span>
</button>`}
                    />
                    
                    <CodeExample 
                      title="Ícone decorativo"
                      code={`<div className="flex items-center gap-2">
  <Bell size={18} aria-hidden="true" />
  <span>Notificações</span>
</div>`}
                    />
                    
                    <CodeExample 
                      title="Estado de ícone"
                      code={`<button 
  className="p-2 rounded-full hover:bg-gray-100"
  aria-label="Favoritar item"
  aria-pressed={isFavorited}
>
  {isFavorited ? (
    <Heart size={20} className="text-red-500 fill-red-500" />
  ) : (
    <Heart size={20} />
  )}
</button>`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </TailwindTabs>
    </div>
  );
};

export default IconsPage;
