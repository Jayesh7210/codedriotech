import { services } from '../data/site'
import { Btn, Poster } from '../components/Layout'

export default function Services() {
  return (
    <>
      <Poster
        title="Services"
        lede="Six practices, one team. We pick up a brief at whatever stage it is in and take it to production."
      />
      <div className="svc-list">
        {services.map((s) => (
          <section key={s.slug} id={s.slug} className="svc grid" aria-labelledby={`${s.slug}-h`}>
            <div className="svc__head">
              <p className="svc__path">/{s.slug}</p>
              <h2 id={`${s.slug}-h`} className="svc__name" data-split="lines">{s.name}</h2>
            </div>
            <div className="svc__body">
              <p className="svc__summary" data-split="lines">{s.summary}</p>
              <h3 className="svc__h">What you get</h3>
              <ul className="svc__deliver">
                {s.deliver.map((d) => <li key={d}>{d}</li>)}
              </ul>
              <h3 className="svc__h">Usually built with</h3>
              <ul className="tags">
                {s.stack.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
          </section>
        ))}
      </div>
      <section className="closer grid" aria-labelledby="closer-h">
        <h2 id="closer-h" className="closer__title" data-split="lines">Not sure which one you need?</h2>
        <p className="closer__copy">Describe the problem instead. We will tell you honestly whether we are the right team for it.</p>
        <div className="closer__cta"><Btn href="/contact">Start a project</Btn></div>
      </section>
    </>
  )
}
