
import React from 'react';
import ComponentPreview from '@/components/ComponentPreview';

const ElementsSection = () => {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-6">Elements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ComponentPreview 
          title="Avatars" 
          imageSrc="/lovable-uploads/f842772b-6892-47e1-9884-3e79bf5fe918.png" 
          variantCount={3} 
        />
        
        <ComponentPreview 
          title="Badges" 
          imageSrc="/lovable-uploads/a48fffca-50b5-41eb-867b-66f9081d2390.png" 
          variantCount={6} 
        />
        
        <ComponentPreview 
          title="Dropdowns" 
          imageSrc="/lovable-uploads/a8858b43-cf90-4c5e-be18-8f2fb45d2a5e.png" 
          variantCount={4} 
        />
        
        <ComponentPreview 
          title="Buttons" 
          imageSrc="/lovable-uploads/23e9f1e4-ec12-4198-a04d-ce6226702b03.png" 
          variantCount={8} 
        />
        
        <ComponentPreview 
          title="Button Groups" 
          imageSrc="/lovable-uploads/5ea80b3c-ada0-4735-a77b-c5d9ade72312.png" 
          variantCount={3} 
        />
      </div>
    </section>
  );
};

export default ElementsSection;
