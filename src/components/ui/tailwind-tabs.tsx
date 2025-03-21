import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';

type Tab = {
  name: string;
  value: string;
};

type TailwindTabsProps = {
  tabs?: Tab[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  variant?: 'underline' | 'pills' | 'pillsGray' | 'pillsBrand' | 'fullWidth' | 'bar' | 'underlineBadges';
  children?: React.ReactNode;
  className?: string;
};

export const TailwindTabs = ({
  tabs = [],
  defaultValue,
  onChange,
  variant = 'pillsGray',
  children,
  className = '',
}: TailwindTabsProps) => {
  const [selected, setSelected] = useState(defaultValue || (tabs.length > 0 ? tabs[0]?.value : ''));

  const handleTabChange = (value: string) => {
    setSelected(value);
    onChange?.(value);
  };

  // Render different tab styles based on variant
  const renderTabs = () => {
    if (!tabs || tabs.length === 0) return null;
    
    switch (variant) {
      case 'underline':
        return (
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => handleTabChange(tab.value)}
                  className={`whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium ${
                    selected === tab.value
                      ? 'border-amicci-500 text-amicci-600'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        );

      case 'pills':
        return (
          <nav className="flex space-x-4">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => handleTabChange(tab.value)}
                className={`rounded-md px-3 py-2 text-sm font-medium ${
                  selected === tab.value
                    ? 'bg-gray-100 text-amicci-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        );

      case 'pillsGray':
        return (
          <nav className="flex space-x-2 rounded-lg bg-gray-100 p-1">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => handleTabChange(tab.value)}
                className={`rounded-md px-3 py-1.5 text-sm font-medium ${
                  selected === tab.value
                    ? 'bg-white text-amicci-600 shadow'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        );

      case 'pillsBrand':
        return (
          <nav className="flex space-x-2 rounded-lg bg-amicci-50 p-1">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => handleTabChange(tab.value)}
                className={`rounded-md px-3 py-1.5 text-sm font-medium ${
                  selected === tab.value
                    ? 'bg-amicci-500 text-white shadow'
                    : 'text-amicci-600 hover:text-amicci-700'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        );

      case 'fullWidth':
        return (
          <div>
            <nav className="flex border-b border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => handleTabChange(tab.value)}
                  className={`flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-center text-sm font-medium ${
                    selected === tab.value
                      ? 'border-amicci-500 text-amicci-600'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        );

      case 'bar':
        return (
          <div>
            <div className="sm:hidden">
              <select
                className="block w-full rounded-md border-gray-300 focus:border-amicci-500 focus:ring-amicci-500"
                value={selected}
                onChange={(e) => handleTabChange(e.target.value)}
              >
                {tabs.map((tab) => (
                  <option key={tab.value} value={tab.value}>
                    {tab.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="hidden sm:block">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8">
                  {tabs.map((tab) => (
                    <button
                      key={tab.value}
                      onClick={() => handleTabChange(tab.value)}
                      className={`whitespace-nowrap py-4 px-1 text-sm font-medium ${
                        selected === tab.value
                          ? 'border-b-2 border-amicci-500 text-amicci-600'
                          : 'border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                      }`}
                    >
                      {tab.name}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        );
        
      case 'underlineBadges':
        return (
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => handleTabChange(tab.value)}
                  className={`group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium ${
                    selected === tab.value
                      ? 'border-amicci-500 text-amicci-600'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  {tab.name}
                  <span
                    className={`ml-2 rounded-full px-2.5 py-0.5 text-xs font-medium md:inline-block ${
                      selected === tab.value
                        ? 'bg-amicci-100 text-amicci-600'
                        : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                    }`}
                  >
                    {tab.value === 'inbox' ? '5' : tab.value === 'spam' ? '42' : '3'}
                  </span>
                </button>
              ))}
            </nav>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {renderTabs()}
      <div className="tab-content">
        {children}
      </div>
    </div>
  );
};
