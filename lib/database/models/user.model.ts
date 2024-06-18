import { Schema, Document, model, models } from "mongoose";

export interface IUser extends Document {
  _id: string;
  clerkId: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  photo: string;
  planBought: "yes" | "no";
  planType?: "builder" | "agent";
  planStartDate?: Date;
  planEndDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema<IUser> = new Schema({
  clerkId: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true, unique: true, trim: true },
  email: { type: String, required: true, unique: true },
  photo: { type: String, required: true },
  planBought: { type: String, required: true, default: "no" },
  planType: { type: String, default: null },
  planStartDate: { type: Date, default: null },
  planEndDate: { type: Date, default: null },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const User = models?.User || model('User', UserSchema)

export default User;