
import React from 'react';
import { Link } from 'react-router-dom';
import ComponentPreview from '@/components/ComponentPreview';

const FeedbackSection = () => {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-6">Feedback</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Link to="/components/alerts-toasts">
          <ComponentPreview 
            title="Alerts" 
            imageSrc="/lovable-uploads/4a083c56-06a7-44c8-b5e7-a23b6492107c.png" 
            variantCount={4} 
          />
        </Link>
        
        <Link to="/components/empty-states">
          <ComponentPreview 
            title="Empty States" 
            imageSrc="/lovable-uploads/0ab15921-b732-4f41-b1d8-9be8074fdc29.png" 
            variantCount={3} 
          />
        </Link>
      </div>
    </section>
  );
};

export default FeedbackSection;
