
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Index from "./pages/Index";
import Components from "./pages/Components";
import ComponentDetail from "./pages/ComponentDetail";
import NotFound from "./pages/NotFound";
import UIKit from "./pages/UIKit";
// Import foundation pages
import Colors from "./pages/Colors";
import Typography from "./pages/Typography";
import Spacing from "./pages/Spacing";
import Icons from "./pages/Icons";
import Brand from "./pages/foundations/Brand";
// Import component pages
import InputPage from "./pages/components/Input";
import CheckboxPage from "./pages/components/Checkbox";
import RadioPage from "./pages/components/Radio";
import SelectPage from "./pages/components/Select";
import SliderPage from "./pages/components/Slider";
import SwitchPage from "./pages/components/Switch";
import AvatarPage from "./pages/components/Avatar";
import BadgePage from "./pages/components/Badge";
import ChipPage from "./pages/components/Chip";
import TabsPage from "./pages/components/Tabs";
import ProgressPage from "./pages/components/Progress";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Index />} />
              
              {/* Components pages */}
              <Route path="/components" element={<Components />} />
              <Route path="/components/:componentId" element={<ComponentDetail />} />
              <Route path="/components/input" element={<InputPage />} />
              <Route path="/components/checkbox" element={<CheckboxPage />} />
              <Route path="/components/radio" element={<RadioPage />} />
              <Route path="/components/radio-group" element={<RadioPage />} />
              <Route path="/components/select" element={<SelectPage />} />
              <Route path="/components/slider" element={<SliderPage />} />
              <Route path="/components/switch" element={<SwitchPage />} />
              <Route path="/components/avatar" element={<AvatarPage />} />
              <Route path="/components/badge" element={<BadgePage />} />
              <Route path="/components/chip" element={<ChipPage />} />
              <Route path="/components/tabs" element={<TabsPage />} />
              <Route path="/components/progress" element={<ProgressPage />} />
              
              {/* Foundation pages */}
              <Route path="/colors" element={<Colors />} />
              <Route path="/foundations/colors" element={<Colors />} />
              <Route path="/typography" element={<Typography />} />
              <Route path="/foundations/typography" element={<Typography />} />
              <Route path="/spacing" element={<Spacing />} />
              <Route path="/foundations/spacing" element={<Spacing />} />
              <Route path="/icons" element={<Icons />} />
              <Route path="/foundations/icons" element={<Icons />} />
              <Route path="/foundations/brand" element={<Brand />} />
              
              {/* UI Kit page */}
              <Route path="/ui-kit" element={<UIKit />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
