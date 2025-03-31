
import * as React from "react";
import { ChevronDown, HelpCircle, ExternalLink } from "lucide-react";
import { 
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent 
} from "@/components/ui/accordion";
import { Link } from "@/components/ui/link";

export interface ContextualHelpAccordionProps {
  title: string;
  content: React.ReactNode;
  actionLabel?: string;
  actionUrl?: string;
}

export const ContextualHelpAccordion = ({
  title,
  content,
  actionLabel = "Ver mais na FAQ",
  actionUrl = "#",
}: ContextualHelpAccordionProps) => {
  return (
    <div className="bg-blue-50 rounded-lg border-l-4 border-info-main w-full">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger className="py-4 px-6 hover:no-underline text-left">
            <div className="flex items-center gap-4 w-full">
              <div className="flex justify-start items-start">
                <HelpCircle className="w-6 h-6 text-info-dark" />
              </div>
              <span className="flex-1 text-left text-info-dark text-base font-medium font-['Roboto'] leading-7 tracking-tight">{title}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-2 px-6">
            <div className="flex flex-col">
              <div className="text-base text-text-secondary">
                {content}
              </div>
              
              {actionLabel && actionUrl && (
                <div className="flex justify-end items-start gap-1.5 mb-5">
                  <Link 
                    href={actionUrl}
                    external
                    variant="underlined"
                    className="text-secondary-main text-base font-normal font-['Roboto'] leading-normal tracking-tight"
                  >
                    {actionLabel}
                  </Link>
                </div>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ContextualHelpAccordion;
