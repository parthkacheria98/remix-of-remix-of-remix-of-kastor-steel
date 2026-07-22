# Kastor International FZE

TanStack Start app (React 19 + Vite).

## Local dev

```bash
npm install
npm run dev
```

## Deploy to Netlify (one-click)

1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import from Git → pick this repo.**
3. Netlify auto-detects `netlify.toml` — no settings to change. Click **Deploy**.

Build config (already in `netlify.toml`):

- Build command: `npm run build`
- Publish dir: `dist`
- `NITRO_PRESET=netlify` — SSR runs as a Netlify Function automatically.
- Node 20.

## Notes

- All images live in `public/assets/` and ship with the repo.
- No bun required — `npm` works. Delete `bun.lock`/`bunfig.toml` if present; Netlify uses `package-lock.json` (run `npm install` once locally to generate it before pushing).
