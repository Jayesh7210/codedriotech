// Build-time prerender: every route ships real HTML with its own title, description,
// canonical, OG tags and JSON-LD. Also writes 404.html, sitemap.xml and robots.txt.
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const dist = path.resolve('dist')
const { render, routePaths, pages, site } = await import(pathToFileURL(path.resolve('dist-ssr/entry-server.js')).href)
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

function head(route) {
  const meta = pages[route]
  const url = new URL(route === '/404' ? '/' : route, site.url).href
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: site.url,
    email: site.email,
    logo: new URL('/apple-touch-icon.png', site.url).href,
    description: site.description,
  }
  return [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    route === '/404' ? '<meta name="robots" content="noindex" />' : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(site.name)}" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${new URL('/og.png', site.url).href}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta name="twitter:image" content="${new URL('/og.png', site.url).href}" />`,
    route === '/' ? `<script type="application/ld+json">${JSON.stringify(ld)}</script>` : '',
  ].filter(Boolean).join('\n  ')
}

for (const route of [...routePaths, '/404']) {
  const html = template.replace('<!--app-head-->', head(route)).replace('<!--app-html-->', render(route))
  const file = route === '/' ? 'index.html' : route === '/404' ? '404.html' : `${route.slice(1)}/index.html`
  fs.mkdirSync(path.dirname(path.join(dist, file)), { recursive: true })
  fs.writeFileSync(path.join(dist, file), html)
  console.log('prerendered', route, '→', file)
}

const today = new Date().toISOString().slice(0, 10)
fs.writeFileSync(path.join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routePaths.map((r) => `  <url><loc>${new URL(r, site.url).href}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`)
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', site.url).href}\n`)
fs.rmSync(path.resolve('dist-ssr'), { recursive: true, force: true })
