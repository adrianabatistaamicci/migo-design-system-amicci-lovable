
import React, { useState } from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import Header from '@/components/library-components/Header';
import { TailwindTabs } from '@/components/ui/tabs';
import { 
  List, 
  Users, 
  Bell, 
  ShoppingCart,
  User,
  Settings,
  Message,
  Mail
} from 'lucide-react';

const StackedLists = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Stacked Lists"
        description="Utilize listas empilhadas para exibir sequências de informações, como notificações, atividades ou configurações. Esse padrão proporciona uma apresentação clara e consistente para conjuntos de dados relacionados."
        type="foundations"
        className="mb-8"
      />
      
      <TailwindTabs 
        defaultValue="overview" 
        className="mt-8"
        tabs={[
          { name: 'Visão geral', value: 'overview' },
          { name: 'Exemplos', value: 'examples' },
          { name: 'Uso', value: 'usage' }
        ]}
        variant="pillsGray"
        onChange={(value) => setActiveTab(value)}
      />

      {activeTab === 'overview' && (
        <div className="mt-8">
          <EmptyState 
            title="Conteúdo em Desenvolvimento" 
            description="Os exemplos detalhados de Stacked Lists estão sendo implementados. Volte em breve para visualizar os componentes." 
            icon="construction"
          />
        </div>
      )}
      
      {activeTab === 'examples' && (
        <div className="mt-8">
          <EmptyState 
            title="Exemplos em Desenvolvimento" 
            description="Os exemplos de implementação de Stacked Lists estão sendo preparados." 
            icon="construction"
          />
        </div>
      )}
      
      {activeTab === 'usage' && (
        <div className="mt-8">
          <EmptyState 
            title="Guia de Uso em Desenvolvimento" 
            description="As diretrizes de uso para Stacked Lists estão sendo elaboradas." 
            icon="construction"
          />
        </div>
      )}
    </div>
  );
};

export default StackedLists;
