
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
  variant?: "underline" | "pills" | "pills-gray" | "pills-brand" | "fullWidth" | "bar" | "underline-badges"
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
  variant = "underline",
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
  variant?: "underline" | "pills" | "pills-gray" | "pills-brand" | "fullWidth" | "bar" | "underline-badges"
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
  variant = "underline",
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
      fullWidth && orientation !== "vertical" ? "w-full" : "",
      variant === "bar" && "border-b border-gray-200"
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
          orientation === "horizontal" && variant === "underline" ? "border-b border-gray-200" : "",
          orientation === "horizontal" && variant === "underline-badges" ? "border-b border-gray-200" : "",
          orientation === "horizontal" && variant === "fullWidth" ? "border-b border-gray-200" : "",
          variant === "pills-gray" ? "bg-gray-100 p-1 rounded-lg" : "",
          variant === "pills" ? "rounded-lg p-1" : "",
          variant === "pills-brand" ? "bg-blue-50 rounded-lg p-1" : ""
        )}>
          <TabsPrimitive.List
            ref={ref}
            className={cn(
              orientation === "horizontal" 
                ? "inline-flex items-center" 
                : "flex flex-col items-start space-y-1",
              variant === "fullWidth" ? "w-full" : "",
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
  badge?: React.ReactNode
  variant?: "underline" | "pills" | "pills-gray" | "pills-brand" | "fullWidth" | "bar" | "underline-badges"
}

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ 
  className, 
  icon, 
  iconPosition = "left",
  activeColor = "primary",
  badge,
  variant = "underline",
  children,
  ...props 
}, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative",
      "text-sm font-medium",
      
      // Underline variant (default)
      variant === "underline" || variant === "underline-badges" ? 
        "px-4 py-2.5 text-gray-500 hover:text-gray-700 data-[state=active]:text-gray-900 relative border-b-2 border-transparent data-[state=active]:border-primary-600" : "",
        
      // Bar variant
      variant === "bar" ? 
        "px-4 py-2.5 text-gray-500 hover:text-gray-700 data-[state=active]:text-gray-900 relative border-b-2 border-transparent data-[state=active]:border-primary-600" : "",
        
      // Pills variant
      variant === "pills" ? 
        "px-3 py-1.5 text-gray-600 hover:text-gray-900 data-[state=active]:bg-gray-100 rounded-md" : "",
        
      // Pills gray variant  
      variant === "pills-gray" ? 
        "px-3 py-1.5 text-gray-600 hover:text-gray-900 data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm rounded-md" : "",
        
      // Pills brand variant
      variant === "pills-brand" ? 
        "px-3 py-1.5 text-gray-600 hover:text-gray-900 data-[state=active]:bg-primary-600 data-[state=active]:text-white rounded-md" : "",
        
      // Full width variant
      variant === "fullWidth" ? 
        "px-4 py-2.5 flex-1 text-gray-500 hover:text-gray-700 data-[state=active]:text-gray-900 border-b-2 border-transparent data-[state=active]:border-primary-600" : "",
        
      className
    )}
    {...props}
  >
    {icon && iconPosition === "left" && (
      <span className="mr-2 flex items-center">
        {icon}
      </span>
    )}
    
    {icon && iconPosition === "up" && (
      <span className="mb-1 flex items-center justify-center">
        {icon}
      </span>
    )}
    
    <span>{children}</span>
    
    {icon && iconPosition === "right" && (
      <span className="ml-2 flex items-center">
        {icon}
      </span>
    )}
    
    {badge && (
      <span className="ml-2">{badge}</span>
    )}
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
