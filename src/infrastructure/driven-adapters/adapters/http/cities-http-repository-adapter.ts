import { IGetCitiesRepository } from "@/domain/entities/contracts/get-cities-repository";
import { Service } from "typedi";

const citiesJSON =
  "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/cities.json";

@Service()
export class CitiesHttpRepositoryAdapter implements IGetCitiesRepository {
  async getCities(state: string, country): Promise<any> {
    const response = await fetch(citiesJSON);
    const data = await response.json();
    const filteredData = data.filter(
      (city) => Number(city?.state_id) === Number(state)
    );
    console.log("data", country, state, filteredData);
    return filteredData;
  }
}
