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
              
              <Route path="/components/input" element={<InputPage />} />
              <Route path="/components/checkbox" element={<CheckboxPage />} />
              <Route path="/components/radio" element={<RadioPage />} />
              <Route path="/components/radio-group" element={<RadioPage />} />
              <Route path="/components/select" element={<SelectPage />} />
              <Route path="/components/slider" element={<SliderPage />} />
              <Route path="/components/switch" element={<SwitchPage />} />
              <Route path="/components/avatar" element={<Avatar />} />
              <Route path="/components/badge" element={<Badge />} />
              <Route path="/components/chip" element={<ChipPage />} />
              <Route path="/components/tabs" element={<TabsPage />} />
              <Route path="/components/progress" element={<ProgressPage />} />
              <Route path="/components/library" element={<LibraryPage />} />
              <Route path="/components/toggle" element={<TogglePage />} />
              <Route path="/components/containers" element={<Containers />} />
              <Route path="/components/stacked-layouts" element={<StackedLayoutsPage />} />
              <Route path="/components/sidebar-layouts" element={<SidebarLayoutsPage />} />
              <Route path="/components/multi-column-layouts" element={<MultiColumnLayouts />} />
              <Route path="/components/page-headings" element={<PageHeadings />} />
              <Route path="/components/title-headings" element={<TitleHeadings />} />
              <Route path="/components/card-headings" element={<CardHeadings />} />
              <Route path="/components/section-headings" element={<SectionHeadingsPage />} />
              <Route path="/components/description-lists" element={<DescriptionLists />} />
              <Route path="/components/stats" element={<Stats />} />
              <Route path="/components/calendars" element={<Calendars />} />
              <Route path="/components/stacked-lists" element={<StackedListsPage />} />
              <Route path="/components/tables" element={<Tables />} />
              <Route path="/components/grid-lists" element={<GridListsPage />} />
              <Route path="/components/feeds" element={<FeedsPage />} />
              <Route path="/components/form-layouts" element={<FormLayoutsPage />} />
              <Route path="/components/sign-in-registration" element={<SignInRegistrationPage />} />
              <Route path="/components/textareas" element={<Textareas />} />
              <Route path="/components/action-panels" element={<ActionPanels />} />
              <Route path="/components/alerts-toasts" element={<AlertsToasts />} />
              <Route path="/components/empty-states" element={<EmptyStatesPage />} />
              <Route path="/components/navbar" element={<NavbarPage />} />
              <Route path="/components/pagination" element={<Pagination />} />
              <Route path="/components/vertical-navigation" element={<VerticalNavigation />} />
              <Route path="/components/sidebar-navigation" element={<SidebarNavigationPage />} />
              <Route path="/components/breadcrumb" element={<Breadcrumbs />} />
              <Route path="/components/progress-steppers" element={<ProgressSteppersPage />} />
              <Route path="/components/command-bars" element={<CommandBars />} />
              <Route path="/components/modal-dialogs" element={<ModalDialogs />} />
              <Route path="/components/drawer" element={<DrawersPage />} />
              <Route path="/components/notification-toasts" element={<NotificationToasts />} />
              <Route path="/components/dropdown" element={<DropdownsPage />} />
              <Route path="/components/button-groups" element={<ButtonGroups />} />
              <Route path="/components/accordion" element={<Accordions />} />
              <Route path="/components/tooltips" element={<Tooltips />} />
              <Route path="/components/cards" element={<Cards />} />
              <Route path="/components/list-containers" element={<ListContainersPage />} />
              <Route path="/components/media-objects" element={<MediaObjects />} />
              <Route path="/components/divider" element={<Dividers />} />
              <Route path="/components/skeleton" element={<SkeletonPage />} />
              <Route path="/components/home-screens" element={<HomeScreensPage />} />
              <Route path="/components/detail-screens" element={<DetailScreens />} />
              <Route path="/components/settings-screens" element={<SettingsScreensPage />} />
              <Route path="/components/projects-screens" element={<ProjectsScreensPage />} />
              <Route path="/components/marketplace-screens" element={<NotificationToasts />} />
              <Route path="/resources/figma-library" element={<FigmaLibraryPage />} />
              <Route path="/resources/faq" element={<FAQPage />} />
              <Route path="/resources/handoff" element={<Handoff />} />
              <Route path="/components/profile-button" element={<ProfileButtonPage />} />
              <Route path="/components/icon-button" element={<IconButtonPage />} />
              <Route path="/components/link" element={<LinkPage />} />
              <Route path="/colors" element={<Colors />} />
              <Route path="/foundations/colors" element={<Colors />} />
              <Route path="/typography" element={<Typography />} />
              <Route path="/foundations/typography" element={<Typography />} />
              <Route path="/spacing" element={<Spacing />} />
              <Route path="/foundations/spacing" element={<Spacing />} />
              <Route path="/icons" element={<Icons />} />
              <Route path="/foundations/icons" element={<Icons />} />
              <Route path="/foundations/brand" element={<Brand />} />
              <Route path="/components/dividers" element={<Dividers />} />
              <Route path="/components/buttons" element={<ButtonPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
