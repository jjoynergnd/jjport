import { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const navigation = [
  { label: 'Work', href: '/#work' },
  { label: 'Approach', href: '/#approach' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]

export function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      document.getElementById(location.hash.slice(1))?.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.hash])

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" to="/" onClick={() => setMenuOpen(false)}>Jeremy Joyner</Link>
          <button
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
              <Link key={item.href} to={item.href} onClick={() => setMenuOpen(false)}>{item.label}</Link>
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
