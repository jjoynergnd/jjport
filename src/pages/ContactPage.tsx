import { siteLinks } from '../config/site'
import { contactCopy } from '../content/portfolioContent'
import { usePageMetadata } from '../hooks/usePageMetadata'

export function ContactPage() {
  usePageMetadata('Contact | Jeremy Joyner', 'Connect with Jeremy Joyner about business challenges, technology, and practical improvements.')
  const hasLinks = Boolean(siteLinks.email || siteLinks.linkedin || siteLinks.resume)

  return (
    <div className="page-shell container contact-page">
      <header className="page-intro page-intro-compact">
        <p className="eyebrow">Contact</p>
        <h1>Let's connect.</h1>
        <p>{contactCopy}</p>
      </header>
      {hasLinks && (
        <section className="contact-destinations" aria-label="Contact links">
          <ul className="contact-links">
            {siteLinks.email && <li><a href={`mailto:${siteLinks.email}`}>Email <span aria-hidden="true">↗</span></a></li>}
            {siteLinks.linkedin && <li><a href={siteLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a></li>}
            {siteLinks.resume && <li><a href={siteLinks.resume} target="_blank" rel="noopener noreferrer">Résumé <span aria-hidden="true">↗</span></a></li>}
          </ul>
        </section>
      )}
    </div>
  )
}
