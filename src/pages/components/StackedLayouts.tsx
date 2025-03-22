
import React from 'react';
import Header from '@/components/library-components/Header';
import { Link } from 'react-router-dom';
import { ShoppingCart, Bell, ChevronDown, Search, Menu, User } from 'lucide-react';
import amicciLogo from '@/pages/assets/Amicci-Simbolo_Turquesa_Escuro.svg';

const StackedLayouts = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Layouts"
        description="Layouts empilhados (stacked) são uma estrutura comum para aplicações onde o cabeçalho permanece fixo no topo enquanto o conteúdo principal é rolável. Esses layouts proporcionam uma navegação clara e consistente para os usuários."
        type="components"
      />

      <div className="space-y-12 mt-8">
        <LayoutComponent 
          title="Two-row navigation with overlap"
          component={<TwoRowNavWithOverlap />}
        />
        
        <LayoutComponent 
          title="Dark nav with compact white page header"
          component={<DarkNavWithWhiteHeader />}
        />
        
        <LayoutComponent 
          title="Branded nav with white page header"
          component={<BrandedNavWithWhiteHeader />}
        />
        
        <LayoutComponent 
          title="Brand nav with overlap"
          component={<BrandNavWithOverlap />}
        />
        
        <LayoutComponent 
          title="Branded nav with compact white page header"
          component={<BrandedNavCompactHeader />}
        />
        
        <LayoutComponent 
          title="Light nav on gray background"
          component={<LightNavGrayBackground />}
        />
        
        <LayoutComponent 
          title="Light nav with bottom border"
          component={<LightNavBottomBorder />}
        />
      </div>
    </div>
  );
};

const LayoutComponent = ({ title, component }) => {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="p-4 border-b bg-white">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      </div>
      <div className="bg-gray-100 w-full h-[500px] overflow-hidden">
        {component}
      </div>
    </div>
  );
};

// Component implementations
const TwoRowNavWithOverlap = () => {
  return (
    <div className="min-h-[500px] w-full">
      <div className="bg-cyan-600 pb-32">
        <nav className="border-b border-cyan-500 border-opacity-25 bg-cyan-600 lg:border-none">
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div className="relative flex h-16 items-center justify-between lg:border-b lg:border-cyan-500 lg:border-opacity-25">
              <div className="flex items-center px-2 lg:px-0">
                <div className="flex-shrink-0">
                  <img className="block h-8 w-8" src={amicciLogo} alt="Amicci" />
                </div>
                <div className="hidden lg:ml-10 lg:block">
                  <div className="flex space-x-4">
                    <a href="#" className="bg-cyan-700 text-white rounded-md py-2 px-3 text-sm font-medium">Dashboard</a>
                    <a href="#" className="text-white hover:bg-cyan-500 hover:bg-opacity-75 rounded-md py-2 px-3 text-sm font-medium">Equipe</a>
                    <a href="#" className="text-white hover:bg-cyan-500 hover:bg-opacity-75 rounded-md py-2 px-3 text-sm font-medium">Projetos</a>
                    <a href="#" className="text-white hover:bg-cyan-500 hover:bg-opacity-75 rounded-md py-2 px-3 text-sm font-medium">Calendário</a>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="w-full max-w-lg lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">Buscar</label>
                  <div className="relative text-gray-400 focus-within:text-gray-600">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <Search className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <input id="search" className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-500 sm:text-sm sm:leading-6" placeholder="Buscar" type="search" />
                  </div>
                </div>
              </div>
              <div className="flex lg:hidden">
                <button type="button" className="relative inline-flex items-center justify-center rounded-md bg-cyan-600 p-2 text-cyan-200 hover:bg-cyan-500 hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-600">
                  <span className="absolute -inset-0.5"></span>
                  <span className="sr-only">Abrir menu principal</span>
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="hidden lg:ml-4 lg:block">
                <div className="flex items-center">
                  <button type="button" className="relative flex-shrink-0 rounded-full bg-cyan-600 p-1 text-cyan-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-600">
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Ver notificações</span>
                    <Bell className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <nav className="border-t border-cyan-500 border-opacity-25 bg-cyan-600">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between py-3">
              <div className="flex items-center space-x-4">
                <a href="#" className="bg-cyan-700 text-white rounded-md py-2 px-3 text-sm font-medium flex items-center">
                  <span>Todos os arquivos</span>
                  <ChevronDown className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
                <a href="#" className="text-white hover:bg-cyan-500 hover:bg-opacity-75 rounded-md py-2 px-3 text-sm font-medium">Meus arquivos</a>
                <a href="#" className="text-white hover:bg-cyan-500 hover:bg-opacity-75 rounded-md py-2 px-3 text-sm font-medium">Compartilhados comigo</a>
                <a href="#" className="text-white hover:bg-cyan-500 hover:bg-opacity-75 rounded-md py-2 px-3 text-sm font-medium">Arquivados</a>
              </div>
              <div>
                <button type="button" className="relative rounded-full bg-cyan-600 p-1 text-cyan-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-600">
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Add file</span>
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <main className="-mt-32">
        <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
            <div className="h-96 rounded-lg border-4 border-dashed border-gray-200"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

const DarkNavWithWhiteHeader = () => {
  return (
    <div className="min-h-[500px] w-full">
      <div className="bg-gray-800">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Amicci</span>
              <img className="h-8 w-auto" src={amicciLogo} alt="Logo" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button type="button" className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-400">
              <span className="sr-only">Abrir menu principal</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-sm font-semibold leading-6 text-white">Dashboard</a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-300 hover:text-white">Equipe</a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-300 hover:text-white">Projetos</a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-300 hover:text-white">Calendário</a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-300 hover:text-white">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </div>

      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-lg font-semibold leading-6 text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="h-96 rounded-lg border-4 border-dashed border-gray-200"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

const BrandedNavWithWhiteHeader = () => {
  return (
    <div className="min-h-[500px] w-full">
      <div className="bg-cyan-600">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Amicci</span>
              <img className="h-8 w-auto" src={amicciLogo} alt="Logo" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button type="button" className="inline-flex items-center justify-center rounded-md p-2.5 text-cyan-200">
              <span className="sr-only">Abrir menu principal</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-sm font-semibold leading-6 text-white">Dashboard</a>
            <a href="#" className="text-sm font-semibold leading-6 text-cyan-100 hover:text-white">Equipe</a>
            <a href="#" className="text-sm font-semibold leading-6 text-cyan-100 hover:text-white">Projetos</a>
            <a href="#" className="text-sm font-semibold leading-6 text-cyan-100 hover:text-white">Calendário</a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-cyan-100 hover:text-white">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </div>

      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="h-96 rounded-lg border-4 border-dashed border-gray-200"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

const BrandNavWithOverlap = () => {
  return (
    <div className="min-h-[500px] w-full">
      <div className="bg-cyan-600 pb-32">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Amicci</span>
              <img className="h-8 w-auto" src={amicciLogo} alt="Logo" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button type="button" className="inline-flex items-center justify-center rounded-md p-2.5 text-cyan-200">
              <span className="sr-only">Abrir menu principal</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-sm font-semibold leading-6 text-white">Dashboard</a>
            <a href="#" className="text-sm font-semibold leading-6 text-cyan-100 hover:text-white">Equipe</a>
            <a href="#" className="text-sm font-semibold leading-6 text-cyan-100 hover:text-white">Projetos</a>
            <a href="#" className="text-sm font-semibold leading-6 text-cyan-100 hover:text-white">Calendário</a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-cyan-100 hover:text-white">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
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
    </div>
  );
};

const BrandedNavCompactHeader = () => {
  return (
    <div className="min-h-[500px] w-full">
      <div className="bg-cyan-600">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Amicci</span>
              <img className="h-8 w-auto" src={amicciLogo} alt="Logo" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button type="button" className="inline-flex items-center justify-center rounded-md p-2.5 text-cyan-200">
              <span className="sr-only">Abrir menu principal</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-sm font-semibold leading-6 text-white">Dashboard</a>
            <a href="#" className="text-sm font-semibold leading-6 text-cyan-100 hover:text-white">Equipe</a>
            <a href="#" className="text-sm font-semibold leading-6 text-cyan-100 hover:text-white">Projetos</a>
            <a href="#" className="text-sm font-semibold leading-6 text-cyan-100 hover:text-white">Calendário</a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-cyan-100 hover:text-white">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </div>

      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-lg font-semibold leading-6 text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="h-96 rounded-lg border-4 border-dashed border-gray-200"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

const LightNavGrayBackground = () => {
  return (
    <div className="min-h-[500px] w-full bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex flex-shrink-0 items-center">
                <img className="block h-8 w-auto" src={amicciLogo} alt="Amicci" />
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a href="#" className="inline-flex items-center border-b-2 border-cyan-500 px-1 pt-1 text-sm font-medium text-gray-900">Dashboard</a>
                <a href="#" className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">Equipe</a>
                <a href="#" className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">Projetos</a>
                <a href="#" className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">Calendário</a>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <button type="button" className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2">
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">Ver notificações</span>
                <Bell className="h-6 w-6" aria-hidden="true" />
              </button>

              <div className="relative ml-3">
                <div>
                  <button type="button" className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2">
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Abrir menu do usuário</span>
                    <User className="h-8 w-8 rounded-full" />
                  </button>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Abrir menu principal</span>
                <Menu className="block h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-10">
        <header>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
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
    </div>
  );
};

const LightNavBottomBorder = () => {
  return (
    <div className="min-h-[500px] w-full">
      <nav className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex flex-shrink-0 items-center">
                <img className="block h-8 w-auto" src={amicciLogo} alt="Amicci" />
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a href="#" className="inline-flex items-center border-b-2 border-cyan-500 px-1 pt-1 text-sm font-medium text-gray-900">Dashboard</a>
                <a href="#" className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">Equipe</a>
                <a href="#" className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">Projetos</a>
                <a href="#" className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">Calendário</a>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <button type="button" className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2">
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">Ver notificações</span>
                <Bell className="h-6 w-6" aria-hidden="true" />
              </button>

              <div className="relative ml-3">
                <div>
                  <button type="button" className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2">
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Abrir menu do usuário</span>
                    <User className="h-8 w-8 rounded-full" />
                  </button>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Abrir menu principal</span>
                <Menu className="block h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-10">
        <header>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
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
    </div>
  );
};

export default StackedLayouts;
