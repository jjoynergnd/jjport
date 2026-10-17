import { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import type { CaseStudy } from '../content/caseStudies'

type CaseStudyPageProps = {
  study: CaseStudy
  nextStudy?: CaseStudy
}

export function CaseStudyPage({ study, nextStudy }: CaseStudyPageProps) {
  useLayoutEffect(() => {
    const originalTitle = document.title
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    const originalDescription = description?.content

    document.title = `${study.title} | Jeremy Joyner`
    if (description) description.content = study.summary

    return () => {
      document.title = originalTitle
      if (description && originalDescription !== undefined) description.content = originalDescription
    }
  }, [study])

  return (
    <article className="case-page container">
      <header className="case-hero">
        <Link className="case-back" to="/work"><span aria-hidden="true">←</span> Back to Selected Work</Link>
        <p className="eyebrow">Enterprise case study</p>
        <h1>{study.title}</h1>
        <p className="case-summary">{study.summary}</p>
      </header>

      <div className="case-context">
        <span className="case-label">Context</span>
        <p>{study.context}</p>
      </div>

      <div className="case-content">
        {study.sections.map((section, index) => (
          <section className="case-section" aria-labelledby={`case-section-${index}`} key={section.heading}>
            <h2 id={`case-section-${index}`}>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>
        ))}
        <section className="case-takeaway" aria-labelledby="case-takeaway-title">
          <p className="eyebrow">Takeaway</p>
          <h2 id="case-takeaway-title">What I took forward</h2>
          <p>{study.takeaway}</p>
        </section>
      </div>

      <nav className="case-navigation" aria-label="Case study navigation">
        <Link to="/work"><span aria-hidden="true">←</span> Back to Selected Work</Link>
        {nextStudy && <Link to={nextStudy.path}>Next case study: {nextStudy.title} <span aria-hidden="true">↗</span></Link>}
      </nav>
    </article>
  )
}
