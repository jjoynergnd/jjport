import { Link } from 'react-router-dom'
import { siteLinks } from '../config/site'
import { approach, selectedWork } from '../content/portfolioContent'
import { usePageMetadata } from '../hooks/usePageMetadata'

const heroCopy = "I work at the intersection of business, technology and execution—helping organizations understand what's not working, identify practical solutions and turn those ideas into meaningful improvements."

export function HomePage() {
  usePageMetadata('Jeremy Joyner | Technology & AI Transformation', 'Jeremy Joyner — Technology & AI Transformation Leader.')

  return (
    <>
      <section className="hero container" aria-labelledby="hero-title">
        <p className="eyebrow">Technology &amp; AI Transformation Leader</p>
        <div className="hero-layout">
          <h1 id="hero-title">Making complex problems simpler.</h1>
          <div className="hero-support">
            <p className="hero-summary">{heroCopy}</p>
            <div className="hero-actions">
              <Link className="action-link" to="/work">Explore My Work <span aria-hidden="true">↗</span></Link>
              <Link className="text-link" to="/approach">My Approach <span aria-hidden="true">↗</span></Link>
              {siteLinks.resume && <a className="text-link" href={siteLinks.resume} target="_blank" rel="noopener noreferrer">View Résumé <span aria-hidden="true">↗</span></a>}
            </div>
          </div>
        </div>
      </section>

      <section className="home-preview home-preview-surface" aria-labelledby="home-work-title">
        <div className="container">
          <div className="preview-heading">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 id="home-work-title">Problems worth solving.</h2>
            </div>
            <Link className="text-link" to="/work">View all work <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="home-work-grid">
            {selectedWork.map((item) => (
              <Link className="home-work-card" key={item.path} to={item.path} aria-label={`Read ${item.title} case study`}>
                <span className="item-number">{item.number} / 03 <span aria-hidden="true">·</span> {item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.preview}</p>
                <span className="card-action">Read case study <span aria-hidden="true">↗</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-preview" aria-labelledby="home-approach-title">
        <div className="container approach-preview-layout">
          <div>
            <p className="eyebrow">My approach</p>
            <h2 id="home-approach-title">A clear path through complexity.</h2>
            <p>Start with the business problem, not the technology. Use the simplest solution capable of producing the desired outcome.</p>
            <Link className="text-link" to="/approach">Explore my approach <span aria-hidden="true">↗</span></Link>
          </div>
          <ol className="framework-preview" aria-label="Six-stage problem-solving framework">
            {approach.map((stage) => <li key={stage.title}>{stage.title}</li>)}
          </ol>
        </div>
      </section>

      <section className="home-preview home-preview-surface" aria-labelledby="home-building-title">
        <div className="container building-preview-layout">
          <div>
            <p className="eyebrow">What I'm building</p>
            <h2 id="home-building-title">Learning by making.</h2>
          </div>
          <div className="building-preview-copy">
            <p>Alongside hands-on automation and AI work, I'm developing a multi-season NFL general-manager simulation as an independent product R&amp;D project. It is a place to work through complex rules, decisions and tradeoffs in software.</p>
            <Link className="text-link" to="/projects/front-office-simulation">Explore the project <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <nav className="home-next container" aria-label="More about Jeremy">
        <Link to="/about">A little about me <span aria-hidden="true">↗</span></Link>
        <Link to="/contact">Let's connect <span aria-hidden="true">↗</span></Link>
      </nav>
    </>
  )
}
