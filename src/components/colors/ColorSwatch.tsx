
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
    // Se a cor não inclui um valor hex, tentamos usar algumas heurísticas baseadas no nome
    const lightColors = ['white', 'light', '50', '100', '200', '300'];
    const isLightColorName = lightColors.some(lightColor => 
      color.toLowerCase().includes(lightColor)
    );
    
    // Para cores que têm um valor hex, usamos o cálculo de luminância para determinar o contraste
    if (hexValue) {
      try {
        const luminance = colorUtils.getLuminance(hexValue);
        return luminance > 0.5 ? 'text-gray-800' : 'text-white';
      } catch (e) {
        // Fallback para a heurística baseada no nome em caso de erro
        return isLightColorName ? 'text-gray-800' : 'text-white';
      }
    }
    
    // Se não temos um valor hex, usamos apenas a heurística baseada no nome
    return isLightColorName ? 'text-gray-800' : 'text-white';
  };

  const handleCopy = () => {
    const valueToCopy = copyValue || hexValue || color;
    navigator.clipboard.writeText(valueToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const textColor = getTextColor();

  // Determinar o estilo de fundo correto
  const getBackgroundStyle = () => {
    // Se a cor começa com 'bg-', estamos usando uma classe Tailwind
    if (color.startsWith('bg-')) {
      return color;
    }
    
    // Se a cor é um valor hexadecimal, usamos style inline
    if (hexValue && !color.startsWith('bg-')) {
      return `bg-[${hexValue}]`;
    }
    
    // Fallback para a classe original
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
