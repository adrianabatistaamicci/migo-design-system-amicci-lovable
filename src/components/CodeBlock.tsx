
import React, { useState } from 'react';
import { Copy, CheckCheck, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'jsx',
  title,
  className
}) => {
  const [copied, setCopied] = useState(false);
  const [showCode, setShowCode] = useState(false);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  
  return (
    <div className={cn("rounded-lg border border-gray-200 overflow-hidden mb-6", className)}>
      {title && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
          <span className="text-sm font-medium text-gray-700">{title}</span>
          <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-600">{language}</span>
        </div>
      )}
      
      <div className="flex justify-between items-center px-4 py-3 bg-gray-50">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => setShowCode(!showCode)} 
          className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1"
        >
          <ChevronRight 
            size={16} 
            className={cn("transition-transform", showCode ? "rotate-90" : "")} 
          />
          <span>Show code</span>
        </Button>
        
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={copyToClipboard} 
          className="text-sm text-gray-600 hover:text-gray-900"
        >
          {copied ? (
            <CheckCheck size={16} className="mr-1" />
          ) : (
            <Copy size={16} className="mr-1" />
          )}
          <span>{copied ? "Copied" : "Copy"}</span>
        </Button>
      </div>
      
      <div className={cn(
        "transition-all duration-300 overflow-hidden",
        showCode ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <pre className="p-4 overflow-x-auto font-mono text-sm text-gray-800 bg-white">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
