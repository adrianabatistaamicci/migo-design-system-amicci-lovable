
import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: boolean;
  variant?: "outlined" | "filled" | "standard";
  fullWidth?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    type, 
    label, 
    helperText, 
    error, 
    variant = "outlined", 
    fullWidth = false,
    startAdornment,
    endAdornment,
    ...props 
  }, ref) => {
    const id = React.useId();
    
    return (
      <div className={cn(
        "flex flex-col",
        fullWidth && "w-full",
        className
      )}>
        {label && (
          <label 
            htmlFor={id} 
            className={cn(
              "mb-1 text-sm font-medium transition-colors",
              error ? "text-error-main" : "text-text-secondary"
            )}
          >
            {label}
          </label>
        )}
        
        <div className={cn(
          "relative flex items-center",
          fullWidth && "w-full"
        )}>
          {startAdornment && (
            <div className="absolute left-3 flex items-center pointer-events-none text-text-secondary">
              {startAdornment}
            </div>
          )}
          
          <input
            id={id}
            type={type}
            ref={ref}
            className={cn(
              "transition-all duration-200 text-base md:text-sm",
              "focus:outline-none focus-visible:ring-offset-0",
              fullWidth && "w-full",
              startAdornment && "pl-10",
              endAdornment && "pr-10",
              {
                "rounded-md border border-input bg-background px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary": variant === "outlined",
                "border-b-2 border-border-default px-1 py-1 bg-background-subtle focus-visible:border-primary-main": variant === "standard",
                "rounded-t-md border-b-2 border-border-default px-3 py-2 bg-background-subtle focus-visible:border-primary-main": variant === "filled",
              },
              error && {
                "border-error-main focus-visible:ring-error-main": variant === "outlined",
                "border-error-main focus-visible:border-error-main": variant === "standard" || variant === "filled",
              },
              props.disabled && "opacity-50 cursor-not-allowed"
            )}
            {...props}
          />
          
          {endAdornment && (
            <div className="absolute right-3 flex items-center pointer-events-none text-text-secondary">
              {endAdornment}
            </div>
          )}
        </div>
        
        {helperText && (
          <span className={cn(
            "mt-1 text-xs",
            error ? "text-error-main" : "text-text-secondary"
          )}>
            {helperText}
          </span>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
