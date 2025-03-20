
import React from 'react';

interface ComponentPreviewProps {
  title: string;
  children?: React.ReactNode; // Optional when imageSrc is provided
  imageSrc?: string;
  variantCount?: number; // Number of variants
}

const ComponentPreview = ({ 
  title, 
  children, 
  imageSrc, 
  variantCount = 1 // Default to 1 variant if not specified
}: ComponentPreviewProps) => (
  <div className="flex flex-col">
    <div className="border border-border rounded-lg bg-white p-4 h-40 flex items-center justify-center overflow-hidden">
      {imageSrc ? (
        <img src={imageSrc} alt={title} className="max-w-full max-h-full object-contain" />
      ) : (
        children
      )}
    </div>
    <div className="mt-2 text-center">
      <h3 className="text-sm font-medium text-foreground">{title}</h3>
      <p className="text-xs text-muted-foreground">
        {variantCount === 1 
          ? "1 Variant" 
          : `${variantCount} Variants`}
      </p>
    </div>
  </div>
);

export default ComponentPreview;
