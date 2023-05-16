import { UserEntity } from '@/domain/entities/user';
import { model, Schema } from "mongoose";

const schema = new Schema<UserEntity>({
    // Implementation
    id:  { type: String },
    name: { type: String, required: true },
    email:  { type: String, required: true },
    avatar:  { type: String, required: false }
});

export const UserModelSchema = model<UserEntity>('users', schema);
