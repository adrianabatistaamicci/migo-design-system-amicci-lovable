
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const iconButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Contained variants
        default: "bg-primary-main text-primary-contrast hover:bg-primary-dark",
        secondary: "bg-white text-gray-800 border border-gray-300 hover:bg-gray-50",
        error: "bg-error-main text-error-contrast hover:bg-error-dark",
        warning: "bg-warning-main text-warning-contrast hover:bg-warning-dark",
        info: "bg-info-main text-info-contrast hover:bg-info-dark",
        success: "bg-success-main text-success-contrast hover:bg-success-dark",
        tertiary: "bg-tertiary-main text-tertiary-contrast hover:bg-tertiary-dark",
        
        // Outlined variants
        "outline-default": "border border-primary-outlinedBorder bg-transparent text-primary-main hover:bg-primary-hover/10 active:bg-primary-hover/20",
        "outline-secondary": "border border-mui-text-primary/[0.23] bg-transparent text-mui-text-primary hover:bg-gray-100/10 active:bg-gray-100/20",
        "outline-error": "border border-error-outlinedBorder bg-transparent text-error-main hover:bg-error-hover/10 active:bg-error-hover/20",
        "outline-warning": "border border-warning-outlinedBorder bg-transparent text-warning-main hover:bg-warning-hover/10 active:bg-warning-hover/20",
        "outline-info": "border border-info-outlinedBorder bg-transparent text-info-main hover:bg-info-hover/10 active:bg-info-hover/20",
        "outline-success": "border border-success-outlinedBorder bg-transparent text-success-main hover:bg-success-hover/10 active:bg-success-hover/20",
        "outline-tertiary": "border border-tertiary-outlinedBorder bg-transparent text-tertiary-main hover:bg-tertiary-hover/10 active:bg-tertiary-hover/20",
        
        // Text variants
        "text-default": "bg-transparent text-primary-main hover:bg-primary-hover/10 active:bg-primary-hover/20",
        "text-secondary": "bg-transparent text-mui-text-primary hover:bg-gray-100/10 active:bg-gray-100/20",
        "text-error": "bg-transparent text-error-main hover:bg-error-hover/10 active:bg-error-hover/20",
        "text-warning": "bg-transparent text-warning-main hover:bg-warning-hover/10 active:bg-warning-hover/20",
        "text-info": "bg-transparent text-info-main hover:bg-info-hover/10 active:bg-info-hover/20",
        "text-success": "bg-transparent text-success-main hover:bg-success-hover/10 active:bg-success-hover/20",
        "text-tertiary": "bg-transparent text-tertiary-main hover:bg-tertiary-hover/10 active:bg-tertiary-hover/20",
      },
      size: {
        default: "h-10 w-10",
        sm: "h-8 w-8 rounded-md",
        lg: "h-12 w-12 rounded-md",
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

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  icon: React.ReactNode;
  tooltip?: string;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant, size, state, asChild = false, isLoading = false, disabled, icon, tooltip, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // Handle loading state
    const buttonState = isLoading ? "loading" : disabled ? "disabled" : state;
    
    const buttonElement = (
      <Comp
        className={cn(iconButtonVariants({ variant, size, state: buttonState, className }))}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : (
          icon
        )}
      </Comp>
    )
    
    if (tooltip) {
      return (
        <div className="relative group">
          {buttonElement}
          <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            {tooltip}
          </div>
        </div>
      )
    }
    
    return buttonElement
  }
)
IconButton.displayName = "IconButton"

export { IconButton, iconButtonVariants }
