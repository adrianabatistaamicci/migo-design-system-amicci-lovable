
import React from 'react';
import Header from '@/components/library-components/Header';
import ComponentCard from '@/components/ComponentCard';
import ComponentPreview from '@/components/ComponentPreview';
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Calendars = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Calendars"
        description="Componentes de calendário para seleção de datas e períodos."
        type="components"
      />
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ComponentPreview 
          title="Calendário Básico" 
          variantCount={1}
          preview={
            <div className="scale-[0.85] origin-center">
              <Calendar mode="single" className="rounded-md border" />
            </div>
          }
        />

        <ComponentPreview 
          title="Calendário com Data Selecionada" 
          variantCount={1}
          preview={
            <div className="scale-[0.85] origin-center">
              <Calendar 
                mode="single" 
                className="rounded-md border" 
                selected={new Date(2024, 3, 15)}
              />
            </div>
          }
        />

        <ComponentPreview 
          title="Calendário com Intervalo" 
          variantCount={1}
          preview={
            <div className="scale-[0.85] origin-center">
              <Calendar 
                mode="range"
                className="rounded-md border" 
                selected={{
                  from: new Date(2024, 3, 5),
                  to: new Date(2024, 3, 12)
                }}
              />
            </div>
          }
        />
      </div>

      <div className="mt-8">
        <ComponentCard 
          title="Exemplo de uso" 
          description="Diferentes formas de utilizar o componente de calendário" 
          className="mt-8"
          code={`<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  className="rounded-md border"
/>`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
            <Card className="p-4">
              <h3 className="text-lg font-medium mb-4">Seleção de Data Única</h3>
              <Calendar 
                mode="single" 
                className="mx-auto" 
                selected={new Date(2024, 3, 10)}
              />
              <div className="mt-4 flex justify-end gap-2">
                <Button variant="outline">Cancelar</Button>
                <Button>Confirmar Data</Button>
              </div>
            </Card>

            <Card className="p-4">
              <h3 className="text-lg font-medium mb-4">Seleção de Período</h3>
              <Calendar 
                mode="range"
                className="mx-auto" 
                selected={{
                  from: new Date(2024, 3, 5),
                  to: new Date(2024, 3, 12)
                }}
              />
              <div className="mt-4">
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <div>Check-in: 05/04/2024</div>
                  <div>Check-out: 12/04/2024</div>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between items-center mt-4">
                  <div className="text-sm text-muted-foreground">7 noites</div>
                  <Button>Confirmar Reserva</Button>
                </div>
              </div>
            </Card>
          </div>
        </ComponentCard>
      </div>
    </div>
  );
};

export default Calendars;
