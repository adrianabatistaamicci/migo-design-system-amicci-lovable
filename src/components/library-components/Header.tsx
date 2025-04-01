
import React from 'react';

interface HeaderProps {
  title: string;
  description: string;
  type: "foundations" | "components" | "guidelines";
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ title, description, type, className }) => {
  return (
    <header className={`mb-8 ${className || ''}`}>
      <div className="flex items-center mb-2">
        <div className="px-2 py-1 text-xs font-medium text-primary-600 bg-primary-50 rounded uppercase">
          {type}
        </div>
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
      <p className="text-gray-600 max-w-3xl">{description}</p>
    </header>
  );
};

export default Header;
