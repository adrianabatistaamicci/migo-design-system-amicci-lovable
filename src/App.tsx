
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Index from "./pages/Index";
import Installation from "./pages/Installation";
import Guidelines from "./pages/Guidelines";
import TechnicalGovernance from "./pages/guidelines/TechnicalGovernance";
import UXGuidelines from "./pages/guidelines/UXGuidelines";
import Components from "./pages/Components";
import ComponentDetail from "./pages/ComponentDetail";
import NotFound from "./pages/NotFound";
import UIKit from "./pages/UIKit";
import ProtectedRoute from "./components/ProtectedRoute";
import SignInRegistration from "./pages/components/SignInRegistration";

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
              <Route path="/installation" element={
                <ProtectedRoute>
                  <Installation />
                </ProtectedRoute>
              } />
              <Route path="/guidelines" element={
                <ProtectedRoute>
                  <Guidelines />
                </ProtectedRoute>
              } />
              <Route path="/guidelines/technical-governance" element={
                <ProtectedRoute>
                  <TechnicalGovernance />
                </ProtectedRoute>
              } />
              <Route path="/guidelines/ux-guidelines" element={
                <ProtectedRoute>
                  <UXGuidelines />
                </ProtectedRoute>
              } />
              <Route path="/ui-kit" element={
                <ProtectedRoute>
                  <UIKit />
                </ProtectedRoute>
              } />
              <Route path="/components" element={<Components />} />
              <Route path="/components/:componentId" element={<ComponentDetail />} />
              <Route path="/components/sign-in-registration" element={<SignInRegistration />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
