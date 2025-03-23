import React from 'react';
import StackedLayout from './StackedLayout';
import { Bell, Menu, Search, Globe, Rocket, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import amicciLogoLight from '@/pages/assets/Amicci-Logo_TurquesaClaro+Escuro.svg';
import amicciLogoDark from '@/pages/assets/Amicci-Logo_TurquesaClaro+Branco.svg';
import { ProfileButton } from '@/components/ui/profile-button';

export const LightBorderExample = () => {
  return (
    <StackedLayout
      variant="light-border"
      navigationContent={
        <>
          <div className="flex items-center gap-6">
            <div className="flex-shrink-0">
              <img className="h-8 w-auto" src={amicciLogoLight} alt="Amicci" />
            </div>
            <div className="hidden md:flex md:gap-6 md:ml-6">
              <a href="#" className="text-base font-medium leading-7 tracking-tight font-roboto text-gray-900">Dashboard</a>
              <a href="#" className="text-base font-medium leading-7 tracking-tight font-roboto text-gray-500 hover:text-gray-700">Equipe</a>
              <a href="#" className="text-base font-medium leading-7 tracking-tight font-roboto text-gray-500 hover:text-gray-700">Projetos</a>
              <a href="#" className="text-base font-medium leading-7 tracking-tight font-roboto text-gray-500 hover:text-gray-700">Calendário</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button type="button" className="relative rounded-full bg-white p-1 text-gray-950 hover:text-gray-700 focus:outline-none">
              <span className="sr-only">Ver notificações</span>
              <Bell className="h-6 w-6" aria-hidden="true" />
            </button>
            <ProfileButton 
              userName="Maria Silva"
              companyName="Empresa Ltda."
              showMenuIcon={false}
            />
          </div>
        </>
      }
    >
      <div className="h-96 rounded-lg border-4 border-dashed border-gray-200 relative"></div>
    </StackedLayout>
  );
};

export const DarkOverlapExample = () => {
  return (
    <StackedLayout
      variant="dark-overlap"
      navigationContent={
        <>
          <div className="flex flex-1 items-center">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Amicci</span>
              <img className="h-8 w-auto" src={amicciLogoDark} alt="Logo" />
            </a>
            <div className="ml-6 flex lg:gap-x-6">
              <a href="#" className="text-base font-medium leading-7 tracking-tight font-roboto text-white">Dashboard</a>
              <a href="#" className="text-base font-medium leading-7 tracking-tight font-roboto text-amicciDark-50 hover:text-white">Equipe</a>
              <a href="#" className="text-base font-medium leading-7 tracking-tight font-roboto text-amicciDark-50 hover:text-white">Projetos</a>
              <a href="#" className="text-base font-medium leading-7 tracking-tight font-roboto text-amicciDark-50 hover:text-white">Calendário</a>
            </div>
          </div>
          <div className="hidden lg:flex lg:items-center gap-4">
            <button type="button" className="relative p-1 text-white hover:text-amicciDark-100 focus:outline-none">
              <span className="sr-only">Ver notificações</span>
              <Bell className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </>
      }
    >
      <div className="h-96 rounded-lg border-4 border-dashed border-gray-200"></div>
    </StackedLayout>
  );
};

export const MarketplaceExample = () => {
  return (
    <StackedLayout
      variant="light-border"
      mainClassName="bg-white"
      headerClassName="bg-white"
      navigationContent={
        <>
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
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-end">
                <p className="text-sm font-medium">Maria Rita</p>
                <p className="text-xs text-gray-500">Nome da Empresa</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-white">
                OP
              </div>
              <Menu className="h-6 w-6" />
            </div>
          </div>
        </>
      }
      headerContent={<h1 className="text-3xl font-medium tracking-tight text-gray-900">Minha vitrine</h1>}
    >
      <div className="h-96 rounded-lg border-4 border-dashed border-gray-200 relative"></div>
    </StackedLayout>
  );
};

export const InstitutionalExample = () => {
  return (
    <StackedLayout
      variant="light-border"
      mainClassName="bg-white"
      headerClassName="bg-white"
      navigationContent={
        <>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-8 w-auto" src={amicciLogoLight} alt="Amicci" />
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
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
        </>
      }
      headerContent={<h1 className="text-3xl font-medium tracking-tight text-gray-900">Home</h1>}
    >
      <div className="h-96 rounded-lg border-4 border-dashed border-gray-200"></div>
    </StackedLayout>
  );
};
