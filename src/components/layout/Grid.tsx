
import React from 'react';
import { cn } from '@/lib/utils';

interface GridContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const GridContainer: React.FC<GridContainerProps> = ({ 
  children, 
  className 
}) => {
  return (
    <div className={cn(
      "container mx-auto px-4 sm:px-6 lg:px-8",
      className
    )}>
      {children}
    </div>
  );
};

interface GridRowProps {
  children: React.ReactNode;
  className?: string;
}

export const GridRow: React.FC<GridRowProps> = ({ 
  children, 
  className 
}) => {
  return (
    <div className={cn(
      "flex flex-wrap -mx-4",
      className
    )}>
      {children}
    </div>
  );
};

interface GridColProps {
  children: React.ReactNode;
  className?: string;
  span?: number; // 1-12
}

export const GridCol: React.FC<GridColProps> = ({ 
  children, 
  className,
  span = 12
}) => {
  const spanClass = {
    1: 'w-1/12',
    2: 'w-1/6',
    3: 'w-1/4',
    4: 'w-1/3',
    5: 'w-5/12',
    6: 'w-1/2',
    7: 'w-7/12',
    8: 'w-2/3',
    9: 'w-3/4',
    10: 'w-5/6',
    11: 'w-11/12',
    12: 'w-full',
  }[span] || 'w-full';

  return (
    <div className={cn(
      "px-4",
      spanClass,
      className
    )}>
      {children}
    </div>
  );
};
