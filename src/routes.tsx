import { Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/SiteLayout'
import { HomePage } from './pages/HomePage'
import { PlaceholderPage } from './pages/PlaceholderPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/work/digital-lending" element={<PlaceholderPage eyebrow="Selected work" title="Digital lending" />} />
        <Route path="/work/document-modernization" element={<PlaceholderPage eyebrow="Selected work" title="Document modernization" />} />
        <Route path="/work/operating-model" element={<PlaceholderPage eyebrow="Selected work" title="Operating model" />} />
        <Route path="/projects/front-office-simulation" element={<PlaceholderPage eyebrow="Project" title="Front office simulation" />} />
        <Route path="*" element={<PlaceholderPage eyebrow="404" title="Page not found" />} />
      </Route>
    </Routes>
  )
}
