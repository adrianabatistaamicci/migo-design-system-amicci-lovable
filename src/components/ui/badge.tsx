
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center font-medium transition-colors",
  {
    variants: {
      variant: {
        standard: "rounded-full",
        dot: "rounded-full min-h-[6px] min-w-[6px] h-1.5 w-1.5",
      },
      size: {
        default: "h-5 min-w-[20px] px-1.5 text-xs",
        sm: "h-4 min-w-[16px] px-1 text-[10px]",
        lg: "h-6 min-w-[24px] px-2 text-sm",
      },
      color: {
        default: "bg-background-paper text-text-primary",
        primary: "bg-primary-main text-primary-contrast",
        secondary: "bg-secondary-main text-secondary-contrast",
        error: "bg-error-main text-error-contrast",
        info: "bg-info-main text-info-contrast",
        success: "bg-success-main text-success-contrast",
        warning: "bg-warning-main text-warning-contrast",
      },
    },
    defaultVariants: {
      variant: "standard",
      size: "default",
      color: "primary",
    },
  }
)

// Define the color type to avoid conflicts
type BadgeColor = "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning";

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color">,
    Omit<VariantProps<typeof badgeVariants>, "color"> {
  badgeContent?: React.ReactNode;
  max?: number;
  showZero?: boolean;
  invisible?: boolean;
  overlap?: "rectangular" | "circular";
  color?: BadgeColor;
  anchorOrigin?: {
    vertical: "top" | "bottom";
    horizontal: "left" | "right";
  };
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ 
    className, 
    children, 
    variant, 
    size, 
    color = "primary", 
    badgeContent, 
    max = 99, 
    showZero = false, 
    invisible = false,
    overlap = "rectangular",
    anchorOrigin = { vertical: "top", horizontal: "right" },
    ...props 
  }, ref) => {
    // Determine if badge should be visible
    const shouldShow = React.useMemo(() => {
      if (invisible) return false;
      if (variant === "dot") return true;
      if (badgeContent === 0) return showZero;
      return badgeContent !== undefined && badgeContent !== null;
    }, [invisible, variant, badgeContent, showZero]);
    
    // Format badge content
    const displayContent = React.useMemo(() => {
      if (variant === "dot") return null;
      if (typeof badgeContent === "number" && badgeContent > max) {
        return `${max}+`;
      }
      return badgeContent;
    }, [variant, badgeContent, max]);
    
    // Determine positioning classes
    const positionClasses = React.useMemo(() => {
      const vertical = anchorOrigin.vertical === "top" ? "-top-1" : "-bottom-1";
      const horizontal = anchorOrigin.horizontal === "right" ? "-right-1" : "-left-1";
      
      if (overlap === "circular") {
        return `${vertical.replace("-1", "-0.5")} ${horizontal.replace("-1", "-0.5")}`;
      }
      
      return `${vertical} ${horizontal}`;
    }, [anchorOrigin, overlap]);
    
    if (!children) {
      // Standalone badge
      return (
        <span
          ref={ref}
          className={cn(badgeVariants({ variant, size, color }), className)}
          {...props}
        >
          {displayContent}
        </span>
      );
    }
    
    // Badge with children
    return (
      <div className="relative inline-flex">
        {children}
        {shouldShow && (
          <span
            ref={ref}
            className={cn(
              badgeVariants({ variant, size, color }),
              "absolute z-10",
              positionClasses,
              // For dot variant, adjust position
              variant === "dot" && "mt-0.5 mr-0.5",
              className
            )}
            {...props}
          >
            {displayContent}
          </span>
        )}
      </div>
    );
  }
);

Badge.displayName = "Badge";

export { Badge, badgeVariants }
