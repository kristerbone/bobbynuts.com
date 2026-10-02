# Bobby Nuts website

Children's story site (mixed family audience) about Bobby Nut, a red squirrel moving from the top of our valley down to our house. Built with Astro (static), deployed to GitHub Pages via `.github/workflows/deploy.yml`.

## Commands
- `npm install`, `npm run dev` (http://localhost:4321), `npm run build` (outputs `dist/`)

## Structure
- `src/content/stories/*.md`: one file per story (front matter: title, summary, order, emoji, readingMinutes)
- `src/pages/`: home, stories index, `stories/[id].astro` (story page with Listen and text-size buttons), `about.astro`
- `src/components/Bobby.astro`: placeholder SVG of Bobby, to be replaced with real art
- `docs/bobby-guide.md`: character, place and tone guide. Read it before writing any story.

## Conventions
- British English, short sentences, gentle peril only, every story ends safe and warm.
- 400 to 700 words per story. Keep the site accessible (alt text, readable sizes, reduced motion).
- Items marked TODO in the guide need real details from the owners (house, garden, family names).
