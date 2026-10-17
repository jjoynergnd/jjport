import { Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/SiteLayout'
import { caseStudies } from './content/caseStudies'
import { CaseStudyPage } from './pages/CaseStudyPage'
import { HomePage } from './pages/HomePage'
import { PlaceholderPage } from './pages/PlaceholderPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        {caseStudies.map((study, index) => (
          <Route key={study.path} path={study.path} element={<CaseStudyPage study={study} nextStudy={caseStudies[index + 1]} />} />
        ))}
        <Route path="/projects/front-office-simulation" element={<PlaceholderPage eyebrow="Project" title="Front office simulation" />} />
        <Route path="*" element={<PlaceholderPage eyebrow="404" title="Page not found" />} />
      </Route>
    </Routes>
  )
}
