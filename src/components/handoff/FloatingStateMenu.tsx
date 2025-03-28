
import React, { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { GripVertical, Copy, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export type VerificationState = 
  | 'phone-default'        // Phone input screen
  | 'phone-error'          // Phone input with error
  | 'verification-default' // Verification code screen
  | 'verification-error'   // Verification code with error
  | 'success'              // Success state
  | 'error-max-attempts';  // Max attempts reached

interface FloatingStateMenuProps {
  currentState: VerificationState;
  onChange: (state: VerificationState) => void;
}

const FloatingStateMenu: React.FC<FloatingStateMenuProps> = ({ 
  currentState, 
  onChange 
}) => {
  const { toast } = useToast();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [isCopied, setIsCopied] = useState(false);
  const [fileContent, setFileContent] = useState<string>('// Loading file content...');

  // Map states to repository paths
  const stateFilePaths: Record<VerificationState, string> = {
    'phone-default': 'src/pages/WhatsappVerification.tsx',
    'phone-error': 'src/pages/WhatsappVerification.tsx',
    'verification-default': 'src/pages/WhatsappVerification.tsx',
    'verification-error': 'src/pages/WhatsappVerification.tsx',
    'success': 'src/pages/WhatsappVerification.tsx',
    'error-max-attempts': 'src/pages/WhatsappVerification.tsx'
  };

  // Extract just the filename from the path
  const getFileName = (path: string) => {
    return path.split('/').pop() || path;
  };

  // Function to fetch file content (simplified for demo)
  const fetchFileContent = async () => {
    try {
      // For now, we'll use a placeholder since we can't actually fetch file content dynamically in a browser
      setFileContent(`import React from 'react';
import { useVerification } from '@/hooks/use-verification';

// WhatsappVerification component for ${currentState} state
export default function WhatsappVerification() {
  // Component implementation
  return (
    <div>
      {/* UI for ${currentState} */}
    </div>
  );
}
`);
    } catch (error) {
      console.error('Error fetching file content:', error);
      setFileContent('// Error loading file content.');
    }
  };

  // Update file content when state changes
  useEffect(() => {
    fetchFileContent();
  }, [currentState]);

  // Initial position setup and window resize handler
  useEffect(() => {
    const setInitialPosition = () => {
      // Position at bottom right with some padding
      setPosition({
        x: window.innerWidth - 324, // 300px width + 24px padding
        y: window.innerHeight - 450 // Approximate height with enough margin
      });
    };
    
    setInitialPosition();
    window.addEventListener('resize', setInitialPosition);
    
    return () => {
      window.removeEventListener('resize', setInitialPosition);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartPos({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      const newX = e.clientX - startPos.x;
      const newY = e.clientY - startPos.y;
      
      setPosition({
        x: Math.max(0, Math.min(window.innerWidth - 324, newX)), // Ensure menu stays within window width
        y: Math.max(0, Math.min(window.innerHeight - 450, newY)) // Ensure menu stays within window height
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleCopyPath = () => {
    navigator.clipboard.writeText(fileContent)
      .then(() => {
        setIsCopied(true);
        toast({
          title: "Código copiado!",
          description: `O código de ${getFileName(stateFilePaths[currentState])} foi copiado para a área de transferência.`
        });
        
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      })
      .catch((err) => {
        toast({
          variant: "destructive",
          title: "Erro ao copiar",
          description: "Não foi possível copiar o código para a área de transferência."
        });
      });
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div 
      className="fixed z-50 bg-white rounded-lg shadow-lg p-4 border border-gray-200 mb-6 mr-6"
      style={{ 
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: '300px',
        maxHeight: '80vh', // Limit height to prevent overflow
        boxShadow: isDragging ? '0 8px 16px rgba(0,0,0,0.2)' : '0 4px 8px rgba(0,0,0,0.1)'
      }}
    >
      <div 
        className="flex items-center gap-2 mb-2 cursor-move"
        onMouseDown={handleMouseDown}
      >
        <GripVertical className="h-5 w-5 text-gray-400" />
        <span className="text-sm font-medium text-gray-700">Estados da tela</span>
      </div>
      
      <div className="space-y-3">
        <Select value={currentState} onValueChange={(value) => onChange(value as VerificationState)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select state" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="phone-default">Phone Input (Default)</SelectItem>
            <SelectItem value="phone-error">Phone Input (Error)</SelectItem>
            <SelectItem value="verification-default">Verification Code (Default)</SelectItem>
            <SelectItem value="verification-error">Verification Code (Error)</SelectItem>
            <SelectItem value="success">Success (will redirect)</SelectItem>
            <SelectItem value="error-max-attempts">Max Attempts Error</SelectItem>
          </SelectContent>
        </Select>
        
        <div>
          <div className="bg-gray-900 rounded border border-gray-800 overflow-hidden mb-2">
            <div className="bg-gray-800 px-3 py-1.5 text-gray-300 text-xs font-mono flex justify-between items-center">
              <span>{getFileName(stateFilePaths[currentState])}</span>
              <button 
                onClick={handleCopyPath}
                className="hover:bg-gray-700 p-1 rounded"
                title="Copiar código"
              >
                {isCopied ? 
                  <Check className="h-3.5 w-3.5 text-green-500" /> : 
                  <Copy className="h-3.5 w-3.5 text-gray-400" />
                }
              </button>
            </div>
            <div className="max-h-64 overflow-y-auto">
              <pre className="text-gray-100 bg-gray-900 p-3 text-xs font-mono whitespace-pre-wrap">
                {fileContent}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingStateMenu;
