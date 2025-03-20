
import React from 'react';
import ComponentPreview from '@/components/ComponentPreview';

const NavigationSection = () => {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-6">Navigation</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ComponentPreview 
          title="Navbars" 
          imageSrc="/lovable-uploads/ab401c97-3309-4d18-ae91-d6f9863337b0.png" 
          variantCount={6} 
        />
        
        <ComponentPreview 
          title="Pagination" 
          imageSrc="/lovable-uploads/d1418a09-7ea9-49dd-be4a-d772504a1c9c.png" 
          variantCount={3} 
        />
        
        <ComponentPreview 
          title="Tabs" 
          imageSrc="/lovable-uploads/8ba357b7-4c81-4fe1-a3ee-81c628bb9d57.png" 
          variantCount={4} 
        />
        
        <ComponentPreview 
          title="Vertical Navigation" 
          imageSrc="/lovable-uploads/85be3370-eb8a-441f-8fb2-35c870429048.png" 
          variantCount={3} 
        />
        
        <ComponentPreview 
          title="Sidebar Navigation" 
          imageSrc="/lovable-uploads/22c8fbc8-4037-4ab1-8410-7592e488e6aa.png" 
          variantCount={4} 
        />
        
        <ComponentPreview 
          title="Breadcrumbs" 
          imageSrc="/lovable-uploads/06c18f19-010a-475b-8aca-5f8919671e23.png" 
          variantCount={2} 
        />
        
        <ComponentPreview 
          title="Progress Bars" 
          imageSrc="/lovable-uploads/7b1986af-9535-4999-a791-96fb7456fccd.png" 
          variantCount={3} 
        />
        
        <ComponentPreview 
          title="Command Palettes" 
          imageSrc="/lovable-uploads/354482fc-f67c-45e5-a378-e6d835005c05.png" 
          variantCount={2} 
        />
      </div>
    </section>
  );
};

export default NavigationSection;
