
import React from 'react';
import UIKitHeader from '@/components/ui-kit/UIKitHeader';
import ApplicationShellsSection from '@/components/ui-kit/ApplicationShellsSection';
import HeadingsSection from '@/components/ui-kit/HeadingsSection';
import ElementsSection from '@/components/ui-kit/ElementsSection';
import DataDisplaySection from '@/components/ui-kit/DataDisplaySection';
import ListsSection from '@/components/ui-kit/ListsSection';
import FormsSection from '@/components/ui-kit/FormsSection';
import FeedbackSection from '@/components/ui-kit/FeedbackSection';
import NavigationSection from '@/components/ui-kit/NavigationSection';
import OverlaysSection from '@/components/ui-kit/OverlaysSection';
import LayoutSection from '@/components/ui-kit/LayoutSection';
import PageExamplesSection from '@/components/ui-kit/PageExamplesSection';

const UIKit = () => {
  return (
    <div className="space-y-12">
      <UIKitHeader />
      <ApplicationShellsSection />
      <HeadingsSection />
      <ElementsSection />
      <DataDisplaySection />
      <ListsSection />
      <FormsSection />
      <FeedbackSection />
      <NavigationSection />
      <OverlaysSection />
      <LayoutSection />
      <PageExamplesSection />
    </div>
  );
};

export default UIKit;
