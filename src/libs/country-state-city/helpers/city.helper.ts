// Helpers
import { readJsonFile } from './file.helper';

// Types
import { City, CityLite } from '../types/city';

export const getAllCities = async (): Promise<City[]> => readJsonFile('cities.json');

export const getAllCitiesLite = async (): Promise<CityLite[]> => readJsonFile('cities-lite.json');

export const getAllCitiesByCountry = async (countryCode: string): Promise<City[]> => readJsonFile(`COUNTRIES/${countryCode}/cities.json`);

export const getAllCitiesByCountryLite = async (countryCode: string): Promise<CityLite[]> => readJsonFile(`COUNTRIES/${countryCode}/cities-lite.json`);

export const getAllCitiesByState = async (countryCode: string, stateCode: string): Promise<City[]> => readJsonFile(`COUNTRIES/${countryCode}/${stateCode}/cities.json`);

export const getAllCitiesByStateLite = async (countryCode: string, stateCode: string): Promise<CityLite[]> => readJsonFile(`COUNTRIES/${countryCode}/${stateCode}/cities-lite.json`);
