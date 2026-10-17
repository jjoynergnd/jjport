import { siteLinks } from '../config/site'
import { contactCopy } from '../content/portfolioContent'
import { usePageMetadata } from '../hooks/usePageMetadata'

export function ContactPage() {
  usePageMetadata('Contact | Jeremy Joyner', 'Connect with Jeremy Joyner about business challenges, technology, and practical improvements.')
  const destinations = [
    { label: 'Email', href: siteLinks.email ? `mailto:${siteLinks.email}` : null },
    { label: 'LinkedIn', href: siteLinks.linkedin },
    { label: 'Résumé', href: siteLinks.resume },
  ]

  return (
    <div className="page-shell container contact-page">
      <header className="page-intro page-intro-compact">
        <p className="eyebrow">Contact</p>
        <h1>Let's connect.</h1>
        <p>{contactCopy}</p>
      </header>
      <section className="contact-destinations" aria-label="Contact options">
        <ul className="contact-links">
          {destinations.map(({ label, href }) => (
            <li key={label}>
              {href
                ? <a href={href} target={label === 'Email' ? undefined : '_blank'} rel={label === 'Email' ? undefined : 'noopener noreferrer'}>{label} <span aria-hidden="true">↗</span></a>
                : <div className="contact-link-unavailable"><span>{label}</span><small>Destination needed</small></div>}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
