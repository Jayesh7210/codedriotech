// First-load sequence. Progress follows REAL work (fonts + critical images), with a floor
// so it reads as intentional and a ceiling so it never becomes a usability problem.
import { gsap } from 'gsap';
import { prefersReducedMotion } from './env';

let format = (p) => String(Math.round(p)).padStart(3, '0');
export const setLoaderFormat = (fn) => { format = fn; };
let exit = null;
export const setLoaderExit = (fn) => { exit = fn; };

const MIN = 0.8; // seconds
const MAX = 1.5; // progress cap; the exit adds ~0.8 s

function criticalAssets() {
  const imgs = [...document.querySelectorAll('img[data-critical]')];
  return [document.fonts.ready, ...imgs.map((i) => (i.complete ? Promise.resolve() : i.decode().catch(() => {})))];
}

export async function runLoader() {
  const root = document.getElementById('loader');
  if (!root || root.hidden) return;
  if (getComputedStyle(root).display === 'none') return finish(root); // touch: no loader (html.no-loader)
  if (prefersReducedMotion()) {
    await Promise.race([Promise.all(criticalAssets()), wait(MAX)]);
    await gsap.to(root, { autoAlpha: 0, duration: 0.3 });
    return finish(root);
  }
  const count = root.querySelector('[data-loader-count]');
  const bar = root.querySelector('[data-loader-bar]');
  const tasks = criticalAssets();
  let done = 0;
  const shown = { v: 0 };
  const target = { v: 0 };
  tasks.forEach((t) => t.then(() => { done++; target.v = (done / tasks.length) * 100; }));
  const start = performance.now();

  await new Promise((resolve) => {
    const tick = () => {
      const elapsed = (performance.now() - start) / 1000;
      const timeCap = Math.min(100, (elapsed / MIN) * 100);
      const goal = elapsed > MAX ? 100 : Math.min(target.v, timeCap);
      shown.v += (goal - shown.v) * (1 - Math.pow(0.86, gsap.ticker.deltaRatio()));
      if (goal === 100 && shown.v > 99.5) shown.v = 100;
      if (count) count.textContent = format(shown.v);
      if (bar) bar.style.transform = `scaleY(${shown.v / 100})`;
      if (shown.v === 100) { gsap.ticker.remove(tick); resolve(); }
    };
    gsap.ticker.add(tick);
  });

  if (exit) await exit(root);
  else await gsap.to(root, { autoAlpha: 0, duration: 0.5 });
  finish(root);
}

// Hide rather than remove: React owns the node.
function finish(root) {
  root.hidden = true;
  document.documentElement.classList.add('is-loaded');
  try { sessionStorage.setItem('cd-intro', '1'); } catch { /* private mode: loader again next visit */ }
}

const wait = (s) => new Promise((r) => setTimeout(r, s * 1000));
