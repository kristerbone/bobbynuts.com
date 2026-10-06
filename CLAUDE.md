# Bobby Nuts website

Children's stories (and, later, self-published first chapter books) about Bobby Nuts, a red squirrel journeying from the top of Good Wood down to our house. Built with Astro (static), deployed to GitHub Pages via `.github/workflows/deploy.yml`.

## Commands
- `npm install`, `npm run dev` (http://localhost:4321), `npm run build` (outputs `dist/`)

## Structure
- `CONTEXT.md`: glossary of every name (characters, family, places). Use its terms exactly.
- `docs/bobby-guide.md`: themes, rules of the world, style and the 12-Story series plan. Read it before writing any story.
- `docs/good-wood-notes.md`: real Moments from walks, the raw material for stories.
- `src/content/stories/*.md`: one file per Story (front matter: title, summary, order, emoji, readingMinutes)
- `src/pages/`: home, stories index, `stories/[id].astro` (story page with Listen and text-size buttons), `about.astro`
- `src/components/Bobby.astro`: placeholder SVG of Bobby Nuts, to be replaced with AI-generated art

## Conventions
- Always "Bobby Nuts" for the squirrel, never "Bobby" (the family's dog is Bobbi).
- Every place is real; never name the nearby town or give surnames.
- Stories: 400 to 600 words, ages 3 to 7, light Scottish flavour, gentle peril only, every Story ends safe and warm. See the guide for the rest.
- Workflow: the family bring a Moment or idea, Claude drafts, the family rewrite. Don't invent details about the real family, house or Good Wood.
- Keep the site accessible (alt text, readable sizes, reduced motion).
