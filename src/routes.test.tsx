import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { AppRoutes } from './routes'

const routes = [
  ['/', 'Making complex problems simpler.'],
  ['/work/digital-lending', 'Digital lending'],
  ['/work/document-modernization', 'Document modernization'],
  ['/work/operating-model', 'Operating model'],
  ['/projects/front-office-simulation', 'Front office simulation'],
] as const

describe('portfolio routes', () => {
  it.each(routes)('renders %s', (path, heading) => {
    render(<MemoryRouter initialEntries={[path]}><AppRoutes /></MemoryRouter>)
    expect(screen.getByRole('heading', { level: 1, name: heading })).toBeInTheDocument()
  })
})
