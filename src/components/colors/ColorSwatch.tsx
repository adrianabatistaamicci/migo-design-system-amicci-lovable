
import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { colorUtils } from '@/utils/colorUtils';

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

  // Determine text color based on background color luminance
  const getTextColor = () => {
    // If we have a hex value, use luminance calculation for determining contrast
    if (hexValue) {
      try {
        const luminance = colorUtils.getLuminance(hexValue);
        return luminance > 0.5 ? 'text-gray-800' : 'text-white';
      } catch (e) {
        // Fallback to heuristic based on color name
        return getLightDarkFromName();
      }
    }
    
    // If we don't have a hex value, use heuristic based on color name
    return getLightDarkFromName();
  };
  
  // Helper function to determine if a color is light based on its name
  const getLightDarkFromName = () => {
    const lightColors = ['white', 'light', '50', '100', '200', '300'];
    const isLightColorName = lightColors.some(lightColor => 
      color.toLowerCase().includes(lightColor)
    );
    return isLightColorName ? 'text-gray-800' : 'text-white';
  };

  const handleCopy = () => {
    const valueToCopy = copyValue || hexValue || color;
    navigator.clipboard.writeText(valueToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const textColor = getTextColor();

  // Determine the correct background style
  const getBackgroundStyle = () => {
    // If color starts with 'bg-', we're using a Tailwind class
    if (color.startsWith('bg-')) {
      return color;
    }
    
    // If color is a hex value and doesn't start with 'bg-', use inline style
    if (hexValue && !color.startsWith('bg-')) {
      return `bg-[${hexValue}]`;
    }
    
    // Fallback to the original class
    return color;
  };

  return (
    <div 
      className={`relative w-full h-16 rounded-md ${getBackgroundStyle()} ${className} flex items-center justify-center px-3 transition-all hover:shadow-md cursor-pointer group`}
      onClick={onClick || handleCopy}
      role="button"
      tabIndex={0}
      style={hexValue && !color.startsWith('bg-') ? { backgroundColor: hexValue } : undefined}
    >
      {textOverlay && (
        <span className={`text-sm font-semibold ${textColor}`}>
          {textOverlay}
        </span>
      )}
      {!textOverlay && (
        <span className={`text-sm font-semibold ${textColor}`}>
          Aa
        </span>
      )}

      <div className={`absolute right-2 top-2 transition-opacity ${copied ? 'opacity-100' : 'opacity-0 group-hover:opacity-70'}`}>
        {copied ? (
          <Check className={`w-4 h-4 ${textColor}`} />
        ) : (
          <Copy className={`w-4 h-4 ${textColor}`} />
        )}
      </div>
    </div>
  );
};

export default ColorSwatch;
