/**
 * Where larger dogs can fly in the cabin, out of a carrier, on a seat we buy
 * for them. From a route map Sam supplied on 2026-10-25.
 *
 * Don't name the airline anywhere on the site (Sam's call), and don't copy
 * its map. Routes change, so the page says to check, and lists areas
 * rather than promising any particular city pair.
 */
export interface RouteRegion { region: string; places: string[] }

export const LARGE_DOG_REGIONS: RouteRegion[] = [
  { region: 'Northern California', places: ['San Francisco Bay Area (Oakland, Concord / East Bay)', 'Napa', 'Monterey'] },
  { region: 'Southern California', places: ['Los Angeles', 'Burbank', 'Santa Monica', 'Orange County', 'Carlsbad / San Diego North County'] },
  { region: 'Nevada', places: ['Las Vegas', 'Reno'] },
  { region: 'Arizona', places: ['Scottsdale / Phoenix'] },
  { region: 'Colorado & New Mexico', places: ['Denver', 'Gunnison / Crested Butte', 'Taos', 'Hobbs'] },
  { region: 'Texas', places: ['Dallas', 'Austin', 'Houston', 'Lajitas / Big Bend'] },
  { region: 'Florida', places: ['Miami', 'Fort Lauderdale', 'West Palm Beach', 'Naples', 'Destin'] },
  { region: 'New York', places: ['Westchester County (New York City area)'] },
  { region: 'Mexico', places: ['Cabo San Lucas'] },
];
