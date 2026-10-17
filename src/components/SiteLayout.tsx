import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

const navigation = [
  { label: 'Home', path: '/' },
  { label: 'Work', path: '/work' },
  { label: 'Approach', path: '/approach' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)
  const location = useLocation()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [location.key])

  useEffect(() => {
    const previous = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'
    return () => { window.history.scrollRestoration = previous }
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButton.current?.focus()
      }
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" to="/" onClick={() => setMenuOpen(false)}>Jeremy Joyner</Link>
          <button
            ref={menuButton}
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? 'Close menu' : 'Menu'}
          </button>
          <nav id="primary-navigation" className={`site-nav${menuOpen ? ' is-open' : ''}`} aria-label="Primary navigation">
            {navigation.map((item) => (
              <NavLink key={item.path} to={item.path} end={item.path === '/'} onClick={() => setMenuOpen(false)}>{item.label}</NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main id="main"><Outlet /></main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <span>Jeremy Joyner</span>
          <span>Technology &amp; AI Transformation Leader</span>
        </div>
      </footer>
    </div>
  )
}
