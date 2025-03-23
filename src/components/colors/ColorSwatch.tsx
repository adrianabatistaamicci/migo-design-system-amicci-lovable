
import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { colorUtils, colorBlindnessFilters } from '@/utils/colorUtils';

interface ColorSwatchProps {
  color: string;
  className?: string;
  onClick?: () => void;
  textOverlay?: string;
  weight?: string;
  hexValue?: string;
  copyValue?: string;
  simulationType?: string;
}

export const ColorSwatch = ({
  color,
  className = "",
  onClick,
  textOverlay,
  weight,
  hexValue,
  copyValue,
  simulationType = ""
}: ColorSwatchProps) => {
  const [copied, setCopied] = useState(false);
  
  const getTextColor = () => {
    if (hexValue) {
      try {
        const luminance = colorUtils.getLuminance(hexValue);
        return luminance > 0.5 ? 'text-gray-800' : 'text-white';
      } catch (e) {
        return getLightDarkFromName();
      }
    }
    return getLightDarkFromName();
  };
  
  const getLightDarkFromName = () => {
    const lightColors = ['white', 'light', '50', '100', '200', '300'];
    const isLightColorName = lightColors.some(lightColor => color.toLowerCase().includes(lightColor));
    return isLightColorName ? 'text-gray-800' : 'text-white';
  };
  
  const handleCopy = () => {
    const valueToCopy = copyValue || hexValue || color;
    navigator.clipboard.writeText(valueToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const textColor = getTextColor();
  
  const getBackgroundStyle = () => {
    if (color.startsWith('bg-')) {
      return color;
    }
    if (hexValue && !color.startsWith('bg-')) {
      return `bg-[${hexValue}]`;
    }
    return color;
  };
  
  return (
    <div 
      className={`relative w-full rounded-md ${getBackgroundStyle()} ${className} flex items-center justify-center px-3 transition-all hover:shadow-md cursor-pointer group`} 
      onClick={onClick || handleCopy} 
      role="button" 
      tabIndex={0} 
      style={{
        ...(hexValue && !color.startsWith('bg-') ? {
          backgroundColor: hexValue
        } : {}),
        ...(simulationType && colorBlindnessFilters[simulationType] ? {
          filter: colorBlindnessFilters[simulationType]
        } : {})
      }}
    >
      {textOverlay}
      {weight && <span className={`text-xs ${textColor} opacity-75 absolute left-2 top-1`}>{weight}</span>}
      
      <div className={`absolute right-2 top-2 transition-opacity ${copied ? 'opacity-100' : 'opacity-0 group-hover:opacity-70'}`}>
        {copied ? <Check className={`w-4 h-4 ${textColor}`} /> : <Copy className={`w-4 h-4 ${textColor}`} />}
      </div>
    </div>
  );
};

export default ColorSwatch;
