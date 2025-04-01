
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
import Accordions from "./pages/components/Accordions";
import ActionPanels from "./pages/components/ActionPanels";
import AlertsToasts from "./pages/components/AlertsToasts";
import Avatar from "./pages/components/Avatar";
import Badge from "./pages/components/Badge";
import ButtonPage from "./pages/components/Button";
import CheckboxPage from "./pages/components/Checkbox";
import ChipPage from "./pages/components/Chip";
import Breadcrumbs from "./pages/components/Breadcrumbs";
import ButtonGroups from "./pages/components/ButtonGroups";
import Calendars from "./pages/components/Calendars";
import CardHeadings from "./pages/components/CardHeadings";
import Cards from "./pages/components/Cards";
import CommandBars from "./pages/components/CommandBars";
import Containers from "./pages/components/Containers";
import ContextualHelp from "./pages/components/ContextualHelp";
import DetailScreens from "./pages/components/DetailScreens";
import DescriptionLists from "./pages/components/DescriptionLists";
import MediaObjects from "./pages/components/MediaObjects";
import ModalDialogs from "./pages/components/ModalDialogs";
import MultiColumnLayouts from "./pages/components/MultiColumnLayouts";
import NotificationToasts from "./pages/components/NotificationToasts";
import PageHeadings from "./pages/components/PageHeadings";
import Pagination from "./pages/components/Pagination";
import Stats from "./pages/components/Stats";
import Tables from "./pages/components/Tables";
import Textareas from "./pages/components/Textareas";
import Tooltips from "./pages/components/Tooltips";
import VerticalNavigation from "./pages/components/VerticalNavigation";
import Dividers from "./pages/components/Dividers";
import DrawersPage from "./pages/components/Drawers";
import DropdownsPage from "./pages/components/Dropdowns";
import EmptyStatesPage from "./pages/components/EmptyStates";
import FAQPage from "./pages/components/FAQ";
import FeedsPage from "./pages/components/Feeds";
import FigmaLibraryPage from "./pages/components/FigmaLibrary";
import FormLayoutsPage from "./pages/components/FormLayouts";
import GridListsPage from "./pages/components/GridLists";
import HomeScreensPage from "./pages/components/HomeScreens";
import IconButtonPage from "./pages/components/IconButton";
import InputPage from "./pages/components/Input";
import LibraryPage from "./pages/components/Library";
import LinkPage from "./pages/components/Link";
import ListContainersPage from "./pages/components/ListContainers";
import NavbarPage from "./pages/components/Navbar";
import ProfileButtonPage from "./pages/components/ProfileButton";
import ProgressPage from "./pages/components/Progress";
import ProgressSteppersPage from "./pages/components/ProgressSteppers";
import ProjectsScreensPage from "./pages/components/ProjectsScreens";
import RadioPage from "./pages/components/Radio";
import SectionHeadingsPage from "./pages/components/SectionHeadings";
import SelectPage from "./pages/components/Select";
import SettingsScreensPage from "./pages/components/SettingsScreens";
import SidebarLayoutsPage from "./pages/components/SidebarLayouts";
import SidebarNavigationPage from "./pages/components/SidebarNavigation";
import SignInRegistrationPage from "./pages/components/SignInRegistration";
import SkeletonPage from "./pages/components/Skeleton";
import SliderPage from "./pages/components/Slider";
import StackedLayoutsPage from "./pages/components/StackedLayouts";
import StackedListsPage from "./pages/components/StackedLists";
import SwitchPage from "./pages/components/Switch";
import TabsPage from "./pages/components/Tabs";
import TogglePage from "./pages/components/Toggle";
import Colors from "./pages/Colors";
import Typography from "./pages/Typography";
import Spacing from "./pages/Spacing";
import Icons from "./pages/Icons";
import Brand from "./pages/foundations/Brand";
import TitleHeadings from "./pages/components/TitleHeadings";
import Handoff from "./pages/resources/Handoff";

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
              <Route path="/installation" element={<Installation />} />
              <Route path="/guidelines" element={<Guidelines />} />
              <Route path="/guidelines/technical-governance" element={<TechnicalGovernance />} />
              <Route path="/guidelines/ux-guidelines" element={<UXGuidelines />} />
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
              <Route path="/components/contextual-help" element={<ContextualHelp />} />
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
              <Route path="/ui-kit" element={<UIKit />} />
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
