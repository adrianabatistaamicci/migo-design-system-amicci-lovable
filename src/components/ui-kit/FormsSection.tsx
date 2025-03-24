
import React from 'react';
import { Link } from 'react-router-dom';
import ComponentPreview from '@/components/ComponentPreview';

const FormsSection = () => {
  return (
    <section>
      <h2 className="text-xl font-normal mb-6">Forms</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Link to="/components/form-layouts">
          <ComponentPreview 
            title="Form Layouts" 
            imageSrc="/lovable-uploads/cfc7a52b-ffa5-44d9-95ca-05107e567428.png" 
            variantCount={5} 
          />
        </Link>
        
        <Link to="/components/input">
          <ComponentPreview 
            title="Input Groups" 
            imageSrc="/lovable-uploads/716623cc-5c25-40ab-8a5e-e28213c7e1d5.png" 
            variantCount={3} 
          />
        </Link>
        
        <Link to="/components/select">
          <ComponentPreview 
            title="Select Menus" 
            imageSrc="/lovable-uploads/85809393-1600-481a-a7ba-1816bb20f00f.png" 
            variantCount={4} 
          />
        </Link>
        
        <Link to="/components/sign-in-registration">
          <ComponentPreview 
            title="Sign-in and Registration" 
            imageSrc="/lovable-uploads/d9dd4b85-bc29-4f8e-a797-9c24f22b254f.png" 
            variantCount={3} 
          />
        </Link>
        
        <Link to="/components/textareas">
          <ComponentPreview 
            title="Textareas" 
            imageSrc="/lovable-uploads/2bd4c74e-6a09-40d1-b157-c71852127acf.png" 
            variantCount={2} 
          />
        </Link>
        
        <Link to="/components/radio-group">
          <ComponentPreview 
            title="Radio Groups" 
            imageSrc="/lovable-uploads/7750a5fb-61fe-48f0-95b0-b14b8c81b08c.png" 
            variantCount={3} 
          />
        </Link>
        
        <Link to="/components/checkbox">
          <ComponentPreview 
            title="Checkboxes" 
            imageSrc="/lovable-uploads/2126717f-8e46-4946-b32a-7a330d2b407b.png" 
            variantCount={4} 
          />
        </Link>
        
        <Link to="/components/toggle">
          <ComponentPreview 
            title="Toggles" 
            imageSrc="/lovable-uploads/7d4f2471-35d9-48cb-9fe6-4d1b7c613838.png" 
            variantCount={3} 
          />
        </Link>
        
        <Link to="/components/action-panels">
          <ComponentPreview 
            title="Action Panels" 
            imageSrc="/lovable-uploads/17c3a62e-660b-4dc9-ad0d-490a22a572fa.png" 
            variantCount={2} 
          />
        </Link>
        
        <Link to="/components/select">
          <ComponentPreview 
            title="Comboboxes" 
            imageSrc="/lovable-uploads/775866fd-0be9-43fe-9086-1ebabc8836ae.png" 
            variantCount={3} 
          />
        </Link>
      </div>
    </section>
  );
};

export default FormsSection;
