import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'

export default function NavBar() {
  const { t, lang, toggle } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { to: '/',               label: t.nav.home },
    { to: '/leistungen',     label: t.nav.leistungen },
    { to: '/mitgliedschaft', label: t.nav.mitgliedschaft },
    { to: '/kontakt',        label: t.nav.kontakt },
    { to: '/karriere',       label: t.nav.karriere },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 h-[72px] bg-white/95 backdrop-blur border-b border-warm-gray transition-shadow duration-200 ${scrolled ? 'shadow-md' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" aria-label="RDS e.V. Startseite">
          <div className="w-10 h-10 bg-navy-800 rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="font-serif text-gold-500 text-xl font-bold leading-none">R</span>
          </div>
          <div className="leading-tight">
            <div className="font-sans font-bold text-[15px] text-navy-800">RDS e.V.</div>
            <div className="font-sans text-[11px] text-navy-400 tracking-widest uppercase">Lohnsteuerhilfeverein</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Hauptnavigation">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `px-4 py-2 rounded-md text-sm font-sans transition-colors duration-150 ${
                  isActive
                    ? 'text-gold-600 font-semibold'
                    : 'text-navy-700 hover:text-gold-600 font-medium'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <button
            onClick={toggle}
            className="ml-4 px-3 py-1.5 border border-navy-300 rounded text-xs font-sans font-semibold text-navy-600 hover:border-navy-600 hover:bg-navy-50 transition-colors min-w-[36px]"
            aria-label={lang === 'de' ? 'Switch to English' : 'Zu Deutsch wechseln'}
          >
            {lang === 'de' ? 'EN' : 'DE'}
          </button>
        </nav>

        {/* Mobile: lang toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggle}
            className="px-2.5 py-1 border border-navy-300 rounded text-xs font-sans font-semibold text-navy-600"
            aria-label={lang === 'de' ? 'Switch to English' : 'Zu Deutsch wechseln'}
          >
            {lang === 'de' ? 'EN' : 'DE'}
          </button>
          <button
            className="p-2 rounded-md text-navy-700 hover:bg-navy-50 transition-colors"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile slide-in menu */}
      <div
        className={`md:hidden fixed top-[72px] right-0 h-[calc(100vh-72px)] w-72 bg-white border-l border-warm-gray shadow-xl transform transition-transform duration-300 z-40 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col p-6 gap-2" aria-label="Mobile Navigation">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={closeMenu}
              className={({ isActive }) =>
                `px-4 py-3 rounded-md text-sm font-sans transition-colors ${
                  isActive
                    ? 'bg-navy-50 text-gold-600 font-semibold'
                    : 'text-navy-700 hover:bg-navy-50 font-medium'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 top-[72px] bg-black/20 z-30"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </header>
  )
}
