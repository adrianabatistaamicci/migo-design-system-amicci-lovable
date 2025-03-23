
import React, { useState } from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import Header from '@/components/library-components/Header';
import { TailwindTabs } from '@/components/ui/tabs';
import { MarketplaceSellerExample, MarketplaceBuyerExample } from '@/components/application-shells/StackedLayoutExamples';

const MarketplaceScreens = () => {
  const [activeTab, setActiveTab] = useState('seller');

  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Marketplace Screens"
        description="Exemplos de layouts de marketplace para vendedores e compradores"
        type="components"
      />
      
      <TailwindTabs 
        defaultValue="seller" 
        className="mt-8"
        tabs={[
          { name: 'Vendedor', value: 'seller' },
          { name: 'Comprador', value: 'buyer' }
        ]}
        variant="pillsGray"
        onChange={(value) => setActiveTab(value)}
      />

      <div className="mt-10">
        {activeTab === 'seller' && (
          <div className="border rounded-lg overflow-hidden shadow-sm">
            <MarketplaceSellerExample />
          </div>
        )}
        
        {activeTab === 'buyer' && (
          <div className="border rounded-lg overflow-hidden shadow-sm">
            <MarketplaceBuyerExample />
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketplaceScreens;
