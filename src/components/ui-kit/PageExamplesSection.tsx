
import React from 'react';
import ComponentPreview from '@/components/ComponentPreview';

const PageExamplesSection = () => {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-6">Page Examples</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ComponentPreview 
          title="Home Screens" 
          imageSrc="/lovable-uploads/9927c2b0-bfb3-40df-890c-8985169e26cf.png" 
          variantCount={2} 
        />
        
        <ComponentPreview 
          title="Detail Screens" 
          imageSrc="/lovable-uploads/3a9c0820-04a9-4a12-bdbd-ff67122302fc.png" 
          variantCount={5} 
        />
        
        <ComponentPreview 
          title="Settings Screens" 
          imageSrc="/lovable-uploads/b23c6058-72be-4e1f-9c9b-42edb5a09961.png" 
          variantCount={3} 
        />
      </div>
    </section>
  );
};

export default PageExamplesSection;
