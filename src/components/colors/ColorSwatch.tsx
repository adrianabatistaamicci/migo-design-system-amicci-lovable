
import React from 'react';

interface ColorSwatchProps {
  color: string;
  className?: string;
  onClick?: () => void;
  textOverlay?: string;
  weight?: string;
}

const ColorSwatch = ({ color, className = "", onClick, textOverlay, weight }: ColorSwatchProps) => {
  // Determine text color based on background color
  const getTextColor = () => {
    const lightColors = ['white', 'light', '50', '100', '200', '300'];
    const isLightBackground = lightColors.some(lightColor => 
      color.toLowerCase().includes(lightColor)
    );
    
    return isLightBackground ? 'text-gray-800' : 'text-white';
  };

  return (
    <div 
      className={`w-full h-12 rounded-md ${color} ${className} flex items-center justify-center`} 
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {textOverlay && (
        <span className={`text-sm font-medium ${getTextColor()}`}>
          {textOverlay || "Aa"}
        </span>
      )}
      {!textOverlay && (
        <span className={`text-sm font-medium ${getTextColor()}`}>
          Aa
        </span>
      )}
    </div>
  );
};

export default ColorSwatch;
