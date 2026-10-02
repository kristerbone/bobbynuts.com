# bobbynuts.com

Children's stories about Bobby Nut, a little red squirrel who wants to move from the top of our valley down to our house. Built with [Astro](https://astro.build).

## Run it

```
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Add a story

Add a Markdown file to `src/content/stories/` (copy an existing one for the front matter). See `docs/bobby-guide.md` for the characters, places and tone.

## Hosting

`.github/workflows/deploy.yml` publishes to GitHub Pages on every push to `main`. In the repo, go to Settings, then Pages, and set Source to "GitHub Actions". `public/CNAME` points the site at bobbynuts.com (remove it if you use a different domain).
