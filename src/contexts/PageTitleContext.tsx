
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTitleContextType {
  pageTitle: string | undefined;
  setPageTitle: (title: string) => void;
}

const PageTitleContext = createContext<PageTitleContextType | undefined>(undefined);

export const usePageTitle = () => {
  const context = useContext(PageTitleContext);
  if (!context) {
    throw new Error('usePageTitle must be used within a PageTitleProvider');
  }
  return context;
};

interface PageTitleProviderProps {
  children: ReactNode;
}

export const PageTitleProvider: React.FC<PageTitleProviderProps> = ({ children }) => {
  const [pageTitle, setPageTitle] = useState<string | undefined>(undefined);
  
  return (
    <PageTitleContext.Provider value={{ pageTitle, setPageTitle }}>
      {children}
    </PageTitleContext.Provider>
  );
};

export const getPageTitleFromPath = (pathname: string, items: any[]): string | undefined => {
  for (const item of items) {
    if (item.href === pathname) {
      return item.title;
    }
    if (item.items) {
      const title = getPageTitleFromPath(pathname, item.items);
      if (title) return title;
    }
  }
  return undefined;
};
