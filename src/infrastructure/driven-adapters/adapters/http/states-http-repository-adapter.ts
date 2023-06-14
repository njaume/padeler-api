import { IGetStatesRepository } from "@/domain/entities/contracts/get-states-repository";
import { Service } from "typedi";

const statesJSON =
  "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/states.json";

@Service()
export class StatesHttpRepositoryAdapter implements IGetStatesRepository {
  async getStatesByCountry(country: string): Promise<any> {
    const response = await fetch(statesJSON);
    const data = await response.json();
    const filteredData = data.filter(
      (state) => state?.country_name.toLowerCase() === country.toLowerCase()
    );
    console.log("data", filteredData);
    return filteredData;
  }

}
