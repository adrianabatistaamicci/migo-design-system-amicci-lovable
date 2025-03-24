
import React from 'react';
import { Link } from 'react-router-dom';
import ComponentPreview from '@/components/ComponentPreview';

const PageExamplesSection = () => {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-6">Templates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Link to="/components/home-screens">
          <ComponentPreview 
            title="Home Screens" 
            imageSrc="/lovable-uploads/9927c2b0-bfb3-40df-890c-8985169e26cf.png" 
            variantCount={2} 
          />
        </Link>
        
        <Link to="/components/detail-screens">
          <ComponentPreview 
            title="Detail Screens" 
            imageSrc="/lovable-uploads/3a9c0820-04a9-4a12-bdbd-ff67122302fc.png" 
            variantCount={5} 
          />
        </Link>
        
        <Link to="/components/settings-screens">
          <ComponentPreview 
            title="Settings Screens" 
            imageSrc="/lovable-uploads/b23c6058-72be-4e1f-9c9b-42edb5a09961.png" 
            variantCount={3} 
          />
        </Link>
        
        <Link to="/components/projects-screens">
          <ComponentPreview 
            title="Projects Screens" 
            imageSrc="#000000" 
            variantCount={2} 
          />
        </Link>
        
        <Link to="/components/marketplace-screens">
          <ComponentPreview 
            title="Marketplace Screens" 
            imageSrc="#000000" 
            variantCount={2} 
          />
        </Link>
      </div>
    </section>
  );
};

export default PageExamplesSection;
