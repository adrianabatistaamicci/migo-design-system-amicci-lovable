import React from 'react';
import ComponentCard from '@/components/ComponentCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ColorUsage: React.FC = () => {
  return (
    <ComponentCard 
      title="Uso" 
      description="Orientações para a aplicação correta das cores na interface."
    >
      <p className="text-gray-600 mb-6">
        Diretrizes de uso que asseguram consistência visual e funcional em toda a experiência do usuário.
      </p>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">Aplicação em Componentes</h3>
          <p className="text-gray-600 mb-4">
            Nossas cores são aplicadas de acordo com as seguintes diretrizes para manter consistência visual em toda a plataforma.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="border p-4 rounded-lg">
              <h4 className="font-medium mb-3">Botões</h4>
              <div className="flex flex-col space-y-4">
                <Button>Botão Primário</Button>
                <Button variant="default">Botão Secundário</Button>
                <Button variant="outline-secondary">Botão Outline</Button>
                <Button variant="text-default">Botão Texto</Button>
              </div>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h4 className="font-medium mb-3">Badges</h4>
              <div className="flex flex-wrap gap-3">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-3">Diretrizes de Contraste</h3>
          <p className="text-gray-600 mb-4">
            Todas as cores foram testadas para garantir contraste adequado seguindo as diretrizes WCAG 2.1.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border p-4 rounded-lg">
              <h4 className="font-medium mb-2">Combinações Recomendadas</h4>
              <div className="space-y-2">
                <div className="p-3 bg-primary-main rounded">
                  <p className="text-white">Texto em branco sobre fundo primário</p>
                </div>
                <div className="p-3 bg-white border border-primary-main rounded">
                  <p className="text-primary-main">Texto primário sobre fundo branco</p>
                </div>
                <div className="p-3 bg-secondary-dark rounded">
                  <p className="text-white">Texto em branco sobre fundo secundário escuro</p>
                </div>
              </div>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h4 className="font-medium mb-2">Combinações a Evitar</h4>
              <div className="space-y-2">
                <div className="p-3 bg-amicci-100 rounded">
                  <p className="text-amicci-200">❌ Contraste insuficiente: cores próximas</p>
                </div>
                <div className="p-3 bg-yellow-300 rounded">
                  <p className="text-white">❌ Combinação que pode dificultar a leitura</p>
                </div>
                <div className="p-3 bg-gray-200 rounded">
                  <p className="text-gray-400">❌ Texto muito claro em fundo claro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
};

export default ColorUsage;
