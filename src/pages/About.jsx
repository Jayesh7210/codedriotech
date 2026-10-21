import { principles, process } from '../data/site'
import { Btn, Poster } from '../components/Layout'

export default function About() {
  return (
    <>
      <Poster
        title="About"
        lede="CodeDrio is a software and AI engineering company. We take products from a rough brief to production, and we stay to run them."
      />

      <section className="drio grid" aria-labelledby="drio-h">
        <figure className="drio__fig" data-reveal="cut">
          <img src="/img/drio.webp" alt="Drio, the CodeDrio mascot: a small white robot with cyan and violet trim, waving." width="582" height="900" loading="lazy" decoding="async" />
        </figure>
        <div className="drio__text">
          <h2 id="drio-h" className="drio__title" data-split="lines">Code, then Drio.</h2>
          <p>
            Our name is two words cut by a slash, and so is our mark: a lowercase c, a bar, a capital D. The bar is the
            line between what a product promises and the system that has to keep that promise. We work on both sides of it.
          </p>
          <p>
            Drio is our mascot. You will mostly meet Drio when something goes missing, which on this site means a page
            that does not exist.
          </p>
        </div>
      </section>

      <section className="steps" data-tone="ink" aria-labelledby="steps-h">
        <div className="grid">
          <h2 id="steps-h" className="steps__title" data-split="lines">How a project runs</h2>
        </div>
        <ol className="steps__list grid">
          {process.map((p, i) => (
            <li key={p.name} className="step" data-reveal="cut" data-delay={i * 0.06}>
              <span className="step__n" aria-hidden="true">{i + 1}</span>
              <h3 className="step__name">{p.name}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="rules grid" aria-labelledby="rules-h">
        <h2 id="rules-h" className="rules__title" data-split="lines">Three rules we keep</h2>
        <ul className="rules__list">
          {principles.map((p) => (
            <li key={p.name}>
              <h3 className="rules__name">{p.name}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ul>
        <div className="rules__cta"><Btn href="/contact">Start a project</Btn></div>
      </section>
    </>
  )
}
