
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertCircle, CheckCircle2, Info } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import ComponentCard from '@/components/ComponentCard';

const ColorUsage = () => {
  return (
    <div className="space-y-8">
      <ComponentCard 
        title="Uso de Cores" 
        description="Guia para aplicação consistente das cores do sistema em diferentes contextos."
        className="overflow-hidden rounded-lg"
      >
        <h3 className="text-lg font-medium mb-4">Cores para Botões</h3>
        <div className="flex flex-wrap gap-4 mb-8">
          <Button variant="default" className="rounded-md">Botão Primário</Button>
          <Button variant="error" className="rounded-md">Botão de Erro</Button>
          <Button variant="outline-secondary" className="rounded-md">Botão Secundário</Button>
          <Button variant="text-default" className="rounded-md">Botão Texto</Button>
        </div>
        
        <h3 className="text-lg font-medium mb-4">Cores para Alertas</h3>
        <div className="space-y-4 mb-8">
          <Alert variant="default" className="border-primary-main rounded-md">
            <Info className="h-4 w-4 text-primary-main" />
            <AlertTitle>Informação</AlertTitle>
            <AlertDescription>
              Este é um alerta de informação usando cores primárias.
            </AlertDescription>
          </Alert>
          
          <Alert variant="destructive" className="rounded-md">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Erro</AlertTitle>
            <AlertDescription>
              Este é um alerta de erro usando cores de erro.
            </AlertDescription>
          </Alert>
          
          <Alert className="border-success-main rounded-md">
            <CheckCircle2 className="h-4 w-4 text-success-main" />
            <AlertTitle className="text-success-main">Sucesso</AlertTitle>
            <AlertDescription>
              Este é um alerta de sucesso usando cores de sucesso.
            </AlertDescription>
          </Alert>
        </div>
      </ComponentCard>
      
      <ComponentCard 
        title="Diretrizes para Uso de Cores" 
        description="Recomendações para aplicação das cores no sistema de design."
        className="overflow-hidden rounded-lg"
      >
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Cores Primárias</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Use Amicci-500 como cor principal para elementos de destaque e ações primárias.</li>
              <li>Use Blue-600 para links e elementos secundários de navegação.</li>
              <li>Limit o uso das cores de destaque para manter o equilíbrio visual.</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Cores Semânticas</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Verde (success) para mensagens de sucesso, confirmações e ações concluídas.</li>
              <li>Vermelho (error) para erros, alertas críticos e ações destrutivas.</li>
              <li>Amarelo (warning) para avisos e alertas não críticos.</li>
              <li>Azul (info) para mensagens informativas e dicas.</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Cores de Fundo</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Use tons neutros (background-default, background-paper) para fundos de página e containers.</li>
              <li>Aplique cores de fundo mais escuras para áreas de navegação e cabeçalhos.</li>
              <li>Mantenha alto contraste entre texto e fundo para garantir legibilidade.</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Estados e Interações</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Use variações da mesma cor para indicar estados de componentes (hover, active, disabled).</li>
              <li>Mantenha consistência nos estados visuais em toda a interface.</li>
              <li>Aplique opacidade para indicar estados desabilitados mantendo a identidade visual.</li>
            </ul>
          </div>
        </div>
      </ComponentCard>
    </div>
  );
};

export default ColorUsage;
