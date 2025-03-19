
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Package, Palette, Layers, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CodeBlock from '@/components/CodeBlock';

const Index = () => {
  return (
    <div className="animate-slide-in">
      <div className="max-w-3xl">
        <div className="flex items-center gap-2 text-sm text-mui-primary font-medium mb-2 animate-fade-in">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-mui-primary/10 text-mui-primary">
            Documentation
          </span>
        </div>
        
        <h1 className="text-4xl font-medium text-mui-text-primary mb-4">
          Design System Documentation
        </h1>
        
        <p className="text-xl text-mui-text-secondary mb-8">
          A comprehensive guide to our design system — everything you need to create consistent, beautiful interfaces.
        </p>
        
        <div className="flex flex-wrap gap-4 mb-12">
          <Button asChild size="lg" className="gap-1">
            <Link to="/components">
              Browse Components
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg">
            <Link to="/installation">
              Installation Guide
            </Link>
          </Button>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-medium text-mui-text-primary mb-6">
            Quick Installation
          </h2>
          
          <CodeBlock 
            title="Install via npm"
            language="bash"
            code="npm install @yourdomain/design-system"
          />
          
          <CodeBlock 
            title="Import and use components"
            language="jsx"
            code={`import { Button } from '@yourdomain/design-system';

function App() {
  return (
    <Button variant="primary">
      Get Started
    </Button>
  );
}`}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <Link 
          to="/components" 
          className="block rounded-lg border border-mui-border bg-white p-6 transition-all duration-200 hover:shadow-mui-sm hover:border-mui-primary/20"
        >
          <div className="mb-4 text-mui-primary">
            <Package size={24} />
          </div>
          <h3 className="text-lg font-medium text-mui-text-primary mb-2">
            Components
          </h3>
          <p className="text-mui-text-secondary">
            Explore our library of UI components, with examples and API references.
          </p>
        </Link>
        
        <Link 
          to="/foundations/colors" 
          className="block rounded-lg border border-mui-border bg-white p-6 transition-all duration-200 hover:shadow-mui-sm hover:border-mui-primary/20"
        >
          <div className="mb-4 text-mui-primary">
            <Palette size={24} />
          </div>
          <h3 className="text-lg font-medium text-mui-text-primary mb-2">
            Foundations
          </h3>
          <p className="text-mui-text-secondary">
            Colors, typography, spacing, and other building blocks of our design system.
          </p>
        </Link>
        
        <Link 
          to="/guidelines/accessibility" 
          className="block rounded-lg border border-mui-border bg-white p-6 transition-all duration-200 hover:shadow-mui-sm hover:border-mui-primary/20"
        >
          <div className="mb-4 text-mui-primary">
            <Layers size={24} />
          </div>
          <h3 className="text-lg font-medium text-mui-text-primary mb-2">
            Guidelines
          </h3>
          <p className="text-mui-text-secondary">
            Best practices for accessibility, responsive design, and usability.
          </p>
        </Link>
        
        <Link 
          to="/resources/figma-library" 
          className="block rounded-lg border border-mui-border bg-white p-6 transition-all duration-200 hover:shadow-mui-sm hover:border-mui-primary/20"
        >
          <div className="mb-4 text-mui-primary">
            <BookOpen size={24} />
          </div>
          <h3 className="text-lg font-medium text-mui-text-primary mb-2">
            Resources
          </h3>
          <p className="text-mui-text-secondary">
            Figma libraries, Storybook documentation, and other helpful resources.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Index;
