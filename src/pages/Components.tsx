
import React from 'react';
import { Link } from 'react-router-dom';
import ComponentCard from '@/components/ComponentCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const componentCategories = [
  {
    name: 'Inputs',
    components: [
      { name: 'Button', path: '/components/buttons' },
      { name: 'Input', path: '/components/input' },
      { name: 'Checkbox', path: '/components/checkbox' },
      { name: 'Select', path: '/components/select' },
    ]
  },
  {
    name: 'Display',
    components: [
      { name: 'Card', path: '/components/cards' },
      { name: 'Typography', path: '/components/typography' },
      { name: 'Avatar', path: '/components/avatar' },
      { name: 'Badge', path: '/components/badge' },
    ]
  },
  {
    name: 'Navigation',
    components: [
      { name: 'Navigation Menu', path: '/components/navigation' },
      { name: 'Tabs', path: '/components/tabs' },
      { name: 'Breadcrumb', path: '/components/breadcrumb' },
      { name: 'Pagination', path: '/components/pagination' },
    ]
  },
  {
    name: 'Feedback',
    components: [
      { name: 'Alert', path: '/components/alert' },
      { name: 'Progress', path: '/components/progress' },
      { name: 'Toast', path: '/components/toast' },
      { name: 'Skeleton', path: '/components/skeleton' },
    ]
  },
];

const Components = () => {
  return (
    <div className="animate-slide-in">
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 text-sm text-mui-primary font-medium mb-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-mui-primary/10 text-mui-primary">
            Components
          </span>
        </div>
        
        <h1 className="text-4xl font-medium text-mui-text-primary mb-4">
          Component Library
        </h1>
        
        <p className="text-xl text-mui-text-secondary mb-8">
          Explore our collection of reusable UI components designed for consistency and usability.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <ComponentCard 
            title="Button Component" 
            description="Our versatile button component with multiple variants and sizes."
            code={`<Button variant="outline">Default Button</Button>
<Button>Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>`}
          >
            <div className="flex flex-wrap gap-4">
              <Button variant="outline">Outline</Button>
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
            </div>
          </ComponentCard>
          
          <ComponentCard 
            title="Input Component" 
            description="Text input field with different styles and states."
            code={`<Input placeholder="Default input" />
<Input placeholder="Disabled input" disabled />`}
          >
            <div className="flex flex-col gap-4">
              <Input placeholder="Default input" />
              <Input placeholder="Disabled input" disabled />
            </div>
          </ComponentCard>
        </div>
        
        <div className="mb-12">
          <ComponentCard 
            title="Card Component" 
            description="Flexible card component for displaying grouped content."
            code={`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`}
          >
            <Card className="w-full max-w-md mx-auto">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <Button>Action</Button>
              </CardFooter>
            </Card>
          </ComponentCard>
        </div>
      </div>
      
      <div className="mb-16">
        <h2 className="text-2xl font-medium text-mui-text-primary mb-6">
          All Components
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6">
          {componentCategories.map((category) => (
            <div key={category.name}>
              <h3 className="text-lg font-medium text-mui-text-primary mb-3">
                {category.name}
              </h3>
              <ul className="space-y-2">
                {category.components.map((component) => (
                  <li key={component.name}>
                    <Link 
                      to={component.path} 
                      className="text-mui-text-secondary hover:text-mui-primary hover:underline"
                    >
                      {component.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Components;
