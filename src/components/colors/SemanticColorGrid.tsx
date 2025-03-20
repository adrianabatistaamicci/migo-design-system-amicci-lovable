
import React from 'react';
import { cn } from '@/lib/utils';
import { ClipboardCopy } from 'lucide-react';

interface SemanticColorProps {
  name: string;
  description: string;
  colorClass: string;
  hexValue: string;
  darkText?: boolean;
}

const SemanticColor = ({ name, description, colorClass, hexValue, darkText }: SemanticColorProps) => {
  const [copied, setCopied] = React.useState(false);
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
      <div 
        className={cn(
          "group h-20 flex items-end p-4",
          `bg-${colorClass}`
        )}
      >
        <button
          onClick={() => copyToClipboard(hexValue)}
          className={cn(
            "ml-auto opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded-full",
            darkText ? "text-gray-900 hover:bg-black/5" : "text-white hover:bg-white/20"
          )}
          title={copied ? "Copied!" : "Copy hex value"}
        >
          <ClipboardCopy size={16} />
        </button>
      </div>
      <div className="p-4">
        <div className="font-medium">{name}</div>
        <div className="text-sm text-mui-text-secondary">{description}</div>
        <div className="mt-1 text-xs font-mono text-mui-text-secondary">{hexValue}</div>
      </div>
    </div>
  );
};

interface SemanticColorGridProps {
  colors: SemanticColorProps[];
}

const SemanticColorGrid = ({ colors }: SemanticColorGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {colors.map((color) => (
        <SemanticColor
          key={color.name}
          name={color.name}
          description={color.description}
          colorClass={color.colorClass}
          hexValue={color.hexValue}
          darkText={color.darkText}
        />
      ))}
    </div>
  );
};

export default SemanticColorGrid;
