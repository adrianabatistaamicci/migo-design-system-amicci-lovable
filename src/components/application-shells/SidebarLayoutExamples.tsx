
import React from 'react';
import { 
  Sidebar, 
  SidebarContent, 
  SidebarHeader, 
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarInput,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem
} from "@/components/ui/sidebar";
import { Home, Users, Settings, HelpCircle, Search, Inbox, Folder, Star, Archive, Tag, Trash, ChevronRight, UserPlus, UserX, Briefcase, FileText, FileCog, FileCheck, LayoutDashboard, ShoppingCart, BarChart3, LogOut, Bell } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Basic Sidebar Example
export const BasicSidebarExample = () => {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden h-full">
      <SidebarProvider>
        <div className="flex h-full w-full">
          <Sidebar collapsible="none">
            <SidebarHeader className="p-4">
              <h2 className="text-xl font-bold">App Name</h2>
            </SidebarHeader>
            <SidebarContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Home size={20} />
                    <span>Início</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Users size={20} />
                    <span>Usuários</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Settings size={20} />
                    <span>Configurações</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>
            <SidebarFooter className="p-4">
              <div className="flex items-center gap-2">
                <HelpCircle size={18} />
                <span>Ajuda</span>
              </div>
            </SidebarFooter>
          </Sidebar>
          <main className="flex-1 p-6">
            <div className="mb-4 flex items-center">
              <SidebarTrigger />
              <h1 className="ml-4 text-2xl font-bold">Página Inicial</h1>
            </div>
            <div className="rounded-lg border-4 border-dashed border-gray-200 h-64"></div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

// Nested Navigation Sidebar Example
export const NestedNavigationSidebarExample = () => {
  const [openItem, setOpenItem] = React.useState('');

  const toggleItem = (item) => {
    setOpenItem(openItem === item ? '' : item);
  };

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden h-full">
      <SidebarProvider>
        <div className="flex h-full w-full">
          <Sidebar collapsible="none">
            <SidebarHeader className="p-4">
              <h2 className="text-xl font-bold">Dashboard</h2>
            </SidebarHeader>
            <SidebarContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Home size={20} />
                    <span>Início</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
                {/* Usuários com sub-menu */}
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    onClick={() => toggleItem('users')}
                  >
                    <Users size={20} />
                    <span>Usuários</span>
                    <ChevronRight 
                      className={`ml-auto transition-transform ${openItem === 'users' ? 'rotate-90' : ''}`} 
                      size={16} 
                    />
                  </SidebarMenuButton>
                  
                  {openItem === 'users' && (
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>
                          <UserPlus size={16} />
                          <span>Adicionar usuário</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>
                          <UserX size={16} />
                          <span>Remover usuário</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  )}
                </SidebarMenuItem>
                
                {/* Documentos com sub-menu */}
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    onClick={() => toggleItem('docs')}
                  >
                    <FileText size={20} />
                    <span>Documentos</span>
                    <ChevronRight 
                      className={`ml-auto transition-transform ${openItem === 'docs' ? 'rotate-90' : ''}`} 
                      size={16} 
                    />
                  </SidebarMenuButton>
                  
                  {openItem === 'docs' && (
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>
                          <FileCog size={16} />
                          <span>Gerenciar documentos</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>
                          <FileCheck size={16} />
                          <span>Aprovar documentos</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  )}
                </SidebarMenuItem>
                
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Briefcase size={20} />
                    <span>Projetos</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Settings size={20} />
                    <span>Configurações</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>
          </Sidebar>
          <main className="flex-1 p-6">
            <div className="mb-4 flex items-center">
              <SidebarTrigger />
              <h1 className="ml-4 text-2xl font-bold">Menu com navegação aninhada</h1>
            </div>
            <div className="rounded-lg border-4 border-dashed border-gray-200 h-64"></div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

// Search Sidebar Example
export const SearchSidebarExample = () => {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden h-full">
      <SidebarProvider>
        <div className="flex h-full w-full">
          <Sidebar collapsible="none">
            <SidebarHeader className="p-4">
              <h2 className="text-xl font-bold mb-4">Email App</h2>
              <div className="relative">
                <SidebarInput 
                  placeholder="Buscar emails..." 
                  className="pl-9 w-full"
                />
                <Search 
                  className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" 
                  size={16} 
                />
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Home size={20} />
                    <span>Início</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Inbox size={20} />
                    <span>Caixa de entrada</span>
                    <span className="ml-auto bg-primary-main text-white rounded-full px-2 py-0.5 text-xs">24</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Star size={20} />
                    <span>Favoritos</span>
                    <span className="ml-auto bg-amber-500 text-white rounded-full px-2 py-0.5 text-xs">3</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Archive size={20} />
                    <span>Arquivados</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Folder size={20} />
                    <span>Pastas</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Tag size={20} />
                    <span>Etiquetas</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Trash size={20} />
                    <span>Lixeira</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>
          </Sidebar>
          <main className="flex-1 p-6">
            <div className="mb-4 flex items-center">
              <SidebarTrigger />
              <h1 className="ml-4 text-2xl font-bold">Caixa de Entrada</h1>
            </div>
            <div className="rounded-lg border-4 border-dashed border-gray-200 h-64"></div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

// Admin Layout with Sidebar Example
export const AdminLayoutSidebarExample = () => {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden h-full">
      <SidebarProvider>
        <div className="flex h-full w-full">
          <Sidebar collapsible="none">
            <SidebarHeader className="p-4">
              <div className="flex items-center">
                <div className="bg-primary-main text-white p-2 rounded-md">
                  <span className="font-bold">ADM</span>
                </div>
                <h2 className="text-xl font-bold ml-2">AdminPro</h2>
              </div>
            </SidebarHeader>
            
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Principal</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton isActive>
                        <LayoutDashboard size={20} />
                        <span>Dashboard</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Users size={20} />
                        <span>Usuários</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <ShoppingCart size={20} />
                        <span>Produtos</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <BarChart3 size={20} />
                        <span>Análises</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
              
              <SidebarGroup>
                <SidebarGroupLabel>Configurações</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Settings size={20} />
                        <span>Configurações</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <HelpCircle size={20} />
                        <span>Ajuda</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            
            <SidebarFooter className="p-4">
              <div className="flex items-center">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="" />
                  <AvatarFallback>MS</AvatarFallback>
                </Avatar>
                <div className="ml-2">
                  <p className="text-sm font-medium">Maria Silva</p>
                  <p className="text-xs text-gray-500">Administradora</p>
                </div>
                <Button variant="ghost" size="icon" className="ml-auto">
                  <LogOut size={18} />
                </Button>
              </div>
            </SidebarFooter>
          </Sidebar>
          
          <main className="flex-1">
            <header className="flex h-16 items-center justify-between border-b bg-white px-6">
              <div className="flex items-center gap-2">
                <SidebarTrigger />
                <h1 className="text-xl font-semibold">Dashboard</h1>
              </div>
              
              <div className="relative w-64">
                <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <Input placeholder="Buscar..." className="pl-9" />
              </div>
              
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon">
                  <Bell size={20} />
                </Button>
                <Avatar className="h-8 w-8">
                  <AvatarImage src="" />
                  <AvatarFallback>MS</AvatarFallback>
                </Avatar>
              </div>
            </header>
            
            <div className="p-6">
              <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                  <h3 className="text-sm font-medium text-gray-500">Total de Usuários</h3>
                  <p className="mt-2 text-2xl font-bold">2,543</p>
                  <p className="mt-1 text-sm text-green-500">+14% do mês passado</p>
                </div>
                
                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                  <h3 className="text-sm font-medium text-gray-500">Produtos Vendidos</h3>
                  <p className="mt-2 text-2xl font-bold">1,789</p>
                  <p className="mt-1 text-sm text-green-500">+5.2% do mês passado</p>
                </div>
                
                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                  <h3 className="text-sm font-medium text-gray-500">Receita</h3>
                  <p className="mt-2 text-2xl font-bold">R$ 45.230</p>
                  <p className="mt-1 text-sm text-green-500">+12.6% do mês passado</p>
                </div>
              </div>
              
              <div className="rounded-lg border-4 border-dashed border-gray-200 h-24 flex items-center justify-center">
                <p className="text-gray-500">Área para gráficos e conteúdo adicional</p>
              </div>
            </div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};
