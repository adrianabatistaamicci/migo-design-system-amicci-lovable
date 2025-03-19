
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary-main text-primary-contrast hover:bg-primary-hover focus:bg-primary-focus focus-visible:bg-primary-focusVisible",
        secondary: "bg-gray-500 text-gray-50 hover:bg-gray-600 focus:bg-gray-700 focus-visible:bg-gray-600",
        error: "bg-error-main text-error-contrast hover:bg-error-hover focus:bg-error-focus focus-visible:bg-error-focusVisible",
        warning: "bg-warning-main text-warning-contrast hover:bg-warning-hover focus:bg-warning-hover focus-visible:bg-warning-focusVisible",
        info: "bg-info-main text-info-contrast hover:bg-info-hover focus:bg-info-focus focus-visible:bg-info-focusVisible",
        success: "bg-success-main text-success-contrast hover:bg-success-hover focus:bg-success-focus focus-visible:bg-success-focusVisible",
        
        // Outline variants
        "outline-default": "border border-primary-outlinedBorder bg-transparent text-primary-main hover:bg-primary-hover hover:text-primary-contrast",
        "outline-secondary": "border border-gray-400 bg-transparent text-gray-600 hover:bg-gray-500 hover:text-gray-50",
        "outline-error": "border border-error-outlinedBorder bg-transparent text-error-main hover:bg-error-hover hover:text-error-contrast",
        "outline-warning": "border border-warning-outlinedBorder bg-transparent text-warning-main hover:bg-warning-hover hover:text-warning-contrast",
        "outline-info": "border border-info-outlinedBorder bg-transparent text-info-main hover:bg-info-hover hover:text-info-contrast",
        "outline-success": "border border-success-outlinedBorder bg-transparent text-success-main hover:bg-success-hover hover:text-success-contrast",
        
        // Text variants
        "text-default": "bg-transparent text-primary-main hover:bg-primary-hover hover:text-primary-contrast",
        "text-secondary": "bg-transparent text-gray-600 hover:bg-gray-500 hover:text-gray-50",
        "text-error": "bg-transparent text-error-main hover:bg-error-hover hover:text-error-contrast",
        "text-warning": "bg-transparent text-warning-main hover:bg-warning-hover hover:text-warning-contrast",
        "text-info": "bg-transparent text-info-main hover:bg-info-hover hover:text-info-contrast",
        "text-success": "bg-transparent text-success-main hover:bg-success-hover hover:text-success-contrast",
        
        // Legacy variants (mantendo para compatibilidade)
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 py-1.5 text-xs",
        lg: "h-11 rounded-md px-8 py-2.5 text-base",
        icon: "h-10 w-10",
      },
      state: {
        default: "",
        hover: "",
        focus: "",
        disabled: "opacity-50 cursor-not-allowed",
        loading: "cursor-wait",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      state: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, state, asChild = false, isLoading = false, disabled, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // Handle loading state
    const buttonState = isLoading ? "loading" : disabled ? "disabled" : state;
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, state: buttonState, className }))}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <svg className="animate-spin mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {children}
          </>
        ) : (
          children
        )}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
