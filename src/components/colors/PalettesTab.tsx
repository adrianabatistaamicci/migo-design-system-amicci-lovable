
import React from 'react';
import ComponentCard from '@/components/ComponentCard';
import PaletteTable from './PaletteTable';

const paletteData = [
  {
    name: 'Text',
    description: 'Gray',
    variants: [
      { name: 'primary', colorClass: 'text-text-primary', baseColor: 'gray-900', textColor: 'text-white', hexValue: '#212323' },
      { name: 'secondary', colorClass: 'text-text-secondary', baseColor: 'gray-500', textColor: 'text-white', hexValue: '#808586' },
      { name: 'disabled', colorClass: 'text-text-disabled', baseColor: 'gray-400', textColor: 'text-white', hexValue: '#AFB9BA' },
      { name: 'hover', colorClass: 'bg-gray-900/[0.04]', baseColor: 'gray-900', textColor: 'text-black', opacity: '4%', hexValue: '#2123230A' },
      { name: 'selected', colorClass: 'bg-gray-900/[0.08]', baseColor: 'gray-900', textColor: 'text-black', opacity: '8%', hexValue: '#21232314' },
      { name: 'focus', colorClass: 'bg-gray-900/[0.12]', baseColor: 'gray-900', textColor: 'text-black', opacity: '12%', hexValue: '#2123231F' },
      { name: 'focusVisible', colorClass: 'bg-gray-900/[0.3]', baseColor: 'gray-900', textColor: 'text-black', opacity: '30%', hexValue: '#2123234D' },
      { name: 'contrastText', colorClass: 'bg-white', baseColor: 'white', textColor: 'text-black', hexValue: '#FFFFFF' }
    ]
  },
  {
    name: 'Primary',
    description: 'amicci',
    variants: [
      { name: 'main', colorClass: 'bg-primary-main', baseColor: 'amicci-500', textColor: 'text-primary-contrast', opacity: '100%', hexValue: '#10C2C0' },
      { name: 'dark', colorClass: 'bg-primary-dark', baseColor: 'amicci-700', textColor: 'text-primary-contrast', opacity: '100%', hexValue: '#0C8482' },
      { name: 'light', colorClass: 'bg-primary-light', baseColor: 'amicci-100', textColor: 'text-black', opacity: '100%', hexValue: '#E3FAF9' },
      { name: 'contrast', colorClass: 'bg-primary-contrast', baseColor: 'common-white-main', textColor: 'text-primary-main', opacity: '100%', hexValue: '#FFFFFF' },
      { name: 'hover', colorClass: 'bg-primary-hover', baseColor: 'amicci-500', textColor: 'text-primary-contrast', opacity: '4%', hexValue: '#10C2C00A' },
      { name: 'selected', colorClass: 'bg-primary-selected', baseColor: 'amicci-500', textColor: 'text-primary-contrast', opacity: '8%', hexValue: '#10C2C014' },
      { name: 'focus', colorClass: 'bg-primary-focus', baseColor: 'amicci-500', textColor: 'text-black', opacity: '12%', hexValue: '#10C2C01F' },
      { name: 'focusVisible', colorClass: 'bg-primary-focusVisible', baseColor: 'amicci-500', textColor: 'text-black', opacity: '30%', hexValue: '#10C2C04D' },
      { name: 'outlinedBorder', colorClass: 'bg-primary-outlinedBorder', baseColor: 'amicci-500', textColor: 'text-black', opacity: '50%', hexValue: '#10C2C080' }
    ]
  },
  {
    name: 'Secondary',
    description: 'AmicciDark',
    variants: [
      { name: 'main', colorClass: 'bg-secondary-main', baseColor: 'amicciDark-500', textColor: 'text-secondary-contrast', opacity: '100%', hexValue: '#14818A' },
      { name: 'dark', colorClass: 'bg-secondary-dark', baseColor: 'amicciDark-700', textColor: 'text-secondary-contrast', opacity: '100%', hexValue: '#06454A' },
      { name: 'light', colorClass: 'bg-secondary-light', baseColor: 'amicciDark-100', textColor: 'text-black', opacity: '100%', hexValue: '#C7E8E9' },
      { name: 'dark2', colorClass: 'bg-amicciDark-800', baseColor: 'amicciDark-800', textColor: 'text-white', opacity: '100%', hexValue: '#043A3E' },
      { name: 'contrast', colorClass: 'bg-secondary-contrast', baseColor: 'common-white-main', textColor: 'text-secondary-main', opacity: '100%', hexValue: '#FFFFFF' },
      { name: 'hover', colorClass: 'bg-secondary-hover', baseColor: 'amicciDark-500', textColor: 'text-secondary-contrast', opacity: '4%', hexValue: '#14818A0A' },
      { name: 'selected', colorClass: 'bg-secondary-selected', baseColor: 'amicciDark-500', textColor: 'text-secondary-contrast', opacity: '8%', hexValue: '#14818A14' },
      { name: 'focus', colorClass: 'bg-secondary-focus', baseColor: 'amicciDark-500', textColor: 'text-black', opacity: '12%', hexValue: '#14818A1F' },
      { name: 'focusVisible', colorClass: 'bg-secondary-focusVisible', baseColor: 'amicciDark-500', textColor: 'text-black', opacity: '30%', hexValue: '#14818A4D' },
      { name: 'outlinedBorder', colorClass: 'bg-secondary-outlinedBorder', baseColor: 'amicciDark-500', textColor: 'text-black', opacity: '50%', hexValue: '#14818A80' }
    ]
  },
  {
    name: 'Tertiary',
    description: 'Magenta',
    variants: [
      { name: 'main', colorClass: 'bg-tertiary-main', baseColor: 'magenta-500', textColor: 'text-tertiary-contrast', hexValue: '#9B247F' },
      { name: 'dark', colorClass: 'bg-tertiary-dark', baseColor: 'magenta-700', textColor: 'text-tertiary-contrast', hexValue: '#6D1959' },
      { name: 'light', colorClass: 'bg-tertiary-light', baseColor: 'magenta-100', textColor: 'text-black', hexValue: '#F9E5F4' },
      { name: 'hover', colorClass: 'bg-tertiary-hover', baseColor: 'magenta-500', textColor: 'text-tertiary-contrast', opacity: '4%', hexValue: '#9B247F0A' },
      { name: 'selected', colorClass: 'bg-tertiary-selected', baseColor: 'magenta-500', textColor: 'text-tertiary-contrast', opacity: '8%', hexValue: '#9B247F14' },
      { name: 'focus', colorClass: 'bg-tertiary-focus', baseColor: 'magenta-500', textColor: 'text-black', opacity: '12%', hexValue: '#9B247F1F' },
      { name: 'focusVisible', colorClass: 'bg-tertiary-focusVisible', baseColor: 'magenta-500', textColor: 'text-black', opacity: '30%', hexValue: '#9B247F4D' },
      { name: 'outlinedBorder', colorClass: 'bg-tertiary-outlinedBorder', baseColor: 'magenta-500', textColor: 'text-black', opacity: '50%', hexValue: '#9B247F80' },
      { name: 'contrast', colorClass: 'bg-tertiary-contrast', baseColor: 'white', textColor: 'text-tertiary-main', hexValue: '#FFFFFF' }
    ]
  },
  {
    name: 'Action',
    description: 'Gray',
    variants: [
      { name: 'active', colorClass: 'bg-action-main', baseColor: 'gray-500', textColor: 'text-action-contrast', hexValue: '#808586' },
      { name: 'hover', colorClass: 'bg-action-hover', baseColor: 'gray-100', textColor: 'text-black', hexValue: '#F3F6F5' },
      { name: 'selected', colorClass: 'bg-action-selected', baseColor: 'gray-500', textColor: 'text-action-contrast', hexValue: '#808586' },
      { name: 'focus', colorClass: 'bg-action-focus', baseColor: 'gray-400', textColor: 'text-black', hexValue: '#AFB9BA' },
      { name: 'disabled', colorClass: 'bg-action-disabled', baseColor: 'gray-400', textColor: 'text-black', hexValue: '#AFB9BA' },
      { name: 'disabledBackground', colorClass: 'bg-action-disabledBackground', baseColor: 'gray-300', textColor: 'text-black', hexValue: '#CED6D6' },
      { name: 'contrast', colorClass: 'bg-action-contrast', baseColor: 'white', textColor: 'text-action-main', hexValue: '#FFFFFF' }
    ]
  },
  {
    name: 'Error',
    description: 'Red',
    variants: [
      { name: 'main', colorClass: 'bg-error-main', baseColor: 'red-600', textColor: 'text-error-contrast', hexValue: '#D92D20' },
      { name: 'dark', colorClass: 'bg-error-dark', baseColor: 'red-900', textColor: 'text-error-contrast', hexValue: '#7A271A' },
      { name: 'light', colorClass: 'bg-error-light', baseColor: 'red-100', textColor: 'text-black', hexValue: '#FEE4E2' },
      { name: 'hover', colorClass: 'bg-error-hover', baseColor: 'red-600', textColor: 'text-error-contrast', opacity: '4%', hexValue: '#D92D200A' },
      { name: 'selected', colorClass: 'bg-error-selected', baseColor: 'red-600', textColor: 'text-error-contrast', opacity: '8%', hexValue: '#D92D2014' },
      { name: 'focusVisible', colorClass: 'bg-error-focusVisible', baseColor: 'red-600', textColor: 'text-black', opacity: '30%', hexValue: '#D92D204D' },
      { name: 'outlinedBorder', colorClass: 'bg-error-outlinedBorder', baseColor: 'red-600', textColor: 'text-black', opacity: '50%', hexValue: '#D92D2080' },
      { name: 'contrast', colorClass: 'bg-error-contrast', baseColor: 'white', textColor: 'text-error-main', hexValue: '#FFFFFF' }
    ]
  },
  {
    name: 'Info',
    description: 'Blue',
    variants: [
      { name: 'main', colorClass: 'bg-info-main', baseColor: 'lightBlue-600', textColor: 'text-info-contrast', hexValue: '#0284C7' },
      { name: 'dark', colorClass: 'bg-info-dark', baseColor: 'lightBlue-900', textColor: 'text-info-contrast', hexValue: '#0C4A6E' },
      { name: 'light', colorClass: 'bg-info-light', baseColor: 'lightBlue-100', textColor: 'text-black', hexValue: '#E0F2FE' },
      { name: 'hover', colorClass: 'bg-info-hover', baseColor: 'lightBlue-700', textColor: 'text-info-contrast', opacity: '4%', hexValue: '#0369A10A' },
      { name: 'selected', colorClass: 'bg-info-selected', baseColor: 'lightBlue-700', textColor: 'text-info-contrast', opacity: '8%', hexValue: '#0369A114' },
      { name: 'focusVisible', colorClass: 'bg-info-focusVisible', baseColor: 'lightBlue-700', textColor: 'text-black', opacity: '30%', hexValue: '#0369A14D' },
      { name: 'outlinedBorder', colorClass: 'bg-info-outlinedBorder', baseColor: 'lightBlue-700', textColor: 'text-black', opacity: '50%', hexValue: '#0369A180' },
      { name: 'contrast', colorClass: 'bg-info-contrast', baseColor: 'white', textColor: 'text-info-main', hexValue: '#FFFFFF' }
    ]
  },
  {
    name: 'Warning',
    description: 'Orange',
    variants: [
      { name: 'main', colorClass: 'bg-warning-main', baseColor: 'orange-400', textColor: 'text-warning-contrast', hexValue: '#FDB022' },
      { name: 'dark', colorClass: 'bg-warning-dark', baseColor: 'orange-600', textColor: 'text-warning-contrast', hexValue: '#DC6803' },
      { name: 'light', colorClass: 'bg-warning-light', baseColor: 'orange-100', textColor: 'text-black', hexValue: '#FEF0C7' },
      { name: 'hover', colorClass: 'bg-warning-hover', baseColor: 'orange-600', textColor: 'text-warning-contrast', opacity: '4%', hexValue: '#DC68030A' },
      { name: 'selected', colorClass: 'bg-warning-selected', baseColor: 'orange-600', textColor: 'text-warning-contrast', opacity: '8%', hexValue: '#DC680314' },
      { name: 'focusVisible', colorClass: 'bg-warning-focusVisible', baseColor: 'orange-600', textColor: 'text-black', opacity: '30%', hexValue: '#DC68034D' },
      { name: 'outlinedBorder', colorClass: 'bg-warning-outlinedBorder', baseColor: 'orange-600', textColor: 'text-black', opacity: '50%', hexValue: '#DC680380' },
      { name: 'contrast', colorClass: 'bg-warning-contrast', baseColor: 'black', textColor: 'text-white', hexValue: '#000000' }
    ]
  },
  {
    name: 'Success',
    description: 'Green',
    variants: [
      { name: 'main', colorClass: 'bg-success-main', baseColor: 'green-500', textColor: 'text-success-contrast', hexValue: '#12B76A' },
      { name: 'dark', colorClass: 'bg-success-dark', baseColor: 'green-700', textColor: 'text-success-contrast', hexValue: '#027A48' },
      { name: 'light', colorClass: 'bg-success-light', baseColor: 'green-100', textColor: 'text-black', hexValue: '#D1FADF' },
      { name: 'hover', colorClass: 'bg-success-hover', baseColor: 'green-500', textColor: 'text-success-contrast', opacity: '4%', hexValue: '#12B76A0A' },
      { name: 'selected', colorClass: 'bg-success-selected', baseColor: 'green-500', textColor: 'text-success-contrast', opacity: '8%', hexValue: '#12B76A14' },
      { name: 'focusVisible', colorClass: 'bg-success-focusVisible', baseColor: 'green-500', textColor: 'text-black', opacity: '30%', hexValue: '#12B76A4D' },
      { name: 'outlinedBorder', colorClass: 'bg-success-outlinedBorder', baseColor: 'green-500', textColor: 'text-black', opacity: '50%', hexValue: '#12B76A80' },
      { name: 'contrast', colorClass: 'bg-success-contrast', baseColor: 'white', textColor: 'text-success-main', hexValue: '#FFFFFF' }
    ]
  }
];

const PalettesTab = () => {
  return (
    <ComponentCard 
      title="Paletas Compostas" 
      description="As paletas compostas são construídas utilizando as cores básicas como base. Cada paleta semântica inclui variações para diferentes estados e usos."
      height="auto"
    >
      <PaletteTable palettes={paletteData} />
    </ComponentCard>
  );
};

export default PalettesTab;
