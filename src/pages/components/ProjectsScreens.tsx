
import React from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import HeaderLibrary from '@/components/library-components/HeaderLibrary';

const ProjectsScreens = () => {
  return (
    <div className="w-full animate-fade-in">
      <HeaderLibrary 
        title="Projects Screens"
        description="Em breve"
        type="components"
      />
      
      <EmptyState 
        title="Conteúdo em Desenvolvimento" 
        description="Os exemplos detalhados de Projects Screens estão sendo implementados. Volte em breve para visualizar os componentes." 
        icon="construction"
      />
    </div>
  );
};

export default ProjectsScreens;
