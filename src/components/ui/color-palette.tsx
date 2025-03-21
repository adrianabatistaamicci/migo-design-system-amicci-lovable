
import React from "react";
import { cn } from "@/lib/utils";

interface ColorPaletteProps {
  name: string;
  colors: Record<string, string>;
  className?: string;
}

export function ColorPalette({
  name,
  colors,
  className,
}: ColorPaletteProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <h3 className="font-semibold text-lg">{name}</h3>
      <div className="grid gap-2">
        {Object.entries(colors).map(([colorName, colorValue]) => (
          <div
            key={colorName}
            className="flex items-center gap-2"
          >
            <div
              className="h-10 w-10 rounded-md border"
              style={{ backgroundColor: colorValue }}
            />
            <div className="flex flex-col">
              <span className="text-sm font-medium">{colorName}</span>
              <span className="text-xs text-muted-foreground">{colorValue}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
