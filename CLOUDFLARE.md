# Deploying to Cloudflare

Everything here fits the **free plan**: static assets are free, the Worker
only runs for form submissions, and Email Routing sends to verified
addresses at no cost.

## 1. Workers Builds

Dashboard → **Workers & Pages** → **Create** → **Import a repository** →
`samjohnson4412/pawsintheskywebsite`.

| Field | Value |
| --- | --- |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Root directory | `/` |
| Production branch | `main` |

Node 22 is pinned by `.nvmrc`.

## 2. The domain

`pawsinthesky.com` moved to **Cloudflare Registrar** in June 2026 and already
uses Cloudflare nameservers. As of October 2026 it serves a **DreamHost
"parked domain" page** through proxied `A` records, and has **no MX or TXT
records** — no mail runs on it.

1. Once you're happy with the `*.workers.dev` preview: Worker → **Settings →
   Domains & Routes → Add custom domain** → `pawsinthesky.com`, then
   `www.pawsinthesky.com`.
2. Delete the old proxied `A` records if Cloudflare doesn't replace them.
3. DreamHost: nothing there is needed for this site. Cancel any hosting plan
   still attached to the domain.

## 3. Email Routing (the form, and hello@)

Because nothing else uses mail on this domain, Email Routing runs on the
**apex** — no subdomain needed.

1. Domain → **Email → Email Routing** → **Enable**. Cloudflare adds the MX and
   SPF records.
2. **Destination addresses** → add `sam@crossroadstechnology.co` → click the
   verification link.
3. **Routing rules** → custom address `hello@pawsinthesky.com` → send to
   `sam@crossroadstechnology.co`. This is the address printed on the site;
   it bounces until this rule exists.
4. `wrangler.jsonc` already matches: `destination_address` and `INQUIRY_TO`
   are `sam@crossroadstechnology.co`, `INQUIRY_FROM` is
   `website@pawsinthesky.com`.
5. Deploy, submit the form on `/quote/`, check the inbox, and spam the first
   time.

Replying to a request email replies to the customer: the Worker sets
`Reply-To` to the address they entered. Send failures land the visitor on
`/quote/?error=send` with the email address shown; errors are in the Worker's
**Logs** tab.

## 4. After launch

- [ ] Google Search Console: add the domain, submit `/sitemap-index.xml`
- [ ] Google Business Profile (service-area business, Tampa — no address shown)
- [ ] Point the CitizenShipper profile and any social bios at the site
- [ ] Optional: Cloudflare Turnstile on the form if spam gets past the honeypot

## Validate locally

```bash
npm run build && npx astro check && npx wrangler deploy --dry-run
```
