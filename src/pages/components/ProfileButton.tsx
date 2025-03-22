
import React from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import Header from '@/components/library-components/Header';
import { Menu, List, User } from 'lucide-react';
import { ProfileButton } from '@/components/ui/profile-button';
import { cn } from '@/lib/utils';

const ProfileButtonPage = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Profile Button"
        description="Componente de botão de perfil que exibe informações do usuário e oferece acesso a opções e configurações."
        type="components"
      />
      
      <div className="space-y-12 mt-10">
        <LayoutComponent 
          title="Profile Button Padrão" 
          component={
            <div className="flex justify-center items-center p-4">
              <ProfileButton
                userName="Maria Rita"
                companyName="Nome da Empresa"
              />
            </div>
          } 
        />
        
        <LayoutComponent 
          title="Variantes do Profile Button" 
          component={
            <div className="flex flex-col gap-4 justify-center items-center p-4">
              <ProfileButton
                userName="José Silva"
                companyName="Amicci Tech"
                variant="default"
              />
              
              <ProfileButton
                userName="Ana Oliveira"
                companyName="Global Solutions"
                variant="outline"
                menuIcon={<List className="h-6 w-6" />}
              />
              
              <ProfileButton
                userName="Carlos Mendes"
                companyName="Inovação Digital"
                variant="filled"
                showClientLogo={false}
              />
            </div>
          } 
        />
        
        <LayoutComponent 
          title="Profile Button com Iniciais Personalizadas" 
          component={
            <div className="flex justify-center items-center p-4">
              <ProfileButton
                userName="Fernanda Rodrigues"
                companyName="Creative Design"
                avatarText="FR"
              />
            </div>
          } 
        />
      </div>
    </div>
  );
};

const LayoutComponent = ({
  title,
  component
}) => {
  return (
    <div className="space-y-3">
      <div className="px-4">
        <h3 className="text-xl font-medium text-gray-900">{title}</h3>
      </div>
      
      <div className="border rounded-lg overflow-hidden shadow-sm">
        <div className="bg-gray-100 w-full py-8 overflow-hidden">
          {component}
        </div>
      </div>
    </div>
  );
};

export default ProfileButtonPage;
