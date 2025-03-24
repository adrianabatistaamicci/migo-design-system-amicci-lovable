
/**
 * Utilitários para gerenciamento e cálculo de cores
 */

export const colorUtils = {
  /**
   * Obtém o valor computado de uma variável CSS
   */
  getComputedColor: (colorCode: string): string => {
    try {
      // Verifica se estamos rodando no navegador
      if (typeof window === 'undefined' || !document.documentElement) {
        return '#000000'; // Fallback para preto
      }

      // Se a cor já é um valor de cor em vez de uma variável CSS, retorne-a
      if (colorCode.startsWith('#') || colorCode.startsWith('rgb')) {
        return colorCode;
      }

      // Obtém o valor computado do CSS
      const propertyName = colorCode.replace('var(', '').replace(')', '').trim();
      const computedValue = getComputedStyle(document.documentElement)
        .getPropertyValue(propertyName)
        .trim();

      // Se o valor computado é vazio, retorne preto como fallback
      if (!computedValue) {
        console.warn(`Valor CSS não encontrado para "${colorCode}"`);
        return '#000000';
      }

      return computedValue;
    } catch (error) {
      console.error('Erro ao obter cor computada:', error);
      return '#000000'; // Fallback para preto em caso de erro
    }
  },

  /**
   * Converte uma cor hexadecimal para RGB
   */
  hexToRgb: (hex: string): string => {
    try {
      // Handle RGBA values
      if (hex.startsWith('rgba')) {
        return hex;
      }
      
      // Handle RGB values
      if (hex.startsWith('rgb')) {
        return hex;
      }
      
      // Remove o # se presente
      const cleanHex = hex.startsWith('#') ? hex.slice(1) : hex;
      
      // Validação do formato
      if (!/^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(cleanHex)) {
        console.warn(`Formato hexadecimal inválido: ${hex}`);
        return 'rgb(0, 0, 0)';
      }
      
      // Expandir formato abreviado
      let normalizedHex = cleanHex;
      if (cleanHex.length === 3) {
        normalizedHex = cleanHex[0] + cleanHex[0] + cleanHex[1] + cleanHex[1] + cleanHex[2] + cleanHex[2];
      }
      
      // Converte para RGB
      const r = parseInt(normalizedHex.substring(0, 2), 16);
      const g = parseInt(normalizedHex.substring(2, 4), 16);
      const b = parseInt(normalizedHex.substring(4, 6), 16);
      
      return `rgb(${r}, ${g}, ${b})`;
    } catch (error) {
      console.error('Erro ao converter hex para RGB:', error);
      return 'rgb(0, 0, 0)'; // Fallback para preto em caso de erro
    }
  },

  /**
   * Converte uma cor hexadecimal para HSL
   */
  hexToHsl: (hex: string): string => {
    try {
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

      // Handle RGB values
      if (hex.startsWith('rgb')) {
        // Para valores RGB, tentamos converter para HSL
        const match = hex.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
        if (match) {
          const r = parseInt(match[1]) / 255;
          const g = parseInt(match[2]) / 255;
          const b = parseInt(match[3]) / 255;
          
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
        }
        return hex;
      }
      
      // Remove o # se presente
      const cleanHex = hex.startsWith('#') ? hex.slice(1) : hex;
      
      // Validação do formato
      if (!/^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(cleanHex)) {
        console.warn(`Formato hexadecimal inválido: ${hex}`);
        return 'hsl(0, 0%, 0%)';
      }
      
      // Expandir formato abreviado
      let normalizedHex = cleanHex;
      if (cleanHex.length === 3) {
        normalizedHex = cleanHex[0] + cleanHex[0] + cleanHex[1] + cleanHex[1] + cleanHex[2] + cleanHex[2];
      }
      
      // Converte para RGB
      let r = parseInt(normalizedHex.substring(0, 2), 16) / 255;
      let g = parseInt(normalizedHex.substring(2, 4), 16) / 255;
      let b = parseInt(normalizedHex.substring(4, 6), 16) / 255;
      
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
    } catch (error) {
      console.error('Erro ao converter hex para HSL:', error);
      return 'hsl(0, 0%, 0%)'; // Fallback para preto em caso de erro
    }
  },

  /**
   * Calcula a luminância relativa de uma cor
   * Fórmula da WCAG 2.0: https://www.w3.org/TR/WCAG20-TECHS/G17.html
   */
  getLuminance: (hex: string): number => {
    try {
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

      // Handle RGB values
      if (hex.startsWith('rgb')) {
        const match = hex.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
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
      
      // Validação do formato
      if (!/^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(cleanHex)) {
        console.warn(`Formato hexadecimal inválido: ${hex}`);
        return 0;
      }
      
      // Expandir formato abreviado
      let normalizedHex = cleanHex;
      if (cleanHex.length === 3) {
        normalizedHex = cleanHex[0] + cleanHex[0] + cleanHex[1] + cleanHex[1] + cleanHex[2] + cleanHex[2];
      }
      
      // Converte valores de RGB para valores entre 0 e 1
      let r = parseInt(normalizedHex.substring(0, 2), 16) / 255;
      let g = parseInt(normalizedHex.substring(2, 4), 16) / 255;
      let b = parseInt(normalizedHex.substring(4, 6), 16) / 255;
      
      // Calcula valores usando fórmula sRGB
      r = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
      g = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
      b = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);
      
      // Calcula a luminância
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    } catch (error) {
      console.error('Erro ao calcular luminância:', error);
      return 0; // Fallback para zero em caso de erro
    }
  },

  /**
   * Calcula a razão de contraste entre duas cores
   * Fórmula da WCAG 2.0: https://www.w3.org/TR/WCAG20-TECHS/G17.html
   */
  getContrastRatio: (foreground: string, background: string): number => {
    try {
      const foregroundLum = colorUtils.getLuminance(foreground);
      const backgroundLum = colorUtils.getLuminance(background);
      
      // Calcula contraste
      const lighterColor = Math.max(foregroundLum, backgroundLum);
      const darkerColor = Math.min(foregroundLum, backgroundLum);
      
      return (lighterColor + 0.05) / (darkerColor + 0.05);
    } catch (error) {
      console.error('Erro ao calcular razão de contraste:', error);
      return 1; // Fallback para contraste mínimo
    }
  },

  /**
   * Verifica se uma combinação de cores atende aos critérios WCAG AA
   */
  meetsWCAGAA: (foreground: string, background: string, isLargeText: boolean = false): boolean => {
    try {
      const contrastRatio = colorUtils.getContrastRatio(foreground, background);
      return isLargeText ? contrastRatio >= 3 : contrastRatio >= 4.5;
    } catch (error) {
      console.error('Erro ao verificar conformidade WCAG AA:', error);
      return false;
    }
  },

  /**
   * Verifica se uma combinação de cores atende aos critérios WCAG AAA
   */
  meetsWCAGAAA: (foreground: string, background: string, isLargeText: boolean = false): boolean => {
    try {
      const contrastRatio = colorUtils.getContrastRatio(foreground, background);
      return isLargeText ? contrastRatio >= 4.5 : contrastRatio >= 7;
    } catch (error) {
      console.error('Erro ao verificar conformidade WCAG AAA:', error);
      return false;
    }
  },
  
  /**
   * Aplica opacidade a uma cor
   */
  applyOpacity: (hexColor: string, opacity: number): string => {
    try {
      if (!hexColor.startsWith('#')) {
        return hexColor; // Retorna a cor original se não for hexadecimal
      }
      
      // Converte para RGB
      const rgb = colorUtils.hexToRgb(hexColor);
      const match = rgb.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
      
      if (match) {
        const r = match[1];
        const g = match[2];
        const b = match[3];
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
      }
      
      return hexColor; // Retorna a cor original em caso de falha
    } catch (error) {
      console.error('Erro ao aplicar opacidade:', error);
      return hexColor; // Retorna a cor original em caso de erro
    }
  }
};

// Color blindness filter values using proper CSS format that will work with inline styles
export const colorBlindnessFilters = {
  // Deuteranopia (loss of sensitivity to green light)
  deuteranopia: "contrast(0.8) sepia(0.2) brightness(1.1) hue-rotate(305deg) saturate(0.7)",
  
  // Protanopia (loss of sensitivity to red light)
  protanopia: "contrast(0.9) sepia(0.1) brightness(0.9) hue-rotate(345deg) saturate(0.6)", 
  
  // Tritanopia (loss of sensitivity to blue light)
  tritanopia: "contrast(1.1) sepia(0.1) hue-rotate(190deg) saturate(0.8)",
  
  // Achromatopsia (complete color blindness)
  achromatopsia: "grayscale(1)",
  
  // Normal vision (no filter)
  normal: ""
};
