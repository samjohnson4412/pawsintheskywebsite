# Working agreements

## Branches

Push only to the session's designated `claude/*` branch. `main` is what
Cloudflare deploys to production; Sam decides when it moves.

## Stack

Astro static site + one small Worker (`worker/index.ts`) for the quote form.
Same shape as the Crossroads Travel site. Cloudflare Workers Builds, config in
`wrangler.jsonc`, setup in `CLOUDFLARE.md`. Validate with:

```bash
npm run build && npx astro check && npx wrangler deploy --dry-run
```

Business facts and credentials live in `src/consts.ts`; FAQ answers in
`src/data/faqs.ts`. Change them there.

## Content rules

- **Only promise what Sam already promises customers.** Every service claim
  traces to Sam's own quotes or the Flight Nanny intake form —
  `docs/RESEARCH.md` lists the sources. Don't add a guarantee, a turnaround
  time or a capability because it sounds good.
- **No invented social proof.** No testimonials, trip counts, review scores or
  "years of experience" unless Sam supplies them. The 2025 business plan's
  Paws section was AI-drafted and aspirational (pet cams, franchising,
  international) — it is not a source of facts.
- **No prices.** Every trip is quoted. Not the deposit amount, not the
  door-to-door fee.
- **Credentials print only when filled in** (`CREDENTIALS` in consts). The
  USDA certificate is verified; the insurance figure is not yet.
- **"Registered", not "licensed".** USDA registers transporters.
- **Never publish the street address.** The registered address is a residence.
- **Never put customer details in the repo.** The intake-form responses in
  Drive contain names, addresses and phone numbers of real customers.
- **Pronouns.** Site copy refers to Sam by name, not by pronoun.

## Images

Same rule as the FLP and Crossroads sites: **never add an image without a
licence you can produce on demand**, and record every one in
`docs/IMAGE-CREDITS.md`. Pet photos must be ones Sam took on a trip where the
owner said yes to marketing use (the intake form asks this) — record which
trip and that consent in the credits file, without the owner's name.
No stock photos of pets presented as our trips.

## Open questions

`docs/ASKS.md` — read it before asking Sam something.
