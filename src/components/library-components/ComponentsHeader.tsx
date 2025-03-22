
import React from 'react';
import { Chip } from '@/components/ui/chip';

interface ComponentsHeaderProps {
  title: string;
  description: string;
}

const ComponentsHeader = ({
  title,
  description
}: ComponentsHeaderProps) => {
  return <div className="w-full animate-fade-in mb-8">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm font-medium mb-2">
          <Chip variant="filled" className="bg-amicciDark-100 text-amicciDark-700" size="sm">
            Components
          </Chip>
        </div>
        <h1 className="text-3xl font-medium tracking-tight text-gray-950">{title}</h1>
        <p className="max-w-none text-gray-700">{description}</p>
      </div>
    </div>;
};

export default ComponentsHeader;
