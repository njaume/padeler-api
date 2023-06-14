export type UserEntity = {
  id: string | number;
  name: string;
  email: string;
  avatar?: string;
  firebaseId: string;
  address?: UserAddress;
};

export type UserAddress = {
  country: string;
  state: string;
  city: string;
 // street: string;
}
export type AddUserParams = Omit<UserEntity, "id">;