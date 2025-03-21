
import React from 'react';
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import FoundationsHeader from '@/components/library-components/FoundationsHeader';
import { TailwindTabs } from '@/components/ui/tailwind-tabs';

// Define tabs for the TailwindTabs component
const typographyTabs = [
  { name: 'Visão geral', value: 'overview' },
  { name: 'Estilos', value: 'styles' },
  { name: 'Uso', value: 'usage' },
  { name: 'Acessibilidade', value: 'accessibility' },
];

const Typography = () => {
  return (
    <div className="w-full animate-fade-in">
      <FoundationsHeader 
        title="Typography" 
        description="Estilos de texto e tokens de tipografia utilizados na aplicação"
      />
      
      <TailwindTabs 
        tabs={typographyTabs}
        variant="pillsGray"
        defaultValue="overview"
        className="w-full mb-6"
      >
        <TabsContent value="overview">
          <div className="space-y-6">
            <div className="rounded-lg border p-6">
              <h2 className="text-2xl font-semibold mb-4">Sistema de Tipografia</h2>
              <p className="text-gray-600 mb-4">
                Nossa tipografia é projetada para oferecer legibilidade e hierarquia clara em toda a aplicação.
                Utilizamos uma escala de tamanhos consistente e uma família de fontes cuidadosamente selecionada.
              </p>
              
              <Separator className="my-6" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium mb-2">Família de fontes principal</h3>
                  <div className="bg-gray-50 rounded-md p-4">
                    <p className="text-xl mb-2 font-normal">Inter</p>
                    <p className="text-sm text-gray-500">
                      Uma família de fontes sans-serif projetada para alta legibilidade em telas.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Pesos utilizados</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-20">400</div>
                      <div className="font-normal">Regular</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-20">500</div>
                      <div className="font-medium">Medium</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-20">600</div>
                      <div className="font-semibold">Semibold</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-20">700</div>
                      <div className="font-bold">Bold</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <Separator className="my-6" />
              
              <h3 className="text-lg font-medium mb-4">Escala de tipografia</h3>
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <p className="text-sm text-gray-500 mb-1">Display (48px/3rem)</p>
                  <p className="text-5xl">Aa Bb Cc Dd Ee Ff</p>
                </div>
                <div className="border-b pb-4">
                  <p className="text-sm text-gray-500 mb-1">H1 (32px/2rem)</p>
                  <p className="text-4xl">Aa Bb Cc Dd Ee Ff</p>
                </div>
                <div className="border-b pb-4">
                  <p className="text-sm text-gray-500 mb-1">H2 (24px/1.5rem)</p>
                  <p className="text-3xl">Aa Bb Cc Dd Ee Ff</p>
                </div>
                <div className="border-b pb-4">
                  <p className="text-sm text-gray-500 mb-1">H3 (20px/1.25rem)</p>
                  <p className="text-2xl">Aa Bb Cc Dd Ee Ff</p>
                </div>
                <div className="border-b pb-4">
                  <p className="text-sm text-gray-500 mb-1">H4 (18px/1.125rem)</p>
                  <p className="text-xl">Aa Bb Cc Dd Ee Ff</p>
                </div>
                <div className="border-b pb-4">
                  <p className="text-sm text-gray-500 mb-1">H5 (16px/1rem)</p>
                  <p className="text-lg">Aa Bb Cc Dd Ee Ff</p>
                </div>
                <div className="border-b pb-4">
                  <p className="text-sm text-gray-500 mb-1">Body 1 (16px/1rem)</p>
                  <p className="text-base">Aa Bb Cc Dd Ee Ff</p>
                </div>
                <div className="border-b pb-4">
                  <p className="text-sm text-gray-500 mb-1">Body 2 (14px/0.875rem)</p>
                  <p className="text-sm">Aa Bb Cc Dd Ee Ff</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Caption (12px/0.75rem)</p>
                  <p className="text-xs">Aa Bb Cc Dd Ee Ff</p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="styles">
          <div className="space-y-6">
            <div className="rounded-lg border p-6">
              <h2 className="text-2xl font-semibold mb-4">Estilos de Texto</h2>
              
              <Separator className="my-6" />
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">Headings</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-md">
                      <h1 className="text-4xl font-bold">Heading 1</h1>
                      <p className="text-sm text-gray-500 mt-2">32px (2rem) | Bold</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <h2 className="text-3xl font-semibold">Heading 2</h2>
                      <p className="text-sm text-gray-500 mt-2">24px (1.5rem) | Semibold</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <h3 className="text-2xl font-medium">Heading 3</h3>
                      <p className="text-sm text-gray-500 mt-2">20px (1.25rem) | Medium</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <h4 className="text-xl font-medium">Heading 4</h4>
                      <p className="text-sm text-gray-500 mt-2">18px (1.125rem) | Medium</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <h5 className="text-lg font-medium">Heading 5</h5>
                      <p className="text-sm text-gray-500 mt-2">16px (1rem) | Medium</p>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Body Text</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-md">
                      <p className="text-base">Body 1: This is a paragraph with standard body text. It's used for the main content of the page.</p>
                      <p className="text-sm text-gray-500 mt-2">16px (1rem) | Regular</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <p className="text-sm">Body 2: This is a slightly smaller paragraph used for secondary content or UI elements.</p>
                      <p className="text-sm text-gray-500 mt-2">14px (0.875rem) | Regular</p>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Utilidades</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-md">
                      <p className="text-xs">Caption: Used for auxiliary information like timestamps, labels, or help text.</p>
                      <p className="text-sm text-gray-500 mt-2">12px (0.75rem) | Regular</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <p className="text-sm uppercase tracking-wider font-medium">Small Caps: Used for section headers and emphasis.</p>
                      <p className="text-sm text-gray-500 mt-2">14px (0.875rem) | Medium | Uppercase | Tracking Wide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="usage">
          <div className="space-y-6">
            <div className="rounded-lg border p-6">
              <h2 className="text-2xl font-semibold mb-4">Como Usar a Tipografia</h2>
              <p className="text-gray-600 mb-6">
                Aplicar o sistema tipográfico de forma consistente ajuda a criar uma hierarquia visual e melhorar a experiência do usuário.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium mb-3">Princípios Gerais</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Use a hierarquia tipográfica para guiar os usuários pelo conteúdo</li>
                    <li>Mantenha o contraste adequado para garantir legibilidade</li>
                    <li>Limite o número de tamanhos de fonte em uma única página</li>
                    <li>Respeite o espaçamento vertical entre elementos de texto</li>
                    <li>Use pesos de fonte apropriados para criar ênfase</li>
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-medium mb-3">Hierarquia de Texto</h3>
                  <div className="bg-gray-50 p-6 rounded-md">
                    <h1 className="text-3xl font-bold mb-4">Título da Página</h1>
                    <h2 className="text-2xl font-semibold mb-3">Seção Principal</h2>
                    <p className="text-base mb-4">
                      Este é um exemplo de texto do corpo principal que explica o conteúdo desta seção. 
                      O texto do corpo deve ser fácil de ler e ter um bom contraste com o fundo.
                    </p>
                    <h3 className="text-xl font-medium mb-2">Subseção</h3>
                    <p className="text-base mb-3">
                      Mais detalhes sobre um tópico específico dentro da seção principal.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm mb-4">
                      <li>Item da lista usando texto Body 2</li>
                      <li>Outro item da lista com informações secundárias</li>
                    </ul>
                    <p className="text-xs text-gray-500">
                      Informação auxiliar ou nota de rodapé usando texto Caption.
                    </p>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-medium mb-3">Exemplos de Interface</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border rounded-md overflow-hidden">
                      <div className="bg-gray-100 px-4 py-3 border-b">
                        <h4 className="font-medium">Exemplo de Card</h4>
                      </div>
                      <div className="p-4">
                        <h5 className="text-lg font-medium mb-2">Título do Card</h5>
                        <p className="text-sm text-gray-600 mb-4">
                          Este é um exemplo de como a tipografia deve ser aplicada em componentes de card.
                        </p>
                        <button className="text-sm text-primary-main font-medium">Ação do Card</button>
                      </div>
                    </div>
                    
                    <div className="border rounded-md overflow-hidden">
                      <div className="bg-gray-100 px-4 py-3 border-b">
                        <h4 className="font-medium">Formulário</h4>
                      </div>
                      <div className="p-4">
                        <div className="mb-4">
                          <label className="block text-sm font-medium mb-1">Nome do campo</label>
                          <input type="text" className="w-full border rounded px-3 py-2" placeholder="Placeholder" />
                          <p className="text-xs text-gray-500 mt-1">Texto de ajuda para o campo</p>
                        </div>
                        <button className="bg-primary-main text-white px-4 py-2 rounded text-sm font-medium">
                          Enviar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="accessibility">
          <div className="space-y-6">
            <div className="rounded-lg border p-6">
              <h2 className="text-2xl font-semibold mb-4">Acessibilidade Tipográfica</h2>
              <p className="text-gray-600 mb-6">
                Uma tipografia acessível é essencial para garantir que nossos produtos sejam utilizáveis por todos.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium mb-3">Princípios de Acessibilidade</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Mantenha tamanhos de fonte legíveis (mínimo 16px para texto principal)</li>
                    <li>Garanta contraste adequado entre texto e fundo (mínimo 4.5:1 para texto padrão)</li>
                    <li>Use espaçamento adequado entre linhas (line-height de pelo menos 1.5)</li>
                    <li>Evite usar apenas cor para transmitir informações</li>
                    <li>Permita que o texto seja redimensionado até 200% sem perda de funcionalidade</li>
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-medium mb-3">Exemplos de Contraste</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-md overflow-hidden">
                      <div className="bg-white p-4 border">
                        <p className="text-gray-900 font-medium mb-1">Contraste Alto (Bom)</p>
                        <p className="text-gray-900">
                          Este texto tem uma proporção de contraste de 21:1, muito acima do recomendado.
                        </p>
                      </div>
                    </div>
                    
                    <div className="rounded-md overflow-hidden">
                      <div className="bg-gray-100 p-4 border">
                        <p className="text-gray-900 font-medium mb-1">Contraste Bom</p>
                        <p className="text-gray-700">
                          Este texto tem uma proporção de contraste de aproximadamente 8:1, bem acima do mínimo.
                        </p>
                      </div>
                    </div>
                    
                    <div className="rounded-md overflow-hidden">
                      <div className="bg-gray-200 p-4 border">
                        <p className="text-gray-600 font-medium mb-1">Contraste Mínimo</p>
                        <p className="text-gray-500">
                          Este texto tem uma proporção de contraste próxima de 4.5:1, o mínimo recomendado.
                        </p>
                      </div>
                    </div>
                    
                    <div className="rounded-md overflow-hidden">
                      <div className="bg-gray-100 p-4 border">
                        <p className="text-gray-400 font-medium mb-1">Contraste Insuficiente (Evitar)</p>
                        <p className="text-gray-300">
                          Este texto tem contraste insuficiente e deve ser evitado.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-medium mb-3">Hierarquia Semântica</h3>
                  <p className="text-gray-600 mb-4">
                    Use tags HTML semânticas apropriadas (h1-h6, p, etc.) para criar uma estrutura adequada para tecnologias assistivas.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-md space-y-4">
                    <div>
                      <code className="text-sm bg-gray-100 px-2 py-1 rounded">&lt;h1&gt;</code>
                      <p className="text-sm text-gray-600 mt-1">
                        Usado apenas uma vez por página, como título principal
                      </p>
                    </div>
                    <div>
                      <code className="text-sm bg-gray-100 px-2 py-1 rounded">&lt;h2&gt;</code>
                      <p className="text-sm text-gray-600 mt-1">
                        Usado para seções principais da página
                      </p>
                    </div>
                    <div>
                      <code className="text-sm bg-gray-100 px-2 py-1 rounded">&lt;h3&gt; - &lt;h6&gt;</code>
                      <p className="text-sm text-gray-600 mt-1">
                        Usado para subseções, em ordem hierárquica
                      </p>
                    </div>
                    <div>
                      <code className="text-sm bg-gray-100 px-2 py-1 rounded">&lt;p&gt;</code>
                      <p className="text-sm text-gray-600 mt-1">
                        Usado para parágrafos de texto
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </TailwindTabs>
    </div>
  );
};

export default Typography;
