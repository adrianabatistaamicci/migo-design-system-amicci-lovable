import React from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import Header from '@/components/library-components/Header';
import { Menu, Bell, ChevronDown, Search, User, ShoppingCart, Rocket, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import amicciLogoLight from '@/pages/assets/Amicci-Logo_TurquesaClaro+Escuro.svg';
import amicciLogoDark from '@/pages/assets/Amicci-Logo_TurquesaClaro+Branco.svg';
import { ProfileButton } from '@/components/ui/profile-button';

const Navbar = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Navbar"
        description="Componente de navegação principal que fornece acesso a diferentes seções do site ou aplicativo."
        type="components"
      />
      
      <div className="space-y-12 mt-10">
        <LayoutComponent title="Navbar Institucional" component={<InstitutionalNav />} />
        <LayoutComponent title="Navbar Marketplace" component={<MarketplaceNav />} />
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
        <div className="bg-gray-100 w-full h-[160px] overflow-hidden">
          {component}
        </div>
      </div>
    </div>
  );
};

const MarketplaceNav = () => {
  return (
    <div className="min-h-[160px] w-full bg-white">
      <nav className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-[88px] items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-8 w-auto" src={amicciLogoLight} alt="Amicci" />
              </div>
              <div className="hidden md:ml-6 md:flex md:space-x-6">
                <a href="#" className="text-base font-medium leading-7 tracking-tight font-roboto text-text-primary">Minha vitrine</a>
                <a href="#" className="text-base font-medium leading-7 tracking-tight font-roboto text-gray-500 hover:text-gray-700">
                  Oportunidades
                  <ChevronDown className="ml-1 h-4 w-4 inline" />
                </a>
                <a href="#" className="text-base font-medium leading-7 tracking-tight font-roboto text-gray-500 hover:text-gray-700">Meus projetos</a>
                <a href="#" className="text-base font-medium leading-7 tracking-tight font-roboto text-gray-500 hover:text-gray-700">
                  Produtos lançados
                  <ChevronDown className="ml-1 h-4 w-4 inline" />
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="default" className="bg-amicci-500 hover:bg-amicci-600 flex items-center gap-2">
                <Rocket className="h-4 w-4" />
                Impulsionar negócios
              </Button>
              <button type="button" className="relative rounded-full bg-white p-1 text-gray-950 hover:text-gray-700">
                <span className="sr-only">Ajuda</span>
                <Search className="h-6 w-6" aria-hidden="true" />
              </button>
              <button type="button" className="relative rounded-full bg-white p-1 text-gray-950 hover:text-gray-700">
                <span className="sr-only">Ver notificações</span>
                <Bell className="h-6 w-6" aria-hidden="true" />
              </button>
              <ProfileButton 
                userName="Maria Rita"
                companyName="Nome da Empresa"
                showMenuIcon={true}
                menuIcon={<Menu className="h-6 w-6" />}
                avatarText="OP"
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

const InstitutionalNav = () => {
  return (
    <div className="min-h-[160px] w-full bg-white">
      <nav className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-[88px] items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-8 w-auto" src={amicciLogoLight} alt="Amicci" />
              </div>
              <div className="hidden md:ml-6 md:flex md:space-x-6">
                <a href="#" className="text-base font-medium leading-7 tracking-tight font-roboto text-gray-500 hover:text-gray-700">
                  Home
                  <ChevronDown className="ml-1 h-4 w-4 inline" />
                </a>
                <a href="#" className="text-base font-medium leading-7 tracking-tight font-roboto text-gray-500 hover:text-gray-700">
                  Plataforma
                  <ChevronDown className="ml-1 h-4 w-4 inline" />
                </a>
                <a href="#" className="text-base font-medium leading-7 tracking-tight font-roboto text-gray-500 hover:text-gray-700">Sobre</a>
                <a href="#" className="text-base font-medium leading-7 tracking-tight font-roboto text-gray-500 hover:text-gray-700">
                  Conteúdos
                  <ChevronDown className="ml-1 h-4 w-4 inline" />
                </a>
                <a href="#" className="text-base font-medium leading-7 tracking-tight font-roboto text-gray-500 hover:text-gray-700">Suporte</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Button variant="outline" className="rounded-l-md rounded-r-none border-r-0">
                  Login
                </Button>
                <Button variant="outline" className="rounded-l-none rounded-r-md">
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>
              <Button className="bg-amicci-500 hover:bg-amicci-600">Falar com especialista</Button>
              <Button variant="outline" className="p-2">
                <Globe className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
