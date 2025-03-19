
/**
 * Utilitários para gerenciamento e cálculo de cores
 */

export const colorUtils = {
  /**
   * Obtém o valor computado de uma variável CSS
   */
  getComputedColor: (colorCode: string): string => {
    // Verifica se estamos rodando no navegador
    if (typeof window === 'undefined' || !document.documentElement) {
      return '#000000'; // Fallback para preto
    }

    // Se a cor já é um valor de cor em vez de uma variável CSS, retorne-a
    if (colorCode.startsWith('#') || colorCode.startsWith('rgb')) {
      return colorCode;
    }

    // Obtém o valor computado do CSS
    const computedValue = getComputedStyle(document.documentElement)
      .getPropertyValue(colorCode.replace('var(', '').replace(')', ''))
      .trim();

    // Se o valor computado é vazio, retorne preto como fallback
    if (!computedValue) {
      return '#000000';
    }

    return computedValue;
  },

  /**
   * Converte uma cor hexadecimal para RGB
   */
  hexToRgb: (hex: string): string => {
    // Handle RGBA values
    if (hex.startsWith('rgba')) {
      return hex;
    }
    
    // Remove o # se presente
    const cleanHex = hex.startsWith('#') ? hex.slice(1) : hex;
    
    // Converte para RGB
    const r = parseInt(cleanHex.substring(0, 2), 16);
    const g = parseInt(cleanHex.substring(2, 4), 16);
    const b = parseInt(cleanHex.substring(4, 6), 16);
    
    return `rgb(${r}, ${g}, ${b})`;
  },

  /**
   * Converte uma cor hexadecimal para HSL
   */
  hexToHsl: (hex: string): string => {
    // Handle RGBA values
    if (hex.startsWith('rgba')) {
      // For RGBA values, attempt to convert the RGB part to HSL
      const match = hex.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);
      if (match) {
        const r = parseInt(match[1]) / 255;
        const g = parseInt(match[2]) / 255;
        const b = parseInt(match[3]) / 255;
        const a = parseFloat(match[4]);
        
        // Find the min and max values to calculate luminance and saturation
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        
        let h = 0;
        let s = 0;
        let l = (max + min) / 2;
        
        if (max !== min) {
          const d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
          
          switch (max) {
            case r:
              h = (g - b) / d + (g < b ? 6 : 0);
              break;
            case g:
              h = (b - r) / d + 2;
              break;
            case b:
              h = (r - g) / d + 4;
              break;
          }
          
          h = h / 6;
        }
        
        h = Math.round(h * 360);
        s = Math.round(s * 100);
        l = Math.round(l * 100);
        
        return `hsla(${h}, ${s}%, ${l}%, ${a})`;
      }
      return hex; // Fallback to original
    }
    
    // Remove o # se presente
    const cleanHex = hex.startsWith('#') ? hex.slice(1) : hex;
    
    // Converte para RGB
    let r = parseInt(cleanHex.substring(0, 2), 16) / 255;
    let g = parseInt(cleanHex.substring(2, 4), 16) / 255;
    let b = parseInt(cleanHex.substring(4, 6), 16) / 255;
    
    // Encontra o valor máximo e mínimo para calcular luminância e saturação
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    
    let h = 0;
    let s = 0;
    let l = (max + min) / 2;
    
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      
      h = h / 6;
    }
    
    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);
    
    return `hsl(${h}, ${s}%, ${l}%)`;
  },

  /**
   * Calcula a luminância relativa de uma cor
   * Fórmula da WCAG 2.0: https://www.w3.org/TR/WCAG20-TECHS/G17.html
   */
  getLuminance: (hex: string): number => {
    // Handle RGBA values
    if (hex.startsWith('rgba')) {
      const match = hex.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);
      if (match) {
        let r = parseInt(match[1]) / 255;
        let g = parseInt(match[2]) / 255;
        let b = parseInt(match[3]) / 255;
        
        // Calculate using sRGB formula
        r = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
        g = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
        b = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);
        
        // Calculate luminance
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
      }
      return 0; // Fallback
    }
    
    // Remove o # se presente
    const cleanHex = hex.startsWith('#') ? hex.slice(1) : hex;
    
    // Converte valores de RGB para valores entre 0 e 1
    let r = parseInt(cleanHex.substring(0, 2), 16) / 255;
    let g = parseInt(cleanHex.substring(2, 4), 16) / 255;
    let b = parseInt(cleanHex.substring(4, 6), 16) / 255;
    
    // Calcula valores usando fórmula sRGB
    r = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
    g = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
    b = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);
    
    // Calcula a luminância
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  },

  /**
   * Calcula a razão de contraste entre duas cores
   * Fórmula da WCAG 2.0: https://www.w3.org/TR/WCAG20-TECHS/G17.html
   */
  getContrastRatio: (foreground: string, background: string): number => {
    const foregroundLum = colorUtils.getLuminance(foreground);
    const backgroundLum = colorUtils.getLuminance(background);
    
    // Calcula contraste
    const lighterColor = Math.max(foregroundLum, backgroundLum);
    const darkerColor = Math.min(foregroundLum, backgroundLum);
    
    return (lighterColor + 0.05) / (darkerColor + 0.05);
  },

  /**
   * Verifica se uma combinação de cores atende aos critérios WCAG
   */
  meetsWCAGAA: (foreground: string, background: string, isLargeText: boolean = false): boolean => {
    const contrastRatio = colorUtils.getContrastRatio(foreground, background);
    return isLargeText ? contrastRatio >= 3 : contrastRatio >= 4.5;
  },

  meetsWCAGAAA: (foreground: string, background: string, isLargeText: boolean = false): boolean => {
    const contrastRatio = colorUtils.getContrastRatio(foreground, background);
    return isLargeText ? contrastRatio >= 4.5 : contrastRatio >= 7;
  }
};
