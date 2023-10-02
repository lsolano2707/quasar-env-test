// Helpers
import { readJsonFile } from './file.helper';

// Types
import { State, StateLite } from '../types/state';

export const getAllStates = async (): Promise<State[]> => readJsonFile('states.json');

export const getAllStatesLite = async (): Promise<StateLite[]> => readJsonFile('states-lite.json');

export const getAllStatesByCountry = async (countryCode: string): Promise<State[]> => readJsonFile(`COUNTRIES/${countryCode}/states.json`);

export const getAllStatesByCountryLite = async (countryCode: string): Promise<StateLite[]> => readJsonFile(`COUNTRIES/${countryCode}/states-lite.json`);

export const getStateByCodeAndCountryCode = async (countryCode: string, stateCode: string): Promise<State | undefined> => {
  if (!countryCode || !stateCode) return;
  const results = await readJsonFile('states-map.json');
  return results[`${countryCode}-${stateCode}`];
}
