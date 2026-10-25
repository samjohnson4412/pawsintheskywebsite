# Paws In The Sky

Website for Paws In The Sky Transport, the pet flight nanny division of
Crossroads Tech & Travel Group, Inc. Served at `pawsinthesky.com`.

```bash
npm install
npm run dev          # http://localhost:4321 (form won't send — no Worker)
npm run build
npx wrangler dev     # built site + form Worker at http://localhost:8787
```

- `src/consts.ts` — business facts, credentials, nav
- `src/data/faqs.ts` — every FAQ answer on the site
- `worker/index.ts` — emails quote requests via Cloudflare Email Routing
- `docs/` — open questions, sources, image provenance

Deployment: see `CLOUDFLARE.md`.
