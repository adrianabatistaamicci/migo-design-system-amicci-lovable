
import React, { useState } from 'react';
import Header from '@/components/library-components/Header';
import { ProfileButton } from '@/components/ui/profile-button';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Check, Menu, MoreHorizontal, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import CodeBlock from '@/components/CodeBlock';
import defaultLogo from '@/pages/assets/client-logo.svg';

const ProfileButtonEdit = () => {
  const [userName, setUserName] = useState('Maria Silva');
  const [companyName, setCompanyName] = useState('Amicci Tech');
  const [showLogo, setShowLogo] = useState(true);
  const [avatarText, setAvatarText] = useState('');
  const [variant, setVariant] = useState('default');
  const [size, setSize] = useState('default');
  const [menuIconType, setMenuIconType] = useState('menu');
  
  // Lista de ícones disponíveis
  const menuIcons = {
    menu: <Menu className="h-6 w-6" />,
    moreHorizontal: <MoreHorizontal className="h-6 w-6" />,
    user: <User className="h-6 w-6" />,
    check: <Check className="h-6 w-6" />,
  };
  
  const getCodeExample = () => {
    return `import { ProfileButton } from '@/components/ui/profile-button';

// Exemplo básico
<ProfileButton
  userName="${userName}"
  companyName="${companyName}"
  ${variant !== 'default' ? `variant="${variant}"` : ''}
  ${size !== 'default' ? `size="${size}"` : ''}
  ${!showLogo ? 'showClientLogo={false}' : ''}
  ${avatarText ? `avatarText="${avatarText}"` : ''}
  ${menuIconType !== 'menu' ? 'menuIcon={<' + menuIconType + ' className="h-6 w-6" />}' : ''}
/>`;
  };
  
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Editor de Profile Button"
        description="Componente interativo para editar o botão de perfil e visualizar mudanças em tempo real."
        type="components"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
        <div className="space-y-6 border rounded-lg p-6 bg-white">
          <h3 className="text-xl font-medium text-gray-900">Propriedades</h3>
          <Separator />
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="userName">Nome do Usuário</Label>
                <Input 
                  id="userName" 
                  value={userName} 
                  onChange={(e) => setUserName(e.target.value)} 
                  placeholder="Nome do usuário"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="companyName">Nome da Empresa</Label>
                <Input 
                  id="companyName" 
                  value={companyName} 
                  onChange={(e) => setCompanyName(e.target.value)} 
                  placeholder="Nome da empresa"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="avatarText">Texto do Avatar</Label>
                <Input 
                  id="avatarText" 
                  value={avatarText} 
                  onChange={(e) => setAvatarText(e.target.value)} 
                  placeholder="Deixe vazio para usar iniciais"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="menuIcon">Ícone do Menu</Label>
                <select 
                  id="menuIcon"
                  value={menuIconType}
                  onChange={(e) => setMenuIconType(e.target.value)}
                  className="w-full h-10 px-3 py-2 bg-white border border-gray-300 rounded-md"
                >
                  <option value="menu">Menu</option>
                  <option value="moreHorizontal">Mais Horizontal</option>
                  <option value="user">Usuário</option>
                  <option value="check">Check</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="variant">Variante</Label>
                <select 
                  id="variant"
                  value={variant}
                  onChange={(e) => setVariant(e.target.value)}
                  className="w-full h-10 px-3 py-2 bg-white border border-gray-300 rounded-md"
                >
                  <option value="default">Default</option>
                  <option value="outline">Outline</option>
                  <option value="filled">Filled</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="size">Tamanho</Label>
                <select 
                  id="size"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="w-full h-10 px-3 py-2 bg-white border border-gray-300 rounded-md"
                >
                  <option value="default">Default</option>
                  <option value="sm">Pequeno</option>
                  <option value="lg">Grande</option>
                </select>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 pt-2">
              <Switch 
                id="showLogo" 
                checked={showLogo}
                onCheckedChange={setShowLogo}
              />
              <Label htmlFor="showLogo">Mostrar Logo da Empresa</Label>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="border rounded-lg overflow-hidden">
            <div className="p-4 bg-gray-100 border-b">
              <h3 className="font-medium">Visualização</h3>
            </div>
            <div className="p-8 flex justify-center items-center bg-gray-50 min-h-[200px]">
              <ProfileButton
                userName={userName}
                companyName={companyName}
                variant={variant as "default" | "outline" | "filled"}
                size={size as "default" | "sm" | "lg"}
                showClientLogo={showLogo}
                avatarText={avatarText || undefined}
                menuIcon={menuIcons[menuIconType as keyof typeof menuIcons]}
                logoSrc={defaultLogo}
              />
            </div>
          </div>
          
          <div className="border rounded-lg overflow-hidden">
            <div className="p-4 bg-gray-100 border-b">
              <h3 className="font-medium">Código</h3>
            </div>
            <div className="bg-gray-50">
              <CodeBlock 
                code={getCodeExample()}
                language="jsx"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileButtonEdit;
