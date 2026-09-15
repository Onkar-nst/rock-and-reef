import { useState } from 'react'
import { company, nav } from '../data/site'
import { useScrolled, scrollToId } from '../hooks'
import { navigate } from '../router'
import QuoteModal from './QuoteModal'

export default function Header({ active, solid = false }) {
  const scrolled = useScrolled(60)
  const [open, setOpen] = useState(false)
  const [quote, setQuote] = useState(false)

  // Services, Projects, About and Contact have their own pages; Fleet is a home section.
  const go = (e, id) => {
    e.preventDefault()
    setOpen(false)
    if (id === 'services' || id === 'projects' || id === 'about' || id === 'contact') {
      navigate(`/${id}`)
      return
    }
    if (window.location.pathname === '/') scrollToId(id)
    else navigate('/', { hash: id === 'top' ? undefined : id })
  }

  return (
    <header className={`header ${solid || scrolled || open ? 'solid' : ''}`}>
      <div className="wrap header-top">
        <a className="logo" href="#top" onClick={(e) => go(e, 'top')} aria-label="Rock and Reef home">
          <img src="/img/Main-logo.png" alt="Rock and Reef Dredging" width="140" height="40" />
          <span className="logo-text">
            Dredging &amp;<br />Marine Works
          </span>
        </a>

        <nav className="nav" aria-label="Primary">
          {nav.map((n) => (
            <a
              key={n.id}
              href={['services', 'projects', 'about', 'contact'].includes(n.id) ? `/${n.id}` : `#${n.id}`}
              className={active === n.id ? 'active' : ''}
              onClick={(e) => go(e, n.id)}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="header-cta">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => { setOpen(false); setQuote(true) }}
          >
            Get a Quote
          </button>
          <button
            className="burger"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-nav">
          {nav.map((n) => (
            <a
              key={n.id}
              href={['services', 'projects', 'about', 'contact'].includes(n.id) ? `/${n.id}` : `#${n.id}`}
              onClick={(e) => go(e, n.id)}
            >
              {n.label}
            </a>
          ))}
          <a href={company.phoneHref}>Call {company.phone}</a>
        </div>
      )}

      <QuoteModal open={quote} onClose={() => setQuote(false)} />
    </header>
  )
}
