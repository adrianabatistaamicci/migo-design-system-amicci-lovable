
import React, { useState } from 'react';
import Header from '@/components/library-components/Header';
import { Menu, List, User, Settings } from 'lucide-react';
import { CustomProfileButton } from '@/components/ui/custom-profile-button';
import { cn } from '@/lib/utils';
import defaultLogo from '@/pages/assets/client-logo.svg';
import { Button } from '@/components/ui/button';

const CustomProfileButtonPage = () => {
  const [innerSpacing, setInnerSpacing] = useState({
    container: "px-4 py-1",
    logo: "",
    avatar: "",
    text: "",
    menu: "px-4"
  });
  
  const [gap, setGap] = useState("gap-8");
  const [selectedVariant, setSelectedVariant] = useState("default");
  const [selectedSize, setSelectedSize] = useState("default");
  const [showLogo, setShowLogo] = useState(true);
  const [menuIconType, setMenuIconType] = useState("menu");

  const getMenuIcon = () => {
    switch(menuIconType) {
      case "list": return <List className="h-6 w-6" />;
      case "settings": return <Settings className="h-6 w-6" />;
      default: return <Menu className="h-6 w-6" />;
    }
  };
  
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Custom Profile Button"
        description="Componente de botão de perfil independente com controle total de espaçamentos internos."
        type="components"
      />
      
      <div className="space-y-12 mt-10">
        <div className="space-y-3">
          <div className="px-4">
            <h3 className="text-xl font-medium text-gray-900">Visualização</h3>
          </div>
          
          <div className="border rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-100 w-full py-8 flex justify-center items-center">
              <CustomProfileButton
                userName="Maria Silva"
                companyName="Amicci Tech"
                variant={selectedVariant as any}
                size={selectedSize as any}
                showClientLogo={showLogo}
                menuIcon={getMenuIcon()}
                innerSpacing={innerSpacing}
                gap={gap}
              />
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="px-4">
            <h3 className="text-xl font-medium text-gray-900">Configuração de Espaçamentos</h3>
          </div>
          
          <div className="border rounded-lg overflow-hidden shadow-sm">
            <div className="bg-white w-full p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Espaçamento do Container</h4>
                  <input 
                    type="text" 
                    value={innerSpacing.container} 
                    onChange={(e) => setInnerSpacing({...innerSpacing, container: e.target.value})}
                    className="w-full p-2 border rounded"
                    placeholder="px-4 py-1"
                  />
                  <p className="text-sm text-gray-500 mt-1">Ex: px-4 py-1, p-2, etc.</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Espaçamento entre Elementos (Gap)</h4>
                  <input 
                    type="text" 
                    value={gap} 
                    onChange={(e) => setGap(e.target.value)}
                    className="w-full p-2 border rounded"
                    placeholder="gap-8"
                  />
                  <p className="text-sm text-gray-500 mt-1">Ex: gap-2, gap-4, gap-8, etc.</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Espaçamento do Logo</h4>
                  <input 
                    type="text" 
                    value={innerSpacing.logo} 
                    onChange={(e) => setInnerSpacing({...innerSpacing, logo: e.target.value})}
                    className="w-full p-2 border rounded"
                    placeholder="p-1, etc."
                  />
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Espaçamento do Avatar</h4>
                  <input 
                    type="text" 
                    value={innerSpacing.avatar} 
                    onChange={(e) => setInnerSpacing({...innerSpacing, avatar: e.target.value})}
                    className="w-full p-2 border rounded"
                    placeholder="p-1, etc."
                  />
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Espaçamento do Texto</h4>
                  <input 
                    type="text" 
                    value={innerSpacing.text} 
                    onChange={(e) => setInnerSpacing({...innerSpacing, text: e.target.value})}
                    className="w-full p-2 border rounded"
                    placeholder="px-2, etc."
                  />
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Espaçamento do Menu</h4>
                  <input 
                    type="text" 
                    value={innerSpacing.menu} 
                    onChange={(e) => setInnerSpacing({...innerSpacing, menu: e.target.value})}
                    className="w-full p-2 border rounded"
                    placeholder="px-4, etc."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="px-4">
            <h3 className="text-xl font-medium text-gray-900">Outras Configurações</h3>
          </div>
          
          <div className="border rounded-lg overflow-hidden shadow-sm">
            <div className="bg-white w-full p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Variante</h4>
                  <div className="flex space-x-2">
                    {["default", "outline", "filled"].map(variant => (
                      <Button 
                        key={variant}
                        onClick={() => setSelectedVariant(variant)}
                        variant={selectedVariant === variant ? "default" : "outline"}
                        size="sm"
                      >
                        {variant}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Tamanho</h4>
                  <div className="flex space-x-2">
                    {["sm", "default", "lg"].map(size => (
                      <Button 
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        variant={selectedSize === size ? "default" : "outline"}
                        size="sm"
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Exibir Logo</h4>
                  <Button 
                    onClick={() => setShowLogo(!showLogo)}
                    variant={showLogo ? "default" : "outline"}
                    size="sm"
                  >
                    {showLogo ? "Mostrar" : "Ocultar"}
                  </Button>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Ícone de Menu</h4>
                  <div className="flex space-x-2">
                    {["menu", "list", "settings"].map(icon => (
                      <Button 
                        key={icon}
                        onClick={() => setMenuIconType(icon)}
                        variant={menuIconType === icon ? "default" : "outline"}
                        size="sm"
                      >
                        {icon}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="px-4">
            <h3 className="text-xl font-medium text-gray-900">Código Gerado</h3>
          </div>
          
          <div className="border rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-900 text-gray-100 w-full p-6 overflow-x-auto">
              <pre className="text-sm">
{`<CustomProfileButton
  userName="Maria Silva"
  companyName="Amicci Tech"
  variant="${selectedVariant}"
  size="${selectedSize}"
  showClientLogo={${showLogo}}
  menuIcon={<${menuIconType === 'menu' ? 'Menu' : menuIconType === 'list' ? 'List' : 'Settings'} className="h-6 w-6" />}
  innerSpacing={{
    container: "${innerSpacing.container}",
    logo: "${innerSpacing.logo}",
    avatar: "${innerSpacing.avatar}",
    text: "${innerSpacing.text}",
    menu: "${innerSpacing.menu}"
  }}
  gap="${gap}"
/>`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomProfileButtonPage;
