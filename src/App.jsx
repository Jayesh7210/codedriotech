// History router + engine adapter. Internal <a> clicks play the leave cut, swap the page,
// then enter() re-inits motion. Back/forward re-inits without the curtain.
import { useEffect, useRef, useState } from 'react'
import { boot, cleanup, enter, leave, onPage, scrollToTarget } from './engine'
import { setupMotion } from './motion/setup'
import { pages } from './data/site'
import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

const routes = { '/': Home, '/services': Services, '/about': About, '/contact': Contact }
export const routePaths = Object.keys(routes)
export const normalize = (p) => p.replace(/\/+$/, '') || '/'
export const known = (p) => p in routes

/** Component-level page code: runs when the page is ready, reverted on leave. */
export function usePage(fn) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => onPage(fn), [])
}

export default function App({ url }) {
  const [path, setPath] = useState(() => normalize(url ?? location.pathname))
  const mode = useRef('idle')
  const first = useRef(true)

  useEffect(() => { boot(setupMotion) }, [])

  useEffect(() => {
    const onClick = async (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = e.target.closest('a')
      if (!a || (a.target && a.target !== '_self') || a.hasAttribute('download')) return
      const next = new URL(a.href, location.href)
      if (next.origin !== location.origin) return
      if (normalize(next.pathname) === normalize(location.pathname)) {
        if (next.hash) { e.preventDefault(); scrollToTarget(next.hash) }
        return
      }
      e.preventDefault()
      if (mode.current !== 'idle') return
      mode.current = 'push'
      await leave(normalize(next.pathname))
      cleanup()
      history.pushState(null, '', next.pathname + next.search + next.hash)
      setPath(normalize(next.pathname))
    }
    const onPop = () => { mode.current = 'pop'; cleanup(); setPath(normalize(location.pathname)) }
    document.addEventListener('click', onClick, true)
    addEventListener('popstate', onPop)
    return () => {
      document.removeEventListener('click', onClick, true)
      removeEventListener('popstate', onPop)
    }
  }, [])

  useEffect(() => {
    if (first.current) { first.current = false; return }
    const pop = mode.current === 'pop'
    mode.current = 'idle'
    const meta = pages[path] || pages['/404']
    document.title = meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description)
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', new URL(path, location.origin).href)
    enter({ transition: !pop, scrollTop: !pop }).then(() => {
      document.getElementById('main')?.focus({ preventScroll: true }) // announce the new page
      if (location.hash) scrollToTarget(location.hash)
    })
  }, [path])

  const Page = routes[path] || NotFound
  return (
    <Layout path={known(path) ? path : '/404'}>
      <Page key={path} />
    </Layout>
  )
}
