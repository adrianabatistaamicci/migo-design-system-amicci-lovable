
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const chipVariants = cva(
  "inline-flex items-center text-sm rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-mui-background-subtle text-mui-text-primary border border-mui-border",
        filled: "bg-primary-main text-primary-contrast",
        outlined: "bg-transparent border border-primary-main text-primary-main",
      },
      size: {
        default: "h-8 px-3 text-sm",
        sm: "h-6 px-2 text-xs",
        lg: "h-10 px-4 text-base",
      },
      color: {
        default: "",
        primary: "",
        secondary: "",
        success: "",
        error: "",
        info: "",
        warning: "",
      }
    },
    compoundVariants: [
      {
        variant: "filled",
        color: "primary",
        class: "bg-primary-main text-primary-contrast",
      },
      {
        variant: "filled",
        color: "secondary",
        class: "bg-secondary-main text-secondary-contrast",
      },
      {
        variant: "filled",
        color: "success",
        class: "bg-success-main text-success-contrast",
      },
      {
        variant: "filled",
        color: "error",
        class: "bg-error-main text-error-contrast",
      },
      {
        variant: "filled",
        color: "info",
        class: "bg-info-main text-info-contrast",
      },
      {
        variant: "filled",
        color: "warning",
        class: "bg-warning-main text-warning-contrast",
      },
      {
        variant: "outlined",
        color: "primary",
        class: "border-primary-main text-primary-main",
      },
      {
        variant: "outlined",
        color: "secondary",
        class: "border-secondary-main text-secondary-main",
      },
      {
        variant: "outlined",
        color: "success",
        class: "border-success-main text-success-main",
      },
      {
        variant: "outlined",
        color: "error",
        class: "border-error-main text-error-main",
      },
      {
        variant: "outlined",
        color: "info",
        class: "border-info-main text-info-main",
      },
      {
        variant: "outlined",
        color: "warning",
        class: "border-warning-main text-warning-main",
      }
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      color: "default",
    },
  }
)

export interface ChipProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chipVariants> {
  onDelete?: () => void;
  icon?: React.ReactNode;
  avatar?: React.ReactNode;
  clickable?: boolean;
  disabled?: boolean;
}

function Chip({ 
  className, 
  variant, 
  size, 
  color,
  onDelete,
  icon,
  avatar,
  clickable = false,
  disabled = false,
  children,
  ...props 
}: ChipProps) {
  return (
    <div 
      className={cn(
        chipVariants({ variant, size, color, className }),
        clickable && !disabled && "cursor-pointer hover:opacity-90 active:opacity-70",
        disabled && "opacity-50 pointer-events-none",
        (icon || avatar) && "pl-2",
        "gap-1"
      )} 
      {...props}
    >
      {avatar && <div className="mr-1">{avatar}</div>}
      {icon && !avatar && <div className="mr-1">{icon}</div>}
      <span>{children}</span>
      {onDelete && !disabled && (
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          className="ml-1 rounded-full p-0.5 hover:bg-black/10 transition-colors"
          aria-label="Delete"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      )}
    </div>
  )
}

export { Chip, chipVariants }
