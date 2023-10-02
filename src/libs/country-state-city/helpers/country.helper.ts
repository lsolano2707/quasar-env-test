// Helpers
import { readJsonFile } from '../helpers/file.helper';

// Types
import { Country, CountryLite } from '../types/country';

export const getAllCountries = async (): Promise<Country[]> => readJsonFile('countries.json');

export const getAllCountriesLite = async (): Promise<CountryLite[]> => (await import('src/libs/country-state-city/data/countries-lite.json')).default;

export const getCountryByCode = async (code: string): Promise<Country | undefined> => {
  if (!code) return;
  const results = await readJsonFile('countries-map.json');
  return results[code];
}
