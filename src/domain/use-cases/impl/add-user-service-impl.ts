import { IAddUserService } from "@/domain/use-cases/user-service";

import { AddUserParams, UserEntity } from "@/domain/entities/user";
import { Inject, Service } from "typedi";
import { UserRepositoryAdapter } from "@/infrastructure/driven-adapters/adapters/orm/mongoose/user-mongoose-repository-adapter";

@Service()
export class AddUserServiceImpl implements IAddUserService {
  userRepository: UserRepositoryAdapter;

  constructor(@Inject() userRepository: UserRepositoryAdapter) {
    this.userRepository = userRepository;
  }
  async addUserService(data: AddUserParams): Promise<UserEntity> {
    return await this.userRepository.addUserRepository(data);
  }
}
