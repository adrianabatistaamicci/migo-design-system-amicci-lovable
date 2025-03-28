
import React, { useState } from 'react';
import { Check, Copy, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  defaultOpen?: boolean;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ 
  code, 
  language = 'jsx', 
  title = 'Code',
  defaultOpen = false
}) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="rounded-md overflow-hidden border border-gray-200 mb-4 bg-gray-50">
      <div 
        className="flex justify-between items-center px-4 py-2 bg-gray-100 border-b border-gray-200 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-2">
          <div className="text-xs font-mono px-2 py-1 rounded bg-gray-200 text-gray-700">
            {language}
          </div>
          <span className="text-sm font-medium text-gray-700">{title}</span>
        </div>
        <div className="flex items-center space-x-2">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handleCopy();
            }} 
            className="p-1 rounded hover:bg-gray-200"
          >
            {isCopied ? <Check size={16} className="text-green-500" /> : <Copy size={16} className="text-gray-500" />}
          </button>
          {isOpen ? <ChevronUp size={16} className="text-gray-500" /> : <ChevronDown size={16} className="text-gray-500" />}
        </div>
      </div>
      <div className={cn("transition-all duration-200 ease-in-out", 
        isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden")}>
        <pre className="p-4 overflow-x-auto bg-gray-800 text-gray-100">
          <code className={`language-${language}`}>
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
