
import React from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import HeaderLibrary from '@/components/library-components/HeaderLibrary';

const NotificationToasts = () => {
  return (
    <div className="w-full animate-fade-in">
      <HeaderLibrary 
        title="Notification Toasts"
        description="Notificações temporárias informativas para feedback ao usuário."
        type="components"
      />
      
      <EmptyState 
        title="Conteúdo em Desenvolvimento" 
        description="Os exemplos detalhados de Notification Toasts estão sendo implementados. Volte em breve para visualizar os componentes." 
        icon="construction"
      />
    </div>
  );
};

export default NotificationToasts;
