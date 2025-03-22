
import React from 'react';
import { AlertCircle, Clock, Construction } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: 'alert' | 'clock' | 'construction';
  className?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = "Conteúdo em Desenvolvimento",
  description = "Esta documentação está atualmente sendo desenvolvida. Volte em breve para atualizações.",
  icon = 'construction',
  className
}) => {
  const getIcon = () => {
    switch (icon) {
      case 'alert':
        return <AlertCircle className="h-12 w-12 text-primary-main" />;
      case 'clock':
        return <Clock className="h-12 w-12 text-primary-main" />;
      case 'construction':
        return <Construction className="h-12 w-12 text-primary-main" />;
      default:
        return <Construction className="h-12 w-12 text-primary-main" />;
    }
  };

  return (
    <div className={cn(
      "flex flex-col items-center justify-center p-8 text-center border border-dashed border-gray-300 rounded-lg bg-gray-50 min-h-[300px]",
      className
    )}>
      <div className="flex flex-col items-center gap-4">
        {getIcon()}
        <h3 className="text-xl font-medium text-gray-900">{title}</h3>
        <p className="text-gray-600 max-w-md">{description}</p>
      </div>
    </div>
  );
};

export default EmptyState;
