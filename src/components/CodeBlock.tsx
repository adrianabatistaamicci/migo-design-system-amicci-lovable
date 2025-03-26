
import React, { useState } from 'react';
import { Copy, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  className?: string;
  showCopy?: boolean;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'tsx',
  title,
  className,
  showCopy = true
}) => {
  const [copied, setCopied] = useState(false);
  const [showCode, setShowCode] = useState(true);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className={cn("rounded-lg border border-gray-200 overflow-hidden", className)}>
      {title && (
        <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-3">
          <h3 className="text-sm font-medium text-gray-600">{title}</h3>
          {showCopy && (
            <Button
              variant="ghost"
              size="sm"
              className="h-8 px-2 text-gray-500 hover:bg-transparent"
              onClick={copyToClipboard}
            >
              <Copy className="h-4 w-4 mr-2" />
              <span className="text-xs">{copied ? 'Copiado' : 'Copiar'}</span>
            </Button>
          )}
        </div>
      )}
      
      <div className="bg-gray-900 text-gray-50">
        <pre className="p-4 overflow-x-auto">
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>
      
      <button 
        className="w-full flex items-center justify-between px-4 py-2 text-xs text-gray-500 bg-gray-50 border-t border-gray-200 hover:bg-gray-100"
        onClick={() => setShowCode(!showCode)}
      >
        <span>{showCode ? 'Ocultar código' : 'Mostrar código'}</span>
        {showCode ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </button>
    </div>
  );
};

export default CodeBlock;
