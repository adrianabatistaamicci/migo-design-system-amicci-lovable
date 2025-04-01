
import React from 'react';
import Header from '@/components/library-components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HelpCircle, Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const ContextualHelp = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Contextual Help"
        description="Componentes para oferecer ajuda contextual aos usuários"
        type="components"
      />
      
      <div className="mt-8">
        <p className="text-gray-600 mb-6">
          Componentes de ajuda contextual fornecem informações adicionais e orientações aos usuários no momento e local exatos em que precisam. 
          Eles ajudam a melhorar a experiência do usuário, reduzindo a curva de aprendizado e a frustração.
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

        <h2 className="text-xl font-medium mt-8 mb-4">Exemplos de Ajuda Contextual</h2>
        
        <div className="space-y-8 mb-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-3">Tooltips</h3>
              <p className="text-gray-600 mb-4">
                Tooltips são dicas que aparecem quando o usuário passa o mouse sobre um elemento, fornecendo informações adicionais.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon">
                        <HelpCircle className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Dica útil sobre esta funcionalidade</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">
                        Passe o mouse aqui
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Explicação detalhada sobre esta ação</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-3">Badges de informação</h3>
              <p className="text-gray-600 mb-4">
                Ícones de informação que fornecem contexto adicional quando necessário.
              </p>
              
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Campo obrigatório</span>
                <Info className="h-4 w-4 text-gray-400" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-3">Mensagens de contexto em formulários</h3>
              <p className="text-gray-600 mb-4">
                Texto de ajuda diretamente abaixo dos campos de formulário.
              </p>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
                  <input 
                    type="password" 
                    id="password"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    A senha deve ter pelo menos 8 caracteres e incluir letras maiúsculas, minúsculas e números.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <h2 className="text-xl font-medium mt-10 mb-4">Quando utilizar</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
          <li>Para explicar campos de formulário complexos ou não familiares</li>
          <li>Para fornecer orientações sobre funcionalidades avançadas</li>
          <li>Para esclarecer terminologia específica da aplicação</li>
          <li>Para indicar requisitos ou restrições</li>
          <li>Para explicar consequências de ações importantes</li>
        </ul>
        
        <h2 className="text-xl font-medium mt-10 mb-4">Considerações de design</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Mantenha o texto conciso e direto ao ponto</li>
          <li>Use linguagem clara e acessível, evitando jargões técnicos quando possível</li>
          <li>Posicione a ajuda próxima ao elemento a que se refere</li>
          <li>Considere diferentes tipos de ajuda contextual para diferentes necessidades</li>
          <li>Não sobrecarregue a interface com demasiada ajuda contextual</li>
        </ul>

        <Card className="mt-10">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-2">Próximos passos</h3>
            <p className="text-gray-600">
              Em breve serão adicionados exemplos mais avançados de ajuda contextual, como guias passo a passo, 
              walkthroughs interativos e sistemas de ajuda progressiva.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContextualHelp;
