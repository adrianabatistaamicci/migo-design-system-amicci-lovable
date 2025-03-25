
import React from 'react';
import ComponentCard from '@/components/ComponentCard';
import ColorUsage from './ColorUsage';

const ColorOverview: React.FC = () => {
  return (
    <div className="space-y-8">
      <ComponentCard 
        title="Sistema de Cores" 
        description="O sistema de cores Amicci é projetado para criar interfaces consistentes e acessíveis."
      >
        <div className="space-y-4">
          <p className="text-gray-600">
            Nosso sistema de cores é construído sobre uma base sólida de variáveis CSS que permite flexibilidade, adaptabilidade e consistência em toda a experiência do usuário.
          </p>
          
          <h3 className="text-lg font-medium mt-6">Estrutura do Sistema</h3>
          <p className="text-gray-600">
            O sistema de cores é organizado em duas camadas principais:
          </p>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li><strong>Cores Base:</strong> Uma paleta completa de cores com diferentes tonalidades e pesos.</li>
            <li><strong>Paletas Semânticas:</strong> Variáveis CSS temáticas que aplicam as cores base em contextos específicos.</li>
          </ul>
          
          <h3 className="text-lg font-medium mt-6">Princípios de Design</h3>
          <p className="text-gray-600">
            Nosso sistema de cores segue princípios cuidadosamente considerados:
          </p>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li><strong>Acessibilidade:</strong> Todas as combinações de cores atendem ou excedem as diretrizes WCAG 2.1 AA.</li>
            <li><strong>Consistência:</strong> As cores são aplicadas de forma consistente para criar uma experiência coesa.</li>
            <li><strong>Hierarquia:</strong> As cores são usadas para criar hierarquia e focar a atenção do usuário.</li>
            <li><strong>Flexibilidade:</strong> O sistema suporta temas claros, escuros e de alto contraste.</li>
          </ul>
        </div>
      </ComponentCard>
      
      <ColorUsage />
    </div>
  );
};

export default ColorOverview;
