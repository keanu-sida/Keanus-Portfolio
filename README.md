# Keanu Sida — Portfolio

Personal portfolio and full-stack demo apps built with **SvelteKit**, **Tailwind CSS**, and a centralized content layer.

**Live site:** [keanu-sida.github.io/Keanus-Portfolio](https://keanu-sida.github.io/Keanus-Portfolio/)

## Features

- Single-page portfolio with skills, projects, resume, and contact
- **Job Pipeline Tracker** at `/tracker` (CRUD, filters, CSV import/export)
- Centralized content in `src/lib/data/` — one place for LinkedIn, resume, projects, and nav
- Resume PDF auto-generated from the same data as the on-site resume section
- GitHub Pages deployment via GitHub Actions

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

To preview the GitHub Pages build locally (with base path):

```bash
BASE_PATH=/Keanus-Portfolio npm run build
BASE_PATH=/Keanus-Portfolio npm run preview
```

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

Pushes to `main` deploy to **GitHub Pages** using `.github/workflows/deploy.yml`.

**One-time GitHub setup:**

1. Repo → **Settings** → **Pages**
2. Source: **GitHub Actions**

The workflow sets `BASE_PATH=/<repo-name>` automatically so routes and assets work under `github.io/<repo-name>/`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Generate resume PDF + production build (local, no base path) |
| `npm run build:pages` | Production build for GitHub Pages (`/Keanus-Portfolio` base) |
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
