import React, { useState } from 'react';
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
}: ComponentPreviewProps) => {
  const [imageError, setImageError] = useState(false);
  const handleImageError = () => {
    console.error(`Failed to load image: ${imageSrc}`);
    setImageError(true);
  };
  return <div className="flex flex-col">
      <div className="border border-border p-4 h-40 flex items-center justify-center overflow-hidden px-0 py-0 rounded bg-[#f8f8f8]">
        {imageSrc && !imageError ? <img src={imageSrc} alt={title} className="max-w-full max-h-full object-contain" onError={handleImageError} /> : imageError ? <div className="text-sm text-muted-foreground text-center">
            <span>Failed to load image</span>
            <div className="text-xs mt-1">{imageSrc}</div>
          </div> : children}
      </div>
      <div className="mt-2 text-center">
        <h3 className="text-sm font-medium text-foreground">{title}</h3>
        <p className="text-xs text-muted-foreground">
          {variantCount === 1 ? "1 Variant" : `${variantCount} Variants`}
        </p>
      </div>
    </div>;
};
export default ComponentPreview;