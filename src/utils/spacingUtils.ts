
/**
 * Spacing utility functions for consistent spacing throughout the application
 */

// Convert spacing token to pixel value
export const tokenToPixels = (token: string): number => {
  const tokenMap: Record<string, number> = {
    'space-0': 0,
    'space-1': 4,
    'space-2': 8,
    'space-3': 12,
    'space-4': 16,
    'space-5': 20,
    'space-6': 24,
    'space-8': 32,
    'space-10': 40,
    'space-12': 48,
    'space-16': 64,
    'space-20': 80,
    'space-24': 96,
    'space-32': 128,
    'space-40': 160,
    'space-48': 192,
    'space-56': 224,
    'space-64': 256,
  };

  return tokenMap[token] || 0;
};

// Convert pixel value to spacing token
export const pixelsToToken = (pixels: number): string => {
  const pixelMap: Record<number, string> = {
    0: 'space-0',
    4: 'space-1',
    8: 'space-2',
    12: 'space-3',
    16: 'space-4',
    20: 'space-5',
    24: 'space-6',
    32: 'space-8',
    40: 'space-10',
    48: 'space-12',
    64: 'space-16',
    80: 'space-20',
    96: 'space-24',
    128: 'space-32',
    160: 'space-40',
    192: 'space-48',
    224: 'space-56',
    256: 'space-64',
  };

  return pixelMap[pixels] || 'custom';
};

// Get the appropriate spacing class based on the token
export const getSpacingClass = (
  type: 'margin' | 'padding' | 'gap', 
  size: number | string, 
  direction?: 'x' | 'y' | 't' | 'r' | 'b' | 'l'
): string => {
  const prefix = type === 'margin' ? 'm' : type === 'padding' ? 'p' : 'gap';
  const directionSuffix = direction ? `-${direction}` : '';
  
  return `${prefix}${directionSuffix}-${size}`;
};
