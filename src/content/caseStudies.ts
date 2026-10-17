export type CaseStudy = {
  path: string
  title: string
  context: string
  summary: string
  sections: { heading: string; paragraphs: string[] }[]
  takeaway: string
}

export const caseStudies: CaseStudy[] = [
  {
    path: '/work/digital-lending',
    title: 'Making Small-Business Lending Faster, Simpler and More Accessible',
    context: 'PNC PPP Digital Lending Transformation',
    summary: 'An urgent lending program called for a practical way to serve small businesses at scale. We extended an existing internal platform to connect the work from intake through customer communication.',
    sections: [
      {
        heading: 'The challenge',
        paragraphs: [
          'An internal small-business lending platform had already been developed. The federal Paycheck Protection Program (PPP) then created urgent demand for high-volume lending.',
          'Government intake, underwriting, due diligence, approvals and customer communication could not scale through manual processes alone. The team needed a reliable digital path that could move quickly without starting over.',
        ],
      },
      {
        heading: 'My role',
        paragraphs: [
          'I led the software development team, worked across business and technical functions, and helped translate the operational challenge into a practical digital solution. I had also participated in building the original internal lending platform.',
        ],
      },
      {
        heading: 'Building on what worked',
        paragraphs: [
          'The team extended the existing platform instead of building a new system from scratch. That decision made use of capabilities already in place while responding to the speed and reliability the program required.',
          'The solution connected government intake with internal workflows, automated underwriting and due diligence activities, and added an external-facing customer portal for documents, electronic signatures and status-related interactions.',
        ],
      },
      {
        heading: 'Program scale and lesson',
        paragraphs: [
          'Across the broader PNC PPP lending operation, the organization handled 100,000+ loans and approximately $9.3 billion in lending.',
        ],
      },
    ],
    takeaway: 'Build on useful existing capabilities when speed, reliability and business need make that the right choice.',
  },
  {
    path: '/work/document-modernization',
    title: 'Modernizing Enterprise Document Management',
    context: 'PNC Enterprise Document Management',
    summary: 'Replacing a legacy document environment meant making a sound build-versus-buy decision and planning a migration that would keep the final transition manageable.',
    sections: [
      {
        heading: 'The challenge',
        paragraphs: [
          'A legacy IBM Navigator-based document-management environment needed modernization. The work called for evaluation of external vendor options against an internal build, delivery of a replacement application, and a carefully planned migration.',
        ],
      },
      {
        heading: 'My role and the decision',
        paragraphs: [
          'I led the development and QA teams involved in building the replacement. I helped evaluate and advocate the internal build option and presented the build-versus-buy recommendation. The CIO made the final decision.',
          'The resulting application was built internally using modern web and search technologies.',
        ],
      },
      {
        heading: 'Preparing the transition',
        paragraphs: [
          'More than 99% of documents were pre-migrated before the final cutover. That preparation made the big-bang transition primarily a URL change and reduced the risk concentrated in the cutover itself.',
        ],
      },
      {
        heading: 'What the approach taught me',
        paragraphs: [
          'The migration strategy followed the actual constraints of this system. With most documents already moved, a single final transition was appropriate; the choice depended on preparation rather than a preference for one cutover pattern.',
        ],
      },
    ],
    takeaway: 'Migration approaches should reflect actual system constraints and operational risk. A big-bang transition can be appropriate when most migration work is safely completed beforehand.',
  },
  {
    path: '/work/operating-model',
    title: 'Simplifying How Projects Get Done',
    context: 'U.S. Steel PMO / Center of Excellence Redesign',
    summary: 'A delivery framework can bring consistency, but it also has to fit the work. Feedback from an initial rollout led to a simpler, tiered approach to project governance.',
    sections: [
      {
        heading: 'Starting with structure',
        paragraphs: [
          'I established a project management office and center of excellence and introduced a structured delivery framework. The initial approach drew heavily from formal project management practices, but it proved too cumbersome for some kinds of work.',
        ],
      },
      {
        heading: 'Listening and adapting',
        paragraphs: [
          'Feedback and experience with the rollout made the problem clear: process itself could become an obstacle. I simplified the approach rather than asking every project to follow the same level of ceremony.',
        ],
      },
      {
        heading: 'A more usable model',
        paragraphs: [
          'The revised framework used tiered governance and delivery requirements suited to each project’s size, complexity and risk. Necessary oversight and regulatory controls remained part of the model.',
          'The work was an exercise in judgment: keep the structure that helps teams deliver, and remove requirements that add effort without helping the project.',
        ],
      },
    ],
    takeaway: 'A useful process should support the work and the people doing it. When the process becomes the obstacle, listen, adjust and keep the controls that truly matter.',
  },
]
