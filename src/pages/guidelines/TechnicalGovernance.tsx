
import React, { useState } from 'react';
import { TailwindTabs } from "@/components/ui/tabs";
import Header from '@/components/library-components/Header';

const TechnicalGovernance = () => {
  const [activeTab, setActiveTab] = useState('visao-geral');

  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Governança Lovable" 
        description="Processo de contribuição, manutenção e evolução dos componentes através da plataforma Lovable."
        type="foundations"
        hideChip={true}
      />

      <div className="mt-8">
        <div className="w-fit">
          <TailwindTabs 
            defaultValue="visao-geral" 
            tabs={[
              { name: 'Visão geral', value: 'visao-geral' },
              { name: 'Processo de contribuição', value: 'contribuicao' },
              { name: 'Versionamento', value: 'versionamento' },
              { name: 'Componentes novos', value: 'novos' }
            ]}
            onChange={value => setActiveTab(value)}
          />
        </div>
        
        <div className="mt-8">
          {activeTab === 'visao-geral' && (
            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-semibold mb-6">Design System Core Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-5 rounded-md shadow-sm border border-gray-100">
                    <h3 className="font-medium text-lg">Adriana Batista</h3>
                    <p className="text-gray-600">Head UX</p>
                    <a href="mailto:adriana.batista@amicci.com.br" className="text-primary-main hover:underline">adriana.batista@amicci.com.br</a>
                  </div>
                  
                  <div className="bg-white p-5 rounded-md shadow-sm border border-gray-100">
                    <h3 className="font-medium text-lg">Gabriel Vale</h3>
                    <p className="text-gray-600">Tech Lead</p>
                    <a href="mailto:gabriel.vale@amicci.com.br" className="text-primary-main hover:underline">gabriel.vale@amicci.com.br</a>
                  </div>
                  
                  <div className="bg-white p-5 rounded-md shadow-sm border border-gray-100">
                    <h3 className="font-medium text-lg">Pedro Lopes</h3>
                    <p className="text-gray-600">Tech Lead</p>
                    <a href="mailto:pedro.lopes@amicci.com.br" className="text-primary-main hover:underline">pedro.lopes@amicci.com.br</a>
                  </div>
                  
                  <div className="bg-white p-5 rounded-md shadow-sm border border-gray-100">
                    <h3 className="font-medium text-lg">Guilherme Gradaschi</h3>
                    <p className="text-gray-600">Tech Lead</p>
                    <a href="mailto:guilherme.gradaschi@amicci.com.br" className="text-primary-main hover:underline">guilherme.gradaschi@amicci.com.br</a>
                  </div>
                  
                  <div className="bg-white p-5 rounded-md shadow-sm border border-gray-100">
                    <h3 className="font-medium text-lg">Victor Azevedo</h3>
                    <p className="text-gray-600">Tech Lead</p>
                    <a href="mailto:victor.azevedo@amicci.com.br" className="text-primary-main hover:underline">victor.azevedo@amicci.com.br</a>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary-50 p-6 rounded-lg border border-primary-100">
                <h2 className="text-2xl font-semibold mb-4">Filosofia de Inovação</h2>
                <p className="mb-4">
                  Estamos em um momento de transformação no desenvolvimento de software, onde ferramentas de IA estão mudando a forma como criamos interfaces e experiências digitais.
                </p>
                
                <p className="mb-4">Nossa abordagem para este momento de evolução:</p>
                
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>
                    <strong>Encoraje a experimentação:</strong> Incentivamos todos os colaboradores a explorarem as possibilidades do Lovable e outras ferramentas de IA.
                  </li>
                  <li>
                    <strong>Aprenda através da prática:</strong> Este é um momento de aprendizado coletivo - alguns experimentos terão sucesso, outros não, mas todos trazem valor.
                  </li>
                  <li>
                    <strong>Orientação em vez de restrição:</strong> A equipe de UX e o time de Design System atuam como facilitadores e orientadores, não como barreiras à inovação.
                  </li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-4">Diretrizes para Desenvolvimento</h3>
                
                <div className="bg-white p-5 rounded-md shadow-sm border border-gray-100 mb-4">
                  <h4 className="font-medium text-lg mb-2">Para experimentos e projetos de aprendizado:</h4>
                  <p>Sinta-se à vontade para explorar, experimentar e testar novas abordagens. Não se preocupe em seguir rigorosamente os padrões do Design System nesta fase.</p>
                </div>
                
                <div className="bg-amicci-50 p-5 rounded-md shadow-sm border border-amicci-300">
                  <h4 className="font-medium text-lg mb-2 text-primary-700">Para jornadas e produtos oficiais:</h4>
                  <p className="mb-3 text-primary-800">Qualquer pessoa pode contribuir com ideias, protótipos e experimentos, mas o código que vai para produção deve passar por um processo de revisão que inclui:</p>
                  <ul className="list-disc pl-6 space-y-2 text-primary-800">
                    <li>Revisão de UX para garantir consistência na experiência</li>
                    <li>Alinhamento com Produto para validar prioridades e requisitos</li>
                    <li>Revisão técnica da Engenharia para garantir qualidade e manutenibilidade</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'contribuicao' && (
            <div className="prose max-w-none">
              <h2>Processo de contribuição</h2>
              <p>O processo de contribuição para o design system da Migo é realizado através da plataforma Lovable, que permite a colaboração entre designers e desenvolvedores de forma eficiente e integrada.</p>
              
              <h3>Fluxo de trabalho</h3>
              <ol>
                <li><strong>Identificação de necessidade:</strong> A necessidade de um novo componente ou alteração é identificada pela equipe de produto, design ou desenvolvimento.</li>
                <li><strong>Validação inicial:</strong> A proposta é discutida com o time de design system para validar sua inclusão.</li>
                <li><strong>Desenvolvimento no Lovable:</strong> O componente é desenvolvido na plataforma Lovable, permitindo iterações rápidas.</li>
                <li><strong>Revisão de código:</strong> O código é revisado pelos mantenedores do design system.</li>
                <li><strong>Testes e feedback:</strong> O componente é testado e ajustado conforme feedback.</li>
                <li><strong>Documentação:</strong> A documentação é criada ou atualizada.</li>
                <li><strong>Publicação:</strong> O componente é publicado e disponibilizado para uso.</li>
              </ol>
              
              <h3>Responsabilidades</h3>
              <p>Todos os envolvidos no desenvolvimento do design system têm responsabilidades específicas:</p>
              
              <ul>
                <li><strong>Designers:</strong> Definir padrões visuais, experiência do usuário e acessibilidade.</li>
                <li><strong>Desenvolvedores:</strong> Implementar os componentes conforme especificações, garantir qualidade do código.</li>
                <li><strong>Mantenedores:</strong> Revisar contribuições, garantir consistência, manter a documentação.</li>
                <li><strong>Stakeholders:</strong> Fornecer feedback, validar casos de uso, priorizar demandas.</li>
              </ul>
            </div>
          )}
          
          {activeTab === 'versionamento' && (
            <div className="prose max-w-none">
              <h2>Versionamento</h2>
              <p>O design system segue o versionamento semântico (SemVer) para garantir previsibilidade nas atualizações.</p>
              
              <h3>Estrutura de versionamento</h3>
              <p>Utilizamos o formato X.Y.Z, onde:</p>
              <ul>
                <li><strong>X (Major):</strong> Mudanças incompatíveis com versões anteriores</li>
                <li><strong>Y (Minor):</strong> Adições de funcionalidades compatíveis com versões anteriores</li>
                <li><strong>Z (Patch):</strong> Correções de bugs compatíveis com versões anteriores</li>
              </ul>
              
              <h3>Política de atualizações</h3>
              <p>Para garantir uma adoção consistente, seguimos estas práticas:</p>
              <ul>
                <li>Mudanças de versão major são anunciadas com antecedência mínima de 30 dias</li>
                <li>Notas de release detalhadas são fornecidas para cada atualização</li>
                <li>Período de suporte de versões anteriores de pelo menos 6 meses após lançamento de major</li>
                <li>Guias de migração são fornecidos para atualizações de versão major</li>
              </ul>
              
              <h3>Changelog</h3>
              <p>Mantemos um changelog detalhado que lista todas as alterações, adições e correções em cada versão, facilitando o acompanhamento das evoluções do design system.</p>
            </div>
          )}
          
          {activeTab === 'novos' && (
            <div className="prose max-w-none">
              <h2>Componentes novos</h2>
              <p>A adição de novos componentes ao design system segue um processo estruturado para garantir qualidade, usabilidade e manutenibilidade.</p>
              
              <h3>Critérios para novos componentes</h3>
              <p>Para ser incluído no design system, um componente deve atender aos seguintes critérios:</p>
              <ul>
                <li><strong>Reutilização:</strong> O componente deve ser útil em múltiplos contextos ou produtos</li>
                <li><strong>Consistência:</strong> Deve seguir os princípios de design estabelecidos</li>
                <li><strong>Acessibilidade:</strong> Deve seguir as diretrizes WCAG 2.1 nível AA</li>
                <li><strong>Responsividade:</strong> Deve funcionar em diferentes tamanhos de tela</li>
                <li><strong>Performance:</strong> Deve ser otimizado para desempenho</li>
              </ul>
              
              <h3>Processo de proposição</h3>
              <ol>
                <li><strong>Identificação da necessidade:</strong> Documenta-se o problema que o componente resolve</li>
                <li><strong>Pesquisa:</strong> Verifica-se se componentes existentes podem ser adaptados</li>
                <li><strong>Proposta:</strong> Cria-se uma proposta formal com casos de uso, requisitos e variações</li>
                <li><strong>Feedback inicial:</strong> Coleta-se feedback das partes interessadas</li>
                <li><strong>Prototipação:</strong> Desenvolve-se um protótipo funcional</li>
                <li><strong>Validação:</strong> Testa-se o componente em cenários reais</li>
                <li><strong>Documentação:</strong> Cria-se documentação completa</li>
                <li><strong>Revisão final:</strong> O time de design system faz a revisão final</li>
                <li><strong>Inclusão:</strong> O componente é adicionado oficialmente ao design system</li>
              </ol>
              
              <h3>Documentação necessária</h3>
              <p>Todo novo componente deve incluir:</p>
              <ul>
                <li>Descrição e propósito</li>
                <li>Casos de uso recomendados</li>
                <li>Variações e propriedades</li>
                <li>Exemplo de código</li>
                <li>Considerações de acessibilidade</li>
                <li>Limitações conhecidas</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TechnicalGovernance;
