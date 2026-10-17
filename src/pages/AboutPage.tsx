import { aboutParagraphs } from '../content/portfolioContent'
import { usePageMetadata } from '../hooks/usePageMetadata'

export function AboutPage() {
  usePageMetadata('About | Jeremy Joyner', 'About Jeremy Joyner and his approach to business, technology, and practical problem-solving.')

  return (
    <div className="page-shell container">
      <header className="page-intro page-intro-compact">
        <p className="eyebrow">About</p>
        <h1>A little about me.</h1>
      </header>
      <section className="about-page-copy" aria-label="About Jeremy Joyner">
        {aboutParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </section>
    </div>
  )
}
