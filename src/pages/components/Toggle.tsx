
import React, { useState } from 'react';
import ComponentCard from '@/components/ComponentCard';
import CodeBlock from '@/components/CodeBlock';
import ComponentsHeader from '@/components/library-components/ComponentsHeader';
import { X } from 'lucide-react';

// Custom toggle switch component
const Toggle = ({
  enabled,
  onChange,
  className = "",
  size = "default"
}) => {
  const sizeClasses = {
    default: "w-11 h-6",
    sm: "w-9 h-5",
    lg: "w-14 h-7"
  };
  return <button type="button" className={`${enabled ? 'bg-primary-main' : 'bg-gray-200'} relative inline-flex flex-shrink-0 ${sizeClasses[size]} border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-main ${className}`} role="switch" aria-checked={enabled} onClick={() => onChange(!enabled)}>
      <span className="sr-only">Toggle</span>
      <span aria-hidden="true" className={`${enabled ? `translate-x-${size === 'sm' ? '4' : size === 'lg' ? '7' : '5'}` : 'translate-x-0'} pointer-events-none ${size === 'sm' ? 'h-4 w-4' : size === 'lg' ? 'h-6 w-6' : 'h-5 w-5'} rounded-full bg-white shadow ring-0 transition ease-in-out duration-200`} />
    </button>;
};

const TogglePage = () => {
  const [simpleEnabled, setSimpleEnabled] = useState(false);
  const [shortEnabled, setShortEnabled] = useState(false);
  const [iconEnabled, setIconEnabled] = useState(false);
  const [descriptionEnabled, setDescriptionEnabled] = useState(false);
  const [rightLabelEnabled, setRightLabelEnabled] = useState(false);
  
  return (
    <div className="container py-10">
      <ComponentsHeader 
        title="Toggle" 
        description="Toggle components allow users to switch between two states and are commonly used for 'on/off' functionality."
      />

      <div className="mb-12">
        <CodeBlock code={`import { Toggle } from "@/components/ui/toggle";`} language="jsx" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Simple toggle */}
        <ComponentCard 
          title="Simple toggle" 
          description="A basic toggle switch for on/off states." 
          code={`const [enabled, setEnabled] = useState(false)

<Toggle enabled={enabled} onChange={setEnabled} />`}>
          <div className="flex items-center justify-center p-6 border rounded-lg">
            <div className="w-full max-w-md py-6">
              <Toggle enabled={simpleEnabled} onChange={setSimpleEnabled} />
            </div>
          </div>
        </ComponentCard>

        {/* Short toggle */}
        <ComponentCard 
          title="Short toggle" 
          description="A smaller toggle switch for more compact UIs." 
          code={`const [enabled, setEnabled] = useState(false)

<Toggle enabled={enabled} onChange={setEnabled} size="sm" />`}>
          <div className="flex items-center justify-center p-6 border rounded-lg">
            <div className="w-full max-w-md py-6">
              <Toggle enabled={shortEnabled} onChange={setShortEnabled} size="sm" />
            </div>
          </div>
        </ComponentCard>

        {/* Toggle with icon */}
        <ComponentCard 
          title="Toggle with icon" 
          description="A toggle switch with an icon indicator." 
          code={`const [enabled, setEnabled] = useState(false)

<div className="flex items-center gap-2">
  {enabled && <X size={16} className="text-gray-500" />}
  <Toggle enabled={enabled} onChange={setEnabled} />
</div>`}>
          <div className="flex items-center justify-center p-6 border rounded-lg">
            <div className="w-full max-w-md py-6">
              <div className="flex items-center gap-2">
                {iconEnabled && <X size={16} className="text-gray-500" />}
                <Toggle enabled={iconEnabled} onChange={setIconEnabled} />
              </div>
            </div>
          </div>
        </ComponentCard>

        {/* With left label and description */}
        <ComponentCard 
          title="With left label and description" 
          description="A toggle with a label and detailed description on the left." 
          code={`const [enabled, setEnabled] = useState(false)

<div className="flex items-center justify-between">
  <div>
    <h3 className="text-sm font-medium text-gray-900">Available to hire</h3>
    <p className="text-sm text-gray-500">Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia.</p>
  </div>
  <Toggle enabled={enabled} onChange={setEnabled} />
</div>`}>
          <div className="flex items-center justify-center p-6 border rounded-lg">
            <div className="w-full max-w-md py-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Available to hire</h3>
                  <p className="text-sm text-gray-500">Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia.</p>
                </div>
                <Toggle enabled={descriptionEnabled} onChange={setDescriptionEnabled} />
              </div>
            </div>
          </div>
        </ComponentCard>

        {/* With right label */}
        <ComponentCard 
          title="With right label" 
          description="A toggle with a label on the right side." 
          code={`const [enabled, setEnabled] = useState(false)

<div className="flex items-center">
  <Toggle enabled={enabled} onChange={setEnabled} />
  <span className="ml-3 text-sm font-medium text-gray-900">Annual billing</span>
  {enabled && <span className="ml-2 text-sm text-green-500">(Save 10%)</span>}
</div>`}>
          <div className="flex items-center justify-center p-6 border rounded-lg">
            <div className="w-full max-w-md py-6">
              <div className="flex items-center">
                <Toggle enabled={rightLabelEnabled} onChange={setRightLabelEnabled} />
                <span className="ml-3 text-sm font-medium text-gray-900">Annual billing</span>
                {rightLabelEnabled && <span className="ml-2 text-sm text-green-500">(Save 10%)</span>}
              </div>
            </div>
          </div>
        </ComponentCard>
      </div>
    </div>
  );
};

export default TogglePage;
