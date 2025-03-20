
import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface ColorSwatchProps {
  color: string;
  className?: string;
  onClick?: () => void;
  textOverlay?: string;
  weight?: string;
  hexValue?: string;
  copyValue?: string;
}

const ColorSwatch = ({ 
  color, 
  className = "", 
  onClick, 
  textOverlay, 
  weight,
  hexValue,
  copyValue
}: ColorSwatchProps) => {
  const [copied, setCopied] = useState(false);

  // Determine text color based on background color
  const getTextColor = () => {
    const lightColors = ['white', 'light', '50', '100', '200', '300'];
    const isLightBackground = lightColors.some(lightColor => 
      color.toLowerCase().includes(lightColor)
    );
    
    return isLightBackground ? 'text-gray-800' : 'text-white';
  };

  const handleCopy = () => {
    const valueToCopy = copyValue || hexValue || color;
    navigator.clipboard.writeText(valueToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className={`relative w-full h-16 rounded-md ${color} ${className} flex items-center justify-between px-3 transition-all hover:shadow-md cursor-pointer`}
      onClick={onClick || handleCopy}
      role="button"
      tabIndex={0}
    >
      <div className="flex items-center">
        {textOverlay && (
          <span className={`text-sm font-semibold ${getTextColor()}`}>
            {textOverlay}
          </span>
        )}
        {!textOverlay && (
          <span className={`text-sm font-semibold ${getTextColor()}`}>
            Aa
          </span>
        )}
        {weight && (
          <span className={`ml-2 text-xs ${getTextColor()} opacity-75`}>
            {weight}
          </span>
        )}
      </div>

      {hexValue && (
        <span className={`text-xs font-mono ${getTextColor()} opacity-90`}>
          {hexValue}
        </span>
      )}

      <div className={`absolute right-2 top-2 transition-opacity ${copied ? 'opacity-100' : 'opacity-0 group-hover:opacity-70'}`}>
        {copied ? (
          <Check className={`w-4 h-4 ${getTextColor()}`} />
        ) : (
          <Copy className={`w-4 h-4 ${getTextColor()}`} />
        )}
      </div>
    </div>
  );
};

export default ColorSwatch;
