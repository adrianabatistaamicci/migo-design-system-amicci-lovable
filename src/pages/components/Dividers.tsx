
/**
 * @protected
 * ATENÇÃO: Este arquivo contém conteúdo finalizado e aprovado.
 * Não deve ser alterado diretamente pelo assistente AI.
 * Apenas atualizações de componentes devem ser refletidas.
 */

import React from 'react';
import Header from '@/components/library-components/Header';
import CodeBlock from '@/components/CodeBlock';
import ComponentCard from '@/components/ComponentCard';

const Dividers = () => {
  const basicDividerCode = `// Implementação básica com Tailwind CSS
<div className="border-b border-gray-200"></div>`;

  const insetDividerCode = `// Implementação com margem interna
<div className="border-b border-gray-200 mx-4"></div>`;

  const withTextDividerCode = `// Implementação com texto
<div className="flex items-center">
  <div className="flex-grow border-t border-gray-200"></div>
  <span className="mx-4 text-gray-500">Ou</span>
  <div className="flex-grow border-t border-gray-200"></div>
</div>`;

  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Dividers" 
        description="Linhas horizontais para separar seções de conteúdo." 
        type="components" 
      />
      
      <div className="mt-8 space-y-10">
        {/* Exemplos de Dividers */}
        <section>
          <h2 className="text-xl font-medium mb-6">Exemplos</h2>

          <div className="space-y-8">
            <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-medium mb-4">Divisor Básico</h3>
                <div className="mb-6">
                  <div className="border-b border-gray-200"></div>
                </div>
              </div>
              <CodeBlock 
                code={basicDividerCode}
                language="tsx"
                title="Implementação do Divisor Básico"
                showCode={false}
              />
            </div>
            
            <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-medium mb-4">Divisor Inserido</h3>
                <div className="mb-6">
                  <div className="border-b border-gray-200 mx-4"></div>
                </div>
              </div>
              <CodeBlock 
                code={insetDividerCode}
                language="tsx"
                title="Implementação do Divisor com Margem"
                showCode={false}
              />
            </div>
            
            <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-medium mb-4">Divisor com Texto</h3>
                <div className="mb-6">
                  <div className="flex items-center">
                    <div className="flex-grow border-t border-gray-200"></div>
                    <span className="mx-4 text-gray-500">Ou</span>
                    <div className="flex-grow border-t border-gray-200"></div>
                  </div>
                </div>
              </div>
              <CodeBlock 
                code={withTextDividerCode}
                language="tsx"
                title="Implementação do Divisor com Texto"
                showCode={false}
              />
            </div>
          </div>
        </section>

        {/* Anatomia e Classes Tailwind */}
        <section>
          <h2 className="text-xl font-medium mb-4">Anatomia do Componente com Tailwind</h2>
          <p className="text-gray-700 mb-4">
            Uma implementação de divisor com Tailwind CSS tipicamente contém:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">div</code> - Elemento container para o divisor</li>
            <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">border-b</code> - Adiciona uma borda na parte inferior</li>
            <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">border-gray-200</code> - Define a cor da borda como cinza</li>
            <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">mx-4</code> - Adiciona margem horizontal (opcional)</li>
          </ul>

          <h3 className="text-lg font-medium mb-4">Classes Tailwind Comuns</h3>
          <CodeBlock code={`// Classes para o divisor básico
<div className="border-b border-gray-200"></div>

// Classes para o divisor com texto
<div className="flex items-center">
  <div className="flex-grow border-t border-gray-200"></div>
  <span className="mx-4 text-gray-500">Ou</span>
  <div className="flex-grow border-t border-gray-200"></div>
</div>`} language="typescript" title="Classes Tailwind Comuns" />
        </section>

        {/* Melhores Práticas */}
        <section className="mb-12">
          <h2 className="text-xl font-medium mb-4">Melhores Práticas</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Use divisores para criar separação visual clara entre diferentes seções de conteúdo.</li>
            <li>Mantenha a cor do divisor consistente com o esquema de cores do seu design system.</li>
            <li>Evite o uso excessivo de divisores, pois eles podem tornar a interface visualmente poluída.</li>
            <li>Considere adicionar margem interna (<code>mx-4</code>, <code>mx-8</code>, etc.) para evitar que o divisor toque as bordas do container.</li>
            <li>Use divisores com texto para indicar uma separação mais significativa entre seções.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Dividers;
