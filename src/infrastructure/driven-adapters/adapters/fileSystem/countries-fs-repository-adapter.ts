import { IGetCountryRepository } from "@/domain/entities/contracts/get-countries-repository";
import { GetCountryByNameParams, ICountriesResponse } from "@/domain/entities/location";
const countries = require('country-json/src/country-by-name.json')
import { Service } from "typedi";

@Service()
export class CountryRepositoryAdapter implements IGetCountryRepository {
    async getCountryByNameRepository(name: GetCountryByNameParams): Promise<ICountriesResponse> {
        
        return countries.filter((country) => {
            return country?.country?.toLowerCase()?.includes(name)})
    }
}