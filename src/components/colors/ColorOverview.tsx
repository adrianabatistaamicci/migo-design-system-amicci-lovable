
import React from 'react';
import ComponentCard from '@/components/ComponentCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ColorOverview: React.FC = () => {
  return (
    <div className="space-y-6 mt-6">
      <ComponentCard 
        title="Sistema de Cores" 
        description="Nosso sistema de cores é construído com variáveis CSS para suportar temas e personalização."
      >
        <p className="text-gray-600 mb-6">
          O sistema é organizado para proporcionar consistência visual e flexibilidade em toda a aplicação.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Tipos de Variações</h3>
            
            <div>
              <h4 className="font-medium text-lg">Variações de Estado</h4>
              <ul className="mt-2 space-y-2 list-disc pl-5">
                <li><span className="font-mono text-sm">main</span>: Cor principal para elementos de destaque</li>
                <li><span className="font-mono text-sm">dark</span>: Variação mais escura para contraste</li>
                <li><span className="font-mono text-sm">light</span>: Variação mais clara para fundos e elementos sutis</li>
                <li><span className="font-mono text-sm">hover</span>: Estado de hover para elementos interativos</li>
                <li><span className="font-mono text-sm">selected</span>: Estado selecionado para elementos interativos</li>
                <li><span className="font-mono text-sm">focusVisible</span>: Estado de foco visível para acessibilidade</li>
                <li><span className="font-mono text-sm">outlinedBorder</span>: Cor para bordas e contornos</li>
                <li><span className="font-mono text-sm">contrast</span>: Cor de texto sobre fundos primários</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-lg">Variações de Texto</h4>
              <ul className="mt-2 space-y-2 list-disc pl-5">
                <li><span className="font-mono text-sm">primary</span>: Texto principal para conteúdo importante</li>
                <li><span className="font-mono text-sm">secondary</span>: Texto secundário para descrições e detalhes</li>
                <li><span className="font-mono text-sm">disabled</span>: Texto para elementos desabilitados</li>
                <li><span className="font-mono text-sm">hover</span>: Estado de hover para texto interativo</li>
                <li><span className="font-mono text-sm">selected</span>: Estado selecionado para texto interativo</li>
                <li><span className="font-mono text-sm">focus</span>: Estado de foco para texto interativo</li>
                <li><span className="font-mono text-sm">focusVisible</span>: Estado de foco visível para acessibilidade</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold border-b pb-2">Organização do Sistema</h3>
            <p className="text-gray-600 mt-2">O sistema é organizado em dois níveis principais:</p>
            
            <div className="mt-4">
              <h4 className="font-medium text-lg">1. Cores Básicas</h4>
              <p className="text-gray-600 mt-1 mb-2">Um conjunto completo de cores de 50 a 900 para:</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-gray-100 p-3 rounded-md">
                  <code className="text-xs">base-color-amicci</code>
                </div>
                <div className="bg-gray-100 p-3 rounded-md">
                  <code className="text-xs">base-color-amicciDark</code>
                </div>
                <div className="bg-gray-100 p-3 rounded-md">
                  <code className="text-xs">base-color-blue</code>
                </div>
                <div className="bg-gray-100 p-3 rounded-md">
                  <code className="text-xs">base-color-magenta</code>
                </div>
                <div className="bg-gray-100 p-3 rounded-md">
                  <code className="text-xs">base-color-green</code>
                </div>
                <div className="bg-gray-100 p-3 rounded-md">
                  <code className="text-xs">base-color-gray</code>
                </div>
                <div className="bg-gray-100 p-3 rounded-md">
                  <code className="text-xs">base-color-orange</code>
                </div>
                <div className="bg-gray-100 p-3 rounded-md">
                  <code className="text-xs">base-color-red</code>
                </div>
                <div className="bg-gray-100 p-3 rounded-md">
                  <code className="text-xs">base-color-yellow</code>
                </div>
                <div className="bg-gray-100 p-3 rounded-md">
                  <code className="text-xs">base-color-common-white</code>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium text-lg">2. Paletas Compostas</h4>
              <p className="text-gray-600 mt-1 mb-2">Paletas semânticas que utilizam as cores básicas como base:</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-gray-100 p-3 rounded-md">
                  <code className="text-xs">primary</code>
                </div>
                <div className="bg-gray-100 p-3 rounded-md">
                  <code className="text-xs">secondary</code>
                </div>
                <div className="bg-gray-100 p-3 rounded-md">
                  <code className="text-xs">text</code>
                </div>
                <div className="bg-gray-100 p-3 rounded-md">
                  <code className="text-xs">error</code>
                </div>
                <div className="bg-gray-100 p-3 rounded-md">
                  <code className="text-xs">warning</code>
                </div>
                <div className="bg-gray-100 p-3 rounded-md">
                  <code className="text-xs">info</code>
                </div>
                <div className="bg-gray-100 p-3 rounded-md">
                  <code className="text-xs">success</code>
                </div>
                <div className="bg-gray-100 p-3 rounded-md">
                  <code className="text-xs">background</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ComponentCard>
      
      <ComponentCard 
        title="Como Usar" 
        description="Utilize as cores através das classes do Tailwind e tokens CSS."
      >
        <p className="text-gray-600 mb-4">
          Acesse as cores usando as classes utilitárias do Tailwind baseadas na nomenclatura semântica:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-md border">
            <code className="text-sm bg-amicci-50 p-1 rounded text-amicci-800">bg-primary-main</code>
            <p className="text-sm mt-2 text-gray-600">Cor primária principal</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-md border">
            <code className="text-sm bg-amicci-50 p-1 rounded text-amicci-800">text-error-main</code>
            <p className="text-sm mt-2 text-gray-600">Texto na cor de erro</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-md border">
            <code className="text-sm bg-amicci-50 p-1 rounded text-amicci-800">border-warning-outlinedBorder</code>
            <p className="text-sm mt-2 text-gray-600">Borda na cor de contorno de aviso</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-md border">
            <code className="text-sm bg-amicci-50 p-1 rounded text-amicci-800">bg-amicci-500</code>
            <p className="text-sm mt-2 text-gray-600">Cor básica amicci (500)</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-md border">
            <code className="text-sm bg-amicci-50 p-1 rounded text-amicci-800">text-gray-900</code>
            <p className="text-sm mt-2 text-gray-600">Texto principal</p>
          </div>
        </div>
      </ComponentCard>
    </div>
  );
};

export default ColorOverview;
