
import React from 'react';
import ComponentPreview from '@/components/ComponentPreview';

const OverlaysSection = () => {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-6">Overlays</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ComponentPreview 
          title="Modal Dialogs" 
          imageSrc="/lovable-uploads/9edc0220-a8fc-4935-a6d0-d27cd6c6b49f.png" 
          variantCount={4} 
        />
        
        <ComponentPreview 
          title="Drawers" 
          imageSrc="/lovable-uploads/bbc1b531-583f-4092-9766-e9c04680183e.png" 
          variantCount={3} 
        />
        
        <ComponentPreview 
          title="Notifications" 
          imageSrc="/lovable-uploads/cdc177ff-a734-4717-aa15-df3407ecf64c.png" 
          variantCount={5} 
        />
      </div>
    </section>
  );
};

export default OverlaysSection;
