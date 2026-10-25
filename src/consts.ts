/**
 * Business facts. Change them here, not in pages.
 * Anything marked TODO(sam) is waiting on an answer in docs/ASKS.md.
 */
export const ORG = {
  name: 'Paws In The Sky',
  /** The full mark reads "Paws In The Sky Transport". */
  legalBrand: 'Paws In The Sky Transport',
  parent: 'Crossroads Tech & Travel Group, Inc.',
  tagline: 'A person flies with your pet — in the cabin, the whole way.',
  city: 'Tampa',
  region: 'FL',
  /** No street address is published: the registered address is a residence. */
  areaServed: ['United States'],
  /**
   * Forwarded by Cloudflare Email Routing (CLOUDFLARE.md). It bounces until
   * that is set up, so do that before the domain goes live.
   */
  email: 'hello@pawsinthesky.com',
  /** Shared Crossroads line; the 2025 intake form gives it as the Paws number. */
  phone: '(813) 921-5733',
  phoneHref: '+18139215733',
  owner: 'Sam Johnson',
  social: {
    facebook: '',
    instagram: '',
  },
} as const;

/**
 * Credentials. Each is printed only when filled in, so nothing unverified
 * reaches the page. Source for each is in docs/RESEARCH.md.
 */
export const CREDENTIALS = {
  /** USDA APHIS Animal Care, from AnimalCare@usda.gov, 2026-07-30. */
  usdaCertificate: '58-T-1107',
  /**
   * Sam's May 2025 quote says "$1,000,000 of liability insurance".
   * TODO(sam): confirm the policy is current before this is shown.
   */
  liabilityInsurance: '',
} as const;

export const NAV = [
  { href: '/flight-nanny/', label: 'Flight nanny' },
  { href: '/how-it-works/', label: 'How it works' },
  { href: '/breeders/', label: 'Breeders' },
  { href: '/preparing-your-pet/', label: 'Preparing your pet' },
  { href: '/faq/', label: 'FAQ' },
  { href: '/about/', label: 'About' },
] as const;

export const NAV_CTA = { href: '/quote/', label: 'Get a quote' } as const;

export const FOOTER_LINKS = [
  {
    heading: 'Services',
    links: [
      { href: '/flight-nanny/', label: 'In-cabin flight nanny' },
      { href: '/breeders/', label: 'For breeders' },
      { href: '/how-it-works/', label: 'How it works' },
      { href: '/quote/', label: 'Request a quote' },
    ],
  },
  {
    heading: 'Help',
    links: [
      { href: '/preparing-your-pet/', label: 'Preparing your pet' },
      { href: '/faq/', label: 'FAQ' },
      { href: '/terms/', label: 'Booking terms' },
      { href: '/privacy/', label: 'Privacy' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { href: '/about/', label: 'About us' },
      { href: 'https://crossroadstravel.co/', label: 'Crossroads Travel' },
    ],
  },
] as const;
