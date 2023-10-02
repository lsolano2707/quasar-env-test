export interface State {
  id: number;
  name: string;
  countryId: number;
  countryCode: string;
  countryName: string;
  stateCode: string;
  type: string | null;
  latitude: string;
  longitude: string;
}

export interface StateLite {
  id: number;
  name: string;
  stateCode: string;
  countryCode: string;
}
