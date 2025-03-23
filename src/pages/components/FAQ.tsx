
import React from 'react';
import Header from '@/components/library-components/Header';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import AmySvg from '@/pages/assets/amy.svg';

const FAQ = () => {
  const insights = [
    {
      id: "insight-1",
      title: "Comportamento dos clientes",
      badge: "Novo insight",
      content: "Analisando os últimos 3 meses de dados, notei que 68% dos clientes que visitam a página principal convertem após visualizarem a seção de depoimentos. Considere destacar mais esta seção ou adicionar mais depoimentos."
    },
    {
      id: "insight-2",
      title: "Análise de vendas",
      badge: "Tendência detectada",
      content: "Houve um aumento de 23% nas vendas do produto X após a implementação da nova campanha de marketing. O tempo médio entre a primeira visita e a compra diminuiu de 7 para 4 dias."
    },
    {
      id: "insight-3",
      title: "Oportunidade de melhoria",
      badge: "Recomendação",
      content: "A análise de dados sugere que adicionar uma opção de pagamento parcelado pode aumentar a taxa de conversão em aproximadamente 15% para produtos acima de R$500,00."
    }
  ];

  return (
    <div className="w-full animate-fade-in">
      <Header 
        title="Insights da Amy"
        description="Análises e recomendações inteligentes com base nos seus dados."
        type="components"
      />
      
      <div className="mt-6 space-y-6">
        <Card className="p-6 border border-tertiary-outlinedBorder bg-gradient-to-r from-tertiary-light/50 to-white">
          <div className="flex items-center gap-3 mb-4">
            <Avatar>
              <AvatarImage src={AmySvg} alt="Amy" />
              <AvatarFallback>AM</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-medium">Amy - Assistente de Inteligência</h3>
                <Sparkles size={16} className="text-tertiary-main" />
              </div>
              <p className="text-sm text-tertiary-main">Analisando seus dados para encontrar insights valiosos</p>
            </div>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {insights.map((insight) => (
              <AccordionItem 
                key={insight.id} 
                value={insight.id}
                className="border border-tertiary-200 rounded-lg mb-3 bg-tertiary-light/30 overflow-hidden"
              >
                <div className="px-6 py-4 border-b-0">
                  <div className="flex items-start gap-3">
                    <Avatar className="w-9 h-9 flex-shrink-0 border-2 border-tertiary-main">
                      <AvatarImage src={AmySvg} alt="Avatar da Amy" />
                      <AvatarFallback className="text-xs bg-tertiary-main text-white">AM</AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">Insight da Amy</span>
                        <Sparkles size={16} className="text-tertiary-main" />
                      </div>
                      <Badge variant="outline" className="bg-tertiary-light text-tertiary-dark border-tertiary-200 mb-1">
                        {insight.badge}
                      </Badge>
                      <AccordionTrigger className="hover:no-underline pt-2 pb-0 text-left font-medium">
                        {insight.title}
                      </AccordionTrigger>
                    </div>
                  </div>
                </div>
                
                <AccordionContent className="px-6 pb-4 pt-0 text-gray-700 ml-12">
                  {insight.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
        
        <div className="px-6 py-5 bg-tertiary-light/30 rounded border border-tertiary-200">
          <div className="flex items-start gap-3">
            <Avatar className="w-9 h-9 flex-shrink-0 border-2 border-tertiary-main">
              <AvatarImage src={AmySvg} alt="Avatar da Amy" />
              <AvatarFallback className="text-xs bg-tertiary-main text-white">AM</AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-medium">Como os insights da Amy funcionam?</span>
                <Sparkles size={16} className="text-tertiary-main" />
              </div>
              <p className="text-sm text-gray-600">
                A Amy processa os dados da sua plataforma usando algoritmos avançados de 
                machine learning para identificar padrões, tendências e oportunidades. 
                Ela é constantemente atualizada com novos dados para fornecer insights 
                cada vez mais precisos e relevantes para o seu negócio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
