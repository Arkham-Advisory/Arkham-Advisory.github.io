# Arkham Advisory Website

Static Astro site for Arkham Advisory, built for GitHub Pages and the custom domain `arkham-advisory.com`.

## Commands

```bash
bun install
bun run dev
bun run build
bun run preview
```

`bun run build` runs `astro check` before producing the static site in `dist/`.

## Content Updates

- Advisory services live in `src/content/services/`.
- Featured writing lives in `src/content/writing/`.
- Shared metadata, URLs, and contact details live in `src/config/site.ts`.
- Brand asset paths live in `src/config/assets.ts`.

The site has no CMS dependency. Edit Markdown content, run `bun run build`, and commit the result.

## Deployment

GitHub Pages deployment is configured in `.github/workflows/deploy.yml`.

- The workflow runs on pushes to `main`.
- The workflow builds `dist/` and publishes it to the `gh-pages` branch.
- `public/CNAME` sets the custom domain to `arkham-advisory.com`.
- Astro canonical metadata is configured for `https://arkham-advisory.com`.

Before launch, enable GitHub Pages for this repository using the `gh-pages` branch as the source, and make sure DNS for `arkham-advisory.com` points to GitHub Pages.
