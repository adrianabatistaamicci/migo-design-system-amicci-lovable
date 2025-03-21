
import React from 'react';
import { Chip } from '@/components/ui/chip';

interface FoundationsHeaderProps {
  title: string;
  description: string;
}

const FoundationsHeader = ({
  title,
  description
}: FoundationsHeaderProps) => {
  return <div className="w-full animate-fade-in">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm font-medium mb-2">
          <Chip 
            variant="filled" 
            className="bg-amicciDark-100 text-amicciDark-700"
            size="sm"
          >
            Foundations
          </Chip>
        </div>
        <h1 className="text-3xl font-medium tracking-tight text-zinc-950">{title}</h1>
        <p className="max-w-none text-zinc-700">{description}</p>
      </div>
    </div>;
};

export default FoundationsHeader;
