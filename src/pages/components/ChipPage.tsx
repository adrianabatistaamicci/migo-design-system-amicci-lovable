
import React from 'react';
import Header from '@/components/library-components/Header';
import DocumentationSkeleton from '@/components/library-components/DocumentationSkeleton';
import { Chip } from '@/components/ui/chip';
import { Card, CardContent } from '@/components/ui/card';

const ChipPage = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Chip"
        description="Componentes compactos para representar entradas, atributos ou ações"
        type="components"
      />
      
      <DocumentationSkeleton>
        <p className="text-gray-600 mb-6">
          Chips são elementos compactos que representam uma entrada, atributo ou ação. Eles são comumente usados para filtros, tags, 
          seleções e indicadores de status.
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                Esta seção está em desenvolvimento com exemplos avançados. Por enquanto, são apresentados exemplos básicos.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-medium mt-8 mb-4">Exemplos de Chips</h2>
        
        <div className="flex flex-wrap gap-3 mb-8">
          <Chip>Básico</Chip>
          <Chip variant="default" color="primary">Primário</Chip>
          <Chip variant="default" color="secondary">Secundário</Chip>
          <Chip variant="default" color="warning">Aviso</Chip>
          <Chip variant="default" color="error">Erro</Chip>
          <Chip variant="default" color="success">Sucesso</Chip>
        </div>
        
        <div className="flex flex-wrap gap-3 mb-8">
          <Chip size="sm">Pequeno</Chip>
          <Chip>Médio</Chip>
          <Chip size="lg">Grande</Chip>
        </div>
        
        <h2 className="text-xl font-medium mt-10 mb-4">Quando utilizar</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
          <li>Para representar filtros em mecanismos de busca</li>
          <li>Como tags categorizando conteúdo</li>
          <li>Para mostrar seleções de usuário, especialmente em campos de entrada</li>
          <li>Como indicadores de status ou categorias</li>
          <li>Em formulários para seleções múltiplas</li>
        </ul>
        
        <h2 className="text-xl font-medium mt-10 mb-4">Considerações de design</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Mantenha os chips concisos, com texto curto e claro</li>
          <li>Use cores consistentes para representar categorias semelhantes</li>
          <li>Considere a densidade de informação ao decidir o tamanho</li>
          <li>Para chips interativos, forneça feedback visual claro ao passar o mouse e clicar</li>
          <li>Em dispositivos móveis, garanta que os chips sejam grandes o suficiente para interações por toque</li>
        </ul>

        <Card className="mt-10">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-2">Próximos passos</h3>
            <p className="text-gray-600">
              Em breve serão adicionados mais exemplos de chips interativos, chips com ícones e avatares, 
              e exemplos contextuais de uso.
            </p>
          </CardContent>
        </Card>
      </DocumentationSkeleton>
    </div>
  );
};

export default ChipPage;
