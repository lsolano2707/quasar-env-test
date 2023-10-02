export interface Country {
  id: number;
  name: string;
  iso3: string;
  iso2: string;
  numericCode: string;
  phoneCode: string;
  capital: string;
  currency: string;
  currencyName: string;
  currencySymbol: string;
  tld: string;
  native: string;
  region: string;
  region_id: string;
  subregion: string;
  subregion_id: string;
  nationality: string;
  timezones: {
    zoneName: string;
    gmtOffset: number;
    gmtOffsetName: string;
    abbreviation: string;
    tzName: string;
  }[];
  translations: {
    [key: string]: string;
  };
  latitude: string;
  longitude: string;
  emoji: string;
  emojiU: string;
}

export interface CountryLite {
  id: number;
  name: string;
  iso3: string;
  iso2: string;
  emoji: string;
}
