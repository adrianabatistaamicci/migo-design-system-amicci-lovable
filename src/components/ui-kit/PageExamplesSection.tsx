
import React from 'react';
import ComponentPreview from '@/components/ComponentPreview';

const PageExamplesSection = () => {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-6">Page Examples</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ComponentPreview 
          title="Home Screens" 
          imageSrc="/lovable-uploads/8193019c-5cbc-4e3d-a119-72e97a79a59e.png" 
          variantCount={2} 
        />
        
        <ComponentPreview 
          title="Detail Screens" 
          imageSrc="/lovable-uploads/0dacb6bd-565c-42ca-ab1f-bf4a6d377240.png" 
          variantCount={5} 
        />
        
        <ComponentPreview 
          title="Settings Screens" 
          imageSrc="/lovable-uploads/67b83589-4c0e-4697-944f-de6e741e2a65.png" 
          variantCount={3} 
        />
      </div>
    </section>
  );
};

export default PageExamplesSection;
