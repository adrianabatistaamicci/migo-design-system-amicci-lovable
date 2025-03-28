
import React, { useState } from 'react';
import { Check, Copy, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  defaultOpen?: boolean;
  variant?: 'default' | 'terminal';
}

const CodeBlock: React.FC<CodeBlockProps> = ({ 
  code, 
  language = 'jsx', 
  title = 'Code',
  defaultOpen = false,
  variant = 'default'
}) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const isTerminal = variant === 'terminal';

  return (
    <div className={cn(
      "rounded-md overflow-hidden border border-gray-200 mb-4",
      isTerminal ? "bg-[#1e2530]" : "bg-gray-50"
    )}>
      <div 
        className={cn(
          "flex justify-between items-center px-4 py-2 border-b cursor-pointer",
          isTerminal 
            ? "bg-[#f5f5f5] border-gray-300" 
            : "bg-gray-100 border-gray-200"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-2">
          {isTerminal && (
            <div className="flex space-x-1.5 mr-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
              <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
            </div>
          )}
          <div className={cn(
            "text-xs font-mono px-2 py-1 rounded",
            isTerminal ? "bg-[#e4e4e4] text-[#1e2530]" : "bg-gray-200 text-gray-700"
          )}>
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
        <pre className={cn(
          "p-4 overflow-x-auto text-gray-100",
          isTerminal ? "bg-[#1e2530]" : "bg-gray-800"
        )}>
          <code className={`language-${language}`}>
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
