
import React from 'react';
import { Link } from 'react-router-dom';
import ComponentPreview from '@/components/ComponentPreview';
import { IconButton } from '@/components/ui/icon-button';
import { Star } from 'lucide-react';

const ElementsSection = () => {
  return (
    <section>
      <h2 className="text-xl font-normal mb-6">Elements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Link to="/components/avatar">
          <ComponentPreview 
            title="Avatars" 
            imageSrc="/lovable-uploads/ec5626c9-736f-4de7-a969-4f4e60812388.png" 
            variantCount={3} 
          />
        </Link>
        
        <Link to="/components/badge">
          <ComponentPreview 
            title="Badges" 
            imageSrc="/lovable-uploads/93eec571-57df-4c3a-9958-cb6930361d88.png" 
            variantCount={6} 
          />
        </Link>
        
        <Link to="/components/contextual-help">
          <ComponentPreview 
            title="Contextual Help" 
            imageSrc="/lovable-uploads/93eec571-57df-4c3a-9958-cb6930361d88.png" 
            variantCount={2} 
          />
        </Link>
        
        <Link to="/components/dropdowns">
          <ComponentPreview 
            title="Dropdowns" 
            imageSrc="/lovable-uploads/81490ad1-e5d2-4044-9f7f-f527c64081e7.png" 
            variantCount={4} 
          />
        </Link>
        
        <Link to="/components/buttons">
          <ComponentPreview 
            title="Buttons" 
            imageSrc="/lovable-uploads/be058021-3c4e-45d5-884f-04074c8c2562.png" 
            variantCount={8} 
          />
        </Link>
        
        <Link to="/components/link">
          <ComponentPreview 
            title="Links" 
            imageSrc="/lovable-uploads/93eec571-57df-4c3a-9958-cb6930361d88.png" 
            variantCount={4} 
          />
        </Link>
        
        <Link to="/components/icon-button">
          <ComponentPreview 
            title="Icon Buttons" 
            imageSrc="/lovable-uploads/9de72c1e-736c-41bf-940e-857dd3b7e669.png" 
            variantCount={3} 
          />
        </Link>
        
        <Link to="/components/button-groups">
          <ComponentPreview 
            title="Button Groups" 
            imageSrc="/lovable-uploads/da2da260-cb83-491e-8d76-d4f4519ce2ac.png" 
            variantCount={3} 
          />
        </Link>
        
        <Link to="/components/profile-button">
          <ComponentPreview 
            title="Profile Button" 
            imageSrc="/lovable-uploads/02ffb0f4-88d3-4e29-b4c6-ffba337a37eb.png" 
            variantCount={2} 
          />
        </Link>
      </div>
    </section>
  );
};

export default ElementsSection;
