import { Link } from 'react-router-dom'
import { aboutParagraphs } from '../content/portfolioContent'
import { usePageMetadata } from '../hooks/usePageMetadata'

export function AboutPage() {
  usePageMetadata('About | Jeremy Joyner', 'About Jeremy Joyner and his approach to business, technology, and practical problem-solving.')

  return (
    <div className="page-shell about-page container">
      <header className="page-intro page-intro-compact">
        <p className="eyebrow">About</p>
        <h1>A little about me.</h1>
      </header>
      <section className="about-introduction" aria-label="Introduction">
        <p>{aboutParagraphs[0]}</p>
        <p>{aboutParagraphs[1]}</p>
      </section>
      <section className="about-experience" aria-labelledby="about-experience-title">
        <div className="about-section-heading">
          <p className="eyebrow">Experience</p>
          <h2 id="about-experience-title">Across business and technology.</h2>
        </div>
        <div>
          <p>{aboutParagraphs[2]}</p>
          <ul className="about-disciplines" aria-label="Areas of experience">
            <li>Enterprise transformation</li>
            <li>Software development</li>
            <li>Program leadership</li>
            <li>Process improvement</li>
          </ul>
        </div>
      </section>
      <section className="about-current" aria-labelledby="about-current-title">
        <div>
          <p className="eyebrow">Today</p>
          <h2 id="about-current-title">Still learning by building.</h2>
        </div>
        <div>
          <p>{aboutParagraphs[3]}</p>
          <Link className="text-link" to="/projects/front-office-simulation">Explore my independent product R&amp;D <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
      <section className="about-principle" aria-labelledby="about-principle-title">
        <p className="eyebrow">A principle I return to</p>
        <h2 id="about-principle-title">Keep the solution useful.</h2>
        <p>{aboutParagraphs[4]}</p>
      </section>
    </div>
  )
}
