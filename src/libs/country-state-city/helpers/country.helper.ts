// Types
import { Country, CountryLite } from '../types/country';

export const getAllCountries = async (): Promise<Country[]> => (await import(/* @vite-ignore */ 'src/libs/country-state-city/data/countries.json')).default;

export const getAllCountriesLite = async (): Promise<CountryLite[]> => (await import(/* @vite-ignore */ 'src/libs/country-state-city/data/countries-lite.json')).default;

export const getCountryByCode = async (code: string): Promise<Country | undefined> => {
  if (!code) return;
  const results = (await import(/* @vite-ignore */  'src/libs/country-state-city/data/countries-map.json')).default as { [key: string]: Country };
  return results[code];
}
