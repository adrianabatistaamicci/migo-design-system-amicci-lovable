
import React from 'react';
import { Chip } from '@/components/ui/chip';
import { cn } from '@/lib/utils';

interface HeaderProps {
  title: string;
  description: string;
  type?: 'foundations' | 'components';
  className?: string;
}

const Header = ({
  title,
  description,
  type = 'components',
  className
}: HeaderProps) => {
  return (
    <div className={cn("w-full animate-fade-in mb-8", className)}>
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm font-medium mb-2">
          <Chip 
            variant="filled" 
            className="bg-amicciDark-100 text-amicciDark-700"
            size="sm"
          >
            {type === 'foundations' ? 'Foundations' : 'Components'}
          </Chip>
        </div>
        <h1 className="text-4xl font-medium tracking-tight text-gray-950">
          {title}
        </h1>
        <p className="max-w-none text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Header;
