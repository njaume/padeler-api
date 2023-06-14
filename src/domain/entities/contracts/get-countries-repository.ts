import { GetCountryByNameParams, ICountriesResponse } from "../location";


export interface IGetCountryRepository {
    getCountryByNameRepository: (name: GetCountryByNameParams) => Promise<ICountriesResponse>;
}