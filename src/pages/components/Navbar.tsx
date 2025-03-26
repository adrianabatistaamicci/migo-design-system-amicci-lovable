
import React from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import Header from '@/components/library-components/Header';
import { Menu, Bell, ChevronDown, Search, User, ShoppingCart, Rocket, Globe, Heart, MessageSquare, HelpCircle, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import amicciLogoLight from '@/pages/assets/Amicci-Logo_TurquesaClaro+Escuro.svg';
import amicciLogoDark from '@/pages/assets/Amicci-Logo_TurquesaClaro+Branco.svg';
import { ProfileButton } from '@/components/ui/profile-button';
import defaultLogo from '@/pages/assets/client-logo.svg';
import amySvg from '@/pages/assets/amy.svg';
import Lottie from 'lottie-react';
import animationData from '@/pages/assets/lottie-dot.json';
import { IconButton } from '@/components/ui/icon-button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import CodeBlock from '@/components/CodeBlock';

const Navbar = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Navbar"
        description="Componente de navegação principal que fornece acesso a diferentes seções do site ou aplicativo."
        type="components"
      />
      
      <div className="space-y-12 mt-10">
        <LayoutComponent 
          title="Navbar Institucional" 
          component={<InstitutionalNav />} 
          code={institutionalNavCode}
        />
        <LayoutComponent 
          title="Navbar Buyer" 
          component={<BuyerNav />} 
          code={buyerNavCode}
        />
        <LayoutComponent 
          title="Navbar Seller" 
          component={<SellerNav />} 
          code={sellerNavCode}
        />
      </div>
    </div>
  );
};

const LayoutComponent = ({
  title,
  component,
  code
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
        {code && (
          <CodeBlock code={code} language="jsx" title={title} />
        )}
      </div>
    </div>
  );
};

const SellerNav = () => {
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
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <IconButton variant="outline-secondary" icon={<HelpCircle size={18} />} aria-label="Ajuda" />
                  </TooltipTrigger>
                  <TooltipContent>
                    Ajuda
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <IconButton variant="outline-secondary" icon={<Bell size={18} />} aria-label="Ver notificações" />
                  </TooltipTrigger>
                  <TooltipContent>
                    Notificações
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <ProfileButton 
                userName="Amanda Silva"
                companyName="Empresa XYZ"
                showClientLogo={false}
                avatarText="AS"
                showMenuIcon={false}
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
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <IconButton variant="outline-secondary" icon={<Globe size={18} />} aria-label="Idioma" />
                  </TooltipTrigger>
                  <TooltipContent>
                    Idioma
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

const BuyerNav = () => {
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
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <IconButton variant="outline-secondary" icon={<HelpCircle size={18} />} aria-label="Ajuda" />
                  </TooltipTrigger>
                  <TooltipContent>
                    Ajuda
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <IconButton variant="outline-secondary" icon={<Bell size={18} />} aria-label="Ver notificações" />
                  </TooltipTrigger>
                  <TooltipContent>
                    Notificações
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
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
          </div>
        </div>
      </nav>
    </div>
  );
};

const institutionalNavCode = `<nav className="bg-white border-b border-gray-200">
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
        
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <IconButton variant="outline-secondary" icon={<Globe size={18} />} aria-label="Idioma" />
            </TooltipTrigger>
            <TooltipContent>
              Idioma
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  </div>
</nav>`;

const buyerNavCode = `<nav className="bg-white border-b border-gray-200">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-[88px] items-center justify-between">
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
        
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <IconButton variant="outline-secondary" icon={<HelpCircle size={18} />} aria-label="Ajuda" />
            </TooltipTrigger>
            <TooltipContent>
              Ajuda
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <IconButton variant="outline-secondary" icon={<Bell size={18} />} aria-label="Ver notificações" />
            </TooltipTrigger>
            <TooltipContent>
              Notificações
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
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
    </div>
  </div>
</nav>`;

const sellerNavCode = `<nav className="bg-white border-b border-gray-200">
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
        
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <IconButton variant="outline-secondary" icon={<HelpCircle size={18} />} aria-label="Ajuda" />
            </TooltipTrigger>
            <TooltipContent>
              Ajuda
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <IconButton variant="outline-secondary" icon={<Bell size={18} />} aria-label="Ver notificações" />
            </TooltipTrigger>
            <TooltipContent>
              Notificações
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        <ProfileButton 
          userName="Amanda Silva"
          companyName="Empresa XYZ"
          showClientLogo={false}
          avatarText="AS"
          showMenuIcon={false}
        />
      </div>
    </div>
  </div>
</nav>`;

export default Navbar;
