
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import AdminLayout from './layouts/AdminLayout'
import ProtectedRoute from './components/auth/ProtectedRoute'
import Home from './pages/Index'
import UXGuidelines from './pages/guidelines/UXGuidelines'
import TomEVoz from './pages/guidelines/TomEVoz'
import UIKit from './pages/UIKit'
import SidebarNavigation from './pages/components/SidebarNavigation'
import Library from './pages/components/Library'
import CommandBars from './pages/components/CommandBars'
import Installation from './pages/Installation'
import Colors from './pages/Colors'
import Typography from './pages/foundations/Typography'
import Guidelines from './pages/Guidelines'
import NotFound from './pages/NotFound'
import CardHeadings from './pages/components/CardHeadings'
import SectionHeadings from './pages/components/SectionHeadings'
import Avatar from './pages/components/Avatar'
import Chip from './pages/components/Chip'
import Badge from './pages/components/Badge'
import ContextualHelp from './pages/components/ContextualHelp'
import Dropdown from './pages/components/Dropdowns'
import PageHeadings from './pages/components/PageHeadings'
import AlertsToasts from './pages/components/AlertsToasts'
import ActionPanels from './pages/components/ActionPanels'
import Button from './pages/components/Button'
import ButtonGroups from './pages/components/ButtonGroups'
import IconButton from './pages/components/IconButton'
import ProfileButton from './pages/components/ProfileButton'
import Link from './pages/components/Link'
import Accordion from './pages/components/Accordions'
import Tooltip from './pages/components/Tooltips'
import DescriptionList from './pages/components/DescriptionLists'
import Stats from './pages/components/Stats'
import Calendar from './pages/components/Calendars'
import StackedList from './pages/components/StackedLists'
import Table from './pages/components/Tables'
import GridList from './pages/components/GridLists'
import Feed from './pages/components/Feeds'
import FormLayout from './pages/components/FormLayouts'
import SignInRegistration from './pages/components/SignInRegistration'
import Input from './pages/components/Input'
import Select from './pages/components/Select'
import Textarea from './pages/components/Textareas'
import Radio from './pages/components/Radio'
import Checkbox from './pages/components/Checkbox'
import Toggle from './pages/components/Toggle'
import Slider from './pages/components/Slider'
import EmptyState from './pages/components/EmptyStates'
import Navbar from './pages/components/Navbar'
import Pagination from './pages/components/Pagination'
import Tab from './pages/components/Tabs'
import VerticalNavigation from './pages/components/VerticalNavigation'
import Breadcrumb from './pages/components/Breadcrumbs'
import ProgressStepper from './pages/components/ProgressSteppers'
import Modal from './pages/components/ModalDialogs'
import Drawer from './pages/components/Drawers'
import NotificationToast from './pages/components/NotificationToasts'
import Container from './pages/components/Containers'
import Card from './pages/components/Cards'
import ListContainer from './pages/components/ListContainers'
import MediaObject from './pages/components/MediaObjects'
import Divider from './pages/components/Dividers'
import Skeleton from './pages/components/Skeleton'
import HomeScreen from './pages/components/HomeScreens'
import DetailScreen from './pages/components/DetailScreens'
import SettingsScreen from './pages/components/SettingsScreens'
import ProjectsScreen from './pages/components/ProjectsScreens'
import MarketplaceScreen from './pages/components/MarketplaceScreens'
import ErrorScreens from './pages/components/ErrorScreens'
import FigmaLibrary from './pages/components/FigmaLibrary'
import Handoff from './pages/resources/Handoff'
import FAQ from './pages/components/FAQ'
import StackedLayout from './pages/components/StackedLayouts'
import SidebarLayout from './pages/components/SidebarLayouts'
import MultiColumnLayout from './pages/components/MultiColumnLayouts'
import TitleHeading from './pages/components/TitleHeadings'
import Icons from './pages/Icons'
import Spacing from './pages/Spacing'
import Brand from './pages/foundations/Brand'
import TechnicalGovernance from './pages/guidelines/TechnicalGovernance'

// Admin pages
import AdminLogin from './pages/admin/Login'
import Dashboard from './pages/admin/Dashboard'
import EditPages from './pages/admin/EditPages'
import PageEditor from './pages/admin/PageEditor'
import Settings from './pages/admin/Settings'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/ui-kit" element={<UIKit />} />
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/guidelines/ux-guidelines" element={<UXGuidelines />} />
          <Route path="/guidelines/tom-e-voz" element={<TomEVoz />} />
          <Route path="/guidelines/technical-governance" element={<TechnicalGovernance />} />
          <Route path="/installation" element={<Installation />} />
          
          <Route path="/foundations/colors" element={<Colors />} />
          <Route path="/foundations/typography" element={<Typography />} />
          <Route path="/foundations/spacing" element={<Spacing />} />
          <Route path="/foundations/icons" element={<Icons />} />
          <Route path="/foundations/brand" element={<Brand />} />
          
          <Route path="/components/stacked-layouts" element={<StackedLayout />} />
          <Route path="/components/sidebar-layouts" element={<SidebarLayout />} />
          <Route path="/components/multi-column-layouts" element={<MultiColumnLayout />} />
          
          <Route path="/components/page-headings" element={<PageHeadings />} />
          <Route path="/components/title-headings" element={<TitleHeading />} />
          <Route path="/components/card-headings" element={<CardHeadings />} />
          <Route path="/components/section-headings" element={<SectionHeadings />} />
          
          <Route path="/components/avatar" element={<Avatar />} />
          <Route path="/components/chip" element={<Chip />} />
          <Route path="/components/badge" element={<Badge />} />
          <Route path="/components/contextual-help" element={<ContextualHelp />} />
          <Route path="/components/dropdown" element={<Dropdown />} />
          <Route path="/components/buttons" element={<Button />} />
          <Route path="/components/icon-button" element={<IconButton />} />
          <Route path="/components/button-groups" element={<ButtonGroups />} />
          <Route path="/components/profile-button" element={<ProfileButton />} />
          <Route path="/components/link" element={<Link />} />
          <Route path="/components/accordion" element={<Accordion />} />
          <Route path="/components/tooltips" element={<Tooltip />} />
          
          <Route path="/components/description-lists" element={<DescriptionList />} />
          <Route path="/components/stats" element={<Stats />} />
          <Route path="/components/calendars" element={<Calendar />} />
          
          <Route path="/components/stacked-lists" element={<StackedList />} />
          <Route path="/components/table" element={<Table />} />
          <Route path="/components/grid-lists" element={<GridList />} />
          <Route path="/components/feeds" element={<Feed />} />
          
          <Route path="/components/form-layouts" element={<FormLayout />} />
          <Route path="/components/sign-in-registration" element={<SignInRegistration />} />
          <Route path="/components/input" element={<Input />} />
          <Route path="/components/select" element={<Select />} />
          <Route path="/components/textareas" element={<Textarea />} />
          <Route path="/components/radio-group" element={<Radio />} />
          <Route path="/components/checkbox" element={<Checkbox />} />
          <Route path="/components/toggle" element={<Toggle />} />
          <Route path="/components/slider" element={<Slider />} />
          <Route path="/components/action-panels" element={<ActionPanels />} />
          
          <Route path="/components/alert" element={<AlertsToasts />} />
          <Route path="/components/empty-states" element={<EmptyState />} />
          
          <Route path="/components/navbar" element={<Navbar />} />
          <Route path="/components/pagination" element={<Pagination />} />
          <Route path="/components/tabs" element={<Tab />} />
          <Route path="/components/vertical-navigation" element={<VerticalNavigation />} />
          <Route path="/components/sidebar-navigation" element={<SidebarNavigation />} />
          <Route path="/components/breadcrumb" element={<Breadcrumb />} />
          <Route path="/components/stepper" element={<ProgressStepper />} />
          <Route path="/components/command-bars" element={<CommandBars />} />
          
          <Route path="/components/dialog" element={<Modal />} />
          <Route path="/components/drawer" element={<Drawer />} />
          <Route path="/components/snackbar" element={<NotificationToast />} />
          
          <Route path="/components/containers" element={<Container />} />
          <Route path="/components/cards" element={<Card />} />
          <Route path="/components/list-containers" element={<ListContainer />} />
          <Route path="/components/media-objects" element={<MediaObject />} />
          <Route path="/components/dividers" element={<Divider />} />
          <Route path="/components/skeleton" element={<Skeleton />} />
          <Route path="/components/library" element={<Library />} />
          
          <Route path="/components/home-screens" element={<HomeScreen />} />
          <Route path="/components/detail-screens" element={<DetailScreen />} />
          <Route path="/components/settings-screens" element={<SettingsScreen />} />
          <Route path="/components/projects-screens" element={<ProjectsScreen />} />
          <Route path="/components/marketplace-screens" element={<MarketplaceScreen />} />
          <Route path="/components/error-screens" element={<ErrorScreens />} />
          
          <Route path="/resources/figma-library" element={<FigmaLibrary />} />
          <Route path="/resources/handoff" element={<Handoff />} />
          <Route path="/resources/faq" element={<FAQ />} />
          
          <Route path="*" element={<NotFound />} />
        </Route>
        
        {/* Admin routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/edit-pages" element={<EditPages />} />
          <Route path="/admin/settings" element={<Settings />} />
          <Route path="/admin/editor/*" element={<PageEditor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
