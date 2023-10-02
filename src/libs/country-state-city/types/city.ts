export interface City {
  id: number;
  name: string;
  stateId: number;
  stateCode: string;
  stateName: string;
  countryId: number;
  countryCode: string;
  countryName: string;
  latitude: string;
  longitude: string;
  wikiDataId: string;
}

export interface CityLite {
  id: number;
  name: string;
  stateCode: string;
  countryCode: string;
}
