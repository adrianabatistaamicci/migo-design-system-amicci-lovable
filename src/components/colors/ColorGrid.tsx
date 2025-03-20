
import React from 'react';
import { cn } from '@/lib/utils';
import { ClipboardCopy } from 'lucide-react';

interface ColorShadeProps {
  name: string;
  shade: string;
  colorClass: string;
  hexValue: string;
  isMain?: boolean;
}

const ColorShade = ({ name, shade, colorClass, hexValue, isMain }: ColorShadeProps) => {
  const [copied, setCopied] = React.useState(false);
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  
  // Determine text color based on background brightness
  const isDark = /^(blue|amicci-[7-9]|amicciDark-[5-9]|magenta-[5-9]|green-[7-9]|gray-[7-9]|red-[5-9]|tertiary-main|secondary-main|error-main|success-main|info-main)/.test(colorClass);
  
  return (
    <div 
      className={cn(
        "group flex justify-between items-center p-4 transition-all",
        isMain ? "h-16" : "h-12",
        `bg-${colorClass}`
      )}
    >
      <div className={isDark ? "text-white" : "text-gray-900"}>
        <div className={cn("font-medium", isMain && "text-lg")}>
          {shade}
        </div>
        <div className={cn("text-xs opacity-80", isMain && "text-sm")}>
          {hexValue}
        </div>
      </div>
      <button
        onClick={() => copyToClipboard(hexValue)}
        className={cn(
          "opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded-full",
          isDark ? "text-white hover:bg-white/20" : "text-gray-900 hover:bg-black/5"
        )}
        title={copied ? "Copied!" : "Copy hex value"}
      >
        <ClipboardCopy size={16} />
      </button>
    </div>
  );
};

interface ColorGroupProps {
  name: string;
  description?: string;
  shades: {
    shade: string;
    colorClass: string;
    hexValue: string;
  }[];
}

const ColorGroup = ({ name, description, shades }: ColorGroupProps) => {
  return (
    <div className="mb-10">
      <div className="mb-2">
        <h3 className="text-lg font-semibold">{name}</h3>
        {description && <p className="text-mui-text-secondary text-sm">{description}</p>}
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
        {shades.map((shade, index) => (
          <ColorShade
            key={`${name}-${shade.shade}`}
            name={name}
            shade={shade.shade}
            colorClass={shade.colorClass}
            hexValue={shade.hexValue}
            isMain={index === 5} // Usually 500 is the main color
          />
        ))}
      </div>
    </div>
  );
};

interface ColorGridProps {
  colorGroups: ColorGroupProps[];
}

const ColorGrid = ({ colorGroups }: ColorGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {colorGroups.map((group) => (
        <ColorGroup
          key={group.name}
          name={group.name}
          description={group.description}
          shades={group.shades}
        />
      ))}
    </div>
  );
};

export default ColorGrid;
