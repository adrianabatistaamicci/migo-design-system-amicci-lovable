
import React from 'react';
import ComponentCard from '@/components/ComponentCard';
import PaletteTable from './PaletteTable';

const paletteData = [
  {
    name: 'Primary',
    description: 'Amicci',
    variants: [
      { name: 'main', colorClass: 'bg-primary-main', baseColor: 'amicci-500', textColor: 'text-primary-contrast' },
      { name: 'dark', colorClass: 'bg-primary-dark', baseColor: 'amicci-700', textColor: 'text-primary-contrast' },
      { name: 'light', colorClass: 'bg-primary-light', baseColor: 'amicci-300', textColor: 'text-black' },
      { name: 'hover', colorClass: 'bg-primary-hover', baseColor: 'amicci-600', textColor: 'text-primary-contrast' },
      { name: 'selected', colorClass: 'bg-primary-selected', baseColor: 'amicci-700', textColor: 'text-primary-contrast' },
      { name: 'focusVisible', colorClass: 'bg-primary-focusVisible', baseColor: 'amicci-200', textColor: 'text-black' },
      { name: 'outlinedBorder', colorClass: 'bg-primary-outlinedBorder', baseColor: 'amicci-300', textColor: 'text-black' },
      { name: 'contrast', colorClass: 'bg-primary-contrast', baseColor: 'white', textColor: 'text-primary-main' }
    ]
  },
  {
    name: 'Secondary',
    description: 'AmicciDark',
    variants: [
      { name: 'main', colorClass: 'bg-secondary-main', baseColor: 'amicciDark-500', textColor: 'text-secondary-contrast' },
      { name: 'dark', colorClass: 'bg-secondary-dark', baseColor: 'amicciDark-700', textColor: 'text-secondary-contrast' },
      { name: 'light', colorClass: 'bg-secondary-light', baseColor: 'amicciDark-300', textColor: 'text-black' },
      { name: 'hover', colorClass: 'bg-secondary-hover', baseColor: 'amicciDark-600', textColor: 'text-secondary-contrast' },
      { name: 'selected', colorClass: 'bg-secondary-selected', baseColor: 'amicciDark-700', textColor: 'text-secondary-contrast' },
      { name: 'focusVisible', colorClass: 'bg-secondary-focusVisible', baseColor: 'amicciDark-200', textColor: 'text-black' },
      { name: 'outlinedBorder', colorClass: 'bg-secondary-outlinedBorder', baseColor: 'amicciDark-300', textColor: 'text-black' },
      { name: 'contrast', colorClass: 'bg-secondary-contrast', baseColor: 'white', textColor: 'text-secondary-main' }
    ]
  },
  {
    name: 'Tertiary',
    description: 'Magenta',
    variants: [
      { name: 'main', colorClass: 'bg-tertiary-main', baseColor: 'magenta-500', textColor: 'text-tertiary-contrast' },
      { name: 'dark', colorClass: 'bg-tertiary-dark', baseColor: 'magenta-700', textColor: 'text-tertiary-contrast' },
      { name: 'light', colorClass: 'bg-tertiary-light', baseColor: 'magenta-300', textColor: 'text-black' },
      { name: 'hover', colorClass: 'bg-tertiary-hover', baseColor: 'magenta-600', textColor: 'text-tertiary-contrast' },
      { name: 'selected', colorClass: 'bg-tertiary-selected', baseColor: 'magenta-700', textColor: 'text-tertiary-contrast' },
      { name: 'focusVisible', colorClass: 'bg-tertiary-focusVisible', baseColor: 'magenta-200', textColor: 'text-black' },
      { name: 'outlinedBorder', colorClass: 'bg-tertiary-outlinedBorder', baseColor: 'magenta-300', textColor: 'text-black' },
      { name: 'contrast', colorClass: 'bg-tertiary-contrast', baseColor: 'white', textColor: 'text-tertiary-main' }
    ]
  },
  {
    name: 'Action',
    description: 'Gray',
    variants: [
      { name: 'main', colorClass: 'bg-action-main', baseColor: 'gray-700', textColor: 'text-action-contrast' },
      { name: 'dark', colorClass: 'bg-action-dark', baseColor: 'gray-800', textColor: 'text-action-contrast' },
      { name: 'light', colorClass: 'bg-action-light', baseColor: 'gray-200', textColor: 'text-black' },
      { name: 'hover', colorClass: 'bg-action-hover', baseColor: 'gray-800', textColor: 'text-action-contrast' },
      { name: 'selected', colorClass: 'bg-action-selected', baseColor: 'gray-900', textColor: 'text-action-contrast' },
      { name: 'focusVisible', colorClass: 'bg-action-focusVisible', baseColor: 'gray-100', textColor: 'text-black' },
      { name: 'outlinedBorder', colorClass: 'bg-action-outlinedBorder', baseColor: 'gray-300', textColor: 'text-black' },
      { name: 'contrast', colorClass: 'bg-action-contrast', baseColor: 'white', textColor: 'text-action-main' }
    ]
  },
  {
    name: 'Error',
    description: 'Red',
    variants: [
      { name: 'main', colorClass: 'bg-error-main', baseColor: 'red-500', textColor: 'text-error-contrast' },
      { name: 'dark', colorClass: 'bg-error-dark', baseColor: 'red-700', textColor: 'text-error-contrast' },
      { name: 'light', colorClass: 'bg-error-light', baseColor: 'red-300', textColor: 'text-black' },
      { name: 'hover', colorClass: 'bg-error-hover', baseColor: 'red-600', textColor: 'text-error-contrast' },
      { name: 'selected', colorClass: 'bg-error-selected', baseColor: 'red-700', textColor: 'text-error-contrast' },
      { name: 'focusVisible', colorClass: 'bg-error-focusVisible', baseColor: 'red-200', textColor: 'text-black' },
      { name: 'outlinedBorder', colorClass: 'bg-error-outlinedBorder', baseColor: 'red-300', textColor: 'text-black' },
      { name: 'contrast', colorClass: 'bg-error-contrast', baseColor: 'white', textColor: 'text-error-main' }
    ]
  },
  {
    name: 'Warning',
    description: 'Yellow',
    variants: [
      { name: 'main', colorClass: 'bg-warning-main', baseColor: 'yellow-500', textColor: 'text-black' },
      { name: 'dark', colorClass: 'bg-warning-dark', baseColor: 'yellow-700', textColor: 'text-black' },
      { name: 'light', colorClass: 'bg-warning-light', baseColor: 'yellow-300', textColor: 'text-black' },
      { name: 'hover', colorClass: 'bg-warning-hover', baseColor: 'yellow-600', textColor: 'text-black' },
      { name: 'selected', colorClass: 'bg-warning-selected', baseColor: 'yellow-700', textColor: 'text-black' },
      { name: 'focusVisible', colorClass: 'bg-warning-focusVisible', baseColor: 'yellow-200', textColor: 'text-black' },
      { name: 'outlinedBorder', colorClass: 'bg-warning-outlinedBorder', baseColor: 'yellow-300', textColor: 'text-black' },
      { name: 'contrast', colorClass: 'bg-warning-contrast', baseColor: 'black', textColor: 'text-white' }
    ]
  },
  {
    name: 'Info',
    description: 'Blue',
    variants: [
      { name: 'main', colorClass: 'bg-info-main', baseColor: 'blue-500', textColor: 'text-info-contrast' },
      { name: 'dark', colorClass: 'bg-info-dark', baseColor: 'blue-700', textColor: 'text-info-contrast' },
      { name: 'light', colorClass: 'bg-info-light', baseColor: 'blue-300', textColor: 'text-black' },
      { name: 'hover', colorClass: 'bg-info-hover', baseColor: 'blue-600', textColor: 'text-info-contrast' },
      { name: 'selected', colorClass: 'bg-info-selected', baseColor: 'blue-700', textColor: 'text-info-contrast' },
      { name: 'focusVisible', colorClass: 'bg-info-focusVisible', baseColor: 'blue-200', textColor: 'text-black' },
      { name: 'outlinedBorder', colorClass: 'bg-info-outlinedBorder', baseColor: 'blue-300', textColor: 'text-black' },
      { name: 'contrast', colorClass: 'bg-info-contrast', baseColor: 'white', textColor: 'text-info-main' }
    ]
  },
  {
    name: 'Success',
    description: 'Green',
    variants: [
      { name: 'main', colorClass: 'bg-success-main', baseColor: 'green-500', textColor: 'text-success-contrast' },
      { name: 'dark', colorClass: 'bg-success-dark', baseColor: 'green-700', textColor: 'text-success-contrast' },
      { name: 'light', colorClass: 'bg-success-light', baseColor: 'green-300', textColor: 'text-black' },
      { name: 'hover', colorClass: 'bg-success-hover', baseColor: 'green-600', textColor: 'text-success-contrast' },
      { name: 'selected', colorClass: 'bg-success-selected', baseColor: 'green-700', textColor: 'text-success-contrast' },
      { name: 'focusVisible', colorClass: 'bg-success-focusVisible', baseColor: 'green-200', textColor: 'text-black' },
      { name: 'outlinedBorder', colorClass: 'bg-success-outlinedBorder', baseColor: 'green-300', textColor: 'text-black' },
      { name: 'contrast', colorClass: 'bg-success-contrast', baseColor: 'white', textColor: 'text-success-main' }
    ]
  }
];

const PalettesTab = () => {
  return (
    <ComponentCard title="Paletas Compostas">
      <p className="text-mui-text-secondary mb-4">
        As paletas compostas são construídas utilizando as cores básicas como base.
        Cada paleta semântica inclui variações para diferentes estados e usos.
      </p>
      <PaletteTable palettes={paletteData} />
    </ComponentCard>
  );
};

export default PalettesTab;
