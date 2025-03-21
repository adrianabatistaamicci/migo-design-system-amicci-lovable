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
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-mui-primary font-medium mb-2">
          <Chip variant="filled" color="primary" size="sm">Foundations</Chip>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-950">{title}</h1>
        <p className="max-w-none text-zinc-700">{description}</p>
      </div>
    </div>;
};
export default FoundationsHeader;