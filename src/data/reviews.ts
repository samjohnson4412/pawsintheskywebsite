/**
 * Customer reviews, copied from Paws In The Sky's CitizenShipper profile and
 * supplied by Sam on 2026-10-25. Every one was a 5-star review. Trimmed with
 * an ellipsis where marked; otherwise word for word, typos fixed only.
 *
 * Not emitted as Review schema: Google ignores self-published reviews of a
 * business on its own site, and it can count against the page.
 */
export interface Review {
  name: string;
  /** Pet and route, from the CitizenShipper listing. */
  trip: string;
  quote: string;
  /** Shown on the home page. */
  featured?: boolean;
}

export const REVIEWS: Review[] = [
  {
    name: 'Christa',
    trip: 'Goldendoodle puppy, Texas to New York',
    featured: true,
    quote:
      'I was so hesitant to have to ship my 8 week old puppy from Houston, TX to New York — never mind with a stranger… and not to mention extremely last minute (2 day notice). From the second Sam messaged me I knew he was a great fit. He put my mind at ease almost immediately… Sam started a group text with everyone who was involved with flying my puppy to NY, shared his flight info immediately, and even gave us the ability to GPS track him once he picked up our puppy! He texted the whole entire journey from leaving his house to arriving in NY.',
  },
  {
    name: 'Erin',
    trip: 'Cat, Tampa to Seattle',
    featured: true,
    quote:
      'He flew our 17lb cat from Tampa to Seattle and it went smoother than I could have ever imagined! He was very flexible and understanding as it was a few days before we could commit to booking with him and on top of that, he got up early and picked our cat up at 5am to make an early flight. He shared his location and sent plenty of updates throughout the journey. I really liked booking with Sam over one of these bigger companies because I felt like he was very attentive to us and really cared for our cat throughout the trip.',
  },
  {
    name: 'Brooke',
    trip: 'Pembroke Welsh Corgi, California to Texas',
    featured: true,
    quote:
      'If you are in need of a flight nanny, Sam is your man! He makes the experience easy for you by providing the itinerary and frequent updates during travel via text message. He even provides tracking so you follow your pup on their journey. Highly recommend!',
  },
  {
    name: 'Emma',
    trip: 'Goldendoodle puppy, Virginia to Los Angeles',
    quote:
      'Sam was VERY professional and a fantastic communicator. He answered all of my questions and went above and beyond to satisfy my worries. As soon as I reserved Sam to collect my pup he was off organizing all of the travel itinerary for the pup… Took 2 flights and met me as promised at the LAX curbside. Parsnip was very relaxed… Cannot recommend Sam enough.',
  },
  {
    name: 'Emily',
    trip: 'Kitten, Palm Springs to Miami',
    quote:
      'We had a super early flight; he met me at 4:30 am for our transport. He was so awesome with communication and was very good and patient with our kitten during the flight. He kept us and the client posted the whole flight, which made me feel super secure!',
  },
  {
    name: 'Janelle',
    trip: 'American Bully puppy, Tampa to New Jersey',
    quote:
      'Sam was very attentive to all my questions on the process, being that it was my first time. He’s a very honest person and genuinely nice… My pup was delivered swiftly. He was so at ease he was asleep with Sam upon delivery. He does share the flight itinerary and makes sure everything is smooth and seamless for everyone.',
  },
  {
    name: 'Solange',
    trip: 'Shepherd mix puppy, California to Maryland',
    quote:
      'Sam is so very professional. I had no doubt in him at any point from the moment I booked up until I received my lil guy. He kept me up to date at every stop. He even cleaned my baby a lil before bringing him to me cause he had an accident.',
  },
  {
    name: 'Nancy',
    trip: 'Boykin Spaniel puppy, Wyoming to Washington',
    quote:
      'Sam drove from Denver to Wheatland, Wy. in very snowy weather and safely returned with her to the Denver Airport. He posted pictures along the way and we had a tracking system to keep track of their progress. I’d hire him again in a minute!',
  },
];
