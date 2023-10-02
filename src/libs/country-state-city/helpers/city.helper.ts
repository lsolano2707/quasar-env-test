// Types
import { City, CityLite } from '../types/city';

export const getAllCities = async (): Promise<City[] | unknown> => (await import(/* @vite-ignore */ 'src/libs/country-state-city/data/cities.json')).default;

export const getAllCitiesLite = async (): Promise<CityLite[] | unknown> => (await import(/* @vite-ignore */ 'src/libs/country-state-city/data/cities-lite.json')).default;

export const getAllCitiesByCountry = async (countryCode: string): Promise<City[]> => (await import(/* @vite-ignore */ `src/libs/country-state-city/data/COUNTRIES/${countryCode}/cities.json`)).default;

export const getAllCitiesByCountryLite = async (countryCode: string): Promise<CityLite[]> => (await import(/* @vite-ignore */ `src/libs/country-state-city/data/COUNTRIES/${countryCode}/cities-lite.json`)).default;

export const getAllCitiesByState = async (countryCode: string, stateCode: string): Promise<City[]> => (await import(/* @vite-ignore */ `src/libs/country-state-city/data/COUNTRIES/${countryCode}/${stateCode}/cities.json`)).default;

export const getAllCitiesByStateLite = async (countryCode: string, stateCode: string): Promise<CityLite[]> => (await import(/* @vite-ignore */ `src/libs/country-state-city/data/COUNTRIES/${countryCode}/${stateCode}/cities-lite.json`)).default;
