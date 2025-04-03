import React, { useState, useEffect } from 'react';
import Header from '@/components/library-components/Header';
import { Separator } from "@/components/ui/separator";
import DocumentationSkeleton from '@/components/library-components/DocumentationSkeleton';
import AmyImage from '@/pages/assets/Amy 001.png';
import { GridContainer, GridRow, GridCol } from '@/components/layout/Grid';
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
  return <div className="w-full animate-fade-in">
      <Header title="Tom e Voz" description="Diretrizes para comunicação textual consistente e autêntica" type="foundations" />
      
      <div className="max-w-[1280px] mx-auto mt-12 space-y-6">
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
        
        <section id="nosso-tom">
          <h2 className="text-2xl font-semibold mb-6">Nosso Tom</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-800 mb-6">
              O tom expressa a atitude por trás das nossas palavras. É como falamos com nossos usuários em diferentes contextos e situações.
            </p>
            
            <div className="space-y-8 mt-8">
              <div className="border-l-4 border-primary-main pl-6 py-2">
                <h3 className="text-xl font-medium mb-2">Profissional, mas não formal</h3>
                <p className="text-gray-700">
                  Mantemos uma postura profissional, mas evitamos linguagem excessivamente formal ou corporativa. Buscamos um equilíbrio que transmita competência sem criar distanciamento.
                </p>
              </div>
              
              <div className="border-l-4 border-primary-main pl-6 py-2">
                <h3 className="text-xl font-medium mb-2">Amigável, mas não casual demais</h3>
                <p className="text-gray-700">
                  Nosso tom é acolhedor e cordial, mas mantemos o foco na resolu��ão de necessidades. Evitamos gírias excessivas ou humor que possa não ressoar com todos os usuários.
                </p>
              </div>
              
              <div className="border-l-4 border-primary-main pl-6 py-2">
                <h3 className="text-xl font-medium mb-2">Confiante, mas não arrogante</h3>
                <p className="text-gray-700">
                  Comunicamos com segurança nossa expertise, mas sempre com humildade. Reconhecemos quando não temos todas as respostas e valorizamos o feedback dos usuários.
                </p>
              </div>
              
              <div className="border-l-4 border-primary-main pl-6 py-2">
                <h3 className="text-xl font-medium mb-2">Direto, mas não ríspido</h3>
                <p className="text-gray-700">
                  Priorizamos objetividade e clareza, mas sempre com gentileza. Em situações de erro ou problema, comunicamos com empatia e foco na solução.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <Separator />
        
        <section id="nossa-voz">
          <h2 className="text-2xl font-semibold mb-6">Nossa Voz</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-800 mb-6">
              Nossa voz reflete quem somos como marca. É constante e representa nossa personalidade, valores e missão.
            </p>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-primary-main mb-4">O que fazer</h3>
                <ul className="space-y-4 list-disc pl-6">
                  <li>
                    <p className="text-gray-700">Use a primeira pessoa do plural (nós, nosso) para criar senso de comunidade</p>
                  </li>
                  <li>
                    <p className="text-gray-700">Dirija-se ao usuário diretamente (você, seu) para estabelecer conexão</p>
                  </li>
                  <li>
                    <p className="text-gray-700">Seja conciso e vá direto ao ponto</p>
                  </li>
                  <li>
                    <p className="text-gray-700">Use voz ativa para maior clareza e impacto</p>
                  </li>
                  <li>
                    <p className="text-gray-700">Use termos consistentes em toda a plataforma</p>
                  </li>
                  <li>
                    <p className="text-gray-700">Explique benefícios, não apenas funcionalidades</p>
                  </li>
                  <li>
                    <p className="text-gray-700">Antecipe e responda possíveis dúvidas</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-error-main mb-4">O que evitar</h3>
                <ul className="space-y-4 list-disc pl-6">
                  <li>
                    <p className="text-gray-700">Evite jargão técnico desnecessário ou termos rebuscados</p>
                  </li>
                  <li>
                    <p className="text-gray-700">Evite tonalidade condescendente ou paternalista</p>
                  </li>
                  <li>
                    <p className="text-gray-700">Evite exageros ou promessas irrealistas</p>
                  </li>
                  <li>
                    <p className="text-gray-700">Evite frases longas e complexas que dificultam a compreensão</p>
                  </li>
                  <li>
                    <p className="text-gray-700">Evite ambiguidades que possam gerar confusão</p>
                  </li>
                  <li>
                    <p className="text-gray-700">Evite linguagem excludente ou preconceituosa</p>
                  </li>
                  <li>
                    <p className="text-gray-700">Evite culpabilizar o usuário em mensagens de erro</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <Separator />
        
        <section>
          <h2 className="text-2xl font-semibold mb-6">Ajustando o Tom por Contexto</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-800">
              Enquanto nossa voz é constante, nosso tom se adapta ao contexto, situação e estado emocional do usuário. O tom apropriado demonstra empatia e compreensão das necessidades do momento.
            </p>
            
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
        
        <section id="amy">
          <h2 className="text-2xl font-semibold mb-6">A Voz da Amy</h2>
          <div className="prose prose-gray max-w-none">
            <div className="bg-background-subtle p-8 rounded-xl shadow-sm mb-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="relative w-30 h-30 mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary-light/30 to-transparent rounded-full -z-10 blur-lg"></div>
                    <img src={AmyImage} alt="Amy, a assistente virtual da Amicci" className="rounded-full w-48 h-48 object-cover border-4 border-white bg-white shadow-lg" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="">
                    <p className="text-gray-800 text-lg leading-relaxed">
                      Amy é nossa assistente virtual e representa uma persona especial dentro do ecossistema Amicci. Ela tem voz própria e um nível de humanização mais elevado em comparação com outras partes de nossa interface.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-medium mt-12 mb-4">Características distintivas da Amy:</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white shadow-sm rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <h4 className="font-medium text-lg mb-3 text-primary-main">Mais pessoal e conversacional</h4>
                <p className="text-gray-700">
                  Amy usa linguagem mais informal e próxima, como uma assistente real faria.
                </p>
              </div>
              
              <div className="bg-white shadow-sm rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <h4 className="font-medium text-lg mb-3 text-primary-main">Expressões de personalidade</h4>
                <p className="text-gray-700">
                  Amy demonstra entusiasmo, empatia e outras emoções de forma equilibrada.
                </p>
              </div>
              
              <div className="bg-white shadow-sm rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <h4 className="font-medium text-lg mb-3 text-primary-main">Adaptabilidade contextual</h4>
                <p className="text-gray-700">
                  Amy ajusta seu tom conforme o contexto da interação — mais formal em assuntos sérios, mais descontraída em momentos leves.
                </p>
              </div>
            </div>
            
            <h3 className="text-xl font-medium mt-12 mb-4">Exemplos de comunicação:</h3>
            
            <div className="space-y-4">
              <div className="bg-white shadow-sm rounded-xl border border-gray-100 overflow-hidden">
                <div className="bg-primary-main/5 p-3 border-b border-gray-100">
                  <div className="text-sm font-medium text-primary-dark">Mensagem de boas-vindas:</div>
                </div>
                <div className="p-5">
                  <p className="text-gray-800 bg-gray-50 p-4 rounded-lg border border-gray-100">
                    "Oi! Sou a Amy, sua assistente Amicci. Estou aqui para ajudar você a explorar nossa plataforma. Como posso facilitar seu dia hoje?"
                  </p>
                </div>
              </div>
              
              <div className="bg-white shadow-sm rounded-xl border border-gray-100 overflow-hidden">
                <div className="bg-primary-main/5 p-3 border-b border-gray-100">
                  <div className="text-sm font-medium text-primary-dark">Confirmação de ação:</div>
                </div>
                <div className="p-5">
                  <p className="text-gray-800 bg-gray-50 p-4 rounded-lg border border-gray-100">
                    "Pronto! Acabei de salvar suas alterações. Tudo está configurado do jeito que você pediu. Mais alguma coisa que eu possa ajudar?"
                  </p>
                </div>
              </div>
              
              <div className="bg-white shadow-sm rounded-xl border border-gray-100 overflow-hidden">
                <div className="bg-primary-main/5 p-3 border-b border-gray-100">
                  <div className="text-sm font-medium text-primary-dark">Mensagem de erro:</div>
                </div>
                <div className="p-5">
                  <p className="text-gray-800 bg-gray-50 p-4 rounded-lg border border-gray-100">
                    "Hmm, parece que encontramos um obstáculo. Não consegui conectar ao servidor neste momento. Vamos tentar novamente? Se persistir, podemos explorar outras alternativas."
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white shadow-sm rounded-xl border border-gray-100 p-6">
                <h3 className="text-xl font-medium text-primary-main mb-4">Quando usar a voz da Amy</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Onboarding e boas-vindas</strong> - Primeiras impressões que estabelecem relacionamento</li>
                  <li><strong>Mensagens de celebração</strong> - Reconhecimento de conquistas e marcos importantes</li>
                  <li><strong>Suporte e assistência</strong> - Momentos de dificuldade onde empatia é essencial</li>
                  <li><strong>Comunicações personalizadas</strong> - Mensagens baseadas no histórico do usuário</li>
                </ul>
              </div>
              
              <div className="bg-white shadow-sm rounded-xl border border-gray-100 overflow-hidden">
                <div className="bg-primary-main/5 p-3 border-b border-gray-100">
                  <h3 className="text-lg font-medium text-primary-dark">Diferenças-chave da Amy</h3>
                </div>
                <div className="p-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 px-3">Aspecto</th>
                        <th className="text-left py-2 px-3">Comunicação Padrão</th>
                        <th className="text-left py-2 px-3">Comunicação Amy</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-3 font-medium">Tratamento</td>
                        <td className="py-3 px-3">Formal, impessoal</td>
                        <td className="py-3 px-3">Utiliza o primeiro nome</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-3 font-medium">Linguagem</td>
                        <td className="py-3 px-3">Objetiva, direta</td>
                        <td className="py-3 px-3">Conversacional, natural</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-medium">Emoção</td>
                        <td className="py-3 px-3">Neutra, contida</td>
                        <td className="py-3 px-3">Expressiva, empática</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-main/10 p-8 rounded-xl border border-primary-main/20 mt-12">
              <h3 className="text-xl font-medium mb-5">Lembretes importantes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-3 items-start">
                  <span className="text-primary-main text-xl">•</span>
                  <span className="text-gray-800">A voz da Amy não é apropriada para <strong>todos</strong> os contextos — use com discernimento</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-primary-main text-xl">•</span>
                  <span className="text-gray-800">Humanização não significa informalidade excessiva — mantenha o profissionalismo</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-primary-main text-xl">•</span>
                  <span className="text-gray-800">Personalize com base em dados reais, nunca presuma informações sobre o usuário</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-primary-main text-xl">•</span>
                  <span className="text-gray-800">A humanização deve sempre servir ao propósito de melhorar a experiência do usuário</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>;
};
export default TomEVoz;