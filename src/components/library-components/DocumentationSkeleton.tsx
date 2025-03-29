/**
 * @protected
 * ATENÇÃO: Este arquivo contém conteúdo finalizado e aprovado.
 * Não deve ser alterado diretamente pelo assistente AI.
 * Apenas atualizações de componentes devem ser refletidas.
 */

import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Card } from '@/components/ui/card';

const DocumentationSkeleton = () => {
  return (
    <div className="w-full space-y-8 animate-pulse">
      {/* Header skeleton */}
      <div className="space-y-2 mb-8">
        <Skeleton className="h-10 w-3/4 max-w-md bg-gray-200" />
        <Skeleton className="h-4 w-full max-w-2xl bg-gray-200" />
      </div>
      
      {/* Content skeletons */}
      <Card className="border border-border p-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <Skeleton className="h-6 w-1/3 bg-gray-200" />
            <Skeleton className="h-4 w-full bg-gray-200" />
            <Skeleton className="h-4 w-5/6 bg-gray-200" />
          </div>
          
          <div className="space-y-3">
            <Skeleton className="h-[120px] w-full rounded-lg bg-gray-200" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Skeleton className="h-[80px] w-full rounded-md bg-gray-200" />
              <Skeleton className="h-[80px] w-full rounded-md bg-gray-200" />
              <Skeleton className="h-[80px] w-full rounded-md bg-gray-200" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Skeleton className="h-6 w-1/4 bg-gray-200" />
            <Skeleton className="h-4 w-full bg-gray-200" />
            <Skeleton className="h-4 w-4/5 bg-gray-200" />
          </div>
        </div>
      </Card>
      
      {/* Code example skeleton */}
      <Card className="border border-border">
        <div className="p-4 border-b">
          <Skeleton className="h-6 w-1/3 bg-gray-200" />
        </div>
        <div className="p-6">
          <Skeleton className="h-[200px] w-full bg-gray-200 rounded-md" />
        </div>
        <div className="bg-gray-50 border-t p-2 flex justify-between">
          <Skeleton className="h-8 w-24 bg-gray-200" />
          <Skeleton className="h-8 w-20 bg-gray-200" />
        </div>
      </Card>
    </div>
  );
};

export default DocumentationSkeleton;
