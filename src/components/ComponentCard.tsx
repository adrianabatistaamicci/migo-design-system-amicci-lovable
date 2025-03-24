
import React, { useState } from 'react';
import { Copy, CheckCheck, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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
    <div className={cn("rounded-lg border border-gray-200 bg-white overflow-hidden transition-all duration-250 animate-fade-in shadow-sm w-full flex flex-col", className)}>
      {title && (
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          {description && <p className="mt-1 text-sm text-gray-500">{description}</p>}
        </div>
      )}
      
      <div className="p-6 flex items-center justify-center">
        <div className="w-full">
          {children}
        </div>
      </div>
      
      {code && (
        <div className="mt-auto">
          <div className="border-t border-gray-200 flex justify-between items-center px-4 py-3 bg-gray-50">
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
      )}
    </div>
  );
};

export default ComponentCard;
