import { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'

const title = 'Building a Football Front-Office Simulator'
const description = 'An ongoing project exploring how to model the decisions, constraints and uncertainty involved in managing a professional football franchise.'

const productPrinciples = [
  'Establish canonical domain models before building complex user-facing features.',
  'Separate business rules from presentation.',
  'Model players, contracts, teams and draft assets consistently.',
  'Design systems that can support multiple seasons.',
  'Validate individual systems before layering on additional complexity.',
]

const productDomains = [
  { title: 'Player and roster modeling', description: 'Representing players, team composition and roster constraints.' },
  { title: 'Contracts and franchise management', description: 'Connecting contract decisions to longer-term roster planning.' },
  { title: 'Draft evaluation and scouting', description: 'Working with prospect information and meaningful uncertainty.' },
  { title: 'Trade valuation and decision support', description: 'Comparing choices and their consequences across a roster.' },
  { title: 'Multi-season simulation architecture', description: 'Keeping rules and state coherent as seasons progress.' },
  { title: 'User experience for complex decisions', description: 'Making interconnected choices understandable to the person using the application.' },
]

const developmentSteps = [
  'Define the problem and intended user experience.',
  'Translate requirements into clear system behavior.',
  'Design the underlying models and rules.',
  'Use AI-assisted development tools to accelerate implementation.',
  'Test, inspect and refine.',
  'Preserve architectural consistency as the product grows.',
]

const demonstratedPractices = [
  'Product thinking',
  'Systems design',
  'Technical fluency',
  'Requirements definition',
  'Complex decision modeling',
  'Iterative delivery',
  'Testing and quality',
  'Responsible use of AI development tools',
]

export function FrontOfficeSimulationPage() {
  useLayoutEffect(() => {
    const originalTitle = document.title
    const metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    const originalDescription = metaDescription?.content

    document.title = `${title} | Jeremy Joyner`
    if (metaDescription) metaDescription.content = description

    return () => {
      document.title = originalTitle
      if (metaDescription && originalDescription !== undefined) metaDescription.content = originalDescription
    }
  }, [])

  return (
    <article className="project-page container">
      <header className="case-hero project-hero">
        <Link className="case-back" to="/"><span aria-hidden="true">←</span> Back to Home</Link>
        <p className="eyebrow">Independent Product Research &amp; Development</p>
        <h1>{title}</h1>
        <div className="project-intro">
          <p>{description}</p>
          <p>Rather than focusing primarily on gameplay, the application is centered on the decisions a general manager makes: evaluating talent, managing contracts, building a roster, navigating trades and planning across multiple seasons.</p>
          <p>The project provides a practical environment for designing complex business rules, developing interconnected systems and using modern development tools to move from ideas to working software.</p>
        </div>
      </header>

      <div className="case-content project-content">
        <section className="case-section" aria-labelledby="project-problem-title">
          <h2 id="project-problem-title">The problem</h2>
          <p>Professional football roster management involves interconnected decisions with consequences that extend across multiple seasons.</p>
          <p>A useful simulation needs consistent rules, realistic constraints and meaningful uncertainty—not simply a collection of screens.</p>
        </section>

        <section className="case-section" aria-labelledby="product-approach-title">
          <h2 id="product-approach-title">Product approach</h2>
          <p>I am building the foundation before adding more complex user-facing features. The guiding principles are:</p>
          <ol className="project-list">
            {productPrinciples.map((principle) => <li key={principle}>{principle}</li>)}
          </ol>
        </section>

        <section className="case-section" aria-labelledby="product-domains-title">
          <h2 id="product-domains-title">Key areas of development</h2>
          <p className="project-status-note"><strong>Active development.</strong> These domains describe the product's scope. Feature-by-feature completion and future enhancements will be identified here when their status is verified.</p>
          <ul className="product-domains">
            {productDomains.map((domain) => (
              <li key={domain.title}>
                <h3>{domain.title}</h3>
                <p>{domain.description}</p>
              </li>
            ))}
          </ul>
          <figure className="project-image">
            <div className="image-reserve"><span>Authentic application screenshot to be added</span></div>
            <figcaption>Image space reserved for a verified view of the application.</figcaption>
          </figure>
        </section>

        <section className="case-section" aria-labelledby="project-process-title">
          <h2 id="project-process-title">How I work</h2>
          <p>I move from a defined user problem to clear behavior, then test each part before expanding the system.</p>
          <ol className="project-list">
            {developmentSteps.map((step) => <li key={step}>{step}</li>)}
          </ol>
          <p>AI-assisted development helps me implement and iterate. It does not mean the simulation itself is AI-powered.</p>
        </section>

        <section className="case-section" aria-labelledby="project-tools-title">
          <h2 id="project-tools-title">Technologies and tools</h2>
          <p>The broader project uses React, TypeScript, Node.js and database-backed application architecture. I use Codex and Claude as development assistants.</p>
        </section>

        <section className="case-section" aria-labelledby="project-demonstrates-title">
          <h2 id="project-demonstrates-title">What this project demonstrates</h2>
          <p>Building the simulation brings several kinds of work together:</p>
          <ul className="project-practices">
            {demonstratedPractices.map((practice) => <li key={practice}>{practice}</li>)}
          </ul>
        </section>
      </div>

      <nav className="case-navigation" aria-label="Project navigation">
        <Link to="/"><span aria-hidden="true">←</span> Back to Home</Link>
      </nav>
    </article>
  )
}
