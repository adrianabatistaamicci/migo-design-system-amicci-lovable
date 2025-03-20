
import React from 'react';
import { Chip } from '@/components/ui/chip';

const UIKitHeader = () => {
  return (
    <div>
      <div className="flex items-center gap-2 text-sm text-mui-primary font-medium mb-2">
        <Chip variant="filled" color="primary" size="sm">Components</Chip>
      </div>
      <h1 className="text-3xl font-bold tracking-tight mb-2">UI Kit</h1>
      <p className="text-muted-foreground text-lg mb-6">Uma visão geral dos principais componentes do nosso Design System</p>
    </div>
  );
};

export default UIKitHeader;
