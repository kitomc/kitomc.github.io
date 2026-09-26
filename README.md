# Francis Gonzalez — Portfolio

Personal portfolio of Francis Alexander Gonzalez Almonte, Full Stack Developer.

- Live (GitHub Pages): https://kitomc.github.io
- Live (Cloudflare Pages): https://francis-gonzalez.pages.dev

## Stack

React 19, TypeScript, Vite, Tailwind CSS v4. No backend: the site is static.

## Scripts

```bash
npm run dev      # local dev server
npm run build    # production build into dist/
npm test         # Playwright end-to-end suite (desktop + mobile, system Chrome)
npm run deploy   # Cloudflare Pages deploy
```

GitHub Pages deploys automatically from `main` through `.github/workflows/pages.yml`.

## Structure

- `src/data.ts` — all content (profile, projects, experience, skills).
- `src/App.tsx` — page sections.
- `src/motion.ts` — preloader, scroll reveal, counters, active nav.
- `e2e/` — Playwright tests.
- `public/img/` — optimized screenshots (WebP).
