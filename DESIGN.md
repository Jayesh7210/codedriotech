# CodeDrio Technologies: design record

## Brief

- Subject: CodeDrio Technologies, a software and AI engineering company opening publicly on 7 Dec 2026.
- Audience: founders and product or platform leads who need AI features, cloud infrastructure or a product built.
- Job: explain what the company builds in under 3 seconds and get a project conversation started (email).
- Assets: the logo (a lowercase `c` and an uppercase `D` cut apart by one diagonal bar, cyan to violet),
  the mascot Drio, an isometric system render. Portal images are not used.
- Stack: the existing React 19 + Vite project, kept. Added GSAP + Lenis, a 40-line history router,
  and a build-time prerender so every route ships real HTML (SEO, no-JS, LCP).
- Removed from the old site because they were not verifiable: waitlist counter, "SOC2 Type II", "99.999% SLA",
  "48 edge nodes", fake terminal logs, fake form success states, placeholder social links.

## Concepts considered

| | Idea | Anchor | Signature | O / F / Fe / P |
|---|---|---|---|---|
| A. Name / mark | **The slash.** The logo is `c / D`: two letters cut apart by one bar. The site is cut by that same bar: on one side the plain-language promise, on the other the system that runs it | the mark's diagonal bar and its exact angle | the hero bar sweeps across as you scroll and flips the page from words to system | 4 / 5 / 4 / 2 |
| B. Material | The site is a commit log; each service is a commit you can diff | software work | diffs resolve on scroll | 2 / 3 / 4 / 5 |
| C. Process | Launch sequence: the whole site counts down to 7 Dec 2026 | the real launch date | a T-minus clock that every page reads | 3 / 4 / 5 / 3 |

Pick A: it can only belong to this logo, it produces layout, motion, shape and copy rules, and it is cheap to build
well with clip-path and one CSS variable. Steal from C for a detail: the real launch countdown lives in the hero
corner and the launch section.

## Concept card

```
Idea:        The site is cut by the bar from the CodeDrio mark: words on one side, the system on the other.
Metaphor:    the slash between c and D (also the path separator: codedrio/services)
Signature:   hero sticky stage; one variable (--cx) places the bar; pointer leans it, time drifts it,
             scroll sweeps it across until the page is all system. Loader exit = the bar cutting the dark open.
Emotion:     precise, confident, a little playful (Drio appears where things go wrong)
Motion verb: cut along the slash: things enter on the 48.5° diagonal, fills wipe diagonally
Screenshot:  the hero split by the gradient bar: headline left, code + system render right
```

## System

Palette (from the logo):
- ground `#EEF0F4` (paper, the logo's white made cool)
- ink `#0A1230` (the wordmark navy)
- muted `#4B5573` on ground, `#A3ACCB` on ink
- line `rgb(10 18 48 / 0.14)` (ink 14%)
- accent `#2E4BFF` (the logo's middle blue: focus ring, button fill)
- slash gradient `#12C6FF → #2E4BFF → #9A3CFF`. Used ONLY on the bar. This is the purple-blue AI gradient
  the skill warns against; it is kept because it is the brand mark, and confined to one shape.
- curtain = ink

Type: Archivo variable (wdth 62 to 125, wght 100 to 900), one family, two personalities:
display at wdth 112 wght 780, tracking -0.04em, leading 0.9; text at wdth 100 wght 400, 17 px, leading 1.55.
JetBrains Mono 400 for paths and meta only (real path names, the countdown).

Grid: 12 columns, fluid gutter; text hangs from column 1 and column 7. Section rhythm: hero (full),
statement (airy), index (tight), launch (full), footer (normal).

Shape: nothing is rounded. Buttons and tags are parallelograms cut at the slash angle.

Motion: ease = expo.out / expo.inOut; text lines arrive along the diagonal vector; block reveals are diagonal
clip wipes; page transition = an ink panel whose leading edge is the gradient bar, sweeping left to right,
carrying the next path (`codedrio/about`). Idle: the hero bar drifts ±1.2% on the ticker and leans toward
the pointer. Everything still under reduced motion.

Hover treatments (one per role):
- buttons: accent fill wipes in on the diagonal, arrow travels
- nav: the slash marker cuts in before the label, label steps right
- index rows: ground fill wipes in on the diagonal, row inverts
- inline links: underline at rest, thickens
- utility: color only

## Composition plan

Home
```
[mark codedrio/home]                       [/services /about /contact  Start a project]
| We build AI systems    ////▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓|
| and the software      ////▓ build({ ai: ... ▓|   hero: split frame by the bar (sticky 180svh)
| that keeps them      ////▓▓ system render  ▓▓|
| running.            ////▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓|
| [Start a project]  ////▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓|
| studio line                       countdown  |
ink: statement set large across 9 columns
ink: index list of services, path | name | stack
light (cut in on scroll): launch poster, giant date numerals + CTA
ink: footer finale, giant codedrio/ wordmark, email, links
```
Services: path poster `/services` → six asymmetric pairs (label col 1 to 4, body col 6 to 12) → CTA
About: path poster → statement → Drio pair (image 5 cols, text 5 cols) → process sequence (4 real steps) → principles list
Contact: path poster → email set as display type → mailto form (no backend, honest) → what happens next
404: path poster of the missing path, Drio, way home

## Genericness test

- Centered hero over gradient blob → replaced by a split frame cut by the actual logo bar.
- Six equal service cards → an index list of paths.
- Rounded SaaS buttons → parallelograms at the mark angle.
- Gradient everywhere → one gradient shape.
- Eyebrow above every heading → path labels only where they are real anchors.

## Idle state

The hero bar drifts and leans on the GSAP ticker (paused when the hero is off screen, still under reduced motion).
Inner pages are still at rest by decision: their life is the hovers and the path poster intro.
