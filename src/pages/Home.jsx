import { hero, services, site, statement } from '../data/site'
import { Bar, Btn, Countdown } from '../components/Layout'


export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="stage" data-hero>
          <div className="stage__light">
            {/* Fixed breaks per layout so a late font never re-wraps the headline. */}
            <h1 id="hero-title" className="hero__title">
              We build AI<br className="br-m" /> systems<br className="br-d" /> and<br className="br-m" /> the software<br />
              {' '}that keeps<br className="br-m" /> them<br className="br-d" /> running.
            </h1>
            <p className="hero__intro">{hero.intro}</p>
            <div className="hero__cta"><Btn href="/contact">Start a project</Btn></div>
          </div>

          {/* The other side of the bar: what we actually do, stepped along the cut. */}
          <nav className="stage__dark" aria-label="Practices">
            <ul className="paths">
              {services.map((s, i) => (
                <li key={s.slug} style={{ '--i': i }}>
                  <a className="path" href={`/services#${s.slug}`}>
                    <span className="path__slash" aria-hidden="true">/</span>
                    <span className="path__word">{s.slug}</span>
                    <span className="sr-only">: {s.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <Bar className="stage__bar" />

          <div className="stage__meta">
            <p data-tone-probe>Software and AI engineering</p>
            <p data-tone-probe><Countdown /></p>
          </div>
        </div>
      </section>

      <section className="statement" data-tone="ink" aria-label="What we believe">
        <p className="statement__text" data-split="lines">{statement}</p>
      </section>

      <section className="index" data-tone="ink" aria-labelledby="index-title">
        <div className="index__head grid">
          <h2 id="index-title" className="index__title" data-split="lines">Six things we build</h2>
          <p className="index__note" data-split="lines" data-delay="0.1">
            Each one can start on its own. Most projects end up touching three.
          </p>
        </div>
        <ul className="index__list">
          {services.map((s) => (
            <li key={s.slug}>
              <a className="row" href={`/services#${s.slug}`}>
                <span className="row__path">/{s.slug}</span>
                <span className="row__name">{s.name}</span>
                <span className="row__short">{s.short}</span>
                <span className="row__go" aria-hidden="true">→</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="launch" data-cut aria-labelledby="launch-title">
        <Bar className="cut__bar" />
        <div className="launch__in grid">
          <p className="launch__label">Public launch</p>
          <h2 id="launch-title" className="launch__date">
            <span className="sr-only">Opening {site.launchLong}</span>
            <span aria-hidden="true">{site.launchLabel}</span>
          </h2>
          <p className="launch__count"><Countdown /></p>
          <p className="launch__copy" data-split="lines">
            The doors open in December. Until then we are taking on a small number of early projects, and those teams
            get our full attention.
          </p>
          <div className="launch__cta"><Btn href="/contact">Start a project</Btn></div>
        </div>
      </section>
    </>
  )
}
