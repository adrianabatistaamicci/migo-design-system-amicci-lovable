
import React from 'react';
import { Link } from 'react-router-dom';
import ComponentPreview from '@/components/ComponentPreview';

const DataDisplaySection = () => {
  return (
    <section>
      <h2 className="text-xl font-normal mb-6">Data Display</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Link to="/components/description-lists">
          <ComponentPreview 
            title="Description Lists" 
            imageSrc="/lovable-uploads/531327f2-86f6-49ac-b20e-a6208981c4f0.png" 
            variantCount={3} 
          />
        </Link>
        
        <Link to="/components/stats">
          <ComponentPreview 
            title="Stats" 
            imageSrc="/lovable-uploads/5b3e17be-df5b-434e-a5ab-97c692b060c7.png" 
            variantCount={5} 
          />
        </Link>
        
        <Link to="/components/calendars">
          <ComponentPreview 
            title="Calendars" 
            imageSrc="/lovable-uploads/80519a18-7140-48e9-9f06-27c6678c8d23.png" 
            variantCount={2} 
          />
        </Link>
      </div>
    </section>
  );
};

export default DataDisplaySection;
