
import React from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import Header from '@/components/library-components/Header';
import { Menu, List, User } from 'lucide-react';
import { ProfileButton } from '@/components/ui/profile-button';
import { cn } from '@/lib/utils';
import defaultLogo from '@/pages/assets/client-logo.svg';

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
        
        <LayoutComponent 
          title="Profile Button com Tamanhos Diferentes" 
          component={
            <div className="flex flex-col gap-4 justify-center items-center p-4">
              <ProfileButton
                userName="Ricardo Santos"
                companyName="Tech Solutions"
                size="sm"
              />
              
              <ProfileButton
                userName="Luciana Pereira"
                companyName="Design Agency"
                size="default"
              />
              
              <ProfileButton
                userName="Eduardo Lima"
                companyName="Marketing Group"
                size="lg"
              />
            </div>
          } 
        />
        
        <LayoutComponent 
          title="Profile Button com Logo Personalizado" 
          component={
            <div className="flex justify-center items-center p-4">
              <ProfileButton
                userName="Tatiana Rocha"
                companyName="Studio Design"
                logoText="SD"
                logoSrc={null}
              />
            </div>
          } 
        />
        
        <LayoutComponent 
          title="Profile Button com Espaçamento Personalizado" 
          component={
            <div className="flex flex-col gap-4 justify-center items-center p-4">
              <ProfileButton
                userName="Bruno Costa"
                companyName="Tech Solutions"
                innerSpacing={{
                  container: "px-6 py-2",
                  logo: "pr-2",
                  avatar: "",
                  text: "px-4",
                  menu: "pl-2"
                }}
                gap="gap-4"
              />
              
              <ProfileButton
                userName="Camila Alves"
                companyName="Design Pro"
                innerSpacing={{
                  container: "px-8 py-3",
                  logo: "",
                  avatar: "",
                  text: "",
                  menu: ""
                }}
                gap="gap-12"
              />
              
              <ProfileButton
                userName="Daniel Santos"
                companyName="Marketing Digital"
                innerSpacing={{
                  container: "px-2 py-1",
                  logo: "",
                  avatar: "",
                  text: "",
                  menu: ""
                }}
                gap="gap-2"
                showClientLogo={false}
              />
            </div>
          } 
        />
        
        <LayoutComponent 
          title="Exemplos de Uso" 
          component={
            <div className="flex flex-col gap-6 justify-center items-center p-4">
              <div className="p-4 bg-white shadow-md rounded-md w-full max-w-xl">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Navbar com Profile Button</h3>
                  <ProfileButton
                    userName="Amanda Silva"
                    size="sm"
                    showClientLogo={false}
                    innerSpacing={{
                      container: "px-3 py-1",
                      menu: "pl-2"
                    }}
                    gap="gap-4"
                  />
                </div>
              </div>
              
              <div className="p-4 bg-white shadow-md rounded-md w-full max-w-xl">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Painel de Usuário</h3>
                  <ProfileButton
                    userName="Roberto Alves"
                    companyName="Marketing Pro"
                    variant="filled"
                  />
                </div>
              </div>
            </div>
          } 
        />
        
        <div className="space-y-3">
          <div className="px-4">
            <h3 className="text-xl font-medium text-gray-900">API do Componente</h3>
          </div>
          
          <div className="border rounded-lg overflow-hidden shadow-sm bg-white p-6">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Propriedade</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Padrão</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descrição</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">userName</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Nome do usuário exibido no botão</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">companyName</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Nome da empresa/organização do usuário</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">variant</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">"default" | "outline" | "filled"</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">"default"</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Variante visual do botão</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">size</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">"default" | "sm" | "lg"</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">"default"</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Tamanho do botão</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">logoText</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">"Clientlogo"</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Texto alternativo para o logo da empresa</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">logoSrc</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                    <td className="px-6 py-4 text-sm text-gray-500">URL da imagem de logo da empresa</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">avatarText</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Iniciais do nome</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Texto exibido no avatar (se não houver imagem)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">avatarSrc</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                    <td className="px-6 py-4 text-sm text-gray-500">URL da imagem de avatar do usuário</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">showClientLogo</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">true</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Controla a exibição do logo da empresa</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">menuIcon</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">React.ReactNode</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">&lt;Menu /&gt;</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Ícone do menu (normalmente um ícone de hambúrguer)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">innerSpacing</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Object</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{'{ container: "px-4 py-1", ... }'}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Controla o espaçamento interno de cada parte do botão</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">gap</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">"gap-8"</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Controla o espaçamento entre os elementos (classe gap do Tailwind)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
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
