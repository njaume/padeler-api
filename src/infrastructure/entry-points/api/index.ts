import Container, { Inject } from "typedi";
import { UserController } from "./userController";
import express from "express";
import { checkIfAuthenticated } from "@/middlewares/auth";
import { LocationController } from "./locationController";
const router = express.Router()

export class UserRoutes {
  
  userRoutes = () => {
    //console.log("this.userController2", this.userController);
    const userController = Container.get(UserController);
    const locationController = Container.get(LocationController);

    router.post("/users", checkIfAuthenticated, userController.addUserController);
    router.get("/profile", checkIfAuthenticated ,userController.getUserController);
    router.get("/location/countries" ,locationController.getCountryController);
    router.get("/location/states" ,locationController.getStateController);
    router.get("/location/cities" ,locationController.getCityController);
    return router
  }
}
