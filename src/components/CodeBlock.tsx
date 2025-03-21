
import React, { useState } from 'react';
import { Copy, CheckCheck } from 'lucide-react';
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

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className={cn(
      "rounded-lg border border-mui-border overflow-hidden bg-mui-sidebar mb-4",
      className
    )}>
      {title && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-mui-border">
          <span className="text-sm font-medium text-mui-text-secondary">{title}</span>
          <span className="text-xs px-2 py-0.5 rounded bg-mui-border text-mui-text-secondary">{language}</span>
        </div>
      )}
      
      <div className="relative">
        <pre className="p-4 overflow-x-auto font-mono text-sm text-mui-text-primary">
          <code>{code}</code>
        </pre>
        
        <div className="absolute top-2 right-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={copyToClipboard}
            className="h-8 px-2 text-mui-text-secondary hover:text-mui-text-primary hover:bg-white/10 rounded"
          >
            {copied ? <CheckCheck size={16} /> : <Copy size={16} />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;
