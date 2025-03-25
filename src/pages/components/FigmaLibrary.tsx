
import React, { useState } from 'react';
import Header from '@/components/library-components/Header';
import { Button } from '@/components/ui/button';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Download, FileJson, FileUp, FileCode, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const FigmaLibrary = () => {
  const [exportStatus, setExportStatus] = useState<'idle' | 'exporting' | 'success' | 'error'>('idle');
  
  const handleExportToFigma = () => {
    setExportStatus('exporting');
    
    // Simular exportação
    setTimeout(() => {
      setExportStatus('success');
      
      // Reset após 3 segundos
      setTimeout(() => {
        setExportStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <div className="w-full animate-fade-in space-y-8">
      <Header 
        title="Figma Library"
        description="Exportação e integração com Figma do Design System da Amicci"
        type="components"
      />
      
      <Alert className="bg-blue-50 border-blue-200">
        <FileJson className="h-5 w-5 text-blue-500" />
        <AlertTitle className="text-blue-700">Recursos de Design System</AlertTitle>
        <AlertDescription className="text-blue-600">
          Esta página fornece recursos para integração com o Figma e exportação de componentes do Design System.
        </AlertDescription>
      </Alert>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Exportar para Figma</CardTitle>
            <CardDescription>Gere um arquivo JSON que pode ser importado no Figma via plugin</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <AspectRatio ratio={16 / 9} className="bg-gray-100 rounded-md overflow-hidden">
                <img 
                  src={`/lovable-uploads/403357f8-b16f-47d4-9969-c61a7c531d7c.png`} 
                  alt="Figma Import Preview" 
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder.svg';
                  }}
                />
              </AspectRatio>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Para importar seu Design System no Figma, você precisa exportar os componentes como um arquivo JSON e usar
              um plugin do Figma como "Design System Importer" ou "Tokens Studio".
            </p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button 
              variant="outline-secondary" 
              onClick={handleExportToFigma}
              disabled={exportStatus === 'exporting' || exportStatus === 'success'}
              className="flex items-center gap-2"
            >
              {exportStatus === 'exporting' ? (
                <>
                  <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full"></div>
                  Exportando...
                </>
              ) : exportStatus === 'success' ? (
                <>
                  <CheckCircle className="h-4 w-4" />
                  Exportado!
                </>
              ) : (
                <>
                  <Download className="h-4 w-4" />
                  Exportar tokens JSON
                </>
              )}
            </Button>
            <Button 
              variant="outline-secondary"
              className="flex items-center gap-2"
            >
              <FileCode className="h-4 w-4" />
              Documentação
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Importar no Figma</CardTitle>
            <CardDescription>Passos para importar os componentes no Figma</CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-3 text-sm text-gray-700">
              <li>Instale o plugin "Tokens Studio for Figma" no Figma</li>
              <li>Abra seu projeto Figma e acesse o plugin</li>
              <li>Use a opção "Import" do plugin e selecione o arquivo JSON exportado</li>
              <li>Configure o mapeamento de tokens conforme a documentação do plugin</li>
              <li>Aplique os tokens aos seus elementos de design</li>
            </ol>
          </CardContent>
          <CardFooter>
            <Button 
              variant="outline-secondary"
              className="flex items-center gap-2 w-full"
              onClick={() => window.open('https://tokens.studio/', '_blank')}
            >
              <FileUp className="h-4 w-4" />
              Acessar Tokens Studio
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      <div className="bg-background-subtle rounded-lg p-6">
        <h2 className="text-xl font-medium mb-4">Recursos adicionais</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Biblioteca de componentes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Acesse a biblioteca de componentes do Figma pré-construída para o Design System da Amicci
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="text-secondary" className="text-sm" size="sm">Acessar biblioteca</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Plugin personalizado</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Plugin especializado para integração entre o código e o Figma
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="text-secondary" className="text-sm" size="sm">Em breve</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Tutoriais</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Vídeos e guias sobre como integrar seu Design System ao Figma
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="text-secondary" className="text-sm" size="sm">Ver tutoriais</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FigmaLibrary;
