import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import Index from '@/pages/Index';
import NotFound from '@/pages/NotFound';
import Components from '@/pages/Components';
import UIKit from '@/pages/UIKit';
import Colors from '@/pages/Colors';
import Spacing from '@/pages/Spacing';
import Typography from '@/pages/Typography';
import Icons from '@/pages/Icons';
import Installation from '@/pages/Installation';
import Guidelines from '@/pages/Guidelines';
import ComponentDetail from '@/pages/ComponentDetail';
// Component pages
import CodeBlockPage from '@/pages/components/CodeBlock';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Index />} />
          <Route path="components" element={<Components />} />
          <Route path="components/buttons" element={<ComponentDetail componentId="buttons" />} />
          <Route path="components/input" element={<ComponentDetail componentId="input" />} />
          <Route path="components/radiogroup" element={<ComponentDetail componentId="radiogroup" />} />
          <Route path="components/codeblock" element={<CodeBlockPage />} />
          <Route path="ui-kit" element={<UIKit />} />
          <Route path="foundations/colors" element={<Colors />} />
          <Route path="foundations/spacing" element={<Spacing />} />
          <Route path="foundations/typography" element={<Typography />} />
          <Route path="foundations/icons" element={<Icons />} />
          <Route path="installation" element={<Installation />} />
          <Route path="guidelines" element={<Guidelines />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
