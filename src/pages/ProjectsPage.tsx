import { Link } from 'react-router-dom'
import { independentProjects } from '../content/portfolioContent'
import { usePageMetadata } from '../hooks/usePageMetadata'

export function ProjectsPage() {
  usePageMetadata('Things I\'ve Built | Jeremy Joyner', 'Independent applications and experiments developed through product design, iteration, and AI-assisted development.')

  return (
    <div className="page-shell container">
      <header className="page-intro">
        <p className="eyebrow">Independent projects</p>
        <h1>Things I've built.</h1>
        <p>Practical experiments and applications developed through product design, iteration, and AI-assisted development.</p>
      </header>
      <section className="project-showcase" aria-label="Independent project demonstrations">
        {independentProjects.map((project) => (
          <article className="project-card" key={project.slug}>
            <p className="eyebrow">{project.status}</p>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            {project.note && <p className="project-card-note">{project.note}</p>}
            {project.demoUrl && <a className="text-link" href={project.demoUrl} target="_blank" rel="noopener noreferrer">View live demonstration <span aria-hidden="true">↗</span></a>}
            {project.path && <Link className="text-link" to={project.path}>Explore project <span aria-hidden="true">↗</span></Link>}
          </article>
        ))}
      </section>
    </div>
  )
}
