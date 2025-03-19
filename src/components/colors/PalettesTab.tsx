
import React from 'react';
import ComponentCard from '@/components/ComponentCard';
import PaletteTable from './PaletteTable';

const paletteData = [
  {
    name: 'Primary',
    description: 'amicci',
    variants: [
      { 
        name: 'main', 
        colorClass: 'bg-primary-main', 
        baseColor: 'amicci-500', 
        textColor: 'text-primary-contrast',
        opacity: '100%',
        hexValue: '#FF8F9F'
      },
      { 
        name: 'dark', 
        colorClass: 'bg-primary-dark', 
        baseColor: 'amicci-700', 
        textColor: 'text-primary-contrast',
        opacity: '100%',
        hexValue: '#CC7080'
      },
      { 
        name: 'light', 
        colorClass: 'bg-primary-light', 
        baseColor: 'amicci-300', 
        textColor: 'text-black',
        opacity: '100%',
        hexValue: '#FFB8C1'
      },
      { 
        name: 'contrast', 
        colorClass: 'bg-primary-contrast', 
        baseColor: 'common-white-main', 
        textColor: 'text-primary-main',
        opacity: '100%',
        hexValue: '#FFFFFF'
      },
      { 
        name: 'hover', 
        colorClass: 'bg-primary-hover', 
        baseColor: 'amicci-500', 
        textColor: 'text-primary-contrast',
        opacity: '4%',
        hexValue: '#FF8F9F0A'
      },
      { 
        name: 'selected', 
        colorClass: 'bg-primary-selected', 
        baseColor: 'amicci-500', 
        textColor: 'text-primary-contrast',
        opacity: '8%',
        hexValue: '#FF8F9F14'
      },
      { 
        name: 'focus', 
        colorClass: 'bg-primary-focus', 
        baseColor: 'amicci-500', 
        textColor: 'text-black',
        opacity: '12%',
        hexValue: '#FF8F9F1F'
      },
      { 
        name: 'focusVisible', 
        colorClass: 'bg-primary-focusVisible', 
        baseColor: 'amicci-500', 
        textColor: 'text-black',
        opacity: '30%',
        hexValue: '#FF8F9F4D'
      },
      { 
        name: 'outlinedBorder', 
        colorClass: 'bg-primary-outlinedBorder', 
        baseColor: 'amicci-500', 
        textColor: 'text-black',
        opacity: '50%',
        hexValue: '#FF8F9F80'
      }
    ]
  },
  {
    name: 'Secondary',
    description: 'AmicciDark',
    variants: [
      { 
        name: 'main', 
        colorClass: 'bg-secondary-main', 
        baseColor: 'amicciDark-500', 
        textColor: 'text-secondary-contrast',
        opacity: '100%',
        hexValue: '#333360'
      },
      { 
        name: 'dark', 
        colorClass: 'bg-secondary-dark', 
        baseColor: 'amicciDark-700', 
        textColor: 'text-secondary-contrast',
        opacity: '100%',
        hexValue: '#29294D'
      },
      { 
        name: 'light', 
        colorClass: 'bg-secondary-light', 
        baseColor: 'amicciDark-300', 
        textColor: 'text-black',
        opacity: '100%',
        hexValue: '#8585A0'
      },
      { 
        name: 'contrast', 
        colorClass: 'bg-secondary-contrast', 
        baseColor: 'common-white-main', 
        textColor: 'text-secondary-main',
        opacity: '100%',
        hexValue: '#FFFFFF'
      },
      { 
        name: 'hover', 
        colorClass: 'bg-secondary-hover', 
        baseColor: 'amicciDark-600', 
        textColor: 'text-secondary-contrast',
        opacity: '100%',
        hexValue: '#2E2E56'
      },
      { 
        name: 'selected', 
        colorClass: 'bg-secondary-selected', 
        baseColor: 'amicciDark-700', 
        textColor: 'text-secondary-contrast',
        opacity: '100%',
        hexValue: '#29294D'
      },
      { 
        name: 'focusVisible', 
        colorClass: 'bg-secondary-focusVisible', 
        baseColor: 'amicciDark-200', 
        textColor: 'text-black',
        opacity: '100%',
        hexValue: '#ADADC0'
      },
      { 
        name: 'outlinedBorder', 
        colorClass: 'bg-secondary-outlinedBorder', 
        baseColor: 'amicciDark-300', 
        textColor: 'text-black',
        opacity: '100%',
        hexValue: '#8585A0'
      }
    ]
  },
  {
    name: 'Tertiary',
    description: 'Magenta',
    variants: [
      { name: 'main', colorClass: 'bg-tertiary-main', baseColor: 'magenta-500', textColor: 'text-tertiary-contrast', hexValue: '#EF66AB' },
      { name: 'dark', colorClass: 'bg-tertiary-dark', baseColor: 'magenta-700', textColor: 'text-tertiary-contrast', hexValue: '#BF5288' },
      { name: 'light', colorClass: 'bg-tertiary-light', baseColor: 'magenta-300', textColor: 'text-black', hexValue: '#F5A3CD' },
      { name: 'hover', colorClass: 'bg-tertiary-hover', baseColor: 'magenta-600', textColor: 'text-tertiary-contrast', hexValue: '#D75C99' },
      { name: 'selected', colorClass: 'bg-tertiary-selected', baseColor: 'magenta-700', textColor: 'text-tertiary-contrast', hexValue: '#BF5288' },
      { name: 'focusVisible', colorClass: 'bg-tertiary-focusVisible', baseColor: 'magenta-200', textColor: 'text-black', hexValue: '#F7C2DE' },
      { name: 'outlinedBorder', colorClass: 'bg-tertiary-outlinedBorder', baseColor: 'magenta-300', textColor: 'text-black', hexValue: '#F5A3CD' },
      { name: 'contrast', colorClass: 'bg-tertiary-contrast', baseColor: 'white', textColor: 'text-tertiary-main', hexValue: '#FFFFFF' }
    ]
  },
  {
    name: 'Action',
    description: 'Gray',
    variants: [
      { name: 'main', colorClass: 'bg-action-main', baseColor: 'gray-700', textColor: 'text-action-contrast', hexValue: '#374151' },
      { name: 'dark', colorClass: 'bg-action-dark', baseColor: 'gray-800', textColor: 'text-action-contrast', hexValue: '#1F2937' },
      { name: 'light', colorClass: 'bg-action-light', baseColor: 'gray-200', textColor: 'text-black', hexValue: '#E5E7EB' },
      { name: 'hover', colorClass: 'bg-action-hover', baseColor: 'gray-800', textColor: 'text-action-contrast', hexValue: '#1F2937' },
      { name: 'selected', colorClass: 'bg-action-selected', baseColor: 'gray-900', textColor: 'text-action-contrast', hexValue: '#111827' },
      { name: 'focusVisible', colorClass: 'bg-action-focusVisible', baseColor: 'gray-100', textColor: 'text-black', hexValue: '#F3F4F6' },
      { name: 'outlinedBorder', colorClass: 'bg-action-outlinedBorder', baseColor: 'gray-300', textColor: 'text-black', hexValue: '#D1D5DB' },
      { name: 'contrast', colorClass: 'bg-action-contrast', baseColor: 'white', textColor: 'text-action-main', hexValue: '#FFFFFF' }
    ]
  },
  {
    name: 'Error',
    description: 'Red',
    variants: [
      { name: 'main', colorClass: 'bg-error-main', baseColor: 'red-500', textColor: 'text-error-contrast', hexValue: '#EF4444' },
      { name: 'dark', colorClass: 'bg-error-dark', baseColor: 'red-700', textColor: 'text-error-contrast', hexValue: '#B91C1C' },
      { name: 'light', colorClass: 'bg-error-light', baseColor: 'red-300', textColor: 'text-black', hexValue: '#FCA5A5' },
      { name: 'hover', colorClass: 'bg-error-hover', baseColor: 'red-600', textColor: 'text-error-contrast', hexValue: '#DC2626' },
      { name: 'selected', colorClass: 'bg-error-selected', baseColor: 'red-700', textColor: 'text-error-contrast', hexValue: '#B91C1C' },
      { name: 'focusVisible', colorClass: 'bg-error-focusVisible', baseColor: 'red-200', textColor: 'text-black', hexValue: '#FECACA' },
      { name: 'outlinedBorder', colorClass: 'bg-error-outlinedBorder', baseColor: 'red-300', textColor: 'text-black', hexValue: '#FCA5A5' },
      { name: 'contrast', colorClass: 'bg-error-contrast', baseColor: 'white', textColor: 'text-error-main', hexValue: '#FFFFFF' }
    ]
  },
  {
    name: 'Warning',
    description: 'Yellow',
    variants: [
      { name: 'main', colorClass: 'bg-warning-main', baseColor: 'yellow-500', textColor: 'text-black', hexValue: '#EAB308' },
      { name: 'dark', colorClass: 'bg-warning-dark', baseColor: 'yellow-700', textColor: 'text-black', hexValue: '#A16207' },
      { name: 'light', colorClass: 'bg-warning-light', baseColor: 'yellow-300', textColor: 'text-black', hexValue: '#FDE047' },
      { name: 'hover', colorClass: 'bg-warning-hover', baseColor: 'yellow-600', textColor: 'text-black', hexValue: '#CA8A04' },
      { name: 'selected', colorClass: 'bg-warning-selected', baseColor: 'yellow-700', textColor: 'text-black', hexValue: '#A16207' },
      { name: 'focusVisible', colorClass: 'bg-warning-focusVisible', baseColor: 'yellow-200', textColor: 'text-black', hexValue: '#FEF08A' },
      { name: 'outlinedBorder', colorClass: 'bg-warning-outlinedBorder', baseColor: 'yellow-300', textColor: 'text-black', hexValue: '#FDE047' },
      { name: 'contrast', colorClass: 'bg-warning-contrast', baseColor: 'black', textColor: 'text-white', hexValue: '#000000' }
    ]
  },
  {
    name: 'Info',
    description: 'Blue',
    variants: [
      { name: 'main', colorClass: 'bg-info-main', baseColor: 'blue-500', textColor: 'text-info-contrast', hexValue: '#66AAFF' },
      { name: 'dark', colorClass: 'bg-info-dark', baseColor: 'blue-700', textColor: 'text-info-contrast', hexValue: '#5288CC' },
      { name: 'light', colorClass: 'bg-info-light', baseColor: 'blue-300', textColor: 'text-black', hexValue: '#A3CCFF' },
      { name: 'hover', colorClass: 'bg-info-hover', baseColor: 'blue-600', textColor: 'text-info-contrast', hexValue: '#5C99E6' },
      { name: 'selected', colorClass: 'bg-info-selected', baseColor: 'blue-700', textColor: 'text-info-contrast', hexValue: '#5288CC' },
      { name: 'focusVisible', colorClass: 'bg-info-focusVisible', baseColor: 'blue-200', textColor: 'text-black', hexValue: '#C2DDFF' },
      { name: 'outlinedBorder', colorClass: 'bg-info-outlinedBorder', baseColor: 'blue-300', textColor: 'text-black', hexValue: '#A3CCFF' },
      { name: 'contrast', colorClass: 'bg-info-contrast', baseColor: 'white', textColor: 'text-info-main', hexValue: '#FFFFFF' }
    ]
  },
  {
    name: 'Success',
    description: 'Green',
    variants: [
      { name: 'main', colorClass: 'bg-success-main', baseColor: 'green-500', textColor: 'text-success-contrast', hexValue: '#22C55E' },
      { name: 'dark', colorClass: 'bg-success-dark', baseColor: 'green-700', textColor: 'text-success-contrast', hexValue: '#15803D' },
      { name: 'light', colorClass: 'bg-success-light', baseColor: 'green-300', textColor: 'text-black', hexValue: '#86EFAC' },
      { name: 'hover', colorClass: 'bg-success-hover', baseColor: 'green-600', textColor: 'text-success-contrast', hexValue: '#16A34A' },
      { name: 'selected', colorClass: 'bg-success-selected', baseColor: 'green-700', textColor: 'text-success-contrast', hexValue: '#15803D' },
      { name: 'focusVisible', colorClass: 'bg-success-focusVisible', baseColor: 'green-200', textColor: 'text-black', hexValue: '#BBF7D0' },
      { name: 'outlinedBorder', colorClass: 'bg-success-outlinedBorder', baseColor: 'green-300', textColor: 'text-black', hexValue: '#86EFAC' },
      { name: 'contrast', colorClass: 'bg-success-contrast', baseColor: 'white', textColor: 'text-success-main', hexValue: '#FFFFFF' }
    ]
  }
];

const PalettesTab = () => {
  return (
    <ComponentCard title="Paletas Compostas">
      <p className="text-mui-text-secondary mb-6">
        As paletas compostas são construídas utilizando as cores básicas como base.
        Cada paleta semântica inclui variações para diferentes estados e usos.
      </p>
      <PaletteTable palettes={paletteData} />
    </ComponentCard>
  );
};

export default PalettesTab;
