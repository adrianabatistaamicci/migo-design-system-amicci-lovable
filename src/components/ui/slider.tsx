
import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

export interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  marks?: { value: number; label?: string }[];
  valueLabelDisplay?: "auto" | "on" | "off";
  track?: "normal" | "inverted" | false;
  size?: "sm" | "md" | "lg";
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ 
  className, 
  color = "primary", 
  marks, 
  valueLabelDisplay = "off",
  track = "normal",
  size = "md",
  ...props 
}, ref) => {
  // Get formatted values for display
  const values = props.value || props.defaultValue || [0];
  const [localValues, setLocalValues] = React.useState(values);
  
  // Update local values when props change
  React.useEffect(() => {
    setLocalValues(values);
  }, [values]);
  
  // Handle updating local values during drag
  const handleValueChange = (newValues: number[]) => {
    setLocalValues(newValues);
    if (props.onValueChange) {
      props.onValueChange(newValues);
    }
  };
  
  const colorClasses = {
    primary: "bg-primary-main",
    secondary: "bg-secondary-main", 
    error: "bg-error-main",
    info: "bg-info-main",
    success: "bg-success-main",
    warning: "bg-warning-main",
  };
  
  const sizeClasses = {
    sm: "h-1",
    md: "h-2",
    lg: "h-3",
  };
  
  const thumbSizeClasses = {
    sm: "h-3.5 w-3.5",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };
  
  return (
    <div className={cn("relative pt-5 pb-8", className)}>
      <SliderPrimitive.Root
        ref={ref}
        onValueChange={handleValueChange}
        className={cn(
          "relative flex w-full touch-none select-none items-center",
        )}
        {...props}
      >
        <SliderPrimitive.Track 
          className={cn(
            "relative w-full grow overflow-hidden rounded-full bg-mui-border",
            sizeClasses[size]
          )}
        >
          <SliderPrimitive.Range 
            className={cn(
              "absolute h-full",
              track === "normal" ? colorClasses[color] : "bg-mui-border",
              track === "inverted" && "left-0 !right-auto"
            )} 
          />
        </SliderPrimitive.Track>
        
        {/* Render marks if provided */}
        {marks && (
          <div className="absolute w-full flex -mt-1">
            {marks.map((mark) => (
              <div
                key={mark.value}
                className={cn(
                  "absolute top-0 h-2 w-0.5 bg-mui-text-secondary",
                  mark.label ? "h-3" : "h-2"
                )}
                style={{
                  left: `${((mark.value - (props.min || 0)) / ((props.max || 100) - (props.min || 0))) * 100}%`,
                  transform: "translateX(-50%)"
                }}
              >
                {mark.label && (
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-xs text-mui-text-secondary whitespace-nowrap">
                    {mark.label}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        
        {props.value ? props.value : props.defaultValue ? props.defaultValue : [0]}
        {(props.value || props.defaultValue || [0]).map((_, i) => (
          <SliderPrimitive.Thumb
            key={i}
            className={cn(
              "block rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
              thumbSizeClasses[size]
            )}
          >
            {/* Value label */}
            {(valueLabelDisplay === "on" || 
              (valueLabelDisplay === "auto" && props.onValueChange)) && (
              <div className={cn(
                "absolute bottom-full mb-1.5 left-1/2 transform -translate-x-1/2 rounded-sm bg-primary-main px-1 py-0.5 text-xs text-primary-contrast opacity-0 transition-opacity",
                "data-[active]:opacity-100"
              )}>
                {localValues[i]}
              </div>
            )}
          </SliderPrimitive.Thumb>
        ))}
      </SliderPrimitive.Root>
    </div>
  )
})
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
