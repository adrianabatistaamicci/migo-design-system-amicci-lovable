
import React from 'react';
import ComponentCard from '@/components/ComponentCard';
import Header from '@/components/library-components/Header';
import CodeBlock from '@/components/CodeBlock';

const TitleHeadings = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Title & Headings"
        description="Componentes para títulos e cabeçalhos em diferentes níveis hierárquicos."
        type="components"
      />

      <div className="space-y-10 my-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Descrição</h2>
          <p className="text-gray-700 mb-4">
            Títulos e cabeçalhos são elementos fundamentais para organizar a hierarquia de conteúdo nas interfaces.
            Eles ajudam os usuários a escanear e compreender rapidamente a estrutura da página.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Exemplos</h2>

          <div>
            <h3 className="text-xl font-medium mb-3">Título Principal</h3>
            <ComponentCard title="Título h1">
              <div className="p-4">
                <h1 className="text-4xl font-medium tracking-tight text-gray-950">Título Principal</h1>
                <p className="text-gray-700 mt-2">Descrição ou subtexto complementar ao título principal.</p>
              </div>
            </ComponentCard>
            <CodeBlock 
              title="Implementação"
              language="jsx"
              code={`<h1 className="text-4xl font-medium tracking-tight text-gray-950">Título Principal</h1>
<p className="text-gray-700 mt-2">Descrição ou subtexto complementar ao título principal.</p>`}
            />
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-medium mb-3">Título de Seção</h3>
            <ComponentCard title="Título h2">
              <div className="p-4">
                <h2 className="text-2xl font-semibold text-gray-900">Título de Seção</h2>
                <p className="text-gray-600 mt-1">Informação complementar ao título de seção.</p>
              </div>
            </ComponentCard>
            <CodeBlock 
              title="Implementação"
              language="jsx"
              code={`<h2 className="text-2xl font-semibold text-gray-900">Título de Seção</h2>
<p className="text-gray-600 mt-1">Informação complementar ao título de seção.</p>`}
            />
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-medium mb-3">Título de Card</h3>
            <ComponentCard title="Título de Card">
              <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Título do Card</h3>
                  <button className="text-sm text-primary-main hover:text-primary-dark font-medium">Ver tudo</button>
                </div>
                <p className="text-gray-600">Conteúdo do card aqui...</p>
              </div>
            </ComponentCard>
            <CodeBlock 
              title="Implementação"
              language="jsx"
              code={`<div className="p-4 border border-gray-200 rounded-lg shadow-sm">
  <div className="flex justify-between items-center mb-4">
    <h3 className="text-lg font-medium text-gray-900">Título do Card</h3>
    <button className="text-sm text-primary-main hover:text-primary-dark font-medium">Ver tudo</button>
  </div>
  <p className="text-gray-600">Conteúdo do card aqui...</p>
</div>`}
            />
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-medium mb-3">Título com Ação</h3>
            <ComponentCard title="Título com Botões">
              <div className="p-4 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-medium text-gray-900">Usuários</h2>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1.5 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                      Exportar
                    </button>
                    <button className="px-3 py-1.5 bg-primary-main border border-primary-main rounded-md text-sm font-medium text-white hover:bg-primary-dark">
                      Adicionar
                    </button>
                  </div>
                </div>
              </div>
            </ComponentCard>
            <CodeBlock 
              title="Implementação"
              language="jsx"
              code={`<div className="p-4 border-b border-gray-200">
  <div className="flex justify-between items-center">
    <h2 className="text-xl font-medium text-gray-900">Usuários</h2>
    <div className="flex space-x-2">
      <button className="px-3 py-1.5 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
        Exportar
      </button>
      <button className="px-3 py-1.5 bg-primary-main border border-primary-main rounded-md text-sm font-medium text-white hover:bg-primary-dark">
        Adicionar
      </button>
    </div>
  </div>
</div>`}
            />
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-medium mb-3">Título com Badge</h3>
            <ComponentCard title="Título com Badge">
              <div className="p-4">
                <div className="flex items-center space-x-3">
                  <h3 className="text-lg font-medium text-gray-900">Pedidos Recentes</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Novo
                  </span>
                </div>
              </div>
            </ComponentCard>
            <CodeBlock 
              title="Implementação"
              language="jsx"
              code={`<div className="flex items-center space-x-3">
  <h3 className="text-lg font-medium text-gray-900">Pedidos Recentes</h3>
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
    Novo
  </span>
</div>`}
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Boas Práticas</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Mantenha uma hierarquia visual clara entre diferentes níveis de títulos.</li>
            <li>Use tamanhos, pesos e cores consistentes para estabelecer uma hierarquia visual.</li>
            <li>Evite ter mais de 3-4 níveis de títulos em uma única página.</li>
            <li>Certifique-se de que os títulos sejam descritivos e representem adequadamente o conteúdo.</li>
            <li>Para acessibilidade, mantenha a estrutura semântica (h1, h2, h3, etc.) alinhada com a hierarquia visual.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TitleHeadings;
