
import React from 'react';
import Header from '@/components/library-components/Header';
import DocumentationSkeleton from '@/components/library-components/DocumentationSkeleton';
import { Card, CardContent } from '@/components/ui/card';

const SidebarLayoutsPage = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Sidebar Layouts"
        description="Componentes de layout com barra lateral para diferentes tipos de interfaces de aplicação"
        type="components"
      />
      
      <DocumentationSkeleton>
        <p className="text-gray-600 mb-6">
          Os layouts com barra lateral (sidebar) são estruturas de interface que organizam a navegação e o conteúdo em seções laterais e principais.
          São ideais para aplicativos com muitas opções de navegação e hierarquias complexas de informação.
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
                Esta seção está atualmente em desenvolvimento. Exemplos detalhados de implementação serão adicionados em breve.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-medium mt-8 mb-4">Tipos de Layout com Barra Lateral</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
          <li><strong>Barra lateral fixa:</strong> Permanece visível durante toda a navegação</li>
          <li><strong>Barra lateral colapsável:</strong> Pode ser expandida ou recolhida conforme necessário</li>
          <li><strong>Barra lateral responsiva:</strong> Adapta-se a diferentes tamanhos de tela</li>
          <li><strong>Barra lateral multinível:</strong> Suporta múltiplos níveis de navegação</li>
        </ul>
        
        <h2 className="text-xl font-medium mt-10 mb-4">Quando utilizar</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
          <li>Aplicações administrativas complexas</li>
          <li>Interfaces que necessitam de muitas opções de navegação</li>
          <li>Quando o usuário precisa alternar frequentemente entre diferentes seções</li>
          <li>Sistemas que requerem acesso rápido a funcionalidades diversas</li>
        </ul>
        
        <h2 className="text-xl font-medium mt-10 mb-4">Considerações de design</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Garanta que a barra lateral não compete visualmente com o conteúdo principal</li>
          <li>Forneça indicadores claros de localização atual no sistema</li>
          <li>Considere como a barra lateral se comportará em dispositivos móveis</li>
          <li>Utilize ícones consistentes e reconhecíveis para facilitar a navegação</li>
          <li>Implemente opções de personalização quando apropriado</li>
        </ul>

        <Card className="mt-10">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-2">Próximos passos</h3>
            <p className="text-gray-600">
              Estamos trabalhando para adicionar exemplos interativos de diferentes tipos de layouts com barra lateral.
              Volte em breve para ver as atualizações.
            </p>
          </CardContent>
        </Card>
      </DocumentationSkeleton>
    </div>
  );
};

export default SidebarLayoutsPage;
