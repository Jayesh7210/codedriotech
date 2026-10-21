// Page transitions. The adapter runs leave() before the route swaps. Look set with setTransition().
import { gsap } from 'gsap';
import { prefersReducedMotion } from './env';

let current = {
  leave: (c) => gsap.timeline().set(c, { autoAlpha: 1 }).fromTo(c, { opacity: 0 }, { opacity: 1, duration: 0.4 }),
  enter: (c) => gsap.to(c, { autoAlpha: 0, duration: 0.4 }),
};
const reduced = {
  leave: (c) => gsap.timeline().set(c, { autoAlpha: 1 }).fromTo(c, { opacity: 0 }, { opacity: 1, duration: 0.2 }),
  enter: (c) => gsap.to(c, { autoAlpha: 0, duration: 0.2 }),
};

export const setTransition = (t) => { current = t; };
const pick = () => (prefersReducedMotion() ? reduced : current);
const curtain = () => document.getElementById('curtain');

export const playLeave = (to) => Promise.resolve(pick().leave(curtain(), to));
export const playEnter = () => Promise.resolve(pick().enter(curtain()));
