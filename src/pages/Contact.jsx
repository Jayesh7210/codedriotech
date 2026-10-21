import { useState } from 'react'
import { contact, site } from '../data/site'
import { Btn, Poster } from '../components/Layout'

export default function Contact() {
  const [sent, setSent] = useState(false)

  // No backend: the form writes the email for you and opens your mail app.
  const submit = (e) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const body = [
      `Name: ${f.get('name')}`,
      `Email: ${f.get('email')}`,
      f.get('company') && `Company: ${f.get('company')}`,
      `Interested in: ${f.get('interest')}`,
      '',
      f.get('message'),
    ].filter((l) => l !== null && l !== false).join('\n')
    location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Project: ${f.get('interest')}`)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <>
      <Poster title="Contact" lede="Tell us what you are building, where it is stuck and when it needs to ship.">
        <p className="mail">
          <a className="mail__link" href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      </Poster>

      <section className="form-wrap grid" aria-labelledby="form-h">
        <div className="form-wrap__side">
          <h2 id="form-h" className="form-wrap__title">Or fill this in</h2>
          <p>It opens your email app with the message written. Nothing is stored on this site.</p>
          <h3 className="svc__h">What happens next</h3>
          <ol className="next">
            {contact.next.map((n) => <li key={n}>{n}</li>)}
          </ol>
        </div>
        <form className="form" onSubmit={submit}>
          <div className="field">
            <label htmlFor="f-name">Your name</label>
            <input id="f-name" name="name" required autoComplete="name" />
          </div>
          <div className="field">
            <label htmlFor="f-email">Your email</label>
            <input id="f-email" name="email" type="email" required autoComplete="email" />
          </div>
          <div className="field">
            <label htmlFor="f-company">Company <span className="opt">(optional)</span></label>
            <input id="f-company" name="company" autoComplete="organization" />
          </div>
          <div className="field">
            <label htmlFor="f-interest">What it is about</label>
            <select id="f-interest" name="interest">
              {contact.interests.map((i) => <option key={i}>{i}</option>)}
            </select>
          </div>
          <div className="field field--wide">
            <label htmlFor="f-msg">The short version</label>
            <textarea id="f-msg" name="message" rows={5} required />
          </div>
          <div className="form__go">
            <Btn type="submit">Write the email</Btn>
            <p className="form__status" role="status">
              {sent && <>Your email app should be open now. If it is not, write to <a className="i-link" href={`mailto:${site.email}`}>{site.email}</a>.</>}
            </p>
          </div>
        </form>
      </section>
    </>
  )
}
