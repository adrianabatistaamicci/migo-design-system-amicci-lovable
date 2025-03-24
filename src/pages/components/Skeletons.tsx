
import React from 'react';
import Header from '@/components/library-components/Header';
import ComponentCard from '@/components/ComponentCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '@/components/ui/card';

const Skeletons = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Skeletons"
        description="Placeholders animados para indicar conteúdo em carregamento."
        type="components"
      />
      
      <div className="grid gap-8">
        <Tabs defaultValue="preview" className="w-full">
          <TabsList>
            <TabsTrigger value="preview">Exemplos</TabsTrigger>
            <TabsTrigger value="code">Código</TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="p-4 border rounded-md">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Carregamento de Card</h3>
                <Card className="p-4 border border-border">
                  <div className="flex items-center space-x-4">
                    <Skeleton className="h-12 w-12 rounded-full bg-gray-200" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[250px] bg-gray-200" />
                      <Skeleton className="h-4 w-[200px] bg-gray-200" />
                    </div>
                  </div>
                </Card>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Carregamento de Tabela</h3>
                <Card className="p-4 border border-border">
                  <div className="space-y-3">
                    <Skeleton className="h-8 w-full bg-gray-200" />
                    <Skeleton className="h-8 w-full bg-gray-200" />
                    <Skeleton className="h-8 w-full bg-gray-200" />
                    <Skeleton className="h-8 w-full bg-gray-200" />
                  </div>
                </Card>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Carregamento de Card com Imagem</h3>
                <Card className="p-4 border border-border">
                  <div className="flex flex-col space-y-3">
                    <Skeleton className="h-[200px] w-full rounded-xl bg-gray-200" />
                    <Skeleton className="h-4 w-[250px] bg-gray-200" />
                    <Skeleton className="h-4 w-[200px] bg-gray-200" />
                  </div>
                </Card>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="code">
            <ComponentCard
              title="Exemplo de uso"
              code={`
import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonDemo() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}
              `}
            >
              <div className="flex items-center space-x-4 p-4 border rounded-md">
                <Skeleton className="h-12 w-12 rounded-full bg-gray-200" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px] bg-gray-200" />
                  <Skeleton className="h-4 w-[200px] bg-gray-200" />
                </div>
              </div>
            </ComponentCard>
          </TabsContent>
        </Tabs>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Uso</h2>
          <Card className="p-4">
            <p>
              Use skeletons para mostrar um visual aproximado da interface enquanto o conteúdo real está sendo carregado. 
              Isso melhora a experiência do usuário ao fornecer uma indicação visual da estrutura que será exibida, 
              reduzindo a sensação de espera e evitando mudanças bruscas de layout.
            </p>
          </Card>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Implementação</h2>
          <ComponentCard
            title="Componente Skeleton"
            code={`
import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }
            `}
          >
            <div className="p-4 flex flex-col space-y-3 border rounded-md">
              <Skeleton className="h-8 w-full bg-gray-200" />
              <Skeleton className="h-8 w-3/4 bg-gray-200" />
              <Skeleton className="h-8 w-1/2 bg-gray-200" />
            </div>
          </ComponentCard>
        </div>
      </div>
    </div>
  );
};

export default Skeletons;
