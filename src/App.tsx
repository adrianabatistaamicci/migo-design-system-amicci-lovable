
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Index'  // Changed from './pages/Home' to './pages/Index'
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/ui-kit" element={<UIKit />} />
          <Route path="/guidelines/ux-guidelines" element={<UXGuidelines />} />
          <Route path="/guidelines/tom-e-voz" element={<TomEVoz />} />
          <Route path="/components/sidebar-navigation" element={<SidebarNavigation />} />
          <Route path="/components/library" element={<Library />} />
          <Route path="/components/command-bars" element={<CommandBars />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/foundations/colors" element={<Colors />} />
          <Route path="/foundations/typography" element={<Typography />} />
          <Route path="/guidelines" element={<Guidelines />} />
          
          {/* Adding routes for pages showing 404 errors in console logs */}
          <Route path="/components/card-headings" element={<CardHeadings />} />
          <Route path="/components/section-headings" element={<SectionHeadings />} />
          <Route path="/components/avatar" element={<Avatar />} />
          <Route path="/components/chip" element={<Chip />} />
          <Route path="/components/badge" element={<Badge />} />
          <Route path="/components/contextual-help" element={<ContextualHelp />} />
          <Route path="/components/dropdown" element={<Dropdown />} />
          <Route path="/components/page-headings" element={<PageHeadings />} />
          <Route path="/components/alert" element={<AlertsToasts />} />
          <Route path="/components/action-panels" element={<ActionPanels />} />
          
          {/* Catch all route for 404 pages */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
