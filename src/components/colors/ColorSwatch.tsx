
import React from 'react';

interface ColorSwatchProps {
  color: string;
  className?: string;
  onClick?: () => void;
  textOverlay?: string;
  weight?: string;
}

const ColorSwatch = ({ color, className = "", onClick, textOverlay, weight }: ColorSwatchProps) => {
  return (
    <div 
      className={`w-full h-12 rounded-md ${color} ${className} flex items-center justify-center`} 
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {textOverlay && (
        <span className={`text-sm font-medium ${color.includes('white') || color.includes('light') || color.includes('50') || color.includes('100') ? 'text-gray-800' : 'text-white'}`}>
          {textOverlay}
        </span>
      )}
    </div>
  );
};

export default ColorSwatch;
