import { fireEvent, render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { AppRoutes } from './routes'

const routes = [
  ['/', 'Making complex problems simpler.'],
  ['/work/digital-lending', 'Making Small-Business Lending Faster, Simpler and More Accessible'],
  ['/work/document-modernization', 'Modernizing Enterprise Document Management'],
  ['/work/operating-model', 'Simplifying How Projects Get Done'],
  ['/projects/front-office-simulation', 'Front office simulation'],
] as const

describe('portfolio routes', () => {
  beforeEach(() => vi.clearAllMocks())

  it.each(routes)('renders %s', (path, heading) => {
    render(<MemoryRouter initialEntries={[path]}><AppRoutes /></MemoryRouter>)
    expect(screen.getByRole('heading', { level: 1, name: heading })).toBeInTheDocument()
  })

  it('shows the approved hero copy and work action', () => {
    render(<MemoryRouter><AppRoutes /></MemoryRouter>)

    expect(screen.getByRole('heading', { level: 1, name: 'Making complex problems simpler.' })).toBeInTheDocument()
    expect(screen.getByText("I work at the intersection of business, technology and execution—helping organizations understand what's not working, identify practical solutions and turn those ideas into meaningful improvements.")).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Explore My Work' })).toHaveAttribute('href', '#work')
    expect(screen.queryByRole('link', { name: /résumé/i })).not.toBeInTheDocument()
  })

  it('shows all six approach stages in order', () => {
    render(<MemoryRouter><AppRoutes /></MemoryRouter>)
    const section = screen.getByRole('region', { name: 'My Approach' })

    expect(within(section).getAllByRole('heading', { level: 3 }).map((heading) => heading.textContent)).toEqual([
      'Understand', 'Simplify', 'Evaluate', 'Solve', 'Validate', 'Scale',
    ])
    expect(within(section).getAllByRole('listitem')).toHaveLength(6)
  })

  it('links each selected work summary to its route', () => {
    render(<MemoryRouter><AppRoutes /></MemoryRouter>)
    const section = screen.getByRole('region', { name: 'Selected Work' })

    expect(within(section).getByRole('link', { name: 'Digital Lending Transformation' })).toHaveAttribute('href', '/work/digital-lending')
    expect(within(section).getByRole('link', { name: 'Enterprise Document Management Modernization' })).toHaveAttribute('href', '/work/document-modernization')
    expect(within(section).getByRole('link', { name: 'PMO / Center of Excellence Redesign' })).toHaveAttribute('href', '/work/operating-model')
  })

  it('navigates to a homepage section from a detail route', () => {
    render(<MemoryRouter initialEntries={['/work/digital-lending']}><AppRoutes /></MemoryRouter>)

    fireEvent.click(screen.getByRole('link', { name: 'Work' }))

    expect(screen.getByRole('heading', { level: 2, name: 'Selected Work' })).toBeInTheDocument()
    expect(Element.prototype.scrollIntoView).toHaveBeenCalled()
  })

  it('scrolls again when a section link is selected twice', () => {
    render(<MemoryRouter><AppRoutes /></MemoryRouter>)
    const workLink = screen.getByRole('link', { name: 'Work' })

    fireEvent.click(workLink)
    fireEvent.click(workLink)

    expect(Element.prototype.scrollIntoView).toHaveBeenCalledTimes(2)
  })

  it('opens and closes the mobile menu with click and Escape', () => {
    render(<MemoryRouter><AppRoutes /></MemoryRouter>)
    const button = screen.getByRole('button', { name: 'Menu' })

    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(button).toHaveAttribute('aria-controls', 'primary-navigation')

    fireEvent.keyDown(window, { key: 'Escape' })
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(button).toHaveFocus()

    fireEvent.click(button)
    fireEvent.click(screen.getByRole('link', { name: 'About' }))
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByRole('heading', { level: 2, name: 'A little about me.' })).toBeInTheDocument()
  })

  it.each([
    ['/work/digital-lending', 'Making Small-Business Lending Faster, Simpler and More Accessible', 'PNC PPP Digital Lending Transformation', /100,000\+ loans and approximately \$9\.3 billion/],
    ['/work/document-modernization', 'Modernizing Enterprise Document Management', 'PNC Enterprise Document Management', /More than 99% of documents were pre-migrated/],
    ['/work/operating-model', 'Simplifying How Projects Get Done', 'U.S. Steel PMO / Center of Excellence Redesign', /tiered governance and delivery requirements/],
  ])('shows the complete case study at %s', (path, title, context, detail) => {
    render(<MemoryRouter initialEntries={[path]}><AppRoutes /></MemoryRouter>)

    expect(screen.getByRole('heading', { level: 1, name: title })).toBeInTheDocument()
    expect(screen.getByText(context)).toBeInTheDocument()
    expect(screen.getByText(detail)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'What I took forward' })).toBeInTheDocument()
    expect(document.title).toBe(`${title} | Jeremy Joyner`)
    expect(screen.getAllByRole('link', { name: 'Back to Selected Work' })).toHaveLength(2)
  })

  it('keeps the separate 9,000+ user migration out of document modernization', () => {
    render(<MemoryRouter initialEntries={['/work/document-modernization']}><AppRoutes /></MemoryRouter>)

    expect(screen.queryByText(/9,000\+ users/)).not.toBeInTheDocument()
    expect(screen.getByText(/The CIO made the final decision/)).toBeInTheDocument()
  })

  it('connects all three studies and returns to Selected Work', () => {
    render(<MemoryRouter initialEntries={['/work/digital-lending']}><AppRoutes /></MemoryRouter>)

    fireEvent.click(screen.getByRole('link', { name: /Next case study: Modernizing Enterprise Document Management/ }))
    expect(screen.getByRole('heading', { level: 1, name: 'Modernizing Enterprise Document Management' })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('link', { name: /Next case study: Simplifying How Projects Get Done/ }))
    expect(screen.getByRole('heading', { level: 1, name: 'Simplifying How Projects Get Done' })).toBeInTheDocument()

    fireEvent.click(within(screen.getByRole('navigation', { name: 'Case study navigation' })).getByRole('link', { name: 'Back to Selected Work' }))
    expect(screen.getByRole('heading', { level: 2, name: 'Selected Work' })).toBeInTheDocument()
    expect(Element.prototype.scrollIntoView).toHaveBeenCalled()
  })
})
