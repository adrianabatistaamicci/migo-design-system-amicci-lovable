
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
import LibraryPage from "./pages/components/Library";
import TogglePage from "./pages/components/Toggle";
import ContainersPage from "./pages/components/Containers";
import StackedLayoutsPage from "./pages/components/StackedLayouts";
import SidebarLayoutsPage from "./pages/components/SidebarLayouts";
import MultiColumnLayoutsPage from "./pages/components/MultiColumnLayouts";
// Import new component pages
import PageHeadingsPage from "./pages/components/PageHeadings";
import CardHeadingsPage from "./pages/components/CardHeadings";
import SectionHeadingsPage from "./pages/components/SectionHeadings";
import DescriptionListsPage from "./pages/components/DescriptionLists";
import StatsPage from "./pages/components/Stats";
import CalendarsPage from "./pages/components/Calendars";
import StackedListsPage from "./pages/components/StackedLists";
import TablesPage from "./pages/components/Tables";
import GridListsPage from "./pages/components/GridLists";
import FeedsPage from "./pages/components/Feeds";
import FormLayoutsPage from "./pages/components/FormLayouts";
import SignInRegistrationPage from "./pages/components/SignInRegistration";
import TextareasPage from "./pages/components/Textareas";
import ActionPanelsPage from "./pages/components/ActionPanels";
import AlertsToastsPage from "./pages/components/AlertsToasts";
import EmptyStatesPage from "./pages/components/EmptyStates";
import NavbarPage from "./pages/components/Navbar";
import PaginationPage from "./pages/components/Pagination";
import VerticalNavigationPage from "./pages/components/VerticalNavigation";
import SidebarNavigationPage from "./pages/components/SidebarNavigation";
import BreadcrumbsPage from "./pages/components/Breadcrumbs";
import ProgressSteppersPage from "./pages/components/ProgressSteppers";
import CommandBarsPage from "./pages/components/CommandBars";
import ModalDialogsPage from "./pages/components/ModalDialogs";
import DrawersPage from "./pages/components/Drawers";
import NotificationToastsPage from "./pages/components/NotificationToasts";
import DropdownsPage from "./pages/components/Dropdowns";
import ButtonGroupsPage from "./pages/components/ButtonGroups";
import AccordionsPage from "./pages/components/Accordions";
import TooltipsPage from "./pages/components/Tooltips";
import CardsPage from "./pages/components/Cards";
import ListContainersPage from "./pages/components/ListContainers";
import MediaObjectsPage from "./pages/components/MediaObjects";
import DividersPage from "./pages/components/Dividers";
import SkeletonsPage from "./pages/components/Skeletons";
import HomeScreensPage from "./pages/components/HomeScreens";
import DetailScreensPage from "./pages/components/DetailScreens";
import SettingsScreensPage from "./pages/components/SettingsScreens";
import ProjectsScreensPage from "./pages/components/ProjectsScreens";
import MarketplaceScreensPage from "./pages/components/MarketplaceScreens";
import FigmaLibraryPage from "./pages/components/FigmaLibrary";
import FAQPage from "./pages/components/FAQ";

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
              <Route path="/components/library" element={<LibraryPage />} />
              <Route path="/components/toggle" element={<TogglePage />} />
              <Route path="/components/containers" element={<ContainersPage />} />
              <Route path="/components/stacked-layouts" element={<StackedLayoutsPage />} />
              <Route path="/components/sidebar-layouts" element={<SidebarLayoutsPage />} />
              <Route path="/components/multi-column-layouts" element={<MultiColumnLayoutsPage />} />
              
              {/* New component routes */}
              <Route path="/components/page-headings" element={<PageHeadingsPage />} />
              <Route path="/components/card-headings" element={<CardHeadingsPage />} />
              <Route path="/components/section-headings" element={<SectionHeadingsPage />} />
              <Route path="/components/description-lists" element={<DescriptionListsPage />} />
              <Route path="/components/stats" element={<StatsPage />} />
              <Route path="/components/calendars" element={<CalendarsPage />} />
              <Route path="/components/stacked-lists" element={<StackedListsPage />} />
              <Route path="/components/tables" element={<TablesPage />} />
              <Route path="/components/grid-lists" element={<GridListsPage />} />
              <Route path="/components/feeds" element={<FeedsPage />} />
              <Route path="/components/form-layouts" element={<FormLayoutsPage />} />
              <Route path="/components/sign-in-registration" element={<SignInRegistrationPage />} />
              <Route path="/components/textareas" element={<TextareasPage />} />
              <Route path="/components/action-panels" element={<ActionPanelsPage />} />
              <Route path="/components/alerts-toasts" element={<AlertsToastsPage />} />
              <Route path="/components/empty-states" element={<EmptyStatesPage />} />
              <Route path="/components/navbar" element={<NavbarPage />} />
              <Route path="/components/pagination" element={<PaginationPage />} />
              <Route path="/components/vertical-navigation" element={<VerticalNavigationPage />} />
              <Route path="/components/sidebar-navigation" element={<SidebarNavigationPage />} />
              <Route path="/components/breadcrumbs" element={<BreadcrumbsPage />} />
              <Route path="/components/progress-steppers" element={<ProgressSteppersPage />} />
              <Route path="/components/command-bars" element={<CommandBarsPage />} />
              <Route path="/components/modal-dialogs" element={<ModalDialogsPage />} />
              <Route path="/components/drawers" element={<DrawersPage />} />
              <Route path="/components/notification-toasts" element={<NotificationToastsPage />} />
              <Route path="/components/dropdowns" element={<DropdownsPage />} />
              <Route path="/components/button-groups" element={<ButtonGroupsPage />} />
              <Route path="/components/accordions" element={<AccordionsPage />} />
              <Route path="/components/tooltips" element={<TooltipsPage />} />
              <Route path="/components/cards" element={<CardsPage />} />
              <Route path="/components/list-containers" element={<ListContainersPage />} />
              <Route path="/components/media-objects" element={<MediaObjectsPage />} />
              <Route path="/components/dividers" element={<DividersPage />} />
              <Route path="/components/skeletons" element={<SkeletonsPage />} />
              <Route path="/components/home-screens" element={<HomeScreensPage />} />
              <Route path="/components/detail-screens" element={<DetailScreensPage />} />
              <Route path="/components/settings-screens" element={<SettingsScreensPage />} />
              <Route path="/components/projects-screens" element={<ProjectsScreensPage />} />
              <Route path="/components/marketplace-screens" element={<MarketplaceScreensPage />} />
              <Route path="/components/figma-library" element={<FigmaLibraryPage />} />
              <Route path="/components/faq" element={<FAQPage />} />
              
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
