import { Link } from 'react-router-dom'

const selectedWork = [
  { title: 'Digital lending', path: '/work/digital-lending' },
  { title: 'Document modernization', path: '/work/document-modernization' },
  { title: 'Operating model', path: '/work/operating-model' },
]

export function HomePage() {
  return (
    <>
      <section className="hero container" aria-labelledby="hero-title">
        <p className="eyebrow">Technology &amp; AI Transformation Leader</p>
        <h1 id="hero-title">Making complex problems simpler.</h1>
        <p className="hero-summary">I work at the intersection of business, technology and execution—helping organizations understand what's not working, identify practical solutions and turn those ideas into meaningful improvements.</p>
      </section>

      <section id="work" className="section" aria-labelledby="work-title">
        <div className="container">
          <h2 id="work-title">Selected Work</h2>
          <ul className="link-list">
            {selectedWork.map((item) => <li key={item.path}><Link to={item.path}>{item.title}<span aria-hidden="true">↗</span></Link></li>)}
          </ul>
        </div>
      </section>

      <section id="approach" className="section" aria-labelledby="approach-title">
        <div className="container">
          <h2 id="approach-title">My Approach</h2>
          <p className="framework">Understand <span>→</span> Simplify <span>→</span> Evaluate <span>→</span> Solve <span>→</span> Validate <span>→</span> Scale</p>
        </div>
      </section>

      <section id="building" className="section" aria-labelledby="building-title">
        <div className="container">
          <h2 id="building-title">What I'm Building</h2>
          <p className="section-intro">Projects and details are coming soon.</p>
          <Link className="text-link" to="/projects/front-office-simulation">Front office simulation <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section id="about" className="section" aria-labelledby="about-title">
        <div className="container">
          <h2 id="about-title">About</h2>
          <p className="section-intro">More about Jeremy is coming soon.</p>
        </div>
      </section>

      <section id="contact" className="section" aria-labelledby="contact-title">
        <div className="container">
          <h2 id="contact-title">Contact</h2>
          <p className="section-intro">Contact details are coming soon.</p>
        </div>
      </section>
    </>
  )
}
