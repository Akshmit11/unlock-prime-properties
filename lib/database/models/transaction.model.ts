import { Schema, model, models } from "mongoose";

export interface ITransaction extends Document {
  _id: string;
  user: {
    _id: string,
    firstName: string,
    lastName: string,
  };
  planBought: "yes" | "processing";
  planType: "basic" | "pro";
  planStartDate?: Date;
  planEndDate?: Date;
  amount: String;
  paymentScreenshotUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

const TransactionSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  planBought: { type: String, required: true, enum: ["yes", "processing"] },
  planType: { type: String, required: true, enum: ["basic", "pro"] },
  planStartDate: { type: Date, default: null },
  planEndDate: { type: Date, default: null },
  amount: { type: String, required: true },
  paymentScreenshotUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Transaction = models?.Transaction || model("Transaction", TransactionSchema);

export default Transaction;