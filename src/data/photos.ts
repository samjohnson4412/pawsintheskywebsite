/**
 * Trip photos taken by Sam. Provenance for each is in docs/IMAGE-CREDITS.md.
 * Captions say only what the photo shows — no route or breed we can't confirm.
 */
export interface Photo { src: string; alt: string }

export const PHOTOS = {
  corgi: { src: '/photos/puppy-corgi.webp', alt: 'A tricolour corgi puppy with big ears looking out of a soft-sided pet carrier' },
  chocolate: { src: '/photos/puppy-chocolate.webp', alt: 'A chocolate-brown puppy resting its chin on the edge of a pet carrier' },
  black: { src: '/photos/puppy-black.webp', alt: 'A black puppy with folded ears peeking out of a carrier at night' },
  doodle: { src: '/photos/puppy-doodle.webp', alt: 'A curly red doodle puppy sitting up in an open pet carrier' },
} satisfies Record<string, Photo>;
