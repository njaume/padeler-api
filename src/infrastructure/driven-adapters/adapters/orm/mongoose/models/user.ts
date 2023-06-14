import { UserEntity } from "@/domain/entities/user";
import { model, Schema } from "mongoose";

const schema = new Schema<UserEntity>({
  // Implementation
  id: { type: String },
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: { type: String, required: false },
  firebaseId: { type: String, required: true },
  address: {
    type: {
      country: { type: String, required: true },
      state: { type: String, required: true },
      city: { type: String, required: true },
    },
    required: false,
  }
});

export const UserModelSchema = model<UserEntity>("users", schema);
