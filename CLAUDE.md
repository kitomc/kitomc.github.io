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

- Purpose: hiring landing for Francis Gonzalez, positioned as "Automatizador de Procesos Empresariales con IA" (owner decision 2026-11-17: never present him as developer / Full Stack). Traffic comes from social media and paid ads.
- Active branch: `main`, remote `origin` = github.com/kitomc/kitomc.github.io. No `dev` branch or preview environment exists yet.
- Live URLs: https://kitomc.github.io (GitHub Pages, deployed by `.github/workflows/pages.yml` on push to main) and https://francis-gonzalez.pages.dev (Cloudflare Pages, `npm run deploy`, personal account only).
- Content accuracy (owner decision 2026-11-17): the COCIRE / Colegio Ciudad Real project never materialized and was removed from the site, CVs and public PDFs. Do not re-add it. The site now lists 6 projects and "2 ERPs en producción" (FHG Distribuidora, Spatium).
- Published on GitHub Pages: automation positioning across the site; public CV PDFs (`public/`, built from `../Curri/build_cv*.js`) carry the automator title; Boosty Digital / Spatium is split into two stages (Nov 2022 - Mar 2024, Ene 2025 - Mar 2026) with Delphi One in between (Mar 2024 - Ene 2025), matching the CVs.
- Languages line (owner decision): "Español nativo · Inglés: lectura y escritura (técnico), conversación básica". Never claim intermediate or spoken English.
- Tests: `npm test` reuses any server on port 4173, so another project's Vite preview on that port makes the suite test the wrong app. Free the port first, or run Playwright with a temporary config that serves `vite preview` on another port.
- Pending: Cloudflare Pages has not been redeployed with the current copy; landing specs for UTM capture and Meta Pixel are in `../campaign/captacion-leads.md` section 5 and are not implemented; no `dev` branch or preview environment.
<!-- project-status:end -->
