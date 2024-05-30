import { Document, Schema, model, models } from "mongoose";

export interface IProperty extends Document {
  _id: string;
  user: {
    _id: string;
    firstName: string;
    lastName: string;
  };
  title: string;
  category: "residential" | "commercial";
  builtupArea?: string;
  carpetArea?: string;
  size?: string;
  imageUrls: string[];
  price: string;
  location: string;
  propertyType:
    | "plot/land"
    | "flat"
    | "house"
    | "office"
    | "storage"
    | "industry"
    | "hospital"
    | "other";
  description: string;
  features?: string[];
  sellerPhone: string;
  createdAt: Date;
  updatedAt: Date;
}

const PropertySchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  category: {
    type: String,
    required: true,
    enum: ["residential", "commercial"],
  },
  builtupArea: { type: String },
  carpetArea: { type: String },
  size: { type: String },
  imageUrls: { type: [String], required: true },
  price: { type: String, required: true },
  location: { type: String, required: true },
  propertyType: {
    type: String,
    required: true,
    enum: [
      "plot/land",
      "flat",
      "house",
      "office",
      "storage",
      "industry",
      "hospital",
      "other",
    ],
  },
  description: { type: String, required: true },
  features: { type: [String] },
  sellerPhone: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Property = models?.Property || model("Property", PropertySchema);

export default Property;