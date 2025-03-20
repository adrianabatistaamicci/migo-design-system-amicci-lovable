
import React from 'react';
import ComponentPreview from '@/components/ComponentPreview';

const LayoutSection = () => {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-6">Layout</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ComponentPreview 
          title="Containers" 
          imageSrc="/lovable-uploads/f8b89c21-724c-4c22-a8f9-4c1f698665dd.png" 
          variantCount={3} 
        />
        
        <ComponentPreview 
          title="Cards" 
          imageSrc="/lovable-uploads/c8f6351d-67d3-4280-bdcb-a10989d0cc0a.png" 
          variantCount={4} 
        />
        
        <ComponentPreview 
          title="List containers" 
          imageSrc="/lovable-uploads/b3d7ab36-7698-45e9-a238-d7dac3d86a5d.png" 
          variantCount={3} 
        />
        
        <ComponentPreview 
          title="Media Objects" 
          imageSrc="/lovable-uploads/c35e9291-3626-4ddb-af93-d78cfe2009ed.png" 
          variantCount={2} 
        />
        
        <ComponentPreview 
          title="Dividers" 
          imageSrc="/lovable-uploads/c9489d33-ab7d-4112-aa7f-4e9db69d9733.png" 
          variantCount={2} 
        />
      </div>
    </section>
  );
};

export default LayoutSection;
