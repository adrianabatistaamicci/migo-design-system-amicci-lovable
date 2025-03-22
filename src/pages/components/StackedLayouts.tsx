import React, { useState } from 'react';
import Header from '@/components/library-components/Header';
import { Link } from 'react-router-dom';
import { ShoppingCart, Bell, ChevronDown, Search, Menu, User, Code, Copy, CheckCheck, Rocket, Globe } from 'lucide-react';
import amicciLogo from '@/pages/assets/Amicci-Simbolo_Turquesa_Escuro.svg';
import amicciLogoDark from '@/pages/assets/Amicci-Logo_TurquesaClaro+Branco.svg';
import amicciLogoLight from '@/pages/assets/Amicci-Logo_TurquesaClaro+Escuro.svg';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { TailwindTabs } from '@/components/ui/tabs';
import StackedLayout from '@/components/application-shells/StackedLayout';
import { LightBorderExample, DarkOverlapExample, MarketplaceExample } from '@/components/application-shells/StackedLayoutExamples';

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
          <LayoutComponent title="Light nav with bottom border" component={<LightNavBottomBorderWithReusable />} />
          
          <LayoutComponent title="Light nav on gray background" component={<LightNavGrayBackgroundWithReusable />} />
          
          <LayoutComponent title="Branded nav with compact white page header" component={<BrandedNavCompactHeaderWithReusable />} />
          
          <LayoutComponent title="Branded nav with white page header" component={<BrandedNavWithWhiteHeaderWithReusable />} />
          
          <LayoutComponent title="Brand nav with overlap" component={<BrandNavWithOverlapWithReusable />} />
        </div>}

      {activeTab === 'marketplace' && <div className="space-y-12 mt-10">
          <LayoutComponent title="Marketplace Navigation" component={<MarketplaceNavWithReusable />} />
        </div>}

      {activeTab === 'institutional' && <div className="space-y-12 mt-10">
          <LayoutComponent title="Institutional Site Navigation" component={<InstitutionalNavWithReusable />} />
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
        <div className="flex items-center">
          <button type="button" className="relative rounded-full bg-white p-1 text-gray-950 hover:text-gray-700 focus:outline-none">
            <span className="sr-only">Ver notificações</span>
            <Bell className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </>
    }
    headerContent={<h1 className="text-3xl font-medium tracking-tight text-gray-900">Dashboard</h1>}
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
        <div className="flex items-center">
          <button type="button" className="relative rounded-full bg-white p-1 text-gray-950 hover:text-gray-700 focus:outline-none">
            <span className="sr-only">Ver notificações</span>
            <Bell className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </>
    }
    headerContent={<h1 className="text-3xl font-medium tracking-tight text-gray-900">Dashboard</h1>}
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
        <div className="hidden lg:flex lg:items-center">
          <button type="button" className="relative p-1 text-white hover:text-amicciDark-100 focus:outline-none">
            <span className="sr-only">Ver notificações</span>
            <Bell className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
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
        <div className="hidden lg:flex lg:items-center">
          <button type="button" className="relative p-1 text-white hover:text-amicciDark-100 focus:outline-none">
            <span className="sr-only">Ver notificações</span>
            <Bell className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
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
  <MarketplaceExample />
);

const InstitutionalNavWithReusable = () => (
  <StackedLayout
    variant="light-border"
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

const LayoutComponent = ({
  title,
  component
}) => {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return <div className="space-y-3">
      <div className="px-4">
        <h3 className="text-xl font-medium text-gray-900">{title}</h3>
      </div>
      
      <div className="border rounded-lg overflow-hidden shadow-sm">
        <div className="bg-gray-100 w-full h-[500px] overflow-hidden">
          {component}
        </div>
        
        <div className="border-t border-gray-200 px-4 py-3 flex justify-between items-center bg-gray-50">
          <Button variant="ghost" size="sm" onClick={() => setShowCode(!showCode)} className="flex items-center gap-1 text-sm">
            <Code size={16} />
            <span>{showCode ? 'Hide code' : 'Show code'}</span>
          </Button>
          
          <Button variant="ghost" size="sm" onClick={copyToClipboard} className="flex items-center gap-1 text-sm">
            {copied ? <>
                <CheckCheck size={16} />
                <span>Copied</span>
              </> : <>
                <Copy size={16} />
                <span>Copy</span>
              </>}
          </Button>
        </div>
        
        {showCode && <div className="border-t p-4 bg-gray-50 overflow-x-auto">
            <pre className="text-sm">
              <code>{`// Component code would go here
// This is a placeholder for the actual code
// In a real implementation, each component's code would be shown here`}</code>
            </pre>
          </div>}
      </div>
    </div>;
};

export default StackedLayouts;
