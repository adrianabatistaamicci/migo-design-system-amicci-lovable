
# Migo Design System

O Design System oficial da Amicci, fornecendo componentes React consistentes e reutilizáveis.

## Instalação

### Via NPM

```bash
npm install @amicci/migo-design-system
# ou
yarn add @amicci/migo-design-system
# ou
pnpm add @amicci/migo-design-system
```

### Via Repositório Git

```bash
# Clone o repositório
git clone https://github.com/amicci/migo-design-system.git

# Entre no diretório do projeto
cd migo-design-system

# Instale as dependências
npm install

# Execute o build
npm run build

# Opcional: inicie o ambiente de desenvolvimento
npm run dev
```

## Uso

```tsx
import { Button, Card, Input } from '@amicci/migo-design-system';

function App() {
  return (
    <div>
      <Card>
        <h1>Migo Design System</h1>
        <Input placeholder="Digite aqui" />
        <Button>Clique aqui</Button>
      </Card>
    </div>
  );
}
```

## Componentes

O Migo Design System inclui uma ampla variedade de componentes:

### Componentes Básicos
- Button, Input, Card, etc.
- Componentes de formulário como Checkbox, Radio, Select
- Componentes de navegação e layout

### Componentes de Biblioteca
- Footer - Rodapé padronizado 
- Header - Cabeçalho com suporte a títulos e descrições
- HeroSection - Seção destacada para páginas iniciais
- EmptyState - Estado vazio padronizado

### Utilitários
- CodeBlock - Para exibição de código formatado
- ComponentCard - Card para exibição de componentes com preview
- ComponentPreview - Preview de componentes

## Configuração do Tailwind CSS

Adicione o seguinte ao seu arquivo `tailwind.config.js`:

```js
module.exports = {
  content: [
    // ...
    "./node_modules/@amicci/migo-design-system/**/*.{js,ts,jsx,tsx}",
  ],
  // ...
}
```

## Contribuição

Consulte as diretrizes de contribuição internas da Amicci para mais informações.
