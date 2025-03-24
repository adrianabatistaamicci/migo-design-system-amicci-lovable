
# Guia de Contribuição

## Estrutura do Projeto

O design system está organizado da seguinte forma:

```
design-system/
├── src/
│   ├── components/
│   │   ├── ui/          # Componentes base (botões, inputs, etc.)
│   │   └── ...          # Componentes personalizados
│   ├── lib/
│   │   └── utils.ts     # Utilitários compartilhados
│   └── index.ts         # Arquivo principal de exportação
├── package.json
├── tsconfig.json
└── README.md
```

## Configuração do Ambiente de Desenvolvimento

1. Clone o repositório
2. Instale as dependências:
   ```bash
   cd design-system
   npm install
   ```
3. Execute o script para copiar os componentes (se necessário):
   ```bash
   node copy-components.js
   ```
4. Inicie o modo de desenvolvimento:
   ```bash
   npm run dev
   ```

## Adicionando Novos Componentes

1. Crie o novo componente em `src/components/`
2. Adicione a exportação no arquivo `src/index.ts`
3. Documente o componente com exemplos de uso
4. Certifique-se de que ele seja autônomo e não dependa de código específico da aplicação

## Publicação

Para publicar uma nova versão:

1. Atualize a versão no `package.json`
2. Execute o build:
   ```bash
   npm run build
   ```
3. Publique para o registro npm interno:
   ```bash
   npm publish
   ```

## Convenções de Código

- Use TypeScript para todos os componentes
- Documente as props com JSDoc
- Mantenha os componentes acessíveis e responsivos
- Siga as diretrizes do design system da Amicci
