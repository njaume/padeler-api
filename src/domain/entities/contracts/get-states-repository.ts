import { IStatesResponse } from "../location";


export interface IGetStatesRepository {
    getStatesByCountry: (name: string) => Promise<IStatesResponse>;
}