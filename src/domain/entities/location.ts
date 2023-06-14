
export type Location = {
  country: string;
  state: string;
  city: string;
  street?: string;
}

export type TState = {
  "id": number;
  "name": string,
  "country_id": number,
  "country_code": string,
  "country_name": string,
  "state_code": string,
  "type": string,
  "latitude": string,
  "longitude": string
}

export type GetCountryByNameParams = string;
export type ICountriesResponse = Array<string>
export type IStatesResponse = Array<TState>
export type ICitiesResponse = Array<string>