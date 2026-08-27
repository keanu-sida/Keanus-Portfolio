# Keanu Sida — Portfolio

Personal portfolio and full-stack demo apps built with **SvelteKit**, **Tailwind CSS**, and a centralized content layer.

**Live site:** [keanucodes.netlify.app](https://keanucodes.netlify.app/)

## Features

- Single-page portfolio with skills, projects, resume, and contact
- **Pipeline** job tracker (React SPA) served at `/pipeline/`
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
| Name, email, LinkedIn, GitHub | `src/lib/data/profile.js` |
| Work experience, education, certs | `src/lib/data/resume.js` |
| Featured + live projects | `src/lib/data/projects.js` |
| Skills, about section | `src/lib/data/skills.js`, `benefits.js` |
| Navigation tabs | `src/lib/data/navigation.js` |
| Production URL / SEO | `siteMeta` in `profile.js` |

After editing resume data, regenerate the PDF:

```bash
npm run resume:pdf
```

The build runs this automatically via `prebuild`.

## Assets

Place custom images in `static/images/`:

| File | Purpose |
|------|---------|
| `selfie3.PNG` | Hero portrait (update `profile.image.src` when added) |
| `blotting-sample.png` | Blotting Innovations screenshot |
| `ecolink-sample.png` | EcoLink screenshot |

SVG placeholders ship by default in `static/images/` and `static/og.png` for social previews.

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
│   ├── components/    # Shared UI (Card, Badge, SectionHeading)
│   └── tracker/       # Job tracker logic (store, CSV, constants)
├── components/        # Page sections (Main, Resume, Header, …)
└── routes/
    ├── +page.svelte   # Home
    └── tracker/       # Job pipeline app
```
