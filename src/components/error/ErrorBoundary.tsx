
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from "@/components/ui/button";
import { RefreshCw, Flag } from "lucide-react";
import { GridContainer } from "@/components/layout/Grid";
import { useState, useEffect } from 'react';
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  handleReload = (): void => {
    window.location.reload();
  };

  render(): ReactNode {
    if (this.state.hasError) {
      return <ErrorDisplay error={this.state.error} onReload={this.handleReload} />;
    }

    return this.props.children;
  }
}

// Separate functional component for the error display to use React hooks
interface ErrorDisplayProps {
  error: Error | null;
  onReload: () => void;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ error, onReload }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    // Preload the image
    const img = new Image();
    img.src = "/lovable-uploads/853ba065-3c93-481e-b20a-2e18da19fc56.png";
    img.onload = () => setImageLoaded(true);
  }, []);
  
  const handleReportError = () => {
    // Capture error details
    const errorDetails = {
      message: error?.message || 'Unknown error',
      stack: error?.stack || 'No stack trace available',
      url: window.location.href,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent
    };
    
    // Log error details to console for debugging
    console.log("Reporting error:", errorDetails);
    
    // In a real implementation, you might send this to a server endpoint
    // For now, we'll just show a toast confirmation
    toast({
      title: "Erro reportado",
      description: "Obrigado por reportar este erro. Nossa equipe irá investigar.",
      duration: 5000,
    });
  };
  
  return (
    <GridContainer className="py-20">
      <div className="flex flex-col md:flex-row justify-start items-center gap-12">
        <div className="w-full md:w-1/2 relative">
          {!imageLoaded && (
            <Skeleton className="w-full h-[300px] md:h-[400px] rounded-lg" />
          )}
          <img 
            className={`w-full max-w-[500px] h-auto mx-auto ${!imageLoaded ? 'hidden' : ''}`} 
            src="/lovable-uploads/853ba065-3c93-481e-b20a-2e18da19fc56.png" 
            alt="Error"
            onLoad={() => setImageLoaded(true)}
            onError={() => console.error("Failed to load error image")}
          />
        </div>
        
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-10">
          <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
            <div className="px-6 py-2.5 bg-gray-200 rounded-xl inline-flex justify-center items-center gap-6">
              <div className="justify-center text-amicciDark-600 text-xl font-medium font-['Roboto'] leading-loose tracking-tight">
                Erro
              </div>
            </div>
          </div>
          
          <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
            <div className="self-stretch text-text-primary text-4xl font-normal font-['Roboto'] leading-[56.02px]">
              Ocorreu um erro durante o carregamento
            </div>
            <div className="self-stretch text-text-secondary text-xl font-medium font-['Roboto'] leading-loose tracking-tight">
              {error?.message || "Algo deu errado durante o carregamento desta página."}
            </div>
          </div>
          
          <div className="self-stretch flex flex-col sm:flex-row gap-4">
            <Button 
              variant="outline-secondary" 
              size="lg" 
              className="gap-2"
              onClick={onReload}
            >
              Recarregar página
              <RefreshCw size={20} />
            </Button>
            
            <Button 
              variant="text-error" 
              size="lg" 
              className="gap-2"
              onClick={handleReportError}
            >
              Reportar erro
              <Flag size={20} />
            </Button>
          </div>
        </div>
      </div>
    </GridContainer>
  );
};

export default ErrorBoundary;
export { ErrorBoundary, ErrorDisplay };
