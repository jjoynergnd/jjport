import { Link } from 'react-router-dom'
import { siteLinks } from '../config/site'

const selectedWork = [
  {
    number: '01',
    title: 'Digital Lending Transformation',
    path: '/work/digital-lending',
    summary: 'At PNC, extended an existing internal lending platform for PPP lending with government intake, automated underwriting and due diligence, customer documentation, electronic signatures, and digital workflows.',
    context: 'The broader program processed 100,000+ loans and approximately $9.3B in lending.',
  },
  {
    number: '02',
    title: 'Enterprise Document Management Modernization',
    path: '/work/document-modernization',
    summary: 'Led development and QA teams building a replacement for a legacy document-management environment. Contributed to the build-versus-buy recommendation; the CIO made the final decision.',
    context: 'Migration planning allowed more than 99% of documents to be pre-migrated before the final URL transition.',
  },
  {
    number: '03',
    title: 'PMO / Center of Excellence Redesign',
    path: '/work/operating-model',
    summary: 'Established project governance and delivery practices, then simplified an initially overengineered approach into tiered processes suited to project scale and risk.',
    context: 'A lesson in adapting a sound idea until it is practical for the people using it.',
  },
]

const approach = [
  { title: 'Understand', description: 'Listen to the people involved and define the business problem before choosing a tool.' },
  { title: 'Simplify', description: 'Separate what matters from what adds friction, and make the path forward easier to use.' },
  { title: 'Evaluate', description: 'Compare practical options against the desired outcome, constraints, and tradeoffs.' },
  { title: 'Solve', description: 'Build the simplest solution capable of addressing the problem.' },
  { title: 'Validate', description: 'Test the solution with evidence and the people who will use it.' },
  { title: 'Scale', description: 'Extend what works with the right processes and support.' },
]

const aboutParagraphs = [
  "I've spent much of my career working on complicated business and technology initiatives—modernizing systems, improving processes, building applications, and helping teams navigate change.",
  "What I've enjoyed most isn't necessarily the technology itself. It's understanding how something works, figuring out why it isn't working as well as it could, and finding a practical way to make it better.",
  "My background spans enterprise transformation, program leadership, software development, and process improvement. I've worked with business leaders, technical teams, and the people who ultimately use the solutions we build.",
  "More recently, I've been spending a lot of time exploring how AI and modern development tools can help organizations work differently. I enjoy getting hands-on, experimenting with new approaches, and building things myself—not just managing the work from a distance.",
  "I believe good solutions don't need to be unnecessarily complicated. They need to solve the right problem and work for the people using them.",
]

function SectionHeading({ number, title, id }: { number: string; title: string; id: string }) {
  return (
    <div className="section-heading">
      <span className="section-number" aria-hidden="true">{number} / 05</span>
      <h2 id={id}>{title}</h2>
    </div>
  )
}

export function HomePage() {
  const hasContactLinks = Boolean(siteLinks.email || siteLinks.linkedin || siteLinks.resume)

  return (
    <>
      <section className="hero container" aria-labelledby="hero-title">
        <p className="eyebrow">Technology &amp; AI Transformation Leader</p>
        <h1 id="hero-title">Making complex problems simpler.</h1>
        <p className="hero-summary">I work at the intersection of business, technology and execution—helping organizations understand what's not working, identify practical solutions and turn those ideas into meaningful improvements.</p>
        <div className="hero-actions">
          <a className="action-link" href="#work">Explore My Work <span aria-hidden="true">↘</span></a>
          {siteLinks.resume && <a className="text-link" href={siteLinks.resume} target="_blank" rel="noopener noreferrer">View Résumé <span aria-hidden="true">↗</span></a>}
        </div>
      </section>

      <section id="work" className="section" aria-labelledby="work-title">
        <div className="container section-layout">
          <SectionHeading number="01" title="Selected Work" id="work-title" />
          <div className="section-content work-list">
            {selectedWork.map((item) => (
              <article className="work-item" key={item.path}>
                <span className="item-number" aria-hidden="true">{item.number}</span>
                <div>
                  <h3><Link to={item.path}>{item.title} <span aria-hidden="true">↗</span></Link></h3>
                  <p>{item.summary}</p>
                  <p className="work-context">{item.context}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="section" aria-labelledby="approach-title">
        <div className="container section-layout">
          <SectionHeading number="02" title="My Approach" id="approach-title" />
          <div className="section-content">
            <p className="section-lead">Start with the business problem, not the technology. Use the simplest solution capable of producing the desired outcome.</p>
            <ol className="approach-list">
              {approach.map((stage, index) => (
                <li key={stage.title}>
                  <span className="stage-number">{String(index + 1).padStart(2, '0')} <span aria-hidden="true">→</span></span>
                  <h3>{stage.title}</h3>
                  <p>{stage.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="building" className="section" aria-labelledby="building-title">
        <div className="container section-layout">
          <SectionHeading number="03" title="What I'm Building" id="building-title" />
          <div className="section-content building-list">
            <article className="building-item">
              <p className="item-label">Hands-on work</p>
              <h3>Applied Automation &amp; AI</h3>
              <p>I'm working with Python, Azure Functions, Azure SQL, Power Automate, SharePoint, Power BI, and Copilot Studio. Examples include processing survey datasets into reporting workflows and building an assistant to help users navigate Power BI dashboards.</p>
            </article>
            <article className="building-item">
              <p className="item-label">Independent product R&amp;D</p>
              <h3>NFL Front-Office Simulator</h3>
              <p>An active, multi-season NFL general-manager simulation project. The work explores domain modeling, draft and scouting, contracts, trades, decision systems, and testing. I use AI-assisted tools during development.</p>
              <p className="project-status">This is ongoing R&amp;D; specific working features and future plans will be shared once verified.</p>
              <Link className="text-link" to="/projects/front-office-simulation">Explore the project <span aria-hidden="true">↗</span></Link>
              <div className="image-reserve"><span>Space reserved for an authentic product screenshot</span></div>
            </article>
          </div>
        </div>
      </section>

      <section id="about" className="section" aria-labelledby="about-title">
        <div className="container section-layout">
          <SectionHeading number="04" title="A little about me." id="about-title" />
          <div className="section-content about-copy">
            {aboutParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section" aria-labelledby="contact-title">
        <div className="container section-layout">
          <SectionHeading number="05" title="Let's connect." id="contact-title" />
          <div className="section-content">
            <p className="section-lead">I'm always interested in thoughtful conversations about business challenges, technology, and opportunities to make things work better.</p>
            {hasContactLinks ? (
              <ul className="contact-links">
                {siteLinks.email && <li><a href={`mailto:${siteLinks.email}`}>Email <span aria-hidden="true">↗</span></a></li>}
                {siteLinks.linkedin && <li><a href={siteLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a></li>}
                {siteLinks.resume && <li><a href={siteLinks.resume} target="_blank" rel="noopener noreferrer">Résumé <span aria-hidden="true">↗</span></a></li>}
              </ul>
            ) : <p className="contact-note">Verified contact links will be added here.</p>}
          </div>
        </div>
      </section>
    </>
  )
}
