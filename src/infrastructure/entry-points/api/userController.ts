import {  UserEntity } from "@/domain/entities/user";
import { Request, Response, NextFunction } from "express";
import { AddUserServiceImpl } from "@/domain/use-cases/impl/add-user-service-impl";
import { Inject, Service } from "typedi";
import { GetUserServiceImpl } from "@/domain/use-cases/impl/get-user-service-impl";

@Service()
export class UserController {
  addUserService: AddUserServiceImpl;
  getUserService: GetUserServiceImpl;

  constructor(@Inject() addUserService: AddUserServiceImpl, @Inject() getUserService: GetUserServiceImpl) {
    this.addUserService = addUserService;
    this.getUserService = getUserService;
  }

   addUserController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const body = req.body;
    const response : UserEntity = await this.addUserService.addUserService(body);
    return res.send(response);
  }

  getUserController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const {user} : any = req
    const response : UserEntity = await this.getUserService.getUserByEmailService(user?.email);
    console.log('getUserController', response, user)
    return res.send(response);
  }
}
