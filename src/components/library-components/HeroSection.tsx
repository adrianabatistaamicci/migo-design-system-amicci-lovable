
/**
 * @protected
 * ATENÇÃO: Este arquivo contém conteúdo finalizado e aprovado.
 * Não deve ser alterado diretamente pelo assistente AI.
 * Apenas atualizações de componentes devem ser refletidas.
 */

import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  backgroundImage = "/lovable-uploads/6d04ddec-9054-4db3-b9e5-16353280c499.png"
}) => {
  return (
    <section className="w-full relative overflow-hidden rounded-xl">
      {/* Background image with overlay gradient */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={backgroundImage} 
          alt="Design fluid background" 
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Hero content */}
      <div className="relative z-10 px-4 py-24 md:py-32 max-w-5xl mx-auto text-center">
        <div className="p-8 rounded-xl bg-gray-900/80 backdrop-blur-sm">
          <h2 className="text-4xl tracking-tight mb-4 text-white font-medium md:text-6xl">
            {title}
          </h2>
          <h6 className="text-lg mb-6 text-white/90">
            {subtitle}
          </h6>
          <p className="text-white/80 italic mb-4 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
