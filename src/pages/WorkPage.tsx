import { Link } from 'react-router-dom'
import { selectedWork } from '../content/portfolioContent'
import { usePageMetadata } from '../hooks/usePageMetadata'

export function WorkPage() {
  usePageMetadata('Selected Work | Jeremy Joyner', 'Selected enterprise transformation work by Jeremy Joyner.')

  return (
    <div className="page-shell container">
      <header className="page-intro">
        <p className="eyebrow">Selected work</p>
        <h1>Work shaped by real problems.</h1>
        <p>Three examples of turning complex operational needs into practical technology and delivery decisions.</p>
      </header>
      <section className="work-overview" aria-labelledby="work-overview-title">
        <h2 id="work-overview-title" className="visually-hidden">Enterprise case studies</h2>
        {selectedWork.map((item) => (
          <Link className="work-panel" key={item.path} to={item.path} aria-label={`Read ${item.title} case study`}>
            <div className="work-panel-heading">
              <span className="item-number">{item.number} / 03 <span aria-hidden="true">·</span> {item.category}</span>
              <h3>{item.title}</h3>
              <span className="work-panel-action">View case study <span aria-hidden="true">↗</span></span>
            </div>
            <div className="work-panel-copy">
              <div className="work-panel-facts">
                <div><span className="content-label">The problem</span><p>{item.problem}</p></div>
                <div><span className="content-label">My contribution</span><p>{item.summary}</p></div>
              </div>
              <p className="work-panel-context">{item.context}</p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
}
