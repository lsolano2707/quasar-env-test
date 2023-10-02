// Helpers
import { readJsonFile } from '../helpers/file.helper';

// Types
import { Country, CountryLite } from '../types/country';

const BASE_PATH = '../data';

export const getAllCountries = async (): Promise<Country[]> => readJsonFile(`${BASE_PATH}/countries.json`);

export const getAllCountriesLite = async (): Promise<CountryLite[]> => readJsonFile(`${BASE_PATH}/countries-lite.json`);

export const getCountryByCode = async (code: string): Promise<Country | undefined> => {
  if (!code) return;
  const results = await readJsonFile(`${BASE_PATH}/countries-map.json`);
  return results[code];
}
