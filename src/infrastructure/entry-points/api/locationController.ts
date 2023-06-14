import { Request, Response, NextFunction } from "express";
import { Inject, Service } from "typedi";
import { ICountriesResponse } from "@/domain/entities/location";
import { GetLocationServiceImpl } from "@/domain/use-cases/impl/get-location-service-impl";

@Service()
export class LocationController {
  getLocationService: GetLocationServiceImpl;

  constructor(@Inject() getLocationService: GetLocationServiceImpl) {
    this.getLocationService = getLocationService;
  }

  getCountryController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { name }: { name?: string } = req.query;
    console.log("name", name);
    if (!name) return res.status(400).send("Invalid Payload");
    const response: ICountriesResponse =
      await this.getLocationService.getCountryByName(name?.toLowerCase());
    return res.send(response);
  };
  getStateController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { country }: { country?: string } = req.query;
    const response = await this.getLocationService.getStateByCountry(
      country.toLowerCase()
    );
    console.log("GetStateController", response);
    return res.send(response);
  };

  getCityController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { country, state }: { country?: string; state?: string } = req.query;
    const response = await this.getLocationService.getCities(
      country?.toLowerCase(),
      state
    );
    return res.send(response);
  };
}
