
import React from 'react';
import ComponentPreview from '@/components/ComponentPreview';
import EmptyState from '@/components/library-components/EmptyState';

const ApplicationShellsSection = () => {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-6">Application Shells</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ComponentPreview 
          title="Stacked Layouts" 
          imageSrc="/lovable-uploads/2164823d-9e27-4ff7-a19d-e5117a64f1f6.png" 
          variantCount={3} 
        />
        
        <ComponentPreview 
          title="Sidebar Layouts" 
          imageSrc="/lovable-uploads/03d9daef-5728-4f4a-add3-20b56bff88f4.png" 
          variantCount={4} 
        />
        
        <ComponentPreview 
          title="Multi-Column Layouts" 
          imageSrc="/lovable-uploads/570a05aa-c89b-4fc3-95fa-08883ec83a75.png" 
          variantCount={2} 
        />
      </div>
      
      <div className="mt-8">
        <EmptyState 
          title="Conteúdo em Desenvolvimento" 
          description="Os exemplos detalhados de Stacked Layouts estão sendo implementados. Volte em breve para visualizar os componentes." 
          icon="construction"
        />
      </div>
    </section>
  );
};

export default ApplicationShellsSection;
