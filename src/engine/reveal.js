// Declarative motion through data attributes:
//   data-split="lines|words"   masked text reveal: lines arrive along the slash diagonal
//   data-reveal="cut|fade"     block reveal: `cut` wipes open on the slash angle
//   data-intro                 play with the page intro instead of on scroll
//   data-delay="0.2"           extra delay (seconds)
// Every effect is skipped under reduced motion; CSS keeps content visible without JS.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { ease, prefersReducedMotion, COT } from './env';

gsap.registerPlugin(ScrollTrigger, SplitText);

// Diagonal wipe: the right edge of the visible area leans like the mark's bar.
// p 0 → hidden, 1 → fully open. s = how far the top runs ahead of the bottom, in %.
export const cutPath = (p, s = 30) => {
  const e = -s + p * (100 + s);
  return `polygon(0% 0%, ${e + s}% 0%, ${e}% 100%, 0% 100%)`;
};

function splitTween(el, isIntro) {
  const type = el.dataset.split || 'lines';
  const delay = parseFloat(el.dataset.delay || '0');
  const s = { tween: undefined, done: false, requested: false };
  SplitText.create(el, {
    type: type === 'lines' ? 'lines' : `lines,${type}`,
    mask: 'lines',
    autoSplit: true,
    linesClass: 'split-line',
    onSplit(self) {
      gsap.set(el, { visibility: 'visible' });
      if (s.done) return;
      const targets = type === 'lines' ? self.lines : self.words;
      // Move along the slash: up 110% of the line, and left by the same height × cot(angle).
      s.tween = gsap.from(targets, {
        yPercent: 110,
        x: (i, t) => -t.offsetHeight * 1.1 * COT,
        duration: type === 'lines' ? 1.15 : 1,
        stagger: type === 'lines' ? 0.07 : 0.03,
        ease: ease.out,
        delay,
        paused: isIntro && !s.requested,
        onComplete: () => { s.done = true; },
        scrollTrigger: isIntro ? undefined : { trigger: el, start: 'top 88%', once: true },
      });
      return s.tween;
    },
  });
  return () => { s.requested = true; s.tween?.play(); };
}

function blockTween(el, paused) {
  const kind = el.dataset.reveal || 'cut';
  const delay = parseFloat(el.dataset.delay || '0');
  gsap.set(el, { visibility: 'visible' });
  if (kind === 'fade') {
    return gsap.fromTo(el, { autoAlpha: 0 }, {
      autoAlpha: 1, duration: 1, ease: ease.out, delay, paused,
      scrollTrigger: paused ? undefined : { trigger: el, start: 'top 90%', once: true },
    });
  }
  const o = { p: 0 };
  el.style.clipPath = cutPath(0);
  return gsap.to(o, {
    p: 1, duration: 1.3, ease: ease.out, delay, paused,
    onUpdate: () => { el.style.clipPath = cutPath(o.p); },
    onComplete: () => { el.style.clipPath = ''; },
    scrollTrigger: paused ? undefined : { trigger: el, start: 'top 90%', once: true },
  });
}

/** Wire every reveal inside `root`. Returns the intro timeline (paused) for the page entrance. */
export function initReveals(root = document) {
  const intro = gsap.timeline({ paused: true });
  if (prefersReducedMotion()) return intro;
  root.querySelectorAll('[data-split]').forEach((el) => {
    const isIntro = el.hasAttribute('data-intro');
    const play = splitTween(el, isIntro);
    if (isIntro) intro.add(play, 0);
  });
  root.querySelectorAll('[data-reveal]').forEach((el) => {
    const isIntro = el.hasAttribute('data-intro');
    const t = blockTween(el, isIntro);
    if (isIntro) intro.add(() => t.play(), 0);
  });
  return intro;
}
