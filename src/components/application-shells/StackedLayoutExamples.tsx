import React from 'react';
import StackedLayout from './StackedLayout';
import { Link } from 'react-router-dom';
import { ShoppingCart, Bell, ChevronDown, Search, Menu, User, Rocket, Globe, HelpCircle, Sparkles } from 'lucide-react';
import amicciLogo from '@/pages/assets/Amicci-Simbolo_Turquesa_Escuro.svg';
import amicciLogoDark from '@/pages/assets/Amicci-Logo_TurquesaClaro+Branco.svg';
import amicciLogoLight from '@/pages/assets/Amicci-Logo_TurquesaClaro+Escuro.svg';
import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { cn } from '@/lib/utils';
import { ProfileButton } from '@/components/ui/profile-button';
import defaultLogo from '@/pages/assets/client-logo.svg';
import Lottie from 'lottie-react';
import animationData from '@/pages/assets/lottie-dot.json';

export const DarkOverlapExample = () => {
  return (
    <StackedLayout
      variant="dark-overlap"
      navigationContent={
        <>
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-1 items-center space-x-4">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Amicci</span>
                <img className="h-8 w-auto" src={amicciLogoDark} alt="Logo" />
              </a>
              <div className="w-full max-w-md">
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Search className="h-4 w-4 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    className="block w-full rounded-md border-0 bg-white/10 py-1.5 pl-10 pr-3 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-white sm:text-sm sm:leading-6"
                    placeholder="Buscar"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <IconButton 
                variant="outline-secondary" 
                icon={<Bell size={18} />}
                aria-label="Ver notificações"
              />
              <ProfileButton 
                userName="Maria Silva"
                companyName="Empresa Ltda."
                showMenuIcon={false}
              />
            </div>
          </div>
        </>
      }
      headerContent={
        <div className="mx-auto max-w-7xl">
          <div className="border-b border-gray-200 pb-5 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-medium leading-6 text-gray-900">Dashboard</h1>
              <p className="mt-2 max-w-4xl text-sm text-gray-500">Todos os projetos ativos, incluindo aqueles em fase de desenvolvimento e em produção.</p>
            </div>
            <div className="flex gap-2">
              <Button>Novo projeto</Button>
            </div>
          </div>
        </div>
      }
    >
      <div className="h-96 rounded-lg border-4 border-dashed border-gray-200"></div>
    </StackedLayout>
  );
};

export const LightBorderExample = () => {
  return (
    <StackedLayout
      variant="light-border"
      headerClassName="bg-white"
      navigationContent={
        <>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-8 w-auto" src={amicciLogoLight} alt="Amicci" />
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-6">
              <a href="#" className="text-base font-medium leading-7 tracking-tight font-roboto text-gray-900">Dashboard</a>
              <a href="#" className="text-base font-medium leading-7 tracking-tight font-roboto text-gray-500 hover:text-gray-700">Equipe</a>
              <a href="#" className="text-base font-medium leading-7 tracking-tight font-roboto text-gray-500 hover:text-gray-700">Projetos</a>
              <a href="#" className="text-base font-medium leading-7 tracking-tight font-roboto text-gray-500 hover:text-gray-700">Calendário</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <IconButton 
              variant="outline-secondary" 
              icon={<Bell size={18} />}
              aria-label="Ver notificações"
            />
            <ProfileButton 
              userName="Maria Silva"
              companyName="Empresa Ltda."
              showMenuIcon={false}
            />
          </div>
        </>
      }
      headerContent={<h1 className="text-3xl font-medium tracking-tight text-gray-900">Dashboard</h1>}
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
            
            <IconButton variant="outline-secondary" icon={<HelpCircle size={18} />} aria-label="Ajuda" />
            <IconButton variant="outline-secondary" icon={<Bell size={18} />} aria-label="Ver notificações" />
            
            <ProfileButton 
              userName="Amanda Silva"
              companyName="Empresa XYZ"
              showClientLogo={false}
              avatarText="AS"
              showMenuIcon={false}
            />
          </div>
        </>
      }
      headerContent={<h1 className="text-3xl font-medium tracking-tight text-gray-900">Minha vitrine</h1>}
    >
      <div className="h-96 rounded-lg border-4 border-dashed border-gray-200"></div>
    </StackedLayout>
  );
};

export const MarketplaceBuyerExample = () => {
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
              <a href="#" className="text-base font-medium leading-7 tracking-tight font-roboto text-gray-500 hover:text-gray-700">
                Oportunidades
                <ChevronDown className="ml-1 h-4 w-4 inline" />
              </a>
              <a href="#" className="text-base font-medium leading-7 tracking-tight font-roboto text-gray-500 hover:text-gray-700">Planejamento</a>
              <a href="#" className="text-base font-medium leading-7 tracking-tight font-roboto text-text-primary">Projetos</a>
              <a href="#" className="text-base font-medium leading-7 tracking-tight font-roboto text-gray-500 hover:text-gray-700">
                SKUs
                <ChevronDown className="ml-1 h-4 w-4 inline" />
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline-secondary" className="flex items-center">
              <Sparkles className="h-6 w-6 text-tertiary-main mr-1" />
              <span className="text-text-primary mr-0">Amy</span>
              <div className="h-12 w-8 flex items-center justify-center">
                <Lottie animationData={animationData} loop={true} autoplay={true} style={{
                  height: '100%',
                  width: '100%'
                }} />
              </div>
            </Button>
            
            <IconButton variant="outline-secondary" icon={<HelpCircle size={18} />} aria-label="Ajuda" />
            <IconButton variant="outline-secondary" icon={<Bell size={18} />} aria-label="Ver notificações" />
            
            <ProfileButton 
              logoSrc={defaultLogo}
              companyName=""
              userName=""
              showClientLogo={true}
              showAvatar={true}
              showMenuIcon={false}
              avatarText="AA"
            />
          </div>
        </>
      }
      headerContent={<h1 className="text-3xl font-medium tracking-tight text-gray-900">Meus Projetos</h1>}
    >
      <div className="h-96 rounded-lg border-4 border-dashed border-gray-200"></div>
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
            
            <IconButton variant="outline-secondary" icon={<Globe size={18} />} aria-label="Idioma" />
          </div>
        </>
      }
    >
      <div className="bg-white">
        <div className="mx-auto max-w-6xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Design to deliver</span>{' '}
              <span className="block text-primary-main xl:inline">better experiences</span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
              Our platform helps your business deliver exceptional customer experiences through thoughtful design and seamless integrations.
            </p>
            <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Button size="lg">Get started</Button>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Button variant="outline" size="lg">Live demo</Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="h-96 rounded-lg border-4 border-dashed border-gray-200 max-w-6xl mx-auto"></div>
      </div>
    </StackedLayout>
  );
};
