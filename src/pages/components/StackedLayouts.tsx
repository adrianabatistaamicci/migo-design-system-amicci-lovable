import React, { useState } from 'react';
import Header from '@/components/library-components/Header';
import { Link } from 'react-router-dom';
import { ShoppingCart, Bell, ChevronDown, Search, Menu, User, Code, Copy, CheckCheck } from 'lucide-react';
import amicciLogo from '@/pages/assets/Amicci-Simbolo_Turquesa_Escuro.svg';
import amicciLogoDark from '@/pages/assets/Amicci-Logo_TurquesaClaro+Branco.svg';
import amicciLogoLight from '@/pages/assets/Amicci-Logo_TurquesaClaro+Escuro.svg';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
const StackedLayouts = () => {
  return <div className="w-full animate-fade-in">
      <Header title="Stacked Layouts" description="Layouts empilhados (stacked) são uma estrutura comum para aplicações onde o cabeçalho permanece fixo no topo enquanto o conteúdo principal é rolável. Esses layouts proporcionam uma navegação clara e consistente para os usuários." type="components" />

      <div className="space-y-12 mt-8">
        <LayoutComponent title="Light nav with bottom border" component={<LightNavBottomBorder />} />
        
        <LayoutComponent title="Light nav on gray background" component={<LightNavGrayBackground />} />
        
        <LayoutComponent title="Branded nav with compact white page header" component={<BrandedNavCompactHeader />} />
        
        <LayoutComponent title="Branded nav with white page header" component={<BrandedNavWithWhiteHeader />} />
        
        <LayoutComponent title="Brand nav with overlap" component={<BrandNavWithOverlap />} />
      </div>
    </div>;
};
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
  return <div className="space-y-2">
      <div className="px-4">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      </div>
      
      <div className="border rounded-lg overflow-hidden">
        <div className="bg-gray-100 w-full h-[500px] overflow-hidden">
          {component}
        </div>
        
        <div className="border-t border-gray-200 px-4 py-2 flex justify-between items-center bg-gray-50">
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
const BrandedNavWithWhiteHeader = () => {
  return <div className="min-h-[500px] w-full">
      <div className="bg-amicciDark-900">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 h-[88px] lg:px-8" aria-label="Global">
          <div className="flex flex-1 items-center">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Amicci</span>
              <img className="h-8 w-auto" src={amicciLogoDark} alt="Logo" />
            </a>
            <div className="ml-12 flex lg:gap-x-8">
              <a href="#" className="text-sm font-semibold leading-6 text-white">Dashboard</a>
              <a href="#" className="text-sm font-semibold leading-6 text-amicciDark-100 hover:text-white">Equipe</a>
              <a href="#" className="text-sm font-semibold leading-6 text-amicciDark-100 hover:text-white">Projetos</a>
              <a href="#" className="text-sm font-semibold leading-6 text-amicciDark-100 hover:text-white">Calendário</a>
            </div>
          </div>
          <div className="flex lg:hidden">
            <button type="button" className="inline-flex items-center justify-center rounded-md p-2.5 text-amicciDark-200">
              <span className="sr-only">Abrir menu principal</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:items-center">
            <button type="button" className="relative p-1 text-white hover:text-amicciDark-100 focus:outline-none">
              <span className="sr-only">Ver notificações</span>
              <Bell className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </div>

      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-medium tracking-tight text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="h-96 rounded-lg border-4 border-dashed border-gray-200"></div>
          </div>
        </div>
      </main>
    </div>;
};
const BrandNavWithOverlap = () => {
  return <div className="min-h-[500px] w-full">
      <div className="bg-amicciDark-900 pb-32">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 h-[88px] lg:px-8" aria-label="Global">
          <div className="flex flex-1 items-center">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Amicci</span>
              <img className="h-8 w-auto" src={amicciLogoDark} alt="Logo" />
            </a>
            <div className="ml-12 flex lg:gap-x-8">
              <a href="#" className="text-sm font-semibold leading-6 text-white">Dashboard</a>
              <a href="#" className="text-sm font-semibold leading-6 text-amicciDark-100 hover:text-white">Equipe</a>
              <a href="#" className="text-sm font-semibold leading-6 text-amicciDark-100 hover:text-white">Projetos</a>
              <a href="#" className="text-sm font-semibold leading-6 text-amicciDark-100 hover:text-white">Calendário</a>
            </div>
          </div>
          <div className="flex lg:hidden">
            <button type="button" className="inline-flex items-center justify-center rounded-md p-2.5 text-amicciDark-200">
              <span className="sr-only">Abrir menu principal</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:items-center">
            <button type="button" className="relative p-1 text-white hover:text-amicciDark-100 focus:outline-none">
              <span className="sr-only">Ver notificações</span>
              <Bell className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </div>

      <main className="-mt-32">
        <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-white p-6 shadow">
            <div className="h-96 rounded-lg border-4 border-dashed border-gray-200"></div>
          </div>
        </div>
      </main>
    </div>;
};
const BrandedNavCompactHeader = () => {
  return <div className="min-h-[500px] w-full">
      <div className="bg-amicciDark-900">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 h-[88px] lg:px-8" aria-label="Global">
          <div className="flex flex-1 items-center">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Amicci</span>
              <img className="h-8 w-auto" src={amicciLogoDark} alt="Logo" />
            </a>
            <div className="ml-12 flex lg:gap-x-8">
              <a href="#" className="text-sm font-semibold leading-6 text-white">Dashboard</a>
              <a href="#" className="text-sm font-semibold leading-6 text-amicciDark-50 hover:text-white">Equipe</a>
              <a href="#" className="text-sm font-semibold leading-6 text-amicciDark-100 hover:text-white">Projetos</a>
              <a href="#" className="text-sm font-semibold leading-6 text-amicciDark-100 hover:text-white">Calendário</a>
            </div>
          </div>
          <div className="flex lg:hidden">
            <button type="button" className="inline-flex items-center justify-center rounded-md p-2.5 text-amicciDark-200">
              <span className="sr-only">Abrir menu principal</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:items-center">
            <button type="button" className="relative p-1 text-white hover:text-amicciDark-100 focus:outline-none">
              <span className="sr-only">Ver notificações</span>
              <Bell className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </div>

      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-lg font-medium leading-6 text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="h-96 rounded-lg border-4 border-dashed border-gray-200"></div>
          </div>
        </div>
      </main>
    </div>;
};
const LightNavGrayBackground = () => {
  return <div className="min-h-[500px] w-full bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-[88px] items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-8 w-auto" src={amicciLogoLight} alt="Amicci" />
              </div>
              <div className="hidden md:ml-12 md:flex md:space-x-8">
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Dashboard</a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-500 hover:text-gray-700">Equipe</a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-500 hover:text-gray-700">Projetos</a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-500 hover:text-gray-700">Calendário</a>
              </div>
            </div>
            <div className="flex items-center">
              <button type="button" className="relative rounded-full bg-white p-1 text-gray-950 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-amicci-500 focus:ring-offset-2">
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">Ver notificações</span>
                <Bell className="h-6 w-6" aria-hidden="true" />
              </button>
              <div className="ml-2 -mr-2 flex items-center md:hidden">
                <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amicci-500">
                  <span className="absolute -inset-0.5"></span>
                  <span className="sr-only">Abrir menu principal</span>
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-10">
        <header>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-medium tracking-tight text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="px-4 py-8 sm:px-0">
              <div className="h-96 rounded-lg border-4 border-dashed border-gray-200 bg-white"></div>
            </div>
          </div>
        </main>
      </div>
    </div>;
};
const LightNavBottomBorder = () => {
  return <div className="min-h-[500px] w-full bg-white">
      <nav className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-[88px] items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-8 w-auto" src={amicciLogoLight} alt="Amicci" />
              </div>
              <div className="hidden md:ml-12 md:flex md:space-x-8">
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Dashboard</a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-500 hover:text-gray-700">Equipe</a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-500 hover:text-gray-700">Projetos</a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-500 hover:text-gray-700">Calendário</a>
              </div>
            </div>
            <div className="flex items-center">
              <button type="button" className="relative rounded-full bg-white p-1 text-gray-950 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-amicci-500 focus:ring-offset-2">
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">Ver notificações</span>
                <Bell className="h-6 w-6" aria-hidden="true" />
              </button>
              <div className="ml-2 -mr-2 flex items-center md:hidden">
                <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amicci-500">
                  <span className="absolute -inset-0.5"></span>
                  <span className="sr-only">Abrir menu principal</span>
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-10">
        <header>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-medium tracking-tight text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="px-4 py-8 sm:px-0">
              <div className="h-96 rounded-lg border-4 border-dashed border-gray-200"></div>
            </div>
          </div>
        </main>
      </div>
    </div>;
};
export default StackedLayouts;