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
        <p className="eyebrow">Enterprise case study <span aria-hidden="true">/</span> {study.category}</p>
        <h1>{study.title}</h1>
        <p className="case-summary">{study.summary}</p>
      </header>

      <div className="case-context">
        <div><span className="case-label">Project context</span><p>{study.context}</p></div>
        <div><span className="case-label">Focus</span><p>{study.category}</p></div>
      </div>

      <div className="case-content" aria-label="Case study narrative">
        {study.sections.map((section, index) => (
          <section className="case-section" aria-labelledby={`case-section-${index}`} key={section.heading}>
            <span className="case-step">{String(index + 1).padStart(2, '0')} / {String(study.sections.length).padStart(2, '0')}</span>
            <h2 id={`case-section-${index}`}>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>
        ))}
      </div>
      <section className="case-takeaway" aria-labelledby="case-takeaway-title">
        <p className="eyebrow">Takeaway</p>
        <h2 id="case-takeaway-title">What I took forward</h2>
        <p>{study.takeaway}</p>
      </section>

      <nav className="case-navigation" aria-label="Case study navigation">
        <Link to="/work"><span aria-hidden="true">←</span> Back to Selected Work</Link>
        {nextStudy && <Link to={nextStudy.path}>Next case study: {nextStudy.title} <span aria-hidden="true">↗</span></Link>}
      </nav>
    </article>
  )
}
