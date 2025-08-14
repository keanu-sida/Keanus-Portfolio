# Portfolio TODOs

This file tracks improvements and open questions for Keanu Sida's portfolio. Edit and check items off as they’re completed.

## SEO and Meta
- [ ] Add page metadata in `src/app.html`:
  - [ ] `<title>` (≤ 60 chars) and meta description (≤ 160 chars)
  - [ ] Open Graph tags: `og:title`, `og:description`, `og:image`, `og:url`
  - [ ] Twitter Card tags: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
  - [ ] Add an OG image asset (e.g., `static/og.png`) and reference it
- [ ] Verify favicon and theme color

Needs input:
- [ ] Title:
- [ ] Meta description:
- [ ] OG/Twitter title/description (can reuse):
- [ ] OG image path:

## Accessibility
- [ ] Update profile image alt in `src/components/Main.svelte` to "Portrait of Keanu Sida"
- [ ] Ensure all icon-only controls have accessible names (aria-label) and focus states
- [ ] Check keyboard navigation across header tabs and project cards

## Projects (Showcase Improvements)
- [ ] For each project card in `src/components/Main.svelte` steps array:
  - [ ] Add an optional "Code" link (repo) next to "Visit" in `src/components/Step.svelte`
  - [ ] Add 1–2 lines of measurable impact (accuracy, performance, users)
- [ ] Consider turning each project into a mini case study page (Problem → Approach → Stack → Challenges → Impact)

Needs input (per project):
- [ ] Problem (1–2 sentences)
- [ ] Solution/approach (1–2 sentences)
- [ ] 3–5 impact/metrics bullets
- [ ] Code repo URL (if public)

## Resume Content (`src/components/Resume.svelte`)
- [x] Education: degree, school, date, concentration updated
- [ ] Work Experience:
  - [ ] Replace generic "Previous Company" with real company
  - [ ] Provide 1–2 sentence description per role
  - [ ] Provide 3–5 quantified achievement bullets per role

Needs input (per role):
- [ ] Title, Company, Period
- [ ] Description (1–2 sentences)
- [ ] 3–5 achievements (with metrics)

## Contact and Engagement
- [ ] Optional: Add a simple contact form (Formspree/Netlify) instead of email-only
- [ ] Add lightweight analytics (Plausible or GA4)
- [ ] Add Schema.org Person JSON‑LD to `src/app.html`

## Mobile and Layout
- [x] Prevent horizontal overflow on small screens (`overflow-x-hidden` on body)
- [ ] Audit hero and grids for centering/overflow on narrow devices; adjust paddings/margins as needed
- [ ] Verify responsive behavior of `#live-projects` grid and `#projects` cards

## Live Projects (`src/components/LiveProjects.svelte`)
- [ ] Optionally replace gradient placeholders with actual screenshots in `static/images/`
- [ ] Confirm URLs and tech stacks for each live project

## New Project Ideas (future repos)
- [ ] Hotel Cancellation Predictor mini app (SvelteKit UI + model inference + feature importance viz)
- [ ] Job Application Tracker (auth, CRUD, filters, CSV import/export) to demonstrate pragmatic full‑stack skills

## Housekeeping
- [x] Serve resume at `static/resume.pdf`
- [x] Remove duplicate root resume file
- [ ] Add an OG image asset to `static/` and reference it in meta tags

---
Last updated: commit when items change.
