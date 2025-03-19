
import React, { useState } from 'react';
import { Copy, CheckCheck, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ComponentCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  code?: string;
  className?: string;
}

const ComponentCard: React.FC<ComponentCardProps> = ({
  title,
  description,
  children,
  code,
  className
}) => {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    if (!code) return;
    
    navigator.clipboard.writeText(code);
    setCopied(true);
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className={cn(
      "rounded-lg border border-mui-border bg-white overflow-hidden transition-all duration-250 animate-fade-in",
      className
    )}>
      <div className="p-5 border-b border-mui-border">
        <h3 className="text-lg font-medium text-mui-text-primary mb-1">{title}</h3>
        {description && (
          <p className="text-mui-text-secondary text-sm">{description}</p>
        )}
      </div>
      
      <div className="p-6 flex items-center justify-center">
        <div className="w-full">
          {children}
        </div>
      </div>
      
      {code && (
        <>
          <div className="border-t border-mui-border px-4 py-2 flex justify-between items-center bg-mui-sidebar">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowCode(!showCode)}
              className="text-sm text-mui-text-secondary hover:text-mui-text-primary flex items-center gap-1"
            >
              <Code size={16} />
              <span>{showCode ? 'Hide code' : 'Show code'}</span>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={copyToClipboard}
              className="text-sm text-mui-text-secondary hover:text-mui-text-primary"
              disabled={copied}
            >
              {copied ? (
                <span className="flex items-center gap-1">
                  <CheckCheck size={16} />
                  Copied
                </span>
              ) : (
                <span className="flex items-center gap-1">
                  <Copy size={16} />
                  Copy
                </span>
              )}
            </Button>
          </div>
          
          {showCode && (
            <div className="border-t border-mui-border p-4 bg-mui-sidebar overflow-x-auto">
              <pre className="font-mono text-sm text-mui-text-primary whitespace-pre">
                <code>{code}</code>
              </pre>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ComponentCard;
