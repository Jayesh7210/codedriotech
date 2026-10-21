// Global motion, registered once before boot. Everything diagonal uses the mark's angle (COT).
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onPage, onScroll, setTransition, setLoaderFormat, setLoaderExit, ease, isTouch, prefersReducedMotion, COT, cutPath } from '../engine'
import { site } from '../data/site'

const SIN = Math.sin((48.5 * Math.PI) / 180)

// Horizontal half-width of a bar element (its perpendicular thickness / sin angle / 2).
const halfRun = (bar) => (bar ? bar.offsetWidth / SIN / 2 : 0)
// Slant of a full-height diagonal edge across a box, in % of its width.
const slant = (w, h) => ((h * COT) / w) * 100

/* ---------- The hero: one variable (--cx) places the bar; scroll, pointer and time feed it ---------- */

const pointer = { x: 0, aim: 0 }
function hero() {
  onPage(() => {
    const stage = document.querySelector('[data-hero]')
    if (!stage) return
    const bar = stage.querySelector('.stage__bar')
    const reduced = prefersReducedMotion()
    let W = 0, H = 0, hw = 0, rest = 0.64, p = 0
    const measure = () => {
      W = stage.clientWidth
      H = stage.clientHeight
      hw = halfRun(bar)
      rest = parseFloat(getComputedStyle(stage).getPropertyValue('--rest')) || 0.64
    }
    measure()
    const place = (t = 0) => {
      // Hold still until the loader has handed over, so its edge lines up with this bar.
      const live = !reduced && document.documentElement.classList.contains('is-loaded')
      const lean = live ? pointer.x * 0.07 * W + Math.sin(t * 0.55) * 0.012 * W : 0
      const start = rest * W + lean
      const end = -(H / 2) * COT - hw * 2 // past the left edge: the whole frame is system
      const k = gsap.parseEase('power2.inOut')(p)
      stage.style.setProperty('--cx', `${start + (end - start) * k}px`)
    }
    place()
    if (reduced) return () => stage.style.removeProperty('--cx')

    const tick = (t) => {
      pointer.x += (pointer.aim - pointer.x) * (1 - Math.pow(0.94, gsap.ticker.deltaRatio()))
      place(t)
    }
    const st = ScrollTrigger.create({
      trigger: stage.parentElement,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (s) => { p = s.progress },
      onToggle: (s) => (s.isActive ? gsap.ticker.add(tick) : gsap.ticker.remove(tick)),
    })
    // The hero sits at the top: it is in view on load even before the trigger reports.
    gsap.ticker.add(tick)
    const onMove = (e) => { pointer.aim = e.clientX / innerWidth - 0.5 }
    if (!isTouch()) addEventListener('pointermove', onMove, { passive: true })
    addEventListener('resize', measure)
    return () => {
      gsap.ticker.remove(tick)
      st.kill()
      removeEventListener('pointermove', onMove)
      removeEventListener('resize', measure)
    }
  })
}

/* ---------- Header tone: each item checks what sits under its centre ---------- */

const INK = '[data-tone="ink"], .stage__dark, .stage__bar, .ftr, .menu[data-open]'
const onInk = (x, y, skip) => {
  const under = document.elementsFromPoint(x, y)
    .find((n) => !(skip && skip.contains(n)) && !n.closest('.hdr') && !n.classList.contains('hdr-mark') && n !== document.documentElement && n !== document.body)
  return !!under?.closest(INK)
}
function headerTone() {
  // At the top the header is transparent and each item reads what is under it (the hero split).
  // Once scrolled it becomes a solid band in the tone of the section beneath, so it never sits on text.
  const check = () => {
    const hdr = document.querySelector('.hdr')
    if (!hdr) return
    const below = document.elementsFromPoint(innerWidth / 2, hdr.offsetHeight + 2).find((n) => !n.closest('.hdr'))
    const solid = scrollY > 80 && !below?.closest('.stage') // the hero keeps its full-bleed cut
    hdr.classList.toggle('is-solid', solid)
    const bandInk = solid && onInk(innerWidth / 2, hdr.offsetHeight + 2)
    hdr.classList.toggle('is-ink', bandInk)
    document.querySelectorAll('[data-tone-probe]').forEach((el) => {
      if (solid && hdr.contains(el)) return el.classList.toggle('on-ink', bandInk)
      const r = el.getBoundingClientRect()
      if (!r.width) return
      el.classList.toggle('on-ink', onInk(r.left + r.width / 2, r.top + r.height / 2, el))
    })
  }
  gsap.ticker.add(check) // the hero bar moves under the nav at rest, so this runs every frame (5 hit tests)
}

/* ---------- The header steps aside while reading down, returns on the way up ---------- */

function frameAway() {
  let last = 0
  const h = document.documentElement.classList
  onScroll(({ y }) => {
    if (Math.abs(y - last) < 6) return
    h.toggle('frame-away', y > 160 && y > last && !document.querySelector('.menu[data-open]'))
    last = y
  })
  onPage(() => { h.remove('frame-away'); last = 0 })
}

/* ---------- Sections that cut in on scroll (the ground returns along the bar) ---------- */

function cuts() {
  onPage(() => {
    if (prefersReducedMotion()) return
    document.querySelectorAll('[data-cut]').forEach((el) => {
      const bar = el.querySelector('.cut__bar')
      const draw = (p) => {
        const s = slant(el.clientWidth, el.clientHeight)
        el.style.clipPath = cutPath(p, s)
        if (!bar) return
        const e = -s + p * (100 + s) // bottom of the edge, % of width
        const mid = ((e + s / 2) / 100) * el.clientWidth
        bar.style.translate = `${mid - halfRun(bar)}px -50%`
        bar.style.opacity = p > 0.995 ? '0' : '1'
      }
      draw(0)
      ScrollTrigger.create({
        trigger: el,
        start: 'top bottom',
        end: 'top 15%',
        scrub: 0.6,
        onUpdate: (s) => draw(s.progress),
        onRefresh: (s) => draw(s.progress),
      })
    })
  })
}

/* ---------- Inner-page poster: the bar cuts in, the word steps out from behind it ---------- */

function posters() {
  onPage(({ intro }) => {
    const word = document.querySelector('[data-poster]')
    const bar = document.querySelector('.poster__bar')
    if (!word || prefersReducedMotion()) return
    gsap.set(bar, { scaleY: 0 })
    gsap.set(word, { xPercent: -104 })
    intro.add(gsap.to(bar, { scaleY: 1, duration: 0.7, ease: ease.out }), 0)
    intro.add(gsap.to(word, { xPercent: 0, duration: 1.1, ease: ease.out }), 0.18)
  })
}

/* ---------- Countdown to the real launch date ---------- */

const two = (n) => String(n).padStart(2, '0')
function countdown() {
  onPage(() => {
    const els = [...document.querySelectorAll('[data-countdown]')]
    if (!els.length) return
    const target = new Date(site.launch).getTime()
    const reduced = prefersReducedMotion()
    let last = ''
    const tick = () => {
      const d = Math.max(0, target - Date.now())
      const s = Math.floor(d / 1000)
      const days = Math.floor(s / 86400)
      const text = d === 0
        ? 'Open now'
        : reduced
          ? `${days} days to launch`
          : `${days}d ${two(Math.floor((s % 86400) / 3600))}:${two(Math.floor((s % 3600) / 60))}:${two(s % 60)} to launch`
      if (text === last) return
      last = text
      els.forEach((el) => { el.textContent = text })
    }
    tick()
    if (reduced) return
    gsap.ticker.add(tick)
    return () => gsap.ticker.remove(tick)
  })
}

/* ---------- Loader: the mark's bar draws itself, then the dark is cut open up to it ---------- */

function loader() {
  setLoaderFormat((p) => String(Math.round(p)).padStart(3, '0'))
  setLoaderExit((root) => {
    const bar = root.querySelector('.loader__bar')
    const stage = document.querySelector('[data-hero]')
    const W = root.clientWidth, H = root.clientHeight
    const hw = halfRun(bar)
    const s = slant(W, H)
    // Home: stop at the hero's bar, so the loader becomes the hero's dark side. Elsewhere: cut all the way.
    const cx = stage ? parseFloat(stage.style.getPropertyValue('--cx')) || W * 0.64 : null
    const stopAt = cx === null ? 100 + s : ((cx + hw + (H / 2) * COT) / W) * 100 // top x of the dark edge, %
    const o = { e: 0 }
    const tl = gsap.timeline()
    tl.to(root.querySelectorAll('[data-loader-out]'), { autoAlpha: 0, y: -12, duration: 0.3, ease: ease.soft })
    if (cx === null) tl.to(bar, { autoAlpha: 0, duration: 0.3 }, 0)
    tl.to(o, {
      e: stopAt,
      duration: 0.75,
      ease: ease.inOut,
      onUpdate: () => {
        // Visible ink = right of a diagonal edge whose top sits at o.e%.
        root.style.clipPath = `polygon(${o.e}% 0%, 100% 0%, 100% 100%, ${o.e - s}% 100%)`
      },
    }, 0.1)
    return tl
  })
}

/* ---------- Page transition: an ink panel sweeps in behind the bar, carrying the next path ---------- */

function transition() {
  setTransition({
    leave: (c, to) => {
      const panel = c.querySelector('.curtain__panel')
      const bar = c.querySelector('.curtain__bar')
      const label = c.querySelector('.curtain__path')
      c.querySelector('[data-curtain-seg]').textContent = !to || to === '/' ? 'home' : to.slice(1)
      const W = innerWidth, H = innerHeight
      const s = slant(W, H)
      const hw = halfRun(bar)
      const o = { p: 0 }
      gsap.set(label, { autoAlpha: 0, x: -20 })
      return gsap.timeline()
        .set(c, { autoAlpha: 1 })
        .to(o, {
          p: 1,
          duration: 0.8,
          ease: ease.inOut,
          onUpdate: () => {
            panel.style.clipPath = cutPath(o.p, s)
            const e = -s + o.p * (100 + s)
            bar.style.translate = `${((e + s / 2) / 100) * W - hw}px -50%`
          },
        })
        .to(label, { autoAlpha: 1, x: 0, duration: 0.4, ease: ease.soft }, '-=0.25')
    },
    enter: (c) => {
      const panel = c.querySelector('.curtain__panel')
      const bar = c.querySelector('.curtain__bar')
      const label = c.querySelector('.curtain__path')
      const W = innerWidth, H = innerHeight
      const s = slant(W, H)
      const hw = halfRun(bar)
      const o = { p: 0 }
      return gsap.timeline()
        .to(label, { autoAlpha: 0, x: 20, duration: 0.25, ease: ease.soft })
        .to(o, {
          p: 1,
          duration: 0.8,
          ease: ease.inOut,
          onUpdate: () => {
            const e = -s + o.p * (100 + s)
            panel.style.clipPath = `polygon(${e + s}% 0%, 100% 0%, 100% 100%, ${e}% 100%)`
            bar.style.translate = `${((e + s / 2) / 100) * W + hw}px -50%`
          },
        }, 0.1)
        .set(c, { autoAlpha: 0 })
        .add(() => { panel.style.clipPath = '' })
    },
  })
}

export function setupMotion() {
  headerTone()
  frameAway()
  transition()
  loader()
  hero()
  cuts()
  posters()
  countdown()
}
