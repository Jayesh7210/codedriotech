// Engine core: page lifecycle. No DOM access at import time (safe in the prerender).
//   boot(setup)          once, on first load: setup → loader → page init → intro
//   leave(to) → cleanup  before the route swaps
//   enter()              after the new page is in the DOM: init → enter animation → intro
// onPage(fn): fn runs on every page load inside a gsap.context, reverted automatically.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initScroll, resetScroll, startScroll, stopScroll } from './scroll';
import { initReveals } from './reveal';
import { runLoader } from './loader';
import { playEnter, playLeave } from './transition';
import { prefersReducedMotion } from './env';

export { onScroll, scrollState, scrollToTarget, stopScroll, startScroll } from './scroll';
export { setTransition } from './transition';
export { setLoaderFormat, setLoaderExit } from './loader';
export { cutPath } from './reveal';
export { ease, isTouch, isMobile, prefersReducedMotion, SLASH, COT } from './env';

const pageFns = new Set();
const cleanups = [];
let ctx = null;
let intro = null;
let ready = false;
let booted = false;

export function onPage(fn) {
  pageFns.add(fn);
  if (ready) runPageFn(fn);
  return () => { pageFns.delete(fn); };
}

function runPageFn(fn) {
  ctx?.add(() => {
    const c = fn({ intro, path: location.pathname });
    if (typeof c === 'function') cleanups.push(c);
  });
}

export function syncFlags() {
  const h = document.documentElement.classList;
  h.add('js', 'is-booted');
  h.toggle('motion', !prefersReducedMotion());
}

function initPage() {
  syncFlags();
  ctx = gsap.context(() => { intro = initReveals(document); });
  ready = true;
  pageFns.forEach(runPageFn);
  requestAnimationFrame(() => ScrollTrigger.refresh());
}

export async function boot(setup) {
  if (booted) return;
  booted = true;
  syncFlags();
  initScroll();
  setup?.();
  stopScroll();
  initPage();
  await runLoader();
  startScroll();
  intro?.play();
}

export async function leave(to) {
  stopScroll();
  await playLeave(to);
}

export function cleanup() {
  if (!ready) return;
  ready = false;
  cleanups.splice(0).forEach((c) => c());
  ctx?.revert();
  ctx = null;
}

export async function enter({ transition = true, scrollTop = true } = {}) {
  if (!booted) return;
  cleanup();
  if (scrollTop) resetScroll();
  initPage();
  if (transition) await playEnter();
  startScroll();
  intro?.play();
}
