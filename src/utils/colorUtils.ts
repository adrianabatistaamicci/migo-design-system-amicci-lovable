
/**
 * Color utilities for working with color transformations and calculations
 */

// Color blindness filter values for CSS
export const colorBlindnessFilters: Record<string, string> = {
  protanopia: 'url(#protanopia-filter)',
  deuteranopia: 'url(#deuteranopia-filter)',
  tritanopia: 'url(#tritanopia-filter)',
  achromatopsia: 'grayscale(100%)',
  normal: 'none'
};

// Color utility functions
export const colorUtils = {
  // Hex to RGB conversion
  hexToRgb: (hex: string): string => {
    // Remove the hash if it exists
    hex = hex.replace('#', '');
    
    // Parse the hex values
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    return `rgb(${r}, ${g}, ${b})`;
  },
  
  // Hex to HSL conversion
  hexToHsl: (hex: string): string => {
    // Remove the hash if it exists
    hex = hex.replace('#', '');
    
    // Parse the hex values
    let r = parseInt(hex.substring(0, 2), 16) / 255;
    let g = parseInt(hex.substring(2, 4), 16) / 255;
    let b = parseInt(hex.substring(4, 6), 16) / 255;
    
    // Find min and max values
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    
    // Calculate HSL values
    let h = 0;
    let s = 0;
    let l = (max + min) / 2;
    
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      
      switch (max) {
        case r:
          h = ((g - b) / d + (g < b ? 6 : 0)) * 60;
          break;
        case g:
          h = ((b - r) / d + 2) * 60;
          break;
        case b:
          h = ((r - g) / d + 4) * 60;
          break;
      }
    }
    
    return `hsl(${Math.round(h)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
  },
  
  // Get relative luminance for WCAG contrast calculations
  getLuminance: (hex: string): number => {
    // Remove the hash if it exists
    hex = hex.replace('#', '');
    
    // Parse the hex values
    const r = parseInt(hex.substring(0, 2), 16) / 255;
    const g = parseInt(hex.substring(2, 4), 16) / 255;
    const b = parseInt(hex.substring(4, 6), 16) / 255;
    
    // Calculate relative luminance according to WCAG formula
    const R = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
    const G = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
    const B = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);
    
    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
  },
  
  // Calculate contrast ratio between two colors (WCAG)
  getContrastRatio: (hex1: string, hex2: string): number => {
    const l1 = colorUtils.getLuminance(hex1);
    const l2 = colorUtils.getLuminance(hex2);
    
    // Return contrast ratio (lighter color / darker color)
    return l1 > l2 
      ? (l1 + 0.05) / (l2 + 0.05)
      : (l2 + 0.05) / (l1 + 0.05);
  },
  
  // Check if a color passes WCAG AA for normal text (4.5:1)
  passesWCAGAA: (foreground: string, background: string): boolean => {
    return colorUtils.getContrastRatio(foreground, background) >= 4.5;
  },
  
  // Check if a color passes WCAG AAA for normal text (7:1)
  passesWCAGAAA: (foreground: string, background: string): boolean => {
    return colorUtils.getContrastRatio(foreground, background) >= 7;
  },
  
  // Darken a color by a percentage
  darken: (hex: string, percentage: number): string => {
    // Convert hex to RGB
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);
    
    // Darken the color
    r = Math.max(0, Math.floor(r * (1 - percentage / 100)));
    g = Math.max(0, Math.floor(g * (1 - percentage / 100)));
    b = Math.max(0, Math.floor(b * (1 - percentage / 100)));
    
    // Convert back to hex
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  },
  
  // Lighten a color by a percentage
  lighten: (hex: string, percentage: number): string => {
    // Convert hex to RGB
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);
    
    // Lighten the color
    r = Math.min(255, Math.floor(r + (255 - r) * (percentage / 100)));
    g = Math.min(255, Math.floor(g + (255 - g) * (percentage / 100)));
    b = Math.min(255, Math.floor(b + (255 - b) * (percentage / 100)));
    
    // Convert back to hex
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  }
};
