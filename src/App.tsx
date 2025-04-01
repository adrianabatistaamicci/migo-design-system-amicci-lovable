
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Index'  // Changed from './pages/Home' to './pages/Index'
import UXGuidelines from './pages/guidelines/UXGuidelines'
import TomEVoz from './pages/guidelines/TomEVoz'
import UIKit from './pages/UIKit'
import SidebarNavigation from './pages/components/SidebarNavigation'
import Library from './pages/components/Library'
import CommandBars from './pages/components/CommandBars'
import TechnicalGovernance from './pages/guidelines/TechnicalGovernance'

function App() {
  const isProduction = import.meta.env.PROD;
  
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
          {/* Hide TechnicalGovernance in production */}
          {!isProduction && (
            <Route path="/guidelines/technical-governance" element={<TechnicalGovernance />} />
          )}
          {/* Adicione outras rotas aqui */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
