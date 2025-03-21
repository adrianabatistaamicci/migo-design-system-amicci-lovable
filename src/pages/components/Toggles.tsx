
import React from 'react';
import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Check, List, Grid, Moon, Sun, Laptop } from 'lucide-react';
import ComponentsHeader from '@/components/library-components/ComponentsHeader';
import CodeBlock from '@/components/CodeBlock';
import ComponentCard from '@/components/ComponentCard';

const TogglesPage = () => {
  return (
    <div className="animate-slide-in">
      <ComponentsHeader 
        title="Toggles" 
        description="Toggles are used to quickly switch between two possible states." 
      />
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <p className="text-mui-text-secondary mb-6">
          The Toggle component allows the user to toggle between an on and off state.
        </p>
        
        <ComponentCard 
          title="Basic Toggle" 
          description="A simple toggle that can be pressed or unpressed."
          code={`import { Toggle } from "@/components/ui/toggle"

export function BasicToggle() {
  return <Toggle>Toggle</Toggle>
}`}
        >
          <div className="flex items-center justify-center py-4">
            <Toggle>Toggle</Toggle>
          </div>
        </ComponentCard>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Toggle Variants</h2>
        <p className="text-mui-text-secondary mb-6">
          Toggles can be customized with different variants and sizes.
        </p>
        
        <ComponentCard 
          title="Toggle Variants" 
          description="Default and outline variants in different sizes."
          code={`import { Toggle } from "@/components/ui/toggle"

export function ToggleVariants() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Toggle>Default</Toggle>
      <Toggle variant="outline">Outline</Toggle>
      <Toggle size="sm">Small</Toggle>
      <Toggle size="lg">Large</Toggle>
    </div>
  )
}`}
        >
          <div className="flex flex-wrap items-center justify-center gap-4 py-4">
            <Toggle>Default</Toggle>
            <Toggle variant="outline">Outline</Toggle>
            <Toggle size="sm">Small</Toggle>
            <Toggle size="lg">Large</Toggle>
          </div>
        </ComponentCard>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Toggle Group</h2>
        <p className="text-mui-text-secondary mb-6">
          Toggle Group is used to group multiple toggle components.
        </p>
        
        <ComponentCard 
          title="Toggle Group" 
          description="A group of toggles with single selection."
          code={`import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { List, Grid } from "lucide-react"

export function ToggleGroupDemo() {
  return (
    <ToggleGroup type="single" defaultValue="list">
      <ToggleGroupItem value="list">
        <List className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="grid">
        <Grid className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}`}
        >
          <div className="flex items-center justify-center py-4">
            <ToggleGroup type="single" defaultValue="list">
              <ToggleGroupItem value="list">
                <List className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="grid">
                <Grid className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </ComponentCard>
        
        <ComponentCard 
          title="Toggle Group (Multiple)" 
          description="A group of toggles with multiple selection."
          code={`import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Moon, Sun, Laptop } from "lucide-react"

export function ToggleGroupMultiple() {
  return (
    <ToggleGroup type="multiple">
      <ToggleGroupItem value="moon">
        <Moon className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="sun">
        <Sun className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="laptop">
        <Laptop className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}`}
        >
          <div className="flex items-center justify-center py-4">
            <ToggleGroup type="multiple">
              <ToggleGroupItem value="moon">
                <Moon className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="sun">
                <Sun className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="laptop">
                <Laptop className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </ComponentCard>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">With Text</h2>
        <p className="text-mui-text-secondary mb-6">
          Toggles can include both text and icons.
        </p>
        
        <ComponentCard 
          title="Toggle with Text and Icon" 
          description="Combining icons and text in toggles."
          code={`import { Toggle } from "@/components/ui/toggle"
import { Check } from "lucide-react"

export function ToggleWithTextAndIcon() {
  return (
    <div className="flex flex-col gap-4">
      <Toggle>
        <Check className="mr-2 h-4 w-4" /> Mark as read
      </Toggle>
      <Toggle variant="outline">
        <Check className="mr-2 h-4 w-4" /> Completed
      </Toggle>
    </div>
  )
}`}
        >
          <div className="flex flex-col items-center justify-center gap-4 py-4">
            <Toggle>
              <Check className="mr-2 h-4 w-4" /> Mark as read
            </Toggle>
            <Toggle variant="outline">
              <Check className="mr-2 h-4 w-4" /> Completed
            </Toggle>
          </div>
        </ComponentCard>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Disabled State</h2>
        <p className="text-mui-text-secondary mb-6">
          Toggles can be disabled to prevent user interaction.
        </p>
        
        <ComponentCard 
          title="Disabled Toggle" 
          description="Toggle in a disabled state."
          code={`import { Toggle } from "@/components/ui/toggle"

export function DisabledToggle() {
  return (
    <div className="flex gap-4">
      <Toggle disabled>Disabled</Toggle>
      <Toggle disabled pressed>Disabled & Pressed</Toggle>
    </div>
  )
}`}
        >
          <div className="flex items-center justify-center gap-4 py-4">
            <Toggle disabled>Disabled</Toggle>
            <Toggle disabled pressed>Disabled & Pressed</Toggle>
          </div>
        </ComponentCard>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Implementation</h2>
        
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Toggle Component</h3>
          <CodeBlock
            title="src/components/ui/toggle.tsx"
            language="tsx"
            code={`import * as React from "react"
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
          />
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2">Toggle Group Component</h3>
          <CodeBlock
            title="src/components/ui/toggle-group.tsx"
            language="tsx"
            code={`import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { toggleVariants } from "@/components/ui/toggle"

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: "default",
  variant: "default",
})

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn("flex items-center justify-center gap-1", className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
))

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
})

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

export { ToggleGroup, ToggleGroupItem }`}
          />
        </div>
      </section>
    </div>
  );
};

export default TogglesPage;
