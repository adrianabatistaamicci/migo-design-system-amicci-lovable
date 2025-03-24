
import React from 'react';
import { Link } from 'react-router-dom';
import ComponentPreview from '@/components/ComponentPreview';
import { TailwindTabs } from '@/components/ui/tabs';

const NavigationSection = () => {
  // Example tabs for preview
  const exampleTabs = [
    { name: 'Overview', value: 'overview' },
    { name: 'Features', value: 'features' },
    { name: 'Pricing', value: 'pricing' },
    { name: 'FAQ', value: 'faq' },
  ];

  return (
    <section>
      <h2 className="text-xl font-semibold mb-6">Navigation</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Link to="/components/navbar">
          <ComponentPreview 
            title="Navbars" 
            imageSrc="/lovable-uploads/b423f99a-3cca-4147-8f6e-548ac78afc37.png" 
            variantCount={6} 
          />
        </Link>
        
        <Link to="/components/pagination">
          <ComponentPreview 
            title="Pagination" 
            imageSrc="/lovable-uploads/2781a435-658c-4efb-9000-188a41da5368.png" 
            variantCount={3} 
          />
        </Link>
        
        <Link to="/components/tabs">
          <ComponentPreview 
            title="Tabs" 
            imageSrc="/lovable-uploads/da13b6eb-0fae-4122-b38c-db8e8f655bd3.png" 
            variantCount={4} 
            preview={
              <div className="w-full">
                <TailwindTabs 
                  tabs={exampleTabs}
                  variant="pillsGray"
                  defaultValue="overview"
                />
              </div>
            }
          />
        </Link>
        
        <Link to="/components/vertical-navigation">
          <ComponentPreview 
            title="Vertical Navigation" 
            imageSrc="/lovable-uploads/b0959128-432b-438f-ad52-0b74f343f142.png" 
            variantCount={3} 
          />
        </Link>
        
        <Link to="/components/sidebar-navigation">
          <ComponentPreview 
            title="Sidebar Navigation" 
            imageSrc="/lovable-uploads/475a7cfa-efa4-40ad-8a4a-372f07982b64.png" 
            variantCount={4} 
          />
        </Link>
        
        <Link to="/components/breadcrumbs">
          <ComponentPreview 
            title="Breadcrumbs" 
            imageSrc="/lovable-uploads/c294819f-846b-4508-ab9d-ff4079bcfc74.png" 
            variantCount={2} 
          />
        </Link>
        
        <Link to="/components/progress">
          <ComponentPreview 
            title="Progress Bars" 
            imageSrc="/lovable-uploads/af8bf5fa-891c-432c-95a7-a34361b8a712.png" 
            variantCount={3} 
          />
        </Link>
        
        <Link to="/components/command-bars">
          <ComponentPreview 
            title="Command Palettes" 
            imageSrc="/lovable-uploads/2d68f64d-a10b-407e-a762-7245ea124dc9.png" 
            variantCount={2} 
          />
        </Link>
      </div>
    </section>
  );
};

export default NavigationSection;
