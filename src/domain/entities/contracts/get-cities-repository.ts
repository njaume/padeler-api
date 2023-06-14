import { ICitiesResponse } from "../location";


export interface IGetCitiesRepository {
    getCities: (country: string, state: string) => Promise<ICitiesResponse>;
}