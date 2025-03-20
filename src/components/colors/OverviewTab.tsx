import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import ComponentCard from '@/components/ComponentCard';

const OverviewTab = () => {
  return (
    <div className="space-y-6">
      <ComponentCard title="Sistema de Cores" description="Nosso sistema de cores é construído com variáveis CSS para suportar temas e personalização.">
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">Tipos de Variações</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4">
              <h4 className="font-medium mb-2">Variações de Estado</h4>
              <ul className="space-y-2">
                <li><strong>main:</strong> Cor principal para elementos de destaque</li>
                <li><strong>dark:</strong> Variação mais escura para contraste</li>
                <li><strong>light:</strong> Variação mais clara para fundos e elementos sutis</li>
                <li><strong>hover:</strong> Estado de hover para elementos interativos</li>
                <li><strong>selected:</strong> Estado selecionado para elementos interativos</li>
                <li><strong>focusVisible:</strong> Estado de foco visível para acessibilidade</li>
                <li><strong>outlinedBorder:</strong> Cor para bordas e contornos</li>
                <li><strong>contrast:</strong> Cor de texto sobre fundos primários</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-medium mb-2">Variações de Texto</h4>
              <ul className="space-y-2">
                <li><strong>primary:</strong> Texto principal para conteúdo importante</li>
                <li><strong>secondary:</strong> Texto secundário para descrições e detalhes</li>
                <li><strong>disabled:</strong> Texto para elementos desabilitados</li>
                <li><strong>hover:</strong> Estado de hover para texto interativo</li>
                <li><strong>selected:</strong> Estado selecionado para texto interativo</li>
                <li><strong>focus:</strong> Estado de foco para texto interativo</li>
                <li><strong>focusVisible:</strong> Estado de foco visível para acessibilidade</li>
              </ul>
            </div>
          </div>
        </div>
        
        <p className="text-text-secondary mb-4">
          O sistema é organizado em dois níveis principais:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-medium mb-2">1. Cores Básicas</h3>
            <p className="text-text-secondary">
              Um conjunto completo de cores de 50 a 900 para:
            </p>
            <div className="flex flex-wrap gap-1 mt-2">
              <Badge className="bg-amicci-500 text-white">base-color-amicci</Badge>
              <Badge className="bg-amicciDark-500 text-white">base-color-amicciDark</Badge>
              <Badge className="bg-blue-500 text-white">base-color-blue</Badge>
              <Badge className="bg-magenta-500 text-white">base-color-magenta</Badge>
              <Badge className="bg-green-500 text-white">base-color-green</Badge>
              <Badge className="bg-gray-500 text-white">base-color-gray</Badge>
              <Badge className="bg-orange-500 text-white">base-color-orange</Badge>
              <Badge className="bg-red-500 text-white">base-color-red</Badge>
              <Badge className="bg-yellow-500 text-black">base-color-yellow</Badge>
              <Badge className="bg-white text-black border border-gray-200">base-color-common-white</Badge>
            </div>
          </div>
          
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-medium mb-2">2. Paletas Compostas</h3>
            <p className="text-text-secondary">
              Paletas semânticas que utilizam as cores básicas como base:
            </p>
            <div className="flex flex-wrap gap-1 mt-2">
              <Badge className="bg-primary-main text-primary-contrast">base-color-amicci</Badge>
              <Badge className="bg-secondary-main text-secondary-contrast">base-color-amicciDark</Badge>
              <Badge className="bg-tertiary-main text-tertiary-contrast">base-color-magenta</Badge>
              <Badge className="bg-action-main text-action-contrast">base-color-gray</Badge>
              <Badge className="bg-error-main text-error-contrast">base-color-red</Badge>
              <Badge className="bg-warning-main text-black">base-color-yellow</Badge>
              <Badge className="bg-info-main text-info-contrast">base-color-blue</Badge>
              <Badge className="bg-success-main text-success-contrast">base-color-green</Badge>
              <Badge className="bg-gray-900 text-white">base-color-gray</Badge>
            </div>
          </div>
        </div>
        
        <p className="text-text-secondary mb-4">
          Cada paleta composta inclui variações para diferentes estados e usos:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          <div className="p-2 border rounded bg-primary-main text-primary-contrast">main</div>
          <div className="p-2 border rounded bg-primary-dark text-primary-contrast">dark</div>
          <div className="p-2 border rounded bg-primary-light text-black">light</div>
          <div className="p-2 border rounded bg-primary-hover text-primary-contrast">hover</div>
          <div className="p-2 border rounded bg-primary-selected text-primary-contrast">selected</div>
          <div className="p-2 border rounded bg-primary-focusVisible text-black">focusVisible</div>
          <div className="p-2 border rounded bg-primary-outlinedBorder text-black">outlinedBorder</div>
          <div className="p-2 border rounded bg-primary-contrast text-primary-main">contrast</div>
        </div>
      </ComponentCard>
      
      <Separator />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ComponentCard title="Como Usar">
          <p className="text-text-secondary">
            Acesse as cores usando as classes utilitárias do Tailwind baseadas na nomenclatura semântica:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-text-secondary">
            <li><code className="bg-background-sidebar px-1 rounded">bg-primary-main</code> - Cor primária principal</li>
            <li><code className="bg-background-sidebar px-1 rounded">text-error-main</code> - Texto na cor de erro</li>
            <li><code className="bg-background-sidebar px-1 rounded">border-warning-outlinedBorder</code> - Borda na cor de contorno de aviso</li>
            <li><code className="bg-background-sidebar px-1 rounded">bg-amicci-500</code> - Cor básica amicci (500)</li>
            <li><code className="bg-background-sidebar px-1 rounded">text-gray-900</code> - Texto principal</li>
          </ul>
        </ComponentCard>
        
        <ComponentCard title="Acessibilidade">
          <p className="text-text-secondary">
            Nosso sistema de cores foi projetado com acessibilidade em mente:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-text-secondary">
            <li>Os pares de cores atendem aos requisitos de contraste WCAG 2.1 AA</li>
            <li>Cada paleta inclui versões de contraste dedicadas</li>
            <li>As cores seguem uma hierarquia visual clara</li>
            <li>Estados de interação (hover, focus, selected) são visualmente distintos</li>
          </ul>
        </ComponentCard>
      </div>
    </div>
  );
};

export default OverviewTab;
