
import React from 'react';
import { TailwindTabs } from '@/components/ui/tabs';
import ColorPalettes from './ColorPalettes';
import ColorUsage from './ColorUsage';
import ComponentCard from '@/components/ComponentCard';

const ColorOverview = () => {
  return (
    <div className="space-y-8">
      <ComponentCard 
        title="Visão Geral" 
        description="O sistema de cores do Migo Design System é projetado para criar interfaces consistentes e acessíveis."
      >
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700">
            Nosso sistema de cores foi desenvolvido com base em princípios de acessibilidade, harmonia visual e usabilidade.
            As cores são definidas como variáveis CSS para facilitar a personalização e o suporte a temas.
          </p>
          
          <h3 className="mt-6 mb-4 text-xl font-semibold">Organização</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="font-medium">Cores Base</h4>
              <p className="text-gray-600">
                Conjunto fundamental de cores que serve como base para todo o sistema.
                Inclui preto, branco, cinzas e as cores primárias da marca.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Paletas Semânticas</h4>
              <p className="text-gray-600">
                Conjuntos de variações de cores com significados específicos:
                cores de interface, feedback, estados e ações.
              </p>
            </div>
          </div>
        </div>
      </ComponentCard>
      
      <ComponentCard title="Paletas de Cores">
        <ColorPalettes />
      </ComponentCard>
      
      <ColorUsage />
    </div>
  );
};

export default ColorOverview;
