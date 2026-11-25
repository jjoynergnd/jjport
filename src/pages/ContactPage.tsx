import { useState } from 'react'
import { siteLinks } from '../config/site'
import { contactCopy } from '../content/portfolioContent'
import { usePageMetadata } from '../hooks/usePageMetadata'

export function ContactPage() {
  usePageMetadata('Contact | Jeremy Joyner', 'Connect with Jeremy Joyner about business challenges, technology, and practical improvements.')
  const [copyMessage, setCopyMessage] = useState('')
  const email = siteLinks.email

  async function copyEmail() {
    if (!email || !navigator.clipboard?.writeText) {
      setCopyMessage('Copy is unavailable in this browser.')
      return
    }
    try {
      await navigator.clipboard.writeText(email)
      setCopyMessage('Email address copied.')
    } catch {
      setCopyMessage('Could not copy the email address.')
    }
  }

  return (
    <div className="page-shell container contact-page">
      <header className="page-intro page-intro-compact">
        <p className="eyebrow">Contact</p>
        <h1>Let's connect.</h1>
        <p>{contactCopy}</p>
      </header>
      <section className="contact-destinations" aria-label="Contact options">
        {email && <div className="contact-email">
          <a className="contact-email-address" href={`mailto:${email}`}>{email}</a>
          <button className="contact-copy-button" type="button" onClick={copyEmail}>Copy email</button>
          <span className="contact-copy-status" role="status" aria-live="polite">{copyMessage}</span>
        </div>}
        {siteLinks.linkedin && <p className="contact-profile"><a className="text-link" href={siteLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn profile <span aria-hidden="true">↗</span></a></p>}
      </section>
    </div>
  )
}
