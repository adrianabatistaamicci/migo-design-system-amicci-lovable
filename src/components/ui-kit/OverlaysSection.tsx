
import React from 'react';
import ComponentPreview from '@/components/ComponentPreview';

const OverlaysSection = () => {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-6">Overlays</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ComponentPreview 
          title="Modal Dialogs" 
          imageSrc="/lovable-uploads/6d23ac4b-c3d7-4517-a738-32504102cca5.png" 
          variantCount={4} 
        />
        
        <ComponentPreview 
          title="Drawers" 
          imageSrc="/lovable-uploads/bf08eb02-ad67-4da9-a980-a96687517561.png" 
          variantCount={3} 
        />
        
        <ComponentPreview 
          title="Notifications" 
          imageSrc="/lovable-uploads/3178f5bb-fdcc-4a02-b62c-f957515cfd5e.png" 
          variantCount={5} 
        />
      </div>
    </section>
  );
};

export default OverlaysSection;
