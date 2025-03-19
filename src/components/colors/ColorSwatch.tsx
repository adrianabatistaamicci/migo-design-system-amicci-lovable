
import React from 'react';

interface ColorSwatchProps {
  color: string;
  className?: string;
  onClick?: () => void;
}

const ColorSwatch = ({ color, className = "", onClick }: ColorSwatchProps) => {
  return (
    <div 
      className={`w-full h-8 rounded ${color} ${className}`} 
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    />
  );
};

export default ColorSwatch;
