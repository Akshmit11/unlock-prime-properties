import { Document, Schema, model, models } from "mongoose";

export interface IAgent extends Document {
  user: {
    _id: string;
    firstName: string;
    lastName: string;
    photo: string;
  };
  phone: string;
  workingLocations: string[];
  description: string;
  propertiesSold: number;
  createdAt: Date;
  updatedAt: Date;
}

const AgentSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  phone: { type: String, required: true },
  workingLocations: { type: [String], required: true },
  description: { type: String, required: true },
  propertiesSold: { type: Number, required: true, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Agent = models?.Agent || model("Agent", AgentSchema);

export default Agent;
