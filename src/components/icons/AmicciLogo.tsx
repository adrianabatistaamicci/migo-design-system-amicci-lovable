
import React from 'react';

interface LogoProps {
  className?: string;
}

export const AmicciLogo: React.FC<LogoProps> = ({ className }) => {
  return (
    <img 
      src="/lovable-uploads/6e955f92-9914-494c-b967-79e27940455d.svg" 
      alt="Amicci Logo" 
      className={className}
    />
  );
};

export const AmicciLogoVertical: React.FC<LogoProps> = ({ className }) => {
  return (
    <img 
      src="/lovable-uploads/49117495-7191-4991-9559-83944679139f.svg" 
      alt="Amicci Logo Vertical" 
      className={className}
    />
  );
};

export const AmicciLogoWhite: React.FC<LogoProps> = ({ className }) => {
  return (
    <img 
      src="/lovable-uploads/6e955f92-9914-494c-b967-79e27940455d.svg" 
      alt="Amicci Logo White" 
      className={`${className} invert`}
    />
  );
};

export const AmicciLogoVerticalWhite: React.FC<LogoProps> = ({ className }) => {
  return (
    <img 
      src="/lovable-uploads/49117495-7191-4991-9559-83944679139f.svg" 
      alt="Amicci Logo Vertical White" 
      className={`${className} invert`}
    />
  );
};
