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
  return <div className={cn("rounded-lg border border-gray-200 bg-white overflow-hidden transition-all duration-250 animate-fade-in shadow-sm w-full flex flex-col", className)}>
      
      
      <div className="p-5 flex items-center justify-center flex-grow">
        <div className="w-full">
          {children}
        </div>
      </div>
      
      {code && <>
          <div className="border-t border-gray-200 px-4 py-2 flex justify-between items-center bg-gray-50 mt-auto">
            <Button variant="text-default" size="sm" onClick={() => setShowCode(!showCode)} className="text-sm text-gray-600 hover:text-primary-main flex items-center gap-1">
              <Code size={16} />
              <span>{showCode ? 'Hide code' : 'Show code'}</span>
            </Button>
            
            <Button variant="text-default" size="sm" onClick={copyToClipboard} className="text-sm text-gray-600 hover:text-primary-main" disabled={copied}>
              {copied ? <span className="flex items-center gap-1">
                  <CheckCheck size={16} className="text-success-main" />
                  Copied
                </span> : <span className="flex items-center gap-1">
                  <Copy size={16} />
                  Copy
                </span>}
            </Button>
          </div>
          
          {showCode && <div className="border-t border-gray-200 p-4 bg-gray-50 overflow-x-auto">
              <pre className="font-mono text-sm text-gray-800 whitespace-pre">
                <code>{code}</code>
              </pre>
            </div>}
        </>}
    </div>;
};
export default ComponentCard;