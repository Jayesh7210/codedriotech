import { useEffect, useRef, useState } from 'react'
import { nav, site } from '../data/site'

export const segment = (path) => (path === '/' ? 'home' : path.slice(1))

/** The bar from the CodeDrio mark. Decorative everywhere it appears. */
export const Bar = ({ className = '' }) => <span className={`bar ${className}`} aria-hidden="true" />

export function Arrow() {
  return (
    <svg className="arrow" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
      <path d="M2 8h11M9 3.5 13.5 8 9 12.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

/** Primary action: a parallelogram cut at the mark's angle; the fill wipes in on the same diagonal. */
export function Btn({ href, children, tone = 'ink', type, ...rest }) {
  const inner = (
    <>
      <span className="btn__label">{children}</span>
      <Arrow />
    </>
  )
  if (type) return <button type={type} className={`btn btn--${tone}`} {...rest}>{inner}</button>
  return <a href={href} className={`btn btn--${tone}`} {...rest}>{inner}</a>
}

/** Live count to launch. Server HTML shows the date; the client fills in the time left. */
export function Countdown({ className = '' }) {
  return (
    <span className={`countdown ${className}`}>
      <span data-countdown>Opens {site.launchLabel}</span>
    </span>
  )
}

/** Inner-page hero: the page name as a path, cut in by the bar. */
export function Poster({ title, lede, children }) {
  return (
    <header className="poster grid">
      <h1 className="poster__title">
        <Bar className="poster__bar" />
        <span className="poster__clip"><span className="poster__word" data-poster>{title}</span></span>
      </h1>
      {lede && <p className="poster__lede" data-split="lines" data-intro data-delay="0.35">{lede}</p>}
      {children}
    </header>
  )
}

function Header({ path }) {
  const [open, setOpen] = useState(false)
  const btn = useRef(null)
  const menu = useRef(null)

  useEffect(() => {
    if (!open) return
    const links = [...menu.current.querySelectorAll('a')]
    links[0]?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') { setOpen(false); btn.current?.focus() }
      if (e.key !== 'Tab') return
      const items = [btn.current, ...links]
      const i = items.indexOf(document.activeElement)
      const next = e.shiftKey ? (i <= 0 ? items.length - 1 : i - 1) : (i + 1) % items.length
      e.preventDefault()
      items[next].focus()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <img className="hdr-mark" src="/img/mark.webp" alt="" width="160" height="158" />
      <header className="hdr">
        <a className="hdr__home" href="/" data-tone-probe>
          <span className="sr-only">CodeDrio Technologies, </span>
          <span className="hdr__path">
            codedrio<span className="hdr__slash">/</span><span className="hdr__seg">{segment(path)}</span>
          </span>
        </a>
        <nav className="hdr__nav" aria-label="Main">
          <ul>
            {nav.map((n) => (
              <li key={n.path}>
                <a className="nav-link" data-tone-probe href={n.path} aria-current={path === n.path ? 'page' : undefined}>
                  <span className="nav-link__mark" aria-hidden="true" />
                  <span className="nav-link__label">{n.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          ref={btn}
          className="hdr__menu"
          data-tone-probe
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </header>
      <nav id="menu" ref={menu} className="menu" data-tone="ink" data-open={open || undefined} aria-label="Menu" inert={!open || undefined}>
        <ul>
          {[{ path: '/', label: 'Home' }, ...nav].map((n) => (
            <li key={n.path}>
              <a href={n.path} aria-current={path === n.path ? 'page' : undefined} onClick={() => setOpen(false)}>
                <span className="menu__slash" aria-hidden="true">/</span>{n.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="menu__foot"><a href={`mailto:${site.email}`}>{site.email}</a></p>
      </nav>
    </>
  )
}

function Footer() {
  return (
    <footer className="ftr" data-tone="ink">
      <div className="ftr__top grid">
        <div className="ftr__col ftr__col--lead">
          <p className="ftr__lead">Tell us what you are building.</p>
          <Btn href="/contact" tone="ground">Start a project</Btn>
        </div>
        <nav className="ftr__col ftr__col--nav" aria-label="Footer">
          <h2 className="ftr__h">Pages</h2>
          <ul>
            <li><a className="u-link" href="/">Home</a></li>
            {nav.map((n) => <li key={n.path}><a className="u-link" href={n.path}>{n.label}</a></li>)}
          </ul>
        </nav>
        <div className="ftr__col ftr__col--mail">
          <h2 className="ftr__h">Email</h2>
          <p><a className="u-link" href={`mailto:${site.email}`}>{site.email}</a></p>
        </div>
        <div className="ftr__col ftr__col--launch">
          <h2 className="ftr__h">Public launch</h2>
          <p><Countdown /></p>
        </div>
      </div>
      <p className="ftr__word" aria-hidden="true">
        <span>Code</span><span>Drio</span>
      </p>
      <div className="ftr__base grid">
        <p>© 2026 {site.name}</p>
        <p>{site.location}</p>
      </div>
    </footer>
  )
}

export default function Layout({ path, children }) {
  const home = path === '/'
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div id="loader" className={home ? 'is-home' : undefined} role="status" aria-label="Loading">
        <span className="bar loader__bar" data-loader-bar aria-hidden="true" />
        <p className="loader__word" data-loader-out>codedrio<span>/</span></p>
        <p className="loader__count" data-loader-out><span data-loader-count>000</span></p>
      </div>
      <div id="curtain" aria-hidden="true">
        <div className="curtain__panel" />
        <Bar className="curtain__bar" />
        <div className="curtain__path">codedrio<span>/</span><span data-curtain-seg /></div>
      </div>
      <Header path={path} />
      <main id="main" tabIndex={-1}>{children}</main>
      <Footer />
    </>
  )
}
