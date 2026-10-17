import { Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/SiteLayout'
import { caseStudies } from './content/caseStudies'
import { CaseStudyPage } from './pages/CaseStudyPage'
import { FrontOfficeSimulationPage } from './pages/FrontOfficeSimulationPage'
import { HomePage } from './pages/HomePage'
import { WorkPage } from './pages/WorkPage'
import { ApproachPage } from './pages/ApproachPage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { PlaceholderPage } from './pages/PlaceholderPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/approach" element={<ApproachPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {caseStudies.map((study, index) => (
          <Route key={study.path} path={study.path} element={<CaseStudyPage study={study} nextStudy={caseStudies[index + 1]} />} />
        ))}
        <Route path="/projects/front-office-simulation" element={<FrontOfficeSimulationPage />} />
        <Route path="*" element={<PlaceholderPage eyebrow="404" title="Page not found" />} />
      </Route>
    </Routes>
  )
}
