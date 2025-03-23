
import React from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import HeaderLibrary from '@/components/library-components/HeaderLibrary';

const ModalDialogs = () => {
  return (
    <div className="w-full animate-fade-in">
      <HeaderLibrary 
        title="Modal Dialogs"
        description="Implementações de caixas de diálogo modal para interações importantes."
        type="components"
      />
      
      <EmptyState 
        title="Conteúdo em Desenvolvimento" 
        description="Os exemplos detalhados de Modal Dialogs estão sendo implementados. Volte em breve para visualizar os componentes." 
        icon="construction"
      />
    </div>
  );
};

export default ModalDialogs;
