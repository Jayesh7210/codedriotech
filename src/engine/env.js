export const prefersReducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
export const isTouch = () => matchMedia('(hover: none), (pointer: coarse)').matches;
export const isMobile = () => matchMedia('(max-width: 767px)').matches;

// Shared easing vocabulary. Use these names everywhere; never invent per-component curves.
export const ease = {
  out: 'expo.out',
  inOut: 'expo.inOut',
  soft: 'power3.out',
};

// The CodeDrio mark: the bar between c and D leans 48.5deg from horizontal.
// Every diagonal on the site (reveals, wipes, transitions, buttons) uses this.
export const SLASH = (48.5 * Math.PI) / 180;
export const COT = 1 / Math.tan(SLASH); // horizontal run per unit of height (0.885)
