# Bobby Nuts website

Children's stories (and, later, self-published first chapter books) about Bobby Nuts, a red squirrel journeying from the top of Good Wood down to our house. Built with Astro (static), deployed to GitHub Pages via `.github/workflows/deploy.yml`.

## Commands
- `npm install`, `npm run dev` (http://localhost:4321), `npm run build` (outputs `dist/`)

## Structure
- `CONTEXT.md`: glossary of every name (characters, family, places). Use its terms exactly.
- `docs/bobby-guide.md`: themes, rules of the world, style and the 12-Story series plan. Read it before writing any story.
- `docs/good-wood-notes.md`: real Moments from walks, the raw material for stories.
- `docs/ideas.md`: big ideas not yet agreed by Jen and Kris. Agreed ones move into the guide.
- `src/content/stories/*.md`: one file per Story (front matter: title, summary, order, emoji, readingMinutes)
- `src/pages/`: home, stories index, `stories/[id].astro` (story page with Listen and text-size buttons), `about.astro`
- `src/components/Bobby.astro`: placeholder SVG of Bobby Nuts, to be replaced with AI-generated art

## Conventions
- Always "Bobby Nuts" for the squirrel, never "Bobby" (the family's dog is Bobbi).
- Every place is real; never name the nearby town or give surnames.
- Stories: 400 to 600 words, ages 3 to 7, light Scottish flavour, gentle peril only, every Story ends safe and warm. See the guide for the rest.
- Workflow: the family bring a Moment or idea, Claude drafts, the family rewrite. Don't invent details about the real family, house or Good Wood.
- Keep the site accessible (alt text, readable sizes, reduced motion).

## Working together (Jen and Kris)
Jen and Kris each work in their own clone and with their own Claude session; Claude doesn't remember between people, so these files are the shared memory.
- At the start of every session: offer to `git pull`, then read "Notes for each other" at the top of `docs/ideas.md` and briefly tell the user what the other person has left for them, plus anything new in `git log` from the other person since their last commit.
- When the user is finishing, offer to add a short note for the other person, then commit and push. Clear a note once its reader has seen it and replied.
- Where things go (say where you put each thing):
  - Real things seen or done on walks → `docs/good-wood-notes.md`, dated.
  - Ideas and suggestions → `docs/ideas.md`. This is the default for anything new.
  - New names, places or real facts about the family → `CONTEXT.md`.
  - `docs/bobby-guide.md` holds only what Jen and Kris have agreed together in discussion. Move an idea there only when the user says they've both agreed it; never on one person's say-so alone, and never on your own judgement.
