
import React from 'react';
import { AlertCircle, Clock, Construction, BookText } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: 'alert' | 'clock' | 'construction' | 'book';
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
        return <AlertCircle className="h-8 w-8 text-primary-main" />;
      case 'clock':
        return <Clock className="h-8 w-8 text-primary-main" />;
      case 'construction':
        return <Construction className="h-8 w-8 text-primary-main" />;
      case 'book':
        return <BookText className="h-8 w-8 text-primary-main" />;
      default:
        return <Construction className="h-8 w-8 text-primary-main" />;
    }
  };
  
  return (
    <div className={cn("flex flex-col items-center justify-center p-8 text-center rounded-lg border border-gray-200 bg-gray-50", className)}>
      <div className="mb-4">
        {getIcon()}
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 max-w-md">{description}</p>
    </div>
  );
};

export default EmptyState;
