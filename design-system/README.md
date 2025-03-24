
# Migo Design System

O Design System oficial da Amicci, fornecendo componentes React consistentes e reutilizáveis.

## Instalação

```bash
npm install @amicci/migo-design-system
# ou
yarn add @amicci/migo-design-system
# ou
pnpm add @amicci/migo-design-system
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

O Migo Design System inclui componentes baseados no Shadcn UI, mas adaptados para o contexto da Amicci.

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
