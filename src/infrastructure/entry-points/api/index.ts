import Container, { Inject } from "typedi";
import { UserController } from "./userController";
import express from "express";
import { checkIfAuthenticated } from "@/middlewares/auth";
const router = express.Router()

export class UserRoutes {
  
  userRoutes = () => {
    //console.log("this.userController2", this.userController);
    const userController = Container.get(UserController);
  
    router.post("/users", userController.addUserController);
    router.get("/profile", checkIfAuthenticated ,userController.getUserController);
    return router
  }
}
