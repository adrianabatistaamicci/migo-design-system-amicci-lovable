import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import ToneAndVoice from '@/pages/guidelines/ToneAndVoice';
import IndexPage from '@/pages/IndexPage';
const UIKit = React.lazy(() => import('@/pages/UIKit'));
const Installation = React.lazy(() => import('@/pages/Installation'));
const TechnicalGovernance = React.lazy(() => import('@/pages/guidelines/TechnicalGovernance'));
const UXGuidelines = React.lazy(() => import('@/pages/guidelines/UXGuidelines'));
const Components = React.lazy(() => import('@/pages/Components'));
const Avatar = React.lazy(() => import('@/pages/components/Avatar'));
const ChipComponent = React.lazy(() => import('@/pages/components/Chip'));
const BadgeComponent = React.lazy(() => import('@/pages/components/Badge'));
const ContextualHelp = React.lazy(() => import('@/pages/components/ContextualHelp'));
const Dropdown = React.lazy(() => import('@/pages/components/Dropdown'));
const Buttons = React.lazy(() => import('@/pages/components/Buttons'));
const IconButtonComponent = React.lazy(() => import('@/pages/components/IconButton'));
const ButtonGroups = React.lazy(() => import('@/pages/components/ButtonGroups'));
const ProfileButton = React.lazy(() => import('@/pages/components/ProfileButton'));
const LinkComponent = React.lazy(() => import('@/pages/components/Link'));
const Accordions = React.lazy(() => import('@/pages/components/Accordions'));
const Tooltips = React.lazy(() => import('@/pages/components/Tooltips'));
const DescriptionLists = React.lazy(() => import('@/pages/components/DescriptionLists'));
const Stats = React.lazy(() => import('@/pages/components/Stats'));
const Calendars = React.lazy(() => import('@/pages/components/Calendars'));
const StackedLists = React.lazy(() => import('@/pages/components/StackedLists'));
const Table = React.lazy(() => import('@/pages/components/Table'));
const GridLists = React.lazy(() => import('@/pages/components/GridLists'));
const Feeds = React.lazy(() => import('@/pages/components/Feeds'));
const FormLayouts = React.lazy(() => import('@/pages/components/FormLayouts'));
const SignInRegistration = React.lazy(() => import('@/pages/components/SignInRegistration'));
const Input = React.lazy(() => import('@/pages/components/Input'));
const Select = React.lazy(() => import('@/pages/components/Select'));
const Textareas = React.lazy(() => import('@/pages/components/Textareas'));
const RadioGroupComponent = React.lazy(() => import('@/pages/components/RadioGroup'));
const Checkboxes = React.lazy(() => import('@/pages/components/Checkboxes'));
const Toggle = React.lazy(() => import('@/pages/components/Toggle'));
const Slider = React.lazy(() => import('@/pages/components/Slider'));
const ActionPanels = React.lazy(() => import('@/pages/components/ActionPanels'));
const Alert = React.lazy(() => import('@/pages/components/Alert'));
const EmptyStates = React.lazy(() => import('@/pages/components/EmptyStates'));
const Navbar = React.lazy(() => import('@/pages/components/Navbar'));
const Pagination = React.lazy(() => import('@/pages/components/Pagination'));
const TabsComponent = React.lazy(() => import('@/pages/components/Tabs'));
const VerticalNavigation = React.lazy(() => import('@/pages/components/VerticalNavigation'));
const SidebarNavigation = React.lazy(() => import('@/pages/components/SidebarNavigation'));
const Breadcrumb = React.lazy(() => import('@/pages/components/Breadcrumb'));
const Stepper = React.lazy(() => import('@/pages/components/Stepper'));
const CommandBars = React.lazy(() => import('@/pages/components/CommandBars'));
const Dialog = React.lazy(() => import('@/pages/components/Dialog'));
const Drawer = React.lazy(() => import('@/pages/components/Drawer'));
const Snackbar = React.lazy(() => import('@/pages/components/Snackbar'));
const Containers = React.lazy(() => import('@/pages/components/Containers'));
const Cards = React.lazy(() => import('@/pages/components/Cards'));
const ListContainers = React.lazy(() => import('@/pages/components/ListContainers'));
const MediaObjects = React.lazy(() => import('@/pages/components/MediaObjects'));
const Dividers = React.lazy(() => import('@/pages/components/Dividers'));
const Skeleton = React.lazy(() => import('@/pages/components/Skeleton'));
const Library = React.lazy(() => import('@/pages/components/Library'));
const HomeScreens = React.lazy(() => import('@/pages/components/HomeScreens'));
const DetailScreens = React.lazy(() => import('@/pages/components/DetailScreens'));
const SettingsScreens = React.lazy(() => import('@/pages/components/SettingsScreens'));
const ProjectsScreens = React.lazy(() => import('@/pages/components/ProjectsScreens'));
const MarketplaceScreens = React.lazy(() => import('@/pages/components/MarketplaceScreens'));
const FigmaLibrary = React.lazy(() => import('@/pages/resources/FigmaLibrary'));
const Handoff = React.lazy(() => import('@/pages/resources/Handoff'));
const FAQ = React.lazy(() => import('@/pages/resources/FAQ'));
const StackedLayouts = React.lazy(() => import('@/pages/components/StackedLayouts'));
const SidebarLayouts = React.lazy(() => import('@/pages/components/SidebarLayouts'));
const MultiColumnLayouts = React.lazy(() => import('@/pages/components/MultiColumnLayouts'));
const PageHeadings = React.lazy(() => import('@/pages/components/PageHeadings'));
const TitleHeadings = React.lazy(() => import('@/pages/components/TitleHeadings'));
const CardHeadings = React.lazy(() => import('@/pages/components/CardHeadings'));
const SectionHeadings = React.lazy(() => import('@/pages/components/SectionHeadings'));

function App() {
  return (
    <Suspense fallback={<div className="w-screen h-screen flex items-center justify-center">Carregando...</div>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<IndexPage />} />
          <Route path="ui-kit" element={<UIKit />} />
          <Route path="components" element={<Components />} />
          <Route path="installation" element={<Installation />} />
          
          {/* Guidelines */}
          <Route path="guidelines/technical-governance" element={<TechnicalGovernance />} />
          <Route path="guidelines/ux-guidelines" element={<UXGuidelines />} />
          <Route path="guidelines/tone-and-voice" element={<ToneAndVoice />} />
          
          {/* Components */}
          <Route path="components/avatar" element={<Avatar />} />
          <Route path="components/chip" element={<ChipComponent />} />
          <Route path="components/badge" element={<BadgeComponent />} />
          <Route path="components/contextual-help" element={<ContextualHelp />} />
          <Route path="components/dropdown" element={<Dropdown />} />
          <Route path="components/buttons" element={<Buttons />} />
          <Route path="components/icon-button" element={<IconButtonComponent />} />
          <Route path="components/button-groups" element={<ButtonGroups />} />
          <Route path="components/profile-button" element={<ProfileButton />} />
          <Route path="components/link" element={<LinkComponent />} />
          <Route path="components/accordion" element={<Accordions />} />
          <Route path="components/tooltips" element={<Tooltips />} />
          <Route path="components/description-lists" element={<DescriptionLists />} />
          <Route path="components/stats" element={<Stats />} />
          <Route path="components/calendars" element={<Calendars />} />
          <Route path="components/stacked-lists" element={<StackedLists />} />
          <Route path="components/table" element={<Table />} />
          <Route path="components/grid-lists" element={<GridLists />} />
          <Route path="components/feeds" element={<Feeds />} />
          <Route path="components/form-layouts" element={<FormLayouts />} />
          <Route path="components/sign-in-registration" element={<SignInRegistration />} />
          <Route path="components/input" element={<Input />} />
          <Route path="components/select" element={<Select />} />
          <Route path="components/textareas" element={<Textareas />} />
          <Route path="components/radio-group" element={<RadioGroupComponent />} />
          <Route path="components/checkbox" element={<Checkboxes />} />
          <Route path="components/toggle" element={<Toggle />} />
          <Route path="components/slider" element={<Slider />} />
          <Route path="components/action-panels" element={<ActionPanels />} />
          <Route path="components/alert" element={<Alert />} />
          <Route path="components/empty-states" element={<EmptyStates />} />
          <Route path="components/navbar" element={<Navbar />} />
          <Route path="components/pagination" element={<Pagination />} />
          <Route path="components/tabs" element={<TabsComponent />} />
          <Route path="components/vertical-navigation" element={<VerticalNavigation />} />
          <Route path="components/sidebar-navigation" element={<SidebarNavigation />} />
          <Route path="components/breadcrumb" element={<Breadcrumb />} />
          <Route path="components/stepper" element={<Stepper />} />
          <Route path="components/command-bars" element={<CommandBars />} />
          <Route path="components/dialog" element={<Dialog />} />
          <Route path="components/drawer" element={<Drawer />} />
          <Route path="components/snackbar" element={<Snackbar />} />
          <Route path="components/containers" element={<Containers />} />
          <Route path="components/cards" element={<Cards />} />
          <Route path="components/list-containers" element={<ListContainers />} />
          <Route path="components/media-objects" element={<MediaObjects />} />
          <Route path="components/dividers" element={<Dividers />} />
          <Route path="components/skeleton" element={<Skeleton />} />
          <Route path="components/library" element={<Library />} />
          
          {/* Template */}
          <Route path="components/home-screens" element={<HomeScreens />} />
          <Route path="components/detail-screens" element={<DetailScreens />} />
          <Route path="components/settings-screens" element={<SettingsScreens />} />
          <Route path="components/projects-screens" element={<ProjectsScreens />} />
          <Route path="components/marketplace-screens" element={<MarketplaceScreens />} />
          
          {/* Resources */}
          <Route path="resources/figma-library" element={<FigmaLibrary />} />
          <Route path="resources/handoff" element={<Handoff />} />
          <Route path="resources/faq" element={<FAQ />} />

          {/* Application Shells */}
          <Route path="components/stacked-layouts" element={<StackedLayouts />} />
          <Route path="components/sidebar-layouts" element={<SidebarLayouts />} />
          <Route path="components/multi-column-layouts" element={<MultiColumnLayouts />} />

          {/* Headings */}
          <Route path="components/page-headings" element={<PageHeadings />} />
          <Route path="components/title-headings" element={<TitleHeadings />} />
          <Route path="components/card-headings" element={<CardHeadings />} />
          <Route path="components/section-headings" element={<SectionHeadings />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
