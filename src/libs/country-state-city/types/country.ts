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
  native: string | null;
  region: string;
  regionId: string | null;
  subregion: string;
  subregionId: string | null;
  nationality: string;
  timezones: {
    zoneName: string;
    gmtOffset: number;
    gmtOffsetName: string;
    abbreviation: string;
    tzName: string;
  }[] | null;
  translations: {
    [key: string]: string | undefined;
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
