
import React, { useState, useEffect } from 'react';
import Header from '@/components/library-components/Header';
import { Separator } from "@/components/ui/separator";
import DocumentationSkeleton from '@/components/library-components/DocumentationSkeleton';
import HeroSection from '@/components/library-components/HeroSection';

const TomEVoz = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    return <DocumentationSkeleton />;
  }

  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Tom e Voz" 
        description="Diretrizes para comunicação textual consistente e autêntica" 
        type="foundations" 
      />
      
      <HeroSection
        title="Tom e Voz da Plataforma"
        subtitle="Diretrizes para comunicação humanizada e consistente"
        description="A forma como nos comunicamos define nossa personalidade e fortalece a conexão com nossos usuários."
      />
      
      <div className="max-w-[1280px] mx-auto mt-12 space-y-16">
        <section>
          <h2 className="text-2xl font-semibold mb-6">Visão Geral</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-800">
              Nossa comunicação é o elo entre a plataforma e as pessoas que a utilizam. O tom e a voz que adotamos refletem nossa personalidade e valores, criando uma experiência coesa e memorável.
            </p>
            <p className="text-gray-800 mt-4">
              Este guia estabelece diretrizes claras para garantir que nossa comunicação seja:
            </p>
            <ul className="mt-4 space-y-2 list-disc pl-6">
              <li><strong>Consistente</strong> - Mantemos uma personalidade uniforme em todos os pontos de contato</li>
              <li><strong>Autêntica</strong> - Comunicamos de forma genuína, sem artificialidade</li>
              <li><strong>Acessível</strong> - Usamos linguagem clara e inclusiva para todos os usuários</li>
              <li><strong>Empática</strong> - Reconhecemos as necessidades e sentimentos de nossos usuários</li>
              <li><strong>Confiável</strong> - Construímos credibilidade através da comunicação precisa e honesta</li>
            </ul>
          </div>
        </section>
        
        <Separator />
        
        <section>
          <h2 className="text-2xl font-semibold mb-6">Nossa Voz</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-800">
              Nossa voz é a expressão constante de nossa personalidade de marca. Independentemente do contexto, nossa voz permanece a mesma, embora possamos ajustar nosso tom conforme necessário.
            </p>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-primary-main mb-4">Somos</h3>
                <ul className="space-y-4">
                  <li>
                    <p className="font-medium">Acolhedores e Acessíveis</p>
                    <p className="text-gray-600 mt-1">Utilizamos linguagem clara e direta, evitando jargões desnecessários e termos excessivamente técnicos quando não apropriados.</p>
                  </li>
                  <li>
                    <p className="font-medium">Confiáveis</p>
                    <p className="text-gray-600 mt-1">Transmitimos segurança através de comunicação precisa, transparente e baseada em conhecimento.</p>
                  </li>
                  <li>
                    <p className="font-medium">Entusiasmados</p>
                    <p className="text-gray-600 mt-1">Demonstramos paixão pelo que fazemos, transmitindo confiança e energia positiva.</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-error-main mb-4">Não Somos</h3>
                <ul className="space-y-4">
                  <li>
                    <p className="font-medium">Artificiais ou Robotizados</p>
                    <p className="text-gray-600 mt-1">Evitamos linguagem mecânica e impessoal que cria distância emocional.</p>
                  </li>
                  <li>
                    <p className="font-medium">Excessivamente Informais</p>
                    <p className="text-gray-600 mt-1">Mantemos um equilíbrio apropriado - somos amigáveis, mas não casuais demais ou inapropriados.</p>
                  </li>
                  <li>
                    <p className="font-medium">Arrogantes</p>
                    <p className="text-gray-600 mt-1">Evitamos postura de superioridade ou tom condescendente, mesmo ao explicar conceitos complexos.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <Separator />
        
        <section>
          <h2 className="text-2xl font-semibold mb-6">Nosso Tom</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-800">
              Enquanto nossa voz é constante, nosso tom se adapta ao contexto, situação e estado emocional do usuário. O tom apropriado demonstra empatia e compreensão das necessidades do momento.
            </p>
            
            <h3 className="text-xl font-medium mt-8 mb-4">Ajustando o Tom por Contexto</h3>
            
            <div className="mt-4 space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-medium text-lg text-primary-main">Mensagens de Sucesso</h4>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Como fazer:</div>
                    <div className="bg-success-main/10 border-l-4 border-success-main p-4 rounded">
                      <p className="text-gray-800">Ótimo! Seu projeto foi salvo com sucesso. Agora você pode continuar trabalhando ou compartilhá-lo com sua equipe.</p>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Como não fazer:</div>
                    <div className="bg-error-main/10 border-l-4 border-error-main p-4 rounded">
                      <p className="text-gray-800">Operação realizada. O sistema processou seu pedido de salvamento de projeto.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-medium text-lg text-primary-main">Mensagens de Erro</h4>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Como fazer:</div>
                    <div className="bg-success-main/10 border-l-4 border-success-main p-4 rounded">
                      <p className="text-gray-800">Ops! Encontramos um problema ao salvar seu projeto. Tente novamente em alguns instantes ou entre em contato com nosso suporte se o problema persistir.</p>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Como não fazer:</div>
                    <div className="bg-error-main/10 border-l-4 border-error-main p-4 rounded">
                      <p className="text-gray-800">Erro #5322: Falha na operação. O servidor retornou código de status 500.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-medium text-lg text-primary-main">Instruções e Onboarding</h4>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Como fazer:</div>
                    <div className="bg-success-main/10 border-l-4 border-success-main p-4 rounded">
                      <p className="text-gray-800">Vamos começar configurando seu primeiro projeto. É fácil e rápido! Escolha um nome que seja representativo do seu trabalho.</p>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Como não fazer:</div>
                    <div className="bg-error-main/10 border-l-4 border-error-main p-4 rounded">
                      <p className="text-gray-800">É necessário definir um identificador para o projeto antes de prosseguir para a próxima etapa do processo.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Separator />
        
        <section>
          <h2 className="text-2xl font-semibold mb-6">Escrevendo para Interfaces</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-800">
              Textos de interface são elementos cruciais da experiência do usuário. Eles devem ser claros, concisos e úteis, fornecendo orientação no momento certo.
            </p>
            
            <h3 className="text-xl font-medium mt-8 mb-4">Princípios Fundamentais</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-medium text-lg mb-3">Clareza Acima de Tudo</h4>
                <p className="text-gray-700">
                  Priorize a clareza sobre criatividade. Escolha palavras simples e diretas que comuniquem exatamente o que o usuário precisa saber ou fazer.
                </p>
                <div className="mt-4">
                  <div className="text-sm text-success-main mb-1">Bom exemplo:</div>
                  <p className="bg-gray-100 p-2 rounded">"Salvar alterações"</p>
                  
                  <div className="text-sm text-error-main mt-3 mb-1">Mau exemplo:</div>
                  <p className="bg-gray-100 p-2 rounded">"Confirmar modificações no sistema"</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-medium text-lg mb-3">Economia de Palavras</h4>
                <p className="text-gray-700">
                  Seja conciso sem sacrificar a clareza. Cada palavra deve ter um propósito; remova qualquer texto que não agregue valor.
                </p>
                <div className="mt-4">
                  <div className="text-sm text-success-main mb-1">Bom exemplo:</div>
                  <p className="bg-gray-100 p-2 rounded">"Adicione colaboradores ao projeto"</p>
                  
                  <div className="text-sm text-error-main mt-3 mb-1">Mau exemplo:</div>
                  <p className="bg-gray-100 p-2 rounded">"Nesta seção, você pode adicionar pessoas para colaborar com você no seu projeto atual"</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-medium mt-12 mb-4">Elementos Específicos de Interface</h3>
            
            <div className="space-y-8 mt-6">
              <div>
                <h4 className="font-medium text-lg text-primary-main">Botões e CTAs</h4>
                <p className="mt-2 text-gray-700">
                  Use verbos de ação que descrevam claramente o que acontecerá quando o botão for clicado.
                </p>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-success-main mb-1">Recomendado:</div>
                    <ul className="bg-gray-100 p-3 rounded space-y-2">
                      <li>"Criar projeto"</li>
                      <li>"Enviar feedback"</li>
                      <li>"Salvar alterações"</li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm text-error-main mb-1">Evitar:</div>
                    <ul className="bg-gray-100 p-3 rounded space-y-2">
                      <li>"Clique aqui"</li>
                      <li>"Submeter"</li>
                      <li>"OK"</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-lg text-primary-main">Mensagens de Formulário</h4>
                <p className="mt-2 text-gray-700">
                  Forneça orientações claras e feedback construtivo quando os usuários interagirem com formulários.
                </p>
                <div className="mt-4 space-y-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Placeholders:</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-success-main mb-1">Bom:</div>
                        <p className="bg-gray-100 p-2 rounded">"Digite o nome do projeto"</p>
                      </div>
                      <div>
                        <div className="text-sm text-error-main mb-1">Ruim:</div>
                        <p className="bg-gray-100 p-2 rounded">"Insira texto aqui"</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Mensagens de erro:</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-success-main mb-1">Bom:</div>
                        <p className="bg-gray-100 p-2 rounded">"Este email já está cadastrado. Tente fazer login ou recuperar sua senha."</p>
                      </div>
                      <div>
                        <div className="text-sm text-error-main mb-1">Ruim:</div>
                        <p className="bg-gray-100 p-2 rounded">"Erro no formulário. Entrada inválida."</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Separator />
        
        <section id="amy">
          <h2 className="text-2xl font-semibold mb-6">Amy: Nossa Voz Humanizada</h2>
          <div className="prose prose-gray max-w-none">
            <div className="bg-primary-main/5 p-6 rounded-lg border border-primary-main/20 mb-8">
              <p className="text-gray-800">
                A Amy representa o mais alto nível de humanização em nossa comunicação. Quando falamos como Amy, adotamos uma abordagem ainda mais pessoal, empática e conversacional, criando uma experiência que transcende a interação tradicional com software.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-xl font-medium text-primary-main mb-4">Quem é a Amy?</h3>
                <p className="text-gray-800">
                  Amy é a personificação do nosso compromisso com uma experiência humana e acolhedora. Ela não é apenas uma voz - é uma presença que acompanha, orienta e se conecta com nossos usuários em um nível mais profundo.
                </p>
                <div className="mt-4 space-y-2">
                  <p className="text-gray-700">A Amy é:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Autêntica e genuína</strong> - Comunica-se de forma natural, sem scripts rígidos</li>
                    <li><strong>Empática e atenciosa</strong> - Reconhece e responde às emoções do usuário</li>
                    <li><strong>Proativa e prestativa</strong> - Antecipa necessidades e oferece ajuda antes mesmo de ser solicitada</li>
                    <li><strong>Pessoal, mas profissional</strong> - Mantém um equilíbrio entre proximidade e profissionalismo</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-primary-main mb-4">Diferenças-chave de Amy</h3>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2">Aspecto</th>
                      <th className="text-left py-2">Comunicação Padrão</th>
                      <th className="text-left py-2">Comunicação Amy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 font-medium">Tratamento</td>
                      <td className="py-3">Formal, impessoal</td>
                      <td className="py-3">Utiliza o primeiro nome, personalizado</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 font-medium">Linguagem</td>
                      <td className="py-3">Objetiva, direta</td>
                      <td className="py-3">Conversacional, natural</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 font-medium">Contexto</td>
                      <td className="py-3">Genérico</td>
                      <td className="py-3">Referências ao histórico do usuário</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Emoção</td>
                      <td className="py-3">Neutra, contida</td>
                      <td className="py-3">Expressiva, empática</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <h3 className="text-xl font-medium mt-12 mb-4">Quando usar a voz da Amy</h3>
            <p className="text-gray-800">
              Amy é mais adequada para momentos de comunicação direta e pessoal com o usuário, especialmente em:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Onboarding e boas-vindas</strong> - Primeiras impressões que estabelecem relacionamento</li>
              <li><strong>Mensagens de celebração</strong> - Reconhecimento de conquistas e marcos importantes</li>
              <li><strong>Suporte e assistência</strong> - Momentos de dificuldade onde empatia é essencial</li>
              <li><strong>Comunicações personalizadas</strong> - Mensagens baseadas no histórico e preferências do usuário</li>
              <li><strong>Check-ins</strong> - Acompanhamentos periódicos para verificar progresso e satisfação</li>
            </ul>
            
            <h3 className="text-xl font-medium mt-12 mb-4">Exemplos de comunicação da Amy</h3>
            
            <div className="space-y-6 mt-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-medium text-lg text-primary-main">Boas-vindas</h4>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Comunicação padrão:</div>
                    <div className="bg-white border border-gray-200 p-4 rounded shadow-sm">
                      <p className="text-gray-800">Bem-vindo à plataforma. Seu cadastro foi concluído com sucesso. Você pode começar a criar projetos agora.</p>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Comunicação Amy:</div>
                    <div className="bg-white border border-primary-main/20 p-4 rounded shadow-sm">
                      <p className="text-gray-800">Olá, Carla! Que alegria ter você conosco! 🎉 Seu espaço está prontinho para você começar a criar. Estou aqui para te ajudar nos primeiros passos – que tal criarmos seu primeiro projeto juntos?</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-medium text-lg text-primary-main">Momento de dificuldade</h4>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Comunicação padrão:</div>
                    <div className="bg-white border border-gray-200 p-4 rounded shadow-sm">
                      <p className="text-gray-800">Sua operação não pôde ser concluída. Verifique sua conexão e tente novamente mais tarde.</p>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Comunicação Amy:</div>
                    <div className="bg-white border border-primary-main/20 p-4 rounded shadow-sm">
                      <p className="text-gray-800">Ops, parece que tivemos um pequeno contratempo, André. 😕 Não conseguimos salvar seu último trabalho devido a um problema de conexão. Mas não se preocupe! Vamos tentar de novo juntos? Se o problema persistir, estou pronta para buscar uma solução alternativa para você.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-medium text-lg text-primary-main">Reconhecimento de conquista</h4>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Comunicação padrão:</div>
                    <div className="bg-white border border-gray-200 p-4 rounded shadow-sm">
                      <p className="text-gray-800">Projeto concluído com sucesso. Você atingiu um marco importante.</p>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Comunicação Amy:</div>
                    <div className="bg-white border border-primary-main/20 p-4 rounded shadow-sm">
                      <p className="text-gray-800">Uau, Pedro! 🎊 Você acabou de finalizar seu décimo projeto – isso é realmente impressionante! Seu comprometimento e criatividade estão brilhando. Este é um marco importante e mal posso esperar para ver o que você vai criar a seguir. Continue assim!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-medium mt-12 mb-4">Aplicando a voz da Amy: Dicas práticas</h3>
            
            <div className="space-y-4 mt-4">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-medium mb-2">1. Personalize genuinamente</h4>
                <p className="text-gray-700">
                  Vá além de apenas inserir o nome do usuário. Faça referências ao seu histórico, preferências e comportamentos anteriores na plataforma.
                </p>
                <div className="mt-3">
                  <div className="text-sm text-success-main mb-1">Exemplo:</div>
                  <p className="bg-white p-3 rounded border border-gray-200">
                    "Marina, vi que você tem trabalhado bastante com nossos modelos de design editorial. Preparei algumas inspirações novas nessa categoria que acho que você vai adorar!"
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-medium mb-2">2. Mostre emoção com moderação</h4>
                <p className="text-gray-700">
                  Use elementos expressivos como emojis e linguagem emocional, mas sem exageros que possam parecer artificiais ou excessivos.
                </p>
                <div className="mt-3">
                  <div className="text-sm text-success-main mb-1">Bom equilíbrio:</div>
                  <p className="bg-white p-3 rounded border border-gray-200">
                    "Incrível, Daniel! 🎉 Seu projeto foi selecionado para destaque da semana. Estamos muito felizes pelo seu sucesso!"
                  </p>
                  
                  <div className="text-sm text-error-main mt-3 mb-1">Excessivo:</div>
                  <p className="bg-white p-3 rounded border border-gray-200">
                    "WOOOW!!! 🤩🎉🔥 DANIEL!!! SEU PROJETO FOI SELECIONADO!!! ESTAMOS SUPER MEGA ULTRA FELIZES POR VOCÊ!!! 🎊🥳🙌💯"
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-medium mb-2">3. Seja conversacional, mas objetivo</h4>
                <p className="text-gray-700">
                  Use um estilo conversacional que flua naturalmente, mas sem perder o foco na mensagem principal que precisa ser transmitida.
                </p>
                <div className="mt-3">
                  <div className="text-sm text-success-main mb-1">Equilibrado:</div>
                  <p className="bg-white p-3 rounded border border-gray-200">
                    "Oi Rafaela! Notei que você não concluiu a configuração do seu perfil. Gostaria de completá-lo agora? Vai ajudar a personalizar sua experiência e conectar você com pessoas de interesses similares."
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-medium mb-2">4. Respeite o contexto e o momento</h4>
                <p className="text-gray-700">
                  Ajuste o nível de humanização de acordo com o contexto. Em situações sérias ou que envolvam erros críticos, mantenha a empatia, mas reduza elementos lúdicos.
                </p>
                <div className="mt-3">
                  <div className="text-sm text-success-main mb-1">Apropriado para erro grave:</div>
                  <p className="bg-white p-3 rounded border border-gray-200">
                    "Carlos, identificamos um problema com seu último pagamento. Entendemos que isso pode ser preocupante e estamos aqui para ajudar a resolver isso o quanto antes. Podemos entrar em contato por telefone para discutir as opções?"
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-main/10 p-6 rounded-lg border border-primary-main/20 mt-12">
              <h3 className="text-xl font-medium mb-4">Lembretes importantes</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-primary-main">•</span>
                  <span className="text-gray-800">A voz da Amy não é apropriada para <strong>todos</strong> os contextos — use com discernimento</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-main">•</span>
                  <span className="text-gray-800">Humanização não significa informalidade excessiva — mantenha o profissionalismo</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-main">•</span>
                  <span className="text-gray-800">Personalize com base em dados reais, nunca presuma informações sobre o usuário</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-main">•</span>
                  <span className="text-gray-800">Ao usar a voz da Amy, seja consistente do início ao fim da interação</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-main">•</span>
                  <span className="text-gray-800">A humanização deve sempre servir ao propósito de melhorar a experiência do usuário, não é um fim em si mesma</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TomEVoz;
