import { usePage } from '../App'
import { Btn, Poster } from '../components/Layout'

export default function NotFound() {
  usePage(() => {
    const el = document.querySelector('[data-missing]')
    if (el) el.textContent = `codedrio${location.pathname}`
  })
  return (
    <>
      <Poster title="404" lede="This path does not resolve. Drio looked everywhere.">
        <div className="lost">
          <p className="lost__path"><code data-missing>codedrio/404</code></p>
          <img className="lost__drio" src="/img/drio.webp" alt="Drio the robot mascot, waving." width="582" height="900" />
          <Btn href="/">Back to codedrio/home</Btn>
        </div>
      </Poster>
    </>
  )
}
