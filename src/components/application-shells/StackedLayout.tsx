import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Menu, Bell } from 'lucide-react';
import { ProfileButton } from '@/components/ui/profile-button';
import { IconButton } from '@/components/ui/icon-button';

export interface StackedLayoutProps {
  /** Conteúdo a ser renderizado no corpo principal do layout */
  children: ReactNode;
  /** Conteúdo do cabeçalho, normalmente o título da página */
  headerContent?: ReactNode;
  /** Conteúdo da barra de navegação, normalmente o logo e itens de menu */
  navigationContent?: ReactNode;
  /** Determina se o cabeçalho deve usar fundo escuro (branded) */
  darkHeader?: boolean;
  /** Classe CSS adicional para o cabeçalho */
  headerClassName?: string;
  /** Classe CSS adicional para a navegação */
  navClassName?: string;
  /** Classe CSS adicional para o conteúdo principal */
  mainClassName?: string;
  /** Estilo de layout */
  variant?: 'light-border' | 'light-gray' | 'dark-compact' | 'dark-standard' | 'dark-overlap';
}

/**
 * Componente de layout empilhado reutilizável.
 * Fornece diferentes variantes de layouts com cabeçalho e área de conteúdo.
 */
const StackedLayout = ({
  children,
  headerContent,
  navigationContent,
  darkHeader = false,
  headerClassName,
  navClassName,
  mainClassName,
  variant = 'light-border'
}: StackedLayoutProps) => {
  // Determina as classes com base na variante
  const getVariantClasses = () => {
    switch (variant) {
      case 'light-border':
        return {
          navBg: 'bg-white border-b border-gray-200',
          headerBg: '',
          mainBg: '',
          textColor: 'text-gray-900',
          lightText: 'text-gray-500'
        };
      case 'light-gray':
        return {
          navBg: 'bg-white shadow-sm',
          headerBg: '',
          mainBg: 'bg-gray-100',
          textColor: 'text-gray-900',
          lightText: 'text-gray-500'
        };
      case 'dark-compact':
        return {
          navBg: 'bg-amicciDark-900',
          headerBg: 'bg-white shadow-sm',
          mainBg: '',
          textColor: 'text-white',
          lightText: 'text-amicciDark-50'
        };
      case 'dark-standard':
        return {
          navBg: 'bg-amicciDark-900',
          headerBg: 'bg-white shadow',
          mainBg: '',
          textColor: 'text-white',
          lightText: 'text-amicciDark-50'
        };
      case 'dark-overlap':
        return {
          navBg: 'bg-amicciDark-900',
          headerBg: '',
          mainBg: '',
          textColor: 'text-white',
          lightText: 'text-amicciDark-50',
          wrapperClass: 'pb-32',
          mainClass: '-mt-32'
        };
      default:
        return {
          navBg: 'bg-white border-b border-gray-200',
          headerBg: '',
          mainBg: '',
          textColor: 'text-gray-900',
          lightText: 'text-gray-500'
        };
    }
  };

  const classes = getVariantClasses();

  // Renderiza o layout específico para overlap
  if (variant === 'dark-overlap') {
    return (
      <div className="min-h-screen w-full flex flex-col">
        <div className={cn("bg-amicciDark-900 pb-32", classes.wrapperClass)}>
          <nav className={cn("mx-auto flex max-w-7xl items-center justify-between p-4 h-[88px] lg:px-8", navClassName)}>
            {navigationContent ? navigationContent : (
              <>
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0">
                    {/* Placeholder para logo */}
                    <div className="h-8 w-auto bg-white/20 rounded-md px-4 py-1 text-white">Logo</div>
                  </div>
                </div>
                <div className="hidden lg:flex lg:items-center gap-4">
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
              </>
            )}
          </nav>
        </div>

        <main className={cn("-mt-32 flex-1", classes.mainClass, mainClassName)}>
          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 flex flex-col min-h-[calc(100vh-88px)]">
            <div className="rounded-lg bg-white p-6 shadow flex-1">
              {children}
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex flex-col">
      <nav className={cn(classes.navBg, navClassName)}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-[88px] items-center justify-between">
            {navigationContent ? navigationContent : (
              <>
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0">
                    {/* Placeholder para logo */}
                    <div className="h-8 w-auto bg-gray-200 rounded-md px-4 py-1">Logo</div>
                  </div>
                  <div className="hidden md:flex md:gap-6">
                    <a href="#" className={cn("text-base font-medium leading-7 tracking-tight font-roboto", darkHeader ? 'text-white' : classes.textColor)}>Item 1</a>
                    <a href="#" className={cn("text-base font-medium leading-7 tracking-tight font-roboto", darkHeader ? 'text-amicciDark-50 hover:text-white' : classes.lightText + ' hover:text-gray-700')}>Item 2</a>
                    <a href="#" className={cn("text-base font-medium leading-7 tracking-tight font-roboto", darkHeader ? 'text-amicciDark-50 hover:text-white' : classes.lightText + ' hover:text-gray-700')}>Item 3</a>
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
                    menuIcon={<Menu className={cn("h-6 w-6", darkHeader ? "text-white" : "")} />}
                  />
                  <div className="ml-2 -mr-2 flex items-center md:hidden">
                    <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none">
                      <span className="sr-only">Abrir menu principal</span>
                      <Menu className="block h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>

      {headerContent && (
        <header className={cn(classes.headerBg, headerClassName)}>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            {headerContent}
          </div>
        </header>
      )}

      <main className={cn(classes.mainBg, "flex-1", mainClassName)}>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 flex flex-col min-h-[calc(100vh-88px-72px)]">
          <div className="px-4 py-6 sm:px-0 flex-1">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default StackedLayout;
