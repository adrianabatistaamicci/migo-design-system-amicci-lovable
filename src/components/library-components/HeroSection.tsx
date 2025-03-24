
import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  backgroundImage
}) => {
  return (
    <section className="w-full relative overflow-hidden rounded-xl">
      {/* Background image with overlay gradient */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={backgroundImage} 
          alt="Design fluid background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Hero content */}
      <div className="relative z-10 px-4 py-24 md:py-32 max-w-5xl mx-auto text-center">
        <div className="p-8 rounded-xl text-center">
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
