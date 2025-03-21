
import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from "lucide-react"

export interface TabsProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> {
  orientation?: "horizontal" | "vertical"
  smallScreen?: boolean
  scrollable?: boolean
  fullWidth?: boolean
  activeColor?: "primary" | "secondary" | "none"
}

const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  TabsProps
>(({ 
  className, 
  orientation = "horizontal", 
  smallScreen = false,
  scrollable = false,
  fullWidth = false,
  activeColor = "primary",
  ...props 
}, ref) => (
  <TabsPrimitive.Root
    ref={ref}
    orientation={orientation === "vertical" ? "vertical" : "horizontal"}
    className={cn(
      "data-[orientation=horizontal]:w-full",
      className
    )}
    {...props}
  />
))
Tabs.displayName = "Tabs"

interface TabsListProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> {
  smallScreen?: boolean
  scrollable?: boolean
  fullWidth?: boolean
  orientation?: "horizontal" | "vertical"
}

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ 
  className, 
  smallScreen = false,
  scrollable = false,
  fullWidth = false,
  orientation = "horizontal",
  ...props 
}, ref) => {
  const scrollRef = React.useRef<HTMLDivElement>(null)
  
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -100, behavior: "smooth" })
    }
  }
  
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 100, behavior: "smooth" })
    }
  }
  
  const scrollUp = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ top: -100, behavior: "smooth" })
    }
  }
  
  const scrollDown = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ top: 100, behavior: "smooth" })
    }
  }
  
  return (
    <div className={cn(
      "relative",
      orientation === "vertical" ? "flex" : "block",
      fullWidth && orientation !== "vertical" ? "w-full" : ""
    )}>
      {scrollable && orientation !== "vertical" && (
        <button
          type="button"
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 shadow-md hover:bg-white"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
      )}
      
      {scrollable && orientation === "vertical" && (
        <button
          type="button"
          onClick={scrollUp}
          className="absolute left-1/2 top-0 -translate-x-1/2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 shadow-md hover:bg-white"
        >
          <ChevronUp className="h-4 w-4" />
        </button>
      )}
      
      <div 
        ref={scrollRef}
        className={cn(
          scrollable ? "overflow-auto scrollbar-hide" : "",
          orientation === "vertical" ? "max-h-[300px]" : "max-w-full"
        )}
      >
        <div className={cn(
          orientation === "horizontal" ? "relative border-b border-gray-300 w-full" : ""
        )}>
          <TabsPrimitive.List
            ref={ref}
            className={cn(
              orientation === "horizontal" 
                ? "inline-flex h-10 items-center justify-start" 
                : "flex flex-col items-start justify-center space-y-1",
              smallScreen ? "p-0" : "p-1",
              "w-fit", // This ensures tabs fit to content
              className
            )}
            {...props}
          />
        </div>
      </div>
      
      {scrollable && orientation !== "vertical" && (
        <button
          type="button"
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 shadow-md hover:bg-white"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      )}
      
      {scrollable && orientation === "vertical" && (
        <button
          type="button"
          onClick={scrollDown}
          className="absolute left-1/2 bottom-0 -translate-x-1/2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 shadow-md hover:bg-white"
        >
          <ChevronDown className="h-4 w-4" />
        </button>
      )}
    </div>
  )
})
TabsList.displayName = TabsPrimitive.List.displayName

interface TabsTriggerProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {
  icon?: React.ReactNode
  iconPosition?: "left" | "right" | "up"
  activeColor?: "primary" | "secondary" | "none"
}

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ 
  className, 
  icon, 
  iconPosition = "left",
  activeColor = "primary",
  children,
  ...props 
}, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative",
      "text-secondary-foreground", // Default inactive tab color
      {
        "data-[state=active]:text-foreground": true,
        "data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:right-0 data-[state=active]:after:h-[2px] data-[state=active]:after:bg-primary-main data-[state=active]:after:z-20": activeColor === "primary",
        "data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:right-0 data-[state=active]:after:h-[2px] data-[state=active]:after:bg-secondary-main data-[state=active]:after:z-20": activeColor === "secondary",
        "flex-row-reverse": iconPosition === "right",
        "flex-col": iconPosition === "up",
      },
      className
    )}
    {...props}
  >
    {icon && <span className={cn("flex items-center justify-center", 
      iconPosition === "left" ? "mr-2" : 
      iconPosition === "right" ? "ml-2" : 
      "mb-1"
    )}>
      {icon}
    </span>}
    <span>{children}</span>
  </TabsPrimitive.Trigger>
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
