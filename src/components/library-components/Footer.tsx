
/**
 * @protected
 * ATENÇÃO: Este arquivo contém conteúdo finalizado e aprovado.
 * Não deve ser alterado diretamente pelo assistente AI.
 * Apenas atualizações de componentes devem ser refletidas.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
interface FooterProps {
  /** Texto adicional para o rodapé */
  additionalText?: string;
  /** URL personalizada para o link de governança */
  governanceUrl?: string;
}

/**
 * Componente de rodapé para exibir informações de copyright e créditos
 */
const Footer = ({
  additionalText,
  governanceUrl = "/guidelines/technical-governance"
}: FooterProps) => {
  const isProduction = import.meta.env.PROD;
  
  return <footer className="py-6 border-t border-border w-full mt-auto">
      <div className="container flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          Feito com <Heart className="h-4 w-4 text-primary-main fill-primary-main" /> pelo time de UX e Engenharia da Amicci
        </div>
        
        <div className="flex items-center gap-4">
          {additionalText && <span>{additionalText}</span>}
          {!isProduction && (
            <Link to={governanceUrl} className="underline hover:text-foreground transition-colors">
              Governança Migo Lovable
            </Link>
          )}
        </div>
      </div>
    </footer>;
};
export default Footer;
