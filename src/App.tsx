
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import IndexPage from './pages/Index';
import UIKit from './pages/UIKit';
import ToneAndVoice from './pages/introduction/ToneAndVoice';
import TechnicalGovernance from './pages/guidelines/TechnicalGovernance';
import UXGuidelines from './pages/guidelines/UXGuidelines';
import Installation from './pages/Installation';
import Colors from './pages/Colors';
import Typography from './pages/Typography';
import Spacing from './pages/Spacing';
import Icons from './pages/Icons';
import Components from './pages/Components';
import NotFound from './pages/NotFound';

// Import existing component pages
import Brand from './pages/foundations/Brand';
import EmptyStatesPage from './pages/components/EmptyStates';
import SidebarNavigationPage from './pages/components/SidebarNavigation';
import SkeletonPage from './pages/components/Skeleton';
import SliderPage from './pages/components/Slider';
import SelectPage from './pages/components/Select';
import ButtonPage from './pages/components/ButtonPage';
import AvatarPage from './pages/components/Avatar';
import AccordionsPage from './pages/components/Accordions';
import SettingsScreensPage from './pages/components/SettingsScreens';
import DrawersPage from './pages/components/Drawers';
import DropdownsPage from './pages/components/Dropdowns';
import AlertsToastsPage from './pages/components/AlertsToasts';
import ActionPanelsPage from './pages/components/ActionPanels';
import FAQPage from './pages/components/FAQ';
import FeedsPage from './pages/components/Feeds';
import GridListsPage from './pages/components/GridLists';
import FormLayoutsPage from './pages/components/FormLayouts';
import HomeScreensPage from './pages/components/HomeScreens';
import SignInRegistrationPage from './pages/components/SignInRegistration';

// Import UI components
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

// Import placeholder components (these will be created below)
import InputPage from './pages/components/InputPage';
import CheckboxPage from './pages/components/CheckboxPage';
import RadioPage from './pages/components/RadioPage';
import SwitchPage from './pages/components/SwitchPage';
import Badge from './pages/components/BadgePage';
import ChipPage from './pages/components/ChipPage';
import ContextualHelp from './pages/components/ContextualHelp';
import TabsPage from './pages/components/TabsPage';
import ProgressPage from './pages/components/ProgressPage';
import LibraryPage from './pages/components/LibraryPage';
import TogglePage from './pages/components/TogglePage';
import Containers from './pages/components/Containers';
import StackedLayoutsPage from './pages/components/StackedLayoutsPage';
import SidebarLayoutsPage from './pages/components/SidebarLayoutsPage';
import MultiColumnLayouts from './pages/components/MultiColumnLayouts';
import PageHeadings from './pages/components/PageHeadings';
import TitleHeadings from './pages/components/TitleHeadings';
import CardHeadings from './pages/components/CardHeadings';
import SectionHeadingsPage from './pages/components/SectionHeadingsPage';
import DescriptionLists from './pages/components/DescriptionLists';
import Stats from './pages/components/Stats';
import Calendars from './pages/components/Calendars';
import StackedListsPage from './pages/components/StackedListsPage';
import Tables from './pages/components/Tables';
import Textareas from './pages/components/Textareas';
import NavbarPage from './pages/components/NavbarPage';
import Pagination from './pages/components/Pagination';
import VerticalNavigation from './pages/components/VerticalNavigation';
import Breadcrumbs from './pages/components/Breadcrumbs';
import ProgressSteppersPage from './pages/components/ProgressSteppersPage';
import CommandBars from './pages/components/CommandBars';
import ModalDialogs from './pages/components/ModalDialogs';
import NotificationToasts from './pages/components/NotificationToasts';
import ButtonGroups from './pages/components/ButtonGroups';
import Tooltips from './pages/components/Tooltips';
import Cards from './pages/components/Cards';
import ListContainersPage from './pages/components/ListContainersPage';
import MediaObjects from './pages/components/MediaObjects';
import Dividers from './pages/components/Dividers';
import DetailScreens from './pages/components/DetailScreens';
import ProjectsScreensPage from './pages/components/ProjectsScreensPage';
import FigmaLibraryPage from './pages/resources/FigmaLibraryPage';
import Handoff from './pages/resources/Handoff';
import ProfileButtonPage from './pages/components/ProfileButtonPage';
import IconButtonPage from './pages/components/IconButtonPage';
import LinkPage from './pages/components/LinkPage';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<IndexPage />} />
              <Route path="ui-kit" element={<UIKit />} />
              <Route path="introduction/tone-and-voice" element={<ToneAndVoice />} />
              <Route path="guidelines/technical-governance" element={<TechnicalGovernance />} />
              <Route path="guidelines/ux-guidelines" element={<UXGuidelines />} />
              <Route path="installation" element={<Installation />} />
              
              <Route path="foundations/colors" element={<Colors />} />
              <Route path="foundations/typography" element={<Typography />} />
              <Route path="foundations/spacing" element={<Spacing />} />
              <Route path="foundations/icons" element={<Icons />} />
              <Route path="foundations/brand" element={<Brand />} />
              
              <Route path="components" element={<Components />} />
              
              <Route path="components/input" element={<InputPage />} />
              <Route path="components/checkbox" element={<CheckboxPage />} />
              <Route path="components/radio" element={<RadioPage />} />
              <Route path="components/radio-group" element={<RadioPage />} />
              <Route path="components/select" element={<SelectPage />} />
              <Route path="components/slider" element={<SliderPage />} />
              <Route path="components/switch" element={<SwitchPage />} />
              <Route path="components/avatar" element={<AvatarPage />} />
              <Route path="components/badge" element={<Badge />} />
              <Route path="components/chip" element={<ChipPage />} />
              <Route path="components/contextual-help" element={<ContextualHelp />} />
              <Route path="components/tabs" element={<TabsPage />} />
              <Route path="components/progress" element={<ProgressPage />} />
              <Route path="components/library" element={<LibraryPage />} />
              <Route path="components/toggle" element={<TogglePage />} />
              <Route path="components/containers" element={<Containers />} />
              <Route path="components/stacked-layouts" element={<StackedLayoutsPage />} />
              <Route path="components/sidebar-layouts" element={<SidebarLayoutsPage />} />
              <Route path="components/multi-column-layouts" element={<MultiColumnLayouts />} />
              <Route path="components/page-headings" element={<PageHeadings />} />
              <Route path="components/title-headings" element={<TitleHeadings />} />
              <Route path="components/card-headings" element={<CardHeadings />} />
              <Route path="components/section-headings" element={<SectionHeadingsPage />} />
              <Route path="components/description-lists" element={<DescriptionLists />} />
              <Route path="components/stats" element={<Stats />} />
              <Route path="components/calendars" element={<Calendars />} />
              <Route path="components/stacked-lists" element={<StackedListsPage />} />
              <Route path="components/tables" element={<Tables />} />
              <Route path="components/grid-lists" element={<GridListsPage />} />
              <Route path="components/feeds" element={<FeedsPage />} />
              <Route path="components/form-layouts" element={<FormLayoutsPage />} />
              <Route path="components/sign-in-registration" element={<SignInRegistrationPage />} />
              <Route path="components/textareas" element={<Textareas />} />
              <Route path="components/action-panels" element={<ActionPanelsPage />} />
              <Route path="components/alerts-toasts" element={<AlertsToastsPage />} />
              <Route path="components/empty-states" element={<EmptyStatesPage />} />
              <Route path="components/navbar" element={<NavbarPage />} />
              <Route path="components/pagination" element={<Pagination />} />
              <Route path="components/vertical-navigation" element={<VerticalNavigation />} />
              <Route path="components/sidebar-navigation" element={<SidebarNavigationPage />} />
              <Route path="components/breadcrumb" element={<Breadcrumbs />} />
              <Route path="components/progress-steppers" element={<ProgressSteppersPage />} />
              <Route path="components/command-bars" element={<CommandBars />} />
              <Route path="components/modal-dialogs" element={<ModalDialogs />} />
              <Route path="components/drawer" element={<DrawersPage />} />
              <Route path="components/notification-toasts" element={<NotificationToasts />} />
              <Route path="components/dropdown" element={<DropdownsPage />} />
              <Route path="components/button-groups" element={<ButtonGroups />} />
              <Route path="components/accordion" element={<AccordionsPage />} />
              <Route path="components/tooltips" element={<Tooltips />} />
              <Route path="components/cards" element={<Cards />} />
              <Route path="components/list-containers" element={<ListContainersPage />} />
              <Route path="components/media-objects" element={<MediaObjects />} />
              <Route path="components/divider" element={<Dividers />} />
              <Route path="components/skeleton" element={<SkeletonPage />} />
              <Route path="components/home-screens" element={<HomeScreensPage />} />
              <Route path="components/detail-screens" element={<DetailScreens />} />
              <Route path="components/settings-screens" element={<SettingsScreensPage />} />
              <Route path="components/projects-screens" element={<ProjectsScreensPage />} />
              <Route path="components/marketplace-screens" element={<NotificationToasts />} />
              <Route path="resources/figma-library" element={<FigmaLibraryPage />} />
              <Route path="resources/faq" element={<FAQPage />} />
              <Route path="resources/handoff" element={<Handoff />} />
              <Route path="components/profile-button" element={<ProfileButtonPage />} />
              <Route path="components/icon-button" element={<IconButtonPage />} />
              <Route path="components/link" element={<LinkPage />} />
              <Route path="colors" element={<Colors />} />
              <Route path="foundations/colors" element={<Colors />} />
              <Route path="typography" element={<Typography />} />
              <Route path="foundations/typography" element={<Typography />} />
              <Route path="spacing" element={<Spacing />} />
              <Route path="foundations/spacing" element={<Spacing />} />
              <Route path="icons" element={<Icons />} />
              <Route path="foundations/icons" element={<Icons />} />
              <Route path="foundations/brand" element={<Brand />} />
              <Route path="components/dividers" element={<Dividers />} />
              <Route path="components/buttons" element={<ButtonPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
