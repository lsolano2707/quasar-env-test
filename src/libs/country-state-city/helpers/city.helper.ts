// Helpers
import { readJsonFile } from './file.helper';

// Types
import { City, CityLite } from '../types/city';

const BASE_PATH = 'src/libs/country-state-city/data';

export const getAllCities = async (): Promise<City[]> => readJsonFile(`${BASE_PATH}/cities.json`);

export const getAllCitiesLite = async (): Promise<CityLite[]> => readJsonFile(`${BASE_PATH}/cities-lite.json`);

export const getAllCitiesByCountry = async (countryCode: string): Promise<City[]> => readJsonFile(`${BASE_PATH}/COUNTRIES/${countryCode}/cities.json`);

export const getAllCitiesByCountryLite = async (countryCode: string): Promise<CityLite[]> => readJsonFile(`${BASE_PATH}/COUNTRIES/${countryCode}/cities-lite.json`);

export const getAllCitiesByState = async (countryCode: string, stateCode: string): Promise<City[]> => readJsonFile(`${BASE_PATH}/COUNTRIES/${countryCode}/${stateCode}/cities.json`);

export const getAllCitiesByStateLite = async (countryCode: string, stateCode: string): Promise<CityLite[]> => readJsonFile(`${BASE_PATH}/COUNTRIES/${countryCode}/${stateCode}/cities-lite.json`);
