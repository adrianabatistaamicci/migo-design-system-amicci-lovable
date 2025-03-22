
import React from 'react';
import Header from '@/components/library-components/Header';
import ComponentCard from '@/components/ComponentCard';
import CodeBlock from '@/components/CodeBlock';

const StackedLayouts = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Stacked Layouts"
        description="Layouts de aplicação com cabeçalho no topo e conteúdo principal abaixo."
        type="components"
      />
      
      <div className="prose prose-slate max-w-3xl mb-10">
        <p className="text-lg text-zinc-700">
          Layouts empilhados (stacked) são uma estrutura comum para aplicações onde o cabeçalho permanece fixo no topo enquanto o conteúdo principal é rolável. Esses layouts proporcionam uma navegação clara e consistente para os usuários.
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-12 mb-16">
        <section id="simple-stacked">
          <h2 className="text-2xl font-semibold mb-6">Layout Empilhado Simples</h2>
          <p className="text-zinc-700 mb-6">
            Um layout empilhado básico com cabeçalho simples e área de conteúdo principal.
          </p>
          
          <ComponentCard 
            title="Layout Empilhado Simples" 
            description="Layout básico com um cabeçalho e área de conteúdo."
            code={`<div className="min-h-full">
  <nav className="bg-gray-800">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img className="h-8 w-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendar</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Reports</a>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="ml-4 flex items-center md:ml-6">
            <button type="button" className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="sr-only">View notifications</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
            </button>
            <div className="relative ml-3">
              <div>
                <button type="button" className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <span className="sr-only">Open user menu</span>
                  <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="-mr-2 flex md:hidden">
          <button type="button" className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-controls="mobile-menu" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div className="md:hidden" id="mobile-menu">
      <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
        <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Reports</a>
      </div>
      <div className="border-t border-gray-700 pb-3 pt-4">
        <div className="flex items-center px-5">
          <div className="flex-shrink-0">
            <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          </div>
          <div className="ml-3">
            <div className="text-base font-medium leading-none text-white">Tom Cook</div>
            <div className="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
          </div>
          <button type="button" className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span className="sr-only">View notifications</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
          </button>
        </div>
        <div className="mt-3 space-y-1 px-2">
          <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Your Profile</a>
          <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Settings</a>
          <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Sign out</a>
        </div>
      </div>
    </div>
  </nav>
  <header className="bg-white shadow">
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
    </div>
  </header>
  <main>
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="h-96 rounded-lg border-4 border-dashed border-gray-200">
          {/* Conteúdo principal aqui */}
        </div>
      </div>
    </div>
  </main>
</div>`}
          >
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm h-[400px] bg-white">
              <div className="min-h-full">
                <nav className="bg-gray-800">
                  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <div className="h-8 w-8 bg-indigo-500 rounded-md flex items-center justify-center text-white font-bold">T</div>
                        </div>
                        <div className="hidden md:block">
                          <div className="ml-10 flex items-baseline space-x-4">
                            <a href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</a>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</a>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
                          </div>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                          <button type="button" className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none">
                            <span className="sr-only">View notifications</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
                <header className="bg-white shadow">
                  <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
                  </div>
                </header>
                <main>
                  <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                      <div className="h-40 rounded-lg border-4 border-dashed border-gray-200 flex items-center justify-center text-gray-400">
                        Área de conteúdo principal
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </ComponentCard>
        </section>

        <section id="branded-stacked">
          <h2 className="text-2xl font-semibold mb-6">Layout Empilhado com Marca</h2>
          <p className="text-zinc-700 mb-6">
            Uma variação do layout empilhado que incorpora elementos de marca e mais opções de navegação.
          </p>
          
          <ComponentCard 
            title="Layout Empilhado com Marca" 
            description="Layout empilhado com elementos de marca e navegação aprimorada."
            code={`<div className="min-h-full">
  <div className="bg-indigo-600">
    <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex w-0 flex-1 items-center">
          <span className="flex rounded-lg bg-indigo-800 p-2">
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
            </svg>
          </span>
          <p className="ml-3 truncate font-medium text-white">
            <span className="md:hidden">We announced a new product!</span>
            <span className="hidden md:inline">Big news! We're excited to announce a brand new product.</span>
          </p>
        </div>
        <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
          <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50">Learn more</a>
        </div>
        <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
          <button type="button" className="-mr-1 flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2">
            <span className="sr-only">Dismiss</span>
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  <nav className="bg-gray-800">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendar</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Reports</a>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="ml-4 flex items-center md:ml-6">
            <button type="button" className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="sr-only">View notifications</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
            </button>
            <div className="relative ml-3">
              <div>
                <button type="button" className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <span className="sr-only">Open user menu</span>
                  <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="-mr-2 flex md:hidden">
          <button type="button" className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-controls="mobile-menu" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div className="md:hidden" id="mobile-menu">
      <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
        <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Reports</a>
      </div>
      <div className="border-t border-gray-700 pt-4 pb-3">
        <div className="flex items-center px-5">
          <div className="flex-shrink-0">
            <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          </div>
          <div className="ml-3">
            <div className="text-base font-medium leading-none text-white">Tom Cook</div>
            <div className="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
          </div>
          <button type="button" className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span className="sr-only">View notifications</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
          </button>
        </div>
        <div className="mt-3 space-y-1 px-2">
          <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Your Profile</a>
          <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Settings</a>
          <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Sign out</a>
        </div>
      </div>
    </div>
  </nav>
  <header className="bg-white shadow">
    <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
    </div>
  </header>
  <main>
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="h-96 rounded-lg border-4 border-dashed border-gray-200">
          {/* Conteúdo principal aqui */}
        </div>
      </div>
    </div>
  </main>
</div>`}
          >
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm h-[400px] bg-white">
              <div className="min-h-full">
                <div className="bg-indigo-600">
                  <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center justify-between">
                      <div className="flex w-0 flex-1 items-center">
                        <span className="flex rounded-lg bg-indigo-800 p-2">
                          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
                          </svg>
                        </span>
                        <p className="ml-3 truncate font-medium text-white">
                          <span>Grande novidade! Anunciamos um novo produto.</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <nav className="bg-gray-800">
                  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <div className="h-8 w-8 bg-indigo-500 rounded-md flex items-center justify-center text-white font-bold">T</div>
                        </div>
                        <div className="hidden md:block">
                          <div className="ml-10 flex items-baseline space-x-4">
                            <a href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</a>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</a>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
                <header className="bg-white shadow">
                  <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
                  </div>
                </header>
                <main>
                  <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-2 sm:px-0">
                      <div className="h-24 rounded-lg border-4 border-dashed border-gray-200 flex items-center justify-center text-gray-400">
                        Área de conteúdo principal
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </ComponentCard>
        </section>

        <section id="light-stacked">
          <h2 className="text-2xl font-semibold mb-6">Layout Empilhado Claro</h2>
          <p className="text-zinc-700 mb-6">
            Uma versão mais leve do layout empilhado com navegação superior e cabeçalho secundário.
          </p>
          
          <ComponentCard 
            title="Layout Empilhado Claro" 
            description="Layout empilhado com tema claro e navegação simplificada."
            code={`<div className="min-h-full">
  <header className="bg-white">
    <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
        <div className="flex items-center">
          <a href="#">
            <span className="sr-only">Your Company</span>
            <img className="h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
          <div className="ml-10 hidden space-x-8 lg:block">
            <a href="#" className="text-base font-medium text-indigo-600 hover:text-indigo-700" key="Solutions">
              Solutions
            </a>
            <a href="#" className="text-base font-medium text-indigo-600 hover:text-indigo-700" key="Pricing">
              Pricing
            </a>
            <a href="#" className="text-base font-medium text-indigo-600 hover:text-indigo-700" key="Docs">
              Docs
            </a>
            <a href="#" className="text-base font-medium text-indigo-600 hover:text-indigo-700" key="Company">
              Company
            </a>
          </div>
        </div>
        <div className="ml-10 space-x-4">
          <a href="#" className="inline-block rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-base font-medium text-white hover:bg-indigo-700">Sign in</a>
          <a href="#" className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-indigo-600 hover:bg-indigo-50">Sign up</a>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-x-6 py-4 lg:hidden">
        <a href="#" className="text-base font-medium text-indigo-600 hover:text-indigo-700" key="Solutions">
          Solutions
        </a>
        <a href="#" className="text-base font-medium text-indigo-600 hover:text-indigo-700" key="Pricing">
          Pricing
        </a>
        <a href="#" className="text-base font-medium text-indigo-600 hover:text-indigo-700" key="Docs">
          Docs
        </a>
        <a href="#" className="text-base font-medium text-indigo-600 hover:text-indigo-700" key="Company">
          Company
        </a>
      </div>
    </nav>
  </header>
  <div className="bg-gray-100 py-10">
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="relative shadow-lg">
        <div className="absolute inset-0 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 mix-blend-multiply"></div>
        </div>
        <div className="relative px-6 py-16 sm:px-12 sm:py-18 lg:py-20 lg:px-16">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="block text-white">Ready to dive in?</span>
            <span className="block text-indigo-200">Start your free trial today.</span>
          </h2>
          <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
            <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
              <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8">Get started</a>
              <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <main>
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="h-96 rounded-lg border-4 border-dashed border-gray-200">
          {/* Conteúdo principal aqui */}
        </div>
      </div>
    </div>
  </main>
</div>`}
          >
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm h-[400px] bg-white">
              <div className="min-h-full">
                <header className="bg-white">
                  <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
                    <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
                      <div className="flex items-center">
                        <a href="#">
                          <span className="sr-only">Your Company</span>
                          <div className="h-10 w-10 bg-indigo-600 rounded-md flex items-center justify-center text-white font-bold">T</div>
                        </a>
                        <div className="ml-10 hidden space-x-8 lg:block">
                          <a href="#" className="text-base font-medium text-indigo-600 hover:text-indigo-700" key="Solutions">
                            Solutions
                          </a>
                          <a href="#" className="text-base font-medium text-indigo-600 hover:text-indigo-700" key="Pricing">
                            Pricing
                          </a>
                        </div>
                      </div>
                      <div className="ml-10 space-x-4">
                        <a href="#" className="inline-block rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-base font-medium text-white hover:bg-indigo-700">Sign in</a>
                      </div>
                    </div>
                  </nav>
                </header>
                <div className="bg-gray-100 py-6">
                  <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="relative shadow-lg rounded-lg">
                      <div className="absolute inset-0 rounded-lg overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 mix-blend-multiply"></div>
                      </div>
                      <div className="relative px-6 py-6 sm:px-8 sm:py-8">
                        <h2 className="text-center text-2xl font-bold tracking-tight">
                          <span className="block text-white">Pronto para começar?</span>
                          <span className="block text-indigo-200">Inicie seu teste gratuito hoje.</span>
                        </h2>
                        <div className="mx-auto mt-4 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                          <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                            <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-700 shadow-sm hover:bg-indigo-50">Começar</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <main>
                  <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-2 sm:px-0">
                      <div className="h-24 rounded-lg border-4 border-dashed border-gray-200 flex items-center justify-center text-gray-400">
                        Área de conteúdo principal
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </ComponentCard>
        </section>
      </div>
      
      <section id="usage" className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Diretrizes de Uso</h2>
        <div className="prose prose-slate max-w-3xl">
          <p>
            Os layouts empilhados são ideais para aplicativos com estruturas hierárquicas claras, onde o conteúdo principal está subordinado a uma navegação global. Considere estas diretrizes ao implementar layouts empilhados:
          </p>
          
          <ul className="mt-4 space-y-3">
            <li>
              <strong>Hierarquia Visual:</strong> Mantenha uma hierarquia visual clara entre cabeçalho, conteúdo principal e rodapé.
            </li>
            <li>
              <strong>Responsividade:</strong> Garanta que o layout se adapte bem a diferentes tamanhos de tela, especialmente em dispositivos móveis.
            </li>
            <li>
              <strong>Navegação Acessível:</strong> Forneça menus de hambúrguer ou alternativas para navegação em telas menores.
            </li>
            <li>
              <strong>Consistência:</strong> Mantenha a estrutura consistente em todas as páginas para proporcionar uma experiência previsível.
            </li>
          </ul>
        </div>
      </section>
      
      <section id="customization" className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Personalização</h2>
        <div className="prose prose-slate max-w-3xl">
          <p>
            Os layouts empilhados podem ser personalizados para atender às necessidades específicas do seu aplicativo:
          </p>
          
          <ul className="mt-4 space-y-3">
            <li>
              <strong>Cores e Temas:</strong> Adapte o esquema de cores para corresponder à identidade visual da sua marca.
            </li>
            <li>
              <strong>Altura do Cabeçalho:</strong> Ajuste a altura do cabeçalho conforme necessário para acomodar conteúdo adicional.
            </li>
            <li>
              <strong>Elementos Fixos:</strong> Considere fixar o cabeçalho para manter a navegação acessível durante a rolagem.
            </li>
            <li>
              <strong>Sub-navegação:</strong> Adicione uma barra de sub-navegação abaixo do cabeçalho principal para opções específicas do contexto.
            </li>
          </ul>
        </div>
      </section>
      
      <section id="accessibility" className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Acessibilidade</h2>
        <div className="prose prose-slate max-w-3xl">
          <p>
            Para garantir que seus layouts empilhados sejam acessíveis a todos os usuários:
          </p>
          
          <ul className="mt-4 space-y-3">
            <li>
              <strong>Marcação Semântica:</strong> Use tags HTML semânticas como <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code> e <code>&lt;main&gt;</code>.
            </li>
            <li>
              <strong>Contraste:</strong> Mantenha um contraste adequado entre texto e fundo, especialmente na navegação.
            </li>
            <li>
              <strong>Foco Visível:</strong> Assegure que os elementos interativos tenham estados de foco visíveis.
            </li>
            <li>
              <strong>Navegação por Teclado:</strong> Garanta que todos os elementos interativos sejam acessíveis via teclado.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default StackedLayouts;
