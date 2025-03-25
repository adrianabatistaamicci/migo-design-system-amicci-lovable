
import React, { useState } from 'react';
import { TailwindTabs } from "@/components/ui/tabs";
import Header from '@/components/library-components/Header';

const TechnicalGovernance = () => {
  const [activeTab, setActiveTab] = useState('contribuicao');

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
            defaultValue="contribuicao" 
            tabs={[
              { name: 'Processo de contribuição', value: 'contribuicao' },
              { name: 'Versionamento', value: 'versionamento' },
              { name: 'Componentes novos', value: 'novos' }
            ]}
            onChange={value => setActiveTab(value)}
          />
        </div>
        
        <div className="mt-8">
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
