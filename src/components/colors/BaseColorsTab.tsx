
import React from 'react';
import ComponentCard from '@/components/ComponentCard';
import BaseColorsTable from './BaseColorsTable';

const baseColorsData = [
  {
    name: 'Amicci',
    weights: [
      { weight: '50', colorClass: 'bg-amicci-50', hexValue: '#F1FDFC' },
      { weight: '100', colorClass: 'bg-amicci-100', hexValue: '#E3FAF9' },
      { weight: '200', colorClass: 'bg-amicci-200', hexValue: '#C7F5F3' },
      { weight: '300', colorClass: 'bg-amicci-300', hexValue: '#93EDEA' },
      { weight: '400', colorClass: 'bg-amicci-400', hexValue: '#51DEDA' },
      { weight: '500', colorClass: 'bg-amicci-500', hexValue: '#10C2C0' },
      { weight: '600', colorClass: 'bg-amicci-600', hexValue: '#0EA3A1' },
      { weight: '700', colorClass: 'bg-amicci-700', hexValue: '#0C8482' },
      { weight: '800', colorClass: 'bg-amicci-800', hexValue: '#096665' },
      { weight: '900', colorClass: 'bg-amicci-900', hexValue: '#074A47' },
      { weight: '950', colorClass: 'bg-amicci-950', hexValue: '#062630' }
    ]
  },
  {
    name: 'AmicciDark',
    weights: [
      { weight: '50', colorClass: 'bg-amicciDark-50', hexValue: '#E6F5F5' },
      { weight: '100', colorClass: 'bg-amicciDark-100', hexValue: '#C7E8E9' },
      { weight: '200', colorClass: 'bg-amicciDark-200', hexValue: '#A1D6D8' },
      { weight: '300', colorClass: 'bg-amicciDark-300', hexValue: '#72BEC2' },
      { weight: '400', colorClass: 'bg-amicciDark-400', hexValue: '#3A9CA1' },
      { weight: '500', colorClass: 'bg-amicciDark-500', hexValue: '#14818A' },
      { weight: '600', colorClass: 'bg-amicciDark-600', hexValue: '#0D646D' },
      { weight: '700', colorClass: 'bg-amicciDark-700', hexValue: '#06454A' },
      { weight: '800', colorClass: 'bg-amicciDark-800', hexValue: '#043A3E' },
      { weight: '900', colorClass: 'bg-amicciDark-900', hexValue: '#033034' },
      { weight: '950', colorClass: 'bg-amicciDark-950', hexValue: '#02282A' }
    ]
  },
  {
    name: 'Blue',
    weights: [
      { weight: '50', colorClass: 'bg-blue-50', hexValue: '#EBF5FF' },
      { weight: '100', colorClass: 'bg-blue-100', hexValue: '#D6E8FF' },
      { weight: '200', colorClass: 'bg-blue-200', hexValue: '#ADC8FF' },
      { weight: '300', colorClass: 'bg-blue-300', hexValue: '#84A9FF' },
      { weight: '400', colorClass: 'bg-blue-400', hexValue: '#5A8CF8' },
      { weight: '500', colorClass: 'bg-blue-500', hexValue: '#2970FF' },
      { weight: '600', colorClass: 'bg-blue-600', hexValue: '#1F5AE8' },
      { weight: '700', colorClass: 'bg-blue-700', hexValue: '#0057B2' },
      { weight: '800', colorClass: 'bg-blue-800', hexValue: '#0C41A0' },
      { weight: '900', colorClass: 'bg-blue-900', hexValue: '#093186' },
      { weight: '950', colorClass: 'bg-blue-950', hexValue: '#072B7A' }
    ]
  },
  {
    name: 'Magenta',
    weights: [
      { weight: '50', colorClass: 'bg-magenta-50', hexValue: '#FDF5FA' },
      { weight: '100', colorClass: 'bg-magenta-100', hexValue: '#F9E5F4' },
      { weight: '200', colorClass: 'bg-magenta-200', hexValue: '#F2CAEB' },
      { weight: '300', colorClass: 'bg-magenta-300', hexValue: '#E7A4DD' },
      { weight: '400', colorClass: 'bg-magenta-400', hexValue: '#C963BA' },
      { weight: '500', colorClass: 'bg-magenta-500', hexValue: '#9B247F' },
      { weight: '600', colorClass: 'bg-magenta-600', hexValue: '#841E6C' },
      { weight: '700', colorClass: 'bg-magenta-700', hexValue: '#6D1959' },
      { weight: '800', colorClass: 'bg-magenta-800', hexValue: '#571447' },
      { weight: '900', colorClass: 'bg-magenta-900', hexValue: '#49123C' },
      { weight: '950', colorClass: 'bg-magenta-950', hexValue: '#3E0F32' }
    ]
  },
  {
    name: 'Green',
    weights: [
      { weight: '50', colorClass: 'bg-green-50', hexValue: '#ECFDF3' },
      { weight: '100', colorClass: 'bg-green-100', hexValue: '#D1FADF' },
      { weight: '200', colorClass: 'bg-green-200', hexValue: '#A6F4C5' },
      { weight: '300', colorClass: 'bg-green-300', hexValue: '#6CE9A6' },
      { weight: '400', colorClass: 'bg-green-400', hexValue: '#32D583' },
      { weight: '500', colorClass: 'bg-green-500', hexValue: '#12B76A' },
      { weight: '600', colorClass: 'bg-green-600', hexValue: '#039855' },
      { weight: '700', colorClass: 'bg-green-700', hexValue: '#027A48' },
      { weight: '800', colorClass: 'bg-green-800', hexValue: '#05603A' },
      { weight: '900', colorClass: 'bg-green-900', hexValue: '#055735' },
      { weight: '950', colorClass: 'bg-green-950', hexValue: '#054F31' }
    ]
  },
  {
    name: 'Gray',
    weights: [
      { weight: '50', colorClass: 'bg-gray-50', hexValue: '#F9FBFB' },
      { weight: '100', colorClass: 'bg-gray-100', hexValue: '#F3F6F5' },
      { weight: '200', colorClass: 'bg-gray-200', hexValue: '#EAEFF0' },
      { weight: '300', colorClass: 'bg-gray-300', hexValue: '#CED6D6' },
      { weight: '400', colorClass: 'bg-gray-400', hexValue: '#AFB9BA' },
      { weight: '500', colorClass: 'bg-gray-500', hexValue: '#808586' },
      { weight: '600', colorClass: 'bg-gray-600', hexValue: '#656969' },
      { weight: '700', colorClass: 'bg-gray-700', hexValue: '#4A4F4F' },
      { weight: '800', colorClass: 'bg-gray-800', hexValue: '#313536' },
      { weight: '900', colorClass: 'bg-gray-900', hexValue: '#292C2D' },
      { weight: '950', colorClass: 'bg-gray-950', hexValue: '#212323' }
    ]
  },
  {
    name: 'Red',
    weights: [
      { weight: '50', colorClass: 'bg-red-50', hexValue: '#FEF3F2' },
      { weight: '100', colorClass: 'bg-red-100', hexValue: '#FEE4E2' },
      { weight: '200', colorClass: 'bg-red-200', hexValue: '#FECDCA' },
      { weight: '300', colorClass: 'bg-red-300', hexValue: '#FDA29B' },
      { weight: '400', colorClass: 'bg-red-400', hexValue: '#F97066' },
      { weight: '500', colorClass: 'bg-red-500', hexValue: '#F04438' },
      { weight: '600', colorClass: 'bg-red-600', hexValue: '#D92D20' },
      { weight: '700', colorClass: 'bg-red-700', hexValue: '#B42318' },
      { weight: '800', colorClass: 'bg-red-800', hexValue: '#912018' },
      { weight: '900', colorClass: 'bg-red-900', hexValue: '#862017' },
      { weight: '950', colorClass: 'bg-red-950', hexValue: '#7A271A' }
    ]
  },
  {
    name: 'Yellow',
    weights: [
      { weight: '50', colorClass: 'bg-yellow-50', hexValue: '#FFFDE7' },
      { weight: '100', colorClass: 'bg-yellow-100', hexValue: '#FFF9C4' },
      { weight: '200', colorClass: 'bg-yellow-200', hexValue: '#FFF59D' },
      { weight: '300', colorClass: 'bg-yellow-300', hexValue: '#FFF176' },
      { weight: '400', colorClass: 'bg-yellow-400', hexValue: '#FFEE58' },
      { weight: '500', colorClass: 'bg-yellow-500', hexValue: '#FFEB3B' },
      { weight: '600', colorClass: 'bg-yellow-600', hexValue: '#FDD835' },
      { weight: '700', colorClass: 'bg-yellow-700', hexValue: '#FBC02D' },
      { weight: '800', colorClass: 'bg-yellow-800', hexValue: '#F9A825' },
      { weight: '900', colorClass: 'bg-yellow-900', hexValue: '#F78F1E' },
      { weight: '950', colorClass: 'bg-yellow-950', hexValue: '#F57F17' }
    ]
  },
  {
    name: 'Orange',
    weights: [
      { weight: '50', colorClass: 'bg-orange-50', hexValue: '#FFFAEB' },
      { weight: '100', colorClass: 'bg-orange-100', hexValue: '#FEF0C7' },
      { weight: '200', colorClass: 'bg-orange-200', hexValue: '#FEDF89' },
      { weight: '300', colorClass: 'bg-orange-300', hexValue: '#FEC84B' },
      { weight: '400', colorClass: 'bg-orange-400', hexValue: '#FDB022' },
      { weight: '500', colorClass: 'bg-orange-500', hexValue: '#F79009' },
      { weight: '600', colorClass: 'bg-orange-600', hexValue: '#DC6803' },
      { weight: '700', colorClass: 'bg-orange-700', hexValue: '#B54708' },
      { weight: '800', colorClass: 'bg-orange-800', hexValue: '#93370D' },
      { weight: '900', colorClass: 'bg-orange-900', hexValue: '#86320D' },
      { weight: '950', colorClass: 'bg-orange-950', hexValue: '#7A2E0E' }
    ]
  }
];

const BaseColorsTab = () => {
  return (
    <ComponentCard title="Cores Base">
      <p className="text-mui-text-secondary mb-6">
        As cores base são um conjunto completo de cores de 50 a 950 que servem como fundação para todo o sistema.
      </p>
      <BaseColorsTable baseColors={baseColorsData} />
    </ComponentCard>
  );
};

export default BaseColorsTab;
