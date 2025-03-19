
import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check, Minus } from "lucide-react"

import { cn } from "@/lib/utils"

export interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  label?: string;
  helperText?: string;
  indeterminate?: boolean;
  color?: "primary" | "secondary" | "success" | "error" | "warning" | "info";
  size?: "sm" | "default" | "lg";
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, label, helperText, indeterminate, color = "primary", size = "default", ...props }, ref) => {
  const id = React.useId();
  
  // Handle indeterminate state
  const checkboxRef = React.useRef<HTMLButtonElement>(null);
  
  React.useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.dataset.state = indeterminate ? "indeterminate" : props.checked ? "checked" : "unchecked";
    }
  }, [indeterminate, props.checked]);
  
  const sizeClasses = {
    sm: "h-3.5 w-3.5",
    default: "h-4 w-4",
    lg: "h-5 w-5",
  };
  
  const colorClasses = {
    primary: "data-[state=checked]:bg-primary-main data-[state=indeterminate]:bg-primary-main",
    secondary: "data-[state=checked]:bg-secondary-main data-[state=indeterminate]:bg-secondary-main",
    success: "data-[state=checked]:bg-success-main data-[state=indeterminate]:bg-success-main",
    error: "data-[state=checked]:bg-error-main data-[state=indeterminate]:bg-error-main",
    warning: "data-[state=checked]:bg-warning-main data-[state=indeterminate]:bg-warning-main",
    info: "data-[state=checked]:bg-info-main data-[state=indeterminate]:bg-info-main",
  };
  
  // Make the checkbox a bit more "Material UI"-like with animation and ripple effect
  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex items-center gap-2">
        <CheckboxPrimitive.Root
          ref={(node) => {
            // Handle both forwarded ref and local ref
            if (typeof ref === "function") ref(node);
            else if (ref) ref.current = node;
            checkboxRef.current = node;
          }}
          id={id}
          className={cn(
            "peer shrink-0 relative rounded-sm border border-mui-border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
            "data-[state=checked]:text-primary-contrast",
            "data-[state=indeterminate]:text-primary-contrast",
            sizeClasses[size],
            colorClasses[color],
          )}
          {...props}
        >
          <CheckboxPrimitive.Indicator
            className={cn("flex items-center justify-center text-current transition-opacity")}
          >
            {indeterminate ? (
              <Minus className={cn("h-full w-full")} />
            ) : (
              <Check className={cn("h-full w-full")} />
            )}
          </CheckboxPrimitive.Indicator>
          <span className="absolute inset-0 scale-0 opacity-0 rounded-full bg-current data-[state=checked]:animate-ripple pointer-events-none" />
        </CheckboxPrimitive.Root>
        
        {label && (
          <label
            htmlFor={id}
            className={cn(
              "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
              size === "sm" && "text-xs",
              size === "lg" && "text-base"
            )}
          >
            {label}
          </label>
        )}
      </div>
      
      {helperText && (
        <span className="mt-1 text-xs text-mui-text-secondary ml-6">
          {helperText}
        </span>
      )}
    </div>
  )
})
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
