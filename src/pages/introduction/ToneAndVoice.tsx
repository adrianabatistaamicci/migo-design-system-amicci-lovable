
import React from 'react';
import Header from '@/components/library-components/Header';

const ToneAndVoice = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Tom e Voz" 
        description="Guia de linguagem para comunicação consistente em todos os produtos Amicci" 
        type="foundations" 
        hideChip={true}
      />
      
      <div className="max-w-[1280px] mx-auto space-y-12 mt-8">
        <section id="introducao">
          <h2 className="text-2xl font-semibold mb-4">Introdução</h2>
          <p className="text-gray-700 mb-4">
            Nossa linguagem é um componente essencial da experiência Amicci. Este guia ajuda times de produto, 
            design, marketing e conteúdo a criar comunicações que reflitam nossa personalidade e valores.
          </p>
          <p className="text-gray-700 mb-4">
            Aqui você encontrará diretrizes claras sobre como nos comunicamos com nossos usuários, garantindo 
            consistência e alinhamento com nossa identidade em todos os pontos de contato.
          </p>
        </section>

        <section id="principios">
          <h2 className="text-2xl font-semibold mb-4">Princípios de Comunicação</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-primary-main mb-3">Clareza</h3>
              <p className="text-gray-700">
                Priorizamos mensagens diretas e objetivas. Evitamos jargões técnicos desnecessários e 
                explicamos conceitos complexos de forma acessível.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-primary-main mb-3">Empatia</h3>
              <p className="text-gray-700">
                Reconhecemos as necessidades, desafios e objetivos de nossos usuários. Nos comunicamos 
                com respeito e consideração pelo contexto de cada pessoa.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-primary-main mb-3">Acessibilidade</h3>
              <p className="text-gray-700">
                Criamos conteúdo para todos. Usamos linguagem inclusiva e consideramos diferentes níveis 
                de familiaridade com tecnologia.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-primary-main mb-3">Confiabilidade</h3>
              <p className="text-gray-700">
                Construímos confiança com comunicação precisa e consistente. Somos transparentes sobre 
                nossos produtos e serviços.
              </p>
            </div>
          </div>
        </section>

        <section id="tom">
          <h2 className="text-2xl font-semibold mb-4">Nosso Tom</h2>
          <p className="text-gray-700 mb-6">
            O tom expressa a atitude por trás das nossas palavras. É como falamos com nossos usuários em diferentes 
            contextos e situações.
          </p>
          
          <div className="space-y-6">
            <div className="border-l-4 border-primary-main pl-4">
              <h3 className="text-lg font-medium mb-2">Profissional, mas não formal</h3>
              <p className="text-gray-700">
                Mantemos uma postura profissional, mas evitamos linguagem excessivamente formal ou corporativa. 
                Buscamos um equilíbrio que transmita competência sem criar distanciamento.
              </p>
            </div>
            
            <div className="border-l-4 border-primary-main pl-4">
              <h3 className="text-lg font-medium mb-2">Amigável, mas não casual demais</h3>
              <p className="text-gray-700">
                Nosso tom é acolhedor e cordial, mas mantemos o foco na resolução de necessidades. Evitamos gírias 
                excessivas ou humor que possa não ressoar com todos os usuários.
              </p>
            </div>
            
            <div className="border-l-4 border-primary-main pl-4">
              <h3 className="text-lg font-medium mb-2">Confiante, mas não arrogante</h3>
              <p className="text-gray-700">
                Comunicamos com segurança nossa expertise, mas sempre com humildade. Reconhecemos quando não temos 
                todas as respostas e valorizamos o feedback dos usuários.
              </p>
            </div>
            
            <div className="border-l-4 border-primary-main pl-4">
              <h3 className="text-lg font-medium mb-2">Direto, mas não ríspido</h3>
              <p className="text-gray-700">
                Priorizamos objetividade e clareza, mas sempre com gentileza. Em situações de erro ou problema, 
                comunicamos com empatia e foco na solução.
              </p>
            </div>
          </div>
        </section>

        <section id="voz">
          <h2 className="text-2xl font-semibold mb-4">Nossa Voz</h2>
          <p className="text-gray-700 mb-6">
            Nossa voz reflete quem somos como marca. É constante e representa nossa personalidade, valores e missão.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-primary-main mb-3">O que fazer</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Use a primeira pessoa do plural (nós, nosso) para criar senso de comunidade</li>
                <li>Dirija-se ao usuário diretamente (você, seu) para estabelecer conexão</li>
                <li>Seja conciso e vá direto ao ponto</li>
                <li>Use voz ativa para maior clareza e impacto</li>
                <li>Use termos consistentes em toda a plataforma</li>
                <li>Explique benefícios, não apenas funcionalidades</li>
                <li>Antecipe e responda possíveis dúvidas</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-red-600 mb-3">O que evitar</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Evite jargão técnico desnecessário ou termos rebuscados</li>
                <li>Evite tonalidade condescendente ou paternalista</li>
                <li>Evite exageros ou promessas irrealistas</li>
                <li>Evite frases longas e complexas que dificultam a compreensão</li>
                <li>Evite ambiguidades que possam gerar confusão</li>
                <li>Evite linguagem excludente ou preconceituosa</li>
                <li>Evite culpabilizar o usuário em mensagens de erro</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="amy">
          <h2 className="text-2xl font-semibold mb-4">A Voz da Amy</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <p className="text-gray-700 mb-4">
                Amy é nossa assistente virtual e representa uma persona especial dentro do ecossistema Amicci. 
                Ela tem voz própria e um nível de humanização mais elevado em comparação com outras partes de nossa interface.
              </p>
              
              <h3 className="text-lg font-medium mb-3 mt-6">Características distintas da Amy:</h3>
              
              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary-main">
                  <h4 className="font-medium">Mais pessoal e conversacional</h4>
                  <p className="text-gray-700">Amy usa linguagem mais informal e próxima, como uma assistente real faria.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary-main">
                  <h4 className="font-medium">Expressões de personalidade</h4>
                  <p className="text-gray-700">Amy demonstra entusiasmo, empatia e outras emoções de forma equilibrada.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary-main">
                  <h4 className="font-medium">Adaptabilidade contextual</h4>
                  <p className="text-gray-700">Amy ajusta seu tom conforme o contexto da interação — mais formal em assuntos sérios, mais descontraída em momentos leves.</p>
                </div>
              </div>
              
              <h3 className="text-lg font-medium mb-3">Exemplos de comunicação:</h3>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="text-xs text-gray-500 mb-1">Mensagem de boas-vindas:</p>
                  <p className="text-gray-800">"Oi! Sou a Amy, sua assistente Amicci. Estou aqui para ajudar você a explorar nossa plataforma. Como posso facilitar seu dia hoje?"</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="text-xs text-gray-500 mb-1">Confirmação de ação:</p>
                  <p className="text-gray-800">"Pronto! Acabei de salvar suas alterações. Tudo está configurado do jeito que você pediu. Mais alguma coisa que eu possa ajudar?"</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="text-xs text-gray-500 mb-1">Mensagem de erro:</p>
                  <p className="text-gray-800">"Hmm, parece que encontramos um obstáculo. Não consegui conectar ao servidor neste momento. Vamos tentar novamente? Se o problema persistir, posso mostrar algumas alternativas."</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/3 flex justify-center">
              <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-primary-main">
                <img 
                  src="/src/pages/assets/Amy 004.png" 
                  alt="Amy - Assistente Virtual Amicci" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section id="contextos">
          <h2 className="text-2xl font-semibold mb-4">Adaptando a Comunicação por Contexto</h2>
          
          <div className="space-y-6 mt-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-primary-main mb-3">Mensagens de erro</h3>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Princípios:</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-3">
                    <li>Ser claro sobre o que aconteceu</li>
                    <li>Oferecer soluções ou alternativas quando possível</li>
                    <li>Usar linguagem empática</li>
                    <li>Evitar termos técnicos complexos</li>
                  </ul>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-red-600 mb-1">Evite:</p>
                      <div className="bg-red-50 p-3 rounded text-sm">
                        "Erro 404: Objeto não encontrado no servidor."
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-green-600 mb-1">Prefira:</p>
                      <div className="bg-green-50 p-3 rounded text-sm">
                        "Esta página não foi encontrada. Verifique o endereço ou volte para a página inicial."
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-primary-main mb-3">Orientações para o usuário</h3>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Princípios:</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-3">
                    <li>Fornecer instruções passo a passo</li>
                    <li>Usar linguagem direta e acionável</li>
                    <li>Explicar benefícios de cada ação</li>
                  </ul>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-red-600 mb-1">Evite:</p>
                      <div className="bg-red-50 p-3 rounded text-sm">
                        "É obrigatório o preenchimento de todas as informações do formulário antes de prosseguir."
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-green-600 mb-1">Prefira:</p>
                      <div className="bg-green-50 p-3 rounded text-sm">
                        "Preencha todos os campos para criarmos seu perfil personalizado."
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-primary-main mb-3">Confirmações</h3>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Princípios:</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-3">
                    <li>Confirmar claramente que a ação foi concluída</li>
                    <li>Destacar resultados ou próximos passos</li>
                    <li>Manter a mensagem concisa</li>
                  </ul>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-red-600 mb-1">Evite:</p>
                      <div className="bg-red-50 p-3 rounded text-sm">
                        "Operação realizada com sucesso no sistema."
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-green-600 mb-1">Prefira:</p>
                      <div className="bg-green-50 p-3 rounded text-sm">
                        "Documento salvo! Você pode editá-lo a qualquer momento."
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="aplicando" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Aplicando na Prática</h2>
          <p className="text-gray-700 mb-6">
            Estas diretrizes devem ser aplicadas em todos os pontos de contato com o usuário:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium text-primary-main mb-3">Interface do Produto</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Títulos e cabeçalhos</li>
                <li>Botões e controles</li>
                <li>Mensagens do sistema</li>
                <li>Tooltips e ajudas contextuais</li>
                <li>Formulários e validações</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium text-primary-main mb-3">Comunicação Externa</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Emails e notificações</li>
                <li>Conteúdo de marketing</li>
                <li>Documentação e tutoriais</li>
                <li>Postagens em redes sociais</li>
                <li>Comunicados oficiais</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium text-primary-main mb-3">Suporte ao Cliente</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Respostas a dúvidas</li>
                <li>Solução de problemas</li>
                <li>FAQs e base de conhecimento</li>
                <li>Chatbots e atendentes virtuais</li>
                <li>Feedback de usuários</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ToneAndVoice;
