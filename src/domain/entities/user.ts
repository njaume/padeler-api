export type UserEntity = {
  id: string | number;
  name: string;
  email: string;
  avatar?: string;
  firebaseId: string;
};

export type AddUserParams = Omit<UserEntity, "id">;