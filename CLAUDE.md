# Portfolio

Personal portfolio site for Francis Gonzalez (Full Stack Developer). Static React + Vite + Tailwind v4 site; all content lives in `src/data.ts`.

## Conventions

- Content and UI copy are in Spanish (the target audience is Dominican employers). Code, comments and commit messages are in English.
- Never add metric badges to project cards; the owner removed them deliberately.
- Keep the wording "plataformas SaaS" and the statement that AI-assisted development is indispensable; both are owner decisions.
- Screenshots go through `scripts/images.mjs` (sharp, WebP). Full-page screenshots must scroll first or the scroll reveal leaves sections blank.
- E2E: `npm test` runs Playwright on system Chrome (`channel: "chrome"`); Chromium download does not work on this machine.
- Cloudflare deploy must target the personal account pinned in `npm run deploy`; never the FHG Distribuidora account.

<!-- project-status:start -->
## Project status

- Active branch: `main`, remote `origin` = github.com/kitomc/kitomc.github.io.
- Live URLs: https://kitomc.github.io (GitHub Pages, deployed by `.github/workflows/pages.yml` on push to main) and https://francis-gonzalez.pages.dev (Cloudflare Pages, `npm run deploy`).
- Latest change: initial commit of the full site, Playwright e2e suite (24 tests, desktop + mobile), Pages workflow and README.
- Public CV served at `/cv-francis-gonzalez.pdf` is the single-column ATS version (Spanish); an English one-page version is being produced in parallel.
- Pending: confirm the first GitHub Pages workflow run succeeds; confirm Cloudflare serves the new CV (cache showed the old file size once); replace the CV when the English version is final.
<!-- project-status:end -->
