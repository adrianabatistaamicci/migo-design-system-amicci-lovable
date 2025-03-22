
import React from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import Header from '@/components/library-components/Header';
import { Menu, List, User } from 'lucide-react';
import { CustomProfileButton } from '@/components/ui/custom-profile-button';
import { cn } from '@/lib/utils';
import defaultLogo from '@/pages/assets/client-logo.svg';

const CustomProfileButtonPage = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Custom Profile Button"
        description="Componente de botão de perfil personalizado que exibe informações do usuário e oferece acesso a opções e configurações."
        type="components"
      />
      
      <div className="space-y-12 mt-10">
        <LayoutComponent 
          title="Custom Profile Button Padrão" 
          component={
            <div className="flex justify-center items-center p-4">
              <CustomProfileButton
                userName="Maria Rita"
                companyName="Nome da Empresa"
              />
            </div>
          } 
        />
        
        <LayoutComponent 
          title="Custom Profile Button com Hover" 
          component={
            <div className="flex flex-col gap-4 justify-center items-center p-4">
              <div className="mb-2 text-sm text-gray-500">Passe o mouse sobre o botão para ver o efeito hover</div>
              <CustomProfileButton
                userName="José Silva"
                companyName="Amicci Tech"
              />
            </div>
          } 
        />
        
        <LayoutComponent 
          title="Variação: Sem Logo da Empresa" 
          component={
            <div className="flex justify-center items-center p-4">
              <CustomProfileButton
                userName="Fernanda"
                companyName="Creative"
                showClientLogo={false}
              />
            </div>
          } 
        />
        
        <LayoutComponent 
          title="Variação: Ícone de Menu Personalizado" 
          component={
            <div className="flex justify-center items-center p-4">
              <CustomProfileButton
                userName="Tatiana"
                companyName="Studio"
                menuIcon={<User className="h-6 w-6" />}
              />
            </div>
          } 
        />
        
        <LayoutComponent 
          title="Variação: Nome Longo com Truncamento" 
          component={
            <div className="flex justify-center items-center p-4">
              <CustomProfileButton
                userName="Alessandra Montenegro da Silva"
                companyName="Empresa com Nome Muito Longo Ltda"
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
                  <h3 className="text-lg font-medium">Navbar com Custom Profile Button</h3>
                  <CustomProfileButton
                    userName="Amanda Silva"
                    companyName="Empresa XYZ"
                    showClientLogo={false}
                  />
                </div>
              </div>
              
              <div className="p-4 bg-white shadow-md rounded-md w-full max-w-xl">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Painel de Usuário</h3>
                  <CustomProfileButton
                    userName="Roberto Alves"
                    companyName="Marketing Pro"
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
                    <td className="px-6 py-4 text-sm text-gray-500">Nome da empresa/organização do usuário (obrigatório)</td>
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
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">maxTextLength</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">number</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Limite máximo de caracteres para nome e empresa (trunca e adiciona "...")</td>
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

export default CustomProfileButtonPage;
