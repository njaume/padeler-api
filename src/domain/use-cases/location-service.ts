import { ICountriesResponse, IStatesResponse } from "../entities/location";

export interface ILocationService {
  getCountryByName: (name: string) => Promise<ICountriesResponse>
  getStateByCountry: (country: string) => Promise<IStatesResponse>
}