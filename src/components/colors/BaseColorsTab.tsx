
import React from 'react';
import ComponentCard from '@/components/ComponentCard';
import BaseColorsTable from './BaseColorsTable';

const baseColorsData = [
  {
    name: 'Amicci',
    weights: [
      { weight: '50', colorClass: 'bg-amicci-50', hexValue: '#FFF5F7' },
      { weight: '100', colorClass: 'bg-amicci-100', hexValue: '#FFE0E5' },
      { weight: '200', colorClass: 'bg-amicci-200', hexValue: '#FFCCD4' },
      { weight: '300', colorClass: 'bg-amicci-300', hexValue: '#FFB8C1' },
      { weight: '400', colorClass: 'bg-amicci-400', hexValue: '#FFA3B0' },
      { weight: '500', colorClass: 'bg-amicci-500', hexValue: '#FF8F9F' },
      { weight: '600', colorClass: 'bg-amicci-600', hexValue: '#E6808F' },
      { weight: '700', colorClass: 'bg-amicci-700', hexValue: '#CC7080' },
      { weight: '800', colorClass: 'bg-amicci-800', hexValue: '#B36070' },
      { weight: '900', colorClass: 'bg-amicci-900', hexValue: '#995060' }
    ]
  },
  {
    name: 'AmicciDark',
    weights: [
      { weight: '50', colorClass: 'bg-amicciDark-50', hexValue: '#F0F0F5' },
      { weight: '100', colorClass: 'bg-amicciDark-100', hexValue: '#D6D6E0' },
      { weight: '200', colorClass: 'bg-amicciDark-200', hexValue: '#ADADC0' },
      { weight: '300', colorClass: 'bg-amicciDark-300', hexValue: '#8585A0' },
      { weight: '400', colorClass: 'bg-amicciDark-400', hexValue: '#5C5C80' },
      { weight: '500', colorClass: 'bg-amicciDark-500', hexValue: '#333360' },
      { weight: '600', colorClass: 'bg-amicciDark-600', hexValue: '#2E2E56' },
      { weight: '700', colorClass: 'bg-amicciDark-700', hexValue: '#29294D' },
      { weight: '800', colorClass: 'bg-amicciDark-800', hexValue: '#242444' },
      { weight: '900', colorClass: 'bg-amicciDark-900', hexValue: '#1A1A3A' }
    ]
  },
  {
    name: 'Blue',
    weights: [
      { weight: '50', colorClass: 'bg-blue-50', hexValue: '#F0F7FF' },
      { weight: '100', colorClass: 'bg-blue-100', hexValue: '#E0EEFF' },
      { weight: '200', colorClass: 'bg-blue-200', hexValue: '#C2DDFF' },
      { weight: '300', colorClass: 'bg-blue-300', hexValue: '#A3CCFF' },
      { weight: '400', colorClass: 'bg-blue-400', hexValue: '#85BBFF' },
      { weight: '500', colorClass: 'bg-blue-500', hexValue: '#66AAFF' },
      { weight: '600', colorClass: 'bg-blue-600', hexValue: '#5C99E6' },
      { weight: '700', colorClass: 'bg-blue-700', hexValue: '#5288CC' },
      { weight: '800', colorClass: 'bg-blue-800', hexValue: '#4777B3' },
      { weight: '900', colorClass: 'bg-blue-900', hexValue: '#3D6699' }
    ]
  },
  {
    name: 'Magenta',
    weights: [
      { weight: '50', colorClass: 'bg-magenta-50', hexValue: '#FDF0F7' },
      { weight: '100', colorClass: 'bg-magenta-100', hexValue: '#FAE0EF' },
      { weight: '200', colorClass: 'bg-magenta-200', hexValue: '#F7C2DE' },
      { weight: '300', colorClass: 'bg-magenta-300', hexValue: '#F5A3CD' },
      { weight: '400', colorClass: 'bg-magenta-400', hexValue: '#F285BC' },
      { weight: '500', colorClass: 'bg-magenta-500', hexValue: '#EF66AB' },
      { weight: '600', colorClass: 'bg-magenta-600', hexValue: '#D75C99' },
      { weight: '700', colorClass: 'bg-magenta-700', hexValue: '#BF5288' },
      { weight: '800', colorClass: 'bg-magenta-800', hexValue: '#A74777' },
      { weight: '900', colorClass: 'bg-magenta-900', hexValue: '#8F3D66' }
    ]
  }
];

const BaseColorsTab = () => {
  return (
    <ComponentCard title="Cores Base">
      <p className="text-mui-text-secondary mb-4">
        As cores base são um conjunto completo de cores de 50 a 900 que servem como fundação para todo o sistema.
      </p>
      <BaseColorsTable baseColors={baseColorsData} />
    </ComponentCard>
  );
};

export default BaseColorsTab;
