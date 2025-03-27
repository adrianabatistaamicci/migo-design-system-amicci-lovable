
import React from 'react';
import Header from '@/components/library-components/Header';

const UIKitHeader = () => {
  return (
    <Header
      title="UI Kit"
      description="Uma visão geral dos principais componentes do nosso Design System"
      type="components"
      hideChip={true}
      className="mb-6"
    />
  );
};

export default UIKitHeader;
