# Keanu Sida — Portfolio

Personal portfolio and full-stack demo apps built with **SvelteKit**, **Tailwind CSS**, and a centralized content layer.

**Live site:** [keanucodes.netlify.app](https://keanucodes.netlify.app/)

## Features

- Single-page portfolio with skills, projects, resume, and contact
- **PathTree** as the flagship product ([pathtree.app](https://pathtree.app))
- Pipeline job tracker (React SPA) served at `/pipeline/`
- Centralized content in `src/lib/data/` — one place for LinkedIn, resume, projects, and nav
- Resume PDF auto-generated from the same data as the on-site resume section
- Continuous deployment to Netlify

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Content maintenance

| What to update | Where |
|----------------|-------|
| Name, email, LinkedIn, GitHub, PathTree | `src/lib/data/profile.js` |
| Work experience, education, certs | `src/lib/data/resume.js` |
| Featured + other projects | `src/lib/data/projects.js` |
| Skills, about section | `src/lib/data/skills.js`, `benefits.js` |
| Navigation tabs | `src/lib/data/navigation.js` |
| Production URL / SEO | `siteMeta` in `profile.js` |

After editing resume data, regenerate the PDF:

```bash
npm run resume:pdf
```

The build runs this automatically via `prebuild`.

## Assets

Place project screenshots in `static/images/`. SVG placeholders ship by default, plus `static/og.png` for social previews.

## Deployment

Pushes to `main` deploy to **Netlify** ([keanucodes.netlify.app](https://keanucodes.netlify.app/)).

Build settings live in `netlify.toml`: `npm run build` publishing the `build/` directory.
The site is fully prerendered via `@sveltejs/adapter-static`.

### The Pipeline app

`/pipeline/` is a **separately built React SPA** committed as static files under
`static/pipeline/`. Its assets are absolute (`/pipeline/assets/...`), so the portfolio
must be served from a domain root. Links to it use `data-sveltekit-reload` so the
SvelteKit router performs a full page load instead of client-side routing.

To update it, rebuild [keanu-sida/pipeline](https://github.com/keanu-sida/pipeline)
and copy its `dist/` output into `static/pipeline/`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Generate resume PDF + production build |
| `npm run preview` | Preview production build |
| `npm run resume:pdf` | Regenerate `static/resume.pdf` from data |

## Project structure

```
src/
├── lib/
│   ├── data/          # Single source of truth (profile, resume, projects)
│   └── components/    # Shared UI (Card, Badge, SectionHeading)
├── components/        # Page sections (Main, PathMap, CaseStudy, Header, …)
└── routes/
    └── +page.svelte   # Home
```
