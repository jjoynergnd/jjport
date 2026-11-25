export const selectedWork = [
  {
    number: '01',
    category: 'Digital lending',
    title: 'Digital Lending Transformation',
    path: '/work/digital-lending',
    preview: 'Extending an existing lending platform for urgent Paycheck Protection Program (PPP) needs.',
    problem: 'Urgent Paycheck Protection Program (PPP) demand required a reliable digital path for high-volume small-business lending.',
    summary: 'At PNC, extended an existing internal lending platform for PPP lending with government intake, automated underwriting and due diligence, customer documentation, electronic signatures, and digital workflows.',
    context: 'The broader program processed 100,000+ loans and approximately $9.3B in lending.',
  },
  {
    number: '02',
    category: 'Enterprise systems',
    title: 'Enterprise Document Management Modernization',
    path: '/work/document-modernization',
    preview: 'Replacing a legacy document environment with a carefully prepared migration.',
    problem: 'A legacy document environment needed replacement and a carefully planned transition.',
    summary: 'Led development and QA teams building a replacement for a legacy document-management environment. Contributed to the build-versus-buy recommendation; the CIO made the final decision.',
    context: 'Migration planning allowed more than 99% of documents to be pre-migrated before the final URL transition.',
  },
  {
    number: '03',
    category: 'Operating model',
    title: 'PMO / Center of Excellence Redesign',
    path: '/work/operating-model',
    preview: 'Making project governance fit the scale and risk of the work.',
    problem: 'A formal project framework proved too cumbersome for some kinds of work.',
    summary: 'Established project governance and delivery practices, then simplified an initially overengineered approach into tiered processes suited to project scale and risk.',
    context: 'A lesson in adapting a sound idea until it is practical for the people using it.',
  },
  {
    number: '04',
    category: 'Internal operations platform',
    title: 'IntegraIQ — Connecting Systems, Processes, and People',
    path: '/work/integraiq',
    preview: 'Connecting fragmented applications, departmental processes, and operating knowledge.',
    problem: 'Disconnected applications, processes, policies, and reporting workflows limited visibility across the organization.',
    summary: 'Investigated systems and processes, identified simplification opportunities, shaped product direction and user experiences, and directed iterative AI-assisted implementation.',
    context: 'Employer-owned internal platform. Details are intentionally described at a high level.',
  },
] as const

export type IndependentProject = {
  slug: string
  title: string
  status: string
  description: string
  note?: string
  demoUrl?: string
  path?: string
}

export const independentProjects: IndependentProject[] = [
  {
    slug: 'west-allegheny-baseball',
    title: 'West Allegheny Baseball',
    status: 'Live interactive portfolio demonstration',
    description: 'Designed and directed development of a public-facing website for a proposed community youth baseball organization. I contributed to the product concept, information architecture, visual design, user journeys, functionality, review, and iteration. Codex performed the software coding through an AI-assisted development workflow.',
    note: 'The original baseball program did not launch. This is a portfolio demonstration, not an active registration website.',
    demoUrl: 'https://wabaseball.vercel.app/',
  },
  {
    slug: 'construction-company-website',
    title: 'Construction Company Website',
    status: 'Business website demonstration',
    description: 'A customer-facing prototype for a proposed consulting-business offering, with a clean presentation and inquiry/lead-capture concept.',
  },
  {
    slug: 'front-office-simulation',
    title: 'Front Office / GND Simulation',
    status: 'In development',
    description: 'An ongoing project exploring how to model the decisions, constraints and uncertainty involved in managing a professional football franchise.',
    path: '/projects/front-office-simulation',
  },
  {
    slug: 'battle-of-the-books',
    title: 'Battle of the Books',
    status: 'Functional local prototype',
    description: 'A simple educational game that uses game actions as feedback for correct and incorrect answers to make reading-practice questions more engaging for children.',
  },
] as const

export const approach = [
  { title: 'Understand', description: 'Listen to the people involved and define the business problem before choosing a tool.' },
  { title: 'Simplify', description: 'Separate what matters from what adds friction, and make the path forward easier to use.' },
  { title: 'Evaluate', description: 'Compare practical options against the desired outcome, constraints, and tradeoffs.' },
  { title: 'Solve', description: 'Build the simplest solution capable of addressing the problem.' },
  { title: 'Validate', description: 'Test the solution with evidence and the people who will use it.' },
  { title: 'Scale', description: 'Extend what works with the right processes and support.' },
] as const

export const aboutParagraphs = [
  "I've spent much of my career working on complicated business and technology initiatives—modernizing systems, improving processes, building applications, and helping teams navigate change.",
  "What I've enjoyed most isn't necessarily the technology itself. It's understanding how something works, figuring out why it isn't working as well as it could, and finding a practical way to make it better.",
  "My background spans enterprise transformation, program leadership, software development, and process improvement. I've worked with business leaders, technical teams, and the people who ultimately use the solutions we build.",
  "More recently, I've been spending a lot of time exploring how AI and modern development tools can help organizations work differently. I enjoy getting hands-on, experimenting with new approaches, and building things myself—not just managing the work from a distance.",
  "I believe good solutions don't need to be unnecessarily complicated. They need to solve the right problem and work for the people using them.",
] as const

export const contactCopy = "I'm always interested in thoughtful conversations about business challenges, technology, and opportunities to make things work better."
