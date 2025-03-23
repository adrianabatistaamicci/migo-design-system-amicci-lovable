
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
  Mail,
  Code,
  Copy,
  CheckCheck
} from 'lucide-react';
import CodeBlock from '@/components/CodeBlock';

const StackedLists = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showCode, setShowCode] = useState(false);

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

      <div className="mt-8">
        <div className="rounded-lg border border-gray-200 overflow-hidden">
          {activeTab === 'overview' && (
            <div className="p-6">
              <EmptyState 
                title="Conteúdo em Desenvolvimento" 
                description="Os exemplos detalhados de Stacked Lists estão sendo implementados. Volte em breve para visualizar os componentes." 
                icon="construction"
              />
            </div>
          )}
          
          {activeTab === 'examples' && (
            <div className="p-6">
              <EmptyState 
                title="Exemplos em Desenvolvimento" 
                description="Os exemplos de implementação de Stacked Lists estão sendo preparados." 
                icon="construction"
              />
            </div>
          )}
          
          {activeTab === 'usage' && (
            <div className="p-6">
              <EmptyState 
                title="Guia de Uso em Desenvolvimento" 
                description="As diretrizes de uso para Stacked Lists estão sendo elaboradas." 
                icon="construction"
              />
            </div>
          )}
        </div>

        <div className="mt-4 border rounded-lg overflow-hidden">
          <button 
            onClick={() => setShowCode(!showCode)}
            className="w-full flex items-center justify-between px-4 py-2 bg-gray-50 border-b border-gray-200"
          >
            <div className="flex items-center space-x-2">
              <Code size={16} className="text-gray-500" />
              <span className="text-sm font-medium text-gray-700">
                {showCode ? "Hide code" : "Show code"}
              </span>
            </div>
            <div>
              <Copy size={16} className="text-gray-500" />
            </div>
          </button>
          
          {showCode && (
            <div className="p-4 bg-gray-50">
              <CodeBlock 
                code={`
// Example of a stacked list component
import React from 'react';

const StackedList = ({ items }) => {
  return (
    <ul className="divide-y divide-gray-200 border border-gray-200 rounded-lg">
      {items.map((item, index) => (
        <li key={index} className="p-4 hover:bg-gray-50 flex justify-between items-center">
          <div>
            <h4 className="font-medium text-gray-900">{item.title}</h4>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>
          {item.action}
        </li>
      ))}
    </ul>
  );
};

export default StackedList;
`} 
                language="jsx" 
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StackedLists;
