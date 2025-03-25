
import React, { useEffect } from 'react';
import { Chip } from '@/components/ui/chip';
import { cn } from '@/lib/utils';
import { usePageTitle } from '@/contexts/PageTitleContext';

interface HeaderProps {
  title?: string;
  description: string;
  type?: 'foundations' | 'components';
  className?: string;
  hideChip?: boolean;
}

const Header = ({
  title: propTitle,
  description,
  type = 'components',
  className,
  hideChip = false
}: HeaderProps) => {
  const { pageTitle } = usePageTitle();
  
  // Use the context page title if available, otherwise use the prop title
  const displayTitle = pageTitle || propTitle;

  return (
    <div className={cn("w-full animate-fade-in", className)}>
      <div className="space-y-2">
        {!hideChip && (
          <div className="flex items-center gap-2 text-sm font-medium mb-2">
            <Chip 
              variant="filled" 
              className="bg-amicciDark-100 text-amicciDark-700"
              size="sm"
            >
              {type === 'foundations' ? 'Foundations' : 'Components'}
            </Chip>
          </div>
        )}
        <h1 className="text-4xl font-medium tracking-tight text-gray-950">
          {displayTitle}
        </h1>
        <p className="max-w-none text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Header;
