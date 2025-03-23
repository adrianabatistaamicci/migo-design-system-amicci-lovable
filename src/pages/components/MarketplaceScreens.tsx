
import React from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import Header from '@/components/library-components/Header';
import { MarketplaceExample, MarketplaceBuyerExample } from '@/components/application-shells/StackedLayoutExamples';

const MarketplaceScreens = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Marketplace Screens"
        description="Exemplos de interfaces para o marketplace da Amicci"
        type="components"
      />
      
      <div className="space-y-12 mt-10">
        <div className="space-y-3">
          <div className="px-4">
            <h3 className="text-xl font-medium text-gray-900">Marketplace Buyer Navigation</h3>
          </div>
          
          <div className="border rounded-lg overflow-hidden shadow-sm">
            <div className="bg-white w-full overflow-hidden">
              <MarketplaceBuyerExample />
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="px-4">
            <h3 className="text-xl font-medium text-gray-900">Marketplace Seller Navigation</h3>
          </div>
          
          <div className="border rounded-lg overflow-hidden shadow-sm">
            <div className="bg-white w-full overflow-hidden">
              <MarketplaceExample />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceScreens;
