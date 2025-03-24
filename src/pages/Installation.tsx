
import React from 'react';
import { Terminal, GitBranch, Package, Code, Server, Database, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/library-components/Header';
import CodeBlock from '@/components/CodeBlock';

const Installation = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      <Header 
        title="Instalação do Migo"
        description="Guia completo para desenvolvedores e prestadores de serviço sobre como instalar e utilizar o Migo Design System."
        type="components"
        hideChip={true}
      />

      <section className="space-y-6">
        <h2 className="text-2xl font-medium text-gray-900">Pré-requisitos</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="w-12 h-12 bg-primary-light/30 rounded-lg text-primary-main flex items-center justify-center mb-4">
              <Server size={24} />
            </div>
            <h3 className="text-base mb-2 text-text-primary font-medium">Node.js</h3>
            <p className="text-sm text-text-secondary mb-4">
              É necessário ter o Node.js v16.0.0 ou superior instalado.
            </p>
            <a 
              href="https://nodejs.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-main hover:text-primary-dark inline-flex items-center"
            >
              Download do Node.js
              <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="w-12 h-12 bg-primary-light/30 rounded-lg text-primary-main flex items-center justify-center mb-4">
              <GitBranch size={24} />
            </div>
            <h3 className="text-base mb-2 text-text-primary font-medium">Git</h3>
            <p className="text-sm text-text-secondary mb-4">
              Controle de versão para acessar e contribuir com o repositório.
            </p>
            <a 
              href="https://git-scm.com/downloads" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-main hover:text-primary-dark inline-flex items-center"
            >
              Download do Git
              <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="w-12 h-12 bg-primary-light/30 rounded-lg text-primary-main flex items-center justify-center mb-4">
              <Code size={24} />
            </div>
            <h3 className="text-base mb-2 text-text-primary font-medium">Editor de código</h3>
            <p className="text-sm text-text-secondary mb-4">
              Recomendamos o VS Code com as extensões para React e TypeScript.
            </p>
            <a 
              href="https://code.visualstudio.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-main hover:text-primary-dark inline-flex items-center"
            >
              Download do VS Code
              <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-medium text-gray-900">Instalação da biblioteca</h2>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
            <Package size={20} className="text-primary-main" />
            1. Instale o pacote via npm
          </h3>
          <CodeBlock 
            code="npm install @amicci/migo-ds" 
            language="bash"
            title="Terminal"
          />
          <p className="text-sm text-text-secondary mt-3">
            Ou utilize o yarn se preferir:
          </p>
          <CodeBlock 
            code="yarn add @amicci/migo-ds" 
            language="bash"
            title="Terminal"
          />
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
            <Download size={20} className="text-primary-main" />
            2. Configure as dependências de pares
          </h3>
          <p className="text-sm text-text-secondary mb-4">
            O Migo Design System requer algumas dependências que devem ser instaladas em seu projeto:
          </p>
          <CodeBlock 
            code="npm install react react-dom tailwindcss @radix-ui/react-primitives" 
            language="bash"
            title="Terminal"
          />
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
            <Terminal size={20} className="text-primary-main" />
            3. Configure o Tailwind CSS
          </h3>
          <p className="text-sm text-text-secondary mb-4">
            O Migo utiliza Tailwind CSS. Adicione a configuração necessária ao seu arquivo tailwind.config.js:
          </p>
          <CodeBlock 
            code={`// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#00838F",
          light: "#4FB3BF",
          dark: "#005662",
          hover: "#E0F7FA",
        },
        secondary: {
          main: "#FFB300",
          light: "#FFE54C",
          dark: "#C68400",
        },
        mui: {
          "text-primary": "#1A2027",
          "text-secondary": "#3E5060", 
          "sidebar": "#F7F9FB",
          "border": "#E5EAF2",
        }
      },
    },
  },
  plugins: [],
};`} 
            language="javascript"
            title="tailwind.config.js"
          />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-medium text-gray-900">Uso básico</h2>
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-lg font-medium mb-4">Importe e use os componentes</h3>
          <p className="text-sm text-text-secondary mb-4">
            Agora você pode importar e utilizar qualquer componente do Migo Design System em sua aplicação:
          </p>
          <CodeBlock 
            code={`import React from 'react';
import { Button, Input, Card } from '@amicci/migo-ds';

function MyComponent() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-medium mb-4">Exemplo de formulário</h2>
      <div className="space-y-4">
        <Input
          label="Nome completo"
          placeholder="Digite seu nome"
          variant="outlined"
        />
        <Input
          label="E-mail"
          placeholder="Digite seu e-mail"
          variant="outlined"
          type="email"
        />
        <Button>Enviar</Button>
      </div>
    </Card>
  );
}

export default MyComponent;`} 
            language="jsx"
            title="MyComponent.jsx"
          />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-medium text-gray-900">Configuração para projetos internos</h2>
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
            <Database size={20} className="text-primary-main" />
            Acesso ao repositório privado
          </h3>
          <p className="text-sm text-text-secondary mb-4">
            Para colaboradores e prestadores de serviço da Amicci, siga estas etapas adicionais:
          </p>
          <ol className="list-decimal pl-6 space-y-4 text-sm">
            <li>
              Solicite acesso ao repositório privado do Migo através do time de Engenharia
            </li>
            <li>
              Configure suas credenciais de acesso ao NPM privado da Amicci:
              <CodeBlock 
                code={`npm login --registry=https://npm.pkg.github.com --scope=@amicci
                
# Quando solicitado:
Username: seu-usuario-github
Password: seu-token-github
Email: seu-email@amicci.com.br`} 
                language="bash"
                title="Terminal"
              />
            </li>
            <li>
              Configure o arquivo .npmrc na raiz do seu projeto:
              <CodeBlock 
                code={`@amicci:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=SEU_TOKEN_AQUI`} 
                language="plaintext"
                title=".npmrc"
              />
            </li>
          </ol>
        </div>
      </section>

      <section className="space-y-6 pb-12">
        <h2 className="text-2xl font-medium text-gray-900">Suporte</h2>
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <p className="text-sm text-text-secondary mb-4">
            Se encontrar problemas ou tiver dúvidas sobre a instalação ou uso do Migo Design System, entre em contato:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium mb-2">Time de Engenharia</h4>
              <p className="text-sm text-text-secondary">
                Para problemas técnicos e implementação
              </p>
              <a 
                href="mailto:engenharia@amicci.com.br"
                className="text-primary-main hover:text-primary-dark text-sm inline-flex items-center mt-2"
              >
                engenharia@amicci.com.br
              </a>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium mb-2">Time de Design</h4>
              <p className="text-sm text-text-secondary">
                Para dúvidas sobre design e usabilidade
              </p>
              <a 
                href="mailto:design@amicci.com.br"
                className="text-primary-main hover:text-primary-dark text-sm inline-flex items-center mt-2"
              >
                design@amicci.com.br
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Installation;
