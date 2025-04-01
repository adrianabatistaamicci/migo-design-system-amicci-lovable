
import React from 'react';
import Header from '@/components/library-components/Header';
import DocumentationSkeleton from '@/components/library-components/DocumentationSkeleton';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const BadgePage = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Badge"
        description="Componentes para exibir contagens, status e rótulos curtos"
        type="components"
      />
      
      <DocumentationSkeleton>
        <p className="text-gray-600 mb-6">
          Badges são pequenos elementos visuais usados para destacar informações como contagens, status ou rótulos. 
          Eles ajudam a chamar a atenção para elementos importantes e fornecer contexto adicional.
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

        <h2 className="text-xl font-medium mt-8 mb-4">Exemplos de Badges</h2>
        
        <div className="flex flex-wrap gap-3 mb-8 items-center">
          <Badge>Padrão</Badge>
          <Badge variant="secondary">Secundário</Badge>
          <Badge variant="destructive">Destrutivo</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
        
        <div className="flex flex-wrap gap-5 mb-8 items-center">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Notificações</span>
            <Badge>5</Badge>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Status</span>
            <Badge className="bg-green-500 hover:bg-green-600">Ativo</Badge>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Mensagens</span>
            <Badge variant="secondary">3 novas</Badge>
          </div>
        </div>
        
        <h2 className="text-xl font-medium mt-10 mb-4">Quando utilizar</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
          <li>Para indicar contagens (notificações, itens, etc.)</li>
          <li>Para mostrar status (ativo, pendente, resolvido)</li>
          <li>Para destacar informações novas ou importantes</li>
          <li>Para categorizar ou rotular elementos de forma concisa</li>
          <li>Como indicadores de versão ou lançamento</li>
        </ul>
        
        <h2 className="text-xl font-medium mt-10 mb-4">Considerações de design</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Use cores que tenham significado consistente em toda a aplicação</li>
          <li>Mantenha o conteúdo do badge conciso - idealmente poucos caracteres</li>
          <li>Posicione os badges de forma que não obstruam informações importantes</li>
          <li>Considere como os badges se comportam em diferentes tamanhos de tela</li>
          <li>Para acessibilidade, não dependa apenas da cor para transmitir informações</li>
        </ul>

        <Card className="mt-10">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-2">Próximos passos</h3>
            <p className="text-gray-600">
              Em breve serão adicionados mais exemplos de badges em contextos específicos, como em botões, 
              itens de navegação e tabelas.
            </p>
          </CardContent>
        </Card>
      </DocumentationSkeleton>
    </div>
  );
};

export default BadgePage;
