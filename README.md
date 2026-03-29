# Astro Monograph

A clean, minimal, single-page portfolio theme for [Astro](https://astro.build). All content is driven by YAML files — edit your data, deploy, done.

**[Live Demo](https://monograph.theserverless.dev)**

![Astro Monograph](https://img.shields.io/badge/astro-v6-blue?logo=astro) ![Tailwind](https://img.shields.io/badge/tailwind-v4-38bdf8?logo=tailwindcss&logoColor=white) ![License](https://img.shields.io/badge/license-MIT-green)

## Features

- **YAML-driven content** — no CMS, no markdown, no database
- **Astro v6** — static site generation, zero client JS by default
- **Tailwind CSS v4** — utility-first styling with a custom design system
- **Lord Icon animations** — animated icons with morph triggers and scroll-reveal
- **Scroll-triggered reveals** — smooth fade-in animations as you scroll
- **Mobile responsive** — looks great on all screen sizes
- **Accessible** — semantic HTML, keyboard navigation, `prefers-reduced-motion` support
- **SEO optimized** — JSON-LD structured data, Open Graph, Twitter cards, sitemap, canonical URLs, meta generator tag
- **One-command deploy** — GitHub Pages workflow included; works with Vercel/Netlify out of the box

## Quick Start

```bash
git clone https://github.com/theserverlessdev/astro-monograph.git my-portfolio
cd my-portfolio
npm install
npm run dev
```

Open `src/data/` and replace the placeholder content with your own.

## Content Structure

All text content lives in YAML files under `src/data/`:

| File | What it controls |
|------|-----------------|
| `site.yaml` | Site title, description, name, email, social links, nav items, OG image, theme color |
| `hero.yaml` | Hero section — subtitle, name, description, CTAs |
| `about.yaml` | About section — bio paragraphs, stat cards |
| `experience.yaml` | Work timeline — companies, roles, dates, tech stacks |
| `projects.yaml` | Project cards — with status filtering and expand/collapse |
| `skills.yaml` | Categorized skill tags |
| `education.yaml` | Degree, institution, highlights |
| `contact.yaml` | Contact CTA text, email icon, footer attribution |

Reference data is also available in `example-data/` if you need to see the expected format.

## Customization

### Colors

The accent color is defined in `src/styles/global.css`. Update the `@theme` block:

```css
@theme {
  --color-cern-blue: #2E5090;       /* main accent */
  --color-cern-blue-light: #3A6BC5; /* hover state */
  --color-cern-blue-dark: #103877;  /* dark variant */
  --color-cern-blue-wash: #EBF0F9;  /* light background tint */
}
```

### Fonts

Three font families loaded from Google Fonts (configured in `BaseLayout.astro`):

- **Space Grotesk** — display/headings
- **JetBrains Mono** — monospace/code/labels
- **IBM Plex Sans** — body text

### Icons

Icons use [Lord Icon](https://lordicon.com/) with morph animation triggers. Each is referenced by a hash in the YAML files. Browse [lordicon.com/icons](https://lordicon.com/icons) to find new ones — grab the hash from the CDN URL.

### SEO

- Set `site` in `astro.config.mjs` to your domain for canonical URLs and sitemap
- Set `ogImage` in `site.yaml` to the path of your Open Graph image (e.g. `/og.png`)
- Set `themeColor` in `site.yaml` for the browser theme color
- JSON-LD structured data is auto-generated from your YAML content

### Favicon

Replace `public/favicon.svg` with your own.

## Project Structure

```
src/
├── components/       # Navbar, Hero, About, Experience, Projects,
│                     # Skills, Education, Contact, Footer
├── data/             # YAML content files (edit these!)
├── layouts/          # BaseLayout with SEO head, scroll reveal, icon system
├── lib/              # Shared data loader and helpers
├── pages/            # index.astro — composes all components
└── styles/           # global.css (Tailwind theme, animations)
public/
├── favicon.svg
└── robots.txt
```

## Deployment

Update `astro.config.mjs` before deploying:

```js
export default defineConfig({
  site: 'https://yourdomain.com',  // your domain
  // base: '/repo-name',           // add this if deploying to a subpath (e.g. GitHub Pages without custom domain)
});
```

### GitHub Pages

The included `.github/workflows/deploy.yml` deploys on push to `main`.
Enable GitHub Pages: Settings → Pages → Source: GitHub Actions.

If you're not using a custom domain, set `base: '/your-repo-name'` in `astro.config.mjs`.

### Vercel / Netlify / Cloudflare Pages

Connect your repo — all auto-detect Astro projects. No configuration needed.

### Custom Domain

Set `site` to your domain and remove `base` (or set it to `'/'`).

## License

MIT — see [LICENSE](LICENSE).

## Credits

Built with [Astro](https://astro.build), styled with [Tailwind CSS](https://tailwindcss.com), icons by [Lord Icon](https://lordicon.com).

Created by [Ankur Singh](https://anks.in).
