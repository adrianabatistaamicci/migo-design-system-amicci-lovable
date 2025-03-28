
import React from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import Header from '@/components/library-components/Header';
import CodeBlock from '@/components/CodeBlock';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Accordions = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Accordions"
        description="Painéis expansíveis para organizar conteúdo em seções."
        type="components"
      />
      
      <div className="mt-6 space-y-8">
        <div className="w-full p-6 bg-white rounded-lg border border-gray-200">
          <h2 className="text-xl font-medium mb-4">Exemplo Básico</h2>
          
          <div className="mb-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>O que é o Design System?</AccordionTrigger>
                <AccordionContent>
                  Um design system é uma coleção de componentes reutilizáveis, guiados por padrões claros, que podem ser montados para construir aplicações.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>Como usar o Accordion?</AccordionTrigger>
                <AccordionContent>
                  O componente Accordion é útil para organizar conteúdo em seções expansíveis, economizando espaço na interface e melhorando a experiência do usuário.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>Quais são as boas práticas?</AccordionTrigger>
                <AccordionContent>
                  Use Accordions quando houver muitas informações para mostrar em um espaço limitado. Não aninhe muitos níveis de acordeões, pois isso pode confundir os usuários.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          <div className="w-full">
            <CodeBlock 
              code={`<Accordion type="single" collapsible className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>O que é o Design System?</AccordionTrigger>
    <AccordionContent>
      Um design system é uma coleção de componentes reutilizáveis, guiados por padrões claros,
      que podem ser montados para construir aplicações.
    </AccordionContent>
  </AccordionItem>
  
  <AccordionItem value="item-2">
    <AccordionTrigger>Como usar o Accordion?</AccordionTrigger>
    <AccordionContent>
      O componente Accordion é útil para organizar conteúdo em seções expansíveis,
      economizando espaço na interface e melhorando a experiência do usuário.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
              language="tsx"
              title="Exemplo de implementação"
              showCode={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordions;
