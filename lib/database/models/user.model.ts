import { Schema, Document, model, models } from "mongoose";

export interface IUser extends Document {
  _id: string;
  clerkId: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  photo: string;
  planBought: "yes" | "no" | "processing";
  planType?: "basic" | "pro";
  planStartDate?: Date;
  planEndDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema({
  clerkId: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  photo: { type: String, required: true },
  planBought: {
    type: String,
    required: true,
    enum: ["yes", "no", "processing"],
    default: "no"
  },
  planType: { type: String, enum: ["basic", "pro"], default: null },
  planStartDate: { type: Date, default: null },
  planEndDate: { type: Date, default: null },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const User = models?.User || model('User', UserSchema)

export default User;