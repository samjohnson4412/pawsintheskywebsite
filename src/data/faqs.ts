/**
 * Answers used on /faq/ and, in part, on other pages. Each is drawn from
 * Sam's own quotes and intake form — see docs/RESEARCH.md. Don't add a
 * promise here that Sam hasn't made to a customer.
 */
import type { Faq } from '../layouts/BaseLayout.astro';

export const FAQ_BASICS: Faq[] = [
  {
    q: 'What is a pet flight nanny?',
    a: 'A person who flies with your pet as a passenger. Your pet travels in a carrier under the seat in front of us, in the cabin, and stays with us from the airport where we collect them to the hand-off at the other end. Your pet never goes into cargo.',
  },
  {
    q: 'Does my pet fly in cargo?',
    a: 'No. Every pet we fly travels in the cabin, at our feet. That is the whole point of the service.',
  },
  {
    q: 'What size of pet can fly in the cabin?',
    a: 'On most airlines, cats and small dogs: the pet has to stand and turn around in a carrier that fits under the seat. Each airline sets its own carrier dimensions, so we check your pet’s height, length and weight before we book. Two larger pets may each need their own carrier, and so their own courier.',
  },
  {
    q: 'Can a bigger dog fly in the cabin?',
    a: 'On select routes, yes: some flights let a larger dog ride in the cabin, out of a carrier, on the floor in front of a seat bought for them. The dog’s seat is included in your quote. Tell us where your dog is going and we’ll say whether your route is one of them. Your dog still never goes in cargo.',
  },
  {
    q: 'How will I know my pet is okay during the trip?',
    a: 'You get GPS tracking and photo updates throughout the trip, and you know the exact flight numbers and arrival time before travel day. Anyone else you want kept in the loop — the breeder, a partner, the person collecting — can get the same updates.',
  },
  {
    q: 'What if the flight is delayed or cancelled?',
    a: 'We stay with your pet and rebook. If a delay means spending the night somewhere, your pet stays with us and you pay nothing extra.',
  },
  {
    q: 'Do you pick up and drop off at home?',
    a: 'The standard trip runs airport to airport: you hand your pet to us at the departure airport and collect them at arrival. Door-to-door collection and delivery is available for an added fee, shown in your quote.',
  },
  {
    q: 'Do you drive pets instead of flying them?',
    a: 'Only to and from the airports, as part of door-to-door service. We don’t offer road-only trips.',
  },
];

export const FAQ_PREP: Faq[] = [
  {
    q: 'Do you fly pets internationally?',
    a: 'Yes. International trips take more paperwork: each country sets its own entry rules, and many want a health certificate endorsed by the USDA, a microchip, vaccinations given a set time before travel, or an import permit. We help you work through it, so start early — some countries need weeks or months of lead time.',
  },
  {
    q: 'What paperwork does my pet need?',
    a: 'A health certificate (also called a CVI) from a licensed vet, and a rabies vaccination if your pet is old enough to have one. Most airlines and states want the health certificate issued within 10 days of travel, so book the vet visit for the week before. We tell you the exact rules for your route when we quote.',
  },
  {
    q: 'How young can a puppy or kitten fly?',
    a: 'Federal rules require puppies and kittens to be at least 8 weeks old and weaned before they travel. Some airlines set an older minimum. We check your airline’s rule before booking.',
  },
  {
    q: 'Will my pet be taken out of the carrier?',
    a: 'Once, at airport security. TSA screens the pet in the courier’s arms while the empty carrier goes through the X-ray. That’s why we ask beforehand whether your pet is comfortable being held by someone new.',
  },
  {
    q: 'Can you give my pet medication on the way?',
    a: 'Yes, if you tell us what to give and when. The questionnaire we send after booking covers medication, health issues, diet and how your pet handles travel.',
  },
];

export const FAQ_BOOKING: Faq[] = [
  {
    q: 'How much does it cost?',
    a: 'It depends on the route, the airline and the date, so every trip is quoted individually. The quote is for the whole trip — our flights, the in-cabin pet fee and our time — with door-to-door service shown separately if you want it. Booking two weeks or more ahead gives the best choice of flights and keeps the price steady.',
  },
  {
    q: 'How do I pay?',
    a: 'A deposit secures the flights once you accept the quote. The balance is due when your pet is delivered. We take Zelle, Venmo, Apple Pay, PayPal and credit cards, and cash for the balance on delivery.',
  },
  {
    q: 'What if I need to cancel?',
    a: 'The deposit pays for flights we book on your behalf, so it isn’t refundable if you cancel. The one exception: if your pet becomes ill and can’t travel, we refund the deposit in full.',
  },
  {
    q: 'I found you on CitizenShipper. Is their fee part of your price?',
    a: 'No. The booking fee CitizenShipper charges goes to CitizenShipper, whichever transporter you choose. Our quote is separate from it.',
  },
  {
    q: 'Are you registered with the USDA?',
    a: 'Yes. Paws In The Sky is registered with the USDA (APHIS Animal Care) as both a carrier (Class T) and an intermediate handler (Class H). Our certificate number is in the footer of every page. We also carry $1,000,000 of liability insurance.',
  },
];

export const ALL_FAQS: Faq[] = [...FAQ_BASICS, ...FAQ_PREP, ...FAQ_BOOKING];
