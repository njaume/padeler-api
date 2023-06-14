import { Inject, Service } from "typedi";
import { ILocationService } from "../location-service";
import {
  ICitiesResponse,
  ICountriesResponse,
  IStatesResponse,
} from "@/domain/entities/location";
import { CountryRepositoryAdapter } from "@/infrastructure/driven-adapters/adapters/fileSystem/countries-fs-repository-adapter";
import { StatesHttpRepositoryAdapter } from "@/infrastructure/driven-adapters/adapters/http/states-http-repository-adapter";
import { CitiesHttpRepositoryAdapter } from "@/infrastructure/driven-adapters/adapters/http/cities-http-repository-adapter";

@Service()
export class GetLocationServiceImpl implements ILocationService {
  countryRepository: CountryRepositoryAdapter;
  stateRepository: StatesHttpRepositoryAdapter;
  cityRepository: CitiesHttpRepositoryAdapter
  constructor(
    @Inject() countryRepository: CountryRepositoryAdapter,
    @Inject() stateRepository: StatesHttpRepositoryAdapter,
    @Inject() cityRepository: CitiesHttpRepositoryAdapter
  ) {
    this.countryRepository = countryRepository;
    this.stateRepository = stateRepository;
    this.cityRepository = cityRepository
  }

  async getCountryByName(name: string): Promise<ICountriesResponse> {
    return await this.countryRepository.getCountryByNameRepository(name);
  }

  async getStateByCountry(country: string): Promise<IStatesResponse> {
    return await this.stateRepository.getStatesByCountry(country);
  }

  async getCities(state: string, country: string): Promise<ICitiesResponse> {
    return await this.cityRepository.getCities(country, state);
  }
}
