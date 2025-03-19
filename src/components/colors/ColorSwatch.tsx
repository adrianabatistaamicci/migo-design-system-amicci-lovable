
import React from 'react';

interface ColorSwatchProps {
  color: string;
  className?: string;
}

const ColorSwatch = ({ color, className = "" }: ColorSwatchProps) => {
  return (
    <div className={`w-full h-8 rounded ${color} ${className}`}></div>
  );
};

export default ColorSwatch;
