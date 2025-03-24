
import React from 'react';
import { Link } from 'react-router-dom';
import ComponentPreview from '@/components/ComponentPreview';

const HeadingsSection = () => {
  return (
    <section>
      <h2 className="text-xl font-normal mb-6">Headings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Link to="/components/page-headings">
          <ComponentPreview 
            title="Page Headings" 
            imageSrc="/lovable-uploads/5ae2c9b9-8171-41af-a6c2-2002cc7425f5.png" 
            variantCount={3} 
          />
        </Link>
        
        <Link to="/components/card-headings">
          <ComponentPreview 
            title="Card Headings" 
            imageSrc="/lovable-uploads/d8b561b7-e3ee-4619-98f4-431c051c5a6d.png" 
            variantCount={2} 
          />
        </Link>
        
        <Link to="/components/section-headings">
          <ComponentPreview 
            title="Section Headings" 
            imageSrc="/lovable-uploads/ee14d06e-2261-45fd-8394-56f7401fe24b.png" 
            variantCount={4} 
          />
        </Link>
      </div>
    </section>
  );
};

export default HeadingsSection;
