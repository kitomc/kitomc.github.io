# Portfolio

Personal portfolio site for Francis Gonzalez (AI Business Process Automation Specialist). Static React + Vite + Tailwind v4 site; all content lives in `src/data.ts`.

## Conventions

- Content and UI copy are in Spanish (the target audience is Dominican employers). Code, comments and commit messages are in English.
- Never add metric badges to project cards; the owner removed them deliberately.
- Keep the wording "plataformas SaaS" and the statement that AI-assisted development is indispensable; both are owner decisions.
- Screenshots go through `scripts/images.mjs` (sharp, WebP). Full-page screenshots must scroll first or the scroll reveal leaves sections blank.
- E2E: `npm test` runs Playwright on system Chrome (`channel: "chrome"`); Chromium download does not work on this machine.
- Cloudflare deploy must target the personal account pinned in `npm run deploy`; never the FHG Distribuidora account.

<!-- project-status:start -->
## Project status

- Purpose: hiring landing for Francis Gonzalez, positioned as "Automatizador de Procesos Empresariales con IA" (owner decision 2026-11-17: never present him as developer / Full Stack). Traffic comes from social media and paid ads.
- Branch: `main`, remote `origin` = github.com/kitomc/kitomc.github.io. No `dev` branch or preview environment exists yet.
- Live URLs: https://kitomc.github.io (GitHub Pages, `.github/workflows/pages.yml` on push to main) and https://francis-gonzalez.pages.dev (Cloudflare Pages via `npm run deploy`, personal account only).
- Content accuracy (owner decision): the COCIRE / Colegio Ciudad Real project was never delivered and is removed from the site, CVs and PDFs. Do not re-add it. The site lists 6 projects and "2 ERPs en producción" (FHG Distribuidora, Spatium).
- CVs: PDFs in `public/` are built from `../Curri/build_cv.js` (ES, 2 pages, `cv-francis-gonzalez.pdf`) and `../Curri/build_cv_en.js` (EN, 1 page, `Francis-Gonzalez-AI-Business-Process-Automation.pdf`), then exported with Word COM. The site links both ("Descargar CV", "English CV"). `Francis-Gonzalez-Full-Stack-Developer.pdf` is kept only as a legacy path for external links; never reference it.
- CV header link is https://kitomc.github.io. Boosty Digital / Spatium is split into two stages (Nov 2022 - Mar 2024, Ene 2025 - Mar 2026) with Delphi One in between; dates confirmed by the owner.
- Languages (owner decision): "Español nativo · Inglés: lectura y escritura (técnico), conversación básica". Never claim intermediate or spoken English.
- Job titles (owner decision "déjalos": do not invent or rename titles). They read identically across LinkedIn, site, both CVs and `../cv_francis_gonzalez_llm.md`: Boosty Digital / Spatium "Integrador Sénior, Bubble Developer y Automatizador de Procesos Empresariales con IA"; Delphi One, Planix, Mkt Nativo "Desarrollador de software"; Kreante "Desarrollador Bubble.io". Contract types follow LinkedIn: Planix temporal, Mkt Nativo contrato (both overlap other jobs by dates).
- Tests: `npm test` reuses any server on port 4173; another project's preview there makes the suite test the wrong app. Run Playwright with a temporary config on another port.
- Cloudflare Pages and GitHub Pages were redeployed on 2026-11-17 with the current copy and CVs; redeploy with `npm run deploy` after content changes.
- Pending: UTM capture and Meta Pixel specs are in `../campaign/captacion-leads.md` section 5, not implemented (need Growth agent IDs); no `dev` branch or preview environment.
<!-- project-status:end -->
