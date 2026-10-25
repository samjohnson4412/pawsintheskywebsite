# Open questions for Sam

Answer inline and delete the line, or tell Claude. Ordered by what blocks launch.

## Blocks launch

1. **Is Paws In The Sky taking bookings now?** The last trips in the inbox
   are June–July 2025. The site is written as an active service.
2. **Contact details.** The site shows `hello@pawsinthesky.com` (to be
   forwarded to `sam@crossroadstechnology.co` via Email Routing) and
   **(813) 921-5733**. Right address and number? Should form requests go to
   a different inbox?
3. **Promises the site makes** — confirm you'll keep each one:
   - reply to quote requests within one business day
   - GPS tracking and photo updates for every trip
   - overnight delay at no extra cost to the customer
   - check-ins a week before and the day before travel
4. **Booking terms** (`/terms/`) are built from your intake form: deposit
   non-refundable except if the pet falls ill; balance on delivery. Still
   right? Do you want anything added — e.g. what happens if a pet arrives
   at the airport sick, aggressive, or too big for the carrier?
5. **Logo rights.** Who designed the Paws In The Sky Transport logo, and do
   you hold the rights in writing? (`docs/IMAGE-CREDITS.md`)

## Credentials — shown only once confirmed

6. **Liability insurance.** Your 2025 quote says $1,000,000. Is the policy
   current? If yes, set `CREDENTIALS.liabilityInsurance` in `src/consts.ts`.
7. **USDA Class H.** The same quote says you hold Class T *and* H. The USDA
   email shows 58-T-1107. Is there a separate H registration to list?
8. **NGLCC certification** (March 2026) for Crossroads Tech & Travel Group —
   want it mentioned on `/about/`?

## Scope

9. **Ground transport.** You bid on CitizenShipper driving jobs. Should the
   site offer driven transport for pets too big for the cabin? Right now
   it says nothing about it.
10. **International flights?** The site doesn't mention them.
11. **Pets other than cats and dogs?** The form allows "Other".
12. **Breeder volume.** Any repeat breeder clients? Is there a breeder rate
    or retainer worth describing on `/breeders/`? (No prices on the site.)

## Nice to have

13. **Photos.** Your own photos from trips where the owner ticked "yes" to
    marketing use: a puppy under the seat, a hand-off at arrivals. These
    would do more for the site than anything else. No stock.
14. **Reviews.** CitizenShipper reviews or customer messages you're happy to
    quote, with the customer's OK. None are on the site.
15. **How many trips** you've flown, and since when. The site says only
    "most of our trips are puppies from breeders".
16. **Facebook / Instagram** URLs (`ORG.social`).
17. **CitizenShipper profile link.** Worth linking from `/about/`, so people
    can see your reviews there.
