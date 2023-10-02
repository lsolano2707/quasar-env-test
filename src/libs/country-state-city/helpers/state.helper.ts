// Types
import { State, StateLite } from '../types/state';

export const getAllStates = async (): Promise<State[]> => (await import(/* @vite-ignore */ 'src/libs/country-state-city/data/states.json')).default;

export const getAllStatesLite = async (): Promise<StateLite[]> => (await import(/* @vite-ignore */ 'src/libs/country-state-city/data/states-lite.json')).default;

export const getAllStatesByCountry = async (countryCode: string): Promise<State[]> => (await import(/* @vite-ignore */ `src/libs/country-state-city/data/COUNTRIES/${countryCode}/states.json`)).default;

export const getAllStatesByCountryLite = async (countryCode: string): Promise<StateLite[]> => (await import(/* @vite-ignore */ `src/libs/country-state-city/data/COUNTRIES/${countryCode}/states-lite.json`)).default;

export const getStateByCodeAndCountryCode = async (countryCode: string, stateCode: string): Promise<State | undefined> => {
  if (!countryCode || !stateCode) return;
  const results = (await import(/* @vite-ignore */ 'src/libs/country-state-city/data/states-map.json')).default as { [key: string]: State };
  return results[`${countryCode}-${stateCode}`];
}
