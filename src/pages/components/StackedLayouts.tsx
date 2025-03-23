import React, { useState } from 'react';
import Header from '@/components/library-components/Header';
import { Link } from 'react-router-dom';
import { ShoppingCart, Bell, ChevronDown, Search, Menu, User, Code, Copy, CheckCheck, Rocket, Globe } from 'lucide-react';
import amicciLogo from '@/pages/assets/Amicci-Simbolo_Turquesa_Escuro.svg';
import amicciLogoDark from '@/pages/assets/Amicci-Logo_TurquesaClaro+Branco.svg';
import amicciLogoLight from '@/pages/assets/Amicci-Logo_TurquesaClaro+Escuro.svg';
import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { cn } from '@/lib/utils';
import { TailwindTabs } from '@/components/ui/tabs';
import StackedLayout from '@/components/application-shells/StackedLayout';
import { LightBorderExample, DarkOverlapExample, MarketplaceSellerExample, MarketplaceBuyerExample, InstitutionalExample } from '@/components/application-shells/StackedLayoutExamples';
import { ProfileButton } from '@/components/ui/profile-button';
import CodeBlock from '@/components/CodeBlock';

const StackedLayouts = () => {
  const [activeTab, setActiveTab] = useState('overview');
  return <div className="w-full animate-fade-in">
      <Header title="Stacked Layouts" description="Layouts empilhados (stacked) são uma estrutura comum para aplicações onde o cabeçalho permanece fixo no topo enquanto o conteúdo principal é rolável. Esses layouts proporcionam uma navegação clara e consistente para os usuários." type="components" />
        
      <TailwindTabs defaultValue="overview" className="mt-8" tabs={[{
      name: 'Visão geral',
      value: 'overview'
    }, {
      name: 'Uso no marketplace',
      value: 'marketplace'
    }, {
      name: 'Uso no site institucional',
      value: 'institutional'
    }]} variant="pillsGray" onChange={value => setActiveTab(value)} />

      {activeTab === 'overview' && <div className="space-y-12 mt-10">
          <LayoutComponent 
            title="Light nav with bottom border" 
            component={<LightNavBottomBorderWithReusable />} 
            code={lightNavBottomBorderCode}
          />
          
          <LayoutComponent 
            title="Light nav on gray background" 
            component={<LightNavGrayBackgroundWithReusable />} 
            code={lightNavGrayBackgroundCode}
          />
          
          <LayoutComponent 
            title="Branded nav with compact white page header" 
            component={<BrandedNavCompactHeaderWithReusable />} 
            code={brandedNavCompactHeaderCode}
          />
          
          <LayoutComponent 
            title="Branded nav with white page header" 
            component={<BrandedNavWithWhiteHeaderWithReusable />} 
            code={brandedNavWithWhiteHeaderCode}
          />
          
          <LayoutComponent 
            title="Brand nav with overlap" 
            component={<BrandNavWithOverlapWithReusable />} 
            code={brandNavWithOverlapCode}
          />
        </div>}

      {activeTab === 'marketplace' && <div className="space-y-12 mt-10">
          <LayoutComponent 
            title="Marketplace Seller Navigation" 
            component={<MarketplaceSellerExample />} 
            code={marketplaceSellerExampleCode}
          />
          
          <LayoutComponent 
            title="Marketplace Buyer Navigation" 
            component={<MarketplaceBuyerExample />} 
            code={marketplaceBuyerExampleCode}
          />
        </div>}

      {activeTab === 'institutional' && <div className="space-y-12 mt-10">
          <LayoutComponent 
            title="Institutional Site Navigation" 
            component={<InstitutionalExample />} 
            code={institutionalExampleCode}
          />
        </div>}
    </div>;
};

const LightNavBottomBorderWithReusable = () => (
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
            showMenuIcon={true}
            menuIcon={<Menu className="h-6 w-6" />}
          />
        </div>
      </>
    }
  >
    <div className="h-96 rounded-lg border-4 border-dashed border-gray-200"></div>
  </StackedLayout>
);

const LightNavGrayBackgroundWithReusable = () => (
  <StackedLayout
    variant="light-gray"
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
            showMenuIcon={true}
            menuIcon={<Menu className="h-6 w-6" />}
          />
        </div>
      </>
    }
  >
    <div className="h-96 rounded-lg border-4 border-dashed border-gray-200"></div>
  </StackedLayout>
);

const BrandedNavCompactHeaderWithReusable = () => (
  <StackedLayout
    variant="dark-compact"
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
          <IconButton 
            variant="outline-secondary" 
            icon={<Bell size={18} />}
            aria-label="Ver notificações"
          />
        </div>
      </>
    }
    headerContent={<h1 className="text-lg font-medium leading-6 text-gray-900">Dashboard</h1>}
  >
    <div className="h-96 rounded-lg border-4 border-dashed border-gray-200"></div>
  </StackedLayout>
);

const BrandedNavWithWhiteHeaderWithReusable = () => (
  <StackedLayout
    variant="dark-standard"
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
          <IconButton 
            variant="outline-secondary" 
            icon={<Bell size={18} />}
            aria-label="Ver notificações"
          />
        </div>
      </>
    }
    headerContent={<h1 className="text-3xl font-medium tracking-tight text-gray-900">Dashboard</h1>}
  >
    <div className="h-96 rounded-lg border-4 border-dashed border-gray-200"></div>
  </StackedLayout>
);

const BrandNavWithOverlapWithReusable = () => (
  <DarkOverlapExample />
);

const MarketplaceNavWithReusable = () => (
  <MarketplaceBuyerExample />
);

const InstitutionalNavWithReusable = () => (
  <InstitutionalExample />
);

const lightNavBottomBorderCode = `import React from 'react';
import { StackedLayout } from '@/components/application-shells/StackedLayout';
import { IconButton } from '@/components/ui/icon-button';
import { ProfileButton } from '@/components/ui/profile-button';
import { Bell, Menu } from 'lucide-react';
import amicciLogoLight from '@/pages/assets/Amicci-Logo_TurquesaClaro+Escuro.svg';

export const LightNavBottomBorder = () => (
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
            showMenuIcon={true}
            menuIcon={<Menu className="h-6 w-6" />}
          />
        </div>
      </>
    }
  >
    <div className="h-96 rounded-lg border-4 border-dashed border-gray-200"></div>
  </StackedLayout>
);`;

const lightNavGrayBackgroundCode = `import React from 'react';
import { StackedLayout } from '@/components/application-shells/StackedLayout';
import { IconButton } from '@/components/ui/icon-button';
import { ProfileButton } from '@/components/ui/profile-button';
import { Bell, Menu } from 'lucide-react';
import amicciLogoLight from '@/pages/assets/Amicci-Logo_TurquesaClaro+Escuro.svg';

export const LightNavGrayBackground = () => (
  <StackedLayout
    variant="light-gray"
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
            showMenuIcon={true}
            menuIcon={<Menu className="h-6 w-6" />}
          />
        </div>
      </>
    }
  >
    <div className="h-96 rounded-lg border-4 border-dashed border-gray-200"></div>
  </StackedLayout>
);`;

const brandedNavCompactHeaderCode = `import React from 'react';
import { StackedLayout } from '@/components/application-shells/StackedLayout';
import { IconButton } from '@/components/ui/icon-button';
import { Bell } from 'lucide-react';
import amicciLogoDark from '@/pages/assets/Amicci-Logo_TurquesaClaro+Branco.svg';

export const BrandedNavCompactHeader = () => (
  <StackedLayout
    variant="dark-compact"
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
          <IconButton 
            variant="outline-secondary" 
            icon={<Bell size={18} />}
            aria-label="Ver notificações"
          />
        </div>
      </>
    }
    headerContent={<h1 className="text-lg font-medium leading-6 text-gray-900">Dashboard</h1>}
  >
    <div className="h-96 rounded-lg border-4 border-dashed border-gray-200"></div>
  </StackedLayout>
);`;

const brandedNavWithWhiteHeaderCode = `import React from 'react';
import { StackedLayout } from '@/components/application-shells/StackedLayout';
import { IconButton } from '@/components/ui/icon-button';
import { Bell } from 'lucide-react';
import amicciLogoDark from '@/pages/assets/Amicci-Logo_TurquesaClaro+Branco.svg';

export const BrandedNavWithWhiteHeader = () => (
  <StackedLayout
    variant="dark-standard"
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
          <IconButton 
            variant="outline-secondary" 
            icon={<Bell size={18} />}
            aria-label="Ver notificações"
          />
        </div>
      </>
    }
    headerContent={<h1 className="text-3xl font-medium tracking-tight text-gray-900">Dashboard</h1>}
  >
    <div className="h-96 rounded-lg border-4 border-dashed border-gray-200"></div>
  </StackedLayout>
);`;

const brandNavWithOverlapCode = `import React from 'react';
import { StackedLayout } from '@/components/application-shells/StackedLayout';
import { IconButton } from '@/components/ui/icon-button';
import { Bell, Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProfileButton } from '@/components/ui/profile-button';
import amicciLogoDark from '@/pages/assets/Amicci-Logo_TurquesaClaro+Branco.svg';

export const BrandNavWithOverlap = () => (
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
              showMenuIcon={true}
              menuIcon={<Menu className="h-6 w-6 text-white" />}
            />
          </div>
        </div>
      </>
    }
    headerContent={
      <div className="mx-auto max-w-7xl">
        <div className="border-b border-gray-200 pb-5 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-medium tracking-tight text-gray-900">Projetos</h1>
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
);`;

const marketplaceSellerExampleCode = `import React from 'react';
import { StackedLayout } from '@/components/application-shells/StackedLayout';
import { Bell, Search, ChevronDown, Rocket, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProfileButton } from '@/components/ui/profile-button';
import amicciLogoLight from '@/pages/assets/Amicci-Logo_TurquesaClaro+Escuro.svg';

export const MarketplaceSellerExample = () => (
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
          <ProfileButton 
            userName="Amanda Silva"
            companyName="Empresa XYZ"
            showClientLogo={false}
            avatarText="AS"
            showMenuIcon={true}
            menuIcon={<Menu className="h-6 w-6" />}
          />
        </div>
      </>
    }
    headerContent={<h1 className="text-3xl font-medium tracking-tight text-gray-900">Minha vitrine</h1>}
  >
    <div className="h-96 rounded-lg border-4 border-dashed border-gray-200"></div>
  </StackedLayout>
);`;

const marketplaceBuyerExampleCode = `import React from 'react';
import { StackedLayout } from '@/components/application-shells/StackedLayout';
import { Bell, Search, Menu } from 'lucide-react';
import { ProfileButton } from '@/components/ui/profile-button';
import amicciLogoLight from '@/pages/assets/Amicci-Logo_TurquesaClaro+Escuro.svg';

export const MarketplaceBuyerExample = () => (
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
            <a href="#" className="text-base font-medium leading-7 tracking-tight font-roboto text-text-primary">Oportunidades</a>
            <a href="#" className="text-base font-medium leading-7 tracking-tight font-roboto text-gray-500 hover:text-gray-700">Planejamento</a>
            <a href="#" className="text-base font-medium leading-7 tracking-tight font-roboto text-gray-500 hover:text-gray-700">Projetos</a>
            <a href="#" className="text-base font-medium leading-7 tracking-tight font-roboto text-gray-500 hover:text-gray-700">SKUs</a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button type="button" className="relative rounded-full bg-white p-1 text-gray-950 hover:text-gray-700">
            <span className="sr-only">Ajuda</span>
            <Search className="h-6 w-6" aria-hidden="true" />
          </button>
          <button type="button" className="relative rounded-full bg-white p-1 text-gray-950 hover:text-gray-700">
            <span className="sr-only">Ver notificações</span>
            <Bell className="h-6 w-6" aria-hidden="true" />
          </button>
          <ProfileButton 
            userName="Carlos Mendes"
            companyName="Construção XYZ"
            showClientLogo={true}
            avatarText="CM"
            showMenuIcon={true}
            menuIcon={<Menu className="h-6 w-6" />}
          />
        </div>
      </>
    }
    headerContent={<h1 className="text-3xl font-medium tracking-tight text-gray-900">Oportunidades</h1>}
  >
    <div className="h-96 rounded-lg border-4 border-dashed border-gray-200"></div>
  </StackedLayout>
);`;

const institutionalExampleCode = `import React from 'react';
import { StackedLayout } from '@/components/application-shells/StackedLayout';
import { IconButton } from '@/components/ui/icon-button';
import { ChevronDown, Menu, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import amicciLogoLight from '@/pages/assets/Amicci-Logo_TurquesaClaro+Escuro.svg';

export const InstitutionalExample = () => (
  <StackedLayout
    variant="institutional"
    navigationContent={
      <>
        <div className="flex items-center flex-1">
          <div className="flex-shrink-0">
            <img className="h-8 w-auto" src={amicciLogoLight} alt="Amicci" />
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
            <a href="#" className="text-sm font-medium text-gray-900">Home</a>
            <div className="relative inline-block text-left group">
              <button className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-900">
                Products
                <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
              </button>
            </div>
            <div className="relative inline-block text-left group">
              <button className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-900">
                Solutions
                <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
              </button>
            </div>
            <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">Pricing</a>
            <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">Resources</a>
          </div>
        </div>
        
        <div className="flex items-center justify-end space-x-3">
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-1 text-gray-500">
              <Globe size={16} />
              <span className="text-sm">EN</span>
              <ChevronDown size={16} />
            </div>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Sign in</a>
            <Button size="sm">Get started</Button>
          </div>
          
          <div className="md:hidden">
            <IconButton 
              variant="outline-secondary" 
              icon={<Menu size={20} />} 
              aria-label="Menu"
            />
          </div>
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
              <Button variant="outline-default" size="lg">Live demo</Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="h-96 rounded-lg border-4 border-dashed border-gray-200 max-w-6xl mx-auto"></div>
    </div>
  </StackedLayout>
);`;

const LayoutComponent = ({ title, component, code }) => {
  const [showCode, setShowCode] = useState(false);
  
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center px-4">
        <h3 className="text-xl font-medium text-gray-900">{title}</h3>
        <button
          type="button"
          onClick={() => setShowCode(!showCode)}
          className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {showCode ? (
            <>
              <CheckCheck className="mr-1.5 h-4 w-4 text-gray-400" />
              Esconder código
            </>
          ) : (
            <>
              <Code className="mr-1.5 h-4 w-4 text-gray-400" />
              Ver código
            </>
          )}
        </button>
      </div>
      
      <div className="border rounded-lg overflow-hidden shadow-sm">
        <div className="bg-gray-100 w-full">
          {component}
        </div>
        
        {showCode && (
          <div className="border-t border-gray-200">
            <CodeBlock code={code} language="jsx" />
          </div>
        )}
      </div>
    </div>
  );
};

export default StackedLayouts;
