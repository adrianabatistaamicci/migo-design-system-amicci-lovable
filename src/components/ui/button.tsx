/**
 * @protected
 * ATENÇÃO: Este arquivo contém conteúdo finalizado e aprovado.
 * Não deve ser alterado diretamente pelo assistente AI.
 * Apenas atualizações de componentes devem ser refletidas.
 */

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Contained variants
        default: "bg-primary-main text-primary-contrast hover:bg-primary-dark",
        error: "bg-error-main text-error-contrast hover:bg-error-dark",
        warning: "bg-warning-main text-white hover:bg-warning-dark",
        info: "bg-info-main text-info-contrast hover:bg-info-dark",
        success: "bg-success-main text-success-contrast hover:bg-success-dark",
        
        // Outlined variants
        "outline-secondary": "border border-mui-text-primary/[0.23] bg-transparent text-mui-text-primary hover:bg-gray-100/10 active:bg-gray-100/20",
        "outline-error": "border border-error-outlinedBorder bg-transparent text-error-main hover:bg-error-hover/10 active:bg-error-hover/20",
        "outline-warning": "border border-warning-outlinedBorder bg-transparent text-warning-main hover:bg-warning-hover/10 active:bg-warning-hover/20",
        "outline-info": "border border-info-outlinedBorder bg-transparent text-info-main hover:bg-info-hover/10 active:bg-info-hover/20",
        "outline-success": "border border-success-outlinedBorder bg-transparent text-success-main hover:bg-success-hover/10 active:bg-success-hover/20",
        
        // Text variants
        "text-default": "bg-transparent text-primary-main hover:bg-gray-50 active:bg-primary-hover/20",
        "text-secondary": "bg-transparent text-mui-text-primary hover:bg-gray-50 active:bg-gray-100/20",
        "text-error": "bg-transparent text-error-main hover:bg-gray-50 active:bg-error-hover/20",
        "text-warning": "bg-transparent text-warning-main hover:bg-gray-50 active:bg-warning-hover/20",
        "text-info": "bg-transparent text-info-main hover:bg-gray-50 active:bg-info-hover/20",
        "text-success": "bg-transparent text-success-main hover:bg-gray-50 active:bg-success-hover/20",
        
        // Legacy variants
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
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
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, state, asChild = false, isLoading = false, disabled, children, startIcon, endIcon, ...props }, ref) => {
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
            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {children}
          </>
        ) : (
          <>
            {startIcon && <span className="mr-1">{startIcon}</span>}
            {children}
            {endIcon && <span className="ml-1">{endIcon}</span>}
          </>
        )}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
