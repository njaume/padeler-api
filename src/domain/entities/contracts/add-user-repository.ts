import { AddUserParams, UserEntity } from "../user";

export const ADD_USER_REPOSITORY = "ADD_USER_REPOSITORY"

export interface IAddUserRepository {
    addUserRepository: (data: AddUserParams) => Promise<UserEntity>;
}