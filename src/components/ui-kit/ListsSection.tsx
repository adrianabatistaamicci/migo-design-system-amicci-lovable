
import React from 'react';
import { Link } from 'react-router-dom';
import ComponentPreview from '@/components/ComponentPreview';

const ListsSection = () => {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-6">Lists</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Link to="/components/stacked-lists">
          <ComponentPreview 
            title="Stacked Lists" 
            imageSrc="/lovable-uploads/617587e7-4ed4-4a73-8f4b-fbfb161f8eeb.png" 
            variantCount={6} 
          />
        </Link>
        
        <Link to="/components/tables">
          <ComponentPreview 
            title="Tables" 
            imageSrc="/lovable-uploads/bfe37f7c-8f8c-417b-aa95-b3c672611a30.png" 
            variantCount={4} 
          />
        </Link>
        
        <Link to="/components/grid-lists">
          <ComponentPreview 
            title="Grid Lists" 
            imageSrc="/lovable-uploads/9edec6c6-2e82-4508-be49-97468d9535ab.png" 
            variantCount={3} 
          />
        </Link>
        
        <Link to="/components/feeds">
          <ComponentPreview 
            title="Feeds" 
            imageSrc="/lovable-uploads/4b1e0e00-4264-4905-a658-6330401fe110.png" 
            variantCount={2} 
          />
        </Link>
      </div>
    </section>
  );
};

export default ListsSection;
