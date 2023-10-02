// Helpers
import { readJsonFile } from './file.helper';

// Types
import { State, StateLite } from '../types/state';

const BASE_PATH = '../data';

export const getAllStates = async (): Promise<State[]> => readJsonFile(`${BASE_PATH}/states.json`);

export const getAllStatesLite = async (): Promise<StateLite[]> => readJsonFile(`${BASE_PATH}/states-lite.json`);

export const getAllStatesByCountry = async (countryCode: string): Promise<State[]> => readJsonFile(`${BASE_PATH}/COUNTRIES/${countryCode}/states.json`);

export const getAllStatesByCountryLite = async (countryCode: string): Promise<StateLite[]> => readJsonFile(`${BASE_PATH}/COUNTRIES/${countryCode}/states-lite.json`);

export const getStateByCodeAndCountryCode = async (countryCode: string, stateCode: string): Promise<State | undefined> => {
  if (!countryCode || !stateCode) return;
  const results = await readJsonFile(`${BASE_PATH}/states-map.json`);
  return results[`${countryCode}-${stateCode}`];
}
