
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ComponentCard from '@/components/ComponentCard';
import Header from '@/components/library-components/Header';
import CodeBlock from '@/components/CodeBlock';

const Accordions = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Accordions"
        description="Painéis expansíveis para organizar conteúdo em seções."
        type="components"
      />
      
      <div className="space-y-8 mt-8">
        <ComponentCard
          title="Accordion Básico"
          description="Accordions são usados para organizar conteúdo em seções expansíveis."
          code={`<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Seção 1</AccordionTrigger>
    <AccordionContent>
      Conteúdo da primeira seção que pode ser expandido ou recolhido.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Seção 2</AccordionTrigger>
    <AccordionContent>
      Conteúdo da segunda seção que pode ser expandido ou recolhido.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Seção 3</AccordionTrigger>
    <AccordionContent>
      Conteúdo da terceira seção que pode ser expandido ou recolhido.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
        >
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Seção 1</AccordionTrigger>
              <AccordionContent>
                Conteúdo da primeira seção que pode ser expandido ou recolhido.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Seção 2</AccordionTrigger>
              <AccordionContent>
                Conteúdo da segunda seção que pode ser expandido ou recolhido.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Seção 3</AccordionTrigger>
              <AccordionContent>
                Conteúdo da terceira seção que pode ser expandido ou recolhido.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ComponentCard>
        
        <CodeBlock
          title="Código"
          code={`import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Seção 1</AccordionTrigger>
    <AccordionContent>
      Conteúdo da primeira seção que pode ser expandido ou recolhido.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
          language="tsx"
        />
      </div>
    </div>
  );
};

export default Accordions;
