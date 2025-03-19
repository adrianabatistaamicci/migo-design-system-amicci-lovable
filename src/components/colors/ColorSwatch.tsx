
import React from 'react';

interface ColorSwatchProps {
  color: string;
  className?: string;
  onClick?: () => void;
  textOverlay?: string;
}

const ColorSwatch = ({ color, className = "", onClick, textOverlay }: ColorSwatchProps) => {
  return (
    <div 
      className={`w-full h-8 rounded ${color} ${className} flex items-center justify-center`} 
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {textOverlay && (
        <span className={`text-sm font-medium ${color.includes('white') || color.includes('light') ? 'text-gray-800' : 'text-white'}`}>
          {textOverlay}
        </span>
      )}
    </div>
  );
};

export default ColorSwatch;
