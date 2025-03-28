
import React from 'react';
import Header from '@/components/library-components/Header';
import ComponentCard from '@/components/ComponentCard';
import CodeBlock from '@/components/CodeBlock';
import { 
  DarkOverlapExample, 
  LightBorderExample, 
  MarketplaceExample, 
  MarketplaceBuyerExample,
  InstitutionalExample
} from '@/components/application-shells/StackedLayoutExamples';

const StackedLayouts = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Stacked Layouts"
        description="Layouts empilhados para construção de páginas com cabeçalho, conteúdo e rodapé."
        type="components"
      />

      <div className="space-y-10 my-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Descrição</h2>
          <p className="text-gray-700 mb-4">
            Os layouts empilhados (Stacked Layouts) são padrões de design onde os elementos são organizados verticalmente, 
            com um cabeçalho no topo, seguido pelo conteúdo principal e, opcionalmente, um rodapé na parte inferior. 
            Este padrão é ideal para aplicações web tradicionais e interfaces que priorizam a navegação simples.
          </p>
          <p className="text-gray-700 mb-4">
            O componente StackedLayout fornece diferentes variantes de layouts para atender às necessidades específicas de design.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Variantes</h2>

          <div>
            <h3 className="text-xl font-medium mb-3">Light Border</h3>
            <p className="text-gray-700 mb-4">
              Layout claro com uma borda separando o cabeçalho do conteúdo principal. Ideal para interfaces administrativas e dashboards.
            </p>
            <ComponentCard title="Light Border">
              <div className="h-[400px] w-full border border-gray-200 rounded-lg overflow-hidden">
                <LightBorderExample />
              </div>
            </ComponentCard>
            <CodeBlock 
              title="Implementação"
              language="jsx"
              code={`<StackedLayout
  variant="light-border"
  headerClassName="bg-white"
  navigationContent={
    <>
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <img className="h-8 w-auto" src={logo} alt="Logo" />
        </div>
        <div className="hidden md:ml-6 md:flex md:space-x-6">
          <a href="#" className="text-base font-medium text-gray-900">Dashboard</a>
          <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-700">Equipe</a>
          <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-700">Projetos</a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <IconButton icon={<Bell />} aria-label="Notificações" />
        <ProfileButton userName="Maria Silva" companyName="Empresa Ltda." />
      </div>
    </>
  }
  headerContent={<h1 className="text-3xl font-medium tracking-tight text-gray-900">Dashboard</h1>}
>
  {/* Conteúdo da página */}
</StackedLayout>`}
            />
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-medium mb-3">Dark Overlap</h3>
            <p className="text-gray-700 mb-4">
              Layout com cabeçalho escuro e conteúdo que se sobrepõe ao cabeçalho. Cria um efeito visual distinto e moderno.
            </p>
            <ComponentCard title="Dark Overlap">
              <div className="h-[500px] w-full border border-gray-200 rounded-lg overflow-hidden">
                <DarkOverlapExample />
              </div>
            </ComponentCard>
            <CodeBlock 
              title="Implementação"
              language="jsx"
              code={`<StackedLayout
  variant="dark-overlap"
  navigationContent={
    <>
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-1 items-center space-x-4">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Amicci</span>
            <img className="h-8 w-auto" src={logo} alt="Logo" />
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
          <IconButton variant="outline-secondary" icon={<Bell size={18} />} />
          <ProfileButton userName="Maria Silva" companyName="Empresa Ltda." />
        </div>
      </div>
    </>
  }
  headerContent={
    <div className="mx-auto max-w-7xl">
      <div className="border-b border-gray-200 pb-5 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-medium leading-6 text-gray-900">Dashboard</h1>
          <p className="mt-2 max-w-4xl text-sm text-gray-500">Todos os projetos ativos.</p>
        </div>
        <div className="flex gap-2">
          <Button>Novo projeto</Button>
        </div>
      </div>
    </div>
  }
>
  {/* Conteúdo da página */}
</StackedLayout>`}
            />
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-medium mb-3">Marketplace</h3>
            <p className="text-gray-700 mb-4">
              Layout otimizado para interfaces de marketplace, com cabeçalho que inclui navegação e ações de usuário.
            </p>
            <ComponentCard title="Marketplace">
              <div className="h-[400px] w-full border border-gray-200 rounded-lg overflow-hidden">
                <MarketplaceExample />
              </div>
            </ComponentCard>
            <CodeBlock 
              title="Implementação"
              language="jsx"
              code={`<StackedLayout
  variant="light-border"
  mainClassName="bg-white"
  headerClassName="bg-white"
  navigationContent={
    <>
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <img className="h-8 w-auto" src={logo} alt="Logo" />
        </div>
        <div className="hidden md:ml-6 md:flex md:space-x-6">
          <a href="#" className="text-base font-medium text-text-primary">Minha vitrine</a>
          <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-700">
            Oportunidades
            <ChevronDown className="ml-1 h-4 w-4 inline" />
          </a>
          <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-700">Meus projetos</a>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="default" className="flex items-center gap-2">
          <Rocket className="h-4 w-4" />
          Impulsionar negócios
        </Button>
        
        <IconButton variant="outline-secondary" icon={<HelpCircle />} aria-label="Ajuda" />
        <IconButton variant="outline-secondary" icon={<Bell />} aria-label="Notificações" />
        
        <ProfileButton 
          userName="Amanda Silva"
          companyName="Empresa XYZ"
          showClientLogo={false}
          avatarText="AS"
        />
      </div>
    </>
  }
  headerContent={<h1 className="text-3xl font-medium tracking-tight text-gray-900">Minha vitrine</h1>}
>
  {/* Conteúdo da página */}
</StackedLayout>`}
            />
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-medium mb-3">Institutional</h3>
            <p className="text-gray-700 mb-4">
              Layout para sites institucionais, com ênfase em elementos de marketing e apresentação de conteúdo.
            </p>
            <ComponentCard title="Institutional">
              <div className="h-[500px] w-full border border-gray-200 rounded-lg overflow-hidden">
                <InstitutionalExample />
              </div>
            </ComponentCard>
            <CodeBlock 
              title="Implementação"
              language="jsx"
              code={`<StackedLayout
  variant="light-border"
  mainClassName="bg-white"
  headerClassName="bg-white"
  navigationContent={
    <>
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <img className="h-8 w-auto" src={logo} alt="Logo" />
        </div>
        <div className="hidden md:ml-6 md:flex md:space-x-6">
          <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-700">
            Home
            <ChevronDown className="ml-1 h-4 w-4 inline" />
          </a>
          <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-700">
            Plataforma
            <ChevronDown className="ml-1 h-4 w-4 inline" />
          </a>
          <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-700">Sobre</a>
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
        <Button>Falar com especialista</Button>
        
        <IconButton variant="outline-secondary" icon={<Globe />} aria-label="Idioma" />
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
          Our platform helps your business deliver exceptional customer experiences.
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
  </div>
</StackedLayout>`}
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Props do StackedLayout</h2>
          <div className="border rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prop</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Padrão</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descrição</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">children</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">ReactNode</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Conteúdo a ser renderizado no corpo principal do layout</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">headerContent</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">ReactNode</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Conteúdo do cabeçalho, normalmente o título da página</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">navigationContent</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">ReactNode</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Conteúdo da barra de navegação, normalmente o logo e itens de menu</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">darkHeader</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Determina se o cabeçalho deve usar fundo escuro (branded)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">headerClassName</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Classe CSS adicional para o cabeçalho</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">navClassName</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Classe CSS adicional para a navegação</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">mainClassName</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Classe CSS adicional para o conteúdo principal</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">variant</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">'light-border'</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Estilo de layout: 'light-border' | 'light-gray' | 'dark-compact' | 'dark-standard' | 'dark-overlap'</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StackedLayouts;
