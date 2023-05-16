import { IAddUserRepository } from "@/domain/entities/contracts/add-user-repository";
import {AddUserParams, UserEntity} from "@/domain/entities/user";
import {UserModelSchema} from "@/infrastructure/driven-adapters/adapters/orm/mongoose/models/user";
import { Service } from "typedi";
@Service()
export class UserRepositoryAdapter implements IAddUserRepository {
    async addUserRepository(data: AddUserParams): Promise<UserEntity> {
        return await UserModelSchema.create(data);
    }
    async getUserRepository(email: string): Promise<UserEntity> {
        return await UserModelSchema.findOne({email: email});
    }
}