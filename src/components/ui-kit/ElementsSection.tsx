
import React from 'react';
import ComponentPreview from '@/components/ComponentPreview';

const ElementsSection = () => {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-6">Elements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ComponentPreview 
          title="Avatars" 
          imageSrc="/lovable-uploads/ec5626c9-736f-4de7-a969-4f4e60812388.png" 
          variantCount={3} 
        />
        
        <ComponentPreview 
          title="Badges" 
          imageSrc="/lovable-uploads/93eec571-57df-4c3a-9958-cb6930361d88.png" 
          variantCount={6} 
        />
        
        <ComponentPreview 
          title="Dropdowns" 
          imageSrc="/lovable-uploads/81490ad1-e5d2-4044-9f7f-f527c64081e7.png" 
          variantCount={4} 
        />
        
        <ComponentPreview 
          title="Buttons" 
          imageSrc="/lovable-uploads/be058021-3c4e-45d5-884f-04074c8c2562.png" 
          variantCount={8} 
        />
        
        <ComponentPreview 
          title="Button Groups" 
          imageSrc="/lovable-uploads/da2da260-cb83-491e-8d76-d4f4519ce2ac.png" 
          variantCount={3} 
        />
        
        <ComponentPreview 
          title="Profile Button" 
          imageSrc="/lovable-uploads/93eec571-57df-4c3a-9958-cb6930361d88.png" 
          variantCount={2} 
        />
      </div>
    </section>
  );
};

export default ElementsSection;
