
import React, { useState } from 'react';
import { X } from 'lucide-react';
import Header from '@/components/library-components/Header';
import CodeBlock from '@/components/CodeBlock';

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
  const [simulateEnabled, setSimulateEnabled] = useState(false);
  
  return <div className="w-full animate-fade-in">
      <Header 
        title="Toggle" 
        description="Toggle components allow users to switch between two states and are commonly used for 'on/off' functionality." 
        type="components"
        className="mb-6"
      />

      <div className="space-y-8">
        {/* Simple toggle */}
        <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-6">
            <h3 className="text-lg font-medium mb-4">Simple toggle</h3>
            <div className="p-4">
              <Toggle enabled={simpleEnabled} onChange={setSimpleEnabled} />
            </div>
          </div>
          <CodeBlock 
            code={`const [enabled, setEnabled] = useState(false)

<Toggle enabled={enabled} onChange={setEnabled} />`}
            language="tsx"
            title="Implementation of Simple Toggle"
            showCode={false}
          />
        </div>

        {/* Short toggle */}
        <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-6">
            <h3 className="text-lg font-medium mb-4">Short toggle</h3>
            <div className="p-4">
              <Toggle enabled={shortEnabled} onChange={setShortEnabled} size="sm" />
            </div>
          </div>
          <CodeBlock 
            code={`const [enabled, setEnabled] = useState(false)

<Toggle enabled={enabled} onChange={setEnabled} size="sm" />`}
            language="tsx"
            title="Implementation of Short Toggle"
            showCode={false}
          />
        </div>

        {/* Toggle with icon */}
        <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-6">
            <h3 className="text-lg font-medium mb-4">Toggle with icon</h3>
            <div className="p-4">
              <div className="flex items-center gap-2">
                {iconEnabled && <X size={16} className="text-gray-500" />}
                <Toggle enabled={iconEnabled} onChange={setIconEnabled} />
              </div>
            </div>
          </div>
          <CodeBlock 
            code={`const [enabled, setEnabled] = useState(false)

<div className="flex items-center gap-2">
  {enabled && <X size={16} className="text-gray-500" />}
  <Toggle enabled={enabled} onChange={setEnabled} />
</div>`}
            language="tsx"
            title="Implementation of Toggle with Icon"
            showCode={false}
          />
        </div>

        {/* Simulate toggle */}
        <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-6">
            <h3 className="text-lg font-medium mb-4">Simulate toggle</h3>
            <div className="p-4">
              <div className="flex items-center">
                <span className="mr-3 text-sm font-medium text-gray-900">Simular</span>
                <Toggle enabled={simulateEnabled} onChange={setSimulateEnabled} />
                {simulateEnabled && <span className="ml-2 text-sm text-green-500">(Ativado)</span>}
              </div>
            </div>
          </div>
          <CodeBlock 
            code={`const [enabled, setEnabled] = useState(false)

<div className="flex items-center">
  <span className="mr-3 text-sm font-medium text-gray-900">Simular</span>
  <Toggle enabled={enabled} onChange={setEnabled} />
  {enabled && <span className="ml-2 text-sm text-green-500">(Ativado)</span>}
</div>`}
            language="tsx"
            title="Implementation of Simulate Toggle"
            showCode={false}
          />
        </div>

        {/* With left label and description */}
        <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-6">
            <h3 className="text-lg font-medium mb-4">With left label and description</h3>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Available to hire</h3>
                  <p className="text-sm text-gray-500">Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia.</p>
                </div>
                <Toggle enabled={descriptionEnabled} onChange={setDescriptionEnabled} />
              </div>
            </div>
          </div>
          <CodeBlock 
            code={`const [enabled, setEnabled] = useState(false)

<div className="flex items-center justify-between">
  <div>
    <h3 className="text-sm font-medium text-gray-900">Available to hire</h3>
    <p className="text-sm text-gray-500">Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia.</p>
  </div>
  <Toggle enabled={enabled} onChange={setEnabled} />
</div>`}
            language="tsx"
            title="Implementation of Toggle with Description"
            showCode={false}
          />
        </div>

        {/* With right label */}
        <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-6">
            <h3 className="text-lg font-medium mb-4">With right label</h3>
            <div className="p-4">
              <div className="flex items-center">
                <Toggle enabled={rightLabelEnabled} onChange={setRightLabelEnabled} />
                <span className="ml-3 text-sm font-medium text-gray-900">Annual billing</span>
                {rightLabelEnabled && <span className="ml-2 text-sm text-green-500">(Save 10%)</span>}
              </div>
            </div>
          </div>
          <CodeBlock 
            code={`const [enabled, setEnabled] = useState(false)

<div className="flex items-center">
  <Toggle enabled={enabled} onChange={setEnabled} />
  <span className="ml-3 text-sm font-medium text-gray-900">Annual billing</span>
  {enabled && <span className="ml-2 text-sm text-green-500">(Save 10%)</span>}
</div>`}
            language="tsx"
            title="Implementation of Toggle with Right Label"
            showCode={false}
          />
        </div>
      </div>
    </div>;
};

export default TogglePage;
