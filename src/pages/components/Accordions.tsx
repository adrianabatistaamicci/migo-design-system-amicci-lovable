
import React from 'react';
import EmptyState from '@/components/library-components/EmptyState';
import Header from '@/components/library-components/Header';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from '@/components/ui/accordion';
import CodeBlock from '@/components/CodeBlock';

const basicAccordionCode = `import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Detalhes do plano</AccordionTrigger>
        <AccordionContent>
          Acesso completo a todos os recursos e atualizações.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Pagamento</AccordionTrigger>
        <AccordionContent>
          Aceita todas as principais formas de pagamento.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Informações adicionais</AccordionTrigger>
        <AccordionContent>
          Suporte técnico disponível 24/7.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`;

const Accordions = () => {
  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Accordions"
        description="Painéis expansíveis para organizar conteúdo em seções."
        type="components"
      />
      
      <div className="max-w-[1280px] mx-auto">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-6">Accordion básico</h2>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Detalhes do plano</AccordionTrigger>
                <AccordionContent>
                  Acesso completo a todos os recursos e atualizações.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Pagamento</AccordionTrigger>
                <AccordionContent>
                  Aceita todas as principais formas de pagamento.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Informações adicionais</AccordionTrigger>
                <AccordionContent>
                  Suporte técnico disponível 24/7.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          <CodeBlock
            code={basicAccordionCode}
            language="tsx"
            title="Exemplo de importação"
          />
        </section>
      </div>
    </div>
  );
};

export default Accordions;
