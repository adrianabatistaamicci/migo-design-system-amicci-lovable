
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Flag } from "lucide-react";
import { Link } from "@/components/ui/link";
import { GridContainer } from "@/components/layout/Grid";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";

const NotFound = () => {
  const location = useLocation();
  const [imageLoaded, setImageLoaded] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    
    // Preload the image
    const img = new Image();
    img.src = "/lovable-uploads/d23ff9a4-d021-4e25-ae93-bd30bec32fe4.png";
    img.onload = () => setImageLoaded(true);
  }, [location.pathname]);
  
  const handleReportError = () => {
    // Capture error details
    const errorDetails = {
      type: "404 Not Found",
      path: location.pathname,
      url: window.location.href,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent
    };
    
    // Log error details to console for debugging
    console.log("Reporting 404 error:", errorDetails);
    
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
            <Skeleton className="w-full h-[400px] md:h-[500px] rounded-lg" />
          )}
          <img 
            className={`w-full max-w-[500px] h-auto mx-auto ${!imageLoaded ? 'hidden' : ''}`} 
            src="/lovable-uploads/d23ff9a4-d021-4e25-ae93-bd30bec32fe4.png" 
            alt="Erro 404" 
            onLoad={() => setImageLoaded(true)}
            onError={() => console.error("Failed to load 404 image")}
          />
        </div>
        
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-10">
          <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
            <div className="px-6 py-2.5 bg-gray-200 rounded-xl inline-flex justify-center items-center gap-6">
              <div className="justify-center text-amicciDark-600 text-xl font-medium font-['Roboto'] leading-loose tracking-tight">
                Erro 404
              </div>
            </div>
          </div>
          
          <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
            <div className="self-stretch text-text-primary text-4xl font-normal font-['Roboto'] leading-[56.02px]">
              Página não encontrada
            </div>
            <div className="self-stretch text-text-secondary text-xl font-medium font-['Roboto'] leading-loose tracking-tight">
              Desculpe, a página que você procura não existe ou foi movida para outro endereço.
            </div>
          </div>
          
          <div className="self-stretch flex flex-col sm:flex-row gap-4">
            <Link href="/">
              <Button variant="outline-secondary" size="lg" className="gap-2">
                Ir para Dashboard
                <ArrowRight size={20} />
              </Button>
            </Link>
            
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

export default NotFound;
