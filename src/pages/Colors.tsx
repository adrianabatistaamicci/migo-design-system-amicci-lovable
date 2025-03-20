
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OverviewTab from '@/components/colors/OverviewTab';
import PalettesTab from '@/components/colors/PalettesTab';
import BaseColorsTab from '@/components/colors/BaseColorsTab';
import UsageTab from '@/components/colors/UsageTab';
import AccessibilityTab from '@/components/colors/AccessibilityTab';

const Colors = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Sistema de Cores</h1>
        <p className="text-mui-text-secondary text-lg">
          Paleta de cores e tokens de design utilizados na aplicação.
        </p>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Visão geral</TabsTrigger>
          <TabsTrigger value="palettes">Palettes</TabsTrigger>
          <TabsTrigger value="baseColors">Base colors</TabsTrigger>
          <TabsTrigger value="usage">Uso</TabsTrigger>
          <TabsTrigger value="accessibility">Acessibilidade</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <OverviewTab />
        </TabsContent>
        
        <TabsContent value="palettes">
          <PalettesTab />
        </TabsContent>

        <TabsContent value="baseColors">
          <BaseColorsTab />
        </TabsContent>
        
        <TabsContent value="usage">
          <UsageTab />
        </TabsContent>
        
        <TabsContent value="accessibility">
          <AccessibilityTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Colors;
