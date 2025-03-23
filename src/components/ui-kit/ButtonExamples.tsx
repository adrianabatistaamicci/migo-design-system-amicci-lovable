
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import ComponentCard from '@/components/ComponentCard';

export const ButtonWithIconExample = () => {
  return (
    <ComponentCard
      title="Button with Icon"
      description="Button with a Github icon as a startIcon and outline-secondary variant"
      code={`<Button variant="outline-secondary" startIcon={<Github size={18} />}>Secondary</Button>`}
    >
      <div className="flex flex-col items-center gap-4">
        <Button variant="outline-secondary" startIcon={<Github size={18} />}>
          Secondary
        </Button>
      </div>
    </ComponentCard>
  );
};

export default ButtonWithIconExample;
