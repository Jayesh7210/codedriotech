# codedriotech.com

Website for CodeDrio Technologies. The design idea: the site is cut by the bar from the CodeDrio mark
(`c / D`): plain words on one side, the system that runs them on the other. See `DESIGN.md`.

## Stack

React 19 + Vite, GSAP + Lenis for motion, plain CSS with tokens. A small history router in `src/App.jsx`;
`npm run build` prerenders every route to static HTML (titles, meta, OG, JSON-LD, sitemap, robots, 404).

## Commands

```bash
npm run dev      # development server
npm run build    # client build + SSR build + prerender into dist/
npm run preview  # serve dist/ on http://127.0.0.1:4400 (clean URLs + 404)
npm run lint
```

## Editing content

Every visible string lives in `src/data/site.js`. Items marked `placeholder: true` are assumptions to confirm
(domain, inbox, location, reply time). Deploy `dist/` to any static host (Vercel, Netlify, Cloudflare Pages).
