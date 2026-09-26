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
- Latest change: Planix description no longer names ERP vendors (Oracle NetSuite, SAP, Odoo, Exactus, Infor) because the owner never integrated them; stack chips and highlights updated accordingly. E2E suite (24 tests) green.
- Public CVs: `/cv-francis-gonzalez.pdf` (Spanish, single column, ATS) and `/Francis-Gonzalez-Full-Stack-Developer.pdf` (English, one page). Both are regenerated from `../Curri/build_cv.js` and `../Curri/build_cv_en.js` and copied into `public/`.
- Both hosts are current: GitHub Pages workflow succeeded and Cloudflare deploy went to the personal account.
- Pending: copy the regenerated CV PDFs (without ERP vendors) into `public/` and redeploy; owner still has to fill the two `[ADD METRIC]` placeholders in the English CV.
<!-- project-status:end -->
