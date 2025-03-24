
import React from 'react';
import { Link } from 'react-router-dom';
import ComponentPreview from '@/components/ComponentPreview';

const LayoutSection = () => {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-6">Layout</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Link to="/components/containers">
          <ComponentPreview 
            title="Containers" 
            imageSrc="/lovable-uploads/50680209-761b-450d-a5fa-810cbfd9f55e.png" 
            variantCount={3} 
          />
        </Link>
        
        <Link to="/components/cards">
          <ComponentPreview 
            title="Cards" 
            imageSrc="/lovable-uploads/be846f05-719c-4b9e-adff-47ab355555a2.png" 
            variantCount={4} 
          />
        </Link>
        
        <Link to="/components/list-containers">
          <ComponentPreview 
            title="List containers" 
            imageSrc="/lovable-uploads/8d33092e-b2ad-41e5-9947-ef4232574b31.png" 
            variantCount={3} 
          />
        </Link>
        
        <Link to="/components/media-objects">
          <ComponentPreview 
            title="Media Objects" 
            imageSrc="/lovable-uploads/653a7618-b167-474f-aeea-13615d885f2a.png" 
            variantCount={2} 
          />
        </Link>
        
        <Link to="/components/dividers">
          <ComponentPreview 
            title="Dividers" 
            imageSrc="/lovable-uploads/387e8c0a-345a-4cd4-8f33-bbea33b79a9a.png" 
            variantCount={2} 
          />
        </Link>
        
        <Link to="/components/skeleton">
          <ComponentPreview 
            title="Skeletons" 
            imageSrc="/lovable-uploads/af8bf5fa-891c-432c-95a7-a34361b8a712.png" 
            variantCount={3} 
          />
        </Link>
      </div>
    </section>
  );
};

export default LayoutSection;
