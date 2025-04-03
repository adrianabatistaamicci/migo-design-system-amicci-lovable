
import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, Type, Ruler, Box, MessageSquare, Star } from 'lucide-react';

const FoundationsSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-xl font-normal mb-6">Foundations</h2>
      
      {/* First row - 3 boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        <Link to="/guidelines/tom-e-voz" className="group border rounded-lg p-5 hover:border-primary-main hover:shadow-sm transition-all">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-primary-subtle/30 p-2 rounded-md text-primary-main">
              <MessageSquare size={22} />
            </div>
            <h3 className="text-lg font-medium">Tom e Voz</h3>
          </div>
          <p className="text-gray-600 text-sm">Diretrizes para comunicação textual consistente e autêntica.</p>
        </Link>

        <Link to="/foundations/brand" className="group border rounded-lg p-5 hover:border-primary-main hover:shadow-sm transition-all">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-primary-subtle/30 p-2 rounded-md text-primary-main">
              <Star size={22} />
            </div>
            <h3 className="text-lg font-medium">Brand</h3>
          </div>
          <p className="text-gray-600 text-sm">Nossa identidade visual e seus elementos fundamentais.</p>
        </Link>

        <Link to="/foundations/colors" className="group border rounded-lg p-5 hover:border-primary-main hover:shadow-sm transition-all">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-primary-subtle/30 p-2 rounded-md text-primary-main">
              <Palette size={22} />
            </div>
            <h3 className="text-lg font-medium">Colors</h3>
          </div>
          <p className="text-gray-600 text-sm">Paleta de cores para criar interfaces consistentes e harmônicas.</p>
        </Link>
      </div>
      
      {/* Second row - 3 boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link to="/foundations/typography" className="group border rounded-lg p-5 hover:border-primary-main hover:shadow-sm transition-all">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-primary-subtle/30 p-2 rounded-md text-primary-main">
              <Type size={22} />
            </div>
            <h3 className="text-lg font-medium">Typography</h3>
          </div>
          <p className="text-gray-600 text-sm">Sistema tipográfico para hierarquia visual e legibilidade.</p>
        </Link>

        <Link to="/foundations/spacing" className="group border rounded-lg p-5 hover:border-primary-main hover:shadow-sm transition-all">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-primary-subtle/30 p-2 rounded-md text-primary-main">
              <Ruler size={22} />
            </div>
            <h3 className="text-lg font-medium">Spacing</h3>
          </div>
          <p className="text-gray-600 text-sm">Sistema de espaçamentos para criar layouts harmônicos e com respiro.</p>
        </Link>

        <Link to="/foundations/icons" className="group border rounded-lg p-5 hover:border-primary-main hover:shadow-sm transition-all">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-primary-subtle/30 p-2 rounded-md text-primary-main">
              <Box size={22} />
            </div>
            <h3 className="text-lg font-medium">Icons</h3>
          </div>
          <p className="text-gray-600 text-sm">Biblioteca de ícones para comunicação visual consistente.</p>
        </Link>
      </div>
    </section>
  );
};

export default FoundationsSection;
