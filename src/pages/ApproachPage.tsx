import { approach } from '../content/portfolioContent'
import { usePageMetadata } from '../hooks/usePageMetadata'

export function ApproachPage() {
  usePageMetadata('My Approach | Jeremy Joyner', 'A practical six-stage approach to understanding and solving business problems.')

  return (
    <div className="page-shell container">
      <header className="page-intro">
        <p className="eyebrow">How I work</p>
        <h1>My Approach</h1>
        <p>Start with the business problem, not the technology. Use the simplest solution capable of producing the desired outcome.</p>
      </header>
      <section className="approach-page-section" aria-labelledby="approach-flow-title">
        <h2 id="approach-flow-title" className="visually-hidden">Understand → Simplify → Evaluate → Solve → Validate → Scale</h2>
        <ol className="approach-flow">
          {approach.map((stage, index) => (
            <li key={stage.title}>
              <span className="stage-number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  )
}
