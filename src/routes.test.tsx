import { fireEvent, render, screen, within } from '@testing-library/react'
import { MemoryRouter, useNavigate } from 'react-router-dom'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { AppRoutes } from './routes'

const routes = [
  ['/', 'Making complex problems simpler.'],
  ['/work', 'Work shaped by real problems.'],
  ['/approach', 'My Approach'],
  ['/about', 'A little about me.'],
  ['/contact', "Let's connect."],
  ['/work/digital-lending', 'Making Small-Business Lending Faster, Simpler and More Accessible'],
  ['/work/document-modernization', 'Modernizing Enterprise Document Management'],
  ['/work/operating-model', 'Simplifying How Projects Get Done'],
  ['/projects/front-office-simulation', 'Building a Football Front-Office Simulator'],
] as const

function renderAt(path: string) {
  return render(<MemoryRouter initialEntries={[path]}><AppRoutes /></MemoryRouter>)
}

function HistoryControls() {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <button onClick={() => navigate(1)}>Forward</button>
    </div>
  )
}

describe('portfolio routes and navigation', () => {
  beforeEach(() => vi.clearAllMocks())

  it.each(routes)('renders %s', (path, heading) => {
    renderAt(path)
    expect(screen.getByRole('heading', { level: 1, name: heading })).toBeInTheDocument()
  })

  it('keeps approved hero copy and links to the route-based previews', () => {
    renderAt('/')

    expect(screen.getByText("I work at the intersection of business, technology and execution—helping organizations understand what's not working, identify practical solutions and turn those ideas into meaningful improvements.")).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Explore My Work' })).toHaveAttribute('href', '/work')
    expect(screen.getByRole('link', { name: 'View all work' })).toHaveAttribute('href', '/work')
    expect(screen.getByRole('link', { name: 'Explore my approach' })).toHaveAttribute('href', '/approach')
    expect(screen.getByRole('link', { name: 'Explore the project' })).toHaveAttribute('href', '/projects/front-office-simulation')
    for (const [name, path] of [
      ['Digital Lending Transformation', '/work/digital-lending'],
      ['Enterprise Document Management Modernization', '/work/document-modernization'],
      ['PMO / Center of Excellence Redesign', '/work/operating-model'],
    ]) {
      expect(screen.getByRole('link', { name: `Read ${name} case study` })).toHaveAttribute('href', path)
    }
    expect(screen.queryByRole('link', { name: /résumé/i })).not.toBeInTheDocument()
  })

  it('uses path links and marks the active primary navigation item', () => {
    renderAt('/')
    const nav = screen.getByRole('navigation', { name: 'Primary navigation' })
    const expected = [['Home', '/'], ['Work', '/work'], ['Approach', '/approach'], ['About', '/about'], ['Contact', '/contact']]
    for (const [name, path] of expected) expect(within(nav).getByRole('link', { name })).toHaveAttribute('href', path)
    expect(within(nav).getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page')

    fireEvent.click(within(nav).getByRole('link', { name: 'Work' }))
    expect(screen.getByRole('heading', { level: 1, name: 'Work shaped by real problems.' })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'Work' })).toHaveAttribute('aria-current', 'page')
    expect(within(nav).getByRole('link', { name: 'Home' })).not.toHaveAttribute('aria-current')
    expect(window.scrollTo).toHaveBeenCalled()
  })

  it('renders the previous and next views on browser history navigation', () => {
    render(<MemoryRouter initialEntries={['/', '/work']} initialIndex={1}><HistoryControls /><AppRoutes /></MemoryRouter>)
    const initialScrolls = vi.mocked(window.scrollTo).mock.calls.length

    fireEvent.click(screen.getByRole('button', { name: 'Back' }))
    expect(screen.getByRole('heading', { level: 1, name: 'Making complex problems simpler.' })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Forward' }))
    expect(screen.getByRole('heading', { level: 1, name: 'Work shaped by real problems.' })).toBeInTheDocument()
    expect(vi.mocked(window.scrollTo).mock.calls.length).toBeGreaterThan(initialScrolls)
  })

  it('opens and closes the mobile menu with click and Escape', () => {
    renderAt('/')
    const button = screen.getByRole('button', { name: 'Menu' })

    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(button).toHaveAttribute('aria-controls', 'primary-navigation')

    fireEvent.keyDown(window, { key: 'Escape' })
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(button).toHaveFocus()

    fireEvent.click(button)
    fireEvent.click(screen.getByRole('navigation', { name: 'Primary navigation' }).querySelector('a[href="/about"]')!)
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByRole('heading', { level: 1, name: 'A little about me.' })).toBeInTheDocument()
  })

  it('shows all three work summaries with correct attribution and links', () => {
    renderAt('/work')
    const work = screen.getByRole('region', { name: 'Enterprise case studies' })

    expect(within(work).getAllByRole('link')).toHaveLength(3)
    expect(within(work).getAllByText('The problem')).toHaveLength(3)
    expect(within(work).getAllByText('My contribution')).toHaveLength(3)
    expect(within(work).getByText(/Urgent Paycheck Protection Program \(PPP\) demand required a reliable digital path/)).toBeInTheDocument()
    expect(within(work).getByRole('link', { name: 'Read Digital Lending Transformation case study' })).toHaveAttribute('href', '/work/digital-lending')
    expect(within(work).getByText(/The broader program processed 100,000\+ loans and approximately \$9\.3B/)).toBeInTheDocument()
    expect(within(work).getByText(/the CIO made the final decision/)).toBeInTheDocument()
  })

  it('preserves the exact six-stage framework and guiding principle', () => {
    renderAt('/approach')
    const approach = screen.getByRole('region', { name: /Understand → Simplify → Evaluate → Solve → Validate → Scale/ })

    expect(screen.getByText('Start with the business problem, not the technology. Use the simplest solution capable of producing the desired outcome.')).toBeInTheDocument()
    expect(within(approach).getAllByRole('heading', { level: 3 }).map((heading) => heading.textContent)).toEqual([
      'Understand', 'Simplify', 'Evaluate', 'Solve', 'Validate', 'Scale',
    ])
  })

  it('preserves approved About and Contact copy without invented destinations', () => {
    render(<MemoryRouter initialEntries={['/about']}><AppRoutes /></MemoryRouter>)
    expect(screen.getByText("I've spent much of my career working on complicated business and technology initiatives—modernizing systems, improving processes, building applications, and helping teams navigate change.")).toBeInTheDocument()
    expect(screen.getByText("What I've enjoyed most isn't necessarily the technology itself. It's understanding how something works, figuring out why it isn't working as well as it could, and finding a practical way to make it better.")).toBeInTheDocument()
    expect(screen.getByText("My background spans enterprise transformation, program leadership, software development, and process improvement. I've worked with business leaders, technical teams, and the people who ultimately use the solutions we build.")).toBeInTheDocument()
    expect(screen.getByText("More recently, I've been spending a lot of time exploring how AI and modern development tools can help organizations work differently. I enjoy getting hands-on, experimenting with new approaches, and building things myself—not just managing the work from a distance.")).toBeInTheDocument()
    expect(screen.getByText("I believe good solutions don't need to be unnecessarily complicated. They need to solve the right problem and work for the people using them.")).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Explore my independent product R&D' })).toHaveAttribute('href', '/projects/front-office-simulation')

    fireEvent.click(screen.getByRole('link', { name: 'Contact' }))
    expect(screen.getByText("I'm always interested in thoughtful conversations about business challenges, technology, and opportunities to make things work better.")).toBeInTheDocument()
    expect(within(screen.getByRole('main')).queryByRole('link')).not.toBeInTheDocument()
    const contactOptions = screen.getByRole('region', { name: 'Contact options' })
    expect(contactOptions).toHaveTextContent('Email')
    expect(contactOptions).toHaveTextContent('LinkedIn')
    expect(contactOptions).toHaveTextContent('Résumé')
    expect(within(contactOptions).getAllByText('Destination needed')).toHaveLength(3)
    expect(screen.queryByText(/Verified contact links will be added here/)).not.toBeInTheDocument()
  })

  it.each([
    ['/work/digital-lending', 'Making Small-Business Lending Faster, Simpler and More Accessible', 'PNC Paycheck Protection Program (PPP) Digital Lending Transformation', /100,000\+ loans and approximately \$9\.3 billion/],
    ['/work/document-modernization', 'Modernizing Enterprise Document Management', 'PNC Enterprise Document Management', /More than 99% of documents were pre-migrated/],
    ['/work/operating-model', 'Simplifying How Projects Get Done', 'U.S. Steel PMO / Center of Excellence Redesign', /tiered governance and delivery requirements/],
  ])('preserves case study content at %s', (path, title, context, detail) => {
    renderAt(path)
    expect(screen.getByRole('heading', { level: 1, name: title })).toBeInTheDocument()
    expect(screen.getByText(context)).toBeInTheDocument()
    if (path === '/work/digital-lending') expect(screen.getByText(/The federal PPP then created urgent demand/)).toBeInTheDocument()
    expect(screen.getByText(detail)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'What I took forward' })).toBeInTheDocument()
    expect(document.title).toBe(`${title} | Jeremy Joyner`)
    expect(screen.getAllByRole('link', { name: 'Back to Selected Work' })).toHaveLength(2)
    expect(screen.getAllByRole('link', { name: 'Back to Selected Work' })[0]).toHaveAttribute('href', '/work')
  })

  it('keeps the unrelated 9,000+ user migration out of document modernization', () => {
    renderAt('/work/document-modernization')
    expect(screen.queryByText(/9,000\+ users/)).not.toBeInTheDocument()
    expect(screen.getByText(/The CIO made the final decision/)).toBeInTheDocument()
  })

  it('connects case studies and returns to the Work overview', () => {
    renderAt('/work/digital-lending')
    fireEvent.click(screen.getByRole('link', { name: /Next case study: Modernizing Enterprise Document Management/ }))
    expect(screen.getByRole('heading', { level: 1, name: 'Modernizing Enterprise Document Management' })).toBeInTheDocument()
    fireEvent.click(screen.getByRole('link', { name: /Next case study: Simplifying How Projects Get Done/ }))
    expect(screen.getByRole('heading', { level: 1, name: 'Simplifying How Projects Get Done' })).toBeInTheDocument()
    fireEvent.click(within(screen.getByRole('navigation', { name: 'Case study navigation' })).getByRole('link', { name: 'Back to Selected Work' }))
    expect(screen.getByRole('heading', { level: 1, name: 'Work shaped by real problems.' })).toBeInTheDocument()
  })

  it('keeps simulator status qualified and routes back to Home', () => {
    renderAt('/projects/front-office-simulation')
    expect(screen.getByRole('heading', { level: 1, name: 'Building a Football Front-Office Simulator' })).toBeInTheDocument()
    expect(screen.getByText(/Feature-by-feature completion and future enhancements will be identified here when their status is verified/)).toBeInTheDocument()
    expect(screen.getByText('AI-assisted development helps me implement and iterate. It does not mean the simulation itself is AI-powered.')).toBeInTheDocument()
    fireEvent.click(within(screen.getByRole('navigation', { name: 'Project navigation' })).getByRole('link', { name: 'Back to Home' }))
    expect(screen.getByRole('heading', { level: 1, name: 'Making complex problems simpler.' })).toBeInTheDocument()
  })
})
