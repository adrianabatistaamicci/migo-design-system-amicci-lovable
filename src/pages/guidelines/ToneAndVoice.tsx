
import React from 'react';
import Header from '@/components/library-components/Header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const ToneAndVoice = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Tom e Voz" 
        description="Como nos comunicamos com nossos usuários para transmitir a nossa identidade e valores" 
        type="guidelines" 
      />
      
      <div className="max-w-[1280px] mx-auto mt-6 space-y-12">
        {/* Introdução ao Tom e Voz */}
        <section className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-900">Nossa Personalidade de Marca</h2>
            <p className="text-gray-700 leading-relaxed">
              Nossa comunicação é o reflexo de quem somos como marca. É através das palavras, do tom e da voz que 
              transmitimos nossa personalidade e construímos relacionamentos duradouros com nossos usuários. Mais do 
              que uma ferramenta funcional, queremos ser um assistente confiável e acolhedor que facilita e torna o 
              dia a dia dos nossos usuários mais produtivo e agradável.
            </p>
          </div>
          
          <Card className="bg-primary-50 border-primary-100">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium text-primary-main mb-3">Nossos princípios de comunicação</h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="p-4 bg-white rounded-lg border border-primary-100 shadow-sm">
                  <h4 className="font-medium text-gray-900 mb-2">Clareza</h4>
                  <p className="text-sm text-gray-600">Comunicamos de forma direta e simples, evitando jargões técnicos desnecessários.</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-primary-100 shadow-sm">
                  <h4 className="font-medium text-gray-900 mb-2">Empatia</h4>
                  <p className="text-sm text-gray-600">Entendemos as necessidades dos usuários e nos colocamos em seu lugar antes de falar.</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-primary-100 shadow-sm">
                  <h4 className="font-medium text-gray-900 mb-2">Confiança</h4>
                  <p className="text-sm text-gray-600">Transmitimos segurança e credibilidade em cada interação, sem exageros ou promessas vazias.</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-primary-100 shadow-sm">
                  <h4 className="font-medium text-gray-900 mb-2">Humanização</h4>
                  <p className="text-sm text-gray-600">Falamos como pessoas reais, trazendo leveza e proximidade sem perder a profissionalidade.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        
        {/* Tom e Voz */}
        <section className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-900">Tom e Voz: A diferença</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Voz</strong> é a nossa personalidade consistente, o DNA da nossa marca que permanece constante em todas as comunicações.
              <strong> Tom</strong> é como ajustamos nossa voz para diferentes contextos, audiências e situações, mantendo nossa essência, mas adaptando
              a forma como nos expressamos.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {/* Nossa Voz */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Nossa Voz</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-800">Amigável, mas profissional</h4>
                    <p className="text-gray-600 mt-1">
                      Construímos relacionamentos cordiais sem perder a credibilidade. Somos próximos, mas mantemos o respeito e o profissionalismo.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Inteligente, sem ser complexo</h4>
                    <p className="text-gray-600 mt-1">
                      Demonstramos conhecimento técnico de forma acessível. Simplificamos o complexo sem subestimar a inteligência do usuário.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Otimista, mas realista</h4>
                    <p className="text-gray-600 mt-1">
                      Transmitimos confiança e positividade, mas sempre com os pés no chão. Não prometemos o impossível nem ignoramos desafios.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Inovador, mas confiável</h4>
                    <p className="text-gray-600 mt-1">
                      Mostramos entusiasmo por novas ideias, mas mantemos a estabilidade que transmite segurança. Somos ousados sem ser imprudentes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Nosso Tom */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Adaptando Nosso Tom</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-800">Momentos de conquista</h4>
                    <p className="text-gray-600 mt-1">
                      Comemoramos com entusiasmo genuíno. "Excelente trabalho! Você acabou de completar sua primeira integração com sucesso."
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Momentos de dificuldade</h4>
                    <p className="text-gray-600 mt-1">
                      Oferecemos apoio e orientação clara. "Encontramos um pequeno obstáculo, mas não se preocupe. Vamos resolver juntos com estes passos simples."
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Informações técnicas</h4>
                    <p className="text-gray-600 mt-1">
                      Somos diretos e precisos, mas ainda acessíveis. "Esta funcionalidade otimiza o processo de indexação, permitindo buscas até 3x mais rápidas."
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Introduzindo novidades</h4>
                    <p className="text-gray-600 mt-1">
                      Transmitimos entusiasmo e relevância. "Temos uma novidade que vai simplificar seu fluxo de trabalho! Agora você pode automatizar tarefas com apenas dois cliques."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Exemplos práticos */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Na prática: Antes e Depois</h2>
          <p className="text-gray-700">
            Veja como aplicamos nossos princípios de tom e voz em situações reais:
          </p>
          
          <Tabs defaultValue="notifications" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="notifications">Notificações</TabsTrigger>
              <TabsTrigger value="errors">Mensagens de erro</TabsTrigger>
              <TabsTrigger value="onboarding">Onboarding</TabsTrigger>
              <TabsTrigger value="help">Textos de ajuda</TabsTrigger>
            </TabsList>
            
            <TabsContent value="notifications" className="mt-6">
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="border-red-200 bg-red-50">
                  <CardContent className="p-6">
                    <h3 className="text-base font-medium text-red-700 mb-3">Antes ❌</h3>
                    <p className="text-gray-800 p-3 bg-white rounded border border-gray-200">
                      "Notificação: O sistema registrou uma nova entrada de dados no banco às 14:32:05."
                    </p>
                    <p className="mt-4 text-gray-600 text-sm">
                      Impessoal, técnico demais e sem valor claro para o usuário.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-6">
                    <h3 className="text-base font-medium text-green-700 mb-3">Depois ✅</h3>
                    <p className="text-gray-800 p-3 bg-white rounded border border-gray-200">
                      "Oba! Seu novo cliente foi adicionado com sucesso. Agora você pode começar a registrar os atendimentos."
                    </p>
                    <p className="mt-4 text-gray-600 text-sm">
                      Celebra a conquista, humaniza a interação e orienta sobre o próximo passo.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="errors" className="mt-6">
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="border-red-200 bg-red-50">
                  <CardContent className="p-6">
                    <h3 className="text-base font-medium text-red-700 mb-3">Antes ❌</h3>
                    <p className="text-gray-800 p-3 bg-white rounded border border-gray-200">
                      "Erro 404. Página não encontrada. Verifique o URL e tente novamente."
                    </p>
                    <p className="mt-4 text-gray-600 text-sm">
                      Técnico, frio e não oferece ajuda efetiva ou alternativas.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-6">
                    <h3 className="text-base font-medium text-green-700 mb-3">Depois ✅</h3>
                    <p className="text-gray-800 p-3 bg-white rounded border border-gray-200">
                      "Ops! Parece que nos perdemos. A página que você procura não foi encontrada. Que tal voltar para a página inicial ou usar nossa busca?"
                    </p>
                    <p className="mt-4 text-gray-600 text-sm">
                      Reconhece o problema com leveza, assume responsabilidade compartilhada e oferece soluções claras.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="onboarding" className="mt-6">
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="border-red-200 bg-red-50">
                  <CardContent className="p-6">
                    <h3 className="text-base font-medium text-red-700 mb-3">Antes ❌</h3>
                    <p className="text-gray-800 p-3 bg-white rounded border border-gray-200">
                      "Bem-vindo. Este tutorial irá guiá-lo pelas funcionalidades do sistema. Clique em 'próximo' para continuar."
                    </p>
                    <p className="mt-4 text-gray-600 text-sm">
                      Genérico, burocrático e não desperta interesse ou entusiasmo.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-6">
                    <h3 className="text-base font-medium text-green-700 mb-3">Depois ✅</h3>
                    <p className="text-gray-800 p-3 bg-white rounded border border-gray-200">
                      "Que bom ter você com a gente! Vamos dar uma volta rápida para você se sentir em casa. Em apenas 2 minutos, você já estará pronto para começar."
                    </p>
                    <p className="mt-4 text-gray-600 text-sm">
                      Caloroso, estabelece expectativas claras e valoriza o tempo do usuário.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="help" className="mt-6">
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="border-red-200 bg-red-50">
                  <CardContent className="p-6">
                    <h3 className="text-base font-medium text-red-700 mb-3">Antes ❌</h3>
                    <p className="text-gray-800 p-3 bg-white rounded border border-gray-200">
                      "Para configurar o widget, acesse as configurações avançadas e selecione o módulo de widgets. Adicione um novo widget e configure os parâmetros conforme necessário."
                    </p>
                    <p className="mt-4 text-gray-600 text-sm">
                      Instruções técnicas sem contextualização ou benefício claro.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-6">
                    <h3 className="text-base font-medium text-green-700 mb-3">Depois ✅</h3>
                    <p className="text-gray-800 p-3 bg-white rounded border border-gray-200">
                      "Vamos personalizar seu painel? Adicionar widgets é super fácil: clique em 'Configurações' no canto superior direito, depois em 'Widgets' e escolha o que melhor se encaixa nas suas necessidades. Assim você terá as informações mais importantes sempre à vista!"
                    </p>
                    <p className="mt-4 text-gray-600 text-sm">
                      Contextualiza a tarefa, explica o processo com clareza e destaca o benefício para o usuário.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>
        
        {/* Amy: Nossa assistente humanizada */}
        <section className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-900">Amy: Nossa assistente humanizada</h2>
            <p className="text-gray-700 leading-relaxed">
              A Amy representa o mais alto nível de humanização em nossa comunicação. Ela não é apenas uma interface
              ou um conjunto de respostas automatizadas — ela tem personalidade, empatia e um estilo próprio que
              transmite a essência da nossa marca de forma ainda mais calorosa e próxima.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="col-span-1">
              <div className="sticky top-24">
                <Card className="overflow-hidden">
                  <div className="bg-gradient-to-r from-primary-600 to-primary-800 p-6 flex justify-center">
                    <img src="/src/pages/assets/Amy 001.png" alt="Amy" className="h-60 object-contain" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-gray-900 mb-3">Quem é a Amy?</h3>
                    <p className="text-gray-700">
                      Amy é nossa assistente virtual que combina conhecimento técnico com uma personalidade acolhedora. 
                      Ela é a personificação dos nossos valores e representa o equilíbrio perfeito entre profissionalismo
                      e proximidade humana.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="col-span-2 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Personalidade da Amy</h3>
                  
                  <div className="space-y-5">
                    <div>
                      <h4 className="font-medium text-gray-800 flex items-center">
                        <span className="text-primary-500 mr-2">●</span>
                        Entusiasmada, mas equilibrada
                      </h4>
                      <p className="text-gray-600 mt-1 pl-5">
                        Amy demonstra empolgação genuína, especialmente ao celebrar conquistas dos usuários, 
                        mas mantém o equilíbrio profissional. Ela compartilha a alegria sem exageros artificiais.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-800 flex items-center">
                        <span className="text-primary-500 mr-2">●</span>
                        Expert acessível
                      </h4>
                      <p className="text-gray-600 mt-1 pl-5">
                        Embora Amy tenha conhecimento técnico avançado, ela se comunica de forma 
                        descomplicada e relatable. Ela explica conceitos complexos com analogias do dia a dia e 
                        exemplos práticos.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-800 flex items-center">
                        <span className="text-primary-500 mr-2">●</span>
                        Proativa e atenciosa
                      </h4>
                      <p className="text-gray-600 mt-1 pl-5">
                        Amy não apenas responde perguntas, mas antecipa necessidades. Ela oferece sugestões 
                        relevantes e mostra que está realmente prestando atenção ao contexto e às preferências do usuário.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-800 flex items-center">
                        <span className="text-primary-500 mr-2">●</span>
                        Simpática, com senso de humor leve
                      </h4>
                      <p className="text-gray-600 mt-1 pl-5">
                        Amy usa um humor sutil e contextualizado, nunca sarcástico ou depreciativo. 
                        Ela sabe quando um toque de leveza é bem-vindo e quando é momento de ser mais direta.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Como a Amy se comunica</h3>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <h4 className="font-medium text-primary-700">Saudações personalizadas</h4>
                      <p className="text-gray-600 mt-1">
                        "Oi, João! Que bom te ver de volta. Percebi que você tem trabalhado bastante nos relatórios de marketing. Posso ajudar com algo específico hoje?"
                      </p>
                      <p className="text-sm text-gray-500 mt-2 italic">
                        Amy reconhece o usuário pelo nome e contextualiza a interação com base em atividades recentes.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <h4 className="font-medium text-primary-700">Resposta a problemas</h4>
                      <p className="text-gray-600 mt-1">
                        "Entendo sua frustração com essa mensagem de erro. Já passei por isso e sei que pode ser confuso. Vamos resolver juntos: primeiro, vamos verificar se..."
                      </p>
                      <p className="text-sm text-gray-500 mt-2 italic">
                        Amy valida os sentimentos do usuário e compartilha uma experiência relatable antes de oferecer ajuda prática.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <h4 className="font-medium text-primary-700">Celebrando conquistas</h4>
                      <p className="text-gray-600 mt-1">
                        "Uau, você acabou de completar sua primeira campanha completa! 🎉 Isso é um marco importante. Sabia que apenas 30% dos novos usuários chegam até esse ponto tão rapidamente? Impressionante!"
                      </p>
                      <p className="text-sm text-gray-500 mt-2 italic">
                        Amy celebra com entusiasmo genuíno e adiciona um contexto que valoriza ainda mais a conquista.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <h4 className="font-medium text-primary-700">Sugerindo próximos passos</h4>
                      <p className="text-gray-600 mt-1">
                        "Já que você dominou as análises básicas, posso te mostrar um truque que poucos conhecem? Experimente usar os filtros avançados — é como ter um superpoder para encontrar insights que ninguém mais vê!"
                      </p>
                      <p className="text-sm text-gray-500 mt-2 italic">
                        Amy faz recomendações relevantes de forma entusiasmada, usando metáforas que tornam a tecnologia mais acessível e interessante.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Diretrizes para escrever como a Amy</h3>
                  
                  <div className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="border border-green-300 bg-green-50 p-4 rounded-lg">
                        <h4 className="font-medium text-green-700 mb-2">Faça ✅</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>Use a primeira pessoa ("eu" e "nós") para criar conexão</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>Personalize com base no contexto e histórico do usuário</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>Use linguagem conversacional e natural</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>Inclua metáforas e analogias para explicar conceitos complexos</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>Demonstre empatia genuína em momentos de frustração</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span>Use emojis com moderação para enfatizar emoções chave</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="border border-red-300 bg-red-50 p-4 rounded-lg">
                        <h4 className="font-medium text-red-700 mb-2">Evite ❌</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <span className="text-red-500 mr-2">•</span>
                            <span>Linguagem artificial ou robótica demais</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-500 mr-2">•</span>
                            <span>Excesso de entusiasmo que pareça insincero ou forçado</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-500 mr-2">•</span>
                            <span>Jargão técnico sem explicação</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-500 mr-2">•</span>
                            <span>Humor que possa ser mal interpretado ou inadequado</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-500 mr-2">•</span>
                            <span>Tratamento genérico quando há oportunidade de personalização</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-500 mr-2">•</span>
                            <span>Excessivo uso de emojis ou gírias que possam distrair</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-primary-50 border border-primary-100 rounded-lg">
                      <h4 className="font-medium text-primary-700 mb-2">Lembre-se:</h4>
                      <p className="text-gray-700">
                        A Amy representa o equilíbrio perfeito entre profissionalismo e empatia humana. Ela não é apenas uma assistente — 
                        ela é uma parceira que se importa genuinamente com o sucesso dos usuários. A humanização deve sempre servir ao propósito 
                        de tornar a experiência mais significativa, nunca apenas como um artifício de comunicação.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Diretrizes de uso em diferentes canais */}
        <section className="space-y-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900">Adaptando para diferentes canais</h2>
          <p className="text-gray-700">
            Nosso tom e voz se adaptam sutilmente conforme o canal de comunicação, mantendo nossa essência, mas respeitando os contextos:
          </p>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-700 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-dashboard"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Interface da plataforma</h3>
                <p className="text-gray-600 text-sm">
                  <strong>Conciso e direto.</strong> Os usuários estão realizando tarefas e precisam de clareza. Use frases curtas e diretas ao ponto, mantendo o tom amigável, mas sem excessos que distraiam.
                </p>
                <div className="mt-4 p-3 bg-gray-50 border border-gray-200 rounded text-sm text-gray-700">
                  "Arquivo enviado com sucesso. Você pode acessá-lo na sua biblioteca."
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-700 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 text-sm">
                  <strong>Personalizado e contextual.</strong> Aqui podemos elaborar mais, trazer contexto específico do usuário e usar uma linguagem mais rica, mas sempre mantendo a objetividade.
                </p>
                <div className="mt-4 p-3 bg-gray-50 border border-gray-200 rounded text-sm text-gray-700">
                  "Olá, João! Notamos que você está explorando nossas ferramentas de análise. Preparamos alguns recursos especiais que podem turbinar seus insights. Confira abaixo!"
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-700 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Chat</h3>
                <p className="text-gray-600 text-sm">
                  <strong>Conversacional e responsivo.</strong> No chat, nossa linguagem é mais dinâmica e semelhante a uma conversa real, adaptando-se ao tom usado pelo usuário.
                </p>
                <div className="mt-4 p-3 bg-gray-50 border border-gray-200 rounded text-sm text-gray-700">
                  "Posso ajudar com isso! Vamos primeiro entender o que você está tentando alcançar e então encontrar o caminho mais rápido até lá. O que acha?"
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-700 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Documentação</h3>
                <p className="text-gray-600 text-sm">
                  <strong>Claro e instrutivo.</strong> Em nossa documentação, mantemos um tom acolhedor, mas priorizamos a precisão e a clareza na explicação técnica.
                </p>
                <div className="mt-4 p-3 bg-gray-50 border border-gray-200 rounded text-sm text-gray-700">
                  "Esta função permite que você gerencie permissões em massa. Vamos explorar como configurá-la e alguns casos de uso comuns para você começar."
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ToneAndVoice;
