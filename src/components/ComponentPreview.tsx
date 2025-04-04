
/**
 * @protected
 * ATENÇÃO: Este arquivo contém conteúdo finalizado e aprovado.
 * Não deve ser alterado diretamente pelo assistente AI.
 * Apenas atualizações de componentes devem ser refletidas.
 */

import React, { useState } from 'react';

interface ComponentPreviewProps {
  title: string;
  children?: React.ReactNode; // Optional when imageSrc is provided
  imageSrc?: string;
  variantCount?: number; // Number of variants
  preview?: React.ReactNode; // Added preview prop for live component previews
}

const ComponentPreview = ({
  title,
  children,
  imageSrc,
  variantCount = 1, // Default to 1 variant if not specified
  preview // New prop for showing live component previews
}: ComponentPreviewProps) => {
  const [imageError, setImageError] = useState(false);
  
  const handleImageError = () => {
    console.error(`Failed to load image: ${imageSrc}`);
    setImageError(true);
  };
  
  return (
    <div className="flex flex-col group">
      <div className="border border-border p-4 h-40 flex items-center justify-center overflow-hidden px-0 py-0 rounded bg-[#f8f8f8] transition-all duration-200 group-hover:shadow-md">
        {preview ? (
          preview
        ) : imageSrc && !imageError ? (
          <img 
            src={imageSrc} 
            alt={title} 
            className="max-w-full max-h-full object-contain" 
            onError={handleImageError}
            loading="lazy"
            decoding="async"
          />
        ) : imageError ? (
          <div className="text-sm text-white bg-[#000000] w-full h-full flex flex-col items-center justify-center">
            <span>Failed to load image</span>
            <div className="text-xs mt-1">{imageSrc}</div>
          </div>
        ) : children}
      </div>
      <div className="mt-2 text-center">
        <h3 className="text-sm font-medium text-foreground">{title}</h3>
        <p className="text-xs text-muted-foreground">
          {variantCount === 1 ? "1 Variant" : `${variantCount} Variants`}
        </p>
      </div>
    </div>
  );
};

export default ComponentPreview;
