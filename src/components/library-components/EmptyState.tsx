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
        return <AlertCircle className="h-8 w-8 text-primary-main" />;
      case 'clock':
        return <Clock className="h-8 w-8 text-primary-main" />;
      case 'construction':
        return <Construction className="h-8 w-8 text-primary-main" />;
      default:
        return <Construction className="h-8 w-8 text-primary-main" />;
    }
  };
  return;
};
export default EmptyState;