
import React, { useState } from 'react';
import { Copy, CheckCheck, Maximize2, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  className?: string;
  showCopy?: boolean;
  showFullscreen?: boolean;
  onFullscreen?: () => void;
  showCode?: boolean;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'jsx',
  title,
  className,
  showCopy = true,
  showFullscreen = false,
  onFullscreen,
  showCode = false
}) => {
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(showCode);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className={cn("relative rounded-md overflow-hidden border border-gray-200", className)}>
      <div className="flex items-center justify-between bg-gray-50 px-4 py-2 border-b border-gray-200">
        <div className="flex items-center">
          {title && (
            <span className="text-sm font-medium text-gray-600">{title}</span>
          )}
        </div>
        <div className="flex space-x-2">
          {showCopy && (
            <Button
              variant="ghost"
              size="sm"
              className="h-8 px-2 text-gray-500"
              onClick={copyToClipboard}
            >
              {copied ? (
                <CheckCheck className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              <span className="ml-2 text-xs">{copied ? 'Copied' : 'Copy'}</span>
            </Button>
          )}
          {showFullscreen && onFullscreen && (
            <Button
              variant="ghost"
              size="sm"
              className="h-8 px-2 text-gray-500"
              onClick={onFullscreen}
            >
              <Maximize2 className="h-4 w-4" />
              <span className="ml-2 text-xs">Fullscreen</span>
            </Button>
          )}
        </div>
      </div>
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="bg-gray-50"
      >
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="flex w-full items-center justify-between px-4 py-2 text-xs text-gray-500 hover:bg-gray-100"
          >
            <span>{isOpen ? 'Hide code' : 'Show code'}</span>
            <ChevronRight
              className={`h-4 w-4 transition-transform ${
                isOpen ? 'rotate-90' : ''
              }`}
            />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <pre className="overflow-x-auto bg-gray-900 p-4 text-sm text-gray-50">
            <code className={`language-${language}`}>{code}</code>
          </pre>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default CodeBlock;
