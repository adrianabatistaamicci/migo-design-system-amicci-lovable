
import React from 'react';
import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import ComponentCard from '@/components/ComponentCard';

const TogglePage = () => {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Toggle</h1>
      <p className="text-gray-500 mb-8">
        A toggle component allows users to switch between two states, typically representing on/off.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ComponentCard 
          title="Basic Toggle" 
          description="A simple toggle component."
          code={`<Toggle aria-label="Toggle">Toggle</Toggle>`}
        >
          <div className="flex items-center justify-center p-8">
            <Toggle aria-label="Toggle">Toggle</Toggle>
          </div>
        </ComponentCard>

        <ComponentCard 
          title="Outline Toggle" 
          description="A toggle with an outline style."
          code={`<Toggle variant="outline" aria-label="Toggle">Toggle</Toggle>`}
        >
          <div className="flex items-center justify-center p-8">
            <Toggle variant="outline" aria-label="Toggle">Toggle</Toggle>
          </div>
        </ComponentCard>

        <ComponentCard 
          title="Size Variants" 
          description="Toggle components in different sizes."
          code={`<div className="flex flex-col gap-4">
  <Toggle size="sm" aria-label="Small toggle">Small</Toggle>
  <Toggle size="default" aria-label="Default toggle">Default</Toggle>
  <Toggle size="lg" aria-label="Large toggle">Large</Toggle>
</div>`}
        >
          <div className="flex flex-col gap-4 items-center justify-center p-8">
            <Toggle size="sm" aria-label="Small toggle">Small</Toggle>
            <Toggle size="default" aria-label="Default toggle">Default</Toggle>
            <Toggle size="lg" aria-label="Large toggle">Large</Toggle>
          </div>
        </ComponentCard>

        <ComponentCard 
          title="Disabled Toggle" 
          description="A toggle in a disabled state."
          code={`<Toggle disabled aria-label="Disabled toggle">Disabled</Toggle>`}
        >
          <div className="flex items-center justify-center p-8">
            <Toggle disabled aria-label="Disabled toggle">Disabled</Toggle>
          </div>
        </ComponentCard>

        <ComponentCard 
          title="Toggle with Icon" 
          description="A toggle that includes an icon."
          code={`<Toggle aria-label="Toggle with icon">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-2 h-4 w-4"><path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20v-6"></path></svg>
  Charts
</Toggle>`}
        >
          <div className="flex items-center justify-center p-8">
            <Toggle aria-label="Toggle with icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4"><path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20v-6"></path></svg>
              Charts
            </Toggle>
          </div>
        </ComponentCard>

        <ComponentCard 
          title="Toggle Group" 
          description="A group of toggles where only one can be active."
          code={`<ToggleGroup type="single" defaultValue="center">
  <ToggleGroupItem value="left">Left</ToggleGroupItem>
  <ToggleGroupItem value="center">Center</ToggleGroupItem>
  <ToggleGroupItem value="right">Right</ToggleGroupItem>
</ToggleGroup>`}
        >
          <div className="flex items-center justify-center p-8">
            <ToggleGroup type="single" defaultValue="center">
              <ToggleGroupItem value="left">Left</ToggleGroupItem>
              <ToggleGroupItem value="center">Center</ToggleGroupItem>
              <ToggleGroupItem value="right">Right</ToggleGroupItem>
            </ToggleGroup>
          </div>
        </ComponentCard>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-4">Implementation</h2>
      <p className="text-gray-500 mb-4">
        Our toggle component is built on top of Radix UI's Toggle primitive for accessibility.
      </p>
      
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mb-12">
        <pre className="text-sm text-gray-800 overflow-auto">
          {`import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }`}
        </pre>
      </div>
    </div>
  );
};

export default TogglePage;
