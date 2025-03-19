
import React from 'react';
import ComponentCard from '@/components/ComponentCard';

const UsageTab = () => {
  return (
    <ComponentCard title="Uso das Cores" description="Como aplicar cores corretamente em sua interface.">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Princípios Gerais</h3>
        <ul className="list-disc list-inside space-y-2 text-mui-text-secondary">
          <li>Use cores de maneira consistente para criar uma experiência coesa</li>
          <li>Mantenha o contraste adequado para garantir legibilidade e acessibilidade</li>
          <li>Utilize cores semânticas para comunicar significado e estado</li>
          <li>Limite o uso de cores de destaque para não sobrecarregar a interface</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-6">Cores Semânticas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-lg border p-4">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 rounded-full bg-primary-main mr-2"></div>
              <h4 className="font-medium">Primary (Amicci)</h4>
            </div>
            <p className="text-mui-text-secondary text-sm">
              Use para elementos de destaque, botões principais, links e elementos de navegação primários.
            </p>
          </div>
          
          <div className="rounded-lg border p-4">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 rounded-full bg-secondary-main mr-2"></div>
              <h4 className="font-medium">Secondary (AmicciDark)</h4>
            </div>
            <p className="text-mui-text-secondary text-sm">
              Use para elementos secundários, botões alternativos e detalhes visuais complementares.
            </p>
          </div>
          
          <div className="rounded-lg border p-4">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 rounded-full bg-error-main mr-2"></div>
              <h4 className="font-medium">Error (Red)</h4>
            </div>
            <p className="text-mui-text-secondary text-sm">
              Use para mensagens de erro, estados de erro e ações destrutivas como exclusão.
            </p>
          </div>
          
          <div className="rounded-lg border p-4">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 rounded-full bg-success-main mr-2"></div>
              <h4 className="font-medium">Success (Green)</h4>
            </div>
            <p className="text-mui-text-secondary text-sm">
              Use para confirmações, mensagens de sucesso e indicadores positivos.
            </p>
          </div>
          
          <div className="rounded-lg border p-4">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 rounded-full bg-warning-main mr-2"></div>
              <h4 className="font-medium">Warning (Yellow)</h4>
            </div>
            <p className="text-mui-text-secondary text-sm">
              Use para alertas, notificações importantes e ações que requerem atenção.
            </p>
          </div>
          
          <div className="rounded-lg border p-4">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 rounded-full bg-info-main mr-2"></div>
              <h4 className="font-medium">Info (Blue)</h4>
            </div>
            <p className="text-mui-text-secondary text-sm">
              Use para mensagens informativas, dicas e elementos de ajuda contextual.
            </p>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
};

export default UsageTab;
