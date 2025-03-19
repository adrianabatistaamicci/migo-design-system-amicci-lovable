
/**
 * Icon utility functions for consistent icon usage throughout the application
 */

// Get Material Design outlined icon URL by name
export const getMaterialIconUrl = (iconName: string, size: number = 24): string => {
  return `https://fonts.gstatic.com/s/i/materialiconsoutlined/${iconName}/v12/${size}px.svg`;
};

// Standard icon sizes for the application
export const ICON_SIZES = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 32,
  xl: 40,
  xxl: 48
};

// Helper to get icon size class based on size key or number
export const getIconSizeClass = (size: keyof typeof ICON_SIZES | number): string => {
  if (typeof size === 'number') {
    return `w-[${size}px] h-[${size}px]`;
  }
  
  const pixelSize = ICON_SIZES[size];
  return `w-[${pixelSize}px] h-[${pixelSize}px]`;
};

// Helper to determine if an icon needs inversion for contrast
export const shouldInvertIcon = (bgColor: string): boolean => {
  // Simple check based on background color
  // In a real implementation, you would use color contrast algorithms
  const darkBackgrounds = ['bg-primary', 'bg-slate-800', 'bg-black'];
  return darkBackgrounds.some(color => bgColor.includes(color));
};
