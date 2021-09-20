export interface ILocation {
  calling_code: string,
  city: string,
  connection_type: string,
  continent_code: string,
  continent_name: string,
  country_capital: string,
  country_code2: string,
  country_code3: string,
  country_flag: string,
  country_name: string,
  country_tld: string,
  currency: {
    code: string,
    name: string,
    symbol: string,
  }
  district: string,
  geoname_id: string,
  ip: string,
  is_eu: boolean,
  isp: string,
  languages: string,
  latitude: string,
  longitude: string,
  organization: string,
  state_prov: string,
}

export interface Ip {
  ip: string;
}
