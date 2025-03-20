
import React from 'react';
import ComponentPreview from '@/components/ComponentPreview';

const FeedbackSection = () => {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-6">Feedback</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ComponentPreview 
          title="Alerts" 
          imageSrc="/lovable-uploads/d2e49c4c-1339-407d-8744-e7c8747bce34.png" 
          variantCount={4} 
        />
        
        <ComponentPreview 
          title="Empty States" 
          imageSrc="/lovable-uploads/dacdc4fe-2a1f-45c1-bd8d-4f62e1c70ac5.png" 
          variantCount={3} 
        />
      </div>
    </section>
  );
};

export default FeedbackSection;
