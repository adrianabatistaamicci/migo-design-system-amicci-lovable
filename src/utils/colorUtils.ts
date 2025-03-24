
// Utility functions for color manipulation and analysis

export const colorUtils = {
  // Calculate color luminance (for determining if text should be light or dark)
  getLuminance: (hexColor: string): number => {
    // Remove # if present
    const hex = hexColor.replace('#', '');
    
    // Parse RGB components
    const r = parseInt(hex.substr(0, 2), 16) / 255;
    const g = parseInt(hex.substr(2, 2), 16) / 255;
    const b = parseInt(hex.substr(4, 2), 16) / 255;
    
    // Calculate luminance using the formula for relative luminance in sRGB space
    // See: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
    const R = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
    const G = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
    const B = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);
    
    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
  },
  
  // Check if a color meets contrast requirements with another color
  getContrastRatio: (foreground: string, background: string): number => {
    const lumA = colorUtils.getLuminance(foreground);
    const lumB = colorUtils.getLuminance(background);
    
    return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
  },
  
  // Determine if a color passes AA level for normal text (4.5:1)
  passesAA: (foreground: string, background: string): boolean => {
    return colorUtils.getContrastRatio(foreground, background) >= 4.5;
  },
  
  // Determine if a color passes AA level for large text (3:1)
  passesAALarge: (foreground: string, background: string): boolean => {
    return colorUtils.getContrastRatio(foreground, background) >= 3;
  },
  
  // Determine if a color passes AAA level for normal text (7:1)
  passesAAA: (foreground: string, background: string): boolean => {
    return colorUtils.getContrastRatio(foreground, background) >= 7;
  },
  
  // Determine if a color passes AAA level for large text (4.5:1)
  passesAAALarge: (foreground: string, background: string): boolean => {
    return colorUtils.getContrastRatio(foreground, background) >= 4.5;
  }
};

// Color blindness simulation filters for CSS
export const colorBlindnessFilters = {
  'deuteranopia': 'saturate(0.05) contrast(0.8)',
  'protanopia': 'saturate(0.05) contrast(0.8)',
  'tritanopia': 'hue-rotate(180deg) saturate(0.5)',
  'achromatopsia': 'grayscale(1)',
  'normal': 'none'
};
